import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "REST Assured 接口自动化测试教程：从 0 到 1 搭建 REST Assured 接口自动化测试项目",
  "description": "深入探讨如何从零开始构建一个 REST Assured 接口自动化测试项目。",
  "date": "2023-11-02T02:03:38.000Z",
  "author": "nao.deng",
  "tags": ["RestAssured", "API Testing"],
  "categories": ["接口自动化测试", "REST Assured"],
  "series": ["REST Assured 接口自动化测试教程"],
  "cover": "./rest-assured-tutorial-building-your-own-project-from-0-to-1-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "从-0-到-1-搭建-rest-assured-接口测试项目",
    "text": "从 0 到 1 搭建 REST Assured 接口测试项目"
  }, {
    "depth": 3,
    "slug": "gradle-版本",
    "text": "Gradle 版本"
  }, {
    "depth": 4,
    "slug": "创建一个空的-gradle-工程",
    "text": "创建一个空的 Gradle 工程"
  }, {
    "depth": 4,
    "slug": "配置项目-buildgradle",
    "text": "配置项目 build.gradle"
  }, {
    "depth": 4,
    "slug": "testngxml-配置",
    "text": "testng.xml 配置"
  }, {
    "depth": 4,
    "slug": "gradle-build-项目并初始化",
    "text": "gradle build 项目并初始化"
  }, {
    "depth": 4,
    "slug": "初始化目录",
    "text": "初始化目录"
  }, {
    "depth": 4,
    "slug": "demo-测试接口",
    "text": "demo 测试接口"
  }, {
    "depth": 5,
    "slug": "get-接口",
    "text": "Get 接口"
  }, {
    "depth": 5,
    "slug": "post-接口",
    "text": "Post 接口"
  }, {
    "depth": 4,
    "slug": "编写脚本",
    "text": "编写脚本"
  }, {
    "depth": 4,
    "slug": "调试脚本",
    "text": "调试脚本"
  }, {
    "depth": 4,
    "slug": "查看测试报告",
    "text": "查看测试报告"
  }, {
    "depth": 5,
    "slug": "命令行报告",
    "text": "命令行报告"
  }, {
    "depth": 5,
    "slug": "testng-html-报告",
    "text": "testng html 报告"
  }, {
    "depth": 3,
    "slug": "maven-版本",
    "text": "Maven 版本"
  }, {
    "depth": 4,
    "slug": "创建一个空的-maven-工程",
    "text": "创建一个空的 Maven 工程"
  }, {
    "depth": 4,
    "slug": "配置项目-pomxml",
    "text": "配置项目 pom.xml"
  }, {
    "depth": 4,
    "slug": "testngxml-配置-1",
    "text": "testng.xml 配置"
  }, {
    "depth": 4,
    "slug": "初始化目录-1",
    "text": "初始化目录"
  }, {
    "depth": 4,
    "slug": "demo-测试接口-1",
    "text": "demo 测试接口"
  }, {
    "depth": 5,
    "slug": "get-接口-1",
    "text": "Get 接口"
  }, {
    "depth": 5,
    "slug": "post-接口-1",
    "text": "Post 接口"
  }, {
    "depth": 4,
    "slug": "编写脚本-1",
    "text": "编写脚本"
  }, {
    "depth": 4,
    "slug": "调试脚本-1",
    "text": "调试脚本"
  }, {
    "depth": 4,
    "slug": "查看测试报告-1",
    "text": "查看测试报告"
  }, {
    "depth": 5,
    "slug": "命令行报告-1",
    "text": "命令行报告"
  }, {
    "depth": 5,
    "slug": "testng-html-报告-1",
    "text": "testng html 报告"
  }, {
    "depth": 2,
    "slug": "更多信息",
    "text": "更多信息"
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
    hr: "hr",
    img: "img",
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
      id: "从-0-到-1-搭建-rest-assured-接口测试项目",
      children: "从 0 到 1 搭建 REST Assured 接口测试项目"
    }), "\n", createVNode(_components.p, {
      children: "REST Assured 支持 Gradle 和 Maven 两种构建工具，你可以根据自己的喜好选择其中一种。下面分别介绍 Gradle 和 Maven 两种构建工具的项目初始化过程。"
    }), "\n", createVNode(_components.p, {
      children: "本项目使用 Gradle 8.44 和 Maven 3.9.5 进行构建，如果你使用的是其他版本，可能会有不同。"
    }), "\n", createVNode(_components.h3, {
      id: "gradle-版本",
      children: "Gradle 版本"
    }), "\n", createVNode(_components.p, {
      children: ["可参考 demo 项目：", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/RestAssured-gradle-demo",
        children: "https://github.com/Automation-Test-Starter/RestAssured-gradle-demo"
      })]
    }), "\n", createVNode(_components.h4, {
      id: "创建一个空的-gradle-工程",
      children: "创建一个空的 Gradle 工程"
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
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " RestAssured-gradle-demo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " RestAssured-gradle-demo"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " init"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "配置项目-buildgradle",
      children: "配置项目 build.gradle"
    }), "\n", createVNode(_components.p, {
      children: "demo 项目引入了 testNG 测试框架，仅供参考"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在项目根目录下创建一个 build.gradle 文件，用于配置项目"
      }), "\n", createVNode(_components.li, {
        children: "示例配置如下，可供参考"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "groovy",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 插件配置"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "plugins {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    id "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'java'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 使用 java 插件"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 仓库资源配置"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "repositories {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  mavenCentral() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 使用 maven中央版本库源"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 项目依赖配置"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "dependencies {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    testImplementation "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'io.rest-assured:rest-assured:5.3.1'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 添加rest-assured依赖"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    testImplementation "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'org.testng:testng:7.8.0'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 添加TestNG测试框架依赖"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    implementation "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'org.uncommons:reportng:1.1.4'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 添加testng 测试报告依赖"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    implementation "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'org.slf4j:slf4j-api:2.0.9'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 添加测试日志依赖"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    implementation "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'org.slf4j:slf4j-simple:2.0.9'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 添加测试日志依赖"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    implementation "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "group"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'com.google.inject'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'guice'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'7.0.0'"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 项目测试配置"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "test {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    reports"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "html"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "required "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " false"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 禁用 gradle 原生HTML 报告生成"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    reports"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "junitXml"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "required "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " false"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 禁用 gradle 原生 JUnit XML 报告生成"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // 告诉 Gradle 使用 TestNG 作为测试框架"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    useTestNG() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        useDefaultListeners "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        suites "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'src/test/resources/testng.xml'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 声明 testng 的 xml 配置文件路径"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    testLogging"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "showStandardStreams "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 将测试日志输出到控制台"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    testLogging"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "events "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"passed\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"skipped\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"failed\""
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 定义测试日志事件类型"
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
        children: ["可 copy 本项目中的 build.gradle 文件内容，更多配置可参考", createVNode(_components.a, {
          href: "https://github.com/rest-assured/rest-assured/wiki/GettingStarted#rest-assured",
          children: "官方文档"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "testngxml-配置",
      children: "testng.xml 配置"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在 src/test目录下创建一个 resources 目录，用于存放测试配置文件"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在 resources 目录下创建一个 testng.xml 文件，用于配置 TestNG 测试框架"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例配置如下，可供参考"
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
      "data-language": "xml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<?"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "xml"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"1.0\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " encoding"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"UTF-8\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "?>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<!"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DOCTYPE"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " suite"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " SYSTEM \"http://testng.org/testng-1.0.dtd\">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "suite"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"restAssured-gradleTestSuite\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " thread-count"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"1\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Demo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"com.example.TestDemo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/> {/* 测试脚本 class */}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> {/* Test */}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "suite"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> {/* Suite */}"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "gradle-build-项目并初始化",
      children: "gradle build 项目并初始化"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "用编辑器打开本项目 Terminal 窗口，执行以下命令确认项目 build 成功"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "初始化完成：完成向导后，Gradle 将在项目目录中生成一个基本的 Gradle 项目结构"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "初始化目录",
      children: "初始化目录"
    }), "\n", createVNode(_components.p, {
      children: ["目录结构可参考 >> ", createVNode(_components.a, {
        href: "#%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84",
        children: "项目结构"
      })]
    }), "\n", createVNode(_components.p, {
      children: "在项目的测试源目录下创建一个新的测试类。默认情况下，Gradle 通常将测试源代码放在 src/test/java 目录中。你可以在该目录下创建测试类的包，并在包中创建新的测试类"
    }), "\n", createVNode(_components.p, {
      children: "创建一个 TestDemo 的测试类，可以按以下结构创建文件"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "src"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    └── java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        └── com"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            └── example"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                └── TestDemo.java"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "demo-测试接口",
      children: "demo 测试接口"
    }), "\n", createVNode(_components.h5, {
      id: "get-接口",
      children: "Get 接口"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["HOST: ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        })]
      }), "\n", createVNode(_components.li, {
        children: "接口地址：/posts/1"
      }), "\n", createVNode(_components.li, {
        children: "请求方式：GET"
      }), "\n", createVNode(_components.li, {
        children: "请求参数：无"
      }), "\n", createVNode(_components.li, {
        children: "请求头：“Content-Type”: “application/json; charset=utf-8”"
      }), "\n", createVNode(_components.li, {
        children: "请求体：无"
      }), "\n", createVNode(_components.li, {
        children: "返回状态码：200"
      }), "\n", createVNode(_components.li, {
        children: "返回头：“Content-Type”: “application/json; charset=utf-8”"
      }), "\n", createVNode(_components.li, {
        children: "返回 body："
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
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
              color: "#79B8FF"
            },
            children: "    \"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
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
              color: "#79B8FF"
            },
            children: "    \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\""
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
              color: "#79B8FF"
            },
            children: "    \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"quia et suscipit"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "suscipit recusandae consequuntur expedita et cum"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "reprehenderit molestiae ut ut quas totam"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "nostrum rerum est autem sunt rem eveniet architecto\""
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
      id: "post-接口",
      children: "Post 接口"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["HOST: ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        })]
      }), "\n", createVNode(_components.li, {
        children: "接口地址：/posts"
      }), "\n", createVNode(_components.li, {
        children: "请求方式：POST"
      }), "\n", createVNode(_components.li, {
        children: "请求参数：无"
      }), "\n", createVNode(_components.li, {
        children: "请求头：“Content-Type”: “application/json; charset=utf-8”"
      }), "\n", createVNode(_components.li, {
        children: "请求体：raw json 格式 body 内容如下："
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
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
              color: "#79B8FF"
            },
            children: "    \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
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
              color: "#79B8FF"
            },
            children: "    \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "返回状态码：201"
      }), "\n", createVNode(_components.li, {
        children: "返回头：“Content-Type”: “application/json; charset=utf-8”"
      }), "\n", createVNode(_components.li, {
        children: "返回 body："
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
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
              color: "#79B8FF"
            },
            children: "    \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
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
              color: "#79B8FF"
            },
            children: "    \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
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
              color: "#79B8FF"
            },
            children: "    \"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "101"
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
      id: "编写脚本",
      children: "编写脚本"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "打开 TestDemo.java 文件，开始编写测试脚本"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例脚本如下，可供参考"
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
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "package"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " com.example;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " org.testng.annotations.Test;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " static"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " io.restassured.RestAssured.given;"
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
              color: "#F97583"
            },
            children: " static"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " org.hamcrest.Matchers.equalTo;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " TestDemo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "description"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"Verify that the Get Post API returns correctly\""
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
              color: "#F97583"
            },
            children: " public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " verifyGetAPI"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Given"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  given"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "baseUri"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://jsonplaceholder.typicode.com\""
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
            children: "             ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "header"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Content-Type\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"application/json\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // When"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "when"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
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
            children: "\"/posts/1\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Then"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "statusCode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // To verify correct value"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
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
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
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
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"quia et suscipit"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "suscipit recusandae consequuntur expedita et cum"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "reprehenderit molestiae ut ut quas totam"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "nostrum rerum est autem sunt rem eveniet architecto\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "description"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"Verify that the publish post API returns correctly\""
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
              color: "#F97583"
            },
            children: " public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " verifyPostAPI"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Given"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  given"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "baseUri"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://jsonplaceholder.typicode.com\""
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
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "header"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Content-Type\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"application/json\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // When"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "when"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"{"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "foo"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "bar"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "userId"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ": 1"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}\""
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
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "post"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Then"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "statusCode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "201"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // To verify correct value"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
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
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "101"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
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
      id: "调试脚本",
      children: "调试脚本"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "打开本项目的 Terminal 窗口，执行以下命令运行测试脚本"
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
            children: " test"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "查看测试报告",
      children: "查看测试报告"
    }), "\n", createVNode(_components.h5, {
      id: "命令行报告",
      children: "命令行报告"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/gradle-report1.png",
        alt: "gradle-test-report1"
      })
    }), "\n", createVNode(_components.h5, {
      id: "testng-html-报告",
      children: "testng html 报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "打开项目 build/reports/tests/test 目录"
      }), "\n", createVNode(_components.li, {
        children: "点击 index.html 文件，查看测试报告"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/gradle-report2.png",
        alt: "gradle-test-report2"
      })
    }), "\n", createVNode(_components.h3, {
      id: "maven-版本",
      children: "Maven 版本"
    }), "\n", createVNode(_components.p, {
      children: ["可参考 demo 项目：", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/RestAssured-maven-demo",
        children: "https://github.com/Automation-Test-Starter/RestAssured-maven-demo"
      })]
    }), "\n", createVNode(_components.h4, {
      id: "创建一个空的-maven-工程",
      children: "创建一个空的 Maven 工程"
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
            children: " archetype:generate"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -DgroupId=com.example"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -DartifactId=RestAssured-maven-demo"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -DarchetypeArtifactId=maven-archetype-quickstart"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -DinteractiveMode=false"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "初始化完成：完成向导后，Maven 将在新建项目目录并生成一个基本的 Maven 项目结构"
    }), "\n", createVNode(_components.h4, {
      id: "配置项目-pomxml",
      children: "配置项目 pom.xml"
    }), "\n", createVNode(_components.p, {
      children: "在 项目中 pom.xml 文件中添加以下内容"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["可 copy 本项目中的 pom.xml 文件内容，更多配置可参考", createVNode(_components.a, {
          href: "https://github.com/rest-assured/rest-assured/wiki/GettingStarted#rest-assured",
          children: "官方文档"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "xml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{/* 依赖配置 */}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependencies"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {/* https://mvnrepository.com/artifact/io.rest-assured/rest-assured */}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">io.rest-assured</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">rest-assured</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">5.3.1</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "scope"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">test</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "scope"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {/* https://mvnrepository.com/artifact/org.testng/testng */}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">org.testng</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">testng</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">7.8.0</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "scope"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">test</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "scope"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependencies"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  {/* 插件配置 */}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">org.apache.maven.plugins</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">maven-surefire-plugin</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">3.2.1</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "suiteXmlFiles"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "suiteXmlFile"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">src/test/resources/testng.xml</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "suiteXmlFile"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "suiteXmlFiles"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "testngxml-配置-1",
      children: "testng.xml 配置"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在 src/test目录下创建一个 resources 目录，用于存放测试配置文件"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在 resources 目录下创建一个 testng.xml 文件，用于配置 TestNG 测试框架"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例配置如下，可供参考"
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
      "data-language": "xml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<?"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "xml"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"1.0\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " encoding"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"UTF-8\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "?>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<!"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DOCTYPE"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " suite"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " SYSTEM \"http://testng.org/testng-1.0.dtd\">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "suite"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"restAssured-gradleTestSuite\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " thread-count"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"1\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Demo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"com.example.TestDemo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/> {/* 测试脚本 class */}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> {/* Test */}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "suite"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> {/* Suite */}"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "初始化目录-1",
      children: "初始化目录"
    }), "\n", createVNode(_components.p, {
      children: ["目录结构可参考 >> ", createVNode(_components.a, {
        href: "#%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84",
        children: "项目结构"
      })]
    }), "\n", createVNode(_components.p, {
      children: "在项目的测试源目录下创建一个新的测试类。默认情况下，Gradle 通常将测试源代码放在 src/test/java 目录中。你可以在该目录下创建测试类的包，并在包中创建新的测试类"
    }), "\n", createVNode(_components.p, {
      children: "创建一个 TestDemo 的测试类，可以按以下结构创建文件"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "src"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    └── java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        └── com"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            └── example"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                └── TestDemo.java"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "demo-测试接口-1",
      children: "demo 测试接口"
    }), "\n", createVNode(_components.h5, {
      id: "get-接口-1",
      children: "Get 接口"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["HOST: ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        })]
      }), "\n", createVNode(_components.li, {
        children: "接口地址：/posts/1"
      }), "\n", createVNode(_components.li, {
        children: "请求方式：GET"
      }), "\n", createVNode(_components.li, {
        children: "请求参数：无"
      }), "\n", createVNode(_components.li, {
        children: "请求头：“Content-Type”: “application/json; charset=utf-8”"
      }), "\n", createVNode(_components.li, {
        children: "请求体：无"
      }), "\n", createVNode(_components.li, {
        children: "返回状态码：200"
      }), "\n", createVNode(_components.li, {
        children: "返回头：“Content-Type”: “application/json; charset=utf-8”"
      }), "\n", createVNode(_components.li, {
        children: "返回 body："
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
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
              color: "#79B8FF"
            },
            children: "    \"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
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
              color: "#79B8FF"
            },
            children: "    \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\""
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
              color: "#79B8FF"
            },
            children: "    \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"quia et suscipit"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "suscipit recusandae consequuntur expedita et cum"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "reprehenderit molestiae ut ut quas totam"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "nostrum rerum est autem sunt rem eveniet architecto\""
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
      id: "post-接口-1",
      children: "Post 接口"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["HOST: ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        })]
      }), "\n", createVNode(_components.li, {
        children: "接口地址：/posts"
      }), "\n", createVNode(_components.li, {
        children: "请求方式：POST"
      }), "\n", createVNode(_components.li, {
        children: "请求参数：无"
      }), "\n", createVNode(_components.li, {
        children: "请求头：“Content-Type”: “application/json; charset=utf-8”"
      }), "\n", createVNode(_components.li, {
        children: "请求体：raw json 格式 body 内容如下："
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
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
              color: "#79B8FF"
            },
            children: "    \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
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
              color: "#79B8FF"
            },
            children: "    \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "返回状态码：201"
      }), "\n", createVNode(_components.li, {
        children: "返回头：“Content-Type”: “application/json; charset=utf-8”"
      }), "\n", createVNode(_components.li, {
        children: "返回 body："
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
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
              color: "#79B8FF"
            },
            children: "    \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
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
              color: "#79B8FF"
            },
            children: "    \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
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
              color: "#79B8FF"
            },
            children: "    \"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "101"
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
      id: "编写脚本-1",
      children: "编写脚本"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "打开 TestDemo.java 文件，开始编写测试脚本"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例脚本如下，可供参考"
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
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "package"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " com.example;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " org.testng.annotations.Test;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " static"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " io.restassured.RestAssured.given;"
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
              color: "#F97583"
            },
            children: " static"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " org.hamcrest.Matchers.equalTo;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " TestDemo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "description"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"Verify that the Get Post API returns correctly\""
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
              color: "#F97583"
            },
            children: " public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " verifyGetAPI"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Given"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  given"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "baseUri"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://jsonplaceholder.typicode.com\""
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
            children: "             ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "header"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Content-Type\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"application/json\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // When"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "when"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
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
            children: "\"/posts/1\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Then"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "statusCode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // To verify correct value"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
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
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
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
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"quia et suscipit"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "suscipit recusandae consequuntur expedita et cum"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "reprehenderit molestiae ut ut quas totam"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "nostrum rerum est autem sunt rem eveniet architecto\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "description"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"Verify that the publish post API returns correctly\""
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
              color: "#F97583"
            },
            children: " public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " verifyPostAPI"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Given"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  given"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "baseUri"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://jsonplaceholder.typicode.com\""
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
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "header"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Content-Type\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"application/json\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // When"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "when"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"{"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "foo"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "bar"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "userId"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ": 1"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}\""
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
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "post"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Then"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "statusCode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "201"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // To verify correct value"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
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
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "101"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
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
      id: "调试脚本-1",
      children: "调试脚本"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "打开本项目的 Terminal 窗口，执行以下命令运行测试脚本"
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
            children: " test"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "查看测试报告-1",
      children: "查看测试报告"
    }), "\n", createVNode(_components.h5, {
      id: "命令行报告-1",
      children: "命令行报告"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/maven-report1.png",
        alt: "maven-test-report1"
      })
    }), "\n", createVNode(_components.h5, {
      id: "testng-html-报告-1",
      children: "testng html 报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "打开项目 target/surefire-reports 目录"
      }), "\n", createVNode(_components.li, {
        children: "点击 index.html 文件，查看测试报告"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/maven-report2.png",
        alt: "maven-test-report2"
      })
    }), "\n", createVNode(_components.h2, {
      id: "更多信息",
      children: "更多信息"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["访问我的个人博客：", createVNode(_components.a, {
          href: "https://naodeng.tech/",
          children: "https://naodeng.tech/"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["我的 QA 自动化快速启动项目页面：", createVNode(_components.a, {
          href: "https://github.com/Automation-Test-Starter",
          children: "https://github.com/Automation-Test-Starter"
        })]
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

const url = "src/blog/zh-cn/API-Automation-Testing/rest-assured-tutorial-building-your-own-project-from-0-to-1.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/rest-assured-tutorial-building-your-own-project-from-0-to-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/rest-assured-tutorial-building-your-own-project-from-0-to-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
