import { useState } from 'react';
import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

// Customer-service phone (also used for the WhatsApp deep link, Cameroon +237).
const PHONE = '237680000075';

// Floating "À votre service" mascot, fixed bottom-right on every page
// (SIMAM-style). Clicking it opens a small contact panel (WhatsApp + call).
export default function Mascot() {
  const { t } = useLang();
  const m = t.mascot;
  const [open, setOpen] = useState(false);

  return (
    <div className="mascot-widget">
      {open && (
        <div className="mascot-panel" role="dialog" aria-label={m.title}>
          <button
            className="mascot-panel-close"
            onClick={() => setOpen(false)}
            aria-label={m.close}
            type="button"
          >
            <Icon name="close" strokeWidth={2} />
          </button>
          <h4>{m.title}</h4>
          <a
            className="mascot-btn mascot-btn-wa"
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mascot-btn-ico"><Icon name="whatsapp" /></span>
            {m.whatsapp}
          </a>
          <a className="mascot-btn" href={`tel:+${PHONE}`}>
            <span className="mascot-btn-ico"><Icon name="phone" strokeWidth={2} /></span>
            {m.call}
          </a>
        </div>
      )}

      <button
        className={`mascot-toggle${open ? ' is-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={m.label}
        type="button"
      >
        {/* Placeholder flame mascot — swapped for the real PleinGaz mascot image. */}
        <svg className="mascot-fig" viewBox="0 0 120 150" fill="none" aria-hidden="true">
          <ellipse cx="60" cy="141" rx="28" ry="6" fill="rgba(0,0,0,.16)" />
          <use href="#flame" x="30" y="4" width="60" height="92" />
          <circle cx="52" cy="46" r="4" fill="#16375C" />
          <circle cx="70" cy="46" r="4" fill="#16375C" />
          <path d="M50 58c4 4 12 4 16 0" stroke="#16375C" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="mascot-label">{m.label}</span>
      </button>
    </div>
  );
}
