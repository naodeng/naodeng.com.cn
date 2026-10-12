---
title: "自愈代码"
titleEn: "Self-Healing Code"
slug: "self-healing-code"
lang: "zh-cn"
summary: "能够检测失败并通过验证闭环提出或执行修复的代码与流水线机制。"
topic: "ai-vibe-coding"
aliases:
  - "Auto-remediation code"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "shadow-engineering"
  - "agentic-workflow"
  - "human-in-the-loop"
lastReviewedAt: "2026-10-12"
---
# 自愈代码（Self-Healing Code）

## 科普速读

- **它是什么：** 自愈代码系统会检测问题，并尝试执行指定的恢复或修复。
- **适合什么场景：** 失败重复出现、原因可诊断且恢复步骤安全的情况。
- **主要边界：** 检查通过不代表修复完整或正确。

## 概览

测试流水线检测到格式错误后，可以自动运行格式化工具。更复杂的代码修复可能需要开发者先审核建议，再决定是否应用。

## 核心定义

自愈代码是指能够检测特定故障，并尝试在少量或没有人工介入的情况下恢复的软件。在 AI 辅助开发中，它也可以指 Agent 检测失败后提出或应用代码改动。该术语没有统一的实现标准。

## 背景与发展

服务重启和任务重试等自动恢复机制已有多年应用。AI 工具可以把这种模式扩展到代码建议或修复尝试。自动化程度和审核方式取决于产品和任务。

## 工作机制（How It Works）

1. 检测已知故障或未满足的条件。
2. 收集相关日志、代码和测试结果。
3. 执行预设恢复步骤，或提出代码改动。
4. 运行覆盖该故障的检查。
5. 在限制内停止、重试或请求人工评审。

## 在软件测试与开发中的应用

修复 Agent 可以针对可复现的测试失败提出补丁。人员应确认补丁解决了原因、没有削弱测试，并通过其他相关检查。

## 优势与局限

对于已知且范围明确的故障，自动恢复可以减少人工操作。修复也可能掩盖更深层问题、改变预期行为，或只通过覆盖不全的测试。无限重试还可能重复或放大错误。

## 与相近术语对比

自愈代码会在检测到故障后尝试恢复。代码生成器根据指令创建代码。智能体工作流可以包含修复步骤，也可以执行其他任务。

## 实施建议（Best Practices）

限制修复范围和重试次数。保留原始错误和代码差异。运行针对故障及相关行为的测试。影响广泛或风险较高的改动应经过批准。

## 常见误区（Pitfalls）

不要只用“所有测试通过”定义成功。测试可能不完整或被削弱。不要让 Agent 无限重试或修改无关文件。

## FAQ

### 自愈代码能自动修好所有问题吗？

不能。它可以尝试恢复指定类型的故障。其他问题可能需要诊断、更多测试或人工决策。

## 相关资源

### 相关词条

- [shadow-engineering](https://inaodeng.com/zh-cn/AIWiki/shadow-engineering/)
- [agentic-workflow](https://inaodeng.com/zh-cn/AIWiki/agentic-workflow/)
- [human-in-the-loop](https://inaodeng.com/zh-cn/AIWiki/human-in-the-loop/)

### 参考资料
- [OpenAI Codex introduction (agentic fix workflows)](https://openai.com/index/introducing-codex/)
- [Google Testing Blog (automation reliability practices)](https://testing.googleblog.com/)
