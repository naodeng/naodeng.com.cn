import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "30 Days of AI in Testing Challenge: Day 20: Learn about AI self-healing tests and evaluate how effective they are",
  "description": "This blog post is about Day 20 of the 30-Day AI Testing Challenge,exploring the effectiveness of AI self-healing tests. The article may include the author's definition, purpose, and methods of AI self-healing testing, as well as an evaluation of its effectiveness and practical experience. By sharing explorations and evaluations of AI self-healing testing, readers will understand the author's views and insights on this emerging testing method, as well as its application effects in real testing environments. This series of activities hopes to provide testing professionals with an opportunity to understand and explore the potential and limitations of AI in self-healing testing, and to promote further research and application of AI testing in the industry.",
  "date": "2024-03-23T13:06:44.000Z",
  "author": "nao.deng",
  "tags": ["AI in Testing", "30 Days of AI in Testing"],
  "categories": ["Testing Challenge"],
  "series": ["30 Days of AI in Testing Challenge"],
  "cover": "./30-days-of-ai-in-testing-day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are",
    "text": "Day 20: Learn about AI self-healing tests and evaluate how effective they are"
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
    "slug": "my-day-20-task",
    "text": "My Day 20 Task"
  }, {
    "depth": 3,
    "slug": "1-what-kind-of-problems-does-your-tool-claim-to-solve",
    "text": "1. What kind of problems does your tool claim to solve?"
  }, {
    "depth": 3,
    "slug": "2-verifying-one-of-the-claims",
    "text": "2. Verifying one of the claims"
  }, {
    "depth": 4,
    "slug": "21-intentionally-changing-locators-to-verify-the-ai-self-healing-functionality",
    "text": "2.1 Intentionally changing locators to verify the AI self-healing functionality"
  }, {
    "depth": 4,
    "slug": "22-intentionally-changing-the-order-of-steps-in-the-test-to-verify-the-ai-self-healing-functionality",
    "text": "2.2 Intentionally changing the order of steps in the test to verify the AI self-healing functionality"
  }, {
    "depth": 3,
    "slug": "3-where-might-this-feature-fail",
    "text": "3. Where might this feature fail?"
  }, {
    "depth": 3,
    "slug": "4-my-opinion",
    "text": "4. My Opinion"
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
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are",
      children: "Day 20: Learn about AI self-healing tests and evaluate how effective they are"
    }), "\n", createVNode(_components.p, {
      children: "Only ten more days to go on this challenge, and today we are going to examine the claims about Self-Healing Testings. The idea of Self-Healing Tests was one of the early claims for the use of AI in Testing, but there are three key questions we want to answer:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "What does Self-Healing Tests really mean?"
      }), "\n", createVNode(_components.li, {
        children: "What are the risks of Self-Healing Tests?"
      }), "\n", createVNode(_components.li, {
        children: "Is this a useful feature?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "We know that not everyone is interested in learning new automation tools, so similar to yesterday’s task, there are two options and you are free to pick one (or both)."
    }), "\n", createVNode(_components.h3, {
      id: "task-steps",
      children: "Task Steps"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Option 1"
      }), ": This option is for you if you currently use a tool that claims Self Healing Tests or are interested in a deep dive into Self Healing Tests and have time to learn a new tool. For this option, the steps are:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "What types of problems does your tool claim to heal?"
        }), " Read the documentation for your selected tool to understand what the tool means by Self-Healing Tests. Try to understand the types of test issues that the tool claims to heal and how this mechanism works."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test one of their claims"
        }), ": Design a 20 minute time-boxed test of one of the Self-Healing capabilities of the tool. Run the test and evaluate how well you think the Self-Healing mechanism performed. Some ideas are:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "If the tool claims to detect changed element locators, you could change the locator in a test so that the test wil fail, then run the tool and check how well the tool heals the failing test."
          }), "\n", createVNode(_components.li, {
            children: "If the tool claims to correct the sequencing of actions, swap two parts of a test so that it fails, then run the tool and check how well the tool heals the failing test."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "How might this feature fail?"
        }), " Based on the claim you were testing and assuming the self-healing was successful, how might the self-healing fail? Can you construct a scenario where it does fail?"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Option 2"
      }), ": This option is for you if you are interested in finding out more about Self Healing Tests but don’t have time to learn a new tool. For this option, the steps are:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Find and read an article or paper that discusses Self-Healing Tests"
        }), ": This could be a research paper, blog post or vendor documentation that deals with the specifics of Self-Healing Tests.\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Try to understand the types of issues with tests that the tool claims to heal."
          }), "\n", createVNode(_components.li, {
            children: "If possible, uncover how the issues are detected and resolved."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "How valuable is a feature like this to your team?"
        }), " Consider the challenges your team faces and whether Self-Healing Tests are valuable to your team."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "How might this fail?"
        }), " Based on your reading, how might this Self-Healing fail in a way that matters? For example, could it heal a test in a way that results in the purpose of the test changing from what you originally intended?"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Share Your Insights"
      }), ": Regardless of which investigative option you choose, respond to this post with your insights and share:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Which option you chose."
      }), "\n", createVNode(_components.li, {
        children: "What your perceptions are of Self-Healing Tests (what problem does it solve and how)."
      }), "\n", createVNode(_components.li, {
        children: "The ways in which Self-Healing Tests might benefit or fail your team."
      }), "\n", createVNode(_components.li, {
        children: "How likely you are to use (or continue to use) tools with this feature."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-take-part",
      children: "Why Take Part"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deepen your understanding of Self-Healing Tests"
        }), ": Maintaining tests through new iterations of a product can be challenging, so tooling that can reduce this is valuable. By taking part in this test task, you are developing a sense of what Self-Healing Tests actually means and how they can help your team."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Improve your critical thinking about vendor claims"
        }), ": When selecting tools to support testing, we are often faced with many fantastic sounding claims. This task allows you to think critically about the claims being made, their limitations, and how they might impact your team."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "task-link",
      children: "Task Link"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://club.ministryoftesting.com/t/day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are/75314",
        children: "https://club.ministryoftesting.com/t/day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are/75314"
      })
    }), "\n", createVNode(_components.h2, {
      id: "my-day-20-task",
      children: "My Day 20 Task"
    }), "\n", createVNode(_components.p, {
      children: ["Based on my previous task of trying out the AI self-healing testing feature in Katalon Studio, today I chose ", createVNode(_components.strong, {
        children: "Option 1"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "1-what-kind-of-problems-does-your-tool-claim-to-solve",
      children: ["1. ", createVNode(_components.strong, {
        children: "What kind of problems does your tool claim to solve?"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Katalon Studio’s AI-driven self-healing testing feature claims to address issues related to test failures caused by UI locator changes in WebUI automation testing."
    }), "\n", createVNode(_components.p, {
      children: "The working mechanism of Katalon Studio’s AI self-healing testing:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Once self-healing is enabled, if Katalon Studio can’t find an object using the default locator, it attempts to find the object with other pre-configured locators associated with that object."
      }), "\n", createVNode(_components.li, {
        children: "If Katalon Studio finds the object using any alternative locator, the test continues. The alternative locator that successfully found the object is used for the remainder of the execution. This helps prevent repeated self-healing of the same broken object, thus reducing execution time."
      }), "\n", createVNode(_components.li, {
        children: "After test execution, Katalon Studio suggests replacing the broken locator with the one that found the object. Unless Katalon Studio can find the target object, based on designed failure handling options, the test execution may stop or proceed."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["The corresponding article link is: ", createVNode(_components.a, {
        href: "https://docs.katalon.com/katalon-studio/maintain-tests/self-healing-tests-in-katalon-studio",
        children: "https://docs.katalon.com/katalon-studio/maintain-tests/self-healing-tests-in-katalon-studio"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "2-verifying-one-of-the-claims",
      children: ["2. ", createVNode(_components.strong, {
        children: "Verifying one of the claims"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["To verify Katalon Studio’s AI self-healing testing functionality, I recorded a process on the ", createVNode(_components.a, {
        href: "https://www.saucedemo.com/",
        children: "Swag Labs"
      }), " online shopping website with Katalon Studio, including login, selecting products, adding them to the cart, and successfully placing an order. Katalon Studio generated the following code:\n", createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/yJz1dB.png",
        alt: "Generated Code"
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The current demo test case runs successfully."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "21-intentionally-changing-locators-to-verify-the-ai-self-healing-functionality",
      children: "2.1 Intentionally changing locators to verify the AI self-healing functionality"
    }), "\n", createVNode(_components.p, {
      children: ["To test the tool’s ability to detect and repair changes in element locators, I intentionally altered two locators in the test script. The adjusted example is as follows:\n", createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/P1SgEU.png",
        alt: "Adjusted Example"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["After the test failed, I checked the tool’s AI self-healing functionality and found no suggestions for locator repair failures.\n", createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/EES0vN.png",
        alt: "No Suggestions"
      }), "\n", createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/dahhBI.png",
        alt: "No Suggestions"
      })]
    }), "\n", createVNode(_components.h4, {
      id: "22-intentionally-changing-the-order-of-steps-in-the-test-to-verify-the-ai-self-healing-functionality",
      children: "2.2 Intentionally changing the order of steps in the test to verify the AI self-healing functionality"
    }), "\n", createVNode(_components.p, {
      children: ["To further test the tool’s ability to repair after detecting changes in element locators, I changed the order of the test steps. The adjusted example is as follows:\n", createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/rLRZWL.png",
        alt: "Adjusted Order"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["After the test failed, I checked the tool’s AI self-healing functionality and again found no suggestions for locator repair failures.\n", createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/TLAW06.png",
        alt: "No Suggestions"
      }), "\n", createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/AXttDE.png",
        alt: "No Suggestions"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "3-where-might-this-feature-fail",
      children: ["3. ", createVNode(_components.strong, {
        children: "Where might this feature fail?"
      })]
    }), "\n", createVNode(_components.p, {
      children: "From what I’ve observed, both of my verifications failed; the AI self-healing testing did not provide any locator repair suggestions, which is a significant deviation from the official claims."
    }), "\n", createVNode(_components.p, {
      children: "I also attempted to run incorrect demo cases multiple times, and on one occasion, Katalon Studio’s AI self-healing testing feature did provide a suggestion. However, using its advice did not correct the faulty case."
    }), "\n", createVNode(_components.p, {
      children: "At this point, I’m not entirely sure if there are any specific conditions or limitations to Katalon Studio’s AI self-healing testing feature, or if I’m using it incorrectly."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Note that I am using a trial version, and the AI self-healing testing feature is set to default configuration."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4-my-opinion",
      children: ["4. ", createVNode(_components.strong, {
        children: "My Opinion"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Having participated in this 30-day AI testing challenge and trying out many new AI testing tools, I’ve found that most tools do not live up to their claims and often exaggerate their capabilities. I suggest that everyone thoroughly test these AI testing tools themselves and use those trial results as a basis for selecting the appropriate tool."
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

const url = "src/blog/en/Event/30-days-of-ai-in-testing-day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
