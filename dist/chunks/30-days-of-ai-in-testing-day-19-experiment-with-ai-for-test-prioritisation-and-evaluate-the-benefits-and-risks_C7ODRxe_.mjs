import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "30 天 AI 测试挑战活动：第十九天：探索 AI 在测试优先级排序中的作用，并评价其利弊",
  "description": "这篇博文是关于 30 天 AI 测试挑战活动的第十九天，聚焦于探索 AI 在测试优先级排序中的作用，并评价其利弊。文章可能包括作者对 AI 在测试优先级排序中的实际应用案例，以及使用 AI 带来的好处和挑战。通过分享对 AI 在测试优先级排序中的应用经验和评价，读者将了解到作者对于 AI 在测试流程中的实际效果和影响的见解。这个系列活动有望为测试专业人士提供一个了解和探索 AI 在测试优先级排序中的作用的机会，并促进更多关于 AI 在测试中的应用探讨。",
  "date": "2024-03-21T14:22:44.000Z",
  "author": "nao.deng",
  "tags": ["AI in Testing", "30 Days of AI in Testing"],
  "categories": ["软件测试活动"],
  "series": ["30 天 AI 测试挑战活动"],
  "cover": "./30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "第-19-天探索-ai-在测试优先级排序中的作用并评价其利弊",
    "text": "第 19 天：探索 AI 在测试优先级排序中的作用，并评价其利弊"
  }, {
    "depth": 3,
    "slug": "任务步骤",
    "text": "任务步骤"
  }, {
    "depth": 3,
    "slug": "为什么参加",
    "text": "为什么参加"
  }, {
    "depth": 3,
    "slug": "任务链接",
    "text": "任务链接"
  }, {
    "depth": 2,
    "slug": "我的第-19-天任务",
    "text": "我的第 19 天任务"
  }, {
    "depth": 3,
    "slug": "关于阅读一篇讨论在测试优先级排序和选择中使用-ai-的文章",
    "text": "关于阅读一篇讨论在测试优先级排序和选择中使用 AI 的文章"
  }, {
    "depth": 3,
    "slug": "关于使用-ai-工具总结当前在测试优先级排序和选择中使用-ai-的方法和好处",
    "text": "关于使用 AI 工具总结当前在测试优先级排序和选择中使用 AI 的方法和好处"
  }, {
    "depth": 3,
    "slug": "关于思考你或你的团队当前如何执行这项任务",
    "text": "关于思考你或你的团队当前如何执行这项任务"
  }, {
    "depth": 4,
    "slug": "我当前项目的背景和已有资料",
    "text": "我当前项目的背景和已有资料"
  }, {
    "depth": 4,
    "slug": "是否需要进行测试优先级排序",
    "text": "是否需要进行测试优先级排序"
  }, {
    "depth": 4,
    "slug": "在选择优先排序测试时依赖哪些因素",
    "text": "在选择/优先排序测试时依赖哪些因素"
  }, {
    "depth": 4,
    "slug": "缺乏数据时如何做出决策的",
    "text": "缺乏数据时，如何做出决策的"
  }, {
    "depth": 3,
    "slug": "关于测试优先级选择给-ai-模型是否会带来价值",
    "text": "关于测试优先级选择给 AI 模型是否会带来价值"
  }, {
    "depth": 3,
    "slug": "关于测试优先级选择给-ai-模型是否会带来风险",
    "text": "关于测试优先级选择给 AI 模型是否会带来风险"
  }, {
    "depth": 2,
    "slug": "关于活动",
    "text": "关于活动"
  }, {
    "depth": 2,
    "slug": "推荐阅读",
    "text": "推荐阅读"
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
      id: "第-19-天探索-ai-在测试优先级排序中的作用并评价其利弊",
      children: "第 19 天：探索 AI 在测试优先级排序中的作用，并评价其利弊"
    }), "\n", createVNode(_components.p, {
      children: "已经到第 19 天了！希望大家都能意识到我们已经探讨了很多内容——干得漂亮！"
    }), "\n", createVNode(_components.p, {
      children: "今天我们将关注 AI 是否能帮助我们在测试选择和优先级排序上做出更好的决策，并评估这种方法带来的潜在利弊。"
    }), "\n", createVNode(_components.p, {
      children: ["利用数据来决定测试的内容和范围已经有很长一段时间了（大多数测试人员都会熟悉", createVNode(_components.strong, {
        children: "基于风险的测试"
      }), "的概念），人们自然会想到通过自动化这些决策来加快过程。技术的发展让这个过程可以委托给一个 AI 模型，让它根据你的上下文中的数据学习以往的测试情况和测试的可观测影响。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "关键的问题是……我们应该这么做吗？"
      })
    }), "\n", createVNode(_components.h3, {
      id: "任务步骤",
      children: "任务步骤"
    }), "\n", createVNode(_components.p, {
      children: "今天你有两个选择（如果你愿意，可以两者都尝试）："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "选项 1"
          }), " - 如果你的公司已经在使用 AI 工具来优先排序和选择测试，那么请撰写一个简短的案例研究，并通过回复这篇帖子与社区分享。你可以考虑分享以下内容："]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "你正在使用的工具是什么？"
          }), "\n", createVNode(_components.li, {
            children: "这个工具是如何选择/优先排序测试的？这个过程对你来说是否易于理解？"
          }), "\n", createVNode(_components.li, {
            children: "你的团队是如何使用这个工具的？比如，是仅用于自动化检查，还是仅用于回归测试？"
          }), "\n", createVNode(_components.li, {
            children: "随着时间的推移，这个工具的性能是否有所提高？"
          }), "\n", createVNode(_components.li, {
            children: "你的团队使用这个工具有哪些关键益处？"
          }), "\n", createVNode(_components.li, {
            children: "有没有什么显著的例子显示这个工具的判断出现过错误？"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "选项 2"
          }), " - 考虑并评估使用 AI 来选择和优先排序你的测试的想法。"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["寻找并阅读一篇讨论在测试优先级排序和选择中使用 AI 的短文。\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "提示：如果你时间不够，为什么不请你最喜欢的聊天机器人或助手来为你总结当前在测试优先级排序和选择中使用 AI 的方法和好处？"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["思考你或你的团队当前如何执行这项任务。一些思考的提示包括：\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "你在多大程度上需要在你的工作中选择/优先排序测试？"
              }), "\n", createVNode(_components.li, {
                children: "你在选择/优先排序测试时依赖哪些因素？这些因素是基于定性的还是定量的？"
              }), "\n", createVNode(_components.li, {
                children: "缺乏数据时，你是如何做出决策的？"
              }), "\n", createVNode(_components.li, {
                children: "如果决策错误，会有什么后果？"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: "在你的工作环境中，将这项任务委托给 AI 是否会带来价值？如果是，你的团队将如何受益？"
          }), "\n", createVNode(_components.li, {
            children: ["将测试优先级排序和选择任务委托给 AI 模型会带来哪些风险？一些思考的提示包括：\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "测试优先级排序和选择失败可能会怎样，其影响会是什么？"
              }), "\n", createVNode(_components.li, {
                children: "你需要理解并解释 AI 做出的决定吗？"
              }), "\n", createVNode(_components.li, {
                children: "“测试/质量保证怎么没发现这个问题？”是一个常见但不公平的抱怨——如果是 AI 做出的测试决策，这会如何改变？"
              }), "\n", createVNode(_components.li, {
                children: "如何缓解这些风险？"
              }), "\n", createVNode(_components.li, {
                children: "如果我们使用人参与循环来降低风险，这会对使用人工智能的好处产生什么影响？"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: "你如何公正地评估人工智能工具在这项任务中的表现？"
          }), "\n", createVNode(_components.li, {
            children: ["通过回复这篇文章来分享你的主要见解。考虑分享：\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "你的背景的简要概述（例如你从事的行业或你测试的应用程序类型）。"
              }), "\n", createVNode(_components.li, {
                children: "分享你对采用人工智能进行测试优先级排序和选择的好处和风险的重要见解。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "为什么参加",
      children: "为什么参加"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "了解人工智能可以在哪些方面提供帮助"
        }), "：人们对使用人工智能来改进和加速测试感到兴奋/炒作。对于管理大量测试、复杂系统或耗时测试的团队来说，在选择测试和确定测试优先级方面更多地由数据驱动可能会带来真正的好处。通过参与今天的任务，你可以批判性地评估它是否适合你的环境，了解将责任委托给人工智能的具体风险，并做好更好的准备，就基于人工智能的测试选择和优先级做出深思熟虑的决定。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "任务链接",
      children: "任务链接"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://club.ministryoftesting.com/t/day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/75216",
        children: "https://club.ministryoftesting.com/t/day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/75216"
      })
    }), "\n", createVNode(_components.h2, {
      id: "我的第-19-天任务",
      children: "我的第 19 天任务"
    }), "\n", createVNode(_components.p, {
      children: ["基于我当前的工作状态，第 19 天的任务我选择了", createVNode(_components.strong, {
        children: "选项 2"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "关于阅读一篇讨论在测试优先级排序和选择中使用-ai-的文章",
      children: ["关于", createVNode(_components.strong, {
        children: "阅读一篇讨论在测试优先级排序和选择中使用 AI 的文章"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["我阅读的是", createVNode(_components.a, {
        href: "https://www.linkedin.com/pulse/ai-driven-test-prioritization-amit-khullaar",
        children: "AI 驱动的测试优先级"
      })]
    }), "\n", createVNode(_components.p, {
      children: "文章的主要内容如下：\n人工智能驱动的测试优先级排序提高了软件测试的效率并降低了成本"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "📄 了解测试优先级：确定测试用例的执行顺序，以实现最大覆盖率和缺陷检测。"
      }), "\n", createVNode(_components.li, {
        children: "⭐️ 人工智能驱动测试优先级的意义：提高效率、加快反馈、优化资源利用、提高测试覆盖率并降低成本。"
      }), "\n", createVNode(_components.li, {
        children: "🔨 实施人工智能驱动的测试优先级排序：数据收集、特征选择、机器学习模型、预测以及与测试工具的集成。"
      }), "\n", createVNode(_components.li, {
        children: "🏢 真实案例和实施：谷歌和微软成功使用人工智能驱动的测试优先级排序。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "人工智能驱动的测试优先级排序通过利用机器学习，根据失败的可能性对测试用例进行排序，提高效率和覆盖率，同时优化资源，从而彻底改变软件测试。这种方法依赖于分析大量数据，包括历史测试结果和代码变更。谷歌和微软等巨头的实施表明了它在缩短测试时间和加速开发方面的价值。通过将人工智能优先级与测试工具相结合，企业可以显著提高软件质量并降低成本，从而凸显人工智能在软件开发中的变革性影响。"
    }), "\n", createVNode(_components.h3, {
      id: "关于使用-ai-工具总结当前在测试优先级排序和选择中使用-ai-的方法和好处",
      children: ["关于", createVNode(_components.strong, {
        children: "使用 AI 工具总结当前在测试优先级排序和选择中使用 AI 的方法和好处"
      })]
    }), "\n", createVNode(_components.p, {
      children: "我选择了 ChatGPT4，它的回答是："
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
            children: "在当前的软件开发和测试过程中，AI（人工智能）在测试优先级排序和选择方面的应用越来越受到重视。通过利用 AI，团队能够更有效地确定哪些测试最应该首先运行，从而提高测试的效率和效果。以下是一些主要的方法和好处："
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "#### 方法"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1. **基于历史数据的学习**：AI 系统可以通过分析历史测试数据（如测试的失败率、影响的功能点等）来学习和识别测试的重要性和优先级。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2. **风险驱动的测试选择**：利用 AI 进行风险分析，确定哪些功能或代码更有可能出现缺陷，并据此优先安排测试。  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3. **代码变更分析**：AI 可以分析代码的变更情况，识别出受影响的测试用例，确保对最相关的测试用例给予优先级排序。  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4. **测试结果预测**：通过 AI 模型预测测试结果，可以优先执行那些更有可能发现新缺陷的测试案例。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5. **动态测试调整**：在测试执行过程中，AI 可以根据实时反馈动态调整测试计划和优先级，确保最有效的资源分配。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "#### 好处"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1. **提高效率**：通过优化测试执行顺序，可以更快地发现和修复缺陷，减少等待时间和资源浪费。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2. **提升测试覆盖率**：AI 可以帮助识别测试覆盖范围的盲点，确保关键功能和风险高的变更得到足够的测试。  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3. **减少手动工作量**：自动化的优先级评估减少了人工参与的需要，让测试人员可以专注于更复杂的任务。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4. **提高测试质量**：通过确保重要的测试用例得到优先执行，可以提高软件产品的整体质量。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5. **适应性强**：AI 模型可以持续学习和适应项目的变化，即使在需求频繁变更的环境中也能保持测试的相关性和有效性。"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "通过这些方法和好处，AI 在改进测试优先级排序和选择方面展现出巨大的潜力，有助于软件开发团队更有效地部署他们的测试资源，同时提高软件的质量和可靠性。"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "关于思考你或你的团队当前如何执行这项任务",
      children: ["关于", createVNode(_components.strong, {
        children: "思考你或你的团队当前如何执行这项任务"
      })]
    }), "\n", createVNode(_components.h4, {
      id: "我当前项目的背景和已有资料",
      children: "我当前项目的背景和已有资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "当前项目交付时间紧张，交付任务压力较大，交付范围存在膨胀的风险"
      }), "\n", createVNode(_components.li, {
        children: "已有项目 SOP 有不同浏览器兼容性，不同分辨率兼容性和设备兼容性的要求"
      }), "\n", createVNode(_components.li, {
        children: "项目为电子商务的在线购物网站，主要是 web 端"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "是否需要进行测试优先级排序",
      children: "是否需要进行测试优先级排序"
    }), "\n", createVNode(_components.p, {
      children: "需要，项目初级就根据项目背景和 SOP 输出了初版测试策略，里面包含测试优先级：业务功能测试优先，然后是兼容性测试，然后是性能测试和网络测试，最后是可用性测试和易用性测试。"
    }), "\n", createVNode(_components.h4, {
      id: "在选择优先排序测试时依赖哪些因素",
      children: "在选择/优先排序测试时依赖哪些因素"
    }), "\n", createVNode(_components.p, {
      children: "大部分是定量的，一部分也是定性的"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "项目团队背景"
      }), "\n", createVNode(_components.li, {
        children: "项目交付压力"
      }), "\n", createVNode(_components.li, {
        children: "项目 SOP"
      }), "\n", createVNode(_components.li, {
        children: "团队人员配置，更多是指开发人员与测试人员占比"
      }), "\n", createVNode(_components.li, {
        children: "与团队协商沟通的结果"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "缺乏数据时如何做出决策的",
      children: "缺乏数据时，如何做出决策的"
    }), "\n", createVNode(_components.p, {
      children: "参考历史项目的有用信息，再与团队进行协商确认，最后做出决策"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "当然这里我要提到，测试策略和测试优先级是一直迭代更新的，不是一成不变的，根据项目情况和获取的更多信息进行调整即可"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "关于测试优先级选择给-ai-模型是否会带来价值",
      children: ["关于", createVNode(_components.strong, {
        children: "测试优先级选择给 AI 模型是否会带来价值"
      })]
    }), "\n", createVNode(_components.p, {
      children: "肯定会有，AI 会根据模型里已知的历史定性数据和定量数据给出更合理和风险更低的结果"
    }), "\n", createVNode(_components.h3, {
      id: "关于测试优先级选择给-ai-模型是否会带来风险",
      children: ["关于", createVNode(_components.strong, {
        children: "测试优先级选择给 AI 模型是否会带来风险"
      })]
    }), "\n", createVNode(_components.p, {
      children: "不可避免会带来风险，毕竟基于我对 AI 模型工具数据隐私安全的担忧，我不会将项目的上下文和已知信息 100% 的传递给 AI，那 AI 缺乏真实信息的情况下输出的结果可能与团队存在较大差异，如果按照 AI 模型给出的结果运行，那可能没办法按时完成项目的交付工作"
    }), "\n", createVNode(_components.h2, {
      id: "关于活动",
      children: "关于活动"
    }), "\n", createVNode(_components.p, {
      children: "30 天 AI 测试挑战活动是 Ministry 测试社区发起的活动，上一次我了解这个社区是关于他们发起的 30 天敏捷测试的活动。"
    }), "\n", createVNode(_components.p, {
      children: ["社区官网：", createVNode(_components.a, {
        href: "https://www.ministryoftesting.com",
        children: "https://www.ministryoftesting.com"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["活动链接：", createVNode(_components.a, {
        href: "https://www.ministryoftesting.com/events/30-days-of-ai-in-testing",
        children: "https://www.ministryoftesting.com/events/30-days-of-ai-in-testing"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "挑战"
      }), "："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-1-introduce-yourself-and-your-interest-in-ai/",
          children: "第一天：介绍你自己以及你对人工智能的兴趣"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/",
          children: "第二天：阅读有关测试中的人工智能的介绍性文章并分享"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-3-list-ways-in-which-ai-is-used-in-testing/",
          children: "第三天：AI 在测试中的多种应用方式"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-4-watch-the-ama-on-artificial-intelligence-in-testing-and-share-your-key-takeaway/",
          children: "第四天：观看有关测试中人工智能的任何问题视频并分享主要收获"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-5-identify-a-case-study-on-ai-in-testing-and-share-your-findings/",
          children: "第五天：确定一个测试中的人工智能案例研究，并分享你的发现"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-6-explore-and-share-insights-on-ai-testing-tools/",
          children: "第六天：探索并分享对 AI 测试工具的见解"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-7-research-and-share-prompt-engineering-techniques/",
          children: "第七天：研究并分享提示词工程技术"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-8-craft-a-detailed-prompt-to-support-test-activities/",
          children: "第八天：制作详细的 Prompt 来支持测试活动"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-9-evaluate-prompt-quality-and-try-to-improve-it/",
          children: "第九天：评估提示词质量并努力加以改进"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-10-critically-analyse-ai-generated-tests/",
          children: "第十天：批判性分析人工智能生成的测试"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-11-generate-test-data-using-ai-and-evaluate-its-efficacy/",
          children: "第十一天：使用 AI 生成测试数据并评估其功效"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/",
          children: "第十二天：评估你是否信任 AI 支持测试并分享你的想法"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-13-develop-a-testing-approach-and-become-an-ai-in-testing-champion/",
          children: "第十三天：开发你的测试方法并成为 AI 测试的先行者"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/",
          children: "第十四天：生成 AI 测试代码并分享你的体验"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-15-gauge-your-short-term-ai-in-testing-plans/",
          children: "第十五天：衡量测试计划中的短期人工智能"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-16-evaluate-adopting-ai-for-accessibility-testing-and-share-your-findings/",
          children: "第十六天：评估采用 AI 进行无障碍测试并分享你的发现"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-17-automate-bug-reporting-with-ai-and-share-your-process-and-evaluation/",
          children: "第十七天：利用人工智能实现缺陷报告自动化，并分享你的流程和评估结果"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-18-share-your-greatest-frustration-with-ai-in-testing/",
          children: "第十八天：分享你在 AI 测试中遇到的最大难题"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "推荐阅读",
      children: "推荐阅读"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/zhcategories/bruno/",
          children: "使用 Bruno 进行接口自动化测试快速开启教程系列"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.tech/zh/zhseries/postman-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/",
          children: "使用 Postman 进行接口自动化测试快速开启教程系列"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.tech/zh/zhseries/pytest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/",
          children: "使用 Pytest 进行接口自动化测试快速开启教程系列"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.tech/zh/zhseries/supertest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/",
          children: "使用 SuperTest 进行接口自动化测试快速开启教程系列"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.tech/zh/zhseries/rest-assured-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/",
          children: "使用 Rest Assured 进行接口自动化测试快速开启教程系列"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.tech/zh/zhseries/gatling-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/",
          children: "使用 Galting 进行性能测试快速开启教程系列"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/zh/zhseries/k6-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/",
          children: "使用 K6 进行性能测试快速开启教程系列"
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

const url = "src/blog/zh-cn/Event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
