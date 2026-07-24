import { FIGURES } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Figures() {
  return (
    <section className="figures-wrap">
      <div className="container">
        <div className="figures-grid">
          <div className="figures reveal">
            <span className="eyebrow">Chiffres clés</span>
            <div className="figure-list">
              {FIGURES.map((f) => (
                <div className="figure" key={f.cap}>
                  <span className="fig-ico"><Icon name={f.icon} strokeWidth={1.6} /></span>
                  <div>
                    <p className="num">{f.num}<span className="plus">{f.plus}</span></p>
                    <p className="cap">{f.cap}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="distributors reveal">
            <div className="map" aria-hidden="true">
              <svg viewBox="0 0 300 300" fill="none">
                <path
                  d="M120 20l40 6 20 18 34 8 12 24-8 26 18 20-6 30-30 18-10 30-34 6-26-20-20 4-14-26 8-30-18-22 10-28 12-30 22-32Z"
                  fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="2.5" strokeLinejoin="round"
                />
                <circle cx="150" cy="90" r="6" fill="#fff" />
                <circle cx="150" cy="90" r="11" fill="none" stroke="#fff" strokeOpacity=".5" />
                <circle cx="200" cy="150" r="6" fill="#fff" />
                <circle cx="120" cy="180" r="6" fill="#fff" />
                <circle cx="170" cy="220" r="6" fill="#fff" />
              </svg>
            </div>
            <div className="distributors-body">
              <h3>Notre réseau de distributeurs</h3>
              <p>
                PleinGaz offre à ses clients un réseau sûr et efficace, au service des régions.
                Nos équipes travaillent chaque jour pour la performance, la qualité et la responsabilité.
              </p>
              <a href="#footer" className="btn btn-white">Découvrir le réseau ›</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
