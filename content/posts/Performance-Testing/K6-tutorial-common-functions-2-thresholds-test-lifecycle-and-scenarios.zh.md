---
author:  "nao.deng"
title:  "K6 性能测试教程：常用功能（2）- 阈值，测试生命周期和场景"
date: "2024-01-18T17:10:00+08:00"
summary:  "这篇博文深入介绍了 K6 性能测试工具的常用功能，主要聚焦在阈值设置、测试生命周期和场景设计方面。阐述了如何利用 K6 在性能测试中设定合理的阈值，以便有效监测系统的性能表现。同时，探讨了测试生命周期的重要性，以及如何在不同阶段进行有针对性的性能测试。此外，博文还详细解释了 K6 中场景的概念，以及如何根据实际需求设计和配置场景，确保测试全面覆盖各种使用情景。通过本文，读者能够更深入地了解 K6 性能测试工具在项目中的实际应用，提高性能测试的效果和准确性。"
tags: ["常用功能", "阈值", "测试生命周期", "场景"]
categories: ["性能测试", "k6"]
series: ["K6 性能测试教程"]
ShowWordCount: true
---

## K6 常用功能

上一篇博文介绍了[K6 性能测试教程：常用功能（1）- HTTP 请求，指标和检查](https://naodeng.com.cn/zh/posts/performance-testing/k6-tutorial-common-functions-1-http-request-metrics-and-checks/) 这一篇文章主要聚焦在阈值设置、测试生命周期和场景设计方面。阐述了如何利用 K6 在性能测试中设定合理的阈值，以便有效监测系统的性能表现。同时，探讨了测试生命周期的重要性，以及如何在不同阶段进行有针对性的性能测试。

### Thresholds 阈值

#### 什么是阈值

阈值一般是我们为测试指标定义的通过/失败标准。对于 K6 来说，如果被测系统的性能不满足阈值条件，**测试将以失败状态结束**。

> 前面提到的检查（check）是用来验证测试结果是否符合预期，check 不通过，测试还会继续，而阈值（threshold）是用来验证测试结果是否符合性能要求。如果不符合，测试将以失败状态结束。

通常情况下，我们进行性能测试时会使用阈值来编写不同服务或接口的 SLOs(服务级别目标 Service Level Objectives)。

下面为一些阈值的例子：

- 不到 1% 的请求返回错误。
- 95% 的请求响应时间低于 200 毫秒。
- 99% 的请求响应时间低于 400 毫秒。
- 特定端点始终在 300 毫秒内响应。
- 自定义指标（等待时间趋势）的任何条件（大于 300 毫秒）。

如果后续会写性能自动化测试脚本，那么阈值就是必不可少的。

- 给你的测试一个阈值。
- 自动化执行
- 设置测试失败警报。

#### HTTP 错误和响应持续时间的阈值示例

以下示例演示如何使用阈值来设置并评估 HTTP 错误率（http_req_failed 指标）和评估 95% 的请求响应是否在特定持续时间内发生（http_req_duration 指标）：

```javascript
import http from 'k6/http';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // HTTP 错误率应该低于 1%
    http_req_duration: ['p(95)<200'], // 95% 的请求响应应该低于 200ms
  },
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/1/');
}
```

上述的示例中，我们设置了两个阈值：

- HTTP 错误率应该低于 1%。（用到了 http_req_failed 指标）
- 95% 的请求响应应该低于 200ms。（用到了 http_req_duration 指标）

对于上面代码设置的阈值，如果运行的时候，HTTP 错误率低于 1% 和 95% 的请求响应低于 200ms，那么测试就会以成功状态结束，否则任一阈值不满足，测试就将以失败状态结束。

运行该脚本，可以看到如下结果：

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/EiPBZ9.png)

结果中显示，http_req_failed 阈值通过了，http_req_duration 阈值没有通过，整体测试以失败状态结束。

> 如果任何阈值失败，则阈值名称（http_req_failed、http_req_duration）旁边的绿色小复选标记 ✓ 将是 ✗ 并且 k6 将以非零值退出退出代码。

#### 阈值语法

阈值语法是一个字符串，由以下部分组成：

- 指标名称（例如 http_req_duration）。
- 一个或多个条件，用逗号分隔。
- 每个条件都由一个运算符和一个值组成。
- 运算符可以是以下之一：>、>=、<、<=、==、!=、=~、!~。
- 值可以是数字或百分比。
- 百分比值必须在 0 到 100 之间。

