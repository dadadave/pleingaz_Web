import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

// Auto-scroll speed of the marquee, in px/s (matches the previous CSS keyframes).
const SPEED = 78;
// How long the marquee stays still after the visitor scrolls / drags / taps an arrow.
const IDLE_AFTER_INPUT = 3000;
// Buffer used when looping the scroll position, so the two wrap thresholds can
// never trigger each other and ping-pong.
const BUF = 1;
// Distance (px) past which a pointer drag counts as a swipe, not a click on a card.
const DRAG_SLOP = 6;
// Cards advanced per arrow click, and the duration of that move.
const NUDGE_CARDS = 2;
const NUDGE_MS = 420;

// The track holds the product list twice, so scrolling can loop forever: as soon
// as we pass the halfway mark we jump back by half a track (identical pixels, so
// the jump is invisible) — and the same in reverse when we reach the start.
function normalize(el) {
  const half = el.scrollWidth / 2;
  if (half < 10) return;
  if (el.scrollLeft >= half + BUF) el.scrollLeft -= half;
  else if (el.scrollLeft < BUF) el.scrollLeft += half;
}

// Width of one card including its right margin.
function cardStep(el) {
  const card = el.querySelector('.product-card');
  if (!card) return 256;
  return card.offsetWidth + parseFloat(getComputedStyle(card).marginRight || 0);
}

export default function Portfolio() {
  const { t } = useLang();
  const scroller = useRef(null);
  const hovering = useRef(false);
  const focused = useRef(false);
  const idleUntil = useRef(0);
  const drag = useRef(null);
  const moved = useRef(false);
  const tween = useRef(0);
  const [dragging, setDragging] = useState(false);

  const holdStill = () => {
    idleUntil.current = performance.now() + IDLE_AFTER_INPUT;
  };

  // Continuous marquee. The loop always runs — it also keeps the scroll position
  // wrapped while the visitor browses by hand — but only advances when idle.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let last = performance.now();
    let carry = 0;

    const frame = (now) => {
      const dt = Math.min(now - last, 100);
      last = now;
      const idle =
        !still && !hovering.current && !focused.current && !drag.current && now >= idleUntil.current;
      if (idle) {
        // Accumulate sub-pixel movement so the slow drift survives rounding.
        carry += (SPEED * dt) / 1000;
        const whole = Math.trunc(carry);
        if (whole) {
          carry -= whole;
          el.scrollLeft += whole;
        }
      }
      normalize(el);
      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => () => cancelAnimationFrame(tween.current), []);

  // Arrow buttons: animate the scroll ourselves in relative deltas, so the
  // loop-around jumps in `normalize` can't cancel the movement mid-flight.
  const nudge = (dir) => {
    const el = scroller.current;
    if (!el) return;
    cancelAnimationFrame(tween.current);
    holdStill();
    const distance = dir * cardStep(el) * NUDGE_CARDS;
    const start = performance.now();
    let applied = 0;
    const step = (now) => {
      const p = Math.min(1, (now - start) / NUDGE_MS);
      const eased = 1 - Math.pow(1 - p, 3);
      normalize(el);
      const target = distance * eased;
      el.scrollLeft += target - applied;
      applied = target;
      if (p < 1) tween.current = requestAnimationFrame(step);
      else holdStill();
    };
    tween.current = requestAnimationFrame(step);
  };

  // Mouse drag-to-scroll. Touch panning is left to the browser.
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    cancelAnimationFrame(tween.current);
    drag.current = { x: e.clientX, from: scroller.current.scrollLeft, captured: false };
    moved.current = false;
    setDragging(true);
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!moved.current && Math.abs(dx) <= DRAG_SLOP) return;
    // Capture only once this is a real drag: capturing on pointerdown would
    // retarget the follow-up click to the scroller, so a plain click on a card
    // would never reach its link.
    if (!d.captured) {
      d.captured = true;
      moved.current = true;
      scroller.current.setPointerCapture?.(e.pointerId);
    }
    scroller.current.scrollLeft = d.from - dx;
  };

  const endDrag = (e) => {
    const d = drag.current;
    if (!d) return;
    drag.current = null;
    setDragging(false);
    if (d.captured) scroller.current?.releasePointerCapture?.(e.pointerId);
    holdStill();
  };

  // A drag that happens to end on a card must not follow that card's link.
  const onClickCapture = (e) => {
    if (!moved.current) return;
    moved.current = false;
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-head reveal">
          <div>
            <span className="eyebrow">{t.portfolio.eyebrow}</span>
            <h2 className="section-title">{t.portfolio.title}</h2>
          </div>
          <p>{t.portfolio.intro}</p>
        </div>

        {/* Carousel the visitor can browse by hand — drag, swipe, wheel, arrow
            buttons or arrow keys — and that drifts on its own when left alone. */}
        <div className="portfolio-carousel-wrap">
          <button
            type="button"
            className="carousel-nav prev"
            aria-label={t.portfolio.prev}
            onClick={() => nudge(-1)}
          >
            <Icon name="arrow" strokeWidth={2.2} />
          </button>

          <div
            className={`portfolio-carousel${dragging ? ' is-dragging' : ''}`}
            ref={scroller}
            role="region"
            tabIndex={0}
            aria-label={t.portfolio.title}
            onMouseEnter={() => { hovering.current = true; }}
            onMouseLeave={() => { hovering.current = false; }}
            onFocus={() => { focused.current = true; }}
            onBlur={() => { focused.current = false; }}
            onWheel={holdStill}
            onTouchStart={holdStill}
            onTouchEnd={holdStill}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={onClickCapture}
          >
            <div className="portfolio-track">
              {[...t.products, ...t.products].map((p, i) => {
                const clone = i >= t.products.length;
                return (
                  <article className="product-card" key={i} aria-hidden={clone ? 'true' : undefined}>
                    {p.image ? (
                      <div className="product-photo-thumb">
                        <img src={p.image} alt={p.title} loading="lazy" draggable="false" />
                      </div>
                    ) : (
                      <div className="product-ico"><Icon name={p.icon} /></div>
                    )}
                    <h3>{p.title}</h3>
                    <p className="desc">{p.desc}</p>
                    {p.price && <span className="price">{p.price}</span>}
                    <Link
                      to={`/produit/${p.slug}`}
                      className="find-out"
                      tabIndex={clone ? -1 : undefined}
                    >
                      {t.portfolio.learnMore} <span className="plus">+</span>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="carousel-nav next"
            aria-label={t.portfolio.next}
            onClick={() => nudge(1)}
          >
            <Icon name="arrow" strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
