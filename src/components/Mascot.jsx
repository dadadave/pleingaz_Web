import { useState } from 'react';
import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

// Customer-service phone (also used for the WhatsApp deep link, Cameroon +237).
const PHONE = '237680000075';

// Floating "À votre service" mascot, fixed bottom-right on every page
// (SIMAM-style): the mascot stands next to an edge-anchored tab; clicking opens
// a contact panel (WhatsApp + call).
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
        <img className="mascot-fig" src="/images/mascotte.png" alt="Mascotte PleinGaz" />
      </button>
    </div>
  );
}
