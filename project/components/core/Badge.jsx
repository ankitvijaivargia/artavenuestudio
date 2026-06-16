import React from "react";

const CSS = `
.aa-badge{ display:inline-flex; align-items:center; gap:6px; font-family:var(--font-sans);
  font-size:10.5px; font-weight:var(--weight-medium); letter-spacing:var(--tracking-caps);
  text-transform:uppercase; line-height:1; padding:7px 11px; border-radius:var(--radius-xs);
  border:1px solid transparent; white-space:nowrap; }
.aa-badge--solid{ background:var(--aa-charcoal); color:var(--aa-ivory); }
.aa-badge--tint{ background:var(--surface-accent-tint); color:var(--text-accent); }
.aa-badge--outline{ background:transparent; color:var(--text-secondary); border-color:var(--border-strong); }
.aa-badge--accent{ background:var(--accent); color:#fff; }
.aa-badge--on-image{ background:rgba(250,246,239,.92); color:var(--aa-charcoal);
  backdrop-filter:blur(2px); }
.aa-badge--dot::before{ content:""; width:5px; height:5px; border-radius:50%; background:currentColor; }
`;

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "aa-badge-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Small uppercase label for product/editorial cues: "New", "Made to Order",
 * "Handcrafted", "Best Seller".
 */
export function Badge({ variant = "outline", dot = false, className = "", children, ...rest }) {
  ensureStyles();
  const cls = ["aa-badge", `aa-badge--${variant}`, dot ? "aa-badge--dot" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
