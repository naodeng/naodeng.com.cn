---
author: "nao.deng"
title: "30 Days of AI in Testing Challenge: Day 20: Learn about AI self-healing tests and evaluate how effective they are"
date: "2024-03-23T21:06:44+08:00"
summary: "This blog post is about Day 20 of the 30-Day AI Testing Challenge,exploring the effectiveness of AI self-healing tests. The article may include the author's definition, purpose, and methods of AI self-healing testing, as well as an evaluation of its effectiveness and practical experience. By sharing explorations and evaluations of AI self-healing testing, readers will understand the author's views and insights on this emerging testing method, as well as its application effects in real testing environments. This series of activities hopes to provide testing professionals with an opportunity to understand and explore the potential and limitations of AI in self-healing testing, and to promote further research and application of AI testing in the industry."
tags: ["Learn about AI self-healing tests and evaluate how effective they are","prompt engineering","Prompt","AI"]
categories: ["Testing Challenge"]
series: ["30 Days of AI in Testing Challenge"]
ShowWordCount: true
---

## Day 20: Learn about AI self-healing tests and evaluate how effective they are

Only ten more days to go on this challenge, and today we are going to examine the claims about Self-Healing Testings. The idea of Self-Healing Tests was one of the early claims for the use of AI in Testing, but there are three key questions we want to answer:

1. What does Self-Healing Tests really mean?
2. What are the risks of Self-Healing Tests?
3. Is this a useful feature?

We know that not everyone is interested in learning new automation tools, so similar to yesterday’s task, there are two options and you are free to pick one (or both).

### Task Steps

**Option 1**: This option is for you if you currently use a tool that claims Self Healing Tests or are interested in a deep dive into Self Healing Tests and have time to learn a new tool. For this option, the steps are:

- **What types of problems does your tool claim to heal?** Read the documentation for your selected tool to understand what the tool means by Self-Healing Tests. Try to understand the types of test issues that the tool claims to heal and how this mechanism works.
- **Test one of their claims**: Design a 20 minute time-boxed test of one of the Self-Healing capabilities of the tool. Run the test and evaluate how well you think the Self-Healing mechanism performed. Some ideas are:
  - If the tool claims to detect changed element locators, you could change the locator in a test so that the test wil fail, then run the tool and check how well the tool heals the failing test.
  - If the tool claims to correct the sequencing of actions, swap two parts of a test so that it fails, then run the tool and check how well the tool heals the failing test.
- **How might this feature fail?** Based on the claim you were testing and assuming the self-healing was successful, how might the self-healing fail? Can you construct a scenario where it does fail?

**Option 2**: This option is for you if you are interested in finding out more about Self Healing Tests but don’t have time to learn a new tool. For this option, the steps are:

- **Find and read an article or paper that discusses Self-Healing Tests**: This could be a research paper, blog post or vendor documentation that deals with the specifics of Self-Healing Tests.
  - Try to understand the types of issues with tests that the tool claims to heal.
  - If possible, uncover how the issues are detected and resolved.
- **How valuable is a feature like this to your team?** Consider the challenges your team faces and whether Self-Healing Tests are valuable to your team.
- **How might this fail?** Based on your reading, how might this Self-Healing fail in a way that matters? For example, could it heal a test in a way that results in the purpose of the test changing from what you originally intended?

**Share Your Insights**: Regardless of which investigative option you choose, respond to this post with your insights and share:

- Which option you chose.
- What your perceptions are of Self-Healing Tests (what problem does it solve and how).
- The ways in which Self-Healing Tests might benefit or fail your team.
- How likely you are to use (or continue to use) tools with this feature.

### Why Take Part

- **Deepen your understanding of Self-Healing Tests**: Maintaining tests through new iterations of a product can be challenging, so tooling that can reduce this is valuable. By taking part in this test task, you are developing a sense of what Self-Healing Tests actually means and how they can help your team.
- **Improve your critical thinking about vendor claims**: When selecting tools to support testing, we are often faced with many fantastic sounding claims. This task allows you to think critically about the claims being made, their limitations, and how they might impact your team.

