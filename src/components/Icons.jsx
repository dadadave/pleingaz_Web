// Reusable inline SVG icons + brand flame. Stroke icons inherit currentColor.

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Icon = ({ name, ...rest }) => {
  const paths = {
    bottle: (<><rect x="7" y="8" width="10" height="14" rx="3" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>),
    canister: (<><path d="M6 10h12l-1.2 9a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8Z" /><path d="M9 10V7a3 3 0 0 1 6 0v3" /></>),
    drop: (<path d="M12 3s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11Z" />),
    wrench: (<><path d="M14 4h6v6" /><path d="M10 20H4v-6" /><path d="M20 4 4 20" /><circle cx="7" cy="7" r="3" /></>),
    factory: (<><path d="M3 21V8l7-4 7 4v13" /><path d="M9 21v-6h4v6" /><path d="M17 12h4v9" /></>),
    shop: (<><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9h16v11H4z" /><path d="M9 20v-6h6v6" /></>),
    team: (<><circle cx="9" cy="8" r="3" /><path d="M3 21a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 21a5 5 0 0 1 5-5" /></>),
    pin: (<><path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10Z" /><circle cx="12" cy="11" r="2.5" /></>),
    person: (<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>),
    building: (<><path d="M3 21V8l7-4 7 4v13" /><path d="M9 21v-6h4v6" /></>),
    shield: (<path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" />),
    shieldCheck: (<><path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></>),
    search: (<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>),
    hand: (<><path d="M12 11a4 4 0 1 0-4-4" /><path d="M12 11v10" /><path d="M8 21h8" /><path d="M5 8c0 4 3 7 7 7s7-3 7-7" /></>),
    arrow: (<path d="M5 12h14M13 6l6 6-6 6" />),
    phone: (<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />),
    mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
    send: (<><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4Z" /></>),
    menu: (<path d="M3 6h18M3 12h18M3 18h18" />),
    close: (<path d="M6 6l12 12M18 6 6 18" />),
    home: (<><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /></>),
    play: (<path d="M8 5v14l11-7z" />),
    cylinderBig: (<><rect x="8" y="9" width="8" height="13" rx="3" /><path d="M10 9V6a2 2 0 0 1 4 0v3" /></>),
    workerHat: (<><path d="M4 10a8 8 0 0 1 16 0" /><path d="M3 10h18v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M12 2v2" /></>),
    stove: (<><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>),
    mapPin: (<><path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10Z" /><circle cx="12" cy="11" r="2.5" /></>),
    whatsapp: (<><path d="M20.5 3.5A11 11 0 0 0 3.2 16.8L2 22l5.3-1.4A11 11 0 1 0 20.5 3.5Z" /><path d="M8.5 7.5c.3-.6.6-.6.9-.6h.6c.2 0 .5 0 .7.6l.9 2c.1.3.1.5 0 .7l-.5.8c-.1.2-.2.4 0 .7a7 7 0 0 0 3 2.9c.3.2.5.1.7 0l.8-.8c.2-.2.4-.2.7-.1l2 .9c.3.1.5.3.5.5s0 1.2-.4 1.8c-.4.6-1.6 1.2-2.3 1.2a8.5 8.5 0 0 1-8-6.4c-.2-.9 0-2 .5-2.8Z" /></>),
    clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
    gasBottle: (<><path d="M8 12a4 4 0 0 1 8 0v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" /><path d="M10.5 8.2V6.5a1.5 1.5 0 0 1 3 0v1.7" /><path d="M10.5 4.5h3" /><path d="M8 14.5h8" /></>),
    house: (<><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>),
    headset: (<><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6.5" rx="1.6" /><rect x="17" y="13" width="4" height="6.5" rx="1.6" /><path d="M20 19.5a3 3 0 0 1-3 3h-2.5" /></>),
  };
  const fillIcons = { play: true };
  return (
    <svg viewBox="0 0 24 24" {...(fillIcons[name] ? { fill: 'currentColor' } : S)} {...rest}>
      {paths[name]}
    </svg>
  );
};

export const Social = ({ name }) => {
  const paths = {
    facebook: <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z" />,
    linkedin: <path d="M6.5 8A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3ZM5 10h3v9H5zm5 0h3v1.3c.5-.8 1.6-1.5 2.9-1.5 2.4 0 3.1 1.5 3.1 3.7V19h-3v-4.5c0-1.1-.4-1.8-1.4-1.8-1 0-1.6.7-1.6 1.8V19h-3z" />,
  };
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return <svg viewBox="0 0 24 24" fill="currentColor">{paths[name]}</svg>;
};

export const FlameDefs = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <defs>
      <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFD23F" />
        <stop offset="0.5" stopColor="#F7941E" />
        <stop offset="1" stopColor="#F26522" />
      </linearGradient>
      <symbol id="flame" viewBox="0 0 40 60">
        <path d="M20 1c2 10-4 16-8 22-2 3-4 7-4 12a12 12 0 0 0 24 0c0-6-3-10-6-15 0 3-1 5-3 6 3-9-1-18-3-25Z" fill="url(#flameGrad)" />
        <path d="M20 27c1 5-2 8-4 11-1 2-2 4-2 7a6 6 0 0 0 12 0c0-4-2-6-4-9 0 2-1 3-2 3 2-4 1-8 0-12Z" fill="#FFF2C2" />
      </symbol>
    </defs>
  </svg>
);

export const Flame = ({ className = 'flame' }) => (
  <svg className={className} viewBox="0 0 40 60"><use href="#flame" /></svg>
);

export const Wordmark = ({ color }) => (
  <span className="brand-word" style={color ? { color } : undefined}>
    PLE<Flame />NGAZ
  </span>
);
