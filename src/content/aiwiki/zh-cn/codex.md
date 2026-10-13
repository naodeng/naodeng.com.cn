---
title: "Codex"
titleEn: "Codex"
slug: "codex"
lang: "zh-cn"
summary: "Codex 是 OpenAI 在不同代际中用于编码模型和产品的名称。"
topic: "ai-vibe-coding"
aliases:
  - "OpenAI Codex"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "gpt"
  - "o1-o3"
  - "ai-agent"
lastReviewedAt: "2026-10-12"
---

# Codex（OpenAI Codex）

> 一句话定义：Codex 是 OpenAI 在不同代际中用于编码模型和产品的名称。

## 科普速读

- **它是什么：** Codex 指 OpenAI 的代码模型发展历程及当前编码产品。
- **适合什么场景：** 区分 2021 年的 Codex 模型与后续的 Codex 工具和模型。
- **主要边界：** 这个名称涉及不同代际和产品，使用前应查阅当前文档。

## 概览

Codex 最初指 OpenAI 于 2021 年推出的代码生成模型。后来，OpenAI 又用这个名称指代编码工具和 Agent 工作流。阅读资料时，应先确认它指的是哪一种。

## 核心定义

Codex 是 OpenAI 多种编码系统使用过的名称。2021 年，OpenAI 推出 Codex 模型。该模型基于 GPT-3，并针对编程任务进行微调。之后，OpenAI 又将 Codex 用于可操作代码库和工具的编码产品。

模型根据输入生成代码。编码产品还可能提供工作区、终端、测试、评审或权限控制。不能把产品的全部行为都归因于某个模型。

## 背景与发展

OpenAI 于 2021 年推出 Codex 模型。它展示了自然语言转代码任务的可能性，也成为早期 GitHub Copilot 系统所使用模型的代称。

后来，OpenAI 将 Codex 这个名称用于编码工具和 Agent 工作流。模型、API 和当前产品是不同概念。它们的功能和可用性会变化。

## 工作机制（How It Works）

早期 Codex 模型从文本和代码中学习统计规律，再根据提示词生成后续内容。

当前编码产品可以把任务和选定的代码库上下文发送给模型。根据产品功能，Agent 还可以查看文件、提出改动、运行命令，并返回差异。产品负责控制工具和权限。模型本身不能证明改动有效。

## 在软件测试与开发中的应用

- **代码草稿：** 根据清晰的需求生成函数初稿。
- **测试框架：** 提出测试用例并生成待审核的初始代码。
- **代码解释：** 概括函数内容，或列出需要进一步调查的问题。
- **Agent 任务：** 如果产品支持工具，可以让 Agent 完成范围明确的改动并报告检查结果。

接收改动前，应评审差异并运行项目测试。

## 优势与局限

### 优势

- 早期 Codex 模型专注于编程任务。
- 当前编码产品可以把模型与代码库工具和工作流结合起来。
- 清晰的任务说明和有效上下文有助于检查生成代码。

### 局限与风险

- Codex 这个名称对应不同代际和产品。
- 生成的代码可能有安全、逻辑或许可问题。
- 工具访问带来的风险超出文本生成本身。
- 产品功能和模型可用性会变化。

## 与相近术语对比

| 术语 | 指代内容 |
|---|---|
| Codex 模型 | OpenAI 于 2021 年推出的代码生成模型 |
| Codex 产品 | 使用模型和软件工作流的 OpenAI 编码工具 |
| GitHub Copilot | 独立的编码产品，不同时期会使用不同模型 |

模型与为其提供工具和界面的产品不是一回事。

## 实施建议（Best Practices）

- 确认资料说的是 2021 年的模型，还是当前 Codex 产品。
- 把任务范围说清楚，并提供完成工作所需的文件和证据。
- 评审所有改动文件，并运行相关测试。
- 只开放任务需要的文件、命令和网络权限。
- 查看服务商当前文档，确认产品能力。

## 常见误区（Pitfalls）

不要用旧 Codex 评测结果代表当前产品表现。也不要把生成的代码或命令成功运行当成正确性的证明。

## FAQ

### 2021 年的 Codex 模型和当前 Codex 产品是同一回事吗？

不是。OpenAI 曾用 Codex 这个名称指代不同模型和编码产品。

### Codex 修改代码后，开发者应检查什么？

检查差异和工具操作，并在目标环境中运行相关测试。

## 相关资源

### 相关词条

- [gpt](https://inaodeng.com/zh-cn/AIWiki/gpt/)
- [o1-o3](https://inaodeng.com/zh-cn/AIWiki/o1-o3/)
- [ai-agent](https://inaodeng.com/zh-cn/AIWiki/ai-agent/)

### 参考资料
- [OpenAI: Introducing Codex (2025)](https://openai.com/index/introducing-codex/)
- [OpenAI: OpenAI Codex (2021)](https://openai.com/index/openai-codex/)
