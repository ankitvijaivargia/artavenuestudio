/* Art Avenue — Website UI kit · shared parts
 * Figure (warm placeholder imagery), AnnounceBar, Header + MegaMenu, Footer.
 * Composes DS components from window.ArtAvenueDesignSystem_70ed11.
 */
const DS = window.ArtAvenueDesignSystem_70ed11;
const { Button, Eyebrow, Badge } = DS;

/* ---------- Figure: on-brand warm placeholder ---------- */
const FIG_GRADS = {
  sand:     "radial-gradient(120% 80% at 72% 16%, rgba(255,255,255,.42), transparent 56%), linear-gradient(155deg,#cdbfa6,#d8ccb6 55%,#e7ddcc)",
  clay:     "radial-gradient(120% 80% at 70% 18%, rgba(255,255,255,.34), transparent 56%), linear-gradient(150deg,#c2b39a,#ad9a7d 60%,#9c8a6e)",
  stone:    "radial-gradient(120% 80% at 68% 16%, rgba(255,255,255,.5), transparent 58%), linear-gradient(150deg,#e6ddce,#d4c8b3)",
  espresso: "radial-gradient(120% 90% at 72% 12%, rgba(120,100,72,.4), transparent 55%), linear-gradient(150deg,#4a4036,#2a241d)",
  bronze:   "radial-gradient(120% 80% at 70% 16%, rgba(255,255,255,.34), transparent 56%), linear-gradient(150deg,#c8a878,#a8854f)",
  olive:    "radial-gradient(120% 80% at 70% 16%, rgba(255,255,255,.3), transparent 56%), linear-gradient(150deg,#9a9276,#7e7659)",
};

