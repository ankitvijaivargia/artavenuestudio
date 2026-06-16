/* Art Avenue — Custom & Bespoke (flagship design-studio landing page) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge, Input, Select } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const waHref = (msg) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
  const wrap = (extra = {}) => ({ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", ...extra });

  /* ---- data ---- */
  const DISCIPLINES = [
    { icon: "ph-armchair", h: "Custom Furniture", t: "Pieces drawn to your dimensions, woods, finishes and configurations — from a single chair to a whole home.", tone: "clay" },
    { icon: "ph-scribble-loop", h: "Custom Rugs", t: "Bespoke sizes, colourways, constructions and motifs, hand-knotted to your floor plan.", tone: "olive" },
    { icon: "ph-needle", h: "Custom Upholstery", t: "Your own fabric (COM) or ours, with bespoke fills, profiles and detailing.", tone: "sand" },
    { icon: "ph-house-line", h: "Interior Projects", t: "Whole-room and whole-home schemes, sourced, made and installed as one considered commission.", tone: "stone" },
    { icon: "ph-buildings", h: "Hospitality Projects", t: "Contract-grade furniture, rugs and lighting for hotels, restaurants and residences at scale.", tone: "espresso" },
    { icon: "ph-pen-nib", h: "Designer Collaborations", t: "Co-created collections and one-of-a-kind commissions with designers and architects.", tone: "bronze" },
    { icon: "ph-package", h: "Project Procurement", t: "Lead-time planning, logistics and delivery for multi-room and multi-property orders.", tone: "clay" },
  ];

  const JOURNEY = [
    { n: "01", h: "Discover", t: "Share your space, references and how you live. We listen first — no obligation, no fixed catalogue.", icon: "ph-chat-circle-dots" },
    { n: "02", h: "Consult", t: "A dedicated design consultant shapes the brief with you, proposing pieces, scale and materials.", icon: "ph-pencil-ruler" },
    { n: "03", h: "Design & Sample", t: "Drawings, renders and physical material samples sent to you, refined until it's exactly right.", icon: "ph-swatches" },
    { n: "04", h: "Craft", t: "Your commission is made by hand in our ateliers — you receive progress updates throughout.", icon: "ph-hammer" },
    { n: "05", h: "Deliver & Install", t: "Safely delivered, placed and styled in your space, anywhere in India or abroad.", icon: "ph-truck" },
  ];

  const PORTFOLIO = [
    { label: "Udaipur lake villa · full interior", tone: "clay", span: true, tag: "Residential" },
    { label: "The Verandah · boutique hotel", tone: "espresso", tag: "Hospitality" },
    { label: "Bandra penthouse · living & dining", tone: "olive", tag: "Residential" },
    { label: "Studio Kohl × Art Avenue · seating", tone: "bronze", tag: "Collaboration" },
    { label: "Maison Rao · bespoke rugs", tone: "sand", tag: "Custom Rugs" },
  ];

  const CASES = [
    { tone: "espresso", tag: "Hospitality", h: "The Verandah, Goa", t: "A boutique hotel furnished end-to-end — lobby seating, restaurant banquettes, bedroom schemes and bespoke runners, delivered in considered phases.", scope: ["Lobby & restaurant seating", "Bespoke hand-knotted runners", "Whole-property bedroom schemes"] },
    { tone: "clay", tag: "Residential", h: "Lake Villa, Udaipur", t: "A complete interiors commission for a lakeside home — a custom solid-teak dining table, hand-knotted rugs sized to each room, and a library of bespoke teak storage.", scope: ["Custom solid-teak dining", "Room-by-room hand-knotted rugs", "Bespoke teak storage library"] },
  ];

  const MATERIALS = [
    { name: "Solid Teak", tone: "bronze" }, { name: "Belgian Linen", tone: "stone" }, { name: "Highland Wool", tone: "olive" },
    { name: "Aged Brass", tone: "bronze" }, { name: "Travertine", tone: "sand" }, { name: "Full-Grain Leather", tone: "clay" },
    { name: "Cotton Velvet", tone: "espresso" }, { name: "Carrara Marble", tone: "stone" },
  ];

  function CustomBespokePage({ onNavigate }) {
    const nav = onNavigate || (() => {});
    const scrollToForm = () => { const el = document.getElementById("cb-enquire"); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" }); };
    const consult = waHref("Hello Art Avenue, I'd like to discuss a custom or bespoke project.");

    return (
      <main style={{ background: "var(--surface-page)" }}>
        {/* HERO */}
        <section style={{ position: "relative", minHeight: 640, display: "flex", alignItems: "flex-end" }}>
          <Figure tone="espresso" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,25,22,.82), rgba(28,25,22,.32) 55%, rgba(28,25,22,.45))" }} />
          <div style={{ ...wrap(), position: "relative", width: "100%", boxSizing: "border-box", paddingTop: 88, paddingBottom: 64 }}>
            <div style={{ maxWidth: 760 }}>
              <Eyebrow tone="on-dark" rule>Custom &amp; Bespoke · The Atelier</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--text-on-dark)", fontSize: "var(--text-display-1)", lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-tight)", margin: "22px 0 0", textWrap: "balance" }}>
                Made for your space,<br /><em style={{ color: "#EBD9BE" }}>down to the last detail.</em>
              </h1>
              <p style={{ color: "rgba(250,246,239,.88)", fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.65, maxWidth: 560, marginTop: 22 }}>
                Most of what we make begins as a conversation, not a catalogue. Tell us about your room, your project or your collection — and our ateliers will craft it to suit.
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
                <Button variant="primary" onClick={scrollToForm}>Start a Project</Button>
                <a href={consult} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  <Button variant="secondary" onDark iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Speak with a Design Consultant</Button>
                </a>
              </div>
              <div style={{ display: "flex", gap: "clamp(20px,3vw,44px)", marginTop: 48, flexWrap: "wrap" }}>
                {[["ph-hand-heart", "Handcrafted by skilled artisans"], ["ph-leaf", "Made using time-honoured techniques"], ["ph-map-pin-line", "In collaboration with workshops across India"]].map(([icon, l]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 11, maxWidth: 228 }}>
                    <i className={"ph-light " + icon} style={{ fontSize: 22, color: "#EBD9BE", flex: "none" }} />
                    <div style={{ fontSize: 13, lineHeight: 1.4, color: "rgba(250,246,239,.82)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO STATEMENT */}
        <section style={{ padding: "var(--section-y) 0 calc(var(--section-y) * 0.6)" }}>
          <div style={{ ...wrap(), maxWidth: 980 }}>
            <Eyebrow tone="accent" rule>A Design Studio, Not a Store</Eyebrow>
            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(26px,2.8vw,38px)", lineHeight: 1.32, letterSpacing: "var(--tracking-tight)", margin: "22px 0 0", textWrap: "balance" }}>
              Art Avenue is a furniture atelier, a rug studio and an interiors house. We are happiest when a piece is made for one home — yours — rather than for everyone.
            </p>
          </div>
        </section>

        {/* DISCIPLINES */}
        <section style={{ paddingBottom: "var(--section-y)" }}>
          <div style={wrap()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 18, marginBottom: 44 }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: 0 }}>What we make to order</h2>
              <span style={{ fontSize: 13.5, color: "var(--text-muted)", maxWidth: 320 }}>Seven ways to commission Art Avenue — each led by a dedicated consultant.</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border-hairline)", border: "1px solid var(--border-hairline)" }}>
              {DISCIPLINES.map((d, i) => (
                <button key={d.h} onClick={scrollToForm} style={{ textAlign: "left", cursor: "pointer", background: "var(--surface-page)", padding: "34px 30px 30px", display: "flex", flexDirection: "column", minHeight: 230, gridColumn: i === 6 ? "span 1" : "auto" }}>
                  <i className={"ph-light " + d.icon} style={{ fontSize: 30, color: "var(--accent-deep)" }} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 23, margin: "22px 0 10px" }}>{d.h}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.62, color: "var(--text-secondary)" }}>{d.t}</p>
                  <span style={{ marginTop: "auto", paddingTop: 16, fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)", display: "inline-flex", alignItems: "center", gap: 7 }}>Enquire <i className="ph ph-arrow-right" /></span>
                </button>
              ))}
              <div style={{ background: "var(--surface-dark)", padding: "34px 30px", display: "flex", flexDirection: "column", justifyContent: "center", gridColumn: "span 1" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 22, color: "var(--text-on-dark)", lineHeight: 1.2 }}>Not sure where to start?</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-on-dark-muted)", margin: "10px 0 18px" }}>Tell us the room and we'll guide the rest.</p>
                <a href={consult} target="_blank" rel="noopener" style={{ textDecoration: "none" }}><Button variant="primary" iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Ask a Consultant</Button></a>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
          <div style={wrap()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
              <div style={{ maxWidth: 560 }}>
                <Eyebrow tone="accent" rule>Project Portfolio</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-display-2)", lineHeight: 1.08, letterSpacing: "var(--tracking-tight)", margin: "18px 0 0" }}>Commissioned, made &amp; installed.</h2>
              </div>
              <Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />}>View the full lookbook</Button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gridTemplateRows: "260px 260px", gap: "var(--gap-card)", marginTop: 44 }}>
              {PORTFOLIO.map((p, i) => (
                <Figure key={i} tone={p.tone} label={p.label} style={{ gridRow: p.span ? "span 2" : "auto", position: "relative" }}>
                  <span style={{ position: "absolute", top: 16, left: 16 }}><Badge variant="on-image">{p.tag}</Badge></span>
                </Figure>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT JOURNEY */}
        <section style={{ padding: "var(--section-y) 0" }}>
          <div style={wrap()}>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
              <Eyebrow tone="accent" center rule>The Client Journey</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: "16px 0 0" }}>Discover · Consult · Customize · Order</h2>
              <p style={{ fontSize: "var(--text-body)", lineHeight: 1.7, color: "var(--text-secondary)", marginTop: 16 }}>A considered, unhurried process — guided from first conversation to final install.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--gap-card)", marginTop: 56 }}>
              {JOURNEY.map((s) => (
                <div key={s.n}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <i className={"ph-light " + s.icon} style={{ fontSize: 26, color: "var(--accent-deep)" }} />
                    <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "var(--text-accent)" }}>{s.n}</span>
                  </div>
                  <div style={{ height: 1, background: "var(--border-strong)", margin: "16px 0 16px" }} />
                  <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 21 }}>{s.h}</h4>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)", marginTop: 8 }}>{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MATERIAL SELECTION */}
        <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: "var(--section-y) 0" }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
            <div>
              <Eyebrow tone="on-dark" rule>Material Selection</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-display-2)", lineHeight: 1.08, letterSpacing: "var(--tracking-tight)", margin: "18px 0 0" }}>Begin with the materials.</h2>
              <p style={{ fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.7, color: "var(--text-on-dark-muted)", margin: "18px 0 0", maxWidth: "44ch" }}>
                Every commission starts from honest materials — solid hardwoods, hand-spun wool, cast brass, quarried stone and natural textiles. We'll send samples to your door before a single piece is made.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
                <Button variant="primary" onClick={() => nav("library", "Materials")}>Explore the Material Library</Button>
                <a href={waHref("Hello Art Avenue, I'd like to request a material sample set for a custom project.")} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  <Button variant="secondary" onDark iconLeft={<i className="ph ph-swatches" />}>Request Samples</Button>
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)" }}>
              {MATERIALS.map((m) => (
                <div key={m.name}>
                  <Figure tone={m.tone} ratio="1/1" />
                  <div style={{ fontSize: 12.5, color: "var(--text-on-dark-muted)", marginTop: 9 }}>{m.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section style={{ padding: "var(--section-y) 0" }}>
          <div style={wrap()}>
            <div style={{ maxWidth: 600, marginBottom: 48 }}>
              <Eyebrow tone="accent" rule>Case Studies</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: "16px 0 0" }}>Projects, in their own words.</h2>
            </div>
            <div style={{ display: "grid", gap: "var(--section-y-tight)" }}>
              {CASES.map((c, i) => (
                <div key={c.h} style={{ display: "grid", gridTemplateColumns: i % 2 ? "1fr 1.1fr" : "1.1fr 1fr", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
                  <Figure tone={c.tone} ratio="4/3" label={c.h} style={{ order: i % 2 ? 2 : 1, position: "relative" }}>
                    <span style={{ position: "absolute", top: 16, left: 16 }}><Badge variant="on-image">{c.tag}</Badge></span>
                  </Figure>
                  <div style={{ order: i % 2 ? 1 : 2 }}>
                    <Eyebrow tone="accent">{c.tag}</Eyebrow>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h2)", lineHeight: 1.12, margin: "12px 0 0" }}>{c.h}</h3>
                    <p style={{ fontSize: "var(--text-body)", lineHeight: 1.72, color: "var(--text-secondary)", margin: "14px 0 0", maxWidth: "52ch" }}>{c.t}</p>
                    <ul style={{ listStyle: "none", margin: "26px 0 0", padding: "24px 0 0", borderTop: "1px solid var(--border-hairline)", display: "grid", gap: 11 }}>
                      {c.scope.map((s) => (
                        <li key={s} style={{ display: "flex", gap: 11, alignItems: "center", fontSize: 13.5, color: "var(--text-secondary)" }}>
                          <i className="ph ph-check" style={{ color: "var(--accent)", fontSize: 15, flex: "none" }} /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
          <div style={{ ...wrap(), maxWidth: 900, textAlign: "center" }}>
            <i className="ph-fill ph-quotes" style={{ fontSize: 34, color: "var(--accent-soft)" }} />
            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.28, letterSpacing: "var(--tracking-tight)", margin: "18px 0 0", textWrap: "balance" }}>
              “They treated our home like a commission, not an order. Every measurement, every finish was made for the way we live.”
            </p>
            <div style={{ marginTop: 24, fontSize: 13, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>Ananya &amp; Rohan Mehta · Udaipur</div>
          </div>
        </section>

        {/* ENQUIRY FORM */}
        <section id="cb-enquire" style={{ padding: "var(--section-y) 0" }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }}>
            <div>
              <Eyebrow tone="accent" rule>Start a Project</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, margin: "18px 0 0" }}>Tell us about your space.</h2>
              <p style={{ fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.7, color: "var(--text-secondary)", marginTop: 18, maxWidth: "42ch" }}>
                Share a few details and a dedicated design consultant will be in touch within two business days — no obligation.
              </p>
              <ul style={{ listStyle: "none", margin: "30px 0 0", padding: 0, display: "grid", gap: 16 }}>
                {["A consultant matched to your project", "Drawings & material samples before you commit", "Made to your dimensions, finishes & materials", "Delivery & installation across India and abroad"].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, color: "var(--text-secondary)" }}>
                    <i className="ph ph-check" style={{ color: "var(--accent)", fontSize: 16, marginTop: 3 }} /> {t}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 30, padding: "18px 20px", background: "var(--surface-accent-tint)", borderRadius: "var(--radius-sm)", display: "flex", gap: 13, alignItems: "center" }}>
                <i className="ph ph-chat-teardrop-dots" style={{ fontSize: 22, color: "var(--accent-deep)", flex: "none" }} />
                <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>Prefer to talk now? <a href={consult} target="_blank" rel="noopener" style={{ color: "var(--text-accent)", textDecoration: "none", fontWeight: 500 }}>Message a consultant →</a></div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} style={{ background: "var(--surface-raised)", border: "1px solid var(--border-hairline)", padding: "clamp(28px,3vw,44px)", borderRadius: "var(--radius-sm)", display: "grid", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Input label="First name" placeholder="Ananya" required />
                <Input label="Last name" placeholder="Mehta" required />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Input label="Email" type="email" placeholder="you@email.com" required />
                <Input label="Phone" type="tel" placeholder="+91 ..." />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Select label="Project type" options={["Custom Furniture", "Custom Rugs", "Custom Upholstery", "Interior Project", "Hospitality Project", "Designer Collaboration", "Project Procurement"]} />
                <Select label="Client type" options={["Homeowner", "Interior Designer", "Architect", "Hospitality / Developer"]} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Select label="Timeline" options={["Exploring", "Within 3 months", "3–6 months", "6+ months"]} />
                <Select label="Budget guide" options={["Under ₹ 5 lakh", "₹ 5–15 lakh", "₹ 15–50 lakh", "₹ 50 lakh +", "Prefer to discuss"]} />
              </div>
              <Input label="Location" placeholder="City / project site" />
              <Input label="Tell us about your project" multiline placeholder="The room or property, how you'll use it, references, pieces you have in mind…" />
              <label style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.5 }}>
                <input type="checkbox" style={{ marginTop: 3, accentColor: "var(--accent)" }} />
                Keep me posted with project stories and new collections.
              </label>
              <Button variant="primary" fullWidth>Submit Enquiry</Button>
              <p style={{ fontSize: 12.5, color: "var(--text-faint)", textAlign: "center", margin: 0 }}>
                <i className="ph ph-lock-simple" style={{ marginRight: 6 }} />Your details are kept private and never shared.
              </p>
            </form>
          </div>
        </section>
      </main>
    );
  }

  window.AACustomBespokePage = CustomBespokePage;
})();
