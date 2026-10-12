---
title: "子智能体"
titleEn: "Subagents"
slug: "subagents"
lang: "zh-cn"
summary: "由主智能体动态创建、具备特定工具权限、专门用于执行单一具体任务的短期任务执行单元。"
topic: "ai-vibe-coding"
aliases:
  - "Subagents"
  - "子智能体"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "multi-agent-orchestration"
  - "background-agents"
  - "task-level-abstraction"
lastReviewedAt: "2026-10-12"
---
# 子 Agent（Subagents）

## 科普速读

- **它是什么：** 子 Agent 是被委派处理较大任务中某个子任务的 Agent。
- **适合什么场景：** 拆分独立的调查、评审或实现工作。
- **主要边界：** 隔离方式、工具、运行时间和编辑权限由宿主决定。

## 概览

主任务可以把独立的测试评审交给子 Agent，同时继续调查代码。之后，主任务检查报告再决定是否采纳。

## 核心定义

子 Agent 是由另一个 Agent 或编排器分配子任务的 Agent 实例或进程。宿主决定它收到哪些上下文、可以使用哪些工具、是否能修改文件，以及如何返回结果。

## 背景与发展

Agent 框架会使用委派来拆分较大的任务。有些框架并行运行子任务，有些采用顺序交接。这个术语不代表固定层级或执行环境。

## 工作机制（How It Works）

1. 主 Agent 或编排器定义子任务和预期输出。
2. 宿主使用选定的上下文和权限启动子 Agent。
3. 子 Agent 完成工作或报告阻塞点。
4. 主 Agent 检查并整合结果。
5. 主 Agent 验证整项任务。

## 在软件测试与开发中的应用

可以委派独立资料调查、某个目录的代码评审或测试审计。除非宿主提供安全的协调方式，否则应避免多个 Agent 重叠修改文件。

## 优势与局限

委派可以缩短独立工作的等待时间，但也会增加协调和评审成本。子 Agent 可能缺少上下文、给出相互冲突的建议，或无法完成任务。

## 与相近术语对比

子 Agent 的特点是在较大任务中接受委派。后台 Agent 在当前交互之外运行。多智能体编排负责协调多个 Agent。具体产品可以组合这些模式。

## 实施建议（Best Practices）

明确子任务范围、基准版本和交付物。说明是否允许修改文件。整合前应检查结果并重新运行相关检查。

## 常见误区（Pitfalls）

不要假设子 Agent 一定隔离或权限有限。不要未经证据核对就接受结论。没有协调机制时，不要把紧密耦合的改动同时委派给多个 Agent。

## FAQ

### 子 Agent 一定在独立分支中工作吗？

不一定。运行位置和改动是否隔离由宿主决定。

## 相关资源

### 相关词条

- [multi-agent-orchestration](https://inaodeng.com/zh-cn/AIWiki/multi-agent-orchestration/)
- [background-agents](https://inaodeng.com/zh-cn/AIWiki/background-agents/)
- [task-level-abstraction](https://inaodeng.com/zh-cn/AIWiki/task-level-abstraction/)
- [asynchronous-agent-execution](https://inaodeng.com/zh-cn/AIWiki/asynchronous-agent-execution/)

### 外部参考

- [Agentic Patterns: Decomposition and Delegation](https://blog.langchain.dev/)
- [Building Effective Agents - Anthropic](https://www.anthropic.com/research/building-effective-agents)
