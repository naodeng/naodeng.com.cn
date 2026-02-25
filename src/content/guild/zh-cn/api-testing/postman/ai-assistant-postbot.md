---
title: "Postman 接口自动化测试教程：进阶用法 - AI 助手 Postbot 试用介绍"
description: "这篇博文是关于 Postman 接口自动化测试教程的进阶用法，重点介绍了 AI 助手 Postbot 的试用。文章可能包括作者对 Postbot 功能的介绍、使用方法、优势和适用场景等方面的详细说明。通过分享 Postbot 的试用体验，读者可以了解到如何借助 AI 技术来优化接口自动化测试流程，提高测试效率和准确性。这个教程有望为 Postman 用户提供一个深入了解和尝试 AI 助手的机会，并为他们在接口测试中应用新技术提供指导和灵感。"
testType: api-testing
framework: postman
language: JavaScript
stage: advanced
difficulty: advanced
duration: 35
order: 5
githubDemo: https://github.com/Automation-Test-Starter/Postman-API-Test-Starter
officialDocs: https://learning.postman.com/
date: 2024-03-17T02:05:00.000Z
---

## 进阶用法

以下会介绍 Postman 的进阶用法：AI 助手 Postbot 试用介绍报告。

> 最近在参加 Ministry 测试社区发起的 30 天 AI 测试挑战活动时，其中一个挑战是选择不同的 AI 测试工具进行使用，刚好我选择了 Postman 的 AI Assistant Postbot，单独发出来大家可以参考使用。

### 1. 关于**选择一个工具**

这一次我选择了 Postman AI Assistant，因为项目中我正在实施 API 测试和 API 自动化回归测试，希望能从 Postman AI Assistant 工具的试用过程中得到一些使用 AI 提升 API 测试效率且能落地的实践。

> 关于 Postman 工具的使用：Postman 自从 2023 年 5 月宣布将逐步淘汰具有离线功能的 Scratch Pad 模型，大部分功能将转移到云端，需要必须登录才能使用 Postman 的全部功能后。我们公司已经通知要停止使用 Postman 并要迁移到其他的工具。之后我一直在调研和学习使用 Bruno，一个开源且能替代 postman 完成 API 测试和 API 自动化回归测试的好工具。最近也在项目团队中落地了 Bruno+github 的接口文档管理和接口自动化测试的实践，与开发人员一起使用 Bruno+github 协作完成 API 的管理和测试工作。

Postman AI Assistant 官方的介绍：

用于 API 工作流的 AI Assistant Postbot 将于 2023 年 5 月 22 日推出早期访问计划。

- 📅 可用性：早期访问计划于 2023 年 5 月 22 日启动。
- 🪄✨功能：人工智能驱动的自动完成、测试用例设计、文档编写、测试套件构建、数据报告汇总、API 调用调试。
- 💳 定价：从 2023 年 10 月 15 日起提供基本和专业计划，每用户每月 9 美元。

我下载 Postman 并使用常用的 demo 接口进行了 Postbot 的试用：

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/n7YK4F.png)

### 2. 关于**创建一些测试代码**

在 postman 界面上添加完 demo 接口的 request 后，点击界面底部菜单栏上的 Postbot 即可启动 Postman AI Assistant，Postbot 窗口上出现针对 request 的建议指令菜单，当前有如下几个推荐指令：

- Add tests to this request
- Test for response
- Visualize response
- Save a field from response
- Add documentation

接下来我会一个接一个的试用 Postbot 建议的功能。

#### 试用**Add tests to this request**

在 Postbot 界面上点击**Add tests to this request**

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/PDPH8I.png)

如果你添加了 request 后还没点击 send 运行过该 request，
Postbot 会提示"I‘ll need a response to perform this action"，然后 Postbot 也会给出快捷运行 request 输出 response 的菜单;点击"Send request and continue"按钮后 Postman 会自动运行 request 并编写测试脚本，如下图所示：

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ZGYSwi.png)

Postbot 针对 demo request 编写测试脚本如下：

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

编写的测试覆盖了接口 response 的 status 判断 和 body 字段类型判断，也能运行通过。

这时我发现 Postbot 的建议菜单上新增了两个推荐指令

- Add more tests
- Fix test

我先尝试运行了“Add more tests”，然后 Postbot 也新增了几条测试

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/VDUws3.png)

但是有趣的是，有一个测试运行失败了，然后我点击运行“Fix test”尝试让 Postbot 去修复这一条错误的测试

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/33nkUH.png)

然而 Postbot 并没有修复成功这一条错误的测试用例

这一条错误的用例如下：

```Javascript
pm.test("UserId matches the ID of the user who created the post", function () {
    const requestUserId = pm.request.json().userId;
    const responseData = pm.response.json();
    pm.expect(responseData.userId).to.equal(requestUserId);
});
```

我只能手动去修复它，修复后的脚本如下

```Javascript
pm.test("UserId matches the ID of the user who created the post", function () {

    const requestUserId = JSON
    .parse(pm.request.body.raw).userId;
    const responseData = pm.response.json();
    pm.expect(responseData.userId).to.equal(requestUserId);
});
```

脚本错误的原因是因为 request 的 body 为 raw 格式，需要将 request 的 body 解析为 json 对象后在进行进行读取。

