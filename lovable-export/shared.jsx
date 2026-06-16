/**
 * Art Avenue — Shared design-system primitives & chrome
 * ------------------------------------------------------------------
 * Stack: React + Tailwind CSS (utility classes only) + Lucide React.
 * No external CSS files — brand tokens are inlined as Tailwind arbitrary
 * values (e.g. bg-[#FAF6EF]). Imported by every page (Home, Collection,
 * Product, Trade).
 *
 * Brand tokens
 *   ivory #FAF6EF · canvas #F4EEE3 · warm-white #FCFAF6
 *   stone #EAE1D3 · sand #DCD1BD · clay #C9BCA4
 *   charcoal #2B2824 (ink) · ink #46413A · muted #766E61 · faint #9C9384
 *   bronze #9C7C4E (accent) · deep #7B6038 · soft #B89A6E · tint #ECE1CE
 *   espresso #221F1B (dark surface) · on-dark #FAF6EF · on-dark-muted #B7AE9E
 *   border #DCD2C1 · border-strong #C3B7A1 · on-dark border rgba(250,246,239,.16)
 */
import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  ArrowRight,
  ChevronDown,
  Check,
  Package,
  Hammer,
  PencilRuler,
  Building2,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export const SERIF = "font-['Cormorant_Garamond',Georgia,serif]";
export const SANS = "font-['Jost',ui-sans-serif,system-ui,sans-serif]";
export const WRAP = "max-w-[1320px] mx-auto px-[clamp(20px,5vw,64px)]";
export const SECTION_Y = "py-[clamp(64px,9vw,144px)]";
export const SECTION_Y_TIGHT = "py-[clamp(48px,6vw,88px)]";
export const GAP_CARD = "gap-[clamp(16px,2vw,28px)]";

/* High-quality Unsplash placeholders — handcrafted furniture, rugs, décor.
 * Subjects are approximate; swap any URL for licensed brand photography. */
const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // heroes / editorial
  heroHome: u("1618220179428-22790b461013", 2000),
  heroDark: u("1493663284031-b7e3aefcae8e", 2000),
  heroTrade: u("1524758631624-e2822e304c36", 2000),
  heroCollection: u("1586023492125-27b2c045efd7", 2000),
  // categories
  furniture: u("1586023492125-27b2c045efd7"),
  rugs: u("1600166898405-da9535204843"),
  lighting: u("1543198126-a8ad8e47fb22"),
  decor: u("1530018607912-eff2daa1bac4"),
  wallArt: u("1513519245088-0e12902e35ca"),
  // atelier / craft
  craftMain: u("1452860606245-08befc0ff44b"),
  craftA: u("1567538096630-e0c55bd6374c"),
  craftB: u("1532372320572-cda25653a26d"),
  // rooms
  living: u("1524758631624-e2822e304c36"),
  dining: u("1540574163026-643ea20ade25"),
  bedroom: u("1505693416388-ac5ce068fe85"),
  study: u("1416339306562-f3d12fefd36f"),
  outdoor: u("1555041469-a586c61ea9bc"),
  // products
  chair: u("1567538096630-e0c55bd6374c"),
  sofa: u("1555041469-a586c61ea9bc"),
  table: u("1532372320572-cda25653a26d"),
  pendant: u("1543198126-a8ad8e47fb22"),
  rug: u("1600166898405-da9535204843"),
  cabinet: u("1616486338812-3dadae4b4ace"),
  vessel: u("1556228720-195a672e8a03"),
  // gallery details
  detailA: u("1567538096630-e0c55bd6374c"),
  detailB: u("1543198126-a8ad8e47fb22"),
  detailWide: u("1524758631624-e2822e304c36", 1400),
  // customer homes / projects
  home1: u("1493663284031-b7e3aefcae8e"),
  home2: u("1538688525198-9b88f6f53126"),
  home3: u("1550226891-ef816aed4a98"),
  home4: u("1524758631624-e2822e304c36"),
  project1: u("1616594039964-ae9021a400a0"),
  project2: u("1615875605825-5eb9bb5d52ac"),
  project3: u("1567016526105-22da7c13161a"),
  project4: u("1505693416388-ac5ce068fe85"),
  project5: u("1416339306562-f3d12fefd36f"),
  // journal
  journal1: u("1513519245088-0e12902e35ca"),
  journal2: u("1600166898405-da9535204843"),
  journal3: u("1586023492125-27b2c045efd7"),
};

