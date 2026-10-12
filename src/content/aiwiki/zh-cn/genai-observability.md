---
title: "GenAI 可观测性"
titleEn: "GenAI Observability"
titleZh: "GenAI 可观测性"
slug: "genai-observability"
lang: "zh-cn"
summary: "GenAI 可观测性记录模型调用、工具步骤、耗时与错误，帮助定位工作流问题并追踪运行行为。"
topic: "ai-safety-quality"
aliases:
  - "生成式 AI 可观测性"
tags:
  - "OpenTelemetry"
  - "运维"
related:
  - "trace-grading"
  - "agent-evals"
  - "model-context-protocol-mcp"
lastReviewedAt: "2026-10-12"
---

# GenAI 可观测性

## 科普速读

- **它是什么：** GenAI 可观测性记录模型和工具调用的运行情况。
- **适合什么场景：** 定位回答背后的延迟、错误和工作流路径。
- **主要边界：** Trace 不能直接判断答案质量。

## 概览

一次回答可能经过检索、模型调用、工具、重试和后处理。仅看最终文本，未必能知道哪一步报错或最耗时。

## 核心定义

GenAI 可观测性使用日志、指标和追踪来检查生成式 AI 系统的运行行为。

## 背景与发展

分布式追踪早已用于跟踪跨服务请求。GenAI 增加了模型调用、提示词、工具参数、token 数量和模型版本等遥测字段。

## 工作机制（How It Works）

Trace 把同一请求中的操作关联起来；日志记录事件，指标汇总数量或延迟，追踪则显示各步骤的顺序和耗时。

## 在软件测试与开发中的应用

为代码工作流增加遥测，区分测试慢是由检索、模型延迟还是工具重试引起。模型或提示词变化后，也可以对比追踪记录。

## 优势与局限

遥测让故障更容易定位和比较。提示词与工具参数可能包含密钥或个人信息；Trace 本身也不能证明答案正确。

## 与相近术语对比

可观测性描述运行行为；Agent 评测衡量任务结果；轨迹评分则对 Trace 中选定的操作或输出打分。

## 实施建议（Best Practices）

只记录工作所需的信息，对敏感字段脱敏，限制访问，设置保留期限，并固定语义约定版本。

## 常见误区（Pitfalls）

不要默认记录完整提示词和输出。Trace 再完整，也不能证明系统给出了好答案。

## FAQ

### 完整 Trace 能说明答案质量好吗？

不能。它显示调用、耗时和状态；质量还需评测或人工检查。

## 相关资源

### 相关词条

- [轨迹评分](/zh-cn/AIWiki/trace-grading/)
- [AI Agent 评测](/zh-cn/AIWiki/agent-evals/)
- [MCP](/zh-cn/AIWiki/model-context-protocol-mcp/)

### 参考资料

- [OpenTelemetry GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai)
