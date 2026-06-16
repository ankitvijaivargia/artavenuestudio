Letterspaced, near-square CTA button — the primary action element across Art Avenue. Use it for "Explore Collection", "Add to Cart", "Request Trade Access".

```jsx
<Button variant="primary">Explore Collection</Button>
<Button variant="secondary" iconRight={<i className="ph ph-arrow-right" />}>Trade &amp; Design</Button>
<Button variant="ghost" iconRight={<i className="ph ph-arrow-right" />}>Read the Journal</Button>
```

Variants: `primary` (solid charcoal), `secondary` (hairline outline that fills on hover), `accent` (bronze), `ghost` (inline text link with arrow that slides on hover). Sizes `sm | md | lg`. Set `onDark` on espresso sections, `fullWidth` in narrow columns, `href` to render an anchor. Keep labels short and in Title Case or UPPERCASE — never sentence-case.
