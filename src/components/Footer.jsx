import { useState } from 'react';
import { Icon, Social } from './Icons.jsx';
import SmartLink from './SmartLink.jsx';
import Alert from './Alert.jsx';
import { useLang } from '../i18n.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const { t } = useLang();
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ open: false });

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setAlert({
        open: true,
        type: 'error',
        title: t.newsletterAlert.errorTitle,
        text: t.newsletterAlert.errorText,
      });
      return;
    }
    setAlert({
      open: true,
      type: 'success',
      title: t.newsletterAlert.successTitle,
      text: t.newsletterAlert.successText,
    });
    setEmail('');
  };

  return (
    <footer className="footer" id="footer">
      {/* Decorative gold arc + dot, bottom-right (SIMAM-style). */}
      <svg className="footer-deco" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="600" cy="600" r="470" stroke="rgba(255,210,63,.55)" strokeWidth="2" />
        <circle cx="268" cy="268" r="11" fill="#FFD23F" />
      </svg>
      {/* Faint concentric ripples, bottom-left. */}
      <svg className="footer-ripple" viewBox="0 0 520 520" fill="none" aria-hidden="true">
        <circle cx="70" cy="470" r="150" stroke="rgba(255,255,255,.06)" strokeWidth="2" />
        <circle cx="70" cy="470" r="250" stroke="rgba(255,255,255,.06)" strokeWidth="2" />
        <circle cx="70" cy="470" r="350" stroke="rgba(255,255,255,.06)" strokeWidth="2" />
      </svg>

      <div className="container">
        <div className="footer-top">
          <SmartLink href="/" className="brand brand-mini" aria-label="PleinGaz">
            <img src="/assets/logo.png" alt="PleinGaz" className="brand-logo brand-logo--footer" />
          </SmartLink>
          <div className="footer-contact">
            <div className="fc-item">
              <span className="ico"><Icon name="phone" strokeWidth={2} /></span>
              <div><p className="lbl">{t.contact.callLabel}</p><p className="val">{t.contact.phone}</p></div>
            </div>
            <div className="fc-item">
              <span className="ico"><Icon name="mail" strokeWidth={2} /></span>
              <div><p className="lbl">{t.contact.writeLabel}</p><p className="val">{t.contact.email}</p></div>
            </div>
            <div className="fc-item">
              <span className="ico"><Icon name="mapPin" strokeWidth={2} /></span>
              <div><p className="lbl">{t.contact.findLabel}</p><p className="val">{t.contact.city}</p></div>
            </div>
            <div className="socials">
              <a href="#" aria-label="Facebook"><Social name="facebook" /></a>
              <a href="#" aria-label="Instagram"><Social name="instagram" /></a>
              <a href="#" aria-label="LinkedIn"><Social name="linkedin" /></a>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="newsletter">
            <h3>{t.footer.newsletterTitle}</h3>
            <form className="news-form" onSubmit={onSubscribe} noValidate>
              <input
                type="email"
                placeholder={t.footer.newsletterPlaceholder}
                aria-label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" aria-label={t.footer.newsletterTitle}><Icon name="send" strokeWidth={2} /></button>
            </form>
          </div>

          <div className="footer-col">
            <h4>{t.footer.aboutTitle}</h4>
            <ul>
              {t.footer.about.map((x) => (
                <li key={x.label}><SmartLink href={x.href}>{x.label}</SmartLink></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.activitiesTitle}</h4>
            <ul>
              {t.footer.activities.map((x) => (
                <li key={x.label}><SmartLink href={x.href}>{x.label}</SmartLink></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.partnersTitle}</h4>
            <div className="partner-carousel">
              <div className="partner-track">
                {[...t.footer.partners, ...t.footer.partners].map((name, i) => (
                  <div
                    className="partner-card"
                    key={i}
                    aria-hidden={i >= t.footer.partners.length ? 'true' : undefined}
                  >
                    <span className="plogo">
                      <svg width="22" height="22" viewBox="0 0 24 24" className="tri" fill="currentColor">
                        <path d="M12 3 2 20h20L12 3Z" />
                      </svg>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <p className="copy">
            <span className="footer-seal" aria-label="Qualité certifiée">
              <Icon name="shieldCheck" strokeWidth={2} />
            </span>
            {t.footer.copyright}
          </p>
          <p className="made">{t.footer.designedBy} <a href="#top" className="designer">Dadadave</a></p>
        </div>
      </div>

      <Alert
        open={alert.open}
        type={alert.type}
        title={alert.title}
        text={alert.text}
        onClose={() => setAlert((a) => ({ ...a, open: false }))}
      />
    </footer>
  );
}
