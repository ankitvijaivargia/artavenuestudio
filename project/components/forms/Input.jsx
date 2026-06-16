import React from "react";

const CSS = `
.aa-field{ display:grid; gap:9px; }
.aa-field__label{ font-family:var(--font-sans); font-size:11px; font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-caps); text-transform:uppercase; color:var(--text-muted); }
.aa-field__req{ color:var(--accent); }
.aa-control{
  font-family:var(--font-sans); font-size:var(--text-body); color:var(--text-primary);
  background:var(--surface-raised); border:1px solid var(--border-strong);
  border-radius:var(--radius-sm); padding:13px 16px; width:100%; box-sizing:border-box;
  transition:border-color var(--dur-base) var(--ease-luxe), box-shadow var(--dur-base) var(--ease-luxe);
}
.aa-control::placeholder{ color:var(--text-faint); }
.aa-control:hover{ border-color:var(--accent-soft); }
.aa-control:focus{ outline:none; border-color:var(--accent); box-shadow:0 0 0 1px var(--accent); }
.aa-control:disabled{ background:var(--surface-alt); color:var(--text-faint); cursor:not-allowed; }
.aa-field__hint{ font-size:var(--text-xs); color:var(--text-muted); letter-spacing:.01em; }
.aa-field--error .aa-control{ border-color:#9b3b2e; }
.aa-field--error .aa-field__hint{ color:#9b3b2e; }
textarea.aa-control{ resize:vertical; min-height:120px; line-height:1.6; }
`;

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "aa-input-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Art Avenue text field — hairline box, uppercase micro-label, bronze focus.
 */
export function Input({
  label,
  hint,
  error,
  required = false,
  multiline = false,
  id,
  className = "",
  ...rest
}) {
  ensureStyles();
  const fid = id || (label ? "aa-" + String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  const Control = multiline ? "textarea" : "input";
  return (
    <div className={["aa-field", error ? "aa-field--error" : "", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="aa-field__label" htmlFor={fid}>
          {label} {required && <span className="aa-field__req">*</span>}
        </label>
      )}
      <Control id={fid} className="aa-control" aria-invalid={!!error} {...rest} />
      {(error || hint) && <span className="aa-field__hint">{error || hint}</span>}
    </div>
  );
}
