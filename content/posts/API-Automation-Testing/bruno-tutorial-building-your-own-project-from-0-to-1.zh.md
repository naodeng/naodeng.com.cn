---
author:  "nao.deng"
title: "Bruno 接口自动化测试教程：从 0 到 1 搭建 Bruno 接口自动化测试项目"
date: "2024-01-23T17:58:14+08:00"
summary: "这篇博文是 Bruno 接口自动化测试教程，从零开始搭建 Bruno 接口自动化测试项目。文章详细指导读者如何建立测试项目的基础结构，配置环境，以及编写第一个接口测试用例。通过这个教程，读者能够逐步了解 Bruno 框架的使用方法，从零到一地构建起完整的接口自动化测试项目，提高测试效率和可维护性。"
ZHtags: ["从 0 到 1 搭建接口自动化测试项目"]
ZHcategories:  ["接口自动化测试", "Bruno"]
ZHseries: ["Bruno 接口自动化测试教程"]
ShowWordCount: true
---

## 写在前面

### 为什么不用 postman 和 insomnia

- 关于 Postman：Postman 于 2023 年 5 月宣布将逐步淘汰具有离线功能的 Scratch Pad 模型，大部分功能将转移到云端，这意味着用户必须登录才能使用 Postman。（不登录的情况下可使用的功能有限，登录的话不确认是否会向云端上传我们测试使用的接口信息，安全性不可预估）
- 关于 Insomnia：Insomnia 在 2023 年 9 月 28 日发布的 8.0 版本中开始加重了对云端的依赖，用户必须登录才能使用全功能的 Insomnia。现有的 Scratch Pad 功能有限（不登录的情况下可使用的功能有限，登录的话不确认是否会向云端上传我们测试使用的接口信息，安全性不可预估）

所以需要一个将 API 工作区数据与第三方服务器隔离的替代方案，Bruno 就是可行的替代方案之一。

### 为什么选择 Bruno

官方说明：<https://github.com/usebruno/bruno/discussions/269>

与 postman 的对比：<https://www.usebruno.com/compare/bruno-vs-postman>

开源，MIT License

客户端全平台支持 (Mac/linux/Windows)

离线客户端，无云同步功能计划

支持 Postman/insomina 脚本导入（只能导入 API 请求脚本，无法导入测试脚本）

社区相对活跃，[产品开发路线图](https://github.com/usebruno/bruno/discussions/384)清晰

## 从 0 到 1 搭建 Bruno 接口自动化测试项目

这篇文章会更聚焦如何使用 Bruno 提供的功能，从零开始搭建一个接口自动化测试项目。

Bruno 程序的安装和基本使用请参考：[postman 替换工具 bruno 使用介绍](https://github.com/naodeng/Bruno-API-Test-Starter/blob/main/README_ZH.md)

### 项目结构

Bruno 接口自动化测试项目的基础结构如下：

```text
Bruno-demo
├── README.md // 项目说明文件
├── package.json
├── package-lock.json
├── Testcase // 测试用例文件夹
│   └── APITestDemo1.bru // 测试用例文件 1
│   └── APITestDemo2.bru // 测试用例文件 2
│   └── bruno.json // bruno COLLECTION 配置文件
│   └── environments // 不同测试环境文件夹
│       └── dev.bru // 测试环境配置文件
├── Report // 测试报告文件
│   └── report.json //json 格式报告文件
├── .gitignore
└── node_modules // 项目依赖
```

### 项目搭建准备

#### 新建项目文件夹

```bash
mkdir Bruno-demo
```

#### 项目初始化

```bash
// 进入项目文件夹下
cd Bruno-demo
// nodejs 项目初始化
npm init -y
```

#### 安装 Bruno CLI 依赖

```bash
// 安装 Bruno CLI
npm install @usebruno/cli --save-dev
```

> Bruno CLI 是 Bruno 官方提供的命令行工具，可以通过简单的命令行命令轻松运行 API 集合。我们可以更轻松地在不同环境中测试 API、自动化测试流程，并将 API 测试与持续集成和部署工作流程集成。

### 使用 Bruno 编写接口测试用例

#### 新建测试用例目录

- 运行 Bruno app 到首页
- 新建名称为 Testcase 的 COLLECTION，且选择 COLLECTION 的目录为上面创建的项目文件夹
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/bkIvUi.png)

#### 新建 Get 请求测试用例

- 点击 Testcase 的 COLLECTION 下的 ADD REQUEST 按钮，新建一个 GET 请求
- 输入请求名称为 GetDemo，输入请求地址为 <https://jsonplaceholder.typicode.com/get/1>

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/XYeiXB.png)