function Figure({ tone = "sand", label, ratio, className = "", style = {}, children }) {
  const isDark = tone === "espresso" || tone === "olive" || tone === "bronze";
  return (
    <div
      className={"aa-fig " + className}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-xs)",
        background: FIG_GRADS[tone] || FIG_GRADS.sand,
        aspectRatio: ratio || undefined,
        ...style,
      }}
    >
      {children}
      {label && (
        <span
          style={{
            position: "absolute",
            left: 16,
            bottom: 14,
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 15,
            letterSpacing: ".01em",
            color: isDark ? "rgba(250,246,239,.62)" : "rgba(43,40,36,.42)",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

/* ---------- Announcement bar ---------- */
function AnnounceBar() {
  const items = [
    "Complimentary design consultation",
    "Handcrafted in India",
    "International shipping available",
  ];
  return (
    <div style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "9px var(--gutter)",
          display: "flex",
          justifyContent: "center",
          gap: 36,
          fontSize: 11,
          letterSpacing: "var(--tracking-caps)",
          textTransform: "uppercase",
        }}
      >
        {items.map((t, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 36, color: "var(--text-on-dark-muted)" }}>
            {i > 0 && <span style={{ opacity: 0.4 }}>·</span>}
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Navigation data ---------- */
const NAV = [
  {
    label: "Furniture",
    paths: [
      { h: "Shop All Furniture", direct: "Shop All Furniture" },
      { h: "Shop by Category", links: ["Sofas", "Lounge Chairs", "Dining Chairs", "Tables", "Storage", "Beds"] },
      { h: "Shop by Room", links: ["Living Room", "Dining", "Bedroom", "Study", "Outdoor"] },
      { h: "Shop by Material", links: ["Solid Teak", "Mango Wood", "Oak", "Marble & Stone", "Brass"] },
      { h: "Shop by Collection", links: ["The Marwar Collection", "Aravalli", "The Object Library"] },
      { h: "Shop by Style", links: ["Contemporary", "Traditional", "Modern Indian", "Minimal", "Organic Modern", "Transitional"] },
      { h: "New Arrivals", direct: "New Arrivals" },
      { h: "Best Sellers", direct: "Best Sellers" },
      { h: "Designer Favourites", direct: "Designer Favourites" },
      { h: "Customization", direct: "Customization" },
      { h: "Materials Library", direct: "Materials Library" },
    ],
    featured: { tone: "clay", eyebrow: "New Collection", title: "The Marwar Collection" },
  },
  {
    label: "Rugs",
    paths: [
      { h: "Shop All Rugs", direct: "Shop All Rugs" },
      { h: "Collections", direct: "Collections" },
      { h: "Shop by Style", links: ["Contemporary", "Traditional", "Modern Indian", "Minimal", "Organic Modern", "Transitional"] },
      { h: "Shop by Colour", links: ["Ivory", "Beige", "Sand", "Taupe", "Neutral", "Blue", "Green", "Terracotta", "Grey", "Multicolour"] },
      { h: "Shop by Material", links: ["Wool", "Cotton", "Silk", "Chenille", "Jute"] },
      { h: "Shop by Construction", links: ["Hand-Knotted", "Hand-Tufted", "Flat-Weave", "Hand-Loomed", "Printed"] },
      { h: "Shop by Room", links: ["Living Room", "Dining Room", "Bedroom", "Hallway", "Study"] },
      { h: "Shop by Shape", links: ["Rectangle", "Round", "Runner"] },
      { h: "Shop by Size", links: ["3×5 ft", "4×6 ft", "5×8 ft", "6×9 ft", "8×10 ft", "9×12 ft", "Runners", "Round"] },
      { h: "Custom Rugs", direct: "Custom Rugs" },
      { h: "Rug Size Guide", direct: "Rug Size Guide" },
    ],
    featured: { tone: "olive", eyebrow: "Bespoke", title: "Custom Rugs" },
  },
  {
    label: "Lighting",
    cols: [
      { h: "Shop by Type", links: ["Pendants", "Chandeliers", "Floor Lamps", "Table Lamps", "Flush Mounts"] },
      { h: "Shop by Room", links: ["Living Room", "Dining", "Bedroom", "Entryway"] },
      { h: "Shop by Material", links: ["Brass", "Stone & Marble", "Glass", "Rattan"] },
    ],
    quick: ["New Arrivals", "Best Sellers"],
    featured: { tone: "bronze", eyebrow: "Signature", title: "Brass Meridian" },
  },
  {
    label: "Decor",
    cols: [
      { h: "Shop by Category", links: ["Vases & Vessels", "Sculpture", "Mirrors", "Boxes & Trays"] },
      { h: "Shop by Style", links: ["Contemporary", "Traditional", "Modern Indian", "Minimal", "Organic Modern", "Transitional"] },
      { h: "Textiles", links: ["Cushions", "Throws", "Table Linen"] },
      { h: "Shop by Collection", links: ["The Object Library", "Marwar", "Aravalli"] },
    ],
    quick: ["New Arrivals", "Best Sellers"],
    featured: { tone: "stone", eyebrow: "Curated", title: "The Object Library" },
  },
  {
    label: "Wall Art",
    cols: [
      { h: "Medium", links: ["Original Works", "Limited Prints", "Textile Art", "Photography"] },
      { h: "Format", links: ["Framed", "Canvas", "Diptych & Triptych"] },
      { h: "Shop by Room", links: ["Living Room", "Bedroom", "Study"] },
    ],
    quick: ["Commissioned Works", "New Arrivals"],
    featured: { tone: "sand", eyebrow: "Gallery", title: "Commissioned Works" },
  },
  {
    label: "Discover",
    cols: [
      { h: "Explore", links: ["Collections", "Journal", "Customer Homes", "The Atelier"] },
      { h: "Libraries", links: ["Materials Library", "Finish Library", "Care Guides"] },
      { h: "Guides", links: ["Rug Size Guide", "Wood Guide", "Upholstery Guide"] },
    ],
    featured: { tone: "espresso", eyebrow: "Inside the Atelier", title: "Made by Hand, in India" },
  },
  {
    label: "Custom & Bespoke",
    customPage: true,
    cols: [
      { h: "Made to Order", links: ["Custom Furniture", "Custom Rugs", "Custom Upholstery", "Custom Finishes"] },
      { h: "Projects", links: ["Interior Projects", "Hospitality Projects", "Designer Collaborations", "Project Procurement"] },
      { h: "Start Here", links: ["Made For Your Space", "Speak with a Consultant", "The Atelier"] },
    ],
    quick: ["Customization", "Material Sampling"],
    featured: { tone: "espresso", eyebrow: "Bespoke", title: "Made For Your Space", route: "custom" },
  },
  {
    label: "Trade",
    isTrade: true,
    cols: [
      { h: "Programs", links: ["Designer Program", "Architects", "Hospitality"] },
      { h: "Services", links: ["Customization", "Material Sampling", "Project Procurement"] },
    ],
    featured: { tone: "espresso", eyebrow: "Trade & Design", title: "For Designers & Architects" },
  },
];

/* ---------- Header + Mega menu ---------- */
function Header({ onNavigate, transparent }) {
  const [open, setOpen] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector(".aa-kit-scroll") || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrolled(y > 12);
    };
    root.addEventListener("scroll", onScroll);
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparent || open;
  const ink = solid ? "var(--text-primary)" : "var(--text-on-dark)";

  return (
    <header
      onMouseLeave={() => setOpen(null)}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: solid ? "var(--surface-page)" : "transparent",
        borderBottom: solid ? "1px solid var(--border-hairline)" : "1px solid transparent",
        transition: "background var(--dur-base) var(--ease-luxe), border-color var(--dur-base)",
        color: ink,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          height: 76,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* left nav */}
        <nav style={{ display: "flex", gap: 26, alignItems: "center" }}>
          {NAV.slice(0, 5).map((n) => (
            <button
              key={n.label}
              onMouseEnter={() => setOpen(n.simple ? null : n.label)}
              onClick={() => onNavigate && onNavigate("collection", n.label)}
              style={navBtn(ink, open === n.label)}
            >
              {n.label}
            </button>
          ))}
        </nav>

        {/* wordmark */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("home"); }}
          style={{ textAlign: "center", textDecoration: "none", color: ink, lineHeight: 1 }}
        >
          <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 26, letterSpacing: ".18em", textTransform: "uppercase" }}>
            Art Avenue
          </div>
          <div style={{ fontSize: 8, letterSpacing: ".4em", textTransform: "uppercase", marginTop: 5, opacity: 0.62 }}>
            Design House
          </div>
        </a>

        {/* right nav + icons */}
        <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "flex-end" }}>
          {NAV.slice(5).map((n) => (
            <button key={n.label} onMouseEnter={() => setOpen(n.label)} onClick={() => onNavigate && onNavigate(n.label === "Trade" ? "trade" : n.label === "Custom & Bespoke" ? "custom" : "collection", n.label)} style={navBtn(ink, open === n.label)}>
              {n.label}
            </button>
          ))}
          <span style={{ width: 1, height: 18, background: "currentColor", opacity: 0.22 }} />
          <i className="ph-light ph-magnifying-glass" style={{ fontSize: 20, cursor: "pointer" }} />
          <i className="ph-light ph-user" style={{ fontSize: 20, cursor: "pointer" }} />
          <i className="ph-light ph-handbag-simple" style={{ fontSize: 20, cursor: "pointer" }} />
        </div>
      </div>

      {/* Mega menu */}
      {open && <MegaMenu data={NAV.find((n) => n.label === open)} onNavigate={onNavigate} />}
    </header>
  );
}

function navBtn(ink, active) {
  return {
    background: "none",
    border: "none",
    padding: "6px 0",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    color: ink,
    whiteSpace: "nowrap",
    opacity: active ? 1 : 0.86,
    borderBottom: active ? "1px solid currentColor" : "1px solid transparent",
    transition: "opacity var(--dur-fast)",
  };
}