想要在测试脚本中使用阈值，步骤如下：

1.在 options 对象中添加 thresholds 属性，如下所示：

```javascript
export const options = {
  thresholds: {
    /* ... */
  },
};
```

2.在 thresholds 对象中定义阈值表达式（至少一个，可以多个），如下所示：

```javascript
export const options = {
  thresholds: {
    //短格式
    METRIC_NAME1: ['THRESHOLD_EXPRESSION', `...`],
    //长格式
    METRIC_NAME2: [
      {
        threshold: 'THRESHOLD_EXPRESSION',
        abortOnFail: true, // boolean
        delayAbortEval: '10s', // string
      },
    ], // full format
  },
};
```

- 阈值表达式支持短格式和长格式，短格式将所有阈值表达式作为字符串放入数组中。长格式将每个阈值放入一个对象中，并具有在失败时中止的额外属性。
- 上面示例代码中的 METRIC_NAME1 和 THRESHOLD_EXPRESSION 是占位符。正常情况下必须是指标名称和阈值表达式。
- 示例代码声明配置指标 metric_name1 和 metric_name2 的两个阈值。通过评估阈值后的'threshold_expression'来确定阈值是通过还是失败，.

##### 阈值表达式语法

阈值表达式的计算结果为 `true` 或 `false` 。阈值表达式必须采用以下格式：

``` javascript
<aggregation_method> <operator> <value>
```

- `<aggregation_method>`：聚合方法，用于计算指标的值。例如，p(95) 表示 95% 百分位数，而 avg 表示平均值。
- `<operator>`：运算符，用于比较指标的值与阈值表达式中的值。例如，> 表示大于，< 表示小于，== 表示等于。
- `<value>`：阈值表达式中的值。例如，200 表示 200 毫秒，95 表示 95%。

阈值表达式的一些示例如下：

- avg < 200 // 平均持续时间必须小于 200 毫秒
- count >= 500 // 计数必须大于或等于 500
- p(90) < 300 // 90% 的样本必须低于 300

##### 按类型划分的聚合方法

k6 根据类型聚合指标。这些聚合方法构成阈值表达式的一部分。

以下是按类型划分的聚合方法列表：

| 指标类型  | 聚合方法 |
| ------- | ------- |
｜Counter | count 计数 和 rate 比率 |
｜Gauge | value 具体的值 |
｜Rate | rate 比率 |
｜Trend | avg 平均值、min 最小值、max 最大值、med 和 p(N) 其中 N 指定阈值百分位值，表示为 0.0 到 100 之间的数字。p(99.99) 表示第 99.99 个百分位。这些值以毫秒为单位。｜

一个复杂的聚合方法示例：

```javascript
import http from 'k6/http';
import { Trend, Rate, Counter, Gauge } from 'k6/metrics';
import { sleep } from 'k6';

export const TrendRTT = new Trend('RTT');
export const RateContentOK = new Rate('Content OK');
export const GaugeContentSize = new Gauge('ContentSize');
export const CounterErrors = new Counter('Errors');
export const options = {
  thresholds: {
    // 计数：不允许超过 99 次返回错误的内容。
    'Errors': ['count<100'],
    // 计量：返回的内容必须控制在 4000 字节以下。
    'ContentSize': ['value<4000'],
    // 比率：内容必须在 95 次以上达到“OK”。
    'Content OK': ['rate>0.95'],
    // 趋势：百分位数、平均值、中位数和最小值必须保持在指定的毫秒范围内。
    'RTT': ['p(99)<300', 'p(70)<250', 'avg<200', 'med<150', 'min<100'],
  },
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/1/');
  const contentOK = res.json('name') === 'Bert';

  TrendRTT.add(res.timings.duration);
  RateContentOK.add(contentOK);
  GaugeContentSize.add(res.body.length);
  CounterErrors.add(!contentOK);

  sleep(1);
}
```

注意：不要通过重复相同的对象键来为同一指标指定多个阈值。

> 由于阈值被定义为 JavaScript 对象的属性，因此您不能指定多个具有相同属性名称的阈值。如果要为一个指标设置多个阈值，请使用同一键的数组指定它们。

#### 常用的阈值示例

使用阈值的最快方法是先使用内置指标。以下是一些常用的复制示例

