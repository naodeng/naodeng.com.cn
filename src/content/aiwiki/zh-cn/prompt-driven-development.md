---
title: "提示词驱动开发（PDD）"
titleEn: "Prompt-Driven Development (PDD)"
slug: "prompt-driven-development"
lang: "zh-cn"
summary: "将提示词设计视为核心工程产物，通过提示词驱动代码生成与迭代改进的开发方法。"
topic: "ai-vibe-coding"
aliases:
  - "PDD"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "vibe-coding"
  - "context-window-management"
  - "skill"
lastReviewedAt: "2026-10-12"
---
# 提示词驱动开发（PDD）

## 科普速读

- **它是什么：** 提示词驱动开发通过书面指令引导 AI 辅助的软件工作。
- **适合什么场景：** 重复执行范围明确的任务，或探索实现方案。
- **主要边界：** 提示词不能替代需求、代码评审或测试。

## 概览

团队可以保存一条用于评审测试改动的提示词，写明项目上下文、评审标准和预期报告。团队仍需检查结果。

## 核心定义

提示词驱动开发（PDD）是一种描述性做法，把提示词作为 AI 辅助工作流的重要组成部分。提示词可以指导代码生成、分析或测试。该术语没有统一认可的流程或标准。

## 背景与发展

提示词是向模型提供指令和上下文的一种方式。有些团队会保存重复使用的提示词；另一些团队只在单次交互中编写提示词。这些做法不要求固定的开发生命周期。

## 工作机制（How It Works）

1. 说明任务和约束。
2. 提供相关代码、示例或项目规则。
3. 请模型生成输出或提出改动。
4. 检查结果并运行相关验证。
5. 只有反复出现的问题表明指令需要调整时，才更新提示词。

## 在软件测试与开发中的应用

可以用提示词起草测试提纲、解释错误或提出范围明确的代码改动。重复执行的任务可以保存提示词模板，并列明输入和评审标准。

## 优势与局限

清晰的提示词可以让请求更容易复用和评审。模型版本和上下文变化会导致结果不同。团队也可能没有写出提示词所依赖的假设。

## 与相近术语对比

提示词驱动开发描述在软件工作中使用指令的做法。提示词工程关注如何设计提示词。氛围编程描述非正式、迭代式的 AI 辅助编码。测试驱动开发通过测试指导实现，但不依赖提示词。

## 实施建议（Best Practices）

说明预期行为、约束和验收检查。格式要求严格时提供示例。重复工作流中的提示词可以进行版本管理。评审生成代码并运行测试。

## 常见误区（Pitfalls）

不要把提示词当成需求的唯一来源。不要假设同一条提示词在不同模型或版本上会产生完全相同的结果。提示词写得详细，也不能成为跳过评审的理由。

## FAQ

### 提示词驱动开发是正式标准吗？

不是。它描述一类较广泛的做法。团队应自行定义提示词格式和验证步骤。

## 相关资源

### 相关词条

- [vibe-coding](https://inaodeng.com/zh-cn/AIWiki/vibe-coding/)
- [context-window-management](https://inaodeng.com/zh-cn/AIWiki/context-window-management/)
- [skill](https://inaodeng.com/zh-cn/AIWiki/skill/)

### 参考资料
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
