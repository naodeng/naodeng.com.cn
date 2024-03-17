---
author: "nao.deng"
title: "30 Days of AI in Testing Challenge: Day 12: Evaluate whether you trust AI to support testing and share your thoughts"
date: "2024-03-13T10:06:44+08:00"
summary: "This blog post is day eleven of the 30 Days of AI Testing Challenge, focusing on the use of AI to generate test data and evaluating its effectiveness. The post may include the author's real-world application of AI-generated test data and an assessment of its effectiveness and applicability. By sharing the application and evaluation of AI-generated test data, readers will understand how the author leverages AI technology to generate valid test data and enhance the efficiency of the testing process in real testing environments. This series of events is expected to provide testing professionals with cases of practical application of AI-generated test data and encourage them to experiment with this emerging technology."
tags: ["Evaluate whether you trust AI to support testing and share your thoughts","prompt engineering","Prompt"]
categories: ["Testing Challenge"]
series: ["30 Days of AI in Testing Challenge"]
ShowWordCount: true
---

## Day 12: Evaluate whether you trust AI to support testing and share your thoughts

It’s day 12, and it’s time to get reflective about AI’s role in supporting testing and empowering testers. In previous days, we have explored various ways in which AI can currently support testing activities. There are many interesting options, and in many ways, we are only at the start of the AI in Testing journey.

However, the use of AI in any context can be problematic due to issues and limitations such as:

- Data Privacy
- Biased and discriminatory behaviours
- Inaccurate results
- Unexpected and/or emerging behaviours
- Misaligned goals
- Lack of AI explainability

These issues (to name a few) impact our trust in AI, but this is contextual, so let’s explore how much we should trust AI in Testing in your context.

### Task Steps

- **Research AI Risks**: Find and read an introductory article on AI Risks and problems. If you are short on time, try one of these editorials:

  - [The 15 Biggest Risks Of Artificial Intelligence](https://www.forbes.com/sites/bernardmarr/2023/06/02/the-15-biggest-risks-of-artificial-intelligence/) - Forbes, Bernard Marr
  - [Challenges of AI](https://www.chathamhouse.org/2022/03/challenges-ai) - Chatham House, Kate Jones, Marjorie Buchser & Jon Wallace

- **Consider the role of AI in Testing**: Consider, for your Testing Context, the ways that AI could be used and then:

  - Identify which AI Risks might impact the quality of testing in your context
  - Examine how one or more of these AI Risks might impact your testing
  - Think about how you might safeguard against these risks becoming issues in your context?
- **Shared your insights**: reply to this post with your reflections on the use of AI in testing. Consider sharing some or all of the following:
  - What context do you work in?
  - What AI risks are introduced or amplified by the introduction of AI in Testing for your context?
  - Where should AI not be used in your testing context?
  - To what extent should the use of AI be trusted in your context?
  - How might trust for AI in Testing be increased in your context?
- **Bonus**: If you are a blogger, why not create a blog post and link that in your response?

### Why Take Part

- **Improve your critical thinking**: The adoption of AI in Testing needs us to balance the benefits of using AI with the risks and issues it introduces. By taking part in this task, you are increasing your awareness of the risks and honing your thinking about these, so you are not dazzled by the AI hype.

### Task Link

<https://club.ministryoftesting.com/t/day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/75102>

## My Day 12 Task

### 1. About **Research on AI Risks**

I quickly read through the two recommended articles and summarized their key points:

#### Summary of the article [The 15 Biggest Risks of Artificial Intelligence](https://www.forbes.com/sites/bernardmarr/2023/06/02/the-15-biggest-risks-of-artificial-intelligence/):

Artificial intelligence poses significant dangers and ethical challenges.

- ❓ Lack of Transparency: Complex AI decisions may lead to distrust.
- 👥 Bias and Discrimination: AI may perpetuate societal biases.
- 🔒 Privacy Issues: AI can collect personal data, leading to privacy concerns.
- 🛡️ Security Risks: AI can be used for cyberattacks and autonomous weapons.

#### Summary of the article [Challenges of AI](https://www.chathamhouse.org/2022/03/challenges-ai):

Artificial intelligence carries potential benefits and risks but lacks unified regulation.

- ℹ️ Definition of AI: AI is defined as technology that performs tasks requiring human intelligence.
- ❗️ Risks and Benefits of AI: It offers enormous potential advantages but also poses ethical, security, and societal risks.
- ⚖️ Regulation of AI: There's a lack of unified regulation due to private sector dominance and government catching up.
- ✋ Ethical Issues with AI: Identifying and mitigating moral risks in design and ongoing usage is crucial.

#### Personal Thoughts

In general, from the theoretical proposal of AI to the implementation of related models and tools, there have always been unclear ethical dilemmas, inadequate regulation, and insecure data privacy. The risks of AI persist and, personally, I believe they won't disappear.

Both articles address these points. Although AI is believed to be the future, many people still question the accuracy, data security, and fairness of results while using it. After all, the companies behind the operation of these AI tools face pressure from both governments and revenue.

### 2. About **Reflection on the Role of AI in Testing** and **Sharing Your Insights**

I believe there are risks associated with AI's role in responding to testing-related results:

- The risk of ethical bias will undoubtedly affect the integrity of AI-generated testing data and scenarios. A biased AI may intentionally discard results that should be included.
- Data privacy and security risks make me cautious when interacting with AI, as I refrain from providing real contexts to prevent data collection. In our industry of internet software development, leaking data during the early stages of product release poses significant risks.

To mitigate these risks:

- Regarding ethical bias: My habit has always been to not entirely rely on or trust AI results. Instead, I use AI results to expand my thinking and generally perform a secondary human review of AI-generated testing data and scenarios to confirm their usability.
- Regarding data privacy risk: I apply partial obfuscation to the prompts and contexts when interacting with AI, reducing the exposure of real project and business information.

As I work in developing new internet products for clients, data privacy and security have always been red-line issues. Therefore, I am cautious when using AI in projects, and I use it to assist in repetitive or predictable tasks under the premise of avoiding risks.

My trust in AI results depends on the certainty of my current requirements. If my requirements are clear enough, I use AI more for time-saving and efficiency purposes, and I fully trust the results.

By using different AI tools for daily testing tasks and then manually judging the AI-generated responses, trust in the testing capabilities of certain AI tools is gradually enhanced.

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
