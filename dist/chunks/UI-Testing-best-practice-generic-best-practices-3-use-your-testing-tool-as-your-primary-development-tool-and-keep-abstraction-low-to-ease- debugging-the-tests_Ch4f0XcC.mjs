import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "UI 测试最佳实践的通用最佳实践（三）：将你的测试工具用作主要的开发工具和保持低抽象度以便于调试测试",
  "description": "这篇博文深入研究 UI 测试的通用最佳实践之三：将测试工具作为主要开发工具，并保持低抽象度以便于调试。文章强调将测试工具纳入主要开发过程，加强测试与开发的协同，提高代码质量。另外，博文建议保持测试脚本的低抽象度，以便更容易调试和理解。这种做法有助于加速问题排查和测试脚本的维护，从而提高 UI 测试的效率和可靠性。通过采用这些通用最佳实践，读者将能够更好地整合 UI 测试到开发流程中，实现更高效的软件开发。",
  "date": "2024-01-20T09:06:44.000Z",
  "author": "nao.deng",
  "tags": ["UI Testing", "Best Practices"],
  "categories": ["UI 测试", "通用最佳实践"],
  "series": ["UI 测试最佳实践"],
  "cover": "./UI-Testing-best-practice-generic-best-practices-3-use-your-testing-tool-as-your-primary-development-tool-and-keep-abstraction-low-to-ease- debugging-the-tests-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "将您的测试工具用作主要的开发工具",
    "text": "将您的测试工具用作主要的开发工具"
  }, {
    "depth": 3,
    "slug": "一段简要说明",
    "text": "一段简要说明"
  }, {
    "depth": 2,
    "slug": "保持低抽象度以便于调试测试",
    "text": "保持低抽象度以便于调试测试"
  }, {
    "depth": 3,
    "slug": "一段简要说明-1",
    "text": "一段简要说明"
  }, {
    "depth": 3,
    "slug": "可读性",
    "text": "可读性"
  }, {
    "depth": 3,
    "slug": "不使用任何抽象",
    "text": "不使用任何抽象"
  }, {
    "depth": 3,
    "slug": "在测试中什么时候使用抽象化是好的呢",
    "text": "在测试中什么时候使用抽象化是好的呢？"
  }, {
    "depth": 3,
    "slug": "匹配测试代码和测试运行器命令",
    "text": "匹配测试代码和测试运行器命令"
  }, {
    "depth": 4,
    "slug": "请看下面的内容",
    "text": "请看下面的内容"
  }, {
    "depth": 3,
    "slug": "使用清晰的选择器",
    "text": "使用清晰的选择器"
  }, {
    "depth": 3,
    "slug": "减少-data-testid-属性",
    "text": "减少 data-testid 属性"
  }, {
    "depth": 3,
    "slug": "将相关操作分组",
    "text": "将相关操作分组"
  }, {
    "depth": 3,
    "slug": "相关章节",
    "text": "相关章节"
  }, {
    "depth": 2,
    "slug": "参考资料",
    "text": "参考资料"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [createVNode(_components.p, {
      children: ["文章由 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices",
        children: "UI 测试最佳实践项目"
      }), " 内容翻译而来，大家有条件的话可以去 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices",
        children: "UI 测试最佳实践项目"
      }), "阅读原文。"]
    }), "\n", createVNode(_components.h2, {
      id: "将您的测试工具用作主要的开发工具",
      children: "将您的测试工具用作主要的开发工具"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接:", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/use-your-testing-tool-as-your-primary-development-tool.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/use-your-testing-tool-as-your-primary-development-tool.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "一个实例展示出问题的本质。比如说，你正在开发一个身份验证表单，可能的步骤是："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "编写用户名输入字段的代码"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "在浏览器中手动测试"
        }), "它"]
      }), "\n", createVNode(_components.li, {
        children: "编写密码输入字段的代码"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "在浏览器中手动测试"
        }), "它"]
      }), "\n", createVNode(_components.li, {
        children: "编写提交按钮的代码"
      }), "\n", createVNode(_components.li, {
        children: "编写 XHR 请求的处理代码"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["然后，你遇到了一个问题，因为在不修改源代码的情况下，你需要一个虚拟的或模拟的服务器来响应应用程序的 XHR 请求。", createVNode(_components.strong, {
        children: "于是，你开始编写一个集成测试"
      }), "："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "填写用户名输入字段"
      }), "\n", createVNode(_components.li, {
        children: "填写密码输入字段"
      }), "\n", createVNode(_components.li, {
        children: "点击提交按钮"
      }), "\n", createVNode(_components.li, {
        children: "检查 XHR 请求"
      }), "\n", createVNode(_components.li, {
        children: "模拟 XHR 的响应"
      }), "\n", createVNode(_components.li, {
        children: "检查反馈"
      }), "\n", createVNode(_components.li, {
        children: "对每个错误流程进行相同的测试步骤"
      }), "\n", createVNode(_components.li, {
        children: "编写处理错误流程的代码"
      }), "\n", createVNode(_components.li, {
        children: "重新检查测试结果"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["看一下第一个测试步骤，它们与我们在编写身份验证表单时", createVNode(_components.strong, {
        children: "手动执行的步骤相同"
      }), "。然后，我们为服务器的响应创建了存根，并检查表单的最终行为（包括成功或失败的响应）。"]
    }), "\n", createVNode(_components.p, {
      children: "这个工作流程可以很容易地得到改进，如果我们在编写表单的同时编写测试（TDD 开发者已经训练成这样）："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "编写用户名输入字段的代码"
        }), " *"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "编写填充"
        }), "用户名输入字段的测试*"]
      }), "\n", createVNode(_components.li, {
        children: "编写密码输入字段的代码"
      }), "\n", createVNode(_components.li, {
        children: "更新测试以填充密码输入字段"
      }), "\n", createVNode(_components.li, {
        children: "编写提交按钮的代码"
      }), "\n", createVNode(_components.li, {
        children: "更新测试以点击提交按钮"
      }), "\n", createVNode(_components.li, {
        children: "在测试中创建 XHR 的响应存根"
      }), "\n", createVNode(_components.li, {
        children: "编写 XHR 请求的管理代码"
      }), "\n", createVNode(_components.li, {
        children: "检查反馈"
      }), "\n", createVNode(_components.li, {
        children: "编写错误流程的管理代码"
      }), "\n", createVNode(_components.li, {
        children: "更新测试以检查错误流程"
      }), "\n", createVNode(_components.li, {
        children: "对于每个错误流程，重复以上步骤"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "* 请注意，如果要采用严格的 TDD 方法，可以颠倒第一步和第二步的顺序。"
    }), "\n", createVNode(_components.p, {
      children: "这样做的最重要的好处是什么？"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["你", createVNode(_components.strong, {
          children: "几乎完全避免手动测试"
        }), "应用程序"]
      }), "\n", createVNode(_components.li, {
        children: ["充分利用测试工具的速度，它以惊人的速度填充表单，让你", createVNode(_components.strong, {
          children: "节省大量时间"
        })]
      }), "\n", createVNode(_components.li, {
        children: "无需在编写表单后再编写测试（TDD 开发者已经避免这样做），尽管最初可能看起来有点烦人"
      }), "\n", createVNode(_components.li, {
        children: ["完全", createVNode(_components.strong, {
          children: "避免在源代码中引入一些临时状态"
        }), "（例如输入字段的默认值、虚假的 XHR 响应）"]
      }), "\n", createVNode(_components.li, {
        children: "直接用真实的网络响应测试你的应用程序（请记住，应用程序不知道网络请求是由测试工具存根的）"
      }), "\n", createVNode(_components.li, {
        children: "每次保存测试文件时都重新启动测试"
      }), "\n", createVNode(_components.li, {
        children: "可以充分利用 Chrome DevTools 和框架特定的开发工具"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["如何充分利用", createVNode(_components.strong, {
        children: "现有的开发工具"
      }), "？", createVNode("br", {}), "\n嗯，几乎每个测试工具都可以做到这一点，但 Cypress 在这方面脱颖而出。Cypress 拥有一个专门的 Chrome 用户，该用户在所有你的测试和所有你的项目中都是持久存在的。通过这样做，Cypress 允许你拥有一个真正专为测试而设的浏览器，其中包含你喜欢的扩展，即使你使用的是与浏览相同的 Chrome 版本。", createVNode("br", {}), "\n将其与出色的用户界面结合起来，你就可以准备好直接使用 Cypress 开发应用程序。下面你可以看到 Cypress 用户界面的一些截图，展示了将其作为主要开发工具使用的简便性。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "浏览器选择"
      }), "\n", createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/use-your-testing-tool-as-your-primary-development-tool/browser-selection.png?raw=true",
        alt: "Cypress 浏览器选择",
        title: "Cypress 浏览器选择"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cypress 控制的浏览器开发者工具"
      }), "\n", createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/use-your-testing-tool-as-your-primary-development-tool/devtools.jpg?raw=true",
        alt: "Cypress 浏览器开发者工具",
        title: "Cypress 浏览器开发者工具"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: ["Cypress ", createVNode(_components.a, {
          href: "https://github.com/bahmutov/cypress-skip-and-only-ui",
          children: "Skip 和 Only UI 插件"
        })]
      }), " 这个工具让你可以直接在 Cypress UI 中为测试添加", createVNode(_components.code, {
        children: ".only"
      }), "或", createVNode(_components.code, {
        children: ".skip"
      }), "。\n", createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/use-your-testing-tool-as-your-primary-development-tool/skip-and-only.gif?raw=true",
        alt: "Cypress Skip 和 Only UI",
        title: "Cypress Skip 和 Only UI"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: ["Cypress ", createVNode(_components.a, {
          href: "https://github.com/bahmutov/cypress-watch-and-reload",
          children: "观察和重新加载插件"
        })]
      }), " 此功能使您能够在每次源代码编译时重新运行 Cypress 测试。"]
    }), "\n", createVNode(_components.p, {
      children: ["如果您想在 Cypress 控制的浏览器中查看 React/Redux 开发工具的实际效果，可以使用 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/cypress-react-devtools",
        children: "cypress-react-devtools"
      }), " 存储库。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["此文由 ", createVNode(_components.a, {
          href: "https://github.com/NoriSte",
          children: "NoriSte"
        }), " 在 ", createVNode(_components.a, {
          href: "https://dev.to/noriste/front-end-productivity-boost-cypress-as-your-main-development-browser-5cdk",
          children: "dev.to"
        }), " 和 ", createVNode(_components.a, {
          href: "https://medium.com/@NoriSte/front-end-productivity-boost-cypress-as-your-main-development-browser-f08721123498",
          children: "Medium"
        }), "上进行联合发表。"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "保持低抽象度以便于调试测试",
      children: "保持低抽象度以便于调试测试"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接:", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/ui-tests-debugging-best-practices.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/ui-tests-debugging-best-practices.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明-1",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "UI 测试涉及许多步骤，主要有三个关键目标，但其中两个往往被低估："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "测试一个功能"
        }), "（显而易见）"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "帮助读者理解代码的作用"
        }), "（通常被低估）"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "简化调试"
        }), "（被低估，同时需要经验）"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "下面让我们一起了解编写 UI 测试时要记住的一些简单但有效的技巧。"
    }), "\n", createVNode(_components.h3, {
      id: "可读性",
      children: "可读性"
    }), "\n", createVNode(_components.p, {
      children: "关于测试中抽象的问题是一个有争议的话题（Page-Object Model 的粉丝可能会对此有异议）。"
    }), "\n", createVNode(_components.p, {
      children: "让我们看一个我不得不修复的真实测试的例子。"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// spec.ts file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Create Query Action'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", createQueryAction);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// test.ts file (simplified version)"
          })
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
              color: "#B392F0"
            },
            children: " createMutationAction"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
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
              color: "#6A737D"
            },
            children: "  // ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  clearActionDef"
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
            children: "  typeIntoActionDef"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(statements.createMutationActionText);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  clearActionTypes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // ..."
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// test.ts file contains the clearActionDef, typeIntoActionDef, etc."
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
              color: "#B392F0"
            },
            children: " clearActionDef"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  cy."
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
            children: "'textarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "first"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'{selectall}'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { force: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " });"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  cy."
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
            children: "'textarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "first"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "trigger"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'keydown'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    keyCode: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "46"
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
            children: "    which: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "46"
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
            children: "    force: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// test.ts file contains also the statements"
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
            children: " statements"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  createMutationActionText: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`type Mutation {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    login (username: String!, password: String!): LoginResponse"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  }`"
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
            children: "  createMutationCustomType: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`type LoginResponse {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    accessToken: String!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  `"
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
            children: "  createMutationHandler: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'https://hasura-actions-demo.glitch.me/login'"
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
              color: "#6A737D"
            },
            children: "  // ..."
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
      children: "短函数的背后思路是创建小而可重复使用的代码片段，以帮助其他需要在页面上执行类似操作的测试。"
    }), "\n", createVNode(_components.p, {
      children: ["我认为这不太好，因为", createVNode(_components.strong, {
        children: "很难建立对测试的执行过程的心智模型"
      }), "！所有测试部分都被分割成小函数和实用程序，而测试的代码必须尽可能地直截了当。"]
    }), "\n", createVNode(_components.p, {
      children: "你还记得章节开头提到的两个被低估的点吗？这个想法是测试应该实现三个主要目标："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "帮助读者理解代码的作用"
      }), "\n", createVNode(_components.li, {
        children: "以便轻松进行调试"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "前者要求测试的代码尽可能简单，而在测试的代码中使用抽象并没有好处，因为这会导致花费更多时间调试和维护测试，而不是应用程序。"
    }), "\n", createVNode(_components.p, {
      children: "后者与测试的错误部分有关：调试/修复它们。调试 UI 测试很困难，因为你需要处理以下元素："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "你的前端应用程序"
      }), "\n", createVNode(_components.li, {
        children: "浏览器"
      }), "\n", createVNode(_components.li, {
        children: "控制浏览器的工具"
      }), "\n", createVNode(_components.li, {
        children: "你提供给控制浏览器的工具的指令"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "上述每个元素都可能出现问题，即使是经验丰富的开发人员也可能在理解测试失败的原因时感到困扰。"
    }), "\n", createVNode(_components.p, {
      children: ["因此，端到端测试是复杂的。Cypress 提高了开发人员的生活质量（在 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/tools/ui-testing-problems-cypress.md",
        children: "一些 UI 测试问题和 Cypress 方法"
      }), " 章节中了解更多），但直截了当的代码会极大地帮助。"]
    }), "\n", createVNode(_components.h3, {
      id: "不使用任何抽象",
      children: "不使用任何抽象"
    }), "\n", createVNode(_components.p, {
      children: "我建议根本不使用抽象（稍后，我将讨论一些例外情况以及哪种抽象是好的）！我将上述例子改写为如下形式："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Test the feature'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  cy."
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
            children: "'textarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "eq"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'actionDefinitionTextarea'"
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
            children: "  cy."
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
            children: "'textarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "eq"
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
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'typeConfigurationTextarea'"
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
            children: "  cy."
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
            children: "'@actionDefinitionTextarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "clearConsoleTextarea"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    `type Mutation {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        login (username: String!, password: String!): LoginResponse"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      }`"
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
            children: "    { force: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", delay: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  cy."
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
            children: "'@typeConfigurationTextarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "clearConsoleTextarea"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    `type LoginResponse {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      accessToken: String!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    `"
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
            children: "    { force: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", delay: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "重写后的测试与原始测试执行相同的操作，但当你查看测试代码时，无需来回跳转来在脑中建立连接。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "想知道在文本区域中输入了什么吗？毫不费力，就在那里！"
      }), "\n", createVNode(_components.li, {
        children: "想知道文本使用的是哪个文本区域吗？毫不费力，就在那里！"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "在测试中什么时候使用抽象化是好的呢",
      children: "在测试中什么时候使用抽象化是好的呢？"
    }), "\n", createVNode(_components.p, {
      children: "在我看来："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "当我想隐藏一些可能没有价值但可能分散读者注意力的测试怪癖时"
      }), "\n", createVNode(_components.li, {
        children: "当它们是软的，几乎不带参数，只有一层深度"
      }), "\n", createVNode(_components.li, {
        children: "当存在相当数量的重复（确切的数量是主观的）"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "一个测试怪癖的例子是下面这个"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * Clear a Console's textarea."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * Work around cy.clear sometimes not working in the Console's textareas."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Cypress.Commands."
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
              color: "#9ECBFF"
            },
            children: "'clearConsoleTextarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { prevSubject: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'element'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "el"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wrap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(el)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'{selectall}'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { force: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " })."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "trigger"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'keydown'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    keyCode: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "46"
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
            children: "    which: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "46"
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
            children: "    force: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["我创建了中心的 ", createVNode(_components.code, {
        children: "cy.clearConsoleTextarea"
      }), "，原因如下："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "这是一种权宜之计 😊"
      }), "\n", createVNode(_components.li, {
        children: ["对于新手来说，阅读 ", createVNode(_components.code, {
          children: "trigger('keydown')"
        }), " 而不是使用更符合习惯的 ", createVNode(_components.code, {
          children: "cy.clear"
        }), " 是有点奇怪的，我不想在每个地方都留下解释的注释。"]
      }), "\n", createVNode(_components.li, {
        children: "该命令由 5 行代码组成，将使测试代码变得过长而毫无必要。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "以下内容是软抽象的一个例子："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " expectSuccessNotification"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " = ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  cy."
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
            children: "'.notification-success'"
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
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'be.visible'"
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
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'contain'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", title)"
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
      children: "我喜欢它的原因是"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["它不依赖其他抽象代码：如果我的测试在 ", createVNode(_components.code, {
          children: "expectSuccessNotification('Table created!')"
        }), " 失败，我不必陷入深奥的代码中，理解 ", createVNode(_components.code, {
          children: "expectSuccessNotification"
        }), " 背后发生了什么。"]
      }), "\n", createVNode(_components.li, {
        children: "它只接受一个变量，而不是很多选项；也没有包含那些在理解代码最终执行内容时变得复杂的条件。"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "它专注于特定用例"
        }), "。它不试图一次性涵盖所有通知类型、内容等。其他专注于特定用例的函数会处理。"]
      }), "\n", createVNode(_components.li, {
        children: "如果你重构通知系统，你有一个中心点进行重构，以适应新的通知系统。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "相反，这是我不希望拥有的（在谈论通知工具时）。"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
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
              color: "#B392F0"
            },
            children: " expectNotification"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
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
              color: "#FFAB70"
            },
            children: "    type"
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
              color: "#FFAB70"
            },
            children: "    title"
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
              color: "#FFAB70"
            },
            children: "    message"
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
            children: "  }"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'success'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'error'"
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
              color: "#FFAB70"
            },
            children: "    title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
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
              color: "#FFAB70"
            },
            children: "    message"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  timeout "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 10000"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
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
            children: " {"
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
            children: " el"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " cy."
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
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    type "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'success'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '.notification-success'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '.notification-error'"
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
            children: "    { timeout }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  el."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'be.visible'"
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
            children: "  el."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'contain'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", title);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (message) el."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'contain'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", message);"
          })]
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
      children: "我对上面的例子不太喜欢，原因有两点："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "它试图一次性涵盖太多用例。"
      }), "\n", createVNode(_components.li, {
        children: "如果测试失败，你必须处理让整个体验变成噩梦的各种条件。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["在", createVNode(_components.a, {
        href: "https://dev.to/noriste/hasura-console-ui-coding-patterns-testing-281d",
        children: "Hasura 控制台 UI 编码模式：测试"
      }), "文章中，你可以找到我们在内部遵循的更多最佳实践。"]
    }), "\n", createVNode(_components.h3, {
      id: "匹配测试代码和测试运行器命令",
      children: "匹配测试代码和测试运行器命令"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/test-code-with-debugging-in-mind/no-match-between-code-and-runner.jpg?raw=true",
        alt: "测试代码与 Cypress 面板并排显示，带有一些红色箭头来匹配代码和 Cypress 日志"
      })
    }), "\n", createVNode(_components.p, {
      children: "Cypress 测试运行器有助于理解应用程序中发生了什么以及执行了哪些命令，但在调试测试时，很难立即在测试运行器和代码之间建立关联。而且，日志无法帮助理解测试从功能角度正在做什么（例如，日志说“在文本区域中键入”，但没有说明“在类型配置文本区域中键入”）。因此，查找失败的根本原因是困难的。Cypress 会为失败的测试记录视频，但如果阅读者/调试者不能在日志和测试在普通英语中所做的事情之间建立直接关联，则视频就毫无用处。"
    }), "\n", createVNode(_components.h4, {
      id: "请看下面的内容",
      children: "请看下面的内容"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/test-code-with-debugging-in-mind/match-between-code-and-runner.jpg?raw=true",
        alt: "代码和 Cypress 面板并排显示，有许多自定义日志，可以直接将 Cypress 中发生的情况与代码中的特定点连接起来。"
      })
    }), "\n", createVNode(_components.p, {
      children: ["我添加了一个日志，报告测试正在进行的操作，使测试代码与测试运行程序之间能够直接对应。 (", createVNode(_components.code, {
        children: "cy.log('**--- Type in the Webhook Handler field**');"
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: "请注意，你可以向 ‘cy.log’ 传递更多参数，这些参数将在单击记录的命令时直接显示在开发工具的控制台中。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/test-code-with-debugging-in-mind/cy-log-console.jpg?raw=true",
        alt: "Cypress 测试运行器展示了已记录对象的值。"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Storybook 和 Playwright 已经引入了", createVNode(_components.code, {
        children: "step"
      }), "实用工具的概念，可以用英语解释测试中的步骤。Cypress 没有相同的选项，因此我认为我提出的", createVNode(_components.code, {
        children: "cy.log"
      }), "是很有价值的。"]
    }), "\n", createVNode(_components.p, {
      children: ["这里需要注意：不要将", createVNode(_components.code, {
        children: "cy.log"
      }), "链在一起，因为它不是一个查询命令，不会对链进行重试。"]
    }), "\n", createVNode(_components.p, {
      children: ["截至 Cypress V12 版本，", createVNode(_components.code, {
        children: "cy.log"
      }), "在函数级别不进行重试。"]
    }), "\n", createVNode(_components.p, {
      children: "例如："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
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
            children: ")."
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
            children: "'bar'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'baz'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// does not retry"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "cy."
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
            children: "'bar'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'baz'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// retries the whole chain until the assertion passes (you have 10 sec timeout set)"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["值得注意的是，即使 Cypress 没有 ", createVNode(_components.code, {
        children: "step"
      }), "，", createVNode(_components.a, {
        href: "https://github.com/filiphric",
        children: "Filip Hric"
      }), " 的 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/issues/43",
        children: "cypress-plugin-steps"
      }), " 也是一个有效的替代选择。"]
    }), "\n", createVNode(_components.h3, {
      id: "使用清晰的选择器",
      children: "使用清晰的选择器"
    }), "\n", createVNode(_components.p, {
      children: "看一下这段代码"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "cy."
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
            children: "'textarea'"
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
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "eq"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
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
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`{enter}{uparrow}${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "statements"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "createMutationGQLQuery"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    force: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "  });"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "cy.get('textarea').eq(0)"
      }), " 是什么？在没有更好的选择器的情况下，我建议将它们放在 Cypress 的别名下，比如"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Assign an alias to the most unclear selectors for future references"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "cy."
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
            children: "'textarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "eq"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'actionDefinitionTextarea'"
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
            children: "cy."
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
            children: "'textarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "eq"
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
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'typeConfigurationTextarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "然后通过这种方式来引用它们"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "cy."
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
            children: "'@actionDefinitionTextarea'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "clearConsoleTextarea"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/* ... */"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "以提高读者的体验。"
    }), "\n", createVNode(_components.h3, {
      id: "减少-data-testid-属性",
      children: "减少 data-testid 属性"
    }), "\n", createVNode(_components.p, {
      children: "我不想讨论测试本身及其对测试结果可信度的价值，只想谈谈 data-testid 属性在调试阶段的影响。"
    }), "\n", createVNode(_components.p, {
      children: "如果无法从页面中检索带有 data-testid 属性的元素，可能的问题有："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "元素不存在。"
      }), "\n", createVNode(_components.li, {
        children: "元素存在，但它没有该属性。"
      }), "\n", createVNode(_components.li, {
        children: "元素存在，具有该属性，但值不符合预期。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["上述所有问题都会", createVNode(_components.strong, {
        children: "导致开发人员重新启动测试、检查元素、查找与测试相关的属性等"
      }), "。相反，如果测试基于文本内容，仅通过截图就足以了解测试搜索的文本是否不存在或错误。"]
    }), "\n", createVNode(_components.p, {
      children: "此外，对于那些必须处理 data-testid 的工程师来说，还有一些不足之处："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "在重构期间必须维护与测试相关的属性，但在有数百个属性时并不容易。"
      }), "\n", createVNode(_components.li, {
        children: "如果测试相关的属性在页面上是唯一的，那么它们会很有帮助。然而，当你有数百个这样的属性时，很难保证它们是唯一的。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "我的建议是仅在以下情况使用 data-testid 属性："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "用于节，而不是元素（例如 Header、Footer 等），以减小基于文本搜索的范围。以下是一个示例："
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "cy."
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
            children: "'[data-test=\"Actions list\"]'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "within"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// <-- reduce the scope"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  cy."
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
            children: "'login'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// <-- the \"login\" text could exist more times in the page"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "非文本元素，如图标、图片等。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "最后但同样重要的是：我建议为它们赋予用户友好的值，而不是采用程序员的命名风格（例如，“操作列表”而不是“actionsList”），尤其是当该部分显示相同文本时。这样可以直接关联测试代码、Cypress 的测试运行器和页面的文本内容。"
    }), "\n", createVNode(_components.h3, {
      id: "将相关操作分组",
      children: "将相关操作分组"
    }), "\n", createVNode(_components.p, {
      children: "通常来说，阅读一系列平面的交互并不能帮助理解测试运行的页面结构。"
    }), "\n", createVNode(_components.p, {
      children: "例如："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "获取 1 并点击"
      }), "\n", createVNode(_components.li, {
        children: "获取 2 并点击"
      }), "\n", createVNode(_components.li, {
        children: "获取 3 并点击"
      }), "\n", createVNode(_components.li, {
        children: "获取 4 并点击"
      }), "\n", createVNode(_components.li, {
        children: "获取 5 并点击"
      }), "\n", createVNode(_components.li, {
        children: "获取 6 并点击"
      }), "\n", createVNode(_components.li, {
        children: "获取 7 并点击"
      }), "\n", createVNode(_components.li, {
        children: "获取 8 并点击"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "然而，将列表展开可以帮助读者构建一个有关所涉及部分位置的心理模型"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["在块 1 内\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "获取 1 并点击"
          }), "\n", createVNode(_components.li, {
            children: "获取 2 并点击"
          }), "\n", createVNode(_components.li, {
            children: "获取 3 并点击"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["在块 2 内\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "获取 4 并点击"
          }), "\n", createVNode(_components.li, {
            children: "获取 5 并点击"
          }), "\n", createVNode(_components.li, {
            children: "获取 6 并点击"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "获取 7 并点击"
      }), "\n", createVNode(_components.li, {
        children: "获取 8 并点击"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/test-code-with-debugging-in-mind/cy-within.png?raw=true",
        alt: "Cypress 界面展示 cy.within"
      })
    }), "\n", createVNode(_components.p, {
      children: "再强调一下：Storybook 和 Playwright 已经引入了“步骤（step）”实用程序的概念，该实用程序可以将操作进行分组，而上述建议在 Cypress 中非常实用。"
    }), "\n", createVNode(_components.h3, {
      id: "相关章节",
      children: "相关章节"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["🔗 ", createVNode(_components.a, {
          href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/real-life-examples/from-unreadable-react-component-tests-to-simple-ones.md",
          children: "从晦涩难懂的 React 组件测试到简单、易读的版本"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["由 ", createVNode(_components.a, {
          href: "https://github.com/NoriSte",
          children: "NoriSte"
        }), " 在 ", createVNode(_components.a, {
          href: "https://dev.to/noriste/improving-ui-testss-code-to-ease-debugging-them-later-2478j",
          children: "dev.to"
        }), "进行发表。"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["UI 测试最佳实践项目:", createVNode(_components.a, {
          href: "https://github.com/NoriSte/ui-testing-best-practices",
          children: "https://github.com/NoriSte/ui-testing-best-practices"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["UI 测试最佳实践项目中文翻译:", createVNode(_components.a, {
          href: "https://github.com/naodeng/ui-testing-best-practices",
          children: "https://github.com/naodeng/ui-testing-best-practices"
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

const url = "src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-3-use-your-testing-tool-as-your-primary-development-tool-and-keep-abstraction-low-to-ease-%20debugging-the-tests.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-3-use-your-testing-tool-as-your-primary-development-tool-and-keep-abstraction-low-to-ease- debugging-the-tests.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-3-use-your-testing-tool-as-your-primary-development-tool-and-keep-abstraction-low-to-ease- debugging-the-tests.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
