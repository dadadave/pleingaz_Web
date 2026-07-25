import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-tagline reveal">
          <p className="t1">{t.hero.brand}</p>
          <p className="t2">{t.hero.tagline}</p>
        </div>

        <div className="hero-slide reveal">
          <div className="ph ph-slate photo-cyl" />
          <div className="ph-icon" aria-hidden="true">
            <Icon name="cylinderBig" strokeWidth={1.5} />
          </div>
          <div className="veil" />
          <div className="slide-body">
            <h2>{t.hero.slideTitle}</h2>
            <p>{t.hero.slideText}</p>
            <div className="slide-dots" aria-hidden="true">
              <span className="on" /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
