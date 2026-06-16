# Handoff: Art Avenue — Shopify OS 2.0 Theme

## Overview
This package lets a developer (you, with Claude Code) implement the **approved Art Avenue
storefront** as a **Shopify Online Store 2.0 theme**, driven entirely by metafields and
metaobjects. The design + data architecture are finished and frozen — this is an
**implementation** task, not a design task.

The product experience is fully **data-driven**: a single product template adapts to inventory,
made-to-order, custom, project, hospitality and trade products via four orthogonal switches
(**fulfillment × visibility × lifecycle × modules**), plus **presets** and **lifecycle states**.
No behaviour is hardcoded in templates.

## About the files in this bundle
- **`prototype/shopify/`** — ⭐ the **build blueprint & data model** (start here). Shopify-ready
  JSON definitions + Liquid scaffolds. `prototype/shopify/BLUEPRINT.md` is the master index.
- **`prototype/*.jsx.txt` + `prototype/index.html.txt`** — the **visual + behavior reference**: a working
  React/HTML prototype of the whole site (home, collection, PDPs for furniture/rug/cushion,
  custom, trade), saved as `.txt` so they read as reference (not compiled). These are **design
  references, not production code** — recreate their look & behavior in **Liquid + theme CSS**, do
  not ship the JSX. The live, runnable version is in the design workspace at
  `ui_kits/website/index.html`.
- **`prototype/ARCHITECTURE.md`** — rationale for the architecture.
- **`prototype/IMPLEMENTATION-SPEC.md`** — the narrative spec (metafields, metaobjects, theme
  architecture, GitHub structure, OS 2.0 mapping).
- **`design-system/`** — the **design tokens** (colors, type, spacing, effects) to port into the
  theme's `assets/` CSS. The single source for the visual language.
- **`TASKS.md`** — the ordered, checkbox build plan. Execute top to bottom.

## Fidelity
**High-fidelity.** The prototype carries final colors, typography, spacing and interactions.
Recreate the UI faithfully in Liquid using the tokens in `design-system/`. The only place visual
design lives in the theme is `assets/*.css` (ported from these tokens) — everything else is logic
+ data.

## Target & approach
- **Base theme:** Shopify **Dawn** (OS 2.0). `shopify theme init`.
- **Do NOT** translate the prototype's React state into the theme. The prototype's
  `parts.jsx.txt` resolver helpers (`AAPreset`, `AACommerce`, `AAFulfillment`, `AALifecycle`,
  `AACtaButtons`, `AAPriceTag`, `AASampleRequest`, `AACommerceBadge`, `AALead`) are the
  **executable spec** for the Liquid you write. Each maps to a snippet (see BLUEPRINT §11 and
  `prototype/shopify/theme/`).
- **Data first, then theme:** create metaobjects + metafields (from the JSON) before wiring Liquid.

---

## Data model (what to create in Shopify)
Full definitions: `prototype/shopify/metaobjects.json`, `metafields.json`, `enums.json`.

**Metaobjects** (Content → Metaobjects): `material`, `finish`, `upholstery`, `craft_technique`,
`project_type` — created once, referenced by products.

**Product metafields** (namespace `aa`): `preset`, `fulfillment`, `visibility`, `lifecycle`,
`cta_primary`, `cta_secondary`, `size_mode`, `fixed_size`, `lead_time`, `modules` (JSON),
`module_order` (list), `commerce_badge`, + metaobject refs (`materials`, `finishes`, `upholstery`,
`craft_technique`, `project_types`).

**Collection metafields:** `collection_type`, `force_badge`, `enquiry_cta`.

**Resolution pipeline (last wins):** `aa.preset` defaults → explicit metafield overrides →
lifecycle composition. Mirror: `AAPreset(preset, overrides)` then `AACommerce(cfg, AALifecycle(state))`.

---

## Screens / sections to build

### 1. Product page (`sections/main-product.liquid`) — the core
- **Buy box** (sticky, right column on desktop, stacked on mobile): title · price (`aa-price`,
  respects visibility) · fulfillment bar · lifecycle banner · size module (multi/fixed/single/
  custom/mto) · finish/material/upholstery option modules (gated) · **dedicated sample request**
  (near selectors, NOT a CTA) · primary+secondary CTA (`aa-cta`, cart gated by visibility +
  lifecycle) · delivery/lead-time.
- **Section modules**, rendered in `aa.module_order` (fallback preset order), each gated by
  `aa.modules`: why-you'll-love-it, customization band, guides, specifications, construction,
  material & texture, craft/origin, room-by-room, consultation, related/complete-the-room.
