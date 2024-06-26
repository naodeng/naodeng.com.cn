---
author: "nao.deng"
title: "postman 替换工具 bruno 使用介绍"
date: "2023-10-17T11:31:43+08:00"
summary: "文章介绍 postman 替换工具 Bruno 的新手入门介绍，如何迁移 postman 脚本到 Bruno"
ZHtags: ["迁移 postman", "Bruno cli", "Bruno"]
ZHcategories:  ["接口自动化测试", "Bruno"]
ZHseries: ["Bruno 教程"]
ShowWordCount: true
---

## 为什么选择 bruno

官方说明：<https://github.com/usebruno/bruno/discussions/269>

与 postman 的对比：<https://www.usebruno.com/compare/bruno-vs-postman>

开源，MIT License

客户端全平台支持 (Mac/linux/Windows)

离线客户端，无云同步功能计划

支持 Postman/insomina 脚本导入（只能导入 API 请求脚本，无法导入测试脚本）

社区相对活跃，[产品开发路线图](https://github.com/usebruno/bruno/discussions/384)清晰

## 安装 bruno

Download link: <https://www.usebruno.com/downloads>

Mac 电脑推荐 brew 命令下载

​    `brew install Bruno`

## 客户端使用入门

### 默认主界面

![homepage](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//homepage.png)

### API 请求集

#### 创建 API 请求集

- 首页点击‘Create Collection’链接，打开创建 API 请求集的弹窗

- 弹窗上依次输入

  Name: 输入 API 请求集的名字

  Location：输入想要保存 API 请求集文件的文件夹路径 (建议选择此项目所在路径)

  Folder Name：可输入 API 请求集名字（会在刚才选择的路径下创建一个对应名字的文件夹）

- 点击 Create 按钮即可完成 API 请求集的创建，并展示在界面上 (左侧 请求集列表会展示新建的 API 请求集的信息)

![create-collection](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//create-collection.png)

#### 打开 API 请求集

- 首页点击‘Open Collection’链接，打开选择已有的 bruno 格式的 API 请求集文件夹
- 点击 open 即可完成选择，并展示在界面上 (左侧 collection 列表会展示选择的 API 请求集信息)

#### 导入 API collection

- 首页点击‘Import Collection’链接，打开导入 API collection 的弹窗 (支持 Bruno/Postman/Insomnia 的导入)
- 弹窗上选择对应格式的的链接，再选在已存在的对应格式的文件路径
- 点击 open 即可完成选择，并展示在界面上 (左侧 collection 列表会展示选择的 API collection 信息)

![import-collection](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//import-collection.png)

#### 本地运行 API collection

- 在主界面左侧 collection 列表选择想要运行的 API 请求集
- 在菜单上选择 Run，右侧界面会打开 Runner tab，会展示所选择 API 请求集里面 requests 的一些信息
- 点击 Run Collection 按钮即可本地运行 (运行完界面上会展示允许结果)

#### 导出 API 请求集

- 在主界面左侧 collection 列表选择想要运行的 API 请求集，右键打开菜单
- 在菜单上选择 Export，再选择想要导出文件的路径即可完成导出 (导出文件也是为 json 格式)

### API 请求

#### 新建 API 请求

- 前置条件：已经创建了 API 请求集 (参考上面的创建 API 请求集)
- 在主界面左侧 collection 列表选择想要新建 API 请求的 API 请求集
- 在菜单上选择 New Request，右侧界面会打开 Request tab，会展示所选择 API 请求集里面 requests 的一些信息
- 在 new Request 窗口上先选择请求类型：HTTP/GraphQL
- 依次输入
Name: 输入 API 请求的名字
URL：输入 API 请求的 URL
Method：选择 API 请求的 Method
- 点击 Create 按钮即可完成 API 请求的创建，并展示在界面上 (左侧 请求集列表会展示新建的 API 请求的信息)

#### 编辑 API 请求

- 前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)
- 在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求
- 然后可以根据 API 请求类型再来编辑请求的不同字段
  Body：输入 API 请求的 Body

  Headers：输入 API 请求的 Headers

  Params：输入 API 请求的 Params

  Auth：输入 API 请求的 Auth

  Vars：输入 API 请求的 Vars
  
  Script：输入 API 请求的 Script

  Assert：输入 API 请求的 Assert
  
  Tests：输入 API 请求的 Tests

- 点击 Save 按钮即可完成 API 请求的编辑，并展示在界面上 (左侧 请求集列表会展示编辑的 API 请求的信息)

#### 运行 API 请求

- 前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)
- 在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求
- 点击 API url 编辑框后的向右按钮即可完成 API 请求的运行，并展示在界面上 (右侧 Request tab 会展示运行的 API 请求的信息)

#### API 请求生成代码

- 前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)
- 在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求
- 菜单右键选择 Generate Code，再选择想要生成代码的语言
- Generate Code 窗口即可展示不同语言的请求代码

### 编写 API 请求测试脚本

#### API 请求 Assert

##### Assert 介绍

- 打开任意的 API 请求，切换到 Assert tab
- Assert tab 会展示 API 请求的 Assert 信息
- Assert 用来判断 API 请求的返回结果是否符合预期
- Expr：输入预期结果的表达式，可以是 API 请求的返回结果的某个字段的值，可输入两种类型：Status Code 和 Response Body
 Status Code：判断 API 请求的返回状态码是否符合预期  (默认为 200)
  Response Body：判断 API 请求的返回结果是否符合预期 (默认为 true)

- Operator：输入预期结果的验证方式。支持多种判断方式：Equal 和 Not Equal 等
  Equal：判断 API 请求的返回结果是否等于预期结果
  Not Equal：判断 API 请求的返回结果是否不等于预期结果
- Value：输入预期结果的值，支持两种预期结果的输入方式：Static 和 Dynamic
  Static：输入预期结果的静态值
  Dynamic：输入预期结果的动态值，可以是 API 请求的返回结果的某个字段的值

##### Assert 示例

###### Assert status code 为 200  

- 以 <https://jsonplaceholder.typicode.com/posts/1> 为例 (该 API 请求返回的结果为：<https://jsonplaceholder.typicode.com/posts/1>) 我想验证该 API 请求的返回结果的 status 是否为 200，
- 打开该 API 请求，切换到 Assert tab
- 依次输入如下信息
Expr: res.status
Operator：Equal
Value：200

###### Assert repsponse body 符合预期

- 以 <https://jsonplaceholder.typicode.com/posts/1> 为例 (该 API 请求返回的结果为：<https://jsonplaceholder.typicode.com/posts/1>) 我想验证该 API 请求的返回结果的 repsponse body 是否符合预期
- 打开该 API 请求，切换到 Assert tab
- Assert1 依次输入如下信息
Expr: res.body.id
Operator：Equal
Value：1
- Assert2 依次输入如下信息
Expr: res.body.title
Operator：contains
Value：provident

##### 调试 Assert

- 前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)，也按照 demo 编写了对应的 Assert
- 在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求
- 点击 API url 编辑框后的向右按钮即可完成 API 请求的运行，并展示在界面上 (右侧 Request tab 会展示运行的 API 请求的信息)
- 切换到 Tests tab，会展示 API 请求的 Tests 信息，里面也会包括请求的 Assert 信息

