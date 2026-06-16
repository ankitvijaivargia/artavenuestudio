import React from "react";

const CSS = `
.aa-tile{ position:relative; display:flex; overflow:hidden; text-decoration:none;
  border-radius:var(--radius-xs); min-height:340px; isolation:isolate; }
.aa-tile__img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  transition:transform var(--dur-image) var(--ease-luxe); z-index:0; }
.aa-tile:hover .aa-tile__img{ transform:scale(1.04); }
.aa-tile__ph{ position:absolute; inset:0; z-index:0;
  background:linear-gradient(155deg, var(--aa-clay), var(--aa-sand) 55%, var(--aa-stone)); }
.aa-tile__scrim{ position:absolute; inset:0; z-index:1;
  background:linear-gradient(to top, rgba(34,31,27,.62), rgba(34,31,27,.12) 52%, rgba(34,31,27,0)); }
.aa-tile--light .aa-tile__scrim{
  background:linear-gradient(to top, rgba(250,246,239,.86), rgba(250,246,239,.30) 50%, rgba(250,246,239,0)); }
.aa-tile__inner{ position:relative; z-index:2; margin-top:auto; padding:28px 30px;
  display:grid; gap:10px; }
.aa-tile__eyebrow{ font-family:var(--font-sans); font-size:11px; font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-eyebrow); text-transform:uppercase; }
.aa-tile__title{ font-family:var(--font-serif); font-weight:var(--weight-medium); line-height:1.08;
  font-size:clamp(28px,3vw,40px); }
.aa-tile__cta{ font-family:var(--font-sans); font-size:11px; font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-caps); text-transform:uppercase; display:inline-flex; align-items:center; gap:9px; }
.aa-tile__cta i{ transition:transform var(--dur-base) var(--ease-luxe); }
.aa-tile:hover .aa-tile__cta i{ transform:translateX(5px); }

.aa-tile--dark{ color:var(--aa-ivory); }
.aa-tile--dark .aa-tile__eyebrow{ color:var(--accent-soft); }
.aa-tile--dark .aa-tile__cta{ color:var(--aa-ivory); }
.aa-tile--light{ color:var(--aa-charcoal); }
.aa-tile--light .aa-tile__eyebrow{ color:var(--text-accent); }
.aa-tile--light .aa-tile__cta{ color:var(--aa-charcoal); }
`;

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "aa-tile-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Immersive category / collection tile — full-bleed image, gradient scrim,
 * serif title and an arrow CTA. Used for "Signature Collections" and
 * "Shop by Room".
 */
export function CollectionTile({
  image,
  eyebrow,
  title,
  cta = "Explore",
  tone = "dark",
  href = "#",
  style,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  return (
    <a
      className={["aa-tile", `aa-tile--${tone}`, className].filter(Boolean).join(" ")}
      href={href}
      style={style}
      {...rest}
    >
      {image ? <img className="aa-tile__img" src={image} alt={title || ""} loading="lazy" /> : children ? children : <div className="aa-tile__ph" />}
      <span className="aa-tile__scrim" />
      <span className="aa-tile__inner">
        {eyebrow && <span className="aa-tile__eyebrow">{eyebrow}</span>}
        {title && <span className="aa-tile__title">{title}</span>}
        {cta && (
          <span className="aa-tile__cta">
            {cta} <i className="ph ph-arrow-right" />
          </span>
        )}
      </span>
    </a>
  );
}
