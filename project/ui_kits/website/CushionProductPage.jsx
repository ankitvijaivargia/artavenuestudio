/* Art Avenue — Cushion Product Page (technique-agnostic · data-driven)
 * The template assumes NO single craft method. Every technique-, material-,
 * construction-, origin- and care-related field is supplied by product data
 * (see cushionData) so one template serves block-print, woven, tufted,
 * embroidered, appliqué, hand-painted, leather, velvet, wool, linen and
 * mixed-technique cushions alike. Swap cushionData for a real product feed.
 */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge, ProductCard } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const wrap = (extra = {}) => ({ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", ...extra });
  const inr = (n) => "₹ " + n.toLocaleString("en-IN");
  const waHref = (msg) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);

  /* ---- product-data layer: derive a cushion's profile from its data ----
   * In production this is one product object from Shopify; here we infer a
   * representative profile from the product name so the template can be
   * demonstrated across techniques. No field is hard-coded in the layout. */
  const PROFILES = {
    block:      { technique: "Hand Block-Printed", badge: "Hand Block-Printed", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["clay", "stone", "bronze"], labels: ["Styled on a linen sofa", "Block-print detail", "Linen reverse & zip"], face: "Hand block-printed cotton", reverse: "natural linen reverse", construction: "Concealed YKK zip · piped edges", origin: "Block-printed by hand using hand-carved teak blocks and natural dyes.", craft: "Each cover is printed by hand, block by block, in small batches — slight irregularities in registration are the signature of the craft, never a fault.", care: "Remove the insert and gentle cold hand-wash or dry-clean the cover; reshape damp and air-dry away from direct sun. Plump inserts regularly.", intro: "A hand-block-printed cotton cushion with a natural linen reverse — small-batch printed by hand." },
    woven:      { technique: "Handwoven", badge: "Handwoven", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["stone", "olive", "sand"], labels: ["Styled on a linen sofa", "Weave detail", "Reverse & zip"], face: "Yarn-dyed handwoven cotton & wool", reverse: "cotton reverse", construction: "Concealed zip · turned edges", origin: "Woven on traditional pit looms by skilled weaving families.", craft: "Yarn is dyed before weaving, so the pattern runs through the cloth. Subtle slubs and shifts in the weave are inherent to handloom textiles.", care: "Dry-clean recommended to preserve the weave; spot-clean spills immediately with a damp cloth. Avoid wringing.", intro: "A yarn-dyed handwoven cushion — pattern woven through the cloth, not printed onto it." },
    tufted:     { technique: "Hand-Tufted", badge: "Hand-Tufted", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["clay", "bronze", "stone"], labels: ["Styled on a linen sofa", "Tufted pile detail", "Cotton reverse & zip"], face: "Hand-tufted wool pile", reverse: "cotton canvas reverse", construction: "Concealed zip · bound edges", origin: "Tufted and sheared by hand by skilled artisans.", craft: "Wool is punched through a backing by hand and sheared to a plush, sculptural pile — a tactile, dimensional face.", care: "Vacuum gently without a beater bar; blot spills, never rub. Professional clean for marks.", intro: "A plush hand-tufted wool cushion with a sculptural, sheared pile face." },
    embroidered:{ technique: "Hand-Embroidered", badge: "Hand-Embroidered", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["sand", "bronze", "stone"], labels: ["Styled on a linen sofa", "Embroidery detail", "Reverse & zip"], face: "Hand-embroidered cotton & silk", reverse: "cotton reverse", construction: "Concealed zip · piped edges", origin: "Embroidered entirely by hand by skilled artisans.", craft: "Each motif is stitched by hand over many hours; tiny variations between cushions are proof of the human hand at work.", care: "Dry-clean only to protect the threadwork; store flat, away from snags and direct sun.", intro: "A hand-embroidered cushion — each motif stitched slowly, by hand." },
    applique:   { technique: "Appliqué", badge: "Appliqué", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["clay", "olive", "stone"], labels: ["Styled on a linen sofa", "Appliqué detail", "Reverse & zip"], face: "Appliquéd cotton", reverse: "cotton reverse", construction: "Concealed zip · turned edges", origin: "Appliquéd by hand, shape over shape, in a centuries-old layered-stitch tradition.", craft: "Shapes are cut and hand-stitched onto the ground cloth, layer over layer, in a centuries-old appliqué manner.", care: "Gentle cold hand-wash or dry-clean; reshape damp and air-dry. Avoid harsh agitation.", intro: "A hand-appliquéd cotton cushion, cut and stitched layer over layer by hand." },
    painted:    { technique: "Hand-Painted", badge: "Hand-Painted", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["sand", "stone", "bronze"], labels: ["Styled on a linen sofa", "Brushwork detail", "Reverse & zip"], face: "Hand-painted cotton & silk", reverse: "cotton reverse", construction: "Concealed zip · piped edges", origin: "Painted by hand in our studio with fade-stable pigments.", craft: "Each cover is painted individually — brushwork and tone vary gently from piece to piece, so no two are identical.", care: "Dry-clean only; keep out of prolonged direct sun to preserve the pigments.", intro: "A hand-painted cushion — brushed individually, so no two are quite alike." },
    leather:    { technique: "Leather", badge: "Full-Grain Leather", sampleKind: "leather", insert: "fibre-and-down insert", tones: ["clay", "espresso", "bronze"], labels: ["Styled on a linen sofa", "Grain & stitch detail", "Suede reverse & zip"], face: "Full-grain vegetable-tanned leather", reverse: "suede reverse", construction: "Hidden zip · saddle-stitched edges", origin: "Cut and saddle-stitched by leather artisans in India.", craft: "Cut from full-grain hides and stitched by hand; natural marks and grain shifts are intrinsic to genuine leather.", care: "Wipe with a dry cloth; condition twice yearly with leather balm. Keep away from direct heat and sun.", intro: "A full-grain leather cushion, saddle-stitched and made to patina with age." },
    velvet:     { technique: "Cotton Velvet", badge: "Cotton Velvet", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["bronze", "espresso", "clay"], labels: ["Styled on a linen sofa", "Pile & sheen detail", "Linen reverse & zip"], face: "Cotton-velvet", reverse: "natural linen reverse", construction: "Concealed zip · piped edges", origin: "Cut and finished by hand in our workshops.", craft: "A dense cotton-velvet pile catches the light differently as it shifts — depth of colour is part of the material.", care: "Dry-clean to preserve the pile; brush gently in one direction to lift after use.", intro: "A deep cotton-velvet cushion with a natural linen reverse." },
    wool:       { technique: "Wool", badge: "Handcrafted Wool", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["olive", "stone", "sand"], labels: ["Styled on a linen sofa", "Wool texture detail", "Reverse & zip"], face: "Woven wool", reverse: "cotton reverse", construction: "Concealed zip · turned edges", origin: "Woven and finished by hand in India.", craft: "Natural wool, with the gentle variation and warmth that comes only from the fibre.", care: "Dry-clean recommended; air regularly and store with cedar to protect the fibre.", intro: "A natural woven-wool cushion — warm, textured and quietly substantial." },
    linen:      { technique: "Linen", badge: "Pure Linen", sampleKind: "fabric", insert: "feather-and-down insert", tones: ["stone", "sand", "clay"], labels: ["Styled on a linen sofa", "Linen texture detail", "Reverse & zip"], face: "Washed pure linen", reverse: "linen reverse", construction: "Concealed zip · turned edges", origin: "Cut and sewn by hand in India.", craft: "A washed-linen face with the soft, lived-in slub that defines the cloth — relaxed by nature.", care: "Cold machine-wash gentle or dry-clean; a relaxed, un-pressed finish suits the cloth.", intro: "A washed pure-linen cushion — soft, breathable and beautifully relaxed." },
    generic:    { technique: "Handcrafted", badge: "Made by Hand", sampleKind: "material", insert: "premium insert", tones: ["clay", "stone", "bronze"], labels: ["Styled on a linen sofa", "Material detail", "Reverse & zip"], face: "Natural-fibre face", reverse: "natural reverse", construction: "Concealed zip · finished edges", origin: "Crafted by hand by artisans across India.", craft: "Made in small batches by skilled hands, in the technique and cloth chosen for this design.", care: "Care depends on the material — see the product details, or ask a consultant.", intro: "A handcrafted cushion, made in small batches by skilled artisans." },
  };
  function cushionData(name) {
    const n = (name || "").toLowerCase();
    let key = "generic";
    if (/leather/.test(n)) key = "leather";
    else if (/velvet/.test(n)) key = "velvet";
    else if (/embroider|kantha|aari|zardozi|chikan/.test(n)) key = "embroidered";
    else if (/applique|appliqu|pipili/.test(n)) key = "applique";
    else if (/paint/.test(n)) key = "painted";
    else if (/tuft/.test(n)) key = "tufted";
    else if (/woven|weave|dhurrie|kilim|ikat|jacquard/.test(n)) key = "woven";
    else if (/block|print|sanganer|bagru|dabu/.test(n)) key = "block";
    else if (/wool/.test(n)) key = "wool";
    else if (/linen/.test(n)) key = "linen";
    return { key, ...PROFILES[key] };
  }
  const SAMPLE_LABEL = { fabric: "Fabric", leather: "Leather", material: "Material" };

  function Accordion({ items, start = -1 }) {
    const [open, setOpen] = React.useState(start);
    return (
      <div style={{ marginTop: 8, borderTop: "1px solid var(--border-hairline)" }}>
        {items.map((it, i) => (
          <div key={it.h} style={{ borderBottom: "1px solid var(--border-hairline)" }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: "18px 0", cursor: "pointer", textAlign: "left" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 19, fontWeight: 500, color: "var(--text-primary)" }}>{it.h}</span>
              <i className={"ph ph-" + (open === i ? "minus" : "plus")} style={{ fontSize: 14, color: "var(--text-muted)" }} />
            </button>
            {open === i && <div style={{ paddingBottom: 20, fontSize: 15, lineHeight: 1.72, color: "var(--text-secondary)", maxWidth: "62ch" }}>{it.body}</div>}
          </div>
        ))}
      </div>
    );
  }

  function StickyBar({ name, price, waMsg, cart = true }) {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setShow(window.scrollY > 620);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 55, background: "var(--surface-raised)", borderTop: "1px solid var(--border-hairline)", boxShadow: "0 -8px 24px -16px rgba(43,40,36,.4)", transform: show ? "translateY(0)" : "translateY(110%)", transition: "transform var(--dur-base) var(--ease-luxe)" }}>
        <div style={{ ...wrap(), display: "flex", alignItems: "center", gap: 18, padding: "12px var(--gutter)" }}>
          <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "baseline", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 19, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--text-secondary)" }}>{price}</span>
          </div>
          <a href={waHref(waMsg)} target="_blank" rel="noopener" style={{ textDecoration: "none" }}><Button variant="secondary" iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Consult</Button></a>
          {cart === false
            ? <a href={waHref(waMsg)} target="_blank" rel="noopener" style={{ textDecoration: "none" }}><Button variant="primary">Enquire</Button></a>
            : <Button variant="primary">Add to Cart</Button>}
        </div>
      </div>
    );
  }

  /* ---- merchant-driven config: fulfillment + optional modules (per-SKU via product data) ---- */
  function cushionConfig(name) {
    const n = (name || "").toLowerCase();
    if (/in.?stock|ready/.test(n)) return { fulfillment: "in-stock", visibility: "ecommerce", modules: { samples: true, whyLove: true, customization: true, pairs: true } };
    if (/bespoke|custom/.test(n)) return { fulfillment: "custom", visibility: "consultation", modules: { samples: true, whyLove: true, customization: true, pairs: true } };
    return window.AAPreset("luxury-cushion");
  }

  function CushionProductPage({ onNavigate, name }) {
    const nav = onNavigate || (() => {});
    const pname = name && name !== "true" ? name : "Sanganeri Block-Print Cushion";
    const sku = "AA-" + pname.split(" ").map((w) => w[0]).join("").toUpperCase() + "-CU";
    const d = cushionData(pname);
    const cfg = cushionConfig(pname);
    const ful = window.AAFulfillment(cfg.fulfillment);
    const lifecycle = cfg.lifecycle || (/coming soon/i.test(pname) ? "coming-soon" : /seasonal/i.test(pname) ? "seasonal" : /discontinued/i.test(pname) ? "discontinued" : "active");
    const life = window.AALifecycle(lifecycle);
    const com = window.AACommerce(cfg, life);
    const sampleLabel = SAMPLE_LABEL[d.sampleKind] || "Material";

    const sizes = [
      { k: "16", label: "16 × 16 in", base: 3200 }, { k: "18", label: "18 × 18 in", base: 3800 },
      { k: "20", label: "20 × 20 in", base: 4400 }, { k: "24", label: "24 × 24 in", base: 5600 },
    ];
    const INSERT = 1400;
    const [size, setSize] = React.useState("18");
    const [fill, setFill] = React.useState("insert");
    const base = sizes.find((s) => s.k === size).base;
    const price = base + (fill === "insert" ? INSERT : 0);

    const consultMsg = `Hello Art Avenue, I'd like to speak with a design consultant about the ${pname} (SKU ${sku}). ${typeof location !== "undefined" ? location.href : ""}`;
    const sampleMsg = `Hello Art Avenue, I'd like to request a ${d.sampleKind} sample for the ${pname} (SKU ${sku}). I understand a sample fee of ₹999–₹2,999 applies depending on the material.`;

    const trustItems = [d.technique + " in India", "Cover only or cover + insert options", "Made to order in small batches", "Secure delivery across India", "International shipping available"];

    const specRows = [
      ["Technique", d.technique],
      ["Material", d.face + " · " + d.reverse],
      ["Construction", d.construction],
      ["Origin", (d.origin.split(/[.,]/)[0] || "").trim()],
    ];

    const accordion = [
      { h: "What's included", body: fill === "insert"
        ? `You're ordering the cover and a ${d.insert} — a complete, ready-to-use cushion delivered plump and finished.`
        : "You're ordering the cover only — no insert is included. Choose “Cover + Insert” above for a ready-to-use cushion." },
      { h: "Technique & craft", body: d.craft },
      { h: "Material & construction", body: `${d.face} face with a ${d.reverse}. ${d.construction}. Inserts are ethically sourced with a cotton cambric casing.` },
      { h: "Origin", body: d.origin },
      { h: "Care", body: d.care },
      { h: "Delivery & shipping", body: "In-stock covers ship in 3–5 days; made-to-order pieces in 1–2 weeks via safe, insured delivery. International freight quoted at checkout." },
    ];

    const pairs = [
      { category: "Textiles", name: "Handwoven Wool Throw", price: "₹ 8,400", tone: "stone" },
      { category: "Seating", name: "Kashi Linen Sofa", price: "₹ 3,20,000", tone: "clay" },
      { category: "Decor", name: "Hand-Thrown Stone Vessel", price: "₹ 12,000", tone: "bronze" },
      { category: "Rugs", name: "Aravalli Hand-Knotted Rug", price: "₹ 2,20,000", tone: "olive" },
    ];

    const moduleOrder = cfg.moduleOrder || ["whyLove", "customization", "pairs"];
    const sectionFor = (k) => {
      switch (k) {
        case "whyLove": return cfg.modules.whyLove ? <window.AAWhyLoveIt category="Cushions" /> : null;
        case "customization": return cfg.modules.customization ? <window.AAMadeForYourSpace category="Cushions" href={waHref("Hello Art Avenue, I'd like to customize the " + pname + " (SKU " + sku + ") — fabric, technique or size.")} /> : null;
        case "pairs": return cfg.modules.pairs ? (
          <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
            <div style={wrap()}>
              <Eyebrow tone="accent" rule>Frequently Styled Together</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: "16px 0 0" }}>Complete the room</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)", marginTop: 40 }}>
                {pairs.map((p) => (
                  <ProductCard key={p.name} category={p.category} name={p.name} price={p.price} favorite={false}
                    onClick={(e) => { e.preventDefault(); nav("product", p.name); }}>
                    <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                  </ProductCard>
                ))}
              </div>
            </div>
          </section>
        ) : null;
        default: return null;
      }
    };

    return (
      <main style={{ background: "var(--surface-page)" }}>
        <StickyBar name={pname} price={com.price ? inr(price) : "Price on request"} waMsg={consultMsg} cart={com.cart} />

        {/* breadcrumb */}
        <div style={{ ...wrap(), padding: "18px var(--gutter)", fontSize: 12, color: "var(--text-muted)", letterSpacing: ".03em" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); nav("home"); }} style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
          <a href="#" onClick={(e) => { e.preventDefault(); nav("collection", "Decor"); }} style={{ color: "inherit", textDecoration: "none" }}>Decor · Cushions</a>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
          <span style={{ color: "var(--text-secondary)" }}>{pname}</span>
        </div>

        {/* gallery + info */}
        <div style={{ ...wrap({ paddingBottom: "var(--section-y)" }), display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "clamp(40px,5vw,80px)", alignItems: "start" }}>
          <div style={{ display: "grid", gap: "var(--gap-card)" }}>
            <Figure tone={d.tones[0]} ratio="1/1" label={d.labels[0]} style={{ position: "relative" }}>
              <span style={{ position: "absolute", top: 18, left: 18 }}><Badge variant="on-image">{d.badge}</Badge></span>
            </Figure>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--gap-card)" }}>
              <Figure tone={d.tones[1]} ratio="1/1" label={d.labels[1]} />
              <Figure tone={d.tones[2]} ratio="1/1" label={d.labels[2]} />
            </div>
          </div>

          {/* info */}
          <div style={{ position: "sticky", top: 100, alignSelf: "start" }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>Cushions · {d.technique}</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(34px,3.4vw,46px)", lineHeight: 1.08, letterSpacing: "var(--tracking-tight)", margin: "12px 0 0" }}>{pname}</h1>
            <window.AAPriceTag priceText={inr(price)} commerce={com} caption={fill === "insert" ? "Cover + insert" : "Cover only"} />
            <p style={{ fontSize: "var(--text-body)", lineHeight: 1.72, color: "var(--text-secondary)", marginTop: 18, maxWidth: "46ch" }}>
              {d.intro}
            </p>

            <window.AAFulfillmentBar type={cfg.fulfillment} />
            <window.AALifecycleBanner state={lifecycle} />

            {/* trust — directly beneath price */}
            <window.AATrustBlock items={trustItems} />

            {/* SIZE */}
            <div style={{ marginTop: 26 }}>
              <div style={{ fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>Size</div>
              <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
                {sizes.map((s) => (
                  <button key={s.k} onClick={() => setSize(s.k)} style={{ padding: "10px 16px", borderRadius: "var(--radius-sm)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 13, background: size === s.k ? "var(--surface-accent-tint)" : "transparent", color: size === s.k ? "var(--text-accent)" : "var(--text-secondary)", border: "1px solid " + (size === s.k ? "var(--accent)" : "var(--border-strong)") }}>{s.label}</button>
                ))}
              </div>
            </div>

            {/* FILL — mandatory, with clear price difference */}
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>What you're buying</div>
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  { k: "cover", h: "Cover Only", d: "Just the cover — use your own insert.", p: base },
                  { k: "insert", h: "Cover + Insert", d: "Cover with a " + d.insert + " — ready to use.", p: base + INSERT },
                ].map((o) => {
                  const on = fill === o.k;
                  return (
                    <button key={o.k} onClick={() => setFill(o.k)} style={{ textAlign: "left", display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: "var(--radius-sm)", cursor: "pointer", background: on ? "var(--surface-accent-tint)" : "transparent", border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)") }}>
                      <span style={{ width: 18, height: 18, borderRadius: "50%", flex: "none", border: "1.5px solid " + (on ? "var(--accent)" : "var(--border-strong)"), background: on ? "radial-gradient(circle, var(--accent) 0 5px, transparent 6px)" : "transparent" }} />
                      <span style={{ flex: 1 }}>
                        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                          <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--text-primary)" }}>{o.h}</span>
                          <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: on ? "var(--text-accent)" : "var(--text-secondary)" }}>{inr(o.p)}</span>
                        </span>
                        <span style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.45, display: "block", marginTop: 3 }}>{o.d}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <p style={{ fontSize: 12.5, color: "var(--text-muted)", margin: "10px 2px 0" }}>
                {fill === "insert"
                  ? <span><strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Insert included</strong> (+{inr(INSERT)}) — arrives plump and ready to use.</span>
                  : <span><strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Cover only</strong> — no insert included. Add one above for a ready-to-use cushion.</span>}
              </p>
            </div>

            {cfg.modules.samples && <window.AASampleRequest product={pname} sku={sku} kinds={[sampleLabel]} />}

            {/* CTA cluster — visibility + merchant-controlled CTAs */}
            <window.AACtaButtons commerce={com} priceText={inr(price)} hrefs={{ consult: waHref(consultMsg), samples: waHref(sampleMsg), customize: waHref(consultMsg), project: waHref(consultMsg), "request-pricing": waHref(consultMsg) }} />

            {/* specifications — data-driven */}
            <dl style={{ display: "grid", margin: "26px 0 0", padding: "22px 0 4px", borderTop: "1px solid var(--border-hairline)" }}>
              {specRows.map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: 12, padding: "11px 0", borderBottom: "1px solid var(--border-hairline)" }}>
                  <dt style={{ fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)", paddingTop: 2 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14, color: "var(--text-primary)", lineHeight: 1.45 }}>{v}</dd>
                </div>
              ))}
            </dl>

            <Accordion items={accordion} start={0} />
          </div>
        </div>

        {/* Module sections — order driven by the cfg.moduleOrder metafield */}
        {moduleOrder.map((k) => { const el = sectionFor(k); return el ? <React.Fragment key={k}>{el}</React.Fragment> : null; })}
      </main>
    );
  }

  window.AACushionProductPage = CushionProductPage;
})();
