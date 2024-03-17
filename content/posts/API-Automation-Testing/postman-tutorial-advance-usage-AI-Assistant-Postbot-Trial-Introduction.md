---
author:  "nao.deng"
title:  "Postman API Automation Testing Tutorial Advance Usage AI Assistant Postbot Trial Introduction"
date: "2024-03-17T10:05:00+08:00"
summary:  "This blog post is about the advanced usage of the Postman API Automation Testing tutorial, focusing on the trial of the AI assistant Postbot. The article may include the author's introduction to Postbot's features, how to use it, advantages and scenarios. By sharing the trial experience of Postbot, readers can learn how to optimize the API automation testing process with the help of AI technology to improve testing efficiency and accuracy. This tutorial is expected to provide Postman users with an opportunity to learn more about and try out the AI assistant, as well as provide guidance and inspiration for applying new technologies in API testing."
tags: ["AI Assistant", "Postbot", "AI"]
categories: ["API Automation Testing", "Postman"]
series: ["Postman API Automation Testing Tutorial"]
ShowWordCount: true
---

## Advanced Usage

The following is an introduction to Postman's advanced usage: AI Assistant Postbot Trial Introduction Report.

> Recently, when I participated in the 30-day AI testing challenge launched by Ministry testing community, one of the challenges was to choose different AI testing tools to use, and I just chose Postman's AI Assistant Postbot, which I'll send out separately for your reference.

### 1. About **Choosing a Tool**

This time I chose Postman AI Assistant because I am currently implementing API testing and API automation regression testing in the project. I hope to gain some practical experience in using AI to enhance API testing efficiency that can be applied from the trial process of the Postman AI Assistant tool.

> About the use of the Postman tool: Since Postman announced in May 2023 that it would gradually phase out the Scratch Pad model with offline capabilities, most functions will move to the cloud, and you must log in to use all the features of Postman. Our company has been notified to stop using Postman and migrate to other tools. Since then, I have been researching and learning to use Bruno, an open-source tool that can replace Postman for API testing and API automation regression testing. Recently, I have also implemented Bruno+github in the project team for interface document management and interface automation testing, and worked with developers to manage and test APIs using Bruno+github.

Postman AI Assistant's official introduction:

Postbot, an AI assistant for API workflows, will be available in an early access program on May 22, 2023.

- 📅 Availability: Early access program starts on May 22, 2023.
- 🪄✨ Features: AI-driven autocomplete, test case design, documentation writing, test suite building, data report summarization, API call debugging.
- 💳 Pricing: Available in Basic and Professional plans at $9/user/month starting October 15, 2023.

I downloaded Postman and tried Postbot with commonly used demo interfaces:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/n7YK4F.png)

### 2. About **Creating Some Test Code**

After adding the demo interface request in the postman interface, click Postbot on the bottom menu bar to start the Postman AI Assistant. A suggestion command menu for the request appears in the Postbot window, currently with the following recommended commands:

- Add tests to this request
- Test for response
- Visualize response
- Save a field from response
- Add documentation

Next, I will try the functions suggested by Postbot one by one.

#### Trying **Add tests to this request**

Click **Add tests to this request** in the Postbot interface

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/PDPH8I.png)

If you have added a request but have not clicked send to run that request,
Postbot will prompt "I'll need a response to perform this action," and Postbot will also provide a menu to quickly run the request and output the response; after clicking the "Send request and continue" button, Postman will automatically run the request and write the test script, as shown below:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ZGYSwi.png)

Postbot's test script for the demo request is as follows:

```Javascript
pm.test("Response status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has the required fields - title, body, userId, and id", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.title).to.exist;
    pm.expect(responseData.body).to.exist;
    pm.expect(responseData.userId).to.exist;
    pm.expect(responseData.id).to.exist;
});

pm.test("Title is a non-empty string", function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.title).to.be.a('string').and.to.have.lengthOf.at.least(1, "Title should not be empty");
});

pm.test("Body is a non-empty string", function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.body).to.be.a('string').and.to.have.lengthOf.at.least(1, "Body should not be empty");
});

pm.test("UserId is a positive integer", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.userId).to.be.a('number');
    pm.expect(responseData.userId).to.be.above(0, "UserId should be a positive integer");
});
```

The written test covers the interface response's status judgment and body field type judgment and can run through.

At this point, I noticed that two new recommended commands were added to Postbot's suggestion menu

- Add more tests
- Fix test

I first tried running "Add more tests," and then Postbot added a few more tests

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/VDUws3.png)

Interestingly, one of the tests failed, so I clicked "Fix test" to try to let Postbot fix this wrong test

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/33nkUH.png)

However, Postbot did not fix this wrong test case successfully

This wrong test case is as follows:

