---
author: "nao.deng"
title: "30 天 AI 测试挑战活动：第十六天：评估采用 AI 进行无障碍测试并分享您的发现"
date: "2024-03-17T19:06:44+08:00"
summary: "这篇博文是关于 30 天 AI 测试挑战活动的第十六天，旨在评估采用 AI 进行无障碍测试，并分享个人的发现。文章可能涵盖作者对使用 AI 进行无障碍测试的实际应用经验，包括 AI 工具的选择、测试方法的改进、测试结果的有效性等方面。通过分享对采用 AI 进行无障碍测试的评估和发现，读者将了解作者在实际测试场景中的应用情况，并从中汲取经验和教训。这个系列活动有望为测试专业人士提供一个了解和探索 AI 在无障碍测试领域应用的机会，并促进行业对话和技术创新。"
ZHtags: ["评估采用 AI 进行无障碍测试并分享您的发现","提示词","Prompt","AI","无障碍测试"]
ZHcategories: ["软件测试活动"]
ZHseries: ["30 天 AI 测试挑战活动"]
ShowWordCount: true
---

## 第 16 天：评估采用 AI 进行无障碍测试并分享您的发现

欢迎来到第 16 天！今天，我们将重点转向人工智能增强无障碍测试的潜力。

无障碍测试有助于确保应用程序对具有不同能力（例如视觉、听觉、认知或运动障碍）的个人可用且具有包容性。在许多情况下，确保应用程序可供广泛的用户访问不仅是法律要求，也是道德要求。正如我们在整个挑战中所看到的，人工智能可以在各个测试领域提供优势，并且其增强无障碍测试的潜力也不例外。让我们深入了解如何利用人工智能来改进无障碍测试！

### 任务步骤

- **探索 AI 和无障碍测试**：研究当前如何利用 AI 来支持无障碍测试。探索文章、白皮书或案例研究等资源，了解以下内容：

  - 利用 AI 的工具来自动化无障碍检查，分析用户界面是否符合无障碍标准，甚至生成图像的替代文本描述。
  - AI 如何用于解决更复杂的无障碍问题，例如测试屏幕阅读器的兼容性或检测颜色对比度问题。

- **评估适用性于您的环境**：考虑您的具体情况并进行反思：
  - **无障碍测试需求**：确认在您的项目中无障碍测试至关重要的领域。
  - **AI 的潜在益处**：评估 AI 驱动的无障碍测试工具或技术如何提升您当前测试流程的效率。
  - **潜在限制**：意识到 AI 在无障碍测试中可能存在的局限性。

- **分享您的发现**：通过回复此帖分享您的见解和学习。考虑分享以下内容：

  - 您发现有用的资源链接
  - AI 在您的项目中如何改善无障碍测试
  - 您识别到的潜在限制以及应对策略
  - 您对 AI 在无障碍测试中的整体看法

### 为什么参加

- **促进无障碍测试的发展**：获取有关 AI 如何为创建包容性应用程序做出贡献的宝贵知识。
- **发现新机遇**：发现提升您项目无障碍测试水平的潜在方法。
- **分享您的想法**：通过分享，为他人提供了更深入了解 AI 在无障碍测试中的作用的机会。

### 任务链接

<https://club.ministryoftesting.com/t/day-16-evaluate-adopting-ai-for-accessibility-testing-and-share-your-findings/75212?cf_id=D7lXDERSWoy>

## 我的第 16 天任务

### 1.关于**探索 AI 和无障碍测试**

关于 AI 工具用于无障碍测试的实践，我向 ChatGPT4 进行了咨询，它回复的结论中推荐了一些 AI 工具可用于无障碍测试，ChatGPT4 回复结果如下：

