# AI Testing Real Value vs Hype Blog Design

## Intent

Turn the user's reviewed Chinese draft into a standalone bilingual blog post about where AI helps across the software testing lifecycle and where claims exceed the evidence. The attached draft is the primary content; the Ministry of Testing Moment and the Testkube lifecycle article are supporting sources.

## Scope

- Add Chinese and English MDX posts under the existing AI Testing blog area, using the site's frontmatter and visible-URL conventions.
- Preserve the draft's main arguments, stage-by-stage structure, engineering extensions, examples, tables, diagrams, attribution, and evidence caveats.
- Translate the Chinese article into English with matching sections, claims, caveats, and source links.
- Review and lightly edit the Chinese prose with the available `humanizer-zh` skill, preserving facts and author voice.
- Keep the existing 2024 AppAgent Day 2 posts unchanged.

## Non-goals

- Do not replace or rewrite the historical Day 2 AppAgent article.
- Do not add new research claims or present Testkube/vendor-reported figures as independently verified.
- Do not publish, deploy, or modify blog navigation or unrelated content.

## Approaches

1. **Add a standalone bilingual post — chosen by the user.** Preserves the historical AppAgent challenge entry and gives the reviewed draft its own page and English counterpart.
2. Replace the historical Day 2 post. Rejected because it would erase the original AppAgent write-up and alter a dated challenge record.

## Implementation and review

Use a concise slug based on `ai-testing-real-value-vs-hype` in the existing `src/blog/{zh-cn,en}/AI-Testing/` structure. Use the current publication date, `nao.deng`, and the existing AI Testing category conventions. Keep Mermaid diagrams and the JavaScript test example intact in Chinese; translate diagram labels and the example comment in English. Render external references as `Name: full URL` text, as required for blog portability.

After authoring both files, apply `humanizer-zh` to the Chinese prose and check that no factual qualifiers or distinct details were lost. Check metadata, headings, bilingual section order, links, and whitespace. Attempt the site build if dependencies are available; do not install dependencies or run tests as part of this content task.
