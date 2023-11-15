---
author: "nao.deng"
title: "REST Assured Tutorial: Advanced Usage - Integration CI CD and Integration Allure Report"
date: "2023-11-04T10:21:19+08:00"
summary: "dive into advanced applications of REST Assured, focusing on how to integrate CI/CD (Continuous Integration/Continuous Delivery) tools and integrate Allure test reports."
tags: [ "CI/CD Integration"]
Categories:   ["API automation testing", "REST Assured"]
series: ["REST Assured Guide"]
ShowWordCount: true
---

## CI/CD integration

### integration github action

Use github action as an example, and other CI tools similarly

#### The Gradle version integration github action

See the demo at <https://github.com/Automation-Test-Starter/RestAssured-gradle-demo>

- Create the .github/workflows directory: In your GitHub repository, create a directory called .github/workflows. This will be where the GitHub Actions workflow files will be stored.

- Create a workflow file: Create a YAML-formatted workflow file, such as gradle.yml, in the .github/workflows directory.

- Edit the gradle.yml file: Copy the following into the file

```yaml
name: Gradle and REST Assured Tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Java
        uses: actions/setup-java@v3
        with:
          java-version: '11'
          distribution: 'adopt'

      - name: Build and Run REST Assured Tests with Gradle
        uses: gradle/gradle-build-action@bd5760595778326ba7f1441bcf7e88b49de61a25 # v2.6.0
        with:
          arguments: build

      - name: Archive REST-Assured results
        uses: actions/upload-artifact@v2
        with:
          name: REST-Assured-results
          path: build/reports/tests/test

      - name: Upload REST-Assured results to GitHub
        uses: actions/upload-artifact@v2
        with:
          name: REST-Assured-results
          path: build/reports/tests/test
```

- Commit the code: Add the gradle.yml file to your repository and commit.
- View test reports: In GitHub, navigate to your repository. Click the Actions tab at the top and then click the Gradle and REST Assured Tests workflow on the left. You should see the workflow running, wait for the execution to complete and you can view the results.

![gradle-test-report3](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/gradle-report3.png)

#### The Maven version integration github action

See the demo at <https://github.com/Automation-Test-Starter/RestAssured-maven-demo>

- Create the .github/workflows directory: In your GitHub repository, create a directory called .github/workflows. This will be where the GitHub Actions workflow files will be stored.

- Create a workflow file: Create a YAML-formatted workflow file, such as maven.yml, in the .github/workflows directory.

- Edit the maven.yml file: Copy the following into the file
  
```yaml
name: Maven and REST Assured Tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  Run-Rest-Assured-Tests:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
        cache: maven
        
    - name: Build and Run REST Assured Tests with Maven
      run: mvn test
      
    - name: Archive REST-Assured results
      uses: actions/upload-artifact@v3
      with:
        name: REST-Assured-results
        path: target/surefire-reports

    - name: Upload REST-Assured results to GitHub
      uses: actions/upload-artifact@v3
      with:
        name: REST-Assured-results
        path: target/surefire-reports
```

- Commit the code: Add the maven.yml file to the repository and commit.
- View test reports: In GitHub, navigate to your repository. Click the Actions tab at the top and then click the Maven and REST Assured Tests workflow on the left. You should see the workflow running, wait for the execution to complete and you can view the results.

![maven-test-report3](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/maven-report3.png)

## Integrating allure test reports

### allure Introduction

