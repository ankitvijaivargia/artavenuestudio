# Art Avenue — Shopify Implementation Specification

**Status:** source document for Shopify development. Design is approved and frozen; this spec
turns the approved prototype (the `window.AA*` system in `ui_kits/website/parts.jsx`) into a
metafield/metaobject-driven Online Store 2.0 build. Companion: `ARCHITECTURE.md` (rationale).
No screen, layout or visual is changed by anything here — every decision is **data**.

Contents: Metafields · Metaobjects · Product Types · Collection Types · Visibility Modes ·
Fulfillment Types · Lead Types · Module System · Preset System · Lifecycle States ·
Theme Architecture · GitHub Structure · OS 2.0 Mapping.

---

## 1. Metafields (namespace `aa`)

Per-product switches. Storefront reads them; merchants edit them — never the theme.

| Key | Type | Example | Drives |
|---|---|---|---|
| `aa.preset` | single-line text (enum) | `luxury-rug` | Seeds defaults (§9) |
| `aa.fulfillment` | enum | `made-to-order` | Lead-time messaging + status bar (§6) |
| `aa.visibility` | enum | `ecommerce` | Price/cart/CTA defaults (§5) |
| `aa.lifecycle` | enum | `active` | Availability state (§10) |
| `aa.cta_primary` | enum (CTA key) | `add-to-cart` | Overrides primary CTA |
| `aa.cta_secondary` | enum (CTA key) | `consult` | Overrides secondary CTA |
| `aa.modules` | JSON | `{"construction":true,"care":false}` | Module visibility (§8) |
| `aa.module_order` | list.single_line_text | `["specs","material","related"]` | Module order (§8) |
| `aa.commerce_badge` | enum | `made-to-order` | Collection-card badge (§4) |
| `aa.materials` | list.metaobject_reference → `material` | — | Material content (§2) |
| `aa.finishes` | list.metaobject_reference → `finish` | — | Finish content (§2) |
| `aa.upholstery` | list.metaobject_reference → `upholstery` | — | Upholstery content (§2) |
| `aa.craft_technique` | metaobject_reference → `craft_technique` | — | Craft content (§2) |
| `aa.project_types` | list.metaobject_reference → `project_type` | — | Project routing (§2) |
| `aa.size_mode` | enum | `multi` \| `fixed` \| `single` \| `custom` \| `mto` | Size selector behaviour |
| `aa.lead_time` | single-line text | `3–4 weeks` | Lead-time module |

**Resolution order (last wins):** preset defaults → metafield overrides → lifecycle composition.
Mirrors `AAPreset(name, overrides)` then `AACommerce(cfg, AALifecycle(state))`.

---

## 2. Metaobjects (centralised, reusable content)

Defined once, referenced by many products. Editing one updates every product that uses it.

- **`material`** — Wool, Cotton, Chenille, Linen, Leather, Velvet, Teak, Mango Wood, Marble, Travertine, Brass. Fields: `name`, `family`, `description`, `care_ref`, `sample_available`, `image`, `sustainability_note`.
- **`finish`** — wood / metal / paint / stone finishes. Fields: `name`, `type`, `swatch`, `material_ref`, `description`.
- **`upholstery`** — fabric categories, fabric collections, performance fabrics, leather collections. Fields: `name`, `collection`, `performance`, `composition`, `swatch`, `com_accepted`.
- **`craft_technique`** — Hand Knotted, Hand Tufted, Flat Weave, Printed, Block Print, Embroidery, Tufting, Woven. Fields: `name`, `description`, `durability`, `best_for`, `lead_time`, `image`.
- **`project_type`** — Residential, Hospitality, Commercial, Retail, Designer Projects. Fields: `name`, `description`, `enquiry_routing`.

Products never store this copy inline — they reference it. This is what lets one template serve
every material and technique without edits.

---

## 3. Product Types → preset