```text

AI 技术在无障碍测试领域的应用日益增多，旨在帮助开发者和测试人员更高效地发现和解决可访问性问题。以下是一些可以用于无障碍测试的 AI 工具：

1. **Axe Core**：虽然 Axe Core 本身是一个自动化的可访问性测试库，它的企业版提供了一些 AI 驱动的功能，用于识别和解决可访问性问题。

2. **AccessiBe**：AccessiBe 使用 AI 来解决网站的可访问性问题。它能够自动识别和修复多种可访问性问题，如导航、键盘功能性以及屏幕阅读器优化等。

3. **UserWay**：UserWay 提供一个 AI 驱动的网站可访问性插件，能够自动解决多种可访问性问题，包括颜色对比度、字体大小、导航以及其他与可访问性相关的问题。

4. **Evinced**：Evinced 是一种开发工具，使用 AI 来帮助开发者在编码过程中识别可访问性问题。它可以集成到开发流程中，提供实时反馈和修复建议。

5. **Fable**：Fable 利用 AI 技术提供模拟真实用户的无障碍测试，特别是针对有视觉和运动障碍人士的测试。它能帮助开发者理解这些用户如何与他们的产品互动。

这些工具可以帮助组织在开发和测试过程中更早地发现并解决可访问性问题，确保他们的产品和服务对所有人都是可访问的。使用这些工具时，重要的是要结合人工测试和用户反馈，因为 AI 和自动化工具可能无法捕捉到所有类型的可访问性问题。
```

但基于之前的 AI 测试挑战任务，我了解到了一个已落地的 AI 无障碍测试的工具 Applitools，我今天的任务会以探索使用 Applitools 工具用于无障碍测试为主。

Applitools 工具关于无障碍测试的官方页面：<https://applitools.com/platform/validate/accessibility/>

Applitools 工具关于 AI 无障碍测试助手 Applitools Contrast Advisor 的介绍：

- Applitools 使团队能够运行自动可访问性测试来验证 WCAG，以帮助确保法规遵从性。
- 在每个版本上运行可访问性测试以获得最大覆盖范围
- Applitools 无缝集成到您现有的测试自动化工作流程中。它应用视觉人工智能来分析网络和移动应用程序是否存在潜在的对比度可访问性违规。
- Contrast Advisor 可帮助您将注意力集中在问题区域，确保您不会在不需要关注的区域上浪费时间和周期。此外，我们已将 Contrast Advisor 直接集成到 Eyes 中，因此无需耗时的设置步骤或工作流程更改。启用后，您甚至不需要重新运行现有测试 - 您可以直接跳到现有仪表板开始查看结果。
- Contrast Advisor 不受扫描网页结构的限制，因此可以为网站、PDF、UX 设计模型以及为 Web、移动 Web、本机移动、桌面等设计的应用程序提供对比建议。
- 正如 W3C 所指出的，移动设备更容易在强烈阳光等条件下使用，这提高了严格对比度合规性的需要。与传统检测方法相比，Contrast Advisor 使用视觉 AI 使其能够识别本机移动应用程序以及移动网络中可能存在的违规行为。
- WCAG 指定了文本以及图形和用户界面组件的最小对比度，但传统工具无法检测到此类违规行为。Contrast Advisor 使用视觉 AI 来检测图像、图形、图标、UI 组件和纯文本中的对比度。
- Contrast Advisor 可以与 Applitools Ultrafast Grid 一起运行，以渲染和检测 Chrome、Firefox、Safari、Edge 和 IE 上的细微对比度差异和可能的违规行为。Contrast Advisor 可以遵守 WCAG 2.0 和更新的 2.1 标准。这包括“AA – 对比度最小”和更严格的“AAA – 对比度增强”选项。

> Applitools 工具提供的 Applitools Contrast Advisor 官方演示介绍<https://www.youtube.com/watch?v=sGXjPJiQwdk>

### 2.关于**评估适用性于您的环境**

#### 我当前项目的**无障碍测试需求**

不幸的是，我当前项目的交付周期比较紧张，无障碍测试需求的重要程度不算太高，但我还是会使用 google 的 lighthouse 工具针对产品的每个核心页面进行无障碍测试评测打分，确保每个核心页面的无障碍测试评分均为高分，对无障碍测试的低分页面建缺陷卡进行排期修复。

以下为当前项目产品某个核心页面的无障碍测试评分：

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/8Z4XpX.png)

#### **AI 的潜在益处**

通过使用 lighthouse 工具对页面进行无障碍测试评测，一定程度上能解决项目的无障碍测试需求，但是我查看了 lighthouse 关于无障碍测试的评分规则后，发现 lighthouse 能发现的无障碍测试问题非常的有限，页面的无障碍测试评分高，不一定真的能让人无障碍的使用。

如果有一个专业的无障碍测试且检测符合各种无障碍法规的 AI 工具，那一定能提升项目无障碍测试的效率，确保项目的无障碍测试结果符合法规

