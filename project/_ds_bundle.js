/* @ds-bundle: {"format":3,"namespace":"ArtAvenueDesignSystem_70ed11","components":[{"name":"CollectionTile","sourcePath":"components/commerce/CollectionTile.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/commerce/CollectionTile.jsx":"a1778213d5cf","components/commerce/ProductCard.jsx":"655455575332","components/core/Badge.jsx":"9192edbb8b4b","components/core/Eyebrow.jsx":"aa1984638aa1","components/forms/Button.jsx":"270b54b96bc8","components/forms/Input.jsx":"c4f57ab10e9c","components/forms/Select.jsx":"be2a7a9a903d","ui_kits/mobile/ios-frame.jsx":"be3343be4b51","ui_kits/mobile/mobile-screens.jsx":"ad5165afa6de","ui_kits/website/CollectionPage.jsx":"83a05aa9b721","ui_kits/website/CushionProductPage.jsx":"c03c09816f54","ui_kits/website/CustomBespokePage.jsx":"3ea81dfb1a98","ui_kits/website/HomePage.jsx":"330e14402671","ui_kits/website/MaterialLibrary.jsx":"04d527ace6a8","ui_kits/website/ProductPage.jsx":"fa6b340de0f7","ui_kits/website/RugProductPage.jsx":"d5b69b5100a4","ui_kits/website/TradePage.jsx":"9f28ccc22697","ui_kits/website/parts.jsx":"90476d35523e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArtAvenueDesignSystem_70ed11 = window.ArtAvenueDesignSystem_70ed11 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CollectionTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function CollectionTile({
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
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ["aa-tile", `aa-tile--${tone}`, className].filter(Boolean).join(" "),
    href: href,
    style: style
  }, rest), image ? /*#__PURE__*/React.createElement("img", {
    className: "aa-tile__img",
    src: image,
    alt: title || "",
    loading: "lazy"
  }) : children ? children : /*#__PURE__*/React.createElement("div", {
    className: "aa-tile__ph"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aa-tile__scrim"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aa-tile__inner"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "aa-tile__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("span", {
    className: "aa-tile__title"
  }, title), cta && /*#__PURE__*/React.createElement("span", {
    className: "aa-tile__cta"
  }, cta, " ", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-right"
  }))));
}
Object.assign(__ds_scope, { CollectionTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CollectionTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ProductCard({
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
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ["aa-pcard", className].filter(Boolean).join(" "),
    href: href
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "aa-pcard__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    className: "aa-pcard__img",
    src: image,
    alt: name || "",
    loading: "lazy"
  }) : children ? children : /*#__PURE__*/React.createElement("div", {
    className: "aa-pcard__ph"
  }, name), badge && /*#__PURE__*/React.createElement("span", {
    className: "aa-pcard__badge"
  }, badge), favorite && /*#__PURE__*/React.createElement("button", {
    className: "aa-pcard__fav",
    type: "button",
    "aria-label": "Save",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-heart"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "aa-pcard__body"
  }, category && /*#__PURE__*/React.createElement("div", {
    className: "aa-pcard__cat"
  }, category), name && /*#__PURE__*/React.createElement("div", {
    className: "aa-pcard__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "aa-pcard__meta"
  }, price && /*#__PURE__*/React.createElement("span", {
    className: "aa-pcard__price"
  }, price), note && /*#__PURE__*/React.createElement("span", {
    className: "aa-pcard__note"
  }, note))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  variant = "outline",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const cls = ["aa-badge", `aa-badge--${variant}`, dot ? "aa-badge--dot" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Eyebrow({
  tone = "accent",
  rule = false,
  center = false,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const Tag = as;
  const cls = ["aa-eyebrow", `aa-eyebrow--${tone}`, rule ? "aa-eyebrow--rule" : "", center ? "aa-eyebrow--center" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ["aa-btn", `aa-btn--${variant}`, size !== "md" ? `aa-btn--${size}` : "", fullWidth ? "aa-btn--block" : "", onDark ? "aa-btn--on-dark" : "", className].filter(Boolean).join(" ");
  const dis = disabled ? href ? {
    "aria-disabled": "true"
  } : {
    disabled: true
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, dis, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "aa-btn__i"
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "aa-btn__i"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: ["aa-field", error ? "aa-field--error" : "", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "aa-field__label",
    htmlFor: fid
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    className: "aa-field__req"
  }, "*")), /*#__PURE__*/React.createElement(Control, _extends({
    id: fid,
    className: "aa-control",
    "aria-invalid": !!error
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "aa-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.aa-select-wrap{ position:relative; display:block; }
.aa-select-wrap::after{
  content:""; position:absolute; right:16px; top:50%; width:8px; height:8px;
  border-right:1px solid var(--text-secondary); border-bottom:1px solid var(--text-secondary);
  transform:translateY(-65%) rotate(45deg); pointer-events:none;
}
select.aa-control{ appearance:none; -webkit-appearance:none; padding-right:40px; cursor:pointer; }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "aa-select-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Art Avenue select — matches Input styling with a thin custom caret.
 * Pass an `options` array or `<option>` children.
 */
function Select({
  label,
  hint,
  required = false,
  options,
  id,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const fid = id || (label ? "aa-" + String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["aa-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "aa-field__label",
    htmlFor: fid
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    className: "aa-field__req"
  }, "*")), /*#__PURE__*/React.createElement("span", {
    className: "aa-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "aa-control"
  }, rest), options ? options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  }) : children)), hint && /*#__PURE__*/React.createElement("span", {
    className: "aa-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/mobile-screens.jsx
try { (() => {
/* Art Avenue — Mobile-first screens (inside iOS frame)
 * Reuses DS components + AAFigure (from ../website/parts.jsx).
 */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge,
    Input,
    Select,
    ProductCard,
    CollectionTile
  } = DS;
  const Fig = window.AAFigure;

  /* ============ shared bits ============ */
  const PAD = 20;
  const fmt = n => "\u20B9 " + n.toLocaleString("en-IN");
  const INITIAL_CART = [{
    id: "marwar",
    name: "Marwar Lounge Chair",
    finish: "Natural Teak · Belgian Linen",
    price: 148000,
    qty: 1,
    tone: "clay"
  }, {
    id: "meridian",
    name: "Brass Meridian Pendant",
    finish: "Aged Brass",
    price: 64000,
    qty: 1,
    tone: "bronze"
  }];
  function AppBar({
    onMenu,
    onNavigate,
    solid = true,
    back = false,
    onBack,
    cartCount = 2
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 30,
        paddingTop: 48,
        background: solid ? "var(--surface-page)" : "transparent",
        borderBottom: solid ? "1px solid var(--border-hairline)" : "1px solid transparent"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 46,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: `0 ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: back ? onBack : onMenu,
      style: iconBtn(solid),
      "aria-label": back ? "Back" : "Menu"
    }, /*#__PURE__*/React.createElement("i", {
      className: back ? "ph-light ph-arrow-left" : "ph-light ph-list",
      style: {
        fontSize: 24
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate("home"),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: solid ? "var(--text-primary)" : "#fff"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 18,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        whiteSpace: "nowrap"
      }
    }, "Art Avenue")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: iconBtn(solid),
      "aria-label": "Search"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-magnifying-glass",
      style: {
        fontSize: 21
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate("cart"),
      style: {
        ...iconBtn(solid),
        position: "relative"
      },
      "aria-label": "Bag"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-handbag-simple",
      style: {
        fontSize: 21
      }
    }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -4,
        right: -6,
        minWidth: 15,
        height: 15,
        padding: "0 4px",
        borderRadius: 99,
        background: "var(--accent)",
        color: "#fff",
        fontSize: 9,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, cartCount)))));
  }
  const iconBtn = solid => ({
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    color: solid ? "var(--text-primary)" : "#fff",
    display: "flex",
    alignItems: "center"
  });
  function SectionHead({
    eyebrow,
    title,
    intro,
    center,
    light
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: center ? "center" : "left"
      }
    }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
      tone: light ? "on-dark" : "accent",
      rule: true,
      center: center
    }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 1.1,
        letterSpacing: "var(--tracking-tight)",
        margin: "14px 0 0",
        color: light ? "var(--text-on-dark)" : "var(--text-primary)"
      }
    }, title), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        fontWeight: 300,
        lineHeight: 1.6,
        color: light ? "var(--text-on-dark-muted)" : "var(--text-secondary)",
        margin: center ? "12px auto 0" : "12px 0 0",
        maxWidth: 340
      }
    }, intro));
  }
  const railStyle = {
    display: "flex",
    gap: 14,
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    margin: `0 -${PAD}px`,
    padding: `0 ${PAD}px`,
    scrollbarWidth: "none"
  };

  /* ============ NAV DRAWER — progressive drill-down ============ */
  const routeMobile = l => {
    if (/materials library|finish library/i.test(l)) return ["library", l];
    if (/custom|bespoke|made for your space|designer collaborat|interior project|hospitality project|project procurement|the atelier|speak with|consultant|customization/i.test(l)) return ["custom", l];
    if (/shop all furniture/i.test(l)) return ["collection", "Furniture"];
    if (/shop all rugs|rug size guide/i.test(l)) return ["collection", "Rugs"];
    return ["collection", l];
  };
  const pathsOf = n => n.paths || (n.cols ? n.cols.map(c => ({
    h: c.h,
    links: c.links
  })) : null);
  const RUG_COLOR = {
    Ivory: "#F2ECE0",
    Beige: "#E2D6C2",
    Sand: "#D8C39E",
    Taupe: "#B8A88F",
    Neutral: "#C9BCA8",
    Blue: "#6E8198",
    Green: "#7A8463",
    Terracotta: "#B5774E",
    Grey: "#9A968E"
  };
  const MULTI_BG = "conic-gradient(from 90deg, #B5774E, #7A8463, #6E8198, #D8C39E, #B5774E)";
  const isColourPath = h => /colou?r/i.test(h);
  function Drawer({
    open,
    onClose,
    onNavigate
  }) {
    const nav = window.AA_NAV || [];
    const [openCat, setOpenCat] = React.useState("Rugs");
    const [openPath, setOpenPath] = React.useState(null);
    const scrollRef = React.useRef(null);
    React.useEffect(() => {
      if (!document.getElementById("aa-mnav-kf")) {
        const st = document.createElement("style");
        st.id = "aa-mnav-kf";
        st.textContent = "@keyframes aaExpand{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}";
        document.head.appendChild(st);
      }
    }, []);
    React.useEffect(() => {
      if (!open) {
        const t = setTimeout(() => {
          setOpenCat("Rugs");
          setOpenPath(null);
        }, 320);
        return () => clearTimeout(t);
      }
    }, [open]);
    const goTo = (r, a) => {
      onNavigate(r, a);
      onClose();
    };
    const renderLinks = p => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        padding: `2px ${PAD}px 16px ${PAD + 6}px`,
        animation: "aaExpand var(--dur-base) var(--ease-luxe)"
      }
    }, p.links.map(l => {
      const colour = isColourPath(p.h);
      return /*#__PURE__*/React.createElement("button", {
        key: l,
        onClick: () => goTo(...routeMobile(l)),
        style: mChip
      }, colour && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 14,
          height: 14,
          borderRadius: "50%",
          flex: "none",
          border: "1px solid rgba(0,0,0,.14)",
          background: RUG_COLOR[l] || MULTI_BG
        }
      }), l);
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(34,31,27,.42)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--dur-base) var(--ease-luxe)",
        zIndex: 40
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: "88%",
        background: "var(--surface-page)",
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform var(--dur-slow) var(--ease-luxe)",
        zIndex: 41,
        display: "flex",
        flexDirection: "column",
        boxShadow: open ? "var(--shadow-overlay)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `54px ${PAD}px 14px`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 20,
        letterSpacing: ".16em",
        textTransform: "uppercase",
        color: "var(--text-primary)"
      }
    }, "Art Avenue"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Close",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-x",
      style: {
        fontSize: 24
      }
    }))), /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "2px 0 24px"
      }
    }, nav.map(n => {
      const ps = pathsOf(n);
      const catOpen = openCat === n.label;
      return /*#__PURE__*/React.createElement("div", {
        key: n.label,
        style: {
          borderBottom: "1px solid var(--border-hairline)"
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => ps ? (setOpenCat(catOpen ? null : n.label), setOpenPath(null)) : goTo(n.label === "Trade" ? "trade" : n.label === "Custom & Bespoke" ? "custom" : "collection", n.label),
        style: mCatRow
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-serif)",
          fontSize: 23,
          color: catOpen ? "var(--text-accent)" : "var(--text-primary)"
        }
      }, n.label), /*#__PURE__*/React.createElement("i", {
        className: "ph " + (ps ? "ph-caret-down" : "ph-arrow-up-right"),
        style: {
          fontSize: 15,
          color: "var(--text-muted)",
          transform: catOpen ? "rotate(180deg)" : "none",
          transition: "transform var(--dur-base) var(--ease-luxe)"
        }
      })), catOpen && ps && /*#__PURE__*/React.createElement("div", {
        style: {
          paddingBottom: 10,
          animation: "aaExpand var(--dur-base) var(--ease-luxe)"
        }
      }, ps.map(p => {
        const direct = !!p.direct || !p.links;
        const key = n.label + "|" + p.h;
        const pOpen = openPath === key;
        return /*#__PURE__*/React.createElement("div", {
          key: p.h
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => direct ? goTo(...routeMobile(p.direct || p.h)) : setOpenPath(pOpen ? null : key),
          style: mPathRow
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: "var(--font-sans)",
            fontSize: 14.5,
            letterSpacing: ".01em",
            color: pOpen ? "var(--text-accent)" : "var(--text-primary)"
          }
        }, p.h), /*#__PURE__*/React.createElement("i", {
          className: "ph " + (direct ? "ph-arrow-up-right" : "ph-caret-down"),
          style: {
            fontSize: 12.5,
            color: "var(--text-muted)",
            transform: pOpen ? "rotate(180deg)" : "none",
            transition: "transform var(--dur-base) var(--ease-luxe)"
          }
        })), pOpen && !direct && renderLinks(p));
      })));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `26px ${PAD}px 0`
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => {
        onNavigate("trade");
        onClose();
      }
    }, "Trade & Design Program"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        marginTop: 24,
        color: "var(--text-secondary)",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-user"
    }), " Account"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-truck"
    }), " Track order"))))));
  }
  const mCatRow = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: `16px ${PAD}px`,
    color: "var(--text-primary)"
  };
  const mPathRow = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: `11px ${PAD}px 11px ${PAD + 6}px`,
    color: "var(--text-primary)"
  };
  const mChip = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px",
    border: "1px solid var(--border-strong)",
    borderRadius: "var(--radius-pill)",
    fontSize: 13,
    color: "var(--text-secondary)",
    background: "transparent",
    cursor: "pointer",
    fontFamily: "var(--font-sans)"
  };

  /* ============ HOME ============ */
  function Home({
    onNavigate
  }) {
    const arrivals = [{
      category: "Seating",
      name: "Marwar Lounge Chair",
      price: "₹ 1,48,000",
      tone: "clay",
      badge: "New"
    }, {
      category: "Rugs",
      name: "Aravalli Knotted Rug",
      price: "₹ 2,20,000",
      tone: "olive"
    }, {
      category: "Lighting",
      name: "Brass Meridian Pendant",
      price: "₹ 64,000",
      tone: "bronze"
    }];
    const rooms = [{
      t: "Living Room",
      tone: "clay"
    }, {
      t: "Dining",
      tone: "espresso"
    }, {
      t: "Bedroom",
      tone: "stone",
      l: "light"
    }, {
      t: "Outdoor",
      tone: "olive"
    }];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        height: 560,
        display: "flex",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: "clay",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(34,31,27,.62), rgba(34,31,27,.05) 55%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: `0 ${PAD}px 40px`
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark"
    }, "Spring \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "#fff",
        fontSize: 46,
        lineHeight: 1.02,
        letterSpacing: "var(--tracking-tight)",
        margin: "16px 0 0"
      }
    }, "Crafted spaces,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "#EBD9BE"
      }
    }, "collected stories.")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(250,246,239,.86)",
        fontSize: 15.5,
        fontWeight: 300,
        lineHeight: 1.55,
        marginTop: 16,
        maxWidth: 300
      }
    }, "Handcrafted furniture & objects for homes made to be lived in."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => onNavigate("collection", "New Arrivals")
    }, "Explore the Collection")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `52px ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Signature Collections",
      title: "Five disciplines, one point of view."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        marginTop: 28
      }
    }, [{
      t: "Furniture",
      tone: "clay"
    }, {
      t: "Rugs",
      tone: "olive"
    }, {
      t: "Lighting",
      tone: "bronze"
    }, {
      t: "Decor",
      tone: "stone",
      l: "light"
    }].map(c => /*#__PURE__*/React.createElement(CollectionTile, {
      key: c.t,
      title: c.t,
      tone: c.l || "dark",
      cta: "Explore",
      onClick: e => {
        e.preventDefault();
        onNavigate("collection", c.t);
      },
      style: {
        minHeight: 200
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: c.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: `52px ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: "espresso",
      ratio: "4/3",
      label: "The maker's hand",
      style: {
        marginBottom: 24
      }
    }), /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "The Atelier",
      title: "Made slowly, by hand, to last.",
      intro: "Every piece begins in the hands of an artisan \u2014 turned, joined and finished the way furniture was always meant to be made."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "Inside the Atelier"))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `52px 0`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `0 ${PAD}px`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Just Arrived",
      title: "New this season"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        ...railStyle,
        marginTop: 26
      }
    }, arrivals.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        flex: "0 0 220px",
        scrollSnapAlign: "start"
      }
    }, /*#__PURE__*/React.createElement(ProductCard, {
      category: p.category,
      name: p.name,
      price: p.price,
      badge: p.badge ? /*#__PURE__*/React.createElement(Badge, {
        variant: "on-image"
      }, p.badge) : null,
      favorite: false,
      onClick: e => {
        e.preventDefault();
        onNavigate("product", p.name);
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: p.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    })))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: `52px 0`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `0 ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      center: true,
      eyebrow: "Shop by Room",
      title: "Begin with the space."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 2,
        marginTop: 28
      }
    }, rooms.map(r => /*#__PURE__*/React.createElement(CollectionTile, {
      key: r.t,
      title: r.t,
      tone: r.l || "dark",
      cta: "Shop the room",
      onClick: e => {
        e.preventDefault();
        onNavigate("collection", r.t);
      },
      style: {
        minHeight: 220,
        borderRadius: 0
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: r.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
        padding: `56px ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      light: true,
      eyebrow: "Trade & Design",
      title: "For designers & architects.",
      intro: "Trade pricing, customization, sampling and project procurement \u2014 for residential and hospitality projects."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      fullWidth: true,
      onClick: () => onNavigate("trade")
    }, "Request Trade Access"))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `52px ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "The Journal",
      title: "Design notes & stories"
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        textDecoration: "none",
        color: "inherit",
        display: "block",
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: "stone",
      ratio: "3/2"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "Styling \xB7 6 min"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 22,
        lineHeight: 1.2,
        margin: "10px 0 0"
      }
    }, "How to layer a living room like a designer"))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `60px ${PAD}px`,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      center: true,
      rule: true
    }, "Art Avenue"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 28,
        lineHeight: 1.2,
        letterSpacing: "var(--tracking-tight)",
        margin: "20px 0 0",
        textWrap: "balance"
      }
    }, "We are not a furniture store. We are a design house \u2014 curating the made-by-hand, so your home can hold its stories.")), /*#__PURE__*/React.createElement(MobileFooter, {
      onNavigate: onNavigate
    }));
  }

  /* ============ COLLECTION ============ */
  /* horizontal facet chip rail */
  function FacetRail({
    label,
    options
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        marginBottom: 12
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        ...railStyle,
        gap: 10
      }
    }, options.map(o => /*#__PURE__*/React.createElement("button", {
      key: o,
      style: {
        flex: "none",
        padding: "9px 16px",
        borderRadius: 99,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        background: "transparent",
        color: "var(--text-secondary)",
        border: "1px solid var(--border-strong)",
        whiteSpace: "nowrap"
      }
    }, o))));
  }
  /* shop-by-room image tile rail */
  function ShopByRoomRail({
    onNavigate
  }) {
    const rooms = [{
      t: "Living Room",
      tone: "clay"
    }, {
      t: "Dining",
      tone: "espresso"
    }, {
      t: "Bedroom",
      tone: "stone",
      l: "light"
    }, {
      t: "Study",
      tone: "olive"
    }, {
      t: "Outdoor",
      tone: "bronze"
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        marginBottom: 12
      }
    }, "Shop by Room"), /*#__PURE__*/React.createElement("div", {
      style: railStyle
    }, rooms.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.t,
      style: {
        flex: "0 0 150px",
        scrollSnapAlign: "start"
      }
    }, /*#__PURE__*/React.createElement(CollectionTile, {
      title: r.t,
      tone: r.l || "dark",
      cta: "",
      onClick: e => {
        e.preventDefault();
        onNavigate("collection", r.t);
      },
      style: {
        minHeight: 180,
        borderRadius: "var(--radius-xs)"
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: r.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }))))));
  }
  function Collection({
    onNavigate,
    title,
    onFilter,
    onGuide
  }) {
    const products = [{
      category: "Seating",
      name: "Marwar Lounge Chair",
      price: "₹ 1,48,000",
      tone: "clay",
      badge: "Handcrafted"
    }, {
      category: "Seating",
      name: "Kashi Linen Sofa",
      price: "₹ 3,20,000",
      tone: "stone",
      badge: "Best Seller"
    }, {
      category: "Tables",
      name: "Udai Coffee Table",
      price: "₹ 96,000",
      tone: "bronze",
      badge: "New"
    }, {
      category: "Seating",
      name: "Pichola Cane Armchair",
      price: "₹ 84,000",
      tone: "olive"
    }, {
      category: "Storage",
      name: "Jodha Sideboard",
      price: "₹ 2,60,000",
      tone: "espresso"
    }, {
      category: "Tables",
      name: "Amer Dining Table",
      price: "₹ 4,10,000",
      tone: "stone"
    }];
    const heading = title && title !== "true" ? title : "Furniture";
    const isRug = /rug/i.test(heading);
    const tabs = ["New Arrivals", "Best Sellers", "Designer Favourites", "Trending"];
    const [tab, setTab] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        height: 300,
        display: "flex",
        alignItems: "center",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: "espresso",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(34,31,27,.5), rgba(34,31,27,.32))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: `0 ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      center: true
    }, isRug ? "The Rug Atelier" : "Signature Collection"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "#fff",
        fontSize: 38,
        lineHeight: 1.04,
        margin: "12px 0 0"
      }
    }, heading), isRug && /*#__PURE__*/React.createElement("button", {
      onClick: onGuide,
      style: {
        marginTop: 18,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "11px 18px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        background: "rgba(250,246,239,.92)",
        border: "none",
        color: "var(--aa-charcoal)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-ruler"
    }), " Need Help Choosing a Rug Size?"))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `26px ${PAD}px 8px`
      }
    }, isRug ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FacetRail, {
      label: "Shop by Size",
      options: ["3×5", "4×6", "5×8", "6×9", "8×10", "9×12", "Runner", "Round"]
    }), /*#__PURE__*/React.createElement(ShopByRoomRail, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(FacetRail, {
      label: "Shop by Material",
      options: ["Hand-Knotted Wool", "Flatweave", "Jute & Natural", "Cotton", "Silk Blend"]
    }), /*#__PURE__*/React.createElement(FacetRail, {
      label: "Shop by Colour",
      options: ["Ivory & Sand", "Charcoal", "Terracotta", "Indigo", "Olive"]
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ShopByRoomRail, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(FacetRail, {
      label: "Shop by Style",
      options: ["Contemporary", "Classic", "Cane & Rattan", "Hand-Carved", "Minimal"]
    }), /*#__PURE__*/React.createElement(FacetRail, {
      label: "Shop by Material",
      options: ["Solid Teak", "Mango Wood", "Oak", "Marble & Stone", "Brass"]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 94,
        zIndex: 25,
        background: "var(--surface-page)",
        borderBottom: "1px solid var(--border-hairline)",
        borderTop: "1px solid var(--border-hairline)",
        marginTop: 24,
        display: "grid",
        gridTemplateColumns: isRug ? "1fr 1fr 1fr" : "1fr 1fr"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onFilter("filter"),
      style: barBtn
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-sliders-horizontal",
      style: {
        fontSize: 15
      }
    }), " Filter"), /*#__PURE__*/React.createElement("button", {
      onClick: () => onFilter("sort"),
      style: {
        ...barBtn,
        borderLeft: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrows-down-up",
      style: {
        fontSize: 15
      }
    }), " Sort"), isRug && /*#__PURE__*/React.createElement("button", {
      onClick: onGuide,
      style: {
        ...barBtn,
        borderLeft: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-ruler",
      style: {
        fontSize: 15
      }
    }), " Size")), /*#__PURE__*/React.createElement("div", {
      style: {
        ...railStyle,
        gap: 22,
        padding: `16px ${PAD}px 0`
      }
    }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTab(i),
      style: {
        flex: "none",
        background: "none",
        border: "none",
        padding: "0 0 12px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 11.5,
        fontWeight: 500,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: tab === i ? "var(--text-primary)" : "var(--text-muted)",
        borderBottom: "2px solid " + (tab === i ? "var(--accent)" : "transparent"),
        whiteSpace: "nowrap"
      }
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `12px ${PAD}px 4px`,
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, "136 pieces"), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `8px ${PAD}px 48px`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14
      }
    }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.name,
      category: p.category,
      name: p.name,
      price: p.price,
      badge: p.badge ? /*#__PURE__*/React.createElement(Badge, {
        variant: "on-image"
      }, p.badge) : null,
      favorite: false,
      onClick: e => {
        e.preventDefault();
        onNavigate("product", p.name);
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: p.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Load more"))), /*#__PURE__*/React.createElement(MobileFooter, {
      onNavigate: onNavigate
    }));
  }
  const barBtn = {
    height: 52,
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    color: "var(--text-primary)"
  };

  /* ============ RUG SIZE GUIDE (bottom sheet) ============ */
  function RugGuideSheet({
    open,
    onClose
  }) {
    const rooms = [{
      h: "Living Room",
      t: "Front legs of the sofa & chairs rest on the rug; leave 20–25 cm of floor around the edges.",
      z: "8×10 ft / 9×12 ft"
    }, {
      h: "Dining Room",
      t: "Extend ~60 cm beyond the table so chairs stay on the rug when pulled out.",
      z: "8×10 ft (6-seat) · 9×12 ft (8-seat)"
    }, {
      h: "Bedroom",
      t: "Two-thirds under the bed with a soft border to step onto, or runners either side.",
      z: "8×10 ft (queen) · 9×12 ft (king)"
    }, {
      h: "Runners & Hallways",
      t: "Leave 10–15 cm of floor on each side; a runner ~50 cm narrower than the corridor.",
      z: "2.5×8 ft / 2.5×10 ft"
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(34,31,27,.46)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--dur-base)",
        zIndex: 44
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        maxHeight: "86%",
        background: "var(--surface-page)",
        borderRadius: "16px 16px 0 0",
        transform: open ? "translateY(0)" : "translateY(101%)",
        transition: "transform var(--dur-slow) var(--ease-luxe)",
        zIndex: 45,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 0 4px",
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 99,
        background: "var(--border-strong)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `8px ${PAD}px`,
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 22
      }
    }, "Rug Size Guide"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        background: "none",
        border: "none",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-x",
      style: {
        fontSize: 22
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: `8px ${PAD}px 20px`
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--text-secondary)",
        margin: "8px 0 4px"
      }
    }, "The most common mistake is going too small. A rug should sit under the main furniture and anchor the arrangement \u2014 not float in the middle of the room."), rooms.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.h,
      style: {
        borderTop: "1px solid var(--border-hairline)",
        padding: "15px 0"
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 18,
        margin: "0 0 6px"
      }
    }, r.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.55,
        color: "var(--text-secondary)",
        margin: 0
      }
    }, r.t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        marginTop: 6,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: ".04em",
        color: "var(--text-accent)"
      }
    }, "Recommended \xB7 ", r.z))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-accent-tint)",
        borderRadius: "var(--radius-xs)",
        padding: "15px 16px",
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        marginBottom: 8
      }
    }, "Cotton vs Chenille"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.55,
        color: "var(--text-secondary)",
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "Cotton"), " \u2014 crisp, breathable, easy-care; best for low-traffic & layering. ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "Super-Soft Chenille"), " \u2014 plush, denser, more durable; best for living rooms & bedrooms."))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `14px ${PAD}px 30px`,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: onClose
    }, "Shop Rugs by Size"))));
  }

  /* ============ PRODUCT ============ */
  const MWA = "919828060095";
  const mWa = msg => "https://wa.me/" + MWA + "?text=" + encodeURIComponent(msg);
  const fmtINR = n => "₹ " + n.toLocaleString("en-IN");
  const mLabel = {
    fontSize: 11,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: 11
  };
  const mPill = on => ({
    padding: "10px 16px",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    background: on ? "var(--surface-accent-tint)" : "transparent",
    color: on ? "var(--text-accent)" : "var(--text-secondary)",
    border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)")
  });
  const mQuick = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    padding: "12px 6px",
    background: "none",
    border: "1px solid var(--border-strong)",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    fontSize: 10.5,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    color: "var(--text-secondary)"
  };
  const skuOf = (pname, suf) => "AA-" + pname.split(" ").map(w => w[0]).join("").toUpperCase() + "-" + suf;
  const M_STATUS = {
    "in-stock": {
      label: "In Stock",
      icon: "ph-package"
    },
    "available-to-order": {
      label: "Available to Order",
      icon: "ph-hammer"
    },
    "made-to-order": {
      label: "Made to Order",
      icon: "ph-hammer"
    },
    customizable: {
      label: "Customizable",
      icon: "ph-pencil-ruler"
    },
    consultation: {
      label: "Consultation Recommended",
      icon: "ph-chat-teardrop-dots"
    }
  };
  const MFYS = {
    furniture: ["Custom dimensions for your room", "Bespoke finishes & wood tones", "Your own upholstery (COM) welcomed"],
    rug: ["Custom sizes on selected designs", "Bespoke colourways & constructions", "Round, runner & oversized formats"],
    cushion: ["Custom sizes & fill options", "Bespoke fabrics, leathers & techniques", "Coordinated sets & trade quantities"]
  };

  /* Why-you'll-love-it, per category */
  const WHY_M = {
    furniture: {
      title: "A piece made to be lived with.",
      points: [["Handcrafted by skilled artisans", "Carved, joined and finished by hand — never mass-produced."], ["Carefully selected materials", "Kiln-dried hardwoods and natural textiles, chosen to last."], ["Designed to age beautifully", "Oil-rubbed finishes gain character with the years."], ["Made for everyday living", "Generous proportions drawn for real homes, not showrooms."], ["Naturally one of a kind", "Grain and tone vary gently from piece to piece."]]
    },
    rug: {
      title: "A foundation, knotted by hand.",
      points: [["Hand-knotted by master weavers", "Tied knot by knot over four to six months."], ["Naturally dyed, naturally varied", "Gentle abrash is the signature of true hand craft."], ["Built to be passed down", "Dense wool made to soften over years, never wear thin."], ["Grounds and warms a room", "A quiet anchor that draws the arrangement together."], ["Singular by nature", "No two rugs are ever knotted exactly alike."]]
    },
    cushion: {
      title: "Quiet character, made by hand.",
      points: [["Made by skilled hands", "Printed, woven, tufted or embroidered by textile artisans."], ["Natural, considered fabrics", "Cotton, linen, wool, velvet and leather, chosen for the hand."], ["Layered for a collected look", "Mix techniques and sizes for a gathered-over-time feel."], ["Made to be refreshed", "Removable covers and concealed zips make a change simple."], ["Quietly unique", "Small variations are the signature of genuine handwork."]]
    }
  };

  /* Cushion technique profiles — fully data-driven, no block-print assumption */
  const M_CUSH = {
    block: {
      technique: "Hand Block-Printed",
      badge: "Hand Block-Printed",
      face: "Hand block-printed cotton",
      reverse: "natural linen reverse",
      construction: "Concealed zip · piped edges",
      insertDesc: "feather-and-down insert",
      origin: "Block-printed by hand in Sanganer, Rajasthan, with hand-carved blocks and natural dyes.",
      craft: "Printed by hand, block by block, in small batches — slight irregularities are the signature of the craft.",
      care: "Remove the insert; gentle cold hand-wash or dry-clean the cover. Reshape damp, air-dry.",
      intro: "A hand-block-printed cotton cushion with a natural linen reverse.",
      sample: "Fabric"
    },
    woven: {
      technique: "Handwoven",
      badge: "Handwoven",
      face: "Yarn-dyed handwoven cotton & wool",
      reverse: "cotton reverse",
      construction: "Concealed zip · turned edges",
      insertDesc: "feather-and-down insert",
      origin: "Woven on traditional pit looms in Panipat and Bhuj.",
      craft: "Yarn is dyed before weaving, so the pattern runs through the cloth.",
      care: "Dry-clean to preserve the weave; spot-clean spills with a damp cloth.",
      intro: "A yarn-dyed handwoven cushion — pattern woven through the cloth.",
      sample: "Fabric"
    },
    tufted: {
      technique: "Hand-Tufted",
      badge: "Hand-Tufted",
      face: "Hand-tufted wool pile",
      reverse: "cotton canvas reverse",
      construction: "Concealed zip · bound edges",
      insertDesc: "feather-and-down insert",
      origin: "Tufted by hand and sheared in Bhadohi.",
      craft: "Wool punched through a backing and sheared to a plush, sculptural pile.",
      care: "Vacuum gently; blot spills, never rub.",
      intro: "A plush hand-tufted wool cushion with a sculptural face.",
      sample: "Fabric"
    },
    embroidered: {
      technique: "Hand-Embroidered",
      badge: "Hand-Embroidered",
      face: "Hand-embroidered cotton & silk",
      reverse: "cotton reverse",
      construction: "Concealed zip · piped edges",
      insertDesc: "feather-and-down insert",
      origin: "Embroidered by hand in Kutch and Lucknow.",
      craft: "Each motif stitched by hand over many hours.",
      care: "Dry-clean only; store flat, away from snags.",
      intro: "A hand-embroidered cushion — each motif stitched by hand.",
      sample: "Fabric"
    },
    leather: {
      technique: "Full-Grain Leather",
      badge: "Full-Grain Leather",
      face: "Full-grain vegetable-tanned leather",
      reverse: "suede reverse",
      construction: "Hidden zip · saddle-stitched edges",
      insertDesc: "fibre-and-down insert",
      origin: "Cut and saddle-stitched by leather artisans in India.",
      craft: "Cut from full-grain hides and stitched by hand; natural marks are intrinsic.",
      care: "Wipe with a dry cloth; condition twice yearly. Keep from direct heat.",
      intro: "A full-grain leather cushion, saddle-stitched and made to patina.",
      sample: "Leather"
    },
    velvet: {
      technique: "Cotton Velvet",
      badge: "Cotton Velvet",
      face: "Cotton-velvet",
      reverse: "natural linen reverse",
      construction: "Concealed zip · piped edges",
      insertDesc: "feather-and-down insert",
      origin: "Cut and finished by hand in our workshops.",
      craft: "A dense pile catches light differently as it shifts.",
      care: "Dry-clean to preserve the pile; brush gently in one direction.",
      intro: "A deep cotton-velvet cushion with a natural linen reverse.",
      sample: "Fabric"
    },
    linen: {
      technique: "Pure Linen",
      badge: "Pure Linen",
      face: "Washed pure linen",
      reverse: "linen reverse",
      construction: "Concealed zip · turned edges",
      insertDesc: "feather-and-down insert",
      origin: "Cut and sewn by hand in India.",
      craft: "A washed-linen face with the soft slub that defines the cloth.",
      care: "Cold gentle machine-wash or dry-clean; a relaxed finish suits it.",
      intro: "A washed pure-linen cushion — soft and relaxed.",
      sample: "Fabric"
    },
    cotton: {
      technique: "Pure Cotton",
      badge: "Pure Cotton",
      face: "Woven cotton",
      reverse: "cotton reverse",
      construction: "Concealed zip · turned edges",
      insertDesc: "feather-and-down insert",
      origin: "Cut and sewn by hand in India.",
      craft: "A breathable woven-cotton face, easy to live with every day.",
      care: "Cold gentle machine-wash or dry-clean.",
      intro: "A pure-cotton cushion — breathable and easy.",
      sample: "Fabric"
    },
    wool: {
      technique: "Handcrafted Wool",
      badge: "Handcrafted Wool",
      face: "Woven wool",
      reverse: "cotton reverse",
      construction: "Concealed zip · turned edges",
      insertDesc: "feather-and-down insert",
      origin: "Woven and finished by hand in India.",
      craft: "Natural wool, with the warmth and gentle variation of the fibre.",
      care: "Dry-clean recommended; air regularly, store with cedar.",
      intro: "A natural woven-wool cushion — warm and substantial.",
      sample: "Fabric"
    },
    mixed: {
      technique: "Mixed Techniques",
      badge: "Mixed Techniques",
      face: "Mixed-material face",
      reverse: "natural reverse",
      construction: "Concealed zip · finished edges",
      insertDesc: "premium insert",
      origin: "Crafted by hand combining techniques across India.",
      craft: "Combines more than one craft — a weave with embroidery, say — on a single cover.",
      care: "Care depends on the materials — see details or ask a consultant.",
      intro: "A mixed-technique cushion that brings more than one craft together.",
      sample: "Fabric"
    },
    generic: {
      technique: "Handcrafted",
      badge: "Made by Hand",
      face: "Natural-fibre face",
      reverse: "natural reverse",
      construction: "Concealed zip · finished edges",
      insertDesc: "premium insert",
      origin: "Crafted by hand by artisans across India.",
      craft: "Made in small batches in the technique chosen for this design.",
      care: "Care depends on the material — see details or ask a consultant.",
      intro: "A handcrafted cushion, made in small batches by skilled artisans.",
      sample: "Fabric"
    }
  };
  function mCushKey(n) {
    if (/mixed/.test(n)) return "mixed";
    if (/leather/.test(n)) return "leather";
    if (/velvet/.test(n)) return "velvet";
    if (/embroider|kantha|aari|chikan|zardozi/.test(n)) return "embroidered";
    if (/tuft/.test(n)) return "tufted";
    if (/woven|weave|dhurrie|kilim|ikat|jacquard/.test(n)) return "woven";
    if (/block|print|sanganer|bagru|dabu/.test(n)) return "block";
    if (/wool/.test(n)) return "wool";
    if (/linen/.test(n)) return "linen";
    if (/cotton/.test(n)) return "cotton";
    return "generic";
  }

  /* Shared product meta — one source of truth for screen + sticky bar */
  function mProductMeta(name) {
    const pname = name && name !== "true" ? name : "Marwar Lounge Chair";
    const n = pname.toLowerCase();
    let kind = "furniture";
    if (/rug|dhurrie|kilim|carpet/.test(n)) kind = "rug";else if (/cushion|pillow|bolster|sham/.test(n)) kind = "cushion";
    if (kind === "rug") {
      return {
        kind,
        pname,
        sku: skuOf(pname, "RG"),
        eyebrow: "Rugs · Hand-Knotted",
        badge: "Hand-Knotted in India",
        blurb: "A hand-knotted wool rug in naturally dyed earth tones — a quiet, durable foundation knotted over months on the loom.",
        galleryTones: ["olive", "stone", "bronze", "clay"],
        price: 220000,
        sizeOpts: [{
          k: "5x8",
          l: "5 × 8 ft",
          base: 140000
        }, {
          k: "6x9",
          l: "6 × 9 ft",
          base: 186000
        }, {
          k: "8x10",
          l: "8 × 10 ft",
          base: 220000
        }, {
          k: "9x12",
          l: "9 × 12 ft",
          base: 280000
        }, {
          k: "round",
          l: "Round 8 ft",
          base: 176000
        }, {
          k: "runner",
          l: "Runner 2.5 × 8",
          base: 64000
        }],
        why: WHY_M.rug,
        states: ["available-to-order", "customizable", "consultation"],
        trust: [{
          t: "Hand-knotted in India · made to order"
        }, {
          t: "Custom sizing on select designs"
        }, {
          t: "Secure, insured delivery across India"
        }, {
          t: "International shipping available"
        }],
        samples: [{
          k: "material",
          l: "Material",
          i: "ph-swatches"
        }],
        sections: [{
          h: "Construction",
          body: "Hand-knotted · Persian asymmetric knot · 100–120 knots/in² · 12 mm medium-low pile. The most enduring rug construction."
        }, {
          h: "Material",
          body: "Hand-spun highland wool pile on a mercerised cotton foundation. Naturally dyed, with gentle abrash — the subtle colour shift that marks true hand craft."
        }, {
          h: "Origin & craftsmanship",
          body: "Knotted by hand in Bhadohi, Uttar Pradesh, over four to six months — spun, dyed, knotted, sheared and bound entirely by hand."
        }, {
          h: "Care",
          body: "Low-pile vacuum without a beater bar; rotate twice yearly; professional clean every 2–3 years. Blot spills, never rub."
        }, {
          h: "Delivery & shipping",
          body: "Made to order, ships in 4–6 months via safe, insured delivery. International freight quoted at checkout."
        }],
        pairs: [{
          category: "Furniture",
          name: "Marwar Lounge Chair",
          price: "₹ 1,48,000",
          tone: "clay"
        }, {
          category: "Cushions",
          name: "Sanganeri Block-Print Cushion",
          price: "₹ 5,200",
          tone: "stone"
        }, {
          category: "Lighting",
          name: "Brass Meridian Pendant",
          price: "₹ 64,000",
          tone: "bronze"
        }]
      };
    }
    if (kind === "cushion") {
      const p = M_CUSH[mCushKey(n)];
      return {
        kind,
        pname,
        sku: skuOf(pname, "CU"),
        eyebrow: "Cushions · " + p.technique,
        badge: p.badge,
        blurb: p.intro,
        galleryTones: ["clay", "stone", "bronze"],
        price: 5200,
        insertPrice: 1400,
        cushion: p,
        sizeOpts: [{
          k: "16",
          l: "16 × 16 in",
          base: 3200
        }, {
          k: "18",
          l: "18 × 18 in",
          base: 3800
        }, {
          k: "20",
          l: "20 × 20 in",
          base: 4400
        }, {
          k: "24",
          l: "24 × 24 in",
          base: 5600
        }],
        why: WHY_M.cushion,
        states: ["available-to-order", "customizable"],
        trust: [{
          t: p.technique + " in India"
        }, {
          t: "Cover only or cover + insert"
        }, {
          t: "Made to order in small batches"
        }, {
          t: "International shipping available"
        }],
        samples: [{
          k: p.sample.toLowerCase(),
          l: p.sample,
          i: "ph-scissors"
        }],
        sections: [{
          h: "What's included",
          body: "Choose Cover Only (no insert) or Cover + Insert (a " + p.insertDesc + ", ready to use). Inserts are ethically sourced with a cotton cambric casing."
        }, {
          h: "Technique & craft",
          body: p.craft
        }, {
          h: "Material & construction",
          body: p.face + " face with a " + p.reverse + ". " + p.construction + "."
        }, {
          h: "Origin",
          body: p.origin
        }, {
          h: "Care",
          body: p.care
        }, {
          h: "Delivery & shipping",
          body: "In-stock covers ship in 3–5 days; made-to-order pieces in 1–2 weeks. International freight quoted at checkout."
        }],
        pairs: [{
          category: "Seating",
          name: "Kashi Linen Sofa",
          price: "₹ 3,20,000",
          tone: "clay"
        }, {
          category: "Rugs",
          name: "Aravalli Hand-Knotted Rug",
          price: "₹ 2,20,000",
          tone: "olive"
        }, {
          category: "Textiles",
          name: "Handwoven Wool Throw",
          price: "₹ 8,400",
          tone: "stone"
        }]
      };
    }
    return {
      kind,
      pname,
      sku: skuOf(pname, "01"),
      eyebrow: "Seating · Lounge",
      badge: "Handcrafted in India",
      blurb: "A low, generous lounge chair in solid teak and Belgian linen — drawn from the courtyards of Rajasthan.",
      galleryTones: ["clay", "espresso", "bronze", "stone"],
      price: 148000,
      sizeOpts: [{
        k: "std",
        l: "Standard"
      }, {
        k: "grand",
        l: "Grand"
      }],
      matOpts: [{
        k: "teak",
        l: "Solid Teak"
      }, {
        k: "mango",
        l: "Mango Wood"
      }, {
        k: "oak",
        l: "Oak Veneer"
      }],
      why: WHY_M.furniture,
      states: ["available-to-order", "customizable", "consultation"],
      trust: [{
        t: "Handcrafted in India · made to order"
      }, {
        t: "Customization — finishes, sizing & COM"
      }, {
        t: "Secure, insured delivery across India"
      }, {
        t: "International shipping available"
      }],
      samples: [{
        k: "fabric",
        l: "Fabric",
        i: "ph-scissors"
      }, {
        k: "finish",
        l: "Finish",
        i: "ph-paint-roller"
      }, {
        k: "material",
        l: "Material",
        i: "ph-swatches"
      }],
      sections: [{
        h: "Materials",
        body: "Frame in kiln-dried solid teak with a hand-rubbed oil finish. Seat in 100% Belgian linen over a hand-tied suspension."
      }, {
        h: "Craftsmanship",
        body: "Carved, joined and finished by hand in our Jodhpur workshop — four craftspeople, roughly three weeks per chair."
      }, {
        h: "Dimensions",
        body: "W 74 × D 82 × H 78 cm · Seat height 42 cm · 14 kg. Custom sizing via Trade."
      }, {
        h: "Assembly & Installation",
        body: "Most pieces arrive ready to use; larger items may need simple assembly. Installation help may be available by product and location — ask a consultant before ordering."
      }, {
        h: "Delivery & Shipping",
        body: "Made to order, ships in 3–4 weeks via safe, insured delivery. Assembly assistance available on select pieces. International freight quoted at checkout."
      }],
      pairs: [{
        category: "Lighting",
        name: "Brass Meridian Pendant",
        price: "₹ 64,000",
        tone: "bronze"
      }, {
        category: "Rugs",
        name: "Aravalli Knotted Rug",
        price: "₹ 2,20,000",
        tone: "olive"
      }, {
        category: "Decor",
        name: "Stone Vessel",
        price: "₹ 12,000",
        tone: "clay"
      }]
    };
  }
  function Product({
    onNavigate,
    name,
    onGuide
  }) {
    const meta = mProductMeta(name);
    const {
      kind,
      pname,
      sku,
      eyebrow,
      blurb,
      badge
    } = meta;
    const why = meta.why;
    const sections = meta.sections;
    const pairs = meta.pairs;
    const [slide, setSlide] = React.useState(0);
    const [acc, setAcc] = React.useState(0);
    const [finish, setFinish] = React.useState("natural");
    const [size, setSize] = React.useState((meta.sizeOpts.find(s => s.k === (kind === "rug" ? "8x10" : kind === "cushion" ? "18" : "std")) || meta.sizeOpts[0]).k);
    const [mat, setMat] = React.useState("teak");
    const [uph, setUph] = React.useState("linen");
    const [fill, setFill] = React.useState("insert");
    const gallery = meta.galleryTones.map(tone => ({
      tone
    }));
    const swatchColors = {
      natural: "#b9966a",
      walnut: "#6a4a2e",
      dark: "#4a3422",
      black: "#2c2824"
    };
    const upholColors = {
      linen: "#d8cdb6",
      perf: "#b7b09c",
      leather: "#8a5a3c"
    };
    const selSize = meta.sizeOpts.find(s => s.k === size) || meta.sizeOpts[0];
    let price = meta.price;
    if (kind === "rug" && selSize) price = selSize.base;
    if (kind === "cushion" && selSize) price = selSize.base + (fill === "insert" ? meta.insertPrice : 0);
    const priceNote = kind === "cushion" ? fill === "insert" ? "Cover + insert" : "Cover only" : kind === "rug" ? "Hand-knotted · available to order" : "Available to order · crafted for your home";
    const deliveryIdx = Math.max(0, sections.findIndex(s => /Delivery/.test(s.h)));
    const sizeIdx = Math.max(0, sections.findIndex(s => /Dimensions|Construction|included/i.test(s.h)));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 92
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onScroll: e => setSlide(Math.round(e.target.scrollLeft / e.target.clientWidth)),
      style: {
        display: "flex",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none"
      }
    }, gallery.map((g, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: "0 0 100%",
        scrollSnapAlign: "start"
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: g.tone,
      ratio: "1/1"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 56,
        left: PAD
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "on-image"
    }, badge)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 14,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        gap: 7
      }
    }, gallery.map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: i === slide ? 18 : 6,
        height: 6,
        borderRadius: 99,
        background: i === slide ? "var(--accent)" : "rgba(250,246,239,.7)",
        transition: "width var(--dur-base)"
      }
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `26px ${PAD}px 0`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 34,
        lineHeight: 1.08,
        letterSpacing: "var(--tracking-tight)",
        margin: "10px 0 0"
      }
    }, pname), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 12,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 24
      }
    }, fmtINR(price)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, priceNote)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--text-secondary)",
        marginTop: 16
      }
    }, blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 7,
        marginTop: 16
      }
    }, meta.states.map(k => {
      const s = M_STATUS[k];
      return /*#__PURE__*/React.createElement("span", {
        key: k,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 11px",
          borderRadius: "var(--radius-pill)",
          border: "1px solid var(--accent-soft)",
          background: "var(--surface-accent-tint)",
          fontSize: 11.5,
          color: "var(--text-accent)"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "ph " + s.icon,
        style: {
          fontSize: 12,
          color: "var(--accent-deep)"
        }
      }), s.label);
    })), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "16px 0 0",
        padding: "16px 0 0",
        borderTop: "1px solid var(--border-hairline)",
        display: "grid",
        gap: 10
      }
    }, meta.trust.map(r => /*#__PURE__*/React.createElement("li", {
      key: r.t,
      style: {
        display: "flex",
        gap: 11,
        alignItems: "flex-start",
        fontSize: 13.5,
        lineHeight: 1.4,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-check",
      style: {
        fontSize: 13,
        color: "var(--accent-deep)",
        marginTop: 3,
        flex: "none"
      }
    }), r.t))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: mLabel
    }, "Size"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, meta.sizeOpts.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.k,
      onClick: () => setSize(s.k),
      style: mPill(size === s.k)
    }, s.l, s.base ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        color: size === s.k ? "var(--text-accent)" : "var(--text-muted)"
      }
    }, fmtINR(kind === "cushion" ? s.base + (fill === "insert" ? meta.insertPrice : 0) : s.base)) : null)))), kind === "rug" && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        background: "var(--surface-accent-tint)",
        borderRadius: "var(--radius-sm)",
        padding: "16px 18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        color: "var(--text-primary)"
      }
    }, "Need a different size?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.55,
        color: "var(--text-secondary)",
        margin: "6px 0 12px"
      }
    }, "Many rugs can be made in additional or custom sizes depending on design and construction."), /*#__PURE__*/React.createElement("a", {
      href: mWa("Hello Art Avenue, I'd like a custom size for the " + pname + " (SKU " + sku + "). My room is approximately ____ ft × ____ ft."),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots",
        style: {
          color: "var(--accent-deep)"
        }
      })
    }, "Speak with a Design Consultant"))), kind === "cushion" && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: mLabel
    }, "What you're buying"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, [{
      k: "cover",
      h: "Cover Only",
      d: "Just the cover — use your own insert.",
      add: 0
    }, {
      k: "insert",
      h: "Cover + Insert",
      d: "Cover with a " + meta.cushion.insertDesc + " — ready to use.",
      add: meta.insertPrice
    }].map(o => {
      const on = fill === o.k,
        sBase = meta.sizeOpts.find(s => s.k === size).base;
      return /*#__PURE__*/React.createElement("button", {
        key: o.k,
        onClick: () => setFill(o.k),
        style: {
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 16px",
          borderRadius: "var(--radius-sm)",
          cursor: "pointer",
          background: on ? "var(--surface-accent-tint)" : "transparent",
          border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)")
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 17,
          height: 17,
          borderRadius: "50%",
          flex: "none",
          border: "1.5px solid " + (on ? "var(--accent)" : "var(--border-strong)"),
          background: on ? "radial-gradient(circle, var(--accent) 0 5px, transparent 6px)" : "transparent"
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-serif)",
          fontSize: 17
        }
      }, o.h), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-serif)",
          fontSize: 15,
          color: on ? "var(--text-accent)" : "var(--text-secondary)"
        }
      }, fmtINR(sBase + o.add))), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          color: "var(--text-muted)",
          display: "block",
          marginTop: 2
        }
      }, o.d)));
    }))), kind === "furniture" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: mLabel
    }, "Material"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, meta.matOpts.map(m => /*#__PURE__*/React.createElement("button", {
      key: m.k,
      onClick: () => setMat(m.k),
      style: mPill(mat === m.k)
    }, m.l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mLabel,
        marginBottom: 0
      }
    }, "Wood finish"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 12
      }
    }, Object.keys(swatchColors).map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setFinish(t),
      title: t,
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: swatchColors[t],
        border: "1px solid var(--border-hairline)",
        outline: finish === t ? "1.5px solid var(--accent)" : "1.5px solid transparent",
        outlineOffset: 3,
        cursor: "pointer"
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mLabel,
        marginBottom: 0
      }
    }, "Upholstery"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 12
      }
    }, Object.keys(upholColors).map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setUph(t),
      title: t,
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: upholColors[t],
        border: "1px solid var(--border-hairline)",
        outline: uph === t ? "1.5px solid var(--accent)" : "1.5px solid transparent",
        outlineOffset: 3,
        cursor: "pointer"
      }
    })))), /*#__PURE__*/React.createElement("a", {
      href: mWa("Hello Art Avenue, I'd like a custom size or finish for the " + pname + " (SKU " + sku + ")."),
      target: "_blank",
      rel: "noopener",
      style: {
        marginTop: 18,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "var(--text-accent)",
        fontSize: 12,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        textDecoration: "none"
      }
    }, "Need a Custom Size or Finish? ", /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-right"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        paddingTop: 18,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        marginBottom: 4
      }
    }, "Request a sample"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-secondary)",
        marginBottom: 12
      }
    }, "From ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "\u20B9999"), " \xB7 \u20B9999\u2013\u20B92,999 by material"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${meta.samples.length}, 1fr)`,
        gap: 10
      }
    }, meta.samples.map(s => /*#__PURE__*/React.createElement("a", {
      key: s.k,
      href: mWa("Hello Art Avenue, I'd like to request a " + s.k + " sample for the " + pname + " (SKU " + sku + "). I understand a sample fee of ₹999–₹2,999 applies depending on the material."),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 7,
        padding: "14px 6px",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + s.i,
      style: {
        fontSize: 20,
        color: "var(--accent-deep)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase"
      }
    }, s.l))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: mWa("Hello Art Avenue, I'd like to speak with a design consultant about the " + pname + " (SKU " + sku + ")."),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots",
        style: {
          color: "var(--accent-deep)"
        }
      })
    }, "Speak with a Design Consultant")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => kind === "rug" && onGuide ? onGuide() : setAcc(sizeIdx),
      style: mQuick
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-ruler"
    }), " ", kind === "furniture" ? "Dimensions" : "Size Guide"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setAcc(deliveryIdx),
      style: mQuick
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-truck"
    }), " Delivery"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, sections.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.h,
      style: {
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setAcc(acc === i ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "none",
        border: "none",
        padding: "18px 0",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        fontWeight: 500
      }
    }, s.h), /*#__PURE__*/React.createElement("i", {
      className: "ph ph-" + (acc === i ? "minus" : "plus"),
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    })), acc === i && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 18,
        fontSize: 14.5,
        lineHeight: 1.65,
        color: "var(--text-secondary)"
      }
    }, s.body))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        borderTop: "1px solid var(--border-hairline)",
        padding: `48px 0`,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `0 ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Why You'll Love It",
      title: why.title
    }), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "20px 0 0",
        padding: 0
      }
    }, why.points.map(([h, t], i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0 14px",
        padding: "15px 0",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 15,
        color: "var(--text-accent)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        fontWeight: 500,
        color: "var(--text-primary)",
        lineHeight: 1.25
      }
    }, h), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.55,
        color: "var(--text-secondary)",
        marginTop: 3
      }
    }, t))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
        padding: `48px ${PAD}px`,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--accent-soft)"
      }
    }, "Made For Your Space"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 28,
        lineHeight: 1.1,
        margin: "12px 0 0"
      }
    }, "Most pieces can be made to suit."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.65,
        color: "var(--text-on-dark-muted)",
        margin: "12px 0 0"
      }
    }, "Available in additional sizes, finishes and materials depending on the piece. Tell us about your room and a consultant will shape it with you."), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "20px 0 24px",
        padding: 0,
        borderTop: "1px solid var(--border-on-dark)"
      }
    }, (MFYS[kind] || MFYS.furniture).map(o => /*#__PURE__*/React.createElement("li", {
      key: o,
      style: {
        display: "flex",
        gap: 11,
        alignItems: "center",
        padding: "13px 0",
        borderBottom: "1px solid var(--border-on-dark)",
        fontSize: 14.5
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-plus",
      style: {
        fontSize: 13,
        color: "var(--accent-soft)",
        flex: "none"
      }
    }), o))), /*#__PURE__*/React.createElement("a", {
      href: mWa("Hello Art Avenue, I'd like to customize the " + pname + " (SKU " + sku + ")."),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Speak with a Design Consultant"))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: `48px 0`,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `0 ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Pair With",
      title: "Complete the room"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        ...railStyle,
        marginTop: 24
      }
    }, pairs.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        flex: "0 0 200px",
        scrollSnapAlign: "start"
      }
    }, /*#__PURE__*/React.createElement(ProductCard, {
      category: p.category,
      name: p.name,
      price: p.price,
      favorite: false,
      onClick: e => {
        e.preventDefault();
        onNavigate("product", p.name);
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: p.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    })))))), /*#__PURE__*/React.createElement(MobileFooter, {
      onNavigate: onNavigate
    }));
  }
  function ProductBottomBar({
    onNavigate,
    name
  }) {
    const meta = mProductMeta(name);
    const consult = mWa("Hello Art Avenue, I'd like to speak with a design consultant about the " + meta.pname + " (SKU " + meta.sku + ").");
    const priceLabel = meta.kind === "furniture" ? fmtINR(meta.price) : "from " + fmtINR(meta.price);
    const note = meta.kind === "rug" ? "Hand-knotted · to order" : "Available to order";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 35,
        background: "var(--surface-raised)",
        borderTop: "1px solid var(--border-hairline)",
        padding: `12px ${PAD}px 26px`,
        display: "flex",
        alignItems: "center",
        gap: 10,
        boxShadow: "0 -8px 24px -16px rgba(43,40,36,.4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.1,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19
      }
    }, priceLabel), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: "var(--text-muted)"
      }
    }, note)), /*#__PURE__*/React.createElement("a", {
      href: consult,
      target: "_blank",
      rel: "noopener",
      "aria-label": "Speak with a Design Consultant",
      style: {
        flex: "none",
        width: 50,
        height: 50,
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "var(--accent-deep)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-chat-teardrop-dots",
      style: {
        fontSize: 21
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => onNavigate && onNavigate("cart")
    }, "Add to Cart")));
  }

  /* ============ CART ============ */
  function Cart({
    onNavigate,
    items,
    setItems
  }) {
    const setQty = (id, d) => setItems(items.map(it => it.id === id ? {
      ...it,
      qty: Math.max(1, it.qty + d)
    } : it));
    const remove = id => setItems(items.filter(it => it.id !== id));
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    if (items.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: `80px ${PAD}px`,
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "ph-light ph-handbag-simple",
        style: {
          fontSize: 40,
          color: "var(--text-faint)"
        }
      }), /*#__PURE__*/React.createElement("h1", {
        style: {
          fontFamily: "var(--font-serif)",
          fontWeight: 500,
          fontSize: 30,
          margin: "18px 0 8px"
        }
      }, "Your cart is empty"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 15,
          color: "var(--text-secondary)",
          marginBottom: 26
        }
      }, "Every piece is made by hand \u2014 begin with the collection."), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => onNavigate("collection", "Furniture")
      }, "Explore the Collection"));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 96
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `28px ${PAD}px 8px`
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent"
    }, "Your Cart"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 32,
        margin: "12px 0 0"
      }
    }, items.length, " ", items.length === 1 ? "piece" : "pieces")), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `12px ${PAD}px`
      }
    }, items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: "flex",
        gap: 16,
        padding: "20px 0",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 86,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: it.tone,
      ratio: "4/5"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 19,
        lineHeight: 1.2,
        margin: 0
      }
    }, it.name), /*#__PURE__*/React.createElement("button", {
      onClick: () => remove(it.id),
      "aria-label": "Remove",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-faint)",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-x",
      style: {
        fontSize: 17
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        marginTop: 5
      }
    }, it.finish), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--accent-deep)",
        letterSpacing: ".04em",
        marginTop: 6,
        textTransform: "uppercase"
      }
    }, "Made to order"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setQty(it.id, -1),
      style: stepBtn
    }, "\\u2013"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        textAlign: "center",
        fontSize: 14
      }
    }, it.qty), /*#__PURE__*/React.createElement("button", {
      onClick: () => setQty(it.id, 1),
      style: stepBtn
    }, "+")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18
      }
    }, fmt(it.price * it.qty)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        background: "var(--surface-accent-tint)",
        padding: "16px 18px",
        borderRadius: "var(--radius-sm)",
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-truck",
      style: {
        fontSize: 22,
        color: "var(--accent-deep)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.55,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 500
      }
    }, "Safe, insured delivery."), " Securely packed for transit; assembly assistance on select pieces.")), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate("collection", "Furniture"),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-accent)",
        fontSize: 13,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        marginTop: 24,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-left"
    }), " Continue shopping")));
  }
  const stepBtn = {
    width: 34,
    height: 38,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    color: "var(--text-secondary)"
  };
  function CartBottomBar({
    onNavigate,
    items
  }) {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    return /*#__PURE__*/React.createElement("div", {
      style: barWrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        letterSpacing: ".03em"
      }
    }, "Subtotal \\u00b7 standard delivery included"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 22
      }
    }, fmt(subtotal))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => onNavigate("checkout")
    }, "Checkout"));
  }
  const barWrap = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 35,
    background: "var(--surface-raised)",
    borderTop: "1px solid var(--border-hairline)",
    padding: `14px ${PAD}px 28px`,
    boxShadow: "0 -8px 24px -16px rgba(43,40,36,.4)"
  };

  /* ============ CHECKOUT ============ */
  function Checkout({
    onNavigate,
    items
  }) {
    const [open, setOpen] = React.useState(false);
    const [delivery, setDelivery] = React.useState("standard");
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const deliveries = [{
      id: "standard",
      h: "Standard Delivery",
      t: "Safe, insured, securely packed \u00b7 3\u20134 weeks",
      price: "Included"
    }, {
      id: "assembly",
      h: "Assembly Assistance",
      t: "Select furniture, confirm with a consultant \u00b7 2\u20133 weeks",
      price: "On request"
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 100
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o => !o),
      style: {
        width: "100%",
        background: "var(--surface-alt)",
        border: "none",
        borderBottom: "1px solid var(--border-hairline)",
        padding: `16px ${PAD}px`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 14,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-handbag-simple"
    }), " Order summary ", /*#__PURE__*/React.createElement("i", {
      className: "ph ph-caret-" + (open ? "up" : "down"),
      style: {
        fontSize: 12
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18
      }
    }, fmt(subtotal))), open && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-alt)",
        padding: `4px ${PAD}px 18px`,
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: "flex",
        gap: 12,
        padding: "10px 0",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: it.tone,
      ratio: "1/1"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 13.5
      }
    }, it.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, "\\u00d7 ", it.qty)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5
      }
    }, fmt(it.price * it.qty))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `26px ${PAD}px`,
        display: "grid",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: ckH
    }, "Contact"), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@studio.com"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: ckH
    }, "Shipping address"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "Aisha"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      placeholder: "Kohli"
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Address",
      placeholder: "Flat / house, street"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "City",
      placeholder: "Mumbai"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Pincode",
      placeholder: "400050"
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Country",
      options: ["India", "United Arab Emirates", "United Kingdom", "United States", "Singapore"]
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: ckH
    }, "Delivery"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, deliveries.map(d => /*#__PURE__*/React.createElement("button", {
      key: d.id,
      onClick: () => setDelivery(d.id),
      style: {
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        background: "var(--surface-page)",
        border: "1px solid " + (delivery === d.id ? "var(--accent)" : "var(--border-strong)")
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: "50%",
        flex: "none",
        border: "1.5px solid " + (delivery === d.id ? "var(--accent)" : "var(--border-strong)"),
        background: delivery === d.id ? "radial-gradient(circle, var(--accent) 0 5px, transparent 6px)" : "transparent"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-serif)",
        fontSize: 17
      }
    }, d.h), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, d.t)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: d.price === "Included" ? "var(--accent-deep)" : "var(--text-secondary)"
      }
    }, d.price))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: ckH
    }, "Payment"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Card number",
      placeholder: "1234 5678 9012 3456"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Expiry",
      placeholder: "MM / YY"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "CVC",
      placeholder: "123"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-lock-simple"
    }), " Encrypted & secure \\u00b7 we never store card details.")))));
  }
  const ckH = {
    fontFamily: "var(--font-serif)",
    fontWeight: 500,
    fontSize: 21,
    margin: "0 0 14px"
  };
  function CheckoutBottomBar({
    onNavigate,
    items
  }) {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    return /*#__PURE__*/React.createElement("div", {
      style: barWrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, "Total"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 22
      }
    }, fmt(subtotal))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => onNavigate("confirm")
    }, "Place Order"));
  }

  /* ============ CONFIRMATION ============ */
  function Confirmation({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `72px ${PAD}px`,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        border: "1px solid var(--accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-check",
      style: {
        fontSize: 30,
        color: "var(--accent-deep)"
      }
    })), /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      center: true
    }, "Order Confirmed"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 34,
        lineHeight: 1.12,
        margin: "16px 0 0"
      }
    }, "Thank you \u2014 your pieces are", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--text-accent)"
      }
    }, "being made by hand.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.6,
        color: "var(--text-secondary)",
        margin: "16px auto 0",
        maxWidth: 320
      }
    }, "Order ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)"
      }
    }, "#AA-20496"), ". A confirmation and your delivery timeline are on the way to your inbox."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 30,
        display: "grid",
        gap: 12,
        maxWidth: 280,
        margin: "30px auto 0"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => onNavigate("home")
    }, "Continue Shopping"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onNavigate("home")
    }, "Track your order")));
  }

  /* ============ FOOTER ============ */
  function MobileFooter({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `40px ${PAD}px`,
        borderBottom: "1px solid var(--border-on-dark)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark"
    }, "The Art Avenue Letter"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 26,
        margin: "12px 0 18px",
        lineHeight: 1.15
      }
    }, "Stories from the atelier, ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--accent-soft)"
      }
    }, "first.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Your email",
      style: {
        flex: 1,
        background: "transparent",
        border: "1px solid var(--border-on-dark)",
        borderRadius: "var(--radius-sm)",
        color: "#fff",
        padding: "0 14px",
        fontFamily: "var(--font-sans)",
        fontSize: 14
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true,
      size: "sm"
    }, "Join"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `28px ${PAD}px`,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24
      }
    }, [{
      h: "Shop",
      l: ["Furniture", "Rugs", "Lighting", "Decor"]
    }, {
      h: "Discover",
      l: ["Our Story", "Journal", "Trade", "Customer Homes"]
    }].map(c => /*#__PURE__*/React.createElement("div", {
      key: c.h
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--accent-soft)",
        marginBottom: 14
      }
    }, c.h), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, c.l.map(x => /*#__PURE__*/React.createElement("a", {
      key: x,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        color: "var(--text-on-dark-muted)",
        textDecoration: "none",
        fontSize: 14
      }
    }, x)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `16px ${PAD}px 40px`,
        borderTop: "1px solid var(--border-on-dark)",
        fontSize: 11.5,
        color: "var(--text-on-dark-muted)"
      }
    }, "\xA9 2026 Art Avenue \xB7 Handcrafted in India"));
  }

  /* ============ BOTTOM SHEET ============ */
  /* ============ CUSTOM & BESPOKE ============ */
  function Custom({
    onNavigate
  }) {
    const consult = mWa("Hello Art Avenue, I'd like to discuss a custom or bespoke project.");
    const disciplines = [{
      i: "ph-armchair",
      h: "Custom Furniture",
      t: "Your dimensions, woods & finishes."
    }, {
      i: "ph-scribble-loop",
      h: "Custom Rugs",
      t: "Bespoke sizes, colours & motifs."
    }, {
      i: "ph-needle",
      h: "Custom Upholstery",
      t: "Your own fabric, fills & profiles."
    }, {
      i: "ph-house-line",
      h: "Interior Projects",
      t: "Whole-room & whole-home schemes."
    }, {
      i: "ph-buildings",
      h: "Hospitality Projects",
      t: "Contract-grade, at scale."
    }, {
      i: "ph-pen-nib",
      h: "Designer Collaborations",
      t: "Co-created & one-of-a-kind."
    }, {
      i: "ph-package",
      h: "Project Procurement",
      t: "Logistics for multi-room orders."
    }];
    const journey = [["01", "Discover", "Share your space and how you live — no obligation."], ["02", "Consult", "A dedicated consultant shapes the brief with you."], ["03", "Design & Sample", "Drawings, renders and material samples to your door."], ["04", "Craft", "Made by hand in our ateliers, with progress updates."], ["05", "Deliver & Install", "Placed and styled in your space, anywhere."]];
    const materials = [["Solid Teak", "bronze"], ["Belgian Linen", "stone"], ["Highland Wool", "olive"], ["Aged Brass", "bronze"], ["Travertine", "sand"], ["Full-Grain Leather", "clay"]];
    const portfolio = [["Udaipur lake villa", "clay", "Residential"], ["The Verandah · hotel", "espresso", "Hospitality"], ["Bandra penthouse", "olive", "Residential"], ["Maison Rao · rugs", "sand", "Custom Rugs"]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        minHeight: 520
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: "espresso",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(28,25,22,.86), rgba(28,25,22,.34) 58%, rgba(28,25,22,.4))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: `90px ${PAD}px 40px`,
        minHeight: 520,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--accent-soft)"
      }
    }, "Custom & Bespoke \xB7 The Atelier"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "var(--text-on-dark)",
        fontSize: 40,
        lineHeight: 1.04,
        letterSpacing: "var(--tracking-tight)",
        margin: "14px 0 0"
      }
    }, "Made for your space, ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: "#EBD9BE"
      }
    }, "down to the last detail.")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(250,246,239,.88)",
        fontSize: 15.5,
        fontWeight: 300,
        lineHeight: 1.6,
        marginTop: 16
      }
    }, "Most of what we make begins as a conversation, not a catalogue. Tell us about your room, project or collection."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#cb-form-m",
      onClick: e => {
        e.preventDefault();
        const el = document.getElementById("cb-form-m");
        el && el.scrollIntoView();
      },
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true
    }, "Start a Project")), /*#__PURE__*/React.createElement("a", {
      href: consult,
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true,
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Speak with a Design Consultant"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 26,
        marginTop: 30
      }
    }, [["25+", "years"], ["1,200+", "commissions"], ["40+", "hospitality"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 26,
        color: "var(--text-on-dark)",
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: "rgba(250,246,239,.66)",
        marginTop: 6
      }
    }, l)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `40px ${PAD}px 8px`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "A Design Studio, Not a Store"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 1.32,
        margin: "12px 0 0"
      }
    }, "We're happiest when a piece is made for one home \u2014 yours \u2014 rather than for everyone.")), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `32px ${PAD}px 8px`
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 26,
        margin: "0 0 18px"
      }
    }, "What we make to order"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, disciplines.map(d => /*#__PURE__*/React.createElement("a", {
      key: d.h,
      href: "#cb-form-m",
      onClick: e => {
        e.preventDefault();
        const el = document.getElementById("cb-form-m");
        el && el.scrollIntoView();
      },
      style: {
        textDecoration: "none",
        display: "flex",
        gap: 14,
        alignItems: "center",
        padding: "16px 16px",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-sm)",
        background: "var(--surface-raised)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + d.i,
      style: {
        fontSize: 25,
        color: "var(--accent-deep)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        color: "var(--text-primary)"
      }
    }, d.h), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 12.5,
        color: "var(--text-secondary)",
        marginTop: 2
      }
    }, d.t)), /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-right",
      style: {
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `40px 0 8px`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `0 ${PAD}px`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "Project Portfolio"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 26,
        margin: "10px 0 18px"
      }
    }, "Commissioned, made & installed")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none",
        padding: `0 ${PAD}px`
      }
    }, portfolio.map(([label, tone, tag]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        flex: "0 0 240px",
        scrollSnapAlign: "start",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: tone,
      ratio: "4/5",
      label: label
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 12,
        left: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "on-image"
    }, tag)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `40px ${PAD}px 8px`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "The Client Journey"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 26,
        margin: "10px 0 0"
      }
    }, "Discover \xB7 Consult \xB7 Customize \xB7 Order"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "20px 0 0",
        padding: 0
      }
    }, journey.map(([n, h, t]) => /*#__PURE__*/React.createElement("li", {
      key: n,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0 14px",
        padding: "15px 0",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 15,
        color: "var(--text-accent)"
      }
    }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        fontWeight: 500,
        color: "var(--text-primary)"
      }
    }, h), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.55,
        color: "var(--text-secondary)",
        marginTop: 3
      }
    }, t)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
        padding: `48px ${PAD}px`,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--accent-soft)"
      }
    }, "Material Selection"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 28,
        lineHeight: 1.1,
        margin: "12px 0 0"
      }
    }, "Begin with the materials."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.65,
        color: "var(--text-on-dark-muted)",
        margin: "12px 0 0"
      }
    }, "Honest materials, sampled to your door before a single piece is made."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 12,
        margin: "22px 0 0"
      }
    }, materials.map(([name, tone]) => /*#__PURE__*/React.createElement("div", {
      key: name
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: tone,
      ratio: "1/1"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-on-dark-muted)",
        marginTop: 7
      }
    }, name)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => onNavigate("collection", "Materials")
    }, "Explore the Material Library"))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: `48px ${PAD}px 8px`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "Case Study"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 26,
        margin: "10px 0 16px"
      }
    }, "The Verandah, Goa"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Fig, {
      tone: "espresso",
      ratio: "4/3",
      label: "42-key boutique hotel"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 12,
        left: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "on-image"
    }, "Hospitality"))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.65,
        color: "var(--text-secondary)",
        margin: "16px 0 0"
      }
    }, "A boutique hotel furnished end-to-end \u2014 lobby seating, restaurant banquettes, 42 bedroom schemes and bespoke runners, delivered across two phases."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 24,
        marginTop: 20,
        paddingTop: 18,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, [["320+", "pieces"], ["9", "months"], ["42", "rooms"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 26,
        color: "var(--text-primary)",
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-muted)",
        marginTop: 6
      }
    }, l))))), /*#__PURE__*/React.createElement("section", {
      id: "cb-form-m",
      style: {
        background: "var(--surface-alt)",
        padding: `48px ${PAD}px`,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "Start a Project"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 28,
        lineHeight: 1.1,
        margin: "12px 0 0"
      }
    }, "Tell us about your space."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.65,
        color: "var(--text-secondary)",
        margin: "12px 0 0"
      }
    }, "A dedicated consultant will be in touch within two business days \u2014 no obligation."), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => e.preventDefault(),
      style: {
        display: "grid",
        gap: 16,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      placeholder: "Ananya Mehta",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      placeholder: "+91 ..."
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Project type",
      options: ["Custom Furniture", "Custom Rugs", "Custom Upholstery", "Interior Project", "Hospitality Project", "Designer Collaboration", "Project Procurement"]
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Timeline",
      options: ["Exploring", "Within 3 months", "3–6 months", "6+ months"]
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Budget guide",
      options: ["Under ₹ 5 lakh", "₹ 5–15 lakh", "₹ 15–50 lakh", "₹ 50 lakh +", "Prefer to discuss"]
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Location",
      placeholder: "City / project site"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "About your project",
      multiline: true,
      placeholder: "The room or property, how you'll use it, references\u2026"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true
    }, "Submit Enquiry"), /*#__PURE__*/React.createElement("a", {
      href: consult,
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Or message a consultant now")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: "var(--text-faint)",
        textAlign: "center",
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-lock-simple",
      style: {
        marginRight: 5
      }
    }), "Your details are kept private and never shared."))), /*#__PURE__*/React.createElement(MobileFooter, {
      onNavigate: onNavigate
    }));
  }
  function Sheet({
    kind,
    onClose
  }) {
    const open = !!kind;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(34,31,27,.42)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--dur-base)",
        zIndex: 42
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        maxHeight: "78%",
        background: "var(--surface-page)",
        borderRadius: "16px 16px 0 0",
        transform: open ? "translateY(0)" : "translateY(101%)",
        transition: "transform var(--dur-slow) var(--ease-luxe)",
        zIndex: 43,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 0 4px",
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 99,
        background: "var(--border-strong)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `8px ${PAD}px`,
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 22
      }
    }, kind === "sort" ? "Sort" : "Filter"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        background: "none",
        border: "none",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-x",
      style: {
        fontSize: 22
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: `4px ${PAD}px 12px`
      }
    }, kind === "sort" ? ["Featured", "Newest", "Price: Low to High", "Price: High to Low"].map((o, i) => /*#__PURE__*/React.createElement("label", {
      key: o,
      style: sheetRow
    }, o, /*#__PURE__*/React.createElement("span", {
      style: radio(i === 0)
    }))) : [{
      h: "Category",
      o: ["Seating", "Tables", "Storage", "Beds"]
    }, {
      h: "Material",
      o: ["Teak", "Oak", "Cane", "Marble", "Brass"]
    }, {
      h: "Availability",
      o: ["In stock", "Made to order"]
    }].map(g => /*#__PURE__*/React.createElement("div", {
      key: g.h,
      style: {
        padding: "16px 0",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        marginBottom: 12
      }
    }, g.h), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 10
      }
    }, g.o.map((x, i) => /*#__PURE__*/React.createElement("span", {
      key: x,
      style: chip(i === 0)
    }, x)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: `14px ${PAD}px 30px`,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: onClose
    }, kind === "sort" ? "Apply" : "Show 136 pieces"))));
  }
  const sheetRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    borderBottom: "1px solid var(--border-hairline)",
    fontSize: 16,
    color: "var(--text-primary)",
    cursor: "pointer"
  };
  const radio = on => ({
    width: 18,
    height: 18,
    borderRadius: "50%",
    border: "1.5px solid " + (on ? "var(--accent)" : "var(--border-strong)"),
    background: on ? "radial-gradient(circle, var(--accent) 0 5px, transparent 6px)" : "transparent"
  });
  const chip = on => ({
    padding: "9px 16px",
    borderRadius: 99,
    border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)"),
    background: on ? "var(--surface-accent-tint)" : "transparent",
    color: on ? "var(--text-accent)" : "var(--text-secondary)",
    fontSize: 13.5,
    cursor: "pointer"
  });

  /* ============ APP ============ */
  function MobileApp() {
    const [hist, setHist] = React.useState([{
      name: "home",
      arg: null
    }]);
    const [drawer, setDrawer] = React.useState(false);
    const [sheet, setSheet] = React.useState(null);
    const [guide, setGuide] = React.useState(false);
    const [cart, setCart] = React.useState(INITIAL_CART);
    const scrollRef = React.useRef(null);
    const route = hist[hist.length - 1];
    const resetScroll = () => {
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    };
    const navigate = (name, arg) => {
      setHist(h => [...h, {
        name,
        arg
      }]);
      resetScroll();
    };
    const goBack = () => {
      setHist(h => h.length > 1 ? h.slice(0, -1) : h);
      resetScroll();
    };
    let page;
    if (route.name === "collection" || route.name === "trade") page = /*#__PURE__*/React.createElement(Collection, {
      onNavigate: navigate,
      title: route.name === "trade" ? "Trade & Design" : route.arg,
      onFilter: setSheet,
      onGuide: () => setGuide(true)
    });else if (route.name === "product") page = /*#__PURE__*/React.createElement(Product, {
      onNavigate: navigate,
      name: route.arg,
      onGuide: () => setGuide(true)
    });else if (route.name === "custom") page = /*#__PURE__*/React.createElement(Custom, {
      onNavigate: navigate
    });else if (route.name === "cart") page = /*#__PURE__*/React.createElement(Cart, {
      onNavigate: navigate,
      items: cart,
      setItems: setCart
    });else if (route.name === "checkout") page = /*#__PURE__*/React.createElement(Checkout, {
      onNavigate: navigate,
      items: cart
    });else if (route.name === "confirm") page = /*#__PURE__*/React.createElement(Confirmation, {
      onNavigate: (n, a) => {
        if (n === "home") {
          setHist([{
            name: "home",
            arg: null
          }]);
          resetScroll();
        } else navigate(n, a);
      }
    });else page = /*#__PURE__*/React.createElement(Home, {
      onNavigate: navigate
    });
    const cartCount = cart.reduce((s, it) => s + it.qty, 0);
    const showBack = ["product", "cart", "checkout", "custom"].includes(route.name);
    const title = {
      cart: "Cart",
      checkout: "Checkout",
      confirm: ""
    }[route.name];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "100%",
        overflow: "hidden",
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      style: {
        height: "100%",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      onMenu: () => setDrawer(true),
      onNavigate: navigate,
      back: showBack,
      onBack: goBack,
      cartCount: cartCount
    }), /*#__PURE__*/React.createElement("div", {
      key: route.name + (route.arg || ""),
      style: {
        animation: "aaRise var(--dur-slow) var(--ease-luxe)"
      }
    }, page)), route.name === "product" && /*#__PURE__*/React.createElement(ProductBottomBar, {
      onNavigate: navigate,
      name: route.arg
    }), route.name === "cart" && cart.length > 0 && /*#__PURE__*/React.createElement(CartBottomBar, {
      onNavigate: navigate,
      items: cart
    }), route.name === "checkout" && /*#__PURE__*/React.createElement(CheckoutBottomBar, {
      onNavigate: navigate,
      items: cart
    }), /*#__PURE__*/React.createElement(Drawer, {
      open: drawer,
      onClose: () => setDrawer(false),
      onNavigate: navigate
    }), /*#__PURE__*/React.createElement(Sheet, {
      kind: sheet,
      onClose: () => setSheet(null)
    }), /*#__PURE__*/React.createElement(RugGuideSheet, {
      open: guide,
      onClose: () => setGuide(false)
    }));
  }
  window.AAMobileApp = MobileApp;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/mobile-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CollectionPage.jsx
