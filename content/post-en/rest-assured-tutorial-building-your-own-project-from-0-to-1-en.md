+++
author = "nao.deng"
title = "REST Assured Tutorial: Building a REST Assured API Automation Test Program from 0 to 1"
date = "2023-11-02T10:03:38+08:00"
description = "In this blog, we'll dive into how to build a REST Assured API automation testing project from scratch.REST Assured is a popular Java library for performing REST API interface testing, providing powerful tools that make it easy to write automated test scripts to validate the API'sbehavior. Whether you are an experienced test engineer or a developer just getting started, this tutorial will provide you with valuable knowledge about REST Assured and API automation testing."
keywords = ["API Testing", "REST Assured", "API Automation Testing Framework", "Interface Automation Testing", "Automation Testing"]
tags = [
"API Testing", "REST Assured", "Interface Automation Testing", "Automation Testing"
]
+++
- [Building a REST Assured API test project from 0 to 1](#building-a-rest-assured-api-test-project-from-0-to-1)
  - [Gradle version](#gradle-version)
    - [Initialize an empty Gradle project](#initialize-an-empty-gradle-project)
    - [Configuration build.gradle](#configuration-buildgradle)
    - [testng.xml configuration](#testngxml-configuration)
    - [gradle build project and initialize](#gradle-build-project-and-initialize)
    - [initialization project directory](#initialization-project-directory)
    - [Introduction of demo test API](#introduction-of-demo-test-api)
      - [Get API](#get-api)
      - [Post API](#post-api)
    - [Writing Test cases](#writing-test-cases)
    - [Debugging test cases](#debugging-test-cases)
    - [Viewing Test Reports](#viewing-test-reports)
      - [Command Line Report](#command-line-report)
      - [testng html Report](#testng-html-report)
  - [Maven version](#maven-version)
    - [Initialize an empty Maven project](#initialize-an-empty-maven-project)
    - [Configuration pom.xml](#configuration-pomxml)
    - [Configuration testng.xml](#configuration-testngxml)
    - [initialization maven project directory](#initialization-maven-project-directory)
    - [The api used by Demo](#the-api-used-by-demo)
    - [Writing Test cases](#writing-test-cases-1)
    - [Debugging test cases](#debugging-test-cases-1)
    - [Viewing Test Reports](#viewing-test-reports-1)
      - [terminal report](#terminal-report)
      - [testng html report](#testng-html-report-1)
- [More info](#more-info)

## Building a REST Assured API test project from 0 to 1

REST Assured supports both Gradle and Maven build tools, you can choose one of them according to your preference. Below is a description of the initialization process for Gradle and Maven build tools.

This project is built using Gradle 8.44 and Maven 3.9.5, if you are using other versions, it may be different.

### Gradle version

See the demo project at <https://github.com/Automation-Test-Starter/RestAssured-gradle-demo>.

#### Initialize an empty Gradle project

```bash
mkdir RestAssured-gradle-demo
cd RestAssured-gradle-demo
gradle init
```

#### Configuration build.gradle

The demo project introduces the testNG testing framework. For reference only.

- Create a build.gradle file in the project root directory to configure the project.
- For reference, the following is a sample configuration

```groovy
// plugins configuration
plugins {
    id 'java' // use java plugin
}

// repositories configuration
repositories {
  mavenCentral() // user maven central repository
}

// dependencies configuration
dependencies {
    testImplementation 'io.rest-assured:rest-assured:5.3.1' // add rest-assured dependency
    testImplementation 'org.testng:testng:7.8.0' // add testng testing framework dependency
    implementation 'org.uncommons:reportng:1.1.4' // add testng reportng dependency
    implementation 'org.slf4j:slf4j-api:2.0.9' // add slf4j dependency for test logging
    implementation 'org.slf4j:slf4j-simple:2.0.9' // add slf4j dependency for test logging
    implementation group: 'com.google.inject', name: 'guice', version: '7.0.0'
}

// test configuration
test {
    reports.html.required = false // set gradle html report to false
    reports.junitXml.required = false // set gradle junitXml report to false
    // use testng testing framework
    useTestNG() {
        useDefaultListeners = true
        suites 'src/test/resources/testng.xml' // set testng.xml file path
    }
    testLogging.showStandardStreams = true // output test log to console
    testLogging.events "passed", "skipped", "failed" // deny output test log to console
}
```

> You can copy the contents of the build.gradle file in this project. For more configuration refer to [Official Documentation](https://github.com/rest-assured/rest-assured/wiki/GettingStarted#rest-assured)

#### testng.xml configuration

- Create a resources directory under the src/test directory to store test configuration files.

- Create a testng.xml file in the resources directory to configure the TestNG test framework.

- For reference, the following is a sample configuration

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="restAssured-gradleTestSuite">
<test thread-count="1" name="Demo">
    <classes>
        <class name="com.example.TestDemo"/> <!-- test case class-->
    </classes>
</test> <!-- Test -->
</suite> <!-- Suite -->
```

#### gradle build project and initialize

- Open the Terminal window of the project with an editor and execute the following command to confirm that the project build was successful

```bash
gradle build
```

- Initialization complete: After completing the wizard, Gradle will generate a basic Gradle project structure in the project directory
  
#### initialization project directory

The directory structure can be found in >> [Project structure](#project-structure)

Create a new test class in the project's test source directory. By default, Gradle usually places the test source code in the src/test/java directory. You can create a package of test classes in that directory and create a new test class in the package

To create a test class for TestDemo, you can create files with the following structure
  
```text
src
└── test
    └── java
        └── com
            └── example
                └── TestDemo.java
```

#### Introduction of demo test API

##### Get API

- HOST: https://jsonplaceholder.typicode.com
- API path: /posts/1
- Request method: GET
- Request Parameters: None
- Request header: "Content-Type": "application/json; charset=utf-8"
- Request Body: None
- Response status code: 200
- Response header: "Content-Type": "application/json; charset=utf-8"
- Response body:

```json
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

##### Post API

- HOST: https://jsonplaceholder.typicode.com
- API path:/posts
- Request method: POST
- Request Parameters: None
- Request header:"Content-Type": "application/json; charset=utf-8"
- Request Body:raw json format
- Request Body:

```json
{
    "title": "foo",
    "body": "bar",
    "userId": 1
}
```

- Response status code: 201
- Response header:"Content-Type": "application/json; charset=utf-8"
- Response body:

```json
{
    "title": "foo",
    "body": "bar",
    "userId": 1,
    "id": 101
}
```

#### Writing Test cases

- Open the TestDemo.java file and start writing the test script.

- The example script is as follows. For reference

```java
package com.example;

import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class TestDemo {

 @Test(description = "Verify that the Get Post API returns correctly")
 public void verifyGetAPI() {

  // Given
  given()
    .baseUri("https://jsonplaceholder.typicode.com")
             .header("Content-Type", "application/json")

  // When
  .when()
    .get("/posts/1")

  // Then
  .then()
    .statusCode(200)
    // To verify correct value
    .body("userId", equalTo(1))
    .body("id", equalTo(1))
    .body("title", equalTo("sunt aut facere repellat provident occaecati excepturi optio reprehenderit"))
    .body("body", equalTo("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"));
 }
 @Test(description = "Verify that the publish post API returns correctly")
 public void verifyPostAPI() {

  // Given
  given()
    .baseUri("https://jsonplaceholder.typicode.com")
    .header("Content-Type", "application/json")

    // When
    .when()
    .body("{\"title\": \"foo\", \"body\": \"bar\", \"userId\": 1\n}")
    .post("/posts")

    // Then
    .then()
    .statusCode(201)
    // To verify correct value
    .body("userId", equalTo(1))
    .body("id", equalTo(101))
    .body("title", equalTo("foo"))
    .body("body", equalTo("bar"));
 }
}
```

#### Debugging test cases

- Open the Terminal window for this project and run the test script by executing the following command

```bash
gradle test
```

#### Viewing Test Reports

##### Command Line Report

![gradle-test-report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/gradle-report1.png)

##### testng html Report

- Open the project build/reports/tests/test directory.
- Click on the index.html file to view the test report.

![gradle-test-report2](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/gradle-report2.png)

### Maven version

See the demo project at <https://github.com/Automation-Test-Starter/RestAssured-maven-demo>

#### Initialize an empty Maven project

```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=RestAssured-maven-demo -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

Initialization complete: After completing the wizard, Maven will create a new project directory and a basic Maven project structure

#### Configuration pom.xml

Add the following to the pom.xml file in your project

> You can copy the contents of the pom.xml file in this project. For more information on configuration, please refer to the [official documentation](https://github.com/rest-assured/rest-assured/wiki/GettingStarted#rest-assured).

```xml
<!-- dependencies config -->
  <dependencies>
    <!-- https://mvnrepository.com/artifact/io.rest-assured/rest-assured -->
    <dependency>
      <groupId>io.rest-assured</groupId>
      <artifactId>rest-assured</artifactId>
      <version>5.3.1</version>
      <scope>test</scope>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.testng/testng -->
    <dependency>
      <groupId>org.testng</groupId>
      <artifactId>testng</artifactId>
      <version>7.8.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
  <!-- plugin config -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.2.1</version>
        <configuration>
          <suiteXmlFiles>
            <suiteXmlFile>src/test/resources/testng.xml</suiteXmlFile>
          </suiteXmlFiles>
        </configuration>
      </plugin>
```

#### Configuration testng.xml

- Create a resources directory under the src/test directory to store test configuration files.

- Create a testng.xml file in the resources directory to configure the TestNG test framework.

- For reference, the following is a sample configuration

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="restAssured-gradleTestSuite">
<test thread-count="1" name="Demo">
    <classes>
        <class name="com.example.TestDemo"/> <!-- test case class-->
    </classes>
</test> <!-- Test -->
</suite> <!-- Suite -->
```

#### initialization maven project directory

The directory structure can be found in >> [Project structure](#project-structure)

Create a new test class in the project's test source directory. By default, Gradle usually places the test source code in the src/test/java directory. You can create a package of test classes in that directory and create a new test class in the package

To create a test class for TestDemo, you can create files with the following structure
  
```text
src
└── test
    └── java
        └── com
            └── example
                └── TestDemo.java
```

#### The api used by Demo

referable to >> [Introduction of demo test API](#introduction-of-demo-test-api)

#### Writing Test cases

- Open the TestDemo.java file and start writing the test script.

- The example script is as follows. For reference

```java
package com.example;

import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class TestDemo {

 @Test(description = "Verify that the Get Post API returns correctly")
 public void verifyGetAPI() {

  // Given
  given()
    .baseUri("https://jsonplaceholder.typicode.com")
             .header("Content-Type", "application/json")

  // When
  .when()
    .get("/posts/1")

  // Then
  .then()
    .statusCode(200)
    // To verify correct value
    .body("userId", equalTo(1))
    .body("id", equalTo(1))
    .body("title", equalTo("sunt aut facere repellat provident occaecati excepturi optio reprehenderit"))
    .body("body", equalTo("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"));
 }
 @Test(description = "Verify that the publish post API returns correctly")
 public void verifyPostAPI() {

  // Given
  given()
    .baseUri("https://jsonplaceholder.typicode.com")
    .header("Content-Type", "application/json")

    // When
    .when()
    .body("{\"title\": \"foo\", \"body\": \"bar\", \"userId\": 1\n}")
    .post("/posts")

    // Then
    .then()
    .statusCode(201)
    // To verify correct value
    .body("userId", equalTo(1))
    .body("id", equalTo(101))
    .body("title", equalTo("foo"))
    .body("body", equalTo("bar"));
 }
}
```

#### Debugging test cases

- Open the Terminal window for this project and run the test script by executing the following command

```bash
mvn test
```

#### Viewing Test Reports

##### terminal report

![maven-test-report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/maven-report1.png)

##### testng html report

- Open the project target/surefire-reports directory.
- Click on the index.html file to view the test report.

![maven-test-report2](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/maven-report2.png)

## More info

- Visit my personal blog: [https://naodeng.tech/](https://naodeng.tech/)
- My QA automation quickstart project page: [https://github.com/Automation-Test-Starter](https://github.com/Automation-Test-Starter)