#### 给 Get 请求添加测试断言

##### 使用 Bruno 自带的 Assert 编写测试断言

- 点击 GetDemo 请求下的 Assert 按钮，进入测试断言编辑页面
- 输入断言 1：响应状态码等于 200.断言 2：响应体中的 title 包含 provident
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/z86CB2.png)

- 调试断言：点击右上角的 Run 按钮，运行断言，查看断言结果是否符合预期
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/YkAbiG.png)

##### 使用 JavaScript 编写测试断言

- 点击 GetDemo 请求下的 Tests 按钮，进入测试断言脚本编辑页面
- 输入脚本代码，断言 1：响应状态码等于 200.断言 2：响应体中的 title 包含 provident

```javascript
test("res.status should be 200", function() {
  const data = res.getBody();
  expect(res.getStatus()).to.equal(200);
});
test("res.body should be correct", function() {
  const data = res.getBody();
expect(data.title).to.contains('provident');
});
```

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ubyRwj.png)

- 调试断言：点击右上角的 Run 按钮，运行断言，查看断言结果是否符合预期
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3pAMDd.png)

#### 新建 Post 请求测试用例

- 点击 Testcase 的 COLLECTION 下的 ADD REQUEST 按钮，新建一个 POST 请求
- 输入请求名称为 PostDemo，输入请求地址为 <https://jsonplaceholder.typicode.com/posts>
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3IP5B4.png)

- 点击新建的 PostDemo 请求下的 Body 按钮，进入请求体编辑页面
- 选择 Body 类型为 JSON，输入请求体内容为
  
```json
{
"title": "foo",
"body": "bar",
"userId": 1
}
```

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/psbGLD.png)

#### 给 Post 请求添加测试断言

##### 使用 Bruno 自带的 Assert 编写 Post 请求测试断言

- 点击 PostDemo 请求下的 Assert 按钮，进入测试断言编辑页面
- 输入断言 1：响应状态码等于 201.断言 2：响应体中的 title 等于 foo
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/oN8D5G.png)

- 调试断言：点击右上角的 Run 按钮，运行断言，查看断言结果是否符合预期
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/HKb4fn.png)

##### 使用 JavaScript 编写 Post 请求测试断言

- 点击 PostDemo 请求下的 Tests 按钮，进入测试断言脚本编辑页面
- 输入脚本代码，断言 1：响应状态码等于 201.断言 2：响应体中的 title 等于 foo

```javascript
test("res.status should be 200", function() {
  const data = res.getBody();
  expect(res.getStatus()).to.equal(201);
});
test("res.body should be correct", function() {
  const data = res.getBody();
expect(data.title).to.equal('foo');
});
```

- 调试断言：点击右上角的 Run 按钮，运行断言，查看断言结果是否符合预期
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/mkKIsE.png)

#### 本地运行两个测试用例

- 点击 Testcase 的 COLLECTION 下的 Run 按钮，运行所有测试用例
- 确认运行结果是否符合预期

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/CvfPIn.png)

至此，两个接口的测试用例和断言已经编写完成

#### 环境变量配置

