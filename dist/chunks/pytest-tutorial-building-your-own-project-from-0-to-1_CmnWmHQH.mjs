import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pytest API Automation Testing Tutorial: Building a Pytest API Automation Test project from 0 to 1",
  "description": "dive into how to build a Pytest API automation testing project from scratch.Pytest is a popular Java library for performing REST API testing, providing powerful tools that make it easy to write automated test scripts to validate the API'sbehavior. ",
  "date": "2023-11-14T01:58:14.000Z",
  "author": "nao.deng",
  "tags": ["Pytest", "API Testing"],
  "series": ["Pytest API Automation Testing Tutorial"],
  "cover": "./pytest-tutorial-building-your-own-project-from-0-to-1-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "build-a-pytest-api-automation-test-project-from-0-to-1",
    "text": "Build a Pytest API Automation Test Project from 0 to 1"
  }, {
    "depth": 3,
    "slug": "1-create-a-project-directory",
    "text": "1. Create a project directory"
  }, {
    "depth": 3,
    "slug": "2project-initialization",
    "text": "2.Project initialization"
  }, {
    "depth": 3,
    "slug": "3install-project-dependencies",
    "text": "3.Install project dependencies"
  }, {
    "depth": 3,
    "slug": "4-create-new-test-files-and-test-cases",
    "text": "4. Create new test files and test cases"
  }, {
    "depth": 3,
    "slug": "5-writing-test-cases",
    "text": "5. Writing Test Cases"
  }, {
    "depth": 3,
    "slug": "6run-test-cases",
    "text": "6.Run test cases"
  }, {
    "depth": 3,
    "slug": "7view-test-report",
    "text": "7.View test report"
  }, {
    "depth": 3,
    "slug": "8integration-pytest-html-reporter-test-report",
    "text": "8.Integration pytest-html-reporter test report"
  }, {
    "depth": 4,
    "slug": "81-install-pytest-html-reporter-dependency",
    "text": "8.1 Install pytest-html-reporter dependency"
  }, {
    "depth": 4,
    "slug": "82-configuring-test-report-parameters",
    "text": "8.2 Configuring Test Report Parameters"
  }, {
    "depth": 4,
    "slug": "83-run-test-cases",
    "text": "8.3 Run test cases"
  }, {
    "depth": 4,
    "slug": "84-viewing-the-test-report",
    "text": "8.4 Viewing the test report"
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
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "build-a-pytest-api-automation-test-project-from-0-to-1",
      children: "Build a Pytest API Automation Test Project from 0 to 1"
    }), "\n", createVNode(_components.h3, {
      id: "1-create-a-project-directory",
      children: "1. Create a project directory"
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
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Pytest-API-Testing-Demo"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "2project-initialization",
      children: "2.Project initialization"
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
            children: " Go"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
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
            children: " Pytest-API-Testing-Demo"
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
            children: " Create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " python"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " virtual"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " environment"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "python"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " venv"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " .env"
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
            children: " Enable"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " python"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " virtual"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " environment"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " .env/bin/activate"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3install-project-dependencies",
      children: "3.Install project dependencies"
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
            children: " Install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " requests"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " package"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " requests"
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
            children: " Install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " package"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " pytest"
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
            children: " Save"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " dependencies"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " requirements.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file."
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " freeze"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " requirements.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-create-new-test-files-and-test-cases",
      children: "4. Create new test files and test cases"
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
            children: " Create"
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
            children: " tests"
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
            children: " tests"
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
            children: " Create"
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
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " case"
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
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " tests"
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
            children: " test_demo.py"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "5-writing-test-cases",
      children: "5. Writing Test Cases"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The test API can be referred to the demoAPI.md file in the project."
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
            children: "        base_url "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"https://jsonplaceholder.typicode.com\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # SEND REQUEST"
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
            children: " requests.get("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "f"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "base_url"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/posts/1\""
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
            children: "        # ASSERT"
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
            children: " response.json()["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'userId'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
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
            children: " response.json()["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'id'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
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
            children: "        base_url "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"https://jsonplaceholder.typicode.com\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        requests_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
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
            children: "            \"title\""
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
              color: "#9ECBFF"
            },
            children: "            \"body\""
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
              color: "#9ECBFF"
            },
            children: "            \"userId\""
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
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # SEND REQUEST"
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
            children: " requests.post("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "f"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "base_url"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/posts\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", requests_data)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # ASSERT"
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
              color: "#79B8FF"
            },
            children: "        print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(response.json())"
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
            children: " response.json()["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'userId'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '1'"
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
            children: " response.json()["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'id'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 101"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "6run-test-cases",
      children: "6.Run test cases"
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
    }), "\n", createVNode(_components.h3, {
      id: "7view-test-report",
      children: "7.View test report"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/CsoB4y.png",
        alt: "CsoB4y"
      })
    }), "\n", createVNode(_components.h3, {
      id: "8integration-pytest-html-reporter-test-report",
      children: "8.Integration pytest-html-reporter test report"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.a, {
          href: "https://github.com/prashanth-sams/pytest-html-reporter",
          children: "https://github.com/prashanth-sams/pytest-html-reporter"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "81-install-pytest-html-reporter-dependency",
      children: "8.1 Install pytest-html-reporter dependency"
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
            children: " pytest-html-reporter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "82-configuring-test-report-parameters",
      children: "8.2 Configuring Test Report Parameters"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Create a new pytest.ini file in the project root directory."
      }), "\n", createVNode(_components.li, {
        children: "Add the following"
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
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "[pytest]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "addopts"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " = -vs -rf --"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "html-report"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "=./report --"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'PYTEST REPORT'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " --self-contained-html"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "83-run-test-cases",
      children: "8.3 Run test cases"
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
    }), "\n", createVNode(_components.h4, {
      id: "84-viewing-the-test-report",
      children: "8.4 Viewing the test report"
    }), "\n", createVNode(_components.p, {
      children: "The report is located in the report directory in the project root directory, use your browser to open the pytest_html_report.html file to view it."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/8JdxbA.png",
        alt: "8JdxbA"
      })
    }), "\n", createVNode(_components.h2, {
      id: "reference",
      children: "reference"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["pytest: ", createVNode(_components.a, {
          href: "https://docs.pytest.org/en/latest/",
          children: "https://docs.pytest.org/en/latest/"
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

const url = "src/blog/en/API-Automation-Testing/pytest-tutorial-building-your-own-project-from-0-to-1.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/pytest-tutorial-building-your-own-project-from-0-to-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/pytest-tutorial-building-your-own-project-from-0-to-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
