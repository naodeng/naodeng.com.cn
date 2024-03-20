---
author: "nao.deng"
title: "30 天 AI 测试挑战活动：第二十天：探索 AI 自愈测试的有效性"
date: "2024-03-21T16:06:44+08:00"
summary: "这篇博文是关于 30 天 AI 测试挑战活动的第二十天，探索 AI 自愈测试的有效性。文章可能包括作者对 AI 自愈测试的定义、目的和方法，以及对其有效性的评估和实践经验。通过分享对 AI 自愈测试的探索和评价，读者将了解到作者对于这一新兴测试方法的看法和认识，以及其在实际测试环境中的应用效果。这个系列活动有望为测试专业人士提供一个了解和探索 AI 在自愈测试中的潜力和限制的机会，并推动行业对于 AI 测试的进一步研究和应用。"
ZHtags: ["探索 AI 自愈测试的有效性","提示词","Prompt","AI"]
ZHcategories: ["软件测试活动"]
ZHseries: ["30 天 AI 测试挑战活动"]
ShowWordCount: true
Draft: true
---

## 第 20 天：探索 AI 自愈测试的有效性

挑战进入倒数第十天，今天我们将深入探讨自愈测试的概念。自愈测试是测试中引入 AI 的早期构想之一，我们想解答三个关键问题：

1. 自愈测试到底是什么意思？
2. 自愈测试有哪些潜在风险？
3. 这项功能真的有用吗？

我们知道，并不是每个人都有兴趣学习新的自动化工具，因此，就像昨天的任务一样，这里提供两个选项供你选择（或者两者都尝试）。

### 任务步骤

**选项 1**：如果你目前使用的工具包含自愈测试功能，或者你对深入了解自愈测试感兴趣并愿意花时间学习新工具，那么这个选项适合你。具体步骤包括：

- **你的工具声称能解决哪类问题？** 阅读你所选工具的文档，理解其对自愈测试的定义。尝试弄清楚该工具声称能解决的测试问题种类及其工作机制。
- **验证其中一个声明**：安排一个 20 分钟的定时测试，以测试工具的某个自愈功能。执行测试，并评价自愈机制的表现如何。一些建议包括：
  - 如果该工具声称能检测到元素定位符的变化，你可以在测试中故意更改定位符使测试失败，然后运行工具，检查其如何修复失败的测试。
  - 如果该工具声称能修正操作顺序，你可以故意调换测试中的两个步骤使其失败，然后运行工具，检查其修复效果如何。
- **这项功能可能在哪里失效？** 基于你测试的声明，假设自愈成功了，自愈功能可能在哪些情况下会失败？你能构想出一个确实会失败的场景吗？

**选项 2**：如果你对了解更多关于自愈测试感兴趣，但没有时间学习新工具，那么这个选项适合你。具体步骤包括：

- **寻找并阅读一篇关于自愈测试的文章或论文**：这可以是研究论文、博客帖子或供应商文档，涉及自愈测试的具体信息。
  - 尝试理解该工具声称能解决的测试问题类型。
  - 尽可能地了解问题是如何被检测和解决的。
- **这样的功能对你的团队有多重要？** 考虑你的团队所面临的挑战，评估自愈测试对你们是否有价值。
- **可能的失败情形？** 根据你的阅读，自愈测试在哪些重要方面可能会失败？比如，它是否可能以一种改变测试原有目的的方式来“修复”测试？

**分享你的洞见**：无论选择哪种探索方式，都请以你的见解回复这篇帖子，分享以下内容：

- 你选择了哪个选项。
- 你对自愈测试的看法（它解决了什么问题，以及如何解决）。
- 自愈测试可能如何给你的团队带来好处或失败。
- 你将多大概率使用（或继续使用）带有此功能的工具。

### 为什么参加

- **加深对自我修复测试的理解**: 迭代的过程中维护测试可能具有挑战性，因此能够减少这种困难的工具非常有价值。通过参与这项测试任务，你将深入理解自愈测试的真正含义以及它们如何帮助你的团队。

- **提高对供应商声明的批判性思考**：在选择支持测试的工具时，我们经常会遇到许多听起来很美好的声明。这个任务让你能够批判性地思考这些声明及其局限性，以及它们可能如何影响你的团队。

### 任务链接

<https://club.ministryoftesting.com/t/day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are/75314>

## 我的第 20 天任务

## 关于活动

30 天 AI 测试挑战活动是 Ministry 测试社区发起的活动，上一次我了解这个社区是关于他们发起的 30 天敏捷测试的活动。

社区官网：<https://www.ministryoftesting.com>

活动链接：<https://www.ministryoftesting.com/events/30-days-of-ai-in-testing>

**挑战**：

- [第一天：介绍你自己以及你对人工智能的兴趣](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-1-introduce-yourself-and-your-interest-in-ai/)
- [第二天：阅读有关测试中的人工智能的介绍性文章并分享](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/)
- [第三天：AI 在测试中的多种应用方式](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-3-list-ways-in-which-ai-is-used-in-testing/)
- [第四天：观看有关测试中人工智能的任何问题视频并分享主要收获](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-4-watch-the-ama-on-artificial-intelligence-in-testing-and-share-your-key-takeaway/)
- [第五天：确定一个测试中的人工智能案例研究，并分享您的发现](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-5-identify-a-case-study-on-ai-in-testing-and-share-your-findings/)
- [第六天：探索并分享对 AI 测试工具的见解](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-6-explore-and-share-insights-on-ai-testing-tools/)
- [第七天：研究并分享提示词工程技术](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-7-research-and-share-prompt-engineering-techniques/)
- [第八天：制作详细的 Prompt 来支持测试活动](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-8-craft-a-detailed-prompt-to-support-test-activities/)
- [第九天：评估提示词质量并努力加以改进](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-9-evaluate-prompt-quality-and-try-to-improve-it/)
- [第十天：批判性分析人工智能生成的测试](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-10-critically-analyse-ai-generated-tests/)
- [第十一天：使用 AI 生成测试数据并评估其功效](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-11-generate-test-data-using-ai-and-evaluate-its-efficacy/)
- [第十二天：评估您是否信任 AI 支持测试并分享您的想法](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/)
- [第十三天：开发你的测试方法并成为 AI 测试的先行者](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-13-develop-a-testing-approach-and-become-an-ai-in-testing-champion/)
- [第十四天：生成 AI 测试代码并分享你的体验](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/)
- [第十五天：衡量测试计划中的短期人工智能](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-15-gauge-your-short-term-ai-in-testing-plans/)
- [第十六天：评估采用 AI 进行无障碍测试并分享您的发现](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-16-evaluate-adopting-ai-for-accessibility-testing-and-share-your-findings/)
- [第十七天：利用人工智能实现缺陷报告自动化，并分享您的流程和评估结果](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-17-automate-bug-reporting-with-ai-and-share-your-process-and-evaluation/)
- [第十八天：分享你在 AI 测试中遇到的最大难题](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-18-share-your-greatest-frustration-with-ai-in-testing/)
- [第十九天：探索 AI 在测试优先级排序中的作用，并评价其利弊](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/)

## 推荐阅读

- [使用 Bruno 进行接口自动化测试快速开启教程系列](https://naodeng.com.cn/zh/zhcategories/bruno/)
- [使用 Postman 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/postman-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Pytest 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/pytest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 SuperTest 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/supertest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Rest Assured 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/rest-assured-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Galting 进行性能测试快速开启教程系列](https://naodeng.tech/zh/zhseries/gatling-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 K6 进行性能测试快速开启教程系列](https://naodeng.com.cn/zh/zhseries/k6-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->