function navRouteFor(l) {
  if (/^materials$|materials library|finish library|library/i.test(l)) return ["library", l];
  if (/custom|bespoke|made for your space|designer collaborat|interior project|hospitality project|project procurement|the atelier|speak with|consultant/i.test(l)) return ["custom", l];
  if (/designer program|architects|hospitality|customization|sampling|procurement|trade/i.test(l)) return ["trade", l];
  if (/shop all furniture/i.test(l)) return ["collection", "Furniture"];
  if (/rug size guide|shop all rugs|shop by shape|shop by size/i.test(l)) return ["collection", "Rugs"];
  if (/journal|customer homes|collections|care guides|wood guide|upholstery guide|craftsmanship|designer favourites|best sellers|new arrivals/i.test(l)) return ["collection", l];
  return ["collection", l];
}

function MegaFeatured({ data, onNavigate }) {
  if (!data.featured) return null;
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(data.featured.route || (data.isTrade ? "trade" : "collection"), data.featured.title); }} style={{ textDecoration: "none", alignSelf: "start" }}>
      <Figure tone={data.featured.tone} ratio="4/3" style={{ width: "100%" }}>
        <span style={{ position: "absolute", left: 18, bottom: 16, color: "#fff" }}>
          <span style={{ display: "block", fontSize: 10, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--accent-soft)" }}>{data.featured.eyebrow}</span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: 1.1, display: "block" }}>{data.featured.title}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 10, fontSize: 10.5, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>Explore <i className="ph ph-arrow-right" /></span>
        </span>
      </Figure>
    </a>
  );
}

/* Discovery-first two-pane menu: pathway rail + active pathway panel + featured */
function MegaPaths({ data, go, onNavigate }) {
  const firstIdx = Math.max(0, data.paths.findIndex((p) => p.links));
  const [idx, setIdx] = React.useState(firstIdx);
  React.useEffect(() => { setIdx(Math.max(0, data.paths.findIndex((p) => p.links))); }, [data.label]);
  const active = data.paths[idx] || data.paths[0];
  return (
    <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "28px var(--gutter) 34px", display: "grid", gridTemplateColumns: "258px 1fr 300px", gap: "clamp(32px,4vw,64px)" }}>
      <ul style={{ listStyle: "none", margin: 0, padding: "0 24px 0 0", borderRight: "1px solid var(--border-hairline)" }}>
        {data.paths.map((p, i) => {
          const direct = !!p.direct, on = i === idx && !direct;
          return (
            <li key={p.h}>
              <button
                onMouseEnter={() => p.links && setIdx(i)}
                onClick={(e) => direct ? go(e, p.direct) : (p.links && setIdx(i))}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "none", border: "none", padding: "9px 0", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-serif)", fontSize: 19, color: on ? "var(--text-accent)" : "var(--text-primary)", transition: "color var(--dur-fast)" }}>
                <span>{p.h}</span>
                <i className={"ph " + (direct ? "ph-arrow-up-right" : "ph-caret-right")} style={{ fontSize: 13, color: "var(--text-muted)", opacity: on ? 1 : 0.4 }} />
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 20 }}>{active.h}</div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 40px" }}>
          {(active.links || []).map((l) => (
            <li key={l}><a href="#" onClick={(e) => go(e, l)} style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--text-primary)", textDecoration: "none" }}>{l}</a></li>
          ))}
        </ul>
        <a href="#" onClick={(e) => go(e, active.h)} style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 26, fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)", textDecoration: "none" }}>View all {active.h.replace(/^Shop by /, "")} <i className="ph ph-arrow-right" /></a>
      </div>
      <MegaFeatured data={data} onNavigate={onNavigate} />
    </div>
  );
}

