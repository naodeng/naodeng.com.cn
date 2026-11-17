# Frontmatter 标准（博客发布）

本项目 `blog` collection 兼容字段（见 `src/content.config.ts`）：

- `title` (string)
- `description` (string)
- `date` (date)
- `updated` (date, optional)
- `author` (string, optional)
- `tags` (string[], optional, 1~3 recommended)
- `categories` (string[], optional)
- `series` (string[], optional)

## 推荐模板

```yaml
---
title: "<文章标题>"
description: "<一句话摘要，面向搜索与列表页>"
date: 2026-03-18T00:00:00.000Z
author: "nao.deng"
tags: ["AI 测试", "工具名", "主题词"]
categories: ["AI", "测试实践"]
series: ["<系列名>"]
---
```

## 命名建议

- 标题使用中文主标题，必要时包含英文工具名。
- `series` 在整个系列保持完全一致。
- `tags` 控制在 2-3 个，避免过宽泛。
- 新稿默认添加 `draft: true`；用户明确要求发布时再改状态。双语配对稿的日期和草稿状态保持一致。
- 用户要求沿用现有排期时，每个日期最多两篇、跳过周末并向后使用空档；中英文配对算一篇文章。
