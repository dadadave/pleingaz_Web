import { Link } from 'react-router-dom';
import { Icon, Flame } from '../components/Icons.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Approaches from '../components/Approaches.jsx';
import { useLang } from '../i18n.jsx';
import { useReveal } from '../useReveal.js';

export default function About() {
  const { t } = useLang();
  const a = t.about;
  useReveal('about');

  return (
    <main className="page">
      {/* Banner (photo space) */}
      <div className="page-banner">
        <div className="ph ph-worker" />
        <div className="page-banner-veil" />
        <span className="page-banner-ico" aria-hidden="true"><Icon name="workerHat" strokeWidth={1.4} /></span>
      </div>

      <div className="container">
        <div className="page-head reveal">
          <h1>{a.title}</h1>
          <nav className="crumb" aria-label="breadcrumb">
            <Link to="/">{a.home}</Link>
            <span>›</span>
            <span>{a.sidebarTitle}</span>
            <span>›</span>
            <span className="on">{a.title}</span>
          </nav>
        </div>

        <div className="page-grid">
          <article className="page-body reveal">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 className="values-title">{a.valuesTitle}</h2>
            <div className="values">
              {a.values.map((v) => (
                <div className="value" key={v.title}>
                  <h3><span className="flame-bullet" aria-hidden="true"><Flame /></span>{v.title}</h3>
                  <ul>
                    {v.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <aside className="page-side reveal">
            <div className="side-card">
              <h4>{a.sidebarTitle}</h4>
              <ul>
                {a.sidebar.map((s, i) => (
                  <li key={s.label}>
                    <Link to={s.href} className={i === 0 ? 'on' : ''}>
                      <span className="dot" aria-hidden="true">›</span>{s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <a href="/#footer" className="side-btn">
              {a.quote}<span className="ico"><Icon name="mail" strokeWidth={2} /></span>
            </a>
            <a href="/#footer" className="side-btn">
              {a.pos}<span className="ico"><Icon name="mapPin" strokeWidth={2} /></span>
            </a>
          </aside>
        </div>
      </div>

      {/* Reused home sections at the bottom, like SIMAM's inner pages. */}
      <Portfolio />
      <Approaches />
    </main>
  );
}
