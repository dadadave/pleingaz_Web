import InnerPage from '../components/InnerPage.jsx';
import { Icon } from '../components/Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function Engagements() {
  const { t } = useLang();
  const e = t.engagements;

  return (
    <InnerPage title={e.title} bannerIcon="shield">
      {e.why && (
        <>
          <h2 className="values-title">{e.whyTitle}</h2>
          <p>{e.whyIntro}</p>
          <div className="why-grid">
            {e.why.map((w) => (
              <div className="why-card" key={w.title}>
                <span className="why-ico"><Icon name={w.icon} strokeWidth={1.6} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {e.sections.map((s) => (
        <div className="engage" key={s.title}>
          <h3><span className="list-star" aria-hidden="true">*</span>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </InnerPage>
  );
}
