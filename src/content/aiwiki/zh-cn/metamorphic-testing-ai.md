---
title: "AI 系统蜕变测试（Metamorphic Testing）"
titleEn: "Metamorphic Testing for AI Systems"
titleZh: "AI 系统蜕变测试"
slug: "metamorphic-testing-ai"
lang: "zh-cn"
summary: "蜕变测试在缺少唯一标准答案时，检查受控输入变化后模型输出是否保持预期关系。"
topic: "ai-safety-quality"
aliases:
  - "蜕变测试"
  - "Metamorphic testing"
tags:
  - "AI 测试"
  - "测试预言机"
related:
  - "agent-evals"
  - "graders"
  - "trace-grading"
lastReviewedAt: "2026-10-12"
---

# AI 系统蜕变测试（Metamorphic Testing）

## 科普速读

- **它是什么：** 蜕变测试检查输入受控变化后，多个输出之间是否符合预期关系。
- **适合什么场景：** 没有唯一标准答案的系统测试。
- **主要边界：** 预期关系必须符合具体任务。

## 概览

分类器通常不应因输入多了无关空格而改变结果；表格行顺序变化后，抽取的总额也应保持一致。这些检查无需唯一标准答案，也能发现系统不稳定。

## 核心定义

蜕变测试定义变换输入与输出之间应满足的关系，再检查系统是否保持这些关系。

## 背景与发展

这种方法用于难以定义标准答案的软件和机器学习测试。它能补充有限的参考样例，但无法替代合理的测试设计。

## 工作机制（How It Works）

测试者定义输入变换、输出应保持的关系和失败条件。测试分别运行原始输入与变换后的输入，再按设定容差比较输出。

## 在软件测试与开发中的应用

可以测试改写问题后代码助手是否保持数值结论，或分类器是否能承受不影响语义的格式变化。

## 优势与局限

蜕变测试能发现系统对顺序、格式或无关变化过度敏感的问题。它依赖人工定义关系，不能证明输出事实正确。

## 与相近术语对比

标准答案测试把输出和参考结果比较；蜕变测试则按指定变换比较多个输出。两者都可加入评测集。

## 实施建议（Best Practices）

选择不应改变含义的变换，为随机输出设置容差，并保存失败案例的两种输入和模型设置。

## 常见误区（Pitfalls）

不要因为变化看起来很小，就认定它不会改变结果。测试关系必须符合任务和业务规则。

## FAQ

### 没有标准答案，也能做蜕变测试吗？

能。它比较输出之间的预期关系，但这个关系仍须先被正确界定。

## 相关资源

### 相关词条

- [AI Agent 评测](/zh-cn/AIWiki/agent-evals/)
- [Grader](/zh-cn/AIWiki/graders/)
- [轨迹评分](/zh-cn/AIWiki/trace-grading/)

### 参考资料

- [Testing and validating machine learning classifiers by metamorphic testing](https://doi.org/10.1016/j.jss.2010.11.920)
