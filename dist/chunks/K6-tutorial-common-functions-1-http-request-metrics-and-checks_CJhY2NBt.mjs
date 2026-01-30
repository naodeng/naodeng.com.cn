import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "K6 Performance Testing Tutorial: Common Functions (1) - HTTP Request, Metrics and Checks",
  "description": "The article provides a detailed exploration of the HTTP request functionality in K6, dissecting common performance metrics and check features. Learn how to leverage K6 for robust performance testing, simulating user behavior through HTTP requests, and assessing system response by understanding performance metrics. The tutorial delves into configuring and executing checks, ensuring performance aligns with expected standards. Whether you're a beginner or an experienced performance testing professional, this guide equips you with practical knowledge to harness the full potential of K6 in performance testing. Click the link to embark on an efficient journey into performance testing with K6!",
  "date": "2024-01-11T09:10:00.000Z",
  "author": "nao.deng",
  "tags": ["K6", "Performance Testing"],
  "categories": ["Performance Testing", "k6"],
  "series": ["K6 Performance Testing Tutorial"],
  "cover": "./K6-tutorial-common-functions-1-http-request-metrics-and-checks-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "k6-common-function",
    "text": "K6 common function"
  }, {
    "depth": 3,
    "slug": "http-requests",
    "text": "HTTP Requests"
  }, {
    "depth": 4,
    "slug": "get-request-example",
    "text": "GET Request Example"
  }, {
    "depth": 4,
    "slug": "post-request-example",
    "text": "POST Request Example"
  }, {
    "depth": 4,
    "slug": "supported-http-methods",
    "text": "Supported HTTP Methods"
  }, {
    "depth": 4,
    "slug": "http-request-tags",
    "text": "HTTP Request Tags"
  }, {
    "depth": 3,
    "slug": "metrics",
    "text": "Metrics"
  }, {
    "depth": 4,
    "slug": "k6-built-in-metrics",
    "text": "K6 Built-in Metrics"
  }, {
    "depth": 5,
    "slug": "standard-built-in-metrics",
    "text": "Standard Built-in Metrics"
  }, {
    "depth": 5,
    "slug": "http-specific-built-in-metrics",
    "text": "HTTP-specific built-in metrics"
  }, {
    "depth": 5,
    "slug": "other-built-in-metrics",
    "text": "Other built-in metrics"
  }, {
    "depth": 4,
    "slug": "custom-metrics",
    "text": "custom metrics"
  }, {
    "depth": 5,
    "slug": "custom-metrics-demo",
    "text": "custom metrics demo"
  }, {
    "depth": 6,
    "slug": "1import-the-trend-constructor-from-the-k6metrics-module",
    "text": "1.Import the Trend constructor from the k6/metrics module"
  }, {
    "depth": 6,
    "slug": "2constructs-a-new-custom-metric-trend-object-in-the-init-context",
    "text": "2.Constructs a new custom metric Trend object in the init context"
  }, {
    "depth": 6,
    "slug": "3use-the-add-method-in-a-script-to-record-metric-measurements",
    "text": "3.Use the add method in a script to record metric measurements"
  }, {
    "depth": 6,
    "slug": "4demo_custom_metricsjs-complete-code-of-custom-metric",
    "text": "4.demo_custom_metrics.js Complete code of custom metric"
  }, {
    "depth": 6,
    "slug": "5run-demo_custom_metricsjs-and-view-automated-trending-metrics",
    "text": "5.Run demo_custom_metrics.js and view automated trending metrics"
  }, {
    "depth": 3,
    "slug": "checks",
    "text": "Checks"
  }, {
    "depth": 4,
    "slug": "1-check-http-response-status",
    "text": "1. Check HTTP Response Status"
  }, {
    "depth": 4,
    "slug": "2-check-http-response-body",
    "text": "2. Check HTTP Response Body"
  }, {
    "depth": 4,
    "slug": "3-adding-multiple-checks",
    "text": "3. Adding Multiple Checks"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
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
    h5: "h5",
    h6: "h6",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "k6-common-function",
      children: "K6 common function"
    }), "\n", createVNode(_components.h3, {
      id: "http-requests",
      children: "HTTP Requests"
    }), "\n", createVNode(_components.p, {
      children: "The first step in performance testing with K6 is to define the HTTP requests to be tested."
    }), "\n", createVNode(_components.h4, {
      id: "get-request-example",
      children: "GET Request Example"
    }), "\n", createVNode(_components.p, {
      children: ["A simple HTTP request for the GET method is already included in the demo test script created with the ", createVNode(_components.code, {
        children: "k6 new"
      }), " command:"]
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
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { sleep } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
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
              color: "#E1E4E8"
            },
            children: "  http."
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
            children: "'https://test.k6.io'"
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
              color: "#B392F0"
            },
            children: "  sleep"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "post-request-example",
      children: "POST Request Example"
    }), "\n", createVNode(_components.p, {
      children: "This POST request example shows the application of some complex scenarios (POST request with email/password authentication load)"
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
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'http://test.k6.io/login'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
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
            children: " payload"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " JSON"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "stringify"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    email: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'aaa'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    password: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'bbb'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
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
          class: "line"
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
            children: " params"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    headers: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      'Content-Type'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'application/json'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  http."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "post"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(url, payload, params);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["The above is taken from ", createVNode(_components.a, {
          href: "https://k6.io/docs/using-k6/http-requests",
          children: "K6 Official Documentation"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "supported-http-methods",
      children: "Supported HTTP Methods"
    }), "\n", createVNode(_components.p, {
      children: "The HTTP module provided by K6 can handle various HTTP requests and methods. The following is a list of supported HTTP methods:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "NAME"
          }), createVNode(_components.th, {
            children: "VALUE"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "batch()"
          }), createVNode(_components.td, {
            children: "makes multiple HTTP requests in parallel (like e.g. browsers tend to do)."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "del()"
          }), createVNode(_components.td, {
            children: "makes an HTTP DELETE request."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "get()"
          }), createVNode(_components.td, {
            children: "makes an HTTP GET request."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "head()"
          }), createVNode(_components.td, {
            children: "makes an HTTP HEAD request."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "options()"
          }), createVNode(_components.td, {
            children: "makes an HTTP OPTIONS request."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "patch()"
          }), createVNode(_components.td, {
            children: "makes an HTTP PATCH request."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "post()"
          }), createVNode(_components.td, {
            children: "makes an HTTP POST request."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "put()"
          }), createVNode(_components.td, {
            children: "makes an HTTP PUT request."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "request()"
          }), createVNode(_components.td, {
            children: "makes any type of HTTP request."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "http-request-tags",
      children: "HTTP Request Tags"
    }), "\n", createVNode(_components.p, {
      children: "K6 allows you to add tags to each HTTP request. Combining tags and grouping makes it easy to better organize in test results, group requests and filter results to organize analysis."
    }), "\n", createVNode(_components.p, {
      children: "The following is a list of supported tags:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "NAME"
          }), createVNode(_components.th, {
            children: "DESCRIPTION"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "expected_response"
          }), createVNode(_components.td, {
            children: ["By default, response statuses between 200 and 399 are true. Change the default behavior with ", createVNode(_components.code, {
              children: "setResponseCallback"
            }), "."]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "group"
          }), createVNode(_components.td, {
            children: ["When the request runs inside a ", createVNode(_components.code, {
              children: "group"
            }), ", the tag value is the group name. Default is empty."]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "name"
          }), createVNode(_components.td, {
            children: "Defaults to URL requested"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "method"
          }), createVNode(_components.td, {
            children: "Request method (GET, POST, PUT etc.)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "scenario"
          }), createVNode(_components.td, {
            children: ["When the request runs inside a ", createVNode(_components.code, {
              children: "scenario"
            }), ", the tag value is the scenario name. Default is ", createVNode(_components.code, {
              children: "default"
            }), "."]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "status"
          }), createVNode(_components.td, {
            children: "response status"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "url"
          }), createVNode(_components.td, {
            children: "defaults to URL requested"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Examples of HTTP requests using tag and group tags will be shown in subsequent demos."
    }), "\n", createVNode(_components.p, {
      children: ["You can also refer to the official examples:", createVNode(_components.a, {
        href: "https://grafana.com/docs/k6/latest/using-k6/http-requests/",
        children: "https://grafana.com/docs/k6/latest/using-k6/http-requests/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "metrics",
      children: "Metrics"
    }), "\n", createVNode(_components.p, {
      children: "The metrics are used to measure the performance of the system under test conditions. By default, k6 automatically collects built-in metrics. In addition to the built-in metrics, you can create custom metrics."
    }), "\n", createVNode(_components.p, {
      children: "Metrics generally fall into four categories:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Counters: Summing values."
      }), "\n", createVNode(_components.li, {
        children: "Gauges: Tracking the smallest, largest, and most recent values."
      }), "\n", createVNode(_components.li, {
        children: "Rates: Tracking how often non-zero values occur."
      }), "\n", createVNode(_components.li, {
        children: "Trends: Calculating statistical information (such as mean, mode, or percentile) for multiple values."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "To ensure that test assertions meet the criteria, thresholds can be written based on the conditions of the metrics required by the performance test (the specifics of the expression depend on the type of metric)."
    }), "\n", createVNode(_components.p, {
      children: "For subsequent filtering of metrics, labels and groupings can be used, allowing for better organization of test results."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The test results output file can export metrics in a variety of summary and fine-grained formats. For more information, refer to the results output documentation. (This section will be covered in more detail in the later part of the test results output documentation.)"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "k6-built-in-metrics",
      children: "K6 Built-in Metrics"
    }), "\n", createVNode(_components.p, {
      children: "Every k6 test execution emits both built-in and custom metrics. Each supported protocol also has its specific metrics."
    }), "\n", createVNode(_components.h5, {
      id: "standard-built-in-metrics",
      children: "Standard Built-in Metrics"
    }), "\n", createVNode(_components.p, {
      children: "Regardless of the protocol used in the test, k6 always collects the following metrics:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metric Name"
          }), createVNode(_components.th, {
            children: "Type"
          }), createVNode(_components.th, {
            children: "Description"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "vus"
          }), createVNode(_components.td, {
            children: "Gauge"
          }), createVNode(_components.td, {
            children: "Current number of active virtual users"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "vus_max"
          }), createVNode(_components.td, {
            children: "Gauge"
          }), createVNode(_components.td, {
            children: "Max possible number of virtual users (VU resources are pre-allocated, to avoid affecting performance when scaling up load )"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "iterations"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "The aggregate number of times the VUs execute the JS script (the default function)."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "iteration_duration"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "The time to complete one full iteration, including time spent in setup and teardown. To calculate the duration of the iteration’s function for the specific scenario, try this workaround"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "dropped_iterations"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "The number of iterations that weren’t started due to lack of VUs (for the arrival-rate executors) or lack of time (expired maxDuration in the iteration-based executors). About dropped iterations"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "data_received"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "The amount of received data. This example covers how to track data for an individual URL."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "data_sent"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "The amount of data sent. Track data for an individual URL to track data for an individual URL."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "checks"
          }), createVNode(_components.td, {
            children: "Rate"
          }), createVNode(_components.td, {
            children: "The rate of successful checks."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h5, {
      id: "http-specific-built-in-metrics",
      children: "HTTP-specific built-in metrics"
    }), "\n", createVNode(_components.p, {
      children: "HTTP-specific built-in metrics are generated only when the test makes HTTP requests.Other types of requests, such as WebSocket, do not generate these metrics."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Note: For all http_req_* metrics, the timestamp is emitted at the end of the request. In other words, the timestamp occurs when k6 receives the end of the response body or when the request times out."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The following table lists HTTP-specific built-in metrics:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metric Name"
          }), createVNode(_components.th, {
            children: "Type"
          }), createVNode(_components.th, {
            children: "Description"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_reqs"
          }), createVNode(_components.td, {
            children: "Counter"
          }), createVNode(_components.td, {
            children: "How many total HTTP requests k6 generated."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_blocked"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "Time spent blocked (waiting for a free TCP connection slot) before initiating the request. float"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_connecting"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "Time spent establishing TCP connection to the remote host. float"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_tls_handshaking"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "Time spent handshaking TLS session with remote host"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_sending"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "Time spent sending data to the remote host. float"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_waiting"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "Time spent waiting for response from remote host (a.k.a. “time to first byte”, or “TTFB”). float"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_receiving"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "Time spent receiving response data from the remote host. float"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_duration"
          }), createVNode(_components.td, {
            children: "Trend"
          }), createVNode(_components.td, {
            children: "Total time for the request. It’s equal to http_req_sending + http_req_waiting + http_req_receiving (i.e. how long did the remote server take to process the request and respond, without the initial DNS lookup/connection times). float"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "http_req_failed"
          }), createVNode(_components.td, {
            children: "Rate"
          }), createVNode(_components.td, {
            children: "The rate of failed requests according to setResponseCallback."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h5, {
      id: "other-built-in-metrics",
      children: "Other built-in metrics"
    }), "\n", createVNode(_components.p, {
      children: "In addition to the standard built-in metrics and HTTP-specific built-in metrics, K6 built-in metrics also have other built-in metrics:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Browser metrics : ", createVNode(_components.a, {
          href: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#browser",
          children: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#browser"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Built-in WebSocket metrics : ", createVNode(_components.a, {
          href: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#websockets",
          children: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#websockets"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Built-in gRPC metrics : ", createVNode(_components.a, {
          href: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#grpc",
          children: "https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#grpc"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "custom-metrics",
      children: "custom metrics"
    }), "\n", createVNode(_components.p, {
      children: "Besides the built-in metrics, you can create custom metrics. For example, you can compute a metric for your business logic, or use the Response.timings object to create a metric for a specific set of endpoints."
    }), "\n", createVNode(_components.p, {
      children: "Each metric type has a constructor to create a custom metric. The constructor creates a metric object of the declared type. Each type has an add method to take metric measurements."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Note: Custom metrics must be created in the init context. This limits memory and ensures that K6 can verify that all thresholds evaluate the defined metrics."
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "custom-metrics-demo",
      children: "custom metrics demo"
    }), "\n", createVNode(_components.p, {
      children: "The following example demonstrates how to create a custom trend metrics for wait time:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The demo_custom_metrics.js file in the project file already contains this demo example, which can be run directly to view the results."
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "1import-the-trend-constructor-from-the-k6metrics-module",
      children: "1.Import the Trend constructor from the k6/metrics module"
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
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { Trend } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/metrics'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.blockquote, {
        children: ["\n", createVNode(_components.p, {
          children: "The waiting time trend metrics is a Trends metrics, so the Trend constructor needs to be introduced from the k6/metrics module."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "2constructs-a-new-custom-metric-trend-object-in-the-init-context",
      children: "2.Constructs a new custom metric Trend object in the init context"
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " myTrend"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Trend"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'waiting_time'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Construct a new custom metric Trend object in the init context, the object in the script is myTrend, and its metric is displayed as ", createVNode(_components.code, {
          children: "waiting_time"
        }), " in the resulting output."]
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "3use-the-add-method-in-a-script-to-record-metric-measurements",
      children: "3.Use the add method in a script to record metric measurements"
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
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
            children: "'https://test.k6.io'"
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
            children: "  myTrend."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res.timings.waiting);"
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
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Use the add method in the script to record the metric measurement values. Here, ", createVNode(_components.code, {
          children: "res.timings.waiting"
        }), " is used, which is the waiting time."]
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "4demo_custom_metricsjs-complete-code-of-custom-metric",
      children: "4.demo_custom_metrics.js Complete code of custom metric"
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
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { Trend } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/metrics'"
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " myTrend"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Trend"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'waiting_time'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
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
            children: "'https://httpbin.test.k6.io'"
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
            children: "  myTrend."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res.timings.waiting);"
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
            children: "(myTrend.name); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// waiting_time"
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
    }), "\n", createVNode(_components.h6, {
      id: "5run-demo_custom_metricsjs-and-view-automated-trending-metrics",
      children: "5.Run demo_custom_metrics.js and view automated trending metrics"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "k6"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " demo_custom_metrics.js"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "The running results are as follows:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/4tbqVc.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["As you can see, the custom metric ", createVNode(_components.code, {
          children: "waiting_time"
        }), " has been displayed in the result output."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For more information about custom metrics, please refer to the official documentation: ", createVNode(_components.a, {
        href: "https://k6.io/docs/using-k6/metrics/#custom-metrics",
        children: "https://k6.io/docs/using-k6/metrics/#custom-metrics"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "checks",
      children: "Checks"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "This can also be understood as assertions, which verify the test results."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Checks are used to verify whether specific test conditions in different tests are correctly responded to, similar to how we conventionally verify test results in other types of tests to ensure that the system responds as expected."
    }), "\n", createVNode(_components.p, {
      children: "For example, a check can ensure that the response status of a POST request is 201, or that the size of the response body matches expectations."
    }), "\n", createVNode(_components.p, {
      children: ["Checks are similar to the concept of assertions in many testing frameworks, but ", createVNode(_components.strong, {
        children: "K6 does not abort the test or end it in a failed state when verifications fail. Instead, k6 tracks the failure rate of failed verifications as the test continues to run"
      }), "."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Each check creates a rate metric. To make a check abort or cause the test to fail, it can be combined with thresholds."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Below, we will introduce how to use different types of checks and how to view check results in test results."
    }), "\n", createVNode(_components.h4, {
      id: "1-check-http-response-status",
      children: "1. Check HTTP Response Status"
    }), "\n", createVNode(_components.p, {
      children: "K6 checks are particularly useful for response assertions related to HTTP requests."
    }), "\n", createVNode(_components.p, {
      children: "For example, the following code snippet checks that the HTTP response code is 200:"
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
              color: "#E1E4E8"
            },
            children: " { check } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
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
            children: "'https://httpbin.test.k6.io'"
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
              color: "#B392F0"
            },
            children: "  check"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res, {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'HTTP response code is status 200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
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
            children: " r.status "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Running this script, you can see the following results:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/aTXnpy.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "When a script contains checks, the summary report shows how many test checks have passed."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In this example, note that the check “HTTP response code is status 200” is 100% successful when called."
    }), "\n", createVNode(_components.h4, {
      id: "2-check-http-response-body",
      children: "2. Check HTTP Response Body"
    }), "\n", createVNode(_components.p, {
      children: "In addition to checking the HTTP response status, you can also check the HTTP response body."
    }), "\n", createVNode(_components.p, {
      children: "For example, the following code snippet checks that the HTTP response body size is 9591 bytes:"
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
              color: "#E1E4E8"
            },
            children: " { check } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
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
            children: "'https://httpbin.test.k6.io'"
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
              color: "#B392F0"
            },
            children: "  check"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res, {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'HTTP response body size is 9591 bytes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
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
            children: " r.body."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 9591"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Running this script, you can see the following results:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/AmbL0E.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "When a script contains checks, the summary report shows how many test checks have passed."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In this example, note that the check “HTTP response body size is 9591 bytes” is 100% successful when called."
    }), "\n", createVNode(_components.h4, {
      id: "3-adding-multiple-checks",
      children: "3. Adding Multiple Checks"
    }), "\n", createVNode(_components.p, {
      children: "Sometimes, multiple checks need to be added in a single test script. You can directly add multiple checks in a single check() statement, as shown in the script below:"
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
              color: "#E1E4E8"
            },
            children: " { check } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
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
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {"
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
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http."
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
            children: "'https://httpbin.test.k6.io'"
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
              color: "#B392F0"
            },
            children: "  check"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res, {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'HTTP response code is status 200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
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
            children: " r.status "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'HTTP response body size is 9591 bytes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "r"
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
            children: " r.body."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 9591"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Running this script, you can see the following results:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5yJyBw.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "In this example, both checks pass successfully (the call is 100% successful)."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Note: When a check fails, the script will continue to execute successfully and will not return a “failed” exit status. If you need to fail the entire test based on check results, you must combine checks with thresholds. This is particularly useful in specific environments, such as integrating k6 into a CI pipeline or receiving alerts when scheduling performance tests."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/docs/",
          children: "Official K6 documentation: https://k6.io/docs/"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/",
          children: "Official website: https://k6.io/"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/Automation-Test-Starter/K6-Performance-Test-starter",
          children: "K6 Performance Test quick starter: https://github.com/Automation-Test-Starter/K6-Performance-Test-starter/"
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

const url = "src/blog/en/Performance-Testing/K6-tutorial-common-functions-1-http-request-metrics-and-checks.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/K6-tutorial-common-functions-1-http-request-metrics-and-checks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/K6-tutorial-common-functions-1-http-request-metrics-and-checks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
