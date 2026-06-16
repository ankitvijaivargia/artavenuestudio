---
name: art-avenue-design
description: Use this skill to generate well-branded interfaces and assets for Art Avenue — a luxury design house curating handcrafted furniture, rugs, lighting and décor — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Link `styles.css` for the full token set, and reuse the components in `components/` and the screens in `ui_kits/website/`. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Key foundations:
- **Tone:** quiet, warm, editorial luxury — a design house, not a furniture store. Emotion before product. UPPERCASE letterspaced labels; Title-Case serif headlines; never salesy, never emoji.
- **Color:** warm ivory canvas, stone/sand greige neutrals, deep warm charcoal ink, a single muted-bronze accent, espresso for contrast. No pure black/white, no second accent, no loud gold.
- **Type:** Cormorant Garamond (serif display) + Jost (sans body/UI). Large editorial scale, generous whitespace. *(Substituted Google Fonts — see readme Caveats.)*
- **Icons:** Phosphor Light (1px), ink-colored only, utilitarian. *(Substitution.)*
- **Motion:** slow, settled, no bounce; near-square corners, hairline borders, barely-there warm shadows.
- **Imagery:** warm, lived-in, full-bleed photography. Placeholders in this kit are warm gradient blocks — replace with real photography.

Components are exposed at `window.ArtAvenueDesignSystem_70ed11` after loading `_ds_bundle.js`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
