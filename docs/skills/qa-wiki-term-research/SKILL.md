---
name: qa-wiki-term-research
description: Research and enrich QA wiki term entries from an English term list using Google, Wikipedia, Medium, and QA engineering sources. Use when building or refining term pages from docs/requirements/qa-wiki-term-plan-v1.md and outputting structured drafts to docs/temporary/qa-wiki-temp.
---

# QA Wiki Term Research

Run this skill when you need to turn planned QA terms into evidence-based wiki drafts.

## Workflow

### 1) Load scope and template

1. Read term scope from:
- `docs/requirements/qa-wiki-term-plan-v1.md`

2. Read writing template from:
- `docs/architecture/qa-wiki-term-template-zh-cn.md`

3. If template file is missing, use existing wiki structure from `src/content/wiki/*.md` as fallback.

### 2) Build term list

Use:
- `python3 scripts/extract_terms_from_plan.py --plan <path> --out <json>`

The script extracts Chinese/English term pairs and slug candidates.

### 3) Create research workbooks

Use:
- `python3 scripts/create_term_workbooks.py --terms <json> --out-dir docs/temporary/qa-wiki-temp`

This creates one markdown workbook per term with fixed capture sections.

### 4) Research each term (English term as primary query)

For each term, collect **10 items per source family**:

1. Google (general web results)
2. Wikipedia (term or nearest concept pages)
3. Medium (engineering write-ups)
4. QA professional sources (ISTQB, Ministry of Testing, Google Testing Blog, Martin Fowler, Atlassian, BrowserStack, etc.)

Rules:
- Use English term as the primary query string.
- Keep URLs and short evidence notes.
- Prefer canonical/official pages when available.
- If exact term is sparse, capture nearest accepted term and mark as “adjacent concept”.

### 5) Synthesize into wiki-ready content

For each term, write:
- Standardized definition
- Scope and non-scope
- Method steps
- Inputs/outputs
- Metrics and thresholds
- Common pitfalls and countermeasures
- Related terms mapped to existing `src/content/wiki` slugs
- References grouped by source family

### 6) Output format

Write term files to:
- `docs/temporary/qa-wiki-temp/<slug>.md`

Each file must include:
- Frontmatter (`title`, `description`, `section`, `related`, `order`)
- TOC block
- Structured sections aligned with template
- Source evidence appendix with grouped links

## Quality bar

- Keep statements evidence-backed.
- Avoid marketing language.
- Prefer practical, test-engineering-centric explanations.
- Make every section actionable for QA engineers.
- Keep Chinese prose concise and professional.

## Resources

### scripts/
- `extract_terms_from_plan.py`: extract term pairs from the plan.
- `create_term_workbooks.py`: initialize per-term research markdown workbooks.

### references/
- `source-priority.md`: source ranking and acceptance criteria.
