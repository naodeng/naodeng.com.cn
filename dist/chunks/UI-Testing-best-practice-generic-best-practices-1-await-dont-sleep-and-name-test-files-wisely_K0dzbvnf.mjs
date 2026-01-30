import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "UI 测试最佳实践的通用最佳实践（一）：等待，不要休眠和明智地为测试文件命名",
  "description": "这篇博文探讨了 UI 测试的通用最佳实践之一：等待策略。强调了在 UI 测试中避免使用休眠（sleep）方法，而是采用等待机制来确保测试脚本与应用程序的同步。此外，博文提倡为测试文件采用明智的命名规范，以提高代码可维护性和可读性。通过这些最佳实践，读者将更有效地编写稳健的 UI 测试脚本，确保测试的准确性和可靠性，提升整个软件开发过程的质量。",
  "date": "2024-01-18T09:05:44.000Z",
  "author": "nao.deng",
  "tags": ["UI Testing", "Best Practices"],
  "categories": ["UI 测试", "通用最佳实践"],
  "series": ["UI 测试最佳实践"],
  "cover": "./UI-Testing-best-practice-generic-best-practices-1-await-dont-sleep-and-name-test-files-wisely-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "等待不要休眠",
    "text": "等待，不要休眠"
  }, {
    "depth": 3,
    "slug": "一段简要说明",
    "text": "一段简要说明"
  }, {
    "depth": 3,
    "slug": "页面加载等待",
    "text": "页面加载等待"
  }, {
    "depth": 3,
    "slug": "内容等待",
    "text": "内容等待"
  }, {
    "depth": 4,
    "slug": "内容等待代码示例",
    "text": "内容等待代码示例"
  }, {
    "depth": 3,
    "slug": "xhr-请求等待",
    "text": "XHR-请求等待"
  }, {
    "depth": 4,
    "slug": "xhr-请求等待代码示例",
    "text": "XHR-请求等待代码示例"
  }, {
    "depth": 2,
    "slug": "明智地为测试文件命名",
    "text": "明智地为测试文件命名"
  }, {
    "depth": 3,
    "slug": "一段简要说明-1",
    "text": "一段简要说明"
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
      id: "等待不要休眠",
      children: "等待，不要休眠"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "在测试 UI 时，您需要定义应用程序必须经过的关键点。到达这些关键点是一个异步过程，因为几乎 100% 的情况下，UI 不会同步更新。"
    }), "\n", createVNode(_components.p, {
      children: ["这些关键点称为", createVNode(_components.strong, {
        children: "确定性事件"
      }), "，即您知道必须发生的事件。"]
    }), "\n", createVNode(_components.p, {
      children: "具体取决于您定义的事件以及 UI 达到这些事件的方式，但通常会存在一些“长时间”等待，例如 XHR 请求，以及一些更快的等待，例如重新渲染更新。"
    }), "\n", createVNode(_components.p, {
      children: ["解决异步更新的方法似乎很简单：", createVNode(_components.strong, {
        children: "休眠/暂停测试"
      }), "一段时间，几毫秒、几分之一秒，甚至几秒钟。这可以使测试正常工作，因为它给应用程序足够的时间来更新自身并移动到下一个要测试的确定性事件。"]
    }), "\n", createVNode(_components.p, {
      children: ["请注意，除了特定和已知的等待（例如使用 ", createVNode(_components.code, {
        children: "setInterval"
      }), " 或 ", createVNode(_components.code, {
        children: "setTimeout"
      }), " 时），", createVNode(_components.strong, {
        children: "完全无法预测"
      }), "休眠时间应该是多久，因为它可能取决于："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "网络状态（对于 XHR 请求）"
      }), "\n", createVNode(_components.li, {
        children: ["可用机器资源的总量（CPU、RAM 等）\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "例如，CI 流水线可能会对其进行限制"
          }), "\n", createVNode(_components.li, {
            children: "在本地机器上，其他应用程序也可能会消耗这些资源"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "其他资源消耗更新的并发情况（canvas 等）"
      }), "\n", createVNode(_components.li, {
        children: "一系列不可预测的因素，如 Service Workers、缓存管理等，可能加快或减缓 UI 更新过程"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["每个固定的延迟都会使测试变得更加脆弱，并", createVNode(_components.strong, {
        children: "增加其持续时间"
      }), "。您需要在虚假负面和夸张的测试持续时间之间找到平衡。"]
    }), "\n", createVNode(_components.p, {
      children: "等待可分为四个主要类别："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "#%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E7%AD%89%E5%BE%85",
            children: "页面加载等待"
          })
        }), "：测试应用程序时需要处理的第一个等待，等待一个允许您了解页面是否可交互的事件"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "#%E5%86%85%E5%AE%B9%E7%AD%89%E5%BE%85",
            children: "内容等待"
          })
        }), "：等待匹配选择器的 DOM 元素"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "#xhr-%E8%AF%B7%E6%B1%82%E7%AD%89%E5%BE%85",
            children: "XHR 请求等待"
          })
        }), "：等待 XHR 请求开始或相应接收到"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "以下所有示例都基于 Cypress。"
    }), "\n", createVNode(_components.h3, {
      id: "页面加载等待",
      children: "页面加载等待"
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
            children: "// Cypress code"
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
            children: "'http://localhost:3000'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "内容等待",
      children: "内容等待"
    }), "\n", createVNode(_components.p, {
      children: "请看以下示例，了解如何在可用工具中实现等待 DOM 元素。"
    }), "\n", createVNode(_components.h4, {
      id: "内容等待代码示例",
      children: "内容等待代码示例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "等待元素"
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
            children: "// Cypress code"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// it waits up to 4 seconds by default"
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
            children: "'#form-feedback'"
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
            children: "// the timeout can be customized"
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
            children: "'#form-feedback'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { timeout: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " })"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "等待具有特定内容的元素"
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
            children: "// Cypress code"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "'#form-feedback'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
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
            children: "'Success'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "xhr-请求等待",
      children: "XHR-请求等待"
    }), "\n", createVNode(_components.h4, {
      id: "xhr-请求等待代码示例",
      children: "XHR-请求等待代码示例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "等待 XHR 请求/响应"
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
            children: "// Cypress code"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "'http://dummy.restapiexample.com/api/v1/employees'"
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
            children: "'employees'"
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
            children: "'@employees'"
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
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "its"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'response.body'"
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
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "body"
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
            children: "  })"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["由 ", createVNode(_components.a, {
          href: "https://github.com/NoriSte",
          children: "NoriSte"
        }), " 在 ", createVNode(_components.a, {
          href: "https://dev.to/noriste/await-do-not-make-your-e2e-tests-sleep-4g1o",
          children: "dev.to"
        }), " 和 ", createVNode(_components.a, {
          href: "https://medium.com/@NoriSte/react-hooks-memorandum-bf1c2758a672",
          children: "Medium"
        }), "上进行联合发表."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "明智地为测试文件命名",
      children: "明智地为测试文件命名"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/name-test-files-wisely.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/name-test-files-wisely.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明-1",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "编写各种不同的 UI 测试是一种好习惯，而采用一种常见的测试文件命名方式更是有益的。"
    }), "\n", createVNode(_components.p, {
      children: "这很有用，因为通常情况下，你需要仅运行某一类测试，可能的情况包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["在开发过程中，你只需要运行其中一些测试\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "你正在更改一些相关组件，并需要检查生成的标记是否发生了变化"
          }), "\n", createVNode(_components.li, {
            children: "你正在更改全局 CSS 规则，只需运行视觉测试"
          }), "\n", createVNode(_components.li, {
            children: "你正在更改应用程序流程，需要运行整个应用程序集成测试"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "你的 DevOps 同事需要确保一切正常运行，最简单的方法就是只运行端对端测试"
      }), "\n", createVNode(_components.li, {
        children: "你的构建流水线需要运行集成测试和端对端测试"
      }), "\n", createVNode(_components.li, {
        children: "你的监控流水线需要一个脚本来运行端对端测试和监控测试"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "如果你为测试取一个明智的命名，将会非常容易只运行其中的某些类型。"
    }), "\n", createVNode(_components.p, {
      children: "Cypress:"
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
            children: "cypress"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --spec"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " \\\""
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "cypress/integration/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ".e2e."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Jest:"
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
            children: "jest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --testPathPattern=e2e\\\\."
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "$"
          })]
        })
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "没有一种全局的命名测试文件的方式，一个建议是使用以下方式命名："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "正在测试的主题"
      }), "\n", createVNode(_components.li, {
        children: ["测试的类型（", createVNode(_components.code, {
          children: "integration"
        }), "、", createVNode(_components.code, {
          children: "e2e"
        }), "、", createVNode(_components.code, {
          children: "monitoring"
        }), "、", createVNode(_components.code, {
          children: "component"
        }), "等）"]
      }), "\n", createVNode(_components.li, {
        children: ["选择的测试后缀（", createVNode(_components.code, {
          children: "test"
        }), "、", createVNode(_components.code, {
          children: "spec"
        }), "等）"]
      }), "\n", createVNode(_components.li, {
        children: ["文件扩展名（", createVNode(_components.code, {
          children: ".js"
        }), "、", createVNode(_components.code, {
          children: ".ts"
        }), "、", createVNode(_components.code, {
          children: ".jsx"
        }), "、", createVNode(_components.code, {
          children: ".tsx"
        }), "等）"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "它们之间用句点分隔。"
    }), "\n", createVNode(_components.p, {
      children: "以下是一些例子："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "authentication.e2e.test.ts"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "authentication.integration.test.ts"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "site.monitoring.test.js"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "login.component.test.tsx"
        }), "\n等等。"]
      }), "\n"]
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

const url = "src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-1-await-dont-sleep-and-name-test-files-wisely.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-1-await-dont-sleep-and-name-test-files-wisely.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-generic-best-practices-1-await-dont-sleep-and-name-test-files-wisely.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
