import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import SmartLink from './SmartLink.jsx';
import { useLang } from '../i18n.jsx';

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <nav className="nav container">
        <Link to="/" className="brand" aria-label="PleinGaz" onClick={closeMenu}>
          <img src="/assets/logo.png" alt="PleinGaz" className="brand-logo" />
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-home" aria-label={t.header.home}>
            <Icon name="home" strokeWidth={2} />
          </Link>
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
                          <SmartLink href={m.href} role="menuitem">
                            <span className="dot" aria-hidden="true">›</span>{m.label}
                          </SmartLink>
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
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            aria-label={t.header.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile menu (shown on small screens when the hamburger is toggled). */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="container">
          <ul className="mm-links">
            {t.nav.map((l) => (
              <li key={l.key}>
                <a href={l.href} onClick={closeMenu}>{l.label}</a>
                {l.mega && (
                  <ul className="mm-sub">
                    {l.mega.links.map((m) => (
                      <li key={m.label}>
                        <SmartLink href={m.href} onClick={closeMenu}>
                          <span className="dot" aria-hidden="true">›</span>{m.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mm-foot">
            <div className="lang">
              <button type="button" className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>FR</button>
              <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
            </div>
            <a href="#portfolio" className="btn btn-outline-gold" onClick={closeMenu}>{t.header.reseller}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
