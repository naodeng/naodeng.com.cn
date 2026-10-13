---
title: "AI 红队测试（AI Red Teaming）"
titleEn: "AI Red Teaming"
titleZh: "AI 红队测试"
slug: "ai-red-teaming"
lang: "zh-cn"
summary: "AI 红队测试以对抗性场景探查模型、检索、工具和权限控制的失效方式，帮助团队发现待修复风险。"
topic: "ai-safety-quality"
aliases:
  - "生成式 AI 红队"
tags:
  - "安全测试"
  - "风险评估"
related:
  - "prompt-injection"
  - "jailbreak-attack"
  - "agent-evals"
  - "metamorphic-testing-ai"
lastReviewedAt: "2026-10-12"
---

# AI 红队测试（AI Red Teaming）

## 科普速读

- **它是什么：** 红队测试用有计划的对抗场景探查 AI 系统。
- **适合什么场景：** 查找提示词、检索、工具和权限之间的攻击路径。
- **主要边界：** 没发现问题，只能说明本次测试范围内没有发现。

## 概览

模型可能遵循文档中隐藏的恶意指令，调用工具后泄露数据。只检查聊天回答，可能看不到这条系统级路径。

## 核心定义

AI 红队测试是有组织地查找 AI 系统可能被误导、滥用或导致失效的方法。

## 背景与发展

红队方法来自安全测试。AI 系统还包含模型行为、检索内容、工具和人工审核，因此这些部分都可能需要检查。

## 工作机制（How It Works）

团队先明确测试范围、账号、数据、停止条件和证据处理方式。测试者执行对抗场景，记录可复现结果，并跟踪修复和回归。

## 在软件测试与开发中的应用

可以测试提示注入、不安全工具调用、敏感信息暴露和代码工作流故障。保留测试输入与受影响版本，方便团队复现问题。

## 优势与局限

对抗性测试能发现普通任务集可能漏掉的故障。测试结果不能证明系统安全，且测试必须遵守批准的范围。

## 与相近术语对比

红队测试寻找意外攻击路径；评测衡量系统在预设任务上的表现。两者可以共用案例，但回答的问题不同。

## 实施建议（Best Practices）

事先约定测试规则，使用合成或获准的数据，记录影响和前置条件，为每项发现指定负责人，并在修复后回归。

## 常见误区（Pitfalls）

不要把“没有发现问题”写成“没有问题”。报告应包含受影响版本、复现步骤和处理状态。

## FAQ

### 一次红队测试没有发现问题，能证明系统安全吗？

不能。结论只适用于本次覆盖的版本、路径和场景。

## 相关资源

### 相关词条

- [提示注入](/zh-cn/AIWiki/prompt-injection/)
- [越狱攻击](/zh-cn/AIWiki/jailbreak-attack/)
- [AI Agent 评测](/zh-cn/AIWiki/agent-evals/)

### 参考资料

- [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