- Scaffold: `prototype/shopify/theme/main-product.liquid`. Snippets: `theme/snippets-reference.liquid`.

### 2. Collection page (`sections/collection-grid.liquid`)
- Product cards with the **commerce badge** (`In Stock · Made to Order · Customizable · Made for
  Projects`) from `aa.commerce_badge` — visible without entering the PDP. Filters + sort toolbar.

### 3. Home, Custom & Bespoke, Trade
- Reference: `prototype/HomePage.jsx.txt`, `CustomBespokePage.jsx.txt`, `TradePage.jsx.txt`,
  `MaterialLibrary.jsx.txt`. Standard OS 2.0 sections; lift layout + copy from the prototype.

### 4. Global: header/mega-menu, announcement bar, footer
- Reference: `prototype/parts.jsx.txt` (Header, MegaMenu, AnnounceBar, Footer).

---

## Design tokens (port to `assets/aa-tokens.css`)
Full files in `design-system/tokens/`. Key values:

**Fonts:** Serif = **Cormorant Garamond** (display/editorial), Sans = **Jost** (body/UI). Load via
`{{ 'cormorant…' | font_face }}` or Google Fonts.

**Colors (warm quiet-luxury; no pure black/white):**
```
--surface-page:#FAF6EF  --surface-alt:#F4EEE3  --surface-raised:#FCFAF6  --surface-stone:#EAE1D3
--surface-dark:#221F1B  --surface-accent-tint:#ECE1CE
--text-primary:#2B2824  --text-secondary:#46413A  --text-muted:#766E61  --text-faint:#9C9384
--accent:#9C7C4E  --accent-deep:#7B6038  --accent-soft:#B89A6E   --text-accent:#7B6038
--border-hairline:#DCD2C1  --border-strong:#C3B7A1  --border-on-dark:rgba(250,246,239,.16)
--text-on-dark:#FAF6EF  --text-on-dark-muted:#B7AE9E
```
**Type scale (fluid):** display-1 `clamp(3.5rem,6.5vw,6.25rem)` · display-2 `clamp(2.75rem,5vw,4.5rem)`
· h1 `clamp(2.25rem,3.6vw,3.25rem)` · h2 `clamp(1.85rem,2.8vw,2.5rem)` · body 17px · body-lg 19px
· eyebrow 12px. Weights 300/400/500/600. Leading: display 1.04, tight 1.12, relaxed 1.72.
Tracking: eyebrow `.24em`, caps `.14em`, tight `-.015em`.
**Spacing / radius / shadows:** see `design-system/tokens/spacing.css` + `effects.css`.

## Interactions & behavior
- **Sticky buy bar** appears after scroll > ~620px (mobile-friendly).
- **Size modules:** `multi` = selector grid; `fixed` = one size + "Need another size? → consult";
  `single` = read-only "One size"; `mto`/`custom` = "Request a Custom Size/Order", no cart.
- **CTAs** open the unified lead flow (`lead-form.liquid` → `/contact` → Shopify Flow → CRM);
  `add-to-cart` posts the product form. Cart hidden unless `visibility.cart` AND lifecycle shopable.
- **Lifecycle:** coming-soon → "Notify Me" + banner, no cart; seasonal → shoppable + notice;
  discontinued → consult CTA + banner, page kept for SEO; archive → unpublished.
- Transitions are quiet/editorial (≈200–400ms ease). Respect `prefers-reduced-motion`.

## Assets
- **Imagery:** the prototype uses warm gradient placeholders (`AAFigure`). Replace with real
  product photography via Shopify media / metaobject `image` fields.
- **Icons:** prototype uses Phosphor Icons (`ph-*`). Use the same set or the theme's icon system.
- **Fonts:** Cormorant Garamond + Jost (Google Fonts / self-host in `assets/`).

## Files in this bundle
- `prototype/shopify/` — blueprint + data model (BLUEPRINT.md, enums/metafields/metaobjects/presets/sample-products JSON, theme/*.liquid)
- `prototype/*.jsx.txt`, `prototype/index.html.txt` — visual/behavior reference (read-only; run the live one in the workspace)
- `prototype/ARCHITECTURE.md`, `prototype/IMPLEMENTATION-SPEC.md` — spec docs
- `design-system/` — tokens (styles.css + tokens/*.css)
- `TASKS.md` — ordered build checklist

> Start by reading `prototype/shopify/BLUEPRINT.md`, then follow `TASKS.md`.
