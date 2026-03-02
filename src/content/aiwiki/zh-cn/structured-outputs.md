---
title: "结构化输出"
titleEn: "Structured Outputs"
slug: "structured-outputs"
lang: "zh-cn"
summary: "通过预定义结构约束模型输出，确保下游系统可稳定解析结果。"
topic: "ai-vibe-coding"
aliases:
  - "Structured Outputs"
  - "结构化输出"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "function-calling"
  - "graders"
  - "verification-artifacts"
  - "predicted-outputs"
lastReviewedAt: "2026-03-02"
---

# 结构化输出（Structured Outputs）

> 一句话定义：通过使用标准 Schema（如 JSON Schema）严格限制大语言模型的输出格式，并结合原生系统校验，确保模型返回的数据结构 100% 符合预期且可直接被程序解析的技术。

## 科普速读

- 解决问题：让 AI 输出更可控、更可执行。
- 适用场景：当你希望结果被程序直接消费时使用。
- 使用边界：不适合完全开放式创意写作场景。

## 概览

`结构化输出` 常被误解为“高级功能”，但它本质上是为了解决工程交付中的基础问题：结果不稳定、流程不可复用、问题难以追踪。从科普视角看，它的价值在于把 AI 从“会回答”推进到“可落地”。

## 核心定义

### 标准定义

结构化输出是 LLM 提供商（如 OpenAI, Anthropic）提供的一种原生能力。它要求用户在请求时提供一个 **模式定义 (Schema Definition)**。模型在生成文本的过程中，推理引擎会根据模式进行 **“语法掩码”** 过滤，强行剥离所有不符合模式的后续 Token，从而保证最终产出物符合 JSON Schema 等预定义格式。

### 通俗解释

如果把 AI 工作流比作流水线，`结构化输出` 就是其中负责“减少出错、提高可复用性”的关键工位。它不是为了炫技，而是为了让团队在真实项目里更稳地交付结果。

## 背景与发展

### 起源

- **提出背景**：开发者在解析 AI 回复时遇到了大量的“格式幻觉”问题，为了处理多出来的引号或缺失的逗号，编写了大量的胶水代码。
- **关注重点**：100% 的解析成功率 (Parse Success Rate) 和极低的代码侵入性。

### 演进

- **Prompt 工程时代**：在 Prompt 结尾疯狂强调“只返回 JSON”。成功率约 60-80%。
- **JSON Mode 时代**：模型尝试返回 JSON，但无法保证字段名和类型的绝对正确。成功率约 95%。
- **原生模式约束时代 (Structured Outputs)**：通过 Constrained Decoding 技术，保证 100% 符合特定 Schema。

## 工作机制（How It Works）

1. **Schema 提交**：开发者定义一个工具函数或特定 JSON 对象（如使用 Pydantic 或 JSON Schema）。
2. **约束解码 (Constrained Decoding)**：模型在推理每一步时，校验当前 Token 是否会导致违反 Schema。如果是，则将该 Token 的概率降至零。
3. **原生校验 (Zero-Tolerance Validation)**：系统内置校验层，任何不符合规格的响应会被拦截，并促使模型重新生成最接近要求的合法结构。
4. **解析 (Extraction)**：系统自动将 JSON 字符串转化为程序可用的对象（Dict/Object）。

## 在软件测试与开发中的应用

- **自动化测试报告生成**：让 AI 分析 100 个测试案例，要求它以严格的 `{ case_id, status, error_reason }` 结构化输出，方便直接写入数据库。
- **Agent 工具调用的参数准备**：确保 Agent 生成的 API 调用参数类型完全匹配后台定义的 Swagger 文档。
- **数据合规性过滤**：通过结构化输出，强行要求 AI 将杂乱的自然语言转化为符合公司治理标准的字段分类。

## 优势与局限

### 优势

- **生产级稳定性**：消除了“解析失败”导致的系统崩溃，是构建稳健智能体的基石。
- **省去清洗代码**：开发者不再需要写复杂的逻辑去提取 JSON 片段。
- **支持复杂嵌套**：能够完美处理多层嵌套的复杂业务对象。

### 局限与风险

- **推理延迟略增**：由于每一步都要进行 Schema 校验，推理速度可能会有微小的下降。
- **Prompt 灵活性受限**：模型不再能通过“闲聊”来缓解某些推理压力。
- **Schema 维护压力**：当业务逻辑变动时，需要同步更新庞大的 JSON Schema 定义。

## 与相近术语对比

| 维度 | Structured Outputs | JSON Mode | Regular Tool/Function Calling |
| :--- | :--- | :--- | :--- |
| **准确度承诺** | **100% 格式对齐** | 尽量尝试对齐 | 极高（但主要是为了调工具） |
| **用途** | **纯数据交互与提取** | 简单的数据格式化 | 执行特定外部动作 |
| **安全性** | 极高（彻底杜绝注入） | 一般 | 高 |

## 实施建议（Best Practices）

- **优先使用官方 SDK 集成**：如 OpenAI 提供的结构化输出参数，性能和稳定性最高。
- **Schema 尽可能扁平化**：过深的嵌套会增加模型的推理难度，导致性能下降。
- **配合 Pydantic 定义**：在 Python 生态中，利用 Pydantic 模型可以大幅提升 Schema 的可维护性。

## 常见误区（Pitfalls）

- **把结构化输出等同于无幻觉**：格式是对了，但里面的 **“内容数据”** 依然可能存在事实错误。格式对齐不能代替逻辑验证。
- **忽略模型拒绝机制**：如果任务违反了安全策略，模型可能会拒绝生成输出，你的代码必须处理这种“拒绝状态”。

## FAQ

### Q1: 新手是否需要马上使用它？

A: 取决于任务复杂度。简单任务可先不用；一旦涉及团队协作、自动化或上线风险，就建议尽早引入。

### Q2: 如何避免“用了很多机制但效果一般”？

A: 先设清晰目标与指标，再逐步引入机制；每次只调整一个变量，避免同时改太多。

## 相关资源

### 相关词条

- [function-calling](/zh-cn/AIWiki/function-calling/)
- [agent-evals](/zh-cn/AIWiki/agent-evals/)
- [graders](/zh-cn/AIWiki/graders/)

### 外部参考

- [OpenAI: Introducing Structured Outputs in the API](https://openai.com/index/introducing-structured-outputs-in-the-api/)
- [JSON Schema Professional Guide](https://json-schema.org/)