try { (() => {
/* Art Avenue — Collection page (discovery + merchandising) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge,
    Select,
    ProductCard,
    CollectionTile
  } = DS;
  const Figure = window.AAFigure;
  const wrap = (extra = {}) => ({
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...extra
  });
  const PRODUCTS = [{
    category: "Seating",
    name: "Marwar Lounge Chair",
    price: "₹ 1,48,000",
    note: "Made to order",
    tone: "clay",
    commerce: "made-to-order"
  }, {
    category: "Seating",
    name: "Kashi Linen Sofa",
    price: "₹ 3,20,000",
    tone: "stone",
    commerce: "made-to-order"
  }, {
    category: "Tables",
    name: "Udai Travertine Coffee Table",
    price: "₹ 96,000",
    tone: "bronze",
    commerce: "in-stock"
  }, {
    category: "Seating",
    name: "Pichola Cane Armchair",
    price: "₹ 84,000",
    note: "Ships in 3 wks",
    tone: "olive",
    commerce: "in-stock"
  }, {
    category: "Storage",
    name: "Jodha Carved Sideboard",
    price: "₹ 2,60,000",
    tone: "espresso",
    commerce: "customizable"
  }, {
    category: "Tables",
    name: "Amer Marble Dining Table",
    price: "₹ 4,10,000",
    tone: "stone",
    commerce: "customizable"
  }, {
    category: "Seating",
    name: "Bagh Lounge Daybed",
    price: "Project pricing",
    tone: "clay",
    commerce: "project"
  }, {
    category: "Storage",
    name: "Mehrangarh Bar Cabinet",
    price: "₹ 1,96,000",
    note: "Made to order",
    tone: "bronze",
    commerce: "made-to-order"
  }, {
    category: "Tables",
    name: "Chittor Nesting Tables",
    price: "₹ 72,000",
    tone: "olive",
    commerce: "in-stock"
  }, {
    category: "Cushions",
    name: "Sanganeri Block-Print Cushion",
    price: "from ₹ 3,200",
    tone: "clay",
    commerce: "made-to-order"
  }];
  function FilterGroup({
    title,
    options,
    type = "check",
    defaultOpen = true
  }) {
    const [open, setOpen] = React.useState(defaultOpen);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid var(--border-hairline)",
        padding: "20px 0"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o => !o),
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-primary)"
      }
    }, title, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-" + (open ? "minus" : "plus"),
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    })), open && /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "16px 0 0",
        padding: 0,
        display: "grid",
        gap: 12
      }
    }, options.map(o => /*#__PURE__*/React.createElement("li", {
      key: o.label
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        cursor: "pointer",
        fontSize: 14,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 15,
        height: 15,
        border: "1px solid var(--border-strong)",
        borderRadius: type === "radio" ? "50%" : "var(--radius-xs)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: o.on ? "var(--accent)" : "transparent",
        borderColor: o.on ? "var(--accent)" : "var(--border-strong)"
      }
    }, o.on && /*#__PURE__*/React.createElement("i", {
      className: "ph-bold ph-check",
      style: {
        fontSize: 9,
        color: "#fff"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, o.label), o.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-faint)",
        fontSize: 12
      }
    }, o.count))))));
  }
  function Sidebar({
    isRug
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        position: "sticky",
        top: 96,
        alignSelf: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 22,
        fontWeight: 500
      }
    }, "Filter"), /*#__PURE__*/React.createElement("button", {
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 12,
        color: "var(--text-accent)",
        letterSpacing: ".04em"
      }
    }, "Clear all")), isRug ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Size",
      options: [{
        label: "5×8 ft",
        count: 22
      }, {
        label: "6×9 ft",
        count: 18,
        on: true
      }, {
        label: "8×10 ft",
        count: 14
      }, {
        label: "9×12 ft",
        count: 9
      }, {
        label: "Runner",
        count: 11
      }, {
        label: "Round",
        count: 7
      }]
    }), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Material",
      options: [{
        label: "Hand-Knotted Wool",
        count: 26
      }, {
        label: "Flatweave",
        count: 14
      }, {
        label: "Jute & Natural",
        count: 12
      }, {
        label: "Cotton",
        count: 9
      }, {
        label: "Silk Blend",
        count: 5
      }]
    }), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Colour",
      type: "check",
      options: [{
        label: "Ivory & Sand",
        count: 19
      }, {
        label: "Charcoal",
        count: 12
      }, {
        label: "Terracotta",
        count: 8
      }, {
        label: "Indigo",
        count: 6
      }]
    }), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Pattern",
      defaultOpen: false,
      options: [{
        label: "Solid",
        count: 14
      }, {
        label: "Geometric",
        count: 16
      }, {
        label: "Botanical",
        count: 9
      }, {
        label: "Abstract",
        count: 7
      }]
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Category",
      options: [{
        label: "Seating",
        count: 42,
        on: true
      }, {
        label: "Tables",
        count: 28
      }, {
        label: "Storage",
        count: 19
      }, {
        label: "Beds",
        count: 11
      }]
    }), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Material",
      options: [{
        label: "Solid Teak",
        count: 31
      }, {
        label: "Oak",
        count: 22
      }, {
        label: "Cane & Rattan",
        count: 14
      }, {
        label: "Marble & Stone",
        count: 9
      }, {
        label: "Brass",
        count: 7
      }]
    }), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Availability",
      type: "radio",
      options: [{
        label: "In stock",
        count: 38
      }, {
        label: "Made to order",
        count: 64,
        on: true
      }]
    }), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Price",
      type: "radio",
      defaultOpen: false,
      options: [{
        label: "Under ₹ 1,00,000"
      }, {
        label: "₹ 1,00,000 – ₹ 2,50,000"
      }, {
        label: "₹ 2,50,000 +"
      }]
    })));
  }

  /* horizontal facet chip row */
  function FacetRow({
    label,
    options,
    onPick
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        marginBottom: 14
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, options.map(o => /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => onPick && onPick(o),
      style: {
        padding: "9px 18px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        letterSpacing: ".02em",
        background: "transparent",
        color: "var(--text-secondary)",
        border: "1px solid var(--border-strong)"
      }
    }, o))));
  }

  /* "Shop by Room/Collection" image-tile row */
  function ShopByTiles({
    label,
    items,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        marginBottom: 16
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "var(--gap-card)"
      }
    }, items.map(it => /*#__PURE__*/React.createElement(CollectionTile, {
      key: it.t,
      title: it.t,
      tone: it.l || "dark",
      cta: "",
      onClick: e => {
        e.preventDefault();
        onNavigate("collection", it.t);
      },
      style: {
        minHeight: 170,
        borderRadius: "var(--radius-xs)"
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: it.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    })))));
  }

  /* curated edits tabs */
  function EditTabs() {
    const tabs = ["New Arrivals", "Best Sellers", "Designer Favourites", "Trending Now"];
    const [active, setActive] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 28,
        borderBottom: "1px solid var(--border-hairline)",
        marginBottom: 32,
        flexWrap: "wrap"
      }
    }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setActive(i),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 14px",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: active === i ? "var(--text-primary)" : "var(--text-muted)",
        borderBottom: "2px solid " + (active === i ? "var(--accent)" : "transparent"),
        marginBottom: -1
      }
    }, t)));
  }

  /* Rug size guide drawer */
  function RugGuide({
    open,
    onClose
  }) {
    const rooms = [{
      h: "Living Room",
      t: "Front legs of the sofa & chairs rest on the rug; leave 20–25 cm of floor around the edges.",
      z: "8×10 ft / 9×12 ft"
    }, {
      h: "Dining Room",
      t: "Extend ~60 cm beyond the table so chairs stay on the rug when pulled out.",
      z: "8×10 ft (6-seat) · 9×12 ft (8-seat)"
    }, {
      h: "Bedroom",
      t: "Two-thirds under the bed with a soft border to step onto, or runners either side.",
      z: "8×10 ft (queen) · 9×12 ft (king)"
    }, {
      h: "Runners & Hallways",
      t: "Leave 10–15 cm of floor on each side; a runner ~50 cm narrower than the corridor.",
      z: "2.5×8 ft / 2.5×10 ft"
    }];
    return ReactDOM.createPortal(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(34,31,27,.46)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--dur-base)",
        zIndex: 80
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "min(480px, 92vw)",
        background: "var(--surface-page)",
        transform: open ? "translateX(0)" : "translateX(101%)",
        transition: "transform var(--dur-slow) var(--ease-luxe)",
        zIndex: 81,
        overflowY: "auto",
        boxShadow: "var(--shadow-overlay)",
        padding: "30px 32px 60px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Close",
      style: {
        position: "absolute",
        top: 18,
        right: 22,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 22,
        color: "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-x"
    })), /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent"
    }, "Rug Size Guide"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 30,
        margin: "12px 0 8px"
      }
    }, "Choosing the right size"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.65,
        color: "var(--text-secondary)",
        margin: "0 0 8px"
      }
    }, "The most common mistake is going too small. A rug should sit under the main furniture and anchor the arrangement \u2014 not float in the middle of the room."), rooms.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.h,
      style: {
        borderTop: "1px solid var(--border-hairline)",
        padding: "16px 0"
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 18,
        margin: "0 0 6px"
      }
    }, r.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.6,
        color: "var(--text-secondary)",
        margin: 0
      }
    }, r.t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        marginTop: 6,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: ".04em",
        color: "var(--text-accent)"
      }
    }, "Recommended \xB7 ", r.z))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-accent-tint)",
        borderRadius: "var(--radius-xs)",
        padding: "16px 18px",
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        marginBottom: 8
      }
    }, "Cotton vs Chenille"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.6,
        color: "var(--text-secondary)",
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "Cotton"), " \u2014 crisp, breathable, easy-care; best for low-traffic & layering. ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "Super-Soft Chenille"), " \u2014 plush, denser, more durable; best for living rooms & bedrooms.")))), document.body);
  }
  function CollectionPage({
    onNavigate,
    title
  }) {
    const nav = onNavigate || (() => {});
    const heading = title && title !== "Furniture" ? title : "Furniture";
    const isRug = /rug/i.test(heading);
    const [guide, setGuide] = React.useState(false);
    const rooms = [{
      t: "Living Room",
      tone: "clay"
    }, {
      t: "Dining",
      tone: "espresso"
    }, {
      t: "Bedroom",
      tone: "stone",
      l: "light"
    }, {
      t: "Study",
      tone: "olive"
    }, {
      t: "Outdoor",
      tone: "bronze"
    }];
    return /*#__PURE__*/React.createElement("main", {
      style: {
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement(RugGuide, {
      open: guide,
      onClose: () => setGuide(false)
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        height: 420,
        display: "flex",
        alignItems: "center",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(34,31,27,.5), rgba(34,31,27,.3))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      center: true
    }, isRug ? "The Rug Atelier" : "Signature Collection"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "var(--text-on-dark)",
        fontSize: "var(--text-display-2)",
        lineHeight: 1.05,
        margin: "16px 0 0"
      }
    }, heading), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(250,246,239,.84)",
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.6,
        marginTop: 16
      }
    }, isRug ? "Hand-knotted, flatweave and natural-fibre rugs — dyed and woven by hand to ground a room for a generation." : "Hand-built seating, tables and storage in solid wood, cane and stone — designed to anchor a room for decades."), isRug && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true,
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => setGuide(true)
    }, "Need Help Choosing a Rug Size?")))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap({
          paddingTop: "var(--section-y-tight)"
        })
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "Begin Your Edit"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h2)",
        lineHeight: 1.1,
        margin: "14px 0 0"
      }
    }, "Shop the way you design.")), isRug ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FacetRow, {
      label: "Shop by Size",
      options: ["3×5", "4×6", "5×8", "6×9", "8×10", "9×12", "Runner", "Round"],
      onPick: () => {}
    }), /*#__PURE__*/React.createElement(ShopByTiles, {
      label: "Shop by Room",
      items: rooms,
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(FacetRow, {
      label: "Shop by Material",
      options: ["Hand-Knotted Wool", "Flatweave", "Jute & Natural", "Cotton", "Silk Blend"]
    }), /*#__PURE__*/React.createElement(FacetRow, {
      label: "Shop by Colour",
      options: ["Ivory & Sand", "Charcoal", "Terracotta", "Indigo", "Olive"]
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ShopByTiles, {
      label: "Shop by Room",
      items: rooms,
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(FacetRow, {
      label: "Shop by Style",
      options: ["Contemporary", "Classic", "Cane & Rattan", "Hand-Carved", "Minimal"]
    }), /*#__PURE__*/React.createElement(FacetRow, {
      label: "Shop by Material",
      options: ["Solid Teak", "Mango Wood", "Oak", "Marble & Stone", "Brass"]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid var(--border-hairline)",
        borderTop: "1px solid var(--border-hairline)",
        position: "sticky",
        top: 76,
        background: "var(--surface-page)",
        zIndex: 20,
        marginTop: "var(--section-y-tight)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 64
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        letterSpacing: ".02em"
      }
    }, "136 pieces"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16
      }
    }, isRug && /*#__PURE__*/React.createElement("button", {
      onClick: () => setGuide(true),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        padding: "9px 14px",
        cursor: "pointer",
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-ruler",
      style: {
        fontSize: 14
      }
    }), " Rug Size Guide"), /*#__PURE__*/React.createElement("button", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        padding: "9px 14px",
        cursor: "pointer",
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-sliders-horizontal",
      style: {
        fontSize: 14
      }
    }), " Filters"), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 220
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: ["Sort: Featured", "Newest", "Price: Low to High", "Price: High to Low"]
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap({
          paddingTop: 48,
          paddingBottom: "var(--section-y)"
        }),
        display: "grid",
        gridTemplateColumns: "248px 1fr",
        gap: 48,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Sidebar, {
      isRug: isRug
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EditTabs, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--gap-card)"
      }
    }, PRODUCTS.slice(0, 6).map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.name,
      category: p.category,
      name: p.name,
      price: p.price,
      note: p.note,
      badge: p.commerce ? /*#__PURE__*/React.createElement(window.AACommerceBadge, {
        state: p.commerce
      }) : null,
      onClick: e => {
        e.preventDefault();
        nav("product", p.name);
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: p.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "var(--gap-card) 0"
      }
    }, /*#__PURE__*/React.createElement(CollectionTile, {
      tone: "dark",
      eyebrow: "Room Inspiration",
      title: isRug ? "The layered living room" : "The slow-living living room",
      cta: "Shop the look",
      style: {
        minHeight: 320
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: "clay",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--gap-card)"
      }
    }, PRODUCTS.slice(6).map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.name,
      category: p.category,
      name: p.name,
      price: p.price,
      note: p.note,
      badge: p.commerce ? /*#__PURE__*/React.createElement(window.AACommerceBadge, {
        state: p.commerce
      }) : null,
      onClick: e => {
        e.preventDefault();
        nav("product", p.name);
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: p.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginTop: 56
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Load more")))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "Continue Exploring"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--gap-card)",
        marginTop: 32
      }
    }, [{
      t: "Rugs",
      tone: "olive"
    }, {
      t: "Lighting",
      tone: "bronze"
    }, {
      t: "Decor",
      tone: "stone",
      l: "light"
    }].map(c => /*#__PURE__*/React.createElement(CollectionTile, {
      key: c.t,
      title: c.t,
      tone: c.l || "dark",
      cta: "Explore",
      onClick: e => {
        e.preventDefault();
        nav("collection", c.t);
      },
      style: {
        minHeight: 300
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: c.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    })))))));
  }
  window.AACollectionPage = CollectionPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CollectionPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CushionProductPage.jsx
