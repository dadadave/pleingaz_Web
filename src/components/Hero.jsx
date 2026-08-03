import { useEffect, useState } from 'react';
import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

// Language-neutral look for each slide (background photo, or fallback colour +
// watermark icon when no photo is set yet).
const SLIDE_STYLE = [
  { bg: 'ph-slate', icon: 'cylinderBig', image: '/images/hero/hero-logo.jpg' },
  { bg: 'ph-blue', icon: 'phone', image: '/images/hero/hero-service.jpg' },
  { bg: 'ph-worker', icon: 'team', image: '/images/hero/hero-logo.jpg' },
  { bg: 'ph-crowd', icon: 'shieldCheck', image: '/images/hero/hero-logo.jpg' },
];

const INTERVAL = 5000;

export default function Hero() {
  const { t } = useLang();
  const slides = t.hero.slides;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance; the timer resets whenever `active` changes (incl. manual clicks).
  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(id);
  }, [active, paused, slides.length]);

  // Keep the index valid if the slide list length ever changes.
  useEffect(() => {
    if (active >= slides.length) setActive(0);
  }, [slides.length, active]);

  return (
    <section className="hero">
      {/* Decorative gold arc with a dot riding the curve, top-right
          (matches the footer / SIMAM motif). */}
      <svg className="hero-deco" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="600" cy="0" r="470" stroke="rgba(255,210,63,.55)" strokeWidth="2" />
        <circle cx="151" cy="103" r="11" fill="#FFD23F" />
      </svg>

      <div className="container">
        <div className="hero-tagline reveal">
          <p className="t1">{t.hero.brand}</p>
          <p className="t2">{t.hero.tagline}</p>
        </div>

        <div
          className="hero-slide reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((s, i) => {
            const style = SLIDE_STYLE[i % SLIDE_STYLE.length];
            return (
              <div
                className={`hero-pane${i === active ? ' on' : ''}`}
                key={i}
                aria-hidden={i !== active}
              >
                <div className={`ph ${style.bg}`} />
                {style.image ? (
                  <img className="hero-photo" src={style.image} alt="" aria-hidden="true" />
                ) : (
                  <div className="ph-icon" aria-hidden="true">
                    <Icon name={style.icon} strokeWidth={1.5} />
                  </div>
                )}
                <div className="veil" />
                <div className="slide-body">
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </div>
              </div>
            );
          })}

          <div className="slide-dots">
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                className={i === active ? 'on' : ''}
                aria-label={`Slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
