+++
author = "nao.deng"
title = "SuperTest Tutorial: Building a Supertest API Automation Test project from 0 to 1"
date = "2023-11-06T12:30:26+08:00"
description = "In this blog, we'll dive into how to build a Supertest API automation testing project from scratch.Supertest is a popular Java library for performing REST API testing, providing powerful tools that make it easy to write automated test scripts to validate the API'sbehavior. Whether you are an experienced test engineer or a developer just getting started, this tutorial will provide you with valuable knowledge about Supertest and API automation testing."
keywords = ["API Testing", "SuperTest", "API Automation Testing Framework", "API automation testing", "Automation Testing"]
tags = [ "Building a API Automation Test project from 0 to 1"
]
Categories =  ["API automation testing", "SuperTest"]
+++

Tutorial on building a SuperTest API automation test project from scratch using either Jest or Mocha as the test framework.
📄 Mocha version Step-by-step guide on building a SuperTest API automation test project using Mocha.
📄 Jest version Step-by-step guide on building a SuperTest API automation test project using Jest.

<!--more-->
- [Build a SuperTest API automation test project from 0 to 1](#build-a-supertest-api-automation-test-project-from-0-to-1)
  - [Mocha version](#mocha-version)
    - [Create a new project folder](#create-a-new-project-folder)
    - [Project Initialization](#project-initialization)
    - [Install dependencies](#install-dependencies)
    - [Create new test folder and test cases](#create-new-test-folder-and-test-cases)
    - [Writing Test Cases](#writing-test-cases)
    - [Configuring mocha config files](#configuring-mocha-config-files)
    - [Updating test scripts for mocha](#updating-test-scripts-for-mocha)
    - [Running test cases](#running-test-cases)
    - [Test Report](#test-report)
      - [Terminal Test Report](#terminal-test-report)
      - [Integrated mochawesome test report](#integrated-mochawesome-test-report)
  - [Jest version](#jest-version)
    - [Create a new jest project folder](#create-a-new-jest-project-folder)
    - [Jest demo project initialization](#jest-demo-project-initialization)
    - [Jest demo install dependencies](#jest-demo-install-dependencies)
    - [Create new Jest demo project test folder and test cases](#create-new-jest-demo-project-test-folder-and-test-cases)
    - [Writing Jest demo Test Cases](#writing-jest-demo-test-cases)
    - [Configuring Jest config files](#configuring-jest-config-files)
    - [Adapting Jest Test Scripts](#adapting-jest-test-scripts)
    - [Runing test case](#runing-test-case)
    - [Jest test report](#jest-test-report)
      - [Jest terminal Test Report](#jest-terminal-test-report)
      - [Integrating jest-html-reporters test reports](#integrating-jest-html-reporters-test-reports)


## Build a SuperTest API automation test project from 0 to 1

The following is a demo of building a SuperTest API automation test project from 0 to 1, using either Jest or Mocha as the test framework.

### Mocha version

You can refer to the demo project at <https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>.

#### Create a new project folder

```bash
mkdir SuperTest-Mocha-demo
```

#### Project Initialization

```bash
// enter the project folder
cd SuperTest-Mocha-demo
// nodejs project initialization
npm init -y
```

#### Install dependencies

```bash
// install supertest library
npm install supertest --save-dev
// install mocha test framework
npm install mocha --save-dev
// install chai assertion library
npm install chai --save-dev
```

#### Create new test folder and test cases

```bash
// create test folder
mkdir Specs
// create test case file
cd Specs
touch test.spec.js
```

#### Writing Test Cases

> The test API can be found in the demoAPI.md file in the project.

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
                    expect(res.body.title)
                    .to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
                    expect(res.body.body)
                    .to.equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
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

#### Configuring mocha config files

- Create a new mocha configuration file

```bash
// create configuration file in the project root directory
touch .mocharc.js
```

- Updating configuration files

```javascript
// mocha config
module.exports = {
    timeout: 5000, // set the default timeout for test cases (milliseconds)
    spec: ['Specs/**/*.js'], // specify the location of the test file
};
```

#### Updating test scripts for mocha

Add test scripts to the package.json file

```json
"scripts": {
    "test": "mocha"
  },
```

#### Running test cases

```bash
// run test cases
npm run test
```

#### Test Report

##### Terminal Test Report

![RbdVs7](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/RbdVs7.png)

##### Integrated mochawesome test report

- Install mochawesome library

```bash
npm install --save-dev mochawesome
```

- Updating mocha configuration files

> You can refer to the demo project at<https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>

```javascript
// mocha config
module.exports = {
    timeout: 5000, // Set the default timeout for test cases (milliseconds)
    reporter: 'mochawesome', // Use mochawesome as the test report generator
    'reporter-option': [
        'reportDir=Report', // Report directory
        'reportFilename=[status]_[datetime]-[name]-report', //Report file name
        'html=true', // enable html report
        'json=false', // disable json report
        'overwrite=false', // disable report file overwrite
        'timestamp=longDate', // add timestamp to report file name

    ], // mochawesome report generator options
    spec: ['Specs/**/*.js'], // Specify the location of the test file
};
```

- Running test cases

```bash
// Run test cases
npm run test
```

- View test report

> Test report folder: Report, click to open the latest html report file with your browser

![BseOQ8](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/BseOQ8.png)

### Jest version

 You can refer to the demo project at<https://github.com/Automation-Test-Starter/SuperTest-Jest-demo>

#### Create a new jest project folder

```bash
mkdir SuperTest-Jest-demo
```

#### Jest demo project initialization

```bash
// enter the project folder
cd SuperTest-Mocha-demo
// nodejs project initialization
npm init -y
```

#### Jest demo install dependencies

```bash
// install supertest library
npm install supertest --save-dev
// install jest test framework
npm install jest --save-dev
```

#### Create new Jest demo project test folder and test cases

```bash
// create test folder
mkdir Specs
// enter test folder and create test case file
cd Specs
touch test.spec.js
```

#### Writing Jest demo Test Cases

> The test API can be found in the demoAPI.md file in the project.

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

#### Configuring Jest config files

- Creating a new configuration file

```bash
// Create a new configuration file in the project root directory
touch jest.config.js
```

- Updating configuration files

```javascript
// Desc: Jest configuration file
module.exports = {
    // Specify the location of the test file
    testMatch: ['**/Specs/*.spec.js'],
};
```

#### Adapting Jest Test Scripts

Add the test script to the package.json file

```json
"scripts": {
    "test": "jest"
  },
```

#### Runing test case

```bash
// run test case
npm run test
```

#### Jest test report

##### Jest terminal Test Report

![ItJf6N](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ItJf6N.png)

##### Integrating jest-html-reporters test reports

- Install jest-html-reporters library

```bash
npm install --save-dev jest-html-reporters
```

- Updating jest configuration files

> You can refer to the demo project at<ttps://github.com/Automation-Test-Starter/SuperTest-Jest-demo>

```javascript
// Desc: Jest configuration file
module.exports = {
    // specify the location of the test file
    testMatch: ['**/Specs/*.spec.js'],
    // test report generator
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './Report', // report directory
                filename: 'report.html', // report file name
                pageTitle: 'SuperTest and Jest API Test Report', // report title
                overwrite: true, // enable report file overwrite
                expand: true, // enable report file expansion
            },
        ],
    ],
};
```

- Running test cases

```bash
// run test case
npm run test
```

- View test report

> Test report folder: Report, click on the browser to open the latest html report file

![12ZreT](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/12ZreT.png)
