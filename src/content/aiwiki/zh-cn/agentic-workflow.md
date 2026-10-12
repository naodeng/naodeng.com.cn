---
title: "智能体工作流"
titleEn: "Agentic Workflow"
slug: "agentic-workflow"
lang: "zh-cn"
summary: "由 AI 智能体执行“规划-执行-观察-修正”闭环、并尽量减少人工介入的工作流模式。"
topic: "ai-vibe-coding"
aliases:
  - "Agent workflow"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "ai-agent"
  - "human-in-the-loop"
  - "model-context-protocol-mcp"
lastReviewedAt: "2026-10-12"
---
# Agentic Workflow（智能体工作流）

## 科普速读

- **它是什么：** 智能体工作流让 AI 系统通过多个相互关联的步骤完成目标。
- **适合什么场景：** 需要规划、调用工具并根据反馈继续操作的任务。
- **主要边界：** 步骤越多，可能发生错误或意外操作的位置也越多。

## 概览

编码助手可以检查失败测试、搜索相关代码、提出改动并运行测试。权限由人员或应用设置，结果也需要检查。

## 核心定义

智能体工作流是 AI 系统通过选择或执行多个操作来完成任务的过程。它可能使用模型、工具、状态和检查步骤。具体设计因应用而异。

## 背景与发展

AI 产品从文字建议扩展到可使用工具和处理较长任务的工作流。这种变化没有固定的成熟阶段。工作流可以简单，也可以复杂；人工控制程度也各不相同。

## 工作机制（How It Works）

1. 接收目标和约束。
2. 规划一个或多个步骤。
3. 使用可用工具或生成结果。
4. 观察结果，并决定是否继续。
5. 停止、请求补充信息，或提交结果供评审。

有些工作流会重复执行步骤，但循环本身不能保证系统能发现或修复错误。

## 在软件测试与开发中的应用

可以用工作流调查失败测试、起草补丁并运行选定检查。文件访问、命令权限、时间限制和评审节点都应明确设置。

## 优势与局限

工作流可以连接原本需要人工逐项执行的操作。在范围明确的任务中，它可能减少协调工作。工具错误、计划不完整或误导性结果也可能在多个步骤中累积。

## 与相近术语对比

AI Agent 是能够为目标选择或执行操作的系统。智能体工作流规定这些操作如何进行。函数调用是应用向模型开放工具的一种方式。

## 实施建议（Best Practices）

把大型任务拆成可评审的步骤。设定权限和停止条件。记录工具结果。用测试或独立检查核验重要输出。

## 常见误区（Pitfalls）

不要认为步骤多就代表能力强。不要把模型的重复检查当成独立验证。需求不清或影响较大时，应暂停并请人判断。

## FAQ

### 智能体工作流会自动纠正自己的错误吗？

不一定。它可能重试或使用反馈，但也可能重复同一错误。重要结果应独立核验。

## 相关资源

### 相关词条

- [ai-agent](https://inaodeng.com/zh-cn/AIWiki/ai-agent/)
- [human-in-the-loop](https://inaodeng.com/zh-cn/AIWiki/human-in-the-loop/)
- [model-context-protocol-mcp](https://inaodeng.com/zh-cn/AIWiki/model-context-protocol-mcp/)

### 参考资料
- [IBM: What are agentic workflows?](https://www.ibm.com/think/topics/agentic-workflows)
- [OpenAI Agents Guide](https://platform.openai.com/docs/guides/agents)
