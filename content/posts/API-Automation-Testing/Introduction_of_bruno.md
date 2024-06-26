---
author: "nao.deng"
title: "Introducing Bruno for Replacement Postman"
date: "2023-10-17T11:31:43+08:00"
summary: "Article introduces postman replacement tool bruno beginner's introduction, how to migrate postman scripts to bruno"
tags: [
"postman migration","postman replacement","postman","Bruno","Bruno cli"
]
Categories:   ["API automation testing", "Bruno"]
series: ["Bruno Guide"]
ShowWordCount: true
---

Since Postman announced in May 2023 that it will phase out the Scratch Pad model with offline capabilities, teams that need to isolate API workspace data from third-party servers have been looking for alternatives.
Teams that need to isolate API workspace data from third-party servers have had to look for alternatives. bruno is one of those alternatives: an open source desktop application designed for API testing, development, and debugging.

Bruno is one of those alternatives: an open source desktop application designed for API testing, development, and debugging. Why bruno, how to get started, and how to migrate postman scripts are all covered in this article!

## why bruno

Official description: <https://github.com/usebruno/bruno/discussions/269>

Comparison with postman: <https://www.usebruno.com/compare/bruno-vs-postman>

Open source, MIT License

Client platform support (Mac/linux/Windows)

Offline client, no cloud synchronization plan

Supports Postman/insomina script import (only API request scripts can be imported, not test scripts)