try { (() => {
/* Art Avenue — Cushion Product Page (technique-agnostic · data-driven)
 * The template assumes NO single craft method. Every technique-, material-,
 * construction-, origin- and care-related field is supplied by product data
 * (see cushionData) so one template serves block-print, woven, tufted,
 * embroidered, appliqué, hand-painted, leather, velvet, wool, linen and
 * mixed-technique cushions alike. Swap cushionData for a real product feed.
 */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge,
    ProductCard
  } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const wrap = (extra = {}) => ({
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...extra
  });
  const inr = n => "₹ " + n.toLocaleString("en-IN");
  const waHref = msg => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);

  /* ---- product-data layer: derive a cushion's profile from its data ----
   * In production this is one product object from Shopify; here we infer a
   * representative profile from the product name so the template can be
   * demonstrated across techniques. No field is hard-coded in the layout. */
  const PROFILES = {
    block: {
      technique: "Hand Block-Printed",
      badge: "Hand Block-Printed",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["clay", "stone", "bronze"],
      labels: ["Styled on a linen sofa", "Block-print detail", "Linen reverse & zip"],
      face: "Hand block-printed cotton",
      reverse: "natural linen reverse",
      construction: "Concealed YKK zip · piped edges",
      origin: "Block-printed by hand using hand-carved teak blocks and natural dyes.",
      craft: "Each cover is printed by hand, block by block, in small batches — slight irregularities in registration are the signature of the craft, never a fault.",
      care: "Remove the insert and gentle cold hand-wash or dry-clean the cover; reshape damp and air-dry away from direct sun. Plump inserts regularly.",
      intro: "A hand-block-printed cotton cushion with a natural linen reverse — small-batch printed by hand."
    },
    woven: {
      technique: "Handwoven",
      badge: "Handwoven",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["stone", "olive", "sand"],
      labels: ["Styled on a linen sofa", "Weave detail", "Reverse & zip"],
      face: "Yarn-dyed handwoven cotton & wool",
      reverse: "cotton reverse",
      construction: "Concealed zip · turned edges",
      origin: "Woven on traditional pit looms by skilled weaving families.",
      craft: "Yarn is dyed before weaving, so the pattern runs through the cloth. Subtle slubs and shifts in the weave are inherent to handloom textiles.",
      care: "Dry-clean recommended to preserve the weave; spot-clean spills immediately with a damp cloth. Avoid wringing.",
      intro: "A yarn-dyed handwoven cushion — pattern woven through the cloth, not printed onto it."
    },
    tufted: {
      technique: "Hand-Tufted",
      badge: "Hand-Tufted",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["clay", "bronze", "stone"],
      labels: ["Styled on a linen sofa", "Tufted pile detail", "Cotton reverse & zip"],
      face: "Hand-tufted wool pile",
      reverse: "cotton canvas reverse",
      construction: "Concealed zip · bound edges",
      origin: "Tufted and sheared by hand by skilled artisans.",
      craft: "Wool is punched through a backing by hand and sheared to a plush, sculptural pile — a tactile, dimensional face.",
      care: "Vacuum gently without a beater bar; blot spills, never rub. Professional clean for marks.",
      intro: "A plush hand-tufted wool cushion with a sculptural, sheared pile face."
    },
    embroidered: {
      technique: "Hand-Embroidered",
      badge: "Hand-Embroidered",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["sand", "bronze", "stone"],
      labels: ["Styled on a linen sofa", "Embroidery detail", "Reverse & zip"],
      face: "Hand-embroidered cotton & silk",
      reverse: "cotton reverse",
      construction: "Concealed zip · piped edges",
      origin: "Embroidered entirely by hand by skilled artisans.",
      craft: "Each motif is stitched by hand over many hours; tiny variations between cushions are proof of the human hand at work.",
      care: "Dry-clean only to protect the threadwork; store flat, away from snags and direct sun.",
      intro: "A hand-embroidered cushion — each motif stitched slowly, by hand."
    },
    applique: {
      technique: "Appliqué",
      badge: "Appliqué",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["clay", "olive", "stone"],
      labels: ["Styled on a linen sofa", "Appliqué detail", "Reverse & zip"],
      face: "Appliquéd cotton",
      reverse: "cotton reverse",
      construction: "Concealed zip · turned edges",
      origin: "Appliquéd by hand, shape over shape, in a centuries-old layered-stitch tradition.",
      craft: "Shapes are cut and hand-stitched onto the ground cloth, layer over layer, in a centuries-old appliqué manner.",
      care: "Gentle cold hand-wash or dry-clean; reshape damp and air-dry. Avoid harsh agitation.",
      intro: "A hand-appliquéd cotton cushion, cut and stitched layer over layer by hand."
    },
    painted: {
      technique: "Hand-Painted",
      badge: "Hand-Painted",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["sand", "stone", "bronze"],
      labels: ["Styled on a linen sofa", "Brushwork detail", "Reverse & zip"],
      face: "Hand-painted cotton & silk",
      reverse: "cotton reverse",
      construction: "Concealed zip · piped edges",
      origin: "Painted by hand in our studio with fade-stable pigments.",
      craft: "Each cover is painted individually — brushwork and tone vary gently from piece to piece, so no two are identical.",
      care: "Dry-clean only; keep out of prolonged direct sun to preserve the pigments.",
      intro: "A hand-painted cushion — brushed individually, so no two are quite alike."
    },
    leather: {
      technique: "Leather",
      badge: "Full-Grain Leather",
      sampleKind: "leather",
      insert: "fibre-and-down insert",
      tones: ["clay", "espresso", "bronze"],
      labels: ["Styled on a linen sofa", "Grain & stitch detail", "Suede reverse & zip"],
      face: "Full-grain vegetable-tanned leather",
      reverse: "suede reverse",
      construction: "Hidden zip · saddle-stitched edges",
      origin: "Cut and saddle-stitched by leather artisans in India.",
      craft: "Cut from full-grain hides and stitched by hand; natural marks and grain shifts are intrinsic to genuine leather.",
      care: "Wipe with a dry cloth; condition twice yearly with leather balm. Keep away from direct heat and sun.",
      intro: "A full-grain leather cushion, saddle-stitched and made to patina with age."
    },
    velvet: {
      technique: "Cotton Velvet",
      badge: "Cotton Velvet",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["bronze", "espresso", "clay"],
      labels: ["Styled on a linen sofa", "Pile & sheen detail", "Linen reverse & zip"],
      face: "Cotton-velvet",
      reverse: "natural linen reverse",
      construction: "Concealed zip · piped edges",
      origin: "Cut and finished by hand in our workshops.",
      craft: "A dense cotton-velvet pile catches the light differently as it shifts — depth of colour is part of the material.",
      care: "Dry-clean to preserve the pile; brush gently in one direction to lift after use.",
      intro: "A deep cotton-velvet cushion with a natural linen reverse."
    },
    wool: {
      technique: "Wool",
      badge: "Handcrafted Wool",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["olive", "stone", "sand"],
      labels: ["Styled on a linen sofa", "Wool texture detail", "Reverse & zip"],
      face: "Woven wool",
      reverse: "cotton reverse",
      construction: "Concealed zip · turned edges",
      origin: "Woven and finished by hand in India.",
      craft: "Natural wool, with the gentle variation and warmth that comes only from the fibre.",
      care: "Dry-clean recommended; air regularly and store with cedar to protect the fibre.",
      intro: "A natural woven-wool cushion — warm, textured and quietly substantial."
    },
    linen: {
      technique: "Linen",
      badge: "Pure Linen",
      sampleKind: "fabric",
      insert: "feather-and-down insert",
      tones: ["stone", "sand", "clay"],
      labels: ["Styled on a linen sofa", "Linen texture detail", "Reverse & zip"],
      face: "Washed pure linen",
      reverse: "linen reverse",
      construction: "Concealed zip · turned edges",
      origin: "Cut and sewn by hand in India.",
      craft: "A washed-linen face with the soft, lived-in slub that defines the cloth — relaxed by nature.",
      care: "Cold machine-wash gentle or dry-clean; a relaxed, un-pressed finish suits the cloth.",
      intro: "A washed pure-linen cushion — soft, breathable and beautifully relaxed."
    },
    generic: {
      technique: "Handcrafted",
      badge: "Made by Hand",
      sampleKind: "material",
      insert: "premium insert",
      tones: ["clay", "stone", "bronze"],
      labels: ["Styled on a linen sofa", "Material detail", "Reverse & zip"],
      face: "Natural-fibre face",
      reverse: "natural reverse",
      construction: "Concealed zip · finished edges",
      origin: "Crafted by hand by artisans across India.",
      craft: "Made in small batches by skilled hands, in the technique and cloth chosen for this design.",
      care: "Care depends on the material — see the product details, or ask a consultant.",
      intro: "A handcrafted cushion, made in small batches by skilled artisans."
    }
  };
  function cushionData(name) {
    const n = (name || "").toLowerCase();
    let key = "generic";
    if (/leather/.test(n)) key = "leather";else if (/velvet/.test(n)) key = "velvet";else if (/embroider|kantha|aari|zardozi|chikan/.test(n)) key = "embroidered";else if (/applique|appliqu|pipili/.test(n)) key = "applique";else if (/paint/.test(n)) key = "painted";else if (/tuft/.test(n)) key = "tufted";else if (/woven|weave|dhurrie|kilim|ikat|jacquard/.test(n)) key = "woven";else if (/block|print|sanganer|bagru|dabu/.test(n)) key = "block";else if (/wool/.test(n)) key = "wool";else if (/linen/.test(n)) key = "linen";
    return {
      key,
      ...PROFILES[key]
    };
  }
  const SAMPLE_LABEL = {
    fabric: "Fabric",
    leather: "Leather",
    material: "Material"
  };
  function Accordion({
    items,
    start = -1
  }) {
    const [open, setOpen] = React.useState(start);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: it.h,
      style: {
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(open === i ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "none",
        border: "none",
        padding: "18px 0",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        fontWeight: 500,
        color: "var(--text-primary)"
      }
    }, it.h), /*#__PURE__*/React.createElement("i", {
      className: "ph ph-" + (open === i ? "minus" : "plus"),
      style: {
        fontSize: 14,
        color: "var(--text-muted)"
      }
    })), open === i && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 20,
        fontSize: 15,
        lineHeight: 1.72,
        color: "var(--text-secondary)",
        maxWidth: "62ch"
      }
    }, it.body))));
  }
  function StickyBar({
    name,
    price,
    waMsg,
    cart = true
  }) {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setShow(window.scrollY > 620);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 55,
        background: "var(--surface-raised)",
        borderTop: "1px solid var(--border-hairline)",
        boxShadow: "0 -8px 24px -16px rgba(43,40,36,.4)",
        transform: show ? "translateY(0)" : "translateY(110%)",
        transition: "transform var(--dur-base) var(--ease-luxe)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "12px var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        alignItems: "baseline",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        color: "var(--text-secondary)"
      }
    }, price)), /*#__PURE__*/React.createElement("a", {
      href: waHref(waMsg),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Consult")), cart === false ? /*#__PURE__*/React.createElement("a", {
      href: waHref(waMsg),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Enquire")) : /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Add to Cart")));
  }

  /* ---- merchant-driven config: fulfillment + optional modules (per-SKU via product data) ---- */
  function cushionConfig(name) {
    const n = (name || "").toLowerCase();
    if (/in.?stock|ready/.test(n)) return {
      fulfillment: "in-stock",
      visibility: "ecommerce",
      modules: {
        samples: true,
        whyLove: true,
        customization: true,
        pairs: true
      }
    };
    if (/bespoke|custom/.test(n)) return {
      fulfillment: "custom",
      visibility: "consultation",
      modules: {
        samples: true,
        whyLove: true,
        customization: true,
        pairs: true
      }
    };
    return window.AAPreset("luxury-cushion");
  }
  function CushionProductPage({
    onNavigate,
    name
  }) {
    const nav = onNavigate || (() => {});
    const pname = name && name !== "true" ? name : "Sanganeri Block-Print Cushion";
    const sku = "AA-" + pname.split(" ").map(w => w[0]).join("").toUpperCase() + "-CU";
    const d = cushionData(pname);
    const cfg = cushionConfig(pname);
    const ful = window.AAFulfillment(cfg.fulfillment);
    const lifecycle = cfg.lifecycle || (/coming soon/i.test(pname) ? "coming-soon" : /seasonal/i.test(pname) ? "seasonal" : /discontinued/i.test(pname) ? "discontinued" : "active");
    const life = window.AALifecycle(lifecycle);
    const com = window.AACommerce(cfg, life);
    const sampleLabel = SAMPLE_LABEL[d.sampleKind] || "Material";
    const sizes = [{
      k: "16",
      label: "16 × 16 in",
      base: 3200
    }, {
      k: "18",
      label: "18 × 18 in",
      base: 3800
    }, {
      k: "20",
      label: "20 × 20 in",
      base: 4400
    }, {
      k: "24",
      label: "24 × 24 in",
      base: 5600
    }];
    const INSERT = 1400;
    const [size, setSize] = React.useState("18");
    const [fill, setFill] = React.useState("insert");
    const base = sizes.find(s => s.k === size).base;
    const price = base + (fill === "insert" ? INSERT : 0);
    const consultMsg = `Hello Art Avenue, I'd like to speak with a design consultant about the ${pname} (SKU ${sku}). ${typeof location !== "undefined" ? location.href : ""}`;
    const sampleMsg = `Hello Art Avenue, I'd like to request a ${d.sampleKind} sample for the ${pname} (SKU ${sku}). I understand a sample fee of ₹999–₹2,999 applies depending on the material.`;
    const trustItems = [d.technique + " in India", "Cover only or cover + insert options", "Made to order in small batches", "Secure delivery across India", "International shipping available"];
    const specRows = [["Technique", d.technique], ["Material", d.face + " · " + d.reverse], ["Construction", d.construction], ["Origin", (d.origin.split(/[.,]/)[0] || "").trim()]];
    const accordion = [{
      h: "What's included",
      body: fill === "insert" ? `You're ordering the cover and a ${d.insert} — a complete, ready-to-use cushion delivered plump and finished.` : "You're ordering the cover only — no insert is included. Choose “Cover + Insert” above for a ready-to-use cushion."
    }, {
      h: "Technique & craft",
      body: d.craft
    }, {
      h: "Material & construction",
      body: `${d.face} face with a ${d.reverse}. ${d.construction}. Inserts are ethically sourced with a cotton cambric casing.`
    }, {
      h: "Origin",
      body: d.origin
    }, {
      h: "Care",
      body: d.care
    }, {
      h: "Delivery & shipping",
      body: "In-stock covers ship in 3–5 days; made-to-order pieces in 1–2 weeks via safe, insured delivery. International freight quoted at checkout."
    }];
    const pairs = [{
      category: "Textiles",
      name: "Handwoven Wool Throw",
      price: "₹ 8,400",
      tone: "stone"
    }, {
      category: "Seating",
      name: "Kashi Linen Sofa",
      price: "₹ 3,20,000",
      tone: "clay"
    }, {
      category: "Decor",
      name: "Hand-Thrown Stone Vessel",
      price: "₹ 12,000",
      tone: "bronze"
    }, {
      category: "Rugs",
      name: "Aravalli Hand-Knotted Rug",
      price: "₹ 2,20,000",
      tone: "olive"
    }];
    const moduleOrder = cfg.moduleOrder || ["whyLove", "customization", "pairs"];
    const sectionFor = k => {
      switch (k) {
        case "whyLove":
          return cfg.modules.whyLove ? /*#__PURE__*/React.createElement(window.AAWhyLoveIt, {
            category: "Cushions"
          }) : null;
        case "customization":
          return cfg.modules.customization ? /*#__PURE__*/React.createElement(window.AAMadeForYourSpace, {
            category: "Cushions",
            href: waHref("Hello Art Avenue, I'd like to customize the " + pname + " (SKU " + sku + ") — fabric, technique or size.")
          }) : null;
        case "pairs":
          return cfg.modules.pairs ? /*#__PURE__*/React.createElement("section", {
            style: {
              background: "var(--surface-alt)",
              padding: "var(--section-y) 0"
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: wrap()
          }, /*#__PURE__*/React.createElement(Eyebrow, {
            tone: "accent",
            rule: true
          }, "Frequently Styled Together"), /*#__PURE__*/React.createElement("h2", {
            style: {
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: "var(--text-h1)",
              margin: "16px 0 0"
            }
          }, "Complete the room"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--gap-card)",
              marginTop: 40
            }
          }, pairs.map(p => /*#__PURE__*/React.createElement(ProductCard, {
            key: p.name,
            category: p.category,
            name: p.name,
            price: p.price,
            favorite: false,
            onClick: e => {
              e.preventDefault();
              nav("product", p.name);
            }
          }, /*#__PURE__*/React.createElement(window.AAFigure, {
            tone: p.tone,
            style: {
              position: "absolute",
              inset: 0,
              borderRadius: 0
            }
          })))))) : null;
        default:
          return null;
      }
    };
    return /*#__PURE__*/React.createElement("main", {
      style: {
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement(StickyBar, {
      name: pname,
      price: com.price ? inr(price) : "Price on request",
      waMsg: consultMsg,
      cart: com.cart
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        padding: "18px var(--gutter)",
        fontSize: 12,
        color: "var(--text-muted)",
        letterSpacing: ".03em"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        nav("home");
      },
      style: {
        color: "inherit",
        textDecoration: "none"
      }
    }, "Home"), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: "0 8px",
        opacity: 0.5
      }
    }, "/"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        nav("collection", "Decor");
      },
      style: {
        color: "inherit",
        textDecoration: "none"
      }
    }, "Decor \xB7 Cushions"), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: "0 8px",
        opacity: 0.5
      }
    }, "/"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, pname)), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap({
          paddingBottom: "var(--section-y)"
        }),
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: "clamp(40px,5vw,80px)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--gap-card)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: d.tones[0],
      ratio: "1/1",
      label: d.labels[0],
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 18,
        left: 18
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "on-image"
    }, d.badge))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--gap-card)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: d.tones[1],
      ratio: "1/1",
      label: d.labels[1]
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: d.tones[2],
      ratio: "1/1",
      label: d.labels[2]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 100,
        alignSelf: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "Cushions \xB7 ", d.technique), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "clamp(34px,3.4vw,46px)",
        lineHeight: 1.08,
        letterSpacing: "var(--tracking-tight)",
        margin: "12px 0 0"
      }
    }, pname), /*#__PURE__*/React.createElement(window.AAPriceTag, {
      priceText: inr(price),
      commerce: com,
      caption: fill === "insert" ? "Cover + insert" : "Cover only"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body)",
        lineHeight: 1.72,
        color: "var(--text-secondary)",
        marginTop: 18,
        maxWidth: "46ch"
      }
    }, d.intro), /*#__PURE__*/React.createElement(window.AAFulfillmentBar, {
      type: cfg.fulfillment
    }), /*#__PURE__*/React.createElement(window.AALifecycleBanner, {
      state: lifecycle
    }), /*#__PURE__*/React.createElement(window.AATrustBlock, {
      items: trustItems
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Size"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 12,
        flexWrap: "wrap"
      }
    }, sizes.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.k,
      onClick: () => setSize(s.k),
      style: {
        padding: "10px 16px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        background: size === s.k ? "var(--surface-accent-tint)" : "transparent",
        color: size === s.k ? "var(--text-accent)" : "var(--text-secondary)",
        border: "1px solid " + (size === s.k ? "var(--accent)" : "var(--border-strong)")
      }
    }, s.label)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        marginBottom: 12
      }
    }, "What you're buying"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, [{
      k: "cover",
      h: "Cover Only",
      d: "Just the cover — use your own insert.",
      p: base
    }, {
      k: "insert",
      h: "Cover + Insert",
      d: "Cover with a " + d.insert + " — ready to use.",
      p: base + INSERT
    }].map(o => {
      const on = fill === o.k;
      return /*#__PURE__*/React.createElement("button", {
        key: o.k,
        onClick: () => setFill(o.k),
        style: {
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "16px 18px",
          borderRadius: "var(--radius-sm)",
          cursor: "pointer",
          background: on ? "var(--surface-accent-tint)" : "transparent",
          border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)")
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 18,
          height: 18,
          borderRadius: "50%",
          flex: "none",
          border: "1.5px solid " + (on ? "var(--accent)" : "var(--border-strong)"),
          background: on ? "radial-gradient(circle, var(--accent) 0 5px, transparent 6px)" : "transparent"
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-serif)",
          fontSize: 18,
          color: "var(--text-primary)"
        }
      }, o.h), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-serif)",
          fontSize: 16,
          color: on ? "var(--text-accent)" : "var(--text-secondary)"
        }
      }, inr(o.p))), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12.5,
          color: "var(--text-muted)",
          lineHeight: 1.45,
          display: "block",
          marginTop: 3
        }
      }, o.d)));
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        margin: "10px 2px 0"
      }
    }, fill === "insert" ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "Insert included"), " (+", inr(INSERT), ") \u2014 arrives plump and ready to use.") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "Cover only"), " \u2014 no insert included. Add one above for a ready-to-use cushion."))), cfg.modules.samples && /*#__PURE__*/React.createElement(window.AASampleRequest, {
      product: pname,
      sku: sku,
      kinds: [sampleLabel]
    }), /*#__PURE__*/React.createElement(window.AACtaButtons, {
      commerce: com,
      priceText: inr(price),
      hrefs: {
        consult: waHref(consultMsg),
        samples: waHref(sampleMsg),
        customize: waHref(consultMsg),
        project: waHref(consultMsg),
        "request-pricing": waHref(consultMsg)
      }
    }), /*#__PURE__*/React.createElement("dl", {
      style: {
        display: "grid",
        margin: "26px 0 0",
        padding: "22px 0 4px",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, specRows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "grid",
        gridTemplateColumns: "0.6fr 1fr",
        gap: 12,
        padding: "11px 0",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("dt", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        paddingTop: 2
      }
    }, k), /*#__PURE__*/React.createElement("dd", {
      style: {
        margin: 0,
        fontSize: 14,
        color: "var(--text-primary)",
        lineHeight: 1.45
      }
    }, v)))), /*#__PURE__*/React.createElement(Accordion, {
      items: accordion,
      start: 0
    }))), moduleOrder.map(k => {
      const el = sectionFor(k);
      return el ? /*#__PURE__*/React.createElement(React.Fragment, {
        key: k
      }, el) : null;
    }));
  }
  window.AACushionProductPage = CushionProductPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CushionProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CustomBespokePage.jsx
