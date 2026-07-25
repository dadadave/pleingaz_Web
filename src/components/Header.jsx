import { NAV_LINKS } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Header() {
  return (
    <header className="site-header" id="top">
      <nav className="nav container">
        <a href="#top" className="brand" aria-label="PleinGaz — accueil">
          <img src="/assets/logo.png" alt="PleinGaz" className="brand-logo" />
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
              {l.caret && (
                <svg className="caret" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4z" /></svg>
              )}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <div className="lang">
            <a href="#" className="on">FR</a>
            <a href="#">EN</a>
          </div>
          <a href="#portfolio" className="btn btn-outline-gold">Devenir revendeur</a>
          <span className="nav-badge" title="Qualité certifiée" aria-label="Qualité certifiée">
            <Icon name="shieldCheck" strokeWidth={2} />
          </span>
          <button className="nav-toggle" aria-label="Menu">
            <Icon name="menu" strokeWidth={2} />
          </button>
        </div>
      </nav>
    </header>
  );
}
