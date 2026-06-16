# Build Tasks — Art Avenue Shopify Theme

Ordered checklist for Claude Code. Each phase is independently verifiable. Read
`prototype/shopify/BLUEPRINT.md` first; it is the source of truth for every value.

## Phase 0 — Environment
- [ ] Install Shopify CLI: `npm i -g @shopify/cli @shopify/theme`
- [ ] Create/own a Shopify store (Partner dev store is fine for the build)
- [ ] `shopify theme init art-avenue-theme` (scaffolds Dawn / OS 2.0)
- [ ] `git init`, add remote, create `develop` branch
- [ ] Connect the repo's `develop` branch in Shopify admin → Online Store → Themes → Connect from GitHub

## Phase 1 — Data model (before any Liquid)
- [ ] Create the 5 **metaobject definitions** from `prototype/shopify/metaobjects.json`
- [ ] Add seed entries (the `seed` arrays) for each metaobject
- [ ] Create all **product metafields** from `prototype/shopify/metafields.json` (namespace `aa`), with choice validations from `enums.json`
- [ ] Create the **collection metafields**
- [ ] (Optional, faster) Script steps above via Admin GraphQL `metaobjectDefinitionCreate` / `metafieldDefinitionCreate` reading the JSON directly
- [ ] Verify: a test product shows all `aa.*` fields in admin

## Phase 2 — Config layer (Liquid helpers)
- [ ] `snippets/aa-presets.liquid` — mirror `presets.json`; returns the preset JSON for a given key
- [ ] Helper snippets/filters: `aa-visibility`, `aa-lifecycle`, `aa-cta`, `aa-lead-url` (from `enums.json#/labels`)
- [ ] Implement the **resolution pipeline** (preset → overrides → lifecycle) exactly as `prototype/shopify/theme/main-product.liquid` shows

## Phase 3 — Theme CSS (visual layer)
- [ ] `assets/aa-tokens.css` — port `design-system/tokens/*` (colors, type scale, spacing, effects)
- [ ] Load fonts: Cormorant Garamond + Jost
- [ ] Base component styles (buttons, eyebrow labels, cards, hairlines) matching the prototype

## Phase 4 — Product page
- [ ] `sections/main-product.liquid` from the blueprint scaffold (resolver + buy box + module loop)
- [ ] Buy-box snippets: `aa-title`, `aa-price`, `aa-fulfillment-bar`, `aa-lifecycle-banner`, `aa-size`, `aa-cta`, `aa-sample-request`
- [ ] `snippets/module.liquid` dispatcher + one `module-<key>.liquid` per module (material, finish, upholstery, construction, specifications, care, delivery, related, complete-the-room, consultation, guides, rooms, why-love-it, customization, pairs)
- [ ] Wire `aa.module_order` → fallback preset order; gate each on `aa.modules`
- [ ] JSON templates per `presets.json#/presetToTemplate`: `product.json`, `product.rug.json`, `product.cushion.json`, `product.custom.json`, `product.project.json`
- [ ] Verify each path renders: ecommerce (cart), custom (price-on-request), project (project enquiry), coming-soon (notify, no cart), discontinued (consult, no cart)

## Phase 5 — Collection + global
- [ ] `sections/collection-grid.liquid` with `AACommerceBadge` cards (`aa.commerce_badge` / collection `force_badge`)
- [ ] Header + mega-menu, announcement bar, footer (reference `prototype/parts.jsx`)
- [ ] Home, Custom & Bespoke, Trade sections (reference the matching `prototype/*.jsx`)

## Phase 6 — Leads + automation
- [ ] `snippets/lead-form.liquid` emitting the unified payload (`leadType, product, sku, url, customer, message`) to `/contact`
- [ ] Shopify **Flow**: route `/contact` submissions to CRM by `lead_type`
- [ ] Shopify **Flow**: lifecycle rules (discontinued → keep page, swap CTA; archive → unpublish)

## Phase 7 — Seed + QA
- [ ] Create the example products from `prototype/shopify/sample-products.json` (bulk editor / Matrixify); set their `aa.*`
- [ ] `shopify theme dev --store <store>` and walk every product type + lifecycle state against the prototype (`ui_kits/website/index.html`)
- [ ] `shopify theme check` clean
- [ ] PR `develop` → `main`; publish

## Definition of done
- [ ] One product template serves all 6 product types with **no template edits** — only metafields differ
- [ ] Modules visible/hidden/reordered purely via `aa.modules` + `aa.module_order`
- [ ] All 5 lifecycle states behave correctly
- [ ] Pixel-faithful to the prototype using the ported tokens
