# Art Avenue — Website UI kit

A clickable, high-fidelity recreation of the Art Avenue storefront, built entirely from the design-system foundations and components.

## Run
Open `index.html`. Navigation is live — use the header nav, mega-menu, collection cards, product cards and breadcrumbs to move between screens.

## Screens
- **HomePage.jsx** — hero, Signature Collections, Craftsmanship story, New Arrivals rail, Shop by Room, Featured Collection (full-bleed), Trade & Design band, Customer Homes, Journal, and the closing brand statement.
- **CollectionPage.jsx** — editorial collection hero, sticky toolbar (count + sort + filter), sticky filter sidebar, product grid with a mid-grid room-inspiration banner, and related collections.
- **ProductPage.jsx** — breadcrumb, stacked gallery (lifestyle first), sticky buy panel with finish swatches, quantity, add-to-cart, trust cues and a six-section accordion (Materials · Craftsmanship · Dimensions · Assembly · Delivery · Designer Notes), plus "Pair With" and "Recently Styled Spaces".

## Shared parts (`parts.jsx`)
- `AAFigure` — on-brand warm placeholder imagery (tones: sand, clay, stone, espresso, bronze, olive). **Swap these for real photography.**
- `AAAnnounceBar`, `AAHeader` (+ mega-menu), `AAFooter` (newsletter + columns + trust strip).

## Composition
Screens compose the published primitives from `window.ArtAvenueDesignSystem_70ed11` — `Button`, `Eyebrow`, `Badge`, `Select`, `ProductCard`, `CollectionTile` — and never re-implement them. Layout, spacing and color reference the CSS custom properties from `styles.css` only.

## Notes
- Imagery is placeholder gradients; the kit is built to receive full-bleed lifestyle and craft photography.
- Fonts (Cormorant Garamond + Jost) and icons (Phosphor Light) are documented substitutions — see the root `readme.md`.

## Template philosophy — flexible, not product-specific

Templates describe a *kind of product*, never one product. All technique-, material-, construction-, origin-, craft- and care-related content is driven by **product data**, so a single template scales to thousands of SKUs without redesign:

- **`CushionProductPage.jsx`** assumes no craft method. A `cushionData()` layer resolves a product into a technique profile (block-print, woven, tufted, embroidered, appliqué, hand-painted, leather, velvet, wool, linen, or a generic fallback) and the layout renders Technique · Material · Construction · Origin · Craft · Care · What's Included from that data. Point it at a real Shopify product object and the copy follows the product.
- **`RugProductPage.jsx`** carries the deep rug IA (specifications, construction explainer, origin, on-page room sizing, care, custom-sizing & consultation) as data arrays, not hard-coded prose.
- **`MaterialLibrary.jsx`** is organised by category (`LIBRARY[cat]`) across Furniture · Rugs · Cushions · Lighting · Decor; add a category, group or swatch and the page extends itself.
- **Navigation** (`parts.jsx` `NAV`) is data-led discovery: rugs lead with Construction · Material · Colour · Room (size de-emphasised to a quick link); furniture adds Room · Collection · New · Best · Designer · Materials · Craftsmanship. The mega-menu adapts to each entry's column count.

When adding a product type, supply its data — do not fork the template.
