---
author: "nao.deng"
title: "30 Days of AI in Testing Challenge: Day 16: Evaluate adopting AI for accessibility testing and share your findings"
date: "2024-03-17T19:06:44+08:00"
summary: "This blog post is about Day 16 of the 30-Day AI Testing Challenge to evaluate the adoption of AI for accessibility testing and share personal findings. The article may cover the author's experience with the practical application of accessibility testing with AI, including the selection of AI tools, improvement of testing methods, and validity of test results. By sharing evaluations and findings on accessibility testing with AI, readers will learn about the authors' applications in real-world testing scenarios and learn from their experiences and lessons learned. This series promises to provide an opportunity for testing professionals to learn about and explore the use of AI in the field of accessibility testing, and to foster industry dialog and technological innovation."
tags: ["Evaluate adopting AI for accessibility testing and share your findings","prompt engineering","Prompt","accessibility testing","AI"]
categories: ["Testing Challenge"]
series: ["30 Days of AI in Testing Challenge"]
ShowWordCount: true
---

## Day 16: Evaluate adopting AI for accessibility testing and share your findings

Welcome to day 16! Today we turn our focus towards the potential of AI to enhance accessibility testing.

Accessibility testing helps ensure that applications are usable and inclusive for individuals with diverse abilities, such as visual, auditory, cognitive, or motor impairments. Ensuring applications are accessible to a wide range of users is, in many cases, a legal requirement but also a moral imperative. As we have seen throughout this challenge, AI can offer advantages in various areas of testing, and its potential to enhance accessibility testing is no different. Let’s dive in and discover how AI can be leveraged to improve accessibility testing!

### Task Steps

- **Research AI and Accessibility Testing**: Research how AI is currently being used to support accessibility testing. Explore resources like articles, whitepapers, or case studies that discuss:

  - Tools that leverage AI to automate accessibility checks, analyse user interfaces for compliance with accessibility standards, or even generate alternative text descriptions for images.
  - How AI can be used to address accessibility challenges beyond basic UI checks, such as testing for screen reader compatibility or detecting colour contrast issues.

- **Evaluate Applicability in Your Context**: Consider your context and reflect on:
  - **Accessibility testing needs**: Identify areas where accessibility testing is crucial for your projects
  - **Potential benefits of AI**: Evaluate how AI-powered accessibility testing tools or techniques could improve your current testing process.
  - **Potential limitations**: Be mindful of the potential limitations of AI for accessibility testing.

- **Share Your Findings**: Respond to this post with your insights and learnings. Consider sharing:

  - Links to the resources you found helpful
  - How AI could benefit accessibility testing in your context
  - Potential limitations you identified and how they could be mitigated
  - Your overall perspective on the role of AI in accessibility testing

### Why Take Part

- **Improve Accessibility Testing**: Gain valuable knowledge about how AI can contribute to creating inclusive applications.
- **Identify Opportunities**: Discover potential ways to enhance accessibility testing in your projects.
- **Sharing Your Thoughts**: By sharing, you contribute to the collective understanding of AI’s role in accessibility testing.

### Task Link

<https://club.ministryoftesting.com/t/day-16-evaluate-adopting-ai-for-accessibility-testing-and-share-your-findings/75212?cf_id=D7lXDERSWoy>

## My Day 16 Task

### 1. About **Research AI and Accessibility Testing**

Regarding the practice of using AI tools for accessibility testing, I consulted ChatGPT4, and in its reply, it recommended some AI tools that can be used for accessibility testing. The response from ChatGPT4 is as follows:

```text
The application of AI technology in the field of accessibility testing is increasing, aiming to help developers and testers more efficiently discover and solve accessibility issues. Here are some AI tools that can be used for accessibility testing:

1. **Axe Core**: Although Axe Core itself is an automated accessibility testing library, its enterprise edition offers some AI-driven features for identifying and solving accessibility issues.

2. **AccessiBe**: AccessiBe uses AI to address accessibility issues on websites. It can automatically identify and fix a variety of accessibility problems, such as navigation, keyboard functionality, and screen reader optimization.

3. **UserWay**: UserWay provides an AI-driven website accessibility plugin that can automatically resolve a variety of accessibility issues, including color contrast, font size, navigation, and other accessibility-related problems.

4. **Evinced**: Evinced is a development tool that uses AI to help developers identify accessibility issues during the coding process. It can be integrated into the development workflow to provide real-time feedback and suggestions for fixes.

5. **Fable**: Fable uses AI technology to provide accessibility testing that simulates real users, especially for those with visual and motor impairments. It helps developers understand how these users interact with their products.

These tools can help organizations discover and solve accessibility issues earlier in the development and testing process, ensuring their products and services are accessible to everyone. When using these tools, it's important to combine them with manual testing and user feedback, as AI and automated tools may not catch all types of accessibility issues.
```

