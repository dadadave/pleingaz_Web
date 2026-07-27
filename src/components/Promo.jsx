import { Link } from 'react-router-dom';
import { Icon, Flame } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

// "PleinGaz est disponible !" promo band — inspired by the brand campaign
// banner: headline + tagline, four trust badges, and a customer-service bar.
export default function Promo() {
  const { t } = useLang();
  const p = t.promo;
  const tel = p.servicePhone.replace(/\s/g, '');

  return (
    <section className="promo">
      {/* Decorative rings echoing the other red bands. */}
      <svg className="promo-deco" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="300" cy="300" r="240" stroke="rgba(255,255,255,.28)" strokeWidth="2.5" />
        <circle cx="300" cy="300" r="300" stroke="rgba(255,255,255,.18)" strokeWidth="2.5" />
        <circle cx="470" cy="150" r="8" fill="#ffffff" />
      </svg>

      <div className="container promo-inner">
        <div className="promo-head reveal">
          <span className="promo-eyebrow"><Flame /> {p.eyebrow}</span>
          <h2>{p.title}</h2>
          <p>{p.text}</p>
          <Link to="/reseau" className="btn btn-white">{p.cta}</Link>
        </div>

        <ul className="promo-features reveal">
          {p.features.map((f) => (
            <li key={f.label}>
              <span className="promo-ico"><Icon name={f.icon} strokeWidth={1.8} /></span>
              <span className="promo-feat-label">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="promo-service reveal">
        <div className="container promo-service-inner">
          <a className="promo-service-num" href={`tel:${tel}`}>
            <span className="promo-service-ico" aria-hidden="true"><Icon name="phone" strokeWidth={2} /></span>
            <span>
              <span className="promo-service-label">{p.serviceLabel}</span>
              <strong>{p.servicePhone}</strong>
            </span>
          </a>
          <p className="promo-service-tag">{p.serviceTag}</p>
        </div>
      </div>
    </section>
  );
}