![assert-demo](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//assert-demo.png)

#### API 请求 Tests

##### Tests 介绍

- 打开任意的 API 请求，切换到 Tests tab
- Tests tab 会展示 API 请求的 Tests 信息
- Tests 用来编写 API 请求的测试脚本，目前较好支持 javascript 语言
- Tests 里面可以编写多个测试脚本，每个测试脚本都可以单独运行

##### Tests 示例

###### 验证 status code 为 200  

- 以 <https://jsonplaceholder.typicode.com/posts/1> 为例 (该 API 请求返回的结果为：<https://jsonplaceholder.typicode.com/posts/1>) 我想验证该 API 请求的返回结果的 status 是否为 200，
- 打开该 API 请求，切换到 Tests tab
- 输入如下脚本

```javascript
test("res.status should be 200", function() {
  const data = res.getBody();
  expect(res.getStatus()).to.equal(200);
});
```

###### Assert repsponse body 符合预期

- 以 <https://jsonplaceholder.typicode.com/posts/1> 为例 (该 API 请求返回的结果为：<https://jsonplaceholder.typicode.com/posts/1>) 我想验证该 API 请求的返回结果的 repsponse body 是否符合预期
- 打开该 API 请求，切换到 Tests tab
- 输入如下脚本
  
```javascript
test("res.body should be correct", function() {
  const data = res.getBody();
  expect(data.id).to.equal(1);
expect(data.title).to.contains('provident');
});
```

##### 调试 Tests

- 前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)，也按照 demo 编写了对应的 Tests
- 在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求
- 点击 API url 编辑框后的向右按钮即可完成 API 请求的运行，并展示在界面上 (右侧 Request tab 会展示运行的 API 请求的信息)
- 切换到 Tests tab，会展示 API 请求的 Tests 信息，里面也会包括请求的 Tests 信息

![tests-demo](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//tests-demo.png)

#### 环境变量

##### 创建环境变量

- 前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)
- 选择想要创建环境变量的 API 请求
- 点击页面右上角的‘No Environment’链接（默认为 No Environment），选择菜单中的 configure 按钮即可打开环境变量管理弹窗（支持创建新的环境变量和导入已有的环境变量）
- 弹窗上点击 Create Environment 按钮，输入环境变量的名字，点击 create 按钮即可创建环境变量
- 然后在弹窗上点击 Add Variable 按钮，输入环境变量的 key 和 value，点击 Save 按钮即可添加环境变量

##### 环境变量 demo

> 需求：创建一个 demo 环境变量，里面包含一个 key 为 host，value 为 <https://jsonplaceholder.typicode.com> 的环境变量

