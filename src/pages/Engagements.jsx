import InnerPage from '../components/InnerPage.jsx';
import { useLang } from '../i18n.jsx';

export default function Engagements() {
  const { t } = useLang();
  const e = t.engagements;

  return (
    <InnerPage title={e.title} bannerIcon="shield">
      {e.sections.map((s) => (
        <div className="engage" key={s.title}>
          <h3><span className="list-star" aria-hidden="true">*</span>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </InnerPage>
  );
}
