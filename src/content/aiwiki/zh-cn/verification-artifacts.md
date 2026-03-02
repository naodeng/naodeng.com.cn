---
title: "验证产物"
titleEn: "Verification Artifacts"
slug: "verification-artifacts"
lang: "zh-cn"
summary: "用于验证 AI 任务结果的证据性产物，如截图、录屏与测试报告。"
topic: "ai-vibe-coding"
aliases:
  - "Verification Artifacts"
  - "验证产物"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "artifacts"
  - "agent-evals"
  - "graders"
  - "trace-grading"
lastReviewedAt: "2026-03-02"
---

# 验证产出物（Verification Artifacts）

> 一句话定义：智能体（Agent）在执行任务过程中生成的、用于证明其工作正确性并支持人类或评分器进行审计的结构化证据文件（如测试报告、截图、Trace 轨迹等）。

## 科普速读

- 解决问题：把“感觉好用”变成“可量化质量”。
- 适用场景：用于评测、回归、验收和策略对比。
- 使用边界：不适合只看一次结果就下结论。

## 概览

`验证产物` 常被误解为“高级功能”，但它本质上是为了解决工程交付中的基础问题：结果不稳定、流程不可复用、问题难以追踪。从科普视角看，它的价值在于把 AI 从“会回答”推进到“可落地”。

## 核心定义

### 标准定义

验证产出物是指 Agent 运行生命周期中产生的任何可持久化数据，其主要用途是作为验证（Verification）和确认（Validation）的输入。常见的 Artifacts 包括：代码 Diff、单元测试日志、UI 测试录像、可读的推理 Trace 及 MD5 校验和。

### 通俗解释

如果把 AI 工作流比作流水线，`验证产物` 就是其中负责“减少出错、提高可复用性”的关键工位。它不是为了炫技，而是为了让团队在真实项目里更稳地交付结果。

## 背景与发展

### 起源

- **提出背景**：随着 Agent 开始接管高风险任务（如修改生产代码），开发者急需一种机制来快速判断 AI 的输出是否真的可靠。
- **关注重点**：审计的便利性（Auditability）和证据的不可篡改性。

### 演进

- **1.0 阶段（纯日志时代）**：AI 吐出一堆混乱的文本日志，人类需要从中艰难寻找证据。
- **2.0 阶段（片段产物）**：开始自动生成测试报告或文件差异预览。
- **3.0 阶段（链接化证据链）**：产物与推理 Trace 深度绑定，每一个决策点的背后都有一个具体的 Artifacts 作为支撑。

## 工作机制（How It Works）

1. **自动采集 (Capture)**：在 Agent 执行 Shell 命令或工具调用时，后台自动记录输出并序列化为文件。
2. **多模态丰富 (Enrichment)**：不仅仅是文本，还可以包含生成的图像、PDF 报告、甚至是录屏。
3. **元数据关联 (Linking)**：将产物文件与当前的任务 ID、Prompt 版本及 Trace 节点进行关联。
4. **持久化与索引 (Persistence)**：保存到特定的存档目录，方便评分器（Grader）或开发者随时调用。

## 在软件测试与开发中的应用

- **自动化 Bug 修复的“证据链”**：Agent 修复 Bug 后，自动附带一个 `walkthrough.md`，里面包含修复前后的逻辑对比及测试运行的截图。
- **UI 自动化测试审计**：当测试失败时，Agent 自动保存失败瞬间的屏幕截图和 DOM 树摘要。
- **合规性归档**：在医疗或金融 AI 系统中，将每一个决策步骤产生的 Artifacts 进行加密存证，以满足行业审计要求。

## 优势与局限

### 优势

- **极大地降低了 Review 成本**：人类不需要重新运行一遍程序，只需检查 Artifacts 即可确认结果。
- **支持自动化判分 (Auto-grading)**：Graders 通过读取 Artifacts（而非直接读取原始日志）可以做出更精准的判断。
- **提升系统透明度**：让 Agent 的行为变得可预测、可追根溯源。

### 局限与风险

- **存储爆炸**：海量的屏幕截图和 Trace 文件会迅速占满磁盘空间。
- **证据伪造风险**：如果 Agent 产生幻觉，它有时会生成看起来很真实的“虚假证据”（虽然概率较低）。
- **解析压力**：过多的 Artifacts 会增加后续判分系统的解析开销。

## 与相近术语对比

| 维度 | Verification Artifacts | Build Artifacts (构建产物) | System Logs (系统日志) |
| :--- | :--- | :--- | :--- |
| **主要目标** | **证明工作的正确性** | 发布部署 | 故障排查 |
| **受众** | **人类 Reviewer 或 Grader** | 运维系统 | 开发人员 |
| **结构化程度** | 极高（针对性展示） | 高（二进制/分发包） | 低（流式文本） |

## 实施建议（Best Practices）

- **产物归并**：使用专门的 `artifacts/` 目录分类存放不同的产物。
- **关键帧快照**：不要记录所有无用过程，只记录最关键的“验收点”快照。
- **自描述元数据**：每个 Artifact 文件最好附带一个简单的说明，解释该文件证明了什么。

## 常见误区（Pitfalls）

- **把日志等同于产物**：日志是过程，产物是证据。堆砌日志只会增加 Review 负担。
- **忽略产物的版本管理**：如果产物没有和代码版本对应，审计时会产生严重的“张冠李戴”问题。

## FAQ

### Q1: 新手是否需要马上使用它？

A: 取决于任务复杂度。简单任务可先不用；一旦涉及团队协作、自动化或上线风险，就建议尽早引入。

### Q2: 如何避免“用了很多机制但效果一般”？

A: 先设清晰目标与指标，再逐步引入机制；每次只调整一个变量，避免同时改太多。

## 相关资源

### 相关词条

- [artifact-feedback-loop](/zh-cn/AIWiki/artifact-feedback-loop/)
- [trace-grading](/zh-cn/AIWiki/trace-grading/)
- [agent-evals](/zh-cn/AIWiki/agent-evals/)

### 外部参考

- [Vibe Coding: The Power of Artifacts](https://docs.qoder.com/)
- [Building Observability into AI Agents](https://arize.com/)
