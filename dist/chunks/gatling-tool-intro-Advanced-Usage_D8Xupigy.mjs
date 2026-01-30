import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "gatling 性能测试教程 - 进阶用法：报告解析和场景设置",
  "description": "文章介绍性能测试工具 gatling 的进阶用法：性能测试报告的解析，不同类型的测试报告报表介绍，不同业务类型下的性能测试场景配置",
  "date": "2023-10-26T10:07:44.000Z",
  "author": "nao.deng",
  "tags": ["Gatling", "Performance Testing"],
  "categories": ["性能测试", "Gatling"],
  "series": ["Gatling 性能测试教程"],
  "cover": "./gatling-tool-intro-Advanced-Usage-cover.png"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "测试报告解析",
    "text": "测试报告解析"
  }, {
    "depth": 4,
    "slug": "总览",
    "text": "总览"
  }, {
    "depth": 5,
    "slug": "总览图",
    "text": "总览图"
  }, {
    "depth": 5,
    "slug": "请求数响应时间分布图",
    "text": "请求数&响应时间分布图"
  }, {
    "depth": 5,
    "slug": "请求标准统计分析图",
    "text": "请求标准统计分析图"
  }, {
    "depth": 5,
    "slug": "活跃用户数统计图",
    "text": "活跃用户数统计图"
  }, {
    "depth": 5,
    "slug": "响应时间分布图",
    "text": "响应时间分布图"
  }, {
    "depth": 5,
    "slug": "响应时间百分位对比图",
    "text": "响应时间百分位对比图"
  }, {
    "depth": 5,
    "slug": "每秒请求数图",
    "text": "每秒请求数图"
  }, {
    "depth": 5,
    "slug": "每秒响应数图",
    "text": "每秒响应数图"
  }, {
    "depth": 4,
    "slug": "单个请求分析报告",
    "text": "单个请求分析报告"
  }, {
    "depth": 3,
    "slug": "性能场景设置",
    "text": "性能场景设置"
  }, {
    "depth": 4,
    "slug": "injection-注入",
    "text": "Injection 注入"
  }, {
    "depth": 5,
    "slug": "什么是-injection",
    "text": "什么是 Injection"
  }, {
    "depth": 5,
    "slug": "常用-injection-场景",
    "text": "常用 Injection 场景"
  }, {
    "depth": 6,
    "slug": "open-model-开放模型场景",
    "text": "Open Model 开放模型场景"
  }, {
    "depth": 6,
    "slug": "closed-model-闭合模型场景",
    "text": "Closed Model 闭合模型场景"
  }, {
    "depth": 5,
    "slug": "meta-dsl-场景",
    "text": "Meta DSL 场景"
  }, {
    "depth": 5,
    "slug": "concurrent-scenarios-并发场景",
    "text": "Concurrent Scenarios 并发场景"
  }, {
    "depth": 5,
    "slug": "其他场景",
    "text": "其他场景"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "测试报告解析",
      children: "测试报告解析"
    }), "\n", createVNode(_components.h4, {
      id: "总览",
      children: "总览"
    }), "\n", createVNode(_components.h5, {
      id: "总览图",
      children: "总览图"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "性能测试执行结束后打开详细的 html 报告，可以看到详细的性能测试报告；\n可通过指标、活跃用户和随时间变化的请求/响应以及分布来分析您的报告"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report1.png",
        alt: "readme-test-report1"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "页面中间标题处显示 Simulation 的名字"
      }), "\n", createVNode(_components.li, {
        children: "左侧的列表展示不同类型的报告菜单，可点击切换"
      }), "\n", createVNode(_components.li, {
        children: "页面中部展示性能测试报告的总览信息，包括：请求总数、成功请求总数、失败请求总数、最短响应时间、最长响应时间、平均响应时间、吞吐量、标准差、百分比分布等。也会展示 gatling 的版本及本次报告运行的时间和时长"
      }), "\n", createVNode(_components.li, {
        children: "全局菜单指向综合统计数据。"
      }), "\n", createVNode(_components.li, {
        children: "详细信息菜单指向每个请求类型的统计信息。"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "请求数响应时间分布图",
      children: "请求数&响应时间分布图"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report2.png",
        alt: "readme-test-report2"
      })
    }), "\n", createVNode(_components.p, {
      children: "此图表展示了响应时间在标准范围内的分布情况\n左侧的列表显示所有的请求以及请求响应的时间分布，红色代表失败的请求\n右边 Number of request 代表用户并发数量，以及各个请求的请求数量及其成功失败状态"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "这些范围可以在 gatling.conf 文件中配置"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "请求标准统计分析图",
      children: "请求标准统计分析图"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report3.png",
        alt: "readme-test-report3"
      })
    }), "\n", createVNode(_components.p, {
      children: "此图表显示了一些标准统计数据，例如全局和每个请求的最小值、最大值、平均值、标准差和百分位数。\nstats 显示了所有请求具体的成功失败情况 OK 代表成功，KO 代表失败，百分比 99th pct 代表对于这一个 API 总的请求中有百分之 99 的请求 response time 是这个数值"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "这些百分位数可以在 gatling.conf 文件中配置。"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "活跃用户数统计图",
      children: "活跃用户数统计图"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report4.png",
        alt: "readme-test-report4"
      })
    }), "\n", createVNode(_components.p, {
      children: "此图表展示了活跃用户数指的是在测试时间段内，正在进行请求的用户数。在测试开始时，活跃用户数为 0。当用户开始发送请求时，活跃用户数开始增加。当用户完成请求时，活跃用户数开始减少。活跃用户数的最大值是在测试期间同时发送请求的用户数。"
    }), "\n", createVNode(_components.h5, {
      id: "响应时间分布图",
      children: "响应时间分布图"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report5.png",
        alt: "readme-test-report5"
      })
    }), "\n", createVNode(_components.p, {
      children: "此图表显示了响应时间的分布，包括请求成功的响应时间和请求失败的响应时间。"
    }), "\n", createVNode(_components.h5, {
      id: "响应时间百分位对比图",
      children: "响应时间百分位对比图"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report6.png",
        alt: "readme-test-report6"
      })
    }), "\n", createVNode(_components.p, {
      children: "此图表显示一段时间内的各种响应时间百分位数，但仅适用于成功的请求。由于失败的请求可能会提前结束或由超时引起，因此它们会对百分位数的计算产生巨大影响。"
    }), "\n", createVNode(_components.h5, {
      id: "每秒请求数图",
      children: "每秒请求数图"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report7.png",
        alt: "readme-test-report7"
      })
    }), "\n", createVNode(_components.p, {
      children: "此图表展示了每秒的请求数，包括成功的请求数和失败的请求数。"
    }), "\n", createVNode(_components.h5, {
      id: "每秒响应数图",
      children: "每秒响应数图"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report8.png",
        alt: "readme-test-report8"
      })
    }), "\n", createVNode(_components.p, {
      children: "此图表展示了每秒的响应数，包括成功的响应数和失败的响应数。"
    }), "\n", createVNode(_components.h4, {
      id: "单个请求分析报告",
      children: "单个请求分析报告"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "可点击报告页面上的 details 菜单切换到 details tab 页面，查看单个请求的详细报告"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report9.png",
        alt: "readme-test-report9"
      })
    }), "\n", createVNode(_components.p, {
      children: "Details 页面主要展示了每个请求的统计数据，与全局报告相似地包括了响应时间分布图，响应时间百分位图，每秒请求数图，每秒响应数图。不同的是最底下有一张图是描述单个请求相对于全局所有请求的响应时间。该图横坐标是每秒全局所有请求数，纵坐标是单个请求的响应时间。"
    }), "\n", createVNode(_components.h3, {
      id: "性能场景设置",
      children: "性能场景设置"
    }), "\n", createVNode(_components.h4, {
      id: "injection-注入",
      children: "Injection 注入"
    }), "\n", createVNode(_components.h5, {
      id: "什么是-injection",
      children: "什么是 Injection"
    }), "\n", createVNode(_components.p, {
      children: "在 Gatling 性能测试中，“Injection”是指将虚拟用户（或负载）引入系统的一种方式。它定义了模拟用户如何被引入测试场景，包括用户的数量、速率和方式。Injection 是 Gatling 中用于控制负载和并发度的关键概念，允许你模拟不同的用户行为和负载模型。"
    }), "\n", createVNode(_components.p, {
      children: "用户注入配置文件的定义是通过 injectOpen 和 injectClosed 方法（Scala 中的 inject）完成的。此方法将按顺序处理的注入步骤序列作为参数。每个步骤都定义了一组用户，以及如何将这些用户注入到场景中。"
    }), "\n", createVNode(_components.p, {
      children: ["官网更多介绍：", createVNode(_components.a, {
        href: "https://gatling.io/docs/gatling/reference/current/core/injection/",
        children: "https://gatling.io/docs/gatling/reference/current/core/injection/"
      })]
    }), "\n", createVNode(_components.h5, {
      id: "常用-injection-场景",
      children: "常用 Injection 场景"
    }), "\n", createVNode(_components.h6, {
      id: "open-model-开放模型场景",
      children: "Open Model 开放模型场景"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scn.inject("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    nothingFor("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    atOnceUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    rampUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    constantUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    constantUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").randomized, "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 5"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    rampUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").to("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".minutes), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 6"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    rampUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").to("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".minutes).randomized, "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 7"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    stressPeakUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ).protocols(httpProtocol)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "nothingFor(duration)：设置一段停止的时间，这段时间什么都不做"
      }), "\n", createVNode(_components.li, {
        children: "atOnceUsers(nbUsers)：立即注入一定数量的虚拟用户"
      }), "\n", createVNode(_components.li, {
        children: "rampUsers(nbUsers) during(duration)：在指定时间内，设置一定数量逐步注入的虚拟用户"
      }), "\n", createVNode(_components.li, {
        children: "constantUsersPerSec(rate) during(duration)：定义一个在每秒钟恒定的并发用户数，持续指定的时间"
      }), "\n", createVNode(_components.li, {
        children: "constantUsersPerSec(rate) during(duration) randomized：定义一个在每秒钟围绕指定并发数随机增减的并发，持续指定时间"
      }), "\n", createVNode(_components.li, {
        children: "rampUsersPerSec(rate1) to (rate2) during(duration)：定义一个并发数区间，运行指定时间，并发增长的周期是一个规律的值"
      }), "\n", createVNode(_components.li, {
        children: "rampUsersPerSec(rate1) to(rate2) during(duration) randomized：定义一个并发数区间，运行指定时间，并发增长的周期是一个随机的值"
      }), "\n", createVNode(_components.li, {
        children: ["stressPeakUsers(nbUsers).during(duration) ：按照拉伸到给定持续时间的", createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Heaviside_step_function",
          children: "阶跃函数"
        }), "的平滑近似注入给定数量的用户。"]
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "closed-model-闭合模型场景",
      children: "Closed Model 闭合模型场景"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scn.inject("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    constantConcurrentUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    rampConcurrentUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").to("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "constantConcurrentUsers(nbUsers).during(duration) ：注入以使系统中的并发用户数恒定"
      }), "\n", createVNode(_components.li, {
        children: "rampConcurrentUsers(fromNbUsers).to(toNbUsers).during(duration) ：注入，使系统中的并发用户数从一个数字线性增加到另一个数字"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "meta-dsl-场景",
      children: "Meta DSL 场景"
    }), "\n", createVNode(_components.p, {
      children: "“Meta DSL”是一种特殊的领域特定语言（DSL），用于描述性能测试场景的元数据（metadata）和全局配置。Meta DSL 允许你定义性能测试中的一些全局设置和参数，以影响整个测试过程，而不是特定于某个场景。"
    }), "\n", createVNode(_components.p, {
      children: "可以使用 Meta DSL 的元素以更简单的方式编写测试。如果您想要链接级别和斜坡以达到应用程序的极限（有时称为容量负载测试的测试），您可以使用常规 DSL 手动完成，并使用 map 和 flatMap 进行循环。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "incrementUsersPerSec"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   // 生成一个开放的工作量注入配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 每秒分别有 10、15、20、25 和 30 个用户到达"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 每个级别持续 10 秒"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 每级持续 10 秒"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scn.inject("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    incrementUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5.0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .times("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .eachLevelLasting("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .separatedByRampsLasting("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .startingFrom("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Double"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  )"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "incrementConcurrentUsers"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 生成一个封闭的工作负载注入配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 并发用户分别为 10、15、20、25 和 30 级"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 每个级别持续 10 秒"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 每级持续 10 秒"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scn.inject("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    incrementConcurrentUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .times("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .eachLevelLasting("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .separatedByRampsLasting("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .startingFrom("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Int"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "incrementUsersPerSec 用于开放式工作负载，incrementConcurrentUsers 用于封闭式工作负载（用户数/秒与并发用户数）。"
    }), "\n", createVNode(_components.p, {
      children: "separatedByRampsLasting 和 startingFrom 都是可选的。如果您不指定斜坡，测试完成后就会立即从一个级别跳到另一个级别。如果您不指定启动用户数，测试将从 0 个并发用户或每秒 0 个用户开始，并立即进入下一步。"
    }), "\n", createVNode(_components.h5, {
      id: "concurrent-scenarios-并发场景",
      children: "Concurrent Scenarios 并发场景"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scenario1.inject(injectionProfile1),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scenario2.inject(injectionProfile2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "您可以在同一个 setUp 块中配置多个场景同时启动并并发执行。"
    }), "\n", createVNode(_components.h5, {
      id: "其他场景",
      children: "其他场景"
    }), "\n", createVNode(_components.p, {
      children: ["查看官网介绍：", createVNode(_components.a, {
        href: "https://gatling.io/docs/gatling/reference/current/core/injection/",
        children: "https://gatling.io/docs/gatling/reference/current/core/injection/"
      })]
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

const url = "src/blog/zh-cn/Performance-Testing/gatling-tool-intro-Advanced-Usage.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/gatling-tool-intro-Advanced-Usage.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/gatling-tool-intro-Advanced-Usage.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
