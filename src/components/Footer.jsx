import { useState } from 'react';
import { FOOTER_ABOUT, FOOTER_ACTIVITIES, CONTACT } from '../data.js';
import { Icon, Social, Wordmark } from './Icons.jsx';
import Alert from './Alert.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ open: false });

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setAlert({
        open: true,
        type: 'error',
        title: 'Oups !',
        text: 'Veuillez saisir une adresse e-mail valide.',
      });
      return;
    }
    setAlert({
      open: true,
      type: 'success',
      title: 'Merci !',
      text: 'Votre inscription à la newsletter est bien enregistrée.',
    });
    setEmail('');
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#top" className="brand brand-mini" aria-label="PleinGaz">
            <Wordmark color="#fff" />
          </a>
          <div className="footer-contact">
            <div className="fc-item">
              <span className="ico"><Icon name="phone" strokeWidth={2} /></span>
              <div><p className="lbl">Appelez-nous</p><p className="val">{CONTACT.phone}</p></div>
            </div>
            <div className="fc-item">
              <span className="ico"><Icon name="mail" strokeWidth={2} /></span>
              <div><p className="lbl">Écrivez-nous</p><p className="val">{CONTACT.email}</p></div>
            </div>
            <div className="fc-item">
              <span className="ico"><Icon name="mapPin" strokeWidth={2} /></span>
              <div><p className="lbl">Nous trouver</p><p className="val">{CONTACT.city}</p></div>
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
            <h3>Vous souhaitez recevoir nos actualités ?</h3>
            <form className="news-form" onSubmit={onSubscribe} noValidate>
              <input
                type="email"
                placeholder="Saisissez votre adresse e-mail"
                aria-label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" aria-label="S'inscrire"><Icon name="send" strokeWidth={2} /></button>
            </form>
          </div>

          <div className="footer-col">
            <h4>À propos</h4>
            <ul>
              {FOOTER_ABOUT.map((x) => <li key={x}><a href="#top">{x}</a></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Activités</h4>
            <ul>
              {FOOTER_ACTIVITIES.map((x) => <li key={x}><a href="#portfolio">{x}</a></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Nos partenaires</h4>
            <div className="partner-card">
              <span className="plogo">
                <svg width="22" height="22" viewBox="0 0 24 24" className="tri" fill="currentColor">
                  <path d="M12 3 2 20h20L12 3Z" />
                </svg>
                AfriqGaz
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <p>© 2026 PleinGaz — Cameroun. Tous droits réservés.</p>
          <p className="made">Bouteilles toujours pleines · <b>PleinGaz</b></p>
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
