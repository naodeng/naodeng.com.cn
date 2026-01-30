import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "30 Days of AI in Testing Challenge: Day 28: Build your own AI Tools",
  "description": "",
  "date": "2024-03-31T02:06:44.000Z",
  "author": "nao.deng",
  "tags": ["AI in Testing", "30 Days of AI in Testing"],
  "categories": ["Testing Challenge"],
  "series": ["30 Days of AI in Testing Challenge"],
  "cover": "./30-days-of-ai-in-testing-day-28-build-your-own-ai-tools-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "day-28-build-your-own-ai-tools",
    "text": "Day 28: Build your own AI Tools"
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
    "slug": "my-day-28-task",
    "text": "My Day 28 Task"
  }, {
    "depth": 2,
    "slug": "about-event",
    "text": "About Event"
  }, {
    "depth": 3,
    "slug": "event-introduce",
    "text": "Event Introduce"
  }, {
    "depth": 3,
    "slug": "what-is-it",
    "text": "What is it?"
  }, {
    "depth": 3,
    "slug": "why-take-part-1",
    "text": "Why take part?"
  }, {
    "depth": 3,
    "slug": "how-will-it-work",
    "text": "How will it work?"
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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "day-28-build-your-own-ai-tools",
      children: "Day 28: Build your own AI Tools"
    }), "\n", createVNode(_components.p, {
      children: "Day 28 - We’re nearly there! Thanks for sticking with this challenge!"
    }), "\n", createVNode(_components.p, {
      children: "Earlier in the challenge you explored various uses of Large Language Models (LLMs) such as ChatGPT and Bing Copilot but concerns were raised about the privacy of the data we share with these tools. We also came up against scenarios where these models just lack the context to generate reasonable output."
    }), "\n", createVNode(_components.p, {
      children: "These are very real concerns and are faced by many companies that are adopting AI and especially generative AI, such as LLMs. Luckily there are approaches we can adopt to address these."
    }), "\n", createVNode(_components.p, {
      children: "So, in today’s task, we will investigate how some of these approaches; this is a huge field, and in today’s task, we will only be exploring these at a high level. We will do this through a set of 4 Walkthroughs that focus on addressing:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Data Privacy through the use of locally hosted LLMs"
      }), "\n", createVNode(_components.li, {
        children: "Improved Contextual Behaviors through fine-tuning and context retrieval."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Don’t worry, you won’t need to write any code - the code for each walkthrough is provided for you but you will have the opportunity to make some small modifications to experiment with the approach."
    }), "\n", createVNode(_components.p, {
      children: ["The walkthroughs make use of ", createVNode(_components.a, {
        href: "https://colab.research.google.com/",
        children: "Google’s Colaboratory"
      }), " (Colab for short), so you will need a Google Account to access and run the code. We are using this for education purposes only"]
    }), "\n", createVNode(_components.h3, {
      id: "task-steps",
      children: "Task Steps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Learn about Colaboratory"
          }), " - Watch the short Introduction to ", createVNode(_components.a, {
            href: "https://www.youtube.com/watch?v=inN8seMm7UI",
            children: "Colab video"
          }), " to understand how to use Colab."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Complete a walkthrough"
          }), " - Select one or more of the walkthroughs to complete"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["a. Access the repository for today’s task at ", createVNode(_components.a, {
              href: "https://github.com/BillMatthews/mot-30-days-ai-in-testing",
              children: "GitHub - BillMatthews/mot-30-days-ai-in-testing"
            })]
          }), "\n", createVNode(_components.li, {
            children: "b. Read the ReadMe file to better understand what each walkthrough covers."
          }), "\n", createVNode(_components.li, {
            children: "c. Pick one (or more) of the walkthroughs that interest you and select the link on the ReadMe page. This will open a Colaboratory Notebook containing the walkthrough."
          }), "\n", createVNode(_components.li, {
            children: "d. Read the information and follow the instructions in the notebook to complete the walkthrough."
          }), "\n", createVNode(_components.li, {
            children: "e. You shouldn’t need to change any of the code provided but most notebooks have options for you to experiment with the inputs."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Reflect"
          }), " - Review the reflection questions at the end of the walkthrough"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Share your insights"
          }), " - Consider sharing your insights with the community by responding to this post with:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "a. Which walkthrough you choose and why"
          }), "\n", createVNode(_components.li, {
            children: "b. How well you think this approach addresses your concerns about data privacy and/or context awareness."
          }), "\n", createVNode(_components.li, {
            children: "c. What opportunities does the approach provide you and your team?"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-take-part",
      children: "Why Take Part"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Taking it to the next level"
        }), ": It’s easy to use tools such as ChatGPT, but teams will quickly reach the limits of its usefulness. By taking part in today’s tasks you will become aware of how we can push past these limitations and start to innovate within the field of AI in Testing."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "task-link",
      children: "Task Link"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://club.ministryoftesting.com/t/day-28-build-your-own-ai-tools/75496",
        children: "https://club.ministryoftesting.com/t/day-28-build-your-own-ai-tools/75496"
      })
    }), "\n", createVNode(_components.h2, {
      id: "my-day-28-task",
      children: "My Day 28 Task"
    }), "\n", createVNode(_components.h2, {
      id: "about-event",
      children: "About Event"
    }), "\n", createVNode(_components.p, {
      children: "The “30 Days of AI in Testing Challenge” is an initiative by the Ministry of Testing community. The last time I came across this community was during their “30 Days of Agile Testing” event."
    }), "\n", createVNode(_components.h3, {
      id: "event-introduce",
      children: "Event Introduce"
    }), "\n", createVNode(_components.p, {
      children: "Upgrade Your Testing Game throughout March, with the 30 Days of AI in Testing Challenge!"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "March 1 2024 - April 1 2024"
      }), "\n", createVNode(_components.li, {
        children: "00:00 - 23:00 BST"
      }), "\n", createVNode(_components.li, {
        children: "Location: Online"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Calling all testers, AI enthusiasts, and anyone curious about how Artificial Intelligence is reshaping software quality. Ready to explore the world of AI? This March, we’re launching 30 Days of AI in Testing, and you’re invited to join the mission!"
    }), "\n", createVNode(_components.h3, {
      id: "what-is-it",
      children: "What is it?"
    }), "\n", createVNode(_components.p, {
      children: "Over 30 enlightening days, alongside a vibrant community, you’ll embark on a journey to uncover the potential of AI in testing. Each day, we’ll explore and discuss new concepts, tools, and practices that will demystify AI and enhance your testing toolkit."
    }), "\n", createVNode(_components.h3, {
      id: "why-take-part-1",
      children: "Why take part?"
    }), "\n", createVNode(_components.p, {
      children: "Incrementally Elevate Your Skills: Each day brings a new, manageable task that builds on the last. Helping you gradually deepen your understanding of AI in testing.\nImprove Your Testing Efficiency and Effectiveness: Discover the many ways AI can be used to improve your everyday testing, improving your efficiency and effectiveness."
    }), "\n", createVNode(_components.p, {
      children: "Connect and Collaborate: Engage with a global community of testers and AI enthusiasts on The Club forum, sharing insights, and gaining inspiration and support."
    }), "\n", createVNode(_components.p, {
      children: "Achieve AI Ambitions: Use this challenge as a stepping stone to reach your AI testing goals. Dip in and tackle the tasks that meet your AI ambitions."
    }), "\n", createVNode(_components.p, {
      children: "Lead and Inspire: By sharing your AI journey and discoveries during the challenge, you’ll play a crucial role in advancing the knowledge and skills of the community."
    }), "\n", createVNode(_components.h3, {
      id: "how-will-it-work",
      children: "How will it work?"
    }), "\n", createVNode(_components.p, {
      children: "Throughout March, a member of team MoT will post a new, short, daily task on The Club forum that’ll enhance your understanding of AI in testing."
    }), "\n", createVNode(_components.p, {
      children: "You’ll then reply to the topic posts with your responses to each daily task. Feel free to share your thoughts, ask questions, seek advice, or offer support to others."
    }), "\n", createVNode(_components.p, {
      children: "Finally, don’t forget to encourage meaningful discussions by engaging with other people’s replies. If you find someone’s response interesting or helpful, hit that ❤️ button and let them know!"
    }), "\n", createVNode(_components.p, {
      children: "Don’t get FOMO; register now! Registering will give you an email reminder for each daily task."
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
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/",
          children: "Day 12: Evaluate whether you trust AI to support testing and share your thoughts"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-13-develop-a-testing-approach-and-become-an-ai-in-testing-champion/",
          children: "Day 13: Develop a testing approach and become an AI in testing champion"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/",
          children: "Day 14: Generate AI test code and share your experience"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-15-gauge-your-short-term-ai-in-testing-plans/",
          children: "Day 15: Gauge your short-term AI in testing plans"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-16-evaluate-adopting-ai-for-accessibility-testing-and-share-your-findings/",
          children: "Day 16: Evaluate adopting AI for accessibility testing and share your findings"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-17-automate-bug-reporting-with-ai-and-share-your-process-and-evaluation/",
          children: "Day 17: Automate bug reporting with AI and share your process and evaluation"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-18-share-your-greatest-frustration-with-ai-in-testing/",
          children: "Day 18: Share your greatest frustration with AI in Testing"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/",
          children: "Day 19: Experiment with AI for test prioritisation and evaluate the benefits and risks"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are/",
          children: "Day 20: Learn about AI self-healing tests and evaluate how effective they are"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-21-develop-your-ai-in-testing-manifesto/",
          children: "Day 21: Develop your AI in testing manifesto"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-22-reflect-on-what-skills-a-team-needs-to-succeed-with-ai-assisted-testing/",
          children: "Day 22: Reflect on what skills a team needs to succeed with AI-assisted testing"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages/",
          children: "Day 23: Assess AI effectiveness in visual testing and discuss the advantages"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-24-investigate-code-explanation-techniques-and-share-your-insights/",
          children: "Day 24: Investigate code explanation techniques and share your insights"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-25-explore-ai-driven-security-testing-and-share-potential-use-cases/",
          children: "Day 25: Explore AI-driven security testing and share potential use cases"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-26-investigate-strategies-to-minimise-the-carbon-footprint-of-ai-in-testing/",
          children: "Day 26: Investigate strategies to minimise the carbon footprint of AI in testing"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://naodeng.com.cn/posts/event/30-days-of-ai-in-testing-day-27-assess-your-teams-readiness-to-adopt-ai-assisted-testing/",
          children: "Day 27: Assess your team’s readiness to adopt AI-assisted testing"
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

const url = "src/blog/en/Event/30-days-of-ai-in-testing-day-28-build-your-own-ai-tools.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-28-build-your-own-ai-tools.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-28-build-your-own-ai-tools.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
