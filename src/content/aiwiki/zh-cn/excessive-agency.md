---
title: "过度代理权限（Excessive Agency）"
titleEn: "Excessive Agency"
titleZh: "过度代理权限"
slug: "excessive-agency"
lang: "zh-cn"
summary: "过度代理权限指 AI 应用赋予模型不必要的工具、权限或自主程度，令错误输出造成更大影响。"
topic: "ai-safety-quality"
aliases:
  - "过度自主"
  - "Agent 权限过宽"
tags:
  - "Agent 安全"
  - "最小权限"
related:
  - "ai-agent"
  - "agent-authorization"
  - "prompt-injection"
lastReviewedAt: "2026-10-12"
---

# 过度代理权限（Excessive Agency）

## 科普速读

- **它是什么：** 过度代理权限指 Agent 获得了超出任务需要的工具或权限。
- **适合什么场景：** 评估模型小错误会怎样影响真实系统。
- **主要边界：** 改进提示词不能撤销工具权限。

## 概览

邮件摘要 Agent 可能只需读取邮箱。如果它还能删除和转发邮件，一次错误操作就可能泄露或破坏数据。

## 核心定义

当 AI 应用赋予 Agent 超过任务所需的功能、权限或自主程度时，就构成过度代理权限。

## 背景与发展

能调用工具的 Agent 会把模型输出变成实际操作。安全指南将不必要的工具、过宽权限和过高自主性视为放大错误影响的因素。

## 工作机制（How It Works）

风险取决于模型能请求什么，以及系统会执行什么。提示注入或错误计划只有在工具和权限允许时，才可能造成实际影响。

## 在软件测试与开发中的应用

检查代码 Agent 可用的工具，并测试它能否读取无关文件、修改受保护分支、删除数据或绕过审批部署。

## 优势与局限

移除不必要的访问权限可以降低错误和攻击造成的影响。最小权限不能避免错误回答，也不能阻止所有获准操作被滥用。

## 与相近术语对比

提示注入会影响模型行为；过度代理权限则是权限和系统设计问题，会让这种影响造成实际后果。

## 实施建议（Best Practices）

从只读权限开始，提供任务专用工具；写入或外部操作单独审批，并记录每项操作。

## 常见误区（Pitfalls）

不要依赖系统提示词执行操作系统或 API 权限。访问限制必须由工具宿主强制执行。

## FAQ

### 只加强系统提示，能解决过度代理权限吗？

不能。提示词可能影响模型选择，但必须单独收紧工具权限。

## 相关资源

### 相关词条

- [AI 智能体](/zh-cn/AIWiki/ai-agent/)
- [Agent 授权](/zh-cn/AIWiki/agent-authorization/)
- [提示注入](/zh-cn/AIWiki/prompt-injection/)

### 参考资料

- [OWASP LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
