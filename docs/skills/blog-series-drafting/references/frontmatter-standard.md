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
