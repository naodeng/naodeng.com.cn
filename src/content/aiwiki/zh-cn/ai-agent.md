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
lastReviewedAt: "2026-03-02"
---

# AI 智能体（AI Agent）

> 一句话定义：一种能够感知环境、进行自主规划、并调用工具来执行复杂任务的智能系统。

## 科普速读

- 解决问题：建立 AI 执行能力与治理边界。
- 适用场景：用于工具调用、规则控制和多步任务执行。
- 使用边界：没有权限和审计机制时风险较高。

## 概览

`AI 智能体` 的价值不在于概念本身，而在于它能解决真实工程问题：稳定性、可解释性和可协作性。科普视角下，理解它等于理解 AI 研发流程里的一个关键环节。

## 核心定义

### 标准定义

AI 智能体是一个基于大语言模型（LLM）的系统，它通过 **“规划（Planning）- 记忆（Memory）- 工具使用（Tool Use）”** 的架构套件，实现从单一对话向复杂任务解决的跨越。其核心公式通常被概括为：`Agent = LLM + Planning + Memory + Tool Use`。

### 通俗解释

把它理解为“AI 工程中的一个基础控制点”：它帮助团队减少随机性、提升复用性，并把经验沉淀成可执行的方法。
- **大脑（LLM）**：负责思考、推理和决策。
- **手（Tools）**：负责干活（比如发邮件、改代码、查数据库）。
- **记忆（Memory）**：负责记住之前的经验和当前的任务进度（RAG 或长短期历史）。
- **感官（Sensory）**：感知环境的变化（比如感知到代码报错了）。

## 背景与发展

### 起源

- **提出背景**：随着 LLM 推理能力的提升，人们发现 AI 不仅能写文本，还能写出可执行的函数调用（Function Calling）。
- **提出背景**：单一的 Prompt 交互难以处理逻辑极长、不确定性极高的工程任务。
- **关注重点**：如何让 AI 具备“自主性”和“工具调用能力”。

### 演进

- **1.0 阶段（受控式插件）**：如 ChatGPT Plugins，AI 只能在特定时刻调用特定接口。
- **2.0 阶段（自主循环）**：以 AutoGPT 为代表，AI 进入“自己给自己下指令”的无限循环（虽然早期成功率低）。
- **3.0 阶段（专业化 Agent）**：如 Cursor 的 Agent 模式、Antigravity 等，结合了深度的全栈工程能力和高成功率的推理路径。

## 工作机制（How It Works）

1. **目标拆解 (Decomposition)**：将模糊的大目标拆分为一系列可执行的小任务。
2. **反思与评估 (Reflection)**：在执行每一步前询问自己：“这个方案是最优的吗？”
3. **工具调用 (Tool Call)**：通过特定的协议（如 MCP）调用外部 API、读取文件或执行 Shell 脚本。
4. **状态维护 (State Management)**：在多轮交互中保持对当前项目进度的感知，不迷失目标。

## 在软件测试与开发中的应用

- **自主 Bug 修复**：Agent 可以读取报错日志，定位源码，尝试修复，运行测试，直到绿灯通过。
- **全自动环境搭建**：一条指令“帮我把项目跑起来”，Agent 自动安装依赖、配置环境变量、解决端口冲突。
- **端到端测试生成**：Agent 可以观察 UI 界面，自主编写 Playwright 脚本并模拟用户行为进行测试。

## 优势与局限

### 优势

- **解放人力**：将开发者从繁琐的机械性操作中解放出来。
- **不间断工作**：可以 24/7 处于待命状态，处理后台维护任务。
- **多维度思考**：能够同时考虑代码质量、性能和测试覆盖率。

### 局限与风险

- **幻觉风险 (Hallucinations)**：Agent 可能会在自主规划时产生错误的因果逻辑，导致任务失败。
- **资源浪费 (Token Cost)**：长序列的闭环推理会消耗大量 Token。
- **安全隐患**：如果缺乏权限管控，Agent 可能会执行破坏性的命令（如 `rm -rf /`）。

## 与相近术语对比

| 维度 | AI Agent | 传统自动化脚本 | LLM Chat |
| :--- | :--- | :--- | :--- |
| **驱动方式** | **目标驱动 (Goal-oriented)** | 规则驱动 (Rule-based) | 指令驱动 (Instruction-based) |
| **容错性** | **能自我修正** | 遇错即停 | 依赖用户纠错 |
| **灵活性** | 极高，适应多变环境 | 极低，仅支持预设路径 | 中 |

## 实施建议（Best Practices）

- **提供清晰的上下边界**：明确告知 Agent 哪些文件可以改，哪些命令禁跑。
- **引入人类确认环节 (HITL)**：在执行高风险操作（如数据库迁移）前，必须由人类点击 Confirm。
- **保持记忆简洁**：定期进行记忆压缩，防止 Agent 在过长的上下文面前变得反应迟钝。

## 常见误区（Pitfalls）

- **把 Agent 当成万能药**：目前 Agent 在处理逻辑极度复杂的架构设计时，依然需要人类的深度参与。
- **缺乏有效的评估 (Eval)**：如果不通过真实的测试用例来验证 Agent 的输出，它很可能会交付“看起来正确但跑不通”的代码。

## FAQ

### Q1: 新手需要马上掌握这个术语吗？

A: 建议先理解核心目的，再结合实际项目逐步使用。

### Q2: 如何判断是否真的用对了？

A: 看三件事：交付更稳、返工更少、团队协作更顺畅。

## 相关资源

### 相关词条

- [agentic-workflow](https://inaodeng.com/zh-cn/AIWiki/agentic-workflow/)
- [mcp](https://inaodeng.com/zh-cn/AIWiki/model-context-protocol-mcp/)
- [human-in-the-loop](https://inaodeng.com/zh-cn/AIWiki/human-in-the-loop/)
- [multi-agent-orchestration](https://inaodeng.com/zh-cn/AIWiki/multi-agent-orchestration/)

### 外部参考

- [Andrew Ng: What's next for AI Agents](https://www.deeplearning.ai/)
- [OpenAI: Building Agents with LLMs](https://platform.openai.com/docs/guides/reasoning)
