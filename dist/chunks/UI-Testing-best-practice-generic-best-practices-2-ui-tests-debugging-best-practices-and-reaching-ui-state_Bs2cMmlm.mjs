import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "UI 测试最佳实践的通用最佳实践（二）：UI 测试调试最佳实践和在测试中达到 UI 状态而无需使用 UI",
  "description": "这篇博文探讨了 UI 测试的通用最佳实践之二：UI 测试调试和无需使用 UI 达到 UI 状态。博文详细介绍了在 UI 测试中的调试技巧，包括使用断点、日志和交互式调试工具等方法，提高测试脚本的调试效率。此外，文章强调了通过直接设置应用程序状态而无需依赖 UI 元素来达到 UI 状态的方法，以提高测试速度和稳定性。通过这些实践，读者能够更好地应对 UI 测试中的调试挑战，同时优化测试脚本的执行效率。",
  "date": "2024-01-19T05:05:44.000Z",
  "author": "nao.deng",
  "tags": ["UI Testing", "Best Practices"],
  "categories": ["UI 测试", "通用最佳实践"],
  "series": ["UI 测试最佳实践"],
  "cover": "./UI-Testing-best-practice-generic-best-practices-2-ui-tests-debugging-best-practices-and-reaching-ui-state-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ui-测试调试最佳实践",
    "text": "UI 测试调试最佳实践"
  }, {
    "depth": 3,
    "slug": "在-consolelog-中记录显示测试的描述",
    "text": "在 console.log 中记录/显示测试的描述"
  }, {
    "depth": 3,
    "slug": "将浏览器的-consolelog-转发到-nodejs",
    "text": "将浏览器的 console.log 转发到 Node.js"
  }, {
    "depth": 4,
    "slug": "启动浏览器时已经打开开发者工具",
    "text": "启动浏览器时已经打开开发者工具"
  }, {
    "depth": 3,
    "slug": "减缓模拟用户操作速度",
    "text": "减缓模拟用户操作速度"
  }, {
    "depth": 3,
    "slug": "使用调试器语句暂停测试",
    "text": "使用调试器语句暂停测试"
  }, {
    "depth": 3,
    "slug": "延长测试超时时间",
    "text": "延长测试超时时间"
  }, {
    "depth": 3,
    "slug": "避免在测试结束时关闭浏览器",
    "text": "避免在测试结束时关闭浏览器"
  }, {
    "depth": 3,
    "slug": "使用截图",
    "text": "使用截图"
  }, {
    "depth": 3,
    "slug": "频繁使用断言",
    "text": "频繁使用断言"
  }, {
    "depth": 3,
    "slug": "使用-testskip-和-testonly",
    "text": "使用 test.skip 和 test.only"
  }, {
    "depth": 3,
    "slug": "串行运行测试",
    "text": "串行运行测试"
  }, {
    "depth": 3,
    "slug": "保持测试代码简单",
    "text": "保持测试代码简单"
  }, {
    "depth": 3,
    "slug": "选择专门设计的工具",
    "text": "选择专门设计的工具"
  }, {
    "depth": 2,
    "slug": "在测试中达到-ui-状态而无需使用-ui",
    "text": "在测试中达到 UI 状态而无需使用 UI"
  }, {
    "depth": 3,
    "slug": "一段简要说明",
    "text": "一段简要说明"
  }, {
    "depth": 3,
    "slug": "直接导航",
    "text": "直接导航"
  }, {
    "depth": 4,
    "slug": "直接导航的优缺点",
    "text": "直接导航的优缺点"
  }, {
    "depth": 3,
    "slug": "应用程序操作",
    "text": "应用程序操作"
  }, {
    "depth": 4,
    "slug": "另一个应用程序操作的示例利用状态使用-siemens-的-building-operator-siemens-的建筑控制产品",
    "text": "另一个应用程序操作的示例，利用状态，使用 Siemens 的 Building Operator Siemens 的建筑控制产品"
  }, {
    "depth": 4,
    "slug": "应用程序操作的优缺点",
    "text": "应用程序操作的优缺点"
  }, {
    "depth": 3,
    "slug": "网络存根记录和回放",
    "text": "网络存根记录和回放"
  }, {
    "depth": 4,
    "slug": "如果有很多网络请求发生怎么办",
    "text": "如果有很多网络请求发生怎么办？"
  }, {
    "depth": 4,
    "slug": "网络存根记录和回放的优缺点",
    "text": "网络存根记录和回放的优缺点"
  }, {
    "depth": 3,
    "slug": "填充数据库",
    "text": "填充数据库"
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
    children: [createVNode(_components.p, {
      children: ["文章由 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices",
        children: "UI 测试最佳实践项目"
      }), " 内容翻译而来，大家有条件的话可以去 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices",
        children: "UI 测试最佳实践项目"
      }), "阅读原文。"]
    }), "\n", createVNode(_components.h2, {
      id: "ui-测试调试最佳实践",
      children: "UI 测试调试最佳实践"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/ui-tests-debugging-best-practices.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/ui-tests-debugging-best-practices.md"
      })]
    }), "\n", createVNode(_components.p, {
      children: "在转向 Cypress 之前，我通常使用 Puppeteer 编写 UI 测试。理解浏览器中发生的事情、了解正在运行的测试以及调试测试都不是简单的任务，因此我开始采取一系列解决方案来帮助我应对整个流程。"
    }), "\n", createVNode(_components.p, {
      children: ["诸如 ", createVNode(_components.a, {
        href: "https://www.cypress.io/",
        children: "Cypress"
      }), " 和 ", createVNode(_components.a, {
        href: "https://devexpress.github.io/testcafe/",
        children: "TestCafé"
      }), " 的工具几乎使下面列出的最佳实践变得无关紧要，但除非你之前使用过 ", createVNode(_components.a, {
        href: "https://www.selenium.dev/",
        children: "Selenium"
      }), " 或 ", createVNode(_components.a, {
        href: "https://pptr.dev/",
        children: "Puppeteer"
      }), " 等工具进行测试，否则你不会意识到专为测试而设计的工具对简化生活有多么重要。"]
    }), "\n", createVNode(_components.p, {
      children: "第零步是以非无头模式启动浏览器，然后…"
    }), "\n", createVNode(_components.h3, {
      id: "在-consolelog-中记录显示测试的描述",
      children: "在 console.log 中记录/显示测试的描述"
    }), "\n", createVNode(_components.p, {
      children: "由于在浏览器内部无法获得有关正在运行的测试的视觉反馈，请务必在浏览器控制台中记录测试的名称。在测试速度很快的情况下（少于 1 秒），这可能没有太多用处，但在测试时间较长或在使用 test.skip 和 test.only 进行测试时，这是有帮助的，可以对正在运行的测试进行双重检查。"
    }), "\n", createVNode(_components.p, {
      children: "在 Puppeteer 中，可以通过以下方式实现："
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
            children: "'Test description'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "async"
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
              color: "#F97583"
            },
            children: "  await"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " page."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "evaluate"
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
            children: " console."
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
            children: "'Test description'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // ... the test code..."
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
      children: "如果你需要更为显眼的反馈，甚至可以考虑在页面的左上角添加一个固定的 div，每个测试都会用自己的描述填充…"
    }), "\n", createVNode(_components.h3, {
      id: "将浏览器的-consolelog-转发到-nodejs",
      children: "将浏览器的 console.log 转发到 Node.js"
    }), "\n", createVNode(_components.p, {
      children: "使用 Puppeteer 的一个简单例子："
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "page."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'console'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "msg"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
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
            children: "'BROWSER LOG:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", msg."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "text"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()));"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "允许你在同一终端窗口中查看测试日志和浏览器日志。简单而有效。"
    }), "\n", createVNode(_components.h4, {
      id: "启动浏览器时已经打开开发者工具",
      children: "启动浏览器时已经打开开发者工具"
    }), "\n", createVNode(_components.p, {
      children: "就像在经典的前端开发中一样，在页面加载已经开始后再打开开发者工具可能会导致你错过重要的信息，特别是在网络选项卡中。在调试测试时，启动浏览器时已经打开开发者工具可以节省宝贵的时间和信息。"
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " browser"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " puppeteer."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "launch"
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
            children: "  headless: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "false"
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
            children: "  devtools: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
    }), "\n", createVNode(_components.h3, {
      id: "减缓模拟用户操作速度",
      children: "减缓模拟用户操作速度"
    }), "\n", createVNode(_components.p, {
      children: ["浏览器自动化工具速度非常快，这使得我们能在几秒钟内运行大量测试。然而，在调试过程中，这可能是一个劣势，因为你需要用眼睛跟踪页面上发生的情况。减缓", createVNode(_components.strong, {
        children: "每个动作"
      }), "可能会适得其反——因为整个测试变得很慢——但通常这是执行一些快速检查的最简单方法。在 Puppeteer 中，有一个全局设置可以实现这一点。"]
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " browser"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " puppeteer."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "launch"
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
            children: "  headless: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "false"
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
            children: "  slowMo: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "250"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// slow down every action by 250ms"
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
      children: "一些动作，比如输入，允许你添加更具体的延迟（这会叠加在全局 slowMo 设置之上）"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " page."
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
            children: "'.username'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'admin'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", {delay: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "使用调试器语句暂停测试",
      children: "使用调试器语句暂停测试"
    }), "\n", createVNode(_components.p, {
      children: "另一方面，就像在标准的 Web 开发中一样，你可以在运行在页面上的代码中添加一个调试器语句来“暂停”JavaScript 执行。请注意：该语句仅在已打开控制浏览器的开发者工具时有效。"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " page."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "evaluate"
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
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "debugger"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";});"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "通过点击“继续执行脚本”或按下 F8 键（调试器是一个“飞行”断点），将恢复测试的执行。"
    }), "\n", createVNode(_components.h3, {
      id: "延长测试超时时间",
      children: "延长测试超时时间"
    }), "\n", createVNode(_components.p, {
      children: "类似 Jest、Jasmine 等的测试运行器都设有测试超时时间。这个超时时间的作用在于，在测试中发生问题导致测试无法正常结束时，及时终止测试。在 UI 测试中，这种行为相对繁琐，因为你需要在测试开始时打开浏览器，在测试结束时关闭浏览器。在正常的测试生命周期中，设定过高的超时时间并不实际，因为一旦测试失败就会导致大量时间的浪费，而过低的超时时间可能在测试完成之前就提前“截断”了测试。"
    }), "\n", createVNode(_components.p, {
      children: "相反，你需要设定较长的超时时间，因为你不希望测试结束的时候在你检查浏览器时关闭它。这就是为什么在调试受控浏览器时，设定为 10 分钟的超时时间可能会很有帮助。"
    }), "\n", createVNode(_components.p, {
      children: "当然，也可以…"
    }), "\n", createVNode(_components.h3, {
      id: "避免在测试结束时关闭浏览器",
      children: "避免在测试结束时关闭浏览器"
    }), "\n", createVNode(_components.p, {
      children: "测试开始时，打开浏览器，而在测试结束时不关闭它。避免关闭浏览器可让你自由地检查前端应用，而无需担心测试超时。这仅在本地运行测试时有效，但在运行测试于 CI 管道之前，必须还原自动关闭以避免由于未关闭的浏览器实例导致内存不足。"
    }), "\n", createVNode(_components.h3, {
      id: "使用截图",
      children: "使用截图"
    }), "\n", createVNode(_components.p, {
      children: "在以无头模式运行测试时，这在测试稳定且仅在出现回归时才失败的阶段尤其有帮助。如果测试失败，很多时候截图能让你了解你正在开发的功能是如何影响之前正常工作的功能的。最有效的解决方案是在测试失败时截图，否则，你可以在 UI 测试中确定一些检查点，并在这些步骤中截图。"
    }), "\n", createVNode(_components.h3, {
      id: "频繁使用断言",
      children: "频繁使用断言"
    }), "\n", createVNode(_components.p, {
      children: "一个经验法则：如果测试失败，它必须直接带你理解出了什么问题，而不是重新启动测试并手动调试。尝试在你的代码库中手动引入一些错误（改变请求有效载荷，移除元素等），并查看测试报告。错误是否与你引入的错误相关联？阅读失败报告的人是否能够理解需要修复什么？"
    }), "\n", createVNode(_components.p, {
      children: "你需要在测试中添加很多断言，这是完全可以的！单元测试通常只包含一个步骤和一个或两个断言，但 UI 测试不同，它们有很多步骤，因此你需要很多断言。将它们视为一系列单元测试，其中前一个测试对第二个测试的创建是必要的，以此类推。"
    }), "\n", createVNode(_components.h3, {
      id: "使用-testskip-和-testonly",
      children: "使用 test.skip 和 test.only"
    }), "\n", createVNode(_components.p, {
      children: "这是每个测试运行器的基础之一，但你可能不知道：如果你不习惯使用 skip 和 only，请从现在开始吧！否则，你将浪费很多时间，即使你的测试文件只包含两三个测试。始终仅运行你正在工作或需要调试的最小数量的测试！"
    }), "\n", createVNode(_components.h3, {
      id: "串行运行测试",
      children: "串行运行测试"
    }), "\n", createVNode(_components.p, {
      children: ["如果你正在使用 Puppeteer 结合 Jest，请记住 Jest 有一个专门的 runInBand 选项，它防止测试的执行在你的 CPU 核心上分散。将测试并行化可以加快执行速度，但在你需要用眼睛跟踪测试操作时可能会让人感到烦扰。runInBand 选项使测试串行运行。将它与 test.skip、test.only 以及 ", createVNode(_components.a, {
        href: "https://github.com/jest-community/jest-watch-typeahead",
        children: "jest-watch-typeahead"
      }), " 结合使用可以避免很多调试的麻烦。"]
    }), "\n", createVNode(_components.h3, {
      id: "保持测试代码简单",
      children: "保持测试代码简单"
    }), "\n", createVNode(_components.p, {
      children: "宁愿有些重复，也不要过度抽象。努力让测试代码简单易读。你调试 UI 测试越多，就越能体会到其中的困难。当你需要理解底层发生了什么，以及哪一步不按预期工作时，你那超度抽象、完全符合 DRY 原则（不重复自己）的测试代码就会变得令人头痛。"
    }), "\n", createVNode(_components.p, {
      children: "更一般而言，测试是小型脚本，它们必须比它们测试的代码简单两个数量级，将其视为一个盟友，而不是更复杂的程序。"
    }), "\n", createVNode(_components.h3, {
      id: "选择专门设计的工具",
      children: "选择专门设计的工具"
    }), "\n", createVNode(_components.p, {
      children: ["上述提到的解决方案都是有效的，但它们有一个共同点：", createVNode(_components.strong, {
        children: "它们都是变通方法"
      }), "。这是因为我在示例中使用的工具 Puppeteer 并非为 UI 测试而创建的，而是为通用浏览器自动化而设计的，然后，通过一些外部工具的帮助，并在测试中使用 Puppeteer，使其可以用于 UI 测试。测试 Web 应用有不同的需求，需要不同的工具，而不仅仅是自动化操作。"]
    }), "\n", createVNode(_components.p, {
      children: ["如果你需要编写 UI 测试，你应该考虑切换到 Cypress 或 TestCafé，因为它们已经被设计成简化你的测试工作。如何实现的呢？通过一系列实用工具和默认行为，以及一系列一流的解决方案，使你能够理解并调试浏览器中发生的情况。请注意，本章中提到的所有 Puppeteer ", createVNode(_components.strong, {
        children: "最佳实践"
      }), "… ", createVNode(_components.strong, {
        children: "在 Cypress 或 TestCafé 中完全无用"
      }), " 😉"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/tools/ui-testing-problems-cypress.zh.md",
        children: "一些 UI 测试问题及 Cypress 方法"
      }), " 和 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/use-your-testing-tool-as-your-primary-development-tool.zh.md",
        children: "前端生产力提升：将 Cypress 作为你的主要开发浏览器"
      }), " 这两章包括了 Cypress 一流工具的概述。"]
    }), "\n", createVNode(_components.p, {
      children: ["由", createVNode(_components.a, {
        href: "https://github.com/NoriSte",
        children: "NoriSte"
      }), " 在 ", createVNode(_components.a, {
        href: "https://dev.to/noriste/ui-tests-debugging-best-practices-1eg3",
        children: "dev.to"
      }), " 和 ", createVNode(_components.a, {
        href: "https://medium.com/@NoriSte/ui-tests-debugging-best-practices-789c4ed4daf6?sk=c6056f124f40b15e09669e5839e9f814",
        children: "Medium"
      }), "上进行联合发表._"]
    }), "\n", createVNode(_components.h2, {
      id: "在测试中达到-ui-状态而无需使用-ui",
      children: "在测试中达到 UI 状态而无需使用 UI"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/reaching-ui-state.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/reaching-ui-state.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "在 UI 场景中覆盖一次是有价值的，而在其他测试中复制其中任何部分提供的价值很小；这些测试可能需要系统的相关状态。假设在一个新测试中，你需要一种状态，而那种状态 - 部分或全部 - 与 UI 测试中的某些部分重复。在这种情况下，可以考虑以下几种技术："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "直接导航"
      }), "\n", createVNode(_components.li, {
        children: "网络存根记录和播放"
      }), "\n", createVNode(_components.li, {
        children: "应用程序动作"
      }), "\n", createVNode(_components.li, {
        children: "数据库种子"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "免责声明：整个技术包的应用仅在 Cypress 中可能（据我们所知），因此以下代码示例是在 Cypress 上下文中。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "直接导航",
      children: "直接导航"
    }), "\n", createVNode(_components.p, {
      children: "这是最简单的技术，适用于任何框架。假设测试的意图与你的应用程序中的某个页面有关。与其进行点击导航，直接访问 URL。一旦到达，你可以等待 UI 元素（任何测试框架）或网络调用（一些测试框架），或两者兼而有之。"
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
            children: "// Test A covers click-navigation to a certain page."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// This is Test B, and navigating to that page is the prerequisite step."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// assuming baseUrl is set in cypress.json or config file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// directly navigate to the page."
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
            children: "visit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/endpoint'"
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
            children: "// to ensure stability, wait for network (preferred), ui elements, or both"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// note: checking the endpoint you are at is entirely optional, only for sanity that you are at the right page"
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
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'endpoint'"
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
              color: "#6A737D"
            },
            children: "// cy.url().should('match', /endpoint/); // there are many, some more complex, ways of doing it"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// network wait: this is in addition to the sanity url check, and it is more important"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// because you want the page to \"settle\" before you start running assertions on it"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// usually a GET request. Is aliased so we can wait for it."
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
            children: "intercept"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'some-xhr-call-that-happens-upon-landing'"
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
            children: "'crutcXHR'"
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
              color: "#6A737D"
            },
            children: "// The default Cypress timeout is 4 seconds. 15 seconds here is arbitrary."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Most pages load faster, but if you need more time then increase the timeout."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// The only caveat to increasing timeout is that the tests will take longer to fail, but still run as fast as possible when things work."
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
            children: "wait"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'@crutchXHR'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", {timeout: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "15000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// ui-element wait is straightforward, and may be optional, as well as less stable)"
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
            children: "'element-on-page'"
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
            children: "'exist'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "and"
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
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "直接导航的优缺点",
      children: "直接导航的优缺点"
    }), "\n", createVNode(_components.p, {
      children: "优点：不进行点击导航可以节省测试时间，并减少测试维护的工作量。"
    }), "\n", createVNode(_components.p, {
      children: "缺点：这种技术忽略了用户通过应用程序的端到端点击方式。确保在其他测试中至少有一个工作流程覆盖与点击导航相同的工作流程，以确保点击导航功能不会出现回归问题。通常，点击导航可以成为一个独立的测试；在设置其他测试的状态时，不要重复已经在其他地方覆盖的 UI 测试。思考模式类似于登录；如果在一个测试中进行 UI 登录，在其他测试中可以实现程序化登录，这既快速又经济。"
    }), "\n", createVNode(_components.h3, {
      id: "应用程序操作",
      children: "应用程序操作"
    }), "\n", createVNode(_components.p, {
      children: ["Cypress 为你提供了对应用程序的完全控制权。你可以绕过页面对象的抽象层（与你的应用程序分离），通过 ", createVNode(_components.code, {
        children: "cy.get()"
      }), " 直接访问 UI，还可以访问 API、数据库，甚至可以访问源代码。"]
    }), "\n", createVNode(_components.p, {
      children: ["应用程序操作是一种快捷方式，允许你访问内部工具以节省时间。一个简单的例子可以是一个 ", createVNode(_components.code, {
        children: "cy.signup()"
      }), " 自定义命令，该命令进入注册表单并调用注册表单的回调，而不是填写表单并点击注册按钮。"]
    }), "\n", createVNode(_components.p, {
      children: "以下是一个快速示例，演示了在 Angular 应用程序中如何允许 Cypress 访问源代码。"
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
            children: "// Angular Component file example"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/* setup:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " 1. Identify the component in the DOM;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  inspect and find the corresponding <app.. tag,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " 2. Right in the constructor of your component, insert conditional */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "constructor"
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
              color: "#6A737D"
            },
            children: "  /* ... */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  /* if running inside Cypress tests, set the component"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  may need // @ts-ignore initially */"
          })
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
            children: " (window.Cypress) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    window.yourComponent "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " this"
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
            children: "  }"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// at https://github.com/naodeng/ui-testing-best-practices/blob/master/https://github.com/naodeng/ui-testing-best-practices/blob/master/support/app-actions.ts helper file:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/** yields  window.yourComponent */"
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
            children: " yourComponent"
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
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "'have.property'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'yourComponent'"
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
            children: "/** yields the data property on your component */"
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
            children: " getSomeListData"
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
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " yourComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "'have.property'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'data'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["在这之后，在 DevTools 中查看该组件允许的属性，或者在组件代码中查看你可以使用 ", createVNode(_components.code, {
        children: ".invoke()"
      }), " 进行的函数。"]
    }), "\n", createVNode(_components.p, {
      children: ["可以查看 ", createVNode(_components.a, {
        href: "https://cypress.slides.com/cypress-io/siemens-case-study#/12/3/4",
        children: "演示幻灯片"
      }), " 获取一个使用应用程序操作进行视觉测试的代码示例。"]
    }), "\n", createVNode(_components.h4, {
      id: "另一个应用程序操作的示例利用状态使用-siemens-的-building-operator-siemens-的建筑控制产品",
      children: ["另一个应用程序操作的示例，利用状态，使用 Siemens 的 ", createVNode(_components.a, {
        href: "https://new.siemens.com/us/en/products/buildingtechnologies/automation/talon/software/building-operator.html?stc=ussi100451&sp_source=ussi100451&&s_kwcid=AL!464!3!435315652461!b!!g!!%2Bbuilding%20%2Boperator&ef_id=CjwKCAjw8df2BRA3EiwAvfZWaAsQmgot5Ph-nGBB8rW1QLLr870q2HW-qzMKhqtQb1QvlPBVJxho5BoCmtMQAvD_BwE:G:s",
        children: "Building Operator"
      }), " Siemens 的建筑控制产品"]
    }), "\n", createVNode(_components.p, {
      children: "在下面的状态图中有 3 个状态。我们从左右两个窗格都存在的地方开始。如果删除右窗格（删除点/红色流），则只剩下左窗格。如果删除左窗格（删除设备 - 蓝色流），两个窗格都消失，并且 UI 被重定向。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/ui-state/delete-states.PNG?raw=true",
        alt: "删除建筑点和控制器"
      })
    }), "\n", createVNode(_components.p, {
      children: "在测试 UI 时，你可能选择删除右窗格（红色流），然后在另一个测试中，你可能选择删除左窗格（蓝色流）。这遗漏了通过状态图的最后一条路径，其中右窗格和左窗格被逐一删除。"
    }), "\n", createVNode(_components.p, {
      children: ["我们已经在一个 UI 测试中涵盖了删除右窗格（红色路径）。为什么不避免重复进行此测试，利用应用程序操作，获取源代码中的删除函数，并使用 ", createVNode(_components.code, {
        children: "cy.invoke()"
      }), " 调用它呢？"]
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
            children: "'Component test: delete right pane and then left'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  /* tests a SEQUENCE not covered with UI tests"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "   * tests a COMBINATION of components */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  appAction."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "deleteRightPane"
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
            children: "  cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "'not.have.property'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'rightPaneComponent'"
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
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "'have.property'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'leftPaneComponent'"
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
            children: "  appAction."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "deleteLeftPane"
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
            children: "  cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "'not.have.property'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'leftPaneComponent'"
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
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "'not.have.property'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'rightPaneComponent'"
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
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
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
            children: "'match'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", redirectRoute);"
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
    }), "\n", createVNode(_components.h4, {
      id: "应用程序操作的优缺点",
      children: "应用程序操作的优缺点"
    }), "\n", createVNode(_components.p, {
      children: "使用应用程序操作/拥有组件访问速度很快！测试不太容易受到变化的影响。一般来说，这是在较低级别进行测试的好处。然而，对于工程师而言，这可能会变得让人上瘾，开始忽视对用户界面的测试；优势可能变成劣势。"
    }), "\n", createVNode(_components.p, {
      children: "有一些反对应用程序的论点。开发人员可能认为 Cypress 对源代码的访问不理想。在 Cypress 具有官方组件测试支持之前，这没有反驳的理由。"
    }), "\n", createVNode(_components.p, {
      children: "应用程序操作的真正威力在于将应用程序操作与其他技术结合使用时显现出来；不重复 UI 工作流程来设置状态，将组件测试与视觉测试结合使用，将组件测试与网络操作结合使用，这些都是这种方法的亮点所在。"
    }), "\n", createVNode(_components.h3, {
      id: "网络存根记录和回放",
      children: "网络存根记录和回放"
    }), "\n", createVNode(_components.p, {
      children: ["这是一种与 UI 集成测试密切相关的高级技术。回顾 UI 集成参考 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/testing-strategy/component-vs-integration-vs-e2e-testing.zh.md",
        children: "1"
      }), ", ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/real-life-examples/test-front-end-with-integration-back-end-with-e2e.md",
        children: "2"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "Cypress 允许你对所有网络流量进行存根。我们可以记录来自一个端点的网络数据，并在 UI 每次调用任意服务器时存根该响应。"
    }), "\n", createVNode(_components.p, {
      children: ["首先，从开发者工具复制网络数据到一个 json 文件中。将其放置在 ", createVNode(_components.code, {
        children: "cypress/fixtures"
      }), " 文件夹中。这个文件夹专为此目的而创建，对它的任何引用都将默认指向文件夹的根目录。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/ui-state/devtools-network.PNG?raw=true",
        alt: "开发者工具 > 网络选项卡"
      })
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
            children: "// prerequisite: the data has been copied to a file `cypress/fixtures/agents.json`"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// this is a shorthand for cy.fixture(). More at https://docs.cypress.io/api/commands/fixture.html#Accessing-Fixture-Data"
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
            children: "intercept"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'some-xhr-call-that-happens-upon-landing'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { fixture: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'agents.json'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "} )."
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
            children: "'crutcXHR'"
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
              color: "#6A737D"
            },
            children: "// all calls to the network route will be stubbed by the data in agents.json file"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "如果有很多网络请求发生怎么办",
      children: "如果有很多网络请求发生怎么办？"
    }), "\n", createVNode(_components.p, {
      children: "我们从哪里获取所有的模拟数据？我们不想手动复制和保存它们。我们希望在测试运行时记录它们，以便与真实的 API 进行比对。"
    }), "\n", createVNode(_components.p, {
      children: ["至少有两个 Cypress 插件可以用于这个目的 ", createVNode(_components.a, {
        href: "https://github.com/Nanciee/cypress-autorecord",
        children: "1"
      }), " 和 ", createVNode(_components.a, {
        href: "https://github.com/scottschafer/cypressautomocker",
        children: "2"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "如果这些插件不适用于你，你可以轻松使用以下三个函数创建自己的记录和回放工具。"
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
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " stubRecorder"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "pathToJson"
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " xhrData"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " []; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// an empty array to hold the data"
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
            children: "server"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// if recording, save the response data in the array"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    onResponse"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "response"
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
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      const"
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
              color: "#E1E4E8"
            },
            children: " response.url;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " method"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.method;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      const"
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
            children: " response.response.body;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      // We push a new entry into the xhrData array"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      xhrData."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "push"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ url, method, data });"
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
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // cy.intercept() specification below is used as a selector for the data you want to record."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // In this example, all GET requests from any url will be selected"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // You can specify the methods and routes that are recorded"
          })
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
            children: "'recording!'"
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
            children: "intercept"
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
            children: "    method: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'GET'"
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
            children: "    url: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'*'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // if recording, after the test runs, create a fixture file with the recorded data"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  after"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
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
            children: "    cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "writeFile"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`./cypress/fixtures/${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pathToJson"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}.json`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", xhrData);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    cy."
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
            children: "`Wrote ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "xhrData"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "} XHR responses to local file ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pathToJson"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}.json`"
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
            children: "/** Plays recorded fixture with all required network data as json*/"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " playStubbedFixture"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "stateFixture"
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
            children: "`playing fixture from ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "stateFixture"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
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
            children: "fixture"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(stateFixture, { timeout: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "15000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// the fixture file may be large and take time in CI"
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
            children: "each"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(({"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "method"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}) "
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
            children: "      cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "intercept"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(method, url, data);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    })."
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
            children: "`stateFixture_stub`"
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
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/** Visits the stubbed state */"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " visitStubbedState"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "stubFile"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "wait"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
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
              color: "#B392F0"
            },
            children: "  playStubbedFixture"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(stubFile);"
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
            children: "visit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(url);"
          })]
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
            children: " (wait) { "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// sometimes you do not want to wait for network, this gives you the option"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wait"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'@stateFixture_stub'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { timeout: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "15000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " });"
          })]
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
            children: "//////////"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// usage"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// recording network"
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
            children: "'should run your test'"
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
              color: "#B392F0"
            },
            children: "  stubrecorder"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'jsonfileNameForNetworkData'"
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
            children: "  // your original test"
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
            children: "wait"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// one-time wait so that the after() step records all the network without missing anything"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // the rest of your original test"
          })
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// playing the stubbed network"
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
            children: "'should run your test'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // every time we visit this endpoint, all network will be stubbed"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // double check this by observing (XHR stubbed) network responses in the test runner"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  visitStubbedState"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'jsonfileNameForNetworkData'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/endpoint'"
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
            children: "  // the rest of your original test"
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
    }), "\n", createVNode(_components.h4, {
      id: "网络存根记录和回放的优缺点",
      children: "网络存根记录和回放的优缺点"
    }), "\n", createVNode(_components.p, {
      children: "UI 集成测试是 UI 测试的核心。它们在真实浏览器中运行整个应用程序，而不连接真实服务器。它们运行速度极快，对网络中的随机故障或错误负面影响较小。"
    }), "\n", createVNode(_components.p, {
      children: ["工程师们必须认识到，这种优势如果被滥用可能成为一种诅咒。UI 应用程序是隔离的，但如果有网络故障，它们会被忽略。这对于功能分支测试非常有用，但在进一步的部署中，应确保后端也正常运行。请参阅 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/real-life-examples/test-front-end-with-integration-back-end-with-e2e.zh.md",
        children: "使用集成测试前端，同时使用 E2E 测试后端"
      }), " 了解何时使用哪种技术。"]
    }), "\n", createVNode(_components.h3, {
      id: "填充数据库",
      children: "填充数据库"
    }), "\n", createVNode(_components.p, {
      children: ["Cypress ", createVNode(_components.a, {
        href: "https://docs.cypress.io/api/commands/task.html#Requirements",
        children: createVNode(_components.code, {
          children: "cy.task()"
        })
      }), " 功能非常强大。实际上，它允许你在 Cypress 上下文中使用 Node.js。这可以是任何内容，从 Node.js 代码到使用 npm 包来操纵数据库。如果你的应用程序使用 Node.js，你可以重用应用程序代码来帮助设置和操纵测试数据。"]
    }), "\n", createVNode(_components.p, {
      children: ["关于这个主题有一个 ", createVNode(_components.a, {
        href: "https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/server-communication__seeding-database-in-node",
        children: "Cypress 示例"
      }), "，我们将以此作为参考结束。"]
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

const url = "src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-2-ui-tests-debugging-best-practices-and-reaching-ui-state.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-2-ui-tests-debugging-best-practices-and-reaching-ui-state.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-2-ui-tests-debugging-best-practices-and-reaching-ui-state.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