### Task Link

<https://club.ministryoftesting.com/t/day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are/75314>

## My Day 20 Task

Based on my previous task of trying out the AI self-healing testing feature in Katalon Studio, today I chose **Option 1**.

### 1. **What kind of problems does your tool claim to solve?**

Katalon Studio's AI-driven self-healing testing feature claims to address issues related to test failures caused by UI locator changes in WebUI automation testing.

The working mechanism of Katalon Studio's AI self-healing testing:

- Once self-healing is enabled, if Katalon Studio can't find an object using the default locator, it attempts to find the object with other pre-configured locators associated with that object.
- If Katalon Studio finds the object using any alternative locator, the test continues. The alternative locator that successfully found the object is used for the remainder of the execution. This helps prevent repeated self-healing of the same broken object, thus reducing execution time.
- After test execution, Katalon Studio suggests replacing the broken locator with the one that found the object. Unless Katalon Studio can find the target object, based on designed failure handling options, the test execution may stop or proceed.

The corresponding article link is: <https://docs.katalon.com/katalon-studio/maintain-tests/self-healing-tests-in-katalon-studio>

### 2. **Verifying one of the claims**

To verify Katalon Studio's AI self-healing testing functionality, I recorded a process on the [Swag Labs](https://www.saucedemo.com/) online shopping website with Katalon Studio, including login, selecting products, adding them to the cart, and successfully placing an order. Katalon Studio generated the following code:
![Generated Code](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/yJz1dB.png)

> The current demo test case runs successfully.

#### 2.1 Intentionally changing locators to verify the AI self-healing functionality

To test the tool's ability to detect and repair changes in element locators, I intentionally altered two locators in the test script. The adjusted example is as follows:
![Adjusted Example](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/P1SgEU.png)

After the test failed, I checked the tool's AI self-healing functionality and found no suggestions for locator repair failures.
![No Suggestions](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/EES0vN.png)
![No Suggestions](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/dahhBI.png)

#### 2.2 Intentionally changing the order of steps in the test to verify the AI self-healing functionality

To further test the tool's ability to repair after detecting changes in element locators, I changed the order of the test steps. The adjusted example is as follows:
![Adjusted Order](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/rLRZWL.png)

After the test failed, I checked the tool's AI self-healing functionality and again found no suggestions for locator repair failures.
![No Suggestions](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/TLAW06.png)
![No Suggestions](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/AXttDE.png)

### 3. **Where might this feature fail?**

From what I've observed, both of my verifications failed; the AI self-healing testing did not provide any locator repair suggestions, which is a significant deviation from the official claims.

I also attempted to run incorrect demo cases multiple times, and on one occasion, Katalon Studio's AI self-healing testing feature did provide a suggestion. However, using its advice did not correct the faulty case.

At this point, I'm not entirely sure if there are any specific conditions or limitations to Katalon Studio's AI self-healing testing feature, or if I'm using it incorrectly.
> Note that I am using a trial version, and the AI self-healing testing feature is set to default configuration.

### 4. **My Opinion**

Having participated in this 30-day AI testing challenge and trying out many new AI testing tools, I've found that most tools do not live up to their claims and often exaggerate their capabilities. I suggest that everyone thoroughly test these AI testing tools themselves and use those trial results as a basis for selecting the appropriate tool.

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
- [Day 16: Evaluate adopting AI for accessibility testing and share your findings](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-16-evaluate-adopting-ai-for-accessibility-testing-and-share-your-findings/)
- [Day 17: Automate bug reporting with AI and share your process and evaluation](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-17-automate-bug-reporting-with-ai-and-share-your-process-and-evaluation/)
- [Day 18: Share your greatest frustration with AI in Testing](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-18-share-your-greatest-frustration-with-ai-in-testing/)
- [Day 19: Experiment with AI for test prioritisation and evaluate the benefits and risks](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/)

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
