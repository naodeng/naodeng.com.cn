import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "UI 测试最佳实践的工具篇（一）：一些 UI 测试问题及 Cypress 的解决方案",
  "description": "这篇博文聚焦于 UI 测试最佳实践的工具，首篇介绍一些 UI 测试问题及 Cypress 的解决方案。文章探讨了常见 UI 测试难题，详细介绍了 Cypress 框架如何提供强大的解决方案，包括实时查看、可靠性、速度等方面的优势。通过这些解决方案，读者能够更好地应对 UI 测试中的挑战，提高测试效率和可靠性。",
  "date": "2024-01-25T09:06:44.000Z",
  "author": "nao.deng",
  "tags": ["UI 测试问题", "Cypress 解决方案"],
  "categories": ["UI 测试", "工具"],
  "series": ["UI 测试最佳实践"],
  "cover": "./UI-Testing-best-practice-tools-ui-testing-problems-cypress-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "一些-ui-测试问题及-cypress-的解决方案",
    "text": "一些 UI 测试问题及 Cypress 的解决方案"
  }, {
    "depth": 3,
    "slug": "常用工具",
    "text": "常用工具"
  }, {
    "depth": 3,
    "slug": "测试运行器的用途",
    "text": "测试运行器的用途"
  }, {
    "depth": 3,
    "slug": "浏览器自动化工具的用途",
    "text": "浏览器自动化工具的用途"
  }, {
    "depth": 3,
    "slug": "隐性测试挑战",
    "text": "隐性测试挑战"
  }, {
    "depth": 3,
    "slug": "cypress-助力解决",
    "text": "Cypress 助力解决"
  }, {
    "depth": 3,
    "slug": "ccypress-拥有用户界面",
    "text": "CCypress 拥有用户界面"
  }, {
    "depth": 3,
    "slug": "cypress-命令行",
    "text": "Cypress 命令行"
  }, {
    "depth": 3,
    "slug": "测试质量",
    "text": "测试质量"
  }, {
    "depth": 3,
    "slug": "生产力",
    "text": "生产力"
  }, {
    "depth": 3,
    "slug": "调试",
    "text": "调试"
  }, {
    "depth": 3,
    "slug": "常见问题",
    "text": "常见问题"
  }, {
    "depth": 3,
    "slug": "结论",
    "text": "结论"
  }, {
    "depth": 3,
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
      id: "一些-ui-测试问题及-cypress-的解决方案",
      children: "一些 UI 测试问题及 Cypress 的解决方案"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/tools/ui-testing-problems-cypress.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/tools/ui-testing-problems-cypress.md"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "招募贡献者：你是否是 TestCafé 专家？我希望将“问题”部分与“Cypress 如何解决它们”部分分开，并添加一个专门介绍 TestCafé 如何解决问题的章节！"
      })
    }), "\n", createVNode(_components.p, {
      children: ["在测试前端应用程序时会面临一些“传统”测试不具备的挑战：你需要", createVNode(_components.strong, {
        children: "协调一个真实的浏览器"
      }), "。浏览器本质上是庞大的应用程序，你需要启动它们，通过专门的库进行管理，利用一些 API 来模拟用户可能执行的相同类型的交互，然后检查前端应用程序的状态（基本上是显示的内容）是否符合你的期望。"]
    }), "\n", createVNode(_components.p, {
      children: "这个过程及其涉及的步骤是使 UI 测试变得困难的原因。主要问题包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "一切都是异步的"
        }), "：用户模拟的交互是异步的，UI 异步响应，浏览器异步响应，你用于协调和与浏览器通信的工具也是异步的。"]
      }), "\n"]
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
            children: "goto"
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
            children: "click"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'[data-test=\"contact-us-button\"]'"
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
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(page)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toMatch"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Contact Us\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "而一旦你需要处理更加复杂的情况，等待所有事情就会导致你深陷于管理承诺和递归承诺之中。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "你要自动化用户流程"
          }), "：因此，你需要复制用户流程，检查自动用户流程，调试失败的（还有自动的、超级快的）用户流程。\n想象一下，你与同事并排工作，他遇到了问题，你要求他执行某个操作，以便你可以直接使用他的浏览器 DevTools 检查问题，但是", createVNode(_components.strong, {
            children: "当你需要检查问题时，他却不停地点击/输入"
          }), "。这就是在 UI 测试中遇到问题时需要面对的情况。暂停/停止正在运行的流程很困难，你需要多次重新运行相同的测试。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["在 Web 应用程序中，有很多情况可能会干扰元素的交互性：它的内部状态、标记属性、视觉外观、其他元素的外观等。其中一些很容易发现（例如，“禁用”属性），但有些则不是（具有更高 z-index 值的另一个元素）。总的来说，", createVNode(_components.strong, {
            children: "很难调试问题的原因"
          }), "，因为你需要仔细检查元素本身、整个页面、自动化交互的工具等。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "自动化和测试前端应用程序确实很有挑战，但有一些工具不能减轻痛苦，还有一些工具能为你赋予超能力，继续前进吧！"
    }), "\n", createVNode(_components.h3, {
      id: "常用工具",
      children: "常用工具"
    }), "\n", createVNode(_components.p, {
      children: "要自动化和测试前端应用程序，你需要两种不同的工具："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "一个测试运行器：负责执行测试本身的工具"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "一个浏览器自动化工具：提供一些 API 与专门启动的浏览器进行交互的工具"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这两个工具是独立的，你选择的测试运行器（例如 Jest）在终端中运行（并提供所有测试反馈），而第二个工具（如 Selenium 或 Puppeteer）则打开一个浏览器，执行测试中编写的命令，并返回结果。"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/ui-testing-problems-cypress/terminal-and-browser.jpg?raw=true",
        alt: "基于终端的测试运行程序和浏览器自动化工具之间可以进行双向通信。."
      }), createVNode(_components.em, {
        children: "基于终端的测试运行程序和浏览器自动化工具之间可以进行双向通信。"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "这两个工具是相互独立的"
      }), "，这使得很多事情变得复杂！在浏览器中执行的操作非常快速！你可以减缓它们的速度，但无法暂停或停止它们！或者更确切地说，至少不能通过交互方式实现… 因为你显然可以", createVNode(_components.strong, {
        children: "在代码编辑器中来回跳转"
      }), "，在你想要检查的步骤之后注释掉所有内容，重新运行测试并检查发生了什么。但这并不是一个理想的流程。而且由于测试是一个小程序，你知道你需要重复这个步骤很多次……"]
    }), "\n", createVNode(_components.p, {
      children: "在以上描述的方式中运行测试时，另一个问题出现了：通常你在终端登录（测试运行器工作的地方），而操作则发生在浏览器中。**你如何将它们连接起来？**你是否在终端和浏览器控制台中都添加时间戳记录？是否在你的前端应用程序上方添加一个固定的 DIV，显示正在运行的测试名称？在终端中发生的事情与通过终端执行（或记录）的事情之间的连接也很困难。"
    }), "\n", createVNode(_components.p, {
      children: "最后但同样重要的是：在终端中调试测试时，你并不是在调试真实的 DOM 元素，而是在调试序列化/引用的元素。终端和浏览器之间没有任何双向交互性，因此你不能像你习惯的那样充分利用浏览器的 DevTools。"
    }), "\n", createVNode(_components.p, {
      children: "相信我，以这种方式理解为什么测试失败或为什么浏览器不如你期望的那样工作真的很困难。但你必须在测试消耗过程的所有三个不同阶段面对这个问题："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "1：当你最初编写测试时"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "2：当测试失败时，你不能将任何东西发送到生产环境"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "3：当你需要更新它们因为规格发生了变化"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "步骤 #1 和 #3 相当相似，#3 可能更快，但 #1 可能会令人筋疲力尽。如果你使用的工具不帮助你，#2 将使你对 UI 测试产生厌恶…"
    }), "\n", createVNode(_components.h3, {
      id: "测试运行器的用途",
      children: "测试运行器的用途"
    }), "\n", createVNode(_components.p, {
      children: "停下来，思考一下所提到的工具试图达到的目标，从测试运行器开始。"
    }), "\n", createVNode(_components.p, {
      children: ["测试运行器用于管理单元测试。当然，你可以按照自己的方式使用/插入它们，但它们基本上是为了超快速（并行化）的小型功能调用而设计的。它们没有类似浏览器 DevTools 的功能，但", createVNode(_components.strong, {
        children: "主要问题是测试超时"
      }), "。每个测试都有一个超时，这是完全合理的。由于超时，如果一个测试运行时间太长，测试运行器会将其终止。"]
    }), "\n", createVNode(_components.p, {
      children: "但是当你将测试超时与 UI 测试的需求结合在一起时，会发生什么呢？正如你所知，用户流程可能会非常漫长。有很多原因："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "交互本身可能会非常漫长，并涉及大量的点击、输入、计算、等待等。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["有很多东西", createVNode(_components.strong, {
            children: "根本无法（从时间角度）受控制"
          }), "，尤其是 XHR 请求！你无法知道 Docker 容器（或者暂存服务器）响应需要多长时间。如果后端没有使用 Docker，你还必须面对网络缓慢的问题。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这些例子展示了 UI 测试可能会有多么不可预测。解决方案似乎很方便：增加测试超时时间！但这是最糟糕的解决方案，因为："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["测试超时是在出现问题时可以节省大量时间的“绞刑”。如果将超时设置为一分钟，如果单个测试未按预期工作，你将", createVNode(_components.strong, {
            children: "等待一分钟"
          }), "（60 秒！！！）。测试持续时间过长是开发人员讨厌测试的主要原因之一，因为流水线永远无法结束。尽管如此：在某些特定场景中，你无法确定 60 秒是否足够…… 想想 AWS Lambda 在慢服务器唤醒时所需的时间，再加上网络问题……"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "调试过程怎么办？请记住，当由于超时而终止测试时，自动化浏览器会被自动关闭……"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "最后但同样重要的是，记住你需要进行与 DOM 相关的断言。在 UI 测试中，你不处理对象、数组和基元，而是基本上处理 DOM 元素。像“我期望元素等于…”这样的断言是无效的，尽管对于单元测试而言是有效的，当然，这个问题通常通过外部插件来解决。"
    }), "\n", createVNode(_components.h3, {
      id: "浏览器自动化工具的用途",
      children: "浏览器自动化工具的用途"
    }), "\n", createVNode(_components.p, {
      children: ["Selenium 和 Puppeteer 旨在提供一种简单、不依赖于魔法的 UI 自动化体验。它们并不是用于测试 UI，而只是为了自动执行用户交互。", createVNode(_components.strong, {
        children: "自动化和测试在某些方面有重叠，但它们并不相同"
      }), "。两者都试图理解按钮是否可点击，并尝试点击它，但前者在失败时会失败，而后者会尝试告诉你为什么失败。前者告诉你一个元素不在页面上，而后者告诉你它不在页面上是因为先前的 XHR 请求失败了。"]
    }), "\n", createVNode(_components.p, {
      children: "我们习惯于将测试运行器与浏览器自动化工具组合在一起，并尝试充分利用它们，但由于两个非集成且不同的工具无法提供的问题而感到困扰。"
    }), "\n", createVNode(_components.p, {
      children: ["再谈论测试（和待测试的应用程序）的可调试性：为了减速/调试/暂停/停止/使它们工作等等，你需要经常“休眠”测试。这是一种常见的实践，既因为它在短期内解决了问题，有时因为你没有其他选择（请阅读 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.zh.md",
        children: "等待，不要休眠"
      }), " 部分）。不幸的是，添加一些**“休眠”步骤会使测试变得越来越糟糕**，越来越慢。正如我之前所写的：测试的缓慢是导致开发人员讨厌 UI 测试的最常见缺陷之一。"]
    }), "\n", createVNode(_components.p, {
      children: "此外：**测试失败时会发生什么？**在理解如何修复错误之前，你可以采取什么措施了解问题？如果你足够幸运地在本地发现了有问题的测试，那么你的痛苦是有限的。但如果测试在流水线中失败，如果你没有界面，你怎么知道发生了什么？你是否添加了一些自动截图的保险伞？有什么比截图更直观的吗？不幸的是……"
    }), "\n", createVNode(_components.p, {
      children: "你甚至需要利用第三方调试工具（React DevTools、Vue DevTools 等），但将它们安装到受控浏览器上的过程并不是世界上最方便的。"
    }), "\n", createVNode(_components.p, {
      children: "最后但同样重要的是：对服务器进行存根化并断言关于 XHR 请求的内容可能被视为测试实现细节… 但我不这么认为，有两个原因："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["在谈到黑盒测试时，我们提到了（好的）实践，即避免测试某些东西的工作方式，只集中在它做了什么上。应用于前端应用程序时，意味着只测试应用程序向用户公开的功能，而不是它是如何公开的（它是否使用 React 或 Vue.js、是否将数据保存到 localStorage 或 sessionStorage 并不重要）。相同的原则也可以应用于客户端/服务器通信，但了解某事之所以没有发生是因为错误的 XHR 请求可能很困难（特别是当你以无头模式运行自动化浏览器时）。而通过断言请求负载、响应负载、响应状态等，你得到的帮助是无价的（", createVNode(_components.strong, {
            children: "始终关注测试在失败情况下如何引导你识别问题"
          }), "）。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "如果你使用 Pact 或类似的工具测试客户端/服务器合同，那么你就不需要这样做，但在你的工作流中是否有这类测试？"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "如果你是前端开发人员，你知道你不能总是在后端工作完成后才开始工作。但如果他们为你提供了完整的 JSON 响应，存根化后端可以让你完成所有前端编码工作，只需在集成前端与后端时检查一切是否按预期工作。这涉及到生产力问题。"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "隐性测试挑战",
      children: "隐性测试挑战"
    }), "\n", createVNode(_components.p, {
      children: ["上述考虑带来了另一个问题：", createVNode(_components.strong, {
        children: "测试代码应该尽可能简单"
      }), "。测试允许你检查一切是否按预期工作，但它们毕竟是小型程序。因此，你需要随着时间来维护它们。由于你需要在一段时间后理解它们（如果你需要花费数小时来理解为什么和如何测试工作，那是不可行的，测试应该帮助你，而不是像糟糕的代码那样使你的生活变得复杂），因此它们的代码不应该很复杂（请阅读 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/testing-perks/tests-as-documentation.zh.md",
        children: "将软件测试视为文档工具"
      }), " 部分）。"]
    }), "\n", createVNode(_components.p, {
      children: ["然而，并非为像 UI 测试这样困难的任务而创建的工具并不帮助你编写简单的测试代码。因此，你的测试生活再次变得更加困难…… 因此，你注定要花费大量时间调试失败的测试，而不是理解前端应用程序中到底发生了什么问题（假设确实出现了问题……）。", createVNode(_components.strong, {
        children: "结果是测试的可信度降低"
      }), "……"]
    }), "\n", createVNode(_components.h3, {
      id: "cypress-助力解决",
      children: "Cypress 助力解决"
    }), "\n", createVNode(_components.p, {
      children: ["别担心，我并不是为了让你感到悲伤而描述这种戏剧性的情况😉，而只是为了让你意识到你不需要混合使用通用工具，你需要一些专门设计的工具！我想到了两个工具：", createVNode(_components.a, {
        href: "https://www.cypress.io/",
        children: "Cypress"
      }), " 和 ", createVNode(_components.a, {
        href: "https://devexpress.github.io/testcafe/",
        children: "TestCafé"
      }), "。两者都非常出色，因为它们只有一个目标：重新发明（或修复？）UI 测试领域。"]
    }), "\n", createVNode(_components.p, {
      children: "我将专注于 Cypress，并稍后将它们进行比较。\nCypress 是如何解决上述所有问题的？首先…"
    }), "\n", createVNode(_components.h3, {
      id: "ccypress-拥有用户界面",
      children: "CCypress 拥有用户界面"
    }), "\n", createVNode(_components.p, {
      children: ["是的，你通过终端启动 Cypress，但是你是通过它的用户界面 ", createVNode(_components.a, {
        href: "https://docs.cypress.io/guides/core-concepts/test-runner.html",
        children: "来使用它的"
      }), "！而且该用户界面是与你的应用程序并排的！请看这个预览"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/ui-testing-problems-cypress/cypress-preview.png?raw=true",
        alt: "命令日志用户界面"
      }), createVNode(_components.em, {
        children: [createVNode(_components.a, {
          href: "https://docs.cypress.io/guides/core-concepts/test-runner.html",
          children: "命令日志用户界面"
        }), "（左侧）与你的前端应用程序（右侧）并排运行。"]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["这是什么意思？", createVNode(_components.a, {
        href: "https://docs.cypress.io/guides/core-concepts/test-runner.html",
        children: "命令日志用户界面"
      }), " 的主要特点有哪些？"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "你直接获得 Cypress 正在执行的反馈"
        }), "。每次通过其命令（cy.click、cy.type 等）要求 Cypress 与页面交互时，Cypress 都会向测试运行器添加一个日志。这种冗长的自动日志记录在编写测试和调试测试时非常有帮助。它极大地提高了你的生产力，既因为它是自动的，又因为它与你的应用程序并排。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "但是，正如我告诉过你的，当编写 UI 测试时，缺少追溯性的调试性是一个很大的缺陷…让我向你介绍…"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "交互式时间旅行"
        }), "：不确定应用程序是如何达到特定命令或测试失败的？你想查看一下前一个步骤的 UI 吗？这就是命令日志是交互式的原因！你可以悬停在各个记录的步骤上，看看应用程序在特定步骤的外观！或者，显然，你可以固定一个步骤并检查 DOM，检查应用程序在该步骤之前/之后的外观等。这是另一个拯救生命的功能，无论是在初次接触时（在你不了解测试工具的情况下调试测试可能是一场噩梦）还是在日常测试工作中。它使测试检查变得如此方便，以至于你完全忘记了没有它是如何进行测试的。在 ", createVNode(_components.a, {
          href: "https://www.youtube.com/watch?v=C62rYlmKLho&feature=youtu.be",
          children: "此视频"
        }), " 中查看其实际效果。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "其他命令日志实用工具包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "命令详细日志：单击命令会在浏览器 DevTools 中显示更详细的日志"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "断言检查：单击断言会在浏览器 DevTools 中显示预期值和结果。你无需以更详细的日志记录重新启动测试"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "如果你监视 XHR 调用，则命令日志会显示受监视/存根调用的摘要以及它们被调用的次数"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["… 还有更多，详见 ", createVNode(_components.a, {
        href: "https://docs.cypress.io/guides/core-concepts/test-runner.html#Command-Log",
        children: "Cypress 官方文档中的其功能"
      }), "。"]
    }), "\n", createVNode(_components.h3, {
      id: "cypress-命令行",
      children: "Cypress 命令行"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "默认情况下，命令是异步的"
      }), "，请看下面的片段"]
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
              color: "#E1E4E8"
            },
            children: "cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "click"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'[data-test=\"contact-us-button\"]'"
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
            children: "\"Contact Us\""
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
            children: "\"be.visible\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["你注意到有 await 吗？没有，原因很简单：在 UI 中的所有事物都需要等待，为什么你要管理 await 呢？Cypress 会为你“等待”，这意味着如果一个 DOM 元素在你尝试与之交互时还没有准备好，没问题！Cypress 会重试（默认为 4 秒），直到可以与元素交互（用户的方式，因此仅当元素可见时，不被禁用，没有被覆盖等）。因此，你可以", createVNode(_components.strong, {
        children: "完全避免面对前端固有的异步性"
      }), "！"]
    }), "\n", createVNode(_components.p, {
      children: ["上述功能还有一个效果：你还记得那个不太好的测试超时吗？好吧，把它忘掉吧！在 Cypress 中，", createVNode(_components.strong, {
        children: "测试没有超时"
      }), "！你无需猜测（并根据需要不断调整）测试的持续时间，每个命令都有自己的超时时间！如果出了什么问题，测试很快就会失败！而且如果测试顺利进行，就不会面临测试超时的问题！"]
    }), "\n", createVNode(_components.p, {
      children: ["最后但并非最不重要的：与 DOM 相关的命令报告", createVNode(_components.strong, {
        children: "与 DOM 相关的错误"
      }), "，你需要的方式。看下面的例子："]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/ui-testing-problems-cypress/dom-error.png?raw=true",
        alt: "Cypress 清晰地从用户/DOM 视角报告问题。"
      }), createVNode(_components.em, {
        children: "Cypress 清晰地从用户/DOM 视角报告问题。"
      })]
    }), "\n", createVNode(_components.p, {
      children: "很明显用户为什么无法在输入框中输入文字。Cypress 不是唯一一个具有像用户一样执行命令的工具，但其清晰的错误报告相当不同寻常。"
    }), "\n", createVNode(_components.h3, {
      id: "测试质量",
      children: "测试质量"
    }), "\n", createVNode(_components.p, {
      children: "在测试中，开发人员可能会犯很多常见的错误。有些错误可能微不足道，但有些则相当严重。Cypress 强制你避免一些错误，具体如何呢？"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["通过 ", createVNode(_components.strong, {
            children: ["AAA-质量的", createVNode(_components.a, {
              href: "https://docs.cypress.io/guides/overview/why-cypress.html",
              children: "文档"
            })]
          }), "：快来看一下，它包含了很多", createVNode(_components.a, {
            href: "https://docs.cypress.io/guides/references/best-practices.html",
            children: "最佳实践和反模式"
          }), "。所有人都对文档的质量给予了高度评价。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "重置状态"
          }), "：测试不会共享状态，因为每个测试运行之前都会重置 cookies、localStorage 等。你当然可以创建智能命令，以保持测试的独立性（共享状态的真正问题在于测试的独立性，可以看一下", createVNode(_components.a, {
            href: "https://noriste.github.io/reactjsday-2019-testing-course/book/sharing-authentication-state.html",
            children: "我课程中的一个例子"
          }), "），但你无法跳过重置。这是个优势，相信我 😉"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "移除了在断言失败时恢复测试的可能性，如果测试失败，你就无法继续进行。确实需要使测试更加稳定，即使有时可能看起来有些困难。这是一个明智的选择，否则你可能会被允许编写糟糕的测试。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["通过许多等待助手：", createVNode(_components.a, {
            href: "https://docs.cypress.io/guides/core-concepts/retry-ability.html#Commands-vs-assertions",
            children: "重试能力"
          }), " 和 ", createVNode(_components.a, {
            href: "https://docs.cypress.io/api/commands/wait.html#Syntax",
            children: "自动等待"
          }), " 是救命稻草，它们让你关心你的应用程序和测试，而不是等待元素等。Cypress 允许你等待 DOM 元素、XHR 请求、页面加载，并且它", createVNode(_components.strong, {
            children: "根据需要调整超时"
          }), "（XHR 请求或页面加载可能需要的时间比输入元素出现要长），而无需使用固定时间的等待（再次强调，请阅读", createVNode(_components.a, {
            href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.zh.md",
            children: "等待，不要休眠"
          }), "部分"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "生产力",
      children: "生产力"
    }), "\n", createVNode(_components.p, {
      children: ["Cypress 在另一个非常重要的方面获胜：提高生产力。请在专门的章节中详细了解：", createVNode(_components.a, {
        href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/use-your-testing-tool-as-your-primary-development-tool.zh.md",
        children: "将你的测试工具用作主要的开发工具"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "调试",
      children: "调试"
    }), "\n", createVNode(_components.p, {
      children: "如上所述，没有一些专门功能的情况下，调试测试可能会成为一场噩梦。调试失败的测试有两种情况："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在编写测试时"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在 CI/CD 流水线中测试失败时"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Cypress 提供了两个令人惊叹的解决方案："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.a, {
            href: "https://docs.cypress.io/api/commands/pause.html",
            children: "播放/暂停"
          }), " 功能**：通过编程或通过 UI，你都可以暂停测试然后恢复。是的，它甚至提供逐步导航，就像你习惯于在代码中设置断点并逐步进行一样。使用播放/暂停两次后，你就再也离不开它了 😊\n播放/暂停和时光旅行提供了令人惊叹的体验，让你完全忘记常见的费时调试困扰。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "自动截图和视频"
          }), "：如果测试失败，Cypress 会保存测试的最后一步的截图。有时，最后一步可以帮助你理解发生了什么（特别是如果你添加了很多表达明确意图的断言，", createVNode(_components.a, {
            href: "https://noriste.github.io/reactjsday-2019-testing-course/book/utility-in-case-of-failure.html",
            children: "在这里你可以阅读"
          }), "没有良好的逐步断言，你会面临什么风险），但如果截图不能帮助你太多… Cypress 还会录制整个测试的视频，包括测试运行器 UI。有时，自动记录帮助我以最简单的方式发现与 CI 相关的问题。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", createVNode(_components.p, {
      children: "我刚刚将 Cypress 介绍为一个完美的工具，现在我预先回答一些经常问我的常见问题："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Cypress 是否免费？是的，它是免费、开源、采用 MIT 许可。只有当你想要利用其 ", createVNode(_components.a, {
            href: "https://www.cypress.io/dashboard/",
            children: "Dashboard 服务"
          }), " 时，才需要付费。简单来说：你希望 Cypress 托管你测试的视频吗？那就需要付费，否则一切都是免费的。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Cypress 是否支持除 Chrome 之外的其他浏览器？在我写作的时候（2020 年 1 月 21 日），Firefox 和 Edge 的支持正处于 beta 测试阶段。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "我提到了 TestCafé，它们之间的主要区别是什么？"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "TestCafé 没有类似于 Test Runner UI 的功能"
            }), "，在我看来是一个很大的缺失。"]
          }), "\n", createVNode(_components.li, {
            children: "TestCafé 在 DOM 元素超时到期时等待，而 Cypress 最多等待相同的超时时间。因此，使用 TestCafé 时，你必须手动校准等待时间，以避免测试运行时间过长，而使用 Cypress 则无需关心这个问题。"
          }), "\n", createVNode(_components.li, {
            children: "TestCafé 没有完整的 XHR 请求检查，这是一个有争议的问题，但我认为这是一个重要的功能，可以使测试更加可靠，并提供有用的错误报告。"
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "TestCafé 支持所有现有的浏览器"
            }), "！这是一个独特的特点，而 Cypress 不支持所有浏览器，也不支持移动浏览器。请注意，跨浏览器的需求可能被高估，但如果你确实需要，TestCafé 是完美的工具。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Cypress 有缺点吗？当然有！它存在一个 ", createVNode(_components.a, {
            href: "https://github.com/cypress-io/cypress/issues/95#issuecomment-343214638",
            children: "与 window.fetch 相关的历史问题"
          }), "，这迫使你使用 Axios 或者 ", createVNode(_components.a, {
            href: "https://dev.to/matsilva/fetch-api-gotcha-in-cypress-io-and-how-to-fix-it-7ah",
            children: "添加一个变通方法"
          }), "，而且你可能需要一些额外的步骤来处理 OAuth，因为你的应用运行在 iframe 中。但尽管如此，它仍然是最受欢迎的 UI 测试工具之一。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "更一般地说：请记住，我们正在讨论 UI 测试，Cypress 在这方面表现得特别出色。如果你只是需要自动化浏览器（用于数据抓取或其他用途），请不要使用它！"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.p, {
      children: "总的来说，上述问题和解决方案可以归纳如下："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "前端测试中存在异步问题，Cypress 几乎可以完全透明地处理这些问题。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "逐步调试：Cypress 的时光旅行和播放/暂停功能是你的得力助手。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Cypress 在测试失败时提供清晰的错误信息。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "调试变得非常方便，多亏了并排运行测试和应用程序。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在测试失败时，自动截图和录像功能为诊断问题提供了帮助。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Cypress 测试本身没有超时限制，但 Cypress 命令有超时设置。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Cypress 允许你在没有后端的情况下轻松进行工作。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Cypress 具备许多提高生产力的功能。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Cypress 设计的唯一目标是使 UI 测试变得简单易行。"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.youtube.com/watch?v=RwWz4hllDtg",
          children: "掌握 UI 测试 - 会议视频"
        })
      }), "\n", createVNode(_components.li, {
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

const url = "src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-tools-ui-testing-problems-cypress.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-tools-ui-testing-problems-cypress.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-tools-ui-testing-problems-cypress.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
