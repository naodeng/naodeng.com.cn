import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "K6 性能测试教程：常用功能（2）- 阈值，测试生命周期和场景",
  "description": "这篇博文深入介绍了 K6 性能测试工具的常用功能，主要聚焦在阈值设置、测试生命周期和场景设计方面。阐述了如何利用 K6 在性能测试中设定合理的阈值，以便有效监测系统的性能表现。同时，探讨了测试生命周期的重要性，以及如何在不同阶段进行有针对性的性能测试。此外，博文还详细解释了 K6 中场景的概念，以及如何根据实际需求设计和配置场景，确保测试全面覆盖各种使用情景。通过本文，读者能够更深入地了解 K6 性能测试工具在项目中的实际应用，提高性能测试的效果和准确性。",
  "date": "2024-01-18T09:10:00.000Z",
  "author": "nao.deng",
  "tags": ["K6", "Performance Testing"],
  "categories": ["性能测试", "k6"],
  "series": ["K6 性能测试教程"],
  "cover": "./K6-tutorial-common-functions-2-thresholds-test-lifecycle-and-scenarios-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "k6-常用功能",
    "text": "K6 常用功能"
  }, {
    "depth": 3,
    "slug": "thresholds-阈值",
    "text": "Thresholds 阈值"
  }, {
    "depth": 4,
    "slug": "什么是阈值",
    "text": "什么是阈值"
  }, {
    "depth": 4,
    "slug": "http-错误和响应持续时间的阈值示例",
    "text": "HTTP 错误和响应持续时间的阈值示例"
  }, {
    "depth": 4,
    "slug": "阈值语法",
    "text": "阈值语法"
  }, {
    "depth": 5,
    "slug": "阈值表达式语法",
    "text": "阈值表达式语法"
  }, {
    "depth": 5,
    "slug": "按类型划分的聚合方法",
    "text": "按类型划分的聚合方法"
  }, {
    "depth": 4,
    "slug": "常用的阈值示例",
    "text": "常用的阈值示例"
  }, {
    "depth": 5,
    "slug": "1在指定持续时间内完成的请求百分比",
    "text": "1.在指定持续时间内完成的请求百分比"
  }, {
    "depth": 5,
    "slug": "2错误率低于-1",
    "text": "2.错误率低于 1%"
  }, {
    "depth": 5,
    "slug": "3单个指标的多个阈值",
    "text": "3.单个指标的多个阈值"
  }, {
    "depth": 5,
    "slug": "4持续时间组的阈值",
    "text": "4.持续时间组的阈值"
  }, {
    "depth": 4,
    "slug": "超过阈值时中止测试",
    "text": "超过阈值时中止测试"
  }, {
    "depth": 3,
    "slug": "test-lifecycle-测试生命周期",
    "text": "Test lifecycle 测试生命周期"
  }, {
    "depth": 4,
    "slug": "生命周期阶段概述",
    "text": "生命周期阶段概述"
  }, {
    "depth": 4,
    "slug": "init-初始化阶段",
    "text": "init 初始化阶段"
  }, {
    "depth": 4,
    "slug": "vu-阶段",
    "text": "VU 阶段"
  }, {
    "depth": 4,
    "slug": "setup-测试前置准备配置阶段-和-teardown-测试后置退出阶段",
    "text": "Setup 测试前置准备配置阶段 和 teardown 测试后置退出阶段"
  }, {
    "depth": 3,
    "slug": "scenarios-测试场景",
    "text": "Scenarios 测试场景"
  }, {
    "depth": 4,
    "slug": "测试场景配置",
    "text": "测试场景配置"
  }, {
    "depth": 4,
    "slug": "测试场景执行器",
    "text": "测试场景执行器"
  }, {
    "depth": 4,
    "slug": "测试场景配置选项",
    "text": "测试场景配置选项"
  }, {
    "depth": 4,
    "slug": "测试场景示例",
    "text": "测试场景示例"
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
    del: "del",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    hr: "hr",
    img: "img",
    li: "li",
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
    }), "\n", createVNode(_components.p, {
      children: ["上一篇博文介绍了", createVNode(_components.a, {
        href: "https://naodeng.com.cn/zh/posts/performance-testing/k6-tutorial-common-functions-1-http-request-metrics-and-checks/",
        children: "K6 性能测试教程：常用功能（1）- HTTP 请求，指标和检查"
      }), " 这一篇文章主要聚焦在阈值设置、测试生命周期和场景设计方面。阐述了如何利用 K6 在性能测试中设定合理的阈值，以便有效监测系统的性能表现。同时，探讨了测试生命周期的重要性，以及如何在不同阶段进行有针对性的性能测试。"]
    }), "\n", createVNode(_components.h3, {
      id: "thresholds-阈值",
      children: "Thresholds 阈值"
    }), "\n", createVNode(_components.h4, {
      id: "什么是阈值",
      children: "什么是阈值"
    }), "\n", createVNode(_components.p, {
      children: ["阈值一般是我们为测试指标定义的通过/失败标准。对于 K6 来说，如果被测系统的性能不满足阈值条件，", createVNode(_components.strong, {
        children: "测试将以失败状态结束"
      }), "。"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "前面提到的检查（check）是用来验证测试结果是否符合预期，check 不通过，测试还会继续，而阈值（threshold）是用来验证测试结果是否符合性能要求。如果不符合，测试将以失败状态结束。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "通常情况下，我们进行性能测试时会使用阈值来编写不同服务或接口的 SLOs(服务级别目标 Service Level Objectives)。"
    }), "\n", createVNode(_components.p, {
      children: "下面为一些阈值的例子："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "不到 1% 的请求返回错误。"
      }), "\n", createVNode(_components.li, {
        children: "95% 的请求响应时间低于 200 毫秒。"
      }), "\n", createVNode(_components.li, {
        children: "99% 的请求响应时间低于 400 毫秒。"
      }), "\n", createVNode(_components.li, {
        children: "特定端点始终在 300 毫秒内响应。"
      }), "\n", createVNode(_components.li, {
        children: "自定义指标（等待时间趋势）的任何条件（大于 300 毫秒）。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "如果后续会写性能自动化测试脚本，那么阈值就是必不可少的。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "给你的测试一个阈值。"
      }), "\n", createVNode(_components.li, {
        children: "自动化执行"
      }), "\n", createVNode(_components.li, {
        children: "设置测试失败警报。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "http-错误和响应持续时间的阈值示例",
      children: "HTTP 错误和响应持续时间的阈值示例"
    }), "\n", createVNode(_components.p, {
      children: "以下示例演示如何使用阈值来设置并评估 HTTP 错误率（http_req_failed 指标）和评估 95% 的请求响应是否在特定持续时间内发生（http_req_duration 指标）："
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    http_req_failed: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'rate<0.01'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "], "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// HTTP 错误率应该低于 1%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    http_req_duration: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'p(95)<200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "], "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 95% 的请求响应应该低于 200ms"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
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
            children: "'https://test-api.k6.io/public/crocodiles/1/'"
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
    }), "\n", createVNode(_components.p, {
      children: "上述的示例中，我们设置了两个阈值："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "HTTP 错误率应该低于 1%。（用到了 http_req_failed 指标）"
      }), "\n", createVNode(_components.li, {
        children: "95% 的请求响应应该低于 200ms。（用到了 http_req_duration 指标）"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "对于上面代码设置的阈值，如果运行的时候，HTTP 错误率低于 1% 和 95% 的请求响应低于 200ms，那么测试就会以成功状态结束，否则任一阈值不满足，测试就将以失败状态结束。"
    }), "\n", createVNode(_components.p, {
      children: "运行该脚本，可以看到如下结果："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/EiPBZ9.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "结果中显示，http_req_failed 阈值通过了，http_req_duration 阈值没有通过，整体测试以失败状态结束。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "如果任何阈值失败，则阈值名称（http_req_failed、http_req_duration）旁边的绿色小复选标记 ✓ 将是 ✗ 并且 k6 将以非零值退出退出代码。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "阈值语法",
      children: "阈值语法"
    }), "\n", createVNode(_components.p, {
      children: "阈值语法是一个字符串，由以下部分组成："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "指标名称（例如 http_req_duration）。"
      }), "\n", createVNode(_components.li, {
        children: "一个或多个条件，用逗号分隔。"
      }), "\n", createVNode(_components.li, {
        children: "每个条件都由一个运算符和一个值组成。"
      }), "\n", createVNode(_components.li, {
        children: ["运算符可以是以下之一：>、>=、<、<=、==、!=、=", createVNode(_components.del, {
          children: "、!"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: "值可以是数字或百分比。"
      }), "\n", createVNode(_components.li, {
        children: "百分比值必须在 0 到 100 之间。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "想要在测试脚本中使用阈值，步骤如下："
    }), "\n", createVNode(_components.p, {
      children: "1.在 options 对象中添加 thresholds 属性，如下所示："
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    /* ... */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "2.在 thresholds 对象中定义阈值表达式（至少一个，可以多个），如下所示："
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    //短格式"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    METRIC_NAME1: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'THRESHOLD_EXPRESSION'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`...`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    //长格式"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    METRIC_NAME2: ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        threshold: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'THRESHOLD_EXPRESSION'"
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
            children: "        abortOnFail: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// boolean"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        delayAbortEval: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10s'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// string"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ], "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// full format"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "阈值表达式支持短格式和长格式，短格式将所有阈值表达式作为字符串放入数组中。长格式将每个阈值放入一个对象中，并具有在失败时中止的额外属性。"
      }), "\n", createVNode(_components.li, {
        children: "上面示例代码中的 METRIC_NAME1 和 THRESHOLD_EXPRESSION 是占位符。正常情况下必须是指标名称和阈值表达式。"
      }), "\n", createVNode(_components.li, {
        children: "示例代码声明配置指标 metric_name1 和 metric_name2 的两个阈值。通过评估阈值后的’threshold_expression’来确定阈值是通过还是失败，."
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "阈值表达式语法",
      children: "阈值表达式语法"
    }), "\n", createVNode(_components.p, {
      children: ["阈值表达式的计算结果为 ", createVNode(_components.code, {
        children: "true"
      }), " 或 ", createVNode(_components.code, {
        children: "false"
      }), " 。阈值表达式必须采用以下格式："]
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
            children: "&"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "lt;aggregation_method"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "&"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "gt; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "&"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "lt;operator"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "&"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "gt; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "&"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "lt;value"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "&"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "gt;"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<aggregation_method>"
        }), "：聚合方法，用于计算指标的值。例如，p(95) 表示 95% 百分位数，而 avg 表示平均值。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<operator>"
        }), "：运算符，用于比较指标的值与阈值表达式中的值。例如，> 表示大于，< 表示小于，== 表示等于。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<value>"
        }), "：阈值表达式中的值。例如，200 表示 200 毫秒，95 表示 95%。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "阈值表达式的一些示例如下："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "avg < 200 // 平均持续时间必须小于 200 毫秒"
      }), "\n", createVNode(_components.li, {
        children: "count >= 500 // 计数必须大于或等于 500"
      }), "\n", createVNode(_components.li, {
        children: "p(90) < 300 // 90% 的样本必须低于 300"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "按类型划分的聚合方法",
      children: "按类型划分的聚合方法"
    }), "\n", createVNode(_components.p, {
      children: "k6 根据类型聚合指标。这些聚合方法构成阈值表达式的一部分。"
    }), "\n", createVNode(_components.p, {
      children: "以下是按类型划分的聚合方法列表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "指标类型"
          }), createVNode(_components.th, {
            children: "聚合方法"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "｜Counter"
          }), createVNode(_components.td, {
            children: "count 计数 和 rate 比率"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "｜Gauge"
          }), createVNode(_components.td, {
            children: "value 具体的值"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "｜Rate"
          }), createVNode(_components.td, {
            children: "rate 比率"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "｜Trend"
          }), createVNode(_components.td, {
            children: "avg 平均值、min 最小值、max 最大值、med 和 p(N) 其中 N 指定阈值百分位值，表示为 0.0 到 100 之间的数字。p(99.99) 表示第 99.99 个百分位。这些值以毫秒为单位。｜"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "一个复杂的聚合方法示例："
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
            children: " { Trend, Rate, Counter, Gauge } "
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " TrendRTT"
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
            children: "'RTT'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " RateContentOK"
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
            children: " Rate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Content OK'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " GaugeContentSize"
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
            children: " Gauge"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'ContentSize'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " CounterErrors"
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
            children: " Counter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Errors'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 计数：不允许超过 99 次返回错误的内容。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'Errors'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'count<100'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 计量：返回的内容必须控制在 4000 字节以下。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'ContentSize'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'value<4000'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 比率：内容必须在 95 次以上达到“OK”。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'Content OK'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'rate>0.95'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 趋势：百分位数、平均值、中位数和最小值必须保持在指定的毫秒范围内。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'RTT'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'p(99)<300'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'p(70)<250'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'avg<200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'med<150'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'min<100'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
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
            children: "'https://test-api.k6.io/public/crocodiles/1/'"
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " contentOK"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'name'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'Bert'"
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
              color: "#E1E4E8"
            },
            children: "  TrendRTT."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res.timings.duration);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  RateContentOK."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(contentOK);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  GaugeContentSize."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res.body."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
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
            children: "  CounterErrors."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "contentOK);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
    }), "\n", createVNode(_components.p, {
      children: "注意：不要通过重复相同的对象键来为同一指标指定多个阈值。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "由于阈值被定义为 JavaScript 对象的属性，因此您不能指定多个具有相同属性名称的阈值。如果要为一个指标设置多个阈值，请使用同一键的数组指定它们。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "常用的阈值示例",
      children: "常用的阈值示例"
    }), "\n", createVNode(_components.p, {
      children: "使用阈值的最快方法是先使用内置指标。以下是一些常用的复制示例"
    }), "\n", createVNode(_components.h5, {
      id: "1在指定持续时间内完成的请求百分比",
      children: "1.在指定持续时间内完成的请求百分比"
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 90% 的请求必须在 400 毫秒内完成。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    http_req_duration: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'p(90) < 400'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
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
            children: "'https://test-api.k6.io/public/crocodiles/1/'"
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
    }), "\n", createVNode(_components.h5, {
      id: "2错误率低于-1",
      children: "2.错误率低于 1%"
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 在整个测试执行过程中，错误率必须低于 1％。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    http_req_failed: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'rate<0.01'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
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
            children: "'https://test-api.k6.io/public/crocodiles/1/'"
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
    }), "\n", createVNode(_components.h5, {
      id: "3单个指标的多个阈值",
      children: "3.单个指标的多个阈值"
    }), "\n", createVNode(_components.p, {
      children: "我们也可以为一项指标应用多个阈值。该阈值对于不同的请求百分位数有不同的持续时间要求。"
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 90％的请求必须在 400 毫秒内完成，95％在 800 毫秒内完成，99.9％在 2 秒内完成。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    http_req_duration: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'p(90) < 400'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'p(95) < 800'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'p(99.9) < 2000'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
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
            children: " res1"
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
            children: "'https://test-api.k6.io/public/crocodiles/1/'"
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
    }), "\n", createVNode(_components.h5, {
      id: "4持续时间组的阈值",
      children: "4.持续时间组的阈值"
    }), "\n", createVNode(_components.p, {
      children: "我们也可以为每个组设置阈值。此代码具有针对单独请求和批量请求的组。对于每个组，都有不同的阈值。"
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
            children: " { group, sleep } "
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'group_duration{group:::individualRequests}'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'avg < 400'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'group_duration{group:::batchRequests}'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'avg < 200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  vus: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
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
            children: "  duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10s'"
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
            children: "};"
          })
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
              color: "#B392F0"
            },
            children: "  group"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'individualRequests'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
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
              color: "#E1E4E8"
            },
            children: "    http."
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
            children: "'https://test-api.k6.io/public/crocodiles/1/'"
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
            children: "    http."
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
            children: "'https://test-api.k6.io/public/crocodiles/2/'"
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
            children: "    http."
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
            children: "'https://test-api.k6.io/public/crocodiles/3/'"
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
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  group"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'batchRequests'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
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
              color: "#E1E4E8"
            },
            children: "    http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "batch"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'GET'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`https://test-api.k6.io/public/crocodiles/1/`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'GET'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`https://test-api.k6.io/public/crocodiles/2/`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'GET'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`https://test-api.k6.io/public/crocodiles/3/`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ]);"
          })
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
      id: "超过阈值时中止测试",
      children: "超过阈值时中止测试"
    }), "\n", createVNode(_components.p, {
      children: ["如果在测试过程中，我们想要在阈值不满足时中止测试，那么可以使用 ", createVNode(_components.code, {
        children: "abortOnFail"
      }), " 属性。"]
    }), "\n", createVNode(_components.p, {
      children: "将 abortOnFail 属性设置为 true。当您设置 abortOnFail 时，一旦阈值失败，测试运行就会停止。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "这里也会有一种特殊情况，测试可能会因为这个阈值的设定导致在测试生成重要数据之前中止。为了防止这些情况，我们可以使用 delayAbortEval 延迟 abortOnFail。在此脚本中，abortOnFail 延迟了十秒。十秒后，如果未达到 p(99) < 10 阈值，测试将中止。"
      }), "\n"]
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  thresholds: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    metric_name: ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        threshold: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'p(99) < 10'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// string"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        abortOnFail: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// boolean"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        delayAbortEval: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10s'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// string"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        /*...*/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ],"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["更多阈值的内容，请参考官方文档：", createVNode(_components.a, {
        href: "https://k6.io/docs/using-k6/thresholds/",
        children: "https://k6.io/docs/using-k6/thresholds/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "test-lifecycle-测试生命周期",
      children: "Test lifecycle 测试生命周期"
    }), "\n", createVNode(_components.p, {
      children: "K6 框架中的测试的生命周期，测试脚本始终都以下面的相同顺序进行执行："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "init"
        }), " 初始化阶段：上下文中的代码准备脚本、加载文件、导入模块并定义测试", createVNode(_components.code, {
          children: "生命周期函数"
        }), "。必需的。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "setup"
        }), " 前置准备设置阶段：设置测试环境并生成数据。可选的。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "VU"
        }), " UV 阶段：代码在 default 或场景函数中运行，运行时间和次数与 options 定义的一样长。必需的。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "teardown"
        }), " 后置测试退出阶段：对数据进行后处理并关闭测试环境。可选的。"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "生命周期函数：除了初始化代码之外，每个阶段都在生命周期函数中发生，这是在 k6 运行时按照特定顺序调用的函数。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "下面是一个完整的测试生命周期示例："
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1. 配置 init 阶段（必需的）"
          })
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
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setup"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 2. 配置 setup 阶段（可选的）"
          })
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
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 3. 配置 VU 阶段（必需的）"
          })
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
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " teardown"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 4. 配置 teardown  阶段（可选的）"
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
    }), "\n", createVNode(_components.h4, {
      id: "生命周期阶段概述",
      children: "生命周期阶段概述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "测试阶段"
          }), createVNode(_components.th, {
            children: "目的"
          }), createVNode(_components.th, {
            children: "示例"
          }), createVNode(_components.th, {
            children: "请求次数"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "init 初始化阶段"
          }), createVNode(_components.td, {
            children: "加载本地文件、导入模块、声明生命周期函数"
          }), createVNode(_components.td, {
            children: "打开 JSON 文件，导入模块"
          }), createVNode(_components.td, {
            children: "每个 VU 一次*"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Setup 前置准备配置阶段"
          }), createVNode(_components.td, {
            children: "设置要处理的数据，在 VU 之间共享数据"
          }), createVNode(_components.td, {
            children: "调用 API 启动测试环境"
          }), createVNode(_components.td, {
            children: "一次"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "VU code VU 代码阶段"
          }), createVNode(_components.td, {
            children: "运行测试函数，通常是 default"
          }), createVNode(_components.td, {
            children: "发出 https 请求，验证响应"
          }), createVNode(_components.td, {
            children: "每次迭代一次，根据测试选项的需要进行多次"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Teardown 测试后置退出阶段"
          }), createVNode(_components.td, {
            children: "设置代码的处理结果，停止测试环境"
          }), createVNode(_components.td, {
            children: "验证设置是否有一定的结果，发送 webhook 通知测试已完成"
          }), createVNode(_components.td, {
            children: "一次 **"
          })]
        })]
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "*"
        }), " 在云脚本中，init 代码可能会被更频繁地调用。", createVNode(_components.code, {
          children: "**"
        }), " 如果 Setup 函数异常结束（例如抛出错误），则不会调用 teardown() 函数。考虑向 setup() 函数添加逻辑以处理错误并确保正确清理。"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "init-初始化阶段",
      children: "init 初始化阶段"
    }), "\n", createVNode(_components.p, {
      children: "K6 测试的必要阶段。这个阶段用来在测试之前准备测试环境和初始化测试条件"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "init 上下文中的代码每个 VU 都会运行一次。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["一般在", createVNode(_components.code, {
        children: "init"
      }), " 阶段可能会做的事情："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "导入模块"
      }), "\n", createVNode(_components.li, {
        children: "从本地文件系统加载文件"
      }), "\n", createVNode(_components.li, {
        children: "为所有 options 配置测试"
      }), "\n", createVNode(_components.li, {
        children: "为 VU、setup 和 teardown 阶段（以及自定义或 handleSummary() 函数）定义生命周期函数。"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "init 上下文中的代码始终首先执行"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "vu-阶段",
      children: "VU 阶段"
    }), "\n", createVNode(_components.p, {
      children: "VU 阶段是测试的核心。在这个阶段，代码在 default 或场景函数中运行，运行时间和次数与 options 定义的一样长。"
    }), "\n", createVNode(_components.p, {
      children: "关于 UV 阶段的 Q&A："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "1.为什么有 VU 阶段？"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "VU 阶段是测试的核心，脚本必须至少包含一个定义 VU 逻辑的场景函数。该函数内部的代码是 VU 代码。"
          }), "\n", createVNode(_components.li, {
            children: "VU 阶段是真正的测试代码，所以 VU 阶段的代码会被多次执行，执行次数由 options 定义的一样长。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "2.为什么把 init 阶段和 VU 阶段分开"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "将 init 阶段与 VU 阶段分离，可以消除 VU 代码中不相关的计算，从而提高 k6 性能并使测试结果更加可靠。init 代码的一个限制是它无法发出 HTTP 请求。此限制确保 init 阶段在测试中可重现（协议请求的响应是动态且不可预测的）"
          }), "\n", createVNode(_components.li, {
            children: "将 init 阶段与 VU 阶段分离，可以使 VU 阶段的代码更加简洁，更加专注于测试逻辑。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "3.UV 阶段的默认函数生命周期的理解"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "VU 从头到尾依次执行 default() 函数。一旦 VU 到达函数末尾，它就会循环回到开头并重新执行代码"
          }), "\n", createVNode(_components.li, {
            children: "作为此“重新启动”过程的一部分，k6 会重置 VU。Cookie 被清除，TCP 连接可能被断开（取决于我们的测试配置选项）。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "setup-测试前置准备配置阶段-和-teardown-测试后置退出阶段",
      children: "Setup 测试前置准备配置阶段 和 teardown 测试后置退出阶段"
    }), "\n", createVNode(_components.p, {
      children: "Setup 和 teardown 阶段是可选的。这两个阶段都是在 VU 阶段之前和之后运行的。"
    }), "\n", createVNode(_components.p, {
      children: "与 default 一样，setup 和 teardown 函数必须是导出函数。但与 default 函数不同，k6 每次测试仅调用 setup 和 teardown 一次。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "setup 在测试开始时调用，在 init 阶段之后但在 VU 阶段之前。"
      }), "\n", createVNode(_components.li, {
        children: "teardown 在测试结束时、VU 阶段（default 函数）之后调用。"
      }), "\n", createVNode(_components.li, {
        children: "与 init 阶段不同，您可以在设置和拆卸阶段调用完整的 k6 API"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["更多 K6 测试生命周期的内容，请参考官方文档：", createVNode(_components.a, {
        href: "https://k6.io/docs/using-k6/test-life-cycle/",
        children: "https://k6.io/docs/using-k6/test-life-cycle/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "scenarios-测试场景",
      children: "Scenarios 测试场景"
    }), "\n", createVNode(_components.p, {
      children: "在 K6 的测试脚本中，可以定义多个测试场景，每个场景都可以有自己的配置项，例如 VU 数量、持续时间等。"
    }), "\n", createVNode(_components.p, {
      children: "测试场景可以详细配置 VU 和迭代计划的方式。通过测试场景配置，我们可以在性能测试中对不同的工作负载或流量模式进行更好的根据业务进行自定义。"
    }), "\n", createVNode(_components.p, {
      children: "使用测试场景配置的好处："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "更简便、更灵活的测试组织方式。您可以在同一个脚本中定义多个测试场景，每个场景可以独立执行不同的 JavaScript 函数。"
      }), "\n", createVNode(_components.li, {
        children: "模拟更真实的流量情况。每个测试场景都可以使用不同的虚拟用户（VU）和迭代调度模式，由专门设计的执行器提供支持。"
      }), "\n", createVNode(_components.li, {
        children: "并行或顺序工作负载。各个场景相互独立并行运行，尽管可以通过仔细设置每个场景的 startTime 属性使它们看起来像是按顺序运行的。"
      }), "\n", createVNode(_components.li, {
        children: "细致入微的结果分析。可以为每个场景设置不同的环境变量和指标标签。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "测试场景配置",
      children: "测试场景配置"
    }), "\n", createVNode(_components.p, {
      children: "我们可以使用代码中的 options 对象中的 scenarios 键值来配置具体场景方案。也可以为场景指定任意名称，只要脚本中的每个场景名称都是唯一的即可。"
    }), "\n", createVNode(_components.p, {
      children: "场景配置示例："
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  scenarios: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    example_scenario: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      // 使用的执行器名称"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      executor: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'shared-iterations'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      // 常规的场景配置"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      startTime: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10s'"
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
            children: "      gracefulStop: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'5s'"
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
            children: "      env: { EXAMPLEVAR: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'testing'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      tags: { example_tag: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'testing'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      // 与执行器相关的特殊配置"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      vus: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
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
            children: "      iterations: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
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
            children: "      maxDuration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10s'"
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
            children: "    another_scenario: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      /*...*/"
          })
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
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "测试场景执行器",
      children: "测试场景执行器"
    }), "\n", createVNode(_components.p, {
      children: "对于每个 k6 场景，VU（虚拟用户）的工作负载由执行器进行调度。执行器配置测试运行的持续时间、流量是否保持恒定或变化，以及工作负载是由 VU 还是到达率（即开放或关闭模型）建模的。"
    }), "\n", createVNode(_components.p, {
      children: "我们设置的测试场景对象必须定义 executor 属性，并选择其中一个预定义的执行器名称。您选择的执行器将决定 k6 如何对负载进行建模。可选项包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "按迭代次数。"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "shared-iterations 在 VU 之间共享迭代。"
          }), "\n", createVNode(_components.li, {
            children: "per-vu-iterations 让每个 VU 运行配置的迭代。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "按 VU 数量。"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "constant-VUs 以恒定数量发送 VU。"
          }), "\n", createVNode(_components.li, {
            children: "ramping-vus 根据您配置的阶段增加 VU 数量。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "按迭代率。"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "constant-arrival-rate 以恒定速率开始迭代。"
          }), "\n", createVNode(_components.li, {
            children: "ramping-arrival-rate 根据您配置的阶段提高迭代率。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["除了这些通用场景选项之外，每个执行程序对象还具有特定于其工作负载的其他选项，可以点击", createVNode(_components.a, {
        href: "https://grafana.com/docs/k6/latest/using-k6/scenarios/executors",
        children: "执行者"
      }), "获取更多"]
    }), "\n", createVNode(_components.h4, {
      id: "测试场景配置选项",
      children: "测试场景配置选项"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "选项名称"
          }), createVNode(_components.th, {
            children: "类型"
          }), createVNode(_components.th, {
            children: "描述"
          }), createVNode(_components.th, {
            children: "默认值"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "executor(必填)"
          }), createVNode(_components.td, {
            children: "string"
          }), createVNode(_components.td, {
            children: "唯一的执行者名称"
          }), createVNode(_components.td, {
            children: "-"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "startTime"
          }), createVNode(_components.td, {
            children: "string"
          }), createVNode(_components.td, {
            children: "自测试开始以来的时间偏移，此时该场景应开始执行。"
          }), createVNode(_components.td, {
            children: "“0s”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "gracefulStop"
          }), createVNode(_components.td, {
            children: "string"
          }), createVNode(_components.td, {
            children: "在强行停止迭代之前等待迭代完成执行的时间。要了解更多信息，请阅读优雅停止。"
          }), createVNode(_components.td, {
            children: "”30s”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "exec"
          }), createVNode(_components.td, {
            children: "string"
          }), createVNode(_components.td, {
            children: "要执行的导出 JS 函数的名称。"
          }), createVNode(_components.td, {
            children: "“default”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "env"
          }), createVNode(_components.td, {
            children: "object"
          }), createVNode(_components.td, {
            children: "此场景特定的环境变量。"
          }), createVNode(_components.td, {})]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "tags"
          }), createVNode(_components.td, {
            children: "object"
          }), createVNode(_components.td, {
            children: "特定于此场景的标签。"
          }), createVNode(_components.td, {})]
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "测试场景示例",
      children: "测试场景示例"
    }), "\n", createVNode(_components.p, {
      children: "测试场景的 demo 脚本 会结合两种场景并按顺序执行："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "shared_iter_scenario 立即启动。10 个 VU 尝试尽快使用 100 次迭代（某些 VU 可能比其他 VU 使用更多迭代）。"
      }), "\n", createVNode(_components.li, {
        children: "per_vu_scenario 在 10 秒后开始。在这种情况下，十个 VU 每个运行十次迭代。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "示例代码如下："
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
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
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
            children: "  scenarios: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    shared_iter_scenario: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      executor: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'shared-iterations'"
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
            children: "      vus: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
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
            children: "      iterations: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
            children: "      startTime: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'0s'"
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
            children: "    per_vu_scenario: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      executor: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'per-vu-iterations'"
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
            children: "      vus: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
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
            children: "      iterations: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
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
            children: "      startTime: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10s'"
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
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
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
            children: "'https://test.k6.io/'"
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
    }), "\n", createVNode(_components.p, {
      children: "运行场景 demo 脚本，可以看到如下结果："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/zLDexk.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "观看测试结果，你会发现配置了场景的测试结果中，除了常规的测试结果外，k6 输出将包含有关 demo 场景的 详细结果信息 (shared_iter_scenario 场景和 per_vu_scenario 场景的很详细的指标信息)。"
    }), "\n", createVNode(_components.p, {
      children: ["更多关于测试场景的内容，请参考官方文档：", createVNode(_components.a, {
        href: "https://k6.io/docs/using-k6/scenarios/",
        children: "https://k6.io/docs/using-k6/scenarios/"
      })]
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
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/performance-testing/k6-tutorial-common-functions-1-http-request-metrics-and-checks/",
          children: "K6 性能测试教程：常用功能（1）- HTTP 请求，指标和检查:"
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

const url = "src/blog/zh-cn/Performance-Testing/K6-tutorial-common-functions-2-thresholds-test-lifecycle-and-scenarios.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/K6-tutorial-common-functions-2-thresholds-test-lifecycle-and-scenarios.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/K6-tutorial-common-functions-2-thresholds-test-lifecycle-and-scenarios.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
