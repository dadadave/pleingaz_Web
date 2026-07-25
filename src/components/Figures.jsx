import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

// Parse "120 000" / "120,000" -> 120000, "24/7" -> null (not a pure number).
function parseTarget(raw) {
  const cleaned = String(raw).replace(/[\s,]/g, '');
  return /^\d+$/.test(cleaned) ? parseInt(cleaned, 10) : null;
}

// Thousands separator used by the source value ("," for en, " " for fr,
// "" for a year like "2015" so it stays "2015", not "2 015").
function detectSep(raw) {
  if (/,/.test(raw)) return ',';
  if (/\s/.test(raw)) return ' ';
  return '';
}

function formatNum(n, sep) {
  const s = String(n);
  return sep ? s.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : s;
}

const DURATION = 900;
const staticMode =
  typeof window !== 'undefined' && new URLSearchParams(location.search).has('static');

export default function Figures() {
  const { t } = useLang();
  const list = t.figures.list;

  // Precompute animation targets for the active language's figures.
  const targets = list.map((f) => ({
    target: parseTarget(f.num),
    sep: detectSep(f.num),
    raw: f.num,
  }));

  const supportsIO =
    typeof window !== 'undefined' && 'IntersectionObserver' in window && !staticMode;

  // Numeric figures start at 0 and count up; everything else shows as-is.
  const [display, setDisplay] = useState(() =>
    targets.map((m) => (supportsIO && m.target != null ? formatNum(0, m.sep) : m.raw))
  );

  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!supportsIO) return;
    // Language changed after the count-up already played: just show the
    // correctly-formatted final numbers for the new language.
    if (started.current) {
      setDisplay(targets.map((m) => m.raw));
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / DURATION);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        setDisplay(
          targets.map((m) =>
            m.target == null ? m.raw : formatNum(Math.round(m.target * eased), m.sep)
          )
        );
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            io.disconnect();
            run();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // Re-run if the language (and thus the figures) changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <section className="figures-wrap">
      <div className="container">
        <div className="figures-grid">
          <div className="figures reveal">
            <span className="eyebrow">{t.figures.eyebrow}</span>
            <div className="figure-list" ref={ref}>
              {list.map((f, i) => (
                <div className="figure" key={i}>
                  <span className="fig-ico"><Icon name={f.icon} strokeWidth={1.6} /></span>
                  <div>
                    <p className="num">{display[i]}<span className="plus">{f.plus}</span></p>
                    <p className="cap">{f.cap}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="distributors reveal">
            <div className="map" aria-hidden="true">
              <svg viewBox="0 0 207 300" fill="none">
                <path
                  d="M124.7 280L121.5 278.6L106.1 282L90.4 278.5L78.1 280.2L36 279.6L39.8 259.2L29.7 242.1L17.9 237.7L12.6 226.1L6 222.4L6.3 215.2L13 196.9L25.3 172L32.7 171.7L48.2 156.6L58 156.2L72.5 166.8L90.3 158.1L92.7 147.3L98.5 136.9L102.5 123.8L116.3 113.2L121.6 95L127 89.3L130.7 75.8L137.5 59.3L159.3 39.3L160.7 30.7L163.5 26L153.3 15.7L154.1 7.5L161.4 6L171.7 22.6L173.4 39.7L172.5 56.9L186.6 80.4L172.1 80.2L164.8 82L153 79.4L147.4 91.6L162.7 106.7L173.9 111.1L177.6 121.8L185.7 139.7L181.7 146.7L168.7 172.9L162.5 177.6L160.5 197.7L163 208.5L161 216.3L173.2 229.8L175.4 239.1L184.9 252.4L196.8 260.7L197.9 272.5L200.7 280L198.8 294L178.2 287.9L157.3 281.1L124.7 280Z"
                  fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.85)" strokeWidth="2" strokeLinejoin="round"
                />
                {/* Yaoundé (capital) with a pulse ring */}
                <circle cx="84" cy="239" r="5" fill="#fff" />
                <circle cx="84" cy="239" r="10" fill="none" stroke="#fff" strokeOpacity=".5" />
                <circle cx="39" cy="234" r="5" fill="#fff" />
                <circle cx="49" cy="184" r="5" fill="#fff" />
                <circle cx="138" cy="149" r="5" fill="#fff" />
                <circle cx="133" cy="98" r="5" fill="#fff" />
                <circle cx="157" cy="65" r="5" fill="#fff" />
                <circle cx="140" cy="220" r="5" fill="#fff" />
              </svg>
            </div>
            <div className="distributors-body">
              <h3>{t.distributors.title}</h3>
              <p>{t.distributors.text}</p>
              <a href="#footer" className="btn btn-white">{t.distributors.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