But based on previous AI testing challenges, I learned about an AI accessibility testing tool, Applitools, that has been deployed. My task today will focus on exploring the use of the Applitools tool for accessibility testing.

Applitools tool's official page on accessibility testing: <https://applitools.com/platform/validate/accessibility/>

Introduction to Applitools' AI Accessibility Testing Assistant, Applitools Contrast Advisor:

- Applitools enables teams to run automated accessibility tests to verify WCAG compliance, helping ensure regulatory compliance.
- Run accessibility tests on every release for maximum coverage.
- Applitools seamlessly integrates into your existing test automation workflow. It applies visual AI to analyze whether web and mobile applications have potential contrast accessibility violations.
- Contrast Advisor helps you focus on problem areas, ensuring you don’t waste time and cycles on areas that don’t need attention. Additionally, we’ve integrated Contrast Advisor directly into Eyes, so there’s no need for time-consuming setup steps or workflow changes. Once enabled, you don’t even need to rerun existing tests - you can jump straight to your existing dashboard to start reviewing results.
- Contrast Advisor is not limited by webpage structure scanning, so it can provide contrast suggestions for websites, PDFs, UX design models, and applications designed for Web, mobile Web, native mobile, desktop, etc.
- As W3C points out, mobile devices are more likely to be used under conditions such as strong sunlight, which increases the need for strict contrast compliance. Compared to traditional detection methods, Contrast Advisor uses visual AI, enabling it to identify violations in native mobile applications and mobile web.
- WCAG specifies minimum contrast for text as well as graphics and user interface components, but traditional tools cannot detect such violations. Contrast Advisor uses visual AI to detect contrast in images, graphics, icons, UI components, and plain text.
- Contrast Advisor can run with Applitools Ultrafast Grid to render and detect subtle contrast differences and potential violations on Chrome, Firefox, Safari, Edge, and IE. Contrast Advisor complies with WCAG 2.0 and the updated 2.1 standards. This includes “AA – Minimum Contrast” and the stricter “AAA – Enhanced Contrast” options.

> Official demo introduction of Applitools Contrast Advisor provided by Applitools <https://www.youtube.com/watch?v=sGXjPJiQwdk>

### 2. About **Evaluate Applicability in Your Context**

#### **Accessibility Testing Needs for My Current Project**

Unfortunately, the delivery cycle for my current project is quite tight, and the importance of accessibility testing requirements is not too high. However, I will still use Google's Lighthouse tool to conduct accessibility tests and scoring for each core page of the product, ensuring that each core page has a high accessibility test score. For pages with low accessibility test scores, I will schedule defect cards for repair.

Below is the accessibility test score for a core page of the current project product:

![Accessibility Test Score](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/8Z4XpX.png)

#### **Potential Benefits of AI**

By using the Lighthouse tool for accessibility testing evaluation, it can somewhat meet

 the project's accessibility testing needs. However, after reviewing the accessibility testing scoring rules of Lighthouse, I found that Lighthouse can identify very limited accessibility testing issues. A high accessibility test score does not necessarily mean that the page is truly accessible to everyone.

If there is a professional accessibility testing AI tool that complies with various accessibility regulations, it would definitely improve the efficiency of the project's accessibility testing and ensure that the project's accessibility testing results comply with regulations.

#### **Potential Limitations**

Because it involves using AI tools, and the current project is an unreleased product, there are certain risks associated with general data privacy security and result bias uncertainty.

### 3. About **Sharing Your Findings**

I applied for a trial of Applitools' Accessibility Testing Assistant, Applitools Contrast Advisor. Below is the trial report:

Trial application link: <https://applitools.com/platform/validate/accessibility/>

Trying out Applitools first requires registering an account, which must be a company email address and requires providing company information.

After registering an account and verifying the email, there are some tool surveys:

![Tool Surveys](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/d2o4KM.png)

