/**
 * Art Avenue — Collection page (discovery + merchandising)
 * React + Tailwind (utilities only) + Lucide React. Imports ./shared.
 */
import React, { useState } from "react";
import {
  SERIF,
  SANS,
  WRAP,
  SECTION_Y,
  SECTION_Y_TIGHT,
  GAP_CARD,
  IMG,
  PRODUCT_IMGS,
  Eyebrow,
  Button,
  SectionHead,
  ProductCard,
  CollectionTile,
  CommerceBadge,
  Select,
  Layout,
} from "./shared";
import { Plus, Minus, SlidersHorizontal, Ruler, ArrowRight, X, Check } from "lucide-react";

const PRODUCTS = [
  { category: "Seating", name: "Marwar Lounge Chair", price: "₹ 1,48,000", note: "Made to order", commerce: "made-to-order" },
  { category: "Seating", name: "Kashi Linen Sofa", price: "₹ 3,20,000", commerce: "made-to-order" },
  { category: "Tables", name: "Udai Travertine Coffee Table", price: "₹ 96,000", commerce: "in-stock" },
  { category: "Seating", name: "Pichola Cane Armchair", price: "₹ 84,000", note: "Ships in 3 wks", commerce: "in-stock" },
  { category: "Storage", name: "Jodha Carved Sideboard", price: "₹ 2,60,000", commerce: "customizable" },
  { category: "Tables", name: "Amer Marble Dining Table", price: "₹ 4,10,000", commerce: "customizable" },
  { category: "Seating", name: "Bagh Lounge Daybed", price: "Project pricing", commerce: "project" },
  { category: "Storage", name: "Mehrangarh Bar Cabinet", price: "₹ 1,96,000", note: "Made to order", commerce: "made-to-order" },
  { category: "Tables", name: "Chittor Nesting Tables", price: "₹ 72,000", commerce: "in-stock" },
  { category: "Cushions", name: "Sanganeri Block-Print Cushion", price: "from ₹ 3,200", commerce: "made-to-order" },
];
const imgFor = (i) => PRODUCT_IMGS[i % PRODUCT_IMGS.length];

const ROOMS = [
  { t: "Living Room", img: IMG.living },
  { t: "Dining", img: IMG.dining },
  { t: "Bedroom", img: IMG.bedroom, light: true },
  { t: "Study", img: IMG.study },
  { t: "Outdoor", img: IMG.outdoor },
];

