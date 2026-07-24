import { PRODUCTS } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-head reveal">
          <div>
            <span className="eyebrow">Notre gamme</span>
            <h2 className="section-title">Découvrez notre gamme de produits</h2>
          </div>
          <p>
            Choisir PleinGaz, c'est choisir une énergie pratique et disponible pour un confort
            maximal au quotidien. Trouvez le produit qu'il vous faut.
          </p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <article className="product-card reveal" key={p.title}>
              <div className="product-ico"><Icon name={p.icon} /></div>
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <a href="#" className="find-out">En savoir plus <span className="plus">+</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
