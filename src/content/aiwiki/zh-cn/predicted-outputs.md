---
title: "预测输出"
titleEn: "Predicted Outputs"
slug: "predicted-outputs"
lang: "zh-cn"
summary: "通过对已知内容的预判来显著降低大模型生成延迟的加速技术。"
topic: "ai-vibe-coding"
aliases:
  - "Predicted Outputs"
  - "预测输出"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "structured-outputs"
  - "flex-processing"
  - "prompt-caching"
lastReviewedAt: "2026-03-02"
---

# 预测输出（Predicted Outputs）

> 一句话定义：当开发者已经拥有大部分目标代码（如重构时），将这部分内容作为“参考答案”喂给 AI，让它仅专注于生成“差异部分”，从而实现近乎实时的响应速度。

## 科普速读

- 解决问题：让 AI 输出更可控、更可执行。
- 适用场景：当你希望结果被程序直接消费时使用。
- 使用边界：不适合完全开放式创意写作场景。

## 概览

`预测输出` 常被误解为“高级功能”，但它本质上是为了解决工程交付中的基础问题：结果不稳定、流程不可复用、问题难以追踪。从科普视角看，它的价值在于把 AI 从“会回答”推进到“可落地”。

## 核心定义

### 标准定义

预测输出（也称为 Speculative Decoding 的一种应用）是一种推理加速技术。在已知大部分预期输出的情况下（如重构、文档更新、翻译），通过向模型提供一个 `prediction` 字段，模型可以验证并快速跳过与预测匹配的 Token，仅消耗算力生成不匹配或新增的部分。

### 通俗解释

如果把 AI 工作流比作流水线，`预测输出` 就是其中负责“减少出错、提高可复用性”的关键工位。它不是为了炫技，而是为了让团队在真实项目里更稳地交付结果。

## 背景与发展

### 起源

- **提出背景**：大语言模型（LLM）的生成速度一直是开发者体验的巨大瓶颈，尤其在处理大规模代码重构时，等待时间极长。
- **关注重点**：如何利用已有的上下文（Context）来减少不必要的自回归计算。

### 演进

- **1.0 阶段（流式传输）**：通过 Streaming 让用户先看到一部分字，缓解焦虑，但总时长没变。
- **2.0 阶段（投机采样）**：用小模型预测大模型的结果，提高整体并行度。
- **3.0 阶段（预测输出/Prediction API）**：开发者主动提供“预期草稿”，直接在推理层实现跨越式加速。

## 工作机制（How It Works）

1. **草稿输入 (Providing the Draft)**：开发者（或 IDE）将当前未修改的代码作为 `prediction` 参数传给模型。
2. **并行验证 (Parallel Verification)**：模型不是逐个生成 Token，而是尝试批量验证“草稿内容”是否符合当前的 Prompt 逻辑。
3. **快速跳过 (Fast Skipping)**：只要验证通过（即新代码在此处确实不需要改动），模型就不进行复杂的深度计算，直接输出该片段。
4. **焦点转移 (Focusing on Diffs)**：一旦发现逻辑不匹配（即需要改动的地方），模型立即切回高精度的生成模式，完成修改后再尝试后续的快速预测。

## 在软件测试与开发中的应用

- **大规模重构（Refactoring）**：重命一个类名或修改函数签名时，大部分逻辑并无变化。预测输出能瞬间完成数千行代码的更新。
- **技术文档同步**：代码改了一点，文档也需要同步微调。AI 对照旧文档，闪电般修改关键参数。
- **单元测试补全**：在现有的测试模板中填充新的测试用例，AI 快速跳过样板代码模板，只填入变化的 `Input/Output`。

## 优势与局限

### 优势

- **极低的交互延迟**：在某些重构场景下，响应速度可提升 2x 到 5x。
- **节省 Token 成本**（取决于供应商政策）：部分厂商对“预测通过”的 Token 计费更低。
- **保持连贯性**：由于利用了原有的代码作为草稿，AI 生成的代码风格更有可能与现有代码保持一致。

### 局限与风险

- **仅限“已知”场景**：如果你要写一段全新的代码，预测输出由于没有草稿可用，起不到任何加速作用。
- **草稿质量影响**：如果提供的草稿与目标代码差异巨大，模型由于频繁需要“纠偏”，加速效果会打折扣，甚至可能比正常生成更慢。

## 与相近术语对比

| 维度 | 预测输出 (Predicted Outputs) | 结构化输出 (Structured) | 提示词缓存 (Prompt Caching) |
| :--- | :--- | :--- | :--- |
| **加速对象** | **输出阶段** (Generation) | 约束逻辑 (Constraints) | **输入阶段** (Prefill) |
| **核心机制** | 跳过已知的 Token | 强制符合 Schema | 缓存重复的上下文 |
| **适用场景** | 代码重构、文档修改 | JSON 生成、数据提取 | 高频访问的大型代码库 |

## 实施建议（Best Practices）

- **IDE 自动挂载**：在发起 Edit 指令时，自动将当前编辑器的选中内容挂载为 Prediction 内容。
- **控制差异范围**：预期变动越大，预测效果越差。尽量对局部范围、逻辑明确的修改使用此功能。
- **动态降级**：当模型发现预测命中率持续低于 10% 时，应自动关闭预测模式以节省资源。

## FAQ

### Q1: 新手是否需要马上使用它？

A: 取决于任务复杂度。简单任务可先不用；一旦涉及团队协作、自动化或上线风险，就建议尽早引入。

### Q2: 如何避免“用了很多机制但效果一般”？

A: 先设清晰目标与指标，再逐步引入机制；每次只调整一个变量，避免同时改太多。

## 相关资源

### 相关词条

- [structured-outputs](https://inaodeng.com/zh-cn/AIWiki/structured-outputs/)
- [flex-processing](https://inaodeng.com/zh-cn/AIWiki/flex-processing/)
- [prompt-caching](https://inaodeng.com/zh-cn/AIWiki/prompt-caching/)
- [context-window-management](https://inaodeng.com/zh-cn/AIWiki/context-window-management/)

### 外部参考

- [OpenAI: Predicted Outputs Guide](https://platform.openai.com/docs/guides/predicted-outputs)
- [Anthropic: Prompt Caching and Optimization](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
