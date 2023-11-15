---
author:  "nao.deng"
title:  "REST Assured 教程：进阶用法 - 集成 CI/CD 和集成 allure 测试报告"
date: "2023-11-04T10:21:19+08:00"
summary:  "深入研究 REST Assured 的高级应用，侧重于如何集成 CI/CD（持续集成/持续交付）工具和整合 Allure 测试报告。"
ZHtags:  ["集成 CI/CD","集成 allure 测试报告"]
ZHcategories:  ["接口自动化测试", "REST Assured"]
ZHseries: ["REST Assured 教程"]
ShowWordCount: true
---

## 持续集成

### 接入 github action

以 github action 为例，其他 CI 工具类似

#### Gradle 版本接入 github action

可参考 demo：<https://github.com/Automation-Test-Starter/RestAssured-gradle-demo>

创建.github/workflows 目录：在你的 GitHub 仓库中，创建一个名为 .github/workflows 的目录。这将是存放 GitHub Actions 工作流程文件的地方。

创建工作流程文件：在.github/workflows 目录中创建一个 YAML 格式的工作流程文件，例如 gradle.yml。

编辑 gradle.yml 文件：将以下内容复制到文件中
  
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

- 提交代码：将 gradle.yml 文件添加到仓库中并提交。
- 查看测试报告：在 GitHub 中，导航到你的仓库。单击上方的 Actions 选项卡，然后单击左侧的 Gradle and REST Assured Tests 工作流。你应该会看到工作流正在运行，等待执行完成，就可以查看结果。

![gradle-test-report3](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/gradle-report3.png)

#### Maven 版本接入 github action

可参考 demo：<https://github.com/Automation-Test-Starter/RestAssured-maven-demo>

创建.github/workflows 目录：在你的 GitHub 仓库中，创建一个名为 .github/workflows 的目录。这将是存放 GitHub Actions 工作流程文件的地方。

创建工作流程文件：在.github/workflows 目录中创建一个 YAML 格式的工作流程文件，例如 maven.yml。

编辑 maven.yml 文件：将以下内容复制到文件中
  
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

- 提交代码：将 maven.yml 文件添加到仓库中并提交。
- 查看测试报告：在 GitHub 中，导航到你的仓库。单击上方的 Actions 选项卡，然后单击左侧的 Maven and REST Assured Tests 工作流。你应该会看到工作流正在运行，等待执行完成，就可以查看结果。

![maven-test-report3](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/maven-report3.png)

## 集成 allure 测试报告

### allure 简介

Allure是一个用于生成漂亮、交互式测试报告的开源测试框架。它可以与多种测试框架（如JUnit、TestNG、Cucumber等）和多种编程语言（如Java、Python、C#等）一起使用。

Allure 测试报告具有以下特点：

- 美观和交互式：Allure 测试报告以美观和交互式的方式呈现测试结果，包括图形、图表和动画。这使得测试报告更容易阅读和理解。
- 多语言支持：Allure 支持多种编程语言，因此您可以在不同的语言中编写测试，并生成统一的测试报告。
测试用例级别的详细信息：Allure 允许您为每个测试用例添加详细信息，包括描述、类别、标签、附件、历史数据等。这些信息有助于更全面地了解测试结果。
- 历史趋势分析：Allure 支持测试历史趋势分析，您可以查看测试用例的历史表现，识别问题和改进测试质量。
- 类别和标签：您可以为测试用例添加类别和标签，以更好地组织和分类测试用例。这使得报告更具可读性。
- 附件和截图：Allure 允许您附加文件、截图和其他附件，以便更好地记录测试过程中的信息。
- 集成性：Allure 可以与各种测试框架和构建工具（如 Maven、Gradle）无缝集成，使得生成报告变得简单。
- 开源社区支持：Allure 是一个开源项目，拥有一个活跃的社区，提供了广泛的文档和支持。这使得它成为许多自动化测试团队的首选工具。

Allure 测试报告的主要目标是提供一个清晰、易于阅读的方式来展示测试结果，以帮助开发团队更好地理解测试的状态和质量，快速识别问题，并采取必要的行动。无论您是开发人员、测试人员还是项目经理，Allure 测试报告都能为您提供有用的信息，以改进软件质量和可靠性。

官方网站：<https://docs.qameta.io/allure/>

### 集成步骤

#### Maven 版本集成 allure

- 在 POM.xml 中添加 allure 依赖

>可 copy 本项目中的 pom.xml 文件内容

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

- 在 POM.xml 中添加 allure 插件

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

- 在 src/test/java 下创建用于测试 REST API 的测试代码

> 以下为 demo 示例，详细部分可参考 项目：<https://github.com/Automation-Test-Starter/RestAssured-maven-demo>

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
                //设置 AllureRestAssured 过滤器，用来在测试报告中展示请求和响应信息
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
                //设置 AllureRestAssured 过滤器，用来在测试报告中展示请求和响应信息
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

- 运行测试并生成 Allure 报告

```bash
mvn clean test
```

> 生成的 Allure 报告在项目根目录的 allure-results 文件下

- 预览 Allure 报告

```bash
mvn allure:serve
```

> 运行命令会自动打开浏览器，预览 Allure 报告

![allure-report](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/JsHrOQ.png)

![allure-report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ZXgnOD.png)

#### Gradle 版本集成 allure

- 在 build.gradle 中添加 allure 插件

>可 copy 本项目中的 build.gradle 文件内容

```groovy
id("io.qameta.allure") version "2.11.2"
```

- 在 build.gradle 中添加 allure 依赖

>可 copy 本项目中的 build.gradle 文件内容

```groovy
    implementation 'io.qameta.allure:allure-testng:2.24.0' // Add allure report dependency
    implementation 'io.qameta.allure:allure-rest-assured:2.24.0' // Add allure report dependency
```

- 在 src/test/java 下创建用于测试 REST API 的测试代码

> 以下为 demo 示例，详细部分可参考 项目：<https://github.com/Automation-Test-Starter/RestAssured-gradle-demo>

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
                //设置 AllureRestAssured 过滤器，用来在测试报告中展示请求和响应信息
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
                //设置 AllureRestAssured 过滤器，用来在测试报告中展示请求和响应信息
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

- 运行测试并生成 Allure 报告

```bash
gradle clean test 
```

> 生成的 Allure 报告在项目根目录的 build/allure-results 文件下

- 预览 Allure 报告

```bash
gradle allureServe
```

> 运行命令会自动打开浏览器，预览 Allure 报告

![allure-report](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/JsHrOQ.png)

![allure-report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ZXgnOD.png)

## 参考资料

- Rest assured 官方文档：<https://rest-assured.io/>

- Rest assured 官方 github：<https://github.com/rest-assured/rest-assured>

- Rest assured 官方文档中文翻译：<https://github.com/RookieTester/rest-assured-doc>