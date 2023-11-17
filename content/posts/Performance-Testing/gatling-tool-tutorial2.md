---
author: "nao.deng"
title: "gatling Performance Testing Tutorial: building your own gatling project from 0 to 1"
date: "2023-10-25T11:05:45+08:00"
summary: "The article introduces the performance testing tool gatling advanced introduction: from 0 to 1 build your own Gatling project, introduces the basic use of Gatling, and how to build your own Gatling project, write performance test scripts, view the test report and so on."
tags: [ "Building a performance Test project from 0 to 1"
]
Categories: ["Performance testing", "Gatling"]
series: ["Gatling Performance Testing Tutorial"]
ShowWordCount: true
---

## Build your own Gatling project from 0 to 1

### Gradle + Scala versions

#### Create an empty Gradle project

```bash
mkdir gatling-gradle-demo
cd gatling-gradle-demo
gradle init
```

#### Configure the project build.gradle

Add the following to the build.gradle file in the project

> You can copy the content of the build.gradle file in this project, for more configurations, please refer to the [official documentation](https://gatling.io/docs/gatling/reference/current/extensions/gradle_plugin/).

```groovy
// Plugin Configuration
plugins {
    id 'scala' // scala plugin declaration (based on the development tools plugin)
    id 'io.gatling.gradle' version '3.9.5.6' // declaration of the version of the gradle-based gatling framework plugin
}
// Repository source configuration
repositories {
  // Use the maven central repository source
  mavenCentral()
}
// gatling configuration
gatling {
  // logback root level, defaults to the Gatling console log level if logback.xml does not exist in the configuration folder
  logLevel = 'WARN' 

  // Enforce logging of HTTP requests at a level of detail
  // set to 'ALL' for all HTTP traffic in TRACE, 'FAILURES' for failed HTTP traffic in DEBUG
  logHttp = 'FAILURES' 

  // Simulations filter
  simulations = {
      include "**/simulation/*.scala"
  }
}
// Dependencies
dependencies {     
 // Charts library for generating report charts
 gatling 'io.gatling.highcharts:gatling-charts-highcharts:3.8.3'
 }
```

#### gradle build project and initialize

- Open the Terminal window of the project with an editor and execute the following command to confirm that the project build was successful

```bash
gradle build
```

- Initialization complete: After completing the wizard, Gradle will generate a basic Gradle project structure in the project directory
  
![readme-project-tree1](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-project-tree1.png)

#### Initialization Directory
  
Create a simulation directory in the src/gatling/scala directory to hold test scripts

> Gatling tests are usually located in the src/gatling directory. You need to manually create the src directory in the project root, and then create the gatling directory under the src directory. In the gatling directory, you can create your test simulation folder simulation, as well as other folders such as data, bodies, resources, and so on.

#### Writing Scripts

- Create a demo.scala file in the simulation directory to write your test scripts.

- For reference, the following is a sample script

> The script contains two scenarios, one for get requests and one for post requests.
> The get interface validates that the interface returns a status code of 200 and the post interface validates that the interface returns a status code of 201.
> The get interface uses rampUsers, the post interface uses constantConcurrentUsers.
> rampUsers: incrementally increase the number of concurrent users over a specified period of time, constantConcurrentUsers: keep the number of concurrent users constant over a specified period of time.
> The number of concurrent users is 10 for both interfaces, and the duration is 10 seconds for both interfaces.
> The request interval is 2 seconds for both interfaces.

```scala
package simulation 

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class demo extends Simulation { 

  val httpProtocol = http
    .baseUrl("https://jsonplaceholder.typicode.com") // 5
  val scn = scenario("GetSimulation")
    .exec(http("get_demo") 
      .get("/posts/1")
      .check(status.is(200)))
    .pause(2)
  val scn1 = scenario("PostSimulation")
    .exec(http("post_demo")
      .post("/posts")
      .body(StringBody("""{"title": "foo","body": "bar","userId": 1}""")).asJson
      .check(status.is(201)))
    .pause(2)

  setUp( 
    scn.inject(rampUsers(10) during(10 seconds)),
    scn1.inject(constantConcurrentUsers(10) during(10 seconds))
  ).protocols(httpProtocol)
}
```

#### Debugging Scripts

Execute the following command to run the test script and view the report

```bash
gradle gatlingRun
```

![readme-report3](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-report3.png)

### Maven + Scala version

#### Create an empty Maven project

```bash
mvn archetype:generate -DgroupId=demo.gatlin.maven -DartifactId=gatling-maven-demo
```

Initialization complete: After completing the wizard, Maven will create a new project directory and generate a basic Maven project structure in the
  
![readme-project-tree2](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-project-tree2.png)

#### Configure the project pom.xml

Add the following contents to the pom.xml file in the project

> You can copy the contents of the pom.xml file in this project, for more configuration, please refer to the [official documentation](https://gatling.io/docs/gatling/reference/current/extensions/maven_plugin/).

```xml
<!-- dependencies Configuration -->
<dependencies>
  <dependency>
    <groupId>io.gatling.highcharts</groupId>
    <artifactId>gatling-charts-highcharts</artifactId>
    <version>3.9.5</version>
    <scope>test</scope>
  </dependency>
</dependencies>
<!-- Plugin Configuration -->
  <build>
    <plugins>
      <plugin>
        <groupId>io.gatling</groupId>
        <artifactId>gatling-maven-plugin</artifactId>
        <version>4.6.0</version>
      </plugin>
      <plugin>
        <groupId>net.alchim31.maven</groupId>
        <artifactId>scala-maven-plugin</artifactId>
        <version>4.8.1</version>
        <configuration>
          <scalaVersion>2.13.12</scalaVersion>
        </configuration>
        <executions>
          <execution>
            <goals>
              <goal>testCompile</goal>
            </goals>
            <configuration>
              <jvmArgs>
                <jvmArg>-Xss100M</jvmArg>
              </jvmArgs>
              <args>
                <arg>-deprecation</arg>
                <arg>-feature</arg>
                <arg>-unchecked</arg>
                <arg>-language:implicitConversions</arg>
                <arg>-language:postfixOps</arg>
              </args>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
```

#### Initialization Directory
  
Create a simulation directory in the src/test/scala directory to hold the test scripts

> scala tests are usually located in the src/test directory. You need to create a scala directory under the project test directory. In the scala directory, you can create your test simulation folder simulation, as well as other folders such as data, bodies, resources, and so on.

#### Writing Scripts

- Create a demo.scala file in the simulation directory to write your test scripts.

- For reference, the following is a sample script

> The script contains two scenarios, one for get requests and one for post requests.
> The get interface validates that the interface returns a status code of 200 and the post interface validates that the interface returns a status code of 201.
> The get interface uses rampUsers, the post interface uses constantConcurrentUsers.
> rampUsers: incrementally increase the number of concurrent users over a specified period of time, constantConcurrentUsers: keep the number of concurrent users constant over a specified period of time.
> The number of concurrent users is 10 for both interfaces, and the duration is 10 seconds for both interfaces.
> The request interval is 2 seconds for both interfaces.

```scala
package simulation 

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class demo extends Simulation { 

  val httpProtocol = http
    .baseUrl("https://jsonplaceholder.typicode.com") // 5
  val scn = scenario("GetSimulation")
    .exec(http("get_demo") 
      .get("/posts/1")
      .check(status.is(200)))
    .pause(2)
  val scn1 = scenario("PostSimulation")
    .exec(http("post_demo")
      .post("/posts")
      .body(StringBody("""{"title": "foo","body": "bar","userId": 1}""")).asJson
      .check(status.is(201)))
    .pause(2)

  setUp( 
    scn.inject(rampUsers(10) during(10 seconds)),
    scn1.inject(constantConcurrentUsers(10) during(10 seconds))
  ).protocols(httpProtocol)
}
```

#### Debugging Scripts

Execute the following command to run the test script and view the report

```bash
mvn gatling:test
```

![readme-report3](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-report3.png)