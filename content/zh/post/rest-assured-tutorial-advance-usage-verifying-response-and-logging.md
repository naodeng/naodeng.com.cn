+++
author = "nao.deng"
title = "REST Assured 教程：进阶用法 - 验证响应和日志记录，过滤器，文件上传"
date = "2023-11-03T09:25:19+08:00"
description = "这个博客将深入介绍 REST Assured 的进阶用法，重点放在验证 API 响应、日志记录和过滤器的应用上。读者将学习如何使用 REST Assured 来有效地验证 API 响应，包括状态码、响应内容和响应头部信息。此外，博客还将涵盖如何记录 API 请求和响应的日志，以便进行调试和故障排除。最后，博客还将介绍如何使用 REST Assured 的过滤器来处理和转换 API 响应，以满足特定需求或执行进一步的操作。这个博客将帮助那些已经熟悉基本 REST Assured 用法的人深入了解如何利用这个工具的高级功能来更有效地进行 API 测试和自动化。"
keywords = ["API 测试","REST Assured","API 自动化测试框架","接口自动化测试","自动化测试"]
tags = [
"API 测试","REST Assured","接口自动化测试","自动化测试"
]
+++

- [进阶用法](#进阶用法)
  - [验证响应数据](#验证响应数据)
    - [响应体断言](#响应体断言)
      - [json 格式断言](#json-格式断言)
      - [xml 格式断言](#xml-格式断言)
    - [Cookie 断言](#cookie-断言)
    - [状态码 Status Code 断言](#状态码-status-code-断言)
    - [Header 断言](#header-断言)
    - [Content-Type 断言](#content-type-断言)
    - [内容全匹配断言](#内容全匹配断言)
    - [响应时间断言](#响应时间断言)
  - [文件上传](#文件上传)
  - [Logging 日志](#logging-日志)
    - [全局日志配置](#全局日志配置)
      - [添加全局日志步骤](#添加全局日志步骤)
      - [全局日志代码示例](#全局日志代码示例)
      - [查看全局日志输出](#查看全局日志输出)
    - [局部日志配置](#局部日志配置)
      - [添加日志步骤](#添加日志步骤)
      - [查看局部日志输出](#查看局部日志输出)
    - [LogConfig 配置说明](#logconfig-配置说明)
    - [Request Logging 请求日志记录](#request-logging-请求日志记录)
    - [Response Logging 响应日志记录](#response-logging-响应日志记录)
    - [只在验证失败时记录日志](#只在验证失败时记录日志)
    - [Header 黑名单配置](#header-黑名单配置)
  - [Filters 过滤器](#filters-过滤器)
    - [Ordered Filters 有序过滤器](#ordered-filters-有序过滤器)
    - [Response Builder 响应生成器](#response-builder-响应生成器)

## 进阶用法

### 验证响应数据

您还可以验证状态码，状态行，Cookie，headers，内容类型和正文。

#### 响应体断言

##### json 格式断言
  
假设某个 get 请求 (http://localhost:8080/lotto) 返回 JSON 如下：

```json
{
"lotto":{
 "lottoId":5,
 "winning-numbers":[2,45,34,23,7,5,3],
 "winners":[{
   "winnerId":23,
   "numbers":[2,45,34,23,3,5]
 },{
   "winnerId":54,
   "numbers":[52,3,12,11,18,22]
 }]
}
}
```

REST assured 可以帮您轻松地进行 get 请求并对响应信息进行处理。

- 断言 lottoId 的值是否等于 5，示例：

```java
get("/lotto").then().body("lotto.lottoId", equalTo(5));
```

- 断言 winnerId 的取值包括 23 和 54，示例：

```java
get("/lotto").then().body("lotto.winners.winnerId", hasItems(23, 54));
```

> 提醒一下：`equalTo` 和 `hasItems`是 Hamcrest matchers 提供的方法，所以需要静态导入入 `org.hamcrest.Matchers`。

##### xml 格式断言

XML 可以一种通过简单的方式解析。假设一个 POST 请求`http://localhost:8080/greetXML`返回：

```xml
<greeting>
   <firstName>{params("firstName")}</firstName>
   <lastName>{params("lastName")}</lastName>
</greeting>
```

- 断言 firstName 是否返回正确，示例：

```java
given().
         parameters("firstName", "John", "lastName", "Doe").
when().
         post("/greetXML").
then().
         body("greeting.firstName", equalTo("John")).
```

- 同时断言 firstname 和 lastname 是否返回正确，示例：

```java
given().
         parameters("firstName", "John", "lastName", "Doe").
when().
         post("/greetXML").
then().
         body("greeting.firstName", equalTo("John")).
         body("greeting.lastName", equalTo("Doe"));
```

```java
with().parameters("firstName", "John", "lastName", "Doe")
.when().post("/greetXML")
.then().body("greeting.firstName", equalTo("John"), "greeting.lastName", equalTo("Doe"));
```

#### Cookie 断言

- 断言 cookie 的值是否等于 cookieValue，示例：

```java
get("/x").then().assertThat().cookie("cookieName", "cookieValue")
```

- 同时断言 多个 cookie 的值是否等于 cookieValue，示例：

```java
get("/x").then()
.assertThat().cookies("cookieName1", "cookieValue1", "cookieName2", "cookieValue2")
```

- 断言 cookie 的值是否包含 cookieValue，示例：

```java
get("/x").then()
.assertThat().cookies("cookieName1", "cookieValue1", "cookieName2", containsString("Value2"))
```

#### 状态码 Status Code 断言

- 断言 状态码是否等于 200，示例：

```java
get("/x").then().assertThat().statusCode(200)
```

- 断言 状态行是否为 something，示例：

```java
get("/x").then().assertThat().statusLine("something")
```

- 断言 状态行是否包含 some，示例：

```java
get("/x").then().assertThat().statusLine(containsString("some"))
```

#### Header 断言

- 断言 Header 的值是否等于 HeaderValue，示例：

```java
get("/x").then().assertThat().header("headerName", "headerValue")
```

- 同时断言 多个 Header 的值是否等于 HeaderValue，示例：

```java
get("/x").then()
.assertThat().headers("headerName1", "headerValue1", "headerName2", "headerValue2")
```

- 断言 Header 的值是否包含 HeaderValue，示例：

```java
get("/x").then()
.assertThat().headers("headerName1", "headerValue1", "headerName2", containsString("Value2"))
```

- 断言 Header 的“Content-Length”小于 1000，示例：

> 可以先使用映射函数首先将头值转换为 int，然后在使用 Hamcrest 验证前使用“整数”匹配器进行断言：

```java
get("/something").then()
.assertThat().header("Content-Length", Integer::parseInt, lessThan(1000));
```

#### Content-Type 断言

- 断言 Content-Type 的值是否等于 application/json，示例：

```java
get("/x").then().assertThat().contentType(ContentType.JSON)
```

#### 内容全匹配断言

- 断言 响应体是否完全等于 something，示例：

```java
get("/x").then().assertThat().body(equalTo("something"))
```

#### 响应时间断言

> REST Assured  2.8.0 开始支持测量响应时间，例如：

```java
long timeInMs = get("/lotto").time()
```

或使用特定时间单位：

```java
long timeInSeconds = get("/lotto").timeIn(SECONDS);

```

其中 SECONDS 只是一个标准的 TimeUnit。您还可以使用 DSL 验证：

```java
when().
      get("/lotto").
then().
      time(lessThan(2000L)); // Milliseconds
```

或

```java
when().
      get("/lotto").
then().
      time(lessThan(2L), SECONDS);
```

需要注意的是，您只能参考性地将这些测量数据与服务器请求处理时间相关联（因为响应时间将包括 HTTP 往返和 REST Assured 处理时间等，不能做到十分准确）。

### 文件上传

通常我们在向服务器传输大容量的数据时，比如文件时会使用 multipart 表单数据技术。
rest-assured 提供了一种`multiPart`方法来辨别这究竟是文件、二进制序列、输入流还是上传的文本。

- 表单中上只传一个文件，示例：

```java
given().
        multiPart(new File("/path/to/file")).
when().
        post("/upload");
```

- 存在 control 名的情况下上传文件，示例：

```java
given().
        multiPart("controlName", new File("/path/to/file")).
when().
        post("/upload");
```

- 同一个请求中存在多个"multi-parts"事务，示例：

```java
byte[] someData = ..
given().
        multiPart("controlName1", new File("/path/to/file")).
        multiPart("controlName2", "my_file_name.txt", someData).
        multiPart("controlName3", someJavaObject, "application/json").
when().
        post("/upload");
```

- MultiPartSpecBuilder 用法，示例：

> 更多使用方法可以使用[MultiPartSpecBuilder](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.1/io/restassured/builder/MultiPartSpecBuilder.html)：

```java
Greeting greeting = new Greeting();
greeting.setFirstName("John");
greeting.setLastName("Doe");

given().
        multiPart(new MultiPartSpecBuilder(greeting, ObjectMapperType.JACKSON_2)
                .fileName("greeting.json")
                .controlName("text")
                .mimeType("application/vnd.custom+json").build()).
when().
        post("/multipart/json").
then().
        statusCode(200);
```

- MultiPartConfig 用法，示例：

>[MultiPartConfig](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.1/io/restassured/config/MultiPartConfig.html)可用来指定默认的 control 名和文件名

```java
given().config(config().multiPartConfig(multiPartConfig()
.defaultControlName("something-else")))  
```

> 默认把 control 名配置为"something-else"而不是"file"。
> 更多用法查看 [博客介绍](http://blog.jayway.com/2011/09/15/multipart-form-data-file-uploading-made-simple-with-rest-assured/)

### Logging 日志

当我们在编写接口测试脚本的时候，我们可能需要在测试过程中打印一些日志，以便于我们在测试过程中查看接口的请求和响应信息，以及一些其他的信息。RestAssured 提供了一些方法来打印日志，我们可以根据需要选择合适的方法来打印日志。

- RestAssured 提供了一个全局的日志配置方法，可以在测试开始前配置日志，然后在测试过程中打印日志。这种方法适用于所有的测试用例，但是它只能打印请求和响应的信息，不能打印其他的信息。

- RestAssured 还提供了一个局部的日志配置方法，可以在测试过程中打印日志。这种方法可以打印请求和响应的信息，也可以打印其他的信息。

#### 全局日志配置

##### 添加全局日志步骤

- 引入日志相关的依赖类
  
```java
import io.restassured.config.LogConfig;
import io.restassured.filter.log.LogDetail;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
```

- 在 setup() 方法中添加日志配置

> 使用 LogConfig 配置，启用了请求和响应的日志记录，以及启用了漂亮的输出格式。启用了请求和响应的日志记录过滤器，这将记录请求和响应的详细信息。

```java
// 启用全局请求和响应日志记录
        RestAssured.config = RestAssured.config()
                .logConfig(LogConfig.logConfig()
                        .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL)
                        .enablePrettyPrinting(true));
```

- 在 setup() 方法中启用了全局日志记录过滤器

```java
// 启用全局请求和响应日志记录过滤器
    RestAssured.filters(new RequestLoggingFilter(), new ResponseLoggingFilter());
```

##### 全局日志代码示例

```java
package com.example;

import io.restassured.RestAssured;
// 引入日志相关的类
import io.restassured.config.LogConfig;
import io.restassured.filter.log.LogDetail;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class TestDemo {

    @BeforeClass
    public void setup() {
        // 启用全局请求和响应日志记录
        RestAssured.config = RestAssured.config()
                .logConfig(LogConfig.logConfig()
                        .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL)
                        .enablePrettyPrinting(true));
        // 启用全局请求和响应日志记录过滤器
        RestAssured.filters(new RequestLoggingFilter(), new ResponseLoggingFilter());
    }

    @Test(description = "Verify that the Get Post API returns correctly")
    public void verifyGetAPI() {
      // 测试用例已省略，可参考 demo
    }

    @Test(description = "Verify that the publish post API returns correctly")
    public void verifyPostAPI() {
      // 测试用例已省略，可参考 demo
    }
}
```

##### 查看全局日志输出

- 打开本项目的 Terminal 窗口，执行以下命令运行测试脚本
- 查看日志输出

![log-sceenshot1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/9Mh9Z8.png)

#### 局部日志配置

在 RestAssured 中，你可以进行局部日志配置，以便在特定的测试方法或请求中启用或禁用日志记录，而不影响全局配置。

##### 添加日志步骤

- 在想要打印日志的测试方法中启用了添加日志配置，示例：

```java
    @Test(description = "Verify that the Get Post API returns correctly")
    public void verifyGetAPI() {

        // Given
        given()
                .log().everything(true)  // 输出 request 相关日志
                .baseUri("https://jsonplaceholder.typicode.com")
                .header("Content-Type", "application/json")

                // When
                .when()
                .get("/posts/1")

                // Then
                .then()
                .log().everything(true)  // 输出 response 相关日志
                .statusCode(200)
    }
```

##### 查看局部日志输出

- 打开本项目的 Terminal 窗口，执行以下命令运行测试脚本
- 查看日志输出

![report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/GxZyyG.png)

#### LogConfig 配置说明

在 RestAssured 中，你可以使用 `LogConfig` 类来配置请求和响应的日志记录。`LogConfig` 允许你定义日志详细程度、输出格式、输出位置等。以下是一些常见的 `LogConfig` 配置示例：

1. **启用请求和响应的日志记录：**

   ```java
   RestAssured.config = RestAssured.config()
       .logConfig(LogConfig.logConfig()
       .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL));
   ```

   这将启用请求和响应的日志记录，只有当验证失败时才记录。

2. **配置输出级别：**

   ```java
   RestAssured.config = RestAssured.config()
       .logConfig(LogConfig.logConfig()
       .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.HEADERS));
   ```

   这将只记录请求和响应的头部信息。

3. **配置输出位置：**

   ```java
   RestAssured.config = RestAssured.config()
       .logConfig(LogConfig.logConfig()
       .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL)
           .enablePrettyPrinting(true)
           .defaultStream(FileOutputStream("log.txt")));
   ```

   这将日志记录输出到名为 "log.txt" 的文件。

4. **配置漂亮的输出格式：**

   ```java
   RestAssured.config = RestAssured.config()
       .logConfig(LogConfig.logConfig()
       .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL)
           .enablePrettyPrinting(true));
   ```

   这将启用漂亮的输出格式，使日志更易于阅读。

你可以根据你的具体需求组合这些配置选项，并将其设置为 `RestAssured.config` 以配置全局的请求和响应日志记录。这将有助于在 RestAssured 中记录和审查请求和响应，以便调试和分析问题。

#### Request Logging 请求日志记录

从版本 1.5 开始，REST Assured 支持在使用 RequestLoggingFilter 将请求规范发送到服务器之前记录请求规范。请注意，HTTP Builder 和 HTTP Client 可能会添加日志中打印的内容之外的其他标头。筛选器将仅记录请求规范中指定的详细信息。也就是说，您不能将 RequestLoggingFilter 记录的详细信息视为实际发送到服务器的详细信息。此外，后续筛选器可能会在日志记录发生后更改请求。如果您需要记录网络上实际发送的内容，请参阅 HTTP 客户端日志记录文档或使用外部工具，例如 Wireshark。

示例：

```java
given().log().all()   // 记录所有请求规范细节，包括参数、标头和正文
given().log().params()   // 只记录请求的参数
given().log().body()   // 只记录请求正文
given().log().headers()   // 只记录请求头
given().log().cookies()   // 只记录请求 cookies
given().log().method()   // 只记录请求方法
given().log().path()   // 只记录请求路径
```

#### Response Logging 响应日志记录

- 只想要打印响应正文，而不考虑状态代码，可以执行以下操作，
示例：

```java
get("/x").then().log().body()
```

- 不管是否发生错误，都将打印响应正文。如果只对在发生错误时打印响应正文感兴趣，示例：

```java
get("/x").then().log().ifError()
```

- 在响应中记录所有详细信息，包括状态行、标头和 Cookie，示例：

```java
get("/x").then().log().all()   
```

- 在响应中记录只记录状态行、标题或 Cookie，示例：

```java
get("/x").then().log().statusLine()   // 只记录状态行
get("/x").then().log().headers()   // 只记录响应头
get("/x").then().log().cookies()   // 只记录响应 cookies
```

- 配置为仅当状态代码与某个值匹配时才记录响应，示例：

```java
get("/x").then().log().ifStatusCodeIsEqualTo(302)   // 仅在状态代码等于 302 时记录日志
get("/x").then().log().ifStatusCodeMatches(matcher)   // 仅在状态代码与提供的配置匹配时才记录日志
```

#### 只在验证失败时记录日志

- 从 REST Assured 2.3.1 开始，只有在验证失败时才能记录请求或响应。要记录请求日志，示例：

```java
given().log().ifValidationFails()
```

- 要记录响应日志，示例：

```java
then().log().ifValidationFails()
```

- 可以使用 LogConfig 同时为请求和响应启用此功能，示例：

```java
given().config(RestAssured.config().logConfig(logConfig()
.enableLoggingOfRequestAndResponseIfValidationFails(HEADERS)))
```

> 如果验证失败，日志仅记录请求头。

- 另外一个快捷方式，用于在验证失败时为所有请求启用请求和响应的日志记录，示例：
  
```java
RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
```

- 从版本 4.5.0 开始，您还可以使用 指定 onFailMessage 测试失败时将显示的消息，示例：
  
```java
when().
      get().
then().
      onFailMessage("Some specific message").
      statusCode(200);
```

#### Header 黑名单配置

从 REST Assured 4.2.0 开始，可以将标头列入黑名单，以便它们不会显示在请求或响应日志中。相反，标头值将替换为 [ BLACKLISTED ] .您可以使用 LogConfig 启用此基于每个标头的功能，示例：
  
```java
given().config(config().logConfig(logConfig().blacklistHeader("Accept")))  
```

### Filters 过滤器

在 RestAssured 中，你可以使用过滤器来修改请求和响应。过滤器允许你在请求和响应的不同阶段修改请求和响应。例如，你可以在请求之前修改请求，或者在响应之后修改响应。你可以使用过滤器来添加请求头、请求参数、请求体、响应头、响应体等。

过滤器可用于实现自定义身份验证方案、会话管理、日志记录等。若要创建筛选器，需要实现 io.restassured.filter.Filter 接口。要使用过滤器，您可以执行以下操作：

```java
given().filter(new MyFilter())  
```

REST Assured 提供了几个可供使用的过滤器：

- `io.restassured.filter.log.RequestLoggingFilter` ：将打印请求规范详细信息的筛选器。
- `io.restassured.filter.log.ResponseLoggingFilter` ：如果响应与给定状态代码匹配，则将打印响应详细信息的筛选器。
- `io.restassured.filter.log.ErrorLoggingFilter` ：在发生错误时打印响应正文的筛选器（状态代码介于 400 和 500 之间）。

#### Ordered Filters 有序过滤器

从 REST Assured 3.0.2 开始，如果需要控制筛选器排序，可以实现 io.restassured.filter.OrderedFilter 接口。在这里，您将实现返回一个整数的方法，getOrder 该整数表示筛选器的优先级。值越低，优先级越高。您可以定义的最高优先级是 Integer.MIN_VALUE，最低优先级是 Integer.MAX_VALUE。未实现 io.restassured.filter.OrderedFilter 的过滤器的默认优先级为 1000。

[示例](https://github.com/rest-assured/rest-assured/blob/master/examples/rest-assured-itest-java/src/test/java/io/restassured/itest/java/OrderedFilterITest.java)

#### Response Builder 响应生成器

如果需要更改筛选器中的响应内容，可以使用 ResponseBuilder 基于原始响应创建新的响应。例如，如果要将原始响应的正文更改为其他内容，可以执行以下操作：

```java
Response newResponse = new ResponseBuilder()
.clone(originalResponse).setBody("Something").build();
```
