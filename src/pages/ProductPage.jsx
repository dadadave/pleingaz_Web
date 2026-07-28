import { useParams, Navigate } from 'react-router-dom';
import { Icon, Flame } from '../components/Icons.jsx';
import InnerPage from '../components/InnerPage.jsx';
import { useLang } from '../i18n.jsx';

// Product detail page for a single "Nos activités" item. The slug from the URL
// (/produit/:slug) is matched against the catalog; the sidebar shows a promo
// card ("Ce produit vous intéresse ?") instead of the default menu links.
export default function ProductPage() {
  const { slug } = useParams();
  const { t } = useLang();
  const product = t.catalog.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/" replace />;

  const promo = t.catalogPromo;

  const aside = (
    <div className="side-card side-promo">
      <span className="side-promo-ico" aria-hidden="true"><Flame /></span>
      <h4>{promo.title}</h4>
      <p>{promo.text}</p>
    </div>
  );

  return (
    <InnerPage
      title={product.title}
      crumbParent={t.catalogTitle}
      bannerIcon={product.icon}
      bannerPh={product.ph}
      aside={aside}
    >
      <div className="product-lead">
        {product.image ? (
          <div className="product-photo has-img">
            <img src={product.image} alt={product.title} />
          </div>
        ) : (
          <div className={`product-photo ph ${product.ph}`}>
            <span className="product-photo-ico" aria-hidden="true">
              <Icon name={product.icon} strokeWidth={1.4} />
            </span>
          </div>
        )}
        <div className="product-copy">
          {product.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>

      <h2 className="product-features-title">{promo.features}</h2>
      <ul className="product-features">
        {product.features.map((f) => (
          <li key={f}>
            <span className="flame-bullet" aria-hidden="true"><Flame /></span>{f}
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
