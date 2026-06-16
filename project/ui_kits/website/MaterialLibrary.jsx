/* Art Avenue — Material & Finish Library (product-driven · scalable)
 * The library is organised by product category and rendered from the LIBRARY
 * data map alone — no layout is tied to a specific material or technique.
 * Add a category, a group or an item and the page extends itself; nothing
 * here needs redesigning as the range grows.
 */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const wrap = (extra = {}) => ({ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", ...extra });
  const waHref = (msg) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);

  /* category → groups → items. Everything the page renders comes from here. */
  const LIBRARY = {
    Furniture: {
      groups: [
        { h: "Wood Finishes", note: "Solid hardwoods, hand-rubbed and oiled.", items: [
          { name: "Natural Teak", tone: "bronze", d: "Warm honey grain, ages to amber." },
          { name: "Walnut", tone: "clay", d: "Rich chocolate tone, fine figure." },
          { name: "Dark Walnut", tone: "espresso", d: "Deep, near-espresso, matte." },
          { name: "Ebonised Oak", tone: "espresso", d: "Blackened open grain." },
        ] },
        { h: "Fabric & Upholstery", note: "Natural and performance weaves.", items: [
          { name: "Belgian Linen", tone: "stone", d: "Soft, breathable, lived-in." },
          { name: "Performance Weave", tone: "sand", d: "Stain-resistant, family-ready." },
          { name: "Bouclé", tone: "stone", d: "Textured, plush, tactile." },
          { name: "Aniline Leather", tone: "clay", d: "Full-grain, patinas beautifully." },
        ] },
        { h: "Metal Finishes", note: "Cast and brushed by hand.", items: [
          { name: "Aged Brass", tone: "bronze", d: "Warm, lightly burnished." },
          { name: "Blackened Steel", tone: "espresso", d: "Matte gunmetal." },
          { name: "Antique Bronze", tone: "clay", d: "Dark, dimensional patina." },
        ] },
        { h: "Stone & Surface", note: "Quarried and honed.", items: [
          { name: "Travertine", tone: "sand", d: "Soft cream, natural pitting." },
          { name: "Carrara Marble", tone: "stone", d: "Cool white, grey veining." },
          { name: "Kota Stone", tone: "olive", d: "Earthy green-grey, matte." },
        ] },
      ],
      methods: [["Mortise & tenon joinery", "Interlocked, pegged joints — never glue-only shortcuts."], ["Hand-tied suspension", "Webbed, hand-knotted seat support that lasts decades."], ["Hand-rubbed finishing", "Oils and waxes worked in by hand, layer by layer."]],
    },
    Rugs: {
      groups: [
        { h: "Pile Materials", note: "Spun and dyed for the hand.", items: [
          { name: "Highland Wool", tone: "olive", d: "Dense, resilient, decades of wear." },
          { name: "Cotton", tone: "stone", d: "Crisp, breathable, flatweave-friendly." },
          { name: "Mulberry Silk", tone: "sand", d: "Lustrous sheen, fine detail." },
          { name: "Jute & Natural", tone: "clay", d: "Earthy, textural, hard-wearing." },
          { name: "Cotton Chenille", tone: "bronze", d: "Plush, soft underfoot." },
        ] },
        { h: "Construction", note: "How the rug is built.", items: [
          { name: "Hand-Knotted", tone: "olive", d: "Tied knot by knot; the most enduring." },
          { name: "Hand-Tufted", tone: "clay", d: "Punched and sheared; plush, faster." },
          { name: "Flat-Weave", tone: "stone", d: "No pile, reversible, light." },
          { name: "Hand-Loomed", tone: "sand", d: "Subtle loop or cut-pile texture." },
        ] },
      ],
      methods: [["Hand-knotting", "100–120 knots per square inch on vertical looms."], ["Natural dyeing", "Vegetable and low-impact dyes; gentle abrash."], ["Hand-shearing & binding", "Pile sheared and edges bound by hand."]],
    },
    Cushions: {
      groups: [
        { h: "Fabrics", note: "Natural fibres, chosen for the hand.", items: [
          { name: "Cotton", tone: "stone", d: "Breathable, easy, everyday." },
          { name: "Washed Linen", tone: "sand", d: "Soft slub, relaxed drape." },
          { name: "Cotton Velvet", tone: "bronze", d: "Deep pile, shifting sheen." },
          { name: "Wool", tone: "olive", d: "Warm, textured, substantial." },
          { name: "Full-Grain Leather", tone: "espresso", d: "Saddle-stitched, patinas." },
        ] },
        { h: "Techniques", note: "Many crafts, one template.", items: [
          { name: "Block Print", tone: "clay", d: "Hand-carved blocks, natural dyes." },
          { name: "Handwoven", tone: "stone", d: "Yarn-dyed, woven on pit looms." },
          { name: "Hand-Embroidered", tone: "bronze", d: "Stitched motif by motif." },
          { name: "Appliqué", tone: "olive", d: "Cut and layered by hand." },
          { name: "Hand-Painted", tone: "sand", d: "Brushed individually." },
        ] },
      ],
      methods: [["Small-batch making", "Crafted in short runs by textile artisans."], ["Concealed finishing", "Hidden zips, piped or saddle-stitched edges."], ["Ethical inserts", "Feather-and-down or fibre, cambric-cased."]],
    },
    Lighting: {
      groups: [
        { h: "Metals", note: "Cast, spun and finished by hand.", items: [
          { name: "Aged Brass", tone: "bronze", d: "Warm, softly burnished." },
          { name: "Blackened Steel", tone: "espresso", d: "Matte, architectural." },
          { name: "Antique Bronze", tone: "clay", d: "Dark, dimensional patina." },
        ] },
        { h: "Shades & Diffusers", note: "How the light is softened.", items: [
          { name: "Alabaster", tone: "sand", d: "Glows warm and even." },
          { name: "Hand-Blown Glass", tone: "stone", d: "Seeded, characterful." },
          { name: "Rattan", tone: "clay", d: "Woven, casts soft shadow." },
          { name: "Linen Shade", tone: "sand", d: "Diffuse, quiet light." },
        ] },
      ],
      methods: [["Hand-finishing", "Living metal finishes that deepen with time."], ["Rewireable build", "Made to be serviced, not replaced."], ["Considered light", "Designed to flatter a room after dark."]],
    },
    Decor: {
      groups: [
        { h: "Ceramic & Stone", note: "Thrown, carved and fired.", items: [
          { name: "Stoneware", tone: "stone", d: "Matte glaze, tactile body." },
          { name: "Terracotta", tone: "clay", d: "Warm, earthen, unglazed." },
          { name: "Marble", tone: "sand", d: "Honed, cool, veined." },
          { name: "Soapstone", tone: "olive", d: "Soft grey-green, smooth." },
        ] },
        { h: "Metal & Wood", note: "Worked by makers' hands.", items: [
          { name: "Cast Brass", tone: "bronze", d: "Weighty, warm, lasting." },
          { name: "Teak", tone: "bronze", d: "Carved, oiled, golden." },
          { name: "Mango Wood", tone: "clay", d: "Open grain, characterful." },
        ] },
      ],
      methods: [["Hand-throwing & carving", "Each object made individually."], ["Honest materials", "Finished to feel like themselves."], ["Tactile by design", "Made to be handled and lived with."]],
    },
  };
  const CATS = Object.keys(LIBRARY);

  function Swatch({ it }) {
    return (
      <div style={{ background: "var(--surface-raised)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-sm)", overflow: "hidden" }}>
        <Figure tone={it.tone} ratio="4/3" />
        <div style={{ padding: "16px 18px 18px" }}>
          <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 19, margin: 0 }}>{it.name}</h4>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5, margin: "6px 0 14px" }}>{it.d}</p>
          <a href={waHref("Hello Art Avenue, I'd like to request a sample of " + it.name + ". I understand a sample fee of ₹999–₹2,999 applies.")} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7, fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)" }}>
            <i className="ph ph-swatches" /> Request Sample · from ₹999
          </a>
        </div>
      </div>
    );
  }

  function MaterialLibrary({ onNavigate, name }) {
    const nav = onNavigate || (() => {});
    const guess = CATS.find((c) => new RegExp(c.replace(/s$/, ""), "i").test(name || "")) || "Furniture";
    const [cat, setCat] = React.useState(guess);
    const data = LIBRARY[cat] || LIBRARY.Furniture;

    return (
      <main style={{ background: "var(--surface-page)" }}>
        {/* hero */}
        <section style={{ position: "relative", height: 380, display: "flex", alignItems: "center", textAlign: "center" }}>
          <Figure tone="espresso" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(34,31,27,.55), rgba(34,31,27,.32))" }} />
          <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "0 var(--gutter)" }}>
            <Eyebrow tone="on-dark" center>The Library</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--text-on-dark)", fontSize: "var(--text-display-2)", lineHeight: 1.05, margin: "16px 0 0" }}>Materials &amp; Finishes</h1>
            <p style={{ color: "rgba(250,246,239,.84)", fontSize: "var(--text-body-lg)", fontWeight: 300, lineHeight: 1.6, marginTop: 16 }}>
              Every wood, weave, fibre, metal and stone we work across the house — and a sample of any, sent to your door.
            </p>
          </div>
        </section>

        {/* category tabs */}
        <section style={{ position: "sticky", top: 76, zIndex: 20, background: "var(--surface-page)", borderBottom: "1px solid var(--border-hairline)" }}>
          <div style={{ ...wrap(), display: "flex", gap: 8, flexWrap: "wrap", padding: "14px var(--gutter)" }}>
            {CATS.map((c) => {
              const on = c === cat;
              return (
                <button key={c} onClick={() => setCat(c)} style={{ padding: "9px 18px", borderRadius: "var(--radius-pill)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", background: on ? "var(--text-primary)" : "transparent", color: on ? "var(--surface-page)" : "var(--text-secondary)", border: "1px solid " + (on ? "var(--text-primary)" : "var(--border-strong)"), transition: "background var(--dur-fast), color var(--dur-fast)" }}>{c}</button>
              );
            })}
          </div>
        </section>

        {/* intro + request-all */}
        <section style={{ ...wrap({ paddingTop: "var(--section-y-tight)", paddingBottom: "var(--section-y-tight)" }), display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <div style={{ maxWidth: 560 }}>
            <Eyebrow tone="accent" rule>Feel It First</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h2)", lineHeight: 1.1, margin: "14px 0 0" }}>{cat} materials, in your hands.</h2>
            <p style={{ fontSize: 14.5, color: "var(--text-secondary)", lineHeight: 1.6, margin: "12px 0 0" }}>Samples are ₹999–₹2,999 each depending on the material — a small, considered step before a significant piece.</p>
          </div>
          <a href={waHref("Hello Art Avenue, I'd like to request a " + cat + " material & finish sample set. I understand a per-sample fee of ₹999–₹2,999 applies.")} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <Button variant="primary" iconLeft={<i className="ph ph-swatches" />}>Request a Sample Set</Button>
          </a>
        </section>

        {/* groups for the active category */}
        {data.groups.map((g, gi) => (
          <section key={cat + g.h} style={{ background: gi % 2 ? "var(--surface-alt)" : "var(--surface-page)", padding: "var(--section-y-tight) 0" }}>
            <div style={wrap()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h3)", margin: 0 }}>{g.h}</h3>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{g.note}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)" }}>
                {g.items.map((it) => <Swatch key={it.name} it={it} />)}
              </div>
            </div>
          </section>
        ))}

        {/* construction methods — per category */}
        <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: "var(--section-y) 0" }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
            <Figure tone="espresso" ratio="4/3" label="Made by hand, in India" />
            <div>
              <Eyebrow tone="on-dark" rule>How It's Made · {cat}</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, margin: "16px 0 0" }}>How it's made matters.</h2>
              <ul style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "grid", gap: 16 }}>
                {data.methods.map(([h, dd]) => (
                  <li key={h} style={{ borderTop: "1px solid var(--border-on-dark)", paddingTop: 16 }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 20 }}>{h}</div>
                    <div style={{ fontSize: 14, color: "var(--text-on-dark-muted)", marginTop: 4, lineHeight: 1.6 }}>{dd}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
  }

  window.AAMaterialLibrary = MaterialLibrary;
})();
