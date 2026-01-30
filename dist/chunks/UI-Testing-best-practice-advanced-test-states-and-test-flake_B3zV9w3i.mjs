import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "UI 测试最佳实践的进阶篇（一）：测试状态和不稳定的测试",
  "description": "这篇博文是 UI 测试最佳实践的进阶篇，首篇介绍测试状态和处理不稳定测试的方法。文章深入探讨了在 UI 测试中如何有效处理测试状态，以及应对测试不稳定性的最佳实践。读者将学到确保测试脚本可靠性的策略，包括等待机制、测试数据管理等方面的技巧。通过这个进阶篇的指南，读者能够更灵活地应对复杂的 UI 测试场景，确保测试结果的一致性和可信度。",
  "date": "2024-01-29T08:06:44.000Z",
  "author": "nao.deng",
  "tags": ["UI Testing", "Best Practices"],
  "categories": ["UI 测试", "进阶"],
  "series": ["UI 测试最佳实践"],
  "cover": "./UI-Testing-best-practice-advanced-test-states-and-test-flake-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "测试状态",
    "text": "测试状态"
  }, {
    "depth": 3,
    "slug": "一段简要说明",
    "text": "一段简要说明"
  }, {
    "depth": 3,
    "slug": "代码示例--解释说明",
    "text": "代码示例 – 解释说明"
  }, {
    "depth": 3,
    "slug": "测试状态参考资料",
    "text": "测试状态参考资料"
  }, {
    "depth": 2,
    "slug": "不稳定的测试",
    "text": "不稳定的测试"
  }, {
    "depth": 3,
    "slug": "一段简要说明-1",
    "text": "一段简要说明"
  }, {
    "depth": 3,
    "slug": "第一步本地识别不稳定的测试",
    "text": "第一步：本地识别不稳定的测试"
  }, {
    "depth": 4,
    "slug": "第一步的代码示例",
    "text": "第一步的代码示例"
  }, {
    "depth": 3,
    "slug": "第二步在流水线中识别不稳定的测试并进行重试",
    "text": "第二步：在流水线中识别不稳定的测试并进行重试"
  }, {
    "depth": 4,
    "slug": "第二步的代码示例",
    "text": "第二步的代码示例"
  }, {
    "depth": 3,
    "slug": "第三步识别零星的系统问题---不稳定的系统",
    "text": "第三步：识别零星的系统问题 - 不稳定的系统"
  }, {
    "depth": 4,
    "slug": "代码示例---cron-任务",
    "text": "代码示例 - cron 任务"
  }, {
    "depth": 3,
    "slug": "不稳定的测试参考资料",
    "text": "不稳定的测试参考资料"
  }, {
    "depth": 3,
    "slug": "参考资料",
    "text": "参考资料"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
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
      id: "测试状态",
      children: "测试状态"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/test-states.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/test-states.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "测试应该是可重复的、模块化的，并且应该自己处理状态设置。为了为其他测试实现状态，不应该重复执行 UI 测试。"
    }), "\n", createVNode(_components.p, {
      children: "我们希望测试是无状态的，具有可扩展性："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "测试应该独立处理其状态。"
      }), "\n", createVNode(_components.li, {
        children: "没有对外部产生不受控制的副作用，或者具有测试自身能够处理的可管理副作用。"
      }), "\n", createVNode(_components.li, {
        children: ["测试应该能够被 ", createVNode(_components.em, {
          children: "n"
        }), " 个实体同时执行。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "代码示例--解释说明",
      children: "代码示例 – 解释说明"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "可重复性"
      }), ": 测试必须能够设置状态、执行测试，并在不影响下一个测试执行的前提下使环境保持干净。如果一个测试在每次执行时都使系统混乱，将其留在无法重置的状态，那么这个测试就适合作为手动测试。测试还不能互相冲突：多个测试者和流水线必须能够同时执行相同的测试。如果这不可行，这些测试组应该每天在流水线中执行一次，最好在非工作时间执行 ", createVNode(_components.a, {
        href: "https://crontab.guru/#0_1-23_*_*_6-7",
        children: "cron 作业"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "每个需要更改环境状态的测试都必须被用作设置 - 状态 - 测试，并确保在下一个测试之前能够清理测试环境。"
    }), "\n", createVNode(_components.p, {
      children: "最好是 UI 测试不要重复作为设置测试；在必须将 UI 测试用作另一个测试的设置的情况下，应该使用 API 测试、应用程序操作或数据库初始化。"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "设置 vs 清理"
      }), ": 设置（之前全部）优于清理（之后全部）。在可能的情况下，测试本身应该负责在一个干净的环境中开始。然而，正如上面强调的，测试不能使得在它们执行后下一个测试无法清理环境。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "登录"
      }), ": UI 登录的各种形式应仅在其各自的测试用例中使用。任何其他需要登录的测试应该使用内部的 API 登录和/或具有预配置的测试用户。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "测试状态设置"
      }), ": 鼓励测试是隔离的，以便它们在执行之前不依赖于整个设置。例如：如果一组测试可能需要创建用户，可以利用一个测试用户在隔离中使用这些测试。另一方面，设置用户的测试应该是独立的和隔离的。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "模块化"
      }), ": 每个测试应该能够独立运行，不依赖于其他测试来为其设置状态。如果需要进行这样的设置，应该在 ", createVNode(_components.code, {
        children: "beforeAll"
      }), " 或 ", createVNode(_components.code, {
        children: "beforeEach"
      }), " 部分进行。测试这一点的一个好方法是在隔离中运行测试：", createVNode(_components.code, {
        children: "it.only()"
      }), "，", createVNode(_components.code, {
        children: "fit()"
      }), "，等等。"]
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "describe('..', function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  // setup (before/beforeEach) is preferred over cleanup (after/afterEach)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  before(function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    // login with UI once in an isolated test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    // for login here and all other tests, use a faster login method: use API, App Actions or DB seeding"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  beforeEach(function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    // setup additional state..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    // have one UI test to ensure this state can be achieved"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    // however for the state set up here, utilize API, Application Actions or DB seeding; do not repeat UI tests"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    // test each test once with .only to ensure modularity"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it('..', function () {..});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it('..', function () {..});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it.only('..', function () {..});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it('..', function () {..});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "测试状态参考资料",
      children: "测试状态参考资料"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/",
        children: "放弃使用页面对象，转而使用应用动作"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://docs.cypress.io/guides/references/best-practices.html#Organizing-Tests-Logging-In-Controlling-State",
        children: "Cypress 文档：测试组织、登录、状态控制"
      })
    }), "\n", createVNode(_components.h2, {
      id: "不稳定的测试",
      children: "不稳定的测试"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/test-flake.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/test-flake.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明-1",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "每次测试都必须产生一致的结果，而可重复的流水线执行结果则是至关重要的。如果测试无法产生可靠的结果，将降低对测试的信心，还需要进行维护，这将降低所有价值。在这些情况下，最好进行手动功能测试。"
    }), "\n", createVNode(_components.p, {
      children: "并请自问以下几个问题："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "如何解决测试波动，通过成长的过程确保测试的可信度？"
      }), "\n", createVNode(_components.li, {
        children: "如何处理流水线、基础设施、共享资源等方面的假阴性，并在没有控制的情况下解决？"
      }), "\n", createVNode(_components.li, {
        children: "如何发现零星缺陷？"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "第一步本地识别不稳定的测试",
      children: "第一步：本地识别不稳定的测试"
    }), "\n", createVNode(_components.p, {
      children: ["推荐在模拟流水线 CI 机器的操作系统中进行无头模式执行；Linux 和 MacOS 与流水线的行为更为相似，而 Windows 则是个例外，除非你正在使用 Windows Docker 容器。无头执行将更容易暴露测试波动。有多种方法可以重复执行测试规范，Cypress 提供的一个例子是使用 Lodash 库（Cypress 已经内置了）", createVNode(_components.code, {
        children: "Cypress._.times( <重复次数>, () => { <你的测试规范代码> })"
      }), "。在提交代码合并请求之前，务必使用此方法。"]
    }), "\n", createVNode(_components.h4, {
      id: "第一步的代码示例",
      children: "第一步的代码示例"
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// will repeat the full suite 10 times"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Cypress._.times( 10, function {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  describe('..', function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    before(function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    beforeEach(function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      // you can place it anywhere to repeat 1 test, or another describe / context block"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      Cypress._.times( 3, function {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        it('..', function () {..});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      it('..', function () {..});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      it('..', function () {..});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      it('..', function () {..});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// this will result in 6 tests per run x 10 runs = 60 executions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "第二步在流水线中识别不稳定的测试并进行重试",
      children: "第二步：在流水线中识别不稳定的测试并进行重试"
    }), "\n", createVNode(_components.p, {
      children: ["在初始的流水线顺利通过并合并代码后，", createVNode(_components.strong, {
        children: "有时"
      }), "测试会出现失败的情况。"]
    }), "\n", createVNode(_components.p, {
      children: ["为什么测试在", createVNode(_components.strong, {
        children: "没有可重现的缺陷"
      }), "且", createVNode(_components.strong, {
        children: "测试代码已经完全优化的情况下仍然失败呢"
      }), "？"]
    }), "\n", createVNode(_components.p, {
      children: ["为了解决这种零星的失败问题，以及避免测试被忽略或", createVNode(_components.strong, {
        children: "降低团队对其的信心"
      }), "，我们可以采用重试机制："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "用以解决团队无法掌控的不可靠流水线基础设施问题"
      }), "\n", createVNode(_components.li, {
        children: "在开发中遇到的问题，或者依赖于正在开发中的外部服务"
      }), "\n", createVNode(_components.li, {
        children: ["最为重要的是，", createVNode(_components.strong, {
          children: "用于锁定零星的系统问题"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "第二步的代码示例",
      children: "第二步的代码示例"
    }), "\n", createVNode(_components.p, {
      children: ["许多框架都提供了重试实用工具。下面是一个例子来自于 ", createVNode(_components.a, {
        href: "https://docs.cypress.io/guides/references/migration-guide.html#Tests-retries",
        children: "Cypress 文档"
      }), ":"]
    }), "\n", createVNode(_components.p, {
      children: "在一个测试中："
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
            children: "'allows user to login'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// can also be in a context or describe block"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  retries: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    runMode: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// for CI usage"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    openMode: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // for local usage"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}, () "
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
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["在配置文件中，例如 ", createVNode(_components.code, {
        children: "cypress.json"
      }), ":"]
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
            children: "  \"retries\""
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
            children: "    \"runMode\""
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
            children: "    \"openMode\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
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
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "第三步识别零星的系统问题---不稳定的系统",
      children: ["第三步：识别零星的系统问题 - ", createVNode(_components.em, {
        children: "不稳定的系统"
      })]
    }), "\n", createVNode(_components.p, {
      children: "鉴于以下情况："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "不存在可重现的缺陷"
      }), "\n", createVNode(_components.li, {
        children: "测试代码已经充分优化"
      }), "\n", createVNode(_components.li, {
        children: "已知并通过测试重试有效解决了流水线问题"
      }), "\n", createVNode(_components.li, {
        children: "已知、认可并通过测试重试解决了外部依赖和成长痛苦"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["… 我们如何检测系统存在的更深层次问题，这可能表明存在", createVNode(_components.em, {
        children: "不稳定的系统"
      }), "？以下是团队", createVNode(_components.a, {
        href: "https://www.cypress.io/dashboard/",
        children: "Cypress 仪表板"
      }), "上的一个示例快照："]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.em, {
          children: "“在周末的 40 次执行中，它以 10% 的错误率失败… 我们运行了测试套件 40 次，在其中的一次执行中看到该规范重试了 2 次，直到通过…”"
        }), "\n", createVNode(_components.img, {
          src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/test-retry-pipeline.png?raw=true",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "请注意：相机图标表示一些测试失败，因为 Cypress 在失败时会拍摄视频和截图。"
      })
    }), "\n", createVNode(_components.p, {
      children: ["在这些情况下，可以通过每晚或周末的 ", createVNode(_components.a, {
        href: "https://crontab.guru/#0_1-23_*_*_6-7",
        children: "cron 任务"
      }), " 进行一致性测试，作为更深层次系统问题的初始指标。这些通常是那些容易泄漏到生产环境中、在实际使用中被发现并具有昂贵后果的模糊缺陷。"]
    }), "\n", createVNode(_components.h4, {
      id: "代码示例---cron-任务",
      children: ["代码示例 - ", createVNode(_components.a, {
        href: "https://crontab.guru/#0_1-23_*_*_6-7",
        children: "cron 任务"
      })]
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "at minute 0 at midnight and 2 am, every day-of-week from Monday through Friday:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "0 0,2 * * 1-5"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "At minute 0 past hour 2, 6, 8, 10, 12, 14, 16, 18, and 20 on every day-of-week from Saturday through Sunday:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "0 2,6,8,10,12,14,16,18,20 * * 6-7"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["一旦排除了所有其他因素，并且在管道中使用 cron 任务自动化测试初步指示了“系统波动”，这些问题就是", createVNode(_components.strong, {
        children: "性能测试"
      }), "的理想候选项，因为这种测试方法可以直接指出可能导致“不稳定的系统”的系统缺陷。"]
    }), "\n", createVNode(_components.p, {
      children: ["性能测试的要点如下：\n", createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/performanceTesting.jpg?raw=true",
        alt: " "
      })]
    }), "\n", createVNode(_components.p, {
      children: ["有许多性能测试工具，其中一个我们认为比较易于使用的是 ", createVNode(_components.a, {
        href: "https://docs.k6.io/docs",
        children: "k6-loadImpact"
      }), "，因为它采用了 ES6 语法，并且与流水线兼容。\n你可以在 ", createVNode(_components.a, {
        href: "https://github.com/muratkeremozcan/k6-loadImpact",
        children: "这里"
      }), " 找到一个包含代码示例的简单教程。"]
    }), "\n", createVNode(_components.h3, {
      id: "不稳定的测试参考资料",
      children: "不稳定的测试参考资料"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://testing.googleblog.com/2017/04/where-do-our-flaky-tests-come-from.html",
        children: "Google 测试博客：我们的测试中哪些是不稳定的，是从哪些方面产生的"
      })
    }), "\n", createVNode(_components.h3, {
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

const url = "src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-advanced-test-states-and-test-flake.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-advanced-test-states-and-test-flake.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-advanced-test-states-and-test-flake.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
