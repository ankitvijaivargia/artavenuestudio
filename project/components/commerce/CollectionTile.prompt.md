Full-bleed category tile with a gradient scrim and serif title. Use for "Signature Collections", "Shop by Room", and mega-menu features.

```jsx
<CollectionTile eyebrow="Signature" title="Rugs" cta="Explore the collection" style={{minHeight: 460}} />
<CollectionTile tone="light" eyebrow="Shop by Room" title="The Living Room" />
```

`tone="dark"` (default) lays light text over a dark scrim; `tone="light"` flips it. Size with `style={{minHeight}}` or grid placement. Omit `image` for a warm placeholder.
