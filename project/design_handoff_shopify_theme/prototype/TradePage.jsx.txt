/* Art Avenue — Trade & Design Program (application page) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge, Input, Select } = DS;
  const Figure = window.AAFigure;
  const wrap = (extra = {}) => ({ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", ...extra });

  function TradePage({ onNavigate }) {
    const nav = onNavigate || (() => {});
    const scrollToForm = () => {
      const el = document.getElementById("trade-apply");
      if (el) el.scrollIntoView ? window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" }) : null;
    };

    const perks = [
      { icon: "ph-medal", h: "Trade Pricing", t: "Member pricing across every collection, with a dedicated account manager on every project." },
      { icon: "ph-pencil-ruler", h: "Customization", t: "Bespoke dimensions, finishes, materials and COM upholstery for residential and contract work." },
      { icon: "ph-swatches", h: "Material Sampling", t: "Finish, wood and textile samples shipped to your studio, complimentary on active projects." },
      { icon: "ph-buildings", h: "Project & Bulk", t: "Procurement, lead-time planning and delivery logistics for full properties." },
      { icon: "ph-clipboard-text", h: "Spec Support", t: "Tear sheets, CAD blocks and specifications prepared for your drawings." },
      { icon: "ph-handshake", h: "Hospitality", t: "Contract-grade construction and durability standards for hotels and restaurants." },
    ];

    const steps = [
      { n: "01", h: "Apply", t: "Tell us about your studio and the work you do. Approval typically within two business days." },
      { n: "02", h: "Get matched", t: "We pair you with a dedicated design consultant who knows your sector." },
      { n: "03", h: "Source with confidence", t: "Sample, customize, specify and order — with trade pricing and reliable delivery." },
    ];

    return (
      <main style={{ background: "var(--surface-page)" }}>
        {/* HERO */}
        <section style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center" }}>
          <Figure tone="espresso" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(34,31,27,.78), rgba(34,31,27,.3) 65%, transparent)" }} />
          <div style={{ ...wrap(), position: "relative", width: "100%", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 580 }}>
              <Eyebrow tone="on-dark" rule>Trade &amp; Design Program</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--text-on-dark)", fontSize: "var(--text-display-1)", lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-tight)", margin: "22px 0 0" }}>
                Source like the<br /><em style={{ color: "#EBD9BE" }}>design house you are.</em>
              </h1>
              <p style={{ color: "rgba(250,246,239,.86)", fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.6, maxWidth: 470, marginTop: 22 }}>
                A program built for interior designers, architects and hospitality buyers — trade pricing, customization and dedicated support, on every project.
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: 34, flexWrap: "wrap" }}>
                <Button variant="primary" onClick={scrollToForm}>Apply for Access</Button>
                <Button variant="secondary" onDark iconRight={<i className="ph ph-arrow-down" />} onClick={scrollToForm}>See the Benefits</Button>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section style={{ padding: "var(--section-y) 0" }}>
          <div style={wrap()}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow tone="accent" rule>What's Included</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-display-2)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", margin: "18px 0 0" }}>
                Everything a project needs.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, marginTop: 52, background: "var(--border-hairline)", border: "1px solid var(--border-hairline)" }}>
              {perks.map((p) => (
                <div key={p.h} style={{ background: "var(--surface-page)", padding: "38px 34px" }}>
                  <i className={"ph-light " + p.icon} style={{ fontSize: 32, color: "var(--accent-deep)" }} />
                  <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 24, margin: "20px 0 12px" }}>{p.h}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)" }}>{p.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
          <div style={wrap()}>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
              <Eyebrow tone="accent" center rule>How It Works</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: "16px 0 0" }}>From application to delivery.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(28px,4vw,64px)", marginTop: 56 }}>
              {steps.map((s) => (
                <div key={s.n}>
                  <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 40, color: "var(--accent)" }}>{s.n}</div>
                  <div style={{ height: 1, background: "var(--border-strong)", margin: "16px 0 18px" }} />
                  <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 22 }}>{s.h}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)", marginTop: 10 }}>{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section style={{ padding: "var(--section-y) 0" }}>
          <div style={wrap()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
              <div style={{ maxWidth: 560 }}>
                <Eyebrow tone="accent" rule>Trade Projects</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: "16px 0 0" }}>Recently specified by our partners.</h2>
              </div>
              <Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />}>View the lookbook</Button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gridTemplateRows: "repeat(2, 220px)", gap: "var(--gap-card)", marginTop: 44 }}>
              <Figure tone="clay" label="The Oberoi Residences · Mumbai" style={{ gridRow: "span 2" }} />
              <Figure tone="olive" label="Studio Kohl · Goa villa" />
              <Figure tone="bronze" label="Maison Rao · Bengaluru" />
              <Figure tone="stone" label="The Verandah · boutique hotel" />
              <Figure tone="espresso" label="Bandra penthouse" />
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: "var(--section-y) 0" }}>
          <div style={{ ...wrap(), maxWidth: 880, textAlign: "center" }}>
            <Eyebrow tone="on-dark" center>From a Partner</Eyebrow>
            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.25, letterSpacing: "var(--tracking-tight)", margin: "22px 0 0", textWrap: "balance" }}>
              “Art Avenue is the only Indian house we specify internationally. The craft holds up to scrutiny, and the trade team makes a 40-piece order feel like one.”
            </p>
            <div style={{ marginTop: 26, fontSize: 13, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-on-dark-muted)" }}>
              Aisha Kohli · Principal, Studio Kohl
            </div>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section id="trade-apply" style={{ padding: "var(--section-y) 0" }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }}>
            <div>
              <Eyebrow tone="accent" rule>Apply</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, margin: "18px 0 0" }}>Request trade access.</h2>
              <p style={{ fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.7, color: "var(--text-secondary)", marginTop: 18, maxWidth: "42ch" }}>
                Approval typically within two business days. Already a member? <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-accent)" }}>Sign in</a>.
              </p>
              <ul style={{ listStyle: "none", margin: "30px 0 0", padding: 0, display: "grid", gap: 16 }}>
                {["Dedicated design consultant", "Trade pricing within 48 hours", "No minimum order, ever"].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15, color: "var(--text-secondary)" }}>
                    <i className="ph ph-check" style={{ color: "var(--accent)", fontSize: 16 }} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={(e) => e.preventDefault()} style={{ background: "var(--surface-raised)", border: "1px solid var(--border-hairline)", padding: "clamp(28px,3vw,44px)", borderRadius: "var(--radius-sm)", display: "grid", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Input label="First name" placeholder="Aisha" required />
                <Input label="Last name" placeholder="Kohli" required />
              </div>
              <Input label="Studio / Firm" placeholder="Studio Kohl" required />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Input label="Work email" type="email" placeholder="aisha@studiokohl.com" required />
                <Input label="Phone" type="tel" placeholder="+91 ..." />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Select label="Profession" options={["Interior Designer", "Architect", "Hospitality Buyer", "Developer", "Other"]} />
                <Select label="Typical project" options={["Residential", "Hospitality", "Commercial / Office", "Mixed-use"]} />
              </div>
              <Input label="Tell us about your work" multiline placeholder="Sectors, project scale, what you're sourcing for…" />
              <label style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.5 }}>
                <input type="checkbox" style={{ marginTop: 3, accentColor: "var(--accent)" }} />
                I'd like to receive the trade newsletter and project stories.
              </label>
              <div style={{ marginTop: 4 }}>
                <Button variant="primary" fullWidth>Submit Application</Button>
              </div>
              <p style={{ fontSize: 12.5, color: "var(--text-faint)", textAlign: "center", margin: 0 }}>
                <i className="ph ph-lock-simple" style={{ marginRight: 6 }} />Your details are kept private and never shared.
              </p>
            </form>
          </div>
        </section>
      </main>
    );
  }

  window.AATradePage = TradePage;
})();
