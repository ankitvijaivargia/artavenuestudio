/* Art Avenue — Rug Product Page (world-class rug buying experience) */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge, ProductCard, CollectionTile } = DS;
  const Figure = window.AAFigure;
  const WA = "919828060095";
  const wrap = (extra = {}) => ({ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", ...extra });
  const inr = (n) => "₹ " + n.toLocaleString("en-IN");
  const waHref = (msg) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);

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

  /* Right-side Rug Size Guide drawer (portaled) */
  function RugGuide({ open, onClose }) {
    const rooms = [
      { h: "Living Room", t: "Front legs of the sofa & chairs rest on the rug; leave 20–25 cm of floor around the edges so it frames the seating.", z: "8×10 ft / 9×12 ft", tone: "clay" },
      { h: "Dining Room", t: "Extend ~60 cm beyond the table on every side so chairs stay on the rug when pulled out.", z: "8×10 ft (6-seat) · 9×12 ft (8-seat)", tone: "stone" },
      { h: "Bedroom", t: "Place two-thirds under the bed with a soft border to step onto, or run a pair of runners either side.", z: "8×10 ft (queen) · 9×12 ft (king)", tone: "olive" },
      { h: "Runners & Hallways", t: "Leave 10–15 cm of floor on each side; choose a runner ~50 cm narrower than the corridor.", z: "2.5×8 ft / 2.5×10 ft", tone: "bronze" },
    ];
    return ReactDOM.createPortal(
      <React.Fragment>
        <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(34,31,27,.46)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur-base)", zIndex: 80 }} />
        <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(500px, 94vw)", background: "var(--surface-page)", transform: open ? "translateX(0)" : "translateX(101%)", transition: "transform var(--dur-slow) var(--ease-luxe)", zIndex: 81, overflowY: "auto", boxShadow: "var(--shadow-overlay)", padding: "30px 34px 60px" }}>
          <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 18, right: 24, background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "var(--text-primary)" }}><i className="ph-light ph-x" /></button>
          <Eyebrow tone="accent">Rug Size Guide</Eyebrow>
          <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 32, margin: "12px 0 8px", lineHeight: 1.1 }}>Choosing the right size</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-secondary)", margin: "0 0 10px" }}>The most common mistake is going too small. A rug should sit under the main furniture and anchor the arrangement — never float island-like in the centre of the room.</p>
          {rooms.map((r) => (
            <div key={r.h} style={{ borderTop: "1px solid var(--border-hairline)", padding: "18px 0", display: "grid", gridTemplateColumns: "92px 1fr", gap: 16, alignItems: "start" }}>
              <Figure tone={r.tone} ratio="1/1" />
              <div>
                <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 18, margin: "0 0 6px" }}>{r.h}</h4>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>{r.t}</p>
                <span style={{ display: "inline-block", marginTop: 7, fontSize: 12, fontWeight: 600, letterSpacing: ".04em", color: "var(--text-accent)" }}>Recommended · {r.z}</span>
              </div>
            </div>
          ))}
          <div style={{ background: "var(--surface-accent-tint)", borderRadius: "var(--radius-xs)", padding: "16px 18px", marginTop: 18 }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 8 }}>Common mistakes to avoid</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>A rug too small for the seating · a dining rug that traps chair legs · no border in the bedroom. When in doubt, <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>size up</strong>.</p>
          </div>
          <a href={waHref("Hello Art Avenue, I'd like help choosing the right rug size. My room is approximately ____ ft x ____ ft.")} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "block", marginTop: 22 }}>
            <Button variant="primary" fullWidth iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Ask a Consultant for My Room</Button>
          </a>
        </div>
      </React.Fragment>,
      document.body
    );
  }

  function OptionRow({ label, value, children }) {
    return (
      <div style={{ marginTop: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          <span>{label}</span>{value && <span style={{ color: "var(--text-secondary)" }}>{value}</span>}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>{children}</div>
      </div>
    );
  }

  function StickyBar({ name, price, waMsg, mto, customHref }) {
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
          {mto
            ? <a href={customHref} target="_blank" rel="noopener" style={{ textDecoration: "none" }}><Button variant="primary">Request a Custom Size</Button></a>
            : <Button variant="primary">Add to Cart</Button>}
        </div>
      </div>
    );
  }

  function RoomDiagram({ rug, items = [], round }) {
    return (
      <div style={{ position: "relative", aspectRatio: "1 / 1", background: "var(--surface-raised)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-xs)", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: rug.l + "%", top: rug.t + "%", width: rug.w + "%", height: rug.h + "%", background: "var(--surface-accent-tint)", border: "1px solid var(--accent-soft)", borderRadius: round ? "50%" : 2 }} />
        {items.map((it, i) => (
          <div key={i} style={{ position: "absolute", left: it.l + "%", top: it.t + "%", width: it.w + "%", height: it.h + "%", background: "var(--text-primary)", opacity: 0.82, borderRadius: 2 }} />
        ))}
        <span style={{ position: "absolute", left: 10, bottom: 8, fontSize: 9.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)" }}>Top view</span>
      </div>
    );
  }

  /* ---- merchant-driven module config (declared per-SKU via product data / metafields) ----
   * sizeMode: "multi" → size selector · "fixed" → one available size, no selector · "mto" → made to order, custom only
   * modules:  optional sections render only when their flag is true. A merchant can hide any of them.
   * Demonstrated here via SKU keywords; in production these come straight from the product record. */
  function rugConfig(name) {
    const n = (name || "").toLowerCase();
    if (/contract|hospitality|project/.test(n))
      return { sizeMode: "mto", fulfillment: "project", visibility: "project-only", modules: { guides: true, specs: true, construction: true, material: true, craft: true, rooms: true, related: false, samples: true } };
    if (/bespoke|made-to-order|custom|atelier/.test(n))
      return { sizeMode: "mto", fulfillment: "custom", visibility: "price-on-request", modules: { guides: true, specs: true, construction: true, material: true, craft: true, rooms: true, related: true, samples: true } };
    if (/jute|dhurrie|flat-?weave|sisal/.test(n))
      return { sizeMode: "fixed", fulfillment: "in-stock", visibility: "ecommerce", fixedSize: { label: "5 \u00d7 8 ft", price: 54000 }, modules: { guides: false, specs: true, construction: false, material: true, craft: false, rooms: true, related: true, samples: true } };
    return window.AAPreset("luxury-rug");
  }

  function RugProductPage({ onNavigate, name }) {
    const nav = onNavigate || (() => {});
    const pname = name && name !== "true" ? name : "Aravalli Hand-Knotted Rug";
    const sku = "AA-" + pname.split(" ").map((w) => w[0]).join("").toUpperCase() + "-RG";
    const [guide, setGuide] = React.useState(false);

    const cfg = rugConfig(pname);
    const ful = window.AAFulfillment(cfg.fulfillment);
    const lifecycle = cfg.lifecycle || (/coming soon/i.test(pname) ? "coming-soon" : /seasonal/i.test(pname) ? "seasonal" : /discontinued/i.test(pname) ? "discontinued" : "active");
    const life = window.AALifecycle(lifecycle);
    const com = window.AACommerce(cfg, life);
    const allSizes = [
      { k: "3x5", label: "3 × 5 ft", price: 38000, tag: "standard" }, { k: "4x6", label: "4 × 6 ft", price: 62000, tag: "standard" },
      { k: "5x8", label: "5 × 8 ft", price: 98000, tag: "standard" }, { k: "6x9", label: "6 × 9 ft", price: 142000, tag: "standard" },
      { k: "8x10", label: "8 × 10 ft", price: 220000, tag: "standard" }, { k: "9x12", label: "9 × 12 ft", price: 296000, tag: "standard" },
      { k: "10x14", label: "10 × 14 ft", price: 392000, tag: "made" }, { k: "round8", label: "8 ft Round", price: 176000, tag: "made" },
    ];
    const sizes = cfg.sizeMode === "fixed" ? [{ k: "fixed", label: cfg.fixedSize.label, price: cfg.fixedSize.price, tag: "standard" }] : allSizes;
    const [size, setSize] = React.useState(cfg.sizeMode === "fixed" ? "fixed" : "8x10");
    const [backing, setBacking] = React.useState("with");
    const [mat, setMat] = React.useState("wool");

    const activeSize = sizes.find((s) => s.k === size) || sizes[0];
    const price = cfg.sizeMode === "mto" ? null : (activeSize.price + (backing === "with" ? 4000 : 0));
    const consultMsg = `Hello Art Avenue, I'd like to speak with a design consultant about the ${pname} (SKU ${sku}). ${typeof location !== "undefined" ? location.href : ""}`;
    const sampleMsg = `Hello Art Avenue, I'd like to request a material sample for the ${pname} (SKU ${sku}). I understand a sample fee of ₹999–₹2,999 applies depending on the material.`;
    const trustItems = ["Custom sizing available on selected rugs", "Assistance choosing the right size", "Consultation available before purchase", "Hand-knotted in India · made to order", "Secure delivery across India · international shipping"];

    const goTo = (id) => {
      const el = document.getElementById(id); if (!el) return;
      const target = el.getBoundingClientRect().top + window.scrollY - 84;
      try { window.scrollTo({ top: target, behavior: "smooth" }); } catch (e) { window.scrollTo(0, target); }
      // guaranteed fallback for environments that ignore smooth/rAF
      setTimeout(() => { if (Math.abs(window.scrollY - target) > 4) window.scrollTo(0, target); }, 360);
    };

    const specGroups = [
      { g: "Construction & make", rows: [["Construction", "Hand-knotted"], ["Weave", "Persian asymmetric knot"], ["Knot density", "100–120 knots / in²"], ["Pile height", "12 mm · medium-low"], ["Shape", "Rectangular · round made to order"]] },
      { g: "Material & colour", rows: [["Pile", "Hand-spun highland wool"], ["Foundation", "Mercerised cotton warp & weft"], ["Colour", "Vegetable & low-impact dyes · gentle abrash"], ["Weight", "≈ 3.2 kg / m²"]] },
      { g: "Use & care", rows: [["Suitability", "Indoor · residential & light-contract"], ["Origin", "Hand-knotted in India"], ["Lead time", "Made to order · 4–6 months"], ["Care", "Low-pile vacuum · rotate twice yearly · professional clean every 2–3 yrs"]] },
    ];
    const constructions = [
      { h: "Hand-Knotted", t: "Every knot tied by hand around the warp — the most enduring and collectible construction. Months on the loom; a rug made to be passed down.", dur: "Exceptional · decades", use: "High-traffic living & dining", on: true },
      { h: "Hand-Tufted", t: "Wool punched through a backing and sheared to a plush, even pile. Quicker to make and gentler on price, soft underfoot.", dur: "Good · 8–12 years", use: "Bedrooms & low-traffic" },
      { h: "Flat-Weave", t: "Woven flat with no pile — reversible, light and crisp in pattern. Easy to lift, air and layer over a larger rug.", dur: "Hard-wearing · reversible", use: "Layering, kitchens, entryways" },
      { h: "Hand-Loomed", t: "Woven on a loom with a subtle loop or cut pile — a quiet, contemporary texture between knotted and flat.", dur: "Very good", use: "Living rooms & studies" },
    ];
    const process = [
      { n: "01", h: "Hand-spinning", t: "Highland fleece is carded and spun by hand into characterful, living yarn." },
      { n: "02", h: "Natural dyeing", t: "Dyed in small lots with vegetable and low-impact dyes — the source of gentle abrash." },
      { n: "03", h: "Knotting", t: "Tied knot by knot on a vertical loom over four to six months." },
      { n: "04", h: "Finishing", t: "Hand-sheared, washed, sun-dried and hand-bound at the edges." },
    ];
    const rooms = [
      { h: "Living Room", z: "8×10 ft / 9×12 ft", t: "Sit the front legs of the sofa and chairs on the rug to draw the seating together. Leave 20–25 cm of floor at the edges.", miss: "Too small to reach the furniture", rug: { l: 12, t: 22, w: 76, h: 58 }, items: [{ l: 20, t: 14, w: 60, h: 12 }, { l: 38, t: 46, w: 24, h: 16 }] },
      { h: "Dining Room", z: "8×10 ft (6-seat) · 9×12 ft (8-seat)", t: "Size up so chairs stay on the rug when pulled out — extend roughly 60 cm beyond the table on every side.", miss: "Chairs catch the rug edge", rug: { l: 10, t: 12, w: 80, h: 76 }, items: [{ l: 30, t: 32, w: 40, h: 36 }] },
      { h: "Bedroom", z: "8×10 ft (queen) · 9×12 ft (king)", t: "Run the rug under the lower two-thirds of the bed so you step onto a soft border each morning.", miss: "No border to step onto", rug: { l: 14, t: 42, w: 72, h: 46 }, items: [{ l: 30, t: 8, w: 40, h: 48 }] },
      { h: "Runner / Hallway", z: "2.5×8 ft / 2.5×10 ft", t: "Leave 10–15 cm of floor on each side; beside a bed, pair two runners for symmetry.", miss: "Runner wider than the space", rug: { l: 60, t: 12, w: 16, h: 76 }, items: [{ l: 14, t: 18, w: 40, h: 60 }] },
    ];
    const confidence = [
      "Handcrafted by skilled artisans", "Made using premium, natural materials", "Secure, insured delivery across India",
      "International shipping available", "Custom sizes available on select designs", "Design consultation available before you buy",
    ];
    const guides = [
      { h: "Size Guide", t: "Find the right size for your room", i: "ph-ruler", act: "size" },
      { h: "Material Guide", t: "Wool, cotton & chenille compared", i: "ph-leaf", act: "aa-material" },
      { h: "Construction Guide", t: "Knotted, tufted, flat & loomed", i: "ph-spiral", act: "aa-construction" },
      { h: "Placement Guide", t: "Room-by-room sizing & layout", i: "ph-squares-four", act: "aa-rooms" },
      { h: "Care Guide", t: "Keep it beautiful for decades", i: "ph-sparkle", act: "aa-specs" },
    ];
    const collection = [
      { category: "Aravalli Collection", name: "Aravalli Runner", price: "₹ 64,000", tone: "olive" },
      { category: "Aravalli Collection", name: "Aravalli Medallion", price: "₹ 2,48,000", tone: "bronze" },
      { category: "Aravalli Collection", name: "Aravalli Border Rug", price: "₹ 1,86,000", tone: "stone" },
      { category: "Aravalli Collection", name: "Aravalli Round", price: "₹ 1,76,000", tone: "clay" },
    ];

    const materials = [
      { k: "wool", label: "Hand-Knotted Wool", feel: "Dense, resilient pile", dur: "Decades with care", use: "Living & dining" },
      { k: "cotton", label: "Cotton (Printed)", feel: "Crisp, breathable, flat", dur: "Easy-care, low-traffic", use: "Layering & bedrooms" },
      { k: "chenille", label: "Super-Soft Cotton Chenille", feel: "Plush, dense underfoot", dur: "Durable, family-friendly", use: "Living rooms & bedrooms" },
    ];

    const accordion = [
      { h: "Materials Guide", body: "Hand-knotted from hand-spun, naturally dyed wool on a cotton foundation. Each rug carries 100–120 knots per square inch; subtle abrash (colour variation) is a hallmark of natural dye and hand craft, not a flaw." },
      { h: "Construction Guide", body: "Knotted entirely by hand on vertical looms over 4–6 months depending on size. The pile is hand-sheared and the edges hand-bound. No machine tufting, no glue — a rug built to be passed down." },
      { h: "Care Guide", body: "Rotate twice a year for even wear. Vacuum without a beater bar; blot spills immediately. Professional cleaning every 2–3 years. A pad (backing) extends life and prevents slipping." },
      { h: "Placement Guide", body: "In living rooms, the front legs of the sofa and chairs should sit on the rug; in dining rooms the rug should extend ~60 cm beyond the table on all sides. Tap “Need Help Choosing a Rug Size?” for room-by-room guidance." },
      { h: "Dimensions & Available Sizes", body: "Pile height 12 mm · weight ~3.2 kg/m². Offered in standard sizes, additional and made-to-order sizes, and fully custom dimensions and colourways for most designs — sizes vary by rug, so ask a consultant if you need something specific." },
      { h: "Shipping & Delivery", body: "Made to order, dispatched in 3–4 weeks via safe, insured delivery domestically. Rolled, wrapped and protected for transit. International freight quoted at checkout." },
    ];

    const similar = [
      { category: "Hand-Knotted", name: "Thar Wool Rug", price: "₹ 1,98,000", tone: "olive" },
      { category: "Flatweave", name: "Kutch Dhurrie", price: "₹ 86,000", tone: "stone" },
      { category: "Natural Fibre", name: "Konkan Jute Rug", price: "₹ 54,000", tone: "clay" },
      { category: "Hand-Knotted", name: "Marwar Medallion Rug", price: "₹ 2,64,000", tone: "bronze" },
    ];
    const shopBy = [
      { label: "Shop by Room", k: "rooms" }, { label: "Shop by Colour", k: "colour" },
      { label: "Shop by Material", k: "material" }, { label: "Shop by Pattern", k: "pattern" },
    ];

    const customSizeHref = waHref("Hello Art Avenue, I'd like a custom size of the " + pname + " (SKU " + sku + "). My room is approximately ____ ft x ____ ft.");
    const sizeGuideBtn = (
      <button onClick={() => setGuide(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-accent)", fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, padding: 0 }}>
        <i className="ph ph-ruler" /> Need Help Choosing a Rug Size?
      </button>
    );

    function renderSize() {
      /* MADE TO ORDER — no predefined sizes */
      if (cfg.sizeMode === "mto") {
        return (
          <div style={{ marginTop: 26 }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>Size</div>
            <div style={{ marginTop: 12, padding: "20px 22px", borderRadius: "var(--radius-sm)", background: "var(--surface-accent-tint)", border: "1px solid var(--accent-soft)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 20, color: "var(--text-primary)" }}>Custom sizes available</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)", margin: "8px 0 16px", maxWidth: "46ch" }}>This design is knotted to order — made to the exact dimensions of your room, with no predefined sizes.</p>
              <a href={customSizeHref} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                <Button variant="primary" iconLeft={<i className="ph ph-ruler" />}>Request a Custom Size</Button>
              </a>
            </div>
          </div>
        );
      }
      /* FIXED — one available size, no selector */
      if (cfg.sizeMode === "fixed") {
        const s = sizes[0];
        return (
          <div style={{ marginTop: 26 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
              <span>Available Size</span>{sizeGuideBtn}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 12, padding: "16px 18px", borderRadius: "var(--radius-sm)", background: "var(--surface-accent-tint)", border: "1px solid var(--accent)" }}>
              <span style={{ width: 42, height: 30, borderRadius: 2, background: "var(--accent-soft)", border: "1px solid var(--accent-deep)", flex: "none" }} />
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 20, color: "var(--text-primary)" }}>{s.label}</span>
              <span style={{ marginLeft: "auto", fontSize: 11, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--text-muted)" }}>One size</span>
            </div>
            <a href={customSizeHref} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 10, padding: "13px 16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-strong)" }}>
              <span>
                <span style={{ display: "block", fontSize: 14, color: "var(--text-primary)" }}>Need another size?</span>
                <span style={{ fontSize: 12.5, color: "var(--text-secondary)" }}>Speak with a Design Consultant.</span>
              </span>
              <i className="ph ph-chat-teardrop-dots" style={{ fontSize: 20, color: "var(--accent-deep)", flex: "none" }} />
            </a>
          </div>
        );
      }
      /* MULTI — size selector */
      return (
        <div style={{ marginTop: 26 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
            <span>Size</span>{sizeGuideBtn}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 12 }}>
            {sizes.map((s) => {
              const on = size === s.k;
              const isRound = /round/i.test(s.label);
              const [w, h] = s.label.split(" \u00d7 ");
              let ratio = parseFloat(w) / parseFloat(h);
              if (!isFinite(ratio) || ratio <= 0) ratio = 1;
              return (
                <button key={s.k} onClick={() => setSize(s.k)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "14px 8px 10px", borderRadius: "var(--radius-sm)", cursor: "pointer", background: on ? "var(--surface-accent-tint)" : "transparent", border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)") }}>
                  <span style={{ width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: ratio >= 1 ? 38 : 38 * ratio, height: ratio >= 1 ? 38 / ratio : 38, borderRadius: isRound ? "50%" : 0, background: on ? "var(--accent-soft)" : "var(--surface-sand, #DCD1BD)", border: "1px solid " + (on ? "var(--accent-deep)" : "var(--border-strong)") }} />
                  </span>
                  <span style={{ fontSize: 12.5, color: on ? "var(--text-accent)" : "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>{s.label}</span>
                  {s.tag === "made" && <span style={{ fontSize: 9.5, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)" }}>Made to order</span>}
                </button>
              );
            })}
          </div>
          <a href={customSizeHref} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 12, padding: "14px 16px", borderRadius: "var(--radius-sm)", background: "var(--surface-accent-tint)", border: "1px solid var(--accent-soft)" }}>
            <span>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: 17, color: "var(--text-primary)" }}>Need a Different Size?</span>
              <span style={{ fontSize: 12.5, color: "var(--text-secondary)" }}>We make most designs to order — speak with a consultant.</span>
            </span>
            <i className="ph ph-chat-teardrop-dots" style={{ fontSize: 22, color: "var(--accent-deep)", flex: "none" }} />
          </a>
        </div>
      );
    }

    return (
      <main style={{ background: "var(--surface-page)" }}>
        <StickyBar name={pname} price={com.price ? (price != null ? inr(price) : "Made to order") : (com.visibility === "project-only" ? "Project pricing" : "Price on request")} waMsg={consultMsg} mto={!com.cart} customHref={customSizeHref} />
        <RugGuide open={guide} onClose={() => setGuide(false)} />

        {/* breadcrumb */}
        <div style={{ ...wrap(), padding: "18px var(--gutter)", fontSize: 12, color: "var(--text-muted)", letterSpacing: ".03em" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); nav("home"); }} style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
          <a href="#" onClick={(e) => { e.preventDefault(); nav("collection", "Rugs"); }} style={{ color: "inherit", textDecoration: "none" }}>Rugs</a>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
          <span style={{ color: "var(--text-secondary)" }}>{pname}</span>
        </div>

        {/* gallery + info */}
        <div style={{ ...wrap({ paddingBottom: "var(--section-y)" }), display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "clamp(40px,5vw,80px)", alignItems: "start" }}>
          <div style={{ display: "grid", gap: "var(--gap-card)" }}>
            <Figure tone="olive" ratio="4/5" label="Styled in a living room" style={{ position: "relative" }}>
              <span style={{ position: "absolute", top: 18, left: 18 }}><Badge variant="on-image">Hand-Knotted in India</Badge></span>
            </Figure>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--gap-card)" }}>
              <Figure tone="stone" ratio="1/1" label="Colour & abrash" />
              <Figure tone="bronze" ratio="1/1" label="Knot & pile, macro" />
              <Figure tone="clay" ratio="1/1" label="Wool texture" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--gap-card)" }}>
              <Figure tone="sand" ratio="4/3" label="Hand-bound edge" />
              <Figure tone="espresso" ratio="4/3" label="Reverse · the knots" />
            </div>
            <Figure tone="clay" ratio="16/10" label="Scale · 8×10 ft under a full sofa" />
            <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--text-muted)", margin: "2px 2px 0" }}>
              Photographed in natural daylight. Colour and texture shift with light and screen — <a href={waHref(sampleMsg)} target="_blank" rel="noopener" style={{ color: "var(--text-accent)" }}>request a material sample</a> to see the true shade before you commit.
            </p>
          </div>

          {/* info */}
          <div style={{ position: "sticky", top: 100, alignSelf: "start" }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>Rugs · Hand-Knotted Wool</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(34px,3.4vw,46px)", lineHeight: 1.08, letterSpacing: "var(--tracking-tight)", margin: "12px 0 0" }}>{pname}</h1>
            <window.AAPriceTag priceText={price != null ? inr(price) : "Made to order"} commerce={com} caption="Available to order · crafted for your home" />
            <p style={{ fontSize: "var(--text-body)", lineHeight: 1.72, color: "var(--text-secondary)", marginTop: 18, maxWidth: "46ch" }}>
              A hand-knotted wool rug in naturally dyed earth tones — a quiet, durable foundation drawn from the dunes and dyes of the Aravalli range.
            </p>

            <window.AAFulfillmentBar type={cfg.fulfillment} />
            <window.AALifecycleBanner state={lifecycle} />

            {/* trust + rug buying confidence — directly beneath price */}
            <window.AATrustBlock items={trustItems} />

            {/* SIZE MODULE — merchant-driven (selector · single size · made to order) */}
            {renderSize()}

            {/* BACKING */}
            {cfg.sizeMode !== "mto" && (
            <OptionRow label="Backing" value={backing === "with" ? "With anti-slip backing (+₹4,000)" : "Without backing"}>
              {[{ k: "with", l: "With Backing" }, { k: "without", l: "Without Backing" }].map((b) => (
                <button key={b.k} onClick={() => setBacking(b.k)} style={{ padding: "10px 18px", borderRadius: "var(--radius-sm)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 13, background: backing === b.k ? "var(--surface-accent-tint)" : "transparent", color: backing === b.k ? "var(--text-accent)" : "var(--text-secondary)", border: "1px solid " + (backing === b.k ? "var(--accent)" : "var(--border-strong)") }}>{b.l}</button>
              ))}
            </OptionRow>
            )}

            {cfg.modules.samples && <window.AASampleRequest product={pname} sku={sku} kinds={["Material"]} />}

            {/* CTA cluster — visibility + merchant-controlled CTAs */}
            <window.AACtaButtons commerce={com} priceText={price != null ? inr(price) : null} hrefs={{ consult: waHref(consultMsg), samples: waHref(sampleMsg), customize: customSizeHref, project: waHref(consultMsg), "request-pricing": waHref(consultMsg) }} />

            {/* delivery */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "26px 0 0", padding: "22px 0", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
              {[{ i: ful.icon, t: ful.label, s: "Fulfillment" }, { i: "ph-clock", t: ful.lead, s: "Lead time" }, { i: "ph-truck", t: "Insured delivery", s: "Secure & tracked" }, { i: "ph-globe-hemisphere-east", t: "Worldwide", s: "International shipping" }].map((d) => (
                <div key={d.t} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <i className={"ph-light " + d.i} style={{ fontSize: 22, color: "var(--accent-deep)", marginTop: 1 }} />
                  <div style={{ lineHeight: 1.3 }}>
                    <div style={{ fontSize: 14, color: "var(--text-primary)" }}>{d.t}</div>
                    <div style={{ fontSize: 11.5, color: "var(--text-muted)", letterSpacing: ".02em" }}>{d.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <Accordion items={accordion} />
          </div>
        </div>

        {(() => {
          const rugOrder = cfg.moduleOrder || ["whyLove", "customization", "guides", "specs", "construction", "material", "craft", "rooms", "consult", "related"];
          const rugSections = {
            whyLove: <window.AAWhyLoveIt category="Rugs" />,
            customization: <window.AAMadeForYourSpace category="Rugs" href={waHref("Hello Art Avenue, I'd like to discuss a custom size or colourway for the " + pname + " (SKU " + sku + ").")} />,
            guides: cfg.modules.guides && (
        <section style={{ background: "var(--surface-alt)", padding: "var(--section-y-tight) 0" }}>
          <div style={wrap()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
              <div>
                <Eyebrow tone="accent" rule>Rug Buying Guides</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h2)", margin: "16px 0 0" }}>Everything you need to choose well.</h2>
              </div>
              <a href={waHref(consultMsg)} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                <Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />}>Ask a consultant instead</Button>
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--gap-card)", marginTop: 32 }}>
              {guides.map((g) => (
                <button key={g.h} onClick={() => g.act === "size" ? setGuide(true) : goTo(g.act)} style={{ textAlign: "left", cursor: "pointer", background: "var(--surface-raised)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-sm)", padding: "22px 20px", display: "flex", flexDirection: "column", gap: 12, minHeight: 172 }}>
                  <i className={"ph-light " + g.i} style={{ fontSize: 26, color: "var(--accent-deep)" }} />
                  <span style={{ marginTop: "auto" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: 19, color: "var(--text-primary)" }}>{g.h}</span>
                    <span style={{ display: "block", fontSize: 12.5, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.4 }}>{g.t}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
            ),
            specs: cfg.modules.specs && (
        <section id="aa-specs" style={{ background: "var(--surface-page)", padding: "var(--section-y) 0", scrollMarginTop: 84 }}>
          <div style={wrap()}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow tone="accent" rule>Specifications</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, margin: "16px 0 0" }}>Every detail, on the record.</h2>
              <p style={{ fontSize: "var(--text-body)", lineHeight: 1.7, color: "var(--text-secondary)", marginTop: 16 }}>The full make of this rug — so you know exactly what arrives, and how to keep it for the long term.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(28px,4vw,64px)", marginTop: 44 }}>
              {specGroups.map((grp) => (
                <div key={grp.g}>
                  <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", paddingBottom: 14, borderBottom: "1px solid var(--border-strong)" }}>{grp.g}</div>
                  <dl style={{ margin: 0 }}>
                    {grp.rows.map(([k, v]) => (
                      <div key={k} style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 12, padding: "14px 0", borderBottom: "1px solid var(--border-hairline)" }}>
                        <dt style={{ fontSize: 13, color: "var(--text-muted)" }}>{k}</dt>
                        <dd style={{ margin: 0, fontSize: 13.5, color: "var(--text-primary)", lineHeight: 1.4 }}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>
            ),
            construction: cfg.modules.construction && (
        <section id="aa-construction" style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0", scrollMarginTop: 84 }}>
          <div style={wrap()}>
            <div style={{ maxWidth: 680 }}>
              <Eyebrow tone="accent" rule>Understand the Craft</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, margin: "16px 0 0" }}>How a rug is made changes everything.</h2>
              <p style={{ fontSize: "var(--text-body)", lineHeight: 1.7, color: "var(--text-secondary)", marginTop: 16 }}>Construction decides how a rug feels, how long it lasts and where it belongs. This piece is <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>hand-knotted</strong> — the most enduring of the four.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)", marginTop: 40 }}>
              {constructions.map((c) => (
                <div key={c.h} style={{ position: "relative", background: c.on ? "var(--surface-accent-tint)" : "var(--surface-raised)", border: "1px solid " + (c.on ? "var(--accent)" : "var(--border-hairline)"), borderRadius: "var(--radius-sm)", padding: "24px 22px 26px" }}>
                  {c.on && <span style={{ position: "absolute", top: 16, right: 16, fontSize: 10, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)" }}>This rug</span>}
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 21, margin: 0 }}>{c.h}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)", margin: "12px 0 18px" }}>{c.t}</p>
                  <dl style={{ margin: 0, display: "grid", gap: 8 }}>
                    {[["Durability", c.dur], ["Best for", c.use]].map(([k, v]) => (
                      <div key={k} style={{ display: "grid", gridTemplateColumns: "68px 1fr", gap: 8 }}>
                        <dt style={{ fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", paddingTop: 2 }}>{k}</dt>
                        <dd style={{ margin: 0, fontSize: 12.5, color: "var(--text-primary)", lineHeight: 1.4 }}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>
            ),
            material: cfg.modules.material && (
        <section id="aa-material" style={{ background: "var(--surface-page)", padding: "var(--section-y) 0", scrollMarginTop: 84 }}>
          <div style={wrap()}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow tone="accent" rule>Material & Texture</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, margin: "16px 0 0" }}>Know the feel before you choose.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gap-card)", marginTop: 40 }}>
              {materials.map((m) => {
                const on = mat === m.k;
                return (
                  <button key={m.k} onClick={() => setMat(m.k)} style={{ textAlign: "left", cursor: "pointer", background: "var(--surface-raised)", border: "1px solid " + (on ? "var(--accent)" : "var(--border-hairline)"), borderRadius: "var(--radius-sm)", padding: 0, overflow: "hidden" }}>
                    <Figure tone={m.k === "wool" ? "olive" : m.k === "cotton" ? "stone" : "clay"} ratio="16/9" />
                    <div style={{ padding: "20px 22px 24px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 21, margin: 0 }}>{m.label}</h3>
                        {on && <i className="ph-fill ph-check-circle" style={{ color: "var(--accent)", fontSize: 18 }} />}
                      </div>
                      <dl style={{ margin: "16px 0 0", display: "grid", gap: 10 }}>
                        {[["Feel", m.feel], ["Durability", m.dur], ["Best for", m.use]].map(([k, v]) => (
                          <div key={k} style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 10 }}>
                            <dt style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", paddingTop: 2 }}>{k}</dt>
                            <dd style={{ margin: 0, fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.45 }}>{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </button>
                );
              })}
            </div>
            <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginTop: 18 }}>Not sure? <a href={waHref(sampleMsg)} target="_blank" rel="noopener" style={{ color: "var(--text-accent)" }}>Request a material sample</a> (from ₹999) and feel all three before you decide.</p>
          </div>
        </section>
            ),
            craft: cfg.modules.craft && (
        <section id="aa-origin" style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0", scrollMarginTop: 84 }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
            <Figure tone="espresso" ratio="4/5" label="On the loom" />
            <div>
              <Eyebrow tone="accent" rule>Craftsmanship</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "var(--tracking-tight)", margin: "16px 0 0" }}>Knotted entirely by hand, the old way.</h2>
              <p style={{ fontSize: "var(--text-body)", lineHeight: 1.72, color: "var(--text-secondary)", margin: "16px 0 0", maxWidth: "56ch" }}>This rug is knotted entirely by hand, in a craft India has carried for centuries. A single rug passes through the hands of spinners, dyers and weavers, and can take four to six months to finish. The gentle variation you see is the signature of that human hand, never a flaw.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 28px", marginTop: 30 }}>
                {process.map((p) => (
                  <div key={p.n} style={{ borderTop: "1px solid var(--border-strong)", paddingTop: 14 }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 15, color: "var(--text-accent)" }}>{p.n}</div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500, color: "var(--text-primary)", marginTop: 2 }}>{p.h}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--text-secondary)", marginTop: 4 }}>{p.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
            ),
            rooms: cfg.modules.rooms && (
        <section id="aa-rooms" style={{ background: "var(--surface-page)", padding: "var(--section-y) 0", scrollMarginTop: 84 }}>
          <div style={wrap()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
              <div style={{ maxWidth: 640 }}>
                <Eyebrow tone="accent" rule>Will It Fit?</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, margin: "16px 0 0" }}>Room-by-room sizing.</h2>
                <p style={{ fontSize: "var(--text-body)", lineHeight: 1.7, color: "var(--text-secondary)", marginTop: 16 }}>The most common mistake is going too small. Here is where this rug sits in each room — and the size we would recommend.</p>
              </div>
              <button onClick={() => setGuide(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-accent)", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, padding: 0 }}>Open the full size guide <i className="ph ph-arrow-right" /></button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)", marginTop: 40 }}>
              {rooms.map((r) => (
                <div key={r.h}>
                  <RoomDiagram rug={r.rug} items={r.items} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 20, margin: "18px 0 0" }}>{r.h}</h3>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".03em", color: "var(--text-accent)", marginTop: 6 }}>Recommended · {r.z}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)", margin: "10px 0 0" }}>{r.t}</p>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 12, fontSize: 12.5, color: "var(--text-muted)" }}>
                    <i className="ph ph-warning-circle" style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 2, flex: "none" }} />
                    <span>Avoid: {r.miss}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48, padding: "26px 0 0", borderTop: "1px solid var(--border-hairline)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px,4vw,52px)", alignItems: "center" }}>
              <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", maxWidth: 170 }}>Where this rug works best</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[["Living Room", "Ideal"], ["Bedroom", "Ideal"], ["Study", "Ideal"], ["Dining Room", "Good"], ["Entryway", "With a runner"]].map(([room, fit]) => (
                  <span key={room} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 15px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", fontSize: 13, color: "var(--text-secondary)" }}>
                    {room} <span style={{ fontSize: 11, color: "var(--text-accent)", letterSpacing: ".02em" }}>{fit}</span>
                  </span>
                ))}
                <span style={{ display: "inline-flex", alignItems: "center", padding: "9px 15px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", fontSize: 13, color: "var(--text-muted)" }}>Indoor use only</span>
              </div>
            </div>
          </div>
        </section>
            ),
            consult: (
        <section id="aa-consult" style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: "var(--section-y) 0", scrollMarginTop: 84 }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
            <div>
              <Eyebrow tone="on-dark">Personal Service</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-display-2)", lineHeight: 1.06, letterSpacing: "var(--tracking-tight)", margin: "18px 0 0" }}>Need help choosing the<br /> <em style={{ color: "var(--accent-soft)" }}>right rug?</em></h2>
              <p style={{ fontSize: "var(--text-body-lg)", lineHeight: 1.7, color: "var(--text-on-dark-muted)", margin: "20px 0 0", maxWidth: "48ch" }}>A design consultant can guide you through size, material, placement, custom sizing, care and styling — before you spend a rupee. Complimentary, and unhurried.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "24px 0 30px" }}>
                {["Size", "Material", "Placement", "Custom sizing", "Care", "Styling"].map((t) => (
                  <span key={t} style={{ padding: "8px 15px", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-pill)", fontSize: 13, color: "var(--text-on-dark-muted)" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href={waHref(consultMsg)} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  <Button variant="primary" iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Speak with a Design Consultant</Button>
                </a>
                <a href={waHref("Hello Art Avenue, I'd like help choosing the right rug size for the " + pname + " (SKU " + sku + "). My room is approximately ____ ft x ____ ft.")} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  <Button variant="secondary" onDark iconRight={<i className="ph ph-arrow-right" />}>Get a size recommendation</Button>
                </a>
              </div>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--border-on-dark)" }}>
              {confidence.map((c) => (
                <li key={c} style={{ display: "flex", gap: 14, alignItems: "center", padding: "16px 0", borderBottom: "1px solid var(--border-on-dark)", fontSize: 15.5, color: "var(--text-on-dark)" }}>
                  <i className="ph ph-check" style={{ fontSize: 16, color: "var(--accent-soft)", flex: "none" }} />{c}
                </li>
              ))}
            </ul>
          </div>
        </section>
            ),
            related: cfg.modules.related && (
        <section style={{ background: "var(--surface-alt)", padding: "var(--section-y) 0" }}>
          <div style={wrap()}>
            <Eyebrow tone="accent" rule>From the Aravalli Collection</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: "16px 0 0" }}>Pieces cut from the same cloth</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)", marginTop: 32 }}>
              {collection.map((p) => (
                <ProductCard key={p.name} category={p.category} name={p.name} price={p.price} favorite={false} onClick={(e) => { e.preventDefault(); nav("product", p.name); }}>
                  <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                </ProductCard>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginTop: 64 }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", margin: 0 }}>Shop similar rugs</h2>
              <span style={{ fontSize: 12.5, color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: 8 }}><i className="ph-light ph-sparkle" style={{ color: "var(--accent-deep)" }} /> Recommended by our stylists</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)", marginTop: 32 }}>
              {similar.map((p) => (
                <ProductCard key={p.name} category={p.category} name={p.name} price={p.price} favorite={false} onClick={(e) => { e.preventDefault(); nav("product", p.name); }}>
                  <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                </ProductCard>
              ))}
            </div>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h2)", margin: "64px 0 0" }}>Browse the rug atelier</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gap-card)", marginTop: 28 }}>
              {shopBy.map((s, i) => (
                <CollectionTile key={s.k} title={s.label.replace("Shop by ", "")} eyebrow="Shop by" tone={i % 2 ? "light" : "dark"} cta="" onClick={(e) => { e.preventDefault(); nav("collection", "Rugs"); }} style={{ minHeight: 200 }}>
                  <window.AAFigure tone={["clay", "stone", "olive", "bronze"][i]} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                </CollectionTile>
              ))}
            </div>
          </div>
        </section>
            ),
          };
          return rugOrder.map((k) => rugSections[k] ? <React.Fragment key={k}>{rugSections[k]}</React.Fragment> : null);
        })()}
      </main>
    );
  }

  window.AARugProductPage = RugProductPage;
})();
