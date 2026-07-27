import { Link } from 'react-router-dom';
import { useLang } from '../i18n.jsx';

// "PleinGaz est disponible !" promo band — the brand campaign banner, shown as
// a responsive image that links through to the points-of-sale map.
export default function Promo() {
  const { t } = useLang();
  const p = t.promo;

  return (
    <section className="promo">
      <div className="container">
        <Link to="/reseau" className="promo-banner reveal" aria-label={p.eyebrow}>
          <img
            src="/images/promo-disponible.webp"
            alt="PleinGaz est disponible — Votre énergie, toujours à portée de main. Service client 680 000 075."
            loading="lazy"
            width="1456"
            height="1088"
          />
        </Link>
      </div>
    </section>
  );
}