#### 试用**Test for response**

在 Postbot 界面上点击**Test for response**后，Postbot 会更新之前通过**Add tests to this request**生成的测试用例，如下图所示：

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/fNrz10.png)

通过查看更新后的测试运行结果发现，更新后的用例大部分用例都没办法运行通过。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/liVBHj.png)

然后我尝试通过 Postbot 的“Fix test”去修复错误的用例，大部分的用例的都能运行通过，但还是出现了之前**Add tests to this request**指令生成且出现过的错误测试用例。

另外点击 Postbot 的“Fix test”去修复**Test for response**指令生成的用例是会将大部分用例都更新为**Add tests to this request**指令生成的测试用例

不知道**Add tests to this request**和**Test for response**两个指令的差异在哪里？

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/oq0mEw.png)

#### 试用**Visualize response**

在 Postbot 界面上点击**Visualize response**后，需要选择生成的格式，格式可以选择表格/折线图/条形图，我这里选择为表格，然后 Postbot 会在 request 请求之后的结果页面展示 response 的实例化表格样式。

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3DjMD6.png)

这个 response 的表格实例化展示是通过在 tests 下生成脚本实现的，具体的脚本如下：

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
        <td>&#123;&#123;response.title&#125;&#125;</td>
        <td>&#123;&#123;response.body&#125;&#125;</td>
        <td>&#123;&#123;response.userId&#125;&#125;</td>
        <td>&#123;&#123;response.id&#125;&#125;</td>
    </tr>
</table>
`;

function constructVisualizerPayload() {
    return {response: pm.response.json()}
}
pm.visualizer.set(template, constructVisualizerPayload());
```

目前没发现**Visualize response**这个功能对 API 测试的帮助在哪里。

#### 使用**Save a field from response**

在 Postbot 界面上点击**Save a field from response**后，Postbot 会生成一个测试脚本脚本来将 response 中的 id 存储为环境变量，具体生成代码如下：

```Javascript
// Stores the postId in an environment or global variable
var postId = pm.response.json().id;
pm.globals.set("postId", postId);
```

然后我再次点击 Postbot 的**Save a field from response**指令，发现 Postbot 还是会生成将 response 中的 id 存储为环境变量的测试脚本，而不是生成存储 response 中的 其他字段存储为环境变量的测试脚本

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/R7gwUZ.png)

#### 试用**Add documentation**

在 Postbot 界面上点击使用**Add documentation**指令后，Postbot 会在 postman 界面右侧生成一个非常详细的接口文档，如下图所示

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/Amwb4n.png)

接口文档上描述了接口的请求信息，request 字段定义，response 返回示例等非常详细的接口相关信息。

### 3.关于**分享我的想法**

通过试用 postman 提供的 AI Assistant Postbot 工具，Postbot 提供的针对 request 和 response 添加测试用例功能还是比较方便的，能快速生成大部分部分可用的接口 response 验证测试脚本，测试脚本覆盖率也比较高，虽然生成的测试脚本中出现的错误的脚本，也需要人工进行修复，但是通过 Postbot 能快速生成测试脚本也能提升接口测试的效率。

另外 Postbot 的接口文档生成也比较使用，开发人员在 postman 添加好 request 后，通过 Postbot 能快速生成比较详细的接口文档，一定程度上能提升研发效率和接口文档质量。

但是 Postbot 目前好像还不支持自定义指令，我想尝试通过 Postbot 针对 demo 接口输出不同类型的测试用例，如空 request body 接口测试用例，不合法 request body 接口测试用例等，Postbot 没办法给出正确响应。

## 参考文档

- [https://learning.postman.com/docs/getting-started/introduction/](https://learning.postman.com/docs/getting-started/introduction/)
- [https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options](https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options)
- [https://blog.postman.com/introducing-postbot-postmans-new-ai-assistant/](https://blog.postman.com/introducing-postbot-postmans-new-ai-assistant/)
- [https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/)
- [https://naodeng.com.cn/zh/zhseries/30-%E5%A4%A9-ai-%E6%B5%8B%E8%AF%95%E6%8C%91%E6%88%98%E6%B4%BB%E5%8A%A8/](https://naodeng.com.cn/zh/zhseries/30-%E5%A4%A9-ai-%E6%B5%8B%E8%AF%95%E6%8C%91%E6%88%98%E6%B4%BB%E5%8A%A8/)
- [https://www.ministryoftesting.com/events/30-days-of-ai-in-testing](https://www.ministryoftesting.com/events/30-days-of-ai-in-testing)
- [https://club.ministryoftesting.com/t/day-14-generate-ai-test-code-and-share-your-experience/75133](https://club.ministryoftesting.com/t/day-14-generate-ai-test-code-and-share-your-experience/75133)

## 推荐阅读

- [使用 Bruno 进行接口自动化测试快速开启教程系列](https://naodeng.com.cn/zh/zhcategories/bruno/)
- [使用 Postman 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/postman-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Pytest 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/pytest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 SuperTest 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/supertest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Rest Assured 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/rest-assured-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Galting 进行性能测试快速开启教程系列](https://naodeng.tech/zh/zhseries/gatling-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<div style="text-align: center">
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;" />
</div>
