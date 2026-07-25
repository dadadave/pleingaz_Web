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
              <svg viewBox="0 0 300 300" fill="none">
                <path
                  d="M120 20l40 6 20 18 34 8 12 24-8 26 18 20-6 30-30 18-10 30-34 6-26-20-20 4-14-26 8-30-18-22 10-28 12-30 22-32Z"
                  fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="2.5" strokeLinejoin="round"
                />
                <circle cx="150" cy="90" r="6" fill="#fff" />
                <circle cx="150" cy="90" r="11" fill="none" stroke="#fff" strokeOpacity=".5" />
                <circle cx="200" cy="150" r="6" fill="#fff" />
                <circle cx="120" cy="180" r="6" fill="#fff" />
                <circle cx="170" cy="220" r="6" fill="#fff" />
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
