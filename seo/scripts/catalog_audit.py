#!/usr/bin/env python3
"""
Art Avenue — catalogue SEO audit (Shopify Admin data, no crawling).

Reads the product/collection JSON exported from the Shopify Admin API (see
seo/README.md for the exact GraphQL queries) and writes:

  findings.csv   one row per finding: severity, rule, url, detail, evidence
  summary.json   counts per rule/severity, for comparing runs

Only pages that are live on the Online Store are judged for SEO. Drafts are
reported separately where they affect live pages (e.g. a published collection
whose only members are drafts).

Usage:
  python3 seo/scripts/catalog_audit.py --products data/products.json \
      --collections data/collections.json --out reports/2026-10-13
"""
import argparse, csv, html, json, os, re, collections as C

STORE = "https://www.artavenue.com"
BANNED = [  # house copy rules (standards-and-conventions)
    (r"full[- ]grain", "Banned claim: 'full-grain leather'"),
    (r"brass,? silver|silver,? (or|and) gold|silver (hardware|studs|finish)", "Hardware finish renamed Nickel — 'silver' still in copy"),
    (r"jaipur (atelier|workshop|studio)|atelier in jaipur|workshop in jaipur", "Jaipur named as atelier location"),
]
TEMPLATED_COLLECTION = re.compile(r"The Art Avenue .* edit — handcrafted, made to order", re.I)
GENERIC_ALT = re.compile(r"(image|view) \d+( of \d+)?$|^\s*$", re.I)


def text(h):
    h = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", h or "", flags=re.S | re.I)
    h = re.sub(r"<br\s*/?>|</p>|</li>|</h\d>", " ", h, flags=re.I)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", h))).strip()


def words(s):
    return re.findall(r"[a-z0-9]+", s.lower())


def shingles(s, k=5):
    w = words(s)
    return {" ".join(w[i:i + k]) for i in range(max(0, len(w) - k + 1))}