try { (() => {
/* Art Avenue — Custom & Bespoke (flagship design-studio landing page) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge,
    Input,
    Select
  } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const waHref = msg => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
  const wrap = (extra = {}) => ({
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...extra
  });

  /* ---- data ---- */
  const DISCIPLINES = [{
    icon: "ph-armchair",
    h: "Custom Furniture",
    t: "Pieces drawn to your dimensions, woods, finishes and configurations — from a single chair to a whole home.",
    tone: "clay"
  }, {
    icon: "ph-scribble-loop",
    h: "Custom Rugs",
    t: "Bespoke sizes, colourways, constructions and motifs, hand-knotted to your floor plan.",
    tone: "olive"
  }, {
    icon: "ph-needle",
    h: "Custom Upholstery",
    t: "Your own fabric (COM) or ours, with bespoke fills, profiles and detailing.",
    tone: "sand"
  }, {
    icon: "ph-house-line",
    h: "Interior Projects",
    t: "Whole-room and whole-home schemes, sourced, made and installed as one considered commission.",
    tone: "stone"
  }, {
    icon: "ph-buildings",
    h: "Hospitality Projects",
    t: "Contract-grade furniture, rugs and lighting for hotels, restaurants and residences at scale.",
    tone: "espresso"
  }, {
    icon: "ph-pen-nib",
    h: "Designer Collaborations",
    t: "Co-created collections and one-of-a-kind commissions with designers and architects.",
    tone: "bronze"
  }, {
    icon: "ph-package",
    h: "Project Procurement",
    t: "Lead-time planning, logistics and delivery for multi-room and multi-property orders.",
    tone: "clay"
  }];
  const JOURNEY = [{
    n: "01",
    h: "Discover",
    t: "Share your space, references and how you live. We listen first — no obligation, no fixed catalogue.",
    icon: "ph-chat-circle-dots"
  }, {
    n: "02",
    h: "Consult",
    t: "A dedicated design consultant shapes the brief with you, proposing pieces, scale and materials.",
    icon: "ph-pencil-ruler"
  }, {
    n: "03",
    h: "Design & Sample",
    t: "Drawings, renders and physical material samples sent to you, refined until it's exactly right.",
    icon: "ph-swatches"
  }, {
    n: "04",
    h: "Craft",
    t: "Your commission is made by hand in our ateliers — you receive progress updates throughout.",
    icon: "ph-hammer"
  }, {
    n: "05",
    h: "Deliver & Install",
    t: "Safely delivered, placed and styled in your space, anywhere in India or abroad.",
    icon: "ph-truck"
  }];
  const PORTFOLIO = [{
    label: "Udaipur lake villa · full interior",
    tone: "clay",
    span: true,
    tag: "Residential"
  }, {
    label: "The Verandah · boutique hotel",
    tone: "espresso",
    tag: "Hospitality"
  }, {
    label: "Bandra penthouse · living & dining",
    tone: "olive",
    tag: "Residential"
  }, {
    label: "Studio Kohl × Art Avenue · seating",
    tone: "bronze",
    tag: "Collaboration"
  }, {
    label: "Maison Rao · bespoke rugs",
    tone: "sand",
    tag: "Custom Rugs"
  }];
  const CASES = [{
    tone: "espresso",
    tag: "Hospitality",
    h: "The Verandah, Goa",
    t: "A boutique hotel furnished end-to-end — lobby seating, restaurant banquettes, bedroom schemes and bespoke runners, delivered in considered phases.",
    scope: ["Lobby & restaurant seating", "Bespoke hand-knotted runners", "Whole-property bedroom schemes"]
  }, {
    tone: "clay",
    tag: "Residential",
    h: "Lake Villa, Udaipur",
    t: "A complete interiors commission for a lakeside home — a custom solid-teak dining table, hand-knotted rugs sized to each room, and a library of bespoke teak storage.",
    scope: ["Custom solid-teak dining", "Room-by-room hand-knotted rugs", "Bespoke teak storage library"]
  }];
  const MATERIALS = [{
    name: "Solid Teak",
    tone: "bronze"
  }, {
    name: "Belgian Linen",
    tone: "stone"
  }, {
    name: "Highland Wool",
    tone: "olive"
  }, {
    name: "Aged Brass",
    tone: "bronze"
  }, {
    name: "Travertine",
    tone: "sand"
  }, {
    name: "Full-Grain Leather",
    tone: "clay"
  }, {
    name: "Cotton Velvet",
    tone: "espresso"
  }, {
    name: "Carrara Marble",
    tone: "stone"
  }];
  function CustomBespokePage({
    onNavigate
  }) {
    const nav = onNavigate || (() => {});
    const scrollToForm = () => {
      const el = document.getElementById("cb-enquire");
      if (el) window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    };
    const consult = waHref("Hello Art Avenue, I'd like to discuss a custom or bespoke project.");
    return /*#__PURE__*/React.createElement("main", {
      style: {
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        minHeight: 640,
        display: "flex",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(28,25,22,.82), rgba(28,25,22,.32) 55%, rgba(28,25,22,.45))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        paddingTop: 88,
        paddingBottom: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      rule: true
    }, "Custom & Bespoke \xB7 The Atelier"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "var(--text-on-dark)",
        fontSize: "var(--text-display-1)",
        lineHeight: "var(--leading-display)",
        letterSpacing: "var(--tracking-tight)",
        margin: "22px 0 0",
        textWrap: "balance"
      }
    }, "Made for your space,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "#EBD9BE"
      }
    }, "down to the last detail.")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(250,246,239,.88)",
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.65,
        maxWidth: 560,
        marginTop: 22
      }
    }, "Most of what we make begins as a conversation, not a catalogue. Tell us about your room, your project or your collection \u2014 and our ateliers will craft it to suit."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 36,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: scrollToForm
    }, "Start a Project"), /*#__PURE__*/React.createElement("a", {
      href: consult,
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Speak with a Design Consultant"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "clamp(20px,3vw,44px)",
        marginTop: 48,
        flexWrap: "wrap"
      }
    }, [["ph-hand-heart", "Handcrafted by skilled artisans"], ["ph-leaf", "Made using time-honoured techniques"], ["ph-map-pin-line", "In collaboration with workshops across India"]].map(([icon, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        maxWidth: 228
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + icon,
      style: {
        fontSize: 22,
        color: "#EBD9BE",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: 1.4,
        color: "rgba(250,246,239,.82)"
      }
    }, l))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "var(--section-y) 0 calc(var(--section-y) * 0.6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        maxWidth: 980
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "A Design Studio, Not a Store"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "clamp(26px,2.8vw,38px)",
        lineHeight: 1.32,
        letterSpacing: "var(--tracking-tight)",
        margin: "22px 0 0",
        textWrap: "balance"
      }
    }, "Art Avenue is a furniture atelier, a rug studio and an interiors house. We are happiest when a piece is made for one home \u2014 yours \u2014 rather than for everyone."))), /*#__PURE__*/React.createElement("section", {
      style: {
        paddingBottom: "var(--section-y)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 18,
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h1)",
        margin: 0
      }
    }, "What we make to order"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "var(--text-muted)",
        maxWidth: 320
      }
    }, "Seven ways to commission Art Avenue \u2014 each led by a dedicated consultant.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        background: "var(--border-hairline)",
        border: "1px solid var(--border-hairline)"
      }
    }, DISCIPLINES.map((d, i) => /*#__PURE__*/React.createElement("button", {
      key: d.h,
      onClick: scrollToForm,
      style: {
        textAlign: "left",
        cursor: "pointer",
        background: "var(--surface-page)",
        padding: "34px 30px 30px",
        display: "flex",
        flexDirection: "column",
        minHeight: 230,
        gridColumn: i === 6 ? "span 1" : "auto"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + d.icon,
      style: {
        fontSize: 30,
        color: "var(--accent-deep)"
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 23,
        margin: "22px 0 10px"
      }
    }, d.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.62,
        color: "var(--text-secondary)"
      }
    }, d.t), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: "auto",
        paddingTop: 16,
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        display: "inline-flex",
        alignItems: "center",
        gap: 7
      }
    }, "Enquire ", /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-right"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-dark)",
        padding: "34px 30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gridColumn: "span 1"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 22,
        color: "var(--text-on-dark)",
        lineHeight: 1.2
      }
    }, "Not sure where to start?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.6,
        color: "var(--text-on-dark-muted)",
        margin: "10px 0 18px"
      }
    }, "Tell us the room and we'll guide the rest."), /*#__PURE__*/React.createElement("a", {
      href: consult,
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Ask a Consultant")))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "Project Portfolio"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-display-2)",
        lineHeight: 1.08,
        letterSpacing: "var(--tracking-tight)",
        margin: "18px 0 0"
      }
    }, "Commissioned, made & installed.")), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "View the full lookbook")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr",
        gridTemplateRows: "260px 260px",
        gap: "var(--gap-card)",
        marginTop: 44
      }
    }, PORTFOLIO.map((p, i) => /*#__PURE__*/React.createElement(Figure, {
      key: i,
      tone: p.tone,
      label: p.label,
      style: {
        gridRow: p.span ? "span 2" : "auto",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 16,
        left: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "on-image"
    }, p.tag))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 640,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      center: true,
      rule: true
    }, "The Client Journey"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h1)",
        margin: "16px 0 0"
      }
    }, "Discover \xB7 Consult \xB7 Customize \xB7 Order"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body)",
        lineHeight: 1.7,
        color: "var(--text-secondary)",
        marginTop: 16
      }
    }, "A considered, unhurried process \u2014 guided from first conversation to final install.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "var(--gap-card)",
        marginTop: 56
      }
    }, JOURNEY.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.n
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + s.icon,
      style: {
        fontSize: 26,
        color: "var(--accent-deep)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 18,
        color: "var(--text-accent)"
      }
    }, s.n)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-strong)",
        margin: "16px 0 16px"
      }
    }), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 21
      }
    }, s.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.6,
        color: "var(--text-secondary)",
        marginTop: 8
      }
    }, s.t)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: "clamp(40px,6vw,90px)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      rule: true
    }, "Material Selection"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-display-2)",
        lineHeight: 1.08,
        letterSpacing: "var(--tracking-tight)",
        margin: "18px 0 0"
      }
    }, "Begin with the materials."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.7,
        color: "var(--text-on-dark-muted)",
        margin: "18px 0 0",
        maxWidth: "44ch"
      }
    }, "Every commission starts from honest materials \u2014 solid hardwoods, hand-spun wool, cast brass, quarried stone and natural textiles. We'll send samples to your door before a single piece is made."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        marginTop: 30,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => nav("library", "Materials")
    }, "Explore the Material Library"), /*#__PURE__*/React.createElement("a", {
      href: waHref("Hello Art Avenue, I'd like to request a material sample set for a custom project."),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-swatches"
      })
    }, "Request Samples")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "var(--gap-card)"
      }
    }, MATERIALS.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.name
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: m.tone,
      ratio: "1/1"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-on-dark-muted)",
        marginTop: 9
      }
    }, m.name)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 600,
        marginBottom: 48
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "Case Studies"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h1)",
        margin: "16px 0 0"
      }
    }, "Projects, in their own words.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--section-y-tight)"
      }
    }, CASES.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: c.h,
      style: {
        display: "grid",
        gridTemplateColumns: i % 2 ? "1fr 1.1fr" : "1.1fr 1fr",
        gap: "clamp(32px,5vw,72px)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: c.tone,
      ratio: "4/3",
      label: c.h,
      style: {
        order: i % 2 ? 2 : 1,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 16,
        left: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "on-image"
    }, c.tag))), /*#__PURE__*/React.createElement("div", {
      style: {
        order: i % 2 ? 1 : 2
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent"
    }, c.tag), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h2)",
        lineHeight: 1.12,
        margin: "12px 0 0"
      }
    }, c.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body)",
        lineHeight: 1.72,
        color: "var(--text-secondary)",
        margin: "14px 0 0",
        maxWidth: "52ch"
      }
    }, c.t), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "26px 0 0",
        padding: "24px 0 0",
        borderTop: "1px solid var(--border-hairline)",
        display: "grid",
        gap: 11
      }
    }, c.scope.map(s => /*#__PURE__*/React.createElement("li", {
      key: s,
      style: {
        display: "flex",
        gap: 11,
        alignItems: "center",
        fontSize: 13.5,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-check",
      style: {
        color: "var(--accent)",
        fontSize: 15,
        flex: "none"
      }
    }), " ", s))))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        maxWidth: 900,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-fill ph-quotes",
      style: {
        fontSize: 34,
        color: "var(--accent-soft)"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "clamp(26px,3vw,40px)",
        lineHeight: 1.28,
        letterSpacing: "var(--tracking-tight)",
        margin: "18px 0 0",
        textWrap: "balance"
      }
    }, "\u201CThey treated our home like a commission, not an order. Every measurement, every finish was made for the way we live.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        fontSize: 13,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Ananya & Rohan Mehta \xB7 Udaipur"))), /*#__PURE__*/React.createElement("section", {
      id: "cb-enquire",
      style: {
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "grid",
        gridTemplateColumns: "0.85fr 1.15fr",
        gap: "clamp(40px,6vw,96px)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "Start a Project"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h1)",
        lineHeight: 1.1,
        margin: "18px 0 0"
      }
    }, "Tell us about your space."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.7,
        color: "var(--text-secondary)",
        marginTop: 18,
        maxWidth: "42ch"
      }
    }, "Share a few details and a dedicated design consultant will be in touch within two business days \u2014 no obligation."), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "30px 0 0",
        padding: 0,
        display: "grid",
        gap: 16
      }
    }, ["A consultant matched to your project", "Drawings & material samples before you commit", "Made to your dimensions, finishes & materials", "Delivery & installation across India and abroad"].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        fontSize: 15,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-check",
      style: {
        color: "var(--accent)",
        fontSize: 16,
        marginTop: 3
      }
    }), " ", t))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 30,
        padding: "18px 20px",
        background: "var(--surface-accent-tint)",
        borderRadius: "var(--radius-sm)",
        display: "flex",
        gap: 13,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-chat-teardrop-dots",
      style: {
        fontSize: 22,
        color: "var(--accent-deep)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-secondary)"
      }
    }, "Prefer to talk now? ", /*#__PURE__*/React.createElement("a", {
      href: consult,
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--text-accent)",
        textDecoration: "none",
        fontWeight: 500
      }
    }, "Message a consultant \u2192")))), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => e.preventDefault(),
      style: {
        background: "var(--surface-raised)",
        border: "1px solid var(--border-hairline)",
        padding: "clamp(28px,3vw,44px)",
        borderRadius: "var(--radius-sm)",
        display: "grid",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "Ananya",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      placeholder: "Mehta",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      placeholder: "+91 ..."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Project type",
      options: ["Custom Furniture", "Custom Rugs", "Custom Upholstery", "Interior Project", "Hospitality Project", "Designer Collaboration", "Project Procurement"]
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Client type",
      options: ["Homeowner", "Interior Designer", "Architect", "Hospitality / Developer"]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Timeline",
      options: ["Exploring", "Within 3 months", "3–6 months", "6+ months"]
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Budget guide",
      options: ["Under ₹ 5 lakh", "₹ 5–15 lakh", "₹ 15–50 lakh", "₹ 50 lakh +", "Prefer to discuss"]
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Location",
      placeholder: "City / project site"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Tell us about your project",
      multiline: true,
      placeholder: "The room or property, how you'll use it, references, pieces you have in mind\u2026"
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        gap: 11,
        alignItems: "flex-start",
        fontSize: 13.5,
        color: "var(--text-muted)",
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      style: {
        marginTop: 3,
        accentColor: "var(--accent)"
      }
    }), "Keep me posted with project stories and new collections."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true
    }, "Submit Enquiry"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-faint)",
        textAlign: "center",
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-lock-simple",
      style: {
        marginRight: 6
      }
    }), "Your details are kept private and never shared.")))));
  }
  window.AACustomBespokePage = CustomBespokePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CustomBespokePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
