import InnerPage from '../components/InnerPage.jsx';
import { Icon } from '../components/Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function Safety() {
  const { t } = useLang();
  const s = t.safety;

  return (
    <InnerPage title={s.title} bannerIcon="shieldCheck">
      <p>{s.intro}</p>

      <div className="values">
        {s.groups.map((g) => (
          <div className="value" key={g.title}>
            <h3>
              <span className="value-ico" aria-hidden="true"><Icon name={g.icon} strokeWidth={1.7} /></span>
              {g.title}
            </h3>
            <ul>
              {g.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="danger">
        <h2 className="danger-title">
          <span className="value-ico" aria-hidden="true"><Icon name="alert" strokeWidth={1.7} /></span>
          {s.dangerTitle}
        </h2>
        {s.danger.map((d) => (
          <div className="danger-block" key={d.title}>
            <h3>{d.title}</h3>
            <ul>
              {d.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
