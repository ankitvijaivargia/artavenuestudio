/**
 * Art Avenue — Homepage
 * ------------------------------------------------------------------
 * A faithful, Lovable-ready recreation of the Art Avenue design-house
 * homepage. Stack: React + Tailwind CSS (utility classes only) + Lucide React.
 *
 * • No external CSS files — every style is a Tailwind utility (brand tokens
 *   are inlined as arbitrary values, e.g. bg-[#FAF6EF]).
 * • Brand fonts (Cormorant Garamond + Jost) are loaded from Google Fonts via a
 *   self-contained effect so the component is fully drop-in.
 * • Imagery uses high-quality Unsplash photographs of handcrafted furniture,
 *   rugs and high-end décor. Swap the URLs in IMG for licensed brand photos.
 *
 * Drop this file in as a route/page in a Vite + React + Tailwind project
 * (the Lovable default) and render <ArtAvenueHomepage />.
 */
import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Award,
  PencilRuler,
  Palette,
  Building2,
  Instagram,
  Linkedin,
  Facebook,
  Plus,
} from "lucide-react";

/* ============================================================= *
 * Brand tokens (kept here for reference — applied as Tailwind
 * arbitrary values throughout, e.g. text-[#2B2824]).
 * ------------------------------------------------------------- *
 *  ivory      #FAF6EF   page background
 *  canvas     #F4EEE3   alternating section background
 *  warm-white #FCFAF6   raised surface
 *  stone      #EAE1D3 / sand #DCD1BD / clay #C9BCA4   neutrals
 *  charcoal   #2B2824   primary ink      ink #46413A  secondary
 *  stone-600  #766E61   muted            stone-400 #9C9384 faint
 *  bronze     #9C7C4E   accent           deep #7B6038  soft #B89A6E
 *  bronze-tint#ECE1CE   accent wash
 *  espresso   #221F1B   dark surface     soft #36322B
 *  on-dark    #FAF6EF   on-dark-muted #B7AE9E
 *  border     #DCD2C1   border-strong #C3B7A1
 * ============================================================= */

const SERIF = "font-['Cormorant_Garamond',Georgia,serif]";
const SANS = "font-['Jost',ui-sans-serif,system-ui,sans-serif]";

const WRAP = "max-w-[1320px] mx-auto px-[clamp(20px,5vw,64px)]";
const SECTION_Y = "py-[clamp(64px,9vw,144px)]";
const GAP_CARD = "gap-[clamp(16px,2vw,28px)]";

/* High-quality Unsplash placeholders — handcrafted furniture, rugs, décor.
 * Swap freely for licensed photography. */
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  hero: u("1618220179428-22790b461013", 2000),
  furniture: u("1586023492125-27b2c045efd7"),
  rugs: u("1600166898405-da9535204843"),
  lighting: u("1543198126-a8ad8e47fb22"),
  decor: u("1530018607912-eff2daa1bac4"),
  wallArt: u("1513519245088-0e12902e35ca"),
  craftMain: u("1452860606245-08befc0ff44b"),
  craftA: u("1567538096630-e0c55bd6374c"),
  craftB: u("1532372320572-cda25653a26d"),
  chair: u("1567538096630-e0c55bd6374c"),
  rug: u("1600166898405-da9535204843"),
  pendant: u("1543198126-a8ad8e47fb22"),
  table: u("1532372320572-cda25653a26d"),
  living: u("1524758631624-e2822e304c36"),
  dining: u("1540574163026-643ea20ade25"),
  bedroom: u("1505693416388-ac5ce068fe85"),
  study: u("1416339306562-f3d12fefd36f"),
  outdoor: u("1555041469-a586c61ea9bc"),
  featured: u("1493663284031-b7e3aefcae8e", 2000),
  home1: u("1493663284031-b7e3aefcae8e"),
  home2: u("1538688525198-9b88f6f53126"),
  home3: u("1550226891-ef816aed4a98"),
  home4: u("1524758631624-e2822e304c36"),
  journal1: u("1513519245088-0e12902e35ca"),
  journal2: u("1600166898405-da9535204843"),
  journal3: u("1586023492125-27b2c045efd7"),
};

/* ----------------------------------------------------------------- *
 * Primitives
 * ----------------------------------------------------------------- */

