---
author: "nao.deng"
title: "30 Days of AI in Testing Challenge: Day 28: Build your own AI Tools"
date: "2024-03-31T10:06:44+08:00"
summary: ""
tags: ["Build your own AI Tools","prompt engineering","Prompt","AI"]
categories: ["Testing Challenge"]
series: ["30 Days of AI in Testing Challenge"]
ShowWordCount: true
Draft: true
---

## Day 28: Build your own AI Tools

Day 28 - We’re nearly there! Thanks for sticking with this challenge!

Earlier in the challenge you explored various uses of Large Language Models (LLMs) such as ChatGPT and Bing Copilot but concerns were raised about the privacy of the data we share with these tools. We also came up against scenarios where these models just lack the context to generate reasonable output.

These are very real concerns and are faced by many companies that are adopting AI and especially generative AI, such as LLMs. Luckily there are approaches we can adopt to address these.

So, in today’s task, we will investigate how some of these approaches; this is a huge field, and in today’s task, we will only be exploring these at a high level. We will do this through a set of 4 Walkthroughs that focus on addressing:

- Data Privacy through the use of locally hosted LLMs
- Improved Contextual Behaviors through fine-tuning and context retrieval.

Don’t worry, you won’t need to write any code - the code for each walkthrough is provided for you but you will have the opportunity to make some small modifications to experiment with the approach.

The walkthroughs make use of [Google’s Colaboratory](https://colab.research.google.com/) (Colab for short), so you will need a Google Account to access and run the code. We are using this for education purposes only

### Task Steps

- **Learn about Colaboratory** - Watch the short Introduction to [Colab video](https://www.youtube.com/watch?v=inN8seMm7UI) to understand how to use Colab.

- **Complete a walkthrough** - Select one or more of the walkthroughs to complete
  - a. Access the repository for today’s task at [GitHub - BillMatthews/mot-30-days-ai-in-testing](https://github.com/BillMatthews/mot-30-days-ai-in-testing)
  - b. Read the ReadMe file to better understand what each walkthrough covers.
  - c. Pick one (or more) of the walkthroughs that interest you and select the link on the ReadMe page. This will open a Colaboratory Notebook containing the walkthrough.
  - d. Read the information and follow the instructions in the notebook to complete the walkthrough.
  - e. You shouldn’t need to change any of the code provided but most notebooks have options for you to experiment with the inputs.

- **Reflect** - Review the reflection questions at the end of the walkthrough

- **Share your insights** - Consider sharing your insights with the community by responding to this post with:
  - a. Which walkthrough you choose and why
  - b. How well you think this approach addresses your concerns about data privacy and/or context awareness.
  - c. What opportunities does the approach provide you and your team?

### Why Take Part

- **Taking it to the next level**: It’s easy to use tools such as ChatGPT, but teams will quickly reach the limits of its usefulness. By taking part in today’s tasks you will become aware of how we can push past these limitations and start to innovate within the field of AI in Testing.

### Task Link

<https://club.ministryoftesting.com/t/day-28-build-your-own-ai-tools/75496>

## My Day 28 Task

## About Event

The "30 Days of AI in Testing Challenge" is an initiative by the Ministry of Testing community. The last time I came across this community was during their "30 Days of Agile Testing" event.

### Event Introduce

Upgrade Your Testing Game throughout March, with the 30 Days of AI in Testing Challenge!

- March 1 2024 - April 1 2024
- 00:00 - 23:00 BST
- Location: Online

Calling all testers, AI enthusiasts, and anyone curious about how Artificial Intelligence is reshaping software quality. Ready to explore the world of AI? This March, we're launching 30 Days of AI in Testing, and you're invited to join the mission!

### What is it?

Over 30 enlightening days, alongside a vibrant community, you'll embark on a journey to uncover the potential of AI in testing. Each day, we'll explore and discuss new concepts, tools, and practices that will demystify AI and enhance your testing toolkit.

### Why take part?

Incrementally Elevate Your Skills: Each day brings a new, manageable task that builds on the last. Helping you gradually deepen your understanding of AI in testing.
Improve Your Testing Efficiency and Effectiveness: Discover the many ways AI can be used to improve your everyday testing, improving your efficiency and effectiveness.

Connect and Collaborate: Engage with a global community of testers and AI enthusiasts on The Club forum, sharing insights, and gaining inspiration and support.

Achieve AI Ambitions: Use this challenge as a stepping stone to reach your AI testing goals. Dip in and tackle the tasks that meet your AI ambitions.

Lead and Inspire: By sharing your AI journey and discoveries during the challenge, you’ll play a crucial role in advancing the knowledge and skills of the community.

### How will it work?

Throughout March, a member of team MoT will post a new, short, daily task on The Club forum that'll enhance your understanding of AI in testing.

You'll then reply to the topic posts with your responses to each daily task. Feel free to share your thoughts, ask questions, seek advice, or offer support to others.

Finally, don't forget to encourage meaningful discussions by engaging with other people’s replies. If you find someone’s response interesting or helpful, hit that ❤️ button and let them know!

Don't get FOMO; register now! Registering will give you an email reminder for each daily task.

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
- [Day 20: Learn about AI self-healing tests and evaluate how effective they are](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are/)
- [Day 21: Develop your AI in testing manifesto](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-21-develop-your-ai-in-testing-manifesto/)
- [Day 22: Reflect on what skills a team needs to succeed with AI-assisted testing](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-22-reflect-on-what-skills-a-team-needs-to-succeed-with-ai-assisted-testing/)
- [Day 23: Assess AI effectiveness in visual testing and discuss the advantages](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages/)
- [Day 24: Investigate code explanation techniques and share your insights](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-24-investigate-code-explanation-techniques-and-share-your-insights/)
- [Day 25: Explore AI-driven security testing and share potential use cases](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-25-explore-ai-driven-security-testing-and-share-potential-use-cases/)
- [Day 26: Investigate strategies to minimise the carbon footprint of AI in testing](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-26-investigate-strategies-to-minimise-the-carbon-footprint-of-ai-in-testing/)
- [Day 27: Assess your team’s readiness to adopt AI-assisted testing](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-27-assess-your-teams-readiness-to-adopt-ai-assisted-testing/)

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
