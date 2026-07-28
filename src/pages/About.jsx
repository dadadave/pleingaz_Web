import InnerPage from '../components/InnerPage.jsx';
import { useLang } from '../i18n.jsx';

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <InnerPage title={a.title} bannerIcon="workerHat">
      {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

      <h2 className="values-title">{a.valuesTitle}</h2>
      <div className="values">
        {a.values.map((v) => (
          <div className="value" key={v.title}>
            <h3><span className="list-star" aria-hidden="true">*</span>{v.title}</h3>
            <ul>
              {v.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