function Eyebrow({ tone = "accent", rule = false, center = false, children, className = "" }) {
  const color =
    tone === "on-dark"
      ? "text-[#B89A6E]"
      : tone === "muted"
      ? "text-[#766E61]"
      : "text-[#7B6038]";
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

function Button({
  variant = "primary",
  onDark = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  onClick,
  className = "",
}) {
  const base =
    SANS +
    " group inline-flex items-center justify-center gap-[10px] font-medium uppercase leading-none cursor-pointer whitespace-nowrap transition-colors duration-300";
  const variants = {
    primary:
      "px-[26px] py-[14px] text-xs tracking-[0.14em] rounded-[4px] bg-[#2B2824] text-[#FAF6EF] hover:bg-[#221F1B]",
    secondary: onDark
      ? "px-[26px] py-[14px] text-xs tracking-[0.14em] rounded-[4px] border border-[rgba(250,246,239,0.22)] text-[#FAF6EF] hover:bg-[#FAF6EF] hover:text-[#2B2824] hover:border-[#FAF6EF]"
      : "px-[26px] py-[14px] text-xs tracking-[0.14em] rounded-[4px] border border-[#C3B7A1] text-[#2B2824] hover:bg-[#2B2824] hover:text-[#FAF6EF] hover:border-[#2B2824]",
    accent:
      "px-[26px] py-[14px] text-xs tracking-[0.14em] rounded-[4px] bg-[#9C7C4E] text-white hover:bg-[#7B6038]",
    ghost:
      "py-[6px] text-xs tracking-[0.14em] gap-2 text-[#7B6038] hover:text-[#7B6038]",
  };
  return (
    <button
      onClick={onClick}
      className={[base, variants[variant], fullWidth ? "w-full" : "", className].join(" ")}
    >
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

/* Image figure with optional italic caption overlay */
function Figure({ src, alt = "", ratio, label, dark = false, className = "", children }) {
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

function SectionHead({ eyebrow, title, intro, center, light, rule }) {
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
            "font-medium mt-[18px] leading-[1.12] tracking-[-0.015em] text-[clamp(2.75rem,5vw,4.5rem)]",
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

function ProductCard({ image, badge, category, name, price, note, onClick }) {
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
        {badge && (
          <span
            className={[
              SANS,
              "absolute top-3.5 left-3.5 inline-flex items-center text-[10.5px] font-medium uppercase tracking-[0.14em] leading-none px-[11px] py-[7px] rounded-[2px] bg-[rgba(250,246,239,0.92)] text-[#2B2824] backdrop-blur-[2px]",
            ].join(" ")}
          >
            {badge}
          </span>
        )}
        <button
          aria-label="Save"
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 w-[34px] h-[34px] rounded-full flex items-center justify-center text-[#2B2824] bg-[rgba(250,246,239,0.9)] opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <Heart size={16} strokeWidth={1.4} />
        </button>
      </div>
      <div className="pt-4 px-0.5 grid gap-1.5">
        {category && (
          <div className={SANS + " text-[10.5px] uppercase tracking-[0.14em] text-[#766E61]"}>
            {category}
          </div>
        )}
        <div className={SERIF + " font-medium text-[21px] leading-[1.18] text-[#2B2824]"}>{name}</div>
        <div className="flex items-baseline gap-2.5 mt-0.5">
          {price && <span className={SANS + " text-[15px] text-[#46413A]"}>{price}</span>}
          {note && <span className={SANS + " text-[13px] text-[#766E61]"}>{note}</span>}
        </div>
      </div>
    </a>
  );
}

function CollectionTile({ image, eyebrow, title, cta = "Explore", tone = "dark", onClick, className = "", style }) {
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
          <span
            className={[
              SANS,
              "text-[11px] font-medium uppercase tracking-[0.24em]",
              dark ? "text-[#B89A6E]" : "text-[#7B6038]",
            ].join(" ")}
          >
            {eyebrow}
          </span>
        )}
        <span
          className={[
            SERIF,
            "font-medium leading-[1.08] text-[clamp(28px,3vw,40px)]",
            dark ? "text-[#FAF6EF]" : "text-[#2B2824]",
          ].join(" ")}
        >
          {title}
        </span>
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
      </span>
    </a>
  );
}

/* ----------------------------------------------------------------- *
 * Chrome — Announcement bar, Header (with mega menu), Footer
 * ----------------------------------------------------------------- */

const NAV = [
  {
    label: "Furniture",
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
    cols: [
      { h: "Programs", links: ["Designer Program", "Architects", "Hospitality"] },
      { h: "Services", links: ["Customization", "Material Sampling", "Project Procurement"] },
    ],
    featured: { img: IMG.craftMain, eyebrow: "Trade & Design", title: "For Designers & Architects" },
  },
];

function AnnounceBar() {
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

function MegaMenu({ data }) {
  if (!data?.cols) return null;
  return (
    <div className="absolute left-0 right-0 top-full bg-[#FAF6EF] border-y border-[#DCD2C1] shadow-[0_2px_4px_rgba(43,40,36,0.04),0_10px_28px_-20px_rgba(43,40,36,0.22)]">
      <div className={WRAP + " py-10 grid"} style={{ gridTemplateColumns: `repeat(${data.cols.length}, 1fr) 1.3fr`, gap: 40 }}>
        {data.cols.map((c) => (
          <div key={c.h}>
            <div className={SANS + " text-[11px] uppercase tracking-[0.24em] text-[#7B6038] mb-[18px]"}>{c.h}</div>
            <ul className="m-0 p-0 grid gap-3 list-none">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" onClick={(e) => e.preventDefault()} className={SERIF + " text-[19px] text-[#2B2824] no-underline hover:text-[#7B6038] transition-colors"}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {data.featured && (
          <a href="#" onClick={(e) => e.preventDefault()} className="self-start no-underline">
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
              <a key={q} href="#" onClick={(e) => e.preventDefault()} className={SANS + " text-[12.5px] text-[#46413A] no-underline border border-[#C3B7A1] rounded-full px-[15px] py-[7px] hover:border-[#2B2824] transition-colors"}>
                {q}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
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
        {/* left nav */}
        <nav className="flex gap-[26px] items-center">
          {NAV.slice(0, 5).map((n) => (
            <button key={n.label} onMouseEnter={() => setOpen(n.label)} className={navBtn(n.label)}>
              {n.label}
            </button>
          ))}
        </nav>

        {/* wordmark */}
        <a href="#" onClick={(e) => e.preventDefault()} className="text-center no-underline leading-none" style={{ color: "inherit" }}>
          <div className={SERIF + " font-medium text-[26px] tracking-[0.18em] uppercase"}>Art Avenue</div>
          <div className={SANS + " text-[8px] tracking-[0.4em] uppercase mt-[5px] opacity-60"}>Design House</div>
        </a>

        {/* right nav + icons */}
        <div className="flex gap-6 items-center justify-end">
          {NAV.slice(5).map((n) => (
            <button key={n.label} onMouseEnter={() => setOpen(n.label)} className={navBtn(n.label)}>
              {n.label}
            </button>
          ))}
          <span className="w-px h-[18px] bg-current opacity-20" />
          <Search size={20} strokeWidth={1.3} className="cursor-pointer" />
          <User size={20} strokeWidth={1.3} className="cursor-pointer" />
          <ShoppingBag size={20} strokeWidth={1.3} className="cursor-pointer" />
        </div>
      </div>

      {open && <MegaMenu data={NAV.find((n) => n.label === open)} />}
    </header>
  );
}

function Footer() {
  const cols = [
    { h: "Shop", links: ["Furniture", "Rugs", "Lighting", "Decor", "Wall Art", "New Arrivals"] },
    { h: "Discover", links: ["Our Story", "The Atelier", "Journal", "Customer Homes", "Collections"] },
    { h: "Trade", links: ["Designer Program", "Architects", "Hospitality", "Customization", "Request Access"] },
    { h: "Service", links: ["Delivery & Shipping", "Care & Materials", "Returns", "Contact", "Track Order"] },
  ];
  return (
    <footer className="bg-[#221F1B] text-[#FAF6EF]">
      {/* newsletter */}
      <div className="border-b border-[rgba(250,246,239,0.16)]">
        <div className={WRAP + " py-[clamp(48px,6vw,88px)] grid md:grid-cols-2 gap-12 items-center"}>
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
            <Button variant="secondary" onDark>Subscribe</Button>
          </form>
        </div>
      </div>

      {/* link columns */}
      <div className={WRAP + " py-[clamp(48px,6vw,88px)] grid grid-cols-2 md:grid-cols-[1.4fr_repeat(4,1fr)] gap-10"}>
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
                  <a href="#" onClick={(e) => e.preventDefault()} className={SANS + " text-[#B7AE9E] no-underline text-[14px] hover:text-[#FAF6EF] transition-colors"}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* trust strip */}
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

/* ----------------------------------------------------------------- *
 * Homepage sections
 * ----------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[620px] flex items-end">
      <img src={IMG.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(34,31,27,0.5),rgba(34,31,27,0.12)_45%,rgba(34,31,27,0.28))]" />
      <div className={WRAP + " relative w-full pb-[clamp(56px,8vh,110px)]"}>
        <div className="max-w-[760px]">
          <Eyebrow tone="on-dark">The Spring Collection · 2026</Eyebrow>
          <h1 className={SERIF + " font-medium text-[#FAF6EF] mt-[22px] leading-[1.04] tracking-[-0.015em] text-[clamp(3.5rem,6.5vw,6.25rem)]"}>
            Crafted spaces,
            <br />
            <em className="text-[#EBD9BE]">collected stories.</em>
          </h1>
          <p className={SANS + " text-[rgba(250,246,239,0.86)] text-[1.1875rem] font-light leading-[1.6] max-w-[480px] mt-6"}>
            Handcrafted furniture, rugs and objects for homes that are made to be lived in — and remembered.
          </p>
          <div className="flex gap-4 mt-9 flex-wrap">
            <Button variant="primary">Explore the Collection</Button>
            <Button variant="secondary" onDark iconRight={<ArrowRight size={16} />}>
              Trade &amp; Design
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signature() {
  const tiles = [
    { eyebrow: "01 — Furniture", title: "Furniture", img: IMG.furniture, span: true },
    { eyebrow: "02 — Rugs", title: "Rugs", img: IMG.rugs },
    { eyebrow: "03 — Lighting", title: "Lighting", img: IMG.lighting },
    { eyebrow: "04 — Decor", title: "Decor", img: IMG.decor, tone: "light" },
    { eyebrow: "05 — Wall Art", title: "Wall Art", img: IMG.wallArt, tone: "light" },
  ];
  return (
    <section className={"bg-[#FAF6EF] " + SECTION_Y}>
      <div className={WRAP}>
        <SectionHead
          eyebrow="Signature Collections"
          title="Five disciplines, one point of view."
          intro="Each category is curated and commissioned in-house — a considered edit rather than an endless catalog."
        />
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[repeat(2,260px)] mt-12 " + GAP_CARD}>
          {tiles.map((t) => (
            <CollectionTile
              key={t.title}
              image={t.img}
              eyebrow={t.eyebrow}
              title={t.title}
              tone={t.tone || "dark"}
              cta="Explore"
              className={t.span ? "md:row-span-2 min-h-[260px]" : "min-h-[260px]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Craft() {
  return (
    <section className={"bg-[#F4EEE3] " + SECTION_Y}>
      <div className={WRAP + " grid md:grid-cols-[1.05fr_1fr] gap-[clamp(40px,6vw,96px)] items-center"}>
        <div className={"grid grid-cols-2 " + GAP_CARD}>
          <Figure src={IMG.craftMain} ratio="3/4" dark label="The maker's hand" className="row-span-2" />
          <Figure src={IMG.craftA} ratio="4/3" />
          <Figure src={IMG.craftB} ratio="4/3" />
        </div>
        <div>
          <SectionHead
            eyebrow="The Atelier"
            title="Made slowly, by hand, to last."
            intro="Every piece begins in the hands of an artisan — turned, joined and finished the way furniture was always meant to be made."
          />
          <ul className="list-none mt-7 p-0 grid gap-3.5">
            {[
              "Workshops across India, partnered for generations",
              "Solid wood, hand-knotted wool, cast brass & stone",
              "Made to order — never mass-produced",
            ].map((t) => (
              <li key={t} className={SANS + " flex gap-3 items-baseline text-[1.0625rem] text-[#46413A]"}>
                <span className="w-[7px] h-[7px] rounded-full bg-[#9C7C4E] flex-none translate-y-[-2px]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-[30px]">
            <Button variant="ghost" iconRight={<ArrowRight size={15} />}>
              Inside the Atelier
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrivals() {
  const products = [
    { category: "Seating", name: "Marwar Lounge Chair", price: "₹ 1,48,000", note: "Made to order", img: IMG.chair, badge: "Handcrafted" },
    { category: "Rugs", name: "Aravalli Hand-Knotted Rug", price: "₹ 2,20,000", img: IMG.rug, badge: "New" },
    { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", note: "Ships in 3 wks", img: IMG.pendant },
    { category: "Tables", name: "Udai Travertine Coffee Table", price: "₹ 96,000", img: IMG.table, badge: "New" },
  ];
  return (
    <section className={"bg-[#FAF6EF] " + SECTION_Y}>
      <div className={WRAP}>
        <div className="flex justify-between items-end flex-wrap gap-5">
          <SectionHead eyebrow="Just Arrived" title="New this season" />
          <Button variant="ghost" iconRight={<ArrowRight size={15} />}>
            View all new
          </Button>
        </div>
        <div className={"grid grid-cols-2 lg:grid-cols-4 mt-11 " + GAP_CARD}>
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  const rooms = [
    { title: "Living Room", img: IMG.living },
    { title: "Dining", img: IMG.dining },
    { title: "Bedroom", img: IMG.bedroom, tone: "light" },
    { title: "Study", img: IMG.study },
    { title: "Outdoor", img: IMG.outdoor },
  ];
  return (
    <section className={"bg-[#F4EEE3] " + SECTION_Y}>
      <div className={WRAP}>
        <SectionHead
          center
          eyebrow="Shop by Room"
          title="Begin with the space."
          intro="See how our pieces live together — then make the room your own."
        />
      </div>
      <div className="flex gap-0.5 mt-12 overflow-hidden flex-col sm:flex-row">
        {rooms.map((r) => (
          <CollectionTile
            key={r.title}
            image={r.img}
            title={r.title}
            tone={r.tone || "dark"}
            cta="Shop the room"
            className="flex-1 min-h-[440px] rounded-none"
          />
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="relative min-h-[620px] flex items-center">
      <img src={IMG.featured} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,31,27,0.74),rgba(34,31,27,0.25)_60%,transparent)]" />
      <div className={WRAP + " relative w-full"}>
        <div className="max-w-[520px]">
          <Eyebrow tone="on-dark" rule>
            The Featured Collection
          </Eyebrow>
          <h2 className={SERIF + " font-medium text-[#FAF6EF] mt-5 leading-[1.06] tracking-[-0.015em] text-[clamp(2.75rem,5vw,4.5rem)]"}>
            The Marwar Collection
          </h2>
          <p className={SANS + " text-[rgba(250,246,239,0.84)] text-[1.1875rem] font-light leading-[1.7] mt-5"}>
            An ode to the courtyards of Rajasthan — low silhouettes, hand-carved frames, and the deep warmth of aged teak
            and brass.
          </p>
          <div className="mt-[34px]">
            <Button variant="secondary" onDark iconRight={<ArrowRight size={16} />}>
              Explore the Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trade() {
  const perks = [
    { icon: <Award size={30} strokeWidth={1.2} />, h: "Trade Pricing", t: "Member pricing across every collection, with dedicated account support." },
    { icon: <PencilRuler size={30} strokeWidth={1.2} />, h: "Customization", t: "Bespoke dimensions, finishes and materials for your projects." },
    { icon: <Palette size={30} strokeWidth={1.2} />, h: "Sampling", t: "Material and finish samples shipped to your studio." },
    { icon: <Building2 size={30} strokeWidth={1.2} />, h: "Project & Bulk", t: "Procurement and delivery logistics for residential & hospitality." },
  ];
  return (
    <section className={"bg-[#221F1B] text-[#FAF6EF] " + SECTION_Y}>
      <div className={WRAP}>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <SectionHead light eyebrow="Trade & Design Program" title="For designers & architects." />
          <p className={SANS + " text-[1.1875rem] font-light leading-[1.7] text-[#B7AE9E]"}>
            We partner with interior designers, architects and hospitality buyers to source with confidence — from a single
            statement piece to an entire property.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-14 bg-[rgba(250,246,239,0.16)] border border-[rgba(250,246,239,0.16)]">
          {perks.map((p) => (
            <div key={p.h} className="bg-[#221F1B] px-7 py-[34px]">
              <span className="text-[#B89A6E] inline-flex">{p.icon}</span>
              <h4 className={SERIF + " font-medium text-[22px] mt-5 mb-2.5"}>{p.h}</h4>
              <p className={SANS + " text-[14px] leading-[1.65] text-[#B7AE9E]"}>{p.t}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button variant="accent">Request Trade Access</Button>
        </div>
      </div>
    </section>
  );
}

function Homes() {
  const imgs = [
    { img: IMG.home1, label: "@studio.kohl" },
    { img: IMG.home2, label: "@thebandracs" },
    { img: IMG.home3, label: "@maison.rao" },
    { img: IMG.home4, label: "@verandah.co" },
  ];
  return (
    <section className={"bg-[#FAF6EF] " + SECTION_Y}>
      <div className={WRAP}>
        <SectionHead
          center
          eyebrow="Customer Homes"
          title="Lived in, beautifully."
          intro="Real spaces, shared by the homeowners and designers who made them. Tag #ArtAvenueAtHome."
        />
      </div>
      <div className={WRAP + " mt-12 grid grid-cols-2 md:grid-cols-4 " + GAP_CARD}>
        {imgs.map((m) => (
          <Figure key={m.label} src={m.img} ratio="1/1" label={m.label} dark />
        ))}
      </div>
    </section>
  );
}

function Journal() {
  const posts = [
    { cat: "Styling", title: "How to layer a living room like a designer", read: "6 min", img: IMG.journal1 },
    { cat: "Materials", title: "Why hand-knotted wool ages so beautifully", read: "4 min", img: IMG.journal2 },
    { cat: "At Home", title: "Inside a Bandra apartment, restored", read: "8 min", img: IMG.journal3 },
  ];
  return (
    <section className={"bg-[#F4EEE3] " + SECTION_Y}>
      <div className={WRAP}>
        <div className="flex justify-between items-end flex-wrap gap-5">
          <SectionHead eyebrow="The Journal" title="Design notes & stories" />
          <Button variant="ghost" iconRight={<ArrowRight size={15} />}>
            Read the Journal
          </Button>
        </div>
        <div className={"grid md:grid-cols-3 mt-11 " + GAP_CARD}>
          {posts.map((p) => (
            <a key={p.title} href="#" onClick={(e) => e.preventDefault()} className="group no-underline text-inherit">
              <Figure src={p.img} ratio="3/2" />
              <div className={SANS + " mt-[18px] flex gap-3 items-center text-[11px] uppercase tracking-[0.14em] text-[#766E61]"}>
                <span className="text-[#7B6038]">{p.cat}</span>
                <span>·</span>
                <span>{p.read} read</span>
              </div>
              <h3 className={SERIF + " font-medium text-[24px] leading-[1.2] mt-3 max-w-[92%]"}>{p.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="bg-[#FAF6EF] py-[clamp(70px,10vw,158px)] text-center">
      <div className="max-w-[920px] mx-auto px-[clamp(20px,5vw,64px)]">
        <Eyebrow tone="accent" center rule>
          Art Avenue
        </Eyebrow>
        <p className={SERIF + " font-medium text-[clamp(28px,3.6vw,48px)] leading-[1.18] tracking-[-0.015em] text-[#2B2824] mt-[26px] [text-wrap:balance]"}>
          We are not a furniture store. We are a design house — curating the handcrafted, the considered, and the
          made-to-last, so your home can hold its stories for generations.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- *
 * Page
 * ----------------------------------------------------------------- */

export default function ArtAvenueHomepage() {
  // Self-contained brand font loading (no external CSS file required).
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
      <Header />
      <main>
        <Hero />
        <Signature />
        <Craft />
        <Arrivals />
        <Rooms />
        <Featured />
        <Trade />
        <Homes />
        <Journal />
        <Statement />
      </main>
      <Footer />
    </div>
  );
}
