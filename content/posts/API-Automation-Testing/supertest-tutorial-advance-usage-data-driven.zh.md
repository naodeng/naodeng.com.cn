---
author: "nao.deng"
title: "SuperTest 接口自动化测试教程：进阶用法 - 数据驱动"
date: "2023-11-09T18:06:50+08:00"
summary: "专注于 SuperTest 的高级用法，侧重于数据驱动测试。您将学习如何通过数据参数化来扩展和优化您的 SuperTest 测试套件，提高测试覆盖率。"
ZHtags: ["数据驱动"]
ZHcategories: ["接口自动化测试", "SuperTest"]
ZHseries: ["SuperTest 接口自动化测试教程"]
ShowWordCount: true
---

### 数据驱动

API 测试的数据驱动是一种测试方法，其中测试用例的输入数据和预期输出数据都被存储在数据文件中，测试框架根据这些数据文件执行多次测试，以验证 API 的各个方面。数据驱动测试可以帮助你有效地覆盖多种情况，确保 API 在各种输入数据下都能正常运行。

Mocha 版本可参考 demo 项目：<https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>

Jest 版本可参考 demo 项目：<https://github.com/Automation-Test-Starter/SuperTest-Jest-demo>

> mocha 版本和 Jest 版本类似，这里以 Mocha 版本为例

#### 新建测试配置文件

```bash
// 新建测试配置文件夹
mkdir Config
// 新建测试配置文件
cd Config
touch config.js
```

#### 编写测试配置文件

```javascript
// Test config file
module.exports = {
    host: 'https://jsonplaceholder.typicode.com',  // Test endpoint
    getAPI: '/posts/1',  // Test GET API URL
    postAPI: '/posts', // Test POST API URL
};
```

#### 新建测试数据文件

```bash
// 新建测试数据文件夹
mkdir testData
// 进入测试数据文件夹
cd testData
// 新建请求数据文件
touch requestData.js
// 新建响应数据文件
touch responseData.js
```

#### 编写测试数据文件

- 编写请求数据文件

```javascript
// Test request data file
module.exports = {
    getAPI: '',  // request data for GET API
    postAPI:{
        "title": "foo",
        "body": "bar",
        "userId": 1
    },  // request data for POST API
};
```

- 编写响应数据文件

```javascript
// Test response data file
module.exports = {
    getAPI: {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },  // response data for GET API
    postAPI:{
        "title": "foo",
        "body": "bar",
        "userId": 1,
        "id": 101
    },  // response data for POST API
};
```

#### 更新测试用例来支持数据驱动

> 为做区分，这里新建测试用例文件，文件名为 dataDrivingTest.spec.js

```javascript
// Test: dataDrivingTest.spec.js
const request = require('supertest'); // import supertest
require('chai');
// import chai
const expect = require('chai').expect; // import expect

const config = require('../Config/testConfig'); // import test config
const requestData = require('../TestData/requestData'); // import request data
const responseData = require('../TestData/responseData'); // import response data

// Test Suite
describe('Data Driving-Verify that the Get and POST API returns correctly', function(){
        // Test case 1
        it('Data Driving-Verify that the GET API returns correctly', function(done){
            request(config.host) // Test endpoint
                .get(config.getAPI) // API endpoint
                .expect(200) // expected response status code
                .expect(function (res) {
                    expect(res.body.id).to.equal(responseData.getAPI.id)
                    expect(res.body.userId).to.equal(responseData.getAPI.userId)
                    expect(res.body.title).to.equal(responseData.getAPI.title)
                    expect(res.body.body).to.equal(responseData.getAPI.body)
                }) // expected response body
                .end(done) // end the test case

        });
        // Test case 2
        it('Data Driving-Verify that the POST API returns correctly', function(done){
            request(config.host) // Test endpoint
                .post(config.postAPI) // API endpoint
                .send(requestData.postAPI) // request body
                .expect(201) // expected response status code
                .expect(function (res) {
                    expect(res.body.id).to.equal(responseData.postAPI.id )
                    expect(res.body.userId).to.equal(responseData.postAPI.userId )
                    expect(res.body.title).to.equal(responseData.postAPI.title )
                    expect(res.body.body).to.equal(responseData.postAPI.body )
                }) // expected response body
                .end(done) // end the test case
        });
});
```

#### 运行该测试用例确认数据驱动是否生效

> 若用 demo 项目运行数据驱动支持测试用例：dataDrivingTest.spec.js，建议先屏蔽掉 test.spec.js 测试用例，否则会报错

![OCDzLr](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/OCDzLr.png)