Relatively active community and clear [product development roadmap](https://github.com/usebruno/bruno/discussions/384).

## Install bruno

Download link: <https://www.usebruno.com/downloads>

Mac computer recommended brew command download

​    `brew install Bruno`

## Getting Started

### Default main API

![homepage](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/homepage.png)

### API collection

#### Create API collection

- On the home page, click on the 'Create Collection' link to open the Create API Request Collection pop-up window.

- On the popup window, enter

  Name: input the name of the API request collection

  Location: input the path of the folder where you want to save the API request collection files (we suggest you choose the path where this project is located).

  Folder Name: you can enter the name of the API request set (a folder with the corresponding name will be created under the path you just selected).

- Click Create button to finish creating the API request set and display it on the API (the list of newly created API request set will be displayed on the left side).

![create-collection](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/create-collection.png)

#### Open API collection

- Click on the 'Open Collection' link on the home page to open the folder of the selected API request collection in bruno format.
- Click open to complete the selection and display it in the API (the collection list on the left side will display the selected API request collection information).

#### Import API collection

- Click the 'Import Collection' link on the home page to open the popup window for importing API collections (Bruno/Postman/Insomnia are supported).
- On the popup window, select the link of the corresponding format, and then select the path of the existing file of the corresponding format.
- Click open to complete the selection and display it on the API (the collection list on the left side will display the information of the selected API collection).

![import-collection](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/import-collection.png)

#### RUN API collection

- Select the API request set you want to run from the collection list on the left side of the main API.
- Select Run on the menu, the Runner tab will be opened on the right side of the API, it will show some information about the requests in the selected API request collection.
- Click on the Run Collection button to run it locally (you will see the allowed results on the screen after running).

#### Export API collection

- Select the API request set you want to run from the collection list on the left side of the main API, and right-click to open the menu.
- Select Export on the menu, and then select the path of the file you want to export to complete the export (the exported file is also in json format).

### API request

#### Create API request

- Pre-requisite: An API request collection has already been created (see Creating an API Request Collection above).
- Select the API request set you want to create a new API request from the collection list on the left side of the main API.
- Select New Request on the menu, the right API will open the Request tab, it will show some information of requests in the selected API request set.
- On the new Request window, first select the request type: HTTP/GraphQL.
- In the new Request window, first select the request type: HTTP/GraphQL.
Name: Enter the name of the API request.
URL: enter the URL of the API request
Method: Select the Method of the API request.
- Click Create button to finish creating the API request and display it on the API (the left request set list will display the information of the newly created API request).

#### Edit API request

- Pre-requisite: you have already created an API request collection and an API request (refer to Creating an API request collection and New API request above).
- Select the API request collection you want to edit in the collection list on the left side of the main API, and then select the API request you want to edit.
- Then you can edit different fields of the request according to the type of API request.
  Body: Enter the Body of the API request.

  Headers: Enter the headers of the API request.

  Params: Enter the Params of the API request.

  Auth: enter the Auth of the API request

  Vars: enter the Vars of the API request
  
  Script: enter the Script of the API request

  Assert: Enter the Assert of the API request.
  
  Tests: Enter the Tests of the API request.

- Click the Save button to finish editing the API request and display it on the API (the list of request sets on the left side will display the information of the edited API request).

#### RUN API request

- Pre-requisite: you have already created an API request collection and an API request (refer to Creating an API request collection and New API request above).
- In the collection list on the left side of the main API, select the API request set that you want to edit the API request, and then select the API request that you want to edit.
- Click the right button after the API url edit box to finish running the API request and display it on the API (the Request tab on the right side will display the information of the running API request).

#### API request generate code

- Pre-requisite: you have already created an API request collection and an API request (refer to Creating an API request collection and New API request above).
- In the collection list on the left side of the main API, select the API request set that you want to edit the API request, and then select the API request that you want to edit.
- Right click on the menu and select Generate Code, then select the language you want to generate code for.
- The Generate Code window will show the request code of different languages.

### Write API request test scripts

#### API request Assert

##### Introducing Assert

- Open any API request and switch to the Assert tab.
- The Assert tab displays the Assert information of the API request.
- Assert is used to determine whether the result of the API request meets the expectation.
- Expr: input the expression of expected result, it can be the value of a field of the API request, two types can be input: Status Code and Response Body.
 Status Code: determine whether the returned status code of the API request meets the expectation (default is 200).
  Response Body: determine whether the returned result of the API request meets the expectation (default is true).

- Operator: the validation method for inputting the expected result. Supports multiple judgment methods: Equal and Not Equal, etc.
  Equal: determine whether the returned result of the API request is equal to the expected result.
  Not Equal: determine if the returned result of the API request is not equal to the expected result.
- Value: input the value of the expected result, supports two ways of inputting the expected result: Static and Dynamic.
  Static: input the static value of the expected result.
  Dynamic: input the dynamic value of the expected result, which can be the value of a field in the return result of the API request.

##### Assert demo

###### Assert status code is 200  

- Taking <https://jsonplaceholder.typicode.com/posts/1> as an example (the API request returns <https://jsonplaceholder.typicode.com/posts/1>) I want to verify that the API request returns a status is 200.
- Open the API request and switch to the Assert tab.
- Enter the following information
Expr: res.status
Operator: Equal
Value: 200

###### Assert repsponse body as expected

- Using <https://jsonplaceholder.typicode.com/posts/1> as an example (the API request returned <https://jsonplaceholder.typicode.com/posts/1>) I want to verify that the API request's repsponse body is as expected
- Open the API request and switch to the Assert tab.
- Assert1 Enter the following information in order
Expr: res.body.id
Operator: Equal
Value: 1
- Assert2 Input the following information in order
Expr: res.body.title
Operator: contains
Value: provider

##### Debug Assert

- Pre-requisite: you have already created an API request set and an API request (refer to Creating an API request set and New API request above), and you have also written the corresponding Assert according to the demo.
- Select the API request set you want to edit in the collection list on the left side of the main API, and then select the API request you want to edit.
- Click the right button after the API url edit box to finish running the API request and display it on the API (the Request tab on the right side will display the information of the running API request).
- Switch to the Tests tab to display the Tests information of the API request, which also includes the Assert information of the request.

![assert-demo](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/assert-demo.png)

#### API request Tests

##### Introduction Tests

- Open any API request and switch to the Tests tab.
- Tests tab will show the Tests information of the API request.
- Tests are used to write test scripts for API requests, currently javascript language is supported.
- You can write multiple test scripts inside Tests, each test script can be run separately.

##### Tests demo

###### Verify status code is 200  

- Taking <https://jsonplaceholder.typicode.com/posts/1> as an example (the API request returns <https://jsonplaceholder.typicode.com/posts/1>), I want to verify that the API request returns a status is 200.
- Open the API request and switch to the Tests tab.
- Enter the following script

```javascript
test("res.status should be 200", function() {
  const data = res.getBody();
  expect(res.getStatus()).to.equal(200);
});
```

###### Verify repsponse body as expected

- Taking <https://jsonplaceholder.typicode.com/posts/1> as an example (the API request returned <https://jsonplaceholder.typicode.com/posts/1>) I want to verify that the repsponse body is as expected
- Open the API request and switch to the Tests tab.
- Enter the following script
  
```javascript
test("res.body should be correct", function() {
  const data = res.getBody();
  expect(data.id).to.equal(1);
expect(data.title).to.contains('provident');
});
```

##### Debugging Tests

- Prerequisites: You have already created an API request set and an API request (refer to Creating an API Request Set and New API Request above), and you have also written the corresponding Tests according to the demo.
- Select the API request set you want to edit in the collection list on the left side of the main API, and then select the API request you want to edit.
- Click the right button after the API url edit box to finish running the API request and display it on the API (the Request tab on the right side will display the information of the running API request).
- Switch to the Tests tab, it will show the Tests information of the API request, which will also include the requested Tests information.

![tests-demo](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/tests-demo.png)

#### environment variables

##### Creating Environment Variables

- Prerequisites: An API request set and an API request have already been created (see Creating an API request set and New API request above).
- Select the API request for which you want to create an environment variable
- Click the 'No Environment' link in the upper right corner of the page (default is No Environment) and select the configure button in the menu to open the environment variable management popup window (supports creating new environment variables and importing existing environment variables).
- Click Create Environment button on the popup window, enter the name of the environment variable and click create button to create the environment variable.
- Then click Add Variable button on the popup window, enter the key and value of the environment variable, and click Save button to add the environment variable.

##### environment variable demo

> Requirement: Create a demo environment variable that contains an environment variable with key host and value <https://jsonplaceholder.typicode.com>.

- Select the API request for which you want to create the environment variable
- Click the 'No Environment' link in the upper right corner of the page (default is No Environment), and select the configure button in the menu to open the environment variable management popup.
- Click the Create Environment button on the popup window, enter the name of the environment variable demo, and click the create button to create the environment variable demo.
- Select the demo environment variable, and then click Add Variable button on the page, enter the key of the environment variable as host and the value as <https://jsonplaceholder.typicode.com>, and click Save button to add the environment variable.
- As shown in the following figure
! [env-intro](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/env-intro.png)

##### Using Environment Variables

- Prerequisites: You have already created an API request set and an API request (see Creating an API request set and creating a new API request above), and you have also created a demo environment variable.
- Select the API request for which you want to use environment variables
- Click the 'No Environment' link in the top right corner of the page (default is No Environment), and select the demo button in the menu to use the demo environment variable.
- Then change the URL of the API request to {{host}}/posts/1 to use the environment variable.

### Test script automation

#### Pre-conditions

- [x] API request set has been created (example named :api-collects)
- [x] API request has been created (example name: api request1)
- [x] an environment variable has been created (example name: demo)
- [x] has also written an assert or tests script for the API request

#### api automation project demo

- [x] Installed node.js
- [x] Install npm
- [x] create a new project folder (example name: bruno-test)
- [x] Execute npm init in the project folder to initialize the project as an npm project
- [x] Install @usebruno/cli dependency (script: npm install @usebruno/cli)
- [x] Open the folder directory where the API request sets are stored, and copy all the files in the api-collects directory to the bruno-test project directory
- [x] The project directory looks like this

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

- [x] Run the following command in the project directory to run the API request

 ```javascript
 bruno run --env demo
 ```

- The result is as follows

![cli-demo](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/cli-demo.png)

### Getting into CI

#### Getting into github action

> Take github action as an example, other CI tools are similar.

- [x] Prepare: Add the following script to the project package.json file

```json
"test": "bru run --env demo"
```

- [x] Create .github/workflows folder in the project root folder
- [x] Create main.yml file under .github/workflows folder
- [x] The contents of the main.yml file are as follows

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

- [x] submit code to github, will automatically trigger github action
- [x] View the result of the github action, as shown in the example:

![cli-demo1](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/cli-demo1.png)
> The code for this project can be pulled for reference:<https://github.com/dengnao-tw/Bruno-API-Test-Starter>

#### Test report---TODO

### bruno More usage---TODO

### Postman script migration

#### API Request Collection Migration

- Click on the 'Import Collection' link on the home page to open the Import API collection popup window.
- Click on the Select Postman Collection link and select the path to an existing Postman request collection file.
- Then you can import Postman request collection.
- However, only API requests can be imported, not test scripts, as shown in the figure (but it doesn't affect the request invocation).
![postman1](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/postman1.png)
![bruno1](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/bruno1.png)

#### Environment Variable Migration

- Select the Postman request you just imported on the home page.
- Click the 'No Environment' link in the upper right corner of the page (default is No Environment), and select the configure button in the menu to open the environment variable management popup window.
- Click on the 'Import Environment' link to open the Import Environment popup.
- Click on the 'Postman Environment' link to open the Import Environment popup window Click on the 'Postman Environment' link and select the path to an existing Postman environment file
- You can import Postman environment variables.

![postman2](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/postman2.png)
![bruno2](https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/bruno2.png)

#### Test Script Migration Reference

>The syntax of the test scripts for the two tools is partially different and needs to be modified manually

- Postman test script syntax reference: <https://learning.postman.com/docs/writing-scripts/test-scripts/>
- Postman test script example

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

- Bruno test script syntax reference: <https://docs.usebruno.com/testing/introduction.html>
- Bruno test script example

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