/* A small palette to vary product imagery in grids. */
export const PRODUCT_IMGS = [
  IMG.chair,
  IMG.sofa,
  IMG.table,
  IMG.pendant,
  IMG.cabinet,
  IMG.rug,
  IMG.vessel,
  IMG.living,
];

/* ----------------------------------------------------------------- *
 * Primitives
 * ----------------------------------------------------------------- */

export function Eyebrow({ tone = "accent", rule = false, center = false, children, className = "" }) {
  const color =
    tone === "on-dark" ? "text-[#B89A6E]" : tone === "muted" ? "text-[#766E61]" : "text-[#7B6038]";
  return (
    <div
      className={[
        SANS,
        color,
        "text-xs font-medium uppercase tracking-[0.24em] inline-flex items-center gap-[14px]",
        center ? "justify-center" : "",
        className,
      ].join(" ")}
    >
      {rule && <span className="w-[34px] h-px bg-current opacity-85" />}
      <span>{children}</span>
      {rule && center && <span className="w-[34px] h-px bg-current opacity-85" />}
    </div>
  );
}

export function Button({
  variant = "primary",
  onDark = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  onClick,
  type = "button",
  className = "",
}) {
  const base =
    SANS +
    " group inline-flex items-center justify-center gap-[10px] font-medium uppercase leading-none cursor-pointer whitespace-nowrap transition-colors duration-300";
  const pad = "px-[26px] py-[14px] text-xs tracking-[0.14em] rounded-[4px]";
  const variants = {
    primary: pad + " bg-[#2B2824] text-[#FAF6EF] hover:bg-[#221F1B]",
    secondary: onDark
      ? pad +
        " border border-[rgba(250,246,239,0.22)] text-[#FAF6EF] hover:bg-[#FAF6EF] hover:text-[#2B2824] hover:border-[#FAF6EF]"
      : pad +
        " border border-[#C3B7A1] text-[#2B2824] hover:bg-[#2B2824] hover:text-[#FAF6EF] hover:border-[#2B2824]",
    accent: pad + " bg-[#9C7C4E] text-white hover:bg-[#7B6038]",
    ghost: "py-[6px] text-xs tracking-[0.14em] gap-2 text-[#7B6038] hover:text-[#7B6038]",
  };
  return (
    <button type={type} onClick={onClick} className={[base, variants[variant], fullWidth ? "w-full" : "", className].join(" ")}>
      {iconLeft && <span className="inline-flex text-[1.15em]">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && (
        <span className="inline-flex text-[1.15em] transition-transform duration-300 group-hover:translate-x-1">
          {iconRight}
        </span>
      )}
    </button>
  );
}

