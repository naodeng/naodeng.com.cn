import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Postman API Automation Testing Tutorial Advance Usage Common Test Scripts and Third-Party Packages",
  "description": "A deep dive into advanced usage of Postman API automation testing, focusing on commonly used test scripts and third-party package examples. Explores how to write powerful test scripts that cover a variety of testing scenarios and introduces some common third-party packages that optimize the testing process.",
  "date": "2023-11-23T09:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Postman", "API Testing"],
  "categories": ["API Automation Testing", "Postman"],
  "series": ["Postman API Automation Testing Tutorial"],
  "cover": "./postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "advanced-usage",
    "text": "Advanced Usage"
  }, {
    "depth": 3,
    "slug": "common-test-scripts",
    "text": "Common Test Scripts"
  }, {
    "depth": 4,
    "slug": "response-test-scripts",
    "text": "Response Test Scripts"
  }, {
    "depth": 4,
    "slug": "pre-request-scripts",
    "text": "Pre-request Scripts"
  }, {
    "depth": 3,
    "slug": "third-party-libraries-in-test-scripts",
    "text": "Third-Party Libraries in Test Scripts"
  }, {
    "depth": 4,
    "slug": "chaijs-assertion-library-methods",
    "text": "Chai.js Assertion Library Methods"
  }, {
    "depth": 5,
    "slug": "1-install-chai",
    "text": "1. Install Chai"
  }, {
    "depth": 5,
    "slug": "2-use-bdd-style-assertions",
    "text": "2. Use BDD Style Assertions"
  }, {
    "depth": 5,
    "slug": "3-use-tdd-style-assertions",
    "text": "3. Use TDD Style Assertions"
  }, {
    "depth": 3,
    "slug": "4-common-assertions-supported-by-chai",
    "text": "4. Common Assertions Supported by Chai"
  }, {
    "depth": 4,
    "slug": "using-cheerio-to-manipulate-html-files",
    "text": "Using Cheerio to Manipulate HTML Files"
  }, {
    "depth": 4,
    "slug": "validating-json-schema-with-tv4",
    "text": "Validating JSON Schema with tv4"
  }, {
    "depth": 4,
    "slug": "generating-uuids",
    "text": "Generating UUIDs"
  }, {
    "depth": 5,
    "slug": "1-install-the-uuid-module",
    "text": "1. Install the uuid Module"
  }, {
    "depth": 5,
    "slug": "2-generate-uuid",
    "text": "2. Generate UUID"
  }, {
    "depth": 5,
    "slug": "example",
    "text": "Example"
  }, {
    "depth": 4,
    "slug": "converting-xml-to-javascript-objects-with-xml2js",
    "text": "Converting XML to JavaScript Objects with xml2js"
  }, {
    "depth": 4,
    "slug": "common-utility-functions-with-util",
    "text": "Common Utility Functions with util"
  }, {
    "depth": 5,
    "slug": "1-utilguid---generate-a-globally-unique-identifier-guid",
    "text": "1. util.guid() - Generate a Globally Unique Identifier (GUID)"
  }, {
    "depth": 5,
    "slug": "2-utiltimestamp---get-the-current-timestamp",
    "text": "2. util.timestamp() - Get the Current Timestamp"
  }, {
    "depth": 5,
    "slug": "3-utilrandomintmin-max---generate-a-random-integer-in-a-specified-range",
    "text": "3. util.randomInt(min, max) - Generate a Random Integer in a Specified Range"
  }, {
    "depth": 5,
    "slug": "4-utilunixtimestamp---get-the-current-timestamp-in-unix-timestamp-seconds",
    "text": "4. util.unixTimestamp() - Get the Current Timestamp in Unix Timestamp (seconds)"
  }, {
    "depth": 5,
    "slug": "5-utilencodebase64str-and-utildecodebase64base64str---base64-encoding-and-decoding",
    "text": "5. util.encodeBase64(str) and util.decodeBase64(base64Str) - Base64 Encoding and Decoding"
  }, {
    "depth": 5,
    "slug": "6-utileachobj-callback---iterate-over-an-object-or-array",
    "text": "6. util.each(obj, callback) - Iterate Over an Object or Array"
  }, {
    "depth": 4,
    "slug": "stream-operations-with-stream",
    "text": "Stream Operations with stream"
  }, {
    "depth": 5,
    "slug": "1-readable-streams",
    "text": "1. Readable Streams:"
  }, {
    "depth": 5,
    "slug": "2-writable-streams",
    "text": "2. Writable Streams:"
  }, {
    "depth": 5,
    "slug": "3-transform-streams",
    "text": "3. Transform Streams:"
  }, {
    "depth": 4,
    "slug": "timers-timers",
    "text": "Timers: timers"
  }, {
    "depth": 5,
    "slug": "1-settimeout---delayed-execution",
    "text": "1. setTimeout - Delayed Execution"
  }, {
    "depth": 5,
    "slug": "2-setinterval---periodic-execution",
    "text": "2. setInterval - Periodic Execution"
  }, {
    "depth": 5,
    "slug": "3-usage-in-postman",
    "text": "3. Usage in Postman"
  }, {
    "depth": 4,
    "slug": "events-handling-events",
    "text": "Events Handling: events"
  }, {
    "depth": 5,
    "slug": "1-creating-an-event-emitter",
    "text": "1. Creating an Event Emitter"
  }, {
    "depth": 5,
    "slug": "2-defining-an-event-handling-function",
    "text": "2. Defining an Event Handling Function"
  }, {
    "depth": 5,
    "slug": "3-registering-an-event-handling-function",
    "text": "3. Registering an Event Handling Function"
  }, {
    "depth": 5,
    "slug": "4-triggering-an-event",
    "text": "4. Triggering an Event"
  }, {
    "depth": 5,
    "slug": "5-example",
    "text": "5. Example"
  }, {
    "depth": 2,
    "slug": "reference-documents",
    "text": "Reference Documents"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
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
      id: "advanced-usage",
      children: "Advanced Usage"
    }), "\n", createVNode(_components.p, {
      children: "This section will introduce some advanced features of Postman and Newman, including commonly used response test scripts, pre-request scripts, and third-party packages available for test scripts."
    }), "\n", createVNode(_components.h3, {
      id: "common-test-scripts",
      children: "Common Test Scripts"
    }), "\n", createVNode(_components.p, {
      children: ["Postman provides a test script feature that allows you to write JavaScript scripts to validate the response and behavior of your API. These scripts can be added under the “Tests” tab of a request and are divided into pre-request scripts (", createVNode(_components.code, {
        children: "Pre-request Script"
      }), ") and post-response scripts (", createVNode(_components.code, {
        children: "Tests"
      }), "). Here are some common Postman and Newman test scripts:"]
    }), "\n", createVNode(_components.h4, {
      id: "response-test-scripts",
      children: "Response Test Scripts"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Status Code Check:"
          })
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
                  color: "#E1E4E8"
                },
                children: "pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "test"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"Status code is 200\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm.response.to.have."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "status"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "200"
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
                children: "});"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Response Time Check:"
          })
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
                  color: "#E1E4E8"
                },
                children: "pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "test"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"Response time is less than 200ms\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(pm.response.responseTime).to.be."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "below"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "200"
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
                children: "});"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Response Body JSON Format Check:"
          })
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
                  color: "#E1E4E8"
                },
                children: "pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "test"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"Response body is a valid JSON\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm.response.to.be.json;"
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
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Response Body Field Value Check:"
          })
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
                  color: "#E1E4E8"
                },
                children: "pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "test"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"Response body contains expected value\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "json"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "().key).to."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "eql"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"expectedValue\""
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
                children: "});"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Response Body Array Length Check:"
          })
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
                  color: "#E1E4E8"
                },
                children: "pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "test"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"Response body array has correct length\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "json"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "().arrayKey).to.have."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "lengthOf"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "3"
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
                children: "});"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Response Body Property Existence Check:"
          })
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
                  color: "#E1E4E8"
                },
                children: "pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "test"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"Response body has required properties\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "json"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "()).to.have."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "property"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"key\""
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
                children: "});"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "pre-request-scripts",
      children: "Pre-request Scripts"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Dynamically Set Request Parameters:"
          })
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
                children: "pm.variables."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "set"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"dynamicVariable\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"dynamicValue\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Set Request Header Using Global Variable:"
          })
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
                children: "pm.request.headers."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "add"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "({ key: "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Authorization'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", value: pm.globals."
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
                children: "'authToken'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") });"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Generate Random Number:"
          })
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
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " randomNumber"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "floor"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "() "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1000"
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
                children: "pm.variables."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "set"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"randomNumber\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", randomNumber);"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Generate Signature or Encryption:"
          })
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Example: Use CryptoJS for HMAC SHA256 signature"
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
                  color: "#79B8FF"
                },
                children: " CryptoJS"
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
                children: "'crypto-js'"
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
                  color: "#79B8FF"
                },
                children: " secretKey"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " 'yourSecretKey'"
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
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " message"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " 'dataToSign'"
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
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " signature"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " CryptoJS."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "HmacSHA256"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(message, secretKey)."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "toString"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(CryptoJS.enc.Base64);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "pm.variables."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "set"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"signature\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", signature);"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "third-party-libraries-in-test-scripts",
      children: "Third-Party Libraries in Test Scripts"
    }), "\n", createVNode(_components.p, {
      children: ["The provided ", createVNode(_components.code, {
        children: "require"
      }), " method allows you to use built-in library modules in the sandbox. Here are some common libraries and examples.\nMore available libraries can be found ", createVNode(_components.a, {
        href: "https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-external-libraries",
        children: "here"
      }), "."]
    }), "\n", createVNode(_components.h4, {
      id: "chaijs-assertion-library-methods",
      children: "Chai.js Assertion Library Methods"
    }), "\n", createVNode(_components.p, {
      children: "In Postman’s test scripts, you can use the Chai assertion library to write assertions to validate the response of your API. Chai provides various assertion styles, including BDD (Behavior-Driven Development) and TDD (Test-Driven Development). Here are some basic usage examples:"
    }), "\n", createVNode(_components.h5, {
      id: "1-install-chai",
      children: "1. Install Chai"
    }), "\n", createVNode(_components.p, {
      children: "In the Postman script environment, you don’t need to install Chai separately as Postman already includes Chai by default."
    }), "\n", createVNode(_components.h5, {
      id: "2-use-bdd-style-assertions",
      children: "2. Use BDD Style Assertions"
    }), "\n", createVNode(_components.p, {
      children: "In the “Tests” section of Postman, you can use Chai’s BDD style assertions, for example:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Include Chai library"
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
              color: "#79B8FF"
            },
            children: " chai"
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
            children: "'chai'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Use BDD style assertions"
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
              color: "#79B8FF"
            },
            children: " expect"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chai.expect;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Example: Verify the response status code is 200"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Status code is 200'"
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
            children: "    expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.response.code).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
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
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Example: Verify the response body is JSON"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Response body is JSON'"
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
            children: "    expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.response.headers."
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
            children: "'Content-Type'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "include"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'application/json'"
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
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "3-use-tdd-style-assertions",
      children: "3. Use TDD Style Assertions"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Include Chai library"
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
              color: "#79B8FF"
            },
            children: " chai"
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
            children: "'chai'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Use TDD style assertions"
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
              color: "#79B8FF"
            },
            children: " assert"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chai.assert;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Example: Use assert to verify the response status code is 200"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "assert."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.response.code, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Status code should be 200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-common-assertions-supported-by-chai",
      children: "4. Common Assertions Supported by Chai"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Equality:"
          })
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
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(actual).to."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "equal"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(expected);"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Inclusion:"
          })
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
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(actual).to."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "include"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(expected);"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Type Checking:"
          })
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
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(actual).to.be."
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
                children: ");"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Greater Than/Less Than:"
          })
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
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(actual).to.be."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "above"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(expected);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(actual).to.be."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "below"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(expected);"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Null/Not Null:"
          })
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
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(actual).to.be.null;"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(actual).to.not.be.null;"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Deep Equality:"
          })
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
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(actual).to.deep."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "equal"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(expected);"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["The above are just some basic usage of the Chai assertion library. You can use more assertion methods and combinations based on your needs. Chai provides a rich set of assertion features to meet various testing requirements. For more detailed information, please refer to the ", createVNode(_components.a, {
        href: "https://www.chaijs.com/",
        children: "Chai Documentation"
      }), "."]
    }), "\n", createVNode(_components.h4, {
      id: "using-cheerio-to-manipulate-html-files",
      children: "Using Cheerio to Manipulate HTML Files"
    }), "\n", createVNode(_components.p, {
      children: "In Postman, Cheerio is a jQuery-based library for server-side manipulation of HTML documents. It allows you to use jQuery-like syntax to select and manipulate HTML elements on the server side, making it suitable for parsing and extracting information from HTML pages. In Postman, you can use the Cheerio library for parsing HTML responses. Here are the basic usage steps for Cheerio in Postman:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Install Cheerio:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Since Postman uses the Node.js runtime environment, you can install Cheerio in Postman scripts. In the “Pre-request Script” or “Tests” section of your request, you can install Cheerio as follows:"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Install Cheerio"
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
                  color: "#79B8FF"
                },
                children: " cheerio"
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
                children: "'cheerio'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Parse HTML with Cheerio:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "In the “Tests” section of your request, you can use Cheerio to parse HTML. Here’s a simple example:"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Get HTML content from the response"
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
                  color: "#79B8FF"
                },
                children: " htmlContent"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "text"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "();"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Parse HTML with Cheerio"
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
                  color: "#79B8FF"
                },
                children: " $"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " cheerio."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "load"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(htmlContent);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Example: Extract text from the title tag"
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
                  color: "#79B8FF"
                },
                children: " titleText"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " $"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'title'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "text"
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
                children: "console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Title:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", titleText);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Example: Extract the href attribute from all links"
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
                  color: "#79B8FF"
                },
                children: " links"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " [];"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'a'"
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
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "function"
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
                children: "    const"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " link"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " $"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "this"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")."
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
                children: "'href'"
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
                children: "    links."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "push"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(link);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "});"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Links:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", links);"
              })]
            })]
          })
        }), "\n", createVNode(_components.p, {
          children: ["In the example above, ", createVNode(_components.code, {
            children: "cheerio.load(htmlContent)"
          }), " is used to load HTML content, and jQuery-like syntax is used to select and manipulate elements."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Considerations:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Cheerio is primarily used for parsing static HTML. It may not work well with content generated dynamically using JavaScript. In such cases, you might consider using Puppeteer or other tools that support JavaScript execution."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["This is just the basic usage of Cheerio in Postman. You can use various selectors and methods provided by Cheerio according to your specific needs. Refer to the ", createVNode(_components.a, {
        href: "https://cheerio.js.org/",
        children: "Cheerio Documentation"
      }), " for more detailed information."]
    }), "\n", createVNode(_components.h4, {
      id: "validating-json-schema-with-tv4",
      children: "Validating JSON Schema with tv4"
    }), "\n", createVNode(_components.p, {
      children: "In Postman, tv4 is a JSON Schema validation library used to validate whether JSON data conforms to a given JSON Schema. JSON Schema is a specification for describing the structure of JSON objects, defining properties, types, and other constraints."
    }), "\n", createVNode(_components.p, {
      children: "Here are the basic steps for using tv4 to validate JSON Schema in Postman:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Install tv4 Library:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Since Postman uses the Node.js runtime environment, you can install tv4 in Postman scripts. In the “Pre-request Script” or “Tests” section of your request, you can install tv4 as follows:"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Install tv4"
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
                  color: "#79B8FF"
                },
                children: " tv4"
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
                children: "'tv4'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Define JSON Schema:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "In Postman, you can define the JSON Schema in the “Pre-request Script” or “Tests” section. JSON Schema can be defined as a JavaScript object. Here’s a simple example:"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Define JSON Schema"
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
                  color: "#79B8FF"
                },
                children: " jsonSchema"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "    \"type\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"object\""
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
                children: "    \"properties\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "        \"name\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": { "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"type\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"string\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "        \"age\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": { "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"type\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"number\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " }"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "    \"required\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": ["
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"name\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"age\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "]"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "};"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Validate with tv4:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "In the “Tests” section of your request, you can use tv4 to validate JSON data against the defined JSON Schema. Here’s a simple example:"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Get JSON data from the response"
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
                  color: "#79B8FF"
                },
                children: " jsonResponse"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "json"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "();"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Validate JSON against the schema using tv4"
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
                  color: "#79B8FF"
                },
                children: " isValid"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " tv4."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "validate"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(jsonResponse, jsonSchema);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Check the validation result"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "test"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'JSON is valid according to the schema'"
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
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(isValid).to.be.true;"
              })]
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
          children: ["In the example above, ", createVNode(_components.code, {
            children: "tv4.validate(jsonResponse, jsonSchema)"
          }), " is used to validate whether the JSON response conforms to the specified schema. The validation result is stored in the ", createVNode(_components.code, {
            children: "isValid"
          }), " variable, and ", createVNode(_components.code, {
            children: "pm.test"
          }), " is used to check the validation result."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["This is just the basic usage of tv4 in Postman. You can define more complex JSON Schemas and use other features of tv4 for flexible validation according to your specific requirements. Refer to the ", createVNode(_components.a, {
        href: "https://github.com/geraintluff/tv4",
        children: "tv4 Documentation"
      }), " for more detailed information."]
    }), "\n", createVNode(_components.h4, {
      id: "generating-uuids",
      children: "Generating UUIDs"
    }), "\n", createVNode(_components.p, {
      children: ["In Postman, you can use the ", createVNode(_components.code, {
        children: "uuid"
      }), " module to generate UUIDs (Universally Unique Identifiers), also known as GUIDs. Here’s the basic usage of the ", createVNode(_components.code, {
        children: "uuid"
      }), " module in Postman:"]
    }), "\n", createVNode(_components.h5, {
      id: "1-install-the-uuid-module",
      children: ["1. Install the ", createVNode(_components.code, {
        children: "uuid"
      }), " Module"]
    }), "\n", createVNode(_components.p, {
      children: ["In the “Pre-request Script” or “Tests” section of your Postman request, you can install the ", createVNode(_components.code, {
        children: "uuid"
      }), " module as follows:"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Install the uuid module"
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
              color: "#79B8FF"
            },
            children: " uuid"
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
            children: "'uuid'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2-generate-uuid",
      children: "2. Generate UUID"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Generate UUID"
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
              color: "#79B8FF"
            },
            children: " generatedUUID"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " uuid."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "v4"
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
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Generated UUID:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", generatedUUID);"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the example above, ", createVNode(_components.code, {
        children: "uuid.v4()"
      }), " is used to generate a UUID based on random numbers. You can use the generated UUID in your Postman script, such as setting it as the value for a request header or parameter."]
    }), "\n", createVNode(_components.h5, {
      id: "example",
      children: "Example"
    }), "\n", createVNode(_components.p, {
      children: "Here’s an example of generating a UUID and setting it as a request header in the “Pre-request Script” of a Postman request:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Install the uuid module"
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
              color: "#79B8FF"
            },
            children: " uuid"
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
            children: "'uuid'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Generate UUID"
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
              color: "#79B8FF"
            },
            children: " generatedUUID"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " uuid."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "v4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Set request header"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm.request.headers."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ key: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'X-Request-ID'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", value: generatedUUID });"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the example above, ", createVNode(_components.code, {
        children: "X-Request-ID"
      }), " is a common request header used to identify the uniqueness of the request. The generated UUID is set as the value for this request header to ensure a unique identifier for each request."]
    }), "\n", createVNode(_components.p, {
      children: "Note that Postman automatically performs the steps to install dependencies"
    }), "\n", createVNode(_components.p, {
      children: ["when running scripts, so manual installation of the ", createVNode(_components.code, {
        children: "uuid"
      }), " module is not necessary."]
    }), "\n", createVNode(_components.h4, {
      id: "converting-xml-to-javascript-objects-with-xml2js",
      children: "Converting XML to JavaScript Objects with xml2js"
    }), "\n", createVNode(_components.p, {
      children: ["In Postman, ", createVNode(_components.code, {
        children: "xml2js"
      }), " is a library used to convert XML into JavaScript objects. In the “Pre-request Script” or “Tests” section of your Postman request, you can use ", createVNode(_components.code, {
        children: "xml2js"
      }), " to handle XML responses and transform them into JavaScript objects. Here are the basic steps for using ", createVNode(_components.code, {
        children: "xml2js"
      }), " in Postman:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Install the xml2js Library:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Since Postman uses the Node.js runtime environment, you can install ", createVNode(_components.code, {
              children: "xml2js"
            }), " in Postman scripts. In the “Pre-request Script” or “Tests” section of your request, you can install ", createVNode(_components.code, {
              children: "xml2js"
            }), " as follows:"]
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Install xml2js"
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
                  color: "#79B8FF"
                },
                children: " xml2js"
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
                children: "'xml2js'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Parse XML Response:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["After getting the XML response, you can use ", createVNode(_components.code, {
              children: "xml2js"
            }), " to parse it into a JavaScript object. Here’s a simple example:"]
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Get the content of the response as XML"
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
                  color: "#79B8FF"
                },
                children: " xmlContent"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "text"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "();"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Use xml2js to parse XML"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "xml2js."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "parseString"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(xmlContent, "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "err"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "result"
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
                children: "    if"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " (err) {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "error"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Error parsing XML:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", err);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "        return"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    }"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    // result is the parsed JavaScript object"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Parsed XML:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", result);"
              })]
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
          children: ["In the example above, ", createVNode(_components.code, {
            children: "xml2js.parseString(xmlContent, function (err, result) {...}"
          }), " is used to asynchronously parse the XML content. The parsed JavaScript object is stored in the ", createVNode(_components.code, {
            children: "result"
          }), " variable."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Handle Parsed JavaScript Object:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Once you have the parsed JavaScript object, you can access and manipulate its properties using regular JavaScript object handling techniques."
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Example: Access a property of the parsed JavaScript object"
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
                  color: "#79B8FF"
                },
                children: " value"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " result.root.element["
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "].subelement["
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "]._;"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Value from parsed XML:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", value);"
              })]
            })]
          })
        }), "\n", createVNode(_components.p, {
          children: ["In the example above, ", createVNode(_components.code, {
            children: "result.root.element[0].subelement[0]._"
          }), " is an example of accessing a property of the parsed object. The structure depends on your XML structure."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["This is just the basic usage of ", createVNode(_components.code, {
        children: "xml2js"
      }), " in Postman. You can use other features of ", createVNode(_components.code, {
        children: "xml2js"
      }), ", such as setting parsing options or handling namespaces, based on your specific needs. Refer to the ", createVNode(_components.a, {
        href: "https://github.com/Leonidas-from-XIV/node-xml2js",
        children: "xml2js Documentation"
      }), " for more detailed information."]
    }), "\n", createVNode(_components.h4, {
      id: "common-utility-functions-with-util",
      children: "Common Utility Functions with util"
    }), "\n", createVNode(_components.p, {
      children: ["In Postman, ", createVNode(_components.code, {
        children: "util"
      }), " is a global object that provides some common utility functions for use in Postman scripts. Here are some common ", createVNode(_components.code, {
        children: "util"
      }), " functions and their usage:"]
    }), "\n", createVNode(_components.h5, {
      id: "1-utilguid---generate-a-globally-unique-identifier-guid",
      children: ["1. ", createVNode(_components.code, {
        children: "util.guid()"
      }), " - Generate a Globally Unique Identifier (GUID)"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Generate a globally unique identifier"
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
              color: "#79B8FF"
            },
            children: " uniqueId"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "guid"
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
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Unique ID:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", uniqueId);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2-utiltimestamp---get-the-current-timestamp",
      children: ["2. ", createVNode(_components.code, {
        children: "util.timestamp()"
      }), " - Get the Current Timestamp"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Get the current timestamp (in milliseconds)"
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
              color: "#79B8FF"
            },
            children: " timestamp"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "timestamp"
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
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Timestamp:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", timestamp);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "3-utilrandomintmin-max---generate-a-random-integer-in-a-specified-range",
      children: ["3. ", createVNode(_components.code, {
        children: "util.randomInt(min, max)"
      }), " - Generate a Random Integer in a Specified Range"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Generate a random integer between 1 and 100"
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
              color: "#79B8FF"
            },
            children: " randomInt"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "randomInt"
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
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Random Integer:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", randomInt);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "4-utilunixtimestamp---get-the-current-timestamp-in-unix-timestamp-seconds",
      children: ["4. ", createVNode(_components.code, {
        children: "util.unixTimestamp()"
      }), " - Get the Current Timestamp in Unix Timestamp (seconds)"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Get the current timestamp (in seconds)"
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
              color: "#79B8FF"
            },
            children: " unixTimestamp"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "unixTimestamp"
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
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Unix Timestamp:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", unixTimestamp);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "5-utilencodebase64str-and-utildecodebase64base64str---base64-encoding-and-decoding",
      children: ["5. ", createVNode(_components.code, {
        children: "util.encodeBase64(str)"
      }), " and ", createVNode(_components.code, {
        children: "util.decodeBase64(base64Str)"
      }), " - Base64 Encoding and Decoding"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Base64 encoding"
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
              color: "#79B8FF"
            },
            children: " encodedString"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "encodeBase64"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Hello, World!'"
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
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Encoded String:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", encodedString);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Base64 decoding"
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
              color: "#79B8FF"
            },
            children: " decodedString"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "decodeBase64"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(encodedString);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Decoded String:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", decodedString);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "6-utileachobj-callback---iterate-over-an-object-or-array",
      children: ["6. ", createVNode(_components.code, {
        children: "util.each(obj, callback)"
      }), " - Iterate Over an Object or Array"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Iterate over an array"
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
              color: "#79B8FF"
            },
            children: " array"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "each"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array, "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "index"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`Index ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "index"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
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
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Iterate over an object"
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
              color: "#79B8FF"
            },
            children: " obj"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { a: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", b: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", c: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " };"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "each"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(obj, "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "key"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`Key ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "key"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
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
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Notes:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["In Postman scripts, you can directly use these utility functions via the ", createVNode(_components.code, {
          children: "util"
        }), " object."]
      }), "\n", createVNode(_components.li, {
        children: ["These methods provided by the ", createVNode(_components.code, {
          children: "util"
        }), " object simplify some common tasks in Postman scripts, such as generating random numbers, handling timestamps, and encoding/decoding strings."]
      }), "\n", createVNode(_components.li, {
        children: "Please refer to the Postman official documentation, as Postman continues to update and improve its script environment, and new utility functions may be introduced."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "stream-operations-with-stream",
      children: "Stream Operations with stream"
    }), "\n", createVNode(_components.p, {
      children: "In Node.js, streams are often used to handle large amounts of data, effectively reducing memory usage and improving performance. Here are some basic usage examples of streams in Node.js that you can refer to for data or file processing."
    }), "\n", createVNode(_components.h5, {
      id: "1-readable-streams",
      children: ["1. ", createVNode(_components.strong, {
        children: "Readable Streams:"
      })]
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " fs"
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
            children: "'fs'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Create a readable stream"
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
              color: "#79B8FF"
            },
            children: " readableStream"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " fs."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createReadStream"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'input.txt'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Set encoding (if it's a text file)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setEncoding"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'utf-8'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Handle data"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'data'"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "chunk"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Received chunk:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", chunk);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Handle end"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'end'"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Stream ended.'"
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
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Handle error"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'error'"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "err"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Error:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", err);"
          })]
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
    }), "\n", createVNode(_components.h5, {
      id: "2-writable-streams",
      children: ["2. ", createVNode(_components.strong, {
        children: "Writable Streams:"
      })]
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " fs"
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
            children: "'fs'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Create a writable stream"
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
              color: "#79B8FF"
            },
            children: " writableStream"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " fs."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createWriteStream"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'output.txt'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Write data"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Hello, World!"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'"
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
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Another line.'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// End writing"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "end"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Handle finish"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'finish'"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Write completed.'"
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
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Handle error"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'error'"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "err"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Error:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", err);"
          })]
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
    }), "\n", createVNode(_components.h5, {
      id: "3-transform-streams",
      children: ["3. ", createVNode(_components.strong, {
        children: "Transform Streams:"
      })]
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
            children: "Transform"
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
            children: "'stream'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Create a transform stream"
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
              color: "#79B8FF"
            },
            children: " myTransform"
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
            children: " Transform"
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
              color: "#B392F0"
            },
            children: "    transform"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "chunk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "encoding"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "callback"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Transform data"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " transformedData"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chunk."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toString"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toUpperCase"
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
              color: "#79B8FF"
            },
            children: "        this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "push"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(transformedData);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        callback"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Pipe connecting readable stream, transform stream, and writable stream"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pipe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(myTransform)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pipe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(writableStream);"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This is just some basic usage of streams in Node.js. In Postman, you can use these methods in the scripts of your requests, such as the “Pre-request Script” or “Tests” sections, by executing these scripts in the Node.js runtime environment. Please note that the stream API in Node.js can be more complex, for example, by using the ", createVNode(_components.code, {
        children: "pipeline"
      }), " function to handle the connection of multiple streams."]
    }), "\n", createVNode(_components.h4, {
      id: "timers-timers",
      children: ["Timers: ", createVNode(_components.code, {
        children: "timers"
      })]
    }), "\n", createVNode(_components.p, {
      children: "In Postman, you can use the timer functionality of Node.js to handle scheduled tasks or operations with a delay. Here are some basic usages of Node.js timers that can be used in Postman scripts."
    }), "\n", createVNode(_components.h5, {
      id: "1-settimeout---delayed-execution",
      children: ["1. ", createVNode(_components.code, {
        children: "setTimeout"
      }), " - Delayed Execution"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Delayed execution of an operation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setTimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Delayed operation.'"
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
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2000 milliseconds (2 seconds)"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2-setinterval---periodic-execution",
      children: ["2. ", createVNode(_components.code, {
        children: "setInterval"
      }), " - Periodic Execution"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Periodic execution of a repeated operation"
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
              color: "#79B8FF"
            },
            children: " intervalId"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setInterval"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Repeated operation.'"
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
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 3000 milliseconds (3 seconds)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Cancel periodic execution"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// clearInterval(intervalId);"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "3-usage-in-postman",
      children: "3. Usage in Postman"
    }), "\n", createVNode(_components.p, {
      children: "In Postman, you can use these timers in the “Pre-request Script” or “Tests” sections. For example, delaying an operation in the “Tests” section:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Delayed operation in the \"Tests\" section"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setTimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Delayed operation in Tests.'"
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
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2000 milliseconds (2 seconds)"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Please note that the code executed in the “Pre-request Script” or “Tests” sections of Postman is running in the Node.js environment, so you can use most features supported by Node.js, including timers."
    }), "\n", createVNode(_components.p, {
      children: ["In the examples above, ", createVNode(_components.code, {
        children: "setTimeout"
      }), " executes an operation once after a specified delay, and ", createVNode(_components.code, {
        children: "setInterval"
      }), " executes an operation periodically at a specified interval. In Postman, you can use these timers according to your specific needs."]
    }), "\n", createVNode(_components.h4, {
      id: "events-handling-events",
      children: ["Events Handling: ", createVNode(_components.code, {
        children: "events"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["In the Postman script environment, you can use Node.js ", createVNode(_components.code, {
        children: "events"
      }), " module to handle events. The ", createVNode(_components.code, {
        children: "events"
      }), " module provides the ", createVNode(_components.code, {
        children: "EventEmitter"
      }), " class, which can be used to define and trigger events. Here are some basic usages of using the ", createVNode(_components.code, {
        children: "events"
      }), " module in Postman with Node.js:"]
    }), "\n", createVNode(_components.h5, {
      id: "1-creating-an-event-emitter",
      children: "1. Creating an Event Emitter"
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " EventEmitter"
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
            children: "'events'"
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
              color: "#79B8FF"
            },
            children: " myEmitter"
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
            children: " EventEmitter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2-defining-an-event-handling-function",
      children: "2. Defining an Event Handling Function"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Define an event handling function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " myEventHandler"
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
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Event handled.'"
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
    }), "\n", createVNode(_components.h5, {
      id: "3-registering-an-event-handling-function",
      children: "3. Registering an Event Handling Function"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Register an event handling function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "myEmitter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'myEvent'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", myEventHandler);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "4-triggering-an-event",
      children: "4. Triggering an Event"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Trigger an event"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "myEmitter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "emit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'myEvent'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "5-example",
      children: "5. Example"
    }), "\n", createVNode(_components.p, {
      children: "In the Postman script environment, you can use events to implement callbacks or handling for asynchronous operations. Here’s a simple example demonstrating how to trigger an event after completing an asynchronous operation:"
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " EventEmitter"
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
            children: "'events'"
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
              color: "#79B8FF"
            },
            children: " myEmitter"
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
            children: " EventEmitter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Simulate an asynchronous operation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " performAsyncOperation"
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
            children: "    setTimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
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
              color: "#E1E4E8"
            },
            children: "        console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Async operation completed.'"
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
              color: "#6A737D"
            },
            children: "        // Trigger the event"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        myEmitter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "emit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'asyncOperationComplete'"
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
            children: "    }, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2000"
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
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Register an event handling function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "myEmitter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'asyncOperationComplete'"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Handling async operation completion.'"
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
              color: "#6A737D"
            },
            children: "    // You can perform logic here after the asynchronous operation completes"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Execute the asynchronous operation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "performAsyncOperation"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the above example, the ", createVNode(_components.code, {
        children: "performAsyncOperation"
      }), " function simulates an asynchronous operation, and when the operation completes, the ", createVNode(_components.code, {
        children: "asyncOperationComplete"
      }), " event is triggered using ", createVNode(_components.code, {
        children: "myEmitter.emit"
      }), ". In the event handling function, you can write logic to handle what happens after the asynchronous operation completes."]
    }), "\n", createVNode(_components.p, {
      children: "Please note that the execution of asynchronous operations in Postman scripts may be subject to limitations, so careful consideration is required in practical use."
    }), "\n", createVNode(_components.h2, {
      id: "reference-documents",
      children: "Reference Documents"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/getting-started/introduction/",
          children: "Postman Official Documentation"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/",
          children: "Newman Official Documentation"
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

const url = "src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
