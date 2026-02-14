---
title: 文档
description: 入门与指南：快速开始、项目结构、配置与路由。
section: 入门
order: 0
---

# 文档

欢迎使用文档中心。从这里开始了解入门步骤与常用指南。

## 快速开始

左侧导航列出了入门与指南中的各篇文档。本页为文档首页，可在此展示概览或安装说明。

## 用 Markdown 写文档

在 `src/content/docs/zh-cn/` 或 `src/content/docs/en/` 下添加 `.md` / `.mdx` 文件即可。在 frontmatter 中设置：

- **title** – 页面标题
- **description** – 页面描述
- **section** – 侧栏分组（如「入门」「指南」）
- **order** – 同组内排序（数字越小越靠前）

侧栏会根据文档集合自动生成。URL 为文件名（不含扩展名），例如 `why-astro.md` 对应 `/docs/why-astro/`。
