---
author: "nao.deng"
title:  "REST Assured API Automation Testing Tutorial: Getting Started and Setting Up Your Environment"
date:  "2023-11-01T16:24:49+08:00"
summary:  "a tutorial on REST Assured, focusing on getting started and preparing the environment to be built."
tags:   [
"Getting Started", "Setting Up Environment"
]
Categories:   ["API automation testing", "REST Assured"]
series: ["REST Assured API Automation Testing Tutorial"]
ShowWordCount: true
---


## Introduction of RestAssured

REST Assured is a Java testing framework for testing RESTful APIs that enables developers/testers to easily write and execute API tests. It is designed to make API testing simple and intuitive, while providing rich functionality and flexibility. The following are some of the key features and uses of REST Assured:

1. Initiating HTTP requests: REST Assured allows you to easily build and initiate HTTP GET, POST, PUT, DELETE and other types of requests. You can specify the request's URL, headers, parameters, body, and other information.

2. Chained Syntax: REST Assured uses chained syntax to make test code more readable and easy to write. You can describe your test cases in a natural way without writing tons of code.

3. Assertions and Checksums: REST Assured provides a rich set of checksums that can be used to validate API response status codes, response bodies, response headers, and so on. You can add multiple assertions according to your testing needs.

4. Support for multiple data formats: REST Assured supports a variety of data formats, including JSON, XML, HTML, Text and so on. You can use appropriate methods to handle different formats of response data.

5. Integration with BDD (Behavior-Driven Development): REST Assured can be used in conjunction with BDD frameworks (such as Cucumber), allowing you to better describe and manage test cases.

6. Simulate HTTP Server: REST Assured also includes a simulation of an HTTP server, allowing you to simulate the behavior of an API for end-to-end testing.

7. Extensibility: REST Assured can be customized with plug-ins and extensions to meet specific testing needs.

Overall, REST Assured is a powerful and easy-to-use API testing framework that helps you easily perform RESTful API testing and provides many tools to verify the correctness and performance of an API. Whether you are a beginner or an experienced developer/tester, REST Assured is a valuable tool for quickly getting started with API automation testing.

## Project structure

### Gradle-built versions

```text
- src
  - main
    - java
      - (The main source code of the application)
  - test
    - test
      - api
        - (REST Assured test code)
          - UsersAPITest.java
          - ProductsAPITest.java
        - TestConfig.java
          - TestConfig.java
    - resources
      - (configuration files, test data, etc.)
  - (other project files and resources)
- build.gradle (Gradle project configuration file)
```

In this example directory structure:

- src/test/java/api directory is used to hold REST Assured test classes, each of which typically involves tests for one or more related API endpoints. For example, UsersAPITest.java and ProductsAPITest.java could contain tests for user management and product management.
- The src/test/java/util directory can be used to store tool classes that are shared among tests, such as TestConfig.java for configuring REST Assured.
- The src/test/resources directory can contain test data files, configuration files, and other resources that can be used in tests.
- build.gradle is the gradle project's configuration file, which is used to define the project's dependencies, build configuration, and other project settings.

### Maven-built versions

```text
- src
  - main
    - java
      - (The main source code of the application)
  - test
    - java
      - api
        - (REST Assured test code)
          - UsersAPITest.java
          - ProductsAPITest.java
        - util
          - TestConfig.java
    - resources
      - (configuration files, test data, etc.)
  - (other project files and resources)
- pom.xml (Maven project configuration file)
```

In this example directory structure:

- src/test/java/api directory is used to hold REST Assured test classes, each of which typically involves tests for one or more related API endpoints. For example, UsersAPITest.java and ProductsAPITest.java could contain tests for user management and product management.
- The src/test/java/util directory can be used to store tool classes that are shared among tests, such as TestConfig.java for configuring REST Assured.
- The src/test/resources directory can contain test data files, configuration files, and other resources that can be used in the tests.
- pom.xml is a Maven project configuration file that is used to define project dependencies, build configurations, and other project settings.

## Project dependency

- JDK 1.8+, I'm using JDK 19
- Gradle 6.0+ or Maven 3.0+, I'm using Gradle 8.44 and Maven 3.9.5
- RestAssured 4.3.3+, I'm using the latest version 5.3.2

## Syntax Example

Here's a simple example of RestAssured syntax that demonstrates how to perform a GET request and validate the response: First, make sure you have added a RestAssured dependency to your Gradle or Maven project.

First, make sure you have added a RestAssured dependency to your Gradle or Maven project.

Gradle dependency:

```groovy
dependency {
    implementation 'io.rest-assured:rest-assured:5.3.1' }
```

Maven dependency:

```xml
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.3.1</version>
</dependency>
```

Next, create a test class and write the following code:

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class RestAssuredDemo {

    @Test
    public void testGetRequest() {
        // Set the base URI, using JSONPlaceholder as an example
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";

        // Send a GET request and save the response
        Response response = given()
                .when()
                .get("/posts/1")
                .then()
                .extract()
                .response();

        // Print the JSON content of the response
        System.out.println("Response JSON: " + response.asString()); // Verify that the status code is 200.

        // Validate that the status code is 200
        response.then().statusCode(200); // validate that the response has a status code of 200.

        // Validate a specific field value in the response
        response.then().body("userId", equalTo(1));
        response.then().body("id", equalTo(1));
        response.then().body("title", equalTo("sunt aut facere repellat provident occaecati excepturi optio reprehenderit"));
        response.then().body("body", equalTo("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"));
    }
}
```

The above code executes a GET request to JSONPlaceholder's `/posts/1` endpoint and validates the response with a status code and values for specific fields. You can modify the base URI and validation conditions to suit your needs.

In this example, we're using the TestNG testing framework, but you can also use other testing frameworks such as JUnit. make sure your test classes contain the appropriate import statements and configure them appropriately as needed.

This is a simple example of RestAssured syntax for performing a GET request and validating the response. You can build more complex test cases based on the needs of your project and the complexity of your API.