Afterward, I chose Playwright and followed the official introduction documents for initialization, <https://applitools.com/tutorials/quickstart/web/playwright/typescript/quickstart>

- Obtain APPLITOOLS_API_KEY
- Set up APPLITOOLS local environment
- Install Applitools
- Run tests

The official demo test code is as follows:

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

However, running the test failed.

![Test Failure Screenshot](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/HtcTxq.png)

After investigation, I found that I made a mistake in the first step of setting environment variables. After resetting the environment variables, the demo test could run and pass normally.

![Successful Test Run Screenshot](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/blqBmp.png)

Then, I logged into Applitools Eyes to view the test results.

![My Demo Screenshot](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/gTMNvw.png)

When viewing the accessibility test results and launching Applitools Contrast Advisor on the results page, I found that the test results did not display the Applitools Contrast Advisor indicator, showing a difference from the official introduction video.

![Official Promo Demo Screenshot](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2P12hs.png)

Today's trial did not go smoothly, but I will continue to try and update more usage results later.

## About Event

The "30 Days of AI in Testing Challenge" is an initiative by the Ministry of Testing community. The last time I came across this community was during their "30 Days of Agile Testing" event.

Community Website: <https://www.ministryoftesting.com>

Event Link: <https://www.ministryoftesting.com/events/30-days-of-ai-in-testing>

**Challenges**:

- [Day 1: Introduce yourself and your interest in AI](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-1-introduce-yourself-and-your-interest-in-ai/)
- [Day 2: Read an introductory article on AI in testing and share it](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/)
- [Day 3: List ways in which AI is used in testing](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-3-list-ways-in-which-ai-is-used-in-testing/)
- [Day 4: Watch the AMA on Artificial Intelligence in Testing and share your key takeaway](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-4-watch-the-ama-on-artificial-intelligence-in-testing-and-share-your-key-takeaway/)
- [Day 5:Identify a case study on AI in testing and share your findings](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-5-identify-a-case-study-on-ai-in-testing-and-share-your-findings/)
- [Day 6:Explore and share insights on AI testing tools](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-6-explore-and-share-insights-on-ai-testing-tools/)
- [Day 7: Research and share prompt engineering techniques](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-7-research-and-share-prompt-engineering-techniques/)
- [Day 8: Craft a detailed prompt to support test activities](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-8-craft-a-detailed-prompt-to-support-test-activities/)
- [Day 9: Evaluate prompt quality and try to improve it](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-9-evaluate-prompt-quality-and-try-to-improve-it/)
- [Day 10: Critically Analyse AI-Generated Tests](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-10-critically-analyse-ai-generated-tests/)
- [Day 11: Generate test data using AI and evaluate its efficacy](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-11-generate-test-data-using-ai-and-evaluate-its-efficacy/)
- [Day 12: Evaluate whether you trust AI to support testing and share your thoughts](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/)
- [Day 13: Develop a testing approach and become an AI in testing champion](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-13-develop-a-testing-approach-and-become-an-ai-in-testing-champion/)

- [Day 14: Generate AI test code and share your experience](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/)

- [Day 15: Gauge your short-term AI in testing plans](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-15-gauge-your-short-term-ai-in-testing-plans/)

## Recommended Readings

- [API Automation Testing Tutorial](https://naodeng.com.cn/series/api-automation-testing-tutorial/)
- [Bruno API Automation Testing Tutorial](https://naodeng.com.cn/series/bruno-api-automation-testing-tutorial/)
- [Gatling Performance Testing Tutorial](https://naodeng.com.cn/series/gatling-performance-testing-tutorial/)
- [K6 Performance Testing Tutorial](https://naodeng.com.cn/series/k6-performance-testing-tutorial/)
- [Postman API Automation Testing Tutorial](https://naodeng.com.cn/series/postman-api-automation-testing-tutorial/)
- [Pytest API Automation Testing Tutorial](https://naodeng.com.cn/series/pytest-api-automation-testing-tutorial/)
- [REST Assured API Automation Testing Tutorial](https://naodeng.com.cn/series/rest-assured-api-automation-testing-tutorial/)
- [SuperTest API Automation Testing Tutorial](https://naodeng.com.cn/series/supertest-api-automation-testing-tutorial/)
- [30 Days of AI in Testing Challenge](https://naodeng.com.cn/series/30-days-of-ai-in-testing-challenge/)