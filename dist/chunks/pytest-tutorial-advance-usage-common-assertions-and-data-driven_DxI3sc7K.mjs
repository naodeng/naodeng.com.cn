import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pytest API Automation Testing Tutorial Advance Usage Common Assertions and Data Driven",
  "description": "A deep dive into advanced Pytest usage, focusing on how Pytest is commonly asserted and data-driven.",
  "date": "2023-11-15T10:32:55.000Z",
  "author": "nao.deng",
  "tags": ["Pytest", "API Testing", "Data Driven"],
  "series": ["Pytest API Automation Testing Tutorial"],
  "cover": "./pytest-tutorial-advance-usage-common-assertions-and-data-driven-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "advanced-usage",
    "text": "Advanced Usage"
  }, {
    "depth": 3,
    "slug": "common-assertions",
    "text": "Common Assertions"
  }, {
    "depth": 3,
    "slug": "data-driven",
    "text": "Data-driven"
  }, {
    "depth": 4,
    "slug": "create-the-test-configuration-file",
    "text": "Create the test configuration file"
  }, {
    "depth": 4,
    "slug": "writing-test-configuration-files",
    "text": "Writing Test Configuration Files"
  }, {
    "depth": 4,
    "slug": "create-the-test-data-file",
    "text": "Create the test data file"
  }, {
    "depth": 4,
    "slug": "writing-test-data-files",
    "text": "Writing test data files"
  }, {
    "depth": 4,
    "slug": "updating-test-cases-to-support-data-driving",
    "text": "Updating test cases to support data driving"
  }, {
    "depth": 4,
    "slug": "run-the-test-case-to-confirm-the-data-driver-is-working",
    "text": "Run the test case to confirm the data driver is working"
  }, {
    "depth": 2,
    "slug": "reference",
    "text": "Reference"
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
      id: "advanced-usage",
      children: "Advanced Usage"
    }), "\n", createVNode(_components.h3, {
      id: "common-assertions",
      children: "Common Assertions"
    }), "\n", createVNode(_components.p, {
      children: "Using Pytest During the writing of API automation test cases, we need to use various assertions to verify the expected results of the tests."
    }), "\n", createVNode(_components.p, {
      children: "Pytest provides more assertions and a flexible library of assertions to fulfill various testing needs."
    }), "\n", createVNode(_components.p, {
      children: "The following are some of the commonly used Pytest API automation test assertions:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Equality assertion"
          }), ": checks whether two values are equal."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " actual_value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " expected_value"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Unequality Assertion"
          }), ": checks if two values are not equal."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " actual_value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "!="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " expected_value"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Containment assertion"
          }), ": checks whether a value is contained in another value, usually used to check whether a string contains a substring."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " substring "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "in"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " full_string"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Membership Assertion"
          }), ": checks whether a value is in a collection, list, or other iterable object."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " item "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "in"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " iterable"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Truth Assertion"
          }), ": checks whether an expression or variable is true."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " expression"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "OR"
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " variable"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "False Value Assertion"
          }), ": checks whether an expression or variable is false."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " not"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " expression"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "OR"
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " not"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " variable"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Greater Than, Less Than, Greater Than Equal To, Less Than Equal To Assertion"
          }), ": checks whether a value is greater than, less than, greater than equal to, or less than equal to another value."]
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
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " other_value"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " other_value"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ">="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " other_value"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " other_value"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Type Assertion"
          }), ": checks that the type of a value is as expected."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " isinstance"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(value, expected_type)"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "For example, to check if a value is a string:"
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " isinstance"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(my_string, "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "str"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Exception Assertion"
          }), ": checks to see if a specific type of exception has been raised in a block of code."]
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
                children: "with"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " pytest.raises(ExpectedException):"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    # Block of code that is expected to raise an ExpectedException."
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Approximate Equality Assertion"
          }), ": checks whether two floating-point numbers are equal within some margin of error."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " math.isclose(actual_value, expected_value, "
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "rel_tol"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "1e-9"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "List Equality Assertion"
          }), ": checks if two lists are equal."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " actual_list "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " expected_list"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Dictionary Equality Assertion"
          }), ": checks if two dictionaries are equal."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " actual_dict "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " expected_dict"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Regular Expression Match Assertion"
          }), ": checks if a string matches the given regular expression."]
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
                children: " re"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " re.match(pattern, string)"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Null Assertion"
          }), ": checks whether a value is ", createVNode(_components.code, {
            children: "None"
          }), "。"]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "is"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " None"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Non-null value assertion"
          }), ": checks if a value is not ", createVNode(_components.code, {
            children: "None"
          }), "。"]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "is"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " not"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " None"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Boolean Assertion"
          }), ": checks whether a value of ", createVNode(_components.code, {
            children: "True"
          }), " or ", createVNode(_components.code, {
            children: "False"
          }), "。"]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " boolean_expression"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Empty Container Assertion"
          }), ": checks if a list, collection or dictionary is empty."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " not"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " container  "
              }), createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "# Check if the container is empty"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Contains Subset Assertion"
          }), ": checks whether a set contains another set as a subset."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " subset "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " full_set"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "String Beginning or End Assertion"
          }), ": checks whether a string begins or ends with the specified prefix or suffix."]
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
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " string.startswith(prefix)"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " string.endswith(suffix)"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Quantity Assertion"
          }), ": checks the number of elements in a list, collection, or other iterable object."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " len"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(iterable) "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " expected_length"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Range Assertion"
          }), ": checks if a value is within the specified range."]
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " lower_bound "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " value "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " upper_bound"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Document Existence Assertion"
          }), ": checking whether a document exists or not。"]
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
                children: " os"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "assert"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " os.path.exists(file_path)"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["These are some common Pytest assertions, but depending on your specific testing needs, you may want to use other assertions or combine multiple assertions to more fully validate your test results.\nDetailed documentation on assertions can be found on the official Pytest website at:", createVNode(_components.a, {
        href: "https://docs.pytest.org/en/latest/reference.html#pytest",
        children: "Pytest - Built-in fixtures, marks, and nodes"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "data-driven",
      children: "Data-driven"
    }), "\n", createVNode(_components.p, {
      children: "In the process of API automation testing. The use of data-driven is a regular testing methodology where the input data and expected output data of the test cases are stored in data files, and the testing framework executes multiple tests based on these data files to validate various aspects of the API."
    }), "\n", createVNode(_components.p, {
      children: "The test data can be easily modified without modifying the test case code."
    }), "\n", createVNode(_components.p, {
      children: "Data-driven testing helps you cover multiple scenarios efficiently and ensures that the API works properly with a variety of input data."
    }), "\n", createVNode(_components.p, {
      children: ["Refer to the demo:", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/Pytest-API-Test-Demo",
        children: "https://github.com/Automation-Test-Starter/Pytest-API-Test-Demo"
      })]
    }), "\n", createVNode(_components.h4, {
      id: "create-the-test-configuration-file",
      children: "Create the test configuration file"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Configuration file will be stored in json format for example, other formats such as YAML, CSV, etc. are similar, can be referred to."
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
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " config"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " config"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " enter"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " config"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " config"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " config.json"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "writing-test-configuration-files",
      children: "Writing Test Configuration Files"
    }), "\n", createVNode(_components.p, {
      children: "The configuration file stores the configuration information of the test environment, such as the URL of the test environment, database connection information, and so on."
    }), "\n", createVNode(_components.p, {
      children: "The contents of the test configuration file in the demo are as follows:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Configure host information"
      }), "\n", createVNode(_components.li, {
        children: "Configure the getAPI API information."
      }), "\n", createVNode(_components.li, {
        children: "Configure the postAPI API information."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"host\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://jsonplaceholder.typicode.com\""
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
              color: "#79B8FF"
            },
            children: "  \"getAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts/1\""
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
              color: "#79B8FF"
            },
            children: "  \"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts\""
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
      id: "create-the-test-data-file",
      children: "Create the test data file"
    }), "\n", createVNode(_components.p, {
      children: "The request data file and the response data file store the request data and the expected response data of the test case, respectively."
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
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " enter"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " request"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " request_data.json"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " response"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " response_data.json"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "writing-test-data-files",
      children: "Writing test data files"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Writing the request data file"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The request data file is configured with the request data for the getAPI API and the request data for the postAPI API."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"getAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"\""
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
              color: "#79B8FF"
            },
            children: "  \"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
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
              color: "#79B8FF"
            },
            children: "    \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
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
              color: "#79B8FF"
            },
            children: "    \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Writing the response data file"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The request data file is configured with the response data for the getAPI API and the response data for the postAPI API."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"getAPI\""
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
              color: "#79B8FF"
            },
            children: "      \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
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
              color: "#79B8FF"
            },
            children: "      \"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
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
              color: "#79B8FF"
            },
            children: "      \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\""
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
              color: "#79B8FF"
            },
            children: "      \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"quia et suscipit"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "suscipit recusandae consequuntur expedita et cum"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "reprehenderit molestiae ut ut quas totam"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "nostrum rerum est autem sunt rem eveniet architecto\""
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
              color: "#79B8FF"
            },
            children: "    \"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
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
              color: "#79B8FF"
            },
            children: "      \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
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
              color: "#79B8FF"
            },
            children: "      \"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
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
              color: "#79B8FF"
            },
            children: "      \"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "101"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "updating-test-cases-to-support-data-driving",
      children: "Updating test cases to support data driving"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "To differentiate, here is a new test case file named test_demo_data_driving.py"
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# get the test configuration information from the configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"config/config.json\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"r\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " json_file:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    config "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " json.load(json_file)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# get the request data from the test data file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'data/request_data.json'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'r'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " json_file:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    request_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " json.load(json_file)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# get the response data from the test data file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'data/response_data.json'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'r'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " json_file:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    response_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " json.load(json_file)"
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
            children: " TestPytestDemo"
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
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test_get_demo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self):"
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
            children: " config.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"host\""
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
            children: " config.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"getAPI\""
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
            children: " response_data.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"getAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
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
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test_post_demo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self):"
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
            children: " config.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"host\""
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
            children: " config.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
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
            children: " request_data.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
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
            children: " response_data.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
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
            children: " post_api, post_api_request_data)"
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
            children: " 201"
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
      id: "run-the-test-case-to-confirm-the-data-driver-is-working",
      children: "Run the test case to confirm the data driver is working"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "If you run the data driver support test case with demo project: test_demo_data_driving.py, it is recommended to block other test cases first, otherwise it may report errors."
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
            children: "  pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " tests/test_demo_data_driving.py"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/XQIPLf.png",
        alt: "XQIPLf"
      })
    }), "\n", createVNode(_components.h2, {
      id: "reference",
      children: "Reference"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.pytest.org/en/6.2.x/",
          children: "Pytest docs"
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

const url = "src/blog/en/API-Automation-Testing/pytest-tutorial-advance-usage-common-assertions-and-data-driven.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/pytest-tutorial-advance-usage-common-assertions-and-data-driven.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/pytest-tutorial-advance-usage-common-assertions-and-data-driven.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
