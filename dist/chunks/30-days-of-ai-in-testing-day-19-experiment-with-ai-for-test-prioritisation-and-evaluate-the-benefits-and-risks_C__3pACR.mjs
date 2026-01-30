import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "30 Days of AI in Testing Challenge: Day 19: Experiment with AI for test prioritisation and evaluate the benefits and risks",
  "description": "This blog post is about Day 19 of the 30-Day AI Testing Challenge, focusing on exploring the role of AI in test priority sorting and evaluating its pros and cons. The article may include the author's practical application cases of AI in test priority sorting, as well as the benefits and challenges brought by using AI. By sharing experiences and evaluations of applying AI in test priority sorting, readers will gain insights into the author's views on the actual effects and impacts of AI in the testing process. This series of activities hopes to provide testing professionals with an opportunity to understand and explore the role of AI in test priority sorting, and to promote further discussions about the application of AI in testing.",
  "date": "2024-03-21T14:22:44.000Z",
  "author": "nao.deng",
  "tags": ["AI in Testing", "30 Days of AI in Testing"],
  "categories": ["Testing Challenge"],
  "series": ["30 Days of AI in Testing Challenge"],
  "cover": "./30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks",
    "text": "Day 19: Experiment with AI for test prioritisation and evaluate the benefits and risks"
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
    "slug": "my-day-19-task",
    "text": "My Day 19 Task"
  }, {
    "depth": 3,
    "slug": "regarding-reading-an-article-discussing-the-use-of-ai-in-test-prioritization-and-selection",
    "text": "Regarding Reading an Article Discussing the Use of AI in Test Prioritization and Selection"
  }, {
    "depth": 3,
    "slug": "regarding-summarizing-the-methods-and-benefits-of-using-ai-tools-in-test-prioritization-and-selection",
    "text": "Regarding Summarizing the Methods and Benefits of Using AI Tools in Test Prioritization and Selection"
  }, {
    "depth": 3,
    "slug": "regarding-reflecting-on-how-you-or-your-team-currently-execute-this-task",
    "text": "Regarding Reflecting on How You or Your Team Currently Execute This Task"
  }, {
    "depth": 4,
    "slug": "background-and-available-information-of-my-current-project",
    "text": "Background and Available Information of My Current Project"
  }, {
    "depth": 4,
    "slug": "the-necessity-of-test-priority-sorting",
    "text": "The Necessity of Test Priority Sorting"
  }, {
    "depth": 4,
    "slug": "factors-relied-upon-for-choosingprioritizing-tests",
    "text": "Factors Relied Upon for Choosing/Prioritizing Tests"
  }, {
    "depth": 4,
    "slug": "decision-making-in-the-absence-of-data",
    "text": "Decision-Making in the Absence of Data"
  }, {
    "depth": 3,
    "slug": "regarding-the-value-of-test-priority-selection-to-ai-models",
    "text": "Regarding The Value of Test Priority Selection to AI Models"
  }, {
    "depth": 3,
    "slug": "regarding-the-risks-of-test-priority-selection-to-ai-models",
    "text": "Regarding The Risks of Test Priority Selection to AI Models"
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
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      id: "day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks",
      children: "Day 19: Experiment with AI for test prioritisation and evaluate the benefits and risks"
    }), "\n", createVNode(_components.p, {
      children: "Day 19 already! I hope you can all appreciate how much we have covered already - well done!"
    }), "\n", createVNode(_components.p, {
      children: "Today we want to turn our attention to whether AI can help us make decisions about test selection and prioritisation and evaluate some of the risks and benefits of this as an approach."
    }), "\n", createVNode(_components.p, {
      children: ["Using data to make decisions about what to test and how much has been around for a long time (most testers are familiar with the idea of ", createVNode(_components.strong, {
        children: "Risk Based Testing"
      }), ") and it’s natural to think about automating these decisions to accelerate. The technical evolution for this process it to delegate to an AI model that learns from data in your context about the testing performed and the observable impact of the testing."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "The critical question is…Should we?"
      })
    }), "\n", createVNode(_components.h3, {
      id: "task-steps",
      children: "Task Steps"
    }), "\n", createVNode(_components.p, {
      children: "You have two options for today’s task (you can do both if you want):"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Option 1"
          }), " - If your company already uses an AI powered tool for test prioritisation and selection, then write a short case study and share it with the community by responding to this post. Consider sharing:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "The tool you are using"
          }), "\n", createVNode(_components.li, {
            children: "How does the tool select/prioritise tests? Is this understandable to you?"
          }), "\n", createVNode(_components.li, {
            children: "How does your team use the tool? For example, only for automated checks or only for Regression?"
          }), "\n", createVNode(_components.li, {
            children: "Has the performance of the tool improved over time?"
          }), "\n", createVNode(_components.li, {
            children: "What are the key benefits your team gains by using this tool?"
          }), "\n", createVNode(_components.li, {
            children: "Have there been any notable instances where the tool was wrong?"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Option 2"
          }), " - Consider and evaluate the idea of using AI to select and prioritise your testing."]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Find and read a short article that discusses the use of AI in test prioritisation and selection.\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Tip: if you are short on time, why not ask your favourite chatbot or copilot to summarise the current approaches and benefits of using AI in test prioritisation and selection?"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["Consider how you or your team currently perform this task. Some thinking prompts are:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "To what extent do you need to select/prioritise tests in your context?"
              }), "\n", createVNode(_components.li, {
                children: "What factors do you use when selecting/prioritising tests? Are they qualitative or quantitative?"
              }), "\n", createVNode(_components.li, {
                children: "How do you make decisions when there is a lack of data?"
              }), "\n", createVNode(_components.li, {
                children: "What is the implication if you get this wrong?"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: "In your context, would delegating this task to an AI be valuable? If so, how would your team benefit?"
          }), "\n", createVNode(_components.li, {
            children: ["What are the risks of delegating test prioritisation and selection to an AI model? Some thinking prompts are:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "How might test prioritisation and selection fail, and what would the impact be?"
              }), "\n", createVNode(_components.li, {
                children: "Do you need to understand and explain the decision made by the AI?"
              }), "\n", createVNode(_components.li, {
                children: "“How did test/qa miss this?” is an unjust but common complaint - how does this change if an AI is making the decisions about what to test?"
              }), "\n", createVNode(_components.li, {
                children: "How could you mitigate these?"
              }), "\n", createVNode(_components.li, {
                children: "If we mitigate risks using a Human in the loop, how does this impact the benefits of using AI?"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: "How could you fairly evaluate the performance of an AI tool in this task?"
          }), "\n", createVNode(_components.li, {
            children: ["Share your key insights by replying to this post. Consider sharing:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "A brief overview of your context (e.g. what industry you work in or the type of applications you test)."
              }), "\n", createVNode(_components.li, {
                children: "Share your key insights about the benefits and risks of adopting AI for test prioritisation and selection."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-take-part",
      children: "Why Take Part"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Understanding where AI can help"
        }), ": There is excitement/hype about using AI to improve and accelerate testing. For teams managing large numbers tests, complex systems or time-consuming tests being more data driven about selecting and prioritising tests might provide real benefits. By taking part in today’s task, you are critically evaluating whether it works for your context, you learn about specific risks of delegating responsibility to AI and are better prepared to make a considered decision about AI based Testing Selection and Prioritisaiton."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "task-link",
      children: "Task Link"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://club.ministryoftesting.com/t/day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/75216",
        children: "https://club.ministryoftesting.com/t/day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/75216"
      })
    }), "\n", createVNode(_components.h2, {
      id: "my-day-19-task",
      children: "My Day 19 Task"
    }), "\n", createVNode(_components.p, {
      children: ["Based on my current work status, for Day 19’s task, I chose ", createVNode(_components.strong, {
        children: "Option 2"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "regarding-reading-an-article-discussing-the-use-of-ai-in-test-prioritization-and-selection",
      children: ["Regarding ", createVNode(_components.strong, {
        children: "Reading an Article Discussing the Use of AI in Test Prioritization and Selection"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The article I read is ", createVNode(_components.a, {
        href: "https://www.linkedin.com/pulse/ai-driven-test-prioritization-amit-khullaar",
        children: "AI-Driven Test Prioritization"
      })]
    }), "\n", createVNode(_components.p, {
      children: "The main content of the article is as follows:"
    }), "\n", createVNode(_components.p, {
      children: "AI-driven test prioritization enhances efficiency and reduces costs in software testing."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "📄 Understanding Test Prioritization: Determining test case execution order for maximum coverage and defect detection."
      }), "\n", createVNode(_components.li, {
        children: "⭐️ Significance of AI-Driven Test Prioritization: Enhanced efficiency, faster feedback, optimal resource utilization, improved test coverage, and reduced costs."
      }), "\n", createVNode(_components.li, {
        children: "🔨 Implementing AI-Driven Test Prioritization: Data collection, feature selection, machine learning model, prediction, and integration with testing tools."
      }), "\n", createVNode(_components.li, {
        children: "🏢 Real-Life Examples and Implementations: Google and Microsoft successfully use AI-driven test prioritization."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "AI-driven test prioritization revolutionizes software testing by utilizing machine learning to rank test cases based on their likelihood to fail, enhancing efficiency and coverage while optimizing resources. This method relies on analyzing vast data, including historical test results and code changes. Implementations by giants like Google and Microsoft illustrate its value in reducing testing times and accelerating development. By integrating AI prioritization with testing tools, organizations can significantly improve their software quality and reduce costs, underscoring the transformative impact of AI in software development."
    }), "\n", createVNode(_components.h3, {
      id: "regarding-summarizing-the-methods-and-benefits-of-using-ai-tools-in-test-prioritization-and-selection",
      children: ["Regarding ", createVNode(_components.strong, {
        children: "Summarizing the Methods and Benefits of Using AI Tools in Test Prioritization and Selection"
      })]
    }), "\n", createVNode(_components.p, {
      children: "I chose ChatGPT-4, and its response was:"
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
            children: "AI in test prioritisation and selection, particularly within the context of software development and quality assurance, is a rapidly evolving area that leverages machine learning (ML), natural language processing (NLP), and other AI methodologies to enhance the efficiency and effectiveness of testing processes. Here's a summary of the current approaches and benefits:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "### Approaches"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1. **Machine Learning Models**: AI systems are trained on historical data, including past test results, code changes, and defect rates, to predict which tests are most likely to detect faults in new or modified code. Techniques such as regression, classification, and even deep learning models are employed."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2. **Natural Language Processing (NLP)**: Used to analyze requirements and change logs to identify relevant tests. This approach helps in understanding the context and semantics of changes, thereby selecting tests that are more likely to be affected by those changes."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3. **Test Case Embeddings**: Similar to word embeddings in NLP, test cases are represented in a high-dimensional space, where their similarities to code changes or features can be measured. This helps in identifying which tests are most relevant to the current changes."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4. **Prioritization Algorithms**: These algorithms rank tests based on various factors, such as historical failure rates, test execution time, code coverage, and impact of recent code changes. The aim is to run the most critical tests early in the cycle."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5. **Feedback Loops**: Incorporating continuous feedback from test outcomes to refine and adjust the models and algorithms used for test selection and prioritization, ensuring they become more accurate over time."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "### Benefits"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1. **Reduced Test Times**: By prioritizing and selecting the most relevant tests, AI can significantly reduce the overall time required for testing, enabling faster release cycles."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2. **Improved Test Coverage**: AI techniques can uncover gaps in test coverage by analyzing code paths and identifying untested or under-tested areas, leading to better software quality."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3. **Cost Efficiency**: Reducing the amount of testing without compromising on quality leads to lower computing resources usage and human effort, thereby cutting costs."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4. **Early Defect Detection**: Prioritizing tests that are more likely to fail can lead to early detection of defects, which is generally less costly to fix and leads to more stable releases."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5. **Adaptability**: AI models can adapt to changes in the software and testing environments, ensuring that the test prioritization and selection processes remain efficient over time."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "6. **Risk Management**: By focusing on high-risk areas based on code changes and historical defect data, AI helps in better managing the risks associated with software releases."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "These AI-driven approaches represent a significant shift from manual and static methods to dynamic, efficient, and intelligent test management strategies, aiming at improving software quality, reducing costs, and accelerating development cycles."
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "regarding-reflecting-on-how-you-or-your-team-currently-execute-this-task",
      children: ["Regarding ", createVNode(_components.strong, {
        children: "Reflecting on How You or Your Team Currently Execute This Task"
      })]
    }), "\n", createVNode(_components.h4, {
      id: "background-and-available-information-of-my-current-project",
      children: "Background and Available Information of My Current Project"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The current project has tight delivery timelines, with significant pressure on task delivery and a risk of scope creep."
      }), "\n", createVNode(_components.li, {
        children: "Existing project SOPs require compatibility with different browsers, resolutions, and devices."
      }), "\n", createVNode(_components.li, {
        children: "The project is an e-commerce online shopping website, primarily for the web platform."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "the-necessity-of-test-priority-sorting",
      children: "The Necessity of Test Priority Sorting"
    }), "\n", createVNode(_components.p, {
      children: "It is necessary. From the beginning of the project, based on the background and SOP, an initial testing strategy was developed. It included test priorities: business functionality testing first, followed by compatibility testing, then performance and network testing, and finally usability and ease-of-use testing."
    }), "\n", createVNode(_components.h4, {
      id: "factors-relied-upon-for-choosingprioritizing-tests",
      children: "Factors Relied Upon for Choosing/Prioritizing Tests"
    }), "\n", createVNode(_components.p, {
      children: "Mostly quantitative, with some qualitative aspects"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Project team background"
      }), "\n", createVNode(_components.li, {
        children: "Project delivery pressure"
      }), "\n", createVNode(_components.li, {
        children: "Project SOPs"
      }), "\n", createVNode(_components.li, {
        children: "Team personnel configuration, more about the ratio of developers to testers"
      }), "\n", createVNode(_components.li, {
        children: "Results of negotiations and communications with the team"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "decision-making-in-the-absence-of-data",
      children: "Decision-Making in the Absence of Data"
    }), "\n", createVNode(_components.p, {
      children: "Refer to useful information from past projects, negotiate and confirm with the team, and then make a decision."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Here, I must mention that the testing strategy and priorities are always iterative and updated, not set in stone. They can be adjusted based on the project situation and more information obtained."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "regarding-the-value-of-test-priority-selection-to-ai-models",
      children: ["Regarding ", createVNode(_components.strong, {
        children: "The Value of Test Priority Selection to AI Models"
      })]
    }), "\n", createVNode(_components.p, {
      children: "There would definitely be value. AI could provide more reasonable and lower-risk outcomes based on known qualitative and quantitative historical data within the model."
    }), "\n", createVNode(_components.h3, {
      id: "regarding-the-risks-of-test-priority-selection-to-ai-models",
      children: ["Regarding ", createVNode(_components.strong, {
        children: "The Risks of Test Priority Selection to AI Models"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Risks are inevitable, mainly because of my concerns about data privacy and security with AI model tools. I would not transmit 100% of the project’s context and known information to AI. Therefore, the results generated by AI without full information might significantly differ from the team’s expectations. If the project is executed based on the outcomes provided by the AI model, it might not be possible to complete the project’s delivery on time."
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

const url = "src/blog/en/Event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
