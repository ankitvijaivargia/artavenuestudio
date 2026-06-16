/* Art Avenue — Mobile-first screens (inside iOS frame)
 * Reuses DS components + AAFigure (from ../website/parts.jsx).
 */
(function () {
  const DS = window.ArtAvenueDesignSystem_70ed11;
  const { Button, Eyebrow, Badge, Input, Select, ProductCard, CollectionTile } = DS;
  const Fig = window.AAFigure;

  /* ============ shared bits ============ */
  const PAD = 20;
  const fmt = (n) => "\u20B9 " + n.toLocaleString("en-IN");
  const INITIAL_CART = [
    { id: "marwar", name: "Marwar Lounge Chair", finish: "Natural Teak · Belgian Linen", price: 148000, qty: 1, tone: "clay" },
    { id: "meridian", name: "Brass Meridian Pendant", finish: "Aged Brass", price: 64000, qty: 1, tone: "bronze" },
  ];

  function AppBar({ onMenu, onNavigate, solid = true, back = false, onBack, cartCount = 2 }) {
    return (
      <div style={{
        position: "sticky", top: 0, zIndex: 30,
        paddingTop: 48, background: solid ? "var(--surface-page)" : "transparent",
        borderBottom: solid ? "1px solid var(--border-hairline)" : "1px solid transparent",
      }}>
        <div style={{ height: 46, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `0 ${PAD}px` }}>
          <button onClick={back ? onBack : onMenu} style={iconBtn(solid)} aria-label={back ? "Back" : "Menu"}><i className={back ? "ph-light ph-arrow-left" : "ph-light ph-list"} style={{ fontSize: 24 }} /></button>
          <button onClick={() => onNavigate("home")} style={{ background: "none", border: "none", cursor: "pointer", color: solid ? "var(--text-primary)" : "#fff" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 18, letterSpacing: ".14em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Art Avenue</span>
          </button>
          <div style={{ display: "flex", gap: 16, justifyContent: "flex-end" }}>
            <button style={iconBtn(solid)} aria-label="Search"><i className="ph-light ph-magnifying-glass" style={{ fontSize: 21 }} /></button>
            <button onClick={() => onNavigate("cart")} style={{ ...iconBtn(solid), position: "relative" }} aria-label="Bag">
              <i className="ph-light ph-handbag-simple" style={{ fontSize: 21 }} />
              {cartCount > 0 && <span style={{ position: "absolute", top: -4, right: -6, minWidth: 15, height: 15, padding: "0 4px", borderRadius: 99, background: "var(--accent)", color: "#fff", fontSize: 9, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    );
  }
  const iconBtn = (solid) => ({ background: "none", border: "none", padding: 0, cursor: "pointer", color: solid ? "var(--text-primary)" : "#fff", display: "flex", alignItems: "center" });

  function SectionHead({ eyebrow, title, intro, center, light }) {
    return (
      <div style={{ textAlign: center ? "center" : "left" }}>
        {eyebrow && <Eyebrow tone={light ? "on-dark" : "accent"} rule center={center}>{eyebrow}</Eyebrow>}
        {title && <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 30, lineHeight: 1.1, letterSpacing: "var(--tracking-tight)", margin: "14px 0 0", color: light ? "var(--text-on-dark)" : "var(--text-primary)" }}>{title}</h2>}
        {intro && <p style={{ fontSize: 15.5, fontWeight: 300, lineHeight: 1.6, color: light ? "var(--text-on-dark-muted)" : "var(--text-secondary)", margin: center ? "12px auto 0" : "12px 0 0", maxWidth: 340 }}>{intro}</p>}
      </div>
    );
  }

  const railStyle = { display: "flex", gap: 14, overflowX: "auto", scrollSnapType: "x mandatory", margin: `0 -${PAD}px`, padding: `0 ${PAD}px`, scrollbarWidth: "none" };

  /* ============ NAV DRAWER — progressive drill-down ============ */
  const routeMobile = (l) => {
    if (/materials library|finish library/i.test(l)) return ["library", l];
    if (/custom|bespoke|made for your space|designer collaborat|interior project|hospitality project|project procurement|the atelier|speak with|consultant|customization/i.test(l)) return ["custom", l];
    if (/shop all furniture/i.test(l)) return ["collection", "Furniture"];
    if (/shop all rugs|rug size guide/i.test(l)) return ["collection", "Rugs"];
    return ["collection", l];
  };
  const pathsOf = (n) => n.paths || (n.cols ? n.cols.map((c) => ({ h: c.h, links: c.links })) : null);

  const RUG_COLOR = { Ivory: "#F2ECE0", Beige: "#E2D6C2", Sand: "#D8C39E", Taupe: "#B8A88F", Neutral: "#C9BCA8", Blue: "#6E8198", Green: "#7A8463", Terracotta: "#B5774E", Grey: "#9A968E" };
  const MULTI_BG = "conic-gradient(from 90deg, #B5774E, #7A8463, #6E8198, #D8C39E, #B5774E)";
  const isColourPath = (h) => /colou?r/i.test(h);

  function Drawer({ open, onClose, onNavigate }) {
    const nav = window.AA_NAV || [];
    const [openCat, setOpenCat] = React.useState("Rugs");
    const [openPath, setOpenPath] = React.useState(null);
    const scrollRef = React.useRef(null);

    React.useEffect(() => {
      if (!document.getElementById("aa-mnav-kf")) {
        const st = document.createElement("style"); st.id = "aa-mnav-kf";
        st.textContent = "@keyframes aaExpand{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}";
        document.head.appendChild(st);
      }
    }, []);
    React.useEffect(() => { if (!open) { const t = setTimeout(() => { setOpenCat("Rugs"); setOpenPath(null); }, 320); return () => clearTimeout(t); } }, [open]);

    const goTo = (r, a) => { onNavigate(r, a); onClose(); };

    const renderLinks = (p) => (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: `2px ${PAD}px 16px ${PAD + 6}px`, animation: "aaExpand var(--dur-base) var(--ease-luxe)" }}>
        {p.links.map((l) => {
          const colour = isColourPath(p.h);
          return (
            <button key={l} onClick={() => goTo(...routeMobile(l))} style={mChip}>
              {colour && <span style={{ width: 14, height: 14, borderRadius: "50%", flex: "none", border: "1px solid rgba(0,0,0,.14)", background: RUG_COLOR[l] || MULTI_BG }} />}
              {l}
            </button>
          );
        })}
      </div>
    );

    return (
      <React.Fragment>
        <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(34,31,27,.42)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur-base) var(--ease-luxe)", zIndex: 40 }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "88%", background: "var(--surface-page)", transform: open ? "translateX(0)" : "translateX(-100%)", transition: "transform var(--dur-slow) var(--ease-luxe)", zIndex: 41, display: "flex", flexDirection: "column", boxShadow: open ? "var(--shadow-overlay)" : "none" }}>
          <div style={{ padding: `54px ${PAD}px 14px`, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-hairline)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 20, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--text-primary)" }}>Art Avenue</span>
            <button onClick={onClose} aria-label="Close" style={{ background: "none", border: "none", cursor: "pointer", flex: "none" }}><i className="ph-light ph-x" style={{ fontSize: 24 }} /></button>
          </div>
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "2px 0 24px" }}>
            {nav.map((n) => {
              const ps = pathsOf(n);
              const catOpen = openCat === n.label;
              return (
                <div key={n.label} style={{ borderBottom: "1px solid var(--border-hairline)" }}>
                  <button onClick={() => ps ? (setOpenCat(catOpen ? null : n.label), setOpenPath(null)) : goTo(n.label === "Trade" ? "trade" : n.label === "Custom & Bespoke" ? "custom" : "collection", n.label)} style={mCatRow}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: 23, color: catOpen ? "var(--text-accent)" : "var(--text-primary)" }}>{n.label}</span>
                    <i className={"ph " + (ps ? "ph-caret-down" : "ph-arrow-up-right")} style={{ fontSize: 15, color: "var(--text-muted)", transform: catOpen ? "rotate(180deg)" : "none", transition: "transform var(--dur-base) var(--ease-luxe)" }} />
                  </button>
                  {catOpen && ps && (
                    <div style={{ paddingBottom: 10, animation: "aaExpand var(--dur-base) var(--ease-luxe)" }}>
                      {ps.map((p) => {
                        const direct = !!p.direct || !p.links;
                        const key = n.label + "|" + p.h;
                        const pOpen = openPath === key;
                        return (
                          <div key={p.h}>
                            <button onClick={() => direct ? goTo(...routeMobile(p.direct || p.h)) : setOpenPath(pOpen ? null : key)} style={mPathRow}>
                              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, letterSpacing: ".01em", color: pOpen ? "var(--text-accent)" : "var(--text-primary)" }}>{p.h}</span>
                              <i className={"ph " + (direct ? "ph-arrow-up-right" : "ph-caret-down")} style={{ fontSize: 12.5, color: "var(--text-muted)", transform: pOpen ? "rotate(180deg)" : "none", transition: "transform var(--dur-base) var(--ease-luxe)" }} />
                            </button>
                            {pOpen && !direct && renderLinks(p)}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ padding: `26px ${PAD}px 0` }}>
              <Button variant="primary" fullWidth onClick={() => { onNavigate("trade"); onClose(); }}>Trade &amp; Design Program</Button>
              <div style={{ display: "flex", gap: 18, marginTop: 24, color: "var(--text-secondary)", fontSize: 14 }}>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i className="ph-light ph-user" /> Account</span>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i className="ph-light ph-truck" /> Track order</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  const mCatRow = { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: `16px ${PAD}px`, color: "var(--text-primary)" };
  const mPathRow = { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: `11px ${PAD}px 11px ${PAD + 6}px`, color: "var(--text-primary)" };
  const mChip = { display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", fontSize: 13, color: "var(--text-secondary)", background: "transparent", cursor: "pointer", fontFamily: "var(--font-sans)" };

  /* ============ HOME ============ */
  function Home({ onNavigate }) {
    const arrivals = [
      { category: "Seating", name: "Marwar Lounge Chair", price: "₹ 1,48,000", tone: "clay", badge: "New" },
      { category: "Rugs", name: "Aravalli Knotted Rug", price: "₹ 2,20,000", tone: "olive" },
      { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", tone: "bronze" },
    ];
    const rooms = [{ t: "Living Room", tone: "clay" }, { t: "Dining", tone: "espresso" }, { t: "Bedroom", tone: "stone", l: "light" }, { t: "Outdoor", tone: "olive" }];
    return (
      <div>
        {/* hero */}
        <section style={{ position: "relative", height: 560, display: "flex", alignItems: "flex-end" }}>
          <Fig tone="clay" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(34,31,27,.62), rgba(34,31,27,.05) 55%)" }} />
          <div style={{ position: "relative", padding: `0 ${PAD}px 40px` }}>
            <Eyebrow tone="on-dark">Spring · 2026</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "#fff", fontSize: 46, lineHeight: 1.02, letterSpacing: "var(--tracking-tight)", margin: "16px 0 0" }}>Crafted spaces,<br /><em style={{ color: "#EBD9BE" }}>collected stories.</em></h1>
            <p style={{ color: "rgba(250,246,239,.86)", fontSize: 15.5, fontWeight: 300, lineHeight: 1.55, marginTop: 16, maxWidth: 300 }}>Handcrafted furniture &amp; objects for homes made to be lived in.</p>
            <div style={{ marginTop: 26 }}><Button variant="primary" fullWidth onClick={() => onNavigate("collection", "New Arrivals")}>Explore the Collection</Button></div>
          </div>
        </section>

        {/* signature collections — 2 col */}
        <section style={{ padding: `52px ${PAD}px` }}>
          <SectionHead eyebrow="Signature Collections" title="Five disciplines, one point of view." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 28 }}>
            {[{ t: "Furniture", tone: "clay" }, { t: "Rugs", tone: "olive" }, { t: "Lighting", tone: "bronze" }, { t: "Decor", tone: "stone", l: "light" }].map((c) => (
              <CollectionTile key={c.t} title={c.t} tone={c.l || "dark"} cta="Explore" onClick={(e) => { e.preventDefault(); onNavigate("collection", c.t); }} style={{ minHeight: 200 }}>
                <window.AAFigure tone={c.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
              </CollectionTile>
            ))}
          </div>
        </section>

        {/* craftsmanship */}
        <section style={{ background: "var(--surface-alt)", padding: `52px ${PAD}px` }}>
          <Fig tone="espresso" ratio="4/3" label="The maker's hand" style={{ marginBottom: 24 }} />
          <SectionHead eyebrow="The Atelier" title="Made slowly, by hand, to last." intro="Every piece begins in the hands of an artisan — turned, joined and finished the way furniture was always meant to be made." />
          <div style={{ marginTop: 20 }}><Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />}>Inside the Atelier</Button></div>
        </section>

        {/* new arrivals rail */}
        <section style={{ padding: `52px 0` }}>
          <div style={{ padding: `0 ${PAD}px`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <SectionHead eyebrow="Just Arrived" title="New this season" />
          </div>
          <div style={{ ...railStyle, marginTop: 26 }}>
            {arrivals.map((p) => (
              <div key={p.name} style={{ flex: "0 0 220px", scrollSnapAlign: "start" }}>
                <ProductCard category={p.category} name={p.name} price={p.price} badge={p.badge ? <Badge variant="on-image">{p.badge}</Badge> : null} favorite={false} onClick={(e) => { e.preventDefault(); onNavigate("product", p.name); }}>
                  <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                </ProductCard>
              </div>
            ))}
          </div>
        </section>

        {/* shop by room — stacked */}
        <section style={{ background: "var(--surface-alt)", padding: `52px 0` }}>
          <div style={{ padding: `0 ${PAD}px` }}><SectionHead center eyebrow="Shop by Room" title="Begin with the space." /></div>
          <div style={{ display: "grid", gap: 2, marginTop: 28 }}>
            {rooms.map((r) => (
              <CollectionTile key={r.t} title={r.t} tone={r.l || "dark"} cta="Shop the room" onClick={(e) => { e.preventDefault(); onNavigate("collection", r.t); }} style={{ minHeight: 220, borderRadius: 0 }}>
                <window.AAFigure tone={r.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
              </CollectionTile>
            ))}
          </div>
        </section>

        {/* trade band */}
        <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: `56px ${PAD}px` }}>
          <SectionHead light eyebrow="Trade & Design" title="For designers & architects." intro="Trade pricing, customization, sampling and project procurement — for residential and hospitality projects." />
          <div style={{ marginTop: 26 }}><Button variant="accent" fullWidth onClick={() => onNavigate("trade")}>Request Trade Access</Button></div>
        </section>

        {/* journal */}
        <section style={{ padding: `52px ${PAD}px` }}>
          <SectionHead eyebrow="The Journal" title="Design notes & stories" />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", color: "inherit", display: "block", marginTop: 24 }}>
            <Fig tone="stone" ratio="3/2" />
            <div style={{ marginTop: 14, fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)" }}>Styling · 6 min</div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 22, lineHeight: 1.2, margin: "10px 0 0" }}>How to layer a living room like a designer</h3>
          </a>
        </section>

        {/* statement */}
        <section style={{ padding: `60px ${PAD}px`, textAlign: "center" }}>
          <Eyebrow tone="accent" center rule>Art Avenue</Eyebrow>
          <p style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 28, lineHeight: 1.2, letterSpacing: "var(--tracking-tight)", margin: "20px 0 0", textWrap: "balance" }}>We are not a furniture store. We are a design house — curating the made-by-hand, so your home can hold its stories.</p>
        </section>

        <MobileFooter onNavigate={onNavigate} />
      </div>
    );
  }

  /* ============ COLLECTION ============ */
  /* horizontal facet chip rail */
  function FacetRail({ label, options }) {
    return (
      <div style={{ marginTop: 22 }}>
        <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 12 }}>{label}</div>
        <div style={{ ...railStyle, gap: 10 }}>
          {options.map((o) => (
            <button key={o} style={{ flex: "none", padding: "9px 16px", borderRadius: 99, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 13, background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-strong)", whiteSpace: "nowrap" }}>{o}</button>
          ))}
        </div>
      </div>
    );
  }
  /* shop-by-room image tile rail */
  function ShopByRoomRail({ onNavigate }) {
    const rooms = [{ t: "Living Room", tone: "clay" }, { t: "Dining", tone: "espresso" }, { t: "Bedroom", tone: "stone", l: "light" }, { t: "Study", tone: "olive" }, { t: "Outdoor", tone: "bronze" }];
    return (
      <div style={{ marginTop: 22 }}>
        <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 12 }}>Shop by Room</div>
        <div style={railStyle}>
          {rooms.map((r) => (
            <div key={r.t} style={{ flex: "0 0 150px", scrollSnapAlign: "start" }}>
              <CollectionTile title={r.t} tone={r.l || "dark"} cta="" onClick={(e) => { e.preventDefault(); onNavigate("collection", r.t); }} style={{ minHeight: 180, borderRadius: "var(--radius-xs)" }}>
                <window.AAFigure tone={r.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
              </CollectionTile>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Collection({ onNavigate, title, onFilter, onGuide }) {
    const products = [
      { category: "Seating", name: "Marwar Lounge Chair", price: "₹ 1,48,000", tone: "clay", badge: "Handcrafted" },
      { category: "Seating", name: "Kashi Linen Sofa", price: "₹ 3,20,000", tone: "stone", badge: "Best Seller" },
      { category: "Tables", name: "Udai Coffee Table", price: "₹ 96,000", tone: "bronze", badge: "New" },
      { category: "Seating", name: "Pichola Cane Armchair", price: "₹ 84,000", tone: "olive" },
      { category: "Storage", name: "Jodha Sideboard", price: "₹ 2,60,000", tone: "espresso" },
      { category: "Tables", name: "Amer Dining Table", price: "₹ 4,10,000", tone: "stone" },
    ];
    const heading = title && title !== "true" ? title : "Furniture";
    const isRug = /rug/i.test(heading);
    const tabs = ["New Arrivals", "Best Sellers", "Designer Favourites", "Trending"];
    const [tab, setTab] = React.useState(0);
    return (
      <div>
        <section style={{ position: "relative", height: 300, display: "flex", alignItems: "center", textAlign: "center" }}>
          <Fig tone="espresso" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(34,31,27,.5), rgba(34,31,27,.32))" }} />
          <div style={{ position: "relative", padding: `0 ${PAD}px` }}>
            <Eyebrow tone="on-dark" center>{isRug ? "The Rug Atelier" : "Signature Collection"}</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "#fff", fontSize: 38, lineHeight: 1.04, margin: "12px 0 0" }}>{heading}</h1>
            {isRug && (
              <button onClick={onGuide} style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 18px", borderRadius: "var(--radius-sm)", cursor: "pointer", background: "rgba(250,246,239,.92)", border: "none", color: "var(--aa-charcoal)", fontSize: 11, fontWeight: 600, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>
                <i className="ph ph-ruler" /> Need Help Choosing a Rug Size?
              </button>
            )}
          </div>
        </section>

        {/* shop-by merchandising */}
        <section style={{ padding: `26px ${PAD}px 8px` }}>
          {isRug ? (
            <React.Fragment>
              <FacetRail label="Shop by Size" options={["3×5", "4×6", "5×8", "6×9", "8×10", "9×12", "Runner", "Round"]} />
              <ShopByRoomRail onNavigate={onNavigate} />
              <FacetRail label="Shop by Material" options={["Hand-Knotted Wool", "Flatweave", "Jute & Natural", "Cotton", "Silk Blend"]} />
              <FacetRail label="Shop by Colour" options={["Ivory & Sand", "Charcoal", "Terracotta", "Indigo", "Olive"]} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ShopByRoomRail onNavigate={onNavigate} />
              <FacetRail label="Shop by Style" options={["Contemporary", "Classic", "Cane & Rattan", "Hand-Carved", "Minimal"]} />
              <FacetRail label="Shop by Material" options={["Solid Teak", "Mango Wood", "Oak", "Marble & Stone", "Brass"]} />
            </React.Fragment>
          )}
        </section>

        {/* sticky filter/sort bar */}
        <div style={{ position: "sticky", top: 94, zIndex: 25, background: "var(--surface-page)", borderBottom: "1px solid var(--border-hairline)", borderTop: "1px solid var(--border-hairline)", marginTop: 24, display: "grid", gridTemplateColumns: isRug ? "1fr 1fr 1fr" : "1fr 1fr" }}>
          <button onClick={() => onFilter("filter")} style={barBtn}><i className="ph ph-sliders-horizontal" style={{ fontSize: 15 }} /> Filter</button>
          <button onClick={() => onFilter("sort")} style={{ ...barBtn, borderLeft: "1px solid var(--border-hairline)" }}><i className="ph ph-arrows-down-up" style={{ fontSize: 15 }} /> Sort</button>
          {isRug && <button onClick={onGuide} style={{ ...barBtn, borderLeft: "1px solid var(--border-hairline)" }}><i className="ph ph-ruler" style={{ fontSize: 15 }} /> Size</button>}
        </div>

        {/* edit tabs */}
        <div style={{ ...railStyle, gap: 22, padding: `16px ${PAD}px 0` }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ flex: "none", background: "none", border: "none", padding: "0 0 12px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 500, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: tab === i ? "var(--text-primary)" : "var(--text-muted)", borderBottom: "2px solid " + (tab === i ? "var(--accent)" : "transparent"), whiteSpace: "nowrap" }}>{t}</button>
          ))}
        </div>

        <div style={{ padding: `12px ${PAD}px 4px`, fontSize: 12.5, color: "var(--text-muted)" }}>136 pieces</div>
        <section style={{ padding: `8px ${PAD}px 48px` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {products.map((p) => (
              <ProductCard key={p.name} category={p.category} name={p.name} price={p.price} badge={p.badge ? <Badge variant="on-image">{p.badge}</Badge> : null} favorite={false} onClick={(e) => { e.preventDefault(); onNavigate("product", p.name); }}>
                <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
              </ProductCard>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}><Button variant="secondary">Load more</Button></div>
        </section>
        <MobileFooter onNavigate={onNavigate} />
      </div>
    );
  }
  const barBtn = { height: 52, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-primary)" };

  /* ============ RUG SIZE GUIDE (bottom sheet) ============ */
  function RugGuideSheet({ open, onClose }) {
    const rooms = [
      { h: "Living Room", t: "Front legs of the sofa & chairs rest on the rug; leave 20–25 cm of floor around the edges.", z: "8×10 ft / 9×12 ft" },
      { h: "Dining Room", t: "Extend ~60 cm beyond the table so chairs stay on the rug when pulled out.", z: "8×10 ft (6-seat) · 9×12 ft (8-seat)" },
      { h: "Bedroom", t: "Two-thirds under the bed with a soft border to step onto, or runners either side.", z: "8×10 ft (queen) · 9×12 ft (king)" },
      { h: "Runners & Hallways", t: "Leave 10–15 cm of floor on each side; a runner ~50 cm narrower than the corridor.", z: "2.5×8 ft / 2.5×10 ft" },
    ];
    return (
      <React.Fragment>
        <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(34,31,27,.46)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur-base)", zIndex: 44 }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, maxHeight: "86%", background: "var(--surface-page)", borderRadius: "16px 16px 0 0", transform: open ? "translateY(0)" : "translateY(101%)", transition: "transform var(--dur-slow) var(--ease-luxe)", zIndex: 45, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "12px 0 4px", display: "flex", justifyContent: "center" }}><span style={{ width: 40, height: 4, borderRadius: 99, background: "var(--border-strong)" }} /></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: `8px ${PAD}px`, borderBottom: "1px solid var(--border-hairline)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 22 }}>Rug Size Guide</span>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }}><i className="ph-light ph-x" style={{ fontSize: 22 }} /></button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: `8px ${PAD}px 20px` }}>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-secondary)", margin: "8px 0 4px" }}>The most common mistake is going too small. A rug should sit under the main furniture and anchor the arrangement — not float in the middle of the room.</p>
            {rooms.map((r) => (
              <div key={r.h} style={{ borderTop: "1px solid var(--border-hairline)", padding: "15px 0" }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 18, margin: "0 0 6px" }}>{r.h}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>{r.t}</p>
                <span style={{ display: "inline-block", marginTop: 6, fontSize: 12, fontWeight: 600, letterSpacing: ".04em", color: "var(--text-accent)" }}>Recommended · {r.z}</span>
              </div>
            ))}
            <div style={{ background: "var(--surface-accent-tint)", borderRadius: "var(--radius-xs)", padding: "15px 16px", marginTop: 16 }}>
              <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 8 }}>Cotton vs Chenille</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}><strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Cotton</strong> — crisp, breathable, easy-care; best for low-traffic &amp; layering. <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Super-Soft Chenille</strong> — plush, denser, more durable; best for living rooms &amp; bedrooms.</p>
            </div>
          </div>
          <div style={{ padding: `14px ${PAD}px 30px`, borderTop: "1px solid var(--border-hairline)" }}><Button variant="primary" fullWidth onClick={onClose}>Shop Rugs by Size</Button></div>
        </div>
      </React.Fragment>
    );
  }

  /* ============ PRODUCT ============ */
  const MWA = "919828060095";
  const mWa = (msg) => "https://wa.me/" + MWA + "?text=" + encodeURIComponent(msg);
  const fmtINR = (n) => "₹ " + n.toLocaleString("en-IN");
  const mLabel = { fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 11 };
  const mPill = (on) => ({ padding: "10px 16px", borderRadius: "var(--radius-sm)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 13, background: on ? "var(--surface-accent-tint)" : "transparent", color: on ? "var(--text-accent)" : "var(--text-secondary)", border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)") });
  const mQuick = { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "12px 6px", background: "none", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", cursor: "pointer", fontSize: 10.5, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-secondary)" };
  const skuOf = (pname, suf) => "AA-" + pname.split(" ").map((w) => w[0]).join("").toUpperCase() + "-" + suf;
  const M_STATUS = {
    "in-stock": { label: "In Stock", icon: "ph-package" },
    "available-to-order": { label: "Available to Order", icon: "ph-hammer" },
    "made-to-order": { label: "Made to Order", icon: "ph-hammer" },
    customizable: { label: "Customizable", icon: "ph-pencil-ruler" },
    consultation: { label: "Consultation Recommended", icon: "ph-chat-teardrop-dots" },
  };
  const MFYS = {
    furniture: ["Custom dimensions for your room", "Bespoke finishes & wood tones", "Your own upholstery (COM) welcomed"],
    rug: ["Custom sizes on selected designs", "Bespoke colourways & constructions", "Round, runner & oversized formats"],
    cushion: ["Custom sizes & fill options", "Bespoke fabrics, leathers & techniques", "Coordinated sets & trade quantities"],
  };

  /* Why-you'll-love-it, per category */
  const WHY_M = {
    furniture: { title: "A piece made to be lived with.", points: [["Handcrafted by skilled artisans", "Carved, joined and finished by hand — never mass-produced."], ["Carefully selected materials", "Kiln-dried hardwoods and natural textiles, chosen to last."], ["Designed to age beautifully", "Oil-rubbed finishes gain character with the years."], ["Made for everyday living", "Generous proportions drawn for real homes, not showrooms."], ["Naturally one of a kind", "Grain and tone vary gently from piece to piece."]] },
    rug: { title: "A foundation, knotted by hand.", points: [["Hand-knotted by master weavers", "Tied knot by knot over four to six months."], ["Naturally dyed, naturally varied", "Gentle abrash is the signature of true hand craft."], ["Built to be passed down", "Dense wool made to soften over years, never wear thin."], ["Grounds and warms a room", "A quiet anchor that draws the arrangement together."], ["Singular by nature", "No two rugs are ever knotted exactly alike."]] },
    cushion: { title: "Quiet character, made by hand.", points: [["Made by skilled hands", "Printed, woven, tufted or embroidered by textile artisans."], ["Natural, considered fabrics", "Cotton, linen, wool, velvet and leather, chosen for the hand."], ["Layered for a collected look", "Mix techniques and sizes for a gathered-over-time feel."], ["Made to be refreshed", "Removable covers and concealed zips make a change simple."], ["Quietly unique", "Small variations are the signature of genuine handwork."]] },
  };

  /* Cushion technique profiles — fully data-driven, no block-print assumption */
  const M_CUSH = {
    block: { technique: "Hand Block-Printed", badge: "Hand Block-Printed", face: "Hand block-printed cotton", reverse: "natural linen reverse", construction: "Concealed zip · piped edges", insertDesc: "feather-and-down insert", origin: "Block-printed by hand in Sanganer, Rajasthan, with hand-carved blocks and natural dyes.", craft: "Printed by hand, block by block, in small batches — slight irregularities are the signature of the craft.", care: "Remove the insert; gentle cold hand-wash or dry-clean the cover. Reshape damp, air-dry.", intro: "A hand-block-printed cotton cushion with a natural linen reverse.", sample: "Fabric" },
    woven: { technique: "Handwoven", badge: "Handwoven", face: "Yarn-dyed handwoven cotton & wool", reverse: "cotton reverse", construction: "Concealed zip · turned edges", insertDesc: "feather-and-down insert", origin: "Woven on traditional pit looms in Panipat and Bhuj.", craft: "Yarn is dyed before weaving, so the pattern runs through the cloth.", care: "Dry-clean to preserve the weave; spot-clean spills with a damp cloth.", intro: "A yarn-dyed handwoven cushion — pattern woven through the cloth.", sample: "Fabric" },
    tufted: { technique: "Hand-Tufted", badge: "Hand-Tufted", face: "Hand-tufted wool pile", reverse: "cotton canvas reverse", construction: "Concealed zip · bound edges", insertDesc: "feather-and-down insert", origin: "Tufted by hand and sheared in Bhadohi.", craft: "Wool punched through a backing and sheared to a plush, sculptural pile.", care: "Vacuum gently; blot spills, never rub.", intro: "A plush hand-tufted wool cushion with a sculptural face.", sample: "Fabric" },
    embroidered: { technique: "Hand-Embroidered", badge: "Hand-Embroidered", face: "Hand-embroidered cotton & silk", reverse: "cotton reverse", construction: "Concealed zip · piped edges", insertDesc: "feather-and-down insert", origin: "Embroidered by hand in Kutch and Lucknow.", craft: "Each motif stitched by hand over many hours.", care: "Dry-clean only; store flat, away from snags.", intro: "A hand-embroidered cushion — each motif stitched by hand.", sample: "Fabric" },
    leather: { technique: "Full-Grain Leather", badge: "Full-Grain Leather", face: "Full-grain vegetable-tanned leather", reverse: "suede reverse", construction: "Hidden zip · saddle-stitched edges", insertDesc: "fibre-and-down insert", origin: "Cut and saddle-stitched by leather artisans in India.", craft: "Cut from full-grain hides and stitched by hand; natural marks are intrinsic.", care: "Wipe with a dry cloth; condition twice yearly. Keep from direct heat.", intro: "A full-grain leather cushion, saddle-stitched and made to patina.", sample: "Leather" },
    velvet: { technique: "Cotton Velvet", badge: "Cotton Velvet", face: "Cotton-velvet", reverse: "natural linen reverse", construction: "Concealed zip · piped edges", insertDesc: "feather-and-down insert", origin: "Cut and finished by hand in our workshops.", craft: "A dense pile catches light differently as it shifts.", care: "Dry-clean to preserve the pile; brush gently in one direction.", intro: "A deep cotton-velvet cushion with a natural linen reverse.", sample: "Fabric" },
    linen: { technique: "Pure Linen", badge: "Pure Linen", face: "Washed pure linen", reverse: "linen reverse", construction: "Concealed zip · turned edges", insertDesc: "feather-and-down insert", origin: "Cut and sewn by hand in India.", craft: "A washed-linen face with the soft slub that defines the cloth.", care: "Cold gentle machine-wash or dry-clean; a relaxed finish suits it.", intro: "A washed pure-linen cushion — soft and relaxed.", sample: "Fabric" },
    cotton: { technique: "Pure Cotton", badge: "Pure Cotton", face: "Woven cotton", reverse: "cotton reverse", construction: "Concealed zip · turned edges", insertDesc: "feather-and-down insert", origin: "Cut and sewn by hand in India.", craft: "A breathable woven-cotton face, easy to live with every day.", care: "Cold gentle machine-wash or dry-clean.", intro: "A pure-cotton cushion — breathable and easy.", sample: "Fabric" },
    wool: { technique: "Handcrafted Wool", badge: "Handcrafted Wool", face: "Woven wool", reverse: "cotton reverse", construction: "Concealed zip · turned edges", insertDesc: "feather-and-down insert", origin: "Woven and finished by hand in India.", craft: "Natural wool, with the warmth and gentle variation of the fibre.", care: "Dry-clean recommended; air regularly, store with cedar.", intro: "A natural woven-wool cushion — warm and substantial.", sample: "Fabric" },
    mixed: { technique: "Mixed Techniques", badge: "Mixed Techniques", face: "Mixed-material face", reverse: "natural reverse", construction: "Concealed zip · finished edges", insertDesc: "premium insert", origin: "Crafted by hand combining techniques across India.", craft: "Combines more than one craft — a weave with embroidery, say — on a single cover.", care: "Care depends on the materials — see details or ask a consultant.", intro: "A mixed-technique cushion that brings more than one craft together.", sample: "Fabric" },
    generic: { technique: "Handcrafted", badge: "Made by Hand", face: "Natural-fibre face", reverse: "natural reverse", construction: "Concealed zip · finished edges", insertDesc: "premium insert", origin: "Crafted by hand by artisans across India.", craft: "Made in small batches in the technique chosen for this design.", care: "Care depends on the material — see details or ask a consultant.", intro: "A handcrafted cushion, made in small batches by skilled artisans.", sample: "Fabric" },
  };
  function mCushKey(n) {
    if (/mixed/.test(n)) return "mixed";
    if (/leather/.test(n)) return "leather";
    if (/velvet/.test(n)) return "velvet";
    if (/embroider|kantha|aari|chikan|zardozi/.test(n)) return "embroidered";
    if (/tuft/.test(n)) return "tufted";
    if (/woven|weave|dhurrie|kilim|ikat|jacquard/.test(n)) return "woven";
    if (/block|print|sanganer|bagru|dabu/.test(n)) return "block";
    if (/wool/.test(n)) return "wool";
    if (/linen/.test(n)) return "linen";
    if (/cotton/.test(n)) return "cotton";
    return "generic";
  }

  /* Shared product meta — one source of truth for screen + sticky bar */
  function mProductMeta(name) {
    const pname = name && name !== "true" ? name : "Marwar Lounge Chair";
    const n = pname.toLowerCase();
    let kind = "furniture";
    if (/rug|dhurrie|kilim|carpet/.test(n)) kind = "rug";
    else if (/cushion|pillow|bolster|sham/.test(n)) kind = "cushion";

    if (kind === "rug") {
      return {
        kind, pname, sku: skuOf(pname, "RG"), eyebrow: "Rugs · Hand-Knotted", badge: "Hand-Knotted in India",
        blurb: "A hand-knotted wool rug in naturally dyed earth tones — a quiet, durable foundation knotted over months on the loom.",
        galleryTones: ["olive", "stone", "bronze", "clay"], price: 220000,
        sizeOpts: [{ k: "5x8", l: "5 × 8 ft", base: 140000 }, { k: "6x9", l: "6 × 9 ft", base: 186000 }, { k: "8x10", l: "8 × 10 ft", base: 220000 }, { k: "9x12", l: "9 × 12 ft", base: 280000 }, { k: "round", l: "Round 8 ft", base: 176000 }, { k: "runner", l: "Runner 2.5 × 8", base: 64000 }],
        why: WHY_M.rug, states: ["available-to-order", "customizable", "consultation"],
        trust: [{ t: "Hand-knotted in India · made to order" }, { t: "Custom sizing on select designs" }, { t: "Secure, insured delivery across India" }, { t: "International shipping available" }],
        samples: [{ k: "material", l: "Material", i: "ph-swatches" }],
        sections: [
          { h: "Construction", body: "Hand-knotted · Persian asymmetric knot · 100–120 knots/in² · 12 mm medium-low pile. The most enduring rug construction." },
          { h: "Material", body: "Hand-spun highland wool pile on a mercerised cotton foundation. Naturally dyed, with gentle abrash — the subtle colour shift that marks true hand craft." },
          { h: "Origin & craftsmanship", body: "Knotted by hand in Bhadohi, Uttar Pradesh, over four to six months — spun, dyed, knotted, sheared and bound entirely by hand." },
          { h: "Care", body: "Low-pile vacuum without a beater bar; rotate twice yearly; professional clean every 2–3 years. Blot spills, never rub." },
          { h: "Delivery & shipping", body: "Made to order, ships in 4–6 months via safe, insured delivery. International freight quoted at checkout." },
        ],
        pairs: [{ category: "Furniture", name: "Marwar Lounge Chair", price: "₹ 1,48,000", tone: "clay" }, { category: "Cushions", name: "Sanganeri Block-Print Cushion", price: "₹ 5,200", tone: "stone" }, { category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", tone: "bronze" }],
      };
    }
    if (kind === "cushion") {
      const p = M_CUSH[mCushKey(n)];
      return {
        kind, pname, sku: skuOf(pname, "CU"), eyebrow: "Cushions · " + p.technique, badge: p.badge,
        blurb: p.intro, galleryTones: ["clay", "stone", "bronze"], price: 5200, insertPrice: 1400, cushion: p,
        sizeOpts: [{ k: "16", l: "16 × 16 in", base: 3200 }, { k: "18", l: "18 × 18 in", base: 3800 }, { k: "20", l: "20 × 20 in", base: 4400 }, { k: "24", l: "24 × 24 in", base: 5600 }],
        why: WHY_M.cushion, states: ["available-to-order", "customizable"],
        trust: [{ t: p.technique + " in India" }, { t: "Cover only or cover + insert" }, { t: "Made to order in small batches" }, { t: "International shipping available" }],
        samples: [{ k: p.sample.toLowerCase(), l: p.sample, i: "ph-scissors" }],
        sections: [
          { h: "What's included", body: "Choose Cover Only (no insert) or Cover + Insert (a " + p.insertDesc + ", ready to use). Inserts are ethically sourced with a cotton cambric casing." },
          { h: "Technique & craft", body: p.craft },
          { h: "Material & construction", body: p.face + " face with a " + p.reverse + ". " + p.construction + "." },
          { h: "Origin", body: p.origin },
          { h: "Care", body: p.care },
          { h: "Delivery & shipping", body: "In-stock covers ship in 3–5 days; made-to-order pieces in 1–2 weeks. International freight quoted at checkout." },
        ],
        pairs: [{ category: "Seating", name: "Kashi Linen Sofa", price: "₹ 3,20,000", tone: "clay" }, { category: "Rugs", name: "Aravalli Hand-Knotted Rug", price: "₹ 2,20,000", tone: "olive" }, { category: "Textiles", name: "Handwoven Wool Throw", price: "₹ 8,400", tone: "stone" }],
      };
    }
    return {
      kind, pname, sku: skuOf(pname, "01"), eyebrow: "Seating · Lounge", badge: "Handcrafted in India",
      blurb: "A low, generous lounge chair in solid teak and Belgian linen — drawn from the courtyards of Rajasthan.",
      galleryTones: ["clay", "espresso", "bronze", "stone"], price: 148000,
      sizeOpts: [{ k: "std", l: "Standard" }, { k: "grand", l: "Grand" }],
      matOpts: [{ k: "teak", l: "Solid Teak" }, { k: "mango", l: "Mango Wood" }, { k: "oak", l: "Oak Veneer" }],
      why: WHY_M.furniture, states: ["available-to-order", "customizable", "consultation"],
      trust: [{ t: "Handcrafted in India · made to order" }, { t: "Customization — finishes, sizing & COM" }, { t: "Secure, insured delivery across India" }, { t: "International shipping available" }],
      samples: [{ k: "fabric", l: "Fabric", i: "ph-scissors" }, { k: "finish", l: "Finish", i: "ph-paint-roller" }, { k: "material", l: "Material", i: "ph-swatches" }],
      sections: [
        { h: "Materials", body: "Frame in kiln-dried solid teak with a hand-rubbed oil finish. Seat in 100% Belgian linen over a hand-tied suspension." },
        { h: "Craftsmanship", body: "Carved, joined and finished by hand in our Jodhpur workshop — four craftspeople, roughly three weeks per chair." },
        { h: "Dimensions", body: "W 74 × D 82 × H 78 cm · Seat height 42 cm · 14 kg. Custom sizing via Trade." },
        { h: "Assembly & Installation", body: "Most pieces arrive ready to use; larger items may need simple assembly. Installation help may be available by product and location — ask a consultant before ordering." },
        { h: "Delivery & Shipping", body: "Made to order, ships in 3–4 weeks via safe, insured delivery. Assembly assistance available on select pieces. International freight quoted at checkout." },
      ],
      pairs: [{ category: "Lighting", name: "Brass Meridian Pendant", price: "₹ 64,000", tone: "bronze" }, { category: "Rugs", name: "Aravalli Knotted Rug", price: "₹ 2,20,000", tone: "olive" }, { category: "Decor", name: "Stone Vessel", price: "₹ 12,000", tone: "clay" }],
    };
  }

  function Product({ onNavigate, name, onGuide }) {
    const meta = mProductMeta(name);
    const { kind, pname, sku, eyebrow, blurb, badge } = meta;
    const why = meta.why;
    const sections = meta.sections;
    const pairs = meta.pairs;
    const [slide, setSlide] = React.useState(0);
    const [acc, setAcc] = React.useState(0);
    const [finish, setFinish] = React.useState("natural");
    const [size, setSize] = React.useState((meta.sizeOpts.find((s) => s.k === (kind === "rug" ? "8x10" : kind === "cushion" ? "18" : "std")) || meta.sizeOpts[0]).k);
    const [mat, setMat] = React.useState("teak");
    const [uph, setUph] = React.useState("linen");
    const [fill, setFill] = React.useState("insert");
    const gallery = meta.galleryTones.map((tone) => ({ tone }));
    const swatchColors = { natural: "#b9966a", walnut: "#6a4a2e", dark: "#4a3422", black: "#2c2824" };
    const upholColors = { linen: "#d8cdb6", perf: "#b7b09c", leather: "#8a5a3c" };
    const selSize = meta.sizeOpts.find((s) => s.k === size) || meta.sizeOpts[0];
    let price = meta.price;
    if (kind === "rug" && selSize) price = selSize.base;
    if (kind === "cushion" && selSize) price = selSize.base + (fill === "insert" ? meta.insertPrice : 0);
    const priceNote = kind === "cushion" ? (fill === "insert" ? "Cover + insert" : "Cover only") : kind === "rug" ? "Hand-knotted · available to order" : "Available to order · crafted for your home";
    const deliveryIdx = Math.max(0, sections.findIndex((s) => /Delivery/.test(s.h)));
    const sizeIdx = Math.max(0, sections.findIndex((s) => /Dimensions|Construction|included/i.test(s.h)));
    return (
      <div style={{ paddingBottom: 92 }}>
        {/* gallery swipe */}
        <div style={{ position: "relative" }}>
          <div onScroll={(e) => setSlide(Math.round(e.target.scrollLeft / e.target.clientWidth))} style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>
            {gallery.map((g, i) => (
              <div key={i} style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}>
                <Fig tone={g.tone} ratio="1/1" />
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", top: 56, left: PAD }}><Badge variant="on-image">{badge}</Badge></div>
          <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 7 }}>
            {gallery.map((_, i) => (<span key={i} style={{ width: i === slide ? 18 : 6, height: 6, borderRadius: 99, background: i === slide ? "var(--accent)" : "rgba(250,246,239,.7)", transition: "width var(--dur-base)" }} />))}
          </div>
        </div>

        <section style={{ padding: `26px ${PAD}px 0` }}>
          <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>{eyebrow}</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 34, lineHeight: 1.08, letterSpacing: "var(--tracking-tight)", margin: "10px 0 0" }}>{pname}</h1>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 12 }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 24 }}>{fmtINR(price)}</span>
            <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{priceNote}</span>
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--text-secondary)", marginTop: 16 }}>{blurb}</p>
          {/* product states */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 16 }}>
            {meta.states.map((k) => { const s = M_STATUS[k]; return (
              <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 11px", borderRadius: "var(--radius-pill)", border: "1px solid var(--accent-soft)", background: "var(--surface-accent-tint)", fontSize: 11.5, color: "var(--text-accent)" }}>
                <i className={"ph " + s.icon} style={{ fontSize: 12, color: "var(--accent-deep)" }} />{s.label}
              </span>
            ); })}
          </div>
          {/* trust — directly beneath price */}
          <ul style={{ listStyle: "none", margin: "16px 0 0", padding: "16px 0 0", borderTop: "1px solid var(--border-hairline)", display: "grid", gap: 10 }}>
            {meta.trust.map((r) => (
              <li key={r.t} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 13.5, lineHeight: 1.4, color: "var(--text-secondary)" }}>
                <i className="ph ph-check" style={{ fontSize: 13, color: "var(--accent-deep)", marginTop: 3, flex: "none" }} />{r.t}
              </li>
            ))}
          </ul>

          {/* SIZE — all kinds */}
          <div style={{ marginTop: 22 }}>
            <div style={mLabel}>Size</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {meta.sizeOpts.map((s) => (
                <button key={s.k} onClick={() => setSize(s.k)} style={mPill(size === s.k)}>{s.l}{s.base ? <span style={{ marginLeft: 8, color: size === s.k ? "var(--text-accent)" : "var(--text-muted)" }}>{fmtINR(kind === "cushion" ? s.base + (fill === "insert" ? meta.insertPrice : 0) : s.base)}</span> : null}</button>
              ))}
            </div>
          </div>

          {kind === "rug" && (
            <div style={{ marginTop: 16, background: "var(--surface-accent-tint)", borderRadius: "var(--radius-sm)", padding: "16px 18px" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--text-primary)" }}>Need a different size?</div>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--text-secondary)", margin: "6px 0 12px" }}>Many rugs can be made in additional or custom sizes depending on design and construction.</p>
              <a href={mWa("Hello Art Avenue, I'd like a custom size for the " + pname + " (SKU " + sku + "). My room is approximately ____ ft × ____ ft.")} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                <Button variant="secondary" fullWidth iconLeft={<i className="ph ph-chat-teardrop-dots" style={{ color: "var(--accent-deep)" }} />}>Speak with a Design Consultant</Button>
              </a>
            </div>
          )}

          {kind === "cushion" && (
            <div style={{ marginTop: 22 }}>
              <div style={mLabel}>What you're buying</div>
              <div style={{ display: "grid", gap: 10 }}>
                {[{ k: "cover", h: "Cover Only", d: "Just the cover — use your own insert.", add: 0 }, { k: "insert", h: "Cover + Insert", d: "Cover with a " + meta.cushion.insertDesc + " — ready to use.", add: meta.insertPrice }].map((o) => {
                  const on = fill === o.k, sBase = meta.sizeOpts.find((s) => s.k === size).base;
                  return (
                    <button key={o.k} onClick={() => setFill(o.k)} style={{ textAlign: "left", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: "var(--radius-sm)", cursor: "pointer", background: on ? "var(--surface-accent-tint)" : "transparent", border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)") }}>
                      <span style={{ width: 17, height: 17, borderRadius: "50%", flex: "none", border: "1.5px solid " + (on ? "var(--accent)" : "var(--border-strong)"), background: on ? "radial-gradient(circle, var(--accent) 0 5px, transparent 6px)" : "transparent" }} />
                      <span style={{ flex: 1 }}>
                        <span style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                          <span style={{ fontFamily: "var(--font-serif)", fontSize: 17 }}>{o.h}</span>
                          <span style={{ fontFamily: "var(--font-serif)", fontSize: 15, color: on ? "var(--text-accent)" : "var(--text-secondary)" }}>{fmtINR(sBase + o.add)}</span>
                        </span>
                        <span style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginTop: 2 }}>{o.d}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {kind === "furniture" && (
            <React.Fragment>
              <div style={{ marginTop: 22 }}>
                <div style={mLabel}>Material</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {meta.matOpts.map((m) => (<button key={m.k} onClick={() => setMat(m.k)} style={mPill(mat === m.k)}>{m.l}</button>))}
                </div>
              </div>
              <div style={{ marginTop: 22 }}>
                <div style={{ ...mLabel, marginBottom: 0 }}>Wood finish</div>
                <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
                  {Object.keys(swatchColors).map((t) => (<button key={t} onClick={() => setFinish(t)} title={t} style={{ width: 40, height: 40, borderRadius: "50%", background: swatchColors[t], border: "1px solid var(--border-hairline)", outline: finish === t ? "1.5px solid var(--accent)" : "1.5px solid transparent", outlineOffset: 3, cursor: "pointer" }} />))}
                </div>
              </div>
              <div style={{ marginTop: 22 }}>
                <div style={{ ...mLabel, marginBottom: 0 }}>Upholstery</div>
                <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
                  {Object.keys(upholColors).map((t) => (<button key={t} onClick={() => setUph(t)} title={t} style={{ width: 40, height: 40, borderRadius: "50%", background: upholColors[t], border: "1px solid var(--border-hairline)", outline: uph === t ? "1.5px solid var(--accent)" : "1.5px solid transparent", outlineOffset: 3, cursor: "pointer" }} />))}
                </div>
              </div>
              <a href={mWa("Hello Art Avenue, I'd like a custom size or finish for the " + pname + " (SKU " + sku + ").")} target="_blank" rel="noopener" style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-accent)", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", textDecoration: "none" }}>
                Need a Custom Size or Finish? <i className="ph ph-arrow-right" />
              </a>
            </React.Fragment>
          )}

          {/* sample requests */}
          <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--border-hairline)" }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 4 }}>Request a sample</div>
            <div style={{ fontSize: 12.5, color: "var(--text-secondary)", marginBottom: 12 }}>From <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>₹999</strong> · ₹999–₹2,999 by material</div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${meta.samples.length}, 1fr)`, gap: 10 }}>
              {meta.samples.map((s) => (
                <a key={s.k} href={mWa("Hello Art Avenue, I'd like to request a " + s.k + " sample for the " + pname + " (SKU " + sku + "). I understand a sample fee of ₹999–₹2,999 applies depending on the material.")} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 7, padding: "14px 6px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", color: "var(--text-secondary)" }}>
                  <i className={"ph-light " + s.i} style={{ fontSize: 20, color: "var(--accent-deep)" }} />
                  <span style={{ fontSize: 10.5, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>{s.l}</span>
                </a>
              ))}
            </div>
          </div>

          {/* consultant + quick access */}
          <div style={{ marginTop: 22 }}>
            <a href={mWa("Hello Art Avenue, I'd like to speak with a design consultant about the " + pname + " (SKU " + sku + ").")} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "block" }}>
              <Button variant="secondary" fullWidth iconLeft={<i className="ph ph-chat-teardrop-dots" style={{ color: "var(--accent-deep)" }} />}>Speak with a Design Consultant</Button>
            </a>
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              <button onClick={() => (kind === "rug" && onGuide) ? onGuide() : setAcc(sizeIdx)} style={mQuick}><i className="ph ph-ruler" /> {kind === "furniture" ? "Dimensions" : "Size Guide"}</button>
              <button onClick={() => setAcc(deliveryIdx)} style={mQuick}><i className="ph ph-truck" /> Delivery</button>
            </div>
          </div>

          {/* trust */}

          {/* accordion */}
          <div style={{ marginTop: 24, borderTop: "1px solid var(--border-hairline)" }}>
            {sections.map((s, i) => (
              <div key={s.h} style={{ borderBottom: "1px solid var(--border-hairline)" }}>
                <button onClick={() => setAcc(acc === i ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: "18px 0", cursor: "pointer" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500 }}>{s.h}</span>
                  <i className={"ph ph-" + (acc === i ? "minus" : "plus")} style={{ fontSize: 13, color: "var(--text-muted)" }} />
                </button>
                {acc === i && <div style={{ paddingBottom: 18, fontSize: 14.5, lineHeight: 1.65, color: "var(--text-secondary)" }}>{s.body}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* why you'll love it */}
        <section style={{ background: "var(--surface-page)", borderTop: "1px solid var(--border-hairline)", padding: `48px 0`, marginTop: 40 }}>
          <div style={{ padding: `0 ${PAD}px` }}>
            <SectionHead eyebrow="Why You'll Love It" title={why.title} />
            <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0 }}>
              {why.points.map(([h, t], i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 14px", padding: "15px 0", borderTop: "1px solid var(--border-hairline)" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 15, color: "var(--text-accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.25 }}>{h}</div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--text-secondary)", marginTop: 3 }}>{t}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* made for your space */}
        <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: `48px ${PAD}px`, marginTop: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--accent-soft)" }}>Made For Your Space</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 28, lineHeight: 1.1, margin: "12px 0 0" }}>Most pieces can be made to suit.</h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-on-dark-muted)", margin: "12px 0 0" }}>Available in additional sizes, finishes and materials depending on the piece. Tell us about your room and a consultant will shape it with you.</p>
          <ul style={{ listStyle: "none", margin: "20px 0 24px", padding: 0, borderTop: "1px solid var(--border-on-dark)" }}>
            {(MFYS[kind] || MFYS.furniture).map((o) => (
              <li key={o} style={{ display: "flex", gap: 11, alignItems: "center", padding: "13px 0", borderBottom: "1px solid var(--border-on-dark)", fontSize: 14.5 }}>
                <i className="ph ph-plus" style={{ fontSize: 13, color: "var(--accent-soft)", flex: "none" }} />{o}
              </li>
            ))}
          </ul>
          <a href={mWa("Hello Art Avenue, I'd like to customize the " + pname + " (SKU " + sku + ").")} target="_blank" rel="noopener" style={{ textDecoration: "none", display: "block" }}>
            <Button variant="primary" fullWidth iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Speak with a Design Consultant</Button>
          </a>
        </section>

        {/* pair with */}
        <section style={{ background: "var(--surface-alt)", padding: `48px 0`, marginTop: 40 }}>
          <div style={{ padding: `0 ${PAD}px` }}><SectionHead eyebrow="Pair With" title="Complete the room" /></div>
          <div style={{ ...railStyle, marginTop: 24 }}>
            {pairs.map((p) => (
              <div key={p.name} style={{ flex: "0 0 200px", scrollSnapAlign: "start" }}>
                <ProductCard category={p.category} name={p.name} price={p.price} favorite={false} onClick={(e) => { e.preventDefault(); onNavigate("product", p.name); }}>
                  <window.AAFigure tone={p.tone} style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
                </ProductCard>
              </div>
            ))}
          </div>
        </section>
        <MobileFooter onNavigate={onNavigate} />
      </div>
    );
  }

  function ProductBottomBar({ onNavigate, name }) {
    const meta = mProductMeta(name);
    const consult = mWa("Hello Art Avenue, I'd like to speak with a design consultant about the " + meta.pname + " (SKU " + meta.sku + ").");
    const priceLabel = meta.kind === "furniture" ? fmtINR(meta.price) : "from " + fmtINR(meta.price);
    const note = meta.kind === "rug" ? "Hand-knotted · to order" : "Available to order";
    return (
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 35, background: "var(--surface-raised)", borderTop: "1px solid var(--border-hairline)", padding: `12px ${PAD}px 26px`, display: "flex", alignItems: "center", gap: 10, boxShadow: "0 -8px 24px -16px rgba(43,40,36,.4)" }}>
        <div style={{ lineHeight: 1.1, flex: "none" }}>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 19 }}>{priceLabel}</div>
          <div style={{ fontSize: 10.5, color: "var(--text-muted)" }}>{note}</div>
        </div>
        <a href={consult} target="_blank" rel="noopener" aria-label="Speak with a Design Consultant" style={{ flex: "none", width: 50, height: 50, border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: "var(--accent-deep)" }}>
          <i className="ph ph-chat-teardrop-dots" style={{ fontSize: 21 }} />
        </a>
        <div style={{ flex: 1 }}><Button variant="primary" fullWidth onClick={() => onNavigate && onNavigate("cart")}>Add to Cart</Button></div>
      </div>
    );
  }

  /* ============ CART ============ */
  function Cart({ onNavigate, items, setItems }) {
    const setQty = (id, d) => setItems(items.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty + d) } : it)));
    const remove = (id) => setItems(items.filter((it) => it.id !== id));
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

    if (items.length === 0) {
      return (
        <div style={{ padding: `80px ${PAD}px`, textAlign: "center" }}>
          <i className="ph-light ph-handbag-simple" style={{ fontSize: 40, color: "var(--text-faint)" }} />
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 30, margin: "18px 0 8px" }}>Your cart is empty</h1>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", marginBottom: 26 }}>Every piece is made by hand — begin with the collection.</p>
          <Button variant="primary" onClick={() => onNavigate("collection", "Furniture")}>Explore the Collection</Button>
        </div>
      );
    }

    return (
      <div style={{ paddingBottom: 96 }}>
        <section style={{ padding: `28px ${PAD}px 8px` }}>
          <Eyebrow tone="accent">Your Cart</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 32, margin: "12px 0 0" }}>{items.length} {items.length === 1 ? "piece" : "pieces"}</h1>
        </section>
        <section style={{ padding: `12px ${PAD}px` }}>
          {items.map((it) => (
            <div key={it.id} style={{ display: "flex", gap: 16, padding: "20px 0", borderBottom: "1px solid var(--border-hairline)" }}>
              <div style={{ width: 86, flex: "none" }}><Fig tone={it.tone} ratio="4/5" /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 19, lineHeight: 1.2, margin: 0 }}>{it.name}</h3>
                  <button onClick={() => remove(it.id)} aria-label="Remove" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-faint)", padding: 0 }}><i className="ph-light ph-x" style={{ fontSize: 17 }} /></button>
                </div>
                <div style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 5 }}>{it.finish}</div>
                <div style={{ fontSize: 11, color: "var(--accent-deep)", letterSpacing: ".04em", marginTop: 6, textTransform: "uppercase" }}>Made to order</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)" }}>
                    <button onClick={() => setQty(it.id, -1)} style={stepBtn}>\u2013</button>
                    <span style={{ width: 30, textAlign: "center", fontSize: 14 }}>{it.qty}</span>
                    <button onClick={() => setQty(it.id, 1)} style={stepBtn}>+</button>
                  </div>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: 18 }}>{fmt(it.price * it.qty)}</span>
                </div>
              </div>
            </div>
          ))}

          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "var(--surface-accent-tint)", padding: "16px 18px", borderRadius: "var(--radius-sm)", marginTop: 22 }}>
            <i className="ph-light ph-truck" style={{ fontSize: 22, color: "var(--accent-deep)", flex: "none" }} />
            <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Safe, insured delivery.</strong> Securely packed for transit; assembly assistance on select pieces.
            </div>
          </div>

          <button onClick={() => onNavigate("collection", "Furniture")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-accent)", fontSize: 13, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", marginTop: 24, display: "flex", alignItems: "center", gap: 8, padding: 0 }}>
            <i className="ph ph-arrow-left" /> Continue shopping
          </button>
        </section>
      </div>
    );
  }
  const stepBtn = { width: 34, height: 38, background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "var(--text-secondary)" };

  function CartBottomBar({ onNavigate, items }) {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    return (
      <div style={barWrap}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <span style={{ fontSize: 12.5, color: "var(--text-muted)", letterSpacing: ".03em" }}>Subtotal \u00b7 standard delivery included</span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 22 }}>{fmt(subtotal)}</span>
        </div>
        <Button variant="primary" fullWidth iconRight={<i className="ph ph-arrow-right" />} onClick={() => onNavigate("checkout")}>Checkout</Button>
      </div>
    );
  }
  const barWrap = { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 35, background: "var(--surface-raised)", borderTop: "1px solid var(--border-hairline)", padding: `14px ${PAD}px 28px`, boxShadow: "0 -8px 24px -16px rgba(43,40,36,.4)" };

  /* ============ CHECKOUT ============ */
  function Checkout({ onNavigate, items }) {
    const [open, setOpen] = React.useState(false);
    const [delivery, setDelivery] = React.useState("standard");
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const deliveries = [
      { id: "standard", h: "Standard Delivery", t: "Safe, insured, securely packed \u00b7 3\u20134 weeks", price: "Included" },
      { id: "assembly", h: "Assembly Assistance", t: "Select furniture, confirm with a consultant \u00b7 2\u20133 weeks", price: "On request" },
    ];
    return (
      <div style={{ paddingBottom: 100 }}>
        {/* order summary toggle */}
        <button onClick={() => setOpen((o) => !o)} style={{ width: "100%", background: "var(--surface-alt)", border: "none", borderBottom: "1px solid var(--border-hairline)", padding: `16px ${PAD}px`, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--text-secondary)" }}>
            <i className="ph ph-handbag-simple" /> Order summary <i className={"ph ph-caret-" + (open ? "up" : "down")} style={{ fontSize: 12 }} />
          </span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 18 }}>{fmt(subtotal)}</span>
        </button>
        {open && (
          <div style={{ background: "var(--surface-alt)", padding: `4px ${PAD}px 18px`, borderBottom: "1px solid var(--border-hairline)" }}>
            {items.map((it) => (
              <div key={it.id} style={{ display: "flex", gap: 12, padding: "10px 0", alignItems: "center" }}>
                <div style={{ width: 44, flex: "none" }}><Fig tone={it.tone} ratio="1/1" /></div>
                <div style={{ flex: 1, fontSize: 13.5 }}>{it.name} <span style={{ color: "var(--text-muted)" }}>\u00d7 {it.qty}</span></div>
                <span style={{ fontSize: 13.5 }}>{fmt(it.price * it.qty)}</span>
              </div>
            ))}
          </div>
        )}

        <section style={{ padding: `26px ${PAD}px`, display: "grid", gap: 22 }}>
          <div>
            <h2 style={ckH}>Contact</h2>
            <Input label="Email" type="email" placeholder="you@studio.com" />
          </div>
          <div>
            <h2 style={ckH}>Shipping address</h2>
            <div style={{ display: "grid", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Input label="First name" placeholder="Aisha" />
                <Input label="Last name" placeholder="Kohli" />
              </div>
              <Input label="Address" placeholder="Flat / house, street" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Input label="City" placeholder="Mumbai" />
                <Input label="Pincode" placeholder="400050" />
              </div>
              <Select label="Country" options={["India", "United Arab Emirates", "United Kingdom", "United States", "Singapore"]} />
            </div>
          </div>
          <div>
            <h2 style={ckH}>Delivery</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {deliveries.map((d) => (
                <button key={d.id} onClick={() => setDelivery(d.id)} style={{ textAlign: "left", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: "var(--radius-sm)", cursor: "pointer", background: "var(--surface-page)", border: "1px solid " + (delivery === d.id ? "var(--accent)" : "var(--border-strong)") }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", flex: "none", border: "1.5px solid " + (delivery === d.id ? "var(--accent)" : "var(--border-strong)"), background: delivery === d.id ? "radial-gradient(circle, var(--accent) 0 5px, transparent 6px)" : "transparent" }} />
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: 17 }}>{d.h}</span>
                    <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{d.t}</span>
                  </span>
                  <span style={{ fontSize: 13, color: d.price === "Included" ? "var(--accent-deep)" : "var(--text-secondary)" }}>{d.price}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 style={ckH}>Payment</h2>
            <div style={{ display: "grid", gap: 14 }}>
              <Input label="Card number" placeholder="1234 5678 9012 3456" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Input label="Expiry" placeholder="MM / YY" />
                <Input label="CVC" placeholder="123" />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--text-muted)" }}>
                <i className="ph ph-lock-simple" /> Encrypted &amp; secure \u00b7 we never store card details.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  const ckH = { fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 21, margin: "0 0 14px" };

  function CheckoutBottomBar({ onNavigate, items }) {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    return (
      <div style={barWrap}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>Total</span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 22 }}>{fmt(subtotal)}</span>
        </div>
        <Button variant="primary" fullWidth onClick={() => onNavigate("confirm")}>Place Order</Button>
      </div>
    );
  }

  /* ============ CONFIRMATION ============ */
  function Confirmation({ onNavigate }) {
    return (
      <div style={{ padding: `72px ${PAD}px`, textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
          <i className="ph-light ph-check" style={{ fontSize: 30, color: "var(--accent-deep)" }} />
        </div>
        <Eyebrow tone="accent" center>Order Confirmed</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 34, lineHeight: 1.12, margin: "16px 0 0" }}>Thank you — your pieces are<br /><em style={{ color: "var(--text-accent)" }}>being made by hand.</em></h1>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-secondary)", margin: "16px auto 0", maxWidth: 320 }}>
          Order <strong style={{ color: "var(--text-primary)" }}>#AA-20496</strong>. A confirmation and your delivery timeline are on the way to your inbox.
        </p>
        <div style={{ marginTop: 30, display: "grid", gap: 12, maxWidth: 280, margin: "30px auto 0" }}>
          <Button variant="primary" fullWidth onClick={() => onNavigate("home")}>Continue Shopping</Button>
          <Button variant="ghost" onClick={() => onNavigate("home")}>Track your order</Button>
        </div>
      </div>
    );
  }

  /* ============ FOOTER ============ */
  function MobileFooter({ onNavigate }) {
    return (
      <footer style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)" }}>
        <div style={{ padding: `40px ${PAD}px`, borderBottom: "1px solid var(--border-on-dark)" }}>
          <Eyebrow tone="on-dark">The Art Avenue Letter</Eyebrow>
          <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 26, margin: "12px 0 18px", lineHeight: 1.15 }}>Stories from the atelier, <em style={{ color: "var(--accent-soft)" }}>first.</em></h3>
          <div style={{ display: "flex", gap: 10 }}>
            <input placeholder="Your email" style={{ flex: 1, background: "transparent", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-sm)", color: "#fff", padding: "0 14px", fontFamily: "var(--font-sans)", fontSize: 14 }} />
            <Button variant="secondary" onDark size="sm">Join</Button>
          </div>
        </div>
        <div style={{ padding: `28px ${PAD}px`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[{ h: "Shop", l: ["Furniture", "Rugs", "Lighting", "Decor"] }, { h: "Discover", l: ["Our Story", "Journal", "Trade", "Customer Homes"] }].map((c) => (
            <div key={c.h}>
              <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--accent-soft)", marginBottom: 14 }}>{c.h}</div>
              <div style={{ display: "grid", gap: 10 }}>{c.l.map((x) => (<a key={x} href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-on-dark-muted)", textDecoration: "none", fontSize: 14 }}>{x}</a>))}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: `16px ${PAD}px 40px`, borderTop: "1px solid var(--border-on-dark)", fontSize: 11.5, color: "var(--text-on-dark-muted)" }}>© 2026 Art Avenue · Handcrafted in India</div>
      </footer>
    );
  }

  /* ============ BOTTOM SHEET ============ */
  /* ============ CUSTOM & BESPOKE ============ */
  function Custom({ onNavigate }) {
    const consult = mWa("Hello Art Avenue, I'd like to discuss a custom or bespoke project.");
    const disciplines = [
      { i: "ph-armchair", h: "Custom Furniture", t: "Your dimensions, woods & finishes." },
      { i: "ph-scribble-loop", h: "Custom Rugs", t: "Bespoke sizes, colours & motifs." },
      { i: "ph-needle", h: "Custom Upholstery", t: "Your own fabric, fills & profiles." },
      { i: "ph-house-line", h: "Interior Projects", t: "Whole-room & whole-home schemes." },
      { i: "ph-buildings", h: "Hospitality Projects", t: "Contract-grade, at scale." },
      { i: "ph-pen-nib", h: "Designer Collaborations", t: "Co-created & one-of-a-kind." },
      { i: "ph-package", h: "Project Procurement", t: "Logistics for multi-room orders." },
    ];
    const journey = [
      ["01", "Discover", "Share your space and how you live — no obligation."],
      ["02", "Consult", "A dedicated consultant shapes the brief with you."],
      ["03", "Design & Sample", "Drawings, renders and material samples to your door."],
      ["04", "Craft", "Made by hand in our ateliers, with progress updates."],
      ["05", "Deliver & Install", "Placed and styled in your space, anywhere."],
    ];
    const materials = [["Solid Teak", "bronze"], ["Belgian Linen", "stone"], ["Highland Wool", "olive"], ["Aged Brass", "bronze"], ["Travertine", "sand"], ["Full-Grain Leather", "clay"]];
    const portfolio = [["Udaipur lake villa", "clay", "Residential"], ["The Verandah · hotel", "espresso", "Hospitality"], ["Bandra penthouse", "olive", "Residential"], ["Maison Rao · rugs", "sand", "Custom Rugs"]];

    return (
      <div style={{ paddingBottom: 40 }}>
        {/* hero */}
        <div style={{ position: "relative", minHeight: 520 }}>
          <Fig tone="espresso" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,25,22,.86), rgba(28,25,22,.34) 58%, rgba(28,25,22,.4))" }} />
          <div style={{ position: "relative", padding: `90px ${PAD}px 40px`, minHeight: 520, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--accent-soft)" }}>Custom &amp; Bespoke · The Atelier</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--text-on-dark)", fontSize: 40, lineHeight: 1.04, letterSpacing: "var(--tracking-tight)", margin: "14px 0 0" }}>Made for your space, <em style={{ color: "#EBD9BE" }}>down to the last detail.</em></h1>
            <p style={{ color: "rgba(250,246,239,.88)", fontSize: 15.5, fontWeight: 300, lineHeight: 1.6, marginTop: 16 }}>Most of what we make begins as a conversation, not a catalogue. Tell us about your room, project or collection.</p>
            <div style={{ display: "grid", gap: 12, marginTop: 26 }}>
              <a href="#cb-form-m" onClick={(e) => { e.preventDefault(); const el = document.getElementById("cb-form-m"); el && el.scrollIntoView(); }} style={{ textDecoration: "none" }}><Button variant="primary" fullWidth>Start a Project</Button></a>
              <a href={consult} target="_blank" rel="noopener" style={{ textDecoration: "none" }}><Button variant="secondary" onDark fullWidth iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Speak with a Design Consultant</Button></a>
            </div>
            <div style={{ display: "flex", gap: 26, marginTop: 30 }}>
              {[["25+", "years"], ["1,200+", "commissions"], ["40+", "hospitality"]].map(([n, l]) => (
                <div key={l}><div style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--text-on-dark)", lineHeight: 1 }}>{n}</div><div style={{ fontSize: 10.5, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(250,246,239,.66)", marginTop: 6 }}>{l}</div></div>
              ))}
            </div>
          </div>
        </div>

        {/* statement */}
        <section style={{ padding: `40px ${PAD}px 8px` }}>
          <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>A Design Studio, Not a Store</div>
          <p style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 24, lineHeight: 1.32, margin: "12px 0 0" }}>We're happiest when a piece is made for one home — yours — rather than for everyone.</p>
        </section>

        {/* disciplines */}
        <section style={{ padding: `32px ${PAD}px 8px` }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 26, margin: "0 0 18px" }}>What we make to order</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {disciplines.map((d) => (
              <a key={d.h} href="#cb-form-m" onClick={(e) => { e.preventDefault(); const el = document.getElementById("cb-form-m"); el && el.scrollIntoView(); }} style={{ textDecoration: "none", display: "flex", gap: 14, alignItems: "center", padding: "16px 16px", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-sm)", background: "var(--surface-raised)" }}>
                <i className={"ph-light " + d.i} style={{ fontSize: 25, color: "var(--accent-deep)", flex: "none" }} />
                <span style={{ flex: 1 }}>
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--text-primary)" }}>{d.h}</span>
                  <span style={{ display: "block", fontSize: 12.5, color: "var(--text-secondary)", marginTop: 2 }}>{d.t}</span>
                </span>
                <i className="ph ph-arrow-right" style={{ fontSize: 14, color: "var(--text-muted)" }} />
              </a>
            ))}
          </div>
        </section>

        {/* portfolio rail */}
        <section style={{ padding: `40px 0 8px` }}>
          <div style={{ padding: `0 ${PAD}px` }}>
            <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>Project Portfolio</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 26, margin: "10px 0 18px" }}>Commissioned, made &amp; installed</h2>
          </div>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", padding: `0 ${PAD}px` }}>
            {portfolio.map(([label, tone, tag]) => (
              <div key={label} style={{ flex: "0 0 240px", scrollSnapAlign: "start", position: "relative" }}>
                <Fig tone={tone} ratio="4/5" label={label} />
                <span style={{ position: "absolute", top: 12, left: 12 }}><Badge variant="on-image">{tag}</Badge></span>
              </div>
            ))}
          </div>
        </section>

        {/* journey */}
        <section style={{ padding: `40px ${PAD}px 8px` }}>
          <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>The Client Journey</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 26, margin: "10px 0 0" }}>Discover · Consult · Customize · Order</h2>
          <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0 }}>
            {journey.map(([n, h, t]) => (
              <li key={n} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 14px", padding: "15px 0", borderTop: "1px solid var(--border-hairline)" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 15, color: "var(--text-accent)" }}>{n}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500, color: "var(--text-primary)" }}>{h}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--text-secondary)", marginTop: 3 }}>{t}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* materials */}
        <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", padding: `48px ${PAD}px`, marginTop: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--accent-soft)" }}>Material Selection</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 28, lineHeight: 1.1, margin: "12px 0 0" }}>Begin with the materials.</h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-on-dark-muted)", margin: "12px 0 0" }}>Honest materials, sampled to your door before a single piece is made.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, margin: "22px 0 0" }}>
            {materials.map(([name, tone]) => (
              <div key={name}><Fig tone={tone} ratio="1/1" /><div style={{ fontSize: 11.5, color: "var(--text-on-dark-muted)", marginTop: 7 }}>{name}</div></div>
            ))}
          </div>
          <div style={{ marginTop: 22 }}><Button variant="primary" fullWidth onClick={() => onNavigate("collection", "Materials")}>Explore the Material Library</Button></div>
        </section>

        {/* case study */}
        <section style={{ padding: `48px ${PAD}px 8px` }}>
          <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>Case Study</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 26, margin: "10px 0 16px" }}>The Verandah, Goa</h2>
          <div style={{ position: "relative" }}><Fig tone="espresso" ratio="4/3" label="42-key boutique hotel" /><span style={{ position: "absolute", top: 12, left: 12 }}><Badge variant="on-image">Hospitality</Badge></span></div>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-secondary)", margin: "16px 0 0" }}>A boutique hotel furnished end-to-end — lobby seating, restaurant banquettes, 42 bedroom schemes and bespoke runners, delivered across two phases.</p>
          <div style={{ display: "flex", gap: 24, marginTop: 20, paddingTop: 18, borderTop: "1px solid var(--border-hairline)" }}>
            {[["320+", "pieces"], ["9", "months"], ["42", "rooms"]].map(([n, l]) => (
              <div key={l}><div style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--text-primary)", lineHeight: 1 }}>{n}</div><div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6 }}>{l}</div></div>
            ))}
          </div>
        </section>

        {/* enquiry form */}
        <section id="cb-form-m" style={{ background: "var(--surface-alt)", padding: `48px ${PAD}px`, marginTop: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)" }}>Start a Project</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 28, lineHeight: 1.1, margin: "12px 0 0" }}>Tell us about your space.</h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-secondary)", margin: "12px 0 0" }}>A dedicated consultant will be in touch within two business days — no obligation.</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gap: 16, marginTop: 22 }}>
            <Input label="Name" placeholder="Ananya Mehta" required />
            <Input label="Email" type="email" placeholder="you@email.com" required />
            <Input label="Phone" type="tel" placeholder="+91 ..." />
            <Select label="Project type" options={["Custom Furniture", "Custom Rugs", "Custom Upholstery", "Interior Project", "Hospitality Project", "Designer Collaboration", "Project Procurement"]} />
            <Select label="Timeline" options={["Exploring", "Within 3 months", "3–6 months", "6+ months"]} />
            <Select label="Budget guide" options={["Under ₹ 5 lakh", "₹ 5–15 lakh", "₹ 15–50 lakh", "₹ 50 lakh +", "Prefer to discuss"]} />
            <Input label="Location" placeholder="City / project site" />
            <Input label="About your project" multiline placeholder="The room or property, how you'll use it, references…" />
            <Button variant="primary" fullWidth>Submit Enquiry</Button>
            <a href={consult} target="_blank" rel="noopener" style={{ textDecoration: "none" }}><Button variant="ghost" fullWidth iconLeft={<i className="ph ph-chat-teardrop-dots" />}>Or message a consultant now</Button></a>
            <p style={{ fontSize: 12, color: "var(--text-faint)", textAlign: "center", margin: 0 }}><i className="ph ph-lock-simple" style={{ marginRight: 5 }} />Your details are kept private and never shared.</p>
          </form>
        </section>
        <MobileFooter onNavigate={onNavigate} />
      </div>
    );
  }

  function Sheet({ kind, onClose }) {
    const open = !!kind;
    return (
      <React.Fragment>
        <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(34,31,27,.42)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur-base)", zIndex: 42 }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, maxHeight: "78%", background: "var(--surface-page)", borderRadius: "16px 16px 0 0", transform: open ? "translateY(0)" : "translateY(101%)", transition: "transform var(--dur-slow) var(--ease-luxe)", zIndex: 43, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "12px 0 4px", display: "flex", justifyContent: "center" }}><span style={{ width: 40, height: 4, borderRadius: 99, background: "var(--border-strong)" }} /></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: `8px ${PAD}px`, borderBottom: "1px solid var(--border-hairline)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 22 }}>{kind === "sort" ? "Sort" : "Filter"}</span>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }}><i className="ph-light ph-x" style={{ fontSize: 22 }} /></button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: `4px ${PAD}px 12px` }}>
            {kind === "sort"
              ? ["Featured", "Newest", "Price: Low to High", "Price: High to Low"].map((o, i) => (
                  <label key={o} style={sheetRow}>{o}<span style={radio(i === 0)} /></label>
                ))
              : [{ h: "Category", o: ["Seating", "Tables", "Storage", "Beds"] }, { h: "Material", o: ["Teak", "Oak", "Cane", "Marble", "Brass"] }, { h: "Availability", o: ["In stock", "Made to order"] }].map((g) => (
                  <div key={g.h} style={{ padding: "16px 0", borderBottom: "1px solid var(--border-hairline)" }}>
                    <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 12 }}>{g.h}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {g.o.map((x, i) => (<span key={x} style={chip(i === 0)}>{x}</span>))}
                    </div>
                  </div>
                ))}
          </div>
          <div style={{ padding: `14px ${PAD}px 30px`, borderTop: "1px solid var(--border-hairline)" }}><Button variant="primary" fullWidth onClick={onClose}>{kind === "sort" ? "Apply" : "Show 136 pieces"}</Button></div>
        </div>
      </React.Fragment>
    );
  }
  const sheetRow = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid var(--border-hairline)", fontSize: 16, color: "var(--text-primary)", cursor: "pointer" };
  const radio = (on) => ({ width: 18, height: 18, borderRadius: "50%", border: "1.5px solid " + (on ? "var(--accent)" : "var(--border-strong)"), background: on ? "radial-gradient(circle, var(--accent) 0 5px, transparent 6px)" : "transparent" });
  const chip = (on) => ({ padding: "9px 16px", borderRadius: 99, border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)"), background: on ? "var(--surface-accent-tint)" : "transparent", color: on ? "var(--text-accent)" : "var(--text-secondary)", fontSize: 13.5, cursor: "pointer" });

  /* ============ APP ============ */
  function MobileApp() {
    const [hist, setHist] = React.useState([{ name: "home", arg: null }]);
    const [drawer, setDrawer] = React.useState(false);
    const [sheet, setSheet] = React.useState(null);
    const [guide, setGuide] = React.useState(false);
    const [cart, setCart] = React.useState(INITIAL_CART);
    const scrollRef = React.useRef(null);
    const route = hist[hist.length - 1];
    const resetScroll = () => { if (scrollRef.current) scrollRef.current.scrollTop = 0; };
    const navigate = (name, arg) => { setHist((h) => [...h, { name, arg }]); resetScroll(); };
    const goBack = () => { setHist((h) => (h.length > 1 ? h.slice(0, -1) : h)); resetScroll(); };

    let page;
    if (route.name === "collection" || route.name === "trade") page = <Collection onNavigate={navigate} title={route.name === "trade" ? "Trade & Design" : route.arg} onFilter={setSheet} onGuide={() => setGuide(true)} />;
    else if (route.name === "product") page = <Product onNavigate={navigate} name={route.arg} onGuide={() => setGuide(true)} />;
    else if (route.name === "custom") page = <Custom onNavigate={navigate} />;
    else if (route.name === "cart") page = <Cart onNavigate={navigate} items={cart} setItems={setCart} />;
    else if (route.name === "checkout") page = <Checkout onNavigate={navigate} items={cart} />;
    else if (route.name === "confirm") page = <Confirmation onNavigate={(n, a) => { if (n === "home") { setHist([{ name: "home", arg: null }]); resetScroll(); } else navigate(n, a); }} />;
    else page = <Home onNavigate={navigate} />;

    const cartCount = cart.reduce((s, it) => s + it.qty, 0);
    const showBack = ["product", "cart", "checkout", "custom"].includes(route.name);
    const title = { cart: "Cart", checkout: "Checkout", confirm: "" }[route.name];

    return (
      <div style={{ position: "relative", height: "100%", overflow: "hidden", background: "var(--surface-page)" }}>
        <div ref={scrollRef} style={{ height: "100%", overflowY: "auto" }}>
          <AppBar onMenu={() => setDrawer(true)} onNavigate={navigate} back={showBack} onBack={goBack} cartCount={cartCount} />
          <div key={route.name + (route.arg || "")} style={{ animation: "aaRise var(--dur-slow) var(--ease-luxe)" }}>{page}</div>
        </div>
        {route.name === "product" && <ProductBottomBar onNavigate={navigate} name={route.arg} />}
        {route.name === "cart" && cart.length > 0 && <CartBottomBar onNavigate={navigate} items={cart} />}
        {route.name === "checkout" && <CheckoutBottomBar onNavigate={navigate} items={cart} />}
        <Drawer open={drawer} onClose={() => setDrawer(false)} onNavigate={navigate} />
        <Sheet kind={sheet} onClose={() => setSheet(null)} />
        <RugGuideSheet open={guide} onClose={() => setGuide(false)} />
      </div>
    );
  }

  window.AAMobileApp = MobileApp;
})();
