+++
author = "nao.deng"
title = "SuperTest Tutorial: Getting Started and Setting Up Your Environment"
date = "2023-11-05T10:36:26+08:00"
description = "The content of this blog will be a tutorial on Supertest, focusing on getting started and preparing the environment to be built. In the blog, readers will learn what Supertest is and how to start using it for API testing. The tutorial will cover the basic concepts of Supertest, including how to set up a test environment and prepare the tools and resources needed so that readers can start writing and executing their own API tests. This tutorial will help beginners who want to learn how to use Supertest for API testing to get started and prepare their development environment."
keywords = ["API Testing", "SuperTest", "API Automation Testing Framework", "API automation testing", "Automation Testing"]
tags = [ "Getting Started"
]
Categories =  ["API automation testing", "SuperTest"]
+++

SuperTest is a popular JavaScript library for testing Node.js applications.
✅ Key Features of SuperTest: Initiating HTTP requests, Chained Syntax, Assertions and Expectations, Authentication Testing, Asynchronous support, Easy Integration
✅ Introduction of Jest: Jest is a popular JavaScript testing framework for writing and running tests for JavaScript applications.
✅ Introduction of Mocha: Mocha is a popular JavaScript testing framework for writing and running tests for JavaScript applications.

<!--more-->

## Introduction

This project is a quick start tutorial for API automation testing using SuperTest, and will use Jest or Mocha as the testing framework for demo demonstration.

We will introduce SuperTest, Jest and Mocha in turn, so that you can understand the basic usage of these tools in advance.

### Introduction of SuperTest

"Supertest" is a popular JavaScript library for testing Node.js applications. It is primarily used for end-to-end testing, also known as integration testing, to make sure that your application works properly across different components.Supertest is typically used in conjunction with testing frameworks such as Mocha, Jasmine or Jest to write and run test cases.

Here are some of the key features and uses of Supertest:

- Initiating HTTP requests: Supertest allows you to easily simulate HTTP requests such as GET, POST, PUT, DELETE, etc. to test your application's routing and endpoints.
- Chained Syntax: Supertest provides a chained syntax that allows you to build and execute multiple requests in a single test case, which helps simulate different user actions in your application.
- Assertions and Expectations: You can use Supertest in conjunction with assertion libraries such as Chai to examine the content of the response, status codes, headers, etc. to ensure the expected behavior of your application.
- Authentication Testing: Supertest can be used to test endpoints that require authentication to ensure that user login and authorization functions properly.
- Asynchronous support: Supertest can handle asynchronous operations, such as waiting for a response to return before executing further test code.
- Easy Integration: Supertest can be easily used with different Node.js frameworks (e.g. Express, Koa, Hapi, etc.), so you can test all types of applications.

Using Supertest can help you verify that your application is working as expected, as well as quickly catch potential problems when changes are made to your application. Typically, you need to install Supertest and the testing framework in your project, and then write test cases to simulate different requests and check responses. This helps improve code quality and maintainability and ensures that your application remains stable as it evolves.

Official documentation: <https://github.com/ladjs/supertest>

> Note: Supertest can be used not only for API testing, but also for unit and integration testing.

code examples:

```javascript
// import supertest
const request = require('supertest');

request({URL}) // request(url) or request(app)
.get() or .put() or.post() // http methods
.set() // http options
.send() // http body
.expect() // http assertions
.end() // end the request
```

### Introduction of Jest

Jest is a popular JavaScript testing framework for writing and running unit, integration and end-to-end tests for JavaScript applications. Its goal is to provide simple, fast and easy-to-use testing tools for a wide variety of JavaScript applications, both front-end and back-end.

Here are some of the key features and uses of Jest:

- Built-in Assertion Library: Jest includes a powerful assertion library that makes it easy to write assertions to verify that code behaves as expected.
- Automated mocks: Jest automatically creates mocks that help you simulate functions, modules, and external dependencies, making testing easier and more manageable.
- Fast and Parallel: Jest saves time by intelligently selecting which tests to run and executing them in parallel, allowing you to run a large number of test cases quickly.
- Comprehensive Test Suite: Jest supports unit, integration and end-to-end testing and can test a wide range of application types such as JavaScript, TypeScript, React, Vue, Node.js and more.
- Snapshot testing: Jest has a snapshot testing feature that can be used to capture UI changes by checking if the rendering of a UI component matches a previous snapshot.
- Automatic Watch Mode: Jest has a watch mode that automatically re-runs tests as code changes are made, supporting developers in continuous testing.
- Rich Ecosystem: Jest has a rich set of plug-ins and extensions that can be used to extend its functionality, such as coverage reporting, test reporting, and integration with other tools.
- Community Support: Jest is a popular testing framework with a large community that provides extensive documentation, tutorials and support resources.

Jest is often used in conjunction with other tools such as Babel (for transcoding JavaScript), Enzyme (for React component testing), Supertest (for API testing), etc. to achieve comprehensive test coverage and ensure code quality. Whether you're writing front-end or back-end code, Jest is a powerful testing tool that can help you catch potential problems and improve code quality and maintainability.

Official Documentation: <https://jestjs.io/docs/zh-Hans/getting-started>

