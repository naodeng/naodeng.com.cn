---
title: "上下文压缩"
titleEn: "Compaction"
slug: "compaction"
lang: "zh-cn"
summary: "将长上下文压缩为简洁状态，同时尽量保留关键信息。"
topic: "ai-vibe-coding"
aliases:
  - "Compaction"
  - "上下文压缩"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "prompt-caching"
  - "conversation-state"
  - "memory-scope"
  - "automatic-memory"
lastReviewedAt: "2026-10-12"
---
# 上下文压缩（Context Compaction）

## 科普速读

- **它是什么：** 上下文接近限制时，压缩会缩短或摘要部分对话内容。
- **适合什么场景：** 保留选定历史信息，继续较长的交互。
- **主要边界：** 摘要可能漏掉后续需要的细节。

## 概览

长时间排查 Bug 时，对话可能超过上下文限制。应用可以摘要较早的消息，并保留近期消息，让任务继续。

## 核心定义

上下文压缩是减少发送给模型的上下文内容的过程。系统可能删除、摘要或替换较早内容。不同产品采用的方法和触发条件各不相同。

## 背景与发展

压缩是管理长对话和 Agent 运行中有限上下文的一种方式。它不会增加模型的上下文上限，也不等同于保存长期记忆。

## 工作机制（How It Works）

1. 系统判断需要减少上下文。
2. 系统选择要删除或摘要的较早内容。
3. 系统保留或生成更短的表示。
4. 后续请求使用压缩后的上下文。
5. 用户检查重要决定和约束是否仍然保留。

## 在软件测试与开发中的应用

压缩前，记录当前代码版本、失败检查、已作决定和未解决的问题。压缩后，继续改动前先确认这些信息。

## 优势与局限

压缩可以减少每次请求需要发送的历史内容，让任务继续进行。但它可能丢失精确措辞、命令输出或边界案例，也可能把过时摘要和当前事实混在一起。

## 与相近术语对比

压缩会减少当前上下文。上下文窗口是模型输入容量的限制。记忆保存以后可能再次使用的信息。提示词缓存复用重复输入以提高效率，不负责摘要历史。

## 实施建议（Best Practices）

保留后续步骤需要的精确需求、决定和标识符。让摘要之外仍有可查证的信息来源。执行高影响操作前检查压缩后的状态。

## 常见误区（Pitfalls）

不要把压缩当成无损过程。不要假设模型仍能访问被省略的内容。应重新检查文件和测试输出，不要只信任旧摘要。

## FAQ

### 上下文压缩会扩大模型的上下文窗口吗？

不会。它会减少或摘要发送给模型的内容，但不会改变模型的上下文上限。

## 相关资源

### 相关词条

- [active-memory](https://inaodeng.com/zh-cn/AIWiki/active-memory/)
- [automatic-memory](https://inaodeng.com/zh-cn/AIWiki/automatic-memory/)
- [prompt-caching](https://inaodeng.com/zh-cn/AIWiki/prompt-caching/)
- [context-window-management](https://inaodeng.com/zh-cn/AIWiki/context-window-management/)

### 外部参考

- [How LLMs handle long contexts](https://docs.anthropic.com/claude/docs/long-context-window)
- [MemGPT: Managed Memory for Large Language Models](https://github.com/cpacker/MemGPT)
