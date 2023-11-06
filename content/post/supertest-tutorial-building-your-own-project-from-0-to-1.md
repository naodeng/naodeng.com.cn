+++
author = "nao.deng"
title = "Supertest 教程：从 0 到 1 搭建 Supertest 接口自动化测试项目"
date = "2023-11-06T12:30:26+08:00"
description = "这篇博客将从零开始教您如何建立 SuperTest 接口自动化测试项目，利用 REST Assured。您将学习如何创建项目的基础结构，设置环境，编写测试用例，以及执行自动化测试。无论您是初学者还是经验丰富的开发者，这篇教程都将帮助您迅速入门 SuperTest，并从零到一建立一个强大的 API 自动化测试项目。"
keywords = ["API 测试","Supertest","API 自动化测试框架","接口自动化测试","自动化测试"]
tags = [
"API 测试","Supertest","接口自动化测试","自动化测试"
]
+++
- [从 0 到 1 搭建 SuperTest 接口自动化测试项目](#从-0-到-1-搭建-supertest-接口自动化测试项目)
  - [Mocha 版本](#mocha-版本)
    - [新建项目文件夹](#新建项目文件夹)
    - [项目初始化](#项目初始化)
    - [安装依赖](#安装依赖)
    - [新建测试文件及测试用例](#新建测试文件及测试用例)
    - [编写测试用例](#编写测试用例)
    - [配置 mocha 配置文件](#配置-mocha-配置文件)
    - [调整测试脚本](#调整测试脚本)
    - [运行测试用例](#运行测试用例)
    - [测试报告](#测试报告)
      - [命令行测试报告](#命令行测试报告)
      - [集成 mochawesome 测试报告](#集成-mochawesome-测试报告)
  - [Jest 版本](#jest-版本)
    - [新建 Jest demo 项目文件夹](#新建-jest-demo-项目文件夹)
    - [Jest demo 项目初始化](#jest-demo-项目初始化)
    - [Jest demo 安装依赖](#jest-demo-安装依赖)
    - [新建 Jest demo 项目的测试文件及测试用例](#新建-jest-demo-项目的测试文件及测试用例)
    - [编写 Jest demo 测试用例](#编写-jest-demo-测试用例)
    - [配置 Jest 配置文件](#配置-jest-配置文件)
    - [调整 Jest 测试脚本](#调整-jest-测试脚本)
    - [运行 Jest 测试用例](#运行-jest-测试用例)
    - [Jest 测试报告](#jest-测试报告)
      - [Jest 命令行测试报告](#jest-命令行测试报告)
      - [集成 jest-html-reporters 测试报告](#集成-jest-html-reporters-测试报告)

## 从 0 到 1 搭建 SuperTest 接口自动化测试项目

下面会从 0 到 1 搭建一个 SuperTest 接口自动化测试项目，会使用 Jest 或 Mocha 作为测试框架进行 demo 演示。

### Mocha 版本

可参考 demo 项目：<https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>

#### 新建项目文件夹

```bash
mkdir SuperTest-Mocha-demo
```

#### 项目初始化

```bash
// 进入项目文件夹下
cd SuperTest-Mocha-demo
// nodejs 项目初始化
npm init -y
```

#### 安装依赖

```bash
// 安装 supertest
npm install supertest --save-dev
// 安装 mocha测试框架
npm install mocha --save-dev
// 安装 chai断言库
npm install chai --save-dev
```

#### 新建测试文件及测试用例

```bash
// 新建测试文件夹
mkdir Specs
// 新建测试用例文件
cd Specs
touch test.spec.js
```

#### 编写测试用例

> 测试接口可参考项目中 demoAPI.md 文件

```javascript
// Test: test.spec.js
const request = require('supertest'); // import supertest
const chai = require('chai'); // import chai
const expect = require('chai').expect; // import expect

// Test Suite
describe('Verify that the Get and POST API returns correctly', function(){
        // Test case 1
        it('Verify that the GET API returns correctly', function(done){
            request('https://jsonplaceholder.typicode.com') // Test endpoint
                .get('/posts/1') // API endpoint
                .expect(200) // expected response status code
                .expect(function (res) {
                    expect(res.body.id).to.equal(1  )
                    expect(res.body.userId).to.equal(1)
                    expect(res.body.title).to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
                    expect(res.body.body).
                    to.equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
                }) // expected response body
                .end(done) // end the test case

        });
        // Test case 2
        it('Verify that the POST API returns correctly', function(done){
            request('https://jsonplaceholder.typicode.com') // Test endpoint
                .post('/posts') // API endpoint
                .send({
                    "title": "foo",
                    "body": "bar",
                    "userId": 1
                }) // request body
                .expect(201) // expected response status code
                .expect(function (res) {
                    expect(res.body.id).to.equal(101  )
                    expect(res.body.userId).to.equal(1)
                    expect(res.body.title).to.equal("foo")
                    expect(res.body.body).to.equal("bar")
                }) // expected response body
                .end(done) // end the test case
        });
});
```

#### 配置 mocha 配置文件

- 新建配置文件

```bash
// 项目根目录下新建配置文件
touch .mocharc.js
```

- 更新配置文件

```javascript
// mocha config
module.exports = {
    timeout: 5000, // 设置测试用例的默认超时时间（毫秒）
    spec: ['Specs/**/*.js'], // 指定测试文件的位置
};
```

#### 调整测试脚本

在 package.json 文件中添加测试脚本

```json
"scripts": {
    "test": "mocha"
  },
```

#### 运行测试用例

```bash
// 运行测试用例
npm run test
```

#### 测试报告

##### 命令行测试报告

![RbdVs7](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/RbdVs7.png)

##### 集成 mochawesome 测试报告

- 安装 mochawesome

```bash
npm install --save-dev mochawesome
```

- 更新 mocha 配置文件

> 可参考 demo 项目：<https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>

```javascript
// mocha config
module.exports = {
    timeout: 5000, // 设置测试用例的默认超时时间（毫秒）
    reporter: 'mochawesome', // 使用 mochawesome 报告生成器
    'reporter-option': [
        'reportDir=Report', // 报告生成路径
        'reportFilename=[status]_[datetime]-[name]-report', //报告名称
        'html=true', // 生成 html 格式报告
        'json=false', // 不生成 json 格式报告
        'overwrite=false', // 不覆盖已经存在的报告
        'timestamp=longDate', // 给报告添加时间戳

    ], // 传递给报告生成器的参数
    spec: ['Specs/**/*.js'], // 指定测试文件的位置
};
```

- 运行测试用例

```bash
// 运行测试用例
npm run test
```

- 查看测试报告

> 测试报告文件夹：Report，点击使用浏览器打开最新 html 报告文件

![BseOQ8](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/BseOQ8.png)

### Jest 版本

可参考 demo 项目：<https://github.com/Automation-Test-Starter/SuperTest-Jest-demo>

#### 新建 Jest demo 项目文件夹

```bash
mkdir SuperTest-Jest-demo
```

#### Jest demo 项目初始化

```bash
// 进入项目文件夹下
cd SuperTest-Mocha-demo
// nodejs 项目初始化
npm init -y
```

#### Jest demo 安装依赖

```bash
// 安装 supertest
npm install supertest --save-dev
// 安装 Jest测试框架
npm install jest --save-dev
```

#### 新建 Jest demo 项目的测试文件及测试用例

```bash
// 新建测试文件夹
mkdir Specs
// 新建测试用例文件
cd Specs
touch test.spec.js
```

#### 编写 Jest demo 测试用例

> 测试接口可参考项目中 demoAPI.md 文件

```javascript
const request = require('supertest');

// Test Suite
describe('Verify that the Get and POST API returns correctly', () => {
    // Test case 1
    it('Verify that the GET API returns correctly', async () => {
        const res = await request('https://jsonplaceholder.typicode.com') // Test endpoint
            .get('/posts/1') // API endpoint
            .send() // request body
            .expect(200); // use supertest's expect to verify that the status code is 200
        // user jest's expect to verify the response body
        expect(res.status).toBe(200); // Verify that the status code is 200
        expect(res.body.id).toEqual(1); // Verify that the id is 1
        expect(res.body.userId).toEqual(1); // Verify that the userId is 1
        expect(res.body.title)
        .toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        expect(res.body.body)
        .toEqual("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
    });

    // Test case 2
    it('Verify that the POST API returns correctly', async() =>{
        const res = await request('https://jsonplaceholder.typicode.com') // Test endpoint
            .post('/posts') // API endpoint
            .send({
                "title": "foo",
                "body": "bar",
                "userId": 1
            }) // request body
            .expect(201); // use supertest's expect to verify that the status code is 201
        // user jest's expect to verify the response body
        expect(res.statusCode).toBe(201);
        expect(res.body.id).toEqual(101);
        expect(res.body.userId).toEqual(1);
        expect(res.body.title).toEqual("foo");
        expect(res.body.body).toEqual("bar");
    });
}); 
```

#### 配置 Jest 配置文件

- 新建配置文件

```bash
// 项目根目录下新建配置文件
touch jest.config.js
```

- 更新配置文件

```javascript
// Desc: Jest configuration file
module.exports = {
    // 测试文件的匹配规则
    testMatch: ['**/Specs/*.spec.js'],
};
```

#### 调整 Jest 测试脚本

在 package.json 文件中添加测试脚本

```json
"scripts": {
    "test": "jest"
  },
```

#### 运行 Jest 测试用例

```bash
// 运行测试用例
npm run test
```

#### Jest 测试报告

##### Jest 命令行测试报告

![ItJf6N](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ItJf6N.png)

##### 集成 jest-html-reporters 测试报告

- 安装 jest-html-reporters

```bash
npm install --save-dev jest-html-reporters
```

- 更新 Jest 配置文件

> 可参考 demo 项目：<https://github.com/Automation-Test-Starter/SuperTest-Jest-demo>

```javascript
// Desc: Jest configuration file
module.exports = {
    // 测试文件的匹配规则
    testMatch: ['**/Specs/*.spec.js'],
    // 测试报告生成器
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './Report', // 报告生成路径
                filename: 'report.html', // 报告名称
                pageTitle: 'SuperTest and Jest API Test Report', // 报告标题
                overwrite: true, // 报告文件是否覆盖
                expand: true, // 展开所有测试套件
            },
        ],
    ],
};
```

- 运行 Jest 测试用例

```bash
// 运行测试用例
npm run test
```

- 查看测试报告

> 测试报告文件夹：Report，点击使用浏览器打开最新 html 报告文件

![12ZreT](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/12ZreT.png)
