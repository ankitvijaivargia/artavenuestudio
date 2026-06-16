import React from "react";

const CSS = `
.aa-btn{
  --_pad-y:14px; --_pad-x:26px; --_fs:12px;
  display:inline-flex; align-items:center; justify-content:center; gap:10px;
  font-family:var(--font-sans); font-weight:var(--weight-medium);
  font-size:var(--_fs); letter-spacing:var(--tracking-caps); text-transform:uppercase;
  line-height:1; padding:var(--_pad-y) var(--_pad-x);
  border:1px solid transparent; border-radius:var(--radius-sm);
  cursor:pointer; text-decoration:none; white-space:nowrap; box-sizing:border-box;
  transition: background var(--dur-base) var(--ease-luxe), color var(--dur-base) var(--ease-luxe),
              border-color var(--dur-base) var(--ease-luxe), opacity var(--dur-fast);
}
.aa-btn__i{ display:inline-flex; font-size:1.15em; }
.aa-btn--sm{ --_pad-y:10px; --_pad-x:18px; --_fs:11px; }
.aa-btn--lg{ --_pad-y:18px; --_pad-x:36px; --_fs:13px; letter-spacing:.16em; }
.aa-btn--block{ display:flex; width:100%; }

.aa-btn--primary{ background:var(--aa-charcoal); color:var(--aa-ivory); }
.aa-btn--primary:hover{ background:var(--aa-espresso); }

.aa-btn--secondary{ background:transparent; color:var(--text-primary); border-color:var(--border-strong); }
.aa-btn--secondary:hover{ background:var(--aa-charcoal); color:var(--aa-ivory); border-color:var(--aa-charcoal); }

.aa-btn--accent{ background:var(--accent); color:#fff; }
.aa-btn--accent:hover{ background:var(--accent-deep); }

.aa-btn--ghost{ background:transparent; color:var(--text-accent); padding-left:0; padding-right:0;
  border-radius:0; gap:8px; }
.aa-btn--ghost:hover{ color:var(--accent-deep); }
.aa-btn--ghost .aa-btn__i{ transition:transform var(--dur-base) var(--ease-luxe); }
.aa-btn--ghost:hover .aa-btn__i{ transform:translateX(4px); }

.aa-btn--on-dark.aa-btn--secondary{ color:var(--text-on-dark); border-color:var(--border-on-dark); }
.aa-btn--on-dark.aa-btn--secondary:hover{ background:var(--aa-ivory); color:var(--aa-charcoal); border-color:var(--aa-ivory); }

.aa-btn[disabled], .aa-btn[aria-disabled="true"]{ opacity:.42; pointer-events:none; cursor:not-allowed; }
.aa-btn:focus-visible{ outline:none; box-shadow:var(--focus-ring); }
`;

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "aa-button-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Art Avenue button — letterspaced, near-square, quietly confident.
 */
export function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const Tag = href ? "a" : "button";
  const cls = [
    "aa-btn",
    `aa-btn--${variant}`,
    size !== "md" ? `aa-btn--${size}` : "",
    fullWidth ? "aa-btn--block" : "",
    onDark ? "aa-btn--on-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const dis = disabled ? (href ? { "aria-disabled": "true" } : { disabled: true }) : {};

  return (
    <Tag className={cls} href={href} {...dis} {...rest}>
      {iconLeft && <span className="aa-btn__i">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="aa-btn__i">{iconRight}</span>}
    </Tag>
  );
}