/* Art Avenue — Homepage */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge,
    CollectionTile,
    ProductCard
  } = DS;
  const Figure = window.AAFigure;
  const wrap = (extra = {}) => ({
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...extra
  });
  function SectionHead({
    eyebrow,
    title,
    intro,
    center,
    light
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: center ? 720 : 640,
        margin: center ? "0 auto" : 0,
        textAlign: center ? "center" : "left"
      }
    }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
      tone: light ? "on-dark" : "accent",
      rule: true,
      center: center
    }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-display-2)",
        lineHeight: "var(--leading-tight)",
        letterSpacing: "var(--tracking-tight)",
        margin: "18px 0 0",
        color: light ? "var(--text-on-dark)" : "var(--text-primary)"
      }
    }, title), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 560,
        margin: center ? "18px auto 0" : "18px 0 0",
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: "var(--leading-relaxed)",
        color: light ? "var(--text-on-dark-muted)" : "var(--text-secondary)"
      }
    }, intro));
  }

  /* ---------- HERO ---------- */
  function Hero({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        height: "88vh",
        minHeight: 620,
        display: "flex",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "clay",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(34,31,27,.5), rgba(34,31,27,.12) 45%, rgba(34,31,27,.28))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        position: "relative",
        paddingBottom: "clamp(56px,8vh,110px)",
        width: "100%",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark"
    }, "The Spring Collection \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "var(--text-on-dark)",
        fontSize: "var(--text-display-1)",
        lineHeight: "var(--leading-display)",
        letterSpacing: "var(--tracking-tight)",
        margin: "22px 0 0"
      }
    }, "Crafted spaces,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "#EBD9BE"
      }
    }, "collected stories.")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(250,246,239,.86)",
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.6,
        maxWidth: 480,
        marginTop: 24
      }
    }, "Handcrafted furniture, rugs and objects for homes that are made to be lived in \u2014 and remembered."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 36,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNavigate("collection", "New Arrivals")
    }, "Explore the Collection"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true,
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => onNavigate("trade")
    }, "Trade & Design")))));
  }

  /* ---------- SIGNATURE COLLECTIONS ---------- */
  function Signature({
    onNavigate
  }) {
    const tiles = [{
      eyebrow: "01 — Furniture",
      title: "Furniture",
      tone: "clay",
      span: true
    }, {
      eyebrow: "02 — Rugs",
      title: "Rugs",
      tone: "olive"
    }, {
      eyebrow: "03 — Lighting",
      title: "Lighting",
      tone: "bronze"
    }, {
      eyebrow: "04 — Decor",
      title: "Decor",
      tone: "stone",
      toneText: "light"
    }, {
      eyebrow: "05 — Wall Art",
      title: "Wall Art",
      tone: "sand",
      toneText: "light"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Signature Collections",
      title: "Five disciplines, one point of view.",
      intro: "Each category is curated and commissioned in-house \u2014 a considered edit rather than an endless catalog."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "260px 260px",
        gap: "var(--gap-card)",
        marginTop: 48
      }
    }, tiles.map((t, i) => /*#__PURE__*/React.createElement(CollectionTile, {
      key: t.title,
      eyebrow: t.eyebrow,
      title: t.title,
      tone: t.toneText || "dark",
      cta: "Explore",
      onClick: e => {
        e.preventDefault();
        onNavigate("collection", t.title);
      },
      style: t.span ? {
        gridRow: "span 2",
        minHeight: 0
      } : {
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: t.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }))))));
  }

  /* ---------- CRAFTSMANSHIP STORY ---------- */
  function Craft() {
    const details = [{
      tone: "espresso",
      label: "Joinery by hand"
    }, {
      tone: "bronze",
      label: "Cast brass"
    }, {
      tone: "olive",
      label: "Natural-dyed wool"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        gap: "clamp(40px,6vw,96px)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--gap-card)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      ratio: "3/4",
      label: "The maker's hand",
      style: {
        gridRow: "span 2"
      }
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "clay",
      ratio: "4/3"
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "stone",
      ratio: "4/3"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "The Atelier",
      title: "Made slowly, by hand, to last.",
      intro: "Every piece begins in the hands of an artisan \u2014 turned, joined and finished the way furniture was always meant to be made."
    }), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "28px 0 0",
        padding: 0,
        display: "grid",
        gap: 14
      }
    }, ["Workshops across India, partnered for generations", "Solid wood, hand-knotted wool, cast brass & stone", "Made to order — never mass-produced"].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "baseline",
        fontSize: "var(--text-body)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-circle",
      style: {
        fontSize: 7,
        color: "var(--accent)",
        transform: "translateY(-2px)"
      }
    }), t))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "Inside the Atelier")))));
  }

  /* ---------- NEW ARRIVALS RAIL ---------- */
  function Arrivals({
    onNavigate
  }) {
    const products = [{
      category: "Seating",
      name: "Marwar Lounge Chair",
      price: "₹ 1,48,000",
      note: "Made to order",
      tone: "clay",
      badge: "Handcrafted"
    }, {
      category: "Rugs",
      name: "Aravalli Hand-Knotted Rug",
      price: "₹ 2,20,000",
      tone: "olive",
      badge: "New"
    }, {
      category: "Lighting",
      name: "Brass Meridian Pendant",
      price: "₹ 64,000",
      note: "Ships in 3 wks",
      tone: "bronze"
    }, {
      category: "Tables",
      name: "Udai Travertine Coffee Table",
      price: "₹ 96,000",
      tone: "stone",
      badge: "New"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Just Arrived",
      title: "New this season"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => onNavigate("collection", "New Arrivals")
    }, "View all new")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "var(--gap-card)",
        marginTop: 44
      }
    }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.name,
      category: p.category,
      name: p.name,
      price: p.price,
      note: p.note,
      badge: p.badge ? /*#__PURE__*/React.createElement(Badge, {
        variant: "on-image"
      }, p.badge) : null,
      onClick: e => {
        e.preventDefault();
        onNavigate("product", p.name);
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: p.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }))))));
  }

  /* ---------- SHOP BY ROOM ---------- */
  function Rooms({
    onNavigate
  }) {
    const rooms = [{
      title: "Living Room",
      tone: "clay"
    }, {
      title: "Dining",
      tone: "espresso"
    }, {
      title: "Bedroom",
      tone: "stone",
      toneText: "light"
    }, {
      title: "Study",
      tone: "olive"
    }, {
      title: "Outdoor",
      tone: "bronze"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement(SectionHead, {
      center: true,
      eyebrow: "Shop by Room",
      title: "Begin with the space.",
      intro: "See how our pieces live together \u2014 then make the room your own."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--gap-tile)",
        marginTop: 48,
        overflow: "hidden"
      }
    }, rooms.map(r => /*#__PURE__*/React.createElement(CollectionTile, {
      key: r.title,
      title: r.title,
      tone: r.toneText || "dark",
      cta: "Shop the room",
      onClick: e => {
        e.preventDefault();
        onNavigate("collection", r.title);
      },
      style: {
        flex: 1,
        minHeight: 440,
        borderRadius: 0
      }
    }, /*#__PURE__*/React.createElement(window.AAFigure, {
      tone: r.tone,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    })))));
  }

  /* ---------- FEATURED COLLECTION (editorial full-bleed) ---------- */
  function Featured({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        minHeight: 620,
        display: "flex",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(34,31,27,.74), rgba(34,31,27,.25) 60%, transparent)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        position: "relative",
        width: "100%",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      rule: true
    }, "The Featured Collection"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "var(--text-on-dark)",
        fontSize: "var(--text-display-2)",
        lineHeight: 1.06,
        letterSpacing: "var(--tracking-tight)",
        margin: "20px 0 0"
      }
    }, "The Marwar Collection"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(250,246,239,.84)",
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.7,
        marginTop: 20
      }
    }, "An ode to the courtyards of Rajasthan \u2014 low silhouettes, hand-carved frames, and the deep warmth of aged teak and brass."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 34
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true,
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => onNavigate("collection", "The Marwar Collection")
    }, "Explore the Collection")))));
  }

  /* ---------- TRADE BAND ---------- */
  function Trade({
    onNavigate
  }) {
    const perks = [{
      icon: "ph-medal",
      h: "Trade Pricing",
      t: "Member pricing across every collection, with dedicated account support."
    }, {
      icon: "ph-pencil-ruler",
      h: "Customization",
      t: "Bespoke dimensions, finishes and materials for your projects."
    }, {
      icon: "ph-swatches",
      h: "Sampling",
      t: "Material and finish samples shipped to your studio."
    }, {
      icon: "ph-buildings",
      h: "Project & Bulk",
      t: "Procurement and delivery logistics for residential & hospitality."
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      light: true,
      eyebrow: "Trade & Design Program",
      title: "For designers & architects."
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.7,
        color: "var(--text-on-dark-muted)"
      }
    }, "We partner with interior designers, architects and hospitality buyers to source with confidence \u2014 from a single statement piece to an entire property.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        marginTop: 56,
        background: "var(--border-on-dark)",
        border: "1px solid var(--border-on-dark)"
      }
    }, perks.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.h,
      style: {
        background: "var(--surface-dark)",
        padding: "34px 28px"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + p.icon,
      style: {
        fontSize: 30,
        color: "var(--accent-soft)"
      }
    }), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 22,
        margin: "20px 0 10px"
      }
    }, p.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.65,
        color: "var(--text-on-dark-muted)"
      }
    }, p.t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => onNavigate("trade")
    }, "Request Trade Access"))));
  }

  /* ---------- CUSTOMER HOMES ---------- */
  function Homes() {
    const imgs = [{
      tone: "clay",
      label: "@studio.kohl"
    }, {
      tone: "stone",
      label: "@thebandracs"
    }, {
      tone: "olive",
      label: "@maison.rao"
    }, {
      tone: "bronze",
      label: "@verandah.co"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement(SectionHead, {
      center: true,
      eyebrow: "Customer Homes",
      title: "Lived in, beautifully.",
      intro: "Real spaces, shared by the homeowners and designers who made them. Tag #ArtAvenueAtHome."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap({
          marginTop: 48
        }),
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "var(--gap-card)"
      }
    }, imgs.map(m => /*#__PURE__*/React.createElement(Figure, {
      key: m.label,
      tone: m.tone,
      ratio: "1/1",
      label: m.label
    }))));
  }

  /* ---------- JOURNAL ---------- */
  function Journal({
    onNavigate
  }) {
    const posts = [{
      cat: "Styling",
      title: "How to layer a living room like a designer",
      read: "6 min",
      tone: "stone"
    }, {
      cat: "Materials",
      title: "Why hand-knotted wool ages so beautifully",
      read: "4 min",
      tone: "olive"
    }, {
      cat: "At Home",
      title: "Inside a Bandra apartment, restored",
      read: "8 min",
      tone: "clay"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "The Journal",
      title: "Design notes & stories"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => onNavigate("collection", "Journal")
    }, "Read the Journal")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--gap-card)",
        marginTop: 44
      }
    }, posts.map(p => /*#__PURE__*/React.createElement("a", {
      key: p.title,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        textDecoration: "none",
        color: "inherit"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: p.tone,
      ratio: "3/2"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        display: "flex",
        gap: 12,
        alignItems: "center",
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-accent)"
      }
    }, p.cat), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.read, " read")), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 1.2,
        margin: "12px 0 0",
        maxWidth: "92%"
      }
    }, p.title))))));
  }

  /* ---------- BRAND STATEMENT ---------- */
  function Statement() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "calc(var(--section-y) * 1.1) 0",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 920,
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      center: true,
      rule: true
    }, "Art Avenue"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "clamp(28px,3.6vw,48px)",
        lineHeight: 1.18,
        letterSpacing: "var(--tracking-tight)",
        color: "var(--text-primary)",
        margin: "26px 0 0",
        textWrap: "balance"
      }
    }, "We are not a furniture store. We are a design house \u2014 curating the handcrafted, the considered, and the made-to-last, so your home can hold its stories for generations.")));
  }
  function HomePage({
    onNavigate
  }) {
    const nav = onNavigate || (() => {});
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(Signature, {
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(Craft, null), /*#__PURE__*/React.createElement(Arrivals, {
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(Rooms, {
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(Featured, {
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(Trade, {
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(Homes, null), /*#__PURE__*/React.createElement(Journal, {
      onNavigate: nav
    }), /*#__PURE__*/React.createElement(Statement, null));
  }
  window.AAHomePage = HomePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MaterialLibrary.jsx
try { (() => {
/* Art Avenue — Material & Finish Library (product-driven · scalable)
 * The library is organised by product category and rendered from the LIBRARY
 * data map alone — no layout is tied to a specific material or technique.
 * Add a category, a group or an item and the page extends itself; nothing
 * here needs redesigning as the range grows.
 */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge
  } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const wrap = (extra = {}) => ({
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...extra
  });
  const waHref = msg => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);

  /* category → groups → items. Everything the page renders comes from here. */
  const LIBRARY = {
    Furniture: {
      groups: [{
        h: "Wood Finishes",
        note: "Solid hardwoods, hand-rubbed and oiled.",
        items: [{
          name: "Natural Teak",
          tone: "bronze",
          d: "Warm honey grain, ages to amber."
        }, {
          name: "Walnut",
          tone: "clay",
          d: "Rich chocolate tone, fine figure."
        }, {
          name: "Dark Walnut",
          tone: "espresso",
          d: "Deep, near-espresso, matte."
        }, {
          name: "Ebonised Oak",
          tone: "espresso",
          d: "Blackened open grain."
        }]
      }, {
        h: "Fabric & Upholstery",
        note: "Natural and performance weaves.",
        items: [{
          name: "Belgian Linen",
          tone: "stone",
          d: "Soft, breathable, lived-in."
        }, {
          name: "Performance Weave",
          tone: "sand",
          d: "Stain-resistant, family-ready."
        }, {
          name: "Bouclé",
          tone: "stone",
          d: "Textured, plush, tactile."
        }, {
          name: "Aniline Leather",
          tone: "clay",
          d: "Full-grain, patinas beautifully."
        }]
      }, {
        h: "Metal Finishes",
        note: "Cast and brushed by hand.",
        items: [{
          name: "Aged Brass",
          tone: "bronze",
          d: "Warm, lightly burnished."
        }, {
          name: "Blackened Steel",
          tone: "espresso",
          d: "Matte gunmetal."
        }, {
          name: "Antique Bronze",
          tone: "clay",
          d: "Dark, dimensional patina."
        }]
      }, {
        h: "Stone & Surface",
        note: "Quarried and honed.",
        items: [{
          name: "Travertine",
          tone: "sand",
          d: "Soft cream, natural pitting."
        }, {
          name: "Carrara Marble",
          tone: "stone",
          d: "Cool white, grey veining."
        }, {
          name: "Kota Stone",
          tone: "olive",
          d: "Earthy green-grey, matte."
        }]
      }],
      methods: [["Mortise & tenon joinery", "Interlocked, pegged joints — never glue-only shortcuts."], ["Hand-tied suspension", "Webbed, hand-knotted seat support that lasts decades."], ["Hand-rubbed finishing", "Oils and waxes worked in by hand, layer by layer."]]
    },
    Rugs: {
      groups: [{
        h: "Pile Materials",
        note: "Spun and dyed for the hand.",
        items: [{
          name: "Highland Wool",
          tone: "olive",
          d: "Dense, resilient, decades of wear."
        }, {
          name: "Cotton",
          tone: "stone",
          d: "Crisp, breathable, flatweave-friendly."
        }, {
          name: "Mulberry Silk",
          tone: "sand",
          d: "Lustrous sheen, fine detail."
        }, {
          name: "Jute & Natural",
          tone: "clay",
          d: "Earthy, textural, hard-wearing."
        }, {
          name: "Cotton Chenille",
          tone: "bronze",
          d: "Plush, soft underfoot."
        }]
      }, {
        h: "Construction",
        note: "How the rug is built.",
        items: [{
          name: "Hand-Knotted",
          tone: "olive",
          d: "Tied knot by knot; the most enduring."
        }, {
          name: "Hand-Tufted",
          tone: "clay",
          d: "Punched and sheared; plush, faster."
        }, {
          name: "Flat-Weave",
          tone: "stone",
          d: "No pile, reversible, light."
        }, {
          name: "Hand-Loomed",
          tone: "sand",
          d: "Subtle loop or cut-pile texture."
        }]
      }],
      methods: [["Hand-knotting", "100–120 knots per square inch on vertical looms."], ["Natural dyeing", "Vegetable and low-impact dyes; gentle abrash."], ["Hand-shearing & binding", "Pile sheared and edges bound by hand."]]
    },
    Cushions: {
      groups: [{
        h: "Fabrics",
        note: "Natural fibres, chosen for the hand.",
        items: [{
          name: "Cotton",
          tone: "stone",
          d: "Breathable, easy, everyday."
        }, {
          name: "Washed Linen",
          tone: "sand",
          d: "Soft slub, relaxed drape."
        }, {
          name: "Cotton Velvet",
          tone: "bronze",
          d: "Deep pile, shifting sheen."
        }, {
          name: "Wool",
          tone: "olive",
          d: "Warm, textured, substantial."
        }, {
          name: "Full-Grain Leather",
          tone: "espresso",
          d: "Saddle-stitched, patinas."
        }]
      }, {
        h: "Techniques",
        note: "Many crafts, one template.",
        items: [{
          name: "Block Print",
          tone: "clay",
          d: "Hand-carved blocks, natural dyes."
        }, {
          name: "Handwoven",
          tone: "stone",
          d: "Yarn-dyed, woven on pit looms."
        }, {
          name: "Hand-Embroidered",
          tone: "bronze",
          d: "Stitched motif by motif."
        }, {
          name: "Appliqué",
          tone: "olive",
          d: "Cut and layered by hand."
        }, {
          name: "Hand-Painted",
          tone: "sand",
          d: "Brushed individually."
        }]
      }],
      methods: [["Small-batch making", "Crafted in short runs by textile artisans."], ["Concealed finishing", "Hidden zips, piped or saddle-stitched edges."], ["Ethical inserts", "Feather-and-down or fibre, cambric-cased."]]
    },
    Lighting: {
      groups: [{
        h: "Metals",
        note: "Cast, spun and finished by hand.",
        items: [{
          name: "Aged Brass",
          tone: "bronze",
          d: "Warm, softly burnished."
        }, {
          name: "Blackened Steel",
          tone: "espresso",
          d: "Matte, architectural."
        }, {
          name: "Antique Bronze",
          tone: "clay",
          d: "Dark, dimensional patina."
        }]
      }, {
        h: "Shades & Diffusers",
        note: "How the light is softened.",
        items: [{
          name: "Alabaster",
          tone: "sand",
          d: "Glows warm and even."
        }, {
          name: "Hand-Blown Glass",
          tone: "stone",
          d: "Seeded, characterful."
        }, {
          name: "Rattan",
          tone: "clay",
          d: "Woven, casts soft shadow."
        }, {
          name: "Linen Shade",
          tone: "sand",
          d: "Diffuse, quiet light."
        }]
      }],
      methods: [["Hand-finishing", "Living metal finishes that deepen with time."], ["Rewireable build", "Made to be serviced, not replaced."], ["Considered light", "Designed to flatter a room after dark."]]
    },
    Decor: {
      groups: [{
        h: "Ceramic & Stone",
        note: "Thrown, carved and fired.",
        items: [{
          name: "Stoneware",
          tone: "stone",
          d: "Matte glaze, tactile body."
        }, {
          name: "Terracotta",
          tone: "clay",
          d: "Warm, earthen, unglazed."
        }, {
          name: "Marble",
          tone: "sand",
          d: "Honed, cool, veined."
        }, {
          name: "Soapstone",
          tone: "olive",
          d: "Soft grey-green, smooth."
        }]
      }, {
        h: "Metal & Wood",
        note: "Worked by makers' hands.",
        items: [{
          name: "Cast Brass",
          tone: "bronze",
          d: "Weighty, warm, lasting."
        }, {
          name: "Teak",
          tone: "bronze",
          d: "Carved, oiled, golden."
        }, {
          name: "Mango Wood",
          tone: "clay",
          d: "Open grain, characterful."
        }]
      }],
      methods: [["Hand-throwing & carving", "Each object made individually."], ["Honest materials", "Finished to feel like themselves."], ["Tactile by design", "Made to be handled and lived with."]]
    }
  };
  const CATS = Object.keys(LIBRARY);
  function Swatch({
    it
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-raised)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: it.tone,
      ratio: "4/3"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 18px 18px"
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 19,
        margin: 0
      }
    }, it.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-secondary)",
        lineHeight: 1.5,
        margin: "6px 0 14px"
      }
    }, it.d), /*#__PURE__*/React.createElement("a", {
      href: waHref("Hello Art Avenue, I'd like to request a sample of " + it.name + ". I understand a sample fee of ₹999–₹2,999 applies."),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-swatches"
    }), " Request Sample \xB7 from \u20B9999")));
  }
  function MaterialLibrary({
    onNavigate,
    name
  }) {
    const nav = onNavigate || (() => {});
    const guess = CATS.find(c => new RegExp(c.replace(/s$/, ""), "i").test(name || "")) || "Furniture";
    const [cat, setCat] = React.useState(guess);
    const data = LIBRARY[cat] || LIBRARY.Furniture;
    return /*#__PURE__*/React.createElement("main", {
      style: {
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        height: 380,
        display: "flex",
        alignItems: "center",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(34,31,27,.55), rgba(34,31,27,.32))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      center: true
    }, "The Library"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "var(--text-on-dark)",
        fontSize: "var(--text-display-2)",
        lineHeight: 1.05,
        margin: "16px 0 0"
      }
    }, "Materials & Finishes"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(250,246,239,.84)",
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.6,
        marginTop: 16
      }
    }, "Every wood, weave, fibre, metal and stone we work across the house \u2014 and a sample of any, sent to your door."))), /*#__PURE__*/React.createElement("section", {
      style: {
        position: "sticky",
        top: 76,
        zIndex: 20,
        background: "var(--surface-page)",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        padding: "14px var(--gutter)"
      }
    }, CATS.map(c => {
      const on = c === cat;
      return /*#__PURE__*/React.createElement("button", {
        key: c,
        onClick: () => setCat(c),
        style: {
          padding: "9px 18px",
          borderRadius: "var(--radius-pill)",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          letterSpacing: "var(--tracking-caps)",
          textTransform: "uppercase",
          background: on ? "var(--text-primary)" : "transparent",
          color: on ? "var(--surface-page)" : "var(--text-secondary)",
          border: "1px solid " + (on ? "var(--text-primary)" : "var(--border-strong)"),
          transition: "background var(--dur-fast), color var(--dur-fast)"
        }
      }, c);
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap({
          paddingTop: "var(--section-y-tight)",
          paddingBottom: "var(--section-y-tight)"
        }),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "Feel It First"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h2)",
        lineHeight: 1.1,
        margin: "14px 0 0"
      }
    }, cat, " materials, in your hands."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: "var(--text-secondary)",
        lineHeight: 1.6,
        margin: "12px 0 0"
      }
    }, "Samples are \u20B9999\u2013\u20B92,999 each depending on the material \u2014 a small, considered step before a significant piece.")), /*#__PURE__*/React.createElement("a", {
      href: waHref("Hello Art Avenue, I'd like to request a " + cat + " material & finish sample set. I understand a per-sample fee of ₹999–₹2,999 applies."),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-swatches"
      })
    }, "Request a Sample Set"))), data.groups.map((g, gi) => /*#__PURE__*/React.createElement("section", {
      key: cat + g.h,
      style: {
        background: gi % 2 ? "var(--surface-alt)" : "var(--surface-page)",
        padding: "var(--section-y-tight) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h3)",
        margin: 0
      }
    }, g.h), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, g.note)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "var(--gap-card)"
      }
    }, g.items.map(it => /*#__PURE__*/React.createElement(Swatch, {
      key: it.name,
      it: it
    })))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px,6vw,96px)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      ratio: "4/3",
      label: "Made by hand, in India"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      rule: true
    }, "How It's Made \xB7 ", cat), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h1)",
        lineHeight: 1.1,
        margin: "16px 0 0"
      }
    }, "How it's made matters."), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "24px 0 0",
        padding: 0,
        display: "grid",
        gap: 16
      }
    }, data.methods.map(([h, dd]) => /*#__PURE__*/React.createElement("li", {
      key: h,
      style: {
        borderTop: "1px solid var(--border-on-dark)",
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 20
      }
    }, h), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-on-dark-muted)",
        marginTop: 4,
        lineHeight: 1.6
      }
    }, dd))))))));
  }
  window.AAMaterialLibrary = MaterialLibrary;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MaterialLibrary.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductPage.jsx
try { (() => {
/* Art Avenue — Product page (conversion-optimized) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge,
    ProductCard
  } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const wrap = (extra = {}) => ({
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...extra
  });
  const inr = n => "₹ " + n.toLocaleString("en-IN");
  const waHref = msg => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
  function Accordion({
    items,
    start = 0
  }) {
    const [open, setOpen] = React.useState(start);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: it.h,
      style: {
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(open === i ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "none",
        border: "none",
        padding: "18px 0",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        fontWeight: 500,
        color: "var(--text-primary)"
      }
    }, it.h), /*#__PURE__*/React.createElement("i", {
      className: "ph ph-" + (open === i ? "minus" : "plus"),
      style: {
        fontSize: 14,
        color: "var(--text-muted)"
      }
    })), open === i && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 20,
        fontSize: 15,
        lineHeight: 1.72,
        color: "var(--text-secondary)",
        maxWidth: "62ch"
      }
    }, it.body))));
  }

  /* labelled option group */
  function OptionRow({
    label,
    value,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", null, label), value && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, value)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 12,
        flexWrap: "wrap"
      }
    }, children));
  }
  function Chip({
    on,
    onClick,
    children
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        padding: "9px 16px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        letterSpacing: ".02em",
        background: on ? "var(--surface-accent-tint)" : "transparent",
        color: on ? "var(--text-accent)" : "var(--text-secondary)",
        border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)")
      }
    }, children);
  }
  function Dot({
    color,
    on,
    onClick,
    title
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      title: title,
      style: {
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: color,
        cursor: "pointer",
        border: "1px solid var(--border-hairline)",
        outline: on ? "1.5px solid var(--accent)" : "1.5px solid transparent",
        outlineOffset: 3,
        padding: 0
      }
    });
  }

  /* sticky buy bar — appears on scroll */
  function StickyBar({
    name,
    price,
    waMsg,
    cart = true
  }) {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setShow(window.scrollY > 620);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 55,
        background: "var(--surface-raised)",
        borderTop: "1px solid var(--border-hairline)",
        boxShadow: "0 -8px 24px -16px rgba(43,40,36,.4)",
        transform: show ? "translateY(0)" : "translateY(110%)",
        transition: "transform var(--dur-base) var(--ease-luxe)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "12px var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        alignItems: "baseline",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        color: "var(--text-secondary)"
      }
    }, price)), /*#__PURE__*/React.createElement("a", {
      href: waHref(waMsg),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Consult")), cart === false ? /*#__PURE__*/React.createElement("a", {
      href: waHref(waMsg),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Enquire")) : /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Add to Cart")));
  }

  /* ---- merchant-driven size handling (declared per-SKU via product data / metafields) ----
   * sizeMode: "multi" → size selector · "single" → one size, no selector · "custom" → made to your dimensions
   * Demonstrated here via SKU keywords; in production this comes from the product record. */
  /* ---- merchant-driven product config (declared per-SKU via product data / metafields) ----
   * sizeMode:    "multi" · "single" · "custom"
   * fulfillment: "in-stock" · "made-to-order" · "custom" · "project"
   * modules:     each optional section renders only when its flag is true.
   * Demonstrated here via SKU keywords; in production every field comes from the product record. */
  function furnitureConfig(name) {
    const n = (name || "").toLowerCase();
    if (/contract|hospitality|project/.test(n)) return {
      sizeMode: "multi",
      fulfillment: "project",
      visibility: "project-only",
      modules: {
        material: true,
        finish: true,
        upholstery: true,
        samples: true,
        customization: true,
        assembly: true,
        completeRoom: true,
        faq: true,
        related: false,
        delivery: true
      }
    };
    if (/bespoke|custom|made-to-measure/.test(n)) return {
      sizeMode: "custom",
      fulfillment: "custom",
      visibility: "price-on-request",
      modules: {
        material: true,
        finish: true,
        upholstery: true,
        samples: true,
        customization: true,
        assembly: true,
        completeRoom: true,
        faq: true,
        related: true,
        delivery: true
      }
    };
    if (/pendant|chandelier|sconce|lamp|vase|vessel|tray|bowl|object|mirror|stool|pouffe/.test(n)) return {
      sizeMode: "single",
      oneSize: "One size",
      fulfillment: "in-stock",
      visibility: "ecommerce",
      modules: {
        material: false,
        finish: true,
        upholstery: false,
        samples: false,
        customization: false,
        assembly: false,
        completeRoom: true,
        faq: true,
        related: true,
        delivery: true
      }
    };
    return window.AAPreset("luxury-furniture");
  }
  function ProductPage({
    onNavigate,
    name
  }) {
    const nav = onNavigate || (() => {});
    const pname = name && name !== "true" ? name : "Marwar Lounge Chair";
    const sku = "AA-" + pname.split(" ").map(w => w[0]).join("").toUpperCase() + "-01";
    const fcfg = furnitureConfig(pname);
    const ful = window.AAFulfillment(fcfg.fulfillment);
    const lifecycle = fcfg.lifecycle || (/coming soon/i.test(pname) ? "coming-soon" : /seasonal/i.test(pname) ? "seasonal" : /discontinued/i.test(pname) ? "discontinued" : "active");
    const life = window.AALifecycle(lifecycle);
    const com = window.AACommerce(fcfg, life);
    const allSizes = [{
      k: "std",
      label: "Standard",
      add: 0
    }, {
      k: "grand",
      label: "Grand",
      add: 30000
    }];
    const sizes = fcfg.sizeMode === "multi" ? allSizes : [{
      k: "std",
      label: fcfg.oneSize || "Standard",
      add: 0
    }];
    const materials = [{
      k: "teak",
      label: "Solid Teak",
      add: 0
    }, {
      k: "mango",
      label: "Mango Wood",
      add: -18000
    }, {
      k: "oak",
      label: "Oak Veneer",
      add: -8000
    }];
    const finishes = [{
      k: "natural",
      label: "Natural",
      c: "#b9966a"
    }, {
      k: "walnut",
      label: "Walnut",
      c: "#6a4a2e"
    }, {
      k: "dark",
      label: "Dark Walnut",
      c: "#4a3422"
    }, {
      k: "black",
      label: "Black",
      c: "#2c2824"
    }];
    const uphol = [{
      k: "linen",
      label: "Belgian Linen",
      c: "#d8cdb6"
    }, {
      k: "perf",
      label: "Performance Weave",
      c: "#b7b09c"
    }, {
      k: "leather",
      label: "Aniline Leather",
      c: "#8a5a3c",
      add: 42000
    }];
    const [size, setSize] = React.useState("std");
    const [mat, setMat] = React.useState("teak");
    const [fin, setFin] = React.useState("natural");
    const [uph, setUph] = React.useState("linen");
    const [qty, setQty] = React.useState(1);
    const base = 148000;
    const price = base + sizes.find(s => s.k === size).add + materials.find(m => m.k === mat).add + (uphol.find(u => u.k === uph).add || 0);
    const consultMsg = `Hello Art Avenue, I'd like to speak with a design consultant about the ${pname} (SKU ${sku}). ${typeof location !== "undefined" ? location.href : ""}`;
    const sampleMsg = kind => `Hello Art Avenue, I'd like to request a ${kind} sample for the ${pname} (SKU ${sku}). I understand a sample fee of ₹999–₹2,999 applies depending on the material.`;
    const customMsg = `Hello Art Avenue, I'd like a custom size or finish for the ${pname} (SKU ${sku}).`;
    const category = /lamp|pendant|chandelier|sconce|light/i.test(pname) ? "Lighting" : /vase|vessel|mirror|sculpture|tray|bowl|object/i.test(pname) ? "Decor" : /\bart\b|print|canvas|painting|photograph|diptych|triptych/i.test(pname) ? "Wall Art" : "Furniture";
    const trustItems = ["Handcrafted in India", "Made to order in our workshops", "Customization available — size, finish & fabric", "Secure, insured delivery across India", "International shipping available"];
    const accordion = [{
      h: "Materials",
      body: "Frame in kiln-dried solid teak with a hand-rubbed oil finish. Seat and back upholstered in 100% Belgian linen over a webbed, hand-tied suspension. Naturally occurring grain variation is intrinsic to each piece."
    }, {
      h: "Craftsmanship",
      body: "Carved, joined and finished by hand in our workshops. Each chair passes through the hands of several craftspeople over roughly three weeks — joinery is mortise-and-tenon, never glued shortcuts."
    }, {
      h: "Dimensions & Specifications",
      body: "W 74 cm × D 82 cm × H 78 cm · Seat height 42 cm · Weight 14 kg. Suitable for residential and light-contract use. Custom dimensions available through the Trade program."
    }, {
      h: "Assembly & Installation",
      body: "Most pieces arrive safely packed and ready to use. Certain larger items may require simple assembly; for these, installation assistance may be available depending on the product and your location. Please speak with a design consultant to confirm assembly or installation support before you order."
    }, {
      h: "Care",
      body: "Dust timber with a soft dry cloth; treat with our wax balm twice yearly. Vacuum upholstery gently; professional clean for marks. Keep out of prolonged direct sun to preserve finish."
    }, {
      h: "Delivery & Shipping",
      body: "Made-to-order pieces ship in 3–4 weeks via safe, insured delivery. Items are securely packed for transit; assembly assistance is available on selected pieces — ask a consultant. International freight is quoted at checkout."
    }, {
      h: "Designer Notes",
      body: "“We drew the Marwar from the low, generous seating of Rajasthani courtyards — a chair you sink into, not perch on. The arms are deliberately wide enough to rest a book and a cup.” — In-house Design Studio"
    }];
    const faqs = [{
      h: "How long does a made-to-order piece take?",
      body: "Most pieces are crafted and delivered within 3–4 weeks domestically. Your consultant confirms a precise timeline for your finish and upholstery at order."
    }, {
      h: "Can I customise the size, finish or fabric?",
      body: "Yes — bespoke dimensions, finishes and customer-own-material (COM) upholstery are available. Tap “Need a Custom Size or Finish?” to speak with a consultant."
    }, {
      h: "Do you ship internationally?",
      body: "We ship worldwide with insured freight; a quote is provided at checkout or by your consultant. Duties and delivery details can be arranged per destination."
    }, {
      h: "What is your returns policy?",
      body: "Stocked pieces may be returned within 14 days. Made-to-order and customised pieces are final sale, which is why we encourage a material sample first."
    }];
    const pairs = [{
      category: "Lighting",
      name: "Brass Meridian Pendant",
      price: "₹ 64,000",
      tone: "bronze"
    }, {
      category: "Rugs",
      name: "Aravalli Hand-Knotted Rug",
      price: "₹ 2,20,000",
      tone: "olive"
    }, {
      category: "Tables",
      name: "Udai Travertine Side Table",
      price: "₹ 48,000",
      tone: "stone"
    }, {
      category: "Decor",
      name: "Hand-Thrown Stone Vessel",
      price: "₹ 12,000",
      tone: "clay"
    }];
    const recent = [{
      category: "Seating",
      name: "Kashi Linen Sofa",
      price: "₹ 3,20,000",
      tone: "stone"
    }, {
      category: "Tables",
      name: "Amer Marble Dining Table",
      price: "₹ 4,10,000",
      tone: "clay"
    }, {
      category: "Storage",
      name: "Jodha Carved Sideboard",
      price: "₹ 2,60,000",
      tone: "espresso"
    }, {
      category: "Lighting",
      name: "Brass Meridian Pendant",
      price: "₹ 64,000",
      tone: "bronze"
    }];
    const deliveryInfo = [{
      i: ful.icon,
      t: ful.label,
      s: "Fulfillment"
    }, {
      i: "ph-clock",
      t: ful.lead,
      s: "Lead time"
    }, {
      i: "ph-truck",
      t: "Insured delivery",
      s: "Secure & tracked"
    }, {
      i: "ph-globe-hemisphere-east",
      t: "Worldwide",
      s: "International shipping"
    }];
    const moduleOrder = fcfg.moduleOrder || ["assembly", "whyLove", "customization", "completeRoom", "faq", "related"];
    const sectionFor = k => {
      switch (k) {
        case "assembly":
          return fcfg.modules.assembly && category === "Furniture" ? /*#__PURE__*/React.createElement(window.AAAssemblyBand, {
            href: waHref(consultMsg)
          }) : null;
        case "whyLove":
          return /*#__PURE__*/React.createElement(window.AAWhyLoveIt, {
            category: category
          });
        case "customization":
          return fcfg.modules.customization ? /*#__PURE__*/React.createElement(window.AAMadeForYourSpace, {
            category: category,
            href: waHref("Hello Art Avenue, I'd like to customize the " + pname + " (SKU " + sku + ") — sizes, finishes or materials.")
          }) : null;
        case "completeRoom":
          return fcfg.modules.completeRoom ? /*#__PURE__*/React.createElement("section", {
            style: {
              background: "var(--surface-alt)",
              padding: "var(--section-y) 0"
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: wrap()
          }, /*#__PURE__*/React.createElement(Eyebrow, {
            tone: "accent",
            rule: true
          }, "Complete the Room"), /*#__PURE__*/React.createElement("h2", {
            style: {
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: "var(--text-h1)",
              margin: "16px 0 0"
            }
          }, "Pieces our stylists pair with the Marwar"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--gap-card)",
              marginTop: 40
            }
          }, pairs.map(p => /*#__PURE__*/React.createElement(ProductCard, {
            key: p.name,
            category: p.category,
            name: p.name,
            price: p.price,
            favorite: false,
            onClick: e => {
              e.preventDefault();
              nav("product", p.name);
            }
          }, /*#__PURE__*/React.createElement(window.AAFigure, {
            tone: p.tone,
            style: {
              position: "absolute",
              inset: 0,
              borderRadius: 0
            }
          })))))) : null;
        case "faq":
          return fcfg.modules.faq ? /*#__PURE__*/React.createElement("section", {
            style: {
              background: "var(--surface-page)",
              padding: "var(--section-y) 0"
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              ...wrap(),
              display: "grid",
              gridTemplateColumns: "0.8fr 1.2fr",
              gap: "clamp(40px,6vw,96px)",
              alignItems: "start"
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
            tone: "accent",
            rule: true
          }, "Good to Know"), /*#__PURE__*/React.createElement("h2", {
            style: {
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: "var(--text-h2)",
              lineHeight: 1.1,
              margin: "16px 0 0"
            }
          }, "Questions, answered."), /*#__PURE__*/React.createElement("p", {
            style: {
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginTop: 16
            }
          }, "Still unsure? A design consultant is a tap away."), /*#__PURE__*/React.createElement("a", {
            href: waHref(consultMsg),
            target: "_blank",
            rel: "noopener",
            style: {
              textDecoration: "none",
              display: "inline-block",
              marginTop: 8
            }
          }, /*#__PURE__*/React.createElement(Button, {
            variant: "ghost",
            iconRight: /*#__PURE__*/React.createElement("i", {
              className: "ph ph-arrow-right"
            })
          }, "Speak with a Consultant"))), /*#__PURE__*/React.createElement(Accordion, {
            items: faqs,
            start: -1
          }))) : null;
        case "related":
          return fcfg.modules.related ? /*#__PURE__*/React.createElement("section", {
            style: {
              background: "var(--surface-alt)",
              padding: "var(--section-y) 0"
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: wrap()
          }, /*#__PURE__*/React.createElement(Eyebrow, {
            tone: "accent",
            rule: true
          }, "Recently Viewed"), /*#__PURE__*/React.createElement("h2", {
            style: {
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: "var(--text-h1)",
              margin: "16px 0 0"
            }
          }, "Continue where you left off"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--gap-card)",
              marginTop: 40
            }
          }, recent.map(p => /*#__PURE__*/React.createElement(ProductCard, {
            key: p.name,
            category: p.category,
            name: p.name,
            price: p.price,
            favorite: false,
            onClick: e => {
              e.preventDefault();
              nav("product", p.name);
            }
          }, /*#__PURE__*/React.createElement(window.AAFigure, {
            tone: p.tone,
            style: {
              position: "absolute",
              inset: 0,
              borderRadius: 0
            }
          })))))) : null;
        default:
          return null;
      }
    };
    return /*#__PURE__*/React.createElement("main", {
      style: {
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement(StickyBar, {
      name: pname,
      price: com.price ? inr(price) : "Price on request",
      waMsg: consultMsg,
      cart: com.cart
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        padding: "18px var(--gutter)",
        fontSize: 12,
        color: "var(--text-muted)",
        letterSpacing: ".03em"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        nav("home");
      },
      style: {
        color: "inherit",
        textDecoration: "none"
      }
    }, "Home"), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: "0 8px",
        opacity: 0.5
      }
    }, "/"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        nav("collection", "Furniture");
      },
      style: {
        color: "inherit",
        textDecoration: "none"
      }
    }, "Furniture"), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: "0 8px",
        opacity: 0.5
      }
    }, "/"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, pname)), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap({
          paddingBottom: "var(--section-y)"
        }),
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: "clamp(40px,5vw,80px)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--gap-card)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "clay",
      ratio: "4/5",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 18,
        left: 18
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "on-image"
    }, "Handcrafted in India"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--gap-card)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      ratio: "1/1",
      label: "Joinery detail"
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "bronze",
      ratio: "1/1",
      label: "Linen & grain"
    })), /*#__PURE__*/React.createElement(Figure, {
      tone: "stone",
      ratio: "16/10",
      label: "Styled at home"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 100,
        alignSelf: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "Seating \xB7 Lounge"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "clamp(34px,3.4vw,46px)",
        lineHeight: 1.08,
        letterSpacing: "var(--tracking-tight)",
        margin: "12px 0 0"
      }
    }, pname), /*#__PURE__*/React.createElement(window.AAPriceTag, {
      priceText: inr(price),
      commerce: com,
      caption: "Available to order \xB7 crafted for your home"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body)",
        lineHeight: 1.72,
        color: "var(--text-secondary)",
        marginTop: 18,
        maxWidth: "46ch"
      }
    }, "A low, generous lounge chair in solid teak and Belgian linen \u2014 drawn from the courtyards of Rajasthan and built to be lived in."), /*#__PURE__*/React.createElement(window.AAFulfillmentBar, {
      type: fcfg.fulfillment
    }), /*#__PURE__*/React.createElement(window.AALifecycleBanner, {
      state: lifecycle
    }), /*#__PURE__*/React.createElement(window.AATrustBlock, {
      items: trustItems
    }), fcfg.sizeMode === "multi" && /*#__PURE__*/React.createElement(OptionRow, {
      label: "Size",
      value: sizes.find(s => s.k === size).label
    }, sizes.map(s => /*#__PURE__*/React.createElement(Chip, {
      key: s.k,
      on: size === s.k,
      onClick: () => setSize(s.k)
    }, s.label))), fcfg.sizeMode === "single" && /*#__PURE__*/React.createElement(OptionRow, {
      label: "Size",
      value: fcfg.oneSize || "One size"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        padding: "9px 16px",
        borderRadius: "var(--radius-sm)",
        background: "var(--surface-accent-tint)",
        border: "1px solid var(--accent)",
        color: "var(--text-accent)",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-check"
    }), " ", fcfg.oneSize || "One size")), fcfg.sizeMode === "custom" && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        padding: "16px 18px",
        borderRadius: "var(--radius-sm)",
        background: "var(--surface-accent-tint)",
        border: "1px solid var(--accent-soft)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        color: "var(--text-primary)"
      }
    }, "Custom dimensions available"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.55,
        color: "var(--text-secondary)",
        margin: "6px 0 0"
      }
    }, "This piece is made to your measurements \u2014 share your space below and we'll build to fit.")), fcfg.modules.material && /*#__PURE__*/React.createElement(OptionRow, {
      label: "Material",
      value: materials.find(m => m.k === mat).label
    }, materials.map(m => /*#__PURE__*/React.createElement(Chip, {
      key: m.k,
      on: mat === m.k,
      onClick: () => setMat(m.k)
    }, m.label))), fcfg.modules.finish && /*#__PURE__*/React.createElement(OptionRow, {
      label: "Finish",
      value: finishes.find(f => f.k === fin).label
    }, finishes.map(f => /*#__PURE__*/React.createElement(Dot, {
      key: f.k,
      color: f.c,
      title: f.label,
      on: fin === f.k,
      onClick: () => setFin(f.k)
    }))), fcfg.modules.upholstery && /*#__PURE__*/React.createElement(OptionRow, {
      label: "Upholstery",
      value: uphol.find(u => u.k === uph).label
    }, uphol.map(u => /*#__PURE__*/React.createElement(Dot, {
      key: u.k,
      color: u.c,
      title: u.label,
      on: uph === u.k,
      onClick: () => setUph(u.k)
    }))), fcfg.modules.customization && /*#__PURE__*/React.createElement("button", {
      onClick: () => window.open(waHref(customMsg), "_blank"),
      style: {
        marginTop: 16,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "var(--text-accent)",
        fontSize: 12,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase"
      }
    }, "Need a Custom Size or Finish? ", /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-right"
    })), fcfg.modules.samples && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        padding: "18px 0 0",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        marginBottom: 4
      }
    }, "Request a sample"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-secondary)",
        marginBottom: 12
      }
    }, "From ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "\u20B9999"), " per sample \xB7 \u20B9999\u2013\u20B92,999 depending on fabric, finish or material."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 10
      }
    }, [{
      k: "fabric",
      l: "Fabric",
      i: "ph-scissors"
    }, {
      k: "finish",
      l: "Finish",
      i: "ph-paint-roller"
    }, {
      k: "material",
      l: "Material",
      i: "ph-swatches"
    }].map(s => /*#__PURE__*/React.createElement("a", {
      key: s.k,
      href: waHref(sampleMsg(s.k)),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "16px 8px",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + s.i,
      style: {
        fontSize: 22,
        color: "var(--accent-deep)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase"
      }
    }, s.l))))), /*#__PURE__*/React.createElement(window.AACtaButtons, {
      commerce: com,
      priceText: inr(price),
      hrefs: {
        consult: waHref(consultMsg),
        samples: waHref(sampleMsg("material")),
        customize: waHref(customMsg),
        project: waHref(consultMsg),
        "request-pricing": waHref(consultMsg)
      }
    }), fcfg.modules.delivery && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
        margin: "26px 0 0",
        padding: "22px 0",
        borderTop: "1px solid var(--border-hairline)",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, deliveryInfo.map(d => /*#__PURE__*/React.createElement("div", {
      key: d.t,
      style: {
        display: "flex",
        gap: 11,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + d.i,
      style: {
        fontSize: 22,
        color: "var(--accent-deep)",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-primary)"
      }
    }, d.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)",
        letterSpacing: ".02em"
      }
    }, d.s))))), /*#__PURE__*/React.createElement(Accordion, {
      items: accordion
    }))), moduleOrder.map(k => {
      const el = sectionFor(k);
      return el ? /*#__PURE__*/React.createElement(React.Fragment, {
        key: k
      }, el) : null;
    }));
  }
  const qtyBtn = {
    width: 40,
    height: 46,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
    color: "var(--text-secondary)"
  };
  window.AAProductPage = ProductPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RugProductPage.jsx
