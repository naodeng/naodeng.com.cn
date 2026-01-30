import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "gatling 性能测试教程：入门介绍",
  "description": "文章介绍性能测试工具 gatling 的新手入门介绍，环境搭建，如何将官方 demo 跑起来",
  "date": "2023-10-24T09:44:53.000Z",
  "author": "nao.deng",
  "tags": ["Gatling", "Performance Testing"],
  "categories": ["性能测试", "Gatling"],
  "series": ["Gatling 性能测试教程"],
  "cover": "./gatling-tool-intro1-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "gatling-介绍",
    "text": "Gatling 介绍"
  }, {
    "depth": 2,
    "slug": "环境搭建",
    "text": "环境搭建"
  }, {
    "depth": 3,
    "slug": "vscode--gradle--scala-版本",
    "text": "VSCode + Gradle + Scala 版本"
  }, {
    "depth": 4,
    "slug": "准备工作",
    "text": "准备工作"
  }, {
    "depth": 4,
    "slug": "安装插件",
    "text": "安装插件"
  }, {
    "depth": 4,
    "slug": "官方-demo-初始化调试",
    "text": "官方 demo 初始化&调试"
  }, {
    "depth": 3,
    "slug": "vscode--maven--scala-版本",
    "text": "VSCode + Maven + Scala 版本"
  }, {
    "depth": 4,
    "slug": "准备工作-1",
    "text": "准备工作"
  }, {
    "depth": 4,
    "slug": "安装插件-1",
    "text": "安装插件"
  }, {
    "depth": 4,
    "slug": "官方-demo-初始化调试-1",
    "text": "官方 demo 初始化&调试"
  }, {
    "depth": 3,
    "slug": "idea--gradle--scala-版本",
    "text": "IDEA + Gradle + Scala 版本"
  }, {
    "depth": 3,
    "slug": "idea--maven--scala-版本",
    "text": "IDEA + Maven + Scala 版本"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    img: "img",
    input: "input",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "gatling-介绍",
      children: "Gatling 介绍"
    }), "\n", createVNode(_components.p, {
      children: "Gatling 是一个用于性能测试和负载测试的开源工具，特别适用于测试 Web 应用程序。它是一个基于 Scala 编程语言的高性能工具，用于模拟并测量应用程序在不同负载下的性能。"
    }), "\n", createVNode(_components.p, {
      children: "以下是 Gatling 的一些重要特点和优势："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "基于 Scala 编程语言：Gatling 的测试脚本使用 Scala 编写，这使得它具有强大的编程能力，允许用户编写复杂的测试场景和逻辑。"
      }), "\n", createVNode(_components.li, {
        children: "高性能：Gatling 被设计为高性能的负载测试工具。它使用了非阻塞的 I/O 和异步编程模型，能够模拟大量并发用户，从而更好地模拟真实世界中的负载情况。"
      }), "\n", createVNode(_components.li, {
        children: "易于学习和使用：尽管 Gatling 的测试脚本是使用 Scala 编写的，但它的 DSL（领域特定语言）非常简单，容易上手。即使你不熟悉 Scala，也可以快速学会如何创建测试脚本。"
      }), "\n", createVNode(_components.li, {
        children: "丰富的功能：Gatling 提供了丰富的功能，包括请求和响应处理、数据提取、条件断言、性能报告生成等。这些功能使你能够创建复杂的测试场景，并对应用程序的性能进行全面的评估。"
      }), "\n", createVNode(_components.li, {
        children: "多协议支持：除了 HTTP 和 HTTPS，Gatling 还支持其他协议，如 WebSocket，JMS，和 SMTP。这使得它适用于测试各种不同类型的应用程序。"
      }), "\n", createVNode(_components.li, {
        children: "实时结果分析：Gatling 可以在测试运行期间提供实时的性能数据和图形化报告，帮助你快速发现性能问题。"
      }), "\n", createVNode(_components.li, {
        children: "开源和活跃的社区：Gatling 是一个开源项目，拥有一个活跃的社区，不断更新和改进工具。"
      }), "\n", createVNode(_components.li, {
        children: "支持 CI/CD 集成：Gatling 可以与 CI/CD 工具（如 Jenkins）集成，以便在持续集成和持续交付流程中执行性能测试。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "总的来说，Gatling 是一个功能强大的性能测试工具，适用于测试各种类型的应用程序，帮助开发团队识别和解决性能问题，以确保应用程序在生产环境中具有稳定的性能和可伸缩性。"
    }), "\n", createVNode(_components.h2, {
      id: "环境搭建",
      children: "环境搭建"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "由于我是 macbook，后面的介绍几本会以 macbook demo 为例，windows 的同学可以自行参考"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "vscode--gradle--scala-版本",
      children: "VSCode + Gradle + Scala 版本"
    }), "\n", createVNode(_components.h4, {
      id: "准备工作",
      children: "准备工作"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 开发工具：VSCode"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 安装 Gradle 版本>=6.0，我使用的 Gradle 8.44"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 安装 JDK 版本>=8，我使用的 JDK 19"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "安装插件",
      children: "安装插件"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " VSCode 搜索 Scala (Metals) 插件进行安装"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " VSCode 搜索 Gradle for Java 插件进行安装"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "官方-demo-初始化调试",
      children: "官方 demo 初始化&调试"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "前面先会用官方 demo 工程来做初始化和调试，后面再介绍如何自己创建工程"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "克隆官方 demo 工程"
      }), "\n"]
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git@github.com:gatling/gatling-gradle-plugin-demo-scala.git"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "使用 VSCode 打开克隆下来的官方 demo 工程"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "用 VSCode 打开本项目 Terminal 窗口，执行以下命令"
        }), "\n"]
      }), "\n"]
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
            children: "gradle"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " build"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-build.png",
        alt: "readme-build"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行工程中的 demo"
      }), "\n"]
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
            children: "gradle"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " gatlingRun"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "查看命令行运行结果"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report.png",
        alt: "readme-report"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击命令行报告中的 html 报告链接，并使用浏览器打开，即可查看详细的报告信息"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report1.png",
        alt: "readme-report1"
      })
    }), "\n", createVNode(_components.h3, {
      id: "vscode--maven--scala-版本",
      children: "VSCode + Maven + Scala 版本"
    }), "\n", createVNode(_components.h4, {
      id: "准备工作-1",
      children: "准备工作"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 开发工具：VSCode"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 安装 Maven，我使用的 Maven 3.9.5"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " JDK 版本>=8，我使用的 JDK 19"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "安装插件-1",
      children: "安装插件"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " VSCode 搜索 Scala (Metals) 插件进行安装"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " VSCode 搜索 Maven for Java 插件进行安装"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "官方-demo-初始化调试-1",
      children: "官方 demo 初始化&调试"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "前面先会用官方 demo 工程来做初始化和调试，后面再介绍如何自己创建工程"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "克隆官方 demo 工程"
      }), "\n"]
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git@github.com:gatling/gatling-maven-plugin-demo-scala.git"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "使用 VSCode 打开克隆下来的官方 demo 工程"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "用 VSCode 打开本项目 Terminal 窗口，执行以下命令运行工程中的 demo"
        }), "\n"]
      }), "\n"]
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
            children: "mvn"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " gatling:test"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "查看命令行运行结果"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report2.png",
        alt: "readme-report2"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击命令行报告中的 html 报告链接，并使用浏览器打开，即可查看详细的报告信息"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report1.png",
        alt: "readme-report1"
      })
    }), "\n", createVNode(_components.h3, {
      id: "idea--gradle--scala-版本",
      children: "IDEA + Gradle + Scala 版本"
    }), "\n", createVNode(_components.p, {
      children: "与 VSCode 下基本类似，这里就不再赘述了"
    }), "\n", createVNode(_components.p, {
      children: "差异点如下："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "IDEA 搜索 Scala 插件进行安装"
      }), "\n", createVNode(_components.li, {
        children: "新的运行方式：右键选择项目目录下的 Engine.scala 文件，选择 Run ‘Engine’也可以运行 demo（运行过程中需要按回车键确认哦）"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "idea--maven--scala-版本",
      children: "IDEA + Maven + Scala 版本"
    }), "\n", createVNode(_components.p, {
      children: "与 VSCode 下基本类似，这里就不再赘述了"
    }), "\n", createVNode(_components.p, {
      children: "差异点如下："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "IDEA 搜索 Scala 插件进行安装"
      }), "\n", createVNode(_components.li, {
        children: "新的运行方式：右键选择项目目录下的 Engine.scala 文件，选择 Run ‘Engine’也可以运行 demo（运行过程中需要按回车键确认哦）"
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

const url = "src/blog/zh-cn/Performance-Testing/gatling-tool-intro1.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/gatling-tool-intro1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/gatling-tool-intro1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
