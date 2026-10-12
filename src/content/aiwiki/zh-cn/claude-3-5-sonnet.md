---
title: "Claude 3.5 Sonnet"
titleEn: "Claude 3.5 Sonnet"
slug: "claude-3-5-sonnet"
lang: "zh-cn"
summary: "Anthropic 于 2024 年发布的模型。Anthropic 已于 2025 年 10 月 28 日停止提供 Claude 3.5 Sonnet API。"
topic: "ai-vibe-coding"
aliases:
  - "Sonnet 3.5"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "claude"
  - "vibe-coding"
  - "ai-pair-programming"
lastReviewedAt: "2026-10-12"
---

# Claude 3.5 Sonnet

> 一句话定义：Anthropic 于 2024 年发布、并于 2025 年从 Claude API 下线的模型。

## 科普速读

- **它是什么：** Claude 3.5 Sonnet 是 Anthropic 已停用的旧型号。
- **适合什么场景：** 理解旧评测结果或规划 API 迁移。
- **主要边界：** Anthropic 已于 2025 年 10 月 28 日将其从 API 下线。

## 概览

Claude 3.5 Sonnet 属于 Anthropic 在 2024 年推出的模型代际。团队在阅读旧评测或维护引用该型号的软件时，仍会遇到这个名称。

## 核心定义

Claude 3.5 Sonnet 是 Anthropic Claude 3.5 家族中的通用模型。Anthropic 曾将它用于编程、写作和视觉输入等任务。它过去的能力不能代表现在的 Claude 型号。

## 背景与发展

Anthropic 于 2024 年 6 月发布 Claude 3.5 Sonnet。之后，Anthropic 推出了新的模型代际。Claude API 的下线日期是 2025 年 10 月 28 日。

## 工作机制（How It Works）

Claude 3.5 Sonnet 和其他语言模型一样，会处理输入上下文并生成结果。应用决定发送什么提示词、工具和文件。模型不会独立验证代码或解释是否正确。

## 在软件测试与开发中的应用

- **历史评测：** 使用保存的输出或经批准且仍可用的复现环境重跑旧测试，并注明环境和型号。
- **迁移检查：** 查找引用旧模型 ID 的代码，再用代表性评测集比较可用的替代型号。
- **理解基准结果：** 比较公开分数前，先核对任务、日期和评分方法。

## 优势与局限

Claude 3.5 Sonnet 发布时，是 Anthropic 模型系列中的一个重要版本。历史报告可以帮助解释当时的工具选择。Claude API 已不再提供该型号。它的评测结果不能预测新型号的表现。

## 与相近术语对比

| 术语 | 含义 |
|---|---|
| Claude 3.5 Sonnet | Anthropic 于 2024 年推出、现已从 API 下线的型号 |
| Claude 模型家族 | Anthropic 持续变化的模型集合 |
| 模型版本 | 行为和生命周期各自独立的具体模型标识 |

## 实施建议（Best Practices）

- 把这个名称作为历史型号处理。
- 迁移 API 集成前，查看 Anthropic 的生命周期说明。
- 保存旧测试使用的模型 ID、提示词和评测日期。
- 使用替代型号前，先重新评测。

## 常见误区（Pitfalls）

不要把旧版上下文限制、基准分数或 API 示例直接用于新集成。它们可能对应已下线的型号或旧接口。

## FAQ

### 还能通过 Anthropic API 调用 Claude 3.5 Sonnet 吗？

不能。Anthropic 将其下线日期列为 2025 年 10 月 28 日。对已下线型号的请求会失败。

### 为什么还保留这个词条？

这个名称仍会出现在旧代码、报告和基准讨论中。词条说明它的历史用途和 API 生命周期边界。

## 相关资源

### 相关词条

- [Claude](/zh-cn/AIWiki/claude/)
- [AI 配对编程](/zh-cn/AIWiki/ai-pair-programming/)
- [模型可选性](/zh-cn/AIWiki/model-optionality/)

### 参考资料

- [Anthropic：Claude 3.5 Sonnet 发布说明](https://www.anthropic.com/news/claude-3-5-sonnet)
- [Anthropic：模型下线说明](https://docs.anthropic.com/en/docs/about-claude/model-deprecations)
- [Anthropic：模型概览](https://platform.claude.com/docs/en/models/overview)
