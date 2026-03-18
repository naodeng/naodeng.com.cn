---
name: blog-series-drafting
description: Create and polish publish-ready Chinese blog series drafts for software testing topics (especially tool/framework application series). Use when user asks to draft a multi-part series like 介绍/入门/从0到1/进阶/CI-CD/更多用法, with references and consistent standards.
---

# Blog Series Drafting

Use this skill when the user asks for recurring blog drafting work, especially software-testing series that need:

- a 6-part progression: 介绍, 入门, 从0到1, 进阶, CI/CD, 更多用法
- consistent structure and tone
- source-grounded claims
- publish-ready markdown drafts and optional frontmatter

## Output Location Rule

Default output path:

- `docs/temporary/blog/<series-slug>/`

Default files:

- `00-<slug>-introduction.md`
- `01-<slug>-getting-started.md`
- `02-<slug>-from-0-to-1.md`
- `03-<slug>-advanced.md`
- `04-<slug>-in-ci-cd.md`
- `05-<slug>-more-use-cases.md`
- `README.md`

## Mandatory Workflow

1. Clarify input quickly from user request (topic, language, audience, source links, target state: 草稿/发布版).
2. Read official sources first. For technical claims, prefer vendor docs and repository README/changelog.
3. Build or update the 6-part series using the templates in `references/series-template-zh-cn.md`.
4. Keep structure consistent across articles:
   - `## 文章定位`
   - `## 导读`
   - `## 一...` to `## 五...`
   - `## 系列导航`
   - `## 参考资料`
5. If user asks for publish-ready output, apply frontmatter standard from `references/frontmatter-standard.md`.
6. Run final QA checklist from `references/release-checklist.md` before concluding.

## Writing Standards

- Use direct, practical language with minimal fluff.
- Keep each article independently readable, while preserving series continuity.
- Avoid overclaiming product capabilities not present in official docs.
- Distinguish clearly between facts from docs and suggested practices.
- Keep terminology consistent across all 6 files.

## Quality Gates (must pass)

- Name consistency: product/tool naming is correct in title, body, and filenames.
- Claim consistency: no contradiction between different articles.
- Navigation consistency: previous/next links are correct.
- References present: each article includes source links.
- If frontmatter exists: schema-compatible fields and values.

## Optional Add-ons

When requested, also provide:

- migration-ready files under `src/blog/zh-cn/<Category>/`
- bilingual drafts (`zh-cn` + `en`)
- review report with severity-ranked findings

## Quick Scaffold Command

Use the bundled script to initialize a 6-part series quickly:

```bash
python3 docs/skills/blog-series-drafting/scripts/init_series.py \
  --root /Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn \
  --slug <series-slug> \
  --series-title "<系列中文标题>" \
  --status "草稿"
```

Example:

```bash
python3 docs/skills/blog-series-drafting/scripts/init_series.py \
  --root /Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn \
  --slug page-agent-testing \
  --series-title "Page Agent 在软件测试中的应用" \
  --status "发布版"
```
