---
author: "nao.deng"
title: "30 天 AI 测试挑战活动：第十七天：利用人工智能实现缺陷报告自动化，并分享你的流程和评估结果"
date: "2024-03-18T10:06:44+08:00"
summary: "这篇博文是关于 30 天 AI 测试挑战活动的第十七天，探讨利用人工智能实现缺陷报告自动化，并分享个人的流程和评估结果。文章可能涵盖作者使用人工智能技术自动化缺陷报告的过程，包括工具选择、实施方法、自动化流程的优势以及评估结果。通过分享自动化缺陷报告的流程和评估结果，读者将了解作者在实践中的经验和教训，以及人工智能技术在提高缺陷管理效率方面的潜力。这个系列活动有望为测试专业人士提供一个了解和探索利用人工智能实现缺陷报告自动化的机会，并促进行业技术的进步和创新。"
ZHtags: ["利用人工智能实现缺陷报告自动化，并分享你的流程和评估结果","提示词","人工智能"]
ZHcategories: ["软件测试活动"]
ZHseries: ["30 天 AI 测试挑战活动"]
ShowWordCount: true
---

## 第 17 天：利用人工智能实现缺陷报告自动化，并分享你的流程和评估结果

今天是第 17 天！今天，我们将探索使用人工智能自动化缺陷检测和报告流程的潜力。

作为测试人员，我们知道高效的缺陷报告对于与团队的有效沟通和协作非常重要。然而，这个过程可能非常耗时且容易出错，特别是在处理复杂的应用程序或大型测试套件时。人工智能驱动的缺陷报告工具有望通过自动检测和报告缺陷来简化这一过程，从而可能节省时间并提高准确性。

然而，与任何人工智能技术一样，严格评估使用人工智能进行缺陷报告的有效性和潜在风险非常重要。在今天的任务中，我们将尝试使用人工智能工具来检测和报告缺陷并评估其质量。

### 任务步骤

- **尝试 AI 进行缺陷报告**: 选择一个 AI 缺陷检测和报告工具或平台。在这个挑战的早期，我们列出了工具及其特性的清单，因此请回顾那些帖子或进行自己的研究。许多免费或试用版本都可以在线获得。探索工具的功能，并在一个样本应用程序或项目上进行实验。

- **评估报告质量**: 评估 AI 生成的缺陷报告的准确性、完整性和质量。考虑：

  - AI 识别的缺陷是否有效？
  - AI 生成的报告是否详细、清晰且具有可操作性？
  - 信息质量与手动创建的缺陷报告相比如何？

- **识别风险和限制**: 反思与使用 AI 自动化缺陷报告相关的潜在风险：

  - **误报**: AI 标记不存在的问题的可能性有多大？
  - **漏报**: AI 是否可能完全忽略关键缺陷？
  - **偏见**: AI 是否可能偏向于某些类型的缺陷或代码结构？

- **数据使用和保护**: 调查 AI 工具如何利用你的缺陷数据生成报告。考虑以下问题：

  - **数据匿名化**: 你的数据在被 AI 使用之前是否被匿名化？
  - **数据安全**: 你的数据在工具内部如何安全？
  - **数据所有权**: 由 AI 工具收集的数据归谁所有？

- **分享你的发现**: 在此帖子中总结你的经验。考虑包括：

  - 你使用的 AI 工具及其功能的体验
  - 你对缺陷报告质量的评估
  - 你识别的风险和限制
  - 你对数据使用和潜在数据保护问题的看法
  - 你对 AI 在自动化缺陷检测和报告方面的整体评估，考虑：

    - 它与你传统的缺陷报告方法相比如何？
    - 它是否识别了你可能会忽略的任何缺陷？
    - 它如何影响缺陷报告过程的整体效率？

### 参与原因

- **探索效率提升**: 了解 AI 如何改进缺陷报告流程，潜在地节省时间并提高报告质量。
- **了解 AI 的限制**: 通过对用于缺陷报告的 AI 工具进行批判性评估，你将深入了解其当前的能力和限制，有助于设定现实的预期。
- **增强测试实践**: 分享你的发现有助于我们共同理解 AI 在自动化缺陷检测和报告中的作用和潜力。

