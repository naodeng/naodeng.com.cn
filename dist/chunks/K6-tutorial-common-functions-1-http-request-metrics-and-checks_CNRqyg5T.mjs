import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "K6 性能测试教程：常用功能（1）- HTTP 请求，指标和检查",
  "description": "这篇文章详细介绍了 K6 中的 HTTP 请求（http request）功能，解析了常用的性能指标和检查功能。学会如何使用 K6 进行强大的性能测试，通过 HTTP 请求模拟用户行为，了解性能指标以评估系统响应。文章还深入讲解了如何配置和执行检查，确保性能符合预期标准。无论您是初学者还是经验丰富的性能测试专业人员，这篇教程将为您提供实用知识，助您充分发挥 K6 的性能测试潜力。点击链接，开启高效性能测试之旅！",
  "date": "2024-01-11T09:10:00.000Z",
  "author": "nao.deng",
  "tags": ["K6", "Performance Testing"],
  "categories": ["性能测试", "k6"],
  "series": ["K6 性能测试教程"],
  "cover": "./K6-tutorial-common-functions-1-http-request-metrics-and-checks-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "k6-常用功能",
    "text": "K6 常用功能"
  }, {
    "depth": 3,
    "slug": "http-requests",
    "text": "HTTP Requests"
  }, {
    "depth": 4,
    "slug": "get-请求例子",
    "text": "GET 请求例子"
  }, {
    "depth": 4,
    "slug": "post-请求例子",
    "text": "POST 请求例子"
  }, {
    "depth": 4,
    "slug": "支持的-http-方法",
    "text": "支持的 HTTP 方法"
  }, {
    "depth": 4,
    "slug": "http-请求标签",
    "text": "HTTP 请求标签"
  }, {
    "depth": 3,
    "slug": "metrics-指标",
    "text": "Metrics 指标"
  }, {
    "depth": 4,
    "slug": "k6-内置指标",
    "text": "K6 内置指标"
  }, {
    "depth": 5,
    "slug": "标准内置指标",
    "text": "标准内置指标"
  }, {
    "depth": 5,
    "slug": "http-特定的内置指标",
    "text": "HTTP 特定的内置指标"
  }, {
    "depth": 5,
    "slug": "其他内置指标",
    "text": "其他内置指标"
  }, {
    "depth": 4,
    "slug": "自定义指标",
    "text": "自定义指标"
  }, {
    "depth": 5,
    "slug": "自定义指标-demo-示例",
    "text": "自定义指标 demo 示例"
  }, {
    "depth": 6,
    "slug": "1从导入-k6metrics-模块引入-trend-构造函数",
    "text": "1.从导入 k6/metrics 模块引入 Trend 构造函数"
  }, {
    "depth": 6,
    "slug": "2在-init-上下文中构造一个新的自定义度量-trend-对象",
    "text": "2.在 init 上下文中构造一个新的自定义度量 Trend 对象"
  }, {
    "depth": 6,
    "slug": "3在脚本中使用-add-方法记录指标测量值",
    "text": "3.在脚本中使用 add 方法记录指标测量值"
  }, {
    "depth": 6,
    "slug": "4demo_custom_metricsjs-自定义指标完整代码",
    "text": "4.demo_custom_metrics.js 自定义指标完整代码"
  }, {
    "depth": 6,
    "slug": "5运行-demo_custom_metricsjs-并查看自动化趋势指标",
    "text": "5.运行 demo_custom_metrics.js 并查看自动化趋势指标"
  }, {
    "depth": 3,
    "slug": "checks-检查",
    "text": "Checks 检查"
  }, {
    "depth": 4,
    "slug": "1检查-http-响应状态",
    "text": "1.检查 HTTP 响应状态"
  }, {
    "depth": 4,
    "slug": "2检查-http-响应体",
    "text": "2.检查 HTTP 响应体"
  }, {
    "depth": 4,
    "slug": "3添加多个检查",
    "text": "3.添加多个检查"
  }, {
    "depth": 2,
    "slug": "参考文档",
    "text": "参考文档"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "k6-常用功能",
      children: "K6 常用功能"
    }), "\n", createVNode(_components.h3, {
      id: "http-requests",
      children: "HTTP Requests"
    }), "\n", createVNode(_components.p, {
      children: "使用 K6 进行性能测试的第一步就是定义要测试的 HTTP 请求。"
    }), "\n", createVNode(_components.h4, {
      id: "get-请求例子",
      children: "GET 请求例子"
    }), "\n", createVNode(_components.p, {
      children: ["使用 ", createVNode(_components.code, {
        children: "k6 new"
      }), " 命令创建的 demo 测试脚本中，已经包含了一个简单的 GET 方法 HTTP 请求："]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { sleep } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'https://test.k6.io'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  sleep"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "post-请求例子",
      children: "POST 请求例子"
    }), "\n", createVNode(_components.p, {
      children: "这个 POST 请求例子展示一些复杂的场景的应用（带有电子邮件/密码身份验证负载的 POST 请求）"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'http://test.k6.io/login'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " payload"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " JSON"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "stringify"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    email: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'aaa'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    password: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'bbb'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " params"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    headers: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      'Content-Type'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'application/json'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "post"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(url, payload, params);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["以上内容参考自 ", createVNode(_components.a, {
          href: "https://k6.io/docs/using-k6/http-requests",
          children: "K6 官方文档"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "支持的-http-方法",
      children: "支持的 HTTP 方法"
    }), "\n", createVNode(_components.p, {
      children: "K6 提供的 HTTP 模块能处理各种 HTTP 请求和方法。以下是支持的 HTTP 方法列表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "方法"
          }), createVNode(_components.th, {
            children: "作用"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "batch()"
          }), createVNode(_components.td, {
            children: "并行发出多个 HTTP 请求（例如浏览器往往会这样做）。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "del()"
          }), createVNode(_components.td, {
            children: "发出 HTTP DELETE 请求。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "get()"
          }), createVNode(_components.td, {
            children: "发出 HTTP GET 请求。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "head()"
          }), createVNode(_components.td, {
            children: "发出 HTTP HEAD 请求。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "options()"
          }), createVNode(_components.td, {
            children: "发出 HTTP OPTIONS 请求。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "patch()"
          }), createVNode(_components.td, {
            children: "发出 HTTP PATCH 请求。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "post()"
          }), createVNode(_components.td, {
            children: "发出 HTTP POST 请求。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "put()"
          }), createVNode(_components.td, {
            children: "发出 HTTP PUT 请求。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "request()"
          }), createVNode(_components.td, {
            children: "发出任何类型的 HTTP 请求。"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "http-请求标签",
      children: "HTTP 请求标签"
    }), "\n", createVNode(_components.p, {
      children: "K6 允许为每个 HTTP 请求添加标签，结合标签和分组，可以很方便的在测试结果中更好地组织，分组请求和过滤结果组织分析。"
    }), "\n", createVNode(_components.p, {
      children: "以下为支持的标签列表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "标签"
          }), createVNode(_components.th, {
            children: "作用"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "name"
          }), createVNode(_components.td, {
            children: "请求名称。默认为请求的 URL"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "method"
          }), createVNode(_components.td, {
            children: "请求方法（GET、POST、PUT 等）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "url"
          }), createVNode(_components.td, {
            children: "默认为请求的 URL。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "expected_response"
          }), createVNode(_components.td, {
            children: "默认情况下，200 到 399 之间的响应状态为 true。使用 setResponseCallback 更改默认行为。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "group"
          }), createVNode(_components.td, {
            children: "当请求在组内运行时，标记值是组名称。默认为空。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "scenario"
          }), createVNode(_components.td, {
            children: "当请求在场景内运行时，标记值是场景名称。默认为 default。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "status"
          }), createVNode(_components.td, {
            children: "响应状态"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "HTTP 请求使用 tag 和 group 标签的例子会在后续的 demo 中展示。"
    }), "\n", createVNode(_components.p, {
      children: ["大家也可以参考官方的例子：", createVNode(_components.a, {
        href: "https://grafana.com/docs/k6/latest/using-k6/http-requests/",
        children: "https://grafana.com/docs/k6/latest/using-k6/http-requests/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "metrics-指标",
      children: "Metrics 指标"
    }), "\n", createVNode(_components.p, {
      children: "指标用于衡量系统在测试条件下的性能。默认情况下，k6 会自动收集内置指标。除了内置指标，您还可以创建自定义指标。"
    }), "\n", createVNode(_components.p, {
      children: "指标一般分为四大类："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "计数器（Counters）：对值求和。"
      }), "\n", createVNode(_components.li, {
        children: "计量器（Gauges）：跟踪最小、最大和最新的值。"
      }), "\n", createVNode(_components.li, {
        children: "比率（Rates）：跟踪非零值发生的频率。"
      }), "\n", createVNode(_components.li, {
        children: "趋势（Trends）：计算多个值的统计信息（如均值、模式或百分位数）。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "要使测试断言符合需求标准，可以根据性能测试要求的指标条件编写阈值（表达式的具体内容取决于指标类型）。"
    }), "\n", createVNode(_components.p, {
      children: "为了后续进行筛选指标，可以使用标签和分组，这样可以更好地组织测试结果。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "测试结果输出文件可以以各种摘要和细粒度格式导出指标，具体信息请参阅结果输出文档。（后面测试结果输出文档会详细介绍这一部分）"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "k6-内置指标",
      children: "K6 内置指标"
    }), "\n", createVNode(_components.p, {
      children: "每个 k6 测试执行都会发出内置和自定义指标。每个支持的协议也有其特定的指标。"
    }), "\n", createVNode(_components.h5, {
      id: "标准内置指标",
      children: "标准内置指标"
    }), "\n", createVNode(_components.p, {
      children: "无论测试使用什么协议，k6 始终收集以下指标："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "指标名称"
          }), createVNode(_components.th, {
            children: "指标分类"
          }), createVNode(_components.th, {
            children: "指标描述"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "vus"
          }), createVNode(_components.td, {
            children: "Gauge"
          }), createVNode(_components.td, {
            children: "当前活跃虚拟用户数"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "vus_max"
          }), createVNode(_components.td, {
            children: "Gauge"
          }), createVNode(_components.td, {
            children: "最大可能虚拟用户数（VU 资源已预先分配，以避免扩大负载时影响性能）"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "iterations 迭代"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "VU 执行 JS 脚本（default 函数）的总次数。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "iteration_duration"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "完成一次完整迭代的时间，包括在 setup 和 teardown 中花费的时间。要计算特定场景的迭代函数的持续时间，请尝试此解决方法"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "dropped_iterations"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "由于缺少 VU（对于到达率执行程序）或时间不足（基于迭代的执行程序中的 maxDuration 已过期）而未启动的迭代次数。关于删除迭代"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "data_received"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "接收到的数据量。此示例介绍如何跟踪单个 URL 的数据。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "data_sent"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "发送的数据量。跟踪单个 URL 的数据以跟踪单个 URL 的数据。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "checks"
          }), createVNode(_components.td, {
            children: "Rate"
          }), createVNode(_components.td, {
            children: "设置的检查成功率。"
          })]
        })]
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "指标分类分别为：计数器（Counter）、计量器（Gauges）、比率（Rates）、趋势（Trends）"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "http-特定的内置指标",
      children: "HTTP 特定的内置指标"
    }), "\n", createVNode(_components.p, {
      children: "HTTP 特定的内置指标是仅在 HTTP 请求期间才会生成和收集的指标。其他类型的请求（例如 WebSocket）不会生成这些指标。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "注意：对于所有 http_req_* 指标，时间戳在请求结束时发出。换句话说，时间戳发生在 k6 收到响应正文末尾或请求超时时。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "下表列出了 HTTP 特定的内置指标："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "指标名称"
          }), createVNode(_components.th, {
            children: "指标分类"
          }), createVNode(_components.th, {
            children: "指标描述"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_reqs"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "k6 总共生成了多少个 HTTP 请求。"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_blocked"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: ["在发起请求之前阻塞（等待空闲 TCP 连接槽）所花费的时间。", createVNode(_components.code, {
              children: "float"
            }), "类型"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_connecting"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: ["与远程主机建立 TCP 连接所花费的时间。", createVNode(_components.code, {
              children: "float"
            }), "类型"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_tls_handshaking"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "与远程主机握手 TLS 会话所花费的时间"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_sending"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: ["向远程主机发送数据所花费的时间。", createVNode(_components.code, {
              children: "float"
            }), "类型"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_waiting"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: ["等待远程主机响应所花费的时间（也称为“第一个字节的时间”或“TTFB”）。", createVNode(_components.code, {
              children: "float"
            }), "类型"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_receiving"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: ["从远程主机接收响应数据所花费的时间。", createVNode(_components.code, {
              children: "float"
            }), "类型"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_duration"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: ["请求的总时间。它等于 http_req_sending + http_req_waiting + http_req_receiving（即远程服务器处理请求和响应所需的时间，没有初始 DNS 查找/连接时间）。", createVNode(_components.code, {
              children: "float"
            }), "类型"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_failed"
          }), createVNode(_components.td, {
            children: "Rate"
          }), createVNode(_components.td, {
            children: "根据 setResponseCallback 的失败请求率。"
          })]
        })]
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "指标分类分别为：计数器（Counter）、计量器（Gauges）、比率（Rates）、趋势（Trends）"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "其他内置指标",
      children: "其他内置指标"
    }), "\n", createVNode(_components.p, {
      children: "K6 内置指标除了标准内置指标和 HTTP 特定的内置指标外，还有其他内置指标："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Browser metrics 浏览器指标：", createVNode(_components.a, {
          href: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#browser",
          children: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#browser"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Built-in WebSocket metrics 内置 WebSocket 指标：", createVNode(_components.a, {
          href: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#websockets",
          children: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#websockets"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Built-in gRPC metrics 内置 gRPC 指标：", createVNode(_components.a, {
          href: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#grpc",
          children: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#grpc"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "自定义指标",
      children: "自定义指标"
    }), "\n", createVNode(_components.p, {
      children: "除了系统内建的指标之外，您还可以创建自定义指标。例如，您可以计算与业务逻辑相关的指标，或者利用 Response.timings 对象为特定的一组端点创建指标。"
    }), "\n", createVNode(_components.p, {
      children: "每种指标类型都有一个构造函数，用于生成自定义指标。该构造函数会生成一个声明类型的指标对象。每种类型都有一个 add 方法，用于记录指标测量值。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "注意：必须在 init 上下文中创建自定义指标。这会限制内存并确保 K6 可以验证所有阈值是否评估了定义的指标。"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "自定义指标-demo-示例",
      children: "自定义指标 demo 示例"
    }), "\n", createVNode(_components.p, {
      children: "以下示例演示如何创建等待时间的自定义趋势指标："
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "项目文件中的 demo_custom_metrics.js 文件已经包含了这个 demo 示例，可以直接运行查看结果。"
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "1从导入-k6metrics-模块引入-trend-构造函数",
      children: "1.从导入 k6/metrics 模块引入 Trend 构造函数"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { Trend } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/metrics'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "等待时间趋势指标属于趋势（Trends）指标，所以需要从 k6/metrics 模块引入 Trend 构造函数。"
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "2在-init-上下文中构造一个新的自定义度量-trend-对象",
      children: "2.在 init 上下文中构造一个新的自定义度量 Trend 对象"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " myTrend"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Trend"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'waiting_time'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["在 init 上下文中构造一个新的自定义度量 Trend 对象，脚本中的对象为 myTrend，其指标在结果输出中显示为 ", createVNode(_components.code, {
          children: "waiting_time"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "3在脚本中使用-add-方法记录指标测量值",
      children: "3.在脚本中使用 add 方法记录指标测量值"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'https://test.k6.io'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  myTrend."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res.timings.waiting);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["在脚本中使用 add 方法记录指标测量值，这里使用了 ", createVNode(_components.code, {
          children: "res.timings.waiting"
        }), "，即等待时间。"]
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "4demo_custom_metricsjs-自定义指标完整代码",
      children: "4.demo_custom_metrics.js 自定义指标完整代码"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { Trend } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/metrics'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " myTrend"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Trend"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'waiting_time'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'https://httpbin.test.k6.io'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  myTrend."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res.timings.waiting);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(myTrend.name); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// waiting_time"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h6, {
      id: "5运行-demo_custom_metricsjs-并查看自动化趋势指标",
      children: "5.运行 demo_custom_metrics.js 并查看自动化趋势指标"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "k6"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " demo_custom_metrics.js"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "运行结果如下："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/4tbqVc.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["可以看到，自定义指标 ", createVNode(_components.code, {
          children: "waiting_time"
        }), " 已经在结果输出中显示出来了。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["更多关于自定义指标的内容，请参考官方文档：", createVNode(_components.a, {
        href: "https://k6.io/docs/using-k6/metrics/#custom-metrics",
        children: "https://k6.io/docs/using-k6/metrics/#custom-metrics"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "checks-检查",
      children: "Checks 检查"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "这里也可以理解为断言，即对测试结果进行验证。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "检查用来检验不同测试中的具体测试条件是否正确相应，和我们常规在做其他类型测试时也会对测试结果进行验证，以确保系统是否以期望的内容作出响应。"
    }), "\n", createVNode(_components.p, {
      children: "例如，一个验证可以确保 POST 请求的响应状态为 201，或者响应体的大小是否符合预期。"
    }), "\n", createVNode(_components.p, {
      children: ["检查类似于许多测试框架中称为断言的概念，但是", createVNode(_components.strong, {
        children: "K6 在验证失败并不会中止测试或以失败状态结束。相反，k6 会在测试继续运行时追踪失败验证的比率"
      }), "。"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "每个检查都创建一个速率指标。要使检查中止或导致测试失败，可以将其与阈值结合使用。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "下面会介绍如何使用不同类型的检查，以及如何在测试结果中查看检查结果。"
    }), "\n", createVNode(_components.h4, {
      id: "1检查-http-响应状态",
      children: "1.检查 HTTP 响应状态"
    }), "\n", createVNode(_components.p, {
      children: "K6 的检查非常适用于与 HTTP 请求相关的响应断言。"
    }), "\n", createVNode(_components.p, {
      children: "示例，以下代码片段来检查 HTTP 响应代码为 200："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { check } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'https://httpbin.test.k6.io'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  check"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res, {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'HTTP response code is status 200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " r.status "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "运行该脚本，可以看到如下结果："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/aTXnpy.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "当脚本包含检查时，摘要报告会显示通过了多少测试检查。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "在此示例中，请注意检查“HTTP response code is status 200”在调用时是 100% 成功的。"
    }), "\n", createVNode(_components.h4, {
      id: "2检查-http-响应体",
      children: "2.检查 HTTP 响应体"
    }), "\n", createVNode(_components.p, {
      children: "除了检查 HTTP 响应状态外，还可以检查 HTTP 响应体。"
    }), "\n", createVNode(_components.p, {
      children: "示例，以下代码片段来检查 HTTP 响应体大小为 9591 bytes："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { check } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'https://httpbin.test.k6.io'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  check"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res, {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'HTTP response body size is 9591 bytes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " r.body."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 9591"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "运行该脚本，可以看到如下结果："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/AmbL0E.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "当脚本包含检查时，摘要报告会显示通过了多少测试检查。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "在此示例中，请注意检查“HTTP response body size is 9591 bytes”在调用时是 100% 成功的。"
    }), "\n", createVNode(_components.h4, {
      id: "3添加多个检查",
      children: "3.添加多个检查"
    }), "\n", createVNode(_components.p, {
      children: "有时候我们在一个测试脚本中需要添加多个检查，那可以直接在单​​个 check() 语句中添加多个检查，如下面脚本所示："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { check } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'https://httpbin.test.k6.io'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  check"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res, {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'HTTP response code is status 200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " r.status "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'HTTP response body size is 9591 bytes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " r.body."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 9591"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "运行该脚本，可以看到如下结果："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5yJyBw.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "在此示例中，两个检查都是正常通过的（调用是 100% 成功的）。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "注意：当检查失败时，脚本将继续成功执行，并且不会返回“失败”退出状态。如果您需要根据检查结果使整个测试失败，则必须将检查与阈值结合起来。这在特定环境中特别有用，例如将 k6 集成到 CI 管道中或在安排性能测试时接收警报。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "参考文档",
      children: "参考文档"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/docs/",
          children: "K6 文档："
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/",
          children: "k6 官方网站："
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/Automation-Test-Starter/K6-Performance-Test-starter",
          children: "K6 性能测试快速启动项目："
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["欢迎关注软件测试同学的公众号“", createVNode(_components.strong, {
        children: "软件测试同学"
      }), "”，原创 QA 技术文章第一时间推送。"]
    }), "\n", "\n", "\n", createVNode("div", {
      style: "text-align: center",
      children: createVNode("img", {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg",
        style: "width: 100px;"
      })
    }), "\n", "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/blog/zh-cn/Performance-Testing/K6-tutorial-common-functions-1-http-request-metrics-and-checks.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/K6-tutorial-common-functions-1-http-request-metrics-and-checks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/K6-tutorial-common-functions-1-http-request-metrics-and-checks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
