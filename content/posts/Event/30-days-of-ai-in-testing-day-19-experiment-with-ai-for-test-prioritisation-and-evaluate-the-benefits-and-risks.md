---
author: "nao.deng"
title: "30 Days of AI in Testing Challenge: Day 19: Experiment with AI for test prioritisation and evaluate the benefits and risks"
date: "2024-03-20T16:06:44+08:00"
summary: "This blog post is about Day 19 of the 30-Day AI Testing Challenge, focusing on exploring the role of AI in test priority sorting and evaluating its pros and cons. The article may include the author's practical application cases of AI in test priority sorting, as well as the benefits and challenges brought by using AI. By sharing experiences and evaluations of applying AI in test priority sorting, readers will gain insights into the author's views on the actual effects and impacts of AI in the testing process. This series of activities hopes to provide testing professionals with an opportunity to understand and explore the role of AI in test priority sorting, and to promote further discussions about the application of AI in testing."
tags: ["Experiment with AI for test prioritisation and evaluate the benefits and risks","prompt engineering","Prompt","AI"]
categories: ["Testing Challenge"]
series: ["30 Days of AI in Testing Challenge"]
ShowWordCount: true
Draft: true
---

## Day 19: Experiment with AI for test prioritisation and evaluate the benefits and risks

Day 19 already! I hope you can all appreciate how much we have covered already - well done!

Today we want to turn our attention to whether AI can help us make decisions about test selection and prioritisation and evaluate some of the risks and benefits of this as an approach.

Using data to make decisions about what to test and how much has been around for a long time (most testers are familiar with the idea of **Risk Based Testing**) and it’s natural to think about automating these decisions to accelerate. The technical evolution for this process it to delegate to an AI model that learns from data in your context about the testing performed and the observable impact of the testing.

**The critical question is…Should we?**

### Task Steps

You have two options for today’s task (you can do both if you want):  

- **Option 1** - If your company already uses an AI powered tool for test prioritisation and selection, then write a short case study and share it with the community by responding to this post. Consider sharing:
  - The tool you are using
  - How does the tool select/prioritise tests? Is this understandable to you?
  - How does your team use the tool? For example, only for automated checks or only for Regression?
  - Has the performance of the tool improved over time?
  - What are the key benefits your team gains by using this tool?
  - Have there been any notable instances where the tool was wrong?

- **Option 2** - Consider and evaluate the idea of using AI to select and prioritise your testing.
  - Find and read a short article that discusses the use of AI in test prioritisation and selection.
    - Tip: if you are short on time, why not ask your favourite chatbot or copilot to summarise the current approaches and benefits of using AI in test prioritisation and selection?
  - Consider how you or your team currently perform this task. Some thinking prompts are:
    - To what extent do you need to select/prioritise tests in your context?
    - What factors do you use when selecting/prioritising tests? Are they qualitative or quantitative?
    - How do you make decisions when there is a lack of data?
    - What is the implication if you get this wrong?
  - In your context, would delegating this task to an AI be valuable? If so, how would your team benefit?
  - What are the risks of delegating test prioritisation and selection to an AI model? Some thinking prompts are:
    - How might test prioritisation and selection fail, and what would the impact be?
    - Do you need to understand and explain the decision made by the AI?
    - “How did test/qa miss this?” is an unjust but common complaint - how does this change if an AI is making the decisions about what to test?
    - How could you mitigate these?
    - If we mitigate risks using a Human in the loop, how does this impact the benefits of using AI?
  - How could you fairly evaluate the performance of an AI tool in this task?
  - Share your key insights by replying to this post. Consider sharing:
    - A brief overview of your context (e.g. what industry you work in or the type of applications you test).
    - Share your key insights about the benefits and risks of adopting AI for test prioritisation and selection.

### Why Take Part

- **Understanding where AI can help**: There is excitement/hype about using AI to improve and accelerate testing. For teams managing large numbers tests, complex systems or time-consuming tests being more data driven about selecting and prioritising tests might provide real benefits. By taking part in today’s task, you are critically evaluating whether it works for your context, you learn about specific risks of delegating responsibility to AI and are better prepared to make a considered decision about AI based Testing Selection and Prioritisaiton.

