import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Bruno 接口自动化测试教程：从 0 到 1 搭建 Bruno 接口自动化测试项目",
  "description": "这篇博文是 Bruno 接口自动化测试教程，从零开始搭建 Bruno 接口自动化测试项目。文章详细指导读者如何建立测试项目的基础结构，配置环境，以及编写第一个接口测试用例。通过这个教程，读者能够逐步了解 Bruno 框架的使用方法，从零到一地构建起完整的接口自动化测试项目，提高测试效率和可维护性。",
  "date": "2024-01-23T09:58:14.000Z",
  "author": "nao.deng",
  "tags": ["Bruno", "API Testing"],
  "categories": ["接口自动化测试", "Bruno"],
  "series": ["Bruno 接口自动化测试教程"],
  "cover": "./bruno-tutorial-building-your-own-project-from-0-to-1-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "写在前面",
    "text": "写在前面"
  }, {
    "depth": 3,
    "slug": "为什么不用-postman-和-insomnia",
    "text": "为什么不用 postman 和 insomnia"
  }, {
    "depth": 3,
    "slug": "为什么选择-bruno",
    "text": "为什么选择 Bruno"
  }, {
    "depth": 2,
    "slug": "从-0-到-1-搭建-bruno-接口自动化测试项目",
    "text": "从 0 到 1 搭建 Bruno 接口自动化测试项目"
  }, {
    "depth": 3,
    "slug": "项目结构",
    "text": "项目结构"
  }, {
    "depth": 3,
    "slug": "项目搭建准备",
    "text": "项目搭建准备"
  }, {
    "depth": 4,
    "slug": "新建项目文件夹",
    "text": "新建项目文件夹"
  }, {
    "depth": 4,
    "slug": "项目初始化",
    "text": "项目初始化"
  }, {
    "depth": 4,
    "slug": "安装-bruno-cli-依赖",
    "text": "安装 Bruno CLI 依赖"
  }, {
    "depth": 3,
    "slug": "使用-bruno-编写接口测试用例",
    "text": "使用 Bruno 编写接口测试用例"
  }, {
    "depth": 4,
    "slug": "新建测试用例目录",
    "text": "新建测试用例目录"
  }, {
    "depth": 4,
    "slug": "新建-get-请求测试用例",
    "text": "新建 Get 请求测试用例"
  }, {
    "depth": 4,
    "slug": "给-get-请求添加测试断言",
    "text": "给 Get 请求添加测试断言"
  }, {
    "depth": 5,
    "slug": "使用-bruno-自带的-assert-编写测试断言",
    "text": "使用 Bruno 自带的 Assert 编写测试断言"
  }, {
    "depth": 5,
    "slug": "使用-javascript-编写测试断言",
    "text": "使用 JavaScript 编写测试断言"
  }, {
    "depth": 4,
    "slug": "新建-post-请求测试用例",
    "text": "新建 Post 请求测试用例"
  }, {
    "depth": 4,
    "slug": "给-post-请求添加测试断言",
    "text": "给 Post 请求添加测试断言"
  }, {
    "depth": 5,
    "slug": "使用-bruno-自带的-assert-编写-post-请求测试断言",
    "text": "使用 Bruno 自带的 Assert 编写 Post 请求测试断言"
  }, {
    "depth": 5,
    "slug": "使用-javascript-编写-post-请求测试断言",
    "text": "使用 JavaScript 编写 Post 请求测试断言"
  }, {
    "depth": 4,
    "slug": "本地运行两个测试用例",
    "text": "本地运行两个测试用例"
  }, {
    "depth": 4,
    "slug": "环境变量配置",
    "text": "环境变量配置"
  }, {
    "depth": 5,
    "slug": "新建环境变量配置文件",
    "text": "新建环境变量配置文件"
  }, {
    "depth": 5,
    "slug": "在测试用例中使用环境变量",
    "text": "在测试用例中使用环境变量"
  }, {
    "depth": 5,
    "slug": "调试环境变量",
    "text": "调试环境变量"
  }, {
    "depth": 4,
    "slug": "命令行运行测试用例",
    "text": "命令行运行测试用例"
  }, {
    "depth": 5,
    "slug": "前置检查",
    "text": "前置检查"
  }, {
    "depth": 5,
    "slug": "命令行调试运行测试用例",
    "text": "命令行调试运行测试用例"
  }, {
    "depth": 4,
    "slug": "输出-json-格式报告",
    "text": "输出 json 格式报告"
  }, {
    "depth": 4,
    "slug": "集成到-cicd-流程",
    "text": "集成到 CI/CD 流程"
  }, {
    "depth": 2,
    "slug": "参考资料",
    "text": "参考资料"
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
      id: "写在前面",
      children: "写在前面"
    }), "\n", createVNode(_components.h3, {
      id: "为什么不用-postman-和-insomnia",
      children: "为什么不用 postman 和 insomnia"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "关于 Postman：Postman 于 2023 年 5 月宣布将逐步淘汰具有离线功能的 Scratch Pad 模型，大部分功能将转移到云端，这意味着用户必须登录才能使用 Postman。（不登录的情况下可使用的功能有限，登录的话不确认是否会向云端上传我们测试使用的接口信息，安全性不可预估）"
      }), "\n", createVNode(_components.li, {
        children: "关于 Insomnia：Insomnia 在 2023 年 9 月 28 日发布的 8.0 版本中开始加重了对云端的依赖，用户必须登录才能使用全功能的 Insomnia。现有的 Scratch Pad 功能有限（不登录的情况下可使用的功能有限，登录的话不确认是否会向云端上传我们测试使用的接口信息，安全性不可预估）"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "所以需要一个将 API 工作区数据与第三方服务器隔离的替代方案，Bruno 就是可行的替代方案之一。"
    }), "\n", createVNode(_components.h3, {
      id: "为什么选择-bruno",
      children: "为什么选择 Bruno"
    }), "\n", createVNode(_components.p, {
      children: ["官方说明：", createVNode(_components.a, {
        href: "https://github.com/usebruno/bruno/discussions/269",
        children: "https://github.com/usebruno/bruno/discussions/269"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["与 postman 的对比：", createVNode(_components.a, {
        href: "https://www.usebruno.com/compare/bruno-vs-postman",
        children: "https://www.usebruno.com/compare/bruno-vs-postman"
      })]
    }), "\n", createVNode(_components.p, {
      children: "开源，MIT License"
    }), "\n", createVNode(_components.p, {
      children: "客户端全平台支持 (Mac/linux/Windows)"
    }), "\n", createVNode(_components.p, {
      children: "离线客户端，无云同步功能计划"
    }), "\n", createVNode(_components.p, {
      children: "支持 Postman/insomina 脚本导入（只能导入 API 请求脚本，无法导入测试脚本）"
    }), "\n", createVNode(_components.p, {
      children: ["社区相对活跃，", createVNode(_components.a, {
        href: "https://github.com/usebruno/bruno/discussions/384",
        children: "产品开发路线图"
      }), "清晰"]
    }), "\n", createVNode(_components.h2, {
      id: "从-0-到-1-搭建-bruno-接口自动化测试项目",
      children: "从 0 到 1 搭建 Bruno 接口自动化测试项目"
    }), "\n", createVNode(_components.p, {
      children: "这篇文章会更聚焦如何使用 Bruno 提供的功能，从零开始搭建一个接口自动化测试项目。"
    }), "\n", createVNode(_components.p, {
      children: ["Bruno 程序的安装和基本使用请参考：", createVNode(_components.a, {
        href: "https://github.com/naodeng/Bruno-API-Test-Starter/blob/main/README_ZH.md",
        children: "postman 替换工具 bruno 使用介绍"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "项目结构",
      children: "项目结构"
    }), "\n", createVNode(_components.p, {
      children: "Bruno 接口自动化测试项目的基础结构如下："
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
            children: "Bruno-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── README.md // 项目说明文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── package.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── package-lock.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Testcase // 测试用例文件夹"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo1.bru // 测试用例文件 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo2.bru // 测试用例文件 2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── bruno.json // bruno COLLECTION 配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── environments // 不同测试环境文件夹"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│       └── dev.bru // 测试环境配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── Report // 测试报告文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│       └── report.json //json 格式报告文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── .gitignore"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── node_modules // 项目依赖"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "项目搭建准备",
      children: "项目搭建准备"
    }), "\n", createVNode(_components.h4, {
      id: "新建项目文件夹",
      children: "新建项目文件夹"
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
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Bruno-demo"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "项目初始化",
      children: "项目初始化"
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
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 进入项目文件夹下"
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
            children: " Bruno-demo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " nodejs"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 项目初始化"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " init"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -y"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "安装-bruno-cli-依赖",
      children: "安装 Bruno CLI 依赖"
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
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 安装"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Bruno"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " CLI"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @usebruno/cli"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --save-dev"
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Bruno CLI 是 Bruno 官方提供的命令行工具，可以通过简单的命令行命令轻松运行 API 集合。我们可以更轻松地在不同环境中测试 API、自动化测试流程，并将 API 测试与持续集成和部署工作流程集成。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "使用-bruno-编写接口测试用例",
      children: "使用 Bruno 编写接口测试用例"
    }), "\n", createVNode(_components.h4, {
      id: "新建测试用例目录",
      children: "新建测试用例目录"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行 Bruno app 到首页"
      }), "\n", createVNode(_components.li, {
        children: ["新建名称为 Testcase 的 COLLECTION，且选择 COLLECTION 的目录为上面创建的项目文件夹\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/bkIvUi.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "新建-get-请求测试用例",
      children: "新建 Get 请求测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击 Testcase 的 COLLECTION 下的 ADD REQUEST 按钮，新建一个 GET 请求"
      }), "\n", createVNode(_components.li, {
        children: ["输入请求名称为 GetDemo，输入请求地址为 ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/XYeiXB.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "给-get-请求添加测试断言",
      children: "给 Get 请求添加测试断言"
    }), "\n", createVNode(_components.h5, {
      id: "使用-bruno-自带的-assert-编写测试断言",
      children: "使用 Bruno 自带的 Assert 编写测试断言"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "点击 GetDemo 请求下的 Assert 按钮，进入测试断言编辑页面"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["输入断言 1：响应状态码等于 200.断言 2：响应体中的 title 包含 provident\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/z86CB2.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["调试断言：点击右上角的 Run 按钮，运行断言，查看断言结果是否符合预期\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/YkAbiG.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "使用-javascript-编写测试断言",
      children: "使用 JavaScript 编写测试断言"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击 GetDemo 请求下的 Tests 按钮，进入测试断言脚本编辑页面"
      }), "\n", createVNode(_components.li, {
        children: "输入脚本代码，断言 1：响应状态码等于 200.断言 2：响应体中的 title 包含 provident"
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
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"res.status should be 200\""
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
            children: " data"
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
            children: "getBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"res.body should be correct\""
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
            children: " data"
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
            children: "getBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "contains"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'provident'"
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
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ubyRwj.png",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["调试断言：点击右上角的 Run 按钮，运行断言，查看断言结果是否符合预期\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3pAMDd.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "新建-post-请求测试用例",
      children: "新建 Post 请求测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "点击 Testcase 的 COLLECTION 下的 ADD REQUEST 按钮，新建一个 POST 请求"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["输入请求名称为 PostDemo，输入请求地址为 ", createVNode(_components.a, {
            href: "https://jsonplaceholder.typicode.com/posts",
            children: "https://jsonplaceholder.typicode.com/posts"
          }), "\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3IP5B4.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "点击新建的 PostDemo 请求下的 Body 按钮，进入请求体编辑页面"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "选择 Body 类型为 JSON，输入请求体内容为"
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
            children: "\"title\""
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
            children: "\"body\""
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
            children: "\"userId\""
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
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/psbGLD.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "给-post-请求添加测试断言",
      children: "给 Post 请求添加测试断言"
    }), "\n", createVNode(_components.h5, {
      id: "使用-bruno-自带的-assert-编写-post-请求测试断言",
      children: "使用 Bruno 自带的 Assert 编写 Post 请求测试断言"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "点击 PostDemo 请求下的 Assert 按钮，进入测试断言编辑页面"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["输入断言 1：响应状态码等于 201.断言 2：响应体中的 title 等于 foo\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/oN8D5G.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["调试断言：点击右上角的 Run 按钮，运行断言，查看断言结果是否符合预期\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/HKb4fn.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "使用-javascript-编写-post-请求测试断言",
      children: "使用 JavaScript 编写 Post 请求测试断言"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击 PostDemo 请求下的 Tests 按钮，进入测试断言脚本编辑页面"
      }), "\n", createVNode(_components.li, {
        children: "输入脚本代码，断言 1：响应状态码等于 201.断言 2：响应体中的 title 等于 foo"
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
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"res.status should be 200\""
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
            children: " data"
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
            children: "getBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
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
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"res.body should be correct\""
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
            children: " data"
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
            children: "getBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'foo'"
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
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["调试断言：点击右上角的 Run 按钮，运行断言，查看断言结果是否符合预期\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/mkKIsE.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "本地运行两个测试用例",
      children: "本地运行两个测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击 Testcase 的 COLLECTION 下的 Run 按钮，运行所有测试用例"
      }), "\n", createVNode(_components.li, {
        children: "确认运行结果是否符合预期"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/CvfPIn.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "至此，两个接口的测试用例和断言已经编写完成"
    }), "\n", createVNode(_components.h4, {
      id: "环境变量配置",
      children: "环境变量配置"
    }), "\n", createVNode(_components.p, {
      children: ["通过查看上面两个测试用例的运行结果，我们发现两个测试用例的请求地址都是 ", createVNode(_components.code, {
        children: "https://jsonplaceholder.typicode.com"
      }), "，如果我们需要在不同的测试环境中运行这两个测试用例，那么我们需要修改两个测试用例的请求地址，这样的话，如果测试用例很多，那么修改起来就很麻烦。Bruno 提供了环境变量的功能，我们可以将测试用例中的请求地址配置为环境变量，这样的话，我们只需要在不同的测试环境中配置不同的环境变量，就可以实现在不同的测试环境中运行测试用例。"]
    }), "\n", createVNode(_components.h5, {
      id: "新建环境变量配置文件",
      children: "新建环境变量配置文件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击 Testcase 的 COLLECTION 下的 Environments 按钮，进入环境变量配置页面"
      }), "\n", createVNode(_components.li, {
        children: "点击右上角的 ADD ENVIRONMENT 按钮，新建一个环境变量配置文件，输入名称为 dev，点击右上角的 SAVE 按钮保存配置文件"
      }), "\n", createVNode(_components.li, {
        children: "点击新建的 dev 环境变量配置文件，进入环境变量配置页面"
      }), "\n", createVNode(_components.li, {
        children: ["点击右上角的 ADD VARIABLE 按钮，新建一个环境变量，输入名称为 host，输入值为 ", createVNode(_components.code, {
          children: "https://jsonplaceholder.typicode.com"
        }), "，点击右上角的 SAVE 按钮保存环境变量"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/YDKvOr.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h5, {
      id: "在测试用例中使用环境变量",
      children: "在测试用例中使用环境变量"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击 Testcase 的 COLLECTION 下的 GetDemo 请求，进入 GetDemo 请求编辑页面"
      }), "\n", createVNode(_components.li, {
        children: ["将 GetDemo 请求的请求地址修改为 ", createVNode(_components.code, {
          children: "&#123;&#123;host&#125;&#125;/posts/1"
        }), "，点击右上角的 SAVE 按钮保存 GetDemo 请求"]
      }), "\n", createVNode(_components.li, {
        children: "点击 Testcase 的 COLLECTION 下的 PostDemo 请求，进入 PostDemo 请求编辑页面"
      }), "\n", createVNode(_components.li, {
        children: ["将 PostDemo 请求的请求地址修改为 ", createVNode(_components.code, {
          children: "&#123;&#123;host&#125;&#125;/posts"
        }), "，点击右上角的 SAVE 按钮保存 PostDemo 请求"]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "调试环境变量",
      children: "调试环境变量"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "点击 Testcase 的 COLLECTION 下的 Environments 按钮，选择 dev 环境变量"
      }), "\n", createVNode(_components.li, {
        children: "点击右上角的 RUN 按钮，运行所有测试用例，确认运行结果是否符合预期"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/NfAX6z.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "至此，环境变量配置和调试已经完成"
    }), "\n", createVNode(_components.h4, {
      id: "命令行运行测试用例",
      children: "命令行运行测试用例"
    }), "\n", createVNode(_components.h5, {
      id: "前置检查",
      children: "前置检查"
    }), "\n", createVNode(_components.p, {
      children: "刚才我们已经测试用例的存储目录设置为了之前创建的项目文件夹，所以我们需要在项目文件夹下检查用例文件和环境变量配置文件是否已经创建成功。"
    }), "\n", createVNode(_components.p, {
      children: "目前我们的项目文件夹目录结构如下："
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
            children: "Bruno-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── package.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── package-lock.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Testcase // 测试用例文件夹"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo1.bru // 测试用例文件 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo2.bru // 测试用例文件 2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── bruno.json // bruno COLLECTION 配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── environments // 不同测试环境文件夹"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│       └── dev.bru // 测试环境配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── node_modules // 项目依赖"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "命令行调试运行测试用例",
      children: "命令行调试运行测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["在项目文件下的 Testcase 文件夹，运行命令行命令 ", createVNode(_components.code, {
            children: "bru run --env dev"
          }), "，运行所有测试用例"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "确认运行结果是否符合预期"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/iKnEYL.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "输出-json-格式报告",
      children: "输出 json 格式报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在项目文件下的 Testcase 文件夹下新建 Report 文件夹，用于存放测试报告文件"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["在项目文件下的 Testcase 文件夹，运行命令行命令 ", createVNode(_components.code, {
            children: "bru run --env dev --output Report/results.json"
          }), "，运行所有测试用例"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/MM85y5.png",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["确认测试报告文件正常输出\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/jnJHMQ.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "至此，Bruno 接口自动化测试项目的搭建已经完成。"
    }), "\n", createVNode(_components.h4, {
      id: "集成到-cicd-流程",
      children: "集成到 CI/CD 流程"
    }), "\n", createVNode(_components.p, {
      children: ["Bruno 程序的安装和基本使用请参考：", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter/blob/main/README_ZH.md#%E6%8E%A5%E5%85%A5-ci",
        children: "postman 替换工具 bruno 使用介绍#接入 CI"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Bruno 官方文档 ", createVNode(_components.a, {
          href: "https://docs.usebruno.com/",
          children: "https://docs.usebruno.com/"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["postman 替换工具 bruno 使用介绍 ", createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/api-automation-testing/introduction_of_bruno/",
          children: "https://naodeng.com.cn/zh/posts/api-automation-testing/introduction_of_bruno/"
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

const url = "src/blog/zh-cn/API-Automation-Testing/bruno-tutorial-building-your-own-project-from-0-to-1.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/bruno-tutorial-building-your-own-project-from-0-to-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/bruno-tutorial-building-your-own-project-from-0-to-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
