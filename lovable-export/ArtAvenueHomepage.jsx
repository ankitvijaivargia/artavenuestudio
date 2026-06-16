/**
 * Art Avenue — Homepage
 * ------------------------------------------------------------------
 * React + Tailwind CSS (utilities only) + Lucide React.
 * Imports shared design-system primitives & chrome from ./shared.
 */
import React from "react";
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
  SectionHead,
  ProductCard,
  CollectionTile,
  Layout,
} from "./shared";
import { ArrowRight, Award, PencilRuler, Palette, Building2 } from "lucide-react";

function Hero({ go }) {
  return (
    <section className="relative h-[88vh] min-h-[620px] flex items-end">
      <img src={IMG.heroHome} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
            <Button variant="primary" onClick={() => go("collection", "New Arrivals")}>
              Explore the Collection
            </Button>
            <Button variant="secondary" onDark iconRight={<ArrowRight size={16} />} onClick={() => go("trade")}>
              Trade &amp; Design
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signature({ go }) {
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
              onClick={() => go("collection", t.title)}
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

function Arrivals({ go }) {
  const products = [
    { category: "Seating", name: "Marwar Lounge Chair", price: "₹ 1,48,000", note: "Made to order", img: IMG.chair, badge: "Handcrafted" },
    { category: "Rugs", name: "Aravalli Hand-Knotted Rug", price: "₹ 2,20,000", img: IMG.rug, badge: "New" },
    { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", note: "Ships in 3 wks", img: IMG.pendant },
    { category: "Tables", name: "Udai Travertine Coffee Table", price: "₹ 96,000", img: IMG.table, badge: "New" },
  ];
  const Badge = ({ children }) => (
    <span className={SANS + " inline-flex items-center text-[10.5px] font-medium uppercase tracking-[0.14em] leading-none px-[11px] py-[7px] rounded-[2px] bg-[rgba(250,246,239,0.92)] text-[#2B2824] backdrop-blur-[2px]"}>{children}</span>
  );
  return (
    <section className={"bg-[#FAF6EF] " + SECTION_Y}>
      <div className={WRAP}>
        <div className="flex justify-between items-end flex-wrap gap-5">
          <SectionHead eyebrow="Just Arrived" title="New this season" />
          <Button variant="ghost" iconRight={<ArrowRight size={15} />} onClick={() => go("collection", "New Arrivals")}>
            View all new
          </Button>
        </div>
        <div className={"grid grid-cols-2 lg:grid-cols-4 mt-11 " + GAP_CARD}>
          {products.map((p) => (
            <ProductCard
              key={p.name}
              image={p.img}
              category={p.category}
              name={p.name}
              price={p.price}
              note={p.note}
              badge={p.badge ? <Badge>{p.badge}</Badge> : null}
              onClick={() => go("product", p.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Rooms({ go }) {
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
            onClick={() => go("collection", r.title)}
            className="flex-1 min-h-[440px] rounded-none"
          />
        ))}
      </div>
    </section>
  );
}

function Featured({ go }) {
  return (
    <section className="relative min-h-[620px] flex items-center">
      <img src={IMG.heroDark} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
            <Button variant="secondary" onDark iconRight={<ArrowRight size={16} />} onClick={() => go("collection", "The Marwar Collection")}>
              Explore the Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trade({ go }) {
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
          <Button variant="accent" onClick={() => go("trade")}>
            Request Trade Access
          </Button>
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

function Journal({ go }) {
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
          <Button variant="ghost" iconRight={<ArrowRight size={15} />} onClick={() => go("collection", "Journal")}>
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

export default function ArtAvenueHomepage({ onNavigate }) {
  const go = onNavigate || (() => {});
  return (
    <Layout onNavigate={go} transparentHeader>
      <main>
        <Hero go={go} />
        <Signature go={go} />
        <Craft />
        <Arrivals go={go} />
        <Rooms go={go} />
        <Featured go={go} />
        <Trade go={go} />
        <Homes />
        <Journal go={go} />
        <Statement />
      </main>
    </Layout>
  );
}
