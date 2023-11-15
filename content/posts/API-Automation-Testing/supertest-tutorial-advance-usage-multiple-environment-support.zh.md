---
author:  "nao.deng"
title:  "SuperTest 教程：进阶用法 - 多环境支持"
date:  "2023-11-10T12:37:59+08:00"
summary:  "专注于 SuperTest 的高级用法，着重介绍多环境支持。您将学习如何配置和管理多个测试环境，以适应不同开发和部署阶段。"
ZHtags: [ "多环境支持"
]
ZHcategories: ["接口自动化测试", "SuperTest"]
ZHseries: ["SuperTest 教程"]
ShowWordCount: true
---

## 多环境支持

在使用 Jest 或 Mocha 进行 API 测试时，你可能需要支持测试不同的环境，例如开发环境、测试环境和生产环境。这可以通过配置不同的测试脚本和环境变量来实现。

下面会简单描述一下如何在 Jest 和 Mocha 中配置多环境支持，会以支持两个环境来进行 demo 演示。

Mocha 版本可参考 demo 项目：<https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>

Jest 版本可参考 demo 项目：<https://github.com/Automation-Test-Starter/SuperTest-Jest-demo>

> mocha 版本和 Jest 版本类似，这里以 Mocha 版本为例

### 新建多环境测试配置文件

```bash
// 新建测试配置文件夹 若已有则不用新建
mkdir Config
// 新建测试环境测试配置文件
cd Config
touch testConfig-test.js
// 新建开发环境测试配置文件
touch testConfig-dev.js
```

### 编写多环境测试配置文件

- 编写测试环境测试配置文件

> 根据实际情况编写测试环境测试配置文件

```javascript
// Test config file for test environment
module.exports = {
    host: 'https://jsonplaceholder.typicode.com',  // Test endpoint
    getAPI: '/posts/1',  // Test GET API URL
    postAPI: '/posts', // Test POST API URL
};
```

- 编写开发环境测试配置文件

> 根据实际情况编写开发环境测试配置文件

```javascript
// Test config file for dev environment
module.exports = {
    host: 'https://jsonplaceholder.typicode.com',  // Test endpoint
    getAPI: '/posts/1',  // Test GET API URL
    postAPI: '/posts', // Test POST API URL
};
```

### 新建多环境测试数据文件

```bash
// 新建测试数据文件夹 若已有则不用新建
mkdir testData
// 进入测试数据文件夹
cd testData
// 新建测试环境请求数据文件
touch requestData-test.js
// 新建测试环境响应数据文件
touch responseData-test.js
// 新建开发环境请求数据文件
touch requestData-dev.js
// 新建开发环境响应数据文件
touch responseData-dev.js
```

### 编写多环境测试数据文件

- 编写测试环境请求数据文件

> 根据实际情况编写测试环境请求数据文件

```javascript
// Test request data file for test environment
module.exports = {
    getAPI: '',  // request data for GET API
    postAPI:{
        "title": "foo",
        "body": "bar",
        "userId": 1
    },  // request data for POST API
};
```

- 编写测试环境响应数据文件

> 根据实际情况编写测试环境响应数据文件

```javascript
// Test response data file for test environment
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

- 编写开发环境请求数据文件

> 根据实际情况编写开发环境请求数据文件

```javascript
// Test request data file for dev environment
module.exports = {
    getAPI: '',  // request data for GET API
    postAPI:{
        "title": "foo",
        "body": "bar",
        "userId": 1
    },  // request data for POST API
};
```

- 编写开发环境响应数据文件

> 根据实际情况编写开发环境响应数据文件

```javascript
// Test response data file for dev environment
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

### 更新测试用例来支持多环境

> 为做区分，这里新建测试用例文件，文件名为 multiEnvTest.spec.js

```javascript
// Test: multiEnvTest.spec.js
const request = require('supertest'); // import supertest
require('chai');
// import chai
const expect = require('chai').expect; // import expect

const config = process.env.NODE_ENV === 'test' ? require('../Config/testConfig-test') : require('../Config/testConfig-dev'); // import test config
const requestData = process.env.NODE_ENV === 'test' ? require('../TestData/requestData-test') : require('../TestData/requestData-dev'); // import request data
const responseData= process.env.NODE_ENV === 'test' ? require('../TestData/responseData-test') : require('../TestData/responseData-dev'); // import response data

// Test Suite
describe('multiEnv-Verify that the Get and POST API returns correctly', function(){
    // Test case 1
    it('multiEnv-Verify that the GET API returns correctly', function(done){
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
    it('multiEnv-Verify that the POST API returns correctly', function(done){
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

### 更新测试脚本来支持多环境

'''json
// package.json
"scripts": {
    "test": "NODE_ENV=test mocha" // 运行测试环境测试脚本
    "dev": "NODE_ENV=dev mocha" // 运行 dev 环境测试脚本
  },
'''

### 运行该测试用例确认多环境支持是否生效

> 若用 demo 项目运行多环境支持测试用例：multiEnvTest.spec.js，建议先屏蔽掉 dataDrivingTest.spec.js 和 test.spec.js 测试用例，否则会报错

- 运行测试环境测试脚本

```bash
npm run test
```

![OMbN1v](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/OMbN1v.png)

- 运行开发环境测试脚本

```bash
npm run dev
```

![mWzei1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/mWzei1.png)
