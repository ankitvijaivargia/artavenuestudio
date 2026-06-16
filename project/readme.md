# Art Avenue — Design System

A design system for **Art Avenue**, a luxury design house that curates handcrafted furniture, rugs, lighting, décor and lifestyle objects. Art Avenue is positioned as a *design house, not a furniture store* — competing with Restoration Hardware, Arhaus, McGee & Co., Four Hands and The Citizenry rather than traditional Indian furniture ecommerce.

The system encodes a **quiet, warm, editorial luxury** language: ivory canvases, stone neutrals, a single muted-bronze accent, deep warm charcoal ink, large serif display type and generous whitespace. The feeling is *slow luxury* — boutique-hotel calm and interior-journal editorial, never marketplace or discount-store.

> **Sources.** This system was created from a written brand brief only — no codebase, Figma, or brand assets were supplied. Typefaces and imagery are documented substitutions (see *Caveats* below). When real brand assets exist, drop them in and the system inherits them.

---

## Brand context

- **What it is:** a curated luxury design house — furniture, rugs, lighting, décor, wall art, lifestyle objects — rooted in contemporary Indian craftsmanship.
- **Audience:** design-conscious affluent homeowners (30–60), interior designers, architects, hospitality buyers, and international buyers seeking authentic Indian craftsmanship.
- **Goals:** raise perceived luxury and trust, lift average order value, grow designer/architect (Trade) enquiries, and improve product discovery, storytelling and the mobile experience.
- **Personality:** sophisticated · warm · artistic · refined · curated · timeless · human · editorial.
- **Avoid:** marketplace / overstock feeling, busy layouts, excessive animation, bright colors, loud gold, heavy gradients, generic Shopify look.

---

## Content fundamentals

How Art Avenue writes.

- **Voice:** an assured curator and host. Warm, unhurried, human. Speaks *to* the reader ("your home", "your project") and *about* the makers ("our artisans", "we work with workshops across India"). First-person plural for the house; second person for the customer. Never "I".
- **Tone:** editorial and evocative, never salesy. Emotion before product. Headlines suggest a feeling or a story; product names are concrete and place-rooted.
- **Casing:**
  - Eyebrows / labels / buttons → **UPPERCASE**, letterspaced (e.g. `SIGNATURE COLLECTIONS`, `EXPLORE COLLECTION`).
  - Headlines → **Title Case** or natural sentence case set in serif (e.g. *Crafted spaces, collected stories.*).
  - Body → sentence case, comfortable measure.
- **Signature lines:** "Crafted spaces. Collected stories." · "A design house, not a furniture store." · "Made by hand, made to last."
- **Punctuation:** periods used deliberately in display lines for cadence. Em dashes and ampersands welcome ("Trade & Design", "Delivery & Assembly"). Avoid exclamation marks.
- **CTAs:** quiet and specific — *Explore Collection*, *Trade & Design Program*, *Request Trade Access*, *Book a Consultation*, *Read the Journal*. Never "Buy now!", "Shop deals", urgency or discount language.
- **Numbers / prices:** Indian formatting with the rupee symbol — `₹ 1,48,000`. Pair with quiet context ("Made to order", "Ships in 3 weeks") rather than struck-through "sale" pricing.
- **Trust language, woven in (never shouted):** Handcrafted in India · Premium materials · Made to order · Customization available · Designer support · Secure insured delivery · Assembly help on select pieces · International shipping · Hospitality & Trade partnerships.
- **Emoji:** never. **Unicode flourishes:** only the em dash (—) and a thin middot (·) as a separator.

---

## Visual foundations

The look and feel, in detail. All values are tokens in `tokens/*.css`.

- **Color vibe.** Warm and analog. A **warm-ivory** canvas (`#FAF6EF`) with **stone/sand greige** neutrals, **deep warm charcoal** ink (`#2B2824`, never pure black), and a single **muted bronze** accent (`#9C7C4E`) used sparingly — for eyebrows, hairline rules, the occasional CTA. A **deep espresso** surface (`#221F1B`) grounds contrast moments (footer, Trade band). No pure white surfaces, no second accent, no loud gold.
- **Type.** High-contrast elegant **serif** (Cormorant Garamond) for display and headings — large, with italics used for emotional emphasis in bronze. **Geometric sans** (Jost) for body, UI, eyebrows and labels. Big editorial scale (`--text-display-1` up to ~100px), generous line-height (`1.72` for body), comfortable measures (~62ch). Eyebrows are 12px uppercase tracked to `0.24em`.
- **Spacing & layout.** Calm, generous rhythm on a 4px base. Section padding is large and fluid (`--section-y` 64→144px) for "slow luxury". Max content width `1320px`; prose column `760px`. Editorial grids tile near-seamlessly (`--gap-tile: 2px`); product grids breathe (`--gap-card`).
- **Backgrounds.** Solid warm neutrals, alternating ivory ↔ canvas to separate sections. **Large, full-bleed photography** is the primary visual device. No gradients as decoration (only subtle scrims over images), no repeating patterns, no textures beyond the implied warmth of photography.
- **Imagery.** Warm daylight, soft shadow, generous negative space, lived-in interiors and material/artisan close-ups. Amber/sand cast — never cold or clinical. Catalog-flat product shots are avoided in favor of styled, in-context photography. (Placeholders in this system are warm gradient blocks; replace with licensed photography.)
- **Corner radii.** Near-square. Cards and media use `0–2px` (`--radius-xs`); inputs `4px`. Pills only for the monogram and rare chips. Luxury reads as crisp, not rounded.
- **Cards.** Mostly **borderless** — defined by the image and whitespace, not by chrome. Where a surface needs edge, a **1px hairline** (`--border-hairline`) on `warm-white`. Shadows are barely-there and warm-tinted (`--shadow-soft`), reserved for genuinely floating elements (menus, dialogs). No heavy elevation.
- **Borders.** 1px hairlines in greige. Used for dividers, input boxes, secondary buttons, and table rules. A 34px hairline rule frequently precedes an eyebrow.
- **Shadows.** `--shadow-soft` / `--shadow-raised` / `--shadow-overlay` — all low, warm, and diffuse. No glow, no colored shadow.
- **Motion.** Slow and settled. `--ease-luxe` over `--dur-base (320ms)`; image zooms/reveals over `--dur-image (900ms)`. Hovers: images scale ~1.04, ghost-link arrows slide 4–5px, secondary buttons fill with charcoal. **No bounce, no spring, no parallax theatrics.** Respect `prefers-reduced-motion`.
- **Hover / press states.** Hover = a quiet shift (image scale, fill, color deepen to `--accent-deep`). Press = no aggressive transform; rely on color. Focus = `--focus-ring` (bronze, double-ring) for accessibility.
- **Transparency & blur.** Used sparingly: frosted `on-image` badges and over-photo labels (`rgba(250,246,239,.9)` + small blur), and gradient **scrims** over imagery for legible overlaid text. Never frosted-glass panels as decoration.

