# Art Avenue — Commerce & Content Architecture (Shopify-ready)

This document is the bridge between the approved prototype (the `window.AA*` helpers in
`parts.jsx`) and the production Shopify build. **It is a scalability + merchant-flexibility
spec, not a design change.** The goal: scale from hundreds to thousands of products while
keeping one luxury experience and changing *all* product behaviour through data — never
through template edits.

Everything below is already modelled in the prototype as plain config objects so the data
shapes are real and testable. In Shopify these become **metafields** (per-product switches)
and **metaobjects** (centralised, reusable content).

---

## 1. Three behaviour layers (all metafield-driven)

A product's behaviour is the composition of three independent layers. None of them is
hardcoded in a template.

| Layer | Metafield | Values | Controls |
|---|---|---|---|
| **Fulfillment** | `aa.fulfillment` | `in-stock` · `made-to-order` · `custom` · `project` | Lead-time messaging, the fulfillment status bar |
| **Visibility** | `aa.visibility` | `ecommerce` · `consultation` · `price-on-request` · `project-only` | Price visibility, cart visibility, default CTAs, lead behaviour |
| **CTAs** | `aa.cta_primary`, `aa.cta_secondary` | any CTA key (below) | Override the visibility defaults, *independent of fulfillment* |

Resolved in the prototype by `AACommerce(cfg)` → `{ price, cart, primary, secondary, lead }`
and `AAFulfillment(type)` → `{ label, lead, msg, … }`. The two layers are deliberately
orthogonal: a `made-to-order` product can still be `ecommerce` (cart) **or** `price-on-request`.

### Visibility matrix

| Visibility | Price | Cart | Default primary | Default secondary |
|---|---|---|---|---|
| `ecommerce` | shown | yes | Add to Cart | Speak with a Design Consultant |
| `consultation` | shown | no | Speak with a Design Consultant | Customize This Piece |
| `price-on-request` | "Price on request" | no | Request Pricing | Speak with a Design Consultant |
| `project-only` | "Project pricing" | no | Start a Project Enquiry | Speak with a Design Consultant |

### CTA registry (purchase / enquiry actions only)

`add-to-cart` · `request-pricing` · `consult` · `customize` · `project-enquiry`

> **Sample requests are intentionally NOT in the CTA registry** — see §3.

---

## 2. Module system — enable / disable / hide / **reorder** via data

Every PDP section is an optional module. No module is permanently attached to a template.

Modules: `material` · `finish` · `upholstery` · `backing` · `construction` · `craft` ·
`origin` · `care` · `installation` · `customization` · `specifications` · `samples` ·
`delivery` · `lead-time` · `related` · `complete-the-room` · `consultation` · `guides` ·
`rooms`.

**Enable / disable / hide** — today: a `modules` map of booleans (`aa.modules` JSON
metafield). A module renders only when its flag is true *and* its data exists.

**Reorder** — production metafield `aa.module_order` (list of module keys). The template
renders by iterating that ordered list rather than a fixed JSX order:

```js
// production pattern — template owns NO order of its own
const order = product.metafields.aa.module_order
  || ["why-love-it","material","construction","specifications","care","delivery","related"];
order.forEach((key) => modules[key] && MODULE_RENDERERS[key]?.(product));
```

**This is now live in the prototype.** All three PDPs build a `rugSections` / `sectionFor`
map and render `(cfg.moduleOrder || DEFAULT_ORDER).map(...)`, so a merchant reorders or hides
sections purely by setting `aa.module_order` / `aa.modules` — no markup change. Each section is
still gated on `cfg.modules.<key>`, so enable/disable/hide and reorder all run off data.

---

## 3. Sample requests are a dedicated action, not a CTA

Sample requests represent a **separate customer intent** (a lead, not a purchase) and are one
of the highest-value lead sources for luxury furniture, rugs and upholstery. They are:

- rendered by `AASampleRequest`, placed **beside the material / finish / upholstery /
  construction selectors** — never in the primary/secondary CTA cluster;
- gated by the `samples` module like any other module;
- routed through the global lead framework as lead type `samples`.

Examples surfaced contextually: **Request Fabric Sample**, **Request Material Sample**,
**Request Finish Sample**.

---

## 4. Global lead framework (CRM-ready)

One structure for every lead type, so all leads route consistently to a future CRM.

