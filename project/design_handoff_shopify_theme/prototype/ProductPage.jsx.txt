/* Art Avenue — Product page (conversion-optimized) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge, ProductCard } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const wrap = (extra = {}) => ({ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", ...extra });
  const inr = (n) => "₹ " + n.toLocaleString("en-IN");
  const waHref = (msg) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);

  function Accordion({ items, start = 0 }) {
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

  /* labelled option group */
  function OptionRow({ label, value, children }) {
    return (
      <div style={{ marginTop: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          <span>{label}</span>
          {value && <span style={{ color: "var(--text-secondary)" }}>{value}</span>}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>{children}</div>
      </div>
    );
  }
  function Chip({ on, onClick, children }) {
    return (
      <button onClick={onClick} style={{ padding: "9px 16px", borderRadius: "var(--radius-sm)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: ".02em", background: on ? "var(--surface-accent-tint)" : "transparent", color: on ? "var(--text-accent)" : "var(--text-secondary)", border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)") }}>{children}</button>
    );
  }
  function Dot({ color, on, onClick, title }) {
    return <button onClick={onClick} title={title} style={{ width: 38, height: 38, borderRadius: "50%", background: color, cursor: "pointer", border: "1px solid var(--border-hairline)", outline: on ? "1.5px solid var(--accent)" : "1.5px solid transparent", outlineOffset: 3, padding: 0 }} />;
  }

  /* sticky buy bar — appears on scroll */
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
          <a href={waHref(waMsg)} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <Button variant="secondary" iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Consult</Button>
          </a>
          {cart === false
            ? <a href={waHref(waMsg)} target="_blank" rel="noopener" style={{ textDecoration: "none" }}><Button variant="primary">Enquire</Button></a>
            : <Button variant="primary">Add to Cart</Button>}
        </div>
      </div>
    );
  }

  /* ---- merchant-driven size handling (declared per-SKU via product data / metafields) ----
   * sizeMode: "multi" → size selector · "single" → one size, no selector · "custom" → made to your dimensions
   * Demonstrated here via SKU keywords; in production this comes from the product record. */
  /* ---- merchant-driven product config (declared per-SKU via product data / metafields) ----
   * sizeMode:    "multi" · "single" · "custom"
   * fulfillment: "in-stock" · "made-to-order" · "custom" · "project"
   * modules:     each optional section renders only when its flag is true.
   * Demonstrated here via SKU keywords; in production every field comes from the product record. */
  function furnitureConfig(name) {
    const n = (name || "").toLowerCase();
    if (/contract|hospitality|project/.test(n))
      return { sizeMode: "multi", fulfillment: "project", visibility: "project-only", modules: { material: true, finish: true, upholstery: true, samples: true, customization: true, assembly: true, completeRoom: true, faq: true, related: false, delivery: true } };
    if (/bespoke|custom|made-to-measure/.test(n))
      return { sizeMode: "custom", fulfillment: "custom", visibility: "price-on-request", modules: { material: true, finish: true, upholstery: true, samples: true, customization: true, assembly: true, completeRoom: true, faq: true, related: true, delivery: true } };
    if (/pendant|chandelier|sconce|lamp|vase|vessel|tray|bowl|object|mirror|stool|pouffe/.test(n))
      return { sizeMode: "single", oneSize: "One size", fulfillment: "in-stock", visibility: "ecommerce", modules: { material: false, finish: true, upholstery: false, samples: false, customization: false, assembly: false, completeRoom: true, faq: true, related: true, delivery: true } };
    return window.AAPreset("luxury-furniture");
  }

  function ProductPage({ onNavigate, name }) {
    const nav = onNavigate || (() => {});
    const pname = name && name !== "true" ? name : "Marwar Lounge Chair";
    const sku = "AA-" + pname.split(" ").map((w) => w[0]).join("").toUpperCase() + "-01";
    const fcfg = furnitureConfig(pname);
    const ful = window.AAFulfillment(fcfg.fulfillment);
    const lifecycle = fcfg.lifecycle || (/coming soon/i.test(pname) ? "coming-soon" : /seasonal/i.test(pname) ? "seasonal" : /discontinued/i.test(pname) ? "discontinued" : "active");
    const life = window.AALifecycle(lifecycle);
    const com = window.AACommerce(fcfg, life);

    const allSizes = [{ k: "std", label: "Standard", add: 0 }, { k: "grand", label: "Grand", add: 30000 }];
    const sizes = fcfg.sizeMode === "multi" ? allSizes : [{ k: "std", label: fcfg.oneSize || "Standard", add: 0 }];
    const materials = [{ k: "teak", label: "Solid Teak", add: 0 }, { k: "mango", label: "Mango Wood", add: -18000 }, { k: "oak", label: "Oak Veneer", add: -8000 }];
    const finishes = [{ k: "natural", label: "Natural", c: "#b9966a" }, { k: "walnut", label: "Walnut", c: "#6a4a2e" }, { k: "dark", label: "Dark Walnut", c: "#4a3422" }, { k: "black", label: "Black", c: "#2c2824" }];
    const uphol = [{ k: "linen", label: "Belgian Linen", c: "#d8cdb6" }, { k: "perf", label: "Performance Weave", c: "#b7b09c" }, { k: "leather", label: "Aniline Leather", c: "#8a5a3c", add: 42000 }];

    const [size, setSize] = React.useState("std");
    const [mat, setMat] = React.useState("teak");
    const [fin, setFin] = React.useState("natural");
    const [uph, setUph] = React.useState("linen");
    const [qty, setQty] = React.useState(1);

    const base = 148000;
    const price = base + (sizes.find((s) => s.k === size).add) + (materials.find((m) => m.k === mat).add) + ((uphol.find((u) => u.k === uph).add) || 0);

    const consultMsg = `Hello Art Avenue, I'd like to speak with a design consultant about the ${pname} (SKU ${sku}). ${typeof location !== "undefined" ? location.href : ""}`;
    const sampleMsg = (kind) => `Hello Art Avenue, I'd like to request a ${kind} sample for the ${pname} (SKU ${sku}). I understand a sample fee of ₹999–₹2,999 applies depending on the material.`;
    const customMsg = `Hello Art Avenue, I'd like a custom size or finish for the ${pname} (SKU ${sku}).`;
    const category = /lamp|pendant|chandelier|sconce|light/i.test(pname) ? "Lighting" : /vase|vessel|mirror|sculpture|tray|bowl|object/i.test(pname) ? "Decor" : /\bart\b|print|canvas|painting|photograph|diptych|triptych/i.test(pname) ? "Wall Art" : "Furniture";
    const trustItems = ["Handcrafted in India", "Made to order in our workshops", "Customization available — size, finish & fabric", "Secure, insured delivery across India", "International shipping available"];

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
      { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", tone: "bronze" },
      { category: "Rugs", name: "Aravalli Hand-Knotted Rug", price: "₹ 2,20,000", tone: "olive" },
      { category: "Tables", name: "Udai Travertine Side Table", price: "₹ 48,000", tone: "stone" },
      { category: "Decor", name: "Hand-Thrown Stone Vessel", price: "₹ 12,000", tone: "clay" },
    ];
    const recent = [
      { category: "Seating", name: "Kashi Linen Sofa", price: "₹ 3,20,000", tone: "stone" },
      { category: "Tables", name: "Amer Marble Dining Table", price: "₹ 4,10,000", tone: "clay" },
      { category: "Storage", name: "Jodha Carved Sideboard", price: "₹ 2,60,000", tone: "espresso" },
      { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", tone: "bronze" },
    ];

    const deliveryInfo = [
      { i: ful.icon, t: ful.label, s: "Fulfillment" },
      { i: "ph-clock", t: ful.lead, s: "Lead time" },
      { i: "ph-truck", t: "Insured delivery", s: "Secure & tracked" },
      { i: "ph-globe-hemisphere-east", t: "Worldwide", s: "International shipping" },
    ];

    const moduleOrder = fcfg.moduleOrder || ["assembly", "whyLove", "customization", "completeRoom", "faq", "related"];
    const sectionFor = (k) => {
      switch (k) {
        case "assembly": return fcfg.modules.assembly && category === "Furniture" ? <window.AAAssemblyBand href={waHref(consultMsg)} /> : null;
        case "whyLove": return <window.AAWhyLoveIt category={category} />;
        case "customization": return fcfg.modules.customization ? <window.AAMadeForYourSpace category={category} href={waHref("Hello Art Avenue, I'd like to customize the " + pname + " (SKU " + sku + ") — sizes, finishes or materials.")} /> : null;
        case "completeRoom": return fcfg.modules.completeRoom ? (
          <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
            <div style={wrap()}>
              <Eyebrow tone="accent" rule>Complete the Room</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: "16px 0 0" }}>Pieces our stylists pair with the Marwar</h2>
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
        case "faq": return fcfg.modules.faq ? (
          <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
            <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }}>
              <div>
                <Eyebrow tone="accent" rule>Good to Know</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h2)", lineHeight: 1.1, margin: "16px 0 0" }}>Questions, answered.</h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)", marginTop: 16 }}>
                  Still unsure? A design consultant is a tap away.
                </p>
                <a href={waHref(consultMsg)} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "inline-block", marginTop: 8 }}>
                  <Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />}>Speak with a Consultant</Button>
                </a>
              </div>
              <Accordion items={faqs} start={-1} />
            </div>
          </section>
        ) : null;
        case "related": return fcfg.modules.related ? (
          <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
            <div style={wrap()}>
              <Eyebrow tone="accent" rule>Recently Viewed</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: "16px 0 0" }}>Continue where you left off</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)", marginTop: 40 }}>
                {recent.map((p) => (
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
          <a href="#" onClick={(e) => { e.preventDefault(); nav("collection", "Furniture"); }} style={{ color: "inherit", textDecoration: "none" }}>Furniture</a>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
          <span style={{ color: "var(--text-secondary)" }}>{pname}</span>
        </div>

        {/* gallery + info */}
        <div style={{ ...wrap({ paddingBottom: "var(--section-y)" }), display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "clamp(40px,5vw,80px)", alignItems: "start" }}>
          <div style={{ display: "grid", gap: "var(--gap-card)" }}>
            <Figure tone="clay" ratio="4/5" style={{ position: "relative" }}>
              <span style={{ position: "absolute", top: 18, left: 18 }}><Badge variant="on-image">Handcrafted in India</Badge></span>
            </Figure>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--gap-card)" }}>
              <Figure tone="espresso" ratio="1/1" label="Joinery detail" />
              <Figure tone="bronze" ratio="1/1" label="Linen & grain" />
            </div>
            <Figure tone="stone" ratio="16/10" label="Styled at home" />
          </div>

          {/* info */}
          <div style={{ position: "sticky", top: 100, alignSelf: "start" }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>Seating · Lounge</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(34px,3.4vw,46px)", lineHeight: 1.08, letterSpacing: "var(--tracking-tight)", margin: "12px 0 0" }}>{pname}</h1>
            <window.AAPriceTag priceText={inr(price)} commerce={com} caption="Available to order · crafted for your home" />
            <p style={{ fontSize: "var(--text-body)", lineHeight: 1.72, color: "var(--text-secondary)", marginTop: 18, maxWidth: "46ch" }}>
              A low, generous lounge chair in solid teak and Belgian linen — drawn from the courtyards of Rajasthan and built to be lived in.
            </p>

            <window.AAFulfillmentBar type={fcfg.fulfillment} />
            <window.AALifecycleBanner state={lifecycle} />

            {/* trust — directly beneath price, above the fold */}
            <window.AATrustBlock items={trustItems} />

            {/* configuration — SIZE module adapts to the SKU */}
            {fcfg.sizeMode === "multi" && (
              <OptionRow label="Size" value={sizes.find((s) => s.k === size).label}>
                {sizes.map((s) => <Chip key={s.k} on={size === s.k} onClick={() => setSize(s.k)}>{s.label}</Chip>)}
              </OptionRow>
            )}
            {fcfg.sizeMode === "single" && (
              <OptionRow label="Size" value={fcfg.oneSize || "One size"}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "9px 16px", borderRadius: "var(--radius-sm)", background: "var(--surface-accent-tint)", border: "1px solid var(--accent)", color: "var(--text-accent)", fontSize: 13 }}><i className="ph ph-check" /> {fcfg.oneSize || "One size"}</span>
              </OptionRow>
            )}
            {fcfg.sizeMode === "custom" && (
              <div style={{ marginTop: 24, padding: "16px 18px", borderRadius: "var(--radius-sm)", background: "var(--surface-accent-tint)", border: "1px solid var(--accent-soft)" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--text-primary)" }}>Custom dimensions available</div>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--text-secondary)", margin: "6px 0 0" }}>This piece is made to your measurements — share your space below and we'll build to fit.</p>
              </div>
            )}
            {fcfg.modules.material && (
            <OptionRow label="Material" value={materials.find((m) => m.k === mat).label}>
              {materials.map((m) => <Chip key={m.k} on={mat === m.k} onClick={() => setMat(m.k)}>{m.label}</Chip>)}
            </OptionRow>
            )}
            {fcfg.modules.finish && (
            <OptionRow label="Finish" value={finishes.find((f) => f.k === fin).label}>
              {finishes.map((f) => <Dot key={f.k} color={f.c} title={f.label} on={fin === f.k} onClick={() => setFin(f.k)} />)}
            </OptionRow>
            )}
            {fcfg.modules.upholstery && (
            <OptionRow label="Upholstery" value={uphol.find((u) => u.k === uph).label}>
              {uphol.map((u) => <Dot key={u.k} color={u.c} title={u.label} on={uph === u.k} onClick={() => setUph(u.k)} />)}
            </OptionRow>
            )}
            {fcfg.modules.customization && (
            <button onClick={() => window.open(waHref(customMsg), "_blank")} style={{ marginTop: 16, background: "none", border: "none", padding: 0, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-accent)", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>
              Need a Custom Size or Finish? <i className="ph ph-arrow-right" />
            </button>
            )}

            {fcfg.modules.samples && (
            <div style={{ marginTop: 22, padding: "18px 0 0", borderTop: "1px solid var(--border-hairline)" }}>
              <div style={{ fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 4 }}>Request a sample</div>
              <div style={{ fontSize: 12.5, color: "var(--text-secondary)", marginBottom: 12 }}>From <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>₹999</strong> per sample · ₹999–₹2,999 depending on fabric, finish or material.</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {[{ k: "fabric", l: "Fabric", i: "ph-scissors" }, { k: "finish", l: "Finish", i: "ph-paint-roller" }, { k: "material", l: "Material", i: "ph-swatches" }].map((s) => (
                  <a key={s.k} href={waHref(sampleMsg(s.k))} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "16px 8px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", color: "var(--text-secondary)" }}>
                    <i className={"ph-light " + s.i} style={{ fontSize: 22, color: "var(--accent-deep)" }} />
                    <span style={{ fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>{s.l}</span>
                  </a>
                ))}
              </div>
            </div>
            )}

            {/* CTA cluster — visibility + merchant-controlled CTAs */}
            <window.AACtaButtons commerce={com} priceText={inr(price)} hrefs={{ consult: waHref(consultMsg), samples: waHref(sampleMsg("material")), customize: waHref(customMsg), project: waHref(consultMsg), "request-pricing": waHref(consultMsg) }} />

            {fcfg.modules.delivery && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "26px 0 0", padding: "22px 0", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
              {deliveryInfo.map((d) => (
                <div key={d.t} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <i className={"ph-light " + d.i} style={{ fontSize: 22, color: "var(--accent-deep)", marginTop: 1 }} />
                  <div style={{ lineHeight: 1.3 }}>
                    <div style={{ fontSize: 14, color: "var(--text-primary)" }}>{d.t}</div>
                    <div style={{ fontSize: 11.5, color: "var(--text-muted)", letterSpacing: ".02em" }}>{d.s}</div>
                  </div>
                </div>
              ))}
            </div>
            )}

            <Accordion items={accordion} />
          </div>
        </div>

        {/* Module sections — order driven by the fcfg.moduleOrder metafield */}
        {moduleOrder.map((k) => { const el = sectionFor(k); return el ? <React.Fragment key={k}>{el}</React.Fragment> : null; })}
      </main>
    );
  }

  const qtyBtn = { width: 40, height: 46, background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "var(--text-secondary)" };

  window.AAProductPage = ProductPage;
})();
