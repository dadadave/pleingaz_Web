import InnerPage from '../components/InnerPage.jsx';
import { useLang } from '../i18n.jsx';

export default function History() {
  const { t } = useLang();
  const h = t.history;

  return (
    <InnerPage title={h.title} bannerIcon="cylinderBig">
      <div className="timeline">
        {h.timeline.map((row) => (
          <div className="tl-row" key={row.year}>
            <div className="tl-year">{row.year}</div>
            <ul className="tl-events">
              {row.events.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
