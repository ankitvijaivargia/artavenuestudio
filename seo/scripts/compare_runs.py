#!/usr/bin/env python3
"""
Compare two catalog_audit.py runs and label every finding:
  new       — in the current run, not in the previous run (regression or new page)
  resolved  — in the previous run, not in the current run
  ongoing   — in both

A finding is identified by (rule, url). Writes comparison.csv and prints counts.

Usage:
  python3 seo/scripts/compare_runs.py reports/2026-10-13-baseline reports/2026-10-20 --out reports/2026-10-20
"""
import argparse, csv, os, collections as C


def load(d):
    with open(os.path.join(d, "findings.csv")) as f:
        return {(r["rule"], r["url"]): r for r in csv.DictReader(f)}


ap = argparse.ArgumentParser()
ap.add_argument("previous")
ap.add_argument("current")
ap.add_argument("--out", required=True)
a = ap.parse_args()
prev, cur = load(a.previous), load(a.current)
rows = []
for k, r in cur.items():
    rows.append(dict(r, lifecycle="ongoing" if k in prev else "new"))
for k, r in prev.items():
    if k not in cur:
        rows.append(dict(r, lifecycle="resolved"))
order = {"new": 0, "resolved": 1, "ongoing": 2}
rows.sort(key=lambda r: (order[r["lifecycle"]], r["severity"], r["rule"], r["url"]))
os.makedirs(a.out, exist_ok=True)
with open(os.path.join(a.out, "comparison.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["lifecycle", "severity", "rule", "url", "detail", "evidence"])
    w.writeheader()
    w.writerows(rows)
cnt = C.Counter((r["lifecycle"], r["rule"]) for r in rows if r["lifecycle"] != "ongoing")
print("new:", sum(1 for r in rows if r["lifecycle"] == "new"),
      "| resolved:", sum(1 for r in rows if r["lifecycle"] == "resolved"),
      "| ongoing:", sum(1 for r in rows if r["lifecycle"] == "ongoing"))
for (life, rule), n in sorted(cnt.items()):
    print(f"  {life:9} {rule:40} {n}")
