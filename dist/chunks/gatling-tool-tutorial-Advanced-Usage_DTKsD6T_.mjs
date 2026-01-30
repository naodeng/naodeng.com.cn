import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Gatling Performance Testing Tutorial advanced usage: Test report analysis and Performance Scenario Setting",
  "description": "This article introduces the advanced usage of the performance testing tool gatling: analysis of performance test reports, introduction of different types of test report reports, and configuration of performance test scenarios under different business types.",
  "date": "2023-10-26T10:07:44.000Z",
  "author": "nao.deng",
  "tags": ["Gatling", "Performance Testing"],
  "series": ["Gatling Performance Testing Tutorial"],
  "cover": "./gatling-tool-tutorial-Advanced-Usage-cover.png"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "test-report-analysis",
    "text": "Test report analysis"
  }, {
    "depth": 4,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 5,
    "slug": "overall-view",
    "text": "Overall view"
  }, {
    "depth": 5,
    "slug": "response-time-ranges",
    "text": "Response time ranges"
  }, {
    "depth": 5,
    "slug": "summary",
    "text": "Summary"
  }, {
    "depth": 5,
    "slug": "active-users-over-time",
    "text": "Active users over time"
  }, {
    "depth": 5,
    "slug": "response-time-distribution",
    "text": "Response time distribution"
  }, {
    "depth": 5,
    "slug": "response-time-percentiles-over-time",
    "text": "Response time percentiles over time"
  }, {
    "depth": 5,
    "slug": "requests-per-second-over-time",
    "text": "Requests per second over time"
  }, {
    "depth": 5,
    "slug": "response-per-second-over-time",
    "text": "Response per second over time"
  }, {
    "depth": 4,
    "slug": "single-request-analysis-report",
    "text": "Single request analysis report"
  }, {
    "depth": 3,
    "slug": "performance-scenario-setting",
    "text": "Performance Scenario Setting"
  }, {
    "depth": 4,
    "slug": "injection",
    "text": "Injection"
  }, {
    "depth": 5,
    "slug": "what-is-injection",
    "text": "What is Injection"
  }, {
    "depth": 5,
    "slug": "common-injection-scenario",
    "text": "Common Injection Scenario"
  }, {
    "depth": 6,
    "slug": "open-model-scenario",
    "text": "Open Model Scenario"
  }, {
    "depth": 6,
    "slug": "closed-model-scenario",
    "text": "Closed Model Scenario"
  }, {
    "depth": 5,
    "slug": "meta-dsl-scenario",
    "text": "Meta DSL Scenario"
  }, {
    "depth": 5,
    "slug": "concurrent-scenario",
    "text": "Concurrent Scenario"
  }, {
    "depth": 5,
    "slug": "other-scenarios",
    "text": "Other Scenarios"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "test-report-analysis",
      children: "Test report analysis"
    }), "\n", createVNode(_components.h4, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.h5, {
      id: "overall-view",
      children: "Overall view"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Open the detailed html report after the performance test execution is finished;\nYour report can be analyzed by metrics, active users and requests/responses over time, as well as distributions"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report1.png",
        alt: "readme-test-report1"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The name of Simulation is displayed in the center of the page in the header"
      }), "\n", createVNode(_components.li, {
        children: "The list on the left side shows a menu of different types of reports, which can be switched by clicking on them."
      }), "\n", createVNode(_components.li, {
        children: "The middle of the page shows an overview of the performance test report, including: total number of requests, total number of successful requests, total number of unsuccessful requests, shortest response time, longest response time, average response time, throughput, standard deviation, percentage distribution, etc. It also shows the version of gatling and the time and duration of this report. The version of gatling and the time and duration of this report run are also displayed."
      }), "\n", createVNode(_components.li, {
        children: "The Global menu points to aggregate statistics."
      }), "\n", createVNode(_components.li, {
        children: "The Details menu points to statistics for each request type."
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "response-time-ranges",
      children: "Response time ranges"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report2.png",
        alt: "readme-test-report2"
      })
    }), "\n", createVNode(_components.p, {
      children: "This chart shows the distribution of response times within the standard range\nThe list on the left shows all requests and the distribution of request response times, with the red color representing failed requests.\nOn the right, Number of requests represents the number of concurrent users, as well as the number of requests for each request and their success and failure status."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "These ranges can be configured in the gatling.conf file"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "summary",
      children: "Summary"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report3.png",
        alt: "readme-test-report3"
      })
    }), "\n", createVNode(_components.p, {
      children: "This chart shows some standard statistics such as minimum, maximum, average, standard deviation and percentile for global and per request.\nstats shows the specific success and failure of all requests OK for success, KO for failure, and 99th pct for 99th percentile response time for total requests for this API."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "These percentiles can be configured in the gatling.conf file."
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "active-users-over-time",
      children: "Active users over time"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report4.png",
        alt: "readme-test-report4"
      })
    }), "\n", createVNode(_components.p, {
      children: "This chart shows that the number of active users refers to the number of users who are making requests during the test time period. At the beginning of the test, the number of active users is 0. When users start sending requests, the number of active users starts to increase. When a user completes a request, the number of active users begins to decrease. The maximum number of active users is the number of users sending requests at the same time during the test period."
    }), "\n", createVNode(_components.h5, {
      id: "response-time-distribution",
      children: "Response time distribution"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report5.png",
        alt: "readme-test-report5"
      })
    }), "\n", createVNode(_components.p, {
      children: "This chart shows the distribution of response times, including response times for successful requests and response times for failed requests."
    }), "\n", createVNode(_components.h5, {
      id: "response-time-percentiles-over-time",
      children: "Response time percentiles over time"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report6.png",
        alt: "readme-test-report6"
      })
    }), "\n", createVNode(_components.p, {
      children: "This chart shows various response time percentiles over time, but only for successful requests. Since failed requests may end early or be caused by timeouts, they can have a huge impact on the percentile calculation."
    }), "\n", createVNode(_components.h5, {
      id: "requests-per-second-over-time",
      children: "Requests per second over time"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report7.png",
        alt: "readme-test-report7"
      })
    }), "\n", createVNode(_components.p, {
      children: "This chart shows the number of requests per second, including the number of successful requests and the number of failed requests."
    }), "\n", createVNode(_components.h5, {
      id: "response-per-second-over-time",
      children: "Response per second over time"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report8.png",
        alt: "readme-test-report8"
      })
    }), "\n", createVNode(_components.p, {
      children: "This chart shows the number of responses per second, including the number of successful responses and the number of failed responses."
    }), "\n", createVNode(_components.h4, {
      id: "single-request-analysis-report",
      children: "Single request analysis report"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "You can click the details menu on the report page to switch to the details tab and view a detailed report for a single request."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-test-report9.png",
        alt: "readme-test-report9"
      })
    }), "\n", createVNode(_components.p, {
      children: "The Details page primarily shows per-request statistics, and similarly to the global report includes a graph of response time distribution, response time percentile, requests per second, and responses per second. The difference is that there is a graph at the bottom that depicts the response time of a single request relative to all requests globally. The horizontal coordinate of this graph is the number of all requests per second globally, and the vertical coordinate is the response time of a single request."
    }), "\n", createVNode(_components.h3, {
      id: "performance-scenario-setting",
      children: "Performance Scenario Setting"
    }), "\n", createVNode(_components.h4, {
      id: "injection",
      children: "Injection"
    }), "\n", createVNode(_components.h5, {
      id: "what-is-injection",
      children: "What is Injection"
    }), "\n", createVNode(_components.p, {
      children: "In Gatling performance testing, “Injection” refers to a method of introducing virtual users (or load) into the system. It defines how simulated users are introduced into a test scenario, including the number, rate, and manner of users.Injection is a key concept used in Gatling to control load and concurrency, allowing you to simulate different user behaviors and load models."
    }), "\n", createVNode(_components.p, {
      children: "User injection profiles are defined using the injectOpen and injectClosed methods (inject in Scala). This method takes as arguments a sequence of injection steps that are processed sequentially. Each step defines a set of users and how these users are injected into the scene."
    }), "\n", createVNode(_components.p, {
      children: ["More from the web site: ", createVNode(_components.a, {
        href: "https://gatling.io/docs/gatling/reference/current/core/injection/",
        children: "https://gatling.io/docs/gatling/reference/current/core/injection/"
      })]
    }), "\n", createVNode(_components.h5, {
      id: "common-injection-scenario",
      children: "Common Injection Scenario"
    }), "\n", createVNode(_components.h6, {
      id: "open-model-scenario",
      children: "Open Model Scenario"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scn.inject("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    nothingFor("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    atOnceUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    rampUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    constantUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    constantUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").randomized, "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 5"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    rampUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").to("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".minutes), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 6"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    rampUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").to("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".minutes).randomized, "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 7"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    stressPeakUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ).protocols(httpProtocol)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "nothingFor(duration): set a period of time to stop, this time to do nothing"
      }), "\n", createVNode(_components.li, {
        children: "atOnceUsers(nbUsers): immediately inject a certain number of virtual users"
      }), "\n", createVNode(_components.li, {
        children: "rampUsers(nbUsers) during(duration): set a certain number of virtual users to be injected gradually during a specified period of time."
      }), "\n", createVNode(_components.li, {
        children: "constantUsersPerSec(rate) during(duration): Define a constant number of concurrent users per second for a specified period of time."
      }), "\n", createVNode(_components.li, {
        children: "constantUsersPerSec(rate) during(duration) randomized: defines a randomized concurrency increase/decrease around a specified number of concurrencies per second, for a specified period of time"
      }), "\n", createVNode(_components.li, {
        children: "rampUsersPerSec(rate1) to (rate2) during(duration): defines a concurrency interval that runs for the specified time, with the concurrency growth period being a regular value."
      }), "\n", createVNode(_components.li, {
        children: "rampUsersPerSec(rate1) to (rate2) during(duration) randomized: define a concurrency interval, run for a specified time, the concurrency growth period is a random value"
      }), "\n", createVNode(_components.li, {
        children: ["stressPeakUsers(nbUsers).during(duration) : injects a given number of users according to a smooth approximation of a ", createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Heaviside_step_function",
          children: "step function"
        }), " that stretches to a given duration. users."]
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "closed-model-scenario",
      children: "Closed Model Scenario"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scn.inject("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    constantConcurrentUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    rampConcurrentUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").to("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "constantConcurrentUsers(fromNbUsers).during(duration) : inject to make the number of concurrent users in the system constant"
      }), "\n", createVNode(_components.li, {
        children: "rampConcurrentUsers(fromNbUsers).to(toNbUsers).during(duration) : inject so that the number of concurrent users in the system increases linearly from one number to the next"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "meta-dsl-scenario",
      children: "Meta DSL Scenario"
    }), "\n", createVNode(_components.p, {
      children: "“Meta DSL is a special Domain Specific Language (DSL) for describing the metadata and global configuration of performance test scenarios.Meta DSL allows you to define a number of global settings and parameters in a performance test that affect the entire test process, rather than being specific to a particular scenario."
    }), "\n", createVNode(_components.p, {
      children: "The elements of the Meta DSL can be used to write tests in a simpler way. If you want to link levels and ramps to reach the limits of your application (a test sometimes referred to as a capacity load test), you can do this manually using the regular DSL and looping with map and flatMap."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "incrementUsersPerSec"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Generate an open workload injection profile"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // 10, 15, 20, 25 and 30 users arrive every second"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Each level lasts 10 seconds"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Each level lasts 10 seconds"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scn.inject("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    incrementUsersPerSec("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5.0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .times("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .eachLevelLasting("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .separatedByRampsLasting("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .startingFrom("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Double"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  )"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "incrementConcurrentUsers"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Generate a closed workload injection profile"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Concurrent users at levels 10, 15, 20, 25, and 30"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Each level lasts 10 seconds"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Each level lasts 10 seconds"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scn.inject("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    incrementConcurrentUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .times("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .eachLevelLasting("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .separatedByRampsLasting("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .startingFrom("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Int"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "incrementUsersPerSec is used for open workloads, incrementConcurrentUsers is used for closed workloads (users/sec vs concurrent users)."
    }), "\n", createVNode(_components.p, {
      children: "separatedByRampsLasting and startingFrom are both optional. If you do not specify a ramp, the test jumps from one level to another as soon as it finishes. If you do not specify the number of starting users, the test will start with 0 concurrent users or 0 users per second and move to the next step immediately."
    }), "\n", createVNode(_components.h5, {
      id: "concurrent-scenario",
      children: "Concurrent Scenario"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "scala",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "setUp("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scenario1.inject(injectionProfile1),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  scenario2.inject(injectionProfile2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You can configure multiple scenes to start simultaneously and execute concurrently in the same setUp block."
    }), "\n", createVNode(_components.h5, {
      id: "other-scenarios",
      children: "Other Scenarios"
    }), "\n", createVNode(_components.p, {
      children: ["Check out the website: ", createVNode(_components.a, {
        href: "https://gatling.io/docs/gatling/reference/current/core/injection/",
        children: "https://gatling.io/docs/gatling/reference/current/core/injection/"
      })]
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

const url = "src/blog/en/Performance-Testing/gatling-tool-tutorial-Advanced-Usage.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/gatling-tool-tutorial-Advanced-Usage.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/gatling-tool-tutorial-Advanced-Usage.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
