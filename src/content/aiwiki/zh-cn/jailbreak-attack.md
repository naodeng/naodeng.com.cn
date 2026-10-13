---
title: "越狱攻击（Jailbreak Attack）"
titleEn: "Jailbreak Attacks"
titleZh: "越狱攻击"
slug: "jailbreak-attack"
lang: "zh-cn"
summary: "越狱攻击试图用提示、角色设定或输入变形诱导模型绕过开发者设置的安全行为。"
topic: "ai-safety-quality"
aliases:
  - "Jailbreak"
  - "安全策略绕过"
tags:
  - "LLM 安全"
  - "红队测试"
related:
  - "prompt-injection"
  - "ai-red-teaming"
  - "agent-evals"
lastReviewedAt: "2026-10-12"
---

# 越狱攻击（Jailbreak Attack）

## 科普速读

- **它是什么：** 越狱攻击试图让模型绕过预期的安全行为。
- **适合什么场景：** 检查对抗性输入下的模型防护。
- **主要边界：** 模型拒答不能限制系统权限。

## 概览

攻击者可能使用角色设定、连续提问或变形文字影响模型回答。若模型能调用工具，行为失效可能进一步影响数据或系统操作。

## 核心定义

越狱攻击尝试诱导模型绕过预期安全行为或拒答边界。

## 背景与发展

越狱方法会随模型和防护变化。测试结论只适用于受测模型、配置和输入，不应推广到所有系统。

## 工作机制（How It Works）

攻击者改变上下文或请求表达，试图让模型偏离预期规则。模型是否能因此执行现实操作，还取决于外部工具和权限设置。

## 在软件测试与开发中的应用

可以用获准的对抗案例测试代码助手。记录模型版本、指令、工具和结果，防护或配置变化后重新测试。

## 优势与局限

测试能暴露模型行为和安全控制中的缺口。单一提示过滤器或拒答行为无法覆盖所有攻击路径。

## 与相近术语对比

越狱针对模型行为边界；提示注入通过用户输入或外部内容传入恶意指令。两者可能同时发生。

## 实施建议（Best Practices）

采用多层防护：校验输入、限制工具权限、对高影响操作要求审批，并同时测试正常任务和攻击场景。

## 常见误区（Pitfalls）

不要把模型拒答当成访问控制。一次绕过成功，也不代表所有模型或版本都会受影响。

## FAQ

### 越狱测试能证明模型安全吗？

不能。它只能发现测试范围内的问题；模型或系统变化后仍要继续测试。

## 相关资源

### 相关词条

- [提示注入](/zh-cn/AIWiki/prompt-injection/)
- [AI 红队测试](/zh-cn/AIWiki/ai-red-teaming/)
- [AI Agent 评测](/zh-cn/AIWiki/agent-evals/)

### 参考资料

- [OWASP LLM Top 10 2025](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