`product.type` (or `aa.preset`) selects a preset (§9). Standard map:

| Shopify product type | Preset | Notes |
|---|---|---|
| Furniture | `luxury-furniture` | upholstered/cased goods |
| Rug | `luxury-rug` | size + construction modules |
| Cushion | `luxury-cushion` | technique-driven |
| Lighting / Decor / Wall Art | `in-stock-product` or `made-to-order-product` | per SKU |
| (any) Custom | `custom-product` | price-on-request |
| (any) Project / Hospitality | `project-product` | project-only |

---

## 4. Collection Types

Collections carry their own metafields so listing behaviour is data-driven too.

| `aa.collection_type` | Card badge source | Toolbar |
|---|---|---|
| `standard` | `aa.commerce_badge` per product | filters + sort |
| `made-to-order` | forces "Made to Order" | lead-time filter |
| `in-stock` | forces "In Stock" | availability filter |
| `project` | forces "Made for Projects" | enquiry CTA, no cart |
| `trade` | "Trade" | gated to trade accounts |

Card badges (`AACommerceBadge`): **In Stock · Made to Order · Customizable · Made for Projects**
— surfaced on the grid without entering the PDP.

---

## 5. Visibility Modes (`aa.visibility`)

| Mode | Price | Cart | Default primary | Default secondary |
|---|---|---|---|---|
| `ecommerce` | shown | yes | Add to Cart | Speak with a Design Consultant |
| `consultation` | shown | no | Speak with a Design Consultant | Customize This Piece |
| `price-on-request` | "Price on request" | no | Request Pricing | Speak with a Design Consultant |
| `project-only` | "Project pricing" | no | Start a Project Enquiry | Speak with a Design Consultant |

## 6. Fulfillment Types (`aa.fulfillment`)

`in-stock` (Ships in 3–5 days) · `made-to-order` (Crafted in 3–4 weeks) · `custom` (Timeline at
consultation) · `project` (Planned to project schedule). Drives the status bar + lead-time copy.
Orthogonal to visibility.

## 7. Lead Types (unified, CRM-ready)

Design Consultation · Request Pricing · **Request Samples** (a dedicated action, never a CTA) ·
Custom Product Enquiry · Project Enquiry · Trade Account Application. Every lead emits one payload
`{ leadType, product, sku, url, customer, message }` (mirrors `AALead.payload`). Production: a
single `/leads` endpoint (Shopify Customer form + Flow → CRM) for every origin.

## 8. Module System (`aa.modules` + `aa.module_order`)

Modules: `material` `finish` `upholstery` `backing` `construction` `craft` `origin` `care`
`installation` `customization` `specifications` `samples` `delivery` `lead-time` `related`
`complete-the-room` `consultation` `guides` `rooms`. Each is independently **visible / hidden /
reordered** through data. **Live in the prototype:** PDPs render
`(cfg.moduleOrder || DEFAULT).map(...)`, each section gated on `cfg.modules[key]`. No module is
attached to a template.

## 9. Preset System (`aa.preset`)

One value seeds fulfillment + visibility + module set/order; any explicit metafield overrides it
(`AAPreset(name, overrides)` deep-merges `modules`).

| Preset | fulfillment | visibility | primary CTA |
|---|---|---|---|
| `luxury-furniture` | made-to-order | ecommerce | Add to Cart |
| `luxury-rug` | made-to-order | ecommerce | Add to Cart |
| `luxury-cushion` | made-to-order | ecommerce | Add to Cart |
| `custom-product` | custom | price-on-request | Request Pricing |
| `project-product` | project | project-only | Start a Project Enquiry |
| `in-stock-product` | in-stock | ecommerce | Add to Cart |
| `made-to-order-product` | made-to-order | ecommerce | Add to Cart |

## 10. Lifecycle States (`aa.lifecycle`)

