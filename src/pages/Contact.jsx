import { useState } from 'react';
import { Icon } from '../components/Icons.jsx';
import InnerPage from '../components/InnerPage.jsx';
import { useLang } from '../i18n.jsx';

// Contact page (SIMAM-style): banner + title, then an Information column and a
// contact Form. The form has no backend, so submitting composes a mailto to the
// support address with the entered details.
export default function Contact() {
  const { t } = useLang();
  const c = t.contactPage;
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' });
  const on = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const body = `${c.form.name}: ${f.name}\n${c.form.email}: ${f.email}\n\n${f.message}`;
    window.location.href =
      `mailto:${t.contact.email}?subject=${encodeURIComponent(f.subject || c.title)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <InnerPage title={c.title} crumbParent={c.crumbParent} bannerIcon="headset" bannerPh="ph-blue" wide>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <h2 className="contact-col-title">{c.infoTitle}</h2>
          <ul>
            {c.info.map((it) => (
              <li key={it.label}>
                <span className="contact-info-ico"><Icon name={it.icon} strokeWidth={1.8} /></span>
                <div>
                  <span className="contact-info-label">{it.label}</span>
                  {it.href ? (
                    <a href={it.href} className="contact-info-value">{it.value}</a>
                  ) : (
                    <span className="contact-info-value">{it.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          <h2 className="contact-col-title">{c.formTitle}</h2>
          <input
            type="text" required value={f.name} onChange={on('name')}
            placeholder={`${c.form.name} ${c.form.required}`}
          />
          <input
            type="email" required value={f.email} onChange={on('email')}
            placeholder={`${c.form.email} ${c.form.required}`}
          />
          <input
            type="text" value={f.subject} onChange={on('subject')}
            placeholder={c.form.subject}
          />
          <textarea
            rows={7} value={f.message} onChange={on('message')}
            placeholder={c.form.message}
          />
          <button type="submit" className="contact-send">
            {c.form.send} <Icon name="arrow" strokeWidth={2.2} />
          </button>
        </form>
      </div>
    </InnerPage>
  );
}
