---
author: "nao.deng"
title: "SuperTest API Automation Testing Tutorial Advance Usage - Data Driven"
date: "2023-11-09T18:06:50+08:00"
summary: "advanced usage of Supertest, focusing on data-driven testing. You will learn how to extend and optimize your Supertest test suite with data parameterization to improve test coverage. "
tags: [ "Data Driven"]
Categories:  ["API automation testing", "SuperTest"]
series: ["SuperTest API Automation Testing Tutorial"]
ShowWordCount: true
---

## Data Driven

Data-driven for API testing is a testing methodology in which the input data and expected output data for test cases are stored in data files, and the testing framework executes multiple tests against these data files to validate various aspects of the API. Data-driven testing can help you effectively cover multiple scenarios and ensure that the API works properly with a variety of input data.

The Mocha version can be found in the demo project: <https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>.

The Jest version can be found in the demo project: <https://github.com/Automation-Test-Starter/SuperTest-Jest-demo>.

> The mocha version is similar to the Jest version, so here is an example of the mocha version.

### Create test configuration files

```bash
// create test configuration folder
mkdir Config
// create test configuration file
cd Config
touch config.js
```

### Edit test configuration files

```javascript
// Test config file
module.exports = {
    host: 'https://jsonplaceholder.typicode.com',  // Test endpoint
    getAPI: '/posts/1',  // Test GET API URL
    postAPI: '/posts', // Test POST API URL
};
```

### Create test data files

```bash
// create test data folder
mkdir testData
// enter test data folder
cd testData
// create request data file
touch requestData.js
// create response data file
touch responseData.js
```

### Edit test data files

- Edit request data files

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

- Edit response data files

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

### Update test cases to support data-driven

> To differentiate, create a new test case file named dataDrivingTest.spec.js.

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

### Run the test case to check whether the data driver is effective.

> If you run the data driver support test case: dataDrivingTest.spec.js with the demo project, it is recommended to skip the test.spec.js test case first, otherwise it will report an error.

![OCDzLr](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/OCDzLr.png)
