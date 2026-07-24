import { Icon } from './Icons.jsx';

const APPROACHES = [
  { bg: 'ph-green', icon: 'shield', lines: ['Approche', 'HSE'] },
  { bg: 'ph-slate', icon: 'search', lines: ['Approche', 'Qualité'] },
  { bg: 'ph-worker', icon: 'hand', lines: ['Fondation', 'PleinGaz'] },
];

export default function Approaches() {
  return (
    <section className="approaches">
      {APPROACHES.map((a) => (
        <a className="approach" href="#footer" key={a.lines.join(' ')}>
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
