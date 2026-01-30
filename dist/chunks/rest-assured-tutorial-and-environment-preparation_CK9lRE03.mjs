import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "REST Assured 接口自动化测试教程：入门介绍和环境搭建准备",
  "description": "包括入门介绍和环境搭建准备。在博客中，读者将了解什么是 REST Assured 以及如何开始使用它来进行 API 测试。教程将涵盖 REST Assured 的基本概念，包括如何设置测试环境，准备所需的工具和资源，以便读者可以开始编写和执行他们自己的 API 测试。",
  "date": "2023-11-01T08:24:49.000Z",
  "author": "nao.deng",
  "tags": ["入门介绍", "环境搭建"],
  "categories": ["接口自动化测试", "REST Assured"],
  "series": ["REST Assured 接口自动化测试教程"],
  "cover": "./rest-assured-tutorial-and-environment-preparation-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "restassured-介绍",
    "text": "RestAssured 介绍"
  }, {
    "depth": 2,
    "slug": "项目结构",
    "text": "项目结构"
  }, {
    "depth": 3,
    "slug": "gradle-构建的版本",
    "text": "Gradle 构建的版本"
  }, {
    "depth": 3,
    "slug": "maven-构建的版本",
    "text": "Maven 构建的版本"
  }, {
    "depth": 2,
    "slug": "项目依赖",
    "text": "项目依赖"
  }, {
    "depth": 2,
    "slug": "语法示例",
    "text": "语法示例"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
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
    children: [createVNode(_components.h2, {
      id: "restassured-介绍",
      children: "RestAssured 介绍"
    }), "\n", createVNode(_components.p, {
      children: "REST Assured 是一种用于测试 RESTful API 的 Java 测试框架，它使开发人员/测试人员能够轻松地编写和执行 API 测试。它的设计旨在使 API 测试变得简单和直观，同时提供了丰富的功能和灵活性。以下是 REST Assured 的一些重要特点和用法："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "发起 HTTP 请求：REST Assured 允许你轻松地构建和发起 HTTP GET、POST、PUT、DELETE 等类型的请求。你可以指定请求的 URL、头部、参数、体等信息。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "链式语法：REST Assured 使用链式语法，使测试代码更加可读和易于编写。你可以按照一种自然的方式描述你的测试用例，而不需要编写大量的代码。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "断言和校验：REST Assured 提供了丰富的校验方法，可以用于验证 API 响应的状态码、响应体、响应头等。你可以根据你的测试需求添加多个断言。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "支持多种数据格式：REST Assured 支持多种数据格式，包括 JSON、XML、HTML、Text 等。你可以使用适当的方法来处理不同格式的响应数据。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "集成 BDD（行为驱动开发）：REST Assured 可以与 BDD 框架（如 Cucumber）结合使用，使你可以更好地描述和管理测试用例。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "模拟 HTTP 服务器：REST Assured 还包括一个模拟 HTTP 服务器的功能，允许你模拟 API 的行为以进行端到端测试。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "可扩展性：REST Assured 可以通过插件和扩展进行定制，以满足特定的测试需求。"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "总的来说，REST Assured 是一个功能强大且易于使用的 API 测试框架，它可以帮助你轻松地进行 RESTful API 测试，并提供了许多工具来验证 API 的正确性和性能。无论是初学者还是有经验的开发人员/测试人员，REST Assured 都是一个非常有价值的工具，可用于快速的上手 API 自动化 测试。"
    }), "\n", createVNode(_components.h2, {
      id: "项目结构",
      children: "项目结构"
    }), "\n", createVNode(_components.h3, {
      id: "gradle-构建的版本",
      children: "Gradle 构建的版本"
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
            children: "- src"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - main"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - (应用的主要源代码)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - api"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        - (REST Assured 测试代码)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - UsersAPITest.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - ProductsAPITest.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        - util"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - TestConfig.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - resources"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - (配置文件、测试数据等)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - (其他项目文件和资源)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- build.gradle (Gradle 项目配置文件)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "在这个示例目录结构中："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "src/test/java/api 目录用于存放 REST Assured 的测试类，每个测试类通常涉及到一个或多个相关的 API 端点的测试。例如，UsersAPITest.java 和 ProductsAPITest.java 可以包含用户管理和产品管理的测试。"
      }), "\n", createVNode(_components.li, {
        children: "src/test/java/util 目录可用于存放测试中共享的工具类，例如用于配置 REST Assured 的 TestConfig.java。"
      }), "\n", createVNode(_components.li, {
        children: "src/test/resources 目录可以包含测试数据文件、配置文件等资源，这些资源可以在测试中使用。"
      }), "\n", createVNode(_components.li, {
        children: "build.gradle 是 gradle 项目的配置文件，它用于定义项目的依赖项、构建配置以及其他项目设置。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "maven-构建的版本",
      children: "Maven 构建的版本"
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
            children: "- src"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - main"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - (应用的主要源代码)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - api"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        - (REST Assured 测试代码)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - UsersAPITest.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - ProductsAPITest.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        - util"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - TestConfig.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - resources"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - (配置文件、测试数据等)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - (其他项目文件和资源)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- pom.xml (Maven 项目配置文件)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "在这个示例目录结构中："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "src/test/java/api 目录用于存放 REST Assured 的测试类，每个测试类通常涉及到一个或多个相关的 API 端点的测试。例如，UsersAPITest.java 和 ProductsAPITest.java 可以包含用户管理和产品管理的测试。"
      }), "\n", createVNode(_components.li, {
        children: "src/test/java/util 目录可用于存放测试中共享的工具类，例如用于配置 REST Assured 的 TestConfig.java。"
      }), "\n", createVNode(_components.li, {
        children: "src/test/resources 目录可以包含测试数据文件、配置文件等资源，这些资源可以在测试中使用。"
      }), "\n", createVNode(_components.li, {
        children: "pom.xml 是 Maven 项目的配置文件，它用于定义项目的依赖项、构建配置以及其他项目设置。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "项目依赖",
      children: "项目依赖"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "JDK 1.8+ ，我使用的 JDK 19"
      }), "\n", createVNode(_components.li, {
        children: "Gradle 6.0+ 或 Maven 3.0+，我使用的 Gradle 8.44 和 Maven 3.9.5"
      }), "\n", createVNode(_components.li, {
        children: "RestAssured 4.3.3+，我使用的是最新的 5.3.1 版本"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "语法示例",
      children: "语法示例"
    }), "\n", createVNode(_components.p, {
      children: "以下是一个简单的 RestAssured 语法示例，演示如何执行一个 GET 请求并验证响应："
    }), "\n", createVNode(_components.p, {
      children: "首先，确保你的 Gradle 或 Maven 项目中已添加了 RestAssured 依赖。"
    }), "\n", createVNode(_components.p, {
      children: "Gradle 依赖："
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
            children: "    implementation "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'io.rest-assured:rest-assured:5.3.1'"
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
      children: "Maven 依赖："
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
            children: "<"
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
            children: "    <"
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
            children: "    <"
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
            children: "    <"
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
            children: "</"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "接下来，创建一个测试类，编写以下代码："
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
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " io.restassured.RestAssured;"
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
            children: " io.restassured.response.Response;"
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
            children: " RestAssuredDemo"
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
            children: "    @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Test"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " testGetRequest"
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
            children: "        // 设置基本 URI，这里以 JSONPlaceholder 为例"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        RestAssured.baseURI "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"https://jsonplaceholder.typicode.com\""
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 发送 GET 请求，并保存响应"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        Response response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " given"
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
            children: "                ."
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
            children: "                ."
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                ."
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
            children: "                ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "extract"
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
            children: "                ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "response"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 打印响应的 JSON 内容"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        System.out."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "println"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Response JSON: \""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "asString"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 验证状态码为 200"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 验证响应中的特定字段值"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "    }"
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
      children: ["上述代码执行了一个 GET 请求到 JSONPlaceholder 的 ", createVNode(_components.code, {
        children: "/posts/1"
      }), " 端点，并验证了响应的状态码和特定字段的值。你可以根据你的需求修改基本 URI 和验证条件。"]
    }), "\n", createVNode(_components.p, {
      children: "在这个示例中，我们使用了 TestNG 测试框架，但你也可以使用其他测试框架，例如 JUnit。确保你的测试类中包含了合适的导入语句，并根据需要进行适当的配置。"
    }), "\n", createVNode(_components.p, {
      children: "这是一个简单的 RestAssured 语法示例，用于执行 GET 请求和验证响应。你可以根据项目的需求和接口的复杂性来构建更复杂的测试用例。"
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

const url = "src/blog/zh-cn/API-Automation-Testing/rest-assured-tutorial-and-environment-preparation.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/rest-assured-tutorial-and-environment-preparation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/rest-assured-tutorial-and-environment-preparation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
