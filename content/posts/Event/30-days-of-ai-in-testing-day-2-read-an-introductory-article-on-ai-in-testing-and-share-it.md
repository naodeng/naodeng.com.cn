---
author: "nao.deng"
title: "30 Days of AI in Testing Challenge: Day 2: Read an introductory article on AI in testing and share it"
date: "2024-03-03T10:06:44+08:00"
summary: "This blog post is the second day of the 30-Day AI in Testing Challenge and focuses on a session where participants read and share introductory articles related to AI in testing. The post may contain the author's summary and personal opinion of the article read, sharing the potential benefits and challenges of applying AI in testing. Through such sharing, readers are able to better understand the application of AI in testing and prompt other participants to share their insights and promote interactivity of the blog posts. This series promises to provide a platform for testing professionals to gain insights into AI testing."
tags: ["Read an introductory article on AI in testing and share it"]
categories: ["Testing Challenge"]
series: ["30 Days of AI in Testing Challenge"]
ShowWordCount: true
---

## Day 2 Task

For today’s task, you’re challenged to find, read and share your key takeaways on an introductory article on AI in software testing. This could cover the basics of AI, its applications in testing, or even specific techniques like machine learning for test automation.

### Task Steps

Look for an article that introduces AI in software testing. It could be a guide, a blog post, or a case study—anything that you find interesting and informative.

Summarise the main takeaways from the article. What are the essential concepts, tools, or methodologies discussed?

Consider how the insights from the article apply to your testing context. Do you see potential uses for AI in your projects? What are the challenges or opportunities?

Share your findings by replying to this topic with a summary of your chosen article and your personal reflections. Link to the resource (if applicable).

Bonus step! Read through the contributions from others. Feel free to ask questions, provide feedback, or express your appreciation for insightful findings with a :heart:

### Why Take Part

Expand Your Understanding: Getting to grips with the basics of AI in testing is crucial for integrating these technologies into our work effectively.

Inspire and Be Inspired: Sharing and discussing articles introduces us to a variety of perspectives and applications we might not have considered.

Save Time: Benefit from the collective research of the community to discover valuable resources and insights more efficiently.

Build Your Network: Engaging with others’ posts helps strengthen connections within our community, fostering a supportive learning environment.

### Task Link

<https://club.ministryoftesting.com/t/day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/74453>

## My Day 2 Task

<https://club.ministryoftesting.com/t/day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/74453>

1. Take a look at an article → I checked out this article [AppAgent: Multimodal Agents as Smartphone Users
](https://arxiv.org/html/2312.13771v2)

2. Main Takeaways from the article

- This paper presents a novel Large Language Model (LLM)-based multimodal agent framework designed to manipulate smartphone applications. The framework extends its applicability to a wide range of applications by enabling the agent to mimic human interaction behaviors such as taps and swipes through a simplified action space that does not require system back-end access. The core functionality of the agent is its innovative learning approach, which allows it to learn how to navigate and use new applications through autonomous exploration or by observing human demonstrations. This process generates a knowledge base that the agent refers to when performing complex tasks in different applications.

- The paper also discusses work related to large-scale language models, specifically GPT-4 with integrated visual capabilities, which allows the model to process and interpret visual information. In addition, the performance of the agent was tested across 50 tasks across 10 different applications, including social media, email, maps, shopping, and complex image editing tools. The results confirm the agent's proficiency in handling a wide range of advanced tasks.

- In the methodology section, the rationale behind this multimodal agent framework is described in detail, including a description of the experimental environment and action space, as well as the process of the exploration phase and deployment phase. In the exploration phase, the agent learns the functions and features of the smartphone application through trial and error. In the deployment phase, the agent performs advanced tasks based on its accumulated experience.

- The paper concludes with a discussion of the agent's limitations, i.e., the lack of support for advanced controls such as multi-touch and irregular gestures, which may limit the applicability of the agent in certain challenging scenarios. Nonetheless, the authors see this as a direction for future research and development.

3. Potential:New UI automation test scripting approach and concepts for mobile, Self-exploration and imitation of manual steps, Multi-model support, you can select and switch models according to the actual situation of your app.

4. Challenges: You need the agent to be familiar with your mobile app, and you also need to feed the agent enough scenarios.

5. Here is my personal reflections:

Papers and projects provide future directions for automated testing of mobile apps, but landing real projects will take some time

I think it can be used to do exploratory testing of mobile apps, by giving the existing test cases as a knowledge base, learning and exploring through AppAgent to expand the test scenarios and improve the real and effective test scenarios.

- Project link: <https://github.com/mnotgod96/AppAgent>

- Paper link: <https://arxiv.org/abs/2312.13771>

## About Event

The "30 Days of AI in Testing Challenge" is an initiative by the Ministry of Testing community. The last time I came across this community was during their "30 Days of Agile Testing" event.

Community Website: <https://www.ministryoftesting.com>

Event Link: <https://www.ministryoftesting.com/events/30-days-of-ai-in-testing>

**Challenges**:

- [Day 1: Introduce yourself and your interest in AI](https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-1-introduce-yourself-and-your-interest-in-ai/)
