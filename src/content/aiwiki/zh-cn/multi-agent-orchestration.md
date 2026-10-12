---
title: "多智能体编排"
titleEn: "Multi-agent Orchestration"
slug: "multi-agent-orchestration"
lang: "zh-cn"
summary: "协调多个具备不同能力的 AI 智能体共同完成单一模型无法胜任的复杂、长链路任务的组织框架。"
topic: "ai-vibe-coding"
aliases:
  - "Multi-agent Orchestration"
  - "多智能体编排"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "subagents"
  - "task-level-abstraction"
  - "agentic-workflow"
lastReviewedAt: "2026-10-12"
---
# 多智能体编排（Multi-Agent Orchestration）

## 科普速读

- **它是什么：** 多智能体编排是协调多个 Agent 共同处理一项任务。
- **适合什么场景：** 能拆分为范围明确的子任务或独立评审的工作。
- **主要边界：** 协调会增加成本，也不保证结果更好。

## 概览

一个 Agent 可以检查测试失败，另一个 Agent 可以评审补丁。编排方收集两者的发现，再由人员检查最终结论。

## 核心定义

多智能体编排会把工作分配给两个或更多 Agent，并协调它们的输入、执行和结果。Agent 可以共享上下文，也可以独立工作。编排方可以是应用、Agent 或人员。

## 背景与发展

多智能体系统是长期研究的 AI 领域。当前语言模型工具采用委派、并行评审或分阶段交接等不同模式，没有统一的必需架构。

## 工作机制（How It Works）

1. 定义任务，并判断是否可以拆分。
2. 为每个 Agent 分配范围明确的职责和必要上下文。
3. 按顺序或并行执行子任务。
4. 汇总结果，并处理冲突或遗漏。
5. 根据原始任务核验汇总结果。

## 在软件测试与开发中的应用

可以让不同 Agent 分别评审补丁、检查测试覆盖或调查 API。条件允许时，让子任务彼此独立。最后由评审者检查集成结果和共享假设。

## 优势与局限

子任务彼此独立时，并行处理可能缩短等待时间。Agent 也可能重复工作、结论冲突或使用不同上下文。整合和评审的成本可能超过并行带来的节省。

## 与相近术语对比

子 Agent 是受委派处理部分任务的 Agent。多智能体编排负责协调多个 Agent。后台 Agent 在用户当前交互之外运行。智能体工作流可以使用一个或多个 Agent。

## 实施建议（Best Practices）

只有在任务能清晰拆分时才使用多个 Agent。向各 Agent 提供一致的版本和约束。明确如何合并结果，并独立核验结论和改动。

## 常见误区（Pitfalls）

不要认为多个 Agent 意见一致就能证明结果正确。未经协调，不要让多个 Agent 同时修改同一文件。当沟通和整合成本高于收益时，不要增加 Agent 数量。

## FAQ

### 使用更多 Agent 会让结果更准确吗？

不一定。结果取决于任务拆分、上下文、工具和评审。

## 相关资源

### 相关词条

- [subagents](https://inaodeng.com/zh-cn/AIWiki/subagents/)
- [task-level-abstraction](https://inaodeng.com/zh-cn/AIWiki/task-level-abstraction/)
- [artifacts](https://inaodeng.com/zh-cn/AIWiki/artifacts/)
- [agentic-workflow](https://inaodeng.com/zh-cn/AIWiki/agentic-workflow/)

### 外部参考

- [Multi-Agent Systems: A Modern Approach](https://mitpress.mit.edu/)
- [OpenAI Swarm: Experimental Orchestration](https://github.com/openai/swarm)
