/**
 * Art Avenue — Trade & Design Program (application page)
 * React + Tailwind (utilities only) + Lucide React. Imports ./shared.
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
  Input,
  Select,
  Layout,
} from "./shared";
import {
  Award,
  PencilRuler,
  Palette,
  Building2,
  ClipboardList,
  Handshake,
  ArrowRight,
  ArrowDown,
  Check,
  Lock,
} from "lucide-react";

const scrollToForm = () => {
  const el = document.getElementById("trade-apply");
  if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
};

export default function TradePage({ onNavigate }) {
  const go = onNavigate || (() => {});

  const perks = [
    { Icon: Award, h: "Trade Pricing", t: "Member pricing across every collection, with a dedicated account manager on every project." },
    { Icon: PencilRuler, h: "Customization", t: "Bespoke dimensions, finishes, materials and COM upholstery for residential and contract work." },
    { Icon: Palette, h: "Material Sampling", t: "Finish, wood and textile samples shipped to your studio, complimentary on active projects." },
    { Icon: Building2, h: "Project & Bulk", t: "Procurement, lead-time planning and delivery logistics for full properties." },
    { Icon: ClipboardList, h: "Spec Support", t: "Tear sheets, CAD blocks and specifications prepared for your drawings." },
    { Icon: Handshake, h: "Hospitality", t: "Contract-grade construction and durability standards for hotels and restaurants." },
  ];
  const steps = [
    { n: "01", h: "Apply", t: "Tell us about your studio and the work you do. Approval typically within two business days." },
    { n: "02", h: "Get matched", t: "We pair you with a dedicated design consultant who knows your sector." },
    { n: "03", h: "Source with confidence", t: "Sample, customize, specify and order — with trade pricing and reliable delivery." },
  ];
  const gallery = [
    { img: IMG.project1, label: "The Oberoi Residences · Mumbai", span: true },
    { img: IMG.project2, label: "Studio Kohl · Goa villa" },
    { img: IMG.project3, label: "Maison Rao · Bengaluru" },
    { img: IMG.project4, label: "The Verandah · boutique hotel" },
    { img: IMG.project5, label: "Bandra penthouse" },
  ];

  return (
    <Layout onNavigate={go} transparentHeader>
      <main className="bg-[#FAF6EF]">
        {/* HERO */}
        <section className="relative min-h-[560px] flex items-center">
          <img src={IMG.heroTrade} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,31,27,0.78),rgba(34,31,27,0.3)_65%,transparent)]" />
          <div className={WRAP + " relative w-full"}>
            <div className="max-w-[580px]">
              <Eyebrow tone="on-dark" rule>
                Trade &amp; Design Program
              </Eyebrow>
              <h1 className={SERIF + " font-medium text-[#FAF6EF] text-[clamp(3.5rem,6.5vw,6.25rem)] leading-[1.04] tracking-[-0.015em] mt-[22px]"}>
                Source like the
                <br />
                <em className="text-[#EBD9BE]">design house you are.</em>
              </h1>
              <p className={SANS + " text-[rgba(250,246,239,0.86)] text-[1.1875rem] font-light leading-[1.6] max-w-[470px] mt-[22px]"}>
                A program built for interior designers, architects and hospitality buyers — trade pricing, customization
                and dedicated support, on every project.
              </p>
              <div className="flex gap-4 mt-[34px] flex-wrap">
                <Button variant="primary" onClick={scrollToForm}>
                  Apply for Access
                </Button>
                <Button variant="secondary" onDark iconRight={<ArrowDown size={16} />} onClick={scrollToForm}>
                  See the Benefits
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={SECTION_Y}>
          <div className={WRAP}>
            <div className="max-w-[640px]">
              <Eyebrow tone="accent" rule>
                What's Included
              </Eyebrow>
              <h2 className={SERIF + " font-medium text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.12] tracking-[-0.015em] mt-[18px]"}>Everything a project needs.</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px mt-[52px] bg-[#DCD2C1] border border-[#DCD2C1]">
              {perks.map(({ Icon, h, t }) => (
                <div key={h} className="bg-[#FAF6EF] px-[34px] py-[38px]">
                  <Icon size={32} strokeWidth={1.2} className="text-[#7B6038]" />
                  <h4 className={SERIF + " font-medium text-[24px] mt-5 mb-3"}>{h}</h4>
                  <p className={SANS + " text-[15px] leading-[1.7] text-[#46413A]"}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={"bg-[#F4EEE3] " + SECTION_Y}>
          <div className={WRAP}>
            <div className="text-center max-w-[600px] mx-auto">
              <Eyebrow tone="accent" center rule>
                How It Works
              </Eyebrow>
              <h2 className={SERIF + " font-medium text-[clamp(2.25rem,3.6vw,3.25rem)] mt-4"}>From application to delivery.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-[clamp(28px,4vw,64px)] mt-14">
              {steps.map((s) => (
                <div key={s.n}>
                  <div className={SERIF + " italic text-[40px] text-[#9C7C4E]"}>{s.n}</div>
                  <div className="h-px bg-[#C3B7A1] my-[18px]" />
                  <h4 className={SERIF + " font-medium text-[22px]"}>{s.h}</h4>
                  <p className={SANS + " text-[15px] leading-[1.7] text-[#46413A] mt-2.5"}>{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section className={SECTION_Y}>
          <div className={WRAP}>
            <div className="flex justify-between items-end flex-wrap gap-5">
              <div className="max-w-[560px]">
                <Eyebrow tone="accent" rule>
                  Trade Projects
                </Eyebrow>
                <h2 className={SERIF + " font-medium text-[clamp(2.25rem,3.6vw,3.25rem)] mt-4"}>Recently specified by our partners.</h2>
              </div>
              <Button variant="ghost" iconRight={<ArrowRight size={15} />}>
                View the lookbook
              </Button>
            </div>
            <div className={"grid md:grid-cols-3 md:grid-rows-[repeat(2,220px)] mt-11 " + GAP_CARD}>
              {gallery.map((p) => (
                <Figure key={p.label} src={p.img} label={p.label} dark className={p.span ? "md:row-span-2 min-h-[220px]" : "min-h-[220px]"} />
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className={"bg-[#221F1B] text-[#FAF6EF] " + SECTION_Y}>
          <div className={WRAP + " max-w-[880px] mx-auto text-center"}>
            <Eyebrow tone="on-dark" center>
              From a Partner
            </Eyebrow>
            <p className={SERIF + " font-medium text-[clamp(26px,3vw,40px)] leading-[1.25] tracking-[-0.015em] mt-[22px] [text-wrap:balance]"}>
              “Art Avenue is the only Indian house we specify internationally. The craft holds up to scrutiny, and the
              trade team makes a 40-piece order feel like one.”
            </p>
            <div className={SANS + " mt-[26px] text-[13px] uppercase tracking-[0.14em] text-[#B7AE9E]"}>Aisha Kohli · Principal, Studio Kohl</div>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section id="trade-apply" className={SECTION_Y}>
          <div className={WRAP + " grid md:grid-cols-[0.85fr_1.15fr] gap-[clamp(40px,6vw,96px)] items-start"}>
            <div>
              <Eyebrow tone="accent" rule>
                Apply
              </Eyebrow>
              <h2 className={SERIF + " font-medium text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.1] mt-[18px]"}>Request trade access.</h2>
              <p className={SANS + " text-[1.1875rem] font-light leading-[1.7] text-[#46413A] mt-[18px] max-w-[42ch]"}>
                Approval typically within two business days. Already a member?{" "}
                <a href="#" onClick={(e) => e.preventDefault()} className="text-[#7B6038]">
                  Sign in
                </a>
                .
              </p>
              <ul className="list-none mt-[30px] p-0 grid gap-4">
                {["Dedicated design consultant", "Trade pricing within 48 hours", "No minimum order, ever"].map((t) => (
                  <li key={t} className={SANS + " flex gap-3 items-center text-[15px] text-[#46413A]"}>
                    <Check size={16} className="text-[#9C7C4E]" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-[#FCFAF6] border border-[#DCD2C1] p-[clamp(28px,3vw,44px)] rounded-[4px] grid gap-5"
            >
              <div className="grid grid-cols-2 gap-5">
                <Input label="First name" placeholder="Aisha" required />
                <Input label="Last name" placeholder="Kohli" required />
              </div>
              <Input label="Studio / Firm" placeholder="Studio Kohl" required />
              <div className="grid grid-cols-2 gap-5">
                <Input label="Work email" type="email" placeholder="aisha@studiokohl.com" required />
                <Input label="Phone" type="tel" placeholder="+91 ..." />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Select label="Profession" options={["Interior Designer", "Architect", "Hospitality Buyer", "Developer", "Other"]} />
                <Select label="Typical project" options={["Residential", "Hospitality", "Commercial / Office", "Mixed-use"]} />
              </div>
              <Input label="Tell us about your work" multiline placeholder="Sectors, project scale, what you're sourcing for…" />
              <label className={SANS + " flex gap-3 items-start text-[13.5px] text-[#766E61] leading-[1.5]"}>
                <input type="checkbox" className="mt-[3px] accent-[#9C7C4E]" />
                I'd like to receive the trade newsletter and project stories.
              </label>
              <Button variant="primary" fullWidth type="submit">
                Submit Application
              </Button>
              <p className={SANS + " text-[12.5px] text-[#9C9384] text-center flex items-center justify-center gap-1.5"}>
                <Lock size={13} /> Your details are kept private and never shared.
              </p>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
