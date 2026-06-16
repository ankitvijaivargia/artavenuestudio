/**
 * Art Avenue — Product page (conversion-optimized PDP)
 * React + Tailwind (utilities only) + Lucide React. Imports ./shared.
 *
 * Models a made-to-order luxury furniture SKU (the Marwar Lounge Chair):
 * gallery + sticky configurator, fulfillment + trust, material/finish/
 * upholstery options, sample requests, and the full set of PDP modules
 * (assembly, why-you'll-love-it, made-for-your-space, complete-the-room,
 * FAQ, recently viewed) plus a scroll-triggered sticky buy bar.
 */
import React, { useState, useEffect } from "react";
import {
  SERIF,
  SANS,
  WRAP,
  SECTION_Y,
  GAP_CARD,
  IMG,
  Eyebrow,
  Button,
  Figure,
  ProductCard,
  Layout,
} from "./shared";
import {
  Plus,
  Minus,
  Check,
  ArrowRight,
  Heart,
  MessageCircle,
  Clock,
  Truck,
  Globe,
  Hammer,
  Scissors,
  Paintbrush,
  Palette,
} from "lucide-react";

const inr = (n) => "₹ " + n.toLocaleString("en-IN");
const WA = "919828060095";
const waHref = (msg) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);

/* ---- small building blocks ---- */
function Accordion({ items, start = 0 }) {
  const [open, setOpen] = useState(start);
  return (
    <div className="mt-2 border-t border-[#DCD2C1]">
      {items.map((it, i) => (
        <div key={it.h} className="border-b border-[#DCD2C1]">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center py-[18px] text-left">
            <span className={SERIF + " text-[19px] font-medium text-[#2B2824]"}>{it.h}</span>
            {open === i ? <Minus size={14} className="text-[#766E61]" /> : <Plus size={14} className="text-[#766E61]" />}
          </button>
          {open === i && <div className={SANS + " pb-5 text-[15px] leading-[1.72] text-[#46413A] max-w-[62ch]"}>{it.body}</div>}
        </div>
      ))}
    </div>
  );
}

