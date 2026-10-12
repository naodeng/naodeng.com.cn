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
lastReviewedAt: "2026-10-12"
---

# 结构化输出（Structured Outputs）

> 一句话定义：使用 Schema 约束模型输出结构，方便程序解析。Schema 校验不能证明内容正确。

## 科普速读

- **它是什么：** 结构化输出会把模型响应约束为指定数据格式。
- **适合什么场景：** 提取字段或返回供应用程序读取的数据。
- **主要边界：** 还要处理拒答、不完整响应、Schema 支持范围和业务规则。

## 概览

结构化输出会把模型响应限制为受支持的数据格式，例如 JSON Schema。它能帮助应用解析成功返回的内容，但不能证明字段值真实，也不能证明它符合业务规则。

## 核心定义

结构化输出功能要求模型 API 按给定 Schema 返回数据。对于受支持的模型和 Schema，服务商可以在生成时约束输出格式。各家 API 支持的 Schema 能力并不相同。

成功返回的数据即使符合 Schema，字段值仍可能错误。拒答、响应中断、不支持的 Schema 或输出长度限制，也可能导致结果不可用。

## 背景与发展

早期，团队会在提示词中要求模型“只返回 JSON”。这不能确保每次响应都包含所需字段和类型。后来，一些 API 提供 JSON 模式，再发展出按 Schema 约束格式的功能。

不同 API 的实现和保证各不相同。使用时应查阅所选服务商的文档，不要假设所有产品都采用相同方式。

## 工作机制（How It Works）

1. 应用定义所需字段、类型和约束。
2. API 检查所选模型是否支持该 Schema。
3. 生成成功时，模型返回结构化响应。
4. 应用检查状态，处理拒答或不完整响应，再解析数据。
5. 应用校验业务规则，然后保存或使用字段值。

Schema 检查的是结构，不负责验证含义或权限。

## 在软件测试与开发中的应用

- **测试报告：** 返回用例 ID、状态和失败摘要，供后续系统处理。
- **缺陷分流：** 从报告中提取组件、严重程度和复现步骤。
- **工具请求：** 为 API 调用准备类型明确的参数；应用仍要检查权限。
- **模型评测：** 用统一记录格式保存分数和标签。

## 优势与局限

### 优势

- 对受支持的 Schema，结构化输出可以减少格式和解析错误。
- 类型明确的字段更容易接入软件系统。
- 版本化 Schema 有助于明确数据契约。

### 局限与风险

- 服务商通常只支持 Schema 规范中的一部分功能。
- 拒答或不完整响应可能不符合 Schema。
- 结构正确不代表事实或业务值正确。
- 修改 Schema 可能破坏下游使用方。

## 与相近术语对比

| 方法 | 主要用途 | 应用必须检查什么 |
|---|---|---|
| 结构化输出 | 按指定结构返回数据 | 响应状态、Schema 支持和业务含义 |
| JSON 模式 | 返回语法有效的 JSON | 必需字段、类型和业务含义 |
| 函数调用 | 请求外部工具执行操作 | 参数、授权和操作结果 |

结构化输出描述响应格式，不会授予执行操作的权限。

## 实施建议（Best Practices）

- 从小型 Schema 开始，只在需要时添加字段。
- 确认所选模型支持需要的 Schema 功能。
- 明确处理拒答、不完整响应和错误状态。
- 解析后继续校验业务规则。
- 修改 Schema 前先更新版本，并测试下游使用方。

## 常见误区（Pitfalls）

- **把结构化输出等同于无幻觉**：格式是对了，但里面的 **“内容数据”** 依然可能存在事实错误。格式对齐不能代替逻辑验证。
- **忽略模型拒绝机制**：如果任务违反了安全策略，模型可能会拒绝生成输出，你的代码必须处理这种“拒绝状态”。
- **把说明文字塞进机器字段**：如果下游程序要读取严格的 JSON 字段，就不要把面向人的解释混进字段值。说明和结构化数据应使用清楚定义的字段分别承载。

## FAQ

### 结构化输出能保证字段值正确吗？

不能。它可以约束格式，但字段值仍可能错误或不完整。

### 参数符合 Schema 后，应用能否直接执行工具调用？

不能。应用仍要检查调用者权限，并在执行前验证操作。

## 相关资源

### 相关词条

- [function-calling](https://inaodeng.com/zh-cn/AIWiki/function-calling/)
- [agent-evals](https://inaodeng.com/zh-cn/AIWiki/agent-evals/)
- [graders](https://inaodeng.com/zh-cn/AIWiki/graders/)

### 外部参考

- [OpenAI: Introducing Structured Outputs in the API](https://openai.com/index/introducing-structured-outputs-in-the-api/)
- [JSON Schema Professional Guide](https://json-schema.org/)