function MegaCols({ data, go, onNavigate }) {
  return (
    <React.Fragment>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "40px var(--gutter) 36px", display: "grid", gridTemplateColumns: `repeat(${data.cols.length}, 1fr) 1.3fr`, gap: 40 }}>
        {data.cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 18 }}>{c.h}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
              {c.links.map((l) => (
                <li key={l}><a href="#" onClick={(e) => go(e, l)} style={{ fontFamily: "var(--font-serif)", fontSize: 19, color: "var(--text-primary)", textDecoration: "none" }}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <MegaFeatured data={data} onNavigate={onNavigate} />
      </div>
      {data.quick && (
        <div style={{ borderTop: "1px solid var(--border-hairline)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "16px var(--gutter)", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Discover</span>
            {data.quick.map((q) => (
              <a key={q} href="#" onClick={(e) => go(e, q)} style={{ fontSize: 12.5, letterSpacing: ".02em", color: "var(--text-secondary)", textDecoration: "none", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", padding: "7px 15px" }}>{q}</a>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function MegaMenu({ data, onNavigate }) {
  if (!data || (!data.cols && !data.paths)) return null;
  const go = (e, l) => { e.preventDefault(); const [r, a] = navRouteFor(l); onNavigate && onNavigate(r, a); };
  return (
    <div style={{ position: "absolute", left: 0, right: 0, top: "100%", background: "var(--surface-page)", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-soft)", animation: "aaFade var(--dur-base) var(--ease-luxe)" }}>
      {data.paths ? <MegaPaths data={data} go={go} onNavigate={onNavigate} /> : <MegaCols data={data} go={go} onNavigate={onNavigate} />}
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer({ onNavigate }) {
  const cols = [
    { h: "Shop", links: ["Furniture", "Rugs", "Lighting", "Decor", "Wall Art", "New Arrivals"] },
    { h: "Discover", links: ["Our Story", "The Atelier", "Journal", "Customer Homes", "Collections"] },
    { h: "Trade", links: ["Designer Program", "Architects", "Hospitality", "Customization", "Request Access"] },
    { h: "Service", links: ["Delivery & Shipping", "Care & Materials", "Returns", "Contact", "Track Order"] },
  ];
  return (
    <footer style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)" }}>
      {/* newsletter */}
      <div style={{ borderBottom: "1px solid var(--border-on-dark)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <Eyebrow tone="on-dark">The Art Avenue Letter</Eyebrow>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 34, margin: "14px 0 0", lineHeight: 1.1 }}>
              Stories from the atelier, <em style={{ color: "var(--accent-soft)" }}>first.</em>
            </h3>
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
            <input
              placeholder="Your email address"
              style={{
                flex: 1,
                background: "transparent",
                border: "1px solid var(--border-on-dark)",
                borderRadius: "var(--radius-sm)",
                color: "var(--text-on-dark)",
                padding: "0 18px",
                fontFamily: "var(--font-sans)",
                fontSize: 15,
              }}
            />
            <Button variant="secondary" onDark>Subscribe</Button>
          </form>
        </div>
      </div>

      {/* link columns */}
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)", display: "grid", gridTemplateColumns: "1.4fr repeat(4, 1fr)", gap: 40 }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 24, letterSpacing: ".16em", textTransform: "uppercase" }}>Art Avenue</div>
          <p style={{ maxWidth: 280, marginTop: 18, color: "var(--text-on-dark-muted)", fontSize: 14, lineHeight: 1.7 }}>
            A design house curating handcrafted furniture, rugs, lighting and objects — made by hand in India, made to last for generations.
          </p>
          <div style={{ display: "flex", gap: 18, marginTop: 22, fontSize: 19 }}>
            <i className="ph-light ph-instagram-logo" />
            <i className="ph-light ph-pinterest-logo" />
            <i className="ph-light ph-linkedin-logo" />
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--accent-soft)", marginBottom: 18 }}>{c.h}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 11 }}>
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-on-dark-muted)", textDecoration: "none", fontSize: 14 }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* trust strip */}
      <div style={{ borderTop: "1px solid var(--border-on-dark)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "20px var(--gutter)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontSize: 12, color: "var(--text-on-dark-muted)", letterSpacing: ".02em" }}>
          <span>© 2026 Art Avenue Design House · Handcrafted in India</span>
          <span style={{ display: "flex", gap: 24 }}>
            <a href="#" onClick={(e)=>e.preventDefault()} style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
            <a href="#" onClick={(e)=>e.preventDefault()} style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
            <a href="#" onClick={(e)=>e.preventDefault()} style={{ color: "inherit", textDecoration: "none" }}>Secure international shipping</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Trust block — sits directly beneath price ---------- */
function TrustBlock({ items }) {
  return (
    <ul style={{ listStyle: "none", margin: "20px 0 0", padding: "18px 0 0", borderTop: "1px solid var(--border-hairline)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 20px" }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 13, lineHeight: 1.42, color: "var(--text-secondary)" }}>
          <i className="ph ph-check" style={{ fontSize: 13, color: "var(--accent-deep)", marginTop: 3, flex: "none" }} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- "Need Assembly Assistance?" — eligible furniture only ---------- */
function AssemblyBand({ href }) {
  return (
    <section style={{ background: "var(--surface-alt)", padding: "var(--section-y-tight) 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "1.3fr auto", gap: "clamp(28px,4vw,64px)", alignItems: "center" }}>
        <div style={{ maxWidth: "60ch" }}>
          <Eyebrow tone="accent">Delivery &amp; Assembly</Eyebrow>
          <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h3)", lineHeight: 1.12, margin: "14px 0 0" }}>Need assembly assistance?</h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)", margin: "12px 0 0" }}>
            Most pieces arrive securely packed and ready to use. Some larger items may require simple assembly after delivery — for these, assembly or installation support may be available depending on the product and your location. We recommend speaking with us before you order so we can confirm what your piece needs.
          </p>
        </div>
        <a href={href} target="_blank" rel="noopener" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
          <Button variant="secondary" iconLeft={<i className="ph ph-chat-teardrop-dots" style={{ color: "var(--accent-deep)" }} />}>Speak with a Design Consultant</Button>
        </a>
      </div>
    </section>
  );
}

/* ---------- "Why You'll Love It" — editorial, category-specific ---------- */
const WHY = {
  Furniture: {
    tone: "clay", caption: "Joinery, by hand",
    headline: "A piece made to be lived with.",
    intro: "Every Art Avenue piece begins as raw timber and the hands of the people who shape it. This is furniture built slowly, to be kept.",
    points: [
      { h: "Handcrafted by skilled artisans", t: "Carved, joined and finished by hand in our workshops — never mass-produced." },
      { h: "Built from carefully selected materials", t: "Kiln-dried hardwoods and natural textiles, chosen to last decades." },
      { h: "Designed to age beautifully", t: "Oil-rubbed finishes and honest joinery gain character with the years." },
      { h: "Made for everyday living", t: "Generous, comfortable proportions drawn for real homes, not showrooms." },
      { h: "Naturally one of a kind", t: "Grain, tone and hand-finish vary gently from piece to piece." },
    ],
  },
  Rugs: {
    tone: "olive", caption: "Knotted by hand",
    headline: "A foundation, knotted by hand.",
    intro: "Months on the loom give a rug its depth. Naturally dyed and hand-knotted, it softens underfoot and grounds a room for a generation.",
    points: [
      { h: "Hand-knotted by master weavers", t: "Tied knot by knot on vertical looms over four to six months." },
      { h: "Naturally dyed, naturally varied", t: "Subtle abrash — gentle colour shift — is the signature of true hand craft." },
      { h: "Built to be passed down", t: "Dense wool pile made to soften over years, never to wear thin." },
      { h: "Grounds and warms a room", t: "A quiet anchor that draws the whole arrangement together." },
      { h: "Singular by nature", t: "No two rugs are ever knotted exactly alike." },
    ],
  },
  Cushions: {
    tone: "clay", caption: "Finished by hand",
    headline: "Quiet character, made by hand.",
    intro: "Cushions crafted in small batches across India — in whatever technique and cloth suits the design, made to be layered, handled and lived with.",
    points: [
      { h: "Made by skilled hands", t: "Block-printed, woven, tufted, embroidered or appliquéd — crafted by textile artisans." },
      { h: "Natural, considered fabrics", t: "Cotton, linen, wool, velvet and leather, chosen for how they feel and last." },
      { h: "Layered for a collected look", t: "Mix techniques, sizes and textures for a relaxed, gathered-over-time feeling." },
      { h: "Made to be refreshed", t: "Removable covers and concealed zips make a change of mood simple." },
      { h: "Quietly unique", t: "Small variations are the signature of genuine handwork." },
    ],
  },
  Lighting: {
    tone: "bronze", caption: "Cast & hand-finished",
    headline: "Warm light, worked by hand.",
    intro: "Brass and stone shaped by artisans, made to throw a soft, considered light and to patina beautifully over the years.",
    points: [
      { h: "Cast and finished by hand", t: "Metal and stone worked by makers, not machines." },
      { h: "Warm, considered light", t: "Designed to flatter a room once the daylight goes." },
      { h: "Built to patina", t: "Living finishes that deepen and soften over time." },
      { h: "Made for the long term", t: "Rewireable and repairable — made to keep, not replace." },
      { h: "Singular by nature", t: "Hand-finishing gives every piece its own surface." },
    ],
  },
  Decor: {
    tone: "stone", caption: "Thrown & carved by hand",
    headline: "Objects made to be gathered.",
    intro: "Thrown, carved or cast individually, in honest materials left to speak for themselves — pieces meant to be picked up and rearranged.",
    points: [
      { h: "Made by hand", t: "Each object thrown, carved or cast individually by our makers." },
      { h: "Honest materials", t: "Stone, clay, wood and brass, finished to feel like themselves." },
      { h: "Collected, not matched", t: "Made to be gathered, grouped and moved around a room." },
      { h: "Tactile by design", t: "Weight and surface considered to be handled, not just seen." },
      { h: "Each one unique", t: "Natural variation is part of every piece's character." },
    ],
  },
  "Wall Art": {
    tone: "sand", caption: "Original & limited works",
    headline: "A wall's centre of gravity.",
    intro: "Original and limited works, made or editioned by hand on archival materials, composed for the rooms they'll live in.",
    points: [
      { h: "Original and limited works", t: "Made or editioned by hand — never mass-printed." },
      { h: "Archival materials", t: "Pigments, papers and framing chosen to last generations." },
      { h: "Composed for the room", t: "Scale and tone considered for living spaces, not galleries alone." },
      { h: "A natural focal point", t: "Art that gives a wall its centre of gravity." },
      { h: "Carries the maker's hand", t: "Each work is singular to the person who made it." },
    ],
  },
};
function WhyLoveIt({ category = "Furniture" }) {
  const d = WHY[category] || WHY.Furniture;
  return (
    <section style={{ background: "var(--surface-page)", borderTop: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
        <Figure tone={d.tone} ratio="4/5" label={d.caption} />
        <div>
          <Eyebrow tone="accent" rule>Why You'll Love It</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "var(--tracking-tight)", margin: "16px 0 0" }}>{d.headline}</h2>
          <p style={{ fontSize: "var(--text-body)", lineHeight: 1.72, color: "var(--text-secondary)", margin: "16px 0 0", maxWidth: "58ch" }}>{d.intro}</p>
          <ul style={{ listStyle: "none", margin: "28px 0 0", padding: 0 }}>
            {d.points.map((p, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 18px", alignItems: "baseline", padding: "16px 0", borderTop: "1px solid var(--border-hairline)" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16, color: "var(--text-accent)", width: 26 }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.25 }}>{p.h}</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-secondary)", marginTop: 4, maxWidth: "60ch" }}>{p.t}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Product status — In Stock / Made to Order / Customizable / Consultation ---------- */
const STATUS = {
  "in-stock": { label: "In Stock", note: "Ready to ship", icon: "ph-package", tone: "var(--accent-deep)" },
  "available-to-order": { label: "Available to Order", note: "Crafted for your home", icon: "ph-hammer", tone: "var(--accent-deep)" },
  "made-to-order": { label: "Made to Order", note: "Crafted for you after ordering", icon: "ph-hammer", tone: "var(--accent-deep)" },
  customizable: { label: "Customizable", note: "Sizes, finishes & materials", icon: "ph-pencil-ruler", tone: "var(--accent-deep)" },
  consultation: { label: "Consultation Recommended", note: "A considered, guided purchase", icon: "ph-chat-teardrop-dots", tone: "var(--accent-deep)" },
};
function ProductStatus({ states = [] }) {
  const list = states.map((s) => STATUS[s]).filter(Boolean);
  if (!list.length) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
      {list.map((s) => (
        <span key={s.label} title={s.note} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 13px 7px 11px", borderRadius: "var(--radius-pill)", border: "1px solid var(--accent-soft)", background: "var(--surface-accent-tint)", fontSize: 12, color: "var(--text-accent)", letterSpacing: ".01em" }}>
          <i className={"ph " + s.icon} style={{ fontSize: 13, color: s.tone }} />{s.label}
        </span>
      ))}
    </div>
  );
}

/* ---------- "Made For Your Space" — customization + consultation band ---------- */
function MadeForYourSpace({ category = "Furniture", options, href, tone = "espresso" }) {
  const DEFAULTS = {
    Furniture: ["Custom dimensions to suit your room", "Bespoke finishes & wood tones", "Your own upholstery (COM) welcomed", "Configurations for living, dining & bedroom"],
    Rugs: ["Custom sizes on selected designs", "Bespoke colourways from our dye library", "Alternative constructions & pile heights", "Round, runner & oversized formats"],
    Cushions: ["Custom sizes & fill options", "Bespoke fabrics, leathers & techniques", "Coordinated sets for a collected look", "Trade & hospitality quantities"],
    Lighting: ["Custom dimensions & drop lengths", "Bespoke metal finishes", "Shade & diffuser options", "Project & hospitality specification"],
    Decor: ["Bespoke finishes & dimensions", "Commissioned one-of-a-kind pieces", "Coordinated groupings", "Project quantities"],
    "Wall Art": ["Commissioned original works", "Bespoke sizing & framing", "Curated pairings for a wall", "Edition & medium options"],
  };
  const opts = options || DEFAULTS[category] || DEFAULTS.Furniture;
  return (
    <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
        <div>
          <Eyebrow tone="on-dark">Made For Your Space</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--text-display-2)", lineHeight: 1.06, letterSpacing: "var(--tracking-tight)", margin: "18px 0 0" }}>Most pieces can be <em style={{ color: "var(--accent-soft)" }}>made to suit.</em></h2>
          <p style={{ fontSize: "var(--text-body-lg)", lineHeight: 1.7, color: "var(--text-on-dark-muted)", margin: "18px 0 0", maxWidth: "46ch" }}>
            Available in additional sizes, finishes and materials depending on the piece. Tell us about your room and how you live, and a design consultant will shape it with you — well before you order.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
            <a href={href} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
              <Button variant="primary" iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Speak with a Design Consultant</Button>
            </a>
          </div>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--border-on-dark)" }}>
          {opts.map((o) => (
            <li key={o} style={{ display: "flex", gap: 14, alignItems: "center", padding: "16px 0", borderBottom: "1px solid var(--border-on-dark)", fontSize: 15.5, color: "var(--text-on-dark)" }}>
              <i className="ph ph-plus" style={{ fontSize: 14, color: "var(--accent-soft)", flex: "none" }} />{o}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Fulfillment model — In Stock · Made to Order · Custom Order · Project Enquiry ----------
 * One product architecture covers inventory, made-to-order, custom and project-based products.
 * Each type carries its own messaging, lead time and primary call-to-action. Merchant sets the
 * `fulfillment` field per SKU; the PDP reads it for the status bar AND the primary button. */
const FULFILLMENT = {
  "in-stock": {
    label: "In Stock", icon: "ph-package", lead: "Ships in 3–5 days", action: "cart", cta: "Add to Cart",
    msg: "In stock and ready to ship — dispatched within 3–5 business days, securely packed and insured.",
  },
  "made-to-order": {
    label: "Made to Order", icon: "ph-hammer", lead: "Crafted in 3–4 weeks", action: "cart", cta: "Add to Cart",
    msg: "Crafted by hand to order — made for you once you order, and delivered in 3–4 weeks.",
  },
  "custom": {
    label: "Custom Order", icon: "ph-pencil-ruler", lead: "Timeline set at consultation", action: "consult", cta: "Request a Custom Order",
    msg: "Made to your specification — dimensions, finish and materials of your choosing, shaped with a design consultant before you commit.",
  },
  "project": {
    label: "Project Enquiry", icon: "ph-buildings", lead: "Planned to your project schedule", action: "consult", cta: "Start a Project Enquiry",
    msg: "For multi-room, hospitality and contract orders — planned, sourced and delivered to your project timeline by a dedicated consultant.",
  },
};
function fulfillmentOf(type) { return FULFILLMENT[type] || FULFILLMENT["made-to-order"]; }

function FulfillmentBar({ type }) {
  const f = fulfillmentOf(type);
  return (
    <div style={{ marginTop: 18, padding: "15px 17px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-hairline)", background: "var(--surface-raised)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: "var(--radius-pill)", background: "var(--surface-accent-tint)", border: "1px solid var(--accent-soft)", color: "var(--text-accent)", fontSize: 12, letterSpacing: ".02em" }}>
          <i className={"ph " + f.icon} style={{ fontSize: 14, color: "var(--accent-deep)" }} />{f.label}
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "var(--text-secondary)" }}>
          <i className="ph-light ph-clock" style={{ fontSize: 15, color: "var(--accent-deep)" }} />{f.lead}
        </span>
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)", margin: "11px 0 0" }}>{f.msg}</p>
    </div>
  );
}

/* ---------- Visibility modes — Ecommerce · Consultation · Price on Request · Project Only ----------
 * A separate metafield layer from fulfillment. Controls price visibility, cart visibility and the
 * default primary/secondary CTA + lead-generation behaviour. Merchants can override either CTA
 * explicitly (primaryCta / secondaryCta) independently of fulfillment or visibility. */
const VISIBILITY = {
  "ecommerce":        { price: true,  cart: true,  primary: "add-to-cart",     secondary: "consult",  lead: "cart" },
  "consultation":     { price: true,  cart: false, primary: "consult",          secondary: "customize", lead: "consult" },
  "price-on-request": { price: false, cart: false, primary: "request-pricing",  secondary: "consult",  lead: "enquiry" },
  "project-only":     { price: false, cart: false, primary: "project-enquiry",  secondary: "consult",  lead: "project" },
};

/* CTA registry — purchase / enquiry actions only. Sample requests are intentionally NOT here:
 * they are a separate customer intent (a lead, not a purchase action) handled by AASampleRequest. */
const CTA = {
  "add-to-cart":     { label: "Add to Cart",                    icon: "ph-shopping-bag-open", kind: "cart" },
  "request-pricing": { label: "Request Pricing",                icon: "ph-tag",               kind: "link" },
  "consult":         { label: "Speak with a Design Consultant", icon: "ph-chat-teardrop-dots",kind: "link", href: "consult" },
  "customize":       { label: "Customize This Piece",           icon: "ph-pencil-ruler",      kind: "link", href: "customize" },
  "project-enquiry": { label: "Start a Project Enquiry",        icon: "ph-buildings",         kind: "link", href: "project" },
  "notify":          { label: "Notify Me When Available",        icon: "ph-bell",              kind: "link", href: "consult" },
};

function commerceOf(cfg, life) {
  cfg = cfg || {};
  const v = VISIBILITY[cfg.visibility] || VISIBILITY["ecommerce"];
  const res = {
    visibility: cfg.visibility || "ecommerce",
    price: v.price, cart: v.cart, lead: v.lead,
    primary: cfg.primaryCta || v.primary,
    secondary: cfg.secondaryCta === null ? null : (cfg.secondaryCta || v.secondary),
  };
  // Lifecycle composes on top of visibility: a non-shopable state removes the cart and swaps the CTA.
  if (life && life.shopable === false) {
    res.cart = false;
    res.primary = life.primary || res.primary;
  }
  return res;
}

const ctaQtyBtn = { width: 40, height: 46, background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "var(--text-secondary)" };
const ctaSaveBtn = { width: 50, flex: "none", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", background: "transparent", cursor: "pointer", fontSize: 18, color: "var(--text-primary)" };

function CtaOne({ ctaKey, hrefs, variant, fullWidth, label }) {
  const c = CTA[ctaKey];
  if (!c) return null;
  if (c.kind === "cart") return <Button variant={variant} fullWidth={fullWidth}>{label || c.label}</Button>;
  const href = (hrefs && (hrefs[c.href] || hrefs[ctaKey])) || (hrefs && hrefs.consult) || "#";
  return (
    <a href={href} target="_blank" rel="noopener" style={{ textDecoration: "none", flex: fullWidth ? 1 : "none" }}>
      <Button variant={variant} fullWidth={fullWidth} iconLeft={<i className={"ph " + c.icon} style={{ color: variant === "primary" ? undefined : "var(--accent-deep)" }} />}>{c.label}</Button>
    </a>
  );
}

/* Primary + secondary CTA cluster, fully driven by the resolved commerce object */
function CtaButtons({ commerce, hrefs, priceText, save = true }) {
  const [qty, setQty] = React.useState(1);
  const primary = CTA[commerce.primary];
  const isCart = primary && primary.kind === "cart";
  return (
    <React.Fragment>
      <div style={{ display: "flex", gap: 14, marginTop: 22, alignItems: "stretch" }}>
        {isCart && commerce.cart && (
          <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)" }}>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} style={ctaQtyBtn}>–</button>
            <span style={{ width: 36, textAlign: "center", fontSize: 15 }}>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} style={ctaQtyBtn}>+</button>
          </div>
        )}
        <CtaOne ctaKey={commerce.primary} hrefs={hrefs} variant="primary" fullWidth label={isCart && priceText ? "Add to Cart · " + priceText : null} />
        {save && <button aria-label="Save" style={ctaSaveBtn}><i className="ph ph-heart" /></button>}
      </div>
      {commerce.secondary && (
        <div style={{ marginTop: 12 }}>
          <CtaOne ctaKey={commerce.secondary} hrefs={hrefs} variant="secondary" fullWidth />
        </div>
      )}
    </React.Fragment>
  );
}

/* Price block — respects visibility (hidden price → "Price on request" / "Project pricing") */
function PriceTag({ priceText, commerce, caption }) {
  if (commerce.price) {
    return (
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 16, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--text-primary)" }}>{priceText}</span>
        {caption && <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{caption}</span>}
      </div>
    );
  }
  const isProject = commerce.visibility === "project-only";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11, marginTop: 16 }}>
      <span style={{ fontFamily: "var(--font-serif)", fontSize: 23, color: "var(--text-primary)" }}>{isProject ? "Project pricing" : "Price on request"}</span>
      <span style={{ fontSize: 12.5, color: "var(--text-muted)", letterSpacing: ".01em" }}>{isProject ? "Quoted per project" : "Shared on enquiry"}</span>
    </div>
  );
}

/* Collection-card commerce badge — surfaces the product's commerce state without entering the PDP */
const COMMERCE_BADGE = {
  "in-stock":      { label: "In Stock",        icon: "ph-package" },
  "made-to-order": { label: "Made to Order",   icon: "ph-hammer" },
  "customizable":  { label: "Customizable",    icon: "ph-pencil-ruler" },
  "project":       { label: "Made for Projects", icon: "ph-buildings" },
};
function CommerceBadge({ state }) {
  const b = COMMERCE_BADGE[state];
  if (!b) return null;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 11px", borderRadius: "var(--radius-pill)", background: "rgba(250,246,239,.94)", color: "var(--text-primary)", fontSize: 10.5, fontWeight: 500, letterSpacing: ".05em", textTransform: "uppercase", boxShadow: "var(--shadow-soft)" }}>
      <i className={"ph " + b.icon} style={{ fontSize: 12, color: "var(--accent-deep)" }} />{b.label}
    </span>
  );
}

/* ---------- Global lead framework — one structure for every lead type (CRM-ready) ----------
 * Lead types: Design Consultation · Request Pricing · Request Samples · Custom Product Enquiry
 *             Project Enquiry · Trade Account Application.
 * Every lead carries the same payload so it can be routed consistently to a CRM:
 *   { product, sku, url, leadType, customer, message }
 * leadHref() builds the channel link (WhatsApp here; swap for a form/endpoint in production). */
const WA_NUMBER = "919828060095";
const LEAD_TYPES = {
  "consultation": { label: "Design Consultation",      intent: "I'd like a design consultation" },
  "pricing":      { label: "Request Pricing",          intent: "I'd like pricing" },
  "samples":      { label: "Request Samples",          intent: "I'd like to request a sample" },
  "custom":       { label: "Custom Product Enquiry",   intent: "I'd like a custom version" },
  "project":      { label: "Project Enquiry",          intent: "I'd like to discuss a project" },
  "trade":        { label: "Trade Account Application", intent: "I'd like to apply for a trade account" },
};
function leadPayload(type, ctx) {
  ctx = ctx || {};
  const t = LEAD_TYPES[type] || LEAD_TYPES["consultation"];
  return {
    leadType: t.label,
    product: ctx.product || null,
    sku: ctx.sku || null,
    url: typeof location !== "undefined" ? location.href : null,
    customer: ctx.customer || null,
    message: ctx.message || null,
  };
}
function leadHref(type, ctx) {
  ctx = ctx || {};
  const t = LEAD_TYPES[type] || LEAD_TYPES["consultation"];
  const p = leadPayload(type, ctx);
  const lines = [
    "Hello Art Avenue,",
    t.intent + (p.product ? " for the " + p.product : "") + ".",
    p.sku ? "SKU: " + p.sku : "",
    "Lead type: " + p.leadType,
    p.message ? "Message: " + p.message : "",
    p.url ? "Page: " + p.url : "",
  ].filter(Boolean);
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
}

/* ---------- Sample request — a DEDICATED action, never a CTA override ----------
 * Sits beside material / finish / upholstery / construction selectors. One of the highest-value
 * lead sources for luxury furniture, rugs and upholstery, so it is treated as its own intent. */
function SampleRequest({ product, sku, kinds }) {
  const list = kinds && kinds.length ? kinds : ["Material"];
  return (
    <div style={{ marginTop: 22, padding: "18px 0 0", borderTop: "1px solid var(--border-hairline)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <i className="ph-light ph-swatches" style={{ fontSize: 22, color: "var(--accent-deep)", flex: "none" }} />
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "var(--text-primary)" }}>Request a sample</div>
          <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>Feel the {list.join(" & ").toLowerCase()} in your own light · from ₹999</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 13, flexWrap: "wrap" }}>
        {list.map((k) => (
          <a key={k} href={leadHref("samples", { product, sku, message: k + " sample" })} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 15px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", fontSize: 12.5, color: "var(--text-secondary)" }}>
            <i className="ph ph-swatches" style={{ color: "var(--accent-deep)", fontSize: 14 }} /> Request {k} Sample
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------- Product presets — one-click defaults a merchant can then override ----------
 * A preset seeds fulfillment + visibility + the module set/order. Any field set explicitly on the
 * product still wins (merchant override). Resolve with AAPreset(name, overrides). */
const PRESETS = {
  "luxury-furniture":      { fulfillment: "made-to-order", visibility: "ecommerce", sizeMode: "multi", modules: { material: true, finish: true, upholstery: true, samples: true, customization: true, assembly: true, completeRoom: true, faq: true, related: true, delivery: true } },
  "luxury-rug":           { fulfillment: "made-to-order", visibility: "ecommerce", sizeMode: "multi", modules: { guides: true, specs: true, construction: true, material: true, craft: true, rooms: true, related: true, samples: true } },
  "luxury-cushion":       { fulfillment: "made-to-order", visibility: "ecommerce", modules: { samples: true, whyLove: true, customization: true, pairs: true } },
  "custom-product":       { fulfillment: "custom", visibility: "price-on-request", primaryCta: "request-pricing" },
  "project-product":      { fulfillment: "project", visibility: "project-only", primaryCta: "project-enquiry" },
  "in-stock-product":     { fulfillment: "in-stock", visibility: "ecommerce", primaryCta: "add-to-cart" },
  "made-to-order-product":{ fulfillment: "made-to-order", visibility: "ecommerce", primaryCta: "add-to-cart" },
};
function presetOf(name, overrides) {
  const base = PRESETS[name] || {};
  const merged = Object.assign({}, base, overrides || {});
  if (base.modules || (overrides && overrides.modules)) merged.modules = Object.assign({}, base.modules, overrides && overrides.modules);
  return merged;
}

/* ---------- Product lifecycle states — control availability without template changes ----------
 * Composes on top of visibility via AACommerce(cfg, life): a non-shopable state removes the cart
 * and swaps the primary CTA (e.g. Coming Soon → Notify Me). `archive`/`hidden` are filtered out of
 * listings upstream. Resolve with AALifecycle(state); show the notice with <AALifecycleBanner>. */
const LIFECYCLE = {
  "active":       { label: "Active",       shopable: true,  badge: null,           banner: null },
  "coming-soon":  { label: "Coming Soon",  shopable: false, badge: "Coming Soon",  primary: "notify",  banner: "Arriving soon — register your interest and we'll tell you the moment it's available." },
  "seasonal":     { label: "Seasonal",     shopable: true,  badge: "Seasonal",     banner: "A seasonal piece, available for a limited time." },
  "discontinued": { label: "Discontinued", shopable: false, badge: "Discontinued", primary: "consult", banner: "This piece has been discontinued. Speak with a consultant about current alternatives." },
  "archive":      { label: "Archived",     shopable: false, badge: "Archived",     hidden: true,       banner: "This piece is archived and no longer available." },
};
function lifecycleOf(state) { return LIFECYCLE[state] || LIFECYCLE["active"]; }

function LifecycleBanner({ state }) {
  const l = lifecycleOf(state);
  if (!l.banner) return null;
  const muted = state === "discontinued" || state === "archive";
  const tone = muted ? "var(--text-muted)" : "var(--accent-deep)";
  return (
    <div style={{ marginTop: 16, display: "flex", alignItems: "flex-start", gap: 11, padding: "13px 16px", borderRadius: "var(--radius-sm)", background: muted ? "var(--surface-alt)" : "var(--surface-accent-tint)", border: "1px solid " + (muted ? "var(--border-strong)" : "var(--accent-soft)") }}>
      <i className={"ph " + (state === "coming-soon" ? "ph-bell" : state === "seasonal" ? "ph-sun" : "ph-info")} style={{ fontSize: 17, color: tone, flex: "none", marginTop: 1 }} />
      <div>
        <div style={{ fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: tone }}>{l.label}</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--text-secondary)", marginTop: 3 }}>{l.banner}</div>
      </div>
    </div>
  );
}

Object.assign(window, { AAFigure: Figure, AAAnnounceBar: AnnounceBar, AAHeader: Header, AAFooter: Footer, AA_NAV: NAV, AATrustBlock: TrustBlock, AAWhyLoveIt: WhyLoveIt, AAAssemblyBand: AssemblyBand, AAProductStatus: ProductStatus, AAMadeForYourSpace: MadeForYourSpace, AAFulfillment: fulfillmentOf, AAFulfillmentBar: FulfillmentBar, AACommerce: commerceOf, AACtaButtons: CtaButtons, AAPriceTag: PriceTag, AACommerceBadge: CommerceBadge, AASampleRequest: SampleRequest, AALeadHref: leadHref, AALead: { types: LEAD_TYPES, href: leadHref, payload: leadPayload }, AAPreset: presetOf, AALifecycle: lifecycleOf, AALifecycleBanner: LifecycleBanner });
