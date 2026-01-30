import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "UI 测试最佳实践的进阶篇（二）：组合测试和性能测试",
  "description": "这篇博文是 UI 测试最佳实践的进阶篇，第二篇深入讨论组合测试和性能测试。文章详细介绍了如何有效地进行组合测试，覆盖多个交互元素的不同组合，以提高测试的全面性。此外，博文探讨了 UI 性能测试的重要性，并提供了一些性能测试的最佳实践，确保应用程序在各种负载下的高性能和稳定性。通过学习这些进阶实践，读者将能够更全面地应对复杂的 UI 测试场景，确保系统的质量和性能。",
  "date": "2024-01-30T08:06:44.000Z",
  "author": "nao.deng",
  "tags": ["UI Testing", "Best Practices"],
  "categories": ["UI 测试", "进阶"],
  "series": ["UI 测试最佳实践"],
  "cover": "./UI-Testing-best-practice-advanced-combinatorial-testing-and-performance-testing-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "组合测试",
    "text": "组合测试"
  }, {
    "depth": 3,
    "slug": "组合测试一段简要说明",
    "text": "组合测试一段简要说明"
  }, {
    "depth": 3,
    "slug": "1-代码示例--产品负责人问题",
    "text": "(1) 代码示例 – 产品负责人问题"
  }, {
    "depth": 3,
    "slug": "2-代码示例--nasa-的开关板共有-34-个开关",
    "text": "(2) 代码示例 – NASA 的开关板共有 34 个开关"
  }, {
    "depth": 3,
    "slug": "2-代码示例---西门子楼宇操作员-ci-配置",
    "text": "(2) 代码示例 - 西门子楼宇操作员 CI 配置"
  }, {
    "depth": 3,
    "slug": "组合测试参考资料和延伸阅读",
    "text": "组合测试参考资料和延伸阅读"
  }, {
    "depth": 2,
    "slug": "性能测试",
    "text": "性能测试"
  }, {
    "depth": 3,
    "slug": "性能测试一段简要说明",
    "text": "性能测试一段简要说明"
  }, {
    "depth": 3,
    "slug": "1-通过-lighthouse-确保用户体验",
    "text": "(1) 通过 Lighthouse 确保用户体验"
  }, {
    "depth": 4,
    "slug": "使用-cypress-集成-lighthouse",
    "text": "使用 Cypress 集成 Lighthouse"
  }, {
    "depth": 3,
    "slug": "2-性能作为一种非功能性需求和-kano-模型",
    "text": "(2) 性能作为一种非功能性需求和 Kano 模型"
  }, {
    "depth": 3,
    "slug": "3-性能测试的类型",
    "text": "(3) 性能测试的类型"
  }, {
    "depth": 3,
    "slug": "4-使用-k6-loadimpact-进行性能测试的实际应用",
    "text": "(4) 使用 k6-loadImpact 进行性能测试的实际应用"
  }, {
    "depth": 4,
    "slug": "我们如何分析测试结果",
    "text": "我们如何分析测试结果？"
  }, {
    "depth": 3,
    "slug": "5-通过性能测试来防止不稳定的问题进入生产环境",
    "text": "(5) 通过性能测试来防止不稳定的问题进入生产环境"
  }, {
    "depth": 3,
    "slug": "性能测试参考资料和延伸阅读",
    "text": "性能测试参考资料和延伸阅读"
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
      id: "组合测试",
      children: "组合测试"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/combinatorial-testing.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/combinatorial-testing.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "组合测试一段简要说明",
      children: "组合测试一段简要说明"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "http://csrc.nist.gov/Projects/automated-combinatorial-testing-for-software",
          children: "组合测试"
        }), " 是一种经过验证的、成本较低的、更为有效的软件测试方法。"]
      }), "\n", createVNode(_components.li, {
        children: "这种测试的关键思想是，并非每个参数都对每次故障都有影响，而是大多数故障是由相对较少的参数之间的相互作用引起的。"
      }), "\n", createVNode(_components.li, {
        children: "与传统方法相比，测试参数组合可以更有效地检测故障。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["美国国家标准与技术研究院", createVNode(_components.a, {
        href: "https://www.nist.gov/",
        children: "NIST"
      }), " 在 1999 年到 2004 年进行的一系列研究表明，大多数软件缺陷和故障是由一个或两个参数引起的，逐渐减少到由三个或更多参数引起的。这一发现被称为“交互规则”，对软件测试具有重要意义，因为这意味着测试参数组合可以比传统方法更有效地检测故障。NIST 和其他机构收集的数据表明，软件故障仅由少数几个变量的相互作用引发（不超过六个）。有时使用成对（2 路组合）测试可以以较低的成本获得相当不错的结果，通常不低于 60% 的故障覆盖率，但这可能对于关键任务的软件来说可能不足够。"]
    }), "\n", createVNode(_components.h3, {
      id: "1-代码示例--产品负责人问题",
      children: "(1) 代码示例 – 产品负责人问题"
    }), "\n", createVNode(_components.p, {
      children: "一位产品负责人曾提出一个问题："
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "“从最佳实践或实际角度来看，你是否应该在每种可能的配置下测试系统？\n例如，假设你有 A、B、C、D、E 五个功能，客户 1 拥有 A/B，客户 2 拥有 A/B/C，客户 3 拥有 A/D，客户 4 拥有 B/D，客户 5 拥有 A/B/C/D/E…\n你是否应该测试每种可能的功能组合，还是测试每个功能单独，如果它们在独立测试中能够正常工作，就相信它们整体上也能正常工作？”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["5 个客户和 5 个功能，详尽无遗将需要 25 个测试。\n在描述的约束条件下，只需要 14 个测试。\n为了提供一个代码示例，我们将使用描述规格的", createVNode(_components.a, {
        href: "https://foselab.unibg.it/ctwedge/",
        children: "CTWedge"
      }), "脚本化组合模型。还有许多其他列在", createVNode(_components.a, {
        href: "http://pairwise.org/",
        children: "pairwise.org"
      }), "上的 CT 工具。我们（在西门子）使用过的其他一些工具包括", createVNode(_components.a, {
        href: "https://csrc.nist.gov/projects/automated-combinatorial-testing-for-software",
        children: "ACTs"
      }), "和", createVNode(_components.a, {
        href: "https://matris.sba-research.org/tools/cagen/#/workspaces",
        children: "CAgen"
      }), "。"]
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
            children: "Model POquestion"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " Parameters:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   features : {A, B, C, D, E}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   customer:  {1, 2, 3, 4, 5}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " Constraints:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 1 => features = A || features = B #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 2 => features = A || features = B || features = C #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 3 => features = A || features = D #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 4 => features = B || features = D #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 5 => features = A || features = B || features = C || features = D || features = E #"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["在这里粘贴脚本以生成结果 ", createVNode(_components.a, {
        href: "http://foselab.unibg.it/ctwedge/",
        children: "这里"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "测试的目标是检验参数之间的双向（或更多）相互作用。当只有两个参数时，收益并不太明显，因为这是一种穷举的方法。"
    }), "\n", createVNode(_components.p, {
      children: "如果参数数量超过两个，对它们之间的双向交互进行覆盖将确保找到该领域可能存在的 60-99% 的所有潜在缺陷。三向交互为 90%，四向为 95%，五向为 97%，六向为 100%。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/combinatorial-testing/ct-graph.PNG?raw=true",
        alt: "组合测试图"
      })
    }), "\n", createVNode(_components.p, {
      children: ["在这个例子中，通过添加另一个", createVNode(_components.em, {
        children: "参数"
      }), "，我们称之为 ", createVNode(_components.code, {
        children: "configuration"
      }), "，并假设有 5 种可能的配置 / ", createVNode(_components.em, {
        children: "参数值"
      }), "。这将生成一个包含 125 个测试的详尽套件。"]
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
            children: "Model POquestion"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " Parameters:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   features : {A, B, C, D, E}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   customer:  {1, 2, 3, 4, 5}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   configuration: {config1, config2, config3, config4, config5}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " Constraints:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 1 => features = A || features = B #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 2 => features = A || features = B || features = C #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 3 => features = A || features = D #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 4 => features = B || features = D #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # customer = 5 => features = A || features = B || features = C || features = D || features = E #"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["将其粘贴到 ", createVNode(_components.a, {
        href: "https://foselab.unibg.it/ctwedge/",
        children: "CTWedge"
      }), " 上，这将生成一个包含 31 个测试的测试套件。如果添加一些约束，表明某些特性不应该与某些配置一起工作，甚至可以进一步精简。"]
    }), "\n", createVNode(_components.p, {
      children: "请注意，组合测试的建模可以并且确实包含等价分区、边界值分析和其他技术。模型越准确，测试套件的故障检测能力就越强。"
    }), "\n", createVNode(_components.h3, {
      id: "2-代码示例--nasa-的开关板共有-34-个开关",
      children: "(2) 代码示例 – NASA 的开关板共有 34 个开关"
    }), "\n", createVNode(_components.p, {
      children: "以 NASA 的一个例子为参考，有 34 个开关，每个开关可以处于打开或关闭的状态。要进行详尽的测试，有 170 亿种可能的组合方式。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/combinatorial-testing/nasa-switches.PNG?raw=true",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "不必测试所有的 2^34 种可能性。通过使用组合测试进行建模，你可以根据风险做出经过计算的决策。"
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
            children: "Model NASAswitches"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Parameters:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch1: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch2: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch3: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch4: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch5: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch6: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch7: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch8: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch9: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch10: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch11: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch12: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch13: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch14: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch15: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch16: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch17: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch18: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch19: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch20: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch21: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch22: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch23: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch24: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch25: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch26: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch27: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch28: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch29: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch30: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch31: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch32: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch33: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    switch34: Boolean"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["在 ", createVNode(_components.a, {
        href: "https://foselab.unibg.it/ctwedge/",
        children: "CTWedge"
      }), " 中通过下拉菜单开关测试的相互作用次数。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "14 次测试：通过开关之间的 2 次相互作用引起的故障 - 可根据产品找到 60-99% 的所有潜在故障"
      }), "\n", createVNode(_components.li, {
        children: "33 次测试：通过开关之间的 3 次相互作用引起的故障 - 可根据产品找到 90-99% 的所有潜在故障"
      }), "\n", createVNode(_components.li, {
        children: "85 次测试：通过开关之间的 4 次相互作用引起的故障 - 可根据产品找到 95-99% 的所有潜在故障"
      }), "\n", createVNode(_components.li, {
        children: "220 次测试：通过开关之间的 5 次相互作用引起的故障 - 可找到超过 99% 的所有潜在故障"
      }), "\n", createVNode(_components.li, {
        children: "538 次测试：通过开关之间的 6 次相互作用引起的故障 - 可找到所有潜在故障的 100%"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-代码示例---西门子楼宇操作员-ci-配置",
      children: ["(2) 代码示例 - ", createVNode(_components.a, {
        href: "https://cypress.slides.com/cypress-io/siemens-case-study#/16",
        children: "西门子楼宇操作员 CI 配置"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["参考上面的幻灯片链接或", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=aMPkaLOpyns&t=1624s",
        children: "直播视频"
      }), "以获取有关如何使用", createVNode(_components.a, {
        href: "https://matris.sba-research.org/tools/cametrics/#/new",
        children: "CAMetrics"
      }), "测量组合覆盖率的详细说明。基本上，你可以使用任何组合测试工具生成一个 CSV 文件，然后将其拖放到 CAMetrics 中。之后，CAMetrics 可以为你提供各种组合覆盖率报告。"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["请注意，将 ", createVNode(_components.a, {
          href: "https://www.csvjson.com/csv2json",
          children: "CSV 转换为 JSON"
        }), " 非常简单，然后可以使用 JSON 文件在所选的任何测试框架中进行数据驱动测试。"]
      }), "\n"]
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
            children: "Model CI"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " Parameters:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   deployment_UI : { branch, development, staging }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   deployment_API:  { development, staging }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   spec_suite: { ui_services_stubbed, ui_services, ui_services_hardware, spot_check}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   browser: { chrome, electron, firefox }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " Constraints:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   // one extra constraint for firefox spot checks"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # browser=firefox <=> spec_suite=spot_check #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   // on staging, run all tests"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # spec_suite=ui_services_hardware <=> deployment_API=staging #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   // match dev vs dev, staging vs staging, and when on staging use Chrome"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # deployment_UI=development => deployment_API=development #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # deployment_UI=staging => deployment_API=staging #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # deployment_UI=staging && deployment_API=staging => browser=chrome #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   // when on branch, stub the services"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # deployment_UI=branch => spec_suite=ui_services_stubbed #"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   // do not stub the services when on UI development"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   # deployment_UI=development => spec_suite!=ui_services_stubbed #"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "组合测试参考资料和延伸阅读",
      children: "组合测试参考资料和延伸阅读"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://csrc.nist.gov/Projects/automated-combinatorial-testing-for-software",
        children: "自动化组合测试软件"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://prezi.com/tpffqit1yn87/utilization-of-automation-and-combinatorial-disciplines-in-aid-of-exploratory-testing/",
        children: "幻灯片 16-50：探讨自动化和组合纪律在辅助探索性测试方面的应用"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://ieeexplore.ieee.org/document/7899057?section=abstract",
        children: "西门子工业公司建筑技术部实际组合测试方法的应用"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://ieeexplore.ieee.org/document/8728910",
        children: "现代 Web 开发中组合测试的工业研究"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://ieeexplore.ieee.org/document/7085645/",
        children: "在大型组织中引入组合测试"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "http://barbie.uta.edu/~mehra/1%20INPUT%20PARAMETER%20MODELING%20FOR%20COMBINATION%20STRATEGIES.pdf",
        children: "组合策略的输入参数建模"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "http://barbie.uta.edu/~mehra/62_Common%20Patterns%20in%20Combinatorial%20Models.pdf",
        children: "组合模型中的常见模式"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=917899",
        children: "等效类和两层覆盖阵的高效验证和同时测试"
      })
    }), "\n", createVNode(_components.h2, {
      id: "性能测试",
      children: "性能测试"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/performance-testing.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/performance-testing.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "性能测试一段简要说明",
      children: "性能测试一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "虽然性能测试是一个庞大的话题，但作为 Web 开发者，我们可以迅速从其核心原则中获益，以提升用户体验、满足功能和非功能需求（NFRs），并检测可能泄漏到生产环境中的不明确系统问题。"
    }), "\n", createVNode(_components.h3, {
      id: "1-通过-lighthouse-确保用户体验",
      children: "(1) 通过 Lighthouse 确保用户体验"
    }), "\n", createVNode(_components.p, {
      children: ["作为 Web 开发者，我们最关心的是用户对性能的感知。谢天谢地，Google 已经让这变得简单，并为我们提供了一个第三方权威评估我们 Web 应用程序的工具 - ", createVNode(_components.a, {
        href: "https://developers.google.com/web/tools/lighthouse",
        children: "Lighthouse"
      }), "。"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Lighthouse 是一个用于提高网页质量的开源自动化工具。你可以对任何网页运行它，无论是公开的还是需要身份验证的。它可以进行性能、可访问性、渐进式 Web 应用、SEO 等方面的审计。”"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["在这个话题中，我们只关注性能，但你也应该考虑从 Lighthouse 的审计中获得关于", createVNode(_components.strong, {
        children: "渐进式 Web 应用"
      }), "、", createVNode(_components.strong, {
        children: "可访问性"
      }), "、", createVNode(_components.strong, {
        children: "搜索引擎优化"
      }), "和", createVNode(_components.strong, {
        children: "最佳实践"
      }), "的评估。"]
    }), "\n", createVNode(_components.p, {
      children: "入门很简单：Chrome > 开发者工具 > 审计 > Lighthouse。然后，生成报告。它会显示如下，并为你提供有关如何改善用户体验的详细指南。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/perf-testing/lighthouse.png?raw=true",
        alt: "Lighthouse 报告"
      })
    }), "\n", createVNode(_components.p, {
      children: "一旦进行了改进并达成了基线评级，您可以通过将 Lighthouse 纳入您的 CI 来防止回归。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["将 Lighthouse 添加为 node_module；", createVNode(_components.code, {
          children: "npm i -D lighthouse"
        }), " 或 ", createVNode(_components.code, {
          children: "yarn add --dev lighthouse"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["参考 ", createVNode(_components.a, {
          href: "https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically",
          children: "Lighthouse Git 存储库"
        }), " 上的工作流示例。"]
      }), "\n", createVNode(_components.li, {
        children: "防止性能评级（和/或其他评级）在开发人员提交代码时出现回归！"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "使用-cypress-集成-lighthouse",
      children: "使用 Cypress 集成 Lighthouse"
    }), "\n", createVNode(_components.p, {
      children: ["如果你是 Cypress 用户，通过 ", createVNode(_components.a, {
        href: "https://github.com/mfrachet/cypress-audit",
        children: "cypress-audit"
      }), " 插件，你可以在 Cypress 测试中执行 Lighthouse 审计，以及 ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/pa11y",
        children: "Pa11y"
      }), " 进行自动化的可访问性测试。"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["除了", createVNode(_components.a, {
          href: "https://github.com/mfrachet/cypress-audit#preparation",
          children: "通常的插件设置"
        }), "之外，你可能需要解决你的应用程序的", createVNode(_components.a, {
          href: "https://github.com/cypress-io/cypress/issues/944#issuecomment-788373384",
          children: "跨域问题"
        }), "，直到 Cypress 官方支持它。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "以下是一个带有内联说明的示例测试。"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "typescript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Pass in optional configuration parameters for the Cypress test:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// you may need to increase default timeout for the overall task, if you have a slow app. Mind that Lighthouse is only for Chromium based browsers"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "describe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Lighthouse audit '"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { taskTimeout: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "90000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", browser: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'chrome'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }, () "
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
              color: "#B392F0"
            },
            children: "  before"
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
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // if you are using programmatic login, you might not need to use the cy.forceVisit('/') workaround for cross-origin (linked above)"
          })
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
            children: "login"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(Cypress."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "env"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'USERNAME'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), Cypress."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "env"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'PASSWORD'"
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
            children: "  // thresholds is the first argument to cy.lighthouse(), most of the performance configuration is done here."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // a complete list of Lighthouse parameters to use as thresholds can be found at https://github.com/mfrachet/cypress-audit/blob/master/docs/lighthouse.md"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // for an explanation of the parameters, refer to https://web.dev/lighthouse-performance/"
          })
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
            children: " thresholds"
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
              color: "#9ECBFF"
            },
            children: "    'first-contentful-paint'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20000"
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
              color: "#9ECBFF"
            },
            children: "    'largest-contentful-paint'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "35000"
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
              color: "#9ECBFF"
            },
            children: "    'first-meaningful-paint'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20000"
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
              color: "#9ECBFF"
            },
            children: "    'speed-index'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "25000"
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
            children: "    interactive: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "40000"
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
            children: "    performance: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
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
            children: "    accessibility: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
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
              color: "#9ECBFF"
            },
            children: "    'best-practices'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
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
            children: "    seo: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
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
            children: "    pwa: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // the 2nd, and optional argument to cy.lighthouse() replicates Lighthouse CLI commands https://github.com/GoogleChrome/lighthouse#cli-options"
          })
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
            children: " desktopConfig"
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
            children: "    formFactor: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'desktop'"
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
            children: "    screenEmulation: { disabled: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // your app may need this beforeEach and afterEach workaround for cross-origin (linked above)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  beforeEach"
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
            children: "restoreLocalStorage"
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
            children: "    // Preserve Cookies between tests"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Cypress.Cookies."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "defaults"
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
            children: "      preserve:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "[\\s\\S]"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    });"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  afterEach"
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
            children: "saveLocalStorage"
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
              color: "#E1E4E8"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'should pass audit for main page '"
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
            children: "    cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lighthouse"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(thresholds, desktopConfig);"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'should pass audit for another page'"
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
            children: "    cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "forceVisit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'anotherUrl'"
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
            children: "    cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lighthouse"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(thresholds, desktopConfig);"
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
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Commands for working around cross origin, if needed"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// -- Save localStorage between tests"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " LOCAL_STORAGE_MEMORY"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {};"
          })]
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
            children: "'saveLocalStorage'"
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
            children: "  Object."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "keys"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(localStorage)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "forEach"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "key"
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
              color: "#79B8FF"
            },
            children: "    LOCAL_STORAGE_MEMORY"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[key] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " localStorage[key];"
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
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "'restoreLocalStorage'"
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
            children: "  Object."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "keys"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "LOCAL_STORAGE_MEMORY"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "forEach"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "key"
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
            children: "    localStorage."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setItem"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "LOCAL_STORAGE_MEMORY"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[key]);"
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
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// -- Visit multiple domains in one test"
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
            children: "'forceVisit'"
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
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "win"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " win."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(url, "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'_self'"
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
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-性能作为一种非功能性需求和-kano-模型",
      children: "(2) 性能作为一种非功能性需求和 Kano 模型"
    }), "\n", createVNode(_components.p, {
      children: ["我们可以通过", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Kano_model",
        children: "Kano 模型"
      }), "开始建立对性能需求的理解。"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Kano 模型是在 1980 年代由日本学者狩野纪明教授开发的产品开发和客户满意度理论，将客户偏好分为五类。”"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "从高层次上看，卡诺模型总结了性能特性是标准要求，是任何竞争性产品所期望的。这与我们使用 Lighthouse 的方式重叠；通过它，我们确保满足客户偏好，并确保我们不会回退。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/perf-testing/KANO_model.jpg?raw=true",
        alt: "Kano 模型"
      })
    }), "\n", createVNode(_components.p, {
      children: ["在这一点上，我们已经满足了明确说明的性能要求。然而，在复杂的应用程序中，我们还需要注意非功能性需求（NFRs）。但是，什么是 NFRs 呢？下面是它们在一瞥之下的高层次视图 - 来自双重标准的", createVNode(_components.a, {
        href: "https://www.iso.org/standard/35733.html",
        children: "ISO/IEC 25010 产品质量模型"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/perf-testing/ISO_IEC_25010.jpg?raw=true",
        alt: "ISO/IEC标准"
      })
    }), "\n", createVNode(_components.p, {
      children: "在下一节中，让我们专注于 NFRs 如何帮助我们进行非功能性能测试的方法。"
    }), "\n", createVNode(_components.h3, {
      id: "3-性能测试的类型",
      children: "(3) 性能测试的类型"
    }), "\n", createVNode(_components.p, {
      children: "为了实际应用，我们可以将非功能性能测试分为 3 个类别"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Load 负载测试"
      }), "\n", createVNode(_components.li, {
        children: "Spike 尖峰测试"
      }), "\n", createVNode(_components.li, {
        children: "Endurance 耐久测试"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这张图总结了它们的上下文："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/perf-testing/performanceTesting.jpg?raw=true",
        alt: "ISO/IEC标准"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: [createVNode(_components.strong, {
          children: "关于基准测试和压力测试的额外说明"
        }), ": 本质上，基准测试归结为逐步的步骤，因为我们逐渐了解我们的系统，这成为了初始工作流程的一部分，其中使用自动化工具；"]
      }), "“我的系统已经崩溃了吗？没有？那我再增加一点”。", createVNode(_components.em, {
        children: "而压力测试，简而言之，就是做得过火了。"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["那么", createVNode(_components.strong, {
        children: "可扩展性测试"
      }), "的区别是什么？它是相关的；区别在于系统何时开始以不令人满意的方式不响应的评估。通常情况下，使用自动化工具的方法足够接近，并且可以在负载测试中分析图表时实现。"]
    }), "\n", createVNode(_components.p, {
      children: "这是可扩展性测试意图的高层次图："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/perf-testing/scalabilityTesting.jpg?raw=true",
        alt: "ISO/IEC标准"
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-使用-k6-loadimpact-进行性能测试的实际应用",
      children: "(4) 使用 k6-loadImpact 进行性能测试的实际应用"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://docs.k6.io/docs",
        children: "k6-loadImpact"
      }), "在 Web 开发领域有两个显著的特点。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "使用 JS（ES6）"
      }), "\n", createVNode(_components.li, {
        children: "专为 CI 构建"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["额外的好处：如果你习惯使用 Postman，你可以轻松地将这些测试转换为 k6。\nK6 ", createVNode(_components.em, {
        children: "可以"
      }), " 进行 DOM 测试，但我们认为 Lighthouse 已经处理了这方面的问题。K6 真正强大的地方在于测试 API 时。"]
    }), "\n", createVNode(_components.p, {
      children: ["你可以在", createVNode(_components.a, {
        href: "https://github.com/muratkeremozcan/k6-loadImpact",
        children: "这里找到使用 k6 的快速入门示例"
      }), "。\n这些示例从非常简单的开始，旨在快速建立理解。它们已经准备好直接运行和调整。我们将不会在这里重复这些知识。"]
    }), "\n", createVNode(_components.p, {
      children: "相反，在本节中，我们将概述 k6 测试的概览，并稍后展示一个代码示例，演示如何配置 k6 以适应不同类型的性能测试。"
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
            children: "// k6 lifecycle overview:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1. init code -> runs once"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// this is where we configure the type of performance testing (there are also"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// additional options we do not cover here)"
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
            children: " let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " options "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
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
            children: "  // there will be 1 virtual user"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  vus: "
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // default function() will execute 1 time. This simple config"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // is best when trying to get things to work"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  iterations: "
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
            children: "// 2. (optional) setup code -> runs once"
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
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setup"
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
            children: "  // for example getting a token so you can run API tests in the default"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // function that comes in (3) virtual user code"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // what gets returned from this function is passed as an argument to the next"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // function. For example: `token`"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getTokenForUser"
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
            children: "// 3. virtual user code -> runs once or many times based on"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// `export let options = { ... } `"
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
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "token"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // http.get is a k6 function that hits a URL with optional test parameters"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // note that  we do not need a token for this url"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  http."
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
            children: "\"http://test.loadimpact.com\""
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
            children: "// 4. (optional) teardown code -> runs once"
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
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " teardown"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // this is in case you need to clean up, for instance if failed test may"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // leave residue an impact state"
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
      children: "耐久测试配置："
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " options "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
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
            children: "  // endurance test for 30 seconds with 50 virtual users. Adds users immediately"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  vus: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
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
            children: "  duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"30s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // alternative to duration, you can  specify the exact number of iterations"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // the test will run"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // iterations: 500,"
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
      children: "负载测试配置："
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " options "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
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
            children: "  // for 15 seconds ramps up 10 users, adds users gradually"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // adds a total of 40 users in the next 15 seconds, and up to 50 in the next"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 30 seconds.."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // lowers down the users to 10 and 5 in the next 15 second iterations"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  stages: ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"15s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"15s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "40"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"30s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"15s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"15s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ]"
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
      children: "尖锋测试配置："
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " options "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
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
            children: "  // starts slow and builds up the load rapidly, and then drops the load"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  stages: ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"5s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"5s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"5s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "25"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"3s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"3s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"3s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"3s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"3s\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", target: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ]"
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
      children: ["正如你所看到的，", createVNode(_components.code, {
        children: "stages"
      }), " 是配置性能测试类型的实用工具。"]
    }), "\n", createVNode(_components.h4, {
      id: "我们如何分析测试结果",
      children: "我们如何分析测试结果？"
    }), "\n", createVNode(_components.p, {
      children: ["K6 提供了一个简单的", createVNode(_components.a, {
        href: "https://docs.k6.io/docs/results-output",
        children: "CLI 输出"
      }), "。我们认为这里最重要的两个高级数值是 ", createVNode(_components.code, {
        children: "http_req_duration"
      }), "，它详细说明了响应持续时间，以及 ", createVNode(_components.code, {
        children: "http_req"
      }), "，它显示发送的请求数量。如果这些数值在可接受的范围内，CLI 就达到了其目的。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/perf-testing/k6-CLI.PNG?raw=true",
        alt: "k6 CLI"
      })
    }), "\n", createVNode(_components.p, {
      children: ["如果需要进行更深入的诊断，图形化的", createVNode(_components.a, {
        href: "https://docs.k6.io/docs/load-impact-insights",
        children: "insights"
      }), "非常有价值。在这样的图表中，关键是 ", createVNode(_components.em, {
        children: "响应时间"
      }), " 和 ", createVNode(_components.em, {
        children: "请求速率"
      }), " 跟随 ", createVNode(_components.em, {
        children: "虚拟用户"
      }), " 的趋势。任何趋势上的变化都可能提示潜在问题。"]
    }), "\n", createVNode(_components.h3, {
      id: "5-通过性能测试来防止不稳定的问题进入生产环境",
      children: "(5) 通过性能测试来防止不稳定的问题进入生产环境"
    }), "\n", createVNode(_components.p, {
      children: ["可参考章节 ", createVNode(_components.a, {
        href: "./test-flake.zh.md",
        children: ["不稳定的测试 > 第三步：识别零星的系统问题 - ", createVNode(_components.em, {
          children: "不稳定的系统"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "性能测试参考资料和延伸阅读",
      children: "性能测试参考资料和延伸阅读"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://developers.google.com/web/tools/lighthouse",
        children: "Lighthouse 文档"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/GoogleChrome/lighthouse",
        children: "Lighthouse 代码库"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Kano_model",
        children: "Kano 模型"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.iso.org/standard/35733.html",
        children: "ISO/IEC 25010 产品质量模型"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://docs.k6.io/docs",
        children: "k6-loadImpact 文档"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/muratkeremozcan/k6-loadImpact",
        children: "使用 K6 的快速启动示例"
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

const url = "src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-advanced-combinatorial-testing-and-performance-testing.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-advanced-combinatorial-testing-and-performance-testing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-advanced-combinatorial-testing-and-performance-testing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