---

## Iconography

- **System:** [Phosphor Icons](https://phosphoricons.com), **Light** weight (1px stroke) as the default — its thin, even line reads as luxury. Regular weight only where a control needs more presence (e.g. cart). Loaded from CDN:
  ```html
  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css" />
  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
  <i class="ph-light ph-magnifying-glass"></i>
  ```
- **Color:** icons are ink (`--text-primary`/`--text-secondary`) — **never** bronze, never multicolor. Bronze is for type and rules only.
- **Usage:** strictly utilitarian — search, account, bag, heart/save, delivery, ruler/dimensions, leaf/material, arrows. Never decorative, never used to "spice up" a section. Common glyphs: `magnifying-glass, handbag-simple, heart, user, truck, ruler, leaf, armchair, sparkle, arrow-right, caret-down, x`.
- **Substitution note:** Phosphor is a documented substitution chosen to match the intended thin-line aesthetic — no brand icon set was supplied. Swap for a bespoke set if one exists.
- **No emoji.** Ever.

---

## Index / manifest

Root entry: **`styles.css`** — `@import`s every token + font file. Consumers link this one file.

```
styles.css                      ← global entry (import lines only)
tokens/
  fonts.css                     Cormorant Garamond + Jost (Google Fonts; substitution)
  colors.css                    warm neutrals, ink, bronze, espresso + semantic aliases
  typography.css                families, fluid scale, weights, leading, tracking, measures
  spacing.css                   space scale, section rhythm, container, gutters, gaps
  effects.css                   radii, borders, shadows, motion (easing/durations)
guidelines/                     foundation specimen cards (Design System tab)
  colors-*.html · type-*.html · spacing-scale.html · radii-shadows.html
  brand-logo.html · iconography.html · photography.html
assets/
  logo-wordmark.svg · monogram.svg
components/                     reusable React primitives (.jsx + .d.ts + .prompt.md + card)
  forms/      Button · Input · Select
  core/       Eyebrow · Badge
  commerce/   ProductCard · CollectionTile
ui_kits/
  website/    Homepage · Collection · Product · Trade & Design (interactive index.html)
  mobile/     Mobile-first Homepage · Collection · Product · Cart · Checkout in an iPhone frame
              (drawer nav · bottom-sheet filters · swipe gallery · sticky add-to-cart)
SKILL.md                        Agent-Skill manifest for use in Claude Code
```

**Namespace:** components are exposed at `window.ArtAvenueDesignSystem_70ed11` in card/UI-kit HTML (load `_ds_bundle.js`, then `const { Button } = window.ArtAvenueDesignSystem_70ed11`).

**Components:** `Button`, `Input`, `Select`, `Eyebrow`, `Badge`, `ProductCard`, `CollectionTile`. See each component's `.prompt.md` for usage.

**UI kits:** `ui_kits/website/` — a clickable recreation of the homepage, a collection page, a product page, and the **Trade & Design application page** (benefits, how-it-works, project gallery, application form). `ui_kits/mobile/` — the mobile-first flow (home, collection, product, **cart and checkout**) in an iPhone frame, with a slide-in nav drawer, bottom-sheet filter/sort, a swipeable product gallery, a sticky add-to-cart bar, and a full cart → checkout → confirmation path.

---

## Caveats

- **Fonts are substitutions.** Cormorant Garamond + Jost (Google Fonts) match the intended luxury-editorial direction but are not licensed brand faces. Replace `tokens/fonts.css` with the real faces when available.
- **Imagery is placeholders.** Warm gradient blocks stand in for photography throughout. The system is built to receive real, full-bleed lifestyle and craft photography.
- **Icons are Phosphor (substitution).** See *Iconography*.
- **No source design existed** — this is an original system built to the brief, not a recreation of an existing site.
