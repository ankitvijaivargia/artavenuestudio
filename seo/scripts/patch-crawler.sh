#!/usr/bin/env bash
# Patch seo-crawl-audit 0.15.1 so an EMPTY child sitemap (<urlset></urlset>) is accepted.
#
# Why: Shopify publishes sitemap_metaobject_pages_1.xml as an empty <urlset> when a store has no
# metaobject pages. seo-crawl-audit 0.15.1 treats an empty urlset as "not a sitemap", throws, and
# discards the WHOLE sitemap — so every sitemap-based check silently runs on 1 page.
# Verified on www.artavenue.com (13 Oct 2026, run 38392748457) and reproduced locally.
#
# The patch is pinned to the exact minified code of 0.15.1 and FAILS the job if that code is not found,
# so a crawler upgrade can never skip it silently. Remove this script once upstream fixes the bug.
set -euo pipefail
CLI="$(npm root -g)/seo-crawl-audit/bundle/cli.js"
VERSION="$(node -p "require('$(npm root -g)/seo-crawl-audit/package.json').version")"
[ "$VERSION" = "0.15.1" ] || { echo "patch-crawler: expected 0.15.1, found $VERSION — review the patch"; exit 1; }
OLD='let a=ar(n?.urlset);if(a)return{kind:"urlset",locations:Ys(a.url)};throw new Error(`XML is not a sitemap urlset or sitemapindex: ${t}`)'
NEW='let a=ar(n?.urlset);if(a)return{kind:"urlset",locations:Ys(a.url)};if(n\&\&Object.prototype.hasOwnProperty.call(n,"urlset"))return{kind:"urlset",locations:[]};throw new Error(`XML is not a sitemap urlset or sitemapindex: ${t}`)'
COUNT="$(grep -cF "$OLD" "$CLI" || true)"
[ "$COUNT" = "1" ] || { echo "patch-crawler: target code found $COUNT times (expected 1) — not patching"; exit 1; }
node -e '
const fs=require("fs"); const [f,o,n]=process.argv.slice(1);
const s=fs.readFileSync(f,"utf8"); fs.writeFileSync(f, s.replace(o, n.replace(/\\&/g,"&")));
' "$CLI" "$OLD" "$NEW"
grep -qF 'hasOwnProperty.call(n,"urlset")' "$CLI" && echo "patch-crawler: empty-urlset patch applied to $CLI"
