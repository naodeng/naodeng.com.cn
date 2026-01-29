---
author:  "nao.deng"
title:  "Postman 接口自动化测试教程：进阶用法 - 数据驱动"
date: "2023-11-24T19:37:00+08:00"
summary:  "这篇博文深入研究 Postman 接口自动化测试的高级技巧，专注于数据文件驱动和环境变量数据驱动。学习如何通过外部数据文件和灵活的环境变量，优雅地进行测试数据的驱动，提高测试覆盖率。博文将为您展示如何以更智能的方式管理和利用数据，使测试用例更具可扩展性和灵活性。"
ZHtags: ["数据驱动"]
ZHcategories: ["接口自动化测试", "Postman"]
ZHseries: ["Postman 接口自动化测试教程"]
ShowWordCount: true
---

## 进阶用法

以下会介绍 Postman 和 Newman 的一些进阶用法，包括数据文件驱动和环境变量数据驱动。

### 数据驱动

在 API 自动化测试的过程中。使用数据驱动是一种常规测试方法，其中测试用例的输入数据和预期输出数据都被存储在数据文件中，测试框架根据这些数据文件执行多次测试，以验证 API 的各个方面。

测试数据可以很容易地修改，而不需要修改测试用例代码。

数据驱动测试可以帮助你有效地覆盖多种情况，确保 API 在各种输入数据下都能正常运行。

可参考 demo：<https://github.com/Automation-Test-Starter/Postman-Newman-demo>

在 Postman 中进行数据驱动测试，特别是使用 JSON 数据作为测试数据，可以通过环境变量和数据文件配合 Postman 提供的测试脚本来实现，以下会分别以简单的示例来介绍环境变量和数据文件的使用。

#### 使用环境变量

大致的步骤是：将测试数据存储在环境变量中，然后在测试脚本中读取环境变量中的数据，进行测试。

##### 1. 创建环境变量

在 Postman 中，你可以在 "Manage Environments" 窗口中创建环境变量。在 "Manage Environments" 窗口中，你可以创建多个环境，每个环境都有一组环境变量。

之前在 demo 中创建了一个环境变量，名为 `DemoEnv`，其中包含了一个环境变量 `baseURL`，用于存储 API 的基本 URL。
这一次我们在 `DemoEnv` 环境中添加多个环境变量，用于存储 get-demo 接口和 post-demo 接口的各类测试数据。

点击编辑`DemoEnv`环境，添加以下环境变量：

| Key          | Value        |
| ------------ | ------------ |
| getAPI      |posts/1            |
| getAPIResponseStatus    | 200    |
| getAPIResponseData    | {"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}    |
| postAPI      |posts           |
| postAPIResponseStatus    | 201    |
| postAPIResponseData    | {"title":"foo","body":"bar","userId":1,"id":101}    |

##### 2. 使用环境变量

在 "Pre-request Script" 或 "Tests" 部分中，你可以使用环境变量来存储和获取数据。在请求 Body 中，你可以通过 pm.environment.get 获取环境变量的值。

> 注意：在 JavaScript 中，环境变量获取的值是字符串

###### 编辑 get-demo 接口

- 将 URL 修改为 `{{baseURL}}/{{getAPI}}`，
- 编辑 Tests 脚本用来验证响应数据：

```javascript
// 获取环境变量中的数据
const getAPIResponseStatus = parseInt(pm.environment.get("getAPIResponseStatus"));
const getAPIResponseData = JSON.parse(pm.environment.get('getAPIResponseData'));

pm.test("res.status should be 200", function () {
    pm.response.to.have.status(getAPIResponseStatus);
});


pm.test("res.body should be correct", function() {
  var data = pm.response.json();
  pm.expect(data.id).to.equal(getAPIResponseData.id);
  pm.expect(data.userId).to.equal(getAPIResponseData.userId);
  pm.expect(data.title).to.equal(getAPIResponseData.title);
  pm.expect(data.body).to.equal(getAPIResponseData.body);
});
```

- 点击保存，然后点击发送，可以看到测试通过。

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112418URuFUy.png)

###### 编辑 post-demo 接口

- 将 URL 修改为 `{{baseURL}}/{{postAPI}}`，
- 编辑 Tests 脚本用来验证响应数据：

```javascript
// 获取环境变量中的数据
const postAPIResponseStatus = parseInt(pm.environment.get("postAPIResponseStatus"));
const postAPIResponseData = JSON.parse(pm.environment.get('postAPIResponseData'));

pm.test("res.status should be 201", function () {
  pm.response.to.have.status(postAPIResponseStatus);
});
pm.test("res.body should be correct", function() {
  var data = pm.response.json();
  pm.expect(data.id).to.equal(postAPIResponseData.id);
  pm.expect(data.userId).to.equal(postAPIResponseData.userId);
  pm.expect(data.title).to.equal(postAPIResponseData.title);
  pm.expect(data.body).to.equal(postAPIResponseData.body);
});
```

- 点击保存，然后点击发送，可以看到测试通过。

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/20231124181Zpwgn.png)

##### 3. 调试环境变量数据驱动脚本