```Javascript
pm.test("UserId matches the ID of the user who created the post", function () {
    const requestUserId = pm.request.json().userId;
    const responseData = pm.response.json();
    pm.expect(responseData.userId).to.equal(requestUserId);
});
```

I can only manually fix it, and the corrected script is as follows

```Javascript
pm.test("UserId matches the ID of the user who created the post", function () {

    const requestUserId = JSON
    .parse(pm.request.body.raw).userId;
    const responseData = pm.response.json();
    pm.expect(responseData.userId).to.equal(requestUserId);
});
```

The script was wrong because the request body was in raw format and needed to be parsed into a JSON object before being read.

#### Trying **Test for response**

After clicking **Test for response** in the Postbot interface, Postbot will update the test cases generated by **Add tests to this request** as shown below:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/fNrz10.png)

By examining the results of the updated tests, I found that most of the updated cases could not run through.

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/liVBHj.png)

Then I tried to fix the wrong cases through Postbot's "Fix test", most of the cases could run through, but there were still errors in the test cases generated by the **Add tests to this request** command.

In addition, clicking on Postbot's "Fix test" to fix the cases generated by the **Test for response** command will update most of the cases to the test cases generated by the **Add tests to this request** command

I wonder where the difference between the **Add tests to this request** and **Test for response** commands is?

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/oq0mEw.png)

#### Trying **Visualize response**

After clicking **Visualize response** in the Postbot interface, you need to select the generated format, which can be a table/line chart/bar chart. Here I choose a table, and then Postbot will display the instantiated table style of the response on the result page after the request.

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3DjMD6.png)

This table instantiation of the response is achieved by generating a script under tests, and the specific script is as follows:

```Javascript
var template = `
<style type="text/css">
    .tftable {font-size:14px;color:#333333;width:100%;border-width: 1px;border-color: #87ceeb;border-collapse: collapse;}
    .tftable th {font-size:18px;background-color:#87ceeb;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;text-align:left;}
    .tftable tr {background-color:#ffffff;}
    .tftable td {font-size:14px;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;}
    .tftable tr:hover {background-color:#e0ffff;}
</style>

<table class="tftable" border="1">
    <tr>
        <th>Title</th>
        <th>Body</th>
        <th>User ID</th>
        <th>ID</th>
    </tr>
    <tr>
        <td>{{response.title}}</td>
        <td>{{response.body}}</td>
        <td>{{response.userId}}</td>
        <td>{{response.id}}</td>
    </tr>
</table>
`;

function constructVisualizerPayload() {
    return {response: pm.response.json()}
}
pm.visualizer.set(template, constructVisualizerPayload());
```

I haven't found where the **Visualize response** feature helps API testing yet.

#### Using **Save a field from response**

After clicking **Save a field from response** in the Postbot interface, Postbot will generate a test script to store the id from the response as an environment variable, as follows:

```Javascript
// Stores the postId in an environment or global variable
var postId = pm.response.json().id;
pm.globals.set("postId", postId);
```

Then I clicked Postbot's **Save a field from response** command again and found that Postbot still generated a test script to store the id from the response as an environment variable, instead of generating a test script to store other fields from the response as environment variables.

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/R7gwUZ.png)

#### Trying **Add documentation**

After clicking the **Add documentation** command in the Postbot interface, Postbot will generate a very detailed interface document on the right side of the postman interface, as shown below.

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/Amwb4n.png)

The interface document describes very detailed interface-related information, such as interface request information, request field definitions, response examples, etc.

### 3. About **Sharing My Thoughts**

After trying the AI Assistant Postbot tool provided by postman, the functions provided by Postbot for adding test cases for request and response are quite convenient, and can quickly generate mostly usable interface response verification test scripts with high coverage. Although there are errors in the generated test scripts that need to be manually fixed, Postbot can quickly generate test scripts to improve the efficiency of interface testing.

In addition, Postbot's interface documentation generation is also quite useful. After developers add the request in postman, Postbot can quickly generate relatively detailed interface documentation, which can improve R&D efficiency and interface document quality to some extent.

However, Postbot currently does not seem to support custom commands. I want to try to output different types of test cases for the demo interface through Postbot, such as empty request body interface test cases, illegal request body interface test cases, etc., but Postbot cannot give the correct response.

## Reference

- <https://learning.postman.com/docs/getting-started/introduction/>
- <https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options>
- <https://blog.postman.com/introducing-postbot-postmans-new-ai-assistant/>
- <https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/>
- <https://naodeng.com.cn/zh/zhseries/30-%E5%A4%A9-ai-%E6%B5%8B%E8%AF%95%E6%8C%91%E6%88%98%E6%B4%BB%E5%8A%A8/>
- <https://www.ministryoftesting.com/events/30-days-of-ai-in-testing>
- <https://club.ministryoftesting.com/t/day-14-generate-ai-test-code-and-share-your-experience/75133>