**Lead types:** Design Consultation · Request Pricing · Request Samples · Custom Product
Enquiry · Project Enquiry · Trade Account Application.

**Unified payload** (`AALead.payload(type, ctx)`):

```json
{
  "leadType": "Request Samples",
  "product":  "Aravalli Hand-Knotted Rug",
  "sku":      "AA-AHKR-RG",
  "url":      "https://artavenue.com/products/…",
  "customer": { "name": "", "email": "", "phone": "" },
  "message":  "Material sample"
}
```

`AALeadHref(type, ctx)` builds the channel link (WhatsApp in the prototype). In production
this becomes a single `/leads` endpoint (or Shopify Form + Flow) that writes the same payload
to the CRM regardless of where the lead originated — PDP, collection card, trade page, or
the sample action.

---

## 5. Metaobjects — centralised content (do not hardcode in templates)

Reusable content lives in metaobjects and is *referenced* by products, so editing a material
once updates every product that uses it. Suggested definitions:

### `material` (Materials)
Wool · Cotton · Chenille · Linen · Leather · Velvet · Teak · Mango Wood · Marble · Travertine · Brass
Fields: `name`, `family` (textile / wood / stone / metal), `description`, `care_ref`,
`sample_available` (bool), `image`, `sustainability_note`.

### `finish` (Finishes)
Wood finishes · Metal finishes · Paint finishes · Stone finishes
Fields: `name`, `type`, `swatch`, `material_ref`, `description`.

### `upholstery` (Upholstery)
Fabric categories · Fabric collections · Performance fabrics · Leather collections
Fields: `name`, `collection`, `performance` (bool), `composition`, `swatch`, `com_accepted` (bool).

### `craft_technique` (Craft Techniques)
Hand Knotted · Hand Tufted · Flat Weave · Printed · Block Print · Embroidery · Tufting · Woven
Fields: `name`, `description`, `durability`, `best_for`, `lead_time`, `image`.

### `project_type` (Project Types)
Residential · Hospitality · Commercial · Retail · Designer Projects
Fields: `name`, `description`, `enquiry_routing`.

Products reference these via list-of-metaobject metafields (e.g. `aa.materials`,
`aa.craft_technique`, `aa.finishes`). The PDP renders the referenced content — it never
stores material/finish/technique copy itself. This is what lets one template serve every
technique and material without edits.

---

## 6. Collection card labels (customer-facing)

Cards expose commerce state without entering the PDP: **In Stock · Made to Order ·
Customizable · Made for Projects**. ("Made for Projects" replaces the internal term "Project
Product".) Driven by `aa.commerce_badge`, rendered by `AACommerceBadge`.

---

## 7. Product-type readiness matrix

One architecture covers every product type with no template redesign — only metafield values
differ:

| Product type | fulfillment | visibility | primary CTA | typical modules off |
|---|---|---|---|---|
| **Inventory** | `in-stock` | `ecommerce` | Add to Cart | construction, craft (if N/A) |
| **Made to Order** | `made-to-order` | `ecommerce` | Add to Cart | — |
| **Custom** | `custom` | `price-on-request` | Request Pricing | backing / fixed-size UI |
| **Project** | `project` | `project-only` | Start a Project Enquiry | related, complete-the-room |
| **Hospitality** | `project` | `project-only` | Start a Project Enquiry | related; adds contract specs |
| **Trade** | any | `consultation` | Speak with a Consultant | cart hidden; trade pricing via account |

---

## 8. Prototype → Shopify map

| Prototype helper (`parts.jsx`) | Production Shopify equivalent |
|---|---|
| `rugConfig` / `furnitureConfig` / `cushionConfig` (SKU-keyword demo) | Per-product metafields (`aa.*`) |
| `AACommerce`, `AAFulfillment` | Liquid/JS resolvers reading metafields |
| `AACtaButtons`, `AAPriceTag`, `AAFulfillmentBar`, `AACommerceBadge` | Theme sections / snippets |
| `AASampleRequest`, `AALead` | Sample snippet + unified `/leads` endpoint (Shopify Form + Flow → CRM) |
| `modules` map | `aa.modules` (bool map) + `aa.module_order` (ordered list) |
| Hardcoded `PROFILES` / material copy | `material` / `finish` / `craft_technique` metaobjects |

**Rule of thumb for development:** if changing a product's behaviour would require editing a
`.jsx`/`.liquid` template, the decision belongs in a metafield or metaobject instead.
