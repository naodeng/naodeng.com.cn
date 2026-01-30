import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pytest API Automation Testing Tutorial Advance Usage Filtering test case execution and Concurrent testing",
  "description": "Focus on test case screening, concurrency testing and distributed testing. Learn how to execute test cases in a targeted manner to improve testing efficiency. Explore Pytest concurrent testing features and learn how to execute multiple test cases at the same time to reduce testing time.",
  "date": "2023-11-20T07:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Pytest", "API Testing"],
  "series": ["Pytest API Automation Testing Tutorial"],
  "cover": "./pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "advanced-usage",
    "text": "Advanced Usage"
  }, {
    "depth": 3,
    "slug": "concurrent-testing-and-distributed-testing",
    "text": "concurrent testing and distributed testing"
  }, {
    "depth": 4,
    "slug": "pytest-xdist-feature-introduction",
    "text": "pytest-xdist Feature Introduction"
  }, {
    "depth": 4,
    "slug": "installing-pytest-xdist-dependency",
    "text": "Installing pytest-xdist dependency"
  }, {
    "depth": 4,
    "slug": "example-of-running-a-test-case-concurrently",
    "text": "Example of running a test case concurrently"
  }, {
    "depth": 5,
    "slug": "execute-test-cases-concurrently-with-3-workers",
    "text": "Execute test cases concurrently with 3 workers"
  }, {
    "depth": 5,
    "slug": "concurrently-executes-the-test-cases-with-3-workers-and-each-worker-prints-the-progress-of-the-test-cases",
    "text": "concurrently executes the test cases with 3 workers, and each worker prints the progress of the test cases"
  }, {
    "depth": 4,
    "slug": "distributed-testing-example",
    "text": "Distributed testing example"
  }, {
    "depth": 5,
    "slug": "distributed-test-where-each-node-runs-a-set-of-tests",
    "text": "Distributed test where each node runs a set of tests"
  }, {
    "depth": 5,
    "slug": "distributed-testing-where-each-node-runs-a-set-of-tests-and-each-worker-prints-the-progress-of-the-test-cases",
    "text": "Distributed testing, where each node runs a set of tests and each worker prints the progress of the test cases"
  }, {
    "depth": 5,
    "slug": "distributed-testing-each-node-runs-a-set-of-tests-and-each-worker-prints-the-progress-of-the-test-cases-as-well-as-the-output-of-the-test-logs",
    "text": "Distributed testing, each node runs a set of tests, and each worker prints the progress of the test cases, as well as the output of the test logs"
  }, {
    "depth": 3,
    "slug": "filtering-test-case-execution",
    "text": "Filtering test case execution"
  }, {
    "depth": 4,
    "slug": "defining-pytest-markers",
    "text": "Defining Pytest Markers"
  }, {
    "depth": 4,
    "slug": "marking-test-cases",
    "text": "Marking Test Cases"
  }, {
    "depth": 4,
    "slug": "filtering-test-case-execution-1",
    "text": "Filtering Test Case Execution"
  }, {
    "depth": 2,
    "slug": "reference",
    "text": "reference"
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
    img: "img",
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
    }), "\n", createVNode(_components.h3, {
      id: "concurrent-testing-and-distributed-testing",
      children: "concurrent testing and distributed testing"
    }), "\n", createVNode(_components.p, {
      children: "In the daily process of API automation testing, concurrent execution of test cases is required to improve testing efficiency."
    }), "\n", createVNode(_components.p, {
      children: "Sometimes it is also necessary to introduce distributed testing in order to run test cases on multiple machines at the same time, which can also better improve testing efficiency."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "pytest-xdist"
      }), " is a plugin for Pytest that provides some corresponding functionality, mainly for supporting concurrent and distributed testing."]
    }), "\n", createVNode(_components.h4, {
      id: "pytest-xdist-feature-introduction",
      children: [createVNode(_components.code, {
        children: "pytest-xdist"
      }), " Feature Introduction"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Concurrently run tests"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Use the ", createVNode(_components.code, {
              children: "-n"
            }), " option: ", createVNode(_components.code, {
              children: "pytest -n NUM"
            }), " allows running tests concurrently, where ", createVNode(_components.code, {
              children: "NUM"
            }), " is the number of concurrent workers. This can speed up test execution, especially on computers with multiple CPU cores."]
          }), "\n"]
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
                children: "pytest"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -n"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 3"
              }), createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "  # Start 3 concurrent workers to execute the test"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Distributed testing"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Use ", createVNode(_components.code, {
              children: "pytest --dist=loadscope"
            }), ": allows tests to be executed on multiple nodes and test runs can be completed faster with distributed testing."]
          }), "\n"]
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
                children: "pytest"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --dist=loadscope"
              })]
            })
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Use ", createVNode(_components.code, {
              children: "pytest --dist=each"
            }), ": run a set of tests per node, for distributed testing."]
          }), "\n"]
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
                children: "pytest"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --dist=each"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Parameterized tests and Concurrency"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Use of ", createVNode(_components.code, {
              children: "pytest.mark.run"
            }), ": In conjunction with the ", createVNode(_components.code, {
              children: "pytest.mark.run"
            }), " tag, tests with different tags can optionally be run on different processes or nodes."]
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "@pytest.mark.run"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "processes"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "2"
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
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " test_example"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "():"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    pass"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Distributed environment setup"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Use ", createVNode(_components.code, {
              children: "pytest_configure_node"
            }), ": you can configure the tests before running them on the node."]
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " pytest_configure_node"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(node):"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    node.slaveinput["
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'my_option'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " 'some value'"
              })]
            })]
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Use ", createVNode(_components.code, {
              children: "pytest_configure_node"
            }), ": you can configure the tests before running them on the node."]
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " pytest_configure_node"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(node):"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    node.slaveinput["
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'my_option'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " 'some value'"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Distributed test environment destruction"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Use ", createVNode(_components.code, {
              children: "pytest_configure_node"
            }), ": you can clean up after running tests on a node."]
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " pytest_configure_node"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(node):"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    # Configure the node"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    yield"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    # Perform cleanup after running tests on nodes"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "    print"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"Cleaning up after test run on node "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "%s"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " %"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " node.gateway.id)"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["These are some of the features provided by ", createVNode(_components.code, {
        children: "pytest-xdist"
      }), " that can help you perform concurrent and distributed tests more efficiently to speed up test execution and increase efficiency. Be sure to consult the ", createVNode(_components.code, {
        children: "pytest-xdist"
      }), " documentation for more detailed information and usage examples before using it."]
    }), "\n", createVNode(_components.h4, {
      id: "installing-pytest-xdist-dependency",
      children: ["Installing ", createVNode(_components.code, {
        children: "pytest-xdist"
      }), " dependency"]
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
            children: "pip"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pytest-xdist"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "example-of-running-a-test-case-concurrently",
      children: "Example of running a test case concurrently"
    }), "\n", createVNode(_components.h5, {
      id: "execute-test-cases-concurrently-with-3-workers",
      children: "Execute test cases concurrently with 3 workers"
    }), "\n", createVNode(_components.p, {
      children: "Run the following commands to see how long the test cases take to execute"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Concurrent Execution"
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
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/LKHRct.png",
        alt: "LKHRct"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Default Parallel Execution"
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
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5y442s.png",
        alt: "5y442s"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "Parallel execution took 9.81s"
      }), " while ", createVNode(_components.code, {
        children: "Concurrent execution took 1.63s"
      }), ", you can see that concurrent execution of test cases can greatly improve the Parallel of testing."]
    }), "\n", createVNode(_components.h5, {
      id: "concurrently-executes-the-test-cases-with-3-workers-and-each-worker-prints-the-progress-of-the-test-cases",
      children: "concurrently executes the test cases with 3 workers, and each worker prints the progress of the test cases"
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
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -v"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5krJia.png",
        alt: "5krJia"
      })
    }), "\n", createVNode(_components.p, {
      children: "The progress of the test is printed in the test results, which provides a better understanding of the execution of the test cases."
    }), "\n", createVNode(_components.h4, {
      id: "distributed-testing-example",
      children: "Distributed testing example"
    }), "\n", createVNode(_components.h5, {
      id: "distributed-test-where-each-node-runs-a-set-of-tests",
      children: "Distributed test where each node runs a set of tests"
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
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --dist=each"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/W1akqS.png",
        alt: "W1akqS"
      })
    }), "\n", createVNode(_components.p, {
      children: "Distributed testing allows for faster test runs."
    }), "\n", createVNode(_components.h5, {
      id: "distributed-testing-where-each-node-runs-a-set-of-tests-and-each-worker-prints-the-progress-of-the-test-cases",
      children: "Distributed testing, where each node runs a set of tests and each worker prints the progress of the test cases"
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
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --dist=each"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -v"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/sMlawH.png",
        alt: "sMlawH"
      })
    }), "\n", createVNode(_components.p, {
      children: "The progress of the test will be printed in the test results, so you can better understand the execution of the test cases."
    }), "\n", createVNode(_components.h5, {
      id: "distributed-testing-each-node-runs-a-set-of-tests-and-each-worker-prints-the-progress-of-the-test-cases-as-well-as-the-output-of-the-test-logs",
      children: "Distributed testing, each node runs a set of tests, and each worker prints the progress of the test cases, as well as the output of the test logs"
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
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --dist=each"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -v"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --capture=no"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/RkNSDb.png",
        alt: "RkNSDb"
      })
    }), "\n", createVNode(_components.p, {
      children: "The output of the test log is printed in the test results, which gives a better understanding of the execution of the test cases."
    }), "\n", createVNode(_components.h3, {
      id: "filtering-test-case-execution",
      children: "Filtering test case execution"
    }), "\n", createVNode(_components.p, {
      children: "In the daily API testing process, we need to selectively execute test cases according to the actual situation in order to improve the testing efficiency."
    }), "\n", createVNode(_components.p, {
      children: "Generally, when we use allure test reports, we can use the Allure tag feature to filter the use cases corresponding to the tag to execute the test, but the Pytest framework does not directly support running tests based on Allure tags. However, the Pytest framework does not directly support running tests based on Allure tags, so you can use Pytest markers to accomplish this."
    }), "\n", createVNode(_components.p, {
      children: ["Pytest provides a ", createVNode(_components.code, {
        children: "marks"
      }), " tagging feature that can be used to tag different types of test cases and then filter them for execution."]
    }), "\n", createVNode(_components.p, {
      children: "The general process is that you can mark tests with custom markers (e.g. Regression/Smoke) and then use pytest’s -m option to run only those tests."
    }), "\n", createVNode(_components.h4, {
      id: "defining-pytest-markers",
      children: "Defining Pytest Markers"
    }), "\n", createVNode(_components.p, {
      children: "Edit the pytest.ini file and add the following: customize the type of markers"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Regression: Marks the use case for regression testing."
      }), "\n", createVNode(_components.li, {
        children: "Smoke: mark it as a use case for smoke testing"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ini",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "markers"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ="
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Regression: marks tests as Regression"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Smoke: marks tests as Smoke"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "marking-test-cases",
      children: "Marking Test Cases"
    }), "\n", createVNode(_components.p, {
      children: "The operation steps are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Introduce pytest"
      }), "\n", createVNode(_components.li, {
        children: ["Mark the test case with ", createVNode(_components.code, {
          children: "@pytest.mark"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "To differentiate, create a new test case file named test_demo_filter.py."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
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
            children: " pytest"
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
            children: " requests"
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
            children: " json"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " TestPytestMultiEnvDemo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    @pytest.mark.Regression"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  # mark the test case as regression"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test_get_demo_filter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, env_config, env_request_data, env_response_data):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        host "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_config["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"host\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        get_api "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_config["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"getAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        get_api_response_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_response_data["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"getAPI\""
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
              color: "#6A737D"
            },
            children: "        # send request"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " requests.get(host"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "get_api)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # assert"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        assert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.status_code "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 200"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        assert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.json() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " get_api_response_data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    @pytest.mark.Smoke"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  # mark the test case as smoke"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test_post_demo_filter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, env_config, env_request_data, env_response_data):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        host "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_config["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"host\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        post_api "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_config["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        post_api_request_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_request_data["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"make the request\""
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
            children: "        post_api_response_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_response_data["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
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
              color: "#6A737D"
            },
            children: "        # Your test code here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " requests.post(host "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " post_api, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "post_api_request_data)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"verify the response status code\""
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
              color: "#F97583"
            },
            children: "        assert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.status_code "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 201"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"verify the response data\""
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
              color: "#F97583"
            },
            children: "        assert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.json() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " post_api_response_data"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "filtering-test-case-execution-1",
      children: "Filtering Test Case Execution"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Running Regression-tagged test cases"
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
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Regression"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command tells pytest to run only the tests labeled Regression."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/d8dMGa.png",
        alt: "d8dMGa"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Running Smoke-tagged test cases"
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
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Smoke"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command tells pytest to run only the tests labeled Smoke."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112014VOVT3v.png",
        alt: "2023112014VOVT3v"
      })
    }), "\n", createVNode(_components.h2, {
      id: "reference",
      children: "reference"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["pytest-xdist docs:", createVNode(_components.a, {
          href: "https://pytest-xdist.readthedocs.io/en/stable/",
          children: "https://pytest-xdist.readthedocs.io/en/stable/"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["pytest makers docs:", createVNode(_components.a, {
          href: "https://docs.pytest.org/en/6.2.x/example/markers.html",
          children: "https://docs.pytest.org/en/6.2.x/example/markers.html"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["pytest docs:", createVNode(_components.a, {
          href: "https://docs.pytest.org/en/6.2.x/",
          children: "https://docs.pytest.org/en/6.2.x/"
        })]
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

const url = "src/blog/en/API-Automation-Testing/pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
