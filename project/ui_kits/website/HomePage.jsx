/* Art Avenue — Homepage */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge, CollectionTile, ProductCard } = DS;
  const Figure = window.AAFigure;

  const wrap = (extra = {}) => ({ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", ...extra });

  function SectionHead({ eyebrow, title, intro, center, light }) {
    return (
      <div style={{ maxWidth: center ? 720 : 640, margin: center ? "0 auto" : 0, textAlign: center ? "center" : "left" }}>
        {eyebrow && <Eyebrow tone={light ? "on-dark" : "accent"} rule center={center}>{eyebrow}</Eyebrow>}
        {title && (
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-display-2)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", margin: "18px 0 0", color: light ? "var(--text-on-dark)" : "var(--text-primary)" }}>
            {title}
          </h2>
        )}
        {intro && (
          <p style={{ maxWidth: 560, margin: center ? "18px auto 0" : "18px 0 0", fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: "var(--leading-relaxed)", color: light ? "var(--text-on-dark-muted)" : "var(--text-secondary)" }}>
            {intro}
          </p>
        )}
      </div>
    );
  }

  /* ---------- HERO ---------- */
  function Hero({ onNavigate }) {
    return (
      <section style={{ position: "relative", height: "88vh", minHeight: 620, display: "flex", alignItems: "flex-end" }}>
        <Figure tone="clay" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(34,31,27,.5), rgba(34,31,27,.12) 45%, rgba(34,31,27,.28))" }} />
        <div style={{ ...wrap(), position: "relative", paddingBottom: "clamp(56px,8vh,110px)", width: "100%", boxSizing: "border-box" }}>
          <div style={{ maxWidth: 760 }}>
            <Eyebrow tone="on-dark">The Spring Collection · 2026</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--text-on-dark)", fontSize: "var(--text-display-1)", lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-tight)", margin: "22px 0 0" }}>
              Crafted spaces,<br /><em style={{ color: "#EBD9BE" }}>collected stories.</em>
            </h1>
            <p style={{ color: "rgba(250,246,239,.86)", fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.6, maxWidth: 480, marginTop: 24 }}>
              Handcrafted furniture, rugs and objects for homes that are made to be lived in — and remembered.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
              <Button variant="primary" onClick={() => onNavigate("collection", "New Arrivals")}>Explore the Collection</Button>
              <Button variant="secondary" onDark iconRight={<i className="ph ph-arrow-right" />} onClick={() => onNavigate("trade")}>Trade &amp; Design</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- SIGNATURE COLLECTIONS ---------- */
  function Signature({ onNavigate }) {
    const tiles = [
      { eyebrow: "01 — Furniture", title: "Furniture", tone: "clay", span: true },
      { eyebrow: "02 — Rugs", title: "Rugs", tone: "olive" },
      { eyebrow: "03 — Lighting", title: "Lighting", tone: "bronze" },
      { eyebrow: "04 — Decor", title: "Decor", tone: "stone", toneText: "light" },
      { eyebrow: "05 — Wall Art", title: "Wall Art", tone: "sand", toneText: "light" },
    ];
    return (
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div style={wrap()}>
          <SectionHead eyebrow="Signature Collections" title="Five disciplines, one point of view." intro="Each category is curated and commissioned in-house — a considered edit rather than an endless catalog." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "260px 260px", gap: "var(--gap-card)", marginTop: 48 }}>
            {tiles.map((t, i) => (
              <CollectionTile
                key={t.title}
                eyebrow={t.eyebrow}
                title={t.title}
                tone={t.toneText || "dark"}
                cta="Explore"
                onClick={(e) => { e.preventDefault(); onNavigate("collection", t.title); }}
                style={t.span ? { gridRow: "span 2", minHeight: 0 } : { minHeight: 0 }}
              >
                <window.AAFigure tone={t.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
              </CollectionTile>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- CRAFTSMANSHIP STORY ---------- */
  function Craft() {
    const details = [
      { tone: "espresso", label: "Joinery by hand" },
      { tone: "bronze", label: "Cast brass" },
      { tone: "olive", label: "Natural-dyed wool" },
    ];
    return (
      <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
        <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--gap-card)" }}>
            <Figure tone="espresso" ratio="3/4" label="The maker's hand" style={{ gridRow: "span 2" }} />
            <Figure tone="clay" ratio="4/3" />
            <Figure tone="stone" ratio="4/3" />
          </div>
          <div>
            <SectionHead
              eyebrow="The Atelier"
              title="Made slowly, by hand, to last."
              intro="Every piece begins in the hands of an artisan — turned, joined and finished the way furniture was always meant to be made."
            />
            <ul style={{ listStyle: "none", margin: "28px 0 0", padding: 0, display: "grid", gap: 14 }}>
              {["Workshops across India, partnered for generations", "Solid wood, hand-knotted wool, cast brass & stone", "Made to order — never mass-produced"].map((t) => (
                <li key={t} style={{ display: "flex", gap: 12, alignItems: "baseline", fontSize: "var(--text-body)", color: "var(--text-secondary)" }}>
                  <i className="ph ph-circle" style={{ fontSize: 7, color: "var(--accent)", transform: "translateY(-2px)" }} />
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />}>Inside the Atelier</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- NEW ARRIVALS RAIL ---------- */
  function Arrivals({ onNavigate }) {
    const products = [
      { category: "Seating", name: "Marwar Lounge Chair", price: "₹ 1,48,000", note: "Made to order", tone: "clay", badge: "Handcrafted" },
      { category: "Rugs", name: "Aravalli Hand-Knotted Rug", price: "₹ 2,20,000", tone: "olive", badge: "New" },
      { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", note: "Ships in 3 wks", tone: "bronze" },
      { category: "Tables", name: "Udai Travertine Coffee Table", price: "₹ 96,000", tone: "stone", badge: "New" },
    ];
    return (
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div style={wrap()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <SectionHead eyebrow="Just Arrived" title="New this season" />
            <Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />} onClick={() => onNavigate("collection", "New Arrivals")}>View all new</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)", marginTop: 44 }}>
            {products.map((p) => (
              <ProductCard
                key={p.name}
                category={p.category}
                name={p.name}
                price={p.price}
                note={p.note}
                badge={p.badge ? <Badge variant="on-image">{p.badge}</Badge> : null}
                onClick={(e) => { e.preventDefault(); onNavigate("product", p.name); }}
              >
                <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
              </ProductCard>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- SHOP BY ROOM ---------- */
  function Rooms({ onNavigate }) {
    const rooms = [
      { title: "Living Room", tone: "clay" },
      { title: "Dining", tone: "espresso" },
      { title: "Bedroom", tone: "stone", toneText: "light" },
      { title: "Study", tone: "olive" },
      { title: "Outdoor", tone: "bronze" },
    ];
    return (
      <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
        <div style={wrap()}>
          <SectionHead center eyebrow="Shop by Room" title="Begin with the space." intro="See how our pieces live together — then make the room your own." />
        </div>
        <div style={{ display: "flex", gap: "var(--gap-tile)", marginTop: 48, overflow: "hidden" }}>
          {rooms.map((r) => (
            <CollectionTile
              key={r.title}
              title={r.title}
              tone={r.toneText || "dark"}
              cta="Shop the room"
              onClick={(e) => { e.preventDefault(); onNavigate("collection", r.title); }}
              style={{ flex: 1, minHeight: 440, borderRadius: 0 }}
            >
              <window.AAFigure tone={r.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
            </CollectionTile>
          ))}
        </div>
      </section>
    );
  }

  /* ---------- FEATURED COLLECTION (editorial full-bleed) ---------- */
  function Featured({ onNavigate }) {
    return (
      <section style={{ position: "relative", minHeight: 620, display: "flex", alignItems: "center" }}>
        <Figure tone="espresso" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(34,31,27,.74), rgba(34,31,27,.25) 60%, transparent)" }} />
        <div style={{ ...wrap(), position: "relative", width: "100%", boxSizing: "border-box" }}>
          <div style={{ maxWidth: 520 }}>
            <Eyebrow tone="on-dark" rule>The Featured Collection</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--text-on-dark)", fontSize: "var(--text-display-2)", lineHeight: 1.06, letterSpacing: "var(--tracking-tight)", margin: "20px 0 0" }}>
              The Marwar Collection
            </h2>
            <p style={{ color: "rgba(250,246,239,.84)", fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.7, marginTop: 20 }}>
              An ode to the courtyards of Rajasthan — low silhouettes, hand-carved frames, and the deep warmth of aged teak and brass.
            </p>
            <div style={{ marginTop: 34 }}>
              <Button variant="secondary" onDark iconRight={<i className="ph ph-arrow-right" />} onClick={() => onNavigate("collection", "The Marwar Collection")}>
                Explore the Collection
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- TRADE BAND ---------- */
  function Trade({ onNavigate }) {
    const perks = [
      { icon: "ph-medal", h: "Trade Pricing", t: "Member pricing across every collection, with dedicated account support." },
      { icon: "ph-pencil-ruler", h: "Customization", t: "Bespoke dimensions, finishes and materials for your projects." },
      { icon: "ph-swatches", h: "Sampling", t: "Material and finish samples shipped to your studio." },
      { icon: "ph-buildings", h: "Project & Bulk", t: "Procurement and delivery logistics for residential & hospitality." },
    ];
    return (
      <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: "var(--section-y) 0" }}>
        <div style={wrap()}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
            <SectionHead light eyebrow="Trade & Design Program" title="For designers & architects." />
            <p style={{ fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.7, color: "var(--text-on-dark-muted)" }}>
              We partner with interior designers, architects and hospitality buyers to source with confidence — from a single statement piece to an entire property.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, marginTop: 56, background: "var(--border-on-dark)", border: "1px solid var(--border-on-dark)" }}>
            {perks.map((p) => (
              <div key={p.h} style={{ background: "var(--surface-dark)", padding: "34px 28px" }}>
                <i className={"ph-light " + p.icon} style={{ fontSize: 30, color: "var(--accent-soft)" }} />
                <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 22, margin: "20px 0 10px" }}>{p.h}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-on-dark-muted)" }}>{p.t}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Button variant="accent" onClick={() => onNavigate("trade")}>Request Trade Access</Button>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- CUSTOMER HOMES ---------- */
  function Homes() {
    const imgs = [
      { tone: "clay", label: "@studio.kohl" },
      { tone: "stone", label: "@thebandracs" },
      { tone: "olive", label: "@maison.rao" },
      { tone: "bronze", label: "@verandah.co" },
    ];
    return (
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div style={wrap()}>
          <SectionHead center eyebrow="Customer Homes" title="Lived in, beautifully." intro="Real spaces, shared by the homeowners and designers who made them. Tag #ArtAvenueAtHome." />
        </div>
        <div style={{ ...wrap({ marginTop: 48 }), display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)" }}>
          {imgs.map((m) => (
            <Figure key={m.label} tone={m.tone} ratio="1/1" label={m.label} />
          ))}
        </div>
      </section>
    );
  }

  /* ---------- JOURNAL ---------- */
  function Journal({ onNavigate }) {
    const posts = [
      { cat: "Styling", title: "How to layer a living room like a designer", read: "6 min", tone: "stone" },
      { cat: "Materials", title: "Why hand-knotted wool ages so beautifully", read: "4 min", tone: "olive" },
      { cat: "At Home", title: "Inside a Bandra apartment, restored", read: "8 min", tone: "clay" },
    ];
    return (
      <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
        <div style={wrap()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <SectionHead eyebrow="The Journal" title="Design notes & stories" />
            <Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />} onClick={() => onNavigate("collection", "Journal")}>Read the Journal</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gap-card)", marginTop: 44 }}>
            {posts.map((p) => (
              <a key={p.title} href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", color: "inherit" }}>
                <Figure tone={p.tone} ratio="3/2" />
                <div style={{ marginTop: 18, display: "flex", gap: 12, alignItems: "center", fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--text-accent)" }}>{p.cat}</span>
                  <span>·</span>
                  <span>{p.read} read</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 24, lineHeight: 1.2, margin: "12px 0 0", maxWidth: "92%" }}>{p.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- BRAND STATEMENT ---------- */
  function Statement() {
    return (
      <section style={{ background: "var(--surface-page)", padding: "calc(var(--section-y) * 1.1) 0", textAlign: "center" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 var(--gutter)" }}>
          <Eyebrow tone="accent" center rule>Art Avenue</Eyebrow>
          <p style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(28px,3.6vw,48px)", lineHeight: 1.18, letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)", margin: "26px 0 0", textWrap: "balance" }}>
            We are not a furniture store. We are a design house — curating the handcrafted, the considered, and the made-to-last, so your home can hold its stories for generations.
          </p>
        </div>
      </section>
    );
  }

  function HomePage({ onNavigate }) {
    const nav = onNavigate || (() => {});
    return (
      <main>
        <Hero onNavigate={nav} />
        <Signature onNavigate={nav} />
        <Craft />
        <Arrivals onNavigate={nav} />
        <Rooms onNavigate={nav} />
        <Featured onNavigate={nav} />
        <Trade onNavigate={nav} />
        <Homes />
        <Journal onNavigate={nav} />
        <Statement />
      </main>
    );
  }

  window.AAHomePage = HomePage;
})();
