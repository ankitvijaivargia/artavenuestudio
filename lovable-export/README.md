# Art Avenue — Lovable Export

A single, self-contained recreation of the **Art Avenue** design-house homepage,
rewritten for the Lovable tech stack:

- **React** (function components)
- **Tailwind CSS** — utility classes only, no external CSS file. Brand tokens
  are inlined as arbitrary values (e.g. `bg-[#FAF6EF]`).
- **Lucide React** — icons (substituted 1:1 for the original Phosphor set).

## Use in Lovable / a Vite + React + Tailwind project

1. Ensure `lucide-react` is installed:
   ```bash
   npm install lucide-react
   ```
2. Drop `ArtAvenueHomepage.jsx` into your `src/` and render it:
   ```jsx
   import ArtAvenueHomepage from "./ArtAvenueHomepage";

   export default function App() {
     return <ArtAvenueHomepage />;
   }
   ```
3. That's it. Brand fonts (Cormorant Garamond + Jost) are loaded automatically
   from Google Fonts inside the component, so no extra setup is needed. If you
   prefer, add the same `<link>` to `index.html` and delete the `useEffect`.

## Notes

- **Imagery** uses high-quality Unsplash placeholders of handcrafted furniture,
  rugs and high-end décor. Swap the URLs in the `IMG` map at the top of the file
  for licensed brand photography.
- **Design language** — warm-ivory canvas, stone neutrals, a single muted-bronze
  accent, deep warm-charcoal ink, large Cormorant serif display, Jost UI/body,
  and generous "slow luxury" spacing — matches the original Art Avenue tokens.
- **Sections**, top to bottom: announcement bar · sticky header with hover mega
  menu · hero · Signature Collections · The Atelier · New Arrivals · Shop by Room
  · Featured Collection · Trade & Design · Customer Homes · The Journal · brand
  statement · footer with newsletter.
