/* Art Avenue — Collection page (discovery + merchandising) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge, Select, ProductCard, CollectionTile } = DS;
  const Figure = window.AAFigure;
  const wrap = (extra = {}) => ({ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", ...extra });

  const PRODUCTS = [
    { category: "Seating", name: "Marwar Lounge Chair", price: "₹ 1,48,000", note: "Made to order", tone: "clay", commerce: "made-to-order" },
    { category: "Seating", name: "Kashi Linen Sofa", price: "₹ 3,20,000", tone: "stone", commerce: "made-to-order" },
    { category: "Tables", name: "Udai Travertine Coffee Table", price: "₹ 96,000", tone: "bronze", commerce: "in-stock" },
    { category: "Seating", name: "Pichola Cane Armchair", price: "₹ 84,000", note: "Ships in 3 wks", tone: "olive", commerce: "in-stock" },
    { category: "Storage", name: "Jodha Carved Sideboard", price: "₹ 2,60,000", tone: "espresso", commerce: "customizable" },
    { category: "Tables", name: "Amer Marble Dining Table", price: "₹ 4,10,000", tone: "stone", commerce: "customizable" },
    { category: "Seating", name: "Bagh Lounge Daybed", price: "Project pricing", tone: "clay", commerce: "project" },
    { category: "Storage", name: "Mehrangarh Bar Cabinet", price: "₹ 1,96,000", note: "Made to order", tone: "bronze", commerce: "made-to-order" },
    { category: "Tables", name: "Chittor Nesting Tables", price: "₹ 72,000", tone: "olive", commerce: "in-stock" },
    { category: "Cushions", name: "Sanganeri Block-Print Cushion", price: "from ₹ 3,200", tone: "clay", commerce: "made-to-order" },
  ];

  function FilterGroup({ title, options, type = "check", defaultOpen = true }) {
    const [open, setOpen] = React.useState(defaultOpen);
    return (
      <div style={{ borderBottom: "1px solid var(--border-hairline)", padding: "20px 0" }}>
        <button onClick={() => setOpen((o) => !o)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-primary)" }}>
          {title}
          <i className={"ph ph-" + (open ? "minus" : "plus")} style={{ fontSize: 13, color: "var(--text-muted)" }} />
        </button>
        {open && (
          <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "grid", gap: 12 }}>
            {options.map((o) => (
              <li key={o.label}>
                <label style={{ display: "flex", alignItems: "center", gap: 11, cursor: "pointer", fontSize: 14, color: "var(--text-secondary)" }}>
                  <span style={{ width: 15, height: 15, border: "1px solid var(--border-strong)", borderRadius: type === "radio" ? "50%" : "var(--radius-xs)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: o.on ? "var(--accent)" : "transparent", borderColor: o.on ? "var(--accent)" : "var(--border-strong)" }}>
                    {o.on && <i className="ph-bold ph-check" style={{ fontSize: 9, color: "#fff" }} />}
                  </span>
                  <span style={{ flex: 1 }}>{o.label}</span>
                  {o.count != null && <span style={{ color: "var(--text-faint)", fontSize: 12 }}>{o.count}</span>}
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
      <aside style={{ position: "sticky", top: 96, alignSelf: "start" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 4 }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500 }}>Filter</span>
          <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "var(--text-accent)", letterSpacing: ".04em" }}>Clear all</button>
        </div>
        {isRug ? (
          <React.Fragment>
            <FilterGroup title="Size" options={[{ label: "5×8 ft", count: 22 }, { label: "6×9 ft", count: 18, on: true }, { label: "8×10 ft", count: 14 }, { label: "9×12 ft", count: 9 }, { label: "Runner", count: 11 }, { label: "Round", count: 7 }]} />
            <FilterGroup title="Material" options={[{ label: "Hand-Knotted Wool", count: 26 }, { label: "Flatweave", count: 14 }, { label: "Jute & Natural", count: 12 }, { label: "Cotton", count: 9 }, { label: "Silk Blend", count: 5 }]} />
            <FilterGroup title="Colour" type="check" options={[{ label: "Ivory & Sand", count: 19 }, { label: "Charcoal", count: 12 }, { label: "Terracotta", count: 8 }, { label: "Indigo", count: 6 }]} />
            <FilterGroup title="Pattern" defaultOpen={false} options={[{ label: "Solid", count: 14 }, { label: "Geometric", count: 16 }, { label: "Botanical", count: 9 }, { label: "Abstract", count: 7 }]} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FilterGroup title="Category" options={[{ label: "Seating", count: 42, on: true }, { label: "Tables", count: 28 }, { label: "Storage", count: 19 }, { label: "Beds", count: 11 }]} />
            <FilterGroup title="Material" options={[{ label: "Solid Teak", count: 31 }, { label: "Oak", count: 22 }, { label: "Cane & Rattan", count: 14 }, { label: "Marble & Stone", count: 9 }, { label: "Brass", count: 7 }]} />
            <FilterGroup title="Availability" type="radio" options={[{ label: "In stock", count: 38 }, { label: "Made to order", count: 64, on: true }]} />
            <FilterGroup title="Price" type="radio" defaultOpen={false} options={[{ label: "Under ₹ 1,00,000" }, { label: "₹ 1,00,000 – ₹ 2,50,000" }, { label: "₹ 2,50,000 +" }]} />
          </React.Fragment>
        )}
      </aside>
    );
  }

  /* horizontal facet chip row */
  function FacetRow({ label, options, onPick }) {
    return (
      <div style={{ marginTop: 26 }}>
        <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 14 }}>{label}</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {options.map((o) => (
            <button key={o} onClick={() => onPick && onPick(o)} style={{ padding: "9px 18px", borderRadius: "var(--radius-pill)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: ".02em", background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-strong)" }}>{o}</button>
          ))}
        </div>
      </div>
    );
  }

  /* "Shop by Room/Collection" image-tile row */
  function ShopByTiles({ label, items, onNavigate }) {
    return (
      <div style={{ marginTop: 30 }}>
        <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 16 }}>{label}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--gap-card)" }}>
          {items.map((it) => (
            <CollectionTile key={it.t} title={it.t} tone={it.l || "dark"} cta="" onClick={(e) => { e.preventDefault(); onNavigate("collection", it.t); }} style={{ minHeight: 170, borderRadius: "var(--radius-xs)" }}>
              <window.AAFigure tone={it.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
            </CollectionTile>
          ))}
        </div>
      </div>
    );
  }

  /* curated edits tabs */
  function EditTabs() {
    const tabs = ["New Arrivals", "Best Sellers", "Designer Favourites", "Trending Now"];
    const [active, setActive] = React.useState(0);
    return (
      <div style={{ display: "flex", gap: 28, borderBottom: "1px solid var(--border-hairline)", marginBottom: 32, flexWrap: "wrap" }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActive(i)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 0 14px", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: active === i ? "var(--text-primary)" : "var(--text-muted)", borderBottom: "2px solid " + (active === i ? "var(--accent)" : "transparent"), marginBottom: -1 }}>{t}</button>
        ))}
      </div>
    );
  }

  /* Rug size guide drawer */
  function RugGuide({ open, onClose }) {
    const rooms = [
      { h: "Living Room", t: "Front legs of the sofa & chairs rest on the rug; leave 20–25 cm of floor around the edges.", z: "8×10 ft / 9×12 ft" },
      { h: "Dining Room", t: "Extend ~60 cm beyond the table so chairs stay on the rug when pulled out.", z: "8×10 ft (6-seat) · 9×12 ft (8-seat)" },
      { h: "Bedroom", t: "Two-thirds under the bed with a soft border to step onto, or runners either side.", z: "8×10 ft (queen) · 9×12 ft (king)" },
      { h: "Runners & Hallways", t: "Leave 10–15 cm of floor on each side; a runner ~50 cm narrower than the corridor.", z: "2.5×8 ft / 2.5×10 ft" },
    ];
    return ReactDOM.createPortal(
      <React.Fragment>
        <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(34,31,27,.46)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur-base)", zIndex: 80 }} />
        <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(480px, 92vw)", background: "var(--surface-page)", transform: open ? "translateX(0)" : "translateX(101%)", transition: "transform var(--dur-slow) var(--ease-luxe)", zIndex: 81, overflowY: "auto", boxShadow: "var(--shadow-overlay)", padding: "30px 32px 60px" }}>
          <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 18, right: 22, background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "var(--text-primary)" }}><i className="ph-light ph-x" /></button>
          <Eyebrow tone="accent">Rug Size Guide</Eyebrow>
          <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 30, margin: "12px 0 8px" }}>Choosing the right size</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-secondary)", margin: "0 0 8px" }}>The most common mistake is going too small. A rug should sit under the main furniture and anchor the arrangement — not float in the middle of the room.</p>
          {rooms.map((r) => (
            <div key={r.h} style={{ borderTop: "1px solid var(--border-hairline)", padding: "16px 0" }}>
              <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 18, margin: "0 0 6px" }}>{r.h}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>{r.t}</p>
              <span style={{ display: "inline-block", marginTop: 6, fontSize: 12, fontWeight: 600, letterSpacing: ".04em", color: "var(--text-accent)" }}>Recommended · {r.z}</span>
            </div>
          ))}
          <div style={{ background: "var(--surface-accent-tint)", borderRadius: "var(--radius-xs)", padding: "16px 18px", marginTop: 18 }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 8 }}>Cotton vs Chenille</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}><strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Cotton</strong> — crisp, breathable, easy-care; best for low-traffic &amp; layering. <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Super-Soft Chenille</strong> — plush, denser, more durable; best for living rooms &amp; bedrooms.</p>
          </div>
        </div>
      </React.Fragment>,
      document.body
    );
  }

  function CollectionPage({ onNavigate, title }) {
    const nav = onNavigate || (() => {});
    const heading = title && title !== "Furniture" ? title : "Furniture";
    const isRug = /rug/i.test(heading);
    const [guide, setGuide] = React.useState(false);

    const rooms = [
      { t: "Living Room", tone: "clay" }, { t: "Dining", tone: "espresso" },
      { t: "Bedroom", tone: "stone", l: "light" }, { t: "Study", tone: "olive" }, { t: "Outdoor", tone: "bronze" },
    ];

    return (
      <main style={{ background: "var(--surface-page)" }}>
        <RugGuide open={guide} onClose={() => setGuide(false)} />

        {/* Collection hero */}
        <section style={{ position: "relative", height: 420, display: "flex", alignItems: "center", textAlign: "center" }}>
          <Figure tone="espresso" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(34,31,27,.5), rgba(34,31,27,.3))" }} />
          <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "0 var(--gutter)" }}>
            <Eyebrow tone="on-dark" center>{isRug ? "The Rug Atelier" : "Signature Collection"}</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--text-on-dark)", fontSize: "var(--text-display-2)", lineHeight: 1.05, margin: "16px 0 0" }}>{heading}</h1>
            <p style={{ color: "rgba(250,246,239,.84)", fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.6, marginTop: 16 }}>
              {isRug
                ? "Hand-knotted, flatweave and natural-fibre rugs — dyed and woven by hand to ground a room for a generation."
                : "Hand-built seating, tables and storage in solid wood, cane and stone — designed to anchor a room for decades."}
            </p>
            {isRug && (
              <div style={{ marginTop: 26 }}>
                <Button variant="secondary" onDark iconRight={<i className="ph ph-arrow-right" />} onClick={() => setGuide(true)}>Need Help Choosing a Rug Size?</Button>
              </div>
            )}
          </div>
        </section>

        {/* Shop by — merchandising */}
        <section style={{ ...wrap({ paddingTop: "var(--section-y-tight)" }) }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow tone="accent" rule>Begin Your Edit</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h2)", lineHeight: 1.1, margin: "14px 0 0" }}>Shop the way you design.</h2>
          </div>
          {isRug ? (
            <React.Fragment>
              <FacetRow label="Shop by Size" options={["3×5", "4×6", "5×8", "6×9", "8×10", "9×12", "Runner", "Round"]} onPick={() => {}} />
              <ShopByTiles label="Shop by Room" items={rooms} onNavigate={nav} />
              <FacetRow label="Shop by Material" options={["Hand-Knotted Wool", "Flatweave", "Jute & Natural", "Cotton", "Silk Blend"]} />
              <FacetRow label="Shop by Colour" options={["Ivory & Sand", "Charcoal", "Terracotta", "Indigo", "Olive"]} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ShopByTiles label="Shop by Room" items={rooms} onNavigate={nav} />
              <FacetRow label="Shop by Style" options={["Contemporary", "Classic", "Cane & Rattan", "Hand-Carved", "Minimal"]} />
              <FacetRow label="Shop by Material" options={["Solid Teak", "Mango Wood", "Oak", "Marble & Stone", "Brass"]} />
            </React.Fragment>
          )}
        </section>

        {/* Toolbar */}
        <div style={{ borderBottom: "1px solid var(--border-hairline)", borderTop: "1px solid var(--border-hairline)", position: "sticky", top: 76, background: "var(--surface-page)", zIndex: 20, marginTop: "var(--section-y-tight)" }}>
          <div style={{ ...wrap(), display: "flex", justifyContent: "space-between", alignItems: "center", height: 64 }}>
            <span style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: ".02em" }}>136 pieces</span>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {isRug && (
                <button onClick={() => setGuide(true)} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", padding: "9px 14px", cursor: "pointer", fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-primary)" }}>
                  <i className="ph ph-ruler" style={{ fontSize: 14 }} /> Rug Size Guide
                </button>
              )}
              <button style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", padding: "9px 14px", cursor: "pointer", fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-primary)" }}>
                <i className="ph ph-sliders-horizontal" style={{ fontSize: 14 }} /> Filters
              </button>
              <div style={{ minWidth: 220 }}>
                <Select options={["Sort: Featured", "Newest", "Price: Low to High", "Price: High to Low"]} />
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ ...wrap({ paddingTop: 48, paddingBottom: "var(--section-y)" }), display: "grid", gridTemplateColumns: "248px 1fr", gap: 48, alignItems: "start" }}>
          <Sidebar isRug={isRug} />
          <div>
            <EditTabs />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gap-card)" }}>
              {PRODUCTS.slice(0, 6).map((p) => (
                <ProductCard key={p.name} category={p.category} name={p.name} price={p.price} note={p.note}
                  badge={p.commerce ? <window.AACommerceBadge state={p.commerce} /> : null}
                  onClick={(e) => { e.preventDefault(); nav("product", p.name); }}>
                  <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                </ProductCard>
              ))}
            </div>

            {/* Room inspiration banner */}
            <div style={{ margin: "var(--gap-card) 0" }}>
              <CollectionTile tone="dark" eyebrow="Room Inspiration" title={isRug ? "The layered living room" : "The slow-living living room"} cta="Shop the look" style={{ minHeight: 320 }}>
                <window.AAFigure tone="clay" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
              </CollectionTile>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gap-card)" }}>
              {PRODUCTS.slice(6).map((p) => (
                <ProductCard key={p.name} category={p.category} name={p.name} price={p.price} note={p.note}
                  badge={p.commerce ? <window.AACommerceBadge state={p.commerce} /> : null}
                  onClick={(e) => { e.preventDefault(); nav("product", p.name); }}>
                  <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                </ProductCard>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 56 }}>
              <Button variant="secondary">Load more</Button>
            </div>
          </div>
        </div>

        {/* Related collections */}
        <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
          <div style={wrap()}>
            <Eyebrow tone="accent" rule>Continue Exploring</Eyebrow>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gap-card)", marginTop: 32 }}>
              {[{ t: "Rugs", tone: "olive" }, { t: "Lighting", tone: "bronze" }, { t: "Decor", tone: "stone", l: "light" }].map((c) => (
                <CollectionTile key={c.t} title={c.t} tone={c.l || "dark"} cta="Explore" onClick={(e) => { e.preventDefault(); nav("collection", c.t); }} style={{ minHeight: 300 }}>
                  <window.AAFigure tone={c.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                </CollectionTile>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  window.AACollectionPage = CollectionPage;
})();
