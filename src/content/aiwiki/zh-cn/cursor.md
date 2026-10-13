---
title: "Cursor"
titleEn: "Cursor"
slug: "cursor"
lang: "zh-cn"
summary: "Cursor 是集成 AI 辅助功能的代码编辑器和编码 Agent，具体功能取决于当前版本和设置。"
topic: "ai-vibe-coding"
aliases:
  - "Cursor IDE"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rules-cursorrules"
  - "vibe-coding"
  - "ai-pair-programming"
lastReviewedAt: "2026-10-12"
---
# Cursor

## 科普速读

- **它是什么：** Cursor 是一款带有 AI 辅助功能的代码编辑器。
- **适合什么场景：** 在编辑器工作流中询问代码问题或请求修改。
- **主要边界：** 功能和项目上下文取决于产品版本与设置。

## 概览

开发者可以请 Cursor 解释函数或提出修改建议。采纳前，应检查代码上下文并审阅生成的差异。

## 核心定义

Cursor 是一款启用 AI 功能的代码编辑器。它将编辑工具与代码补全、代码问答或改动建议等功能结合。具体功能可能随产品版本变化。

## 背景与发展

Cursor 在常见编辑器工作流中加入 AI 辅助功能。用户可以在同一环境中操作文件、提供项目上下文并查看模型响应。具体功能能访问哪些数据和文件，取决于设置。

## 工作机制（How It Works）

1. 用户打开项目并提出问题或任务。
2. 编辑器向 AI 功能提供选定代码或项目上下文。
3. 模型返回建议或拟议改动。
4. 用户检查、修改或拒绝结果。
5. 用户运行相关检查。

实际提供的上下文和控制方式取决于当前版本及配置。

## 在软件测试与开发中的应用

可以用编辑器解释陌生代码、起草小范围重构、生成测试提纲或检查选定改动。应提供相关文件和约束。

## 优势与局限

把编辑和 AI 辅助放在同一工作流中，可以减少上下文切换。建议可能漏掉文件、误解项目约定或使用过时 API。编辑器功能不能取代测试和代码评审。

## 与相近术语对比

Cursor 是一款产品。AI 代码编辑器是一类开发工具。代码补全功能会建议文本；Agent 功能可能连续执行多个操作。不同产品的功能名称和边界各不相同。

## 实施建议（Best Practices）

查看产品当前设置和数据控制项。把任务控制在便于检查的范围内。审阅代码差异、运行相关测试，并确认改动遵守项目规则。

## 常见误区（Pitfalls）

不要假设模型已索引或读取所有文件。未经检查不要接受改动。确认生成代码符合仓库当前约定。

## FAQ

### Cursor 能自动搜索并修改整个仓库吗？

可用上下文和操作取决于产品版本、设置和任务。应确认该功能实际使用了哪些文件，并审阅每项改动。

## 相关资源

### 相关词条

- [rules-cursorrules](https://inaodeng.com/zh-cn/AIWiki/rules-cursorrules/)
- [vibe-coding](https://inaodeng.com/zh-cn/AIWiki/vibe-coding/)
- [ai-pair-programming](https://inaodeng.com/zh-cn/AIWiki/ai-pair-programming/)

### 参考资料
- [Cursor official website](https://www.cursor.com/)
- [Cursor documentation](https://docs.cursor.com/)
