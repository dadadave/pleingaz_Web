import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function Portfolio() {
  const { t } = useLang();
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-head reveal">
          <div>
            <span className="eyebrow">{t.portfolio.eyebrow}</span>
            <h2 className="section-title">{t.portfolio.title}</h2>
          </div>
          <p>{t.portfolio.intro}</p>
        </div>

        <div className="product-grid">
          {t.products.map((p, i) => (
            <article className="product-card reveal" key={i}>
              <div className="product-ico"><Icon name={p.icon} /></div>
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>
              {p.price && <span className="price">{p.price}</span>}
              <a href="#" className="find-out">{t.portfolio.learnMore} <span className="plus">+</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
