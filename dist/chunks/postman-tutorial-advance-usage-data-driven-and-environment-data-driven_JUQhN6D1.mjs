import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Postman 接口自动化测试教程：进阶用法 - 数据驱动",
  "description": "这篇博文深入研究 Postman 接口自动化测试的高级技巧，专注于数据文件驱动和环境变量数据驱动。学习如何通过外部数据文件和灵活的环境变量，优雅地进行测试数据的驱动，提高测试覆盖率。博文将为您展示如何以更智能的方式管理和利用数据，使测试用例更具可扩展性和灵活性。",
  "date": "2023-11-24T11:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Postman", "API Testing", "Data Driven"],
  "categories": ["接口自动化测试", "Postman"],
  "series": ["Postman 接口自动化测试教程"],
  "cover": "./postman-tutorial-advance-usage-data-driven-and-environment-data-driven-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "进阶用法",
    "text": "进阶用法"
  }, {
    "depth": 3,
    "slug": "数据驱动",
    "text": "数据驱动"
  }, {
    "depth": 4,
    "slug": "使用环境变量",
    "text": "使用环境变量"
  }, {
    "depth": 5,
    "slug": "1-创建环境变量",
    "text": "1. 创建环境变量"
  }, {
    "depth": 5,
    "slug": "2-使用环境变量",
    "text": "2. 使用环境变量"
  }, {
    "depth": 6,
    "slug": "编辑-get-demo-接口",
    "text": "编辑 get-demo 接口"
  }, {
    "depth": 6,
    "slug": "编辑-post-demo-接口",
    "text": "编辑 post-demo 接口"
  }, {
    "depth": 5,
    "slug": "3-调试环境变量数据驱动脚本",
    "text": "3. 调试环境变量数据驱动脚本"
  }, {
    "depth": 5,
    "slug": "4自动化运行环境变量数据驱动脚本",
    "text": "4.自动化运行环境变量数据驱动脚本"
  }, {
    "depth": 4,
    "slug": "使用数据文件",
    "text": "使用数据文件"
  }, {
    "depth": 5,
    "slug": "1创建数据文件",
    "text": "1.创建数据文件"
  }, {
    "depth": 5,
    "slug": "2更新测试用例",
    "text": "2.更新测试用例"
  }, {
    "depth": 6,
    "slug": "更新-get-demo-接口",
    "text": "更新 get-demo 接口"
  }, {
    "depth": 6,
    "slug": "更新-post-demo-接口",
    "text": "更新 post-demo 接口"
  }, {
    "depth": 5,
    "slug": "3调试",
    "text": "3.调试"
  }, {
    "depth": 5,
    "slug": "4自动化运行数据驱动脚本",
    "text": "4.自动化运行数据驱动脚本"
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
      id: "进阶用法",
      children: "进阶用法"
    }), "\n", createVNode(_components.p, {
      children: "以下会介绍 Postman 和 Newman 的一些进阶用法，包括数据文件驱动和环境变量数据驱动。"
    }), "\n", createVNode(_components.h3, {
      id: "数据驱动",
      children: "数据驱动"
    }), "\n", createVNode(_components.p, {
      children: "在 API 自动化测试的过程中。使用数据驱动是一种常规测试方法，其中测试用例的输入数据和预期输出数据都被存储在数据文件中，测试框架根据这些数据文件执行多次测试，以验证 API 的各个方面。"
    }), "\n", createVNode(_components.p, {
      children: "测试数据可以很容易地修改，而不需要修改测试用例代码。"
    }), "\n", createVNode(_components.p, {
      children: "数据驱动测试可以帮助你有效地覆盖多种情况，确保 API 在各种输入数据下都能正常运行。"
    }), "\n", createVNode(_components.p, {
      children: ["可参考 demo：", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/Postman-Newman-demo",
        children: "https://github.com/Automation-Test-Starter/Postman-Newman-demo"
      })]
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 中进行数据驱动测试，特别是使用 JSON 数据作为测试数据，可以通过环境变量和数据文件配合 Postman 提供的测试脚本来实现，以下会分别以简单的示例来介绍环境变量和数据文件的使用。"
    }), "\n", createVNode(_components.h4, {
      id: "使用环境变量",
      children: "使用环境变量"
    }), "\n", createVNode(_components.p, {
      children: "大致的步骤是：将测试数据存储在环境变量中，然后在测试脚本中读取环境变量中的数据，进行测试。"
    }), "\n", createVNode(_components.h5, {
      id: "1-创建环境变量",
      children: "1. 创建环境变量"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 中，你可以在 “Manage Environments” 窗口中创建环境变量。在 “Manage Environments” 窗口中，你可以创建多个环境，每个环境都有一组环境变量。"
    }), "\n", createVNode(_components.p, {
      children: ["之前在 demo 中创建了一个环境变量，名为 ", createVNode(_components.code, {
        children: "DemoEnv"
      }), "，其中包含了一个环境变量 ", createVNode(_components.code, {
        children: "baseURL"
      }), "，用于存储 API 的基本 URL。\n这一次我们在 ", createVNode(_components.code, {
        children: "DemoEnv"
      }), " 环境中添加多个环境变量，用于存储 get-demo 接口和 post-demo 接口的各类测试数据。"]
    }), "\n", createVNode(_components.p, {
      children: ["点击编辑", createVNode(_components.code, {
        children: "DemoEnv"
      }), "环境，添加以下环境变量："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Key"
          }), createVNode(_components.th, {
            children: "Value"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "getAPI"
          }), createVNode(_components.td, {
            children: "posts/1"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "getAPIResponseStatus"
          }), createVNode(_components.td, {
            children: "200"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "getAPIResponseData"
          }), createVNode(_components.td, {
            children: "{“userId”:1,“id”:1,“title”:“sunt aut facere repellat provident occaecati excepturi optio reprehenderit”,“body”:“quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto”}"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "postAPI"
          }), createVNode(_components.td, {
            children: "posts"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "postAPIResponseStatus"
          }), createVNode(_components.td, {
            children: "201"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "postAPIResponseData"
          }), createVNode(_components.td, {
            children: "{“title”:“foo”,“body”:“bar”,“userId”:1,“id”:101}"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h5, {
      id: "2-使用环境变量",
      children: "2. 使用环境变量"
    }), "\n", createVNode(_components.p, {
      children: "在 “Pre-request Script” 或 “Tests” 部分中，你可以使用环境变量来存储和获取数据。在请求 Body 中，你可以通过 pm.environment.get 获取环境变量的值。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "注意：在 JavaScript 中，环境变量获取的值是字符串"
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "编辑-get-demo-接口",
      children: "编辑 get-demo 接口"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["将 URL 修改为 ", createVNode(_components.code, {
          children: "&#123;&#123;baseURL&#125;&#125;/&#123;&#123;getAPI&#125;&#125;"
        }), "，"]
      }), "\n", createVNode(_components.li, {
        children: "编辑 Tests 脚本用来验证响应数据："
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 获取环境变量中的数据"
          })
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
            children: " getAPIResponseStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " parseInt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.environment."
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
            children: "\"getAPIResponseStatus\""
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " getAPIResponseData"
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
            children: "parse"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.environment."
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
            children: "'getAPIResponseData'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    pm.response.to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "status"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getAPIResponseStatus);"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: "  var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
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
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getAPIResponseData.id);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.userId).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getAPIResponseData.userId);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
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
            children: "(getAPIResponseData.title);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.body).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getAPIResponseData.body);"
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
        children: "点击保存，然后点击发送，可以看到测试通过。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112418URuFUy.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h6, {
      id: "编辑-post-demo-接口",
      children: "编辑 post-demo 接口"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["将 URL 修改为 ", createVNode(_components.code, {
          children: "&#123;&#123;baseURL&#125;&#125;/&#123;&#123;postAPI&#125;&#125;"
        }), "，"]
      }), "\n", createVNode(_components.li, {
        children: "编辑 Tests 脚本用来验证响应数据："
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 获取环境变量中的数据"
          })
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
            children: " postAPIResponseStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " parseInt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.environment."
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
            children: "\"postAPIResponseStatus\""
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " postAPIResponseData"
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
            children: "parse"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.environment."
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
            children: "'postAPIResponseData'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: "\"res.status should be 201\""
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
            children: "  pm.response.to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "status"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(postAPIResponseStatus);"
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
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: "  var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
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
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(postAPIResponseData.id);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.userId).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(postAPIResponseData.userId);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
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
            children: "(postAPIResponseData.title);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.body).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(postAPIResponseData.body);"
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
        children: "点击保存，然后点击发送，可以看到测试通过。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/20231124181Zpwgn.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h5, {
      id: "3-调试环境变量数据驱动脚本",
      children: "3. 调试环境变量数据驱动脚本"
    }), "\n", createVNode(_components.p, {
      children: "选择对应的环境变量和更新后的测试用例，运行整个 demo collection，确认测试通过"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419E4tzBS.png",
        alt: "2023112419E4tzBS"
      })
    }), "\n", createVNode(_components.h5, {
      id: "4自动化运行环境变量数据驱动脚本",
      children: "4.自动化运行环境变量数据驱动脚本"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "将更新后的测试用例导出到自动化测试项目测试用例文件夹下"
      }), "\n", createVNode(_components.li, {
        children: "调整 package.json"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "在 package.json 文件中，更新测试脚本，用于运行环境变量数据驱动测试用例："
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "demo 项目为了区分不同场景，新增了测试命令为 environment-driven-test"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " \"environment-driven-test\": \"newman run Testcase/Environment-Driven.postman_collection.json -e Env/Environment-Driven-DemoEnv.postman_environment.json -r cli,allure --reporter-allure-export ./allure-results\","
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行测试"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
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
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " environment-driven-test"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419OCkmnl.png",
        alt: "2023112419OCkmnl"
      })
    }), "\n", createVNode(_components.h4, {
      id: "使用数据文件",
      children: "使用数据文件"
    }), "\n", createVNode(_components.p, {
      children: "大致的步骤是：将测试数据存放在数据文件中，然后在测试脚本中读取数据文件中的数据，进行测试。"
    }), "\n", createVNode(_components.p, {
      children: "postman 的数据文件支持 json，csv 和 txt 等多种格式，以下示例会以 json 格式 进行"
    }), "\n", createVNode(_components.h5, {
      id: "1创建数据文件",
      children: "1.创建数据文件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在 postma 接口自动化测试项目下新建 Data 文件夹"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
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
            children: " Data"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在 Data 文件夹下新建 json 格式数据文件 testdata.json"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " Data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdata.json"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "更新测试数据文件 testdata.json"
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
            children: "["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"getAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"posts/1\""
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
            children: "    \"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"posts\""
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
            children: "    \"getAPIResponseStatus\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
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
              color: "#79B8FF"
            },
            children: "    \"getAPIResponseData\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"userId\""
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
            children: "      \"id\""
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
            children: "      \"title\""
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
            children: "      \"body\""
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
            children: "    },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"postAPIResponseStatus\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "201"
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
            children: "    \"postAPIResponseData\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"title\""
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
            children: "      \"body\""
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
            children: "      \"userId\""
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
            children: "      \"id\""
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
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2更新测试用例",
      children: "2.更新测试用例"
    }), "\n", createVNode(_components.h6, {
      id: "更新-get-demo-接口",
      children: "更新 get-demo 接口"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "编辑 Pre-request Script 脚本来从测试数据文件中获取\n请求 url"
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
            children: " getAPI"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.iterationData."
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
            children: "'getAPI'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["将 URL 修改为 ", createVNode(_components.code, {
            children: "&#123;&#123;baseURL&#125;&#125;/&#123;&#123;getAPI&#125;&#125;"
          }), "，"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "编辑 test 脚本来从测试数据文件中获取测试数据"
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
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " getAPIResponseStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.iterationData."
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
            children: "'getAPIResponseStatus'"
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " getAPIResponseData"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.iterationData."
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
            children: "'getAPIResponseData'"
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
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm.response.to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "status"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getAPIResponseStatus);"
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
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: "  var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
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
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getAPIResponseData.id);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.userId).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getAPIResponseData.userId);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
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
            children: "(getAPIResponseData.title);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.body).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getAPIResponseData.body);"
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
    }), "\n", createVNode(_components.h6, {
      id: "更新-post-demo-接口",
      children: "更新 post-demo 接口"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "编辑 Pre-request Script 脚本来从测试数据文件中获取\n请求 url"
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
            children: " postAPI"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.iterationData."
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
            children: "'postAPI'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["将 URL 修改为 ", createVNode(_components.code, {
            children: "&#123;&#123;baseURL&#125;&#125;/&#123;&#123;postAPI&#125;&#125;"
          }), "，"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "编辑 test 脚本来从测试数据文件中获取测试数据"
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
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 从数据文件获取测试数据"
          })
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
            children: " postAPIResponseStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.iterationData."
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
            children: "'postAPIResponseStatus'"
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " postAPIResponseData"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.iterationData."
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
            children: "'postAPIResponseData'"
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
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: "\"res.status should be 201\""
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
            children: "  pm.response.to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "status"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(postAPIResponseStatus);"
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
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: "  var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pm.response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
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
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(postAPIResponseData.id);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.userId).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(postAPIResponseData.userId);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
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
            children: "(postAPIResponseData.title);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.body).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(postAPIResponseData.body);"
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
    }), "\n", createVNode(_components.h5, {
      id: "3调试",
      children: "3.调试"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在 postman 页面选择 get-demo request 和 post-demo request 所在的 demo Collection，点击右上角的三个点，选择 Run Collection"
      }), "\n", createVNode(_components.li, {
        children: "在 runner 准备页面右侧区域点击 Data 的 Select File 按钮，选择之前的测试数据文件 testdata.json"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419KIqIfa.png",
        alt: "2023112419KIqIfa"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "然后点击 Run demo，确认运行通过即可导出测试用例文件"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419c9Hv5e.png",
        alt: "2023112419c9Hv5e"
      })
    }), "\n", createVNode(_components.h5, {
      id: "4自动化运行数据驱动脚本",
      children: "4.自动化运行数据驱动脚本"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "将更新后的测试用例导出到自动化测试项目测试用例文件夹下"
      }), "\n", createVNode(_components.li, {
        children: "调整 package.json"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "在 package.json 文件中，更新测试测试脚本，用于运行数据驱动测试用例："
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "demo 项目为了区分不同场景，新增了测试命令为 data-driven-test，且命令后加了-d 参数 用于指定测试数据文件路径"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"data-driven-test\": \"newman run Testcase/Data-Driven.postman_collection.json -e Env/DemoEnv.postman_environment.json -d Data/testdata.json -r cli,allure --reporter-allure-export ./allure-results\""
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行测试"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
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
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " data-driven-test"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112419k7I9ZE.png",
        alt: "2023112419k7I9ZE"
      })
    }), "\n", createVNode(_components.h2, {
      id: "参考文档",
      children: "参考文档"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/getting-started/introduction/",
          children: "Postman 官方文档"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/",
          children: "newman 官方文档"
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

const url = "src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-data-driven-and-environment-data-driven.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-data-driven-and-environment-data-driven.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-data-driven-and-environment-data-driven.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