#### **潜在限制**

因为是使用 AI 工具，而且当前项目为未发布的产品，AI 工具通用的数据隐私安全和结果偏见不确定性都会存在一定的风险。

### 3.关于**分享您的发现**

我是申请试用了 Applitools 的无障碍测试助手 Applitools Contrast Advisor。以下为试用报告：

申请试用链接：<https://applitools.com/platform/validate/accessibility/>

试用 Applitools 首先是需要注册账号，且必须为公司邮箱地址并需提供公司信息

注册账号且邮箱校验通过后会有一些工具的调查问卷：
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/d2o4KM.png)

之后我选择了 Playwright 并按照官方的介绍文档进行了初始化，<https://applitools.com/tutorials/quickstart/web/playwright/typescript/quickstart>

- 获取 APPLITOOLS_API_KEY
- 设置 APPLITOOLS 本地环境​
- 安装 Applitools​
- 运行测试

官方 demo 测试代码如下：

```Typescript
import { test } from '@playwright/test';
import { BatchInfo, Configuration, EyesRunner, VisualGridRunner, BrowserType, DeviceName, ScreenOrientation, Eyes, Target } from '@applitools/eyes-playwright';

export let Batch: BatchInfo;
export let Config: Configuration;
export let Runner: EyesRunner;

test.beforeAll(async() => {

    // Configure Applitools SDK to run on the Ultrafast Grid
    Runner = new VisualGridRunner({ testConcurrency: 5 });
    Batch = new BatchInfo({name: `Playwright Typescript Quickstart`});

    Config = new Configuration();
    Config.setBatch(Batch);
    Config.addBrowsers(
        { name: BrowserType.CHROME, width: 800, height: 600 },
        { name: BrowserType.FIREFOX, width: 1600, height: 1200 },
        { name: BrowserType.SAFARI, width: 1024, height: 768 },
        { chromeEmulationInfo: { deviceName: DeviceName.iPhone_11, screenOrientation: ScreenOrientation.PORTRAIT} },
        { chromeEmulationInfo: { deviceName: DeviceName.Nexus_10, screenOrientation: ScreenOrientation.LANDSCAPE} }
    )
});

test.describe('ACME Bank', () => {
    let eyes: Eyes;
    test.beforeEach(async ({ page }) => {
        eyes = new Eyes(Runner, Config);

        // Start Applitools Visual AI Test
        // Args: Playwright Page, App Name, Test Name, Viewport Size for local driver
        await eyes.open(page, 'ACME Bank', `Playwright Typescript: Quickstart`, { width: 1200, height: 600 })
    });
    
    test('log into a bank account', async ({ page }) => {
        await page.goto('https://sandbox.applitools.com/bank?layoutAlgo=true');

        // Full Page - Visual AI Assertion
        await eyes.check('Login page', Target.window().fully());

        await page.locator('id=username').fill('user');
        await page.locator('id=password').fill('password');
        await page.locator('id=log-in').click();
        await page.locator('css=.dashboardNav_navContainer__kA4wD').waitFor({state: 'attached'});

        // Full Page - Visual AI Assertion
        await eyes.check('Main page', Target.window().fully()
            .layoutRegions(
                '.dashboardOverview_accountBalances__3TUPB',
                '.dashboardTable_dbTable___R5Du'
            )
        );
    });

    test.afterEach(async () => {
        // End Applitools Visual AI Test
        await eyes.close();
    });
});

test.afterAll(async() => {
    // Wait for Ultrast Grid Renders to finish and gather results
    const results = await Runner.getAllTestResults();
    console.log('Visual test results', results);
});
```

然后就运行测试失败了。

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/HtcTxq.png)

排查发现是我第一步设置环境变量出错了，重新设置环境变量后，demo 测试可以正常运行通过。

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/blqBmp.png)

然后登录 applitools eyes 查看测试结果

![我的 demo 截图](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/gTMNvw.png)

在结果页面查看无障碍测试结果和启动 Applitools Contrast Advisor 时，发现测试结果无 Applitools Contrast Advisor 标识展示，与官方介绍视频中存在差异。

![官方宣传 demo 截图](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2P12hs.png)

今天的试用不太顺利，后面我会继续尝试后再更新更多的使用结果。

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