Code examples:

```javascript
// import jest
const jest = require('jest');

describe(): // test scenarios

it(): // detailed test case, it() is in the describe()

before(): // this action is before all test cases

after(): // this action is after all test cases
```

### Introduction of Mocha

Mocha is a popular JavaScript testing framework for writing and running a variety of tests for JavaScript applications, including unit tests, integration tests, and end-to-end tests.Mocha provides flexibility and extensibility, allowing developers to easily customize the test suite to meet the needs of their projects.

Here are some of the key features and uses of Mocha:

- Multiple Test Styles: Mocha supports multiple test styles including BDD (Behavior Driven Development) and TDD (Test Driven Development). This allows developers to write test cases according to their preferences.
- Rich Assertion Library: Mocha does not include an assertion library by itself, but it can be used in conjunction with a variety of assertion libraries (e.g., Chai, Should.js, Expect.js, etc.), allowing you to write tests using your favorite assertion style.
- Asynchronous Testing: Mocha has built-in support for asynchronous testing, allowing you to test asynchronous code, Promises, callback functions, etc. to ensure that your code is correct in asynchronous scenarios.
- Parallel Testing: Mocha allows you to run test cases in your test suite in parallel, improving the efficiency of test execution.
- Rich Plug-ins and Extensions: Mocha has a rich ecosystem of plug-ins that can be used to extend its functionality, such as test coverage reporting, test report generation, and so on.
- Easy to Integrate: Mocha can be used with various assertion libraries, test runners (such as Karma and Jest), browsers (using the browser test runner), etc. to suit different project and testing needs.
- Command Line Interface: Mocha provides an easy-to-use command line interface for running test suites, generating reports, and other test-related operations.
- Continuous Integration Support: Mocha can be easily integrated into Continuous Integration (CI) tools such as Jenkins, Travis CI, CircleCI, etc. to ensure that code is tested after every commit.

Mocha's flexibility and extensibility make it a popular testing framework for a variety of JavaScript projects, including front-end and back-end applications. Developers can choose the testing tools, assertion libraries, and other extensions to meet the requirements of their projects based on their needs and preferences. Whether you are writing browser-side code or server-side code, Mocha is a powerful testing tool to help you ensure code quality and reliability.

Official documentation: <https://mochajs.org/>

Code examples:

```javascript
// import mocha
const mocha = require('mocha');

describe(): // test scenarios

it(): // detailed test case, it() is in the describe()

before(): // this action is before all test cases

after(): // this action is after all test cases
```

### Introduction of CHAI

Chai is a JavaScript assertion library for assertion and expectation validation when writing and running test cases. It is a popular testing tool that is often used in conjunction with testing frameworks (e.g. Mocha, Jest, etc.) to help developers write and execute various types of tests, including unit tests and integration tests.

Here are some of the key features and uses of Chai:

- Readable Assertion Syntax: Chai provides an easy to read and write assertion syntax that makes test cases easier to understand. It supports natural language assertion styles such as expect(foo).to.be.a('string') or expect(bar).to.equal(42).
- Multiple Assertion Styles: Chai provides a number of different assertion styles to suit different developer preferences. The main styles include BDD (Behavior-Driven Development) style, TDD (Test-Driven Development) style and assert style.
- Plugin extensions: Chai can be extended with plugins to support more assertion types and features. This allows Chai to fulfill a variety of testing needs, including asynchronous testing, HTTP request testing, and more.
- Easy Integration: Chai can be easily integrated with various testing frameworks such as Mocha, Jest, Jasmine etc. This makes it a powerful tool for writing test cases.
- Chained Assertions Support: Chai allows you to chain calls to multiple assertions to make complex testing and validation easier.

Official documentation: <https://www.chaijs.com/>

Code examples:

```javascript
// import chai
const chai = require('chai');
const expect = chai.expect;

// demo assertions
.expect(<actual result>).to.{assert}(<expected result>) // Asserts that the target is strictly equal to value.

.expect(‘hello').to.equal('hello'); // Asserts that the target is strictly equal to value.

.expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' }); // Asserts that the target is not strictly equal to value.

.expect('foobar').to.contain('foo'); // Asserts that the target contains the given substring.

.expect(foo).to.exist; // Asserts that the target is neither null nor undefined.

.expect(5).to.be.at.most(5); // Asserts that the target is less than or equal to value.
```

## Project dependencies

> The following environments need to be installed in advance

- [x] nodejs, demo version v21.1.0

## Project Structure

The following is the file structure of a SuperTest Interface Automation Test project, which contains test configuration files, test case files, test tool files, and test report files. It can be used for reference.

```Text
SuperTest-Jest-demo
├── README.md
├── package.json
├── package-lock.json
├── Config // Test configuration 
│   └── config.js
├── Specs // Test case 
│   └── test.spec.js
├── Utils // Test tool 
│   └── utils.js
├── Report // Test report 
│   └── report.html
├── .gitignore
└── node_modules // Project dependencies
    ├── ...
    └── ...
```

## Next

In the next post, we will introduce how to build a SuperTest interface automation test project from 0 to 1 using Supertest, so stay tuned.
