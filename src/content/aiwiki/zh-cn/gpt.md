---
title: "GPT（生成式预训练 Transformer）"
titleEn: "GPT (Generative Pre-trained Transformer)"
slug: "gpt"
lang: "zh-cn"
summary: "OpenAI 的生成式 AI 模型家族。不同型号和接口的能力并不相同。"
topic: "ai-vibe-coding"
aliases:
  - "GPT"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "codex"
  - "o1-o3"
  - "large-language-models-llms"
lastReviewedAt: "2026-10-12"
---

# GPT

> 一句话定义：OpenAI 对生成式预训练 Transformer 模型家族的命名。

## 科普速读

- **它是什么：** GPT 指 OpenAI 持续更新的模型家族。
- **适合什么场景：** 使用具体型号支持的文本、代码或多模态能力。
- **主要边界：** 家族名称不能指明具体型号或 API 功能。

## 概览

开发者可以让 GPT 模型根据需求草拟测试用例，再对照验收标准检查。这些用例仍是待复核的草稿。

## 核心定义

GPT 是“Generative Pre-trained Transformer”（生成式预训练 Transformer）的缩写。OpenAI 用 GPT 命名具有不同训练方式、输入形式和能力的模型。具体功能取决于型号和接口。

## 背景与发展

随着 OpenAI 不断发布模型，GPT 这个名称逐渐被广泛使用。现在该家族包含不同变体和面向特定任务的型号。某一代模型的描述不能代表整个家族。

## 工作机制（How It Works）

从高层看，GPT 模型处理输入上下文并预测输出 token。部分型号也能处理其他输入形式，或通过应用使用工具。应用决定可用的模型、指令、数据和工具。

## 在软件测试与开发中的应用

- **分析需求：** 让模型列出候选测试条件，再对照验收标准核对。
- **辅助编码：** 请求代码解释或小范围修改建议。检查差异并运行相关测试。
- **定位失败：** 让模型根据日志整理可能原因，再用执行轨迹和源码确认。

## 优势与局限

GPT 模型可通过产品和开发者接口处理多种任务。不同型号的能力和条款各有差异。流畅的回答仍可能出错；如果应用不提供私有或最新数据，模型也无法直接看到这些信息。

## 与相近术语对比

| 术语 | 含义 |
|---|---|
| GPT 模型 | OpenAI GPT 家族中的具体模型 |
| ChatGPT | 使用模型并可能加入产品功能的 OpenAI 产品 |
| OpenAI API | 开发者调用受支持模型和工具的接口 |

## 实施建议（Best Practices）

- 为明确任务选择具体型号。
- 将模型 ID 和 API 设置与评测结果一并记录。
- 用代表性测试集比较质量、延迟和成本。
- 使用生成的代码和测试用例前，先行复核。

## 常见误区（Pitfalls）

不要假设所有 GPT 型号具有相同的输入形式、上下文限制、工具支持或生命周期。请查看所用接口对应的型号文档。

## FAQ

### GPT 就是 ChatGPT 吗？

不是。GPT 是模型家族名称；ChatGPT 是一个可提供模型和其他功能的产品。

### GPT 会自动知道代码运行时的状态吗？

不会。应用需要运行代码或测试，并把结果证据提供给模型。

## 相关资源

### 相关词条

- [Claude](/zh-cn/AIWiki/claude/)
- [OpenAI o1 与 o3 模型](/zh-cn/AIWiki/o1-o3/)
- [大语言模型](/zh-cn/AIWiki/large-language-models-llms/)

### 参考资料

- [OpenAI：Models](https://platform.openai.com/docs/engines/chat-gpt)
- [OpenAI：GPT-4 技术报告](https://arxiv.org/abs/2303.08774)
