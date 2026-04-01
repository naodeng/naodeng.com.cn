---
name: blog-series-drafting
description: Create and polish publish-ready bilingual blog series drafts for software testing topics (especially tool/framework application series). Use when user asks to draft a multi-part series like 介绍/入门/从0到1/进阶/CI-CD/更多用法, with references and consistent standards.
---

# Blog Series Drafting

Use this skill when the user asks for recurring blog drafting work, especially software-testing series that need:

- a 6-part progression: 介绍, 入门, 从0到1, 进阶, CI/CD, 更多用法
- Chinese and English versions for every article
- source collection from user-provided links and their internal links
- consistent structure and tone
- source-grounded claims
- publish-ready markdown drafts and optional frontmatter

## Output Location Rule

Default output path:

- `docs/temporary/blog/<series-slug>/`

Default files:

- `zh-cn/00-<slug>-introduction.md`
- `zh-cn/01-<slug>-getting-started.md`
- `zh-cn/02-<slug>-from-0-to-1.md`
- `zh-cn/03-<slug>-advanced.md`
- `zh-cn/04-<slug>-in-ci-cd.md`
- `zh-cn/05-<slug>-more-use-cases.md`
- `en/00-<slug>-introduction.md`
- `en/01-<slug>-getting-started.md`
- `en/02-<slug>-from-0-to-1.md`
- `en/03-<slug>-advanced.md`
- `en/04-<slug>-in-ci-cd.md`
- `en/05-<slug>-more-use-cases.md`
- `README.md`

## Mandatory Workflow

1. Clarify input quickly from user request (topic, audience, source links, target state: 草稿/发布版). Unless the user explicitly narrows scope, default to bilingual output (`zh-cn` + `en`).
2. When the user provides links, read every directly provided link first.
3. For each provided link, continue into the internal links that materially explain the feature, workflow, API, examples, limitations, migration notes, or related setup. Avoid unrelated marketing, pricing, login-only, or duplicate pages.
4. Build a source set from both levels before drafting. For technical claims, prefer official docs and repository README/changelog when they appear in the provided links or their internal links.
5. Build or update the 6-part series in both languages using:
   - `references/series-template-zh-cn.md`
   - `references/series-template-en.md`
6. Keep the Chinese and English files aligned article-by-article:
   - same progression and numbering
   - same core claims, examples, and references
   - language-appropriate titles and summaries rather than literal sentence-by-sentence translation
7. Keep structure consistent across articles:
   - Chinese files: `## 文章定位`, `## 导读`, `## 一...` to `## 五...`, `## 系列导航`, `## 参考资料`
   - English files: `## Article Positioning`, `## Overview`, `## One...` to `## Five...`, `## Series Navigation`, `## References`
8. In `## 参考资料` / `## References`, include the key directly provided links and the most important internal links actually used for claims.
9. If user asks for publish-ready output, apply frontmatter standard from `references/frontmatter-standard.md` in both languages.
10. Run final QA checklist from `references/release-checklist.md` before concluding.

## Writing Standards

- Use direct, practical language with minimal fluff.
- Keep each article independently readable, while preserving series continuity.
- Avoid overclaiming product capabilities not present in official docs.
- Distinguish clearly between facts from docs and suggested practices.
- Keep terminology consistent across all 6 files.
- Do not let the English version drift from the Chinese version in scope or conclusions.
- If linked pages disagree, prefer the more specific or newer official page and call out the conflict instead of guessing.

## Quality Gates (must pass)

- Name consistency: product/tool naming is correct in title, body, and filenames.
- Claim consistency: no contradiction between different articles.
- Bilingual consistency: every Chinese article has a matching English article with the same intent and references.
- Navigation consistency: previous/next links are correct.
- References present: each article includes source links.
- Link coverage: user-provided links were reviewed, and key first-level internal links were followed where they affected the draft.
- If frontmatter exists: schema-compatible fields and values.

## Optional Add-ons

When requested, also provide:

- migration-ready files under `src/blog/zh-cn/<Category>/`
- migration-ready files under `src/blog/en/<Category>/`
- review report with severity-ranked findings

## Quick Scaffold Command

Use the bundled script to initialize a 6-part series quickly:

```bash
python3 docs/skills/blog-series-drafting/scripts/init_series.py \
  --root /Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn \
  --slug <series-slug> \
  --series-title "<系列中文标题>" \
  --series-title-en "<Series English Title>" \
  --status "草稿"
```

Example:

```bash
python3 docs/skills/blog-series-drafting/scripts/init_series.py \
  --root /Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn \
  --slug page-agent-testing \
  --series-title "Page Agent 在软件测试中的应用" \
  --series-title-en "Applying Page Agent in Software Testing" \
  --status "发布版"
```