##### 1.在指定持续时间内完成的请求百分比

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  thresholds: {
    // 90% 的请求必须在 400 毫秒内完成。
    http_req_duration: ['p(90) < 400'],
  },
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/1/');
  sleep(1);
}
```

##### 2.错误率低于 1%
  
```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  thresholds: {
    // 在整个测试执行过程中，错误率必须低于 1％。
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/1/');
  sleep(1);
}
```

##### 3.单个指标的多个阈值

我们也可以为一项指标应用多个阈值。该阈值对于不同的请求百分位数有不同的持续时间要求。

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  thresholds: {
    // 90％的请求必须在 400 毫秒内完成，95％在 800 毫秒内完成，99.9％在 2 秒内完成。
    http_req_duration: ['p(90) < 400', 'p(95) < 800', 'p(99.9) < 2000'],
  },
};

export default function () {
  const res1 = http.get('https://test-api.k6.io/public/crocodiles/1/');
  sleep(1);
}
```

##### 4.持续时间组的阈值

我们也可以为每个组设置阈值。此代码具有针对单独请求和批量请求的组。对于每个组，都有不同的阈值。

```javascript
import http from 'k6/http';
import { group, sleep } from 'k6';

export const options = {
  thresholds: {
    'group_duration{group:::individualRequests}': ['avg < 400'],
    'group_duration{group:::batchRequests}': ['avg < 200'],
  },
  vus: 1,
  duration: '10s',
};

export default function () {
  group('individualRequests', function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
    http.get('https://test-api.k6.io/public/crocodiles/2/');
    http.get('https://test-api.k6.io/public/crocodiles/3/');
  });

  group('batchRequests', function () {
    http.batch([
      ['GET', `https://test-api.k6.io/public/crocodiles/1/`],
      ['GET', `https://test-api.k6.io/public/crocodiles/2/`],
      ['GET', `https://test-api.k6.io/public/crocodiles/3/`],
    ]);
  });

  sleep(1);
}
```

#### 超过阈值时中止测试

如果在测试过程中，我们想要在阈值不满足时中止测试，那么可以使用 `abortOnFail` 属性。

将 abortOnFail 属性设置为 true。当您设置 abortOnFail 时，一旦阈值失败，测试运行就会停止。

> 这里也会有一种特殊情况，测试可能会因为这个阈值的设定导致在测试生成重要数据之前中止。为了防止这些情况，我们可以使用 delayAbortEval 延迟 abortOnFail。在此脚本中，abortOnFail 延迟了十秒。十秒后，如果未达到 p(99) < 10 阈值，测试将中止。

```javascript
export const options = {
  thresholds: {
    metric_name: [
      {
        threshold: 'p(99) < 10', // string
        abortOnFail: true, // boolean
        delayAbortEval: '10s', // string
        /*...*/
      },
    ],
  },
};
```

更多阈值的内容，请参考官方文档：[https://k6.io/docs/using-k6/thresholds/](https://k6.io/docs/using-k6/thresholds/)

### Test lifecycle 测试生命周期

K6 框架中的测试的生命周期，测试脚本始终都以下面的相同顺序进行执行：

- `init` 初始化阶段：上下文中的代码准备脚本、加载文件、导入模块并定义测试`生命周期函数`。必需的。
- `setup` 前置准备设置阶段：设置测试环境并生成数据。可选的。
- `VU` UV 阶段：代码在 default 或场景函数中运行，运行时间和次数与 options 定义的一样长。必需的。
- `teardown` 后置测试退出阶段：对数据进行后处理并关闭测试环境。可选的。

> 生命周期函数：除了初始化代码之外，每个阶段都在生命周期函数中发生，这是在 k6 运行时按照特定顺序调用的函数。

下面是一个完整的测试生命周期示例：

```javascript
// 1. 配置 init 阶段（必需的）

export function setup() {
  // 2. 配置 setup 阶段（可选的）
}

export default function (data) {
  // 3. 配置 VU 阶段（必需的）
}

