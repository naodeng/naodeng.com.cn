---
title: "上下文窗口管理"
titleEn: "Context Window Management"
slug: "context-window-management"
lang: "zh-cn"
summary: "通过筛选、压缩和排序输入上下文，提高模型输出相关性与稳定性的实践。"
topic: "ai-vibe-coding"
aliases:
  - "Context management"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "codebase-indexing-rag"
  - "prompt-driven-development"
  - "model-context-protocol-mcp"
lastReviewedAt: "2026-10-12"
---
# 上下文窗口管理（Context Window Management）

## 科普速读

- **它是什么：** 上下文窗口管理是在模型容量范围内选择要发送的信息。
- **适合什么场景：** 让较长的编码或测试任务保持聚焦。
- **主要边界：** 信息筛选可能漏掉要点；不同模型的限制也不同。

## 概览

排查失败测试时，可能只需提供报错信息、相关函数和测试输出。把整个仓库都放进请求中，反而可能淹没关键细节或超出上下文容量。

## 核心定义

上下文窗口管理是为模型请求选择、排序、检索或缩短信息的过程。上下文窗口是模型在一次请求中可处理的信息容量。具体限制取决于模型和服务。

## 背景与发展

语言模型开始处理更长输入后，应用增加了文件选择、片段检索和历史摘要等功能。上下文容量变大，并不会消除选择相关且最新信息的需要。

## 工作机制（How It Works）

1. 明确任务以及完成任务所需的信息。
2. 选择相关指令、文件和工具结果。
3. 排列信息，让关键要求清楚可见。
4. 删除或摘要不需要的内容。
5. 检查请求是否仍包含必要证据和约束。

## 在软件测试与开发中的应用

排查失败测试时，可以提供测试代码、相关实现、准确报错和近期改动。只有在其他文件有助于解释失败时，再补充它们。

## 优势与局限

聚焦上下文可以减少噪声，让模型更容易使用相关信息。筛选和摘要也可能漏掉要点。不同模型和服务的上下文限制并不相同。

## 与相近术语对比

上下文窗口是模型单次请求的输入限制。上下文管理决定包含哪些信息。记忆保存以后可能再次使用的信息。压缩会减少或摘要已有上下文。

## 实施建议（Best Practices）

查看目标模型的文档限制。先提供任务、约束和相关证据。保留文件名、版本和准确错误信息。依赖摘要前，先检查摘要内容。

## 常见误区（Pitfalls）

不要假设模型能看到仓库里的每个文件。更多上下文不一定带来更好的回答。不要因为某条信息看起来重复就删除；它可能包含约束。

## FAQ

### 是否应该尽可能提供更多上下文？

不应该。先提供完成任务所需的信息；只有在能解决具体疑问时才补充内容。

## 相关资源

### 相关词条

- [codebase-indexing-rag](https://inaodeng.com/zh-cn/AIWiki/codebase-indexing-rag/)
- [prompt-driven-development](https://inaodeng.com/zh-cn/AIWiki/prompt-driven-development/)
- [model-context-protocol-mcp](https://inaodeng.com/zh-cn/AIWiki/model-context-protocol-mcp/)

### 参考资料
- [Anthropic docs: Long context tips](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-long-context-windows)
- [OpenAI docs: Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)
