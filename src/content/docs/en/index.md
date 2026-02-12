---
title: Documentation
description: "Getting started and guides: quick start, project structure, configuration, and routing."
section: Start
order: 0
---

# Documentation

Welcome to the documentation. Start here to learn the basics and common guides.

## Quick start

The sidebar lists all pages under Getting started and Guides. This page serves as the docs overview; you can add installation or setup steps here later.

## Writing docs in Markdown

Add `.md` or `.mdx` files under `src/content/docs/en/` or `src/content/docs/zh-cn/`. Use frontmatter:

- **title** – page title
- **description** – meta description
- **section** – sidebar group (e.g. "Start", "Guides")
- **order** – sort order within the group (lower = first)

The sidebar is generated from the collection. The URL slug is the filename without extension (e.g. `why-astro.md` → `/docs/why-astro/`).
