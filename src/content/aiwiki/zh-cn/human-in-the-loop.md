---
title: "人机协同（HITL）"
titleEn: "Human-in-the-loop (HITL)"
slug: "human-in-the-loop"
lang: "zh-cn"
summary: "在 AI 自动化流程中保留人工审核与干预的控制策略，尤其用于高风险输出。"
topic: "ai-vibe-coding"
aliases:
  - "HITL"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agentic-workflow"
  - "self-healing-code"
  - "ai-agent"
lastReviewedAt: "2026-10-12"
---
# 人机协同（Human-in-the-Loop）

## 科普速读

- **它是什么：** 人机协同是在 AI 工作流的指定节点安排人员参与。
- **适合什么场景：** 需要上下文判断、批准或责任确认的决策。
- **主要边界：** 任务和证据不清楚时，人工评审也可能缓慢或不一致。

## 概览

助手可以起草数据库迁移方案。由于变更可能影响数据，人员可以先审核方案，再批准执行。

## 核心定义

Human-in-the-loop（HITL，人机协同）是一种工作流设计：人员在指定节点提供信息、检查结果或批准操作。有些任务必须经过人工审核，另一些任务则不需要。

## 背景与发展

自动化决策系统长期包含人工审核。AI 工作流会在不确定、影响较大或需要领域知识的环节安排人员参与。人工审核没有唯一固定模式。

## 工作机制（How It Works）

1. 明确哪些决策需要人员参与。
2. 向评审者展示请求、证据和可能影响。
3. 允许评审者批准、拒绝、修改或请求补充信息。
4. 工作流需要审计记录时，保存决策。
5. 将不确定或影响较大的案例交给适当人员处理。

## 在软件测试与开发中的应用

人员可以批准生产部署、检查 AI 生成的安全修复，或处理互相矛盾的测试证据。低风险草稿可以采用较轻的评审；涉及数据或基础设施的改动则需要更严格的审核。

## 优势与局限

人员可以补充领域上下文，也可能发现自动检查漏掉的错误。评审者也可能负担过重、判断不一致或缺少必要信息。加入评审步骤本身不能保证系统安全。

## 与相近术语对比

HITL 描述人员在工作流中的职责。人工监督范围更广，也可能包含监控和治理。权限策略决定某项操作能否执行。只有独立训练流程使用反馈标签时，标签才会影响模型训练。

## 实施建议（Best Practices）

根据影响和不确定性设置评审节点。向评审者提供相关证据和可能后果。提供拒绝或暂停操作的方式，并监控评审质量与工作量。

## 常见误区（Pitfalls）

不要让人员不加区分地审核每项决策。不要假设点击“批准”就代表已充分评审。除非定义了训练流程，否则不要把反馈视为模型训练数据。

## FAQ

### 每项 AI 操作都应由人员审核吗？

不需要。应根据影响、不确定性和现有防护措施决定审核要求。

## 相关资源

### 相关词条

- [agentic-workflow](https://inaodeng.com/zh-cn/AIWiki/agentic-workflow/)
- [self-healing-code](https://inaodeng.com/zh-cn/AIWiki/self-healing-code/)
- [ai-agent](https://inaodeng.com/zh-cn/AIWiki/ai-agent/)

### 参考资料
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [OECD AI principles overview](https://oecd.ai/en/ai-principles)
