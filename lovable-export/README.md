# Art Avenue — Lovable Export

A faithful recreation of the **Art Avenue** design-house site, rewritten for the
Lovable tech stack:

- **React** (function components)
- **Tailwind CSS** — utility classes only, no external CSS file. Brand tokens
  are inlined as arbitrary values (e.g. `bg-[#FAF6EF]`).
- **Lucide React** — icons (substituted 1:1 for the original Phosphor set).

## Files

| File | What it is |
| --- | --- |
| `shared.jsx` | Design-system primitives (`Eyebrow`, `Button`, `Figure`, `SectionHead`, `ProductCard`, `CollectionTile`, `CommerceBadge`, `Input`, `Select`) + chrome (`AnnounceBar`, `Header` with hover mega-menu, `Footer`, `Layout`) + the `IMG` map and brand tokens. Imported by every page. |
| `ArtAvenueHomepage.jsx` | Homepage — hero, Signature Collections, The Atelier, New Arrivals, Shop by Room, Featured Collection, Trade band, Customer Homes, Journal, brand statement. |
| `CollectionPage.jsx` | Collection / discovery page — collection hero, "Shop the way you design" facets, sticky filter toolbar, filter sidebar, edit tabs, product grid with commerce badges, room-inspiration banner, related collections, and a slide-in **Rug Size Guide** drawer (rug variant). |
| `ProductPage.jsx` | Product detail page — gallery, sticky configurator (size / material / finish / upholstery), fulfillment + trust, sample requests, qty + add-to-cart + consult, delivery grid, spec accordion, and module sections (Assembly, Why You'll Love It, Made For Your Space, Complete the Room, FAQ, Recently Viewed) + a scroll-triggered sticky buy bar. |
| `TradePage.jsx` | Trade & Design application page — hero, benefits grid, how-it-works, project gallery, partner quote, and the trade-access application form. |
| `App.jsx` | Optional demo page-switcher wiring the four pages via `onNavigate(route, arg)` — no router required. |

## Use in Lovable / a Vite + React + Tailwind project

1. Install icons:
   ```bash
   npm install lucide-react
   ```
2. Drop the files into `src/` and render the demo switcher:
   ```jsx
   import App from "./App";
   export default App;
   ```
   …or mount any single page directly:
   ```jsx
   import ArtAvenueHomepage from "./ArtAvenueHomepage";
   <ArtAvenueHomepage onNavigate={(route, arg) => /* your router */} />
   ```
3. Brand fonts (Cormorant Garamond + Jost) load automatically from Google Fonts
   inside `Layout`, so there's nothing else to configure.

## Navigation contract

Every page accepts an `onNavigate(route, arg)` callback. Header, footer, mega-menu,
product cards and collection tiles all call it:

```
onNavigate("home")
onNavigate("collection", "Rugs")          // arg = collection title
onNavigate("product", "Marwar Lounge Chair")
onNavigate("trade")
```

`App.jsx` implements this with local state; swap in `react-router` for real URLs.

## Notes

- **Imagery** uses high-quality Unsplash placeholders of handcrafted furniture,
  rugs and high-end décor, centralized in the `IMG` map in `shared.jsx`. Swap the
  URLs there for licensed brand photography in one place.
- **Icon substitution** — Lucide has no Pinterest glyph, so the footer uses
  Instagram / Facebook / LinkedIn. Phosphor's `swatches` → `Palette`,
  `chat-teardrop-dots` → `MessageCircle`, etc. Everything else maps 1:1.
- **Design language** — warm-ivory canvas, stone neutrals, a single muted-bronze
  accent, deep warm-charcoal ink, Cormorant serif display, Jost UI/body, and
  generous "slow luxury" spacing — matches the original Art Avenue tokens.
