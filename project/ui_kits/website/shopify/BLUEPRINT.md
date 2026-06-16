# Art Avenue — Shopify Implementation Blueprint & Data Model

The build-ready package generated from the approved architecture. Pair with `ARCHITECTURE.md`
(rationale) and `IMPLEMENTATION-SPEC.md` (narrative spec). Everything here is **data + Liquid**;
no design changes. The prototype's `window.AA*` helpers are the executable reference for every rule.

## Files

```
shopify/
  enums.json            Controlled vocabularies — the single source of truth for every enum + label map
  metafields.json       Product + Collection metafield definitions (namespace aa) — CLI/Admin-API ready
  metaobjects.json      5 metaobject definitions (material, finish, upholstery, craft_technique, project_type)
  presets.json          Preset registry + productType→preset + preset→template maps
  sample-products.json  Example product records (the data model in action) + lead payload example
  theme/
    main-product.liquid          Resolver + buy box + ordered module loop (the heart of the build)
    snippets-reference.liquid     Representative snippets: price, cta, lifecycle, samples, module, lead-form
```

## Data model (entities & relationships)

```
                         ┌──────────────────────────────┐
                         │           PRODUCT            │
                         │  aa.preset  aa.fulfillment   │
                         │  aa.visibility  aa.lifecycle │
                         │  aa.cta_primary/secondary    │
                         │  aa.modules  aa.module_order │
                         │  aa.size_mode  aa.commerce_badge
                         └───────────────┬──────────────┘
        references (metaobject_reference)│
   ┌──────────────┬──────────────┬───────┴───────┬───────────────┐
   ▼              ▼              ▼               ▼               ▼
 material       finish       upholstery     craft_technique   project_type
 (Wool…Brass)  (wood/metal)  (fabric/COM)   (Hand Knotted…)   (Residential…)

 COLLECTION: aa.collection_type · aa.force_badge · aa.enquiry_cta
 LEAD (event, not stored on product): { leadType, product, sku, url, customer, message }
```

**Layered behaviour (orthogonal switches):**
`fulfillment` (lead-time messaging) × `visibility` (price/cart/CTA) × `lifecycle` (availability)
× `modules`/`module_order` (which sections + order) — composed, never hardcoded.

## Resolution pipeline (last wins)

```
aa.preset ──► preset defaults (presets.json)
                     │
                     ▼  overridden by any explicit aa.* metafield
            product configuration
                     │
                     ▼  composed with lifecycle (non-shopable → no cart, swap CTA)
            effective commerce state ──► price · cart · primary/secondary CTA · ordered modules
```
Code mirror: `AAPreset(preset, overrides)` → `AACommerce(cfg, AALifecycle(lifecycle))`.

## Controlled vocabularies (enums.json)

- **preset** (7) · **fulfillment** (4) · **visibility** (4) · **lifecycle** (5)
- **size_mode** (5) · **commerce_badge** (4) · **cta** (6) · **lead_type** (6)
- **collection_type** (5) · **project_type** (5) · **module** (full list)

## Apply order (Shopify CLI / Admin GraphQL)

1. **Metaobject definitions** — `metaobjectDefinitionCreate` for each in `metaobjects.json`; create seed entries.
2. **Metafield definitions** — `metafieldDefinitionCreate` for every entry in `metafields.json` (product + collection). Choice validations from `enums.json`.
3. **Presets** — mirror `presets.json` into `snippets/aa-presets.liquid` (returns JSON per key) + Liquid filters `aa_visibility`, `aa_lifecycle`, `aa_cta`, `aa_lead_url` (or a single `aa-config` snippet).
4. **Templates** — JSON templates per `presetToTemplate` (`product.json`, `product.custom.json`, `product.project.json`, …) all pointing at `sections/main-product.liquid`.
5. **Theme** — `main-product.liquid` + module snippets (`module-*.liquid`) + `snippets/module.liquid` dispatcher + `lead-form.liquid`.
6. **Products** — set `aa.*` per `sample-products.json` (bulk editor / Matrixify / Admin API).
7. **Flow** — automations for lifecycle (discontinued → swap CTA, keep page; archive → unpublish) and leads (`/contact` submission → CRM by `lead_type`).

## Adding things later (no structural redesign)

- **New product** → set `aa.preset`, reference metaobjects, add any overrides.
- **New module** → add an enum entry + a `module-<key>.liquid` snippet + a `when` branch in the dispatcher. `main-product.liquid` is untouched.
- **New material/finish/technique** → one metaobject entry; every product referencing it updates.
- **New preset / lifecycle nuance** → extend `presets.json` / `enums.json`; templates unchanged.

**Guarantee:** hundreds → thousands of SKUs across six product types (Inventory · Made-to-Order ·
Custom · Project · Hospitality · Trade) and five lifecycle states, on one template set.
