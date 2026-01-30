import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "软件测试术语分享:Ad Hoc Testing 随机测试",
  "description": "这篇博文是软件测试术语分享系列的一部分，聚焦于 Ad Hoc Testing（随机测试）。文章详细介绍了随机测试的基础概念和重要性，阐述了在测试实践中实施和应用随机测试的技术。读者将了解随机测试的场景和用例，以及如何在项目中有效地运用这一测试方法。博文还提供了随机测试的最佳实践，帮助测试人员更好地利用这一方法发现潜在问题。通过这个系列分享，读者将更全面地了解 Ad Hoc Testing 的价值，并在测试策略中灵活地运用这一方法。",
  "date": "2024-02-26T04:06:44.000Z",
  "author": "nao.deng",
  "tags": ["QA Glossary", "Ad Hoc Testing"],
  "categories": ["测试类型"],
  "series": ["软件测试术语分享"],
  "cover": "./QA-Glossary-Wiki-ad-hoc-testing-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ad-hoc-testing-随机测试",
    "text": "Ad Hoc Testing 随机测试"
  }, {
    "depth": 2,
    "slug": "关于随机测试的问题",
    "text": "关于随机测试的问题"
  }, {
    "depth": 3,
    "slug": "基础知识和重要性",
    "text": "基础知识和重要性"
  }, {
    "depth": 4,
    "slug": "什么是软件测试中的随机测试",
    "text": "什么是软件测试中的随机测试？"
  }, {
    "depth": 4,
    "slug": "为什么随机测试在软件开发生命周期中很重要",
    "text": "为什么随机测试在软件开发生命周期中很重要？"
  }, {
    "depth": 4,
    "slug": "随机测试与其他测试形式的主要区别是什么",
    "text": "随机测试与其他测试形式的主要区别是什么？"
  }, {
    "depth": 4,
    "slug": "随机测试有哪些优缺点",
    "text": "随机测试有哪些优缺点？"
  }, {
    "depth": 3,
    "slug": "实施和技术",
    "text": "实施和技术"
  }, {
    "depth": 4,
    "slug": "如何执行随机测试",
    "text": "如何执行随机测试？"
  }, {
    "depth": 4,
    "slug": "有哪些常用的随机测试技术",
    "text": "有哪些常用的随机测试技术？"
  }, {
    "depth": 4,
    "slug": "有效执行随机测试需要哪些技能",
    "text": "有效执行随机测试需要哪些技能？"
  }, {
    "depth": 4,
    "slug": "随机测试可以自动化还是只能严格手动测试",
    "text": "随机测试可以自动化还是只能严格手动测试？"
  }, {
    "depth": 3,
    "slug": "场景和用例",
    "text": "场景和用例"
  }, {
    "depth": 4,
    "slug": "有哪些实际场景的示例来介绍如何使用随机测试",
    "text": "有哪些实际场景的示例来介绍如何使用随机测试？"
  }, {
    "depth": 4,
    "slug": "你能提供一个随机测试发现关键缺陷的场景吗",
    "text": "你能提供一个随机测试发现关键缺陷的场景吗？"
  }, {
    "depth": 4,
    "slug": "随机测试如何融入端到端e2e测试方案",
    "text": "随机测试如何融入端到端（e2e）测试方案？"
  }, {
    "depth": 3,
    "slug": "最佳实践",
    "text": "最佳实践"
  }, {
    "depth": 4,
    "slug": "随机测试有哪些最佳实践",
    "text": "随机测试有哪些最佳实践？"
  }, {
    "depth": 4,
    "slug": "如何衡量随机测试的效果",
    "text": "如何衡量随机测试的效果？"
  }, {
    "depth": 4,
    "slug": "如何将随机测试集成到持续集成持续部署流水线",
    "text": "如何将随机测试集成到持续集成/持续部署流水线？"
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
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "ad-hoc-testing-随机测试",
      children: "Ad Hoc Testing 随机测试"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "“Ad-Hoc”原意是指“特定的，一次性的”,故 Ad hoc testing 一般成为即兴测试，一次性测试或随机测试。\n这里把 Ad Hoc Testing 翻译为随机测试，也感觉有些歧义，个人觉得即兴测试，临时测试，临场测试貌似更准确。（大家有好的想法，可以提 PR 来更新）"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ad hoc testing（随机测试）"
      }), " 是一种非正式、即兴的", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/software-testing.md",
        children: "软件测试"
      }), "方法。其主要目标是尽快发现漏洞或问题。这种方法没有详细的计划或文档支持，属于一种不受限、灵活应对的测试方式。"]
    }), "\n", createVNode(_components.p, {
      children: ["相关术语：\n", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md",
        children: "Exploratory Testing  探索性测试"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "关于随机测试的问题",
      children: "关于随机测试的问题"
    }), "\n", createVNode(_components.h3, {
      id: "基础知识和重要性",
      children: "基础知识和重要性"
    }), "\n", createVNode(_components.h4, {
      id: "什么是软件测试中的随机测试",
      children: "什么是软件测试中的随机测试？"
    }), "\n", createVNode(_components.p, {
      children: "随机测试 是一种非正式且非结构化的软件测试技术，测试人员在没有具体计划或文档的情况下探索软件。它凭借测试人员的直觉、经验和对应用程序的理解来引导测试过程。这种测试通常用于发现传统、结构化测试方法可能遗漏的缺陷。"
    }), "\n", createVNode(_components.p, {
      children: "在 随机测试 中，测试人员可以自由选择应用程序的任何路径，并使用任何有效或无效的输入数据。这是一种探索性测试，其主要目标是通过超越传统思维方式、以创造性的方式尝试破坏系统来发现错误。"
    }), "\n", createVNode(_components.p, {
      children: "由于 随机测试 是无脚本的，要重现问题通常需要测试人员详细记录他们的操作。通常在正式执行测试用例后的测试后阶段使用，以补充更加结构化的测试方法。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "关键点："
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "非结构化和非正式的测试方法。"
      }), "\n", createVNode(_components.li, {
        children: "依赖于测试人员的直觉和经验。"
      }), "\n", createVNode(_components.li, {
        children: "用于发现结构化测试未捕捉到的缺陷。"
      }), "\n", createVNode(_components.li, {
        children: "允许创造性和无约束的探索。"
      }), "\n", createVNode(_components.li, {
        children: "没有详细记录的情况下难以重现问题。"
      }), "\n", createVNode(_components.li, {
        children: "在后期阶段与结构化测试相辅相成。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "为什么随机测试在软件开发生命周期中很重要",
      children: "为什么随机测试在软件开发生命周期中很重要？"
    }), "\n", createVNode(_components.p, {
      children: ["随机测试 在", createVNode(_components.strong, {
        children: "软件开发生命周期"
      }), "（SDLC）中至关重要，因为它提供了一种独特的方法来发现结构化测试可能忽略的缺陷。它依赖于测试人员的直觉、经验和对系统的理解，以在没有预定义 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
        children: "测试用例"
      }), " 或文档的情况下探索应用程序。这可能导致发现", createVNode(_components.strong, {
        children: "意外问题"
      }), "，特别是在应用程序的复杂或较不清晰的领域。"]
    }), "\n", createVNode(_components.p, {
      children: ["由于 随机测试 是无脚本的，它允许测试人员更自然地", createVNode(_components.strong, {
        children: "模拟用户的视角"
      }), "，潜在地识别正式 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
        children: "测试用例"
      }), " 无法发现的可用性问题。它还对应用程序进行**", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/stress-testing.md",
        children: "压力测试"
      }), "**提供了价值，这是在设计阶段未预料到的方式。"]
    }), "\n", createVNode(_components.p, {
      children: ["将 随机测试 纳入 SDLC 可以增强整体的**", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-coverage.md",
        children: "测试覆盖率"
      }), "**，并提供了一种结构化测试的补充方法。在开发的后期阶段，尤其是在正式测试周期完成后，在发布前进行最终检查或在快速测试补丁和小更新之前，它变得尤为重要。"]
    }), "\n", createVNode(_components.p, {
      children: ["此外，随机测试 可以是一种", createVNode(_components.strong, {
        children: "高效利用时间"
      }), "的测试应用程序的方式，特别是在截止日期紧迫的情况下，因为它不需要提前准备。这是一种灵活的测试方法，可以在任何机会使用，使其成为 SDLC 中持续改进的有价值工具。"]
    }), "\n", createVNode(_components.h4, {
      id: "随机测试与其他测试形式的主要区别是什么",
      children: "随机测试与其他测试形式的主要区别是什么？"
    }), "\n", createVNode(_components.p, {
      children: ["随机测试 与其他测试形式的主要区别在于其", createVNode(_components.strong, {
        children: "缺乏正式结构"
      }), "和", createVNode(_components.strong, {
        children: ["预定义的 ", createVNode(_components.a, {
          href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
          children: "测试用例"
        })]
      }), "。与诸如单元测试、集成测试或", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/system-testing.md",
        children: "系统测试"
      }), "等系统测试方法不同，随机测试 是", createVNode(_components.strong, {
        children: "无脚本"
      }), "的，依赖于测试人员的直觉、经验和对系统的理解来探索应用程序并发现缺陷。"]
    }), "\n", createVNode(_components.p, {
      children: ["其他形式的测试通常遵循", createVNode(_components.strong, {
        children: "记录的过程"
      }), "，基于事先设计的**", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-plan.md",
        children: "测试计划"
      }), createVNode(_components.strong, {
        children: "、"
      }), createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
        children: "测试用例"
      }), createVNode(_components.strong, {
        children: "和"
      }), createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-script.md",
        children: "测试脚本"
      }), createVNode(_components.strong, {
        children: "。这些测试通常是"
      }), "可重复的**，可以", createVNode(_components.strong, {
        children: "自动化"
      }), "，确保在测试周期内保持一致的覆盖范围。"]
    }), "\n", createVNode(_components.p, {
      children: ["相反，随机测试 是", createVNode(_components.strong, {
        children: "自发的"
      }), "和", createVNode(_components.strong, {
        children: "非正式的"
      }), "，使其", createVNode(_components.strong, {
        children: "不可重复"
      }), "。它主要是一个", createVNode(_components.strong, {
        children: "手动"
      }), "测试过程，因为它需要人类的创造力和洞察力来执行。执行 随机测试 的测试人员可能会关注", createVNode(_components.strong, {
        children: "难以自动化"
      }), "或需要", createVNode(_components.strong, {
        children: "人工判断"
      }), "的应用程序区域。"]
    }), "\n", createVNode(_components.p, {
      children: ["虽然其他测试方法通过详细的", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-scenario.md",
        children: "测试场景"
      }), "旨在实现全面覆盖，随机测试通常用于发现结构化测试可能忽略的", createVNode(_components.strong, {
        children: "边缘案例"
      }), "或", createVNode(_components.strong, {
        children: "异常缺陷"
      }), "。它通常在", createVNode(_components.strong, {
        children: "时间有限"
      }), "时使用，并作为其他测试策略的补充，而不是作为一种独立的方法。"]
    }), "\n", createVNode(_components.p, {
      children: ["随机测试 的灵活性使测试人员能够在无需更新正式测试文档的情况下", createVNode(_components.strong, {
        children: "快速适应"
      }), "应用程序的更改。然而，由于其非结构化的性质，跟踪和衡量其有效性可能会", createVNode(_components.strong, {
        children: "具有挑战性"
      }), "。"]
    }), "\n", createVNode(_components.h4, {
      id: "随机测试有哪些优缺点",
      children: "随机测试有哪些优缺点？"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "随机测试的优势："
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "灵活性"
        }), "：允许测试人员在没有预定义案例的情况下探索应用程序，鼓励创造性的测试场景。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "经济高效"
        }), "：无需进行广泛的准备或文档编制，降低了初期成本。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "快速反馈"
        }), "：提供对应用程序功能和潜在问题的即时见解。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["发现意外的", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
            children: "缺陷"
          })]
        }), "：由于其不可预测的性质，可以揭示结构化测试可能忽略的缺陷。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "随机测试的劣势："
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "不可重复"
        }), "：如果步骤未经记录，找到一个错误可能是一次性事件，使得跟踪和修复变得困难。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "测试范围不足"
        }), "：没有结构化的方法，应用程序的某些部分可能保持未经测试状态。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "主观结果"
        }), "：严重依赖于测试人员的专业知识和直觉，可能导致不一致的结果。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "不适用于所有阶段"
        }), "：在需要更多形式化验证的开发后期阶段可能效果不佳。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["请记住，随机测试是其他测试方法的一种补充，而不是独立的解决方案。它在由", createVNode(_components.strong, {
        children: "经验丰富的测试人员"
      }), "使用时效果最好，这些测试人员能够快速识别和探索复杂的应用程序区域。"]
    }), "\n", createVNode(_components.h3, {
      id: "实施和技术",
      children: "实施和技术"
    }), "\n", createVNode(_components.h4, {
      id: "如何执行随机测试",
      children: "如何执行随机测试？"
    }), "\n", createVNode(_components.p, {
      children: ["随机测试是在", createVNode(_components.strong, {
        children: "没有任何正式的测试计划"
      }), "或文档的情况下执行的。测试人员凭借他们的理解力和", createVNode(_components.strong, {
        children: "探索软件"
      }), "来发现缺陷。这种方法在很大程度上依赖于测试人员的", createVNode(_components.strong, {
        children: "直觉、经验和创造力"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "以下是执行随机测试的一般过程："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "了解应用程序"
        }), "：对软件的功能和目的有一个基本的了解。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "定义范围"
        }), "：尽管是非正式的，但决定要关注的应用程序区域。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "执行测试"
        }), "：以各种方式与软件进行交互，以发现问题，包括：\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "尝试不同的输入"
          }), "\n", createVNode(_components.li, {
            children: "以意想不到的方式浏览应用程序"
          }), "\n", createVNode(_components.li, {
            children: "尝试用不寻常的行为破坏应用程序"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "记录观察"
        }), "：跟踪测试过程中观察到的任何缺陷或奇怪的行为。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["报告", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
            children: "缺陷"
          })]
        }), "：将发现的问题通报给开发团队以供解决。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["在随机测试期间，测试人员可能会采用**", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/error-guessing.md",
        children: "错误猜测"
      }), createVNode(_components.strong, {
        children: "或"
      }), createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md",
        children: "探索性测试"
      }), createVNode(_components.strong, {
        children: "等技术来指导他们的方法。该过程本质上是"
      }), "灵活和非结构化**的，使测试人员能够快速识别结构化测试可能忽略的问题。"]
    }), "\n", createVNode(_components.p, {
      children: ["值得注意的是，尽管随机测试可能是自发的，但对系统的", createVNode(_components.strong, {
        children: "广泛了解"
      }), "及其潜在弱点可以导致更有效的测试会话。"]
    }), "\n", createVNode(_components.h4, {
      id: "有哪些常用的随机测试技术",
      children: "有哪些常用的随机测试技术？"
    }), "\n", createVNode(_components.p, {
      children: ["在", createVNode(_components.strong, {
        children: "随机测试"
      }), "中常见的技术包括："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md",
            children: "探索性测试"
          })
        }), "：测试人员在没有预定义测试用例的情况下探索软件，使用他们的理解和直觉来引导他们的操作。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/error-guessing.md",
            children: "错误猜测"
          })
        }), "：测试人员依赖经验猜测软件中可能发生缺陷的最有可能的区域。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/monkey-testing.md",
            children: "猴子测试"
          })
        }), "：向系统提供随机输入，观察其行为，通常自动化生成大量随机数据。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/pair-testing.md",
            children: "对测"
          })
        }), "：两名测试人员在一台键盘上共同工作；一人操作测试，另一人提供指导并记录发现。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/session-based-testing.md",
            children: "基于会话的测试"
          })
        }), "：测试被结构化成专注于特定区域的不间断会话，测试人员记录他们的发现和思考过程。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这些技术通常以一种", createVNode(_components.strong, {
        children: "互补"
      }), "的方式使用，取决于测试会话的背景和目标。它们充分利用测试人员的创造力、经验和直觉，以发现结构化测试可能忽略的问题。"]
    }), "\n", createVNode(_components.h4, {
      id: "有效执行随机测试需要哪些技能",
      children: "有效执行随机测试需要哪些技能？"
    }), "\n", createVNode(_components.p, {
      children: ["要有效执行", createVNode(_components.strong, {
        children: "随机测试"
      }), "，个体需要一系列技能，使他们能够在没有预定义的 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-plan.md",
        children: "测试计划"
      }), " 的情况下探索软件。这些技能包括："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "探索技能"
        }), "：有创造性地探索和导航软件，以发现结构化测试可能忽略的问题的能力。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "分析技能"
        }), "：强大的分析思维，能够假设缺陷可能存在的位置并理解软件的行为。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "注重细节"
        }), "：敏锐的观察力，注意到可能导致更大问题的细微差异和潜在问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "技术知识"
        }), "：对软件的架构、特性和潜在弱点有扎实的了解。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "经验"
        }), "：熟悉被测试系统和类似系统，以便利用过去的知识并识别模式。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "直觉"
        }), "：对缺陷可能发生的位置有直观的感觉，通常是从经验中发展而来。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "沟通技能"
        }), "：能够清晰地记录和传达发现，向开发团队和其他利益相关者沟通。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "适应能力"
        }), "：灵活切换焦点，并根据测试过程中出现的新信息或关注的领域进行调整的能力。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "时间管理"
        }), "：有效管理时间的技能，因为即兴测试通常是有时间限制的或在有限的时间内进行的。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这些技能帮助测试人员以既高效又有效的方式执行", createVNode(_components.strong, {
        children: "随机测试"
      }), "，为软件的质量和可靠性提供有价值的见解。"]
    }), "\n", createVNode(_components.h4, {
      id: "随机测试可以自动化还是只能严格手动测试",
      children: "随机测试可以自动化还是只能严格手动测试？"
    }), "\n", createVNode(_components.p, {
      children: ["由于其本质是一种非正式和无结构的测试方法，测试人员在", createVNode(_components.strong, {
        children: "随机测试"
      }), "中积极地在没有预定义的 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
        children: "测试用例"
      }), " 或计划的情况下探索软件。另一方面，自动化依赖于预先脚本化的测试，可以自动运行。因此，", createVNode(_components.strong, {
        children: "随机测试主要是一个手动过程"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["然而，随机测试的某些方面可以通过自动化工具支持。例如，自动化脚本可以用于设置应用程序内的复杂环境或状态，然后测试人员可以手动探索。这种混合方法使测试人员能够专注于随机测试的探索方面，而无需进行重复的 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/setup.md",
        children: "设置"
      }), " 任务。"]
    }), "\n", createVNode(_components.p, {
      children: ["此外，虽然随机测试的探索部分是手动的，", createVNode(_components.strong, {
        children: "自动化可以帮助记录和捕获"
      }), "发现问题时系统的状态。工具可以自动记录采取的步骤、系统状态和其他相关数据，有助于", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
        children: "缺陷"
      }), "的再现和报告。"]
    }), "\n", createVNode(_components.p, {
      children: "总体而言，虽然随机测试的核心活动是手动的，但自动化可以在增强测试过程的效率和效果方面发挥支持性作用。"
    }), "\n", createVNode(_components.h3, {
      id: "场景和用例",
      children: "场景和用例"
    }), "\n", createVNode(_components.h4, {
      id: "有哪些实际场景的示例来介绍如何使用随机测试",
      children: "有哪些实际场景的示例来介绍如何使用随机测试？"
    }), "\n", createVNode(_components.p, {
      children: "随机测试通常在存在有限结构或文档，并且需要对软件行为进行快速、直观评估的情况下使用。以下是一些实际场景的例子："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md",
            children: "探索性测试"
          })
        }), "：在开发新功能时，测试人员可能会使用即兴方法在正式编写测试用例之前探索该功能的功能性。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "发布后"
        }), "：在软件发布后，可以使用即兴测试快速检查实时环境，以确保没有引入重大问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
            children: "缺陷"
          }), " ", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/V/verification.md",
            children: "验证"
          })]
        }), "：一旦修复了缺陷，测试人员可能会围绕修复进行即兴测试，以确保问题得到解决，并且没有引入新问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "高风险区域"
        }), "：在已知存在高风险组件的系统中，可以使用即兴测试快速评估这些区域的稳定性，特别是在进行更改后。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "有限时间"
        }), "：当存在时间限制且无法完成正式测试时，即兴测试可以提供快速的合理性检查，以评估关键功能。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用户反馈"
        }), "：如果用户报告了意外行为，测试人员可能会使用即兴测试来复制问题并探索可能受到影响的相关功能。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "技术更改"
        }), "：当底层技术或框架更新时，即兴测试可以帮助快速识别任何兼容性问题或回归。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "在这些场景中，测试人员的经验、直觉和对系统的了解引导测试过程，通常导致发现结构化测试可能忽视的缺陷。"
    }), "\n", createVNode(_components.h4, {
      id: "你能提供一个随机测试发现关键缺陷的场景吗",
      children: "你能提供一个随机测试发现关键缺陷的场景吗？"
    }), "\n", createVNode(_components.p, {
      children: ["情景：在一个开发的晚期阶段，一位测试工程师正在探索一个新实施的金融应用功能，该功能允许用户在账户之间进行资金转账。正式的 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
        children: "测试用例"
      }), " 已经执行过，未发现重大问题。然而，工程师决定进行一些", createVNode(_components.strong, {
        children: "随机测试"
      }), "，模拟可能做出不合理和非传统选择的用户。"]
    }), "\n", createVNode(_components.p, {
      children: "在随机导航应用程序的过程中，工程师试图从资金不足的账户发起转账，期望看到标准错误消息。然而，应用程序崩溃了，重新启动后，账户余额损坏，显示不正确的数字。"
    }), "\n", createVNode(_components.p, {
      children: ["这个关键的 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
        children: "缺陷"
      }), "在结构化测试中被忽略了，因为 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
        children: "测试用例"
      }), " 假设用户行为是理性的，并且没有考虑到工程师在即兴会话期间采取的特定操作序列。这个 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
        children: "缺陷"
      }), " 是在处理具有特定时间和数据条件的交易时发生未处理异常的结果，而这些条件在 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-script.md",
        children: "测试脚本"
      }), " 中没有涵盖。"]
    }), "\n", createVNode(_components.p, {
      children: ["发现这个 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
        children: "缺陷"
      }), " 是重要的，因为它可能导致在生产环境中出现严重的财务差异。随机测试 方法使工程师能够发现结构化测试忽视的关键问题，展示了这种测试方法在发现不可预测的现实问题方面的价值。"]
    }), "\n", createVNode(_components.h4, {
      id: "随机测试如何融入端到端e2e测试方案",
      children: "随机测试如何融入端到端（e2e）测试方案？"
    }), "\n", createVNode(_components.p, {
      children: ["随机测试，虽然主要是手动和探索性的，通过发现结构化测试可能忽略的问题，为端到端（E2E）测试提供了补充。在 E2E 场景中，随机测试可以被战略性地使用，", createVNode(_components.strong, {
        children: "在"
      }), "正式执行 ", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
        children: "测试用例"
      }), " ", createVNode(_components.strong, {
        children: "之后"
      }), "，模拟真实的使用情况。这是一种在没有预定义脚本的情况下", createVNode(_components.strong, {
        children: "验证整个系统行为"
      }), "和", createVNode(_components.strong, {
        children: "用户体验"
      }), "的方式。"]
    }), "\n", createVNode(_components.p, {
      children: ["想象一下一个覆盖应用程序中典型用户流程的 E2E 测试。一旦自动化确认流程按预期工作，随机测试介入探索", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/use-case.md",
        children: "用例"
      }), "的边缘。测试人员可能尝试", createVNode(_components.strong, {
        children: "意外的输入组合"
      }), "，", createVNode(_components.strong, {
        children: "以非线性方式导航"
      }), "，或", createVNode(_components.strong, {
        children: "超出典型使用模式的系统压力测试"
      }), "。这可以揭示诸如内存泄漏、处理边缘情况或在不同设备上的 UI 不一致性等漏洞。"]
    }), "\n", createVNode(_components.p, {
      children: ["虽然随机测试不是 E2E 场景的主要焦点，但它是一种", createVNode(_components.strong, {
        children: "全面评估"
      }), "的有价值工具。这就是像一个不受", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-script.md",
        children: "测试脚本"
      }), "限制的最终用户思考的方式。自动化工程师可以通过使用随机测试会话的见解，以更强大的", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md.md",
        children: "测试用例"
      }), createVNode(_components.strong, {
        children: "增强自动化套件"
      }), "的方法受益。"]
    }), "\n", createVNode(_components.p, {
      children: ["将即兴测试的发现纳入自动化的 E2E 测试中，确保", createVNode(_components.strong, {
        children: "自动化保持相关"
      }), "并", createVNode(_components.strong, {
        children: "适应现实世界的复杂性"
      }), "。这是一个持续改进的循环，随机测试为自动化提供信息，而自动化则为更多", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md",
        children: "探索性测试"
      }), "释放时间。"]
    }), "\n", createVNode(_components.h3, {
      id: "最佳实践",
      children: "最佳实践"
    }), "\n", createVNode(_components.h4, {
      id: "随机测试有哪些最佳实践",
      children: "随机测试有哪些最佳实践？"
    }), "\n", createVNode(_components.p, {
      children: "进行随机测试的最佳实践包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "优先考虑高风险或变更的区域"
        }), "：专注于应用程序中最近修改或已知容易出错的部分。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "利用领域知识"
        }), "：利用您对业务和用户行为的理解，探索对最终用户至关重要的功能。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "记录发现"
        }), "：虽然随机测试是非脚本化的，但重要的是记录测试内容和发现的任何问题，以供将来参考和跟踪缺陷。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用多样化的测试技术"
        }), "：结合不同的方法，如探索性测试、错误猜测和结对测试，以发现各种问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "限时会话"
        }), "：为随机测试设定特定的持续时间，以保持专注和高效率。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "与他人合作"
        }), "：与团队中的不同成员合作，以获得新的视角并发现更多的缺陷。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "重复测试"
        }), "：在开发的不同阶段进行随机测试，以捕捉在代码更改后可能出现的新问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "与正式测试集成"
        }), "：利用随机测试的见解来增强您的正式测试用例和自动化脚本。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "请记住，虽然随机测试是非正式的，但它仍应具有战略性和针对性，以最大化其在发现潜在缺陷方面的有效性。"
    }), "\n", createVNode(_components.h4, {
      id: "如何衡量随机测试的效果",
      children: "如何衡量随机测试的效果？"
    }), "\n", createVNode(_components.p, {
      children: ["衡量", createVNode(_components.strong, {
        children: "随机测试"
      }), "的效果可能会有挑战，因为它的非结构化性质。然而，可以使用一些指标来评估其影响："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["发现的", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
            children: "缺陷"
          }), "数量"]
        }), "：跟踪通过即兴测试特别发现的缺陷，尤其是其他测试方法未能发现的缺陷。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
            children: "缺陷"
          }), "的", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/severity.md",
            children: "严重程度"
          })]
        }), "：评估所发现缺陷的严重程度。高严重程度的缺陷可以表明即兴测试在发现关键问题方面的效果。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-coverage.md",
            children: "测试覆盖率"
          })
        }), "：尽管在即兴测试中很难量化，但可以在测试后使用代码覆盖工具评估意外测试的应用程序哪些区域。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "发现缺陷的时间"
        }), "：测量发现缺陷所需的时间。即兴测试可能比结构化测试更快地发现某些缺陷。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md",
            children: "缺陷"
          }), "的成本"]
        }), "：分析通过早期发现和修复缺陷带来的成本节省，这可以归因于即兴测试的非正式和快速性质。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "测试人员的反馈"
        }), "：收集测试人员对于发现缺陷的难易程度以及他们对于即兴测试的全面性的看法的定性反馈。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "将这些指标与您测试环境的背景结合使用，以确定随机测试的效果。请记住，虽然这些指标"
    }), "\n", createVNode(_components.p, {
      children: "可以提供见解，但即兴测试的非脚本化性质意味着其真正的价值通常在于测试人员的专业知识和直觉，这可能更难以量化。"
    }), "\n", createVNode(_components.h4, {
      id: "如何将随机测试集成到持续集成持续部署流水线",
      children: "如何将随机测试集成到持续集成/持续部署流水线？"
    }), "\n", createVNode(_components.p, {
      children: ["将", createVNode(_components.strong, {
        children: "随机测试"
      }), "集成到 CI/CD 流水线中需要有策略性但非正式的测试工作，以补充自动化和结构化测试。由于即兴测试是探索性的且通常是手动的，因此不能直接适用于自动化流水线。然而，可以通过以下方式进行集成："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "部署后的合理性检查"
          }), "：在自动化部署后，工程师可以在实际系统上进行即兴测试，以快速验证功能和特定于环境的问题。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "定期手动测试会话"
          }), "：在 CI/CD 流程中预留时间段，供测试人员对最新构建执行随机测试，确保对最新更改进行即时反馈。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "反馈集成"
          }), "：使用反馈机制将随机测试的发现结果报告回 CI/CD 流水线。这可能涉及创建自动化工单或更新", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
            children: "测试用例"
          }), "。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "基于风险的测试触发器"
          }), "：实施一个系统，在代码更改或高风险区域的基础上，通知测试人员执行有针对性的随机测试。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: ["探索性", createVNode(_components.a, {
              href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-tool.md",
              children: "测试工具"
            })]
          }), "：利用在 CI/CD 上下文中支持", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md",
            children: "探索性测试"
          }), "的工具，允许基于会话的", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-management.md",
            children: "测试管理"
          }), "和报告。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "文档和追踪"
          }), "：确保即兴测试的发现结果像其他", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
            children: "测试用例"
          }), "一样进行文档化和追踪，以指导未来的自动化测试并改进回归套件。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["请记住，虽然随机测试不能自动化，但其结果可以为自动化", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-suite.md",
        children: "测试套件"
      }), "提供信息并加以增强，使其成为持续交付生态系统中的有价值的资产。"]
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["软件测试术语 Github 仓库 ", createVNode(_components.a, {
          href: "https://github.com/naodeng/QA-Glossary-Wiki",
          children: "https://github.com/naodeng/QA-Glossary-Wiki"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["QA Glossary Wiki ", createVNode(_components.a, {
          href: "https://ray.run/wiki",
          children: "https://ray.run/wiki"
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

const url = "src/blog/zh-cn/QA-Glossary-Wiki/QA-Glossary-Wiki-ad-hoc-testing.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/QA-Glossary-Wiki/QA-Glossary-Wiki-ad-hoc-testing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/QA-Glossary-Wiki/QA-Glossary-Wiki-ad-hoc-testing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
