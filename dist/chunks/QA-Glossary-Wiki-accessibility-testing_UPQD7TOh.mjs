import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "软件测试术语分享:Accessibility Testing 无障碍测试",
  "description": "这篇博文是软件测试术语分享系列的一部分，聚焦于无障碍测试。文章从基础概念、重要性，到流程与技巧、工具与技术，再到挑战与解决方案，全面阐述了无障碍测试在软件开发中的关键角色。读者将深入了解如何确保应用程序对所有用户都具有可访问性，并学到实施无障碍测试的最佳实践。通过这个系列分享，读者将更好地了解无障碍测试的价值，并在实际测试中更全面地考虑用户体验的多样性。",
  "date": "2024-02-19T04:06:44.000Z",
  "author": "nao.deng",
  "tags": ["QA Glossary", "Accessibility Testing"],
  "categories": ["测试方法"],
  "series": ["软件测试术语分享"],
  "cover": "./QA-Glossary-Wiki-accessibility-testing-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "accessibility-testing-无障碍测试",
    "text": "Accessibility Testing 无障碍测试"
  }, {
    "depth": 2,
    "slug": "关于无障碍测试的问题",
    "text": "关于无障碍测试的问题"
  }, {
    "depth": 3,
    "slug": "基础知识和重要性",
    "text": "基础知识和重要性"
  }, {
    "depth": 4,
    "slug": "什么是无障碍测试",
    "text": "什么是无障碍测试？"
  }, {
    "depth": 4,
    "slug": "为什么无障碍测试很重要",
    "text": "为什么无障碍测试很重要？"
  }, {
    "depth": 4,
    "slug": "无障碍测试的目标是什么",
    "text": "无障碍测试的目标是什么？"
  }, {
    "depth": 4,
    "slug": "无障碍测试如何让用户受益",
    "text": "无障碍测试如何让用户受益？"
  }, {
    "depth": 4,
    "slug": "不进行无障碍测试会有什么影响",
    "text": "不进行无障碍测试会有什么影响？"
  }, {
    "depth": 3,
    "slug": "标准和指引",
    "text": "标准和指引"
  }, {
    "depth": 4,
    "slug": "无障碍测试的关键标准和指南是什么",
    "text": "无障碍测试的关键标准和指南是什么？"
  }, {
    "depth": 4,
    "slug": "什么是-wcag为什么它很重要",
    "text": "什么是 WCAG？为什么它很重要？"
  }, {
    "depth": 4,
    "slug": "wcag-合规性有哪些不同级别",
    "text": "WCAG 合规性有哪些不同级别？"
  }, {
    "depth": 4,
    "slug": "什么是第-508-条以及它与无障碍性测试有何关系",
    "text": "什么是第 508 条以及它与无障碍性测试有何关系？"
  }, {
    "depth": 4,
    "slug": "aria-角色是什么以及它们如何在无障碍性测试中使用",
    "text": "ARIA 角色是什么以及它们如何在无障碍性测试中使用？"
  }, {
    "depth": 3,
    "slug": "工具和技术",
    "text": "工具和技术"
  }, {
    "depth": 4,
    "slug": "无障碍性测试常用哪些工具",
    "text": "无障碍性测试常用哪些工具？"
  }, {
    "depth": 4,
    "slug": "有哪些无障碍测试的人工技术",
    "text": "有哪些无障碍测试的人工技术？"
  }, {
    "depth": 4,
    "slug": "如何在无障碍测试中使用自动化工具",
    "text": "如何在无障碍测试中使用自动化工具？"
  }, {
    "depth": 4,
    "slug": "自动无障碍测试工具有哪些局限性",
    "text": "自动无障碍测试工具有哪些局限性？"
  }, {
    "depth": 4,
    "slug": "如何测试不同类型的残障",
    "text": "如何测试不同类型的残障？"
  }, {
    "depth": 3,
    "slug": "实施与最佳实践",
    "text": "实施与最佳实践"
  }, {
    "depth": 4,
    "slug": "实施无障碍测试有哪些最佳做法",
    "text": "实施无障碍测试有哪些最佳做法"
  }, {
    "depth": 4,
    "slug": "如何将无障碍测试纳入软件开发生命周期",
    "text": "如何将无障碍测试纳入软件开发生命周期？"
  }, {
    "depth": 4,
    "slug": "如何确保持续符合无障碍要求",
    "text": "如何确保持续符合无障碍要求？"
  }, {
    "depth": 4,
    "slug": "需要注意哪些常见的无障碍问题",
    "text": "需要注意哪些常见的无障碍问题？"
  }, {
    "depth": 4,
    "slug": "如何让网站更容易访问",
    "text": "如何让网站更容易访问？"
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
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      id: "accessibility-testing-无障碍测试",
      children: "Accessibility Testing 无障碍测试"
    }), "\n", createVNode(_components.p, {
      children: "无障碍测试旨在确保移动和 Web 应用对每个人都是可用的，包括那些具有视觉或听觉障碍，以及其他身体或认知挑战的个体"
    }), "\n", createVNode(_components.p, {
      children: ["相关术语：\n", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/usability-testing.md",
        children: "Usability Testing 易用性测试"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "关于无障碍测试的问题",
      children: "关于无障碍测试的问题"
    }), "\n", createVNode(_components.h3, {
      id: "基础知识和重要性",
      children: "基础知识和重要性"
    }), "\n", createVNode(_components.h4, {
      id: "什么是无障碍测试",
      children: "什么是无障碍测试？"
    }), "\n", createVNode(_components.p, {
      children: "无障碍测试是一种确保软件和 Web 应用能够被广泛残障人群使用的过程，包括视觉、听觉、身体、语音、认知、语言、学习和神经方面的障碍。这种测试方式旨在验证应用是否能够被使用辅助技术，如屏幕阅读器、盲文终端和替代输入设备的个体有效操作和理解。"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "无障碍测试"
      }), " 的关键方面包括："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "导航性"
        }), "：用户是否可以使用键盘或辅助设备浏览应用？"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "可读性"
        }), "：内容是否对视觉障碍用户可读且易理解？"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "兼容性"
        }), "：应用是否与各种辅助技术协同工作？"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "语义化 HTML"
        }), "：HTML 元素是否用于传达含义和结构？"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "动态内容"
        }), "：动态内容是否可通过屏幕阅读器访问？"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "视觉设计"
        }), "：文本和背景之间是否有足够的对比度，以满足视力较差用户的需求？"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "多媒体"
        }), "：视频和音频内容是否提供字幕和文本稿？"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "测试技巧"
      }), " 既包括自动化，也包括", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
        children: "手工测试"
      }), "方法。自动化工具可扫描特定类型的问题，如缺失的 alt 文本或错误的 ARIA 角色，而", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
        children: "手工测试"
      }), "可能涉及使用屏幕阅读器或仅通过键盘浏览应用。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "代码示例"
      }), " 用于使用自动化工具检查图像 alt 文本："]
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
            children: "'应对所有图像提供 alt 文本'"
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
            children: "'img'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "each"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "$img"
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
              color: "#B392F0"
            },
            children: "    expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "($img."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "attr"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'alt'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'string'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").and.not.be.empty;"
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
      children: "总体而言，无障碍测试是软件质量保证的关键组成部分，确保包容性和法律合规性。"
    }), "\n", createVNode(_components.h4, {
      id: "为什么无障碍测试很重要",
      children: "为什么无障碍测试很重要？"
    }), "\n", createVNode(_components.p, {
      children: ["无障碍测试的重要性在于确保", createVNode(_components.strong, {
        children: "所有用户"
      }), "，包括残障人士，都能有效地访问和使用软件产品。通过识别和解决无障碍障碍，它推动了", createVNode(_components.strong, {
        children: "包容性设计"
      }), "，提升了各种用户的", createVNode(_components.strong, {
        children: "用户体验"
      }), "。这种测试不仅涉及到道德责任和用户倡导，还在许多地区是法律要求，帮助组织遵守法规，避免潜在的", createVNode(_components.strong, {
        children: "法律风险"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["此外，无障碍测试还可能带来", createVNode(_components.strong, {
        children: "SEO 改善"
      }), "，因为搜索引擎更青睐无障碍网站，可能提高网站的可见性和覆盖范围。它还鼓励采用", createVNode(_components.strong, {
        children: "最佳编码实践"
      }), "，产生更干净、更易维护的代码。通过在开发过程的早期融入无障碍考虑，公司可以降低在后期追加无障碍功能所需的成本和工作量。"]
    }), "\n", createVNode(_components.p, {
      children: "简而言之，无障碍测试之所以重要，原因如下："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "促进包容性"
        }), "，确保软件能够被各种能力的人使用。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "履行法律义务"
        }), "，帮助组织遵守无障碍标准，避免法律问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "提升 SEO"
        }), "，可能增加软件的可见性和覆盖范围。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "鼓励更好的编码实践"
        }), "，产生更易维护、更健壮的软件。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["忽视无障碍测试可能导致", createVNode(_components.strong, {
        children: "较小的用户群"
      }), "、潜在的", createVNode(_components.strong, {
        children: "法律挑战"
      }), "，以及", createVNode(_components.strong, {
        children: "产品改进的遗憾机会"
      }), "。"]
    }), "\n", createVNode(_components.h4, {
      id: "无障碍测试的目标是什么",
      children: "无障碍测试的目标是什么？"
    }), "\n", createVNode(_components.p, {
      children: ["无障碍测试的目标在于确保软件产品对具有各种", createVNode(_components.strong, {
        children: "能力和障碍"
      }), "的人都是", createVNode(_components.strong, {
        children: "可用的"
      }), "。这包括验证产品是否", createVNode(_components.strong, {
        children: "符合"
      }), "无障碍标准和指南，如 Web 内容无障碍指南（WCAG）和第 508 条。通过这一过程，旨在提供一种", createVNode(_components.strong, {
        children: "包容性用户体验"
      }), "，使具有视觉、听觉、身体、语音、认知、语言、学习和神经障碍等障碍的个体能够", createVNode(_components.strong, {
        children: "有效地导航"
      }), "、", createVNode(_components.strong, {
        children: "与之交互"
      }), "和", createVNode(_components.strong, {
        children: "访问内容"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["无障碍测试还寻求", createVNode(_components.strong, {
        children: "识别和消除"
      }), "可能阻碍残障人士使用产品的障碍，确保所有用户对信息和功能都有", createVNode(_components.strong, {
        children: "平等的访问权"
      }), "。为此，它采用了", createVNode(_components.strong, {
        children: "自动化工具"
      }), "和", createVNode(_components.strong, {
        children: "手动技术"
      }), "的组合，以涵盖自动化本身可能无法捕捉的各个方面。"]
    }), "\n", createVNode(_components.p, {
      children: ["最终目标是", createVNode(_components.strong, {
        children: "维护法律和伦理标准"
      }), "，", createVNode(_components.strong, {
        children: "避免歧视"
      }), "，通过使产品面向更广泛的受众，", createVNode(_components.strong, {
        children: "拓展市场覆盖范围"
      }), "。这不仅仅是合规性问题；更关涉到", createVNode(_components.strong, {
        children: "接纳多样性"
      }), "和", createVNode(_components.strong, {
        children: "提高用户满意度"
      }), "。"]
    }), "\n", createVNode(_components.h4, {
      id: "无障碍测试如何让用户受益",
      children: "无障碍测试如何让用户受益？"
    }), "\n", createVNode(_components.p, {
      children: "无障碍测试通过确保软件产品可供具有各种能力和残疾的人使用，使更广泛的用户能够有效地与应用程序、网站或工具进行互动，而不受身体或认知挑战的影响。通过适应屏幕阅读器、盲文终端和语音识别软件等辅助技术，无障碍测试有助于打造更加公正的用户体验。"
    }), "\n", createVNode(_components.p, {
      children: "对于残障用户，无障碍测试可能意味着能否在网上执行基本任务与面临重大障碍之间的区别。它实现了独立导航和交互，这对于个人的自主权和尊严至关重要。此外，对于用户来说，它可以减少挫折感，提高效率，因为他们可以在不受不必要阻碍的情况下访问和使用功能和信息。"
    }), "\n", createVNode(_components.p, {
      children: "除了直接惠及用户外，无障碍测试还可能导致对所有用户的可用性的提升。许多无障碍功能，如清晰的导航和易读的字体，都会提升整体用户体验。通过专注于无障碍性，开发人员可能会无意中改善更广泛用户群体的设计和功能，从而实现更直观和用户友好的产品。"
    }), "\n", createVNode(_components.p, {
      children: "最后，无障碍测试还可以帮助避免由于不遵守无障碍法律法规而可能产生的法律后果，确保软件不仅具有包容性，而且在法律上合规。"
    }), "\n", createVNode(_components.h4, {
      id: "不进行无障碍测试会有什么影响",
      children: "不进行无障碍测试会有什么影响？"
    }), "\n", createVNode(_components.p, {
      children: "不进行无障碍测试可能带来严重的影响："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "排斥用户"
        }), "：没有进行无障碍测试，可能导致残障人士无法使用软件，从而有效地将他们排除在访问产品或服务的范围之外。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "法律责任"
        }), "：未遵守《美国残疾人法案》（ADA）或第 508 条等法律标准可能引发诉讼和财务处罚。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "品牌受损"
        }), "：不可访问性可能损害公司的声誉，表明公司对所有用户的考虑不足。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "市场覆盖减少"
        }), "：忽视无障碍测试限制了潜在用户群，因为残障人士代表了一个重要的市场部分。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用户体验差"
        }), "：无障碍问题可能导致用户体验令人沮丧，不仅对残障用户如此，对于那些暂时或特定限制的用户也是如此。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "成本增加"
        }), "：在开发后期或发布后识别和修复无障碍问题通常比在常规测试周期内解决它们更为昂贵。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "总之，忽视无障碍测试可能会在道德、法律、财务和声誉方面产生后果，同时也损害软件的整体质量和可用性。"
    }), "\n", createVNode(_components.h3, {
      id: "标准和指引",
      children: "标准和指引"
    }), "\n", createVNode(_components.h4, {
      id: "无障碍测试的关键标准和指南是什么",
      children: "无障碍测试的关键标准和指南是什么？"
    }), "\n", createVNode(_components.p, {
      children: "无障碍测试的关键标准和指南包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Web Content Accessibility Guidelines (WCAG)"
        }), "：这是网络无障碍的主要国际标准，详细说明了如何使网络内容对残障人士更加无障碍。请遵循最新版本，目前是 WCAG 2.1，并力争至少达到 AA 级的合规标准。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Accessible Rich Internet Applications (ARIA)"
        }), "：ARIA 定义了一种使网络内容和网络应用对残障人士更加无障碍的方式。使用 ARIA 角色和属性来增强动态内容和复杂用户界面组件的可访问性。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Section 508"
        }), "：这是美国的联邦法律，要求联邦政府开发、采购、维护或使用的所有电子和信息技术都应对残障人士具备可访问性。如果软件将被联邦机构或承包商使用，请确保符合这些标准。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "EN 301 549"
        }), "：这是欧洲数字可访问性的标准，规定了信息通信技术产品和服务的要求，以确保它们对残障人士更加可访问。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ISO/IEC 40500"
        }), "：这是与 WCAG 2.0 相同的国际标准，提供一个稳定的、可引用的技术标准。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "在进行无障碍测试时，请遵循以下准则："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "尽量自动化"
        }), "：使用自动化工具来捕捉易于检测的问题，但请记住它们无法捕捉所有问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
            children: "手工测试"
          })
        }), "：结合", createVNode(_components.a, {
          href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/automated-testing.md",
          children: "自动化测试"
        }), "进行手动检查，特别是对于主观标准，如导航和理解的便利性。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用户测试"
        }), "：让真实的残障用户参与测试，以获取有关可访问性的真实反馈。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "持续合规性"
        }), "：将无障碍测试整合到您的持续集成/持续部署（CI/CD）管道中，以确保持续合规。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "保持更新"
        }), "：随时关注无障碍标准和指南的更新，因为它们会随时间而演变。"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "什么是-wcag为什么它很重要",
      children: "什么是 WCAG？为什么它很重要？"
    }), "\n", createVNode(_components.p, {
      children: ["WCAG，或", createVNode(_components.strong, {
        children: "Web Content Accessibility Guidelines"
      }), "（网络内容可访问性指南），是一系列旨在使网络内容对残障人士更加无障碍的建议。这一标准是通过与世界各地的个人和组织合作，在 W3C 的流程中制定的，其目标是提供一个全球共享的网络内容可访问性标准，以满足全球个人、组织和政府的需求。"]
    }), "\n", createVNode(_components.p, {
      children: ["WCAG 的重要性在于它作为", createVNode(_components.strong, {
        children: "全球可访问性的基准"
      }), "，确保网站、应用程序和数字工具对所有人都可用，包括那些具有听觉、认知、神经、肢体、言语和视觉障碍的人。遵循 WCAG 有助于消除阻碍残障人士与网站进行交互或访问的障碍。当网站经过正确的设计、开发和编辑时，所有用户都能平等地访问信息和功能。"]
    }), "\n", createVNode(_components.p, {
      children: ["遵循 WCAG 的指南不仅是一种", createVNode(_components.strong, {
        children: "道德责任"
      }), "和", createVNode(_components.strong, {
        children: "包容性"
      }), "，在许多司法辖区中也是法律要求。不遵守可能导致法律后果，并损害组织的声誉。此外，遵守 WCAG 可以改善整体用户体验，潜在地扩大受众范围，因为无障碍站点往往更符合 SEO 标准，并对所有用户，而不仅仅是残障用户，具有更好的可用性。"]
    }), "\n", createVNode(_components.h4, {
      id: "wcag-合规性有哪些不同级别",
      children: "WCAG 合规性有哪些不同级别？"
    }), "\n", createVNode(_components.p, {
      children: "WCAG 合规性被划分为三个符合级别："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "A 级"
        }), "：最基本的网络可访问性功能。为了不排除残障人士群体，网站必须满足此级别。这包括提供非文本内容的文本替代以及确保可以使用键盘进行导航等功能。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "AA 级"
        }), "：解决残障用户面临的最大和最常见的障碍。此级别引入了一些标准，例如为音频内容提供字幕，并确保文本可读且可理解。在许多组织和政府中，满足此级别通常是法律要求。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "AAA 级"
        }), "：WCAG 合规性的最高和最严格级别。此级别包括更广泛的标准，以提高不同类型残障人士的可访问性。它涵盖了所有 A 级和 AA 级的要求，并增加了更多内容，例如为音频内容提供手语翻译，确保实时音频内容的背景噪音水平较低。然而，并非总是可能满足所有 AAA 级成功标准，因此这不是完全合规的严格要求。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "每个级别都是在前一个级别的基础上构建的，AAA 级包含 AA 和 A 的所有标准。在追求合规性时，重要的是要注意，AA 级通常是大多数网站的目标标准，因为它在提高可访问性和实际可实现性之间取得了平衡。"
    }), "\n", createVNode(_components.h4, {
      id: "什么是第-508-条以及它与无障碍性测试有何关系",
      children: "什么是第 508 条以及它与无障碍性测试有何关系？"
    }), "\n", createVNode(_components.p, {
      children: ["Section 508 是 1973 年康复法案的一部分，要求联邦机构使其电子和信息技术（EIT）对残障人士可访问。在软件", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md",
        children: "测试自动化"
      }), "的情境中，Section 508 合规性意味着确保应用程序和网站可供具有各种残障的个体使用，包括视觉、听觉、身体、言语、认知、语言、学习和神经系统残障。"]
    }), "\n", createVNode(_components.p, {
      children: "为了遵守 Section 508，自动化测试应包括以下检查："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "键盘导航性"
        }), "：确保所有功能都可以通过键盘命令操作，而无需鼠标。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "屏幕阅读器兼容性"
        }), "：验证内容是否以屏幕阅读器能够正确解释和朗读的方式结构化。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "颜色对比度"
        }), "：测试文本与背景之间是否有足够的对比，以帮助视觉障碍用户。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "图像的替代文本"
        }), "：检查所有图像是否为不能看到它们的用户提供了描述性的替代文本。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "字幕和音频描述"
        }), "：确保多媒体内容对于听力或视觉障碍的用户具有字幕和描述。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["自动化工具可以帮助识别一些 Section 508 合规性问题，但", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
        children: "手工测试"
      }), "也是必要的，以确保完全的可访问性。", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md",
        children: "测试自动化"
      }), "工程师应将自动和手动的可访问性检查集成到其测试策略中，以涵盖 Section 508 中概述的广泛要求。这种集成有助于创建一个包容性的用户体验，并减轻与不合规相关的法律和声誉风险。"]
    }), "\n", createVNode(_components.h4, {
      id: "aria-角色是什么以及它们如何在无障碍性测试中使用",
      children: "ARIA 角色是什么以及它们如何在无障碍性测试中使用？"
    }), "\n", createVNode(_components.p, {
      children: "ARIA 角色是可访问丰富互联网应用规范的一部分，该规范旨在定义使网络内容和网络应用对残障人士更具可访问性的方法。ARIA 角色提供了关于功能、结构和行为的语义信息，使辅助技术能够向用户传达适当的信息。"
    }), "\n", createVNode(_components.p, {
      children: ["在", createVNode(_components.strong, {
        children: "无障碍测试"
      }), "中，ARIA 角色用于："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["通过定义", createVNode(_components.code, {
          children: "button"
        }), "、", createVNode(_components.code, {
          children: "dialog"
        }), "、", createVNode(_components.code, {
          children: "menu"
        }), "和", createVNode(_components.code, {
          children: "progressbar"
        }), "等角色，向辅助技术（如屏幕阅读器）", createVNode(_components.strong, {
          children: "识别 UI 元素"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["通过使用", createVNode(_components.code, {
          children: "aria-expanded"
        }), "（用于可折叠内容）或", createVNode(_components.code, {
          children: "aria-checked"
        }), "（用于复选框）等角色，", createVNode(_components.strong, {
          children: "传达 UI 元素的状态"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["利用", createVNode(_components.code, {
          children: "navigation"
        }), "、", createVNode(_components.code, {
          children: "main"
        }), "、", createVNode(_components.code, {
          children: "complementary"
        }), "和", createVNode(_components.code, {
          children: "contentinfo"
        }), "等角色，", createVNode(_components.strong, {
          children: "定义 Web 内容的结构"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "为测试 ARIA 角色："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["使用自动化工具或手动检查，", createVNode(_components.strong, {
          children: "验证角色和属性的正确实现"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "确保角色与元素的功能匹配"
        }), "（例如，对于可点击元素，使用", createVNode(_components.code, {
          children: "role=\"button\""
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: ["随用户交互", createVNode(_components.strong, {
          children: "检查 ARIA 状态和属性的动态变化"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: ["使用屏幕阅读器", createVNode(_components.strong, {
          children: "确认角色和状态是否被正确宣读"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "ARIA 角色示例："
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
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " role"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"button\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " aria-pressed"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"false\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Toggle</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["在此示例中，", createVNode(_components.code, {
        children: "role=\"button\""
      }), "传达了元素的功能，而", createVNode(_components.code, {
        children: "aria-pressed"
      }), "指示了切换状态。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: [createVNode(_components.a, {
          href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md",
          children: "测试自动化"
        }), "工程师"]
      }), "应将 ARIA 角色验证整合到其测试套件中，以确保 Web 应用具有可访问性并为辅助技术提供必要的上下文。"]
    }), "\n", createVNode(_components.h3, {
      id: "工具和技术",
      children: "工具和技术"
    }), "\n", createVNode(_components.h4, {
      id: "无障碍性测试常用哪些工具",
      children: "无障碍性测试常用哪些工具？"
    }), "\n", createVNode(_components.p, {
      children: "常用的无障碍测试工具有："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Axe"
        }), "：这是一个开源库，可集成到测试框架中，可以作为浏览器扩展和 CLI 工具使用。"]
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
            children: "    npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " axe-core"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --save-dev"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "WAVE（Web Accessibility Evaluation Tool）"
          }), "：WAVE 是一套评估工具，帮助作者使他们的网络内容更具可访问性，包括浏览器扩展和在线服务。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: createVNode(_components.a, {
              href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/L/lighthouse.md",
              children: "Lighthouse"
            })
          }), "：Lighthouse 是一个用于提高网页质量的开源自动化工具，它有性能、可访问性、渐进式 Web 应用等审核。"]
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
                children: "lighthouse"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " https://example.com"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --only-categories=accessibility"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "JAWS（Job Access With Speech）"
          }), "：这是 Windows 上的一个屏幕阅读器，允许视力受损的用户通过文本转语音输出或使用盲文显示屏读取屏幕。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "NVDA（NonVisual Desktop Access）"
          }), "：这是 Windows 上的一个免费开源屏幕阅读器。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "VoiceOver"
          }), "：这是内置在 Apple Inc.的 macOS 和 iOS 操作系统中的屏幕阅读器。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "颜色对比分析工具"
          }), "：比如颜色对比分析仪（CCA），它可以帮助您确定文本的可读性以及视觉元素的对比度。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Tenon.io"
          }), "：这是一个以 API 为先的自动化无障碍测试工具，可以集成到开发流程中。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Pa11y"
          }), "：这是一个运行 HTML CodeSniffer 的命令行工具，用于编程化的无障碍报告。"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    pa11y"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " http://example.com"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Accessibility Insights"
        }), "：这是一个提供无障碍测试指导和解决方案的工具，可以作为浏览器扩展和 Windows 应用程序使用。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这些工具有助于自动检测无障碍问题，从而可以解决确保软件产品对具有各种残障的人可用。"
    }), "\n", createVNode(_components.h4, {
      id: "有哪些无障碍测试的人工技术",
      children: "有哪些无障碍测试的人工技术？"
    }), "\n", createVNode(_components.p, {
      children: ["人工进行无障碍测试的技术包括", createVNode(_components.strong, {
        children: "用户模拟"
      }), "、", createVNode(_components.strong, {
        children: "辅助技术使用"
      }), "和", createVNode(_components.strong, {
        children: "检查表"
      }), "的综合应用，以确保软件能够被具有不同残障的人使用。以下是一些手动技巧："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "键盘导航"
        }), "：使用键盘浏览应用程序，确保所有交互元素都可以在没有鼠标的情况下轻松访问和使用。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "屏幕阅读器测试"
        }), "：使用屏幕阅读器如 NVDA 或 JAWS，模拟视觉受损用户的体验。检查元素的正确阅读、顺序和上下文的呈现。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "颜色对比度分析"
        }), "：使用工具如颜色对比度分析器手动检查颜色组合，确保对于有色觉缺陷的用户有足够的对比度。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["手动代码", createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/inspection.md",
            children: "检查"
          })]
        }), "：审查 HTML/CSS 代码，检查语义结构、标题、标签和辅助技术所依赖的角色的正确使用。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "缩放和放大"
        }), "：在不同的缩放和放大级别下测试应用程序，确保内容仍然可读且功能正常。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "内容可读性"
        }), "：评估内容的可读性，确保语言清晰简单，符合认知障碍用户的需求。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "焦点管理"
        }), "：确保焦点顺序合理可见，这对通过键盘或辅助技术导航的用户至关重要。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "残障参与者的用户测试"
        }), "：让残障用户参与测试过程，直接获取应用程序可访问性的反馈。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这些手动技巧与", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/automated-testing.md",
        children: "自动化测试"
      }), "相辅相成，弥补了需要人类判断和视角的方面，这些方面通常被自动化工具所遗漏。"]
    }), "\n", createVNode(_components.h4, {
      id: "如何在无障碍测试中使用自动化工具",
      children: "如何在无障碍测试中使用自动化工具？"
    }), "\n", createVNode(_components.p, {
      children: ["自动化工具通过迅速扫描网页和应用程序，寻找常见的可访问性问题，从而简化了无障碍测试。它们可以集成到 CI/CD 流程中，以确保与可访问性标准的", createVNode(_components.strong, {
        children: "持续合规"
      }), "。像", createVNode(_components.strong, {
        children: "axe-core"
      }), "、", createVNode(_components.strong, {
        children: "WAVE"
      }), "或**", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/L/lighthouse.md",
        children: "Lighthouse"
      }), "**这样的工具提供了", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md",
        children: "APIs"
      }), "和插件，可与测试框架（如", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/selenium.md",
        children: "Selenium"
      }), "、", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/J/jest.md",
        children: "Jest"
      }), "或", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/C/cypress.md",
        children: "Cypress"
      }), "）集成。"]
    }), "\n", createVNode(_components.p, {
      children: "使用自动化工具可以："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "检测代码级问题"
        }), "：识别问题，如缺少 alt 文本、错误使用 ARIA 角色和颜色对比度不足。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "运行回归测试"
        }), "：确保新代码不引入可访问性退化。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "生成报告"
        }), "：为技术和非技术干系人创建详细报告。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "优先处理修复"
        }), "：突出显示影响最大的关键问题。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "集成无障碍测试工具与测试框架的示例："
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
            children: " axe"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'axe-core'"
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "browser"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "by"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'protractor'"
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
            children: "'Accessibility checks'"
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
            children: "'should analyze the page'"
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
            children: "    await"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " browser."
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
            children: "'https://example.com'"
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
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " results"
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
            children: " axe."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "run"
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
            children: "    expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(results.violations."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBe"
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
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Accessibility violations found'"
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
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["自动化工具不能取代", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
        children: "手工测试"
      }), "或与残障人士进行用户测试，但它们是识别和缓解可访问性障碍的", createVNode(_components.strong, {
        children: "有价值的第一步"
      }), "。它们有助于保持可访问性的基线水平，并减少需要手动审查的问题数量。"]
    }), "\n", createVNode(_components.h4, {
      id: "自动无障碍测试工具有哪些局限性",
      children: "自动无障碍测试工具有哪些局限性？"
    }), "\n", createVNode(_components.p, {
      children: "自动化无障碍测试工具存在一些限制："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/F/false-positive.md",
            children: "误报"
          }), "或漏报"]
        }), "：工具可能报告并非真正存在的问题（误报），或者漏掉真实的问题（漏报）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "上下文理解"
        }), "：它们缺乏理解上下文和含义的能力，这对某些无障碍检查来说可能至关重要。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "用户体验"
        }), "：自动化工具无法全面评估用户体验，包括残疾用户的导航和理解是否方便。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "动态内容"
        }), "：它们常常难以处理根据用户操作而变化的动态内容或复杂的 JavaScript 交互。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "视觉设计和可读性"
        }), "：工具可能无法准确评估视觉设计元素，尤其是在图形内容中，比如对比度和可读性。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "键盘导航"
        }), "：尽管一些工具可以模拟键盘导航，但它们可能无法有效地识别仅使用键盘的用户所遇到的所有问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "屏幕阅读器兼容性"
        }), "：真实屏幕阅读器的测试是必要的，因为工具无法复制屏幕阅读器用户的体验。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "辅助技术差异"
        }), "：存在各种辅助技术，自动化工具无法测试与所有这些技术的兼容性。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "全面测试"
        }), "：没有单一工具能够涵盖所有无障碍准则；通常需要多个工具和手动测试以进行全面的测试。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["为了缓解这些限制，应将", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/automated-testing.md",
        children: "自动化测试"
      }), "与**", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
        children: "手工测试"
      }), createVNode(_components.strong, {
        children: "和与残疾人士的"
      }), "用户测试**相结合。这种方法提供了更准确、全面的可访问性评估。"]
    }), "\n", createVNode(_components.h4, {
      id: "如何测试不同类型的残障",
      children: "如何测试不同类型的残障？"
    }), "\n", createVNode(_components.p, {
      children: "测试不同类型的残障涉及模拟具有各种障碍的个体的用户体验。这包括视觉、听觉、运动和认知残障。以下是一些策略："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "视觉障碍"
          }), "：使用屏幕阅读器，如 NVDA 或 JAWS，浏览您的应用程序。确保所有内容都是可读的，可以在没有视觉提示的情况下进行导航。测试不同的对比度设置和字体大小，以适应视力较差的用户。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "听觉障碍"
          }), "：验证所有音频内容是否具有文本替代，例如字幕或文字转录。测试应用程序在没有声音的情况下是否可用，并且没有基本信息仅通过音频传达。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "运动障碍"
          }), "：通过仅使用 tab 键、enter 键、空格键和箭头键测试键盘导航。确保所有交互元素都可以通过键盘到达和操作。考虑不能使用鼠标或运动控制有限的用户的需求。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "认知障碍"
          }), "：简化和结构化内容，以支持认知障碍的用户。测试一致的导航和可预测的交互。使用清晰的语言，并在适用的情况下提供延长时间限制的能力。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["在测试环境中结合", createVNode(_components.strong, {
        children: "辅助技术"
      }), "和", createVNode(_components.strong, {
        children: "用户偏好"
      }), "，模拟不同的残障场景。这包括语音控制软件、替代输入设备和修改显示设置的浏览器扩展。"]
    }), "\n", createVNode(_components.p, {
      children: ["请记住，尽管自动化工具可以捕捉许多可访问性问题，但它们无法检测到所有残障人士的用户体验的微妙之处。与真实用户或无障碍专家进行的**", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
        children: "手工测试"
      }), "**对于全面评估至关重要。"]
    }), "\n", createVNode(_components.h3, {
      id: "实施与最佳实践",
      children: "实施与最佳实践"
    }), "\n", createVNode(_components.h4, {
      id: "实施无障碍测试有哪些最佳做法",
      children: "实施无障碍测试有哪些最佳做法"
    }), "\n", createVNode(_components.p, {
      children: "无障碍测试通过确保软件产品适用于各种能力和残疾的人使用，使用户受益匪浅。这种包容性设计使更广泛的受众能够有效地与应用程序、网站或工具进行交互，无论他们的身体或认知挑战如何。通过适应辅助技术，如屏幕阅读器、盲文终端和语音识别软件，无障碍测试有助于创造一个更加平等的用户体验。"
    }), "\n", createVNode(_components.p, {
      children: ["对于残疾用户而言，无障碍测试可能意味着能否在网上执行基本任务与面临重大障碍之间的区别。它实现了", createVNode(_components.strong, {
        children: "独立导航"
      }), "和互动，对于个人自主性和尊严至关重要。此外，它可以", createVNode(_components.strong, {
        children: "减少沮丧"
      }), "并", createVNode(_components.strong, {
        children: "提高效率"
      }), "，因为用户可以在没有不必要障碍的情况下访问和使用功能和信息。"]
    }), "\n", createVNode(_components.p, {
      children: ["除了直接的用户益处外，无障碍测试还可能导致所有用户的", createVNode(_components.strong, {
        children: "改进的可用性"
      }), "。许多无障碍功能，如清晰的导航和易读的字体，提高了整体用户体验。通过专注于无障碍性，开发人员可能会在不经意间改进更广泛用户群体的设计和功能，从而创建更直观和用户友好的产品。"]
    }), "\n", createVNode(_components.p, {
      children: ["最后，无障碍测试还有助于", createVNode(_components.strong, {
        children: "避免法律后果"
      }), "，这可能是由于不符合无障碍法律和法规而引起的，确保软件不仅是包容的，而且还符合法律要求。"]
    }), "\n", createVNode(_components.h4, {
      id: "如何将无障碍测试纳入软件开发生命周期",
      children: "如何将无障碍测试纳入软件开发生命周期？"
    }), "\n", createVNode(_components.p, {
      children: "将无障碍测试纳入软件开发生命周期 (SDLC) 需要在每个阶段进行集成，以确保从一开始就考虑到了无障碍性，并在整个过程中贯穿无障碍考虑。具体操作如下："
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "在需求收集阶段"
      }), "，基于 WCAG 和 Section 508 等标准定义无障碍性准则。明确合规级别，并包括着眼于残障人士需求的用户故事。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "在设计阶段"
      }), "，使用线框图和原型来评估无障碍性考虑因素，如颜色对比和导航顺序。可以提前使用颜色对比分析工具，以避免后续的设计修改。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "在开发阶段"
      }), "，实施语义化的 HTML 和 ARIA 角色以增强无障碍性。开发人员应使用自动化工具来运行初步检查，并在编写代码时解决问题。例如："]
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 使用 Axe-core 进行自动化测试的示例"
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
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "AxePuppeteer"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'axe-puppeteer'"
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
            children: "async"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " checkAccessibility"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "page"
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
            children: " results"
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
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AxePuppeteer"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(page)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "analyze"
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
            children: "  console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(results);"
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
      children: [createVNode(_components.strong, {
        children: "在测试阶段"
      }), "，将无障碍性纳入", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md",
        children: "测试用例"
      }), "中，并执行自动化和手动测试。自动化测试可以捕获各种问题，但", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
        children: "手工测试"
      }), "对于从人的角度评估可用性至关重要。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "在部署阶段"
      }), "，执行最终的无障碍性审查和验证，以确保没有引入新问题。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "在部署后"
      }), "，建立与用户的反馈循环，以捕获可能被忽略的无障碍问题，并对用户需求做出响应。定期更新", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-suite.md",
        children: "测试套件"
      }), "和工具，以"]
    }), "\n", createVNode(_components.p, {
      children: "适应不断发展的标准和技术。"
    }), "\n", createVNode(_components.p, {
      children: "通过将无障碍性融入 SDLC，确保它是一个持续考虑的因素，降低昂贵的重做风险，并确保产品更具包容性。"
    }), "\n", createVNode(_components.h4, {
      id: "如何确保持续符合无障碍要求",
      children: "如何确保持续符合无障碍要求？"
    }), "\n", createVNode(_components.p, {
      children: ["为了在软件", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md",
        children: "测试自动化"
      }), "中确保持续的无障碍性合规性："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "将无障碍性检查融入"
        }), "到您的常规测试套件中。使用 Axe 或 Wave 等工具自动进行这些检查。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "实施持续集成"
        }), "（CI）流程，其中包括无障碍性测试，确保它们在每次构建时都得到运行。"]
      }), "\n"]
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "jobs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  accessibility_test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    runs"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ubuntu"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "latest "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    steps"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      -"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": Run accessibility checks "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        run"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": npm run "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":accessibility"
          })]
        })]
      })
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "采用左移方法"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "，在开发周期的早期将无障碍性测试纳入其中，以更早地发现问题。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "定期更新测试用例"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "，以涵盖新的无障碍性标准和指南的演变。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "教育您的团队"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "，鼓励开发人员从一开始就编写具有无障碍性的代码。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "定期进行手动审核"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "，以捕获自动化工具可能遗漏的问题。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "使用实际用户指标"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "（"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "RUM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "）监控实际用户如何与您的应用程序交互，有助于识别无障碍性障碍。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "与残障用户互动"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "，获取反馈并将他们的见解纳入您的测试策略。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "保持了解"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "法律要求和行业最佳实践，以确保符合最新的标准。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "通过将这些实践嵌入到您的开发和测试工作流中，您可以随时间保持较高水平的无障碍性合规性。"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "需要注意哪些常见的无障碍问题",
      children: "需要注意哪些常见的无障碍问题？"
    }), "\n", createVNode(_components.p, {
      children: "在测试中要关注的一些常见无障碍性问题包括："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "文本替代"
        }), "：图像缺少", createVNode(_components.code, {
          children: "alt"
        }), "文本，这对于使用屏幕阅读器的用户至关重要。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "键盘导航"
        }), "：无法仅使用键盘导航网站，这会影响运动功能障碍的用户。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "颜色对比"
        }), "：文本与背景之间的对比不足，使视觉障碍用户难以阅读内容。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "焦点指示器"
        }), "：缺少可见的焦点指示器，这对于依赖键盘导航的用户至关重要。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "表单标签"
        }), "：未标记的表单，对于屏幕阅读器用户难以解释。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ARIA 误用"
        }), "：导致屏幕阅读器体验差的错误或缺失的 ARIA 属性。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "基于时间的媒体"
        }), "：音频和视频内容缺乏字幕或文本转录。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "可调整大小的文本"
        }), "：文本无法调整大小或缩放而不损失内容或功能。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "语言标识"
        }), "：缺少语言属性，未告知屏幕阅读器有关文本语言的信息。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "错误识别"
        }), "：不足的错误消息，未能引导用户纠正错误。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "一致的导航"
        }), "：导航顺序或命名不一致，令依赖模式的用户感到困惑。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "动态内容更新"
        }), "：动态内容更新时屏幕阅读器缺少警报。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这些问题可以通过使用自动化工具和", createVNode(_components.a, {
        href: "https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/manual-testing.md",
        children: "手动测试"
      }), "的组合来识别，以确保全面评估无障碍性。"]
    }), "\n", createVNode(_components.h4, {
      id: "如何让网站更容易访问",
      children: "如何让网站更容易访问？"
    }), "\n", createVNode(_components.p, {
      children: "为了提升网站的可访问性："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用语义化的 HTML"
        }), " 结构化内容，确保正确使用标题 (", createVNode(_components.code, {
          children: "<h1>"
        }), " 到 ", createVNode(_components.code, {
          children: "<h6>"
        }), ")，列表 (", createVNode(_components.code, {
          children: "<ul>"
        }), ", ", createVNode(_components.code, {
          children: "<ol>"
        }), ") 和按钮 (", createVNode(_components.code, {
          children: "<button>"
        }), ") 等元素。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "为非文本内容提供文本替代"
        }), " (", createVNode(_components.code, {
          children: "alt"
        }), " 属性)，如图像。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "确保文本和背景颜色之间有足够的对比度"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "通过使用可聚焦的元素和管理焦点顺序，使所有功能可以使用键盘访问"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "为交互元素创建标签"
        }), "，使用 ", createVNode(_components.code, {
          children: "<label>"
        }), " 元素或 ", createVNode(_components.code, {
          children: "aria-label"
        }), " 和 ", createVNode(_components.code, {
          children: "aria-labelledby"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "避免或提供对引起癫痫的内容的替代方案"
        }), "，例如闪烁的灯光。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "提供清晰一致的导航"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "包含跳转导航链接"
        }), "，以允许用户跳过重复的内容。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "确保表单是可访问的"
        }), "，包括清晰的标签和错误消息。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用 ARIA landmarks"
        }), " 定义页面的区域 (", createVNode(_components.code, {
          children: "<nav>"
        }), ", ", createVNode(_components.code, {
          children: "<main>"
        }), ", ", createVNode(_components.code, {
          children: "<aside>"
        }), " 等)。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用屏幕阅读器和其他辅助技术进行测试"
        }), "，以识别问题。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "提供控制或停止动画、视频和音频的选项"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "设计响应式布局"
        }), "，适用于各种设备和屏幕大小。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "使用可访问的颜色调色板"
        }), "，考虑色盲。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "为音频和视频内容提供字幕和文本"
        }), "。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "确保将动态内容更新通知给辅助技术"
        }), "，使用 ARIA live regions。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "与残障用户一起进行测试"
        }), "，以获取有关您网站可访问性的反馈。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "请记住，可访问性是一项持续的承诺，应该融入常规的开发和测试周期中。"
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

const url = "src/blog/zh-cn/QA-Glossary-Wiki/QA-Glossary-Wiki-accessibility-testing.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/QA-Glossary-Wiki/QA-Glossary-Wiki-accessibility-testing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/QA-Glossary-Wiki/QA-Glossary-Wiki-accessibility-testing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