Composes on top of visibility (`AACommerce(cfg, AALifecycle(state))`): a non-shopable state
removes the cart and swaps the primary CTA. `<AALifecycleBanner>` shows the notice.

| State | Shopable | Cart | Primary CTA | Banner / listing |
|---|---|---|---|---|
| `active` | yes | yes | (visibility default) | none |
| `coming-soon` | no | no | Notify Me When Available | "Arriving soon — register interest" |
| `seasonal` | yes | yes | (default) | "Available for a limited time" |
| `discontinued` | no | no | Speak with a Consultant | "Discontinued — see alternatives" |
| `archive` | no | no | — | excluded from listings (`hidden`) |

---

## 11. Theme Architecture (Liquid)

Map each `AA*` helper to a theme section/snippet. PDP template = an ordered render of module
snippets, exactly like the prototype loop.

```
sections/
  main-product.liquid         # reads aa.* metafields → resolves preset+lifecycle+commerce
  product-fulfillment.liquid  # AAFulfillmentBar
  product-lifecycle.liquid    # AALifecycleBanner
  product-price.liquid        # AAPriceTag (respects visibility)
  product-cta.liquid          # AACtaButtons (primary/secondary; cart gated)
  product-samples.liquid      # AASampleRequest (dedicated, near selectors)
  collection-grid.liquid      # cards + AACommerceBadge
snippets/
  module-material.liquid  module-construction.liquid  module-specifications.liquid
  module-care.liquid  module-delivery.liquid  module-related.liquid
  module-complete-room.liquid  module-consultation.liquid  module-guides.liquid  …
  lead-form.liquid            # unified payload → /leads (Flow → CRM)
blocks/  (OS 2.0 app/theme blocks for module reorder in the editor)
```

`main-product.liquid` core loop:
```liquid
{% assign order = product.metafields.aa.module_order.value | default: preset_order %}
{% for key in order %}
  {% if modules[key] %}{% render 'module-' | append: key, product: product %}{% endif %}
{% endfor %}
```

## 12. GitHub Structure

```
art-avenue-theme/
  sections/  snippets/  blocks/  templates/  assets/  config/  locales/
  templates/
    product.json              # references main-product + module blocks
    product.custom.json       # custom-product preset starting template
    product.project.json      # project-product preset
    collection.json  collection.project.json  collection.trade.json
  docs/
    ARCHITECTURE.md  IMPLEMENTATION-SPEC.md   # ← this file
  .github/workflows/
    theme-check.yml           # Shopify theme-check on PR
    preview-deploy.yml        # Shopify CLI preview per branch
```
Branching: `main` (live) ← `develop` ← feature branches. Metaobject/metafield definitions are
version-controlled as `definitions/*.json` and applied via Shopify CLI / Admin API in CI.

## 13. OS 2.0 Mapping

- **Metafield definitions** → Settings → Custom data (Products, Collections), namespace `aa`, with the enums in §1.
- **Metaobjects** → Content → Metaobjects, the five definitions in §2; entries created once, referenced by products.
- **Templates** → JSON templates per preset (`product.json`, `product.custom.json`, …); each is a starting point, not a redesign.
- **Module reorder** → OS 2.0 theme blocks: each module is a block the merchant drags in the editor, and/or `aa.module_order` for headless/bulk.
- **Presets** → product type / `aa.preset` → JSON template selection + default metafields (set via bulk editor or Flow on product create).
- **Lifecycle** → `aa.lifecycle`; Flow automations (e.g. inventory 0 + made-to-order = stays shopable; discontinued → swap CTA, keep page for SEO; archive → unpublish).
- **Leads** → native customer-account/contact forms posting the §7 payload; Shopify Flow routes to the CRM.

**Scaling guarantee:** adding a product = pick a preset, reference metaobjects, set any overrides.
Hundreds → thousands of SKUs, six product types (Inventory · Made-to-Order · Custom · Project ·
Hospitality · Trade) and five lifecycle states, with **zero template redesign**.