export function Figure({ src, alt = "", ratio, label, dark = false, className = "", children }) {
  return (
    <div
      className={["relative overflow-hidden rounded-[2px] bg-[#EAE1D3] group", className].join(" ")}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
      />
      {children}
      {label && (
        <span
          className={[
            SERIF,
            "italic absolute left-4 bottom-3.5 text-[15px] tracking-[0.01em]",
            dark ? "text-[rgba(250,246,239,0.62)]" : "text-[rgba(43,40,36,0.55)]",
          ].join(" ")}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export function SectionHead({ eyebrow, title, intro, center, light, rule, titleClass = "text-[clamp(2.75rem,5vw,4.5rem)]" }) {
  return (
    <div className={center ? "max-w-[720px] mx-auto text-center" : "max-w-[640px]"}>
      {eyebrow && (
        <Eyebrow tone={light ? "on-dark" : "accent"} rule={rule} center={center}>
          {eyebrow}
        </Eyebrow>
      )}
      {title && (
        <h2
          className={[
            SERIF,
            "font-medium mt-[18px] leading-[1.12] tracking-[-0.015em]",
            titleClass,
            light ? "text-[#FAF6EF]" : "text-[#2B2824]",
          ].join(" ")}
        >
          {title}
        </h2>
      )}
      {intro && (
        <p
          className={[
            SANS,
            "max-w-[560px] mt-[18px] font-light text-[1.1875rem] leading-[1.72]",
            center ? "mx-auto" : "",
            light ? "text-[#B7AE9E]" : "text-[#46413A]",
          ].join(" ")}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* commerce-state badge shown on collection cards */
const COMMERCE_BADGE = {
  "in-stock": { label: "In Stock", icon: Package },
  "made-to-order": { label: "Made to Order", icon: Hammer },
  customizable: { label: "Customizable", icon: PencilRuler },
  project: { label: "Made for Projects", icon: Building2 },
};
export function CommerceBadge({ state }) {
  const b = COMMERCE_BADGE[state];
  if (!b) return null;
  const Icon = b.icon;
  return (
    <span
      className={
        SANS +
        " inline-flex items-center gap-1.5 px-[11px] py-[5px] rounded-full bg-[rgba(250,246,239,0.94)] text-[#2B2824] text-[10.5px] font-medium tracking-[0.05em] uppercase shadow-[0_2px_4px_rgba(43,40,36,0.04),0_10px_28px_-20px_rgba(43,40,36,0.22)]"
      }
    >
      <Icon size={12} className="text-[#7B6038]" /> {b.label}
    </span>
  );
}

export function ProductCard({ image, badge, category, name, price, note, favorite = true, onClick }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      className="group flex flex-col no-underline text-inherit"
    >
      <div className="relative overflow-hidden rounded-[2px] bg-[#EAE1D3] aspect-[4/5]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.045]"
        />
        {badge && <span className="absolute top-3.5 left-3.5">{badge}</span>}
        {favorite && (
          <button
            aria-label="Save"
            onClick={(e) => e.preventDefault()}
            className="absolute top-3 right-3 w-[34px] h-[34px] rounded-full flex items-center justify-center text-[#2B2824] bg-[rgba(250,246,239,0.9)] opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          >
            <Heart size={16} strokeWidth={1.4} />
          </button>
        )}
      </div>
      <div className="pt-4 px-0.5 grid gap-1.5">
        {category && <div className={SANS + " text-[10.5px] uppercase tracking-[0.14em] text-[#766E61]"}>{category}</div>}
        <div className={SERIF + " font-medium text-[21px] leading-[1.18] text-[#2B2824]"}>{name}</div>
        <div className="flex items-baseline gap-2.5 mt-0.5">
          {price && <span className={SANS + " text-[15px] text-[#46413A]"}>{price}</span>}
          {note && <span className={SANS + " text-[13px] text-[#766E61]"}>{note}</span>}
        </div>
      </div>
    </a>
  );
}

export function CollectionTile({ image, eyebrow, title, cta = "Explore", tone = "dark", onClick, className = "", style }) {
  const dark = tone === "dark";
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      style={style}
      className={["group relative flex overflow-hidden rounded-[2px] no-underline isolate", className].join(" ")}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
      />
      <span
        className={[
          "absolute inset-0 z-[1]",
          dark
            ? "bg-[linear-gradient(to_top,rgba(34,31,27,0.62),rgba(34,31,27,0.12)_52%,rgba(34,31,27,0))]"
            : "bg-[linear-gradient(to_top,rgba(250,246,239,0.86),rgba(250,246,239,0.30)_50%,rgba(250,246,239,0))]",
        ].join(" ")}
      />
      <span className="relative z-[2] mt-auto px-[30px] py-[28px] grid gap-2.5">
        {eyebrow && (
          <span className={[SANS, "text-[11px] font-medium uppercase tracking-[0.24em]", dark ? "text-[#B89A6E]" : "text-[#7B6038]"].join(" ")}>
            {eyebrow}
          </span>
        )}
        <span className={[SERIF, "font-medium leading-[1.08] text-[clamp(28px,3vw,40px)]", dark ? "text-[#FAF6EF]" : "text-[#2B2824]"].join(" ")}>
          {title}
        </span>
        {cta && (
          <span
            className={[
              SANS,
              "text-[11px] font-medium uppercase tracking-[0.14em] inline-flex items-center gap-2.5",
              dark ? "text-[#FAF6EF]" : "text-[#2B2824]",
            ].join(" ")}
          >
            {cta}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        )}
      </span>
    </a>
  );
}

/* form controls */
const fieldLabel = SANS + " text-[11px] font-medium uppercase tracking-[0.14em] text-[#766E61]";
const fieldControl =
  SANS +
  " w-full text-[1.0625rem] text-[#2B2824] bg-[#FCFAF6] border border-[#C3B7A1] rounded-[4px] px-4 py-[13px] outline-none transition-colors placeholder:text-[#9C9384] hover:border-[#B89A6E] focus:border-[#9C7C4E] focus:shadow-[0_0_0_1px_#9C7C4E]";

export function Input({ label, required, multiline, hint, className = "", ...rest }) {
  const Control = multiline ? "textarea" : "input";
  return (
    <div className={"grid gap-2.5 " + className}>
      {label && (
        <label className={fieldLabel}>
          {label} {required && <span className="text-[#9C7C4E]">*</span>}
        </label>
      )}
      <Control className={fieldControl + (multiline ? " resize-y min-h-[120px] leading-[1.6]" : "")} {...rest} />
      {hint && <span className={SANS + " text-[13px] text-[#766E61]"}>{hint}</span>}
    </div>
  );
}

export function Select({ label, required, options = [], className = "", ...rest }) {
  return (
    <div className={"grid gap-2.5 " + className}>
      {label && (
        <label className={fieldLabel}>
          {label} {required && <span className="text-[#9C7C4E]">*</span>}
        </label>
      )}
      <div className="relative">
        <select className={fieldControl + " appearance-none pr-10 cursor-pointer"} {...rest}>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#46413A] pointer-events-none" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- *
 * Chrome — Announcement bar, Header (mega menu), Footer, Layout
 * ----------------------------------------------------------------- */

export const NAV = [
  {
    label: "Furniture",
    route: ["collection", "Furniture"],
    cols: [
      { h: "Shop by Category", links: ["Sofas", "Lounge Chairs", "Dining Chairs", "Tables", "Storage", "Beds"] },
      { h: "Shop by Room", links: ["Living Room", "Dining", "Bedroom", "Study", "Outdoor"] },
      { h: "Shop by Material", links: ["Solid Teak", "Mango Wood", "Oak", "Marble & Stone", "Brass"] },
    ],
    quick: ["New Arrivals", "Best Sellers"],
    featured: { img: IMG.furniture, eyebrow: "New Collection", title: "The Marwar Collection" },
  },
  {
    label: "Rugs",
    route: ["collection", "Rugs"],
    cols: [
      { h: "Shop by Construction", links: ["Hand-Knotted", "Hand-Tufted", "Flat-Weave", "Hand-Loomed"] },
      { h: "Shop by Material", links: ["Wool", "Cotton", "Silk", "Chenille", "Jute"] },
      { h: "Shop by Size", links: ["5×8 ft", "6×9 ft", "8×10 ft", "9×12 ft", "Runners", "Round"] },
    ],
    quick: ["Custom Rugs", "Rug Size Guide"],
    featured: { img: IMG.rugs, eyebrow: "Bespoke", title: "Custom Rugs" },
  },
  {
    label: "Lighting",
    route: ["collection", "Lighting"],
    cols: [
      { h: "Shop by Type", links: ["Pendants", "Chandeliers", "Floor Lamps", "Table Lamps", "Flush Mounts"] },
      { h: "Shop by Room", links: ["Living Room", "Dining", "Bedroom", "Entryway"] },
      { h: "Shop by Material", links: ["Brass", "Stone & Marble", "Glass", "Rattan"] },
    ],
    quick: ["New Arrivals", "Best Sellers"],
    featured: { img: IMG.lighting, eyebrow: "Signature", title: "Brass Meridian" },
  },
  {
    label: "Decor",
    route: ["collection", "Decor"],
    cols: [
      { h: "Shop by Category", links: ["Vases & Vessels", "Sculpture", "Mirrors", "Boxes & Trays"] },
      { h: "Textiles", links: ["Cushions", "Throws", "Table Linen"] },
      { h: "Collection", links: ["The Object Library", "Marwar", "Aravalli"] },
    ],
    quick: ["New Arrivals", "Best Sellers"],
    featured: { img: IMG.decor, eyebrow: "Curated", title: "The Object Library" },
  },
  {
    label: "Wall Art",
    route: ["collection", "Wall Art"],
    cols: [
      { h: "Medium", links: ["Original Works", "Limited Prints", "Textile Art", "Photography"] },
      { h: "Format", links: ["Framed", "Canvas", "Diptych & Triptych"] },
      { h: "Shop by Room", links: ["Living Room", "Bedroom", "Study"] },
    ],
    quick: ["Commissioned Works", "New Arrivals"],
    featured: { img: IMG.wallArt, eyebrow: "Gallery", title: "Commissioned Works" },
  },
  {
    label: "Custom & Bespoke",
    route: ["trade", "Custom & Bespoke"],
    cols: [
      { h: "Made to Order", links: ["Custom Furniture", "Custom Rugs", "Custom Upholstery", "Custom Finishes"] },
      { h: "Projects", links: ["Interior Projects", "Hospitality Projects", "Designer Collaborations"] },
      { h: "Start Here", links: ["Made For Your Space", "Speak with a Consultant", "The Atelier"] },
    ],
    quick: ["Customization", "Material Sampling"],
    featured: { img: IMG.craftMain, eyebrow: "Bespoke", title: "Made For Your Space" },
  },
  {
    label: "Trade",
    route: ["trade", "Trade"],
    cols: [
      { h: "Programs", links: ["Designer Program", "Architects", "Hospitality"] },
      { h: "Services", links: ["Customization", "Material Sampling", "Project Procurement"] },
    ],
    featured: { img: IMG.heroTrade, eyebrow: "Trade & Design", title: "For Designers & Architects" },
  },
];

export function AnnounceBar() {
  const items = ["Complimentary design consultation", "Handcrafted in India", "International shipping available"];
  return (
    <div className="bg-[#221F1B] text-[#FAF6EF]">
      <div className={WRAP + " py-[9px] flex justify-center gap-9 text-[11px] uppercase tracking-[0.14em] " + SANS}>
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-9 text-[#B7AE9E]">
            {i > 0 && <span className="opacity-40">·</span>}
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function MegaMenu({ data, onNavigate }) {
  if (!data?.cols) return null;
  const go = (label) => onNavigate && onNavigate("collection", label);
  return (
    <div className="absolute left-0 right-0 top-full bg-[#FAF6EF] border-y border-[#DCD2C1] shadow-[0_2px_4px_rgba(43,40,36,0.04),0_10px_28px_-20px_rgba(43,40,36,0.22)]">
      <div className={WRAP + " py-10 grid"} style={{ gridTemplateColumns: `repeat(${data.cols.length}, 1fr) 1.3fr`, gap: 40 }}>
        {data.cols.map((c) => (
          <div key={c.h}>
            <div className={SANS + " text-[11px] uppercase tracking-[0.24em] text-[#7B6038] mb-[18px]"}>{c.h}</div>
            <ul className="m-0 p-0 grid gap-3 list-none">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      go(l);
                    }}
                    className={SERIF + " text-[19px] text-[#2B2824] no-underline hover:text-[#7B6038] transition-colors"}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {data.featured && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate && onNavigate(...(data.route || ["collection", data.label]));
            }}
            className="self-start no-underline"
          >
            <Figure src={data.featured.img} ratio="4/3" className="w-full">
              <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(34,31,27,0.6),transparent_60%)]" />
              <span className="absolute left-[18px] bottom-4 text-white">
                <span className={SANS + " block text-[10px] uppercase tracking-[0.24em] text-[#B89A6E]"}>{data.featured.eyebrow}</span>
                <span className={SERIF + " block text-[22px] leading-[1.1]"}>{data.featured.title}</span>
                <span className={SANS + " inline-flex items-center gap-1.5 mt-2.5 text-[10.5px] uppercase tracking-[0.14em]"}>
                  Explore <ArrowRight size={12} />
                </span>
              </span>
            </Figure>
          </a>
        )}
      </div>
      {data.quick && (
        <div className="border-t border-[#DCD2C1]">
          <div className={WRAP + " py-4 flex items-center gap-3.5 flex-wrap"}>
            <span className={SANS + " text-[11px] uppercase tracking-[0.24em] text-[#766E61]"}>Discover</span>
            {data.quick.map((q) => (
              <a
                key={q}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  go(q);
                }}
                className={SANS + " text-[12.5px] text-[#46413A] no-underline border border-[#C3B7A1] rounded-full px-[15px] py-[7px] hover:border-[#2B2824] transition-colors"}
              >
                {q}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header({ onNavigate, transparent = false }) {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparent || open;
  const ink = solid ? "text-[#2B2824]" : "text-[#FAF6EF]";

  const navBtn = (label) =>
    [
      SANS,
      "py-1.5 text-xs font-medium uppercase tracking-[0.14em] whitespace-nowrap border-b transition-opacity",
      open === label ? "opacity-100 border-current" : "opacity-90 border-transparent hover:opacity-100",
    ].join(" ");

  return (
    <header
      onMouseLeave={() => setOpen(null)}
      className={[
        "sticky top-0 z-50 transition-colors duration-300",
        solid ? "bg-[#FAF6EF] border-b border-[#DCD2C1]" : "bg-transparent border-b border-transparent",
        ink,
      ].join(" ")}
    >
      <div className={WRAP + " h-[76px] grid grid-cols-[1fr_auto_1fr] items-center"}>
        <nav className="flex gap-[26px] items-center">
          {NAV.slice(0, 5).map((n) => (
            <button
              key={n.label}
              onMouseEnter={() => setOpen(n.label)}
              onClick={() => onNavigate && onNavigate(...n.route)}
              className={navBtn(n.label)}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate && onNavigate("home");
          }}
          className="text-center no-underline leading-none"
          style={{ color: "inherit" }}
        >
          <div className={SERIF + " font-medium text-[26px] tracking-[0.18em] uppercase"}>Art Avenue</div>
          <div className={SANS + " text-[8px] tracking-[0.4em] uppercase mt-[5px] opacity-60"}>Design House</div>
        </a>

        <div className="flex gap-6 items-center justify-end">
          {NAV.slice(5).map((n) => (
            <button
              key={n.label}
              onMouseEnter={() => setOpen(n.label)}
              onClick={() => onNavigate && onNavigate(...n.route)}
              className={navBtn(n.label)}
            >
              {n.label}
            </button>
          ))}
          <span className="w-px h-[18px] bg-current opacity-20" />
          <Search size={20} strokeWidth={1.3} className="cursor-pointer" />
          <User size={20} strokeWidth={1.3} className="cursor-pointer" />
          <ShoppingBag size={20} strokeWidth={1.3} className="cursor-pointer" />
        </div>
      </div>

      {open && <MegaMenu data={NAV.find((n) => n.label === open)} onNavigate={onNavigate} />}
    </header>
  );
}

export function Footer({ onNavigate }) {
  const cols = [
    { h: "Shop", links: ["Furniture", "Rugs", "Lighting", "Decor", "Wall Art", "New Arrivals"] },
    { h: "Discover", links: ["Our Story", "The Atelier", "Journal", "Customer Homes", "Collections"] },
    { h: "Trade", links: ["Designer Program", "Architects", "Hospitality", "Customization", "Request Access"] },
    { h: "Service", links: ["Delivery & Shipping", "Care & Materials", "Returns", "Contact", "Track Order"] },
  ];
  return (
    <footer className="bg-[#221F1B] text-[#FAF6EF]">
      <div className="border-b border-[rgba(250,246,239,0.16)]">
        <div className={WRAP + " " + SECTION_Y_TIGHT + " grid md:grid-cols-2 gap-12 items-center"}>
          <div>
            <Eyebrow tone="on-dark">The Art Avenue Letter</Eyebrow>
            <h3 className={SERIF + " font-medium text-[34px] mt-3.5 leading-[1.1]"}>
              Stories from the atelier, <em className="text-[#B89A6E]">first.</em>
            </h3>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 items-stretch">
            <input
              placeholder="Your email address"
              className={SANS + " flex-1 bg-transparent border border-[rgba(250,246,239,0.16)] rounded-[4px] text-[#FAF6EF] placeholder:text-[#B7AE9E] px-[18px] py-3.5 text-[15px] outline-none focus:border-[#B89A6E]"}
            />
            <Button variant="secondary" onDark>
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className={WRAP + " " + SECTION_Y_TIGHT + " grid grid-cols-2 md:grid-cols-[1.4fr_repeat(4,1fr)] gap-10"}>
        <div className="col-span-2 md:col-span-1">
          <div className={SERIF + " font-medium text-[24px] tracking-[0.16em] uppercase"}>Art Avenue</div>
          <p className={SANS + " max-w-[280px] mt-[18px] text-[#B7AE9E] text-[14px] leading-[1.7]"}>
            A design house curating handcrafted furniture, rugs, lighting and objects — made by hand in India, made to last
            for generations.
          </p>
          <div className="flex gap-[18px] mt-[22px]">
            <Instagram size={19} strokeWidth={1.3} className="cursor-pointer" />
            <Facebook size={19} strokeWidth={1.3} className="cursor-pointer" />
            <Linkedin size={19} strokeWidth={1.3} className="cursor-pointer" />
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className={SANS + " text-[11px] uppercase tracking-[0.24em] text-[#B89A6E] mb-[18px]"}>{c.h}</div>
            <ul className="m-0 p-0 grid gap-[11px] list-none">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate && onNavigate("collection", l);
                    }}
                    className={SANS + " text-[#B7AE9E] no-underline text-[14px] hover:text-[#FAF6EF] transition-colors"}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[rgba(250,246,239,0.16)]">
        <div className={WRAP + " py-5 flex justify-between flex-wrap gap-4 text-[12px] text-[#B7AE9E] tracking-[0.02em] " + SANS}>
          <span>© 2026 Art Avenue Design House · Handcrafted in India</span>
          <span className="flex gap-6">
            {["Privacy", "Terms", "Secure international shipping"].map((l) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()} className="text-inherit no-underline hover:text-[#FAF6EF] transition-colors">
                {l}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

/* Page shell — loads brand fonts, wraps page in announcement bar + header + footer. */
export function Layout({ onNavigate, transparentHeader = false, children }) {
  useEffect(() => {
    const id = "art-avenue-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div className={SANS + " bg-[#FAF6EF] text-[#2B2824] antialiased min-h-screen"}>
      <AnnounceBar />
      <Header onNavigate={onNavigate} transparent={transparentHeader} />
      {children}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export { Check };
