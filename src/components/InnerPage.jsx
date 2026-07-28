import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import Portfolio from './Portfolio.jsx';
import Approaches from './Approaches.jsx';
import { useLang } from '../i18n.jsx';
import { useReveal } from '../useReveal.js';

// Shared layout for the inner pages (About, History, Engagements, Product):
// banner + title/breadcrumb + body slot + sidebar, then the reused product
// portfolio and approaches sections. `sidebar` defaults to the "Discover
// PleinGaz" menu; pages can pass their own { title, links }.
export default function InnerPage({ title, bannerIcon = 'workerHat', bannerPh = 'ph-worker', sidebar, aside, crumbParent, wide = false, children }) {
  const { t } = useLang();
  const a = t.about;
  const side = sidebar || { title: a.sidebarTitle, links: a.sidebar };
  const parent = crumbParent || side.title;
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <main className="page">
      <div className="page-banner">
        <div className={`ph ${bannerPh}`} />
        <div className="page-banner-veil" />
        <span className="page-banner-ico" aria-hidden="true">
          <Icon name={bannerIcon} strokeWidth={1.4} />
        </span>
      </div>

      <div className="container">
        <div className="page-head reveal">
          <h1>{title}</h1>
          <nav className="crumb" aria-label="breadcrumb">
            <Link to="/">{a.home}</Link>
            <span>›</span>
            <span>{parent}</span>
            <span>›</span>
            <span className="on">{title}</span>
          </nav>
        </div>

        {wide ? (
          <div className="page-wide reveal">{children}</div>
        ) : (
          <div className="page-grid">
            <article className="page-body reveal">{children}</article>

            <aside className="page-side reveal">
              {aside || (
                <div className="side-card">
                  <h4>{side.title}</h4>
                  <ul>
                    {side.links.map((s) => (
                      <li key={s.label}>
                        <Link to={s.href} className={pathname === s.href ? 'on' : ''}>
                          <span className="dot" aria-hidden="true">›</span>{s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <a href="/#footer" className="side-btn">
                {a.quote}<span className="ico"><Icon name="mail" strokeWidth={2} /></span>
              </a>
              <a href="/#footer" className="side-btn">
                {a.pos}<span className="ico"><Icon name="mapPin" strokeWidth={2} /></span>
              </a>
            </aside>
          </div>
        )}
      </div>

      {/* Curved (not straight) transition into the grey portfolio section. */}
      <div className="inner-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C420,60 1020,60 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <Portfolio />
      <Approaches />
    </main>
  );
}
