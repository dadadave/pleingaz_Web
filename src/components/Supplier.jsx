import { Link } from 'react-router-dom';
import { useLang } from '../i18n.jsx';

export default function Supplier() {
  const { t } = useLang();

  return (
    <section className="supplier">
      {/* Decorative white ring on the red band, with a dot sitting on its edge (SIMAM-style). */}
      <svg className="supplier-deco" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="300" cy="300" r="240" stroke="rgba(255,255,255,.5)" strokeWidth="2.5" />
        <circle cx="300" cy="300" r="300" stroke="rgba(255,255,255,.32)" strokeWidth="2.5" />
        <circle cx="470" cy="130" r="9" fill="#ffffff" />
      </svg>

      <div className="container">
        <div className="supplier-grid">
          <div className="supplier-intro reveal">
            <h2>{t.supplier.title}</h2>
            <p>{t.supplier.text}</p>
            <Link to="/apropos" className="btn btn-gold">{t.supplier.about}</Link>
          </div>
        </div>
      </div>

      <svg className="mascot" viewBox="0 0 120 150" fill="none" aria-hidden="true">
        <ellipse cx="60" cy="140" rx="34" ry="7" fill="rgba(0,0,0,.12)" />
        <use href="#flame" x="30" y="6" width="60" height="90" />
        <circle cx="52" cy="48" r="4" fill="#16375C" />
        <circle cx="70" cy="48" r="4" fill="#16375C" />
        <path d="M50 60c4 4 12 4 16 0" stroke="#16375C" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Curved separation: the white portfolio background swoops up into the red band. */}
      <svg className="supplier-divider" viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 C420,72 1020,72 1440,0 L1440,72 L0,72 Z" />
      </svg>
    </section>
  );
}