def jaccard(a, b):
    return len(a & b) / len(a | b) if a and b else 0.0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--products", required=True)
    ap.add_argument("--collections", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--dup-threshold", type=float, default=0.6)
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)
    P = json.load(open(a.products))
    COL = json.load(open(a.collections))
    rows = []

    def add(sev, rule, url, detail, evidence=""):
        rows.append(dict(severity=sev, rule=rule, url=url, detail=detail, evidence=str(evidence)[:300]))

    live = [p for p in P if p["status"] == "ACTIVE" and p.get("onlineStoreUrl")]
    live_handles = {p["handle"] for p in live}

    # ---------- products ----------
    seo_titles, seo_descs = C.defaultdict(list), C.defaultdict(list)
    bodies = {}
    for p in live:
        url = p["onlineStoreUrl"]
        tags = p.get("tags", [])
        body = text(p.get("descriptionHtml"))
        bodies[url] = body
        st = (p["seo"]["title"] or "").strip()
        sd = (p["seo"]["description"] or "").strip()
        eff_title = st or p["title"]
        eff_desc = sd or body[:320]
        if p["productType"] == "Swatch" or "hidden" in tags:
            continue  # utility product
        if "AA-DEMO" in tags:
            add("error", "demo-product-live", url, "Placeholder/demo product is ACTIVE and published", ",".join(tags))
        if not st:
            add("warning", "product-seo-title-missing", url,
                "No SEO title set; Shopify falls back to the product title", p["title"])
        elif len(st) > 65:
            add("notice", "product-seo-title-long", url, f"SEO title {len(st)} chars (>65 may truncate)", st)
        if not sd:
            add("warning", "product-meta-description-missing", url,
                "No meta description set; falls back to the first 320 chars of body copy", body[:160])
        elif len(sd) > 165:
            add("notice", "product-meta-description-long", url, f"Meta description {len(sd)} chars", sd)
        elif len(sd) < 70:
            add("notice", "product-meta-description-short", url, f"Meta description {len(sd)} chars", sd)
        seo_titles[eff_title.lower()].append(url)
        seo_descs[eff_desc.lower()].append(url)
        wc = len(words(body))
        if wc < 80:
            add("warning", "product-thin-description", url, f"Body copy {wc} words", body[:160])
        media = p.get("media", {}).get("nodes", [])
        if p["mediaCount"]["count"] == 0:
            add("error", "product-no-images", url, "Live product has zero images", "")
        missing = [i for i, m in enumerate(media, 1) if not (m.get("alt") or "").strip()]
        if missing:
            add("warning", "image-missing-alt", url, f"{len(missing)} of {len(media)} images have no alt text",
                f"positions {missing[:15]}")
        generic = [i for i, m in enumerate(media, 1) if (m.get("alt") or "").strip() and GENERIC_ALT.search(m["alt"].strip())]
        if len(generic) == len(media) and media:
            add("notice", "image-alt-formulaic", url,
                "All alt texts are numbered formula text (image N of M) — not descriptive", media[0].get("alt"))
        small = [i for i, m in enumerate(media, 1) if m.get("image") and (m["image"].get("width") or 0) < 1000]
        if small:
            add("notice", "image-low-resolution", url, f"{len(small)} images under 1000px wide", f"positions {small[:10]}")
        if not p.get("collections", {}).get("nodes"):
            add("warning", "product-in-no-collection", url, "Product belongs to no collection (weak internal linking)")
        for pat, why in BANNED:
            m = re.search(pat, body, re.I)
            if m:
                add("error" if "full" in pat else "warning", "copy-rule", url, why,
                    body[max(0, m.start() - 60): m.end() + 60])

    for t, urls in seo_titles.items():
        if len(urls) > 1:
            for u in urls:
                add("error", "duplicate-title", u, f"Title shared by {len(urls)} live products", t)
    for d, urls in seo_descs.items():
        if len(urls) > 1 and d:
            for u in urls:
                add("warning", "duplicate-meta-description", u, f"Meta description shared by {len(urls)} products", d[:160])

    sh = {u: shingles(b) for u, b in bodies.items()}
    urls = sorted(sh)
    for i, u in enumerate(urls):
        for v in urls[i + 1:]:
            j = jaccard(sh[u], sh[v])
            if j >= a.dup_threshold:
                add("warning", "near-duplicate-description", u, f"{j:.0%} 5-gram overlap with {v}", v)

    # ---------- collections ----------
    col_desc = C.defaultdict(list)
    for c in COL:
        url = f"{STORE}/collections/{c['handle']}"
        prods = c.get("products", {}).get("nodes", [])
        live_members = [x for x in prods if x["status"] == "ACTIVE" and x.get("onlineStoreUrl")]
        if not c.get("pub"):
            continue
        if c["handle"] == "frontpage":
            continue
        if not live_members:
            add("error", "collection-published-empty", url,
                f"Published collection shows 0 live products ({len(prods)} members, all draft/unlisted)",
                ", ".join(x["handle"] for x in prods[:6]))
            continue
        if len(live_members) < 3:
            add("notice", "collection-thin", url, f"Only {len(live_members)} live product(s)")
        d = text(c.get("descriptionHtml"))
        wc = len(words(d))
        if not (c["seo"]["title"] or "").strip():
            add("warning", "collection-seo-title-missing", url, "No SEO title; falls back to collection title", c["title"])
        if not (c["seo"]["description"] or "").strip():
            add("warning", "collection-meta-description-missing", url,
                "No meta description; falls back to collection description", d[:160])
        if wc == 0:
            add("warning", "collection-no-description", url, "No collection description copy")
        elif TEMPLATED_COLLECTION.search(d):
            add("warning", "collection-templated-description", url, "Placeholder template description", d)
        elif wc < 40:
            add("notice", "collection-short-description", url, f"Collection description {wc} words", d)
        col_desc[(c["seo"]["description"] or d[:320]).lower()].append(url)
    for d, urls in col_desc.items():
        if len(urls) > 1 and d:
            for u in urls:
                add("warning", "duplicate-collection-meta", u, f"Meta description shared by {len(urls)} collections", d[:160])

    sev_rank = {"error": 0, "warning": 1, "notice": 2}
    rows.sort(key=lambda r: (sev_rank[r["severity"]], r["rule"], r["url"]))
    with open(os.path.join(a.out, "findings.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["severity", "rule", "url", "detail", "evidence"])
        w.writeheader()
        w.writerows(rows)
    summary = {
        "live_products": len(live), "products_total": len(P),
        "status": dict(C.Counter(p["status"] for p in P)),
        "published_collections": sum(1 for c in COL if c.get("pub")),
        "by_rule": dict(C.Counter((r["severity"], r["rule"]) for r in rows).most_common()),
    }
    summary["by_rule"] = {f"{k[0]}:{k[1]}": v for k, v in summary["by_rule"].items()}
    json.dump(summary, open(os.path.join(a.out, "summary.json"), "w"), indent=2)
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
