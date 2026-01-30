import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "30 Days of AI in Testing Challenge: Day 23: Assess AI effectiveness in visual testing and discuss the advantages",
  "description": "This blog post is about Day 23 of the 30-Day AI Testing Challenge, focusing on assessing the effectiveness of Artificial Intelligence in visual testing and discussing its advantages. The article may include the author's practical application experience of using AI for visual testing, as well as thoughts and evaluations on the advantages and challenges AI brings to visual testing. By sharing evaluations of the application effects and advantages of AI in visual testing, readers will gain insight into the author's understanding and perspective on this emerging testing method, as well as a forecast for the application prospects in the visual testing field. This series of activities hopes to provide testing professionals with an opportunity to understand and explore the application effects and advantages of AI in visual testing, and to promote deeper research and application of AI in the testing field within the industry.",
  "date": "2024-03-26T12:06:44.000Z",
  "author": "nao.deng",
  "tags": ["AI in Testing", "30 Days of AI in Testing"],
  "categories": ["Testing Challenge"],
  "series": ["30 Days of AI in Testing Challenge"],
  "cover": "./30-days-of-ai-in-testing-day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages",
    "text": "Day 23: Assess AI effectiveness in visual testing and discuss the advantages"
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
    "slug": "my-day-23-task",
    "text": "My Day 23 Task"
  }, {
    "depth": 3,
    "slug": "1-about-choosing-the-tool-and-checking-its-features",
    "text": "1. About Choosing the Tool and Checking Its Features"
  }, {
    "depth": 3,
    "slug": "2-about-testing-the-statement",
    "text": "2. About Testing the Statement"
  }, {
    "depth": 4,
    "slug": "introduction-to-using-percy",
    "text": "Introduction to Using Percy"
  }, {
    "depth": 4,
    "slug": "starting-the-percy-trial",
    "text": "Starting the Percy Trial"
  }, {
    "depth": 4,
    "slug": "test-scenario-1-multiple-visual-difference-recognition-on-a-page",
    "text": "Test Scenario 1: Multiple Visual Difference Recognition on a Page"
  }, {
    "depth": 4,
    "slug": "test-scenario-2-small-icon-visual-difference-recognition",
    "text": "Test Scenario 2: Small Icon Visual Difference Recognition"
  }, {
    "depth": 3,
    "slug": "3-about-considering-failure-scenarios",
    "text": "3. About Considering Failure Scenarios"
  }, {
    "depth": 3,
    "slug": "4-about-the-potential-advantages-and-risks-of-using-ai-for-visual-testing",
    "text": "4. About the Potential Advantages and Risks of Using AI for Visual Testing"
  }, {
    "depth": 3,
    "slug": "5-about-the-likelihood-of-adopting-ai-driven-visual-testing-tools",
    "text": "5. About the Likelihood of Adopting AI-driven Visual Testing Tools"
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
    children: [createVNode(_components.h2, {
      id: "day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages",
      children: "Day 23: Assess AI effectiveness in visual testing and discuss the advantages"
    }), "\n", createVNode(_components.p, {
      children: "Welcome to Day 23! Today, we’ll assess the effectiveness of AI in visual testing compared to non-AI visual testing methods. The use of AI to detect visual anomalies within graphical user interfaces (GUIs) has great promise. So, let’s explore the potential advantages and pitfalls of adopting an AI-assisted visual testing approach."
    }), "\n", createVNode(_components.h3, {
      id: "task-steps",
      children: "Task Steps"
    }), "\n", createVNode(_components.p, {
      children: "Let’s begin this investigation by selecting one of two options based on your current experience and access to visual testing tools:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Option 1 - For those actively using or looking to get hands-on with visual testing tools"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Select a tool and examine the capabilities"
            }), ": Select a tool or platform that boasts AI-powered visual testing capabilities. Review the documentation or marketing materials to understand the AI approach and their anomaly detection claims."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Test the claims"
            }), ": Design a time-boxed test (e.g., 30 minutes) to evaluate one of the tool’s AI-powered visual testing capabilities. For instance, if it claims to detect layout changes, intentionally modify the GUI and see how well the tool identifies the anomaly."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Consider failure scenarios"
            }), ": Assuming the tool performed well in your test, construct a scenario where you think it might fail to detect a visual anomaly."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Share your findings"
            }), ": In reply to this post, share your insights on AI-powered visual testing. Consider including\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Which option you selected"
              }), "\n", createVNode(_components.li, {
                children: "Which tool you selected and the AI visual testing capabilities it claimed"
              }), "\n", createVNode(_components.li, {
                children: "Your findings from your timeboxed experiment"
              }), "\n", createVNode(_components.li, {
                children: "The potential advantages and risks of using AI for visual testing."
              }), "\n", createVNode(_components.li, {
                children: "How likely you are to continue using the AI-powered visual testing tool."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Option 2 - For those new to visual testing or without access to tools."
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Research AI visual testing"
            }), ": Find resources (research papers, blog posts, documentation, video demos) discussing how AI is used for visual testing and GUI anomaly detection."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Critique the AI approach"
            }), ": Try to identify the core benefits AI brings to visual testing and the techniques used by AI systems to analyse GUI images/screenshots and identify visual anomalies. Then hypothesise scenarios where an AI system might struggle to detect a visual anomaly."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Assess if AI visual testing is for you"
            }), ": Consider whether an AI-powered visual testing solution would benefit your team based on the challenges you currently face."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Share your findings"
            }), ": In reply to this post, share your insights on AI-powered visual testing. Consider including\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Which option you selected,"
              }), "\n", createVNode(_components.li, {
                children: "A summary of what problems AI-powered visual testing claims to solve and how"
              }), "\n", createVNode(_components.li, {
                children: "The potential advantages and risks of adopting an AI visual testing approach"
              }), "\n", createVNode(_components.li, {
                children: "How likely you are to adopt AI-powered visual testing tools."
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
          children: "Deepen your knowledge"
        }), ": Maintaining robust visual testing as UIs evolve can be challenging. This task helps you understand how AI could potentially streamline this process."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Develop a critical mindset"
        }), ": When evaluating new testing tools or approaches, it’s crucial to think critically about their capabilities, limitations, and impacts on your team. Today’s task hones that skill."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "task-link",
      children: "Task Link"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://club.ministryoftesting.com/t/day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages/75363",
        children: "https://club.ministryoftesting.com/t/day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages/75363"
      })
    }), "\n", createVNode(_components.h2, {
      id: "my-day-23-task",
      children: "My Day 23 Task"
    }), "\n", createVNode(_components.p, {
      children: ["For today’s task, based on the goal of continuous learning of AI testing tools, I’ve chosen ", createVNode(_components.strong, {
        children: "Option 2"
      }), " to trial a new AI visual testing tool."]
    }), "\n", createVNode(_components.h3, {
      id: "1-about-choosing-the-tool-and-checking-its-features",
      children: ["1. ", createVNode(_components.strong, {
        children: "About Choosing the Tool and Checking Its Features"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Having previously tried Applitools Eyes in an earlier challenge, this time I opted for a different AI visual testing tool, ", createVNode(_components.a, {
        href: "https://www.browserstack.com/docs/percy/overview/visual-testing-basics",
        children: "Percy"
      }), ", to learn about its capabilities."]
    }), "\n", createVNode(_components.p, {
      children: "Percy’s official introduction highlights:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Eliminating the risk of shipping visual errors by getting visual coverage of your entire UI and confidently releasing every version."
      }), "\n", createVNode(_components.li, {
        children: "Rapidly performing comprehensive visual reviews by running visual tests with every commit and getting fast, deterministic results to efficiently debug."
      }), "\n", createVNode(_components.li, {
        children: "Cross-browser and platform rendering: Percy renders the same pages across different browsers and platforms (desktop and mobile), highlighting visual differences specific to each browser and platform. Percy captures DOM snapshots and resources, renders them, and compares them to previously generated snapshots to detect visual changes."
      }), "\n", createVNode(_components.li, {
        children: "Responsive differences: Percy highlights visual differences by rendering pages at configurable responsive widths and grouping visual changes while ignoring noise, facilitating faster, more accurate visual reviews."
      }), "\n", createVNode(_components.li, {
        children: "Snapshot stability: Percy’s proprietary snapshot stabilization technology automatically freezes animations and other dynamic elements to minimize false positives. Percy ensures the consistency and determinacy of page rendering."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["However, initially, there seemed to be no mention of AI in the promotion. Soon enough, I found another official promotional piece about Percy: ", createVNode(_components.a, {
        href: "https://www.browserstack.com/blog/product-launch-app-percy/",
        children: "Introducing App Percy: An AI-driven Automated Visual Testing Platform for Native Applications"
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "AI-driven visual testing"
        }), ": With App Percy, you can automatically detect visual defects across devices and screen sizes with every commit, ensuring your UI meets every customer’s expectations from day one. App Percy’s lightning-fast infrastructure captures screenshots from selected devices with every code push and compares them to the baseline to discover visual defects. The key here is our underlying computer vision-driven algorithm — the Percy Visual Engine — which reduces false positives, such as those caused by dynamic elements, and highlights only those visual deviations discernible to the human eye."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Percy Visual Engine"
        }), ": The powerful AI algorithms of App Percy detect changes users truly care about. It aids in reducing noise and simplifying image comparisons by detecting page shifts, handling anti-aliasing noise, stabilizing intelligent texts, and ignoring regions. Learn more about the Percy Visual Engine."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-about-testing-the-statement",
      children: ["2. ", createVNode(_components.strong, {
        children: "About Testing the Statement"
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Since Percy is a commercial tool, I registered for a trial account."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "introduction-to-using-percy",
      children: "Introduction to Using Percy"
    }), "\n", createVNode(_components.p, {
      children: "After registering and email verification, I could start a trial with a new project, similar to the steps with Applitools Eyes."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "New project setup: options for web or mobile app projects and choice of code management tools like git or GitHub."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/0KPcbd.png",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Selecting code writing tool."
      }), "\n", createVNode(_components.li, {
        children: "Obtaining Percy token."
      }), "\n", createVNode(_components.li, {
        children: "Setting up Percy local environment."
      }), "\n", createVNode(_components.li, {
        children: "Writing tests."
      }), "\n", createVNode(_components.li, {
        children: "Running tests."
      }), "\n", createVNode(_components.li, {
        children: "Viewing reports on the Percy platform."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/sp8nHu.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "starting-the-percy-trial",
      children: "Starting the Percy Trial"
    }), "\n", createVNode(_components.p, {
      children: "This time, I chose Percy’s cypress sdk for a demo project trial with the following steps:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Node project initialization in a local folder via command line."
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " init"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cypress project initialization."
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cypress"
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
        children: "Installing Percy dependencies."
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --save-dev"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @percy/cli"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @percy/cypress"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Configuring Percy token."
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " PERCY_TOKEN"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"<your token here>\""
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Writing demo test code: visual testing my blog’s homepage."
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '@percy/cypress'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
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
            children: "'Integration test with visual testing'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Loads the homepage'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
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
            children: "      // Load the page or perform any other interactions with the app."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      cy."
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
            children: "\"http://localhost:1313/\""
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
            children: "      cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "percySnapshot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Login page responsive test'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { widths: ["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "768"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "992"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] });"
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
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Running the test."
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
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " percy"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " exec"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cypress"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Viewing command line results."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/HvIxIz.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "After the test runs successfully, the command line displays a link to the Percy platform for detailed visual verification results."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/tmz854.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "test-scenario-1-multiple-visual-difference-recognition-on-a-page",
      children: "Test Scenario 1: Multiple Visual Difference Recognition on a Page"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Test preparation: Changes to the top content of my blog’s homepage."
      }), "\n", createVNode(_components.li, {
        children: "Rerunning the demo test."
      }), "\n", createVNode(_components.li, {
        children: "Viewing Percy recognition results."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/exwX2h.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "test-scenario-2-small-icon-visual-difference-recognition",
      children: "Test Scenario 2: Small Icon Visual Difference Recognition"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Test preparation: Removing an external link icon from my blog’s homepage menu."
      }), "\n", createVNode(_components.li, {
        children: "Rerunning the demo test."
      }), "\n", createVNode(_components.li, {
        children: "Viewing Percy recognition results."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/8FN43p.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/Ma0RMp.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-about-considering-failure-scenarios",
      children: ["3. ", createVNode(_components.strong, {
        children: "About Considering Failure Scenarios"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Continuous recognition verification on multiple page changes was successful, with no failure scenarios encountered yet. Potential failure scenarios might include subtle color differences and minor variations in font styles."
    }), "\n", createVNode(_components.h3, {
      id: "4-about-the-potential-advantages-and-risks-of-using-ai-for-visual-testing",
      children: ["4. ", createVNode(_components.strong, {
        children: "About the Potential Advantages and Risks of Using AI for Visual Testing"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Potential Advantages: A professional AI visual testing tool can significantly improve project visual testing efficiency and ensure quality."
      }), "\n", createVNode(_components.li, {
        children: "Potential Risks and Limitations: Using an AI tool, especially for an unreleased product, comes with risks associated with data privacy, security, and result bias uncertainty. Another concern is Percy’s use of a token to upload local test data to view visual test reports on the Percy platform, posing a potential data privacy risk."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "5-about-the-likelihood-of-adopting-ai-driven-visual-testing-tools",
      children: ["5. ", createVNode(_components.strong, {
        children: "About the Likelihood of Adopting AI-driven Visual Testing Tools"
      })]
    }), "\n", createVNode(_components.p, {
      children: "It’s currently unlikely for the project I’m working on to adopt AI-driven visual testing tools, but I’m open to trying and learning about new AI-driven visual testing tools for personal projects."
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

const url = "src/blog/en/Event/30-days-of-ai-in-testing-day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