try { (() => {
/* Art Avenue — Rug Product Page (world-class rug buying experience) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge,
    ProductCard,
    CollectionTile
  } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const wrap = (extra = {}) => ({
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...extra
  });
  const inr = n => "₹ " + n.toLocaleString("en-IN");
  const waHref = msg => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
  function Accordion({
    items,
    start = -1
  }) {
    const [open, setOpen] = React.useState(start);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        borderTop: "1px solid var(--border-hairline)"
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: it.h,
      style: {
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(open === i ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "none",
        border: "none",
        padding: "18px 0",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        fontWeight: 500,
        color: "var(--text-primary)"
      }
    }, it.h), /*#__PURE__*/React.createElement("i", {
      className: "ph ph-" + (open === i ? "minus" : "plus"),
      style: {
        fontSize: 14,
        color: "var(--text-muted)"
      }
    })), open === i && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 20,
        fontSize: 15,
        lineHeight: 1.72,
        color: "var(--text-secondary)",
        maxWidth: "62ch"
      }
    }, it.body))));
  }

  /* Right-side Rug Size Guide drawer (portaled) */
  function RugGuide({
    open,
    onClose
  }) {
    const rooms = [{
      h: "Living Room",
      t: "Front legs of the sofa & chairs rest on the rug; leave 20–25 cm of floor around the edges so it frames the seating.",
      z: "8×10 ft / 9×12 ft",
      tone: "clay"
    }, {
      h: "Dining Room",
      t: "Extend ~60 cm beyond the table on every side so chairs stay on the rug when pulled out.",
      z: "8×10 ft (6-seat) · 9×12 ft (8-seat)",
      tone: "stone"
    }, {
      h: "Bedroom",
      t: "Place two-thirds under the bed with a soft border to step onto, or run a pair of runners either side.",
      z: "8×10 ft (queen) · 9×12 ft (king)",
      tone: "olive"
    }, {
      h: "Runners & Hallways",
      t: "Leave 10–15 cm of floor on each side; choose a runner ~50 cm narrower than the corridor.",
      z: "2.5×8 ft / 2.5×10 ft",
      tone: "bronze"
    }];
    return ReactDOM.createPortal(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(34,31,27,.46)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--dur-base)",
        zIndex: 80
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "min(500px, 94vw)",
        background: "var(--surface-page)",
        transform: open ? "translateX(0)" : "translateX(101%)",
        transition: "transform var(--dur-slow) var(--ease-luxe)",
        zIndex: 81,
        overflowY: "auto",
        boxShadow: "var(--shadow-overlay)",
        padding: "30px 34px 60px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Close",
      style: {
        position: "absolute",
        top: 18,
        right: 24,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 22,
        color: "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-x"
    })), /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent"
    }, "Rug Size Guide"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 32,
        margin: "12px 0 8px",
        lineHeight: 1.1
      }
    }, "Choosing the right size"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.65,
        color: "var(--text-secondary)",
        margin: "0 0 10px"
      }
    }, "The most common mistake is going too small. A rug should sit under the main furniture and anchor the arrangement \u2014 never float island-like in the centre of the room."), rooms.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.h,
      style: {
        borderTop: "1px solid var(--border-hairline)",
        padding: "18px 0",
        display: "grid",
        gridTemplateColumns: "92px 1fr",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: r.tone,
      ratio: "1/1"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 18,
        margin: "0 0 6px"
      }
    }, r.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.55,
        color: "var(--text-secondary)",
        margin: 0
      }
    }, r.t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        marginTop: 7,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: ".04em",
        color: "var(--text-accent)"
      }
    }, "Recommended \xB7 ", r.z)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-accent-tint)",
        borderRadius: "var(--radius-xs)",
        padding: "16px 18px",
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)",
        marginBottom: 8
      }
    }, "Common mistakes to avoid"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.6,
        color: "var(--text-secondary)",
        margin: 0
      }
    }, "A rug too small for the seating \xB7 a dining rug that traps chair legs \xB7 no border in the bedroom. When in doubt, ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: 600
      }
    }, "size up"), ".")), /*#__PURE__*/React.createElement("a", {
      href: waHref("Hello Art Avenue, I'd like help choosing the right rug size. My room is approximately ____ ft x ____ ft."),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none",
        display: "block",
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Ask a Consultant for My Room")))), document.body);
  }
  function OptionRow({
    label,
    value,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", null, label), value && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, value)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 12,
        flexWrap: "wrap"
      }
    }, children));
  }
  function StickyBar({
    name,
    price,
    waMsg,
    mto,
    customHref
  }) {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setShow(window.scrollY > 620);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 55,
        background: "var(--surface-raised)",
        borderTop: "1px solid var(--border-hairline)",
        boxShadow: "0 -8px 24px -16px rgba(43,40,36,.4)",
        transform: show ? "translateY(0)" : "translateY(110%)",
        transition: "transform var(--dur-base) var(--ease-luxe)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "12px var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        alignItems: "baseline",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        color: "var(--text-secondary)"
      }
    }, price)), /*#__PURE__*/React.createElement("a", {
      href: waHref(waMsg),
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots"
      })
    }, "Consult")), mto ? /*#__PURE__*/React.createElement("a", {
      href: customHref,
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Request a Custom Size")) : /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Add to Cart")));
  }
  function RoomDiagram({
    rug,
    items = [],
    round
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "1 / 1",
        background: "var(--surface-raised)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-xs)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: rug.l + "%",
        top: rug.t + "%",
        width: rug.w + "%",
        height: rug.h + "%",
        background: "var(--surface-accent-tint)",
        border: "1px solid var(--accent-soft)",
        borderRadius: round ? "50%" : 2
      }
    }), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "absolute",
        left: it.l + "%",
        top: it.t + "%",
        width: it.w + "%",
        height: it.h + "%",
        background: "var(--text-primary)",
        opacity: 0.82,
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 10,
        bottom: 8,
        fontSize: 9.5,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Top view"));
  }

  /* ---- merchant-driven module config (declared per-SKU via product data / metafields) ----
   * sizeMode: "multi" → size selector · "fixed" → one available size, no selector · "mto" → made to order, custom only
   * modules:  optional sections render only when their flag is true. A merchant can hide any of them.
   * Demonstrated here via SKU keywords; in production these come straight from the product record. */
  function rugConfig(name) {
    const n = (name || "").toLowerCase();
    if (/contract|hospitality|project/.test(n)) return {
      sizeMode: "mto",
      fulfillment: "project",
      visibility: "project-only",
      modules: {
        guides: true,
        specs: true,
        construction: true,
        material: true,
        craft: true,
        rooms: true,
        related: false,
        samples: true
      }
    };
    if (/bespoke|made-to-order|custom|atelier/.test(n)) return {
      sizeMode: "mto",
      fulfillment: "custom",
      visibility: "price-on-request",
      modules: {
        guides: true,
        specs: true,
        construction: true,
        material: true,
        craft: true,
        rooms: true,
        related: true,
        samples: true
      }
    };
    if (/jute|dhurrie|flat-?weave|sisal/.test(n)) return {
      sizeMode: "fixed",
      fulfillment: "in-stock",
      visibility: "ecommerce",
      fixedSize: {
        label: "5 \u00d7 8 ft",
        price: 54000
      },
      modules: {
        guides: false,
        specs: true,
        construction: false,
        material: true,
        craft: false,
        rooms: true,
        related: true,
        samples: true
      }
    };
    return window.AAPreset("luxury-rug");
  }
  function RugProductPage({
    onNavigate,
    name
  }) {
    const nav = onNavigate || (() => {});
    const pname = name && name !== "true" ? name : "Aravalli Hand-Knotted Rug";
    const sku = "AA-" + pname.split(" ").map(w => w[0]).join("").toUpperCase() + "-RG";
    const [guide, setGuide] = React.useState(false);
    const cfg = rugConfig(pname);
    const ful = window.AAFulfillment(cfg.fulfillment);
    const lifecycle = cfg.lifecycle || (/coming soon/i.test(pname) ? "coming-soon" : /seasonal/i.test(pname) ? "seasonal" : /discontinued/i.test(pname) ? "discontinued" : "active");
    const life = window.AALifecycle(lifecycle);
    const com = window.AACommerce(cfg, life);
    const allSizes = [{
      k: "3x5",
      label: "3 × 5 ft",
      price: 38000,
      tag: "standard"
    }, {
      k: "4x6",
      label: "4 × 6 ft",
      price: 62000,
      tag: "standard"
    }, {
      k: "5x8",
      label: "5 × 8 ft",
      price: 98000,
      tag: "standard"
    }, {
      k: "6x9",
      label: "6 × 9 ft",
      price: 142000,
      tag: "standard"
    }, {
      k: "8x10",
      label: "8 × 10 ft",
      price: 220000,
      tag: "standard"
    }, {
      k: "9x12",
      label: "9 × 12 ft",
      price: 296000,
      tag: "standard"
    }, {
      k: "10x14",
      label: "10 × 14 ft",
      price: 392000,
      tag: "made"
    }, {
      k: "round8",
      label: "8 ft Round",
      price: 176000,
      tag: "made"
    }];
    const sizes = cfg.sizeMode === "fixed" ? [{
      k: "fixed",
      label: cfg.fixedSize.label,
      price: cfg.fixedSize.price,
      tag: "standard"
    }] : allSizes;
    const [size, setSize] = React.useState(cfg.sizeMode === "fixed" ? "fixed" : "8x10");
    const [backing, setBacking] = React.useState("with");
    const [mat, setMat] = React.useState("wool");
    const activeSize = sizes.find(s => s.k === size) || sizes[0];
    const price = cfg.sizeMode === "mto" ? null : activeSize.price + (backing === "with" ? 4000 : 0);
    const consultMsg = `Hello Art Avenue, I'd like to speak with a design consultant about the ${pname} (SKU ${sku}). ${typeof location !== "undefined" ? location.href : ""}`;
    const sampleMsg = `Hello Art Avenue, I'd like to request a material sample for the ${pname} (SKU ${sku}). I understand a sample fee of ₹999–₹2,999 applies depending on the material.`;
    const trustItems = ["Custom sizing available on selected rugs", "Assistance choosing the right size", "Consultation available before purchase", "Hand-knotted in India · made to order", "Secure delivery across India · international shipping"];
    const goTo = id => {
      const el = document.getElementById(id);
      if (!el) return;
      const target = el.getBoundingClientRect().top + window.scrollY - 84;
      try {
        window.scrollTo({
          top: target,
          behavior: "smooth"
        });
      } catch (e) {
        window.scrollTo(0, target);
      }
      // guaranteed fallback for environments that ignore smooth/rAF
      setTimeout(() => {
        if (Math.abs(window.scrollY - target) > 4) window.scrollTo(0, target);
      }, 360);
    };
    const specGroups = [{
      g: "Construction & make",
      rows: [["Construction", "Hand-knotted"], ["Weave", "Persian asymmetric knot"], ["Knot density", "100–120 knots / in²"], ["Pile height", "12 mm · medium-low"], ["Shape", "Rectangular · round made to order"]]
    }, {
      g: "Material & colour",
      rows: [["Pile", "Hand-spun highland wool"], ["Foundation", "Mercerised cotton warp & weft"], ["Colour", "Vegetable & low-impact dyes · gentle abrash"], ["Weight", "≈ 3.2 kg / m²"]]
    }, {
      g: "Use & care",
      rows: [["Suitability", "Indoor · residential & light-contract"], ["Origin", "Hand-knotted in India"], ["Lead time", "Made to order · 4–6 months"], ["Care", "Low-pile vacuum · rotate twice yearly · professional clean every 2–3 yrs"]]
    }];
    const constructions = [{
      h: "Hand-Knotted",
      t: "Every knot tied by hand around the warp — the most enduring and collectible construction. Months on the loom; a rug made to be passed down.",
      dur: "Exceptional · decades",
      use: "High-traffic living & dining",
      on: true
    }, {
      h: "Hand-Tufted",
      t: "Wool punched through a backing and sheared to a plush, even pile. Quicker to make and gentler on price, soft underfoot.",
      dur: "Good · 8–12 years",
      use: "Bedrooms & low-traffic"
    }, {
      h: "Flat-Weave",
      t: "Woven flat with no pile — reversible, light and crisp in pattern. Easy to lift, air and layer over a larger rug.",
      dur: "Hard-wearing · reversible",
      use: "Layering, kitchens, entryways"
    }, {
      h: "Hand-Loomed",
      t: "Woven on a loom with a subtle loop or cut pile — a quiet, contemporary texture between knotted and flat.",
      dur: "Very good",
      use: "Living rooms & studies"
    }];
    const process = [{
      n: "01",
      h: "Hand-spinning",
      t: "Highland fleece is carded and spun by hand into characterful, living yarn."
    }, {
      n: "02",
      h: "Natural dyeing",
      t: "Dyed in small lots with vegetable and low-impact dyes — the source of gentle abrash."
    }, {
      n: "03",
      h: "Knotting",
      t: "Tied knot by knot on a vertical loom over four to six months."
    }, {
      n: "04",
      h: "Finishing",
      t: "Hand-sheared, washed, sun-dried and hand-bound at the edges."
    }];
    const rooms = [{
      h: "Living Room",
      z: "8×10 ft / 9×12 ft",
      t: "Sit the front legs of the sofa and chairs on the rug to draw the seating together. Leave 20–25 cm of floor at the edges.",
      miss: "Too small to reach the furniture",
      rug: {
        l: 12,
        t: 22,
        w: 76,
        h: 58
      },
      items: [{
        l: 20,
        t: 14,
        w: 60,
        h: 12
      }, {
        l: 38,
        t: 46,
        w: 24,
        h: 16
      }]
    }, {
      h: "Dining Room",
      z: "8×10 ft (6-seat) · 9×12 ft (8-seat)",
      t: "Size up so chairs stay on the rug when pulled out — extend roughly 60 cm beyond the table on every side.",
      miss: "Chairs catch the rug edge",
      rug: {
        l: 10,
        t: 12,
        w: 80,
        h: 76
      },
      items: [{
        l: 30,
        t: 32,
        w: 40,
        h: 36
      }]
    }, {
      h: "Bedroom",
      z: "8×10 ft (queen) · 9×12 ft (king)",
      t: "Run the rug under the lower two-thirds of the bed so you step onto a soft border each morning.",
      miss: "No border to step onto",
      rug: {
        l: 14,
        t: 42,
        w: 72,
        h: 46
      },
      items: [{
        l: 30,
        t: 8,
        w: 40,
        h: 48
      }]
    }, {
      h: "Runner / Hallway",
      z: "2.5×8 ft / 2.5×10 ft",
      t: "Leave 10–15 cm of floor on each side; beside a bed, pair two runners for symmetry.",
      miss: "Runner wider than the space",
      rug: {
        l: 60,
        t: 12,
        w: 16,
        h: 76
      },
      items: [{
        l: 14,
        t: 18,
        w: 40,
        h: 60
      }]
    }];
    const confidence = ["Handcrafted by skilled artisans", "Made using premium, natural materials", "Secure, insured delivery across India", "International shipping available", "Custom sizes available on select designs", "Design consultation available before you buy"];
    const guides = [{
      h: "Size Guide",
      t: "Find the right size for your room",
      i: "ph-ruler",
      act: "size"
    }, {
      h: "Material Guide",
      t: "Wool, cotton & chenille compared",
      i: "ph-leaf",
      act: "aa-material"
    }, {
      h: "Construction Guide",
      t: "Knotted, tufted, flat & loomed",
      i: "ph-spiral",
      act: "aa-construction"
    }, {
      h: "Placement Guide",
      t: "Room-by-room sizing & layout",
      i: "ph-squares-four",
      act: "aa-rooms"
    }, {
      h: "Care Guide",
      t: "Keep it beautiful for decades",
      i: "ph-sparkle",
      act: "aa-specs"
    }];
    const collection = [{
      category: "Aravalli Collection",
      name: "Aravalli Runner",
      price: "₹ 64,000",
      tone: "olive"
    }, {
      category: "Aravalli Collection",
      name: "Aravalli Medallion",
      price: "₹ 2,48,000",
      tone: "bronze"
    }, {
      category: "Aravalli Collection",
      name: "Aravalli Border Rug",
      price: "₹ 1,86,000",
      tone: "stone"
    }, {
      category: "Aravalli Collection",
      name: "Aravalli Round",
      price: "₹ 1,76,000",
      tone: "clay"
    }];
    const materials = [{
      k: "wool",
      label: "Hand-Knotted Wool",
      feel: "Dense, resilient pile",
      dur: "Decades with care",
      use: "Living & dining"
    }, {
      k: "cotton",
      label: "Cotton (Printed)",
      feel: "Crisp, breathable, flat",
      dur: "Easy-care, low-traffic",
      use: "Layering & bedrooms"
    }, {
      k: "chenille",
      label: "Super-Soft Cotton Chenille",
      feel: "Plush, dense underfoot",
      dur: "Durable, family-friendly",
      use: "Living rooms & bedrooms"
    }];
    const accordion = [{
      h: "Materials Guide",
      body: "Hand-knotted from hand-spun, naturally dyed wool on a cotton foundation. Each rug carries 100–120 knots per square inch; subtle abrash (colour variation) is a hallmark of natural dye and hand craft, not a flaw."
    }, {
      h: "Construction Guide",
      body: "Knotted entirely by hand on vertical looms over 4–6 months depending on size. The pile is hand-sheared and the edges hand-bound. No machine tufting, no glue — a rug built to be passed down."
    }, {
      h: "Care Guide",
      body: "Rotate twice a year for even wear. Vacuum without a beater bar; blot spills immediately. Professional cleaning every 2–3 years. A pad (backing) extends life and prevents slipping."
    }, {
      h: "Placement Guide",
      body: "In living rooms, the front legs of the sofa and chairs should sit on the rug; in dining rooms the rug should extend ~60 cm beyond the table on all sides. Tap “Need Help Choosing a Rug Size?” for room-by-room guidance."
    }, {
      h: "Dimensions & Available Sizes",
      body: "Pile height 12 mm · weight ~3.2 kg/m². Offered in standard sizes, additional and made-to-order sizes, and fully custom dimensions and colourways for most designs — sizes vary by rug, so ask a consultant if you need something specific."
    }, {
      h: "Shipping & Delivery",
      body: "Made to order, dispatched in 3–4 weeks via safe, insured delivery domestically. Rolled, wrapped and protected for transit. International freight quoted at checkout."
    }];
    const similar = [{
      category: "Hand-Knotted",
      name: "Thar Wool Rug",
      price: "₹ 1,98,000",
      tone: "olive"
    }, {
      category: "Flatweave",
      name: "Kutch Dhurrie",
      price: "₹ 86,000",
      tone: "stone"
    }, {
      category: "Natural Fibre",
      name: "Konkan Jute Rug",
      price: "₹ 54,000",
      tone: "clay"
    }, {
      category: "Hand-Knotted",
      name: "Marwar Medallion Rug",
      price: "₹ 2,64,000",
      tone: "bronze"
    }];
    const shopBy = [{
      label: "Shop by Room",
      k: "rooms"
    }, {
      label: "Shop by Colour",
      k: "colour"
    }, {
      label: "Shop by Material",
      k: "material"
    }, {
      label: "Shop by Pattern",
      k: "pattern"
    }];
    const customSizeHref = waHref("Hello Art Avenue, I'd like a custom size of the " + pname + " (SKU " + sku + "). My room is approximately ____ ft x ____ ft.");
    const sizeGuideBtn = /*#__PURE__*/React.createElement("button", {
      onClick: () => setGuide(true),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-accent)",
        fontSize: 11,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-ruler"
    }), " Need Help Choosing a Rug Size?");
    function renderSize() {
      /* MADE TO ORDER — no predefined sizes */
      if (cfg.sizeMode === "mto") {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 26
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 11,
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
            color: "var(--text-muted)"
          }
        }, "Size"), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 12,
            padding: "20px 22px",
            borderRadius: "var(--radius-sm)",
            background: "var(--surface-accent-tint)",
            border: "1px solid var(--accent-soft)"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "var(--text-primary)"
          }
        }, "Custom sizes available"), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 13.5,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            margin: "8px 0 16px",
            maxWidth: "46ch"
          }
        }, "This design is knotted to order \u2014 made to the exact dimensions of your room, with no predefined sizes."), /*#__PURE__*/React.createElement("a", {
          href: customSizeHref,
          target: "_blank",
          rel: "noopener",
          style: {
            textDecoration: "none"
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          iconLeft: /*#__PURE__*/React.createElement("i", {
            className: "ph ph-ruler"
          })
        }, "Request a Custom Size"))));
      }
      /* FIXED — one available size, no selector */
      if (cfg.sizeMode === "fixed") {
        const s = sizes[0];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 26
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 11,
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
            color: "var(--text-muted)"
          }
        }, /*#__PURE__*/React.createElement("span", null, "Available Size"), sizeGuideBtn), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 12,
            padding: "16px 18px",
            borderRadius: "var(--radius-sm)",
            background: "var(--surface-accent-tint)",
            border: "1px solid var(--accent)"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 42,
            height: 30,
            borderRadius: 2,
            background: "var(--accent-soft)",
            border: "1px solid var(--accent-deep)",
            flex: "none"
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "var(--text-primary)"
          }
        }, s.label), /*#__PURE__*/React.createElement("span", {
          style: {
            marginLeft: "auto",
            fontSize: 11,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            color: "var(--text-muted)"
          }
        }, "One size")), /*#__PURE__*/React.createElement("a", {
          href: customSizeHref,
          target: "_blank",
          rel: "noopener",
          style: {
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginTop: 10,
            padding: "13px 16px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border-strong)"
          }
        }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
          style: {
            display: "block",
            fontSize: 14,
            color: "var(--text-primary)"
          }
        }, "Need another size?"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12.5,
            color: "var(--text-secondary)"
          }
        }, "Speak with a Design Consultant.")), /*#__PURE__*/React.createElement("i", {
          className: "ph ph-chat-teardrop-dots",
          style: {
            fontSize: 20,
            color: "var(--accent-deep)",
            flex: "none"
          }
        })));
      }
      /* MULTI — size selector */
      return /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 26
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 11,
          letterSpacing: "var(--tracking-caps)",
          textTransform: "uppercase",
          color: "var(--text-muted)"
        }
      }, /*#__PURE__*/React.createElement("span", null, "Size"), sizeGuideBtn), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          marginTop: 12
        }
      }, sizes.map(s => {
        const on = size === s.k;
        const isRound = /round/i.test(s.label);
        const [w, h] = s.label.split(" \u00d7 ");
        let ratio = parseFloat(w) / parseFloat(h);
        if (!isFinite(ratio) || ratio <= 0) ratio = 1;
        return /*#__PURE__*/React.createElement("button", {
          key: s.k,
          onClick: () => setSize(s.k),
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            padding: "14px 8px 10px",
            borderRadius: "var(--radius-sm)",
            cursor: "pointer",
            background: on ? "var(--surface-accent-tint)" : "transparent",
            border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)")
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: ratio >= 1 ? 38 : 38 * ratio,
            height: ratio >= 1 ? 38 / ratio : 38,
            borderRadius: isRound ? "50%" : 0,
            background: on ? "var(--accent-soft)" : "var(--surface-sand, #DCD1BD)",
            border: "1px solid " + (on ? "var(--accent-deep)" : "var(--border-strong)")
          }
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12.5,
            color: on ? "var(--text-accent)" : "var(--text-secondary)",
            fontFamily: "var(--font-sans)"
          }
        }, s.label), s.tag === "made" && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 9.5,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: "var(--text-muted)"
          }
        }, "Made to order"));
      })), /*#__PURE__*/React.createElement("a", {
        href: customSizeHref,
        target: "_blank",
        rel: "noopener",
        style: {
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginTop: 12,
          padding: "14px 16px",
          borderRadius: "var(--radius-sm)",
          background: "var(--surface-accent-tint)",
          border: "1px solid var(--accent-soft)"
        }
      }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "block",
          fontFamily: "var(--font-serif)",
          fontSize: 17,
          color: "var(--text-primary)"
        }
      }, "Need a Different Size?"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12.5,
          color: "var(--text-secondary)"
        }
      }, "We make most designs to order \u2014 speak with a consultant.")), /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-teardrop-dots",
        style: {
          fontSize: 22,
          color: "var(--accent-deep)",
          flex: "none"
        }
      })));
    }
    return /*#__PURE__*/React.createElement("main", {
      style: {
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement(StickyBar, {
      name: pname,
      price: com.price ? price != null ? inr(price) : "Made to order" : com.visibility === "project-only" ? "Project pricing" : "Price on request",
      waMsg: consultMsg,
      mto: !com.cart,
      customHref: customSizeHref
    }), /*#__PURE__*/React.createElement(RugGuide, {
      open: guide,
      onClose: () => setGuide(false)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        padding: "18px var(--gutter)",
        fontSize: 12,
        color: "var(--text-muted)",
        letterSpacing: ".03em"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        nav("home");
      },
      style: {
        color: "inherit",
        textDecoration: "none"
      }
    }, "Home"), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: "0 8px",
        opacity: 0.5
      }
    }, "/"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        nav("collection", "Rugs");
      },
      style: {
        color: "inherit",
        textDecoration: "none"
      }
    }, "Rugs"), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: "0 8px",
        opacity: 0.5
      }
    }, "/"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, pname)), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap({
          paddingBottom: "var(--section-y)"
        }),
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: "clamp(40px,5vw,80px)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--gap-card)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "olive",
      ratio: "4/5",
      label: "Styled in a living room",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 18,
        left: 18
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "on-image"
    }, "Hand-Knotted in India"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "var(--gap-card)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "stone",
      ratio: "1/1",
      label: "Colour & abrash"
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "bronze",
      ratio: "1/1",
      label: "Knot & pile, macro"
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "clay",
      ratio: "1/1",
      label: "Wool texture"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--gap-card)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "sand",
      ratio: "4/3",
      label: "Hand-bound edge"
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      ratio: "4/3",
      label: "Reverse \xB7 the knots"
    })), /*#__PURE__*/React.createElement(Figure, {
      tone: "clay",
      ratio: "16/10",
      label: "Scale \xB7 8\xD710 ft under a full sofa"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        lineHeight: 1.6,
        color: "var(--text-muted)",
        margin: "2px 2px 0"
      }
    }, "Photographed in natural daylight. Colour and texture shift with light and screen \u2014 ", /*#__PURE__*/React.createElement("a", {
      href: waHref(sampleMsg),
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--text-accent)"
      }
    }, "request a material sample"), " to see the true shade before you commit.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 100,
        alignSelf: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, "Rugs \xB7 Hand-Knotted Wool"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "clamp(34px,3.4vw,46px)",
        lineHeight: 1.08,
        letterSpacing: "var(--tracking-tight)",
        margin: "12px 0 0"
      }
    }, pname), /*#__PURE__*/React.createElement(window.AAPriceTag, {
      priceText: price != null ? inr(price) : "Made to order",
      commerce: com,
      caption: "Available to order \xB7 crafted for your home"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body)",
        lineHeight: 1.72,
        color: "var(--text-secondary)",
        marginTop: 18,
        maxWidth: "46ch"
      }
    }, "A hand-knotted wool rug in naturally dyed earth tones \u2014 a quiet, durable foundation drawn from the dunes and dyes of the Aravalli range."), /*#__PURE__*/React.createElement(window.AAFulfillmentBar, {
      type: cfg.fulfillment
    }), /*#__PURE__*/React.createElement(window.AALifecycleBanner, {
      state: lifecycle
    }), /*#__PURE__*/React.createElement(window.AATrustBlock, {
      items: trustItems
    }), renderSize(), cfg.sizeMode !== "mto" && /*#__PURE__*/React.createElement(OptionRow, {
      label: "Backing",
      value: backing === "with" ? "With anti-slip backing (+₹4,000)" : "Without backing"
    }, [{
      k: "with",
      l: "With Backing"
    }, {
      k: "without",
      l: "Without Backing"
    }].map(b => /*#__PURE__*/React.createElement("button", {
      key: b.k,
      onClick: () => setBacking(b.k),
      style: {
        padding: "10px 18px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        background: backing === b.k ? "var(--surface-accent-tint)" : "transparent",
        color: backing === b.k ? "var(--text-accent)" : "var(--text-secondary)",
        border: "1px solid " + (backing === b.k ? "var(--accent)" : "var(--border-strong)")
      }
    }, b.l))), cfg.modules.samples && /*#__PURE__*/React.createElement(window.AASampleRequest, {
      product: pname,
      sku: sku,
      kinds: ["Material"]
    }), /*#__PURE__*/React.createElement(window.AACtaButtons, {
      commerce: com,
      priceText: price != null ? inr(price) : null,
      hrefs: {
        consult: waHref(consultMsg),
        samples: waHref(sampleMsg),
        customize: customSizeHref,
        project: waHref(consultMsg),
        "request-pricing": waHref(consultMsg)
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
        margin: "26px 0 0",
        padding: "22px 0",
        borderTop: "1px solid var(--border-hairline)",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, [{
      i: ful.icon,
      t: ful.label,
      s: "Fulfillment"
    }, {
      i: "ph-clock",
      t: ful.lead,
      s: "Lead time"
    }, {
      i: "ph-truck",
      t: "Insured delivery",
      s: "Secure & tracked"
    }, {
      i: "ph-globe-hemisphere-east",
      t: "Worldwide",
      s: "International shipping"
    }].map(d => /*#__PURE__*/React.createElement("div", {
      key: d.t,
      style: {
        display: "flex",
        gap: 11,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + d.i,
      style: {
        fontSize: 22,
        color: "var(--accent-deep)",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-primary)"
      }
    }, d.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)",
        letterSpacing: ".02em"
      }
    }, d.s))))), /*#__PURE__*/React.createElement(Accordion, {
      items: accordion
    }))), (() => {
      const rugOrder = cfg.moduleOrder || ["whyLove", "customization", "guides", "specs", "construction", "material", "craft", "rooms", "consult", "related"];
      const rugSections = {
        whyLove: /*#__PURE__*/React.createElement(window.AAWhyLoveIt, {
          category: "Rugs"
        }),
        customization: /*#__PURE__*/React.createElement(window.AAMadeForYourSpace, {
          category: "Rugs",
          href: waHref("Hello Art Avenue, I'd like to discuss a custom size or colourway for the " + pname + " (SKU " + sku + ").")
        }),
        guides: cfg.modules.guides && /*#__PURE__*/React.createElement("section", {
          style: {
            background: "var(--surface-alt)",
            padding: "var(--section-y-tight) 0"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: wrap()
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
          tone: "accent",
          rule: true
        }, "Rug Buying Guides"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h2)",
            margin: "16px 0 0"
          }
        }, "Everything you need to choose well.")), /*#__PURE__*/React.createElement("a", {
          href: waHref(consultMsg),
          target: "_blank",
          rel: "noopener",
          style: {
            textDecoration: "none"
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "ghost",
          iconRight: /*#__PURE__*/React.createElement("i", {
            className: "ph ph-arrow-right"
          })
        }, "Ask a consultant instead"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "var(--gap-card)",
            marginTop: 32
          }
        }, guides.map(g => /*#__PURE__*/React.createElement("button", {
          key: g.h,
          onClick: () => g.act === "size" ? setGuide(true) : goTo(g.act),
          style: {
            textAlign: "left",
            cursor: "pointer",
            background: "var(--surface-raised)",
            border: "1px solid var(--border-hairline)",
            borderRadius: "var(--radius-sm)",
            padding: "22px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minHeight: 172
          }
        }, /*#__PURE__*/React.createElement("i", {
          className: "ph-light " + g.i,
          style: {
            fontSize: 26,
            color: "var(--accent-deep)"
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            marginTop: "auto"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: "block",
            fontFamily: "var(--font-serif)",
            fontSize: 19,
            color: "var(--text-primary)"
          }
        }, g.h), /*#__PURE__*/React.createElement("span", {
          style: {
            display: "block",
            fontSize: 12.5,
            color: "var(--text-secondary)",
            marginTop: 4,
            lineHeight: 1.4
          }
        }, g.t))))))),
        specs: cfg.modules.specs && /*#__PURE__*/React.createElement("section", {
          id: "aa-specs",
          style: {
            background: "var(--surface-page)",
            padding: "var(--section-y) 0",
            scrollMarginTop: 84
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: wrap()
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 640
          }
        }, /*#__PURE__*/React.createElement(Eyebrow, {
          tone: "accent",
          rule: true
        }, "Specifications"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h1)",
            lineHeight: 1.1,
            margin: "16px 0 0"
          }
        }, "Every detail, on the record."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: "var(--text-body)",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginTop: 16
          }
        }, "The full make of this rug \u2014 so you know exactly what arrives, and how to keep it for the long term.")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(28px,4vw,64px)",
            marginTop: 44
          }
        }, specGroups.map(grp => /*#__PURE__*/React.createElement("div", {
          key: grp.g
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 11,
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--text-accent)",
            paddingBottom: 14,
            borderBottom: "1px solid var(--border-strong)"
          }
        }, grp.g), /*#__PURE__*/React.createElement("dl", {
          style: {
            margin: 0
          }
        }, grp.rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: 12,
            padding: "14px 0",
            borderBottom: "1px solid var(--border-hairline)"
          }
        }, /*#__PURE__*/React.createElement("dt", {
          style: {
            fontSize: 13,
            color: "var(--text-muted)"
          }
        }, k), /*#__PURE__*/React.createElement("dd", {
          style: {
            margin: 0,
            fontSize: 13.5,
            color: "var(--text-primary)",
            lineHeight: 1.4
          }
        }, v))))))))),
        construction: cfg.modules.construction && /*#__PURE__*/React.createElement("section", {
          id: "aa-construction",
          style: {
            background: "var(--surface-alt)",
            padding: "var(--section-y) 0",
            scrollMarginTop: 84
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: wrap()
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 680
          }
        }, /*#__PURE__*/React.createElement(Eyebrow, {
          tone: "accent",
          rule: true
        }, "Understand the Craft"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h1)",
            lineHeight: 1.1,
            margin: "16px 0 0"
          }
        }, "How a rug is made changes everything."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: "var(--text-body)",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginTop: 16
          }
        }, "Construction decides how a rug feels, how long it lasts and where it belongs. This piece is ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--text-primary)",
            fontWeight: 600
          }
        }, "hand-knotted"), " \u2014 the most enduring of the four.")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--gap-card)",
            marginTop: 40
          }
        }, constructions.map(c => /*#__PURE__*/React.createElement("div", {
          key: c.h,
          style: {
            position: "relative",
            background: c.on ? "var(--surface-accent-tint)" : "var(--surface-raised)",
            border: "1px solid " + (c.on ? "var(--accent)" : "var(--border-hairline)"),
            borderRadius: "var(--radius-sm)",
            padding: "24px 22px 26px"
          }
        }, c.on && /*#__PURE__*/React.createElement("span", {
          style: {
            position: "absolute",
            top: 16,
            right: 16,
            fontSize: 10,
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
            color: "var(--text-accent)"
          }
        }, "This rug"), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: 21,
            margin: 0
          }
        }, c.h), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 13.5,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            margin: "12px 0 18px"
          }
        }, c.t), /*#__PURE__*/React.createElement("dl", {
          style: {
            margin: 0,
            display: "grid",
            gap: 8
          }
        }, [["Durability", c.dur], ["Best for", c.use]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            display: "grid",
            gridTemplateColumns: "68px 1fr",
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("dt", {
          style: {
            fontSize: 10,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            paddingTop: 2
          }
        }, k), /*#__PURE__*/React.createElement("dd", {
          style: {
            margin: 0,
            fontSize: 12.5,
            color: "var(--text-primary)",
            lineHeight: 1.4
          }
        }, v))))))))),
        material: cfg.modules.material && /*#__PURE__*/React.createElement("section", {
          id: "aa-material",
          style: {
            background: "var(--surface-page)",
            padding: "var(--section-y) 0",
            scrollMarginTop: 84
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: wrap()
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 640
          }
        }, /*#__PURE__*/React.createElement(Eyebrow, {
          tone: "accent",
          rule: true
        }, "Material & Texture"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h1)",
            lineHeight: 1.1,
            margin: "16px 0 0"
          }
        }, "Know the feel before you choose.")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--gap-card)",
            marginTop: 40
          }
        }, materials.map(m => {
          const on = mat === m.k;
          return /*#__PURE__*/React.createElement("button", {
            key: m.k,
            onClick: () => setMat(m.k),
            style: {
              textAlign: "left",
              cursor: "pointer",
              background: "var(--surface-raised)",
              border: "1px solid " + (on ? "var(--accent)" : "var(--border-hairline)"),
              borderRadius: "var(--radius-sm)",
              padding: 0,
              overflow: "hidden"
            }
          }, /*#__PURE__*/React.createElement(Figure, {
            tone: m.k === "wool" ? "olive" : m.k === "cotton" ? "stone" : "clay",
            ratio: "16/9"
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              padding: "20px 22px 24px"
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }
          }, /*#__PURE__*/React.createElement("h3", {
            style: {
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: 21,
              margin: 0
            }
          }, m.label), on && /*#__PURE__*/React.createElement("i", {
            className: "ph-fill ph-check-circle",
            style: {
              color: "var(--accent)",
              fontSize: 18
            }
          })), /*#__PURE__*/React.createElement("dl", {
            style: {
              margin: "16px 0 0",
              display: "grid",
              gap: 10
            }
          }, [["Feel", m.feel], ["Durability", m.dur], ["Best for", m.use]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
            key: k,
            style: {
              display: "grid",
              gridTemplateColumns: "84px 1fr",
              gap: 10
            }
          }, /*#__PURE__*/React.createElement("dt", {
            style: {
              fontSize: 10.5,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              paddingTop: 2
            }
          }, k), /*#__PURE__*/React.createElement("dd", {
            style: {
              margin: 0,
              fontSize: 13.5,
              color: "var(--text-secondary)",
              lineHeight: 1.45
            }
          }, v))))));
        })), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 13.5,
            color: "var(--text-muted)",
            marginTop: 18
          }
        }, "Not sure? ", /*#__PURE__*/React.createElement("a", {
          href: waHref(sampleMsg),
          target: "_blank",
          rel: "noopener",
          style: {
            color: "var(--text-accent)"
          }
        }, "Request a material sample"), " (from \u20B9999) and feel all three before you decide."))),
        craft: cfg.modules.craft && /*#__PURE__*/React.createElement("section", {
          id: "aa-origin",
          style: {
            background: "var(--surface-alt)",
            padding: "var(--section-y) 0",
            scrollMarginTop: 84
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            ...wrap(),
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "clamp(40px,6vw,90px)",
            alignItems: "center"
          }
        }, /*#__PURE__*/React.createElement(Figure, {
          tone: "espresso",
          ratio: "4/5",
          label: "On the loom"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
          tone: "accent",
          rule: true
        }, "Craftsmanship"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h1)",
            lineHeight: 1.1,
            letterSpacing: "var(--tracking-tight)",
            margin: "16px 0 0"
          }
        }, "Knotted entirely by hand, the old way."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: "var(--text-body)",
            lineHeight: 1.72,
            color: "var(--text-secondary)",
            margin: "16px 0 0",
            maxWidth: "56ch"
          }
        }, "This rug is knotted entirely by hand, in a craft India has carried for centuries. A single rug passes through the hands of spinners, dyers and weavers, and can take four to six months to finish. The gentle variation you see is the signature of that human hand, never a flaw."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px 28px",
            marginTop: 30
          }
        }, process.map(p => /*#__PURE__*/React.createElement("div", {
          key: p.n,
          style: {
            borderTop: "1px solid var(--border-strong)",
            paddingTop: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 15,
            color: "var(--text-accent)"
          }
        }, p.n), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: "var(--font-serif)",
            fontSize: 18,
            fontWeight: 500,
            color: "var(--text-primary)",
            marginTop: 2
          }
        }, p.h), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            lineHeight: 1.55,
            color: "var(--text-secondary)",
            marginTop: 4
          }
        }, p.t))))))),
        rooms: cfg.modules.rooms && /*#__PURE__*/React.createElement("section", {
          id: "aa-rooms",
          style: {
            background: "var(--surface-page)",
            padding: "var(--section-y) 0",
            scrollMarginTop: 84
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: wrap()
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 640
          }
        }, /*#__PURE__*/React.createElement(Eyebrow, {
          tone: "accent",
          rule: true
        }, "Will It Fit?"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h1)",
            lineHeight: 1.1,
            margin: "16px 0 0"
          }
        }, "Room-by-room sizing."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: "var(--text-body)",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginTop: 16
          }
        }, "The most common mistake is going too small. Here is where this rug sits in each room \u2014 and the size we would recommend.")), /*#__PURE__*/React.createElement("button", {
          onClick: () => setGuide(true),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-accent)",
            fontSize: 12,
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: 0
          }
        }, "Open the full size guide ", /*#__PURE__*/React.createElement("i", {
          className: "ph ph-arrow-right"
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--gap-card)",
            marginTop: 40
          }
        }, rooms.map(r => /*#__PURE__*/React.createElement("div", {
          key: r.h
        }, /*#__PURE__*/React.createElement(RoomDiagram, {
          rug: r.rug,
          items: r.items
        }), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: 20,
            margin: "18px 0 0"
          }
        }, r.h), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: ".03em",
            color: "var(--text-accent)",
            marginTop: 6
          }
        }, "Recommended \xB7 ", r.z), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 13.5,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            margin: "10px 0 0"
          }
        }, r.t), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            gap: 8,
            alignItems: "flex-start",
            marginTop: 12,
            fontSize: 12.5,
            color: "var(--text-muted)"
          }
        }, /*#__PURE__*/React.createElement("i", {
          className: "ph ph-warning-circle",
          style: {
            fontSize: 14,
            color: "var(--text-muted)",
            marginTop: 2,
            flex: "none"
          }
        }), /*#__PURE__*/React.createElement("span", null, "Avoid: ", r.miss))))), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 48,
            padding: "26px 0 0",
            borderTop: "1px solid var(--border-hairline)",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "clamp(20px,4vw,52px)",
            alignItems: "center"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 11,
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--text-accent)",
            maxWidth: 170
          }
        }, "Where this rug works best"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 10
          }
        }, [["Living Room", "Ideal"], ["Bedroom", "Ideal"], ["Study", "Ideal"], ["Dining Room", "Good"], ["Entryway", "With a runner"]].map(([room, fit]) => /*#__PURE__*/React.createElement("span", {
          key: room,
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "9px 15px",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-pill)",
            fontSize: 13,
            color: "var(--text-secondary)"
          }
        }, room, " ", /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 11,
            color: "var(--text-accent)",
            letterSpacing: ".02em"
          }
        }, fit))), /*#__PURE__*/React.createElement("span", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            padding: "9px 15px",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-pill)",
            fontSize: 13,
            color: "var(--text-muted)"
          }
        }, "Indoor use only"))))),
        consult: /*#__PURE__*/React.createElement("section", {
          id: "aa-consult",
          style: {
            background: "var(--surface-dark)",
            color: "var(--text-on-dark)",
            padding: "var(--section-y) 0",
            scrollMarginTop: 84
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            ...wrap(),
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "clamp(40px,6vw,96px)",
            alignItems: "center"
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
          tone: "on-dark"
        }, "Personal Service"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-display-2)",
            lineHeight: 1.06,
            letterSpacing: "var(--tracking-tight)",
            margin: "18px 0 0"
          }
        }, "Need help choosing the", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("em", {
          style: {
            color: "var(--accent-soft)"
          }
        }, "right rug?")), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: "var(--text-body-lg)",
            lineHeight: 1.7,
            color: "var(--text-on-dark-muted)",
            margin: "20px 0 0",
            maxWidth: "48ch"
          }
        }, "A design consultant can guide you through size, material, placement, custom sizing, care and styling \u2014 before you spend a rupee. Complimentary, and unhurried."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            margin: "24px 0 30px"
          }
        }, ["Size", "Material", "Placement", "Custom sizing", "Care", "Styling"].map(t => /*#__PURE__*/React.createElement("span", {
          key: t,
          style: {
            padding: "8px 15px",
            border: "1px solid var(--border-on-dark)",
            borderRadius: "var(--radius-pill)",
            fontSize: 13,
            color: "var(--text-on-dark-muted)"
          }
        }, t))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            gap: 14,
            flexWrap: "wrap"
          }
        }, /*#__PURE__*/React.createElement("a", {
          href: waHref(consultMsg),
          target: "_blank",
          rel: "noopener",
          style: {
            textDecoration: "none"
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          iconLeft: /*#__PURE__*/React.createElement("i", {
            className: "ph ph-chat-teardrop-dots"
          })
        }, "Speak with a Design Consultant")), /*#__PURE__*/React.createElement("a", {
          href: waHref("Hello Art Avenue, I'd like help choosing the right rug size for the " + pname + " (SKU " + sku + "). My room is approximately ____ ft x ____ ft."),
          target: "_blank",
          rel: "noopener",
          style: {
            textDecoration: "none"
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onDark: true,
          iconRight: /*#__PURE__*/React.createElement("i", {
            className: "ph ph-arrow-right"
          })
        }, "Get a size recommendation")))), /*#__PURE__*/React.createElement("ul", {
          style: {
            listStyle: "none",
            margin: 0,
            padding: 0,
            borderTop: "1px solid var(--border-on-dark)"
          }
        }, confidence.map(c => /*#__PURE__*/React.createElement("li", {
          key: c,
          style: {
            display: "flex",
            gap: 14,
            alignItems: "center",
            padding: "16px 0",
            borderBottom: "1px solid var(--border-on-dark)",
            fontSize: 15.5,
            color: "var(--text-on-dark)"
          }
        }, /*#__PURE__*/React.createElement("i", {
          className: "ph ph-check",
          style: {
            fontSize: 16,
            color: "var(--accent-soft)",
            flex: "none"
          }
        }), c))))),
        related: cfg.modules.related && /*#__PURE__*/React.createElement("section", {
          style: {
            background: "var(--surface-alt)",
            padding: "var(--section-y) 0"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: wrap()
        }, /*#__PURE__*/React.createElement(Eyebrow, {
          tone: "accent",
          rule: true
        }, "From the Aravalli Collection"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h1)",
            margin: "16px 0 0"
          }
        }, "Pieces cut from the same cloth"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--gap-card)",
            marginTop: 32
          }
        }, collection.map(p => /*#__PURE__*/React.createElement(ProductCard, {
          key: p.name,
          category: p.category,
          name: p.name,
          price: p.price,
          favorite: false,
          onClick: e => {
            e.preventDefault();
            nav("product", p.name);
          }
        }, /*#__PURE__*/React.createElement(window.AAFigure, {
          tone: p.tone,
          style: {
            position: "absolute",
            inset: 0,
            borderRadius: 0
          }
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 64
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h1)",
            margin: 0
          }
        }, "Shop similar rugs"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12.5,
            color: "var(--text-muted)",
            display: "inline-flex",
            alignItems: "center",
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("i", {
          className: "ph-light ph-sparkle",
          style: {
            color: "var(--accent-deep)"
          }
        }), " Recommended by our stylists")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--gap-card)",
            marginTop: 32
          }
        }, similar.map(p => /*#__PURE__*/React.createElement(ProductCard, {
          key: p.name,
          category: p.category,
          name: p.name,
          price: p.price,
          favorite: false,
          onClick: e => {
            e.preventDefault();
            nav("product", p.name);
          }
        }, /*#__PURE__*/React.createElement(window.AAFigure, {
          tone: p.tone,
          style: {
            position: "absolute",
            inset: 0,
            borderRadius: 0
          }
        })))), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "var(--text-h2)",
            margin: "64px 0 0"
          }
        }, "Browse the rug atelier"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--gap-card)",
            marginTop: 28
          }
        }, shopBy.map((s, i) => /*#__PURE__*/React.createElement(CollectionTile, {
          key: s.k,
          title: s.label.replace("Shop by ", ""),
          eyebrow: "Shop by",
          tone: i % 2 ? "light" : "dark",
          cta: "",
          onClick: e => {
            e.preventDefault();
            nav("collection", "Rugs");
          },
          style: {
            minHeight: 200
          }
        }, /*#__PURE__*/React.createElement(window.AAFigure, {
          tone: ["clay", "stone", "olive", "bronze"][i],
          style: {
            position: "absolute",
            inset: 0,
            borderRadius: 0
          }
        }))))))
      };
      return rugOrder.map(k => rugSections[k] ? /*#__PURE__*/React.createElement(React.Fragment, {
        key: k
      }, rugSections[k]) : null);
    })());
  }
  window.AARugProductPage = RugProductPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RugProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TradePage.jsx
try { (() => {
/* Art Avenue — Trade & Design Program (application page) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const {
    Button,
    Eyebrow,
    Badge,
    Input,
    Select
  } = DS;
  const Figure = window.AAFigure;
  const wrap = (extra = {}) => ({
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...extra
  });
  function TradePage({
    onNavigate
  }) {
    const nav = onNavigate || (() => {});
    const scrollToForm = () => {
      const el = document.getElementById("trade-apply");
      if (el) el.scrollIntoView ? window.scrollTo({
        top: el.offsetTop - 90,
        behavior: "smooth"
      }) : null;
    };
    const perks = [{
      icon: "ph-medal",
      h: "Trade Pricing",
      t: "Member pricing across every collection, with a dedicated account manager on every project."
    }, {
      icon: "ph-pencil-ruler",
      h: "Customization",
      t: "Bespoke dimensions, finishes, materials and COM upholstery for residential and contract work."
    }, {
      icon: "ph-swatches",
      h: "Material Sampling",
      t: "Finish, wood and textile samples shipped to your studio, complimentary on active projects."
    }, {
      icon: "ph-buildings",
      h: "Project & Bulk",
      t: "Procurement, lead-time planning and delivery logistics for full properties."
    }, {
      icon: "ph-clipboard-text",
      h: "Spec Support",
      t: "Tear sheets, CAD blocks and specifications prepared for your drawings."
    }, {
      icon: "ph-handshake",
      h: "Hospitality",
      t: "Contract-grade construction and durability standards for hotels and restaurants."
    }];
    const steps = [{
      n: "01",
      h: "Apply",
      t: "Tell us about your studio and the work you do. Approval typically within two business days."
    }, {
      n: "02",
      h: "Get matched",
      t: "We pair you with a dedicated design consultant who knows your sector."
    }, {
      n: "03",
      h: "Source with confidence",
      t: "Sample, customize, specify and order — with trade pricing and reliable delivery."
    }];
    return /*#__PURE__*/React.createElement("main", {
      style: {
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        minHeight: 560,
        display: "flex",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(34,31,27,.78), rgba(34,31,27,.3) 65%, transparent)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        position: "relative",
        width: "100%",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 580
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      rule: true
    }, "Trade & Design Program"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        color: "var(--text-on-dark)",
        fontSize: "var(--text-display-1)",
        lineHeight: "var(--leading-display)",
        letterSpacing: "var(--tracking-tight)",
        margin: "22px 0 0"
      }
    }, "Source like the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "#EBD9BE"
      }
    }, "design house you are.")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(250,246,239,.86)",
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.6,
        maxWidth: 470,
        marginTop: 22
      }
    }, "A program built for interior designers, architects and hospitality buyers \u2014 trade pricing, customization and dedicated support, on every project."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 34,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: scrollToForm
    }, "Apply for Access"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true,
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-down"
      }),
      onClick: scrollToForm
    }, "See the Benefits"))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "What's Included"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-display-2)",
        lineHeight: "var(--leading-tight)",
        letterSpacing: "var(--tracking-tight)",
        margin: "18px 0 0"
      }
    }, "Everything a project needs.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        marginTop: 52,
        background: "var(--border-hairline)",
        border: "1px solid var(--border-hairline)"
      }
    }, perks.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.h,
      style: {
        background: "var(--surface-page)",
        padding: "38px 34px"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-light " + p.icon,
      style: {
        fontSize: 32,
        color: "var(--accent-deep)"
      }
    }), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 24,
        margin: "20px 0 12px"
      }
    }, p.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.7,
        color: "var(--text-secondary)"
      }
    }, p.t)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      center: true,
      rule: true
    }, "How It Works"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h1)",
        margin: "16px 0 0"
      }
    }, "From application to delivery.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(28px,4vw,64px)",
        marginTop: 56
      }
    }, steps.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.n
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 40,
        color: "var(--accent)"
      }
    }, s.n), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-strong)",
        margin: "16px 0 18px"
      }
    }), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: 22
      }
    }, s.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.7,
        color: "var(--text-secondary)",
        marginTop: 10
      }
    }, s.t)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "Trade Projects"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h1)",
        margin: "16px 0 0"
      }
    }, "Recently specified by our partners.")), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "View the lookbook")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr",
        gridTemplateRows: "repeat(2, 220px)",
        gap: "var(--gap-card)",
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "clay",
      label: "The Oberoi Residences \xB7 Mumbai",
      style: {
        gridRow: "span 2"
      }
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "olive",
      label: "Studio Kohl \xB7 Goa villa"
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "bronze",
      label: "Maison Rao \xB7 Bengaluru"
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "stone",
      label: "The Verandah \xB7 boutique hotel"
    }), /*#__PURE__*/React.createElement(Figure, {
      tone: "espresso",
      label: "Bandra penthouse"
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        maxWidth: 880,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "on-dark",
      center: true
    }, "From a Partner"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "clamp(26px,3vw,40px)",
        lineHeight: 1.25,
        letterSpacing: "var(--tracking-tight)",
        margin: "22px 0 0",
        textWrap: "balance"
      }
    }, "\u201CArt Avenue is the only Indian house we specify internationally. The craft holds up to scrutiny, and the trade team makes a 40-piece order feel like one.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26,
        fontSize: 13,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-on-dark-muted)"
      }
    }, "Aisha Kohli \xB7 Principal, Studio Kohl"))), /*#__PURE__*/React.createElement("section", {
      id: "trade-apply",
      style: {
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap(),
        display: "grid",
        gridTemplateColumns: "0.85fr 1.15fr",
        gap: "clamp(40px,6vw,96px)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      rule: true
    }, "Apply"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 500,
        fontSize: "var(--text-h1)",
        lineHeight: 1.1,
        margin: "18px 0 0"
      }
    }, "Request trade access."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-body-lg)",
        fontWeight: 300,
        lineHeight: 1.7,
        color: "var(--text-secondary)",
        marginTop: 18,
        maxWidth: "42ch"
      }
    }, "Approval typically within two business days. Already a member? ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        color: "var(--text-accent)"
      }
    }, "Sign in"), "."), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: "30px 0 0",
        padding: 0,
        display: "grid",
        gap: 16
      }
    }, ["Dedicated design consultant", "Trade pricing within 48 hours", "No minimum order, ever"].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center",
        fontSize: 15,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-check",
      style: {
        color: "var(--accent)",
        fontSize: 16
      }
    }), " ", t)))), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => e.preventDefault(),
      style: {
        background: "var(--surface-raised)",
        border: "1px solid var(--border-hairline)",
        padding: "clamp(28px,3vw,44px)",
        borderRadius: "var(--radius-sm)",
        display: "grid",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "Aisha",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      placeholder: "Kohli",
      required: true
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Studio / Firm",
      placeholder: "Studio Kohl",
      required: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Work email",
      type: "email",
      placeholder: "aisha@studiokohl.com",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      placeholder: "+91 ..."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Profession",
      options: ["Interior Designer", "Architect", "Hospitality Buyer", "Developer", "Other"]
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Typical project",
      options: ["Residential", "Hospitality", "Commercial / Office", "Mixed-use"]
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Tell us about your work",
      multiline: true,
      placeholder: "Sectors, project scale, what you're sourcing for\u2026"
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        gap: 11,
        alignItems: "flex-start",
        fontSize: 13.5,
        color: "var(--text-muted)",
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      style: {
        marginTop: 3,
        accentColor: "var(--accent)"
      }
    }), "I'd like to receive the trade newsletter and project stories."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true
    }, "Submit Application")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-faint)",
        textAlign: "center",
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-lock-simple",
      style: {
        marginRight: 6
      }
    }), "Your details are kept private and never shared.")))));
  }
  window.AATradePage = TradePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TradePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
/* Art Avenue — Website UI kit · shared parts
 * Figure (warm placeholder imagery), AnnounceBar, Header + MegaMenu, Footer.
 * Composes DS components from window.ArtAvenueDesignSystem_70ed11.
 */
const DS = window.ArtAvenueDesignSystem_70ed11;
const {
  Button,
  Eyebrow,
  Badge
} = DS;

/* ---------- Figure: on-brand warm placeholder ---------- */
const FIG_GRADS = {
  sand: "radial-gradient(120% 80% at 72% 16%, rgba(255,255,255,.42), transparent 56%), linear-gradient(155deg,#cdbfa6,#d8ccb6 55%,#e7ddcc)",
  clay: "radial-gradient(120% 80% at 70% 18%, rgba(255,255,255,.34), transparent 56%), linear-gradient(150deg,#c2b39a,#ad9a7d 60%,#9c8a6e)",
  stone: "radial-gradient(120% 80% at 68% 16%, rgba(255,255,255,.5), transparent 58%), linear-gradient(150deg,#e6ddce,#d4c8b3)",
  espresso: "radial-gradient(120% 90% at 72% 12%, rgba(120,100,72,.4), transparent 55%), linear-gradient(150deg,#4a4036,#2a241d)",
  bronze: "radial-gradient(120% 80% at 70% 16%, rgba(255,255,255,.34), transparent 56%), linear-gradient(150deg,#c8a878,#a8854f)",
  olive: "radial-gradient(120% 80% at 70% 16%, rgba(255,255,255,.3), transparent 56%), linear-gradient(150deg,#9a9276,#7e7659)"
};
function Figure({
  tone = "sand",
  label,
  ratio,
  className = "",
  style = {},
  children
}) {
  const isDark = tone === "espresso" || tone === "olive" || tone === "bronze";
  return /*#__PURE__*/React.createElement("div", {
    className: "aa-fig " + className,
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-xs)",
      background: FIG_GRADS[tone] || FIG_GRADS.sand,
      aspectRatio: ratio || undefined,
      ...style
    }
  }, children, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 14,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 15,
      letterSpacing: ".01em",
      color: isDark ? "rgba(250,246,239,.62)" : "rgba(43,40,36,.42)"
    }
  }, label));
}

/* ---------- Announcement bar ---------- */
function AnnounceBar() {
  const items = ["Complimentary design consultation", "Handcrafted in India", "International shipping available"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "9px var(--gutter)",
      display: "flex",
      justifyContent: "center",
      gap: 36,
      fontSize: 11,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase"
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36,
      color: "var(--text-on-dark-muted)"
    }
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "\xB7"), t))));
}

/* ---------- Navigation data ---------- */
const NAV = [{
  label: "Furniture",
  paths: [{
    h: "Shop All Furniture",
    direct: "Shop All Furniture"
  }, {
    h: "Shop by Category",
    links: ["Sofas", "Lounge Chairs", "Dining Chairs", "Tables", "Storage", "Beds"]
  }, {
    h: "Shop by Room",
    links: ["Living Room", "Dining", "Bedroom", "Study", "Outdoor"]
  }, {
    h: "Shop by Material",
    links: ["Solid Teak", "Mango Wood", "Oak", "Marble & Stone", "Brass"]
  }, {
    h: "Shop by Collection",
    links: ["The Marwar Collection", "Aravalli", "The Object Library"]
  }, {
    h: "Shop by Style",
    links: ["Contemporary", "Traditional", "Modern Indian", "Minimal", "Organic Modern", "Transitional"]
  }, {
    h: "New Arrivals",
    direct: "New Arrivals"
  }, {
    h: "Best Sellers",
    direct: "Best Sellers"
  }, {
    h: "Designer Favourites",
    direct: "Designer Favourites"
  }, {
    h: "Customization",
    direct: "Customization"
  }, {
    h: "Materials Library",
    direct: "Materials Library"
  }],
  featured: {
    tone: "clay",
    eyebrow: "New Collection",
    title: "The Marwar Collection"
  }
}, {
  label: "Rugs",
  paths: [{
    h: "Shop All Rugs",
    direct: "Shop All Rugs"
  }, {
    h: "Collections",
    direct: "Collections"
  }, {
    h: "Shop by Style",
    links: ["Contemporary", "Traditional", "Modern Indian", "Minimal", "Organic Modern", "Transitional"]
  }, {
    h: "Shop by Colour",
    links: ["Ivory", "Beige", "Sand", "Taupe", "Neutral", "Blue", "Green", "Terracotta", "Grey", "Multicolour"]
  }, {
    h: "Shop by Material",
    links: ["Wool", "Cotton", "Silk", "Chenille", "Jute"]
  }, {
    h: "Shop by Construction",
    links: ["Hand-Knotted", "Hand-Tufted", "Flat-Weave", "Hand-Loomed", "Printed"]
  }, {
    h: "Shop by Room",
    links: ["Living Room", "Dining Room", "Bedroom", "Hallway", "Study"]
  }, {
    h: "Shop by Shape",
    links: ["Rectangle", "Round", "Runner"]
  }, {
    h: "Shop by Size",
    links: ["3×5 ft", "4×6 ft", "5×8 ft", "6×9 ft", "8×10 ft", "9×12 ft", "Runners", "Round"]
  }, {
    h: "Custom Rugs",
    direct: "Custom Rugs"
  }, {
    h: "Rug Size Guide",
    direct: "Rug Size Guide"
  }],
  featured: {
    tone: "olive",
    eyebrow: "Bespoke",
    title: "Custom Rugs"
  }
}, {
  label: "Lighting",
  cols: [{
    h: "Shop by Type",
    links: ["Pendants", "Chandeliers", "Floor Lamps", "Table Lamps", "Flush Mounts"]
  }, {
    h: "Shop by Room",
    links: ["Living Room", "Dining", "Bedroom", "Entryway"]
  }, {
    h: "Shop by Material",
    links: ["Brass", "Stone & Marble", "Glass", "Rattan"]
  }],
  quick: ["New Arrivals", "Best Sellers"],
  featured: {
    tone: "bronze",
    eyebrow: "Signature",
    title: "Brass Meridian"
  }
}, {
  label: "Decor",
  cols: [{
    h: "Shop by Category",
    links: ["Vases & Vessels", "Sculpture", "Mirrors", "Boxes & Trays"]
  }, {
    h: "Shop by Style",
    links: ["Contemporary", "Traditional", "Modern Indian", "Minimal", "Organic Modern", "Transitional"]
  }, {
    h: "Textiles",
    links: ["Cushions", "Throws", "Table Linen"]
  }, {
    h: "Shop by Collection",
    links: ["The Object Library", "Marwar", "Aravalli"]
  }],
  quick: ["New Arrivals", "Best Sellers"],
  featured: {
    tone: "stone",
    eyebrow: "Curated",
    title: "The Object Library"
  }
}, {
  label: "Wall Art",
  cols: [{
    h: "Medium",
    links: ["Original Works", "Limited Prints", "Textile Art", "Photography"]
  }, {
    h: "Format",
    links: ["Framed", "Canvas", "Diptych & Triptych"]
  }, {
    h: "Shop by Room",
    links: ["Living Room", "Bedroom", "Study"]
  }],
  quick: ["Commissioned Works", "New Arrivals"],
  featured: {
    tone: "sand",
    eyebrow: "Gallery",
    title: "Commissioned Works"
  }
}, {
  label: "Discover",
  cols: [{
    h: "Explore",
    links: ["Collections", "Journal", "Customer Homes", "The Atelier"]
  }, {
    h: "Libraries",
    links: ["Materials Library", "Finish Library", "Care Guides"]
  }, {
    h: "Guides",
    links: ["Rug Size Guide", "Wood Guide", "Upholstery Guide"]
  }],
  featured: {
    tone: "espresso",
    eyebrow: "Inside the Atelier",
    title: "Made by Hand, in India"
  }
}, {
  label: "Custom & Bespoke",
  customPage: true,
  cols: [{
    h: "Made to Order",
    links: ["Custom Furniture", "Custom Rugs", "Custom Upholstery", "Custom Finishes"]
  }, {
    h: "Projects",
    links: ["Interior Projects", "Hospitality Projects", "Designer Collaborations", "Project Procurement"]
  }, {
    h: "Start Here",
    links: ["Made For Your Space", "Speak with a Consultant", "The Atelier"]
  }],
  quick: ["Customization", "Material Sampling"],
  featured: {
    tone: "espresso",
    eyebrow: "Bespoke",
    title: "Made For Your Space",
    route: "custom"
  }
}, {
  label: "Trade",
  isTrade: true,
  cols: [{
    h: "Programs",
    links: ["Designer Program", "Architects", "Hospitality"]
  }, {
    h: "Services",
    links: ["Customization", "Material Sampling", "Project Procurement"]
  }],
  featured: {
    tone: "espresso",
    eyebrow: "Trade & Design",
    title: "For Designers & Architects"
  }
}];