function OptionRow({ label, value, children }) {
  return (
    <div className="mt-6">
      <div className={SANS + " flex justify-between text-[11px] uppercase tracking-[0.14em] text-[#766E61]"}>
        <span>{label}</span>
        {value && <span className="text-[#46413A]">{value}</span>}
      </div>
      <div className="flex gap-2.5 mt-3 flex-wrap">{children}</div>
    </div>
  );
}
function Chip({ on, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={[
        SANS,
        "px-4 py-[9px] rounded-[4px] text-[13px] tracking-[0.02em] border transition-colors",
        on ? "bg-[#ECE1CE] text-[#7B6038] border-[#9C7C4E]" : "text-[#46413A] border-[#C3B7A1] hover:border-[#46413A]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
function Dot({ color, on, onClick, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="w-[38px] h-[38px] rounded-full border border-[#DCD2C1] p-0"
      style={{ background: color, outline: on ? "1.5px solid #9C7C4E" : "1.5px solid transparent", outlineOffset: 3 }}
    />
  );
}

function StickyBar({ name, price }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={[
        "fixed left-0 right-0 bottom-0 z-[55] bg-[#FCFAF6] border-t border-[#DCD2C1] shadow-[0_-8px_24px_-16px_rgba(43,40,36,0.4)] transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        show ? "translate-y-0" : "translate-y-[110%]",
      ].join(" ")}
    >
      <div className={WRAP + " flex items-center gap-[18px] py-3"}>
        <div className="flex-1 min-w-0 flex items-baseline gap-3.5">
          <span className={SERIF + " text-[19px] whitespace-nowrap overflow-hidden text-ellipsis"}>{name}</span>
          <span className={SERIF + " text-[18px] text-[#46413A]"}>{price}</span>
        </div>
        <a href={waHref(`Consult about ${name}`)} target="_blank" rel="noopener noreferrer" className="no-underline">
          <Button variant="secondary" iconLeft={<MessageCircle size={16} />}>
            Consult
          </Button>
        </a>
        <Button variant="primary">Add to Cart</Button>
      </div>
    </div>
  );
}

function TrustBlock({ items }) {
  return (
    <ul className="list-none mt-5 pt-[18px] border-t border-[#DCD2C1] grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-[11px]">
      {items.map((t, i) => (
        <li key={i} className={SANS + " flex gap-2.5 items-start text-[13px] leading-[1.42] text-[#46413A]"}>
          <Check size={13} className="text-[#7B6038] mt-[3px] flex-none" strokeWidth={2.5} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function FulfillmentBar() {
  return (
    <div className="mt-[18px] px-[17px] py-[15px] rounded-[4px] border border-[#DCD2C1] bg-[#FCFAF6]">
      <div className="flex items-center gap-3 flex-wrap">
        <span className={SANS + " inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ECE1CE] border border-[#B89A6E] text-[#7B6038] text-[12px] tracking-[0.02em]"}>
          <Hammer size={14} className="text-[#7B6038]" /> Made to Order
        </span>
        <span className={SANS + " inline-flex items-center gap-1.5 text-[12.5px] text-[#46413A]"}>
          <Clock size={15} className="text-[#7B6038]" /> Crafted in 3–4 weeks
        </span>
      </div>
      <p className={SANS + " text-[13.5px] leading-[1.6] text-[#46413A] mt-[11px]"}>
        Crafted by hand to order — made for you once you order, and delivered in 3–4 weeks.
      </p>
    </div>
  );
}

/* ---- PDP module sections ---- */
function AssemblyBand() {
  return (
    <section className="bg-[#F4EEE3] py-[clamp(48px,6vw,88px)]">
      <div className={WRAP + " grid md:grid-cols-[1.3fr_auto] gap-[clamp(28px,4vw,64px)] items-center"}>
        <div className="max-w-[60ch]">
          <Eyebrow tone="accent">Delivery &amp; Assembly</Eyebrow>
          <h3 className={SERIF + " font-medium text-[clamp(1.4rem,1.8vw,1.75rem)] leading-[1.12] mt-3.5"}>Need assembly assistance?</h3>
          <p className={SANS + " text-[15px] leading-[1.7] text-[#46413A] mt-3"}>
            Most pieces arrive securely packed and ready to use. Some larger items may require simple assembly after
            delivery — for these, assembly or installation support may be available depending on the product and your
            location. We recommend speaking with us before you order so we can confirm what your piece needs.
          </p>
        </div>
        <a href={waHref("Assembly question")} target="_blank" rel="noopener noreferrer" className="no-underline whitespace-nowrap">
          <Button variant="secondary" iconLeft={<MessageCircle size={16} className="text-[#7B6038]" />}>
            Speak with a Design Consultant
          </Button>
        </a>
      </div>
    </section>
  );
}

function WhyLoveIt() {
  const points = [
    { h: "Handcrafted by skilled artisans", t: "Carved, joined and finished by hand in our workshops — never mass-produced." },
    { h: "Built from carefully selected materials", t: "Kiln-dried hardwoods and natural textiles, chosen to last decades." },
    { h: "Designed to age beautifully", t: "Oil-rubbed finishes and honest joinery gain character with the years." },
    { h: "Made for everyday living", t: "Generous, comfortable proportions drawn for real homes, not showrooms." },
    { h: "Naturally one of a kind", t: "Grain, tone and hand-finish vary gently from piece to piece." },
  ];
  return (
    <section className={"bg-[#FAF6EF] border-t border-[#DCD2C1] " + SECTION_Y}>
      <div className={WRAP + " grid md:grid-cols-[0.82fr_1.18fr] gap-[clamp(40px,6vw,90px)] items-center"}>
        <Figure src={IMG.craftMain} ratio="4/5" dark label="Joinery, by hand" />
        <div>
          <Eyebrow tone="accent" rule>
            Why You'll Love It
          </Eyebrow>
          <h2 className={SERIF + " font-medium text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.1] tracking-[-0.015em] mt-4"}>A piece made to be lived with.</h2>
          <p className={SANS + " text-[1.0625rem] leading-[1.72] text-[#46413A] mt-4 max-w-[58ch]"}>
            Every Art Avenue piece begins as raw timber and the hands of the people who shape it. This is furniture built
            slowly, to be kept.
          </p>
          <ul className="list-none mt-7 p-0">
            {points.map((p, i) => (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-x-[18px] items-baseline py-4 border-t border-[#DCD2C1]">
                <span className={SERIF + " italic text-[16px] text-[#7B6038] w-[26px]"}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className={SERIF + " text-[20px] font-medium text-[#2B2824] leading-[1.25]"}>{p.h}</div>
                  <div className={SANS + " text-[14.5px] leading-[1.6] text-[#46413A] mt-1 max-w-[60ch]"}>{p.t}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MadeForYourSpace() {
  const opts = [
    "Custom dimensions to suit your room",
    "Bespoke finishes & wood tones",
    "Your own upholstery (COM) welcomed",
    "Configurations for living, dining & bedroom",
  ];
  return (
    <section className={"bg-[#221F1B] text-[#FAF6EF] " + SECTION_Y}>
      <div className={WRAP + " grid md:grid-cols-[1.05fr_0.95fr] gap-[clamp(40px,6vw,96px)] items-center"}>
        <div>
          <Eyebrow tone="on-dark">Made For Your Space</Eyebrow>
          <h2 className={SERIF + " font-medium text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.06] tracking-[-0.015em] mt-[18px]"}>
            Most pieces can be <em className="text-[#B89A6E]">made to suit.</em>
          </h2>
          <p className={SANS + " text-[1.1875rem] leading-[1.7] text-[#B7AE9E] mt-[18px] max-w-[46ch]"}>
            Available in additional sizes, finishes and materials depending on the piece. Tell us about your room and how
            you live, and a design consultant will shape it with you — well before you order.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-7">
            <a href={waHref("Customize the Marwar Lounge Chair")} target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button variant="primary" iconLeft={<MessageCircle size={16} />}>
                Speak with a Design Consultant
              </Button>
            </a>
          </div>
        </div>
        <ul className="list-none m-0 p-0 border-t border-[rgba(250,246,239,0.16)]">
          {opts.map((o) => (
            <li key={o} className={SANS + " flex gap-3.5 items-center py-4 border-b border-[rgba(250,246,239,0.16)] text-[15.5px] text-[#FAF6EF]"}>
              <Plus size={14} className="text-[#B89A6E] flex-none" /> {o}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ProductPage({ onNavigate, name }) {
  const go = onNavigate || (() => {});
  const pname = name && name !== "true" ? name : "Marwar Lounge Chair";

  const sizes = [
    { k: "std", label: "Standard", add: 0 },
    { k: "grand", label: "Grand", add: 30000 },
  ];
  const materials = [
    { k: "teak", label: "Solid Teak", add: 0 },
    { k: "mango", label: "Mango Wood", add: -18000 },
    { k: "oak", label: "Oak Veneer", add: -8000 },
  ];
  const finishes = [
    { k: "natural", label: "Natural", c: "#b9966a" },
    { k: "walnut", label: "Walnut", c: "#6a4a2e" },
    { k: "dark", label: "Dark Walnut", c: "#4a3422" },
    { k: "black", label: "Black", c: "#2c2824" },
  ];
  const uphol = [
    { k: "linen", label: "Belgian Linen", c: "#d8cdb6", add: 0 },
    { k: "perf", label: "Performance Weave", c: "#b7b09c", add: 0 },
    { k: "leather", label: "Aniline Leather", c: "#8a5a3c", add: 42000 },
  ];

  const [size, setSize] = useState("std");
  const [mat, setMat] = useState("teak");
  const [fin, setFin] = useState("natural");
  const [uph, setUph] = useState("linen");
  const [qty, setQty] = useState(1);

  const base = 148000;
  const price = base + sizes.find((s) => s.k === size).add + materials.find((m) => m.k === mat).add + uphol.find((x) => x.k === uph).add;

  const trustItems = [
    "Handcrafted in India",
    "Made to order in our workshops",
    "Customization available — size, finish & fabric",
    "Secure, insured delivery across India",
    "International shipping available",
  ];

  const accordion = [
    { h: "Materials", body: "Frame in kiln-dried solid teak with a hand-rubbed oil finish. Seat and back upholstered in 100% Belgian linen over a webbed, hand-tied suspension. Naturally occurring grain variation is intrinsic to each piece." },
    { h: "Craftsmanship", body: "Carved, joined and finished by hand in our workshops. Each chair passes through the hands of several craftspeople over roughly three weeks — joinery is mortise-and-tenon, never glued shortcuts." },
    { h: "Dimensions & Specifications", body: "W 74 cm × D 82 cm × H 78 cm · Seat height 42 cm · Weight 14 kg. Suitable for residential and light-contract use. Custom dimensions available through the Trade program." },
    { h: "Assembly & Installation", body: "Most pieces arrive safely packed and ready to use. Certain larger items may require simple assembly; for these, installation assistance may be available depending on the product and your location. Please speak with a design consultant to confirm assembly or installation support before you order." },
    { h: "Care", body: "Dust timber with a soft dry cloth; treat with our wax balm twice yearly. Vacuum upholstery gently; professional clean for marks. Keep out of prolonged direct sun to preserve finish." },
    { h: "Delivery & Shipping", body: "Made-to-order pieces ship in 3–4 weeks via safe, insured delivery. Items are securely packed for transit; assembly assistance is available on selected pieces — ask a consultant. International freight is quoted at checkout." },
    { h: "Designer Notes", body: "“We drew the Marwar from the low, generous seating of Rajasthani courtyards — a chair you sink into, not perch on. The arms are deliberately wide enough to rest a book and a cup.” — In-house Design Studio" },
  ];
  const faqs = [
    { h: "How long does a made-to-order piece take?", body: "Most pieces are crafted and delivered within 3–4 weeks domestically. Your consultant confirms a precise timeline for your finish and upholstery at order." },
    { h: "Can I customise the size, finish or fabric?", body: "Yes — bespoke dimensions, finishes and customer-own-material (COM) upholstery are available. Tap “Need a Custom Size or Finish?” to speak with a consultant." },
    { h: "Do you ship internationally?", body: "We ship worldwide with insured freight; a quote is provided at checkout or by your consultant. Duties and delivery details can be arranged per destination." },
    { h: "What is your returns policy?", body: "Stocked pieces may be returned within 14 days. Made-to-order and customised pieces are final sale, which is why we encourage a material sample first." },
  ];
  const pairs = [
    { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", img: IMG.pendant },
    { category: "Rugs", name: "Aravalli Hand-Knotted Rug", price: "₹ 2,20,000", img: IMG.rug },
    { category: "Tables", name: "Udai Travertine Side Table", price: "₹ 48,000", img: IMG.table },
    { category: "Decor", name: "Hand-Thrown Stone Vessel", price: "₹ 12,000", img: IMG.vessel },
  ];
  const recent = [
    { category: "Seating", name: "Kashi Linen Sofa", price: "₹ 3,20,000", img: IMG.sofa },
    { category: "Tables", name: "Amer Marble Dining Table", price: "₹ 4,10,000", img: IMG.table },
    { category: "Storage", name: "Jodha Carved Sideboard", price: "₹ 2,60,000", img: IMG.cabinet },
    { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", img: IMG.pendant },
  ];
  const deliveryInfo = [
    { Icon: Hammer, t: "Made to Order", s: "Fulfillment" },
    { Icon: Clock, t: "Crafted in 3–4 weeks", s: "Lead time" },
    { Icon: Truck, t: "Insured delivery", s: "Secure & tracked" },
    { Icon: Globe, t: "Worldwide", s: "International shipping" },
  ];
  const samples = [
    { l: "Fabric", Icon: Scissors },
    { l: "Finish", Icon: Paintbrush },
    { l: "Material", Icon: Palette },
  ];

  const qtyBtn = "w-10 h-[46px] text-[18px] text-[#46413A] flex items-center justify-center";

  return (
    <Layout onNavigate={go}>
      <main className="bg-[#FAF6EF]">
        <StickyBar name={pname} price={inr(price)} />

        {/* breadcrumb */}
        <div className={WRAP + " py-[18px] text-[12px] text-[#766E61] tracking-[0.03em] " + SANS}>
          <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} className="text-inherit no-underline">
            Home
          </a>
          <span className="mx-2 opacity-50">/</span>
          <a href="#" onClick={(e) => { e.preventDefault(); go("collection", "Furniture"); }} className="text-inherit no-underline">
            Furniture
          </a>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-[#46413A]">{pname}</span>
        </div>

        {/* gallery + info */}
        <div className={WRAP + " pb-[clamp(64px,9vw,144px)] grid md:grid-cols-[1.5fr_1fr] gap-[clamp(40px,5vw,80px)] items-start"}>
          <div className={"grid " + GAP_CARD}>
            <Figure src={IMG.chair} ratio="4/5">
              <span className="absolute top-[18px] left-[18px]">
                <span className={SANS + " inline-flex items-center text-[10.5px] font-medium uppercase tracking-[0.14em] leading-none px-[11px] py-[7px] rounded-[2px] bg-[rgba(250,246,239,0.92)] text-[#2B2824] backdrop-blur-[2px]"}>
                  Handcrafted in India
                </span>
              </span>
            </Figure>
            <div className={"grid grid-cols-2 " + GAP_CARD}>
              <Figure src={IMG.detailA} ratio="1/1" dark label="Joinery detail" />
              <Figure src={IMG.detailB} ratio="1/1" dark label="Linen & grain" />
            </div>
            <Figure src={IMG.detailWide} ratio="16/10" label="Styled at home" />
          </div>

          {/* info column */}
          <div className="md:sticky md:top-[100px] self-start">
            <div className={SANS + " text-[11px] uppercase tracking-[0.24em] text-[#7B6038]"}>Seating · Lounge</div>
            <h1 className={SERIF + " font-medium text-[clamp(34px,3.4vw,46px)] leading-[1.08] tracking-[-0.015em] mt-3"}>{pname}</h1>

            <div className="flex items-baseline gap-3.5 mt-4 flex-wrap">
              <span className={SERIF + " text-[26px] text-[#2B2824]"}>{inr(price)}</span>
              <span className={SANS + " text-[13px] text-[#766E61]"}>Available to order · crafted for your home</span>
            </div>

            <p className={SANS + " text-[1.0625rem] leading-[1.72] text-[#46413A] mt-[18px] max-w-[46ch]"}>
              A low, generous lounge chair in solid teak and Belgian linen — drawn from the courtyards of Rajasthan and
              built to be lived in.
            </p>

            <FulfillmentBar />
            <TrustBlock items={trustItems} />

            <OptionRow label="Size" value={sizes.find((s) => s.k === size).label}>
              {sizes.map((s) => (
                <Chip key={s.k} on={size === s.k} onClick={() => setSize(s.k)}>
                  {s.label}
                </Chip>
              ))}
            </OptionRow>
            <OptionRow label="Material" value={materials.find((m) => m.k === mat).label}>
              {materials.map((m) => (
                <Chip key={m.k} on={mat === m.k} onClick={() => setMat(m.k)}>
                  {m.label}
                </Chip>
              ))}
            </OptionRow>
            <OptionRow label="Finish" value={finishes.find((f) => f.k === fin).label}>
              {finishes.map((f) => (
                <Dot key={f.k} color={f.c} title={f.label} on={fin === f.k} onClick={() => setFin(f.k)} />
              ))}
            </OptionRow>
            <OptionRow label="Upholstery" value={uphol.find((x) => x.k === uph).label}>
              {uphol.map((x) => (
                <Dot key={x.k} color={x.c} title={x.label} on={uph === x.k} onClick={() => setUph(x.k)} />
              ))}
            </OptionRow>

            <a
              href={waHref(`Custom size or finish for the ${pname}`)}
              target="_blank"
              rel="noopener noreferrer"
              className={SANS + " mt-4 inline-flex items-center gap-2 text-[#7B6038] text-[12px] uppercase tracking-[0.14em] no-underline group"}
            >
              Need a Custom Size or Finish?
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* sample request */}
            <div className="mt-[22px] pt-[18px] border-t border-[#DCD2C1]">
              <div className={SANS + " text-[11px] uppercase tracking-[0.14em] text-[#766E61] mb-1"}>Request a sample</div>
              <div className={SANS + " text-[12.5px] text-[#46413A] mb-3"}>
                From <strong className="text-[#2B2824] font-semibold">₹999</strong> per sample · ₹999–₹2,999 depending on
                fabric, finish or material.
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {samples.map(({ l, Icon }) => (
                  <a
                    key={l}
                    href={waHref(`Request a ${l} sample for the ${pname}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline flex flex-col items-center gap-2 px-2 py-4 border border-[#C3B7A1] rounded-[4px] text-[#46413A] hover:border-[#46413A] transition-colors"
                  >
                    <Icon size={22} strokeWidth={1.2} className="text-[#7B6038]" />
                    <span className={SANS + " text-[11px] uppercase tracking-[0.14em]"}>{l}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA cluster */}
            <div className="flex gap-3.5 mt-[22px] items-stretch">
              <div className="flex items-center border border-[#C3B7A1] rounded-[4px]">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className={qtyBtn}>
                  –
                </button>
                <span className="w-9 text-center text-[15px]">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className={qtyBtn}>
                  +
                </button>
              </div>
              <Button variant="primary" fullWidth>
                Add to Cart · {inr(price)}
              </Button>
              <button aria-label="Save" className="w-[50px] flex-none border border-[#C3B7A1] rounded-[4px] flex items-center justify-center text-[#2B2824]">
                <Heart size={18} strokeWidth={1.4} />
              </button>
            </div>
            <div className="mt-3">
              <a href={waHref(`Consult about the ${pname}`)} target="_blank" rel="noopener noreferrer" className="no-underline block">
                <Button variant="secondary" fullWidth iconLeft={<MessageCircle size={16} className="text-[#7B6038]" />}>
                  Speak with a Design Consultant
                </Button>
              </a>
            </div>

            {/* delivery grid */}
            <div className="grid grid-cols-2 gap-3.5 mt-[26px] py-[22px] border-y border-[#DCD2C1]">
              {deliveryInfo.map(({ Icon, t, s }) => (
                <div key={t} className="flex gap-3 items-start">
                  <Icon size={22} strokeWidth={1.2} className="text-[#7B6038] mt-px flex-none" />
                  <div className="leading-[1.3]">
                    <div className={SANS + " text-[14px] text-[#2B2824]"}>{t}</div>
                    <div className={SANS + " text-[11.5px] text-[#766E61] tracking-[0.02em]"}>{s}</div>
                  </div>
                </div>
              ))}
            </div>

            <Accordion items={accordion} />
          </div>
        </div>

        {/* module sections */}
        <AssemblyBand />
        <WhyLoveIt />
        <MadeForYourSpace />

        {/* Complete the Room */}
        <section className={"bg-[#F4EEE3] " + SECTION_Y}>
          <div className={WRAP}>
            <Eyebrow tone="accent" rule>
              Complete the Room
            </Eyebrow>
            <h2 className={SERIF + " font-medium text-[clamp(2.25rem,3.6vw,3.25rem)] mt-4"}>Pieces our stylists pair with the Marwar</h2>
            <div className={"grid grid-cols-2 lg:grid-cols-4 mt-10 " + GAP_CARD}>
              {pairs.map((p) => (
                <ProductCard key={p.name} image={p.img} category={p.category} name={p.name} price={p.price} favorite={false} onClick={() => go("product", p.name)} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={"bg-[#FAF6EF] " + SECTION_Y}>
          <div className={WRAP + " grid md:grid-cols-[0.8fr_1.2fr] gap-[clamp(40px,6vw,96px)] items-start"}>
            <div>
              <Eyebrow tone="accent" rule>
                Good to Know
              </Eyebrow>
              <h2 className={SERIF + " font-medium text-[clamp(1.85rem,2.8vw,2.5rem)] leading-[1.1] mt-4"}>Questions, answered.</h2>
              <p className={SANS + " text-[15px] leading-[1.7] text-[#46413A] mt-4"}>Still unsure? A design consultant is a tap away.</p>
              <a href={waHref("Question about the Marwar Lounge Chair")} target="_blank" rel="noopener noreferrer" className="no-underline inline-block mt-2">
                <Button variant="ghost" iconRight={<ArrowRight size={15} />}>
                  Speak with a Consultant
                </Button>
              </a>
            </div>
            <Accordion items={faqs} start={-1} />
          </div>
        </section>

        {/* Recently Viewed */}
        <section className={"bg-[#F4EEE3] " + SECTION_Y}>
          <div className={WRAP}>
            <Eyebrow tone="accent" rule>
              Recently Viewed
            </Eyebrow>
            <h2 className={SERIF + " font-medium text-[clamp(2.25rem,3.6vw,3.25rem)] mt-4"}>Continue where you left off</h2>
            <div className={"grid grid-cols-2 lg:grid-cols-4 mt-10 " + GAP_CARD}>
              {recent.map((p) => (
                <ProductCard key={p.name} image={p.img} category={p.category} name={p.name} price={p.price} favorite={false} onClick={() => go("product", p.name)} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
