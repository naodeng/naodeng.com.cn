---
title: "AI 智能体"
titleEn: "AI Agent"
slug: "ai-agent"
lang: "zh-cn"
summary: "能够感知上下文、围绕目标推理并调用工具执行任务的 AI 系统。"
topic: "ai-vibe-coding"
aliases:
  - "Autonomous agent"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agentic-workflow"
  - "model-context-protocol-mcp"
  - "skill"
lastReviewedAt: "2026-10-12"
---
# AI Agent（人工智能智能体）

## 科普速读

- **它是什么：** AI Agent 使用模型和应用逻辑，为目标选择或执行操作。
- **适合什么场景：** 需要多个步骤或工具的任务。
- **主要边界：** Agent 可能选错操作，也可能依据不完整的信息行动。

## 概览

编码 Agent 可以检查代码仓库、提出补丁并运行测试。人员或应用负责规定可用工具，并检查结果。

## 核心定义

AI Agent 是利用 AI 模型理解输入并选择或执行操作的系统。它可能使用工具、状态或规划逻辑。这些都是设计选项，并非适用于所有 Agent 的固定公式。

## 背景与发展

AI 领域长期研究能够观察环境并朝目标采取行动的系统。现在的一些产品把语言模型和软件工具接入这类系统。它们的自主程度和能力差异很大。

## 工作机制（How It Works）

1. 系统接收目标和相关上下文。
2. 模型或应用选择下一步操作。
3. 应用检查策略，并执行获准的工具调用。
4. 系统观察返回结果。
5. 系统继续、停止，或请求人员提供信息。

有些系统不会采用完整循环。具体控制流程由产品决定。

## 在软件测试与开发中的应用

编码 Agent 可以搜索代码、起草补丁并运行选定测试。测试 Agent 可以准备测试案例或汇报失败。涉及代码、数据或基础设施的改动应由人员评审。

## 优势与局限

Agent 可以把多个操作连接成一个工作流，也可能误用工具、漏掉要求或重复失败操作。结果取决于模型、工具、指令、权限和运行环境。

## 与相近术语对比

聊天机器人通常通过文字回应，也可能使用工具。AI Agent 可以为目标选择操作。智能体工作流描述这些操作经过的步骤。不同产品中的边界并不完全相同。

## 实施建议（Best Practices）

明确任务，并限制可用工具。设置访问范围和停止条件。保留日志等有用证据。用测试和人工评审核验重要结果。

## 常见误区（Pitfalls）

不要假设 Agent 具有人类般的理解或独立判断。任务完成也不能证明结果正确。

## FAQ

### 每个 AI Agent 都会使用记忆和工具吗？

不会。是否使用工具、保存状态或进行规划，取决于系统设计。

## 相关资源

### 相关词条

- [agentic-workflow](https://inaodeng.com/zh-cn/AIWiki/agentic-workflow/)
- [mcp](https://inaodeng.com/zh-cn/AIWiki/model-context-protocol-mcp/)
- [human-in-the-loop](https://inaodeng.com/zh-cn/AIWiki/human-in-the-loop/)
- [multi-agent-orchestration](https://inaodeng.com/zh-cn/AIWiki/multi-agent-orchestration/)

### 外部参考

- [Andrew Ng: What's next for AI Agents](https://www.deeplearning.ai/)
- [OpenAI: Building Agents with LLMs](https://platform.openai.com/docs/guides/reasoning)
