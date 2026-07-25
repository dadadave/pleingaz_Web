import { useEffect } from 'react';

// Lightweight SweetAlert-style modal with an animated status icon.
// `type` drives the icon: "error" (animated X) or "success" (animated check).
export default function Alert({ open, type = 'error', title, text, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="pg-alert-overlay" onClick={onClose}>
      <div
        className="pg-alert"
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        {type === 'error' ? (
          <div className="pg-alert-icon pg-alert-icon--error">
            <span className="pg-x-mark">
              <span className="pg-x-line pg-x-line--left" />
              <span className="pg-x-line pg-x-line--right" />
            </span>
          </div>
        ) : (
          <div className="pg-alert-icon pg-alert-icon--success">
            <span className="pg-check-tip" />
            <span className="pg-check-long" />
          </div>
        )}

        {title && <h2 className="pg-alert-title">{title}</h2>}
        {text && <p className="pg-alert-text">{text}</p>}

        <button type="button" className="pg-alert-btn" onClick={onClose} autoFocus>
          OK
        </button>
      </div>
    </div>
  );
}
