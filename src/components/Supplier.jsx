import { Icon } from './Icons.jsx';

const CHOICES = [
  { label: 'Particulier', ph: 'ph-warm', icon: 'person' },
  { label: 'Professionnel', ph: 'ph-worker', icon: 'workerHat' },
];

export default function Supplier() {
  return (
    <section className="supplier">
      <div className="container">
        <div className="supplier-grid">
          <div className="supplier-intro reveal">
            <h2>Votre fournisseur d'énergie au Cameroun</h2>
            <p>
              Que vous soyez un particulier, un professionnel ou un acteur du secteur public,
              retrouvez toute notre gamme de produits.
            </p>
            <a href="#footer" className="btn btn-gold">À propos ›</a>
          </div>

          <div className="choice-cards reveal">
            {CHOICES.map((c) => (
              <article className="choice-card" key={c.label}>
                <div className="thumb">
                  <div className={`ph ${c.ph}`} />
                  <div className="ph-icon"><Icon name={c.icon} strokeWidth={1.5} /></div>
                </div>
                <div className="choice-foot">
                  <span className="label">Je suis un<b>{c.label}</b></span>
                  <a href="#portfolio" className="choice-arrow" aria-label={c.label}>
                    <Icon name="arrow" strokeWidth={2.4} />
                  </a>
                </div>
              </article>
            ))}
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
    </section>
  );
}
