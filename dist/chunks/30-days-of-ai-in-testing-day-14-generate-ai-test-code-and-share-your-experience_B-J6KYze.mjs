import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "30 Days of AI in Testing Challenge: Day 14: Generate AI test code and share your experience",
  "description": "This blog post is about the 14th day of the 30-Day AI Testing Challenge event, aimed at generating AI test code and sharing experiences. The post may include the author's process of using AI tools to generate test code, the choice of tools, the quality assessment of the generated code, and the application experience in actual testing. By sharing the process and experience of generating AI test code, readers will learn about examples of AI application in the field of testing, as well as the author's views on the effectiveness and reliability of AI-generated code. This series of events is expected to provide an opportunity for testing professionals to understand and try using AI testing tools and to share their experiences and insights.",
  "date": "2024-03-15T02:06:44.000Z",
  "author": "nao.deng",
  "tags": ["AI in Testing", "30 Days of AI in Testing"],
  "categories": ["Testing Challenge"],
  "series": ["30 Days of AI in Testing Challenge"],
  "cover": "./30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "day-14-generate-ai-test-code-and-share-your-experience",
    "text": "Day 14: Generate AI test code and share your experience"
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
    "slug": "my-day-14-task",
    "text": "My Day 14 Task"
  }, {
    "depth": 3,
    "slug": "1-about-choosing-a-tool",
    "text": "1. About Choosing a Tool"
  }, {
    "depth": 3,
    "slug": "2-about-creating-some-test-code",
    "text": "2. About Creating Some Test Code"
  }, {
    "depth": 4,
    "slug": "trying-add-tests-to-this-request",
    "text": "Trying Add tests to this request"
  }, {
    "depth": 4,
    "slug": "trying-test-for-response",
    "text": "Trying Test for response"
  }, {
    "depth": 4,
    "slug": "trying-visualize-response",
    "text": "Trying Visualize response"
  }, {
    "depth": 4,
    "slug": "using-save-a-field-from-response",
    "text": "Using Save a field from response"
  }, {
    "depth": 4,
    "slug": "trying-add-documentation",
    "text": "Trying Add documentation"
  }, {
    "depth": 3,
    "slug": "3-about-sharing-my-thoughts",
    "text": "3. About Sharing My Thoughts"
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
      id: "day-14-generate-ai-test-code-and-share-your-experience",
      children: "Day 14: Generate AI test code and share your experience"
    }), "\n", createVNode(_components.p, {
      children: "Nearly at the halfway mark! For Day 14, we want to focus on how AI is being used to build automation. In recent times, there has been a growth in automation tools using AI to simplify the creation or improvement of test code or to (nearly) eliminate the need for knowledge of coding all together (so called Low-Code or No-Code tools). They represent a potentially different way of building automation that could be faster and more robust."
    }), "\n", createVNode(_components.p, {
      children: "For today’s task, let’s focus on building test code for functional testing… we have other challenges coming up that focus on AI’s impact on other types of testing and topics such as self-healing tests."
    }), "\n", createVNode(_components.h3, {
      id: "task-steps",
      children: "Task Steps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Select a tool"
        }), ": Early in the challenge, we created lists of tools and their features, so review those posts and find a tool that interests you. Here are some tips:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["If you are not comfortable with building automation, pick a No-Code or Low-Code tool and try creating automation with it. Some examples might be:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: createVNode(_components.a, {
                  href: "https://www.testim.io/fast-authoring/",
                  children: "Testim"
                })
              }), "\n", createVNode(_components.li, {
                children: createVNode(_components.a, {
                  href: "https://katalon.com/web-testing",
                  children: "Kalton"
                })
              }), "\n", createVNode(_components.li, {
                children: createVNode(_components.a, {
                  href: "https://blog.postman.com/introducing-postbot-postmans-new-ai-assistant/",
                  children: "Postman AI Assistant"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: "If are experienced with building automation, why not try using a code assistant such as CoPilot or Cody AI to assist you in writing some automation."
          }), "\n", createVNode(_components.li, {
            children: "If you have already evaluated a functional automation tool earlier in the challenge, why not pick a different tool and compare the two?"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Create some test code"
        }), ": Set a timebox (such as 20-30 mins) and try to build a small example of automation using your tool of choice:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Not sure what to use? Try one of these demo applications:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["Restful Booker ", createVNode(_components.a, {
                  href: "https://automationintesting.online/",
                  children: "https://automationintesting.online"
                })]
              }), "\n", createVNode(_components.li, {
                children: ["Evil Tester’s ", createVNode(_components.a, {
                  href: "https://testpages.eviltester.com/styled/index.html",
                  children: "Web Testing and Automation Practice Application Pages"
                })]
              }), "\n", createVNode(_components.li, {
                children: ["Applitools ", createVNode(_components.a, {
                  href: "https://demo.applitools.com/app.html",
                  children: "ACME demo app"
                })]
              }), "\n", createVNode(_components.li, {
                children: ["Swag Labs ", createVNode(_components.a, {
                  href: "https://www.saucedemo.com/",
                  children: "https://www.saucedemo.com"
                })]
              }), "\n", createVNode(_components.li, {
                children: ["Petstore ", createVNode(_components.a, {
                  href: "https://petstore.octoperf.com/",
                  children: "https://petstore.octoperf.com"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Share your thoughts"
        }), ": Reply to this post and share your findings and insights such as:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "What level of experience you have with functional automation."
          }), "\n", createVNode(_components.li, {
            children: "Which tool you used and the automation you were trying to create."
          }), "\n", createVNode(_components.li, {
            children: "How you found working with the tool to build and update your automation."
          }), "\n", createVNode(_components.li, {
            children: "Did the code work the first time, or did you need further refinement?"
          }), "\n", createVNode(_components.li, {
            children: "Did you find any limitations or frustrations with the tool?"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-take-part",
      children: "Why Take Part"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Better understand the direction of AI for automation"
        }), ": The use of AI in functional automation is expanding, and taking part in this task allows you to gain exposure to these new ways of building automation and their limitations. Sharing your experiences with the community makes us all smarter."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "task-link",
      children: "Task Link"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://club.ministryoftesting.com/t/day-14-generate-ai-test-code-and-share-your-experience/75133?cf_id=MaBzyqDC5xq",
        children: "https://club.ministryoftesting.com/t/day-14-generate-ai-test-code-and-share-your-experience/75133?cf_id=MaBzyqDC5xq"
      })
    }), "\n", createVNode(_components.h2, {
      id: "my-day-14-task",
      children: "My Day 14 Task"
    }), "\n", createVNode(_components.h3, {
      id: "1-about-choosing-a-tool",
      children: ["1. About ", createVNode(_components.strong, {
        children: "Choosing a Tool"
      })]
    }), "\n", createVNode(_components.p, {
      children: "This time I chose Postman AI Assistant because I am currently implementing API testing and API automation regression testing in the project. I hope to gain some practical experience in using AI to enhance API testing efficiency that can be applied from the trial process of the Postman AI Assistant tool."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "About the use of the Postman tool: Since Postman announced in May 2023 that it would gradually phase out the Scratch Pad model with offline capabilities, most functions will move to the cloud, and you must log in to use all the features of Postman. Our company has been notified to stop using Postman and migrate to other tools. Since then, I have been researching and learning to use Bruno, an open-source tool that can replace Postman for API testing and API automation regression testing. Recently, I have also implemented Bruno+github in the project team for interface document management and interface automation testing, and worked with developers to manage and test APIs using Bruno+github."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Postman AI Assistant’s official introduction:"
    }), "\n", createVNode(_components.p, {
      children: "Postbot, an AI assistant for API workflows, will be available in an early access program on May 22, 2023."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "📅 Availability: Early access program starts on May 22, 2023."
      }), "\n", createVNode(_components.li, {
        children: "🪄✨ Features: AI-driven autocomplete, test case design, documentation writing, test suite building, data report summarization, API call debugging."
      }), "\n", createVNode(_components.li, {
        children: "💳 Pricing: Available in Basic and Professional plans at $9/user/month starting October 15, 2023."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "I downloaded Postman and tried Postbot with commonly used demo interfaces:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/n7YK4F.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-about-creating-some-test-code",
      children: ["2. About ", createVNode(_components.strong, {
        children: "Creating Some Test Code"
      })]
    }), "\n", createVNode(_components.p, {
      children: "After adding the demo interface request in the postman interface, click Postbot on the bottom menu bar to start the Postman AI Assistant. A suggestion command menu for the request appears in the Postbot window, currently with the following recommended commands:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Add tests to this request"
      }), "\n", createVNode(_components.li, {
        children: "Test for response"
      }), "\n", createVNode(_components.li, {
        children: "Visualize response"
      }), "\n", createVNode(_components.li, {
        children: "Save a field from response"
      }), "\n", createVNode(_components.li, {
        children: "Add documentation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Next, I will try the functions suggested by Postbot one by one."
    }), "\n", createVNode(_components.h4, {
      id: "trying-add-tests-to-this-request",
      children: ["Trying ", createVNode(_components.strong, {
        children: "Add tests to this request"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Click ", createVNode(_components.strong, {
        children: "Add tests to this request"
      }), " in the Postbot interface"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/PDPH8I.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "If you have added a request but have not clicked send to run that request,\nPostbot will prompt “I’ll need a response to perform this action,” and Postbot will also provide a menu to quickly run the request and output the response; after clicking the “Send request and continue” button, Postman will automatically run the request and write the test script, as shown below:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ZGYSwi.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "Postbot’s test script for the demo request is as follows:"
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
            children: "pm.test(\"Response status code is 201\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.response.to.have.status(201);"
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
            children: "pm.test(\"Response has the required fields - title, body, userId, and id\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    const responseData = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.title).to.exist;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.body).to.exist;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.userId).to.exist;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.id).to.exist;"
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
            children: "pm.test(\"Title is a non-empty string\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    const responseData = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData).to.be.an('object');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.title).to.be.a('string').and.to.have.lengthOf.at.least(1, \"Title should not be empty\");"
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
            children: "pm.test(\"Body is a non-empty string\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    const responseData = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData).to.be.an('object');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.body).to.be.a('string').and.to.have.lengthOf.at.least(1, \"Body should not be empty\");"
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
            children: "pm.test(\"UserId is a positive integer\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    const responseData = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.userId).to.be.a('number');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.userId).to.be.above(0, \"UserId should be a positive integer\");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The written test covers the interface response’s status judgment and body field type judgment and can run through."
    }), "\n", createVNode(_components.p, {
      children: "At this point, I noticed that two new recommended commands were added to Postbot’s suggestion menu"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Add more tests"
      }), "\n", createVNode(_components.li, {
        children: "Fix test"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "I first tried running “Add more tests,” and then Postbot added a few more tests"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/VDUws3.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "Interestingly, one of the tests failed, so I clicked “Fix test” to try to let Postbot fix this wrong test"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/33nkUH.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "However, Postbot did not fix this wrong test case successfully"
    }), "\n", createVNode(_components.p, {
      children: "This wrong test case is as follows:"
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
            children: "pm.test(\"UserId matches the ID of the user who created the post\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    const requestUserId = pm.request.json().userId;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    const responseData = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.userId).to.equal(requestUserId);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "I can only manually fix it, and the corrected script is as follows"
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
            children: "pm.test(\"UserId matches the ID of the user who created the post\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    const requestUserId = JSON"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    .parse(pm.request.body.raw).userId;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    const responseData = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    pm.expect(responseData.userId).to.equal(requestUserId);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The script was wrong because the request body was in raw format and needed to be parsed into a JSON object before being read."
    }), "\n", createVNode(_components.h4, {
      id: "trying-test-for-response",
      children: ["Trying ", createVNode(_components.strong, {
        children: "Test for response"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["After clicking ", createVNode(_components.strong, {
        children: "Test for response"
      }), " in the Postbot interface, Postbot will update the test cases generated by ", createVNode(_components.strong, {
        children: "Add tests to this request"
      }), " as shown below:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/fNrz10.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "By examining the results of the updated tests, I found that most of the updated cases could not run through."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/liVBHj.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: ["Then I tried to fix the wrong cases through Postbot’s “Fix test”, most of the cases could run through, but there were still errors in the test cases generated by the ", createVNode(_components.strong, {
        children: "Add tests to this request"
      }), " command."]
    }), "\n", createVNode(_components.p, {
      children: ["In addition, clicking on Postbot’s “Fix test” to fix the cases generated by the ", createVNode(_components.strong, {
        children: "Test for response"
      }), " command will update most of the cases to the test cases generated by the ", createVNode(_components.strong, {
        children: "Add tests to this request"
      }), " command"]
    }), "\n", createVNode(_components.p, {
      children: ["I wonder where the difference between the ", createVNode(_components.strong, {
        children: "Add tests to this request"
      }), " and ", createVNode(_components.strong, {
        children: "Test for response"
      }), " commands is?"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/oq0mEw.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "trying-visualize-response",
      children: ["Trying ", createVNode(_components.strong, {
        children: "Visualize response"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["After clicking ", createVNode(_components.strong, {
        children: "Visualize response"
      }), " in the Postbot interface, you need to select the generated format, which can be a table/line chart/bar chart. Here I choose a table, and then Postbot will display the instantiated table style of the response on the result page after the request."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3DjMD6.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "This table instantiation of the response is achieved by generating a script under tests, and the specific script is as follows:"
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
            children: "var template = `"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<style type=\"text/css\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    .tftable {font-size:14px;color:#333333;width:100%;border-width: 1px;border-color: #87ceeb;border-collapse: collapse;}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    .tftable th {font-size:18px;background-color:#87ceeb;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;text-align:left;}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    .tftable tr {background-color:#ffffff;}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    .tftable td {font-size:14px;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    .tftable tr:hover {background-color:#e0ffff;}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "</style>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<table class=\"tftable\" border=\"1\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    <tr>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        <th>Title</th>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        <th>Body</th>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        <th>User ID</th>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        <th>ID</th>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    </tr>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    <tr>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        <td>&#123;&#123;response.title&#125;&#125;</td>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        <td>&#123;&#123;response.body&#125;&#125;</td>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        <td>&#123;&#123;response.userId&#125;&#125;</td>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        <td>&#123;&#123;response.id&#125;&#125;</td>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    </tr>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "</table>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "`;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "function constructVisualizerPayload() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    return {response: pm.response.json()}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.visualizer.set(template, constructVisualizerPayload());"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["I haven’t found where the ", createVNode(_components.strong, {
        children: "Visualize response"
      }), " feature helps API testing yet."]
    }), "\n", createVNode(_components.h4, {
      id: "using-save-a-field-from-response",
      children: ["Using ", createVNode(_components.strong, {
        children: "Save a field from response"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["After clicking ", createVNode(_components.strong, {
        children: "Save a field from response"
      }), " in the Postbot interface, Postbot will generate a test script to store the id from the response as an environment variable, as follows:"]
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
            children: "// Stores the postId in an environment or global variable"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "var postId = pm.response.json().id;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.globals.set(\"postId\", postId);"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Then I clicked Postbot’s ", createVNode(_components.strong, {
        children: "Save a field from response"
      }), " command again and found that Postbot still generated a test script to store the id from the response as an environment variable, instead of generating a test script to store other fields from the response as environment variables."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/R7gwUZ.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "trying-add-documentation",
      children: ["Trying ", createVNode(_components.strong, {
        children: "Add documentation"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["After clicking the ", createVNode(_components.strong, {
        children: "Add documentation"
      }), " command in the Postbot interface, Postbot will generate a very detailed interface document on the right side of the postman interface, as shown below."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/Amwb4n.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "The interface document describes very detailed interface-related information, such as interface request information, request field definitions, response examples, etc."
    }), "\n", createVNode(_components.h3, {
      id: "3-about-sharing-my-thoughts",
      children: ["3. About ", createVNode(_components.strong, {
        children: "Sharing My Thoughts"
      })]
    }), "\n", createVNode(_components.p, {
      children: "After trying the AI Assistant Postbot tool provided by postman, the functions provided by Postbot for adding test cases for request and response are quite convenient, and can quickly generate mostly usable interface response verification test scripts with high coverage. Although there are errors in the generated test scripts that need to be manually fixed, Postbot can quickly generate test scripts to improve the efficiency of interface testing."
    }), "\n", createVNode(_components.p, {
      children: "In addition, Postbot’s interface documentation generation is also quite useful. After developers add the request in postman, Postbot can quickly generate relatively detailed interface documentation, which can improve R&D efficiency and interface document quality to some extent."
    }), "\n", createVNode(_components.p, {
      children: "However, Postbot currently does not seem to support custom commands. I want to try to output different types of test cases for the demo interface through Postbot, such as empty request body interface test cases, illegal request body interface test cases, etc., but Postbot cannot give the correct response."
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

const url = "src/blog/en/Event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
