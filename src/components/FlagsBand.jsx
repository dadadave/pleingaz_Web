import { useLang } from '../i18n.jsx';

// Full-width brand-presence band using the PleinGaz event flags photo.
export default function FlagsBand() {
  const { t } = useLang();
  const f = t.flags;
  return (
    <section className="flags-band">
      <img src="/images/drapeaux.webp" alt="Drapeaux PleinGaz lors d’un événement sportif" loading="lazy" />
      <div className="flags-band-veil" aria-hidden="true" />
      <div className="flags-band-copy">
        <div className="container reveal">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2>{f.title}</h2>
          <p>{f.text}</p>
        </div>
      </div>
    </section>
  );
}
