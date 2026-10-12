---
title: "Gemini"
titleEn: "Gemini"
slug: "gemini"
lang: "zh-cn"
summary: "Google DeepMind 的生成式 AI 模型家族。不同型号和产品支持的输入、工具与能力边界并不相同。"
topic: "ai-vibe-coding"
aliases:
  - "Google Gemini"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "gpt"
  - "claude"
  - "large-language-models-llms"
lastReviewedAt: "2026-10-12"
---

# Gemini（Gemini）

> 一句话定义：Google DeepMind 的生成式 AI 模型家族。

## 科普速读

- **它是什么：** Gemini 是 Google 的生成式 AI 模型家族。
- **适合什么场景：** 使用支持相应能力的型号处理文本、代码或媒体任务。
- **主要边界：** 家族名称不能说明每个型号的限制或 API 行为。

## 概览

测试人员可以让 Gemini 模型检查界面截图，并列出可能的问题。提交缺陷前，仍要在应用中复现现象并保存证据。

## 核心定义

Gemini 是 Google DeepMind 开发的生成式 AI 模型家族。部分型号支持多种输入形式。具体能力取决于型号和提供模型的产品。

## 背景与发展

Google 于 2023 年 12 月发布 Gemini。此后，这个家族随着模型代际和产品不断变化。旧型号名称和旧规格不能代表所有当前模型。

## 工作机制（How It Works）

应用会把提示词和受支持的文件发送到模型接口。模型处理输入后返回结果，例如文字。部分接口也接受图片、音频或视频。输入格式和限制因型号而异。Google 并未公开每个型号的所有实现细节。

## 在软件测试与开发中的应用

- **检查界面截图：** 让支持视觉输入的模型描述可见的布局问题。提交缺陷前，要在应用中复现。
- **设计测试：** 提供需求，让模型列出候选测试用例。再按产品规则逐项核对。
- **归纳日志：** 让模型整理测试日志中的可能原因。用源码或执行轨迹确认根因。

## 优势与局限

Gemini 包含面向不同任务的模型和产品，部分型号支持多模态输入。这有助于团队在同一流程中处理文字、代码和视觉证据。模型仍可能漏看细节、误读图片或编造原因。可用性、数据处理方式和性能也取决于所选服务。

## 与相近术语对比

| 术语 | 含义 |
|---|---|
| Gemini 模型 | Google DeepMind 提供的模型 |
| Gemini 应用 | 使用模型并可能加入产品功能的 Google 应用 |
| AI 智能体 | 可在配置权限下选择工具并执行操作的系统 |

## 实施建议（Best Practices）

- 记录准确的模型 ID、接口和核对日期。
- 用有预期结果的代表性任务评测模型。
- 只发送完成任务所需的代码、日志或截图。
- 运行或合并生成的测试与代码前，先行复核。

## 常见误区（Pitfalls）

不要假设每个 Gemini 模型都支持所有媒体类型，或具有相同限制。上下文窗口很大，也不代表模型能在大型代码库中找到所有相关细节。

## FAQ

### 每个 Gemini 模型都支持图片、音频和视频吗？

不一定。请查看具体型号和接口的文档。

### 只看截图就能确认界面缺陷吗？

不能。模型可以提示检查方向；还需要人员或测试复现现象并确认原因。

## 相关资源

### 相关词条

- [GPT](/zh-cn/AIWiki/gpt/)
- [Claude](/zh-cn/AIWiki/claude/)
- [大语言模型](/zh-cn/AIWiki/large-language-models-llms/)

### 参考资料

- [Google：Introducing Gemini](https://blog.google/innovation-and-ai/technology/ai/google-gemini-ai/)
- [Google DeepMind 模型卡](https://deepmind.google/models/model-cards/)
- [Gemini API 模型列表](https://ai.google.dev/gemini-api/docs/models/)