Allure is an open source testing framework for generating beautiful, interactive test reports. It can be used with a variety of testing frameworks (e.g. JUnit, TestNG, Cucumber, etc.) and a variety of programming languages (e.g. Java, Python, C#, etc.).

Allure test reports have the following features:

- Aesthetically pleasing and interactive: Allure test reports present test results in an aesthetically pleasing and interactive way, including graphs, charts and animations. This makes test reports easier to read and understand.
- Multi-language support: Allure supports multiple programming languages, so you can write tests in different languages and generate uniform test reports.
Test case level details: Allure allows you to add detailed information to each test case, including descriptions, categories, labels, attachments, historical data, and more. This information helps provide a more complete picture of the test results.
- Historical Trend Analysis: Allure supports test historical trend analysis, which allows you to view the historical performance of test cases, identify issues and improve test quality.
- Categories and Tags: You can add categories and tags to test cases to better organize and categorize test cases. This makes reporting more readable.
- Attachments and Screenshots: Allure allows you to attach files, screenshots, and other attachments to better document information during testing.
- Integration: Allure seamlessly integrates with a variety of testing frameworks and build tools (e.g. Maven, Gradle), making it easy to generate reports.
- Open Source Community Support: Allure is an open source project with an active community that provides extensive documentation and support. This makes it the tool of choice for many automated testing teams.

The main goal of Allure test reports is to provide a clear, easy-to-read way to present test results to help development teams better understand the status and quality of their tests, quickly identify problems, and take the necessary action. Whether you are a developer, tester, or project manager, Allure test reports provide you with useful information to improve software quality and reliability.

Official Website: <https://docs.qameta.io/allure/>

### Integration steps

#### The Maven version integration of allure

- Add allure dependency in POM.xml

> Copy the contents of the pom.xml file in this project

```xml
    <!-- https://mvnrepository.com/artifact/io.qameta.allure/allure-testng -->
    <dependency>
      <groupId>io.qameta.allure</groupId>
      <artifactId>allure-testng</artifactId>
      <version>2.24.0</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/io.qameta.allure/allure-rest-assured -->
    <dependency>
      <groupId>io.qameta.allure</groupId>
      <artifactId>allure-rest-assured</artifactId>
      <version>2.24.0</version>
    </dependency>
```

- Add allure plugin to POM.xml

```xml
      <plugin>
        <groupId>io.qameta.allure</groupId>
        <artifactId>allure-maven</artifactId>
        <version>2.12.0</version>
        <configuration>
          <resultsDirectory>../allure-results</resultsDirectory>
        </configuration>
      </plugin>
```

- Create test code for testing the REST API under src/test/java.

> The following is an example of a demo, see the project for details: <https://github.com/Automation-Test-Starter/RestAssured-maven-demo>.

```java
package com.example;

import io.qameta.allure.*;
import io.qameta.allure.restassured.AllureRestAssured;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

@Epic("REST API Regression Testing using TestNG")
@Feature("Verify that the Get and POST API returns correctly")
public class TestDemo {

    @Test(description = "To get the details of post with id 1", priority = 1)
    @Story("GET Request with Valid post id")
    @Severity(SeverityLevel.NORMAL)
    @Description("Test Description : Verify that the GET API returns correctly")
    public void verifyGetAPI() {

        // Given
        given()
                .filter(new AllureRestAssured()) // Set up the AllureRestAssured filter to display request and response information in the test report
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

    @Test(description = "To create a new post", priority = 2)
    @Story("POST Request")
    @Severity(SeverityLevel.NORMAL)
    @Description("Test Description : Verify that the post API returns correctly")
    public void verifyPostAPI() {        // Given
        given()
                .filter(new AllureRestAssured()) 
                // Set up the AllureRestAssured filter to display request and response information in the test report
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

- Run tests and generate Allure reports

```bash
mvn clean test
```

> The generated Allure report is in the allure-results file in the project root directory.

- Preview of the Allure Report

```bash
mvn allure:serve
```

> Running the command automatically opens a browser to preview the Allure report.

![allure-report](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/JsHrOQ.png)

![allure-report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ZXgnOD.png)

#### The Gradle version of allure integration

- Add the allure plugin to your build.gradle.

> Copy the contents of the build.gradle file in this project

```groovy
id("io.qameta.allure") version "2.11.2"
```

- Add allure dependency to build.gradle

> Copy the contents of the build.gradle file in this project

```groovy
    implementation 'io.qameta.allure:allure-testng:2.24.0' // Add allure report dependency
    implementation 'io.qameta.allure:allure-rest-assured:2.24.0' // Add allure report dependency
```

- Create test code for testing the REST API under src/test/java.

> The following is an example of a demo, see the project for details: <https://github.com/Automation-Test-Starter/RestAssured-gradle-demo>.

```java
package com.example;

import io.qameta.allure.*;
import io.qameta.allure.restassured.AllureRestAssured;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

@Epic("REST API Regression Testing using TestNG")
@Feature("Verify that the Get and POST API returns correctly")
public class TestDemo {

    @Test(description = "To get the details of post with id 1", priority = 1)
    @Story("GET Request with Valid post id")
    @Severity(SeverityLevel.NORMAL)
    @Description("Test Description : Verify that the GET API returns correctly")
    public void verifyGetAPI() {

        // Given
        given()
                .filter(new AllureRestAssured()) 
                // Set up the AllureRestAssured filter to display request and response information in the test report
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

    @Test(description = "To create a new post", priority = 2)
    @Story("POST Request")
    @Severity(SeverityLevel.NORMAL)
    @Description("Test Description : Verify that the post API returns correctly")
    public void verifyPostAPI() {        // Given
        given()
                .filter(new AllureRestAssured())
                // Set up the AllureRestAssured filter to display request and response information in the test report
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

- Run the test and generate the Allure report

```bash
gradle clean test 
``

> The generated Allure report is in the build/allure-results file in the project root directory.

- Preview the Allure report

```bash
gradle allureServe
```

> Running the command automatically opens a browser to preview the Allure report.

![allure-report](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/JsHrOQ.png)

![allure-report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ZXgnOD.png)

## Reference

- Rest assured official documentation: <https://rest-assured.io/>

- Rest assured official github:<https://github.com/rest-assured/rest-assured>

- Rest assured official docs in Chinese: <https://github.com/RookieTester/rest-assured-doc>
