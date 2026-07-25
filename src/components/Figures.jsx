import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function Figures() {
  const { t } = useLang();
  return (
    <section className="figures-wrap">
      <div className="container">
        <div className="figures-grid">
          <div className="figures reveal">
            <span className="eyebrow">{t.figures.eyebrow}</span>
            <div className="figure-list">
              {t.figures.list.map((f, i) => (
                <div className="figure" key={i}>
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
              <h3>{t.distributors.title}</h3>
              <p>{t.distributors.text}</p>
              <a href="#footer" className="btn btn-white">{t.distributors.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
