import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "SuperTest API Automation Testing Tutorial: Advanced Usage - Common Assertions",
  "description": "This blog focuses on advanced usage of Supertest, with a particular focus on commonly used assertions. ",
  "date": "2023-11-08T09:38:34.000Z",
  "author": "nao.deng",
  "tags": ["Supertest", "API Testing"],
  "series": ["SuperTest API Automation Testing Tutorial"],
  "cover": "./supertest-tutorial-advance-usage-common-assertions-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "common-assertions",
    "text": "Common Assertions"
  }, {
    "depth": 3,
    "slug": "supertests-built-in-assertions",
    "text": "SuperTest’s built-in assertions"
  }, {
    "depth": 3,
    "slug": "common-assertions-for-chai",
    "text": "Common Assertions for CHAI"
  }, {
    "depth": 3,
    "slug": "common-assertions-for-jest",
    "text": "Common Assertions for Jest"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "common-assertions",
      children: "Common Assertions"
    }), "\n", createVNode(_components.p, {
      children: "The following is an overview of common assertions used by SuperTest, CHAI and Jest."
    }), "\n", createVNode(_components.h3, {
      id: "supertests-built-in-assertions",
      children: "SuperTest’s built-in assertions"
    }), "\n", createVNode(_components.p, {
      children: ["Supertest is a more advanced library built on ", createVNode(_components.a, {
        href: "https://github.com/ladjs/superagent",
        children: "SuperAgent"
      }), ", so Supertest can easily use SuperAgent’s HTTP assertions."]
    }), "\n", createVNode(_components.p, {
      children: "Examples are as follows:"
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
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(status[, fn]) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Assert response status code."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(status, body[, fn]) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Assert response status code and body."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(body[, fn]) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Assert response body text with a string, regular expression, or parsed body object."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(field, value[, fn]) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Assert header field value with a string or regular expression."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {}) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Pass a custom assertion function. It'll be given the response object to check. If the check fails, throw an error."
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "common-assertions-for-chai",
      children: "Common Assertions for CHAI"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Equality Assertions"
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
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the actual value is equal to the expected value."
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
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the actual value is deeply equal to the expected value, for object and array comparisons."
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
            children: "(actual).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "eql"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Same as deep.equal for deep-equal comparisons."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Inclusion Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "include"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the array contains the specified value."
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
            children: "(string).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "include"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(substring) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the string contains the specified substring."
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
            children: "(object).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "include"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the object contains the specified key."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Type Assertions"
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
            children: "(type) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the type of the actual value is equal to the specified type."
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
            children: "an"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(type) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Same as to.be.a for type assertions."
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
            children: "(actual).to.be.an."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(constructor) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the actual value is an instance of the specified constructor."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Truthiness Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value).to.be.true "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is true."
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
            children: "(value).to.be.false "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is false."
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
            children: "(value).to.exist "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value exists, is not null and is not undefined."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Length Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(length) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the length of the array is equal to the specified length."
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
            children: "(string).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lengthOf"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(length) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the length of the string is equal to the specified length."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Empty Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array).to.be.empty "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify if the array is empty."
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
            children: "(string).to.be.empty "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the string is empty."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Range Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "within"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(min, max) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is within the specified range."
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
            children: "(value).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "above"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(min) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is greater than the specified value."
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
            children: "(value).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "below"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(max) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is less than the specified value."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Exception Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fn).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "throw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(error) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the function throws an exception of the specified type."
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
            children: "(fn).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "throw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(message) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the function throws an exception containing the specified message."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Existence Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(object).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "property"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the object contains the specified property."
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
            children: "(array).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "members"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(subset) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the array contains the specified members."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["For more chai assertions, see ", createVNode(_components.a, {
        href: "https://www.chaijs.com/api/assert/",
        children: "https://www.chaijs.com/api/assert/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "common-assertions-for-jest",
      children: "Common Assertions for Jest"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Equality Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the actual value is strictly equal to the expected value."
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
            children: "(actual)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toEqual"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the actual value is deeply equal to the expected value, for object and array comparisons."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Inequality Assertions"
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
            children: "(actual).not."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the actual value is not equal to the expected value."
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Inclusion Assertions"
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
            children: "(array)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toContain"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the array contains the specified value."
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Type Assertions"
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
            children: "(actual)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeTypeOf"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the type of the actual value is equal to the specified type."
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Truthiness Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeTruthy"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is true."
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
            children: "(value)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeFalsy"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is false."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Asynchronous Assertions"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(promise).resolves."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the asynchronous operation completed successfully and return a result matching the expected value."
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Exception Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fn)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toThrow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(error) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the function throws an exception of the specified type."
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
            children: "(fn)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toThrow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(message) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the function throws an exception containing the specified message."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Scope Assertions"
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
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeGreaterThanOrEqual"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(min) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is greater than or equal to the specified minimum."
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
            children: "(value)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeLessThanOrEqual"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(max) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the value is less than or equal to the specified maximum."
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Object Property Assertions"
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
            children: "(object)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toHaveProperty"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key, value) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the object contains the specified property and that the value of the property is equal to the specified value."
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["For more Jest assertions, see", createVNode(_components.a, {
        href: "https://jestjs.io/docs/expect",
        children: "https://jestjs.io/docs/expect"
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

const url = "src/blog/en/API-Automation-Testing/supertest-tutorial-advance-usage-common-assertions.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/supertest-tutorial-advance-usage-common-assertions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/supertest-tutorial-advance-usage-common-assertions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
