import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "30 Days of AI in Testing Challenge: Day 12: Evaluate whether you trust AI to support testing and share your thoughts",
  "description": "This blog post is day eleven of the 30 Days of AI Testing Challenge, focusing on the use of AI to generate test data and evaluating its effectiveness. The post may include the author's real-world application of AI-generated test data and an assessment of its effectiveness and applicability. By sharing the application and evaluation of AI-generated test data, readers will understand how the author leverages AI technology to generate valid test data and enhance the efficiency of the testing process in real testing environments. This series of events is expected to provide testing professionals with cases of practical application of AI-generated test data and encourage them to experiment with this emerging technology.",
  "date": "2024-03-13T02:06:44.000Z",
  "author": "nao.deng",
  "tags": ["AI in Testing", "30 Days of AI in Testing"],
  "categories": ["Testing Challenge"],
  "series": ["30 Days of AI in Testing Challenge"],
  "cover": "./30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts",
    "text": "Day 12: Evaluate whether you trust AI to support testing and share your thoughts"
  }, {
    "depth": 3,
    "slug": "task-steps",
    "text": "Task Steps"
  }, {
    "depth": 3,
    "slug": "why-take-part",
    "text": "Why Take Part"
  }, {
    "depth": 3,
    "slug": "task-link",
    "text": "Task Link"
  }, {
    "depth": 2,
    "slug": "my-day-12-task",
    "text": "My Day 12 Task"
  }, {
    "depth": 3,
    "slug": "1-about-research-on-ai-risks",
    "text": "1. About Research on AI Risks"
  }, {
    "depth": 4,
    "slug": "summary-of-the-article-the-15-biggest-risks-of-artificial-intelligence",
    "text": "Summary of the article The 15 Biggest Risks of Artificial Intelligence:"
  }, {
    "depth": 4,
    "slug": "summary-of-the-article-challenges-of-ai",
    "text": "Summary of the article Challenges of AI:"
  }, {
    "depth": 4,
    "slug": "personal-thoughts",
    "text": "Personal Thoughts"
  }, {
    "depth": 3,
    "slug": "2-about-reflection-on-the-role-of-ai-in-testing-and-sharing-your-insights",
    "text": "2. About Reflection on the Role of AI in Testing and Sharing Your Insights"
  }, {
    "depth": 2,
    "slug": "about-event",
    "text": "About Event"
  }, {
    "depth": 2,
    "slug": "recommended-readings",
    "text": "Recommended Readings"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts",
      children: "Day 12: Evaluate whether you trust AI to support testing and share your thoughts"
    }), "\n", createVNode(_components.p, {
      children: "It’s day 12, and it’s time to get reflective about AI’s role in supporting testing and empowering testers. In previous days, we have explored various ways in which AI can currently support testing activities. There are many interesting options, and in many ways, we are only at the start of the AI in Testing journey."
    }), "\n", createVNode(_components.p, {
      children: "However, the use of AI in any context can be problematic due to issues and limitations such as:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Data Privacy"
      }), "\n", createVNode(_components.li, {
        children: "Biased and discriminatory behaviours"
      }), "\n", createVNode(_components.li, {
        children: "Inaccurate results"
      }), "\n", createVNode(_components.li, {
        children: "Unexpected and/or emerging behaviours"
      }), "\n", createVNode(_components.li, {
        children: "Misaligned goals"
      }), "\n", createVNode(_components.li, {
        children: "Lack of AI explainability"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These issues (to name a few) impact our trust in AI, but this is contextual, so let’s explore how much we should trust AI in Testing in your context."
    }), "\n", createVNode(_components.h3, {
      id: "task-steps",
      children: "Task Steps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Research AI Risks"
          }), ": Find and read an introductory article on AI Risks and problems. If you are short on time, try one of these editorials:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.a, {
              href: "https://www.forbes.com/sites/bernardmarr/2023/06/02/the-15-biggest-risks-of-artificial-intelligence/",
              children: "The 15 Biggest Risks Of Artificial Intelligence"
            }), " - Forbes, Bernard Marr"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.a, {
              href: "https://www.chathamhouse.org/2022/03/challenges-ai",
              children: "Challenges of AI"
            }), " - Chatham House, Kate Jones, Marjorie Buchser & Jon Wallace"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Consider the role of AI in Testing"
          }), ": Consider, for your Testing Context, the ways that AI could be used and then:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Identify which AI Risks might impact the quality of testing in your context"
          }), "\n", createVNode(_components.li, {
            children: "Examine how one or more of these AI Risks might impact your testing"
          }), "\n", createVNode(_components.li, {
            children: "Think about how you might safeguard against these risks becoming issues in your context?"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Shared your insights"
          }), ": reply to this post with your reflections on the use of AI in testing. Consider sharing some or all of the following:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "What context do you work in?"
          }), "\n", createVNode(_components.li, {
            children: "What AI risks are introduced or amplified by the introduction of AI in Testing for your context?"
          }), "\n", createVNode(_components.li, {
            children: "Where should AI not be used in your testing context?"
          }), "\n", createVNode(_components.li, {
            children: "To what extent should the use of AI be trusted in your context?"
          }), "\n", createVNode(_components.li, {
            children: "How might trust for AI in Testing be increased in your context?"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Bonus"
          }), ": If you are a blogger, why not create a blog post and link that in your response?"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-take-part",
      children: "Why Take Part"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Improve your critical thinking"
        }), ": The adoption of AI in Testing needs us to balance the benefits of using AI with the risks and issues it introduces. By taking part in this task, you are increasing your awareness of the risks and honing your thinking about these, so you are not dazzled by the AI hype."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "task-link",
      children: "Task Link"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://club.ministryoftesting.com/t/day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/75102",
        children: "https://club.ministryoftesting.com/t/day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/75102"
      })
    }), "\n", createVNode(_components.h2, {
      id: "my-day-12-task",
      children: "My Day 12 Task"
    }), "\n", createVNode(_components.h3, {
      id: "1-about-research-on-ai-risks",
      children: ["1. About ", createVNode(_components.strong, {
        children: "Research on AI Risks"
      })]
    }), "\n", createVNode(_components.p, {
      children: "I quickly read through the two recommended articles and summarized their key points:"
    }), "\n", createVNode(_components.h4, {
      id: "summary-of-the-article-the-15-biggest-risks-of-artificial-intelligence",
      children: ["Summary of the article ", createVNode(_components.a, {
        href: "https://www.forbes.com/sites/bernardmarr/2023/06/02/the-15-biggest-risks-of-artificial-intelligence/",
        children: "The 15 Biggest Risks of Artificial Intelligence"
      }), ":"]
    }), "\n", createVNode(_components.p, {
      children: "Artificial intelligence poses significant dangers and ethical challenges."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "❓ Lack of Transparency: Complex AI decisions may lead to distrust."
      }), "\n", createVNode(_components.li, {
        children: "👥 Bias and Discrimination: AI may perpetuate societal biases."
      }), "\n", createVNode(_components.li, {
        children: "🔒 Privacy Issues: AI can collect personal data, leading to privacy concerns."
      }), "\n", createVNode(_components.li, {
        children: "🛡️ Security Risks: AI can be used for cyberattacks and autonomous weapons."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "summary-of-the-article-challenges-of-ai",
      children: ["Summary of the article ", createVNode(_components.a, {
        href: "https://www.chathamhouse.org/2022/03/challenges-ai",
        children: "Challenges of AI"
      }), ":"]
    }), "\n", createVNode(_components.p, {
      children: "Artificial intelligence carries potential benefits and risks but lacks unified regulation."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ℹ️ Definition of AI: AI is defined as technology that performs tasks requiring human intelligence."
      }), "\n", createVNode(_components.li, {
        children: "❗️ Risks and Benefits of AI: It offers enormous potential advantages but also poses ethical, security, and societal risks."
      }), "\n", createVNode(_components.li, {
        children: "⚖️ Regulation of AI: There’s a lack of unified regulation due to private sector dominance and government catching up."
      }), "\n", createVNode(_components.li, {
        children: "✋ Ethical Issues with AI: Identifying and mitigating moral risks in design and ongoing usage is crucial."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "personal-thoughts",
      children: "Personal Thoughts"
    }), "\n", createVNode(_components.p, {
      children: "In general, from the theoretical proposal of AI to the implementation of related models and tools, there have always been unclear ethical dilemmas, inadequate regulation, and insecure data privacy. The risks of AI persist and, personally, I believe they won’t disappear."
    }), "\n", createVNode(_components.p, {
      children: "Both articles address these points. Although AI is believed to be the future, many people still question the accuracy, data security, and fairness of results while using it. After all, the companies behind the operation of these AI tools face pressure from both governments and revenue."
    }), "\n", createVNode(_components.h3, {
      id: "2-about-reflection-on-the-role-of-ai-in-testing-and-sharing-your-insights",
      children: ["2. About ", createVNode(_components.strong, {
        children: "Reflection on the Role of AI in Testing"
      }), " and ", createVNode(_components.strong, {
        children: "Sharing Your Insights"
      })]
    }), "\n", createVNode(_components.p, {
      children: "I believe there are risks associated with AI’s role in responding to testing-related results:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The risk of ethical bias will undoubtedly affect the integrity of AI-generated testing data and scenarios. A biased AI may intentionally discard results that should be included."
      }), "\n", createVNode(_components.li, {
        children: "Data privacy and security risks make me cautious when interacting with AI, as I refrain from providing real contexts to prevent data collection. In our industry of internet software development, leaking data during the early stages of product release poses significant risks."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "To mitigate these risks:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Regarding ethical bias: My habit has always been to not entirely rely on or trust AI results. Instead, I use AI results to expand my thinking and generally perform a secondary human review of AI-generated testing data and scenarios to confirm their usability."
      }), "\n", createVNode(_components.li, {
        children: "Regarding data privacy risk: I apply partial obfuscation to the prompts and contexts when interacting with AI, reducing the exposure of real project and business information."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "As I work in developing new internet products for clients, data privacy and security have always been red-line issues. Therefore, I am cautious when using AI in projects, and I use it to assist in repetitive or predictable tasks under the premise of avoiding risks."
    }), "\n", createVNode(_components.p, {
      children: "My trust in AI results depends on the certainty of my current requirements. If my requirements are clear enough, I use AI more for time-saving and efficiency purposes, and I fully trust the results."
    }), "\n", createVNode(_components.p, {
      children: "By using different AI tools for daily testing tasks and then manually judging the AI-generated responses, trust in the testing capabilities of certain AI tools is gradually enhanced."
    }), "\n", createVNode(_components.h2, {
      id: "about-event",
      children: "About Event"
    }), "\n", createVNode(_components.p, {
      children: "The “30 Days of AI in Testing Challenge” is an initiative by the Ministry of Testing community. The last time I came across this community was during their “30 Days of Agile Testing” event."
    }), "\n", createVNode(_components.p, {
      children: ["Community Website: ", createVNode(_components.a, {
        href: "https://www.ministryoftesting.com",
        children: "https://www.ministryoftesting.com"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Event Link: ", createVNode(_components.a, {
        href: "https://www.ministryoftesting.com/events/30-days-of-ai-in-testing",
        children: "https://www.ministryoftesting.com/events/30-days-of-ai-in-testing"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Challenges"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-1-introduce-yourself-and-your-interest-in-ai/",
          children: "Day 1: Introduce yourself and your interest in AI"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/",
          children: "Day 2: Read an introductory article on AI in testing and share it"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-3-list-ways-in-which-ai-is-used-in-testing/",
          children: "Day 3: List ways in which AI is used in testing"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-4-watch-the-ama-on-artificial-intelligence-in-testing-and-share-your-key-takeaway/",
          children: "Day 4: Watch the AMA on Artificial Intelligence in Testing and share your key takeaway"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-5-identify-a-case-study-on-ai-in-testing-and-share-your-findings/",
          children: "Day 5:Identify a case study on AI in testing and share your findings"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-6-explore-and-share-insights-on-ai-testing-tools/",
          children: "Day 6:Explore and share insights on AI testing tools"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-7-research-and-share-prompt-engineering-techniques/",
          children: "Day 7: Research and share prompt engineering techniques"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-8-craft-a-detailed-prompt-to-support-test-activities/",
          children: "Day 8: Craft a detailed prompt to support test activities"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-9-evaluate-prompt-quality-and-try-to-improve-it/",
          children: "Day 9: Evaluate prompt quality and try to improve it"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-10-critically-analyse-ai-generated-tests/",
          children: "Day 10: Critically Analyse AI-Generated Tests"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-11-generate-test-data-using-ai-and-evaluate-its-efficacy/",
          children: "Day 11: Generate test data using AI and evaluate its efficacy"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "recommended-readings",
      children: "Recommended Readings"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/api-automation-testing-tutorial/",
          children: "API Automation Testing Tutorial"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/bruno-api-automation-testing-tutorial/",
          children: "Bruno API Automation Testing Tutorial"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/gatling-performance-testing-tutorial/",
          children: "Gatling Performance Testing Tutorial"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/k6-performance-testing-tutorial/",
          children: "K6 Performance Testing Tutorial"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/postman-api-automation-testing-tutorial/",
          children: "Postman API Automation Testing Tutorial"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/pytest-api-automation-testing-tutorial/",
          children: "Pytest API Automation Testing Tutorial"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/rest-assured-api-automation-testing-tutorial/",
          children: "REST Assured API Automation Testing Tutorial"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/supertest-api-automation-testing-tutorial/",
          children: "SuperTest API Automation Testing Tutorial"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/series/30-days-of-ai-in-testing-challenge/",
          children: "30 Days of AI in Testing Challenge"
        })
      }), "\n"]
    })]
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

const url = "src/blog/en/Event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