- 选择想要创建环境变量的 API 请求
- 点击页面右上角的‘No Environment’链接（默认为 No Environment），选择菜单中的 configure 按钮即可打开环境变量管理弹窗
- 弹窗上点击 Create Environment 按钮，输入环境变量的名字 demo，点击 create 按钮即可创建环境变量 demo
- 选择 demo 环境变量，然后在页面上点击 Add Variable 按钮，输入环境变量的 key 为 host，value 为 <https://jsonplaceholder.typicode.com> ，点击 Save 按钮即可添加环境变量
- 如下图所示
![env-intro](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//env-intro.png)

##### 使用环境变量

- 前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)，也创建了 demo 环境变量
- 选择想要使用环境变量的 API 请求
- 点击页面右上角的‘No Environment’链接（默认为 No Environment），选择菜单中的 demo 按钮即可使用 demo 环境变量
- 然后在 API 请求的 URL 变更为输入 {{host}}/posts/1 即可使用环境变量

### 测试脚本接口自动化

#### 前置条件

- [x] 已创建了 API 请求集（示例名为:api-collects）
- [x] 已创建了 API 请求（示例名为:api request1）
- [x] 已创建了环境变量（示例名为:demo）
- [x] 也为 API 请求编写了 assert 或者 tests 脚本

#### 接口自动化项目 demo

- [x] 安装 node.js
- [x] 安装 npm
- [x] 新建项目文件夹（示例名为:bruno-test）
- [x] 项目文件夹下执行 npm init 将项目初始化为 npm 项目
- [x] 安装 @usebruno/cli 依赖 (脚本为：npm install @usebruno/cli)
- [x] 打开保存 API 请求集的文件夹目录，将 api-collects 目录下的所有文件都复制到 bruno-test 项目目录下下
- [x] 项目目录如下所示

```javascript
bruno-test   //项目主文件夹
  api request1.bru //api 请求
  enviroments //环境变量
    demo.bru
  bruno.json
  node_modules //node 包依赖
  package-lock.json
  package.json //npm 项目配置文件
```

- [x] 运行接口自动化脚本

 ```javascript
 bruno run --env demo
 ```

- 运行结果如下

![cli-demo](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//cli-demo.png)

### 接入 CI

#### 接入 github action

> 以 github action 为例，其他 CI 工具类似

- [x] 前置准备：在项目 package.json 文件中添加如下脚本

```json
"test": "bru run --env demo"
```

- [x] 在项目根目录下创建 .github/workflows 文件夹
- [x] 在 .github/workflows 文件夹下创建 main.yml 文件
- [x] main.yml 文件内容如下

```yaml
name: bruno cli CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  run_bruno_api_test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - run: npm install
    - name: run tests
      run: npm run test
```

- [x] 提交代码到 github，会自动触发 github action
- [x] 查看 github action 运行结果，如图示例：

![cli-demo1](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//cli-demo1.png)
> 可拉取本项目代码进行参考：<https://github.com/dengnao-tw/Bruno-API-Test-Starter>

#### 测试报告---TODO

### bruno 更多用法---TODO

### Postman 脚本迁移

#### API 请求集迁移

- 在首页点击‘Import Collection’链接，打开导入 API collection 的弹窗
- 点击选择 Postman Collection 的链接，再选在已存在的 Postman 请求集文件路径
- 即可导入 Postman 的请求集
- 但是目前只支持导入 API 请求，无法导入测试脚本，如图所示（但不影响请求调用）
![postman1](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//postman1.png)
![bruno1](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//bruno1.png)

#### 环境变量迁移

- 在首页选择刚才导入的 Postman 请求
- 点击页面右上角的‘No Environment’链接（默认为 No Environment），选择菜单中的 configure 按钮即可打开环境变量管理弹窗
- 点击‘Import Environment’链接，打开导入 Environment 的弹窗
- 点击选择 Postman Environment 的链接，再选在已存在的 Postman 环境变量文件路径
- 即可导入 Postman 的环境变量
![postman2](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//postman2.png)
![bruno2](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//bruno2.png)

#### 测试脚本迁移参考

>两个工具测试脚本的语法存在一部分差异，需要手动修改

- Postman 测试脚本语法参考：<https://learning.postman.com/docs/writing-scripts/test-scripts/>
- Postman 测试脚本示例

```javascript
pm.test("res.status should be 200", function () {
  pm.response.to.have.status(200);
});
pm.test("res.body should be correct", function() {
  var data = pm.response.json();
  pm.expect(data.id).to.equal(1);
  pm.expect(data.title).to.contains('provident');
});
```

- Bruno 测试脚本语法参考：<https://docs.usebruno.com/testing/introduction.html>
- Bruno 测试脚本示例

```javascript
test("res.status should be 200", function() {
  const data = res.getBody();
  expect(res.getStatus()).to.equal(200);
});
test("res.body should be correct", function() {
  const data = res.getBody();
  expect(data.id).to.equal(1);
expect(data.title).to.contains('provident');
});
```

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->