/* ---------- Header + Mega menu ---------- */
function Header({
  onNavigate,
  transparent
}) {
  const [open, setOpen] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector(".aa-kit-scroll") || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrolled(y > 12);
    };
    root.addEventListener("scroll", onScroll);
    return () => root.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || !transparent || open;
  const ink = solid ? "var(--text-primary)" : "var(--text-on-dark)";
  return /*#__PURE__*/React.createElement("header", {
    onMouseLeave: () => setOpen(null),
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: solid ? "var(--surface-page)" : "transparent",
      borderBottom: solid ? "1px solid var(--border-hairline)" : "1px solid transparent",
      transition: "background var(--dur-base) var(--ease-luxe), border-color var(--dur-base)",
      color: ink
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      height: 76,
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    }
  }, NAV.slice(0, 5).map(n => /*#__PURE__*/React.createElement("button", {
    key: n.label,
    onMouseEnter: () => setOpen(n.simple ? null : n.label),
    onClick: () => onNavigate && onNavigate("collection", n.label),
    style: navBtn(ink, open === n.label)
  }, n.label))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("home");
    },
    style: {
      textAlign: "center",
      textDecoration: "none",
      color: ink,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: ".18em",
      textTransform: "uppercase"
    }
  }, "Art Avenue"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      letterSpacing: ".4em",
      textTransform: "uppercase",
      marginTop: 5,
      opacity: 0.62
    }
  }, "Design House")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center",
      justifyContent: "flex-end"
    }
  }, NAV.slice(5).map(n => /*#__PURE__*/React.createElement("button", {
    key: n.label,
    onMouseEnter: () => setOpen(n.label),
    onClick: () => onNavigate && onNavigate(n.label === "Trade" ? "trade" : n.label === "Custom & Bespoke" ? "custom" : "collection", n.label),
    style: navBtn(ink, open === n.label)
  }, n.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: "currentColor",
      opacity: 0.22
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-magnifying-glass",
    style: {
      fontSize: 20,
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-user",
    style: {
      fontSize: 20,
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-handbag-simple",
    style: {
      fontSize: 20,
      cursor: "pointer"
    }
  }))), open && /*#__PURE__*/React.createElement(MegaMenu, {
    data: NAV.find(n => n.label === open),
    onNavigate: onNavigate
  }));
}
function navBtn(ink, active) {
  return {
    background: "none",
    border: "none",
    padding: "6px 0",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    color: ink,
    whiteSpace: "nowrap",
    opacity: active ? 1 : 0.86,
    borderBottom: active ? "1px solid currentColor" : "1px solid transparent",
    transition: "opacity var(--dur-fast)"
  };
}
function navRouteFor(l) {
  if (/^materials$|materials library|finish library|library/i.test(l)) return ["library", l];
  if (/custom|bespoke|made for your space|designer collaborat|interior project|hospitality project|project procurement|the atelier|speak with|consultant/i.test(l)) return ["custom", l];
  if (/designer program|architects|hospitality|customization|sampling|procurement|trade/i.test(l)) return ["trade", l];
  if (/shop all furniture/i.test(l)) return ["collection", "Furniture"];
  if (/rug size guide|shop all rugs|shop by shape|shop by size/i.test(l)) return ["collection", "Rugs"];
  if (/journal|customer homes|collections|care guides|wood guide|upholstery guide|craftsmanship|designer favourites|best sellers|new arrivals/i.test(l)) return ["collection", l];
  return ["collection", l];
}
function MegaFeatured({
  data,
  onNavigate
}) {
  if (!data.featured) return null;
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(data.featured.route || (data.isTrade ? "trade" : "collection"), data.featured.title);
    },
    style: {
      textDecoration: "none",
      alignSelf: "start"
    }
  }, /*#__PURE__*/React.createElement(Figure, {
    tone: data.featured.tone,
    ratio: "4/3",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      bottom: 16,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 10,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--accent-soft)"
    }
  }, data.featured.eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 22,
      lineHeight: 1.1,
      display: "block"
    }
  }, data.featured.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      marginTop: 10,
      fontSize: 10.5,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase"
    }
  }, "Explore ", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-right"
  })))));
}

/* Discovery-first two-pane menu: pathway rail + active pathway panel + featured */
function MegaPaths({
  data,
  go,
  onNavigate
}) {
  const firstIdx = Math.max(0, data.paths.findIndex(p => p.links));
  const [idx, setIdx] = React.useState(firstIdx);
  React.useEffect(() => {
    setIdx(Math.max(0, data.paths.findIndex(p => p.links)));
  }, [data.label]);
  const active = data.paths[idx] || data.paths[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "28px var(--gutter) 34px",
      display: "grid",
      gridTemplateColumns: "258px 1fr 300px",
      gap: "clamp(32px,4vw,64px)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: "0 24px 0 0",
      borderRight: "1px solid var(--border-hairline)"
    }
  }, data.paths.map((p, i) => {
    const direct = !!p.direct,
      on = i === idx && !direct;
    return /*#__PURE__*/React.createElement("li", {
      key: p.h
    }, /*#__PURE__*/React.createElement("button", {
      onMouseEnter: () => p.links && setIdx(i),
      onClick: e => direct ? go(e, p.direct) : p.links && setIdx(i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        background: "none",
        border: "none",
        padding: "9px 0",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        color: on ? "var(--text-accent)" : "var(--text-primary)",
        transition: "color var(--dur-fast)"
      }
    }, /*#__PURE__*/React.createElement("span", null, p.h), /*#__PURE__*/React.createElement("i", {
      className: "ph " + (direct ? "ph-arrow-up-right" : "ph-caret-right"),
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        opacity: on ? 1 : 0.4
      }
    })));
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: 20
    }
  }, active.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px 40px"
    }
  }, (active.links || []).map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go(e, l),
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 18,
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, l)))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go(e, active.h),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      marginTop: 26,
      fontSize: 11,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      textDecoration: "none"
    }
  }, "View all ", active.h.replace(/^Shop by /, ""), " ", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-right"
  }))), /*#__PURE__*/React.createElement(MegaFeatured, {
    data: data,
    onNavigate: onNavigate
  }));
}
function MegaCols({
  data,
  go,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px var(--gutter) 36px",
      display: "grid",
      gridTemplateColumns: `repeat(${data.cols.length}, 1fr) 1.3fr`,
      gap: 40
    }
  }, data.cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: 18
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: 12
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go(e, l),
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 19,
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement(MegaFeatured, {
    data: data,
    onNavigate: onNavigate
  })), data.quick && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "16px var(--gutter)",
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Discover"), data.quick.map(q => /*#__PURE__*/React.createElement("a", {
    key: q,
    href: "#",
    onClick: e => go(e, q),
    style: {
      fontSize: 12.5,
      letterSpacing: ".02em",
      color: "var(--text-secondary)",
      textDecoration: "none",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-pill)",
      padding: "7px 15px"
    }
  }, q)))));
}
function MegaMenu({
  data,
  onNavigate
}) {
  if (!data || !data.cols && !data.paths) return null;
  const go = (e, l) => {
    e.preventDefault();
    const [r, a] = navRouteFor(l);
    onNavigate && onNavigate(r, a);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "100%",
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-soft)",
      animation: "aaFade var(--dur-base) var(--ease-luxe)"
    }
  }, data.paths ? /*#__PURE__*/React.createElement(MegaPaths, {
    data: data,
    go: go,
    onNavigate: onNavigate
  }) : /*#__PURE__*/React.createElement(MegaCols, {
    data: data,
    go: go,
    onNavigate: onNavigate
  }));
}

/* ---------- Footer ---------- */
function Footer({
  onNavigate
}) {
  const cols = [{
    h: "Shop",
    links: ["Furniture", "Rugs", "Lighting", "Decor", "Wall Art", "New Arrivals"]
  }, {
    h: "Discover",
    links: ["Our Story", "The Atelier", "Journal", "Customer Homes", "Collections"]
  }, {
    h: "Trade",
    links: ["Designer Program", "Architects", "Hospitality", "Customization", "Request Access"]
  }, {
    h: "Service",
    links: ["Delivery & Shipping", "Care & Materials", "Returns", "Contact", "Track Order"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y-tight) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "on-dark"
  }, "The Art Avenue Letter"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: 34,
      margin: "14px 0 0",
      lineHeight: 1.1
    }
  }, "Stories from the atelier, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--accent-soft)"
    }
  }, "first."))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: "flex",
      gap: 12,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Your email address",
    style: {
      flex: 1,
      background: "transparent",
      border: "1px solid var(--border-on-dark)",
      borderRadius: "var(--radius-sm)",
      color: "var(--text-on-dark)",
      padding: "0 18px",
      fontFamily: "var(--font-sans)",
      fontSize: 15
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: true
  }, "Subscribe")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y-tight) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: ".16em",
      textTransform: "uppercase"
    }
  }, "Art Avenue"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 280,
      marginTop: 18,
      color: "var(--text-on-dark-muted)",
      fontSize: 14,
      lineHeight: 1.7
    }
  }, "A design house curating handcrafted furniture, rugs, lighting and objects \u2014 made by hand in India, made to last for generations."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 22,
      fontSize: 19
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-instagram-logo"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-pinterest-logo"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-linkedin-logo"
  }))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--accent-soft)",
      marginBottom: 18
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: 11
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-on-dark-muted)",
      textDecoration: "none",
      fontSize: 14
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px var(--gutter)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      fontSize: 12,
      color: "var(--text-on-dark-muted)",
      letterSpacing: ".02em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Art Avenue Design House \xB7 Handcrafted in India"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Secure international shipping")))));
}

/* ---------- Trust block — sits directly beneath price ---------- */
function TrustBlock({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "20px 0 0",
      padding: "18px 0 0",
      borderTop: "1px solid var(--border-hairline)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "11px 20px"
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 9,
      alignItems: "flex-start",
      fontSize: 13,
      lineHeight: 1.42,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check",
    style: {
      fontSize: 13,
      color: "var(--accent-deep)",
      marginTop: 3,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, t))));
}

/* ---------- "Need Assembly Assistance?" — eligible furniture only ---------- */
function AssemblyBand({
  href
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-alt)",
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1.3fr auto",
      gap: "clamp(28px,4vw,64px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "60ch"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Delivery & Assembly"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "var(--text-h3)",
      lineHeight: 1.12,
      margin: "14px 0 0"
    }
  }, "Need assembly assistance?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--text-secondary)",
      margin: "12px 0 0"
    }
  }, "Most pieces arrive securely packed and ready to use. Some larger items may require simple assembly after delivery \u2014 for these, assembly or installation support may be available depending on the product and your location. We recommend speaking with us before you order so we can confirm what your piece needs.")), /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-chat-teardrop-dots",
      style: {
        color: "var(--accent-deep)"
      }
    })
  }, "Speak with a Design Consultant"))));
}

/* ---------- "Why You'll Love It" — editorial, category-specific ---------- */
const WHY = {
  Furniture: {
    tone: "clay",
    caption: "Joinery, by hand",
    headline: "A piece made to be lived with.",
    intro: "Every Art Avenue piece begins as raw timber and the hands of the people who shape it. This is furniture built slowly, to be kept.",
    points: [{
      h: "Handcrafted by skilled artisans",
      t: "Carved, joined and finished by hand in our workshops — never mass-produced."
    }, {
      h: "Built from carefully selected materials",
      t: "Kiln-dried hardwoods and natural textiles, chosen to last decades."
    }, {
      h: "Designed to age beautifully",
      t: "Oil-rubbed finishes and honest joinery gain character with the years."
    }, {
      h: "Made for everyday living",
      t: "Generous, comfortable proportions drawn for real homes, not showrooms."
    }, {
      h: "Naturally one of a kind",
      t: "Grain, tone and hand-finish vary gently from piece to piece."
    }]
  },
  Rugs: {
    tone: "olive",
    caption: "Knotted by hand",
    headline: "A foundation, knotted by hand.",
    intro: "Months on the loom give a rug its depth. Naturally dyed and hand-knotted, it softens underfoot and grounds a room for a generation.",
    points: [{
      h: "Hand-knotted by master weavers",
      t: "Tied knot by knot on vertical looms over four to six months."
    }, {
      h: "Naturally dyed, naturally varied",
      t: "Subtle abrash — gentle colour shift — is the signature of true hand craft."
    }, {
      h: "Built to be passed down",
      t: "Dense wool pile made to soften over years, never to wear thin."
    }, {
      h: "Grounds and warms a room",
      t: "A quiet anchor that draws the whole arrangement together."
    }, {
      h: "Singular by nature",
      t: "No two rugs are ever knotted exactly alike."
    }]
  },
  Cushions: {
    tone: "clay",
    caption: "Finished by hand",
    headline: "Quiet character, made by hand.",
    intro: "Cushions crafted in small batches across India — in whatever technique and cloth suits the design, made to be layered, handled and lived with.",
    points: [{
      h: "Made by skilled hands",
      t: "Block-printed, woven, tufted, embroidered or appliquéd — crafted by textile artisans."
    }, {
      h: "Natural, considered fabrics",
      t: "Cotton, linen, wool, velvet and leather, chosen for how they feel and last."
    }, {
      h: "Layered for a collected look",
      t: "Mix techniques, sizes and textures for a relaxed, gathered-over-time feeling."
    }, {
      h: "Made to be refreshed",
      t: "Removable covers and concealed zips make a change of mood simple."
    }, {
      h: "Quietly unique",
      t: "Small variations are the signature of genuine handwork."
    }]
  },
  Lighting: {
    tone: "bronze",
    caption: "Cast & hand-finished",
    headline: "Warm light, worked by hand.",
    intro: "Brass and stone shaped by artisans, made to throw a soft, considered light and to patina beautifully over the years.",
    points: [{
      h: "Cast and finished by hand",
      t: "Metal and stone worked by makers, not machines."
    }, {
      h: "Warm, considered light",
      t: "Designed to flatter a room once the daylight goes."
    }, {
      h: "Built to patina",
      t: "Living finishes that deepen and soften over time."
    }, {
      h: "Made for the long term",
      t: "Rewireable and repairable — made to keep, not replace."
    }, {
      h: "Singular by nature",
      t: "Hand-finishing gives every piece its own surface."
    }]
  },
  Decor: {
    tone: "stone",
    caption: "Thrown & carved by hand",
    headline: "Objects made to be gathered.",
    intro: "Thrown, carved or cast individually, in honest materials left to speak for themselves — pieces meant to be picked up and rearranged.",
    points: [{
      h: "Made by hand",
      t: "Each object thrown, carved or cast individually by our makers."
    }, {
      h: "Honest materials",
      t: "Stone, clay, wood and brass, finished to feel like themselves."
    }, {
      h: "Collected, not matched",
      t: "Made to be gathered, grouped and moved around a room."
    }, {
      h: "Tactile by design",
      t: "Weight and surface considered to be handled, not just seen."
    }, {
      h: "Each one unique",
      t: "Natural variation is part of every piece's character."
    }]
  },
  "Wall Art": {
    tone: "sand",
    caption: "Original & limited works",
    headline: "A wall's centre of gravity.",
    intro: "Original and limited works, made or editioned by hand on archival materials, composed for the rooms they'll live in.",
    points: [{
      h: "Original and limited works",
      t: "Made or editioned by hand — never mass-printed."
    }, {
      h: "Archival materials",
      t: "Pigments, papers and framing chosen to last generations."
    }, {
      h: "Composed for the room",
      t: "Scale and tone considered for living spaces, not galleries alone."
    }, {
      h: "A natural focal point",
      t: "Art that gives a wall its centre of gravity."
    }, {
      h: "Carries the maker's hand",
      t: "Each work is singular to the person who made it."
    }]
  }
};
function WhyLoveIt({
  category = "Furniture"
}) {
  const d = WHY[category] || WHY.Furniture;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "0.82fr 1.18fr",
      gap: "clamp(40px,6vw,90px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Figure, {
    tone: d.tone,
    ratio: "4/5",
    label: d.caption
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    rule: true
  }, "Why You'll Love It"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "var(--text-h1)",
      lineHeight: 1.1,
      letterSpacing: "var(--tracking-tight)",
      margin: "16px 0 0"
    }
  }, d.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      lineHeight: 1.72,
      color: "var(--text-secondary)",
      margin: "16px 0 0",
      maxWidth: "58ch"
    }
  }, d.intro), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "28px 0 0",
      padding: 0
    }
  }, d.points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "0 18px",
      alignItems: "baseline",
      padding: "16px 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 16,
      color: "var(--text-accent)",
      width: 26
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 20,
      fontWeight: 500,
      color: "var(--text-primary)",
      lineHeight: 1.25
    }
  }, p.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      marginTop: 4,
      maxWidth: "60ch"
    }
  }, p.t))))))));
}

/* ---------- Product status — In Stock / Made to Order / Customizable / Consultation ---------- */
const STATUS = {
  "in-stock": {
    label: "In Stock",
    note: "Ready to ship",
    icon: "ph-package",
    tone: "var(--accent-deep)"
  },
  "available-to-order": {
    label: "Available to Order",
    note: "Crafted for your home",
    icon: "ph-hammer",
    tone: "var(--accent-deep)"
  },
  "made-to-order": {
    label: "Made to Order",
    note: "Crafted for you after ordering",
    icon: "ph-hammer",
    tone: "var(--accent-deep)"
  },
  customizable: {
    label: "Customizable",
    note: "Sizes, finishes & materials",
    icon: "ph-pencil-ruler",
    tone: "var(--accent-deep)"
  },
  consultation: {
    label: "Consultation Recommended",
    note: "A considered, guided purchase",
    icon: "ph-chat-teardrop-dots",
    tone: "var(--accent-deep)"
  }
};
function ProductStatus({
  states = []
}) {
  const list = states.map(s => STATUS[s]).filter(Boolean);
  if (!list.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 16
    }
  }, list.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.label,
    title: s.note,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "7px 13px 7px 11px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--accent-soft)",
      background: "var(--surface-accent-tint)",
      fontSize: 12,
      color: "var(--text-accent)",
      letterSpacing: ".01em"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph " + s.icon,
    style: {
      fontSize: 13,
      color: s.tone
    }
  }), s.label)));
}

/* ---------- "Made For Your Space" — customization + consultation band ---------- */
function MadeForYourSpace({
  category = "Furniture",
  options,
  href,
  tone = "espresso"
}) {
  const DEFAULTS = {
    Furniture: ["Custom dimensions to suit your room", "Bespoke finishes & wood tones", "Your own upholstery (COM) welcomed", "Configurations for living, dining & bedroom"],
    Rugs: ["Custom sizes on selected designs", "Bespoke colourways from our dye library", "Alternative constructions & pile heights", "Round, runner & oversized formats"],
    Cushions: ["Custom sizes & fill options", "Bespoke fabrics, leathers & techniques", "Coordinated sets for a collected look", "Trade & hospitality quantities"],
    Lighting: ["Custom dimensions & drop lengths", "Bespoke metal finishes", "Shade & diffuser options", "Project & hospitality specification"],
    Decor: ["Bespoke finishes & dimensions", "Commissioned one-of-a-kind pieces", "Coordinated groupings", "Project quantities"],
    "Wall Art": ["Commissioned original works", "Bespoke sizing & framing", "Curated pairings for a wall", "Edition & medium options"]
  };
  const opts = options || DEFAULTS[category] || DEFAULTS.Furniture;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "clamp(40px,6vw,96px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "on-dark"
  }, "Made For Your Space"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "var(--text-display-2)",
      lineHeight: 1.06,
      letterSpacing: "var(--tracking-tight)",
      margin: "18px 0 0"
    }
  }, "Most pieces can be ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--accent-soft)"
    }
  }, "made to suit.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-lg)",
      lineHeight: 1.7,
      color: "var(--text-on-dark-muted)",
      margin: "18px 0 0",
      maxWidth: "46ch"
    }
  }, "Available in additional sizes, finishes and materials depending on the piece. Tell us about your room and how you live, and a design consultant will shape it with you \u2014 well before you order."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-chat-teardrop-dots"
    })
  }, "Speak with a Design Consultant")))), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderTop: "1px solid var(--border-on-dark)"
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("li", {
    key: o,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      padding: "16px 0",
      borderBottom: "1px solid var(--border-on-dark)",
      fontSize: 15.5,
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-plus",
    style: {
      fontSize: 14,
      color: "var(--accent-soft)",
      flex: "none"
    }
  }), o)))));
}

/* ---------- Fulfillment model — In Stock · Made to Order · Custom Order · Project Enquiry ----------
 * One product architecture covers inventory, made-to-order, custom and project-based products.
 * Each type carries its own messaging, lead time and primary call-to-action. Merchant sets the
 * `fulfillment` field per SKU; the PDP reads it for the status bar AND the primary button. */
const FULFILLMENT = {
  "in-stock": {
    label: "In Stock",
    icon: "ph-package",
    lead: "Ships in 3–5 days",
    action: "cart",
    cta: "Add to Cart",
    msg: "In stock and ready to ship — dispatched within 3–5 business days, securely packed and insured."
  },
  "made-to-order": {
    label: "Made to Order",
    icon: "ph-hammer",
    lead: "Crafted in 3–4 weeks",
    action: "cart",
    cta: "Add to Cart",
    msg: "Crafted by hand to order — made for you once you order, and delivered in 3–4 weeks."
  },
  "custom": {
    label: "Custom Order",
    icon: "ph-pencil-ruler",
    lead: "Timeline set at consultation",
    action: "consult",
    cta: "Request a Custom Order",
    msg: "Made to your specification — dimensions, finish and materials of your choosing, shaped with a design consultant before you commit."
  },
  "project": {
    label: "Project Enquiry",
    icon: "ph-buildings",
    lead: "Planned to your project schedule",
    action: "consult",
    cta: "Start a Project Enquiry",
    msg: "For multi-room, hospitality and contract orders — planned, sourced and delivered to your project timeline by a dedicated consultant."
  }
};
function fulfillmentOf(type) {
  return FULFILLMENT[type] || FULFILLMENT["made-to-order"];
}
function FulfillmentBar({
  type
}) {
  const f = fulfillmentOf(type);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: "15px 17px",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-hairline)",
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-accent-tint)",
      border: "1px solid var(--accent-soft)",
      color: "var(--text-accent)",
      fontSize: 12,
      letterSpacing: ".02em"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph " + f.icon,
    style: {
      fontSize: 14,
      color: "var(--accent-deep)"
    }
  }), f.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12.5,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-clock",
    style: {
      fontSize: 15,
      color: "var(--accent-deep)"
    }
  }), f.lead)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      margin: "11px 0 0"
    }
  }, f.msg));
}

/* ---------- Visibility modes — Ecommerce · Consultation · Price on Request · Project Only ----------
 * A separate metafield layer from fulfillment. Controls price visibility, cart visibility and the
 * default primary/secondary CTA + lead-generation behaviour. Merchants can override either CTA
 * explicitly (primaryCta / secondaryCta) independently of fulfillment or visibility. */
const VISIBILITY = {
  "ecommerce": {
    price: true,
    cart: true,
    primary: "add-to-cart",
    secondary: "consult",
    lead: "cart"
  },
  "consultation": {
    price: true,
    cart: false,
    primary: "consult",
    secondary: "customize",
    lead: "consult"
  },
  "price-on-request": {
    price: false,
    cart: false,
    primary: "request-pricing",
    secondary: "consult",
    lead: "enquiry"
  },
  "project-only": {
    price: false,
    cart: false,
    primary: "project-enquiry",
    secondary: "consult",
    lead: "project"
  }
};

/* CTA registry — purchase / enquiry actions only. Sample requests are intentionally NOT here:
 * they are a separate customer intent (a lead, not a purchase action) handled by AASampleRequest. */
const CTA = {
  "add-to-cart": {
    label: "Add to Cart",
    icon: "ph-shopping-bag-open",
    kind: "cart"
  },
  "request-pricing": {
    label: "Request Pricing",
    icon: "ph-tag",
    kind: "link"
  },
  "consult": {
    label: "Speak with a Design Consultant",
    icon: "ph-chat-teardrop-dots",
    kind: "link",
    href: "consult"
  },
  "customize": {
    label: "Customize This Piece",
    icon: "ph-pencil-ruler",
    kind: "link",
    href: "customize"
  },
  "project-enquiry": {
    label: "Start a Project Enquiry",
    icon: "ph-buildings",
    kind: "link",
    href: "project"
  },
  "notify": {
    label: "Notify Me When Available",
    icon: "ph-bell",
    kind: "link",
    href: "consult"
  }
};
function commerceOf(cfg, life) {
  cfg = cfg || {};
  const v = VISIBILITY[cfg.visibility] || VISIBILITY["ecommerce"];
  const res = {
    visibility: cfg.visibility || "ecommerce",
    price: v.price,
    cart: v.cart,
    lead: v.lead,
    primary: cfg.primaryCta || v.primary,
    secondary: cfg.secondaryCta === null ? null : cfg.secondaryCta || v.secondary
  };
  // Lifecycle composes on top of visibility: a non-shopable state removes the cart and swaps the CTA.
  if (life && life.shopable === false) {
    res.cart = false;
    res.primary = life.primary || res.primary;
  }
  return res;
}
const ctaQtyBtn = {
  width: 40,
  height: 46,
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: 18,
  color: "var(--text-secondary)"
};
const ctaSaveBtn = {
  width: 50,
  flex: "none",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius-sm)",
  background: "transparent",
  cursor: "pointer",
  fontSize: 18,
  color: "var(--text-primary)"
};
function CtaOne({
  ctaKey,
  hrefs,
  variant,
  fullWidth,
  label
}) {
  const c = CTA[ctaKey];
  if (!c) return null;
  if (c.kind === "cart") return /*#__PURE__*/React.createElement(Button, {
    variant: variant,
    fullWidth: fullWidth
  }, label || c.label);
  const href = hrefs && (hrefs[c.href] || hrefs[ctaKey]) || hrefs && hrefs.consult || "#";
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none",
      flex: fullWidth ? 1 : "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: variant,
    fullWidth: fullWidth,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "ph " + c.icon,
      style: {
        color: variant === "primary" ? undefined : "var(--accent-deep)"
      }
    })
  }, c.label));
}

/* Primary + secondary CTA cluster, fully driven by the resolved commerce object */
function CtaButtons({
  commerce,
  hrefs,
  priceText,
  save = true
}) {
  const [qty, setQty] = React.useState(1);
  const primary = CTA[commerce.primary];
  const isCart = primary && primary.kind === "cart";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 22,
      alignItems: "stretch"
    }
  }, isCart && commerce.cart && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => Math.max(1, q - 1)),
    style: ctaQtyBtn
  }, "\u2013"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      textAlign: "center",
      fontSize: 15
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => q + 1),
    style: ctaQtyBtn
  }, "+")), /*#__PURE__*/React.createElement(CtaOne, {
    ctaKey: commerce.primary,
    hrefs: hrefs,
    variant: "primary",
    fullWidth: true,
    label: isCart && priceText ? "Add to Cart · " + priceText : null
  }), save && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Save",
    style: ctaSaveBtn
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-heart"
  }))), commerce.secondary && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(CtaOne, {
    ctaKey: commerce.secondary,
    hrefs: hrefs,
    variant: "secondary",
    fullWidth: true
  })));
}

/* Price block — respects visibility (hidden price → "Price on request" / "Project pricing") */
function PriceTag({
  priceText,
  commerce,
  caption
}) {
  if (commerce.price) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 14,
        marginTop: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 26,
        color: "var(--text-primary)"
      }
    }, priceText), caption && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, caption));
  }
  const isProject = commerce.visibility === "project-only";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 23,
      color: "var(--text-primary)"
    }
  }, isProject ? "Project pricing" : "Price on request"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      letterSpacing: ".01em"
    }
  }, isProject ? "Quoted per project" : "Shared on enquiry"));
}

/* Collection-card commerce badge — surfaces the product's commerce state without entering the PDP */
const COMMERCE_BADGE = {
  "in-stock": {
    label: "In Stock",
    icon: "ph-package"
  },
  "made-to-order": {
    label: "Made to Order",
    icon: "ph-hammer"
  },
  "customizable": {
    label: "Customizable",
    icon: "ph-pencil-ruler"
  },
  "project": {
    label: "Made for Projects",
    icon: "ph-buildings"
  }
};
function CommerceBadge({
  state
}) {
  const b = COMMERCE_BADGE[state];
  if (!b) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(250,246,239,.94)",
      color: "var(--text-primary)",
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: ".05em",
      textTransform: "uppercase",
      boxShadow: "var(--shadow-soft)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph " + b.icon,
    style: {
      fontSize: 12,
      color: "var(--accent-deep)"
    }
  }), b.label);
}

/* ---------- Global lead framework — one structure for every lead type (CRM-ready) ----------
 * Lead types: Design Consultation · Request Pricing · Request Samples · Custom Product Enquiry
 *             Project Enquiry · Trade Account Application.
 * Every lead carries the same payload so it can be routed consistently to a CRM:
 *   { product, sku, url, leadType, customer, message }
 * leadHref() builds the channel link (WhatsApp here; swap for a form/endpoint in production). */
const WA_NUMBER = "919828060095";
const LEAD_TYPES = {
  "consultation": {
    label: "Design Consultation",
    intent: "I'd like a design consultation"
  },
  "pricing": {
    label: "Request Pricing",
    intent: "I'd like pricing"
  },
  "samples": {
    label: "Request Samples",
    intent: "I'd like to request a sample"
  },
  "custom": {
    label: "Custom Product Enquiry",
    intent: "I'd like a custom version"
  },
  "project": {
    label: "Project Enquiry",
    intent: "I'd like to discuss a project"
  },
  "trade": {
    label: "Trade Account Application",
    intent: "I'd like to apply for a trade account"
  }
};
function leadPayload(type, ctx) {
  ctx = ctx || {};
  const t = LEAD_TYPES[type] || LEAD_TYPES["consultation"];
  return {
    leadType: t.label,
    product: ctx.product || null,
    sku: ctx.sku || null,
    url: typeof location !== "undefined" ? location.href : null,
    customer: ctx.customer || null,
    message: ctx.message || null
  };
}
function leadHref(type, ctx) {
  ctx = ctx || {};
  const t = LEAD_TYPES[type] || LEAD_TYPES["consultation"];
  const p = leadPayload(type, ctx);
  const lines = ["Hello Art Avenue,", t.intent + (p.product ? " for the " + p.product : "") + ".", p.sku ? "SKU: " + p.sku : "", "Lead type: " + p.leadType, p.message ? "Message: " + p.message : "", p.url ? "Page: " + p.url : ""].filter(Boolean);
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
}

/* ---------- Sample request — a DEDICATED action, never a CTA override ----------
 * Sits beside material / finish / upholstery / construction selectors. One of the highest-value
 * lead sources for luxury furniture, rugs and upholstery, so it is treated as its own intent. */
function SampleRequest({
  product,
  sku,
  kinds
}) {
  const list = kinds && kinds.length ? kinds : ["Material"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      padding: "18px 0 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-swatches",
    style: {
      fontSize: 22,
      color: "var(--accent-deep)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, "Request a sample"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, "Feel the ", list.join(" & ").toLowerCase(), " in your own light \xB7 from \u20B9999"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 13,
      flexWrap: "wrap"
    }
  }, list.map(k => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: leadHref("samples", {
      product,
      sku,
      message: k + " sample"
    }),
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "9px 15px",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-pill)",
      fontSize: 12.5,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-swatches",
    style: {
      color: "var(--accent-deep)",
      fontSize: 14
    }
  }), " Request ", k, " Sample"))));
}

/* ---------- Product presets — one-click defaults a merchant can then override ----------
 * A preset seeds fulfillment + visibility + the module set/order. Any field set explicitly on the
 * product still wins (merchant override). Resolve with AAPreset(name, overrides). */
const PRESETS = {
  "luxury-furniture": {
    fulfillment: "made-to-order",
    visibility: "ecommerce",
    sizeMode: "multi",
    modules: {
      material: true,
      finish: true,
      upholstery: true,
      samples: true,
      customization: true,
      assembly: true,
      completeRoom: true,
      faq: true,
      related: true,
      delivery: true
    }
  },
  "luxury-rug": {
    fulfillment: "made-to-order",
    visibility: "ecommerce",
    sizeMode: "multi",
    modules: {
      guides: true,
      specs: true,
      construction: true,
      material: true,
      craft: true,
      rooms: true,
      related: true,
      samples: true
    }
  },
  "luxury-cushion": {
    fulfillment: "made-to-order",
    visibility: "ecommerce",
    modules: {
      samples: true,
      whyLove: true,
      customization: true,
      pairs: true
    }
  },
  "custom-product": {
    fulfillment: "custom",
    visibility: "price-on-request",
    primaryCta: "request-pricing"
  },
  "project-product": {
    fulfillment: "project",
    visibility: "project-only",
    primaryCta: "project-enquiry"
  },
  "in-stock-product": {
    fulfillment: "in-stock",
    visibility: "ecommerce",
    primaryCta: "add-to-cart"
  },
  "made-to-order-product": {
    fulfillment: "made-to-order",
    visibility: "ecommerce",
    primaryCta: "add-to-cart"
  }
};
function presetOf(name, overrides) {
  const base = PRESETS[name] || {};
  const merged = Object.assign({}, base, overrides || {});
  if (base.modules || overrides && overrides.modules) merged.modules = Object.assign({}, base.modules, overrides && overrides.modules);
  return merged;
}

/* ---------- Product lifecycle states — control availability without template changes ----------
 * Composes on top of visibility via AACommerce(cfg, life): a non-shopable state removes the cart
 * and swaps the primary CTA (e.g. Coming Soon → Notify Me). `archive`/`hidden` are filtered out of
 * listings upstream. Resolve with AALifecycle(state); show the notice with <AALifecycleBanner>. */
const LIFECYCLE = {
  "active": {
    label: "Active",
    shopable: true,
    badge: null,
    banner: null
  },
  "coming-soon": {
    label: "Coming Soon",
    shopable: false,
    badge: "Coming Soon",
    primary: "notify",
    banner: "Arriving soon — register your interest and we'll tell you the moment it's available."
  },
  "seasonal": {
    label: "Seasonal",
    shopable: true,
    badge: "Seasonal",
    banner: "A seasonal piece, available for a limited time."
  },
  "discontinued": {
    label: "Discontinued",
    shopable: false,
    badge: "Discontinued",
    primary: "consult",
    banner: "This piece has been discontinued. Speak with a consultant about current alternatives."
  },
  "archive": {
    label: "Archived",
    shopable: false,
    badge: "Archived",
    hidden: true,
    banner: "This piece is archived and no longer available."
  }
};
function lifecycleOf(state) {
  return LIFECYCLE[state] || LIFECYCLE["active"];
}
function LifecycleBanner({
  state
}) {
  const l = lifecycleOf(state);
  if (!l.banner) return null;
  const muted = state === "discontinued" || state === "archive";
  const tone = muted ? "var(--text-muted)" : "var(--accent-deep)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      alignItems: "flex-start",
      gap: 11,
      padding: "13px 16px",
      borderRadius: "var(--radius-sm)",
      background: muted ? "var(--surface-alt)" : "var(--surface-accent-tint)",
      border: "1px solid " + (muted ? "var(--border-strong)" : "var(--accent-soft)")
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph " + (state === "coming-soon" ? "ph-bell" : state === "seasonal" ? "ph-sun" : "ph-info"),
    style: {
      fontSize: 17,
      color: tone,
      flex: "none",
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: tone
    }
  }, l.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      marginTop: 3
    }
  }, l.banner)));
}
Object.assign(window, {
  AAFigure: Figure,
  AAAnnounceBar: AnnounceBar,
  AAHeader: Header,
  AAFooter: Footer,
  AA_NAV: NAV,
  AATrustBlock: TrustBlock,
  AAWhyLoveIt: WhyLoveIt,
  AAAssemblyBand: AssemblyBand,
  AAProductStatus: ProductStatus,
  AAMadeForYourSpace: MadeForYourSpace,
  AAFulfillment: fulfillmentOf,
  AAFulfillmentBar: FulfillmentBar,
  AACommerce: commerceOf,
  AACtaButtons: CtaButtons,
  AAPriceTag: PriceTag,
  AACommerceBadge: CommerceBadge,
  AASampleRequest: SampleRequest,
  AALeadHref: leadHref,
  AALead: {
    types: LEAD_TYPES,
    href: leadHref,
    payload: leadPayload
  },
  AAPreset: presetOf,
  AALifecycle: lifecycleOf,
  AALifecycleBanner: LifecycleBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CollectionTile = __ds_scope.CollectionTile;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