### 任务链接

<https://club.ministryoftesting.com/t/day-17-automate-bug-reporting-with-ai-and-share-your-process-and-evaluation/75214?cf_id=vP97XO6Uv94>

## 我的第 17 天任务

今天的任务让我有一些挣扎，目前我还没有完全使用过 AI 测试工具进行缺陷报告，目前大部分的 AI 工具都需要注册且登录后进行申请试用，大部分的数据都会被这些工具平台去收集，我试用这些工具时都比较谨慎，担心数据隐私泄露，由于使用的限制和数据安全的考虑，试用的时间不够充分，估无法评估工具的质量和进行详细的分享。

1.**评估 AI 报告质量**

之前试用 Applitools eyes 工具，它会以清晰截图对比的方式进行缺陷报告，不用我们再花时间去复现和构造场景

2.**识别风险和限制**

由于试用时间有限，目前未发现有什么漏报和误报的风险

3.**数据使用和保护**

目前看起来 Applitools eyes 工具的安全风险和数据保护做的一般，本地配置 api key 运行测试后，Applitools eyes 平台就能获取测试过程截图和结果，我个人担心存在数据隐私泄露的问题。

4.**分享你的发现**

基于之前使用其他 AI 测试工具和 这一次使用 Applitools eyes 工具，与人工缺陷报告的差异点：

- AI 工具识别到缺陷后就直接反馈缺陷了，而不像人工发现缺陷后会多次复现和识别，确认缺陷的有效性和真实性。
- AI 工具缺陷上报会有清晰的复现步骤，而人工缺陷报告时常出现忘记复现步骤导致偶发缺陷遗漏的情况。
- AI 工具上报的缺陷会相对死板，可能会让修复的开发人员感到困惑。

## 关于活动

30 天 AI 测试挑战活动是 Ministry 测试社区发起的活动，上一次我了解这个社区是关于他们发起的 30 天敏捷测试的活动。

社区官网：<https://www.ministryoftesting.com>

活动链接：<https://www.ministryoftesting.com/events/30-days-of-ai-in-testing>

**挑战**：

- [第一天：介绍你自己以及你对人工智能的兴趣](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-1-introduce-yourself-and-your-interest-in-ai/)
- [第二天：阅读有关测试中的人工智能的介绍性文章并分享](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/)
- [第三天：AI 在测试中的多种应用方式](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-3-list-ways-in-which-ai-is-used-in-testing/)
- [第四天：观看有关测试中人工智能的任何问题视频并分享主要收获](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-4-watch-the-ama-on-artificial-intelligence-in-testing-and-share-your-key-takeaway/)
- [第五天：确定一个测试中的人工智能案例研究，并分享你的发现](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-5-identify-a-case-study-on-ai-in-testing-and-share-your-findings/)
- [第六天：探索并分享对 AI 测试工具的见解](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-6-explore-and-share-insights-on-ai-testing-tools/)
- [第七天：研究并分享提示词工程技术](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-7-research-and-share-prompt-engineering-techniques/)
- [第八天：制作详细的 Prompt 来支持测试活动](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-8-craft-a-detailed-prompt-to-support-test-activities/)
- [第九天：评估提示词质量并努力加以改进](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-9-evaluate-prompt-quality-and-try-to-improve-it/)
- [第十天：批判性分析人工智能生成的测试](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-10-critically-analyse-ai-generated-tests/)
- [第十一天：使用 AI 生成测试数据并评估其功效](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-11-generate-test-data-using-ai-and-evaluate-its-efficacy/)
- [第十二天：评估你是否信任 AI 支持测试并分享你的想法](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/)
- [第十三天：开发你的测试方法并成为 AI 测试的先行者](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-13-develop-a-testing-approach-and-become-an-ai-in-testing-champion/)
- [第十四天：生成 AI 测试代码并分享你的体验](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/)
- [第十五天：衡量测试计划中的短期人工智能](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-15-gauge-your-short-term-ai-in-testing-plans/)
- [第十六天：评估采用 AI 进行无障碍测试并分享你的发现](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-16-evaluate-adopting-ai-for-accessibility-testing-and-share-your-findings/)

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