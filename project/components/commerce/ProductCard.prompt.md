Tall editorial product card — 4:5 image with a slow zoom on hover, serif name, quiet price. The workhorse of collection grids and "Pair With" rails.

```jsx
<ProductCard
  category="Seating"
  name="Marwar Lounge Chair"
  price="₹ 1,48,000"
  note="Made to order"
  badge={<Badge variant="on-image">Handcrafted</Badge>}
/>
```

Omit `image` to get an on-brand warm placeholder. Pass a `<Badge>` to `badge`. Set `favorite={false}` to hide the hover heart. Prices are passed pre-formatted — the component never formats currency.