function FilterGroup({ title, options, type = "check", defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#DCD2C1] py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className={SANS + " w-full flex justify-between items-center text-[11px] font-medium uppercase tracking-[0.24em] text-[#2B2824]"}
      >
        {title}
        {open ? <Minus size={13} className="text-[#766E61]" /> : <Plus size={13} className="text-[#766E61]" />}
      </button>
      {open && (
        <ul className="list-none mt-4 p-0 grid gap-3">
          {options.map((o) => (
            <li key={o.label}>
              <label className={SANS + " flex items-center gap-2.5 cursor-pointer text-[14px] text-[#46413A]"}>
                <span
                  className={[
                    "w-[15px] h-[15px] inline-flex items-center justify-center border",
                    type === "radio" ? "rounded-full" : "rounded-[2px]",
                    o.on ? "bg-[#9C7C4E] border-[#9C7C4E]" : "border-[#C3B7A1]",
                  ].join(" ")}
                >
                  {o.on && <Check size={9} className="text-white" strokeWidth={3} />}
                </span>
                <span className="flex-1">{o.label}</span>
                {o.count != null && <span className="text-[#9C9384] text-[12px]">{o.count}</span>}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Sidebar({ isRug }) {
  return (
    <aside className="sticky top-[96px] self-start">
      <div className="flex justify-between items-baseline pb-1">
        <span className={SERIF + " text-[22px] font-medium"}>Filter</span>
        <button className={SANS + " text-[12px] text-[#7B6038] tracking-[0.04em]"}>Clear all</button>
      </div>
      {isRug ? (
        <>
          <FilterGroup title="Size" options={[{ label: "5×8 ft", count: 22 }, { label: "6×9 ft", count: 18, on: true }, { label: "8×10 ft", count: 14 }, { label: "9×12 ft", count: 9 }, { label: "Runner", count: 11 }, { label: "Round", count: 7 }]} />
          <FilterGroup title="Material" options={[{ label: "Hand-Knotted Wool", count: 26 }, { label: "Flatweave", count: 14 }, { label: "Jute & Natural", count: 12 }, { label: "Cotton", count: 9 }, { label: "Silk Blend", count: 5 }]} />
          <FilterGroup title="Colour" options={[{ label: "Ivory & Sand", count: 19 }, { label: "Charcoal", count: 12 }, { label: "Terracotta", count: 8 }, { label: "Indigo", count: 6 }]} />
          <FilterGroup title="Pattern" defaultOpen={false} options={[{ label: "Solid", count: 14 }, { label: "Geometric", count: 16 }, { label: "Botanical", count: 9 }, { label: "Abstract", count: 7 }]} />
        </>
      ) : (
        <>
          <FilterGroup title="Category" options={[{ label: "Seating", count: 42, on: true }, { label: "Tables", count: 28 }, { label: "Storage", count: 19 }, { label: "Beds", count: 11 }]} />
          <FilterGroup title="Material" options={[{ label: "Solid Teak", count: 31 }, { label: "Oak", count: 22 }, { label: "Cane & Rattan", count: 14 }, { label: "Marble & Stone", count: 9 }, { label: "Brass", count: 7 }]} />
          <FilterGroup title="Availability" type="radio" options={[{ label: "In stock", count: 38 }, { label: "Made to order", count: 64, on: true }]} />
          <FilterGroup title="Price" type="radio" defaultOpen={false} options={[{ label: "Under ₹ 1,00,000" }, { label: "₹ 1,00,000 – ₹ 2,50,000" }, { label: "₹ 2,50,000 +" }]} />
        </>
      )}
    </aside>
  );
}

function FacetRow({ label, options }) {
  return (
    <div className="mt-[26px]">
      <div className={SANS + " text-[11px] uppercase tracking-[0.24em] text-[#7B6038] mb-3.5"}>{label}</div>
      <div className="flex gap-2.5 flex-wrap">
        {options.map((o) => (
          <button key={o} className={SANS + " px-[18px] py-[9px] rounded-full text-[13px] tracking-[0.02em] text-[#46413A] border border-[#C3B7A1] hover:border-[#2B2824] transition-colors"}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function ShopByTiles({ label, items, go }) {
  return (
    <div className="mt-[30px]">
      <div className={SANS + " text-[11px] uppercase tracking-[0.24em] text-[#7B6038] mb-4"}>{label}</div>
      <div className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 " + GAP_CARD}>
        {items.map((it) => (
          <CollectionTile key={it.t} image={it.img} title={it.t} tone={it.light ? "light" : "dark"} cta="" onClick={() => go("collection", it.t)} className="min-h-[170px] rounded-[2px]" />
        ))}
      </div>
    </div>
  );
}

function EditTabs() {
  const tabs = ["New Arrivals", "Best Sellers", "Designer Favourites", "Trending Now"];
  const [active, setActive] = useState(0);
  return (
    <div className="flex gap-7 border-b border-[#DCD2C1] mb-8 flex-wrap">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => setActive(i)}
          className={[
            SANS,
            "pb-3.5 -mb-px text-xs font-medium uppercase tracking-[0.14em] border-b-2",
            active === i ? "text-[#2B2824] border-[#9C7C4E]" : "text-[#766E61] border-transparent",
          ].join(" ")}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

function RugGuide({ open, onClose }) {
  const rooms = [
    { h: "Living Room", t: "Front legs of the sofa & chairs rest on the rug; leave 20–25 cm of floor around the edges.", z: "8×10 ft / 9×12 ft" },
    { h: "Dining Room", t: "Extend ~60 cm beyond the table so chairs stay on the rug when pulled out.", z: "8×10 ft (6-seat) · 9×12 ft (8-seat)" },
    { h: "Bedroom", t: "Two-thirds under the bed with a soft border to step onto, or runners either side.", z: "8×10 ft (queen) · 9×12 ft (king)" },
    { h: "Runners & Hallways", t: "Leave 10–15 cm of floor on each side; a runner ~50 cm narrower than the corridor.", z: "2.5×8 ft / 2.5×10 ft" },
  ];
  return (
    <>
      <div
        onClick={onClose}
        className={["fixed inset-0 bg-[rgba(34,31,27,0.46)] transition-opacity duration-300 z-[80]", open ? "opacity-100" : "opacity-0 pointer-events-none"].join(" ")}
      />
      <div
        className={[
          "fixed top-0 right-0 bottom-0 w-[min(480px,92vw)] bg-[#FAF6EF] z-[81] overflow-y-auto shadow-[0_30px_80px_-32px_rgba(43,40,36,0.4)] px-8 pt-[30px] pb-[60px] transition-transform duration-[560ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
          open ? "translate-x-0" : "translate-x-[101%]",
        ].join(" ")}
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-[18px] right-[22px] text-[#2B2824]">
          <X size={22} strokeWidth={1.3} />
        </button>
        <Eyebrow tone="accent">Rug Size Guide</Eyebrow>
        <h3 className={SERIF + " font-medium text-[30px] mt-3 mb-2"}>Choosing the right size</h3>
        <p className={SANS + " text-[14.5px] leading-[1.65] text-[#46413A] mb-2"}>
          The most common mistake is going too small. A rug should sit under the main furniture and anchor the
          arrangement — not float in the middle of the room.
        </p>
        {rooms.map((r) => (
          <div key={r.h} className="border-t border-[#DCD2C1] py-4">
            <h4 className={SERIF + " font-medium text-[18px] mb-1.5"}>{r.h}</h4>
            <p className={SANS + " text-[14px] leading-[1.6] text-[#46413A]"}>{r.t}</p>
            <span className={SANS + " inline-block mt-1.5 text-[12px] font-semibold tracking-[0.04em] text-[#7B6038]"}>Recommended · {r.z}</span>
          </div>
        ))}
        <div className="bg-[#ECE1CE] rounded-[2px] px-[18px] py-4 mt-[18px]">
          <div className={SANS + " text-[11px] uppercase tracking-[0.24em] text-[#7B6038] mb-2"}>Cotton vs Chenille</div>
          <p className={SANS + " text-[13.5px] leading-[1.6] text-[#46413A]"}>
            <strong className="text-[#2B2824] font-semibold">Cotton</strong> — crisp, breathable, easy-care; best for
            low-traffic &amp; layering. <strong className="text-[#2B2824] font-semibold">Super-Soft Chenille</strong> —
            plush, denser, more durable; best for living rooms &amp; bedrooms.
          </p>
        </div>
      </div>
    </>
  );
}

export default function CollectionPage({ onNavigate, title }) {
  const go = onNavigate || (() => {});
  const heading = title && title !== "Furniture" ? title : "Furniture";
  const isRug = /rug/i.test(heading);
  const [guide, setGuide] = useState(false);

  const toolbarBtn = SANS + " flex items-center gap-2 border border-[#C3B7A1] rounded-[4px] px-3.5 py-[9px] text-[11px] uppercase tracking-[0.14em] text-[#2B2824] hover:border-[#2B2824] transition-colors";

  return (
    <Layout onNavigate={go} transparentHeader>
      <main className="bg-[#FAF6EF]">
        <RugGuide open={guide} onClose={() => setGuide(false)} />

        {/* Collection hero */}
        <section className="relative h-[420px] flex items-center text-center">
          <img src={IMG.heroCollection} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(34,31,27,0.5),rgba(34,31,27,0.3))]" />
          <div className="relative max-w-[720px] mx-auto px-[clamp(20px,5vw,64px)]">
            <Eyebrow tone="on-dark" center>
              {isRug ? "The Rug Atelier" : "Signature Collection"}
            </Eyebrow>
            <h1 className={SERIF + " font-medium text-[#FAF6EF] text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.05] mt-4"}>{heading}</h1>
            <p className={SANS + " text-[rgba(250,246,239,0.84)] text-[1.1875rem] font-light leading-[1.6] mt-4"}>
              {isRug
                ? "Hand-knotted, flatweave and natural-fibre rugs — dyed and woven by hand to ground a room for a generation."
                : "Hand-built seating, tables and storage in solid wood, cane and stone — designed to anchor a room for decades."}
            </p>
            {isRug && (
              <div className="mt-[26px] flex justify-center">
                <Button variant="secondary" onDark iconRight={<ArrowRight size={16} />} onClick={() => setGuide(true)}>
                  Need Help Choosing a Rug Size?
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Shop by — merchandising */}
        <section className={WRAP + " pt-[clamp(48px,6vw,88px)]"}>
          <div className="max-w-[640px]">
            <Eyebrow tone="accent" rule>
              Begin Your Edit
            </Eyebrow>
            <h2 className={SERIF + " font-medium text-[clamp(1.85rem,2.8vw,2.5rem)] leading-[1.1] mt-3.5"}>Shop the way you design.</h2>
          </div>
          {isRug ? (
            <>
              <FacetRow label="Shop by Size" options={["3×5", "4×6", "5×8", "6×9", "8×10", "9×12", "Runner", "Round"]} />
              <ShopByTiles label="Shop by Room" items={ROOMS} go={go} />
              <FacetRow label="Shop by Material" options={["Hand-Knotted Wool", "Flatweave", "Jute & Natural", "Cotton", "Silk Blend"]} />
              <FacetRow label="Shop by Colour" options={["Ivory & Sand", "Charcoal", "Terracotta", "Indigo", "Olive"]} />
            </>
          ) : (
            <>
              <ShopByTiles label="Shop by Room" items={ROOMS} go={go} />
              <FacetRow label="Shop by Style" options={["Contemporary", "Classic", "Cane & Rattan", "Hand-Carved", "Minimal"]} />
              <FacetRow label="Shop by Material" options={["Solid Teak", "Mango Wood", "Oak", "Marble & Stone", "Brass"]} />
            </>
          )}
        </section>

        {/* Toolbar */}
        <div className="border-y border-[#DCD2C1] sticky top-[76px] bg-[#FAF6EF] z-20 mt-[clamp(48px,6vw,88px)]">
          <div className={WRAP + " flex justify-between items-center h-16"}>
            <span className={SANS + " text-[13px] text-[#766E61] tracking-[0.02em]"}>136 pieces</span>
            <div className="flex items-center gap-4">
              {isRug && (
                <button onClick={() => setGuide(true)} className={toolbarBtn}>
                  <Ruler size={14} /> Rug Size Guide
                </button>
              )}
              <button className={toolbarBtn}>
                <SlidersHorizontal size={14} /> Filters
              </button>
              <div className="min-w-[220px] hidden sm:block">
                <Select options={["Sort: Featured", "Newest", "Price: Low to High", "Price: High to Low"]} />
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className={WRAP + " pt-12 pb-[clamp(64px,9vw,144px)] grid lg:grid-cols-[248px_1fr] gap-12 items-start"}>
          <div className="hidden lg:block">
            <Sidebar isRug={isRug} />
          </div>
          <div>
            <EditTabs />
            <div className={"grid grid-cols-2 md:grid-cols-3 " + GAP_CARD}>
              {PRODUCTS.slice(0, 6).map((p, i) => (
                <ProductCard
                  key={p.name}
                  image={imgFor(i)}
                  category={p.category}
                  name={p.name}
                  price={p.price}
                  note={p.note}
                  badge={p.commerce ? <CommerceBadge state={p.commerce} /> : null}
                  onClick={() => go("product", p.name)}
                />
              ))}
            </div>

            {/* Room inspiration banner */}
            <div className={"my-[clamp(16px,2vw,28px)]"}>
              <CollectionTile
                image={IMG.living}
                tone="dark"
                eyebrow="Room Inspiration"
                title={isRug ? "The layered living room" : "The slow-living living room"}
                cta="Shop the look"
                onClick={() => go("collection", "Living Room")}
                className="min-h-[320px]"
              />
            </div>

            <div className={"grid grid-cols-2 md:grid-cols-3 " + GAP_CARD}>
              {PRODUCTS.slice(6).map((p, i) => (
                <ProductCard
                  key={p.name}
                  image={imgFor(i + 6)}
                  category={p.category}
                  name={p.name}
                  price={p.price}
                  note={p.note}
                  badge={p.commerce ? <CommerceBadge state={p.commerce} /> : null}
                  onClick={() => go("product", p.name)}
                />
              ))}
            </div>

            <div className="text-center mt-14">
              <Button variant="secondary">Load more</Button>
            </div>
          </div>
        </div>

        {/* Related collections */}
        <section className={"bg-[#F4EEE3] " + SECTION_Y}>
          <div className={WRAP}>
            <Eyebrow tone="accent" rule>
              Continue Exploring
            </Eyebrow>
            <div className={"grid md:grid-cols-3 mt-8 " + GAP_CARD}>
              {[
                { t: "Rugs", img: IMG.rugs },
                { t: "Lighting", img: IMG.lighting },
                { t: "Decor", img: IMG.decor, light: true },
              ].map((c) => (
                <CollectionTile key={c.t} image={c.img} title={c.t} tone={c.light ? "light" : "dark"} cta="Explore" onClick={() => go("collection", c.t)} className="min-h-[300px]" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
