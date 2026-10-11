# 测试百科词条格式说明

`src/content/wiki/*.md` 与 `src/content/wiki/en/*.md` 分别存放中文、英文 Wiki 词条，用于 `/zh-cn/wiki/` 与 `/en/wiki/`。两种语言按相同 slug 配对；新增或修改内容时检查标题、目录和相关词条是否同步。

## Frontmatter

中文词条示例：

```yaml
---
title: "中文名称 ｜ English Name"
description: "简短的中文摘要，用于 SEO。"
section: "A"
related:
  - another-term
order: 0
---
```

英文词条示例：

```yaml
---
title: "English Name"
description: "A concise English summary for search results."
section: "A"
related:
  - another-term
order: 0
---
```

- **title**：与正文 H1 完全一致；中文使用“中文 ｜ English”，英文只写英文名称。
- **description**：用词条对应语言写 1–2 句完整摘要，并以句末标点收尾，便于搜索结果理解正文。
- **section**：侧栏分组首字母（A–Z 或 `#`）。
- **related**：本站 Wiki 中可用的同语言词条 slug，不要留下空项或自引用。
- **order**：同字母组内的排序值，可选。

## 正文与目录

- 全文仅保留一个 H1，且与 frontmatter 的 `title` 一致。
- H2 至 H4 用于正文层级。TOC 使用 `<!-- TOC START -->` 与 `<!-- TOC END -->` 包围；运行 `npm run wiki:toc:refresh` 可按标题更新锚点。
- 标题、摘要、正文、目录和导航文案应使用页面语言。代码、产品名与标准名称按其正式写法保留。
- 列表、表格和代码示例应语义完整；不要留下抓取切碎的短行、不可用的图片占位或重复段落。

## 内部链接

- 中文 Wiki 互链使用 `/zh-cn/wiki/<slug>/`。
- 英文 Wiki 互链使用 `/en/wiki/<slug>/`。
- 链接 slug 与对应语言目录中的 Markdown 文件名一致；中英配对页使用相同 slug。
- 只有某语言确实没有对应词条时才保留普通术语文字，不要链接到错误词条或外部旧页面。

## 许可与署名

Wiki 页面使用本站 PolyForm Noncommercial License 1.0.0。英文首页提供版权/许可入口；继续保留 QA Glossary Wiki 内容集的来源署名。
