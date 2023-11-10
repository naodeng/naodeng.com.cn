+++
author = "nao.deng"
title = "SuperTest Tutorial Advance Usage - Multiple Environment Support"
date = "2023-11-10T12:37:59+08:00"
description = "This blog focuses on advanced usage of SuperTest with an emphasis on multi-environment support. You will learn how to configure and manage multiple test environments for different stages of development and deployment. We will discuss how to easily switch between different environments within the same test suite to ensure that your API tests run stably in a variety of situations. This tutorial will help you better organize and maintain your test code, improve test coverage, and ensure test adaptability and reliability. Whether you are a beginner or an experienced tester, this blog will provide you with valuable information that will enable you to be more flexible in meeting the challenges of supporting multiple environments."
keywords = ["API Testing", "SuperTest", "API Automation Testing Framework", "API automation testing", "Automation Testing"]
tags = [ "Data Driven"
]
Categories =  ["API automation testing", "SuperTest"]
toc = true
+++

## Multiple Environment Support

When using Jest or Mocha for API testing, you may need to support testing different environments, such as development, test and production environments. This can be achieved by configuring different test scripts and environment variables.

The following is a brief description of how to configure multi-environment support in Jest and Mocha, with a demo demonstrating support for two environments.

Mocha version can be found in the demo project: <https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>.

The Jest version can be found in the demo project: <https://github.com/Automation-Test-Starter/SuperTest-Jest-demo>.

> The mocha version is similar to the Jest version, so here is an example of the mocha version.

### Create Multi-Environment Test Configuration File

```bash
// create test configuration folder, if already exists, skip this step
mkdir Config
// create test configuration file for test environment
cd Config
touch testConfig-test.js
// create test configuration file for dev environment
touch testConfig-dev.js
```

### Edit Multi-Environment Test Configuration File

- edit test configuration file for test environment: testConfig-test.js

> based on actual situation, edit test configuration file for test environment

```javascript
// Test config file for test environment
module.exports = {
    host: 'https://jsonplaceholder.typicode.com',  // Test endpoint
    getAPI: '/posts/1',  // Test GET API URL
    postAPI: '/posts', // Test POST API URL
};
```

- edit test configuration file for dev environment: testConfig-dev.js

> based on actual situation, edit test configuration file for dev environment

```javascript
// Test config file for dev environment
module.exports = {
    host: 'https://jsonplaceholder.typicode.com',  // Test endpoint
    getAPI: '/posts/1',  // Test GET API URL
    postAPI: '/posts', // Test POST API URL
};
```

### Create Multi-Environment Test Data File

```bash
// create test data folder, if already exists, skip this step
mkdir testData
// enter test data folder
cd testData
// create request data file for test environment
touch requestData-test.js
// create response data file for test environment
touch responseData-test.js
// create request data file for dev environment
touch requestData-dev.js
// create response data file for dev environment
touch responseData-dev.js
```

### Edit Multi-Environment Test Data File

- edit request data file for test environment: requestData-test.js

> based on actual situation, edit request data file for test environment

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

- edit response data file for test environment: responseData-test.js

> based on actual situation, edit response data file for test environment

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

- edit request data file for dev environment: requestData-dev.js

> based on actual situation, edit request data file for dev environment

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

- edit response data file for dev environment: responseData-dev.js

> based on actual situation, edit response data file for dev environment

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

### Update test cases to support multiple environments

> To differentiate, here is a new test case file named multiEnvTest.spec.js

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

### Update test scripts to support multiple environments

'''json
// package.json
"scripts": {
    "test": "NODE_ENV=test mocha" // run test script for test environment
    "dev": "NODE_ENV=dev mocha" //  run test script for dev environment
  },
'''

### Run the test case to check if the multi environment support is working.

> If you use demo project to run multi-environment support test case: multiEnvTest.spec.js, it is recommended to block dataDrivingTest.spec.js and test.spec.js test cases first, otherwise it will report an error.

- Run the test environment test script

```bash
npm run test
```

![OMbN1v](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/OMbN1v.png)

- Run the dev environment test script

```bash
npm run dev
```

![mWzei1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/mWzei1.png)