通过查看上面两个测试用例的运行结果，我们发现两个测试用例的请求地址都是 `https://jsonplaceholder.typicode.com`，如果我们需要在不同的测试环境中运行这两个测试用例，那么我们需要修改两个测试用例的请求地址，这样的话，如果测试用例很多，那么修改起来就很麻烦。Bruno 提供了环境变量的功能，我们可以将测试用例中的请求地址配置为环境变量，这样的话，我们只需要在不同的测试环境中配置不同的环境变量，就可以实现在不同的测试环境中运行测试用例。

##### 新建环境变量配置文件

- 点击 Testcase 的 COLLECTION 下的 Environments 按钮，进入环境变量配置页面
- 点击右上角的 ADD ENVIRONMENT 按钮，新建一个环境变量配置文件，输入名称为 dev，点击右上角的 SAVE 按钮保存配置文件
- 点击新建的 dev 环境变量配置文件，进入环境变量配置页面
- 点击右上角的 ADD VARIABLE 按钮，新建一个环境变量，输入名称为 host，输入值为 `https://jsonplaceholder.typicode.com`，点击右上角的 SAVE 按钮保存环境变量

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/YDKvOr.png)

##### 在测试用例中使用环境变量

- 点击 Testcase 的 COLLECTION 下的 GetDemo 请求，进入 GetDemo 请求编辑页面
- 将 GetDemo 请求的请求地址修改为 `{{host}}/get/1`，点击右上角的 SAVE 按钮保存 GetDemo 请求
- 点击 Testcase 的 COLLECTION 下的 PostDemo 请求，进入 PostDemo 请求编辑页面
- 将 PostDemo 请求的请求地址修改为 `{{host}}/posts`，点击右上角的 SAVE 按钮保存 PostDemo 请求

##### 调试环境变量

- 点击 Testcase 的 COLLECTION 下的 Environments 按钮，选择 dev 环境变量
- 点击右上角的 RUN 按钮，运行所有测试用例，确认运行结果是否符合预期

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/NfAX6z.png)

至此，环境变量配置和调试已经完成

#### 命令行运行测试用例

##### 前置检查

刚才我们已经测试用例的存储目录设置为了之前创建的项目文件夹，所以我们需要在项目文件夹下检查用例文件和环境变量配置文件是否已经创建成功。

目前我们的项目文件夹目录结构如下：

```text
Bruno-demo
├── package.json
├── package-lock.json
├── Testcase // 测试用例文件夹
│   └── APITestDemo1.bru // 测试用例文件 1
│   └── APITestDemo2.bru // 测试用例文件 2
│   └── bruno.json // bruno COLLECTION 配置文件
│   └── environments // 不同测试环境文件夹
│       └── dev.bru // 测试环境配置文件
└── node_modules // 项目依赖
```

##### 命令行调试运行测试用例

- 在项目文件下的 Testcase 文件夹，运行命令行命令 `bru run --env dev`，运行所有测试用例

- 确认运行结果是否符合预期
  
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/iKnEYL.png)

#### 输出 json 格式报告

- 在项目文件下的 Testcase 文件夹下新建 Report 文件夹，用于存放测试报告文件

- 在项目文件下的 Testcase 文件夹，运行命令行命令 `bru run --env dev --output Report/results.json`，运行所有测试用例

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/MM85y5.png)

- 确认测试报告文件正常输出
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/jnJHMQ.png)

至此，Bruno 接口自动化测试项目的搭建已经完成。

#### 集成到 CI/CD 流程

Bruno 程序的安装和基本使用请参考：[postman 替换工具 bruno 使用介绍#接入 CI](https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter/blob/main/README_ZH.md#%E6%8E%A5%E5%85%A5-ci)

## 参考资料

- Bruno 官方文档 <https://docs.usebruno.com/>
- postman 替换工具 bruno 使用介绍 <https://naodeng.com.cn/zh/posts/api-automation-testing/introduction_of_bruno/>

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->
