import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="site-header" id="top">
      <nav className="nav container">
        <a href="#top" className="brand" aria-label="PleinGaz">
          <img src="/assets/logo.png" alt="PleinGaz" className="brand-logo" />
        </a>

        <div className="nav-links">
          {t.nav.map((l) => (
            <div className={`nav-item${l.mega ? ' has-mega' : ''}`} key={l.key}>
              <a href={l.href}>
                {l.label}
                {l.mega && (
                  <svg className="caret" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4z" /></svg>
                )}
              </a>

              {l.mega && (
                <div className="mega" role="menu" aria-label={l.label}>
                  <div className="mega-inner">
                    <p className="mega-blurb">{l.mega.blurb}</p>
                    <ul className="mega-links">
                      {l.mega.links.map((m) => (
                        <li key={m.label}>
                          <a href={m.href} role="menuitem">
                            <span className="dot" aria-hidden="true">›</span>{m.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mega-media">
                      <div className={`ph ${l.mega.image.ph}`} />
                      <span className="ph-icon"><Icon name={l.mega.image.icon} strokeWidth={1.4} /></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="nav-right">
          <div className="lang">
            <button
              type="button"
              className={lang === 'fr' ? 'on' : ''}
              aria-pressed={lang === 'fr'}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'on' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <a href="#portfolio" className="btn btn-outline-gold">{t.header.reseller}</a>
          <span className="nav-badge" title={t.header.certified} aria-label={t.header.certified}>
            <Icon name="shieldCheck" strokeWidth={2} />
          </span>
          <button className="nav-toggle" aria-label={t.header.menu}>
            <Icon name="menu" strokeWidth={2} />
          </button>
        </div>
      </nav>
    </header>
  );
}
