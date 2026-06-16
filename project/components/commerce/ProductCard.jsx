import React from "react";

const CSS = `
.aa-pcard{ display:flex; flex-direction:column; text-decoration:none; color:inherit; }
.aa-pcard__media{ position:relative; overflow:hidden; background:var(--surface-stone);
  border-radius:var(--radius-xs); aspect-ratio:4/5; }
.aa-pcard__img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  transition:transform var(--dur-image) var(--ease-luxe); }
.aa-pcard:hover .aa-pcard__img{ transform:scale(1.045); }
.aa-pcard__ph{ position:absolute; inset:0; display:flex; align-items:flex-end; padding:16px;
  background:
    radial-gradient(120% 80% at 70% 20%, rgba(255,255,255,.45), transparent 55%),
    linear-gradient(155deg, var(--aa-clay), var(--aa-sand) 60%, var(--aa-stone));
  font-family:var(--font-serif); font-style:italic; color:rgba(43,40,36,.5); font-size:15px; }
.aa-pcard__badge{ position:absolute; top:14px; left:14px; }
.aa-pcard__fav{ position:absolute; top:12px; right:12px; width:34px; height:34px; border-radius:50%;
  display:flex; align-items:center; justify-content:center; color:var(--aa-charcoal);
  background:rgba(250,246,239,.9); border:none; cursor:pointer; font-size:16px; opacity:0;
  transform:translateY(-4px); transition:opacity var(--dur-base), transform var(--dur-base); }
.aa-pcard:hover .aa-pcard__fav{ opacity:1; transform:translateY(0); }
.aa-pcard__body{ padding:16px 2px 4px; display:grid; gap:6px; }
.aa-pcard__cat{ font-family:var(--font-sans); font-size:10.5px; letter-spacing:var(--tracking-caps);
  text-transform:uppercase; color:var(--text-muted); }
.aa-pcard__name{ font-family:var(--font-serif); font-weight:var(--weight-medium); font-size:21px;
  line-height:1.18; color:var(--text-primary); }
.aa-pcard__meta{ display:flex; align-items:baseline; gap:10px; margin-top:2px; }
.aa-pcard__price{ font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-secondary); }
.aa-pcard__note{ font-family:var(--font-sans); font-size:var(--text-xs); color:var(--text-muted); }
`;

let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "aa-pcard-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Editorial product card — tall 4:5 image, slow zoom on hover, serif name,
 * quiet price. Used across collection grids and "Pair With" rails.
 */
export function ProductCard({
  image,
  badge,
  category,
  name,
  price,
  note,
  favorite = true,
  href = "#",
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  return (
    <a className={["aa-pcard", className].filter(Boolean).join(" ")} href={href} {...rest}>
      <div className="aa-pcard__media">
        {image ? (
          <img className="aa-pcard__img" src={image} alt={name || ""} loading="lazy" />
        ) : children ? (
          children
        ) : (
          <div className="aa-pcard__ph">{name}</div>
        )}
        {badge && <span className="aa-pcard__badge">{badge}</span>}
        {favorite && (
          <button className="aa-pcard__fav" type="button" aria-label="Save" onClick={(e) => e.preventDefault()}>
            <i className="ph ph-heart" />
          </button>
        )}
      </div>
      <div className="aa-pcard__body">
        {category && <div className="aa-pcard__cat">{category}</div>}
        {name && <div className="aa-pcard__name">{name}</div>}
        <div className="aa-pcard__meta">
          {price && <span className="aa-pcard__price">{price}</span>}
          {note && <span className="aa-pcard__note">{note}</span>}
        </div>
      </div>
    </a>
  );
}
