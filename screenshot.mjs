// screenshot.mjs — true full-page screenshots via the Chrome DevTools Protocol.
// Usage: node screenshot.mjs http://localhost:3000 [label] [--mobile]
// Saves to "./temporary screenshots/screenshot-N[-label].png" (auto-incremented).
import { spawn } from 'node:child_process';
import { readdirSync, mkdirSync, existsSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHROME =
  process.env.CHROME_BIN ||
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const OUT_DIR = fileURLToPath(new URL('./temporary screenshots/', import.meta.url));

const args = process.argv.slice(2);
const url = args.find((a) => a.startsWith('http')) || 'http://localhost:3000';
const mobile = args.includes('--mobile');
const label = args.find((a) => !a.startsWith('http') && !a.startsWith('--'));

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
const nums = readdirSync(OUT_DIR)
  .map((f) => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map((m) => Number(m[1]));
const next = (nums.length ? Math.max(...nums) : 0) + 1;
const outFile = `${OUT_DIR}screenshot-${next}${label ? `-${label}` : ''}.png`;

const width = mobile ? 390 : 1440;
const port = 9200 + (next % 300);
const userDir = join(tmpdir(), `pg-chrome-${next}`);

const chrome = spawn(CHROME, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--hide-scrollbars',
  '--disable-dev-shm-usage',
  '--disable-extensions',
  `--user-data-dir=${userDir}`,
  `--remote-debugging-port=${port}`,
  'about:blank',
]);

const wsEndpoint = await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('timeout waiting for DevTools')), 15000);
  let buf = '';
  chrome.stderr.on('data', (d) => {
    buf += d;
    const m = buf.match(/ws:\/\/[^\s]+/);
    if (m) { clearTimeout(t); resolve(m[0]); }
  });
});

const ws = new WebSocket(wsEndpoint);
await new Promise((r) => (ws.onopen = r));

let msgId = 0;
const pending = new Map();
const onEvent = {};
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
  } else if (msg.method && onEvent[msg.method]) {
    onEvent[msg.method](msg.params);
  }
};
const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const id = ++msgId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });

// Open a page target and attach a flat session to it.
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });

await send('Page.enable', {}, sessionId);
await send('Emulation.setDeviceMetricsOverride', {
  width, height: 900, deviceScaleFactor: 1, mobile,
}, sessionId);

const loaded = new Promise((r) => (onEvent['Page.loadEventFired'] = r));
await send('Page.navigate', { url }, sessionId);
await loaded;
await new Promise((r) => setTimeout(r, 1200)); // let fonts + intro animations settle

const { cssContentSize } = await send('Page.getLayoutMetrics', {}, sessionId);
const height = Math.ceil(cssContentSize.height);

const { data } = await send('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: true,
  clip: { x: 0, y: 0, width, height, scale: 1 },
}, sessionId);

writeFileSync(outFile, Buffer.from(data, 'base64'));
console.log(`Saved → ${outFile}  (${width}x${height})`);

ws.close();
chrome.kill();
try { rmSync(userDir, { recursive: true, force: true }); } catch {}
process.exit(0);
