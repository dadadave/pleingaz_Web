import { Icon } from './Icons.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-tagline reveal">
          <p className="t1">PleinGaz.</p>
          <p className="t2">L'énergie pour tous.</p>
        </div>

        <div className="hero-slide reveal">
          <div className="ph ph-slate photo-cyl" />
          <div className="ph-icon" aria-hidden="true">
            <Icon name="cylinderBig" strokeWidth={1.5} />
          </div>
          <div className="veil" />
          <div className="slide-body">
            <h2>Faire de la sécurité une priorité absolue</h2>
            <p>
              PleinGaz s'engage à appliquer et à contrôler des règles de sécurité strictes,
              conformes aux normes internationales, à chaque étape de la chaîne.
            </p>
            <div className="slide-dots" aria-hidden="true">
              <span className="on" /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
