---
title: "氛围编程"
titleEn: "Vibe Coding"
slug: "vibe-coding"
lang: "zh-cn"
summary: "一种以自然语言描述意图、再迭代修正 AI 生成代码的开发方式。"
topic: "ai-vibe-coding"
aliases:
  - "Intent-first coding"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agentic-workflow"
  - "prompt-driven-development"
  - "ai-pair-programming"
  - "acp-agent-client-protocol"
  - "antigravity"
  - "cursor"
  - "gemini"
  - "zero-shot-coding"
lastReviewedAt: "2026-10-12"
---
# 氛围编程（Vibe Coding）

## 科普速读

- **它是什么：** 氛围编程是通过自然语言提出需求，并反复借助 AI 修改代码的一种非正式方式。
- **适合什么场景：** 探索想法或制作由人员评审的原型。
- **主要边界：** 快速改动可能掩盖缺陷、安全问题和维护成本。

## 概览

开发者可以让 AI 工具起草一个简单的设置页面，运行后指出缺少的内容。真正使用之前，开发者仍需检查代码和行为。

## 核心定义

氛围编程是一个非正式术语，描述通过较高层次的意图和反复迭代来指导 AI 生成代码。它没有规定正式的开发流程。规划、代码评审和测试的程度各不相同。

## 背景与发展

这个术语可以指多种 AI 辅助编码做法，从生成小型原型到使用智能体编辑器连续修改代码。它不是软件开发的固定阶段，也不意味着无需架构设计或测试。

## 工作机制（How It Works）

1. 描述预期行为和约束。
2. 请 AI 工具起草或修改代码。
3. 运行结果并观察实际行为。
4. 提供具体反馈，或直接修改代码。
5. 检查最终差异并运行相关测试。

## 在软件测试与开发中的应用

可以用这种方式探索界面想法、生成原型或尝试小范围实现。生产代码或影响较大的行为仍需更严格的设计评审和测试。

## 优势与局限

自然语言可以降低起草第一版代码的难度。反复修改也可能留下不一致代码或未经测试的假设。结果取决于指令质量、项目上下文、工具和评审。

## 与相近术语对比

AI 结对编程让开发者持续参与每项决策。氛围编程描述一种非正式、由意图驱动的编码方式。智能体工作流可以把多个操作委派给 Agent。这些术语可能重叠。

## 实施建议（Best Practices）

控制单次改动范围，说明预期行为和约束。检查代码差异并运行测试。无法核验实现时，应先要求解释。

## 常见误区（Pitfalls）

不要把页面预览当成功能正常的证明。原型看起来正确，也不能成为跳过安全、无障碍或维护评审的理由。

## FAQ

### 氛围编程意味着开发者不需要读代码吗？

不是。开发者仍需评审并验证准备使用的代码。

## 相关资源

### 相关词条

- [agentic-workflow](https://inaodeng.com/zh-cn/AIWiki/agentic-workflow/)
- [prompt-driven-development](https://inaodeng.com/zh-cn/AIWiki/prompt-driven-development/)
- [ai-pair-programming](https://inaodeng.com/zh-cn/AIWiki/ai-pair-programming/)

### 参考资料
- [Wikipedia: Vibe coding](https://en.wikipedia.org/wiki/Vibe_coding)
- [IBM: What is Vibe Coding?](https://www.ibm.com/think/topics/vibe-coding)
