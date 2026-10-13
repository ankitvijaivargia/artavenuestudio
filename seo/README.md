# Art Avenue — SEO audit workflow

Free, local tooling for www.artavenue.com. No paid APIs, no API keys.

| Layer | Tool | What it checks | Where it runs |
|---|---|---|---|
| Live-site crawl | [seo-crawl-audit](https://github.com/MelnixDev/seo-crawl-audit) 0.15.1 (MIT) | Status codes, redirects and chains, robots/noindex, canonicals, titles/descriptions, H1s, image alt, JSON-LD validity, hreflang, sitemap hygiene, orphans, broken internal links, regressions vs last run | GitHub Actions (`.github/workflows/seo-crawl.yml`) or any machine with Node 20.19+ |
| Catalogue audit | `seo/scripts/catalog_audit.py` | Published collections that render empty, demo products live, missing/duplicate SEO fields, thin or near-duplicate copy, missing alt text, house copy rules | Anywhere with Python 3 + a Shopify Admin export |
| Run comparison | `seo/scripts/compare_runs.py` | Labels each catalogue finding new / resolved / ongoing | Same |
| Search demand | Google Search Console, Keyword Planner, Bing Webmaster Tools | Queries, impressions, clicks, CTR, position | Browser (exports pasted into the weekly report) |
| Conversions | Shopify Analytics (ShopifyQL) | Sessions → cart → checkout → order, by country and referrer | Shopify admin or Claude's Shopify connector |

## Weekly procedure (≈20 minutes)

1. **Crawl.** The workflow runs every Monday 06:47 IST, or trigger it from *Actions → SEO crawl → Run workflow*. Download the `seo-crawl-N` artifact. Open `sitemap-report.html`, `links-report.html` and, from the second run on, `regressions.html`.
   - Run locally instead: `npx seo-crawl-audit@0.15.1 scan https://www.artavenue.com/ --all --config seo/seo-audit.config.json` and a second pass with `--no-sitemap --pages 1500`.
2. **Export the catalogue.** Run the two queries in `seo/queries/` against the Shopify Admin API (Claude's Shopify connector does this), merge the pages into `products.json` and `collections.json`.
3. **Audit and compare.**
   ```
   python3 seo/scripts/catalog_audit.py --products products.json --collections collections.json --out reports/YYYY-MM-DD
   python3 seo/scripts/compare_runs.py reports/<last week> reports/YYYY-MM-DD --out reports/YYYY-MM-DD
   ```
   Keep `reports/` outside this public repo.
4. **Pull demand and conversions.** Search Console → Performance (last 7 days vs previous 7, filter country = India), Pages → *Not indexed* reasons; Shopify funnel filtered to India (see note below).
5. **Prioritise** with the matrix below, fill in `seo/templates/weekly-report.md`, and list proposed changes for approval.
6. **Implement approved changes** — theme edits as a branch + PR into `theme-deploy`; data edits through the Admin API in small batches.
7. **Verify.** Re-run steps 1–3. A fix counts only when it shows as `resolved` in the comparison or the live page proves it.

## Priority matrix

Score each finding 1–3 on **business impact**, **SEO impact**, **confidence**, and 1–3 inverted for **effort** and **risk** (3 = easy/safe). Sum; work top-down. Crawlability, indexing and rendering beat metadata every time.

## Rules of the road

- Never commit analytics, customer data or keys — this repository is public.
- Never fabricate ratings, reviews, prices, availability or business details in schema or copy.
- `productUpdate` with `seo: { title }` alone **clears** an existing SEO description. Always send both fields.
- Theme changes reach the live store only when merged into `theme-deploy` (Shopify GitHub sync). Admin API writes to the MAIN theme are blocked by design.
- Crawler limitation (verified on a test site): with a sitemap present it fetches only sitemap URLs, so broken links need the second `--no-sitemap` pass. It flags redirect chains only above 3 hops; shorter chains appear in the redirect evidence.
- Shopify session counts on artavenue.com are dominated by non-Indian desktop "direct" traffic that never adds to cart (≈90% in Oct 2026). Report conversion on India sessions, or the rate is meaningless.
