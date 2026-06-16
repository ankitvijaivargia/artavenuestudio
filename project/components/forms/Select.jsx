import React from "react";

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
export function Select({
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
  return (
    <div className={["aa-field", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="aa-field__label" htmlFor={fid}>
          {label} {required && <span className="aa-field__req">*</span>}
        </label>
      )}
      <span className="aa-select-wrap">
        <select id={fid} className="aa-control" {...rest}>
          {options
            ? options.map((o) => {
                const val = typeof o === "string" ? o : o.value;
                const lab = typeof o === "string" ? o : o.label;
                return (
                  <option key={val} value={val}>
                    {lab}
                  </option>
                );
              })
            : children}
        </select>
      </span>
      {hint && <span className="aa-field__hint">{hint}</span>}
    </div>
  );
}
