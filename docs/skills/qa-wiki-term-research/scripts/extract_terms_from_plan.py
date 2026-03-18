#!/usr/bin/env python3
import argparse
import json
import re
from pathlib import Path

TERM_RE = re.compile(r"^\s*\d+\.\s*(.+?)（([^）]+)）\s*$")
TERM_RE_ASCII = re.compile(r"^\s*\d+\.\s*(.+?)\(([^\)]+)\)\s*$")


def slugify(en: str) -> str:
    s = en.strip().lower().replace("/", " ")
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"\s+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def parse_terms(text: str):
    terms = []
    for line in text.splitlines():
        m = TERM_RE.match(line) or TERM_RE_ASCII.match(line)
        if not m:
            continue
        zh = m.group(1).strip()
        en = m.group(2).strip()
        terms.append({
            "zh": zh,
            "en": en,
            "slug": slugify(en),
        })

    # de-dup by slug
    uniq = []
    seen = set()
    for t in terms:
        if t["slug"] in seen:
            continue
        seen.add(t["slug"])
        uniq.append(t)
    return uniq


def main():
    ap = argparse.ArgumentParser(description="Extract QA terms from plan markdown")
    ap.add_argument("--plan", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    plan = Path(args.plan)
    out = Path(args.out)
    text = plan.read_text(encoding="utf-8")

    terms = parse_terms(text)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({"terms": terms}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Extracted {len(terms)} terms -> {out}")


if __name__ == "__main__":
    main()