export function teardown(data) {
  // 4. 配置 teardown  阶段（可选的）
}
```

#### 生命周期阶段概述

| 测试阶段    |目的  | 示例             | 请求次数 |
| -------------- | ------ | ---------------- | ------ |
| init 初始化阶段 | 加载本地文件、导入模块、声明生命周期函数 | 打开 JSON 文件，导入模块 | 每个 VU 一次* |
| Setup 前置准备配置阶段 | 设置要处理的数据，在 VU 之间共享数据 | 调用 API 启动测试环境 | 一次 |
| VU code VU 代码阶段 | 运行测试函数，通常是 default| 发出 https 请求，验证响应 | 每次迭代一次，根据测试选项的需要进行多次 |
| Teardown 测试后置退出阶段 | 设置代码的处理结果，停止测试环境 | 验证设置是否有一定的结果，发送 webhook 通知测试已完成 | 一次 **|

> `*` 在云脚本中，init 代码可能会被更频繁地调用。`**` 如果 Setup 函数异常结束（例如抛出错误），则不会调用 teardown() 函数。考虑向 setup() 函数添加逻辑以处理错误并确保正确清理。

#### init 初始化阶段

K6 测试的必要阶段。这个阶段用来在测试之前准备测试环境和初始化测试条件

> init 上下文中的代码每个 VU 都会运行一次。

一般在`init` 阶段可能会做的事情：

- 导入模块
- 从本地文件系统加载文件
- 为所有 options 配置测试
- 为 VU、setup 和 teardown 阶段（以及自定义或 handleSummary() 函数）定义生命周期函数。

> init 上下文中的代码始终首先执行

#### VU 阶段

VU 阶段是测试的核心。在这个阶段，代码在 default 或场景函数中运行，运行时间和次数与 options 定义的一样长。

关于 UV 阶段的 Q&A：

- 1.为什么有 VU 阶段？

  - VU 阶段是测试的核心，脚本必须至少包含一个定义 VU 逻辑的场景函数。该函数内部的代码是 VU 代码。
  - VU 阶段是真正的测试代码，所以 VU 阶段的代码会被多次执行，执行次数由 options 定义的一样长。
- 2.为什么把 init 阶段和 VU 阶段分开
  - 将 init 阶段与 VU 阶段分离，可以消除 VU 代码中不相关的计算，从而提高 k6 性能并使测试结果更加可靠。init 代码的一个限制是它无法发出 HTTP 请求。此限制确保 init 阶段在测试中可重现（协议请求的响应是动态且不可预测的）
  - 将 init 阶段与 VU 阶段分离，可以使 VU 阶段的代码更加简洁，更加专注于测试逻辑。
- 3.UV 阶段的默认函数生命周期的理解
  - VU 从头到尾依次执行 default() 函数。一旦 VU 到达函数末尾，它就会循环回到开头并重新执行代码
  - 作为此“重新启动”过程的一部分，k6 会重置 VU。Cookie 被清除，TCP 连接可能被断开（取决于我们的测试配置选项）。

#### Setup 测试前置准备配置阶段 和 teardown 测试后置退出阶段

Setup 和 teardown 阶段是可选的。这两个阶段都是在 VU 阶段之前和之后运行的。

与 default 一样，setup 和 teardown 函数必须是导出函数。但与 default 函数不同，k6 每次测试仅调用 setup 和 teardown 一次。

- setup 在测试开始时调用，在 init 阶段之后但在 VU 阶段之前。
- teardown 在测试结束时、VU 阶段（default 函数）之后调用。
- 与 init 阶段不同，您可以在设置和拆卸阶段调用完整的 k6 API

更多 K6 测试生命周期的内容，请参考官方文档：[https://k6.io/docs/using-k6/test-life-cycle/](https://k6.io/docs/using-k6/test-life-cycle/)

### Scenarios 测试场景

在 K6 的测试脚本中，可以定义多个测试场景，每个场景都可以有自己的配置项，例如 VU 数量、持续时间等。

测试场景可以详细配置 VU 和迭代计划的方式。通过测试场景配置，我们可以在性能测试中对不同的工作负载或流量模式进行更好的根据业务进行自定义。

使用测试场景配置的好处：

- 更简便、更灵活的测试组织方式。您可以在同一个脚本中定义多个测试场景，每个场景可以独立执行不同的 JavaScript 函数。
- 模拟更真实的流量情况。每个测试场景都可以使用不同的虚拟用户（VU）和迭代调度模式，由专门设计的执行器提供支持。
- 并行或顺序工作负载。各个场景相互独立并行运行，尽管可以通过仔细设置每个场景的 startTime 属性使它们看起来像是按顺序运行的。
- 细致入微的结果分析。可以为每个场景设置不同的环境变量和指标标签。

#### 测试场景配置

我们可以使用代码中的 options 对象中的 scenarios 键值来配置具体场景方案。也可以为场景指定任意名称，只要脚本中的每个场景名称都是唯一的即可。

场景配置示例：

```javascript
export const options = {
  scenarios: {
    example_scenario: {
      // 使用的执行器名称
      executor: 'shared-iterations',

      // 常规的场景配置
      startTime: '10s',
      gracefulStop: '5s',
      env: { EXAMPLEVAR: 'testing' },
      tags: { example_tag: 'testing' },

      // 与执行器相关的特殊配置
      vus: 10,
      iterations: 200,
      maxDuration: '10s',
    },
    another_scenario: {
      /*...*/
    },
  },
};
```

#### 测试场景执行器

对于每个 k6 场景，VU（虚拟用户）的工作负载由执行器进行调度。执行器配置测试运行的持续时间、流量是否保持恒定或变化，以及工作负载是由 VU 还是到达率（即开放或关闭模型）建模的。

我们设置的测试场景对象必须定义 executor 属性，并选择其中一个预定义的执行器名称。您选择的执行器将决定 k6 如何对负载进行建模。可选项包括：

- 按迭代次数。
  - shared-iterations 在 VU 之间共享迭代。
  - per-vu-iterations 让每个 VU 运行配置的迭代。

- 按 VU 数量。
  - constant-VUs 以恒定数量发送 VU。
  - ramping-vus 根据您配置的阶段增加 VU 数量。

- 按迭代率。
  - constant-arrival-rate 以恒定速率开始迭代。
  - ramping-arrival-rate 根据您配置的阶段提高迭代率。

除了这些通用场景选项之外，每个执行程序对象还具有特定于其工作负载的其他选项，可以点击[执行者](https://grafana.com/docs/k6/latest/using-k6/scenarios/executors)获取更多

#### 测试场景配置选项

| 选项名称       | 类型   | 描述             | 默认值 |
| -------------- | ------ | ---------------- | ------ |
| executor(必填) | string | 唯一的执行者名称 | -     |
| startTime |  string |  自测试开始以来的时间偏移，此时该场景应开始执行。| "0s"|  
| gracefulStop |  string|  在强行停止迭代之前等待迭代完成执行的时间。要了解更多信息，请阅读优雅停止。|  "30s"|  
|  exec |  string |  要执行的导出 JS 函数的名称。|  "default"|  
|  env |  object|  此场景特定的环境变量。| {}|  
|  tags |  object |  特定于此场景的标签。| {}|  

#### 测试场景示例

测试场景的 demo 脚本 会结合两种场景并按顺序执行：

- shared_iter_scenario 立即启动。10 个 VU 尝试尽快使用 100 次迭代（某些 VU 可能比其他 VU 使用更多迭代）。
- per_vu_scenario 在 10 秒后开始。在这种情况下，十个 VU 每个运行十次迭代。

示例代码如下：

```javascript
import http from 'k6/http';

