Select that mirrors the Input box with a thin chevron. Use for collection sort and filter facets.

```jsx
<Select label="Sort by" options={["Featured", "Newest", "Price: Low to High"]} />
<Select label="Material" options={[{value:"oak",label:"Solid Oak"},{value:"teak",label:"Teak"}]} />
```

Pass `options` (strings or `{value,label}`) or raw `<option>` children.
