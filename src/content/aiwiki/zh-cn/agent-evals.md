---
title: "智能体评测"
titleEn: "Agent Evals"
slug: "agent-evals"
lang: "zh-cn"
summary: "通过可重复基准测试评估智能体在任务、策略与结果上的表现。"
topic: "ai-vibe-coding"
aliases:
  - "Agent Evals"
  - "智能体评测"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "graders"
  - "trace-grading"
  - "verification-artifacts"
  - "artifact-feedback-loop"
lastReviewedAt: "2026-03-02"
---

# 智能体评估（Agent Evals）

> 一句话定义：通过自动化脚本或专门的模型，对 AI Agent 在特定任务中的成功率、安全性、遵循指令程度及推理路径进行的系统性性能评分。

## 科普速读

- 解决问题：把“感觉好用”变成“可量化质量”。
- 适用场景：用于评测、回归、验收和策略对比。
- 使用边界：不适合只看一次结果就下结论。

## 概览

`智能体评测` 常被误解为“高级功能”，但它本质上是为了解决工程交付中的基础问题：结果不稳定、流程不可复用、问题难以追踪。从科普视角看，它的价值在于把 AI 从“会回答”推进到“可落地”。

## 核心定义

### 标准定义

Agent Evals 是一个度量框架，通常包含 **数据集 (Datasets)**、**评分标准 (Rubrics)** 和 **评估器 (Evaluators/Graders)**。它通过在受控环境中重放任务，收集模型的输出，并将其与“金标准”（Ground Truth）或预定义的行为准则进行比对。

### 通俗解释

如果把 AI 工作流比作流水线，`智能体评测` 就是其中负责“减少出错、提高可复用性”的关键工位。它不是为了炫技，而是为了让团队在真实项目里更稳地交付结果。

## 背景与发展

### 起源

- **提出背景**：Prompt 的细微修改可能导致 AI 性能的大幅波动。仅靠人工感觉（Vibe Check）来判断 Agent 的好坏已经无法满足工程化要求。
- **关注重点**：从“回复好不好看”转向“问题有没有被解决”。

### 演进

- **1.0 阶段（基于匹配）**：检查输出是否包含某个关键词，或者代码是否能编译。
- **2.0 阶段（模型评测模型，LLM-as-a-Judge）**：使用更高级的模型（如 GPT-4）作为裁判，给初级模型的回答打分。
- **3.0 阶段（全链路追踪评估）**：评估 Agent 的完整推理路径（Trace），而不仅仅是最终结果。

## 工作机制（How It Works）

1. **构建测试集 (Test Suite)**：收集典型的、容易出错的真实案例（如：一个会导致递归死循环的反例）。
2. **运行推理 (Run Inference)**：让 Agent 在受控的沙箱环境中执行这些案例。
3. **专家回归 (Ground Truth Comparison)**：
   - 对于代码任务：尝试运行代码，看是否通过所有单元测试。
   - 对于开放任务：将 Agent 的回答与专家写好的参考答案（金标准）进行语义比对。
4. **Grading（判分）**：利用 **Graders** 给出量化指标（如：Pass@1, Success Rate, Reasoning Accuracy）。

## 在软件测试与开发中的应用

- **持续集成中的 AI 验收**：每次修改 Agent 的 Prompt 后，自动跑一遍 Evals，防止新版本在旧问题上“退化”。
- **性能成本分析**：评估 Agent 完成同一任务所需的时间和 Token 消耗，寻找性价比最高的模型配置。
- **安全性回归**：专门编写评估脚本，尝试诱导 Agent 执行违规操作（如读取 `/etc/passwd`），验证安全边界是否坚固。

## 优势与局限

### 优势

- **量化决策**：用数据说话，而不是凭感觉猜测哪个 Prompt 更好。
- **快速迭代**：自动化评估让反馈周期从“天”级缩短到“分钟”级。
- **发现边际效应**：能够捕捉到那些肉眼难以发现的微小性能退化（Regression）。

### 局限与风险

- **裁判偏差 (Judge Bias)**：如果用 LLM 作为裁判，裁判本身可能也存在幻觉或偏见。
- **测试集陈旧**：如果测试案例被模型“背下来了”（数据污染），评估结果将失去参考价值。
- **沙箱环境成本**：为 Agent 提供真实的执行环境（如云端容器）需要昂贵的基建支持。

## 与相近术语对比

| 维度 | Agent Evals | 传统单元测试 | 情感/意图识别 |
| :--- | :--- | :--- | :--- |
| **判定性质** | **概率性/模糊性** | 确定性 (Boolean) | 语义分类 |
| **主要工具** | **Graders（模型裁判）** | Assert 语句 | 分类器 (Classifier) |
| **复杂度** | 极高（需考虑推理路径） | 低 | 中 |

## 实施建议（Best Practices）

- **从小规模开始**：先建立 10 个核心高质量测试用例，比 1000 个低质量案例更管用。
- **双重判分**：关键案例同时使用 LLM 判分和代码断言（Assert）判分。
- **可视化 Trace**：不仅要看分数，还要能一眼看到 Agent 在哪一步“走偏了”。

## 常见误区（Pitfalls）

- **过度依赖单一指标**：仅看“成功率”可能会忽视 Agent 产生的安全漏洞。
- **忽略了成本的 Evals**：如果 Agent 为了解决一个简单的 Bug 消耗了 10 万个 Token，那这个方案在商业上是失败的。

## FAQ

### Q1: 新手是否需要马上使用它？

A: 取决于任务复杂度。简单任务可先不用；一旦涉及团队协作、自动化或上线风险，就建议尽早引入。

### Q2: 如何避免“用了很多机制但效果一般”？

A: 先设清晰目标与指标，再逐步引入机制；每次只调整一个变量，避免同时改太多。

## 相关资源

### 相关词条

- [graders](/zh-cn/AIWiki/graders/)
- [trace-grading](/zh-cn/AIWiki/trace-grading/)
- [self-healing-code](/zh-cn/AIWiki/self-healing-code/)
- [agentic-workflow](/zh-cn/AIWiki/agentic-workflow/)

### 外部参考

- [OpenAI Evals Framework (GitHub)](https://github.com/openai/evals)
- [LangChain Evaluation Documentation](https://python.langchain.com/docs/guides/evaluation)
