---
author:  "nao.deng"
title:  "REST Assured Tutorial: Advanced Usage - Validating Responses and Logging, Filters, File Uploads"
date:  "2023-11-03T09:25:19+08:00"
summary:  "provide an in-depth look at advanced uses of REST Assured, with a focus on validating API responses, logging, and the application of filters."
tags:  [
"Advanced Usage", "Validating Responses", "Logging", "Filters"
]
Categories:   ["API automation testing", "REST Assured"]
series: ["REST Assured Guide"]
ShowWordCount: true
---

## Advanced Usage

### Verifying Response Data

You can verify Response status code, Response status line, Response cookies, Response headers, Response content type and Response body.

#### response body assertion

##### json assertion
  
Assume that the GET request (to <http://localhost:8080/lotto>) returns JSON as:

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

REST assured makes it easy to make get requests and process response messages.

- Asserts whether the value of lottoId is equal to 5. For example:

```java
get("/lotto").then().body("lotto.lottoId", equalTo(5));
```

- Assertion The values for winnerId include 23 and 54. For example:

```java
get("/lotto").then().body("lotto.winners.winnerId", hasItems(23, 54));
```

> Note: `equalTo` and `hasItems` are Hamcrest matchers which you should statically import from `org.hamcrest.Matchers`.

##### XML assertion

XML can be verified in a similar way. Imagine that a POST request to <http://localhost:8080/greetXML> returns:

```xml
<greeting>
   <firstName>{params("firstName")}</firstName>
   <lastName>{params("lastName")}</lastName>
</greeting>
```

- Asserts whether the firstName is returned correctly. For example:

```java
given().
         parameters("firstName", "John", "lastName", "Doe").
when().
         post("/greetXML").
then().
         body("greeting.firstName", equalTo("John")).
```

- Assert that firstname and lastname are returned correctly. For example:

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

#### Cookie assertion

- Asserts whether the value of the cookie is equal to cookieValue. For example:

```java
get("/x").then().assertThat().cookie("cookieName", "cookieValue")
```

- Asserts whether the value of multiple cookies is equal to the cookieValue at the same time. For example:

```java
get("/x").then()
.assertThat().cookies("cookieName1", "cookieValue1", "cookieName2", "cookieValue2")
```

- Asserts whether the value of the cookie contains a cookieValue. For example:

```java
get("/x").then()
.assertThat().cookies("cookieName1", "cookieValue1", "cookieName2", containsString("Value2"))
```

#### Status Code Assertion

- Assertion Whether the status code is equal to 200. For example:

```java
get("/x").then().assertThat().statusCode(200)
```

- Assertion Whether the status line is something. For example:

```java
get("/x").then().assertThat().statusLine("something")
```

- Assertion Whether the status line contains some. For example:

```java
get("/x").then().assertThat().statusLine(containsString("some"))
```

#### Header Assertion

- Asserts whether the value of Header is equal to HeaderValue. For example:

```java
get("/x").then().assertThat().header("headerName", "headerValue")
```

- Asserts whether the value of multiple Headers is equal to HeaderValue at the same time. For example:

```java
get("/x").then()
.assertThat().headers("headerName1", "headerValue1", "headerName2", "headerValue2")
```

- Asserts whether the value of the Header contains a HeaderValue. For example:

```java
get("/x").then().assertThat()
.headers("headerName1", "headerValue1", "headerName2", containsString("Value2"))
```

- Assert that the "Content-Length" of the Header is less than 1000. For example:

> The header can be first converted to int using the mapping function, and then asserted using the "integer" matcher before validation with Hamcrest:

```java
get("/something").then().assertThat().header("Content-Length", Integer::parseInt, lessThan(1000));
```

#### Content-Type Assertion

- Asserts whether the value of Content-Type is equal to application/json. For example:

```java
get("/x").then().assertThat().contentType(ContentType.JSON)
```

#### Full body/content matching Assertion

- Assertion Whether the response body is exactly equal to something. For example:

```java
get("/x").then().assertThat().body(equalTo("something"))
```

#### Measuring Response Time

> As of version 2.8.0 REST Assured has support measuring response time. For example:

```java
long timeInMs = get("/lotto").time()
```

or using a specific time unit:

```java
long timeInSeconds = get("/lotto").timeIn(SECONDS);

```

where 'SECONDS' is just a standard 'TimeUnit'. You can also validate it using the validation DSL:

```java
when().
      get("/lotto").
then().
      time(lessThan(2000L)); // Milliseconds
```

or

```java
when().
      get("/lotto").
then().
      time(lessThan(2L), SECONDS);
```

Note that you can only referentially correlate these measurements to server request processing times (as response times will include HTTP roundtrips, REST Assured processing times, etc., and cannot be very accurate).

### File Upload

Often we use the multipart form data technique when transferring large amounts of data to the server, such as files.
rest-assured provides a `multiPart` method to recognize whether this is a file, a binary sequence, an input stream, or uploaded text.

- Upload only one file in the form. For example:

```java
given().
        multiPart(new File("/path/to/file")).
when().
        post("/upload");
```

- Uploading a file in the presence of a control name. For example:

```java
given().
        multiPart("controlName", new File("/path/to/file")).
when().
        post("/upload");
```

- Multiple "multi-parts" entities in the same request. For example:

```java
byte[] someData = ..
given().
        multiPart("controlName1", new File("/path/to/file")).
        multiPart("controlName2", "my_file_name.txt", someData).
        multiPart("controlName3", someJavaObject, "application/json").
when().
        post("/upload");
```

- MultiPartSpecBuilder use cases. For example:

> For more usage references[MultiPartSpecBuilder](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.1/io/restassured/builder/MultiPartSpecBuilder.html)：

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

- MultiPartConfig use cases. For example:

>[MultiPartConfig](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.1/io/restassured/config/MultiPartConfig.html)You can specify the default control name and file name.

```java
given().config(config().multiPartConfig(multiPartConfig().defaultControlName("something-else")))  
```

> By default, the control name is configured as "something-else" instead of "file".
> For more usage references [blog introduction](http://blog.jayway.com/2011/09/15/multipart-form-data-file-uploading-made-simple-with-rest-assured/)

### Logging

When we are writing interface test scripts, we may need to print some logs during the test process so that we can view the request and response information of the interface and some other information during the test process.RestAssured provides some methods to print logs.

- RestAssured provides a global logging configuration method that allows you to configure logging before the test starts and then print the logs during the test. This method is applicable to all test cases, but it can only print request and response information, not other information.

- RestAssured also provides a localized log configuration method that prints logs during the test. This method prints request and response information as well as other information.

#### Global logging configuration

##### Steps to add global logging configuration

- Importing logging-related dependency classes
  
```java
import io.restassured.config.LogConfig;
import io.restassured.filter.log.LogDetail;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
```

- Adding logging configuration to the setup() method

> Use LogConfig configuration to enable logging of requests and responses, as well as to enable nice output formatting. Enabled logging filters for requests and responses, which will log details of requests and responses.

```java
// Setting the Global Request and Response Logging Configuration
        RestAssured.config = RestAssured.config()
                .logConfig(LogConfig.logConfig()
                        .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL)
                        .enablePrettyPrinting(true));
```

- Enabled global logging filters in the setup() method

```java
// Enable global request and response logging filters
    RestAssured.filters(new RequestLoggingFilter(), new ResponseLoggingFilter());
```

##### Global Logging Code Example

```java
package com.example;

import io.restassured.RestAssured;
// Importing logging-related dependency classes
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
        // Setting the Global Request and Response Logging Configuration
        RestAssured.config = RestAssured.config()
                .logConfig(LogConfig.logConfig()
                        .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL)
                        .enablePrettyPrinting(true));
        // Enable global request and response logging filters
        RestAssured.filters(new RequestLoggingFilter(), new ResponseLoggingFilter());
    }

    @Test(description = "Verify that the Get Post API returns correctly")
    public void verifyGetAPI() {
      // Test cases have been omitted, refer to the demo
    }

    @Test(description = "Verify that the publish post API returns correctly")
    public void verifyPostAPI() {
      // Test cases have been omitted, refer to the demo
    }
}
```

##### Viewing Global Log Output

- Open the Terminal window for this project and run the test script by executing the following command
- Viewing Log Output

![log-sceenshot1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/9Mh9Z8.png)

#### Localized logging configuration

In RestAssured, you can make localized logging configurations to enable or disable logging for specific test methods or requests without affecting the global configuration.

##### Steps to add Localized logging configuration

- Add logging configuration is enabled in the test method for which you want to print logs

```java
    @Test(description = "Verify that the Get Post API returns correctly")
    public void verifyGetAPI() {

        // Given
        given()
                .log().everything(true)  // Output request-related logs
                .baseUri("https://jsonplaceholder.typicode.com")
                .header("Content-Type", "application/json")

                // When
                .when()
                .get("/posts/1")

                // Then
                .then()
                .log().everything(true)  // Output response-related logs
                .statusCode(200)
    }
```

##### Viewing Localized Log Output

- Open the Terminal window for this project and run the test script by executing the following command
- Viewing Log Output

![report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/GxZyyG.png)

#### LogConfig Configuration Description

In Rest-Assured, you can use the `LogConfig` class to configure logging of requests and responses. The `LogConfig` allows you to define the level of logging detail, the output format, the location of the output, and so on. The following are some common `LogConfig` configuration examples:

1. **Enable logging of requests and responses:**

   ```java
   RestAssured.config = RestAssured.config()
       .logConfig(LogConfig.logConfig()
       .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL));;
   ```

   This will enable logging of requests and responses only if validation fails.

2. **Configure the output level:**

   ``` java
   RestAssured.config = RestAssured.config()
       .logConfig(LogConfig.logConfig()
       .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.HEADERS));;
   ```

   This will log only the request and response headers.

3. **Configure the location of the output:**

   ```java
   RestAssured.config = RestAssured.config()
       .logConfig(LogConfig.logConfig()
       .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL)
           .enablePrettyPrinting(true)
           .defaultStream(FileOutputStream("log.txt"))); 
   ```

   This outputs the log records to a file named "log.txt".

4. **Configure the nice output format:**

   ```java
   RestAssured.config = RestAssured.config()
       .logConfig(LogConfig.logConfig()
       .enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL)
           .enablePrettyPrinting(true));
   ```

   This will enable nice output formatting and make the logs easier to read.

You can combine these configuration options according to your specific needs and set it to `RestAssured.config` to configure global request and response logging. This will help log and review requests and responses in RestAssured for debugging and analyzing issues.

#### Request Logging

Starting with version 1.5, REST Assured supports logging request specifications before they are sent to the server using RequestLoggingFilter. Note that HTTP Builder and HTTP Client may add headers other than what is printed in the log. The filter will only log the details specified in the request specification. That is, you cannot consider the details logged by the RequestLoggingFilter to be the details actually sent to the server. In addition, subsequent filters may change the request after logging has occurred. If you need to log what is actually sent over the network, see the HTTP Client Logging documentation or use an external tool such as fiddler.

Examples：

```java
given().log().all() // Log all request specification details including parameters, headers and body
given().log().params() // Log only the parameters of the request
given().log().body() // Log only the request body
given().log().headers()  // Log only the request headers
given().log().cookies()  // Log only the request cookies
given().log().method()  // Log only the request method
given().log().path()  // Log only the request path
```

#### Response Logging

- Wanting to print only the body of the response, regardless of the status code, you can do the following.
, for example:

```java
get("/x").then().log().body()
```

- The response body will be printed whether or not an error occurs. If only interested in printing the response body when an error occurs, for example:

```java
get("/x").then().log().ifError()
```

- Record all details in the response, including status lines, headers, and cookies, for example:

```java
get("/x").then().log().all()   
```

- Record only the status line, header, or cookie in the response, for example:

```java
get("/x").then().log().statusLine()  // Only log the status line
get("/x").then().log().headers()  // Only log the response headers
get("/x").then().log().cookies()   // Only log the response cookies
```

- Configured to log a response only when the status code matches a value. for example:

```java
get("/x").then().log().ifStatusCodeIsEqualTo(302)   // Only log if the status code is equal to 302
get("/x").then().log().ifStatusCodeMatches(matcher)   // Only log if the status code matches the supplied Hamcrest matcher
```

#### Log if validation fails

- Since REST Assured 2.3.1 you can log the request or response only if the validation fails. To log the request do. for example:

```java
given().log().ifValidationFails()
```

- To log the response. for example:

```java
then().log().ifValidationFails()
```

- It can be enabled for both requests and responses using LogConfig, for example:

```java
given().config(RestAssured.config().logConfig(logConfig()
.enableLoggingOfRequestAndResponseIfValidationFails(HEADERS)))
```

> If authentication fails, the log only records the request header.

- Another shortcut to enable request and response logging for all requests if authentication fails, for example:
  
```java
RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
```

- Starting with version 4.5.0, you can also use specify the message that will be displayed if the onFailMessage test fails, for example:
  
```java
when().
      get().
then().
      onFailMessage("Some specific message").
      statusCode(200);
```

#### Header Blacklist Configuration

Starting with REST Assured 4.2.0, it is possible to blacklist headers so that they do not show up in request or response logs. Instead, the header value will be replaced with [ BLACKLISTED ] . You can enable this feature on a per-header basis using LogConfig, for example:
  
```java
given().config(config().logConfig(logConfig().blacklistHeader("Accept")))  
```

### Filters

In RestAssured, you can use filters to modify requests and responses. Filters allow you to modify requests and responses at different stages of the request and response process. For example, you can modify the request before the request or the response after the response. You can use filters to add request headers, request parameters, request bodies, response headers, response bodies, and so on.

Filters can be used to implement custom authentication schemes, session management, logging, and so on. To create a filter, you need to implement the io.restassured.filter.Filter interface. To use a filter, you can do the following:

```java
given().filter(new MyFilter())  
```

There are a couple of filters provided by REST-Assured that are ready to use:

- `io.restassured.filter.log.RequestLoggingFilter`: A filter that'll print the request specification details.
- `io.restassured.filter.log.ResponseLoggingFilter`: A filter that'll print the response details if the response matches a given status code.
- `io.restassured.filter.log.ErrorLoggingFilter`: A filter that'll print the response body if an error occurred (status code is between 400 and 500).

#### Ordered Filters

As of REST Assured 3.0.2 you can implement the `io.restassured.filter.OrderedFilter` interface if you need to control the filter ordering. Here you implement the getOrder method to return an integer representing the precedence of the filter. A lower value gives higher precedence. The highest precedence you can define is Integer.MIN_VALUE and the lowest precedence is Integer.MAX_VALUE. Filters not implementing `io.restassured.filter.OrderedFilter` will have a default precedence of 1000.

[examples](https://github.com/rest-assured/rest-assured/blob/master/examples/rest-assured-itest-java/src/test/java/io/restassured/itest/java/OrderedFilterITest.java)

#### Response Builder

If you need to change the Response from a filter you can use the ResponseBuilder to create a new Response based on the original response. For example if you want to change the body of the original response to something else you can do:

```java
Response newResponse = new ResponseBuilder()
.clone(originalResponse).setBody("Something").build();
```