### Task Link

<https://club.ministryoftesting.com/t/day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/75216>

## My Day 19 Task

基于我当前的工作状态，第 19 天的任务我选择了**选项 2**

### 关于**阅读一篇讨论在测试优先级排序和选择中使用 AI 的文章**

我阅读的是[AI 驱动的测试优先级](https://www.linkedin.com/pulse/ai-driven-test-prioritization-amit-khullaar)

文章的主要内容如下：

AI-driven test prioritization enhances efficiency and reduces costs in software testing.

- 📄 Understanding Test Prioritization: Determining test case execution order for maximum coverage and defect detection.
- ⭐️ Significance of AI-Driven Test Prioritization: Enhanced efficiency, faster feedback, optimal resource utilization, improved test coverage, and reduced costs.
- 🔨 Implementing AI-Driven Test Prioritization: Data collection, feature selection, machine learning model, prediction, and integration with testing tools.
- 🏢 Real-Life Examples and Implementations: Google and Microsoft successfully use AI-driven test prioritization.

AI-driven test prioritization revolutionizes software testing by utilizing machine learning to rank test cases based on their likelihood to fail, enhancing efficiency and coverage while optimizing resources. This method relies on analyzing vast data, including historical test results and code changes. Implementations by giants like Google and Microsoft illustrate its value in reducing testing times and accelerating development. By integrating AI prioritization with testing tools, organizations can significantly improve their software quality and reduce costs, underscoring the transformative impact of AI in software development.

### 关于**使用 AI 工具总结当前在测试优先级排序和选择中使用 AI 的方法和好处**

我选择了 ChatGPT4，它的回答是：

```Markdown
AI in test prioritisation and selection, particularly within the context of software development and quality assurance, is a rapidly evolving area that leverages machine learning (ML), natural language processing (NLP), and other AI methodologies to enhance the efficiency and effectiveness of testing processes. Here's a summary of the current approaches and benefits:

### Approaches

1. **Machine Learning Models**: AI systems are trained on historical data, including past test results, code changes, and defect rates, to predict which tests are most likely to detect faults in new or modified code. Techniques such as regression, classification, and even deep learning models are employed.

2. **Natural Language Processing (NLP)**: Used to analyze requirements and change logs to identify relevant tests. This approach helps in understanding the context and semantics of changes, thereby selecting tests that are more likely to be affected by those changes.

3. **Test Case Embeddings**: Similar to word embeddings in NLP, test cases are represented in a high-dimensional space, where their similarities to code changes or features can be measured. This helps in identifying which tests are most relevant to the current changes.

4. **Prioritization Algorithms**: These algorithms rank tests based on various factors, such as historical failure rates, test execution time, code coverage, and impact of recent code changes. The aim is to run the most critical tests early in the cycle.

5. **Feedback Loops**: Incorporating continuous feedback from test outcomes to refine and adjust the models and algorithms used for test selection and prioritization, ensuring they become more accurate over time.

### Benefits

1. **Reduced Test Times**: By prioritizing and selecting the most relevant tests, AI can significantly reduce the overall time required for testing, enabling faster release cycles.

2. **Improved Test Coverage**: AI techniques can uncover gaps in test coverage by analyzing code paths and identifying untested or under-tested areas, leading to better software quality.

3. **Cost Efficiency**: Reducing the amount of testing without compromising on quality leads to lower computing resources usage and human effort, thereby cutting costs.

4. **Early Defect Detection**: Prioritizing tests that are more likely to fail can lead to early detection of defects, which is generally less costly to fix and leads to more stable releases.

5. **Adaptability**: AI models can adapt to changes in the software and testing environments, ensuring that the test prioritization and selection processes remain efficient over time.

6. **Risk Management**: By focusing on high-risk areas based on code changes and historical defect data, AI helps in better managing the risks associated with software releases.

These AI-driven approaches represent a significant shift from manual and static methods to dynamic, efficient, and intelligent test management strategies, aiming at improving software quality, reducing costs, and accelerating development cycles.
```

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
