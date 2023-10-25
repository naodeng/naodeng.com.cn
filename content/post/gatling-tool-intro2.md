
+++
author = "nao.deng"
title = "gatling performance testing tools: building your own gatling project from 0 to 1"
date = "2023-10-25T11:05:45+08:00"
description = "The article introduces the performance testing tool gatling advanced introduction: from 0 to 1 build your own Gatling project, introduces the basic use of Gatling, and how to build your own Gatling project, write performance test scripts, view the test report and so on."
tags = [
"Performance Testing","gatling"
]
+++

## 从 0 到 1 搭建自己的 Gatling 工程

### Gradle + Scala 版本

#### 创建一个空的 Gradle 工程

```bash
mkdir gatling-gradle-demo
cd gatling-gradle-demo
gradle init
```

#### 配置项目 build.gradle

在 项目中 build.gradle 文件中添加以下内容

> 可 copy 本项目中的 build.gradle 文件内容，更多配置可参考[官方文档](https://gatling.io/docs/gatling/reference/current/extensions/gradle_plugin/)

```groovy
// 插件配置
plugins {
    id 'scala' // scala插件声明（基于开发工具插件）
    id 'io.gatling.gradle' version '3.9.5.6'  // 基于gradle的gatling框架插件版本声明
}
//仓库源配置
repositories {
  // 使用 maven 中心仓库源
  mavenCentral()
}
// gatling 配置
gatling {
  // logback root level，如果配置文件夹中不存在 logback.xml，则默认 Gatling 控制台日志级别
  logLevel = 'WARN' 

  // 执行记录 HTTP 请求的详细程度
  // set to 'ALL' for all HTTP traffic in TRACE, 'FAILURES' for failed HTTP traffic in DEBUG
  logHttp = 'FAILURES' 

  // Simulations 过滤器
  simulations = {
      include "**/simulation/*.scala"
  }
}
// 依赖配置
dependencies {     
 // 图表库，用于生成报告图表
 gatling 'io.gatling.highcharts:gatling-charts-highcharts:3.8.3'
 }
```

#### gradle build 项目并初始化

- 用编辑器打开本项目 Terminal 窗口，执行以下命令确认项目 build 成功

```bash
gradle build
```

- 初始化完成：完成向导后，Gradle 将在项目目录中生成一个基本的 Gradle 项目结构
  
![readme-project-tree1](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-project-tree1.png)

#### 初始化目录
  
在 src/gatling/scala 目录下创建一个 simulation 目录，用于存放测试脚本

> Gatling 测试通常位于 src/gatling 目录中。你需要在项目根目录下手动创建 src 目录，然后在 src 目录下创建 gatling 目录。在 gatling 目录下，你可以创建你的测试模拟文件夹 simulation，以及其他文件夹，如 data、bodies、resources 等。

#### 编写脚本

- 在 simulation 目录下创建一个 demo.scala 文件，用于编写测试脚本

- 示例脚本如下，可供参考

> 脚本包含了两个场景，一个是 get 请求，一个是 post 请求
> get 接口验证接口返回状态码为 200，post 接口验证接口返回状态码为 201
> get 接口使用了 rampUsers，post 接口使用了 constantConcurrentUsers
> rampUsers：在指定时间内逐渐增加并发用户数，constantConcurrentUsers：在指定时间内保持并发用户数不变
> 两个接口的并发用户数都是 10 个，持续时间都是 10 秒
> 两个接口的请求间隔都是 2 秒

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

#### 调试脚本

执行以下命令，运行测试脚本并查看报告

```bash
gradle gatlingRun
```

![readme-report3](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-report3.png)

### Maven + Scala 版本

#### 创建一个空的 Maven 工程

```bash
mvn archetype:generate -DgroupId=demo.gatlin.maven -DartifactId=gatling-maven-demo
```

初始化完成：完成向导后，Maven 将在新建项目目录并生成一个基本的 Maven 项目结构
  
![readme-project-tree2](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-project-tree2.png)

#### 配置项目 pom.xml

在 项目中 pom.xml 文件中添加以下内容

> 可 copy 本项目中的 pom.xml 文件内容，更多配置可参考[官方文档](https://gatling.io/docs/gatling/reference/current/extensions/maven_plugin/)

```xml
<!-- 依赖配置 -->
<dependencies>
  <dependency>
    <groupId>io.gatling.highcharts</groupId>
    <artifactId>gatling-charts-highcharts</artifactId>
    <version>3.9.5</version>
    <scope>test</scope>
  </dependency>
</dependencies>
<!-- 插件配置 -->
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

#### 初始化目录
  
在 src/test/scala 目录下创建一个 simulation 目录，用于存放测试脚本

> scala 测试通常位于 src/test 目录中。你需要在项目 test 目录下创建 scala 目录。在 scala 目录下，你可以创建你的测试模拟文件夹 simulation，以及其他文件夹，如 data、bodies、resources 等。

#### 编写脚本

- 在 simulation 目录下创建一个 demo.scala 文件，用于编写测试脚本

- 示例脚本如下，可供参考

> 脚本包含了两个场景，一个是 get 请求，一个是 post 请求
> get 接口验证接口返回状态码为 200，post 接口验证接口返回状态码为 201
> get 接口使用了 rampUsers，post 接口使用了 constantConcurrentUsers
> rampUsers：在指定时间内逐渐增加并发用户数，constantConcurrentUsers：在指定时间内保持并发用户数不变
> 两个接口的并发用户数都是 10 个，持续时间都是 10 秒
> 两个接口的请求间隔都是 2 秒

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

#### 调试脚本

执行以下命令，运行测试脚本并查看报告

```bash
mvn gatling:test
```

![readme-report3](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-report3.png)
