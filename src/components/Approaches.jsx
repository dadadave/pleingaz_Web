import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function Approaches() {
  const { t } = useLang();
  return (
    <section className="approaches">
      {t.approaches.map((a, i) => (
        <a className="approach" href="#footer" key={i}>
          <div className={`ph ${a.bg} bg`} />
          <div className="veil" />
          <span className="ico"><Icon name={a.icon} /></span>
          <span className="txt"><b>{a.lines[0]}<br />{a.lines[1]}</b></span>
          <span className="arrow"><Icon name="arrow" strokeWidth={2} /></span>
        </a>
      ))}
    </section>
  );
}