选择对应的环境变量和更新后的测试用例，运行整个 demo collection，确认测试通过

![2023112419E4tzBS](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419E4tzBS.png)

##### 4.自动化运行环境变量数据驱动脚本

- 将更新后的测试用例导出到自动化测试项目测试用例文件夹下
- 调整 package.json

在 package.json 文件中，更新测试脚本，用于运行环境变量数据驱动测试用例：

> demo 项目为了区分不同场景，新增了测试命令为 environment-driven-test

```JSON
 "environment-driven-test": "newman run Testcase/Environment-Driven.postman_collection.json -e Env/Environment-Driven-DemoEnv.postman_environment.json -r cli,allure --reporter-allure-export ./allure-results",
```

- 运行测试

```shell
npm run environment-driven-test
```

![2023112419OCkmnl](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419OCkmnl.png)

#### 使用数据文件

大致的步骤是：将测试数据存放在数据文件中，然后在测试脚本中读取数据文件中的数据，进行测试。

postman 的数据文件支持 json，csv 和 txt 等多种格式，以下示例会以 json 格式 进行

##### 1.创建数据文件

- 在 postma 接口自动化测试项目下新建 Data 文件夹

```shell
mkdir Data
```

- 在 Data 文件夹下新建 json 格式数据文件 testdata.json

```shell
cd Data
touch testdata.json
```

- 更新测试数据文件 testdata.json

```json
[
  {
    "getAPI": "posts/1",
    "postAPI": "posts",
    "getAPIResponseStatus": 200,
    "getAPIResponseData": {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    "postAPIResponseStatus": 201,
    "postAPIResponseData": {
      "title": "foo",
      "body": "bar",
      "userId": 1,
      "id": 101
    }
  }
]
```

##### 2.更新测试用例

###### 更新 get-demo 接口

- 编辑 Pre-request Script 脚本来从测试数据文件中获取
请求 url

```javascript
const getAPI = pm.iterationData.get('getAPI');
```

- 将 URL 修改为 `{{baseURL}}/{{getAPI}}`，

- 编辑 test 脚本来从测试数据文件中获取测试数据

```javascript
const getAPIResponseStatus = pm.iterationData.get('getAPIResponseStatus');

const getAPIResponseData = pm.iterationData.get('getAPIResponseData');

pm.test("res.status should be 200", function () {
  pm.response.to.have.status(getAPIResponseStatus);
});
pm.test("res.body should be correct", function() {
  var data = pm.response.json();
  pm.expect(data.id).to.equal(getAPIResponseData.id);
  pm.expect(data.userId).to.equal(getAPIResponseData.userId);
  pm.expect(data.title).to.equal(getAPIResponseData.title);
  pm.expect(data.body).to.equal(getAPIResponseData.body);
});
```

###### 更新 post-demo 接口

- 编辑 Pre-request Script 脚本来从测试数据文件中获取
请求 url

```javascript
const postAPI = pm.iterationData.get('postAPI');
```

- 将 URL 修改为 `{{baseURL}}/{{postAPI}}`，

- 编辑 test 脚本来从测试数据文件中获取测试数据

```javascript
// 从数据文件获取测试数据
const postAPIResponseStatus = pm.iterationData.get('postAPIResponseStatus');

const postAPIResponseData = pm.iterationData.get('postAPIResponseData');

pm.test("res.status should be 201", function () {
  pm.response.to.have.status(postAPIResponseStatus);
});
pm.test("res.body should be correct", function() {
  var data = pm.response.json();
  pm.expect(data.id).to.equal(postAPIResponseData.id);
  pm.expect(data.userId).to.equal(postAPIResponseData.userId);
  pm.expect(data.title).to.equal(postAPIResponseData.title);
  pm.expect(data.body).to.equal(postAPIResponseData.body);
});
```

##### 3.调试

- 在 postman 页面选择 get-demo request 和 post-demo request 所在的 demo Collection，点击右上角的三个点，选择 Run Collection
- 在 runner 准备页面右侧区域点击 Data 的 Select File 按钮，选择之前的测试数据文件 testdata.json

![2023112419KIqIfa](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419KIqIfa.png)

- 然后点击 Run demo，确认运行通过即可导出测试用例文件

![2023112419c9Hv5e](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419c9Hv5e.png)

##### 4.自动化运行数据驱动脚本

- 将更新后的测试用例导出到自动化测试项目测试用例文件夹下
- 调整 package.json

在 package.json 文件中，更新测试测试脚本，用于运行数据驱动测试用例：

> demo 项目为了区分不同场景，新增了测试命令为 data-driven-test，且命令后加了-d 参数 用于指定测试数据文件路径

```JSON
"data-driven-test": "newman run Testcase/Data-Driven.postman_collection.json -e Env/DemoEnv.postman_environment.json -d Data/testdata.json -r cli,allure --reporter-allure-export ./allure-results"
```

- 运行测试

```shell
npm run data-driven-test
```

![2023112419k7I9ZE](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419k7I9ZE.png)

## 参考文档

- [Postman 官方文档](https://learning.postman.com/docs/getting-started/introduction/)
- [newman 官方文档](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/)

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->