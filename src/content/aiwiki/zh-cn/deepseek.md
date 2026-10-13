---
title: "DeepSeek"
titleEn: "DeepSeek"
slug: "deepseek"
lang: "zh-cn"
summary: "DeepSeek 开发的 AI 模型与服务。不同版本的权重开放情况和使用条款可能不同。"
topic: "ai-vibe-coding"
aliases:
  - "DeepSeek AI"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "large-language-models-llms"
  - "small-language-models-slms"
  - "qwen"
lastReviewedAt: "2026-10-12"
---

# DeepSeek

> 一句话定义：DeepSeek 开发的 AI 模型与服务家族。

## 科普速读

- **它是什么：** DeepSeek 是持续更新的模型与 AI 服务家族。
- **适合什么场景：** 评估其支持的语言、编码或推理模型。
- **主要边界：** 访问方式、权重、能力和条款因版本而异。

## 概览

团队可以用一组固定缺陷报告比较 DeepSeek 与其他模型。使用相同提示词和评分规则，便于观察输出差异。

## 核心定义

DeepSeek 指一家 AI 研究与产品机构，也指其模型生态。该生态包含托管服务；部分版本也提供可下载权重。不能假设每个型号都同时支持这两种方式。

## 背景与发展

DeepSeek 发布过通用语言、代码和推理任务相关模型。型号和可用性会变化。API 文档会列出该接口当前提供的型号。

## 工作机制（How It Works）

托管模型通过服务接口接收请求。可下载模型则可以在符合硬件和软件要求的环境中运行。两种方式在模型版本、配置、隐私和成本上可能不同。

## 在软件测试与开发中的应用

- **辅助代码审查：** 提供范围有限且相关的代码片段，让模型提出潜在缺陷，再逐项验证。
- **生成测试：** 根据规格请求测试思路，再实际运行并复核。
- **比较模型：** 对选定型号运行相同工程任务，比较证据，不只比较语气或自信程度。

## 优势与局限

根据发布版本，DeepSeek 生态提供多种模型访问方式。本地部署可以增加团队对数据流的控制，但也需要基础设施和运维。使用托管 API 时，则要单独核对数据处理、可用性和价格条款。

## 与相近术语对比

| 术语 | 含义 |
|---|---|
| DeepSeek 模型 | DeepSeek 发布的具体型号 |
| DeepSeek API | 提供受支持模型 ID 的托管接口 |
| 开放权重模型 | 按已声明条款提供模型权重的版本 |

## 实施建议（Best Practices）

- 查看当前 API 型号列表或发布页面。
- 阅读具体模型权重对应的许可证和使用条款。
- 固定模型 ID，并记录评测日期。
- 使用相同任务和验收标准比较模型。

## 常见误区（Pitfalls）

请求格式兼容不代表两个服务的行为相同。能下载模型权重，也不代表所有用途或再分发都获准。

## FAQ

### 每个 DeepSeek 模型都能本地部署吗？

不能。请查看具体版本的权重开放情况和许可条款。

### DeepSeek 是否总有一个最适合编程的型号？

不能一概而论。应使用代表性代码任务和测试比较具体版本。

## 相关资源

### 相关词条

- [GPT](/zh-cn/AIWiki/gpt/)
- [推理模型](/zh-cn/AIWiki/reasoning-models/)
- [小语言模型](/zh-cn/AIWiki/small-language-models-slms/)

### 参考资料

- [DeepSeek API：模型列表](https://api-docs.deepseek.com/api/list-models/)
- [DeepSeek API 文档](https://api-docs.deepseek.com/)