export const options = {
  scenarios: {
    shared_iter_scenario: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: 100,
      startTime: '0s',
    },
    per_vu_scenario: {
      executor: 'per-vu-iterations',
      vus: 10,
      iterations: 10,
      startTime: '10s',
    },
  },
};

export default function () {
  http.get('https://test.k6.io/');
}
```

运行场景 demo 脚本，可以看到如下结果：

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/zLDexk.png)

观看测试结果，你会发现配置了场景的测试结果中，除了常规的测试结果外，k6 输出将包含有关 demo 场景的 详细结果信息 (shared_iter_scenario 场景和 per_vu_scenario 场景的很详细的指标信息)。

更多关于测试场景的内容，请参考官方文档：[https://k6.io/docs/using-k6/scenarios/](https://k6.io/docs/using-k6/scenarios/)

## 参考文档

- [K6 文档：https://k6.io/docs/](https://k6.io/docs/)
- [k6 官方网站：https://k6.io/](https://k6.io/)
- [K6 性能测试快速启动项目：https://github.com/Automation-Test-Starter/K6-Performance-Test-starter/](https://github.com/Automation-Test-Starter/K6-Performance-Test-starter)
- [K6 性能测试教程：常用功能（1）- HTTP 请求，指标和检查:https://naodeng.com.cn/zh/posts/performance-testing/k6-tutorial-common-functions-1-http-request-metrics-and-checks/](https://naodeng.com.cn/zh/posts/performance-testing/k6-tutorial-common-functions-1-http-request-metrics-and-checks/)
  