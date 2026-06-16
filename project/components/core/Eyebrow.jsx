import React from "react";

const CSS = `
.aa-eyebrow{ font-family:var(--font-sans); font-size:var(--text-eyebrow); font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-eyebrow); text-transform:uppercase; display:inline-flex; align-items:center; gap:14px; }
.aa-eyebrow--accent{ color:var(--text-accent); }
.aa-eyebrow--muted{ color:var(--text-muted); }
.aa-eyebrow--on-dark{ color:var(--accent-soft); }
.aa-eyebrow--rule::before{ content:""; width:34px; height:1px; background:currentColor; opacity:.85; }
.aa-eyebrow--rule.aa-eyebrow--center::after{ content:""; width:34px; height:1px; background:currentColor; opacity:.85; }
.aa-eyebrow--center{ justify-content:center; }
`;

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "aa-eyebrow-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Section eyebrow — the letterspaced uppercase label that opens nearly every
 * Art Avenue section. Optional leading (and centered: trailing) hairline.
 */
export function Eyebrow({ tone = "accent", rule = false, center = false, as = "div", className = "", children, ...rest }) {
  ensureStyles();
  const Tag = as;
  const cls = [
    "aa-eyebrow",
    `aa-eyebrow--${tone}`,
    rule ? "aa-eyebrow--rule" : "",
    center ? "aa-eyebrow--center" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag className={cls} {...rest}>
      <span>{children}</span>
    </Tag>
  );
}
