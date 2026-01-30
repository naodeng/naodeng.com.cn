import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pytest API Automation Testing Tutorial: Getting Started and Setting Up Your Environment",
  "description": "a tutorial on Pytest, focusing on getting started and preparing the environment to be built.",
  "date": "2023-11-13T10:11:15.000Z",
  "author": "nao.deng",
  "tags": ["Pytest", "API Testing"],
  "series": ["Pytest API Automation Testing Tutorial"],
  "cover": "./pytest-tutorial-getting-started-and-own-environment-preparation-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 3,
    "slug": "introducing-pytest",
    "text": "Introducing Pytest"
  }, {
    "depth": 4,
    "slug": "simple-and-easy-to-use",
    "text": "Simple and easy to use"
  }, {
    "depth": 4,
    "slug": "automatic-discovery-of-test-cases",
    "text": "Automatic Discovery of Test Cases"
  }, {
    "depth": 4,
    "slug": "rich-plugin-ecosystem",
    "text": "Rich plugin ecosystem"
  }, {
    "depth": 4,
    "slug": "parameterized-testing",
    "text": "Parameterized Testing"
  }, {
    "depth": 4,
    "slug": "exception-and-fault-localization",
    "text": "Exception and fault localization"
  }, {
    "depth": 4,
    "slug": "parallel-test-execution",
    "text": "Parallel Test Execution"
  }, {
    "depth": 4,
    "slug": "multiple-report-formats",
    "text": "Multiple Report Formats"
  }, {
    "depth": 4,
    "slug": "command-line-options",
    "text": "Command Line Options"
  }, {
    "depth": 4,
    "slug": "integration",
    "text": "Integration"
  }, {
    "depth": 4,
    "slug": "active-community",
    "text": "Active Community"
  }, {
    "depth": 3,
    "slug": "introduction-to-python-virtual-environments",
    "text": "Introduction to python virtual environments"
  }, {
    "depth": 4,
    "slug": "install-the-virtual-environment-tool",
    "text": "Install the Virtual Environment Tool"
  }, {
    "depth": 4,
    "slug": "creating-a-virtual-environment",
    "text": "Creating a virtual environment"
  }, {
    "depth": 4,
    "slug": "activate-virtual-environment",
    "text": "Activate virtual environment"
  }, {
    "depth": 4,
    "slug": "installing-dependencies-in-a-virtual-environment",
    "text": "Installing dependencies in a virtual environment"
  }, {
    "depth": 4,
    "slug": "using-a-virtual-environment",
    "text": "Using a virtual environment"
  }, {
    "depth": 4,
    "slug": "exiting-the-virtual-environment",
    "text": "Exiting the virtual environment"
  }, {
    "depth": 2,
    "slug": "project-dependencies",
    "text": "Project dependencies"
  }, {
    "depth": 2,
    "slug": "project-directory-structure",
    "text": "Project directory structure"
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
    input: "input",
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
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.h3, {
      id: "introducing-pytest",
      children: "Introducing Pytest"
    }), "\n", createVNode(_components.p, {
      children: "Pytest is a popular Python testing framework for writing, organizing, and running various types of automated tests. It provides a rich set of features that make it easy to write and manage test cases, as well as generate detailed test reports. Here are some of the key features and benefits of Pytest:"
    }), "\n", createVNode(_components.h4, {
      id: "simple-and-easy-to-use",
      children: createVNode(_components.strong, {
        children: "Simple and easy to use"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Pytest is designed to make writing test cases simple and easy to understand. You can write test assertions using Python’s standard ", createVNode(_components.code, {
        children: "assert"
      }), " statement without having to learn a new assertion syntax."]
    }), "\n", createVNode(_components.h4, {
      id: "automatic-discovery-of-test-cases",
      children: createVNode(_components.strong, {
        children: "Automatic Discovery of Test Cases"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Pytest can automatically discover and run test cases in your project without explicitly configuring the test suite. Test case files can be named ", createVNode(_components.code, {
        children: "test_*.py"
      }), " or ", createVNode(_components.code, {
        children: "*_test.py"
      }), ", or use a specific test function naming convention."]
    }), "\n", createVNode(_components.h4, {
      id: "rich-plugin-ecosystem",
      children: createVNode(_components.strong, {
        children: "Rich plugin ecosystem"
      })
    }), "\n", createVNode(_components.p, {
      children: "Pytest can be extended with plugins. There are many third-party plug-ins available to meet different testing needs, such as Allure reporting, parameterization, coverage analysis, and so on."
    }), "\n", createVNode(_components.h4, {
      id: "parameterized-testing",
      children: createVNode(_components.strong, {
        children: "Parameterized Testing"
      })
    }), "\n", createVNode(_components.p, {
      children: "Pytest supports parameterized testing, which allows you to run the same test case multiple times, but with different parameters. This reduces code duplication and improves test coverage."
    }), "\n", createVNode(_components.h4, {
      id: "exception-and-fault-localization",
      children: createVNode(_components.strong, {
        children: "Exception and fault localization"
      })
    }), "\n", createVNode(_components.p, {
      children: "Pytest provides detailed error and exception information that helps you locate and resolve problems more easily. It also provides detailed traceback information."
    }), "\n", createVNode(_components.h4, {
      id: "parallel-test-execution",
      children: createVNode(_components.strong, {
        children: "Parallel Test Execution"
      })
    }), "\n", createVNode(_components.p, {
      children: "Pytest supports parallel execution of test cases, which increases the speed of test execution, especially in large projects."
    }), "\n", createVNode(_components.h4, {
      id: "multiple-report-formats",
      children: createVNode(_components.strong, {
        children: "Multiple Report Formats"
      })
    }), "\n", createVNode(_components.p, {
      children: "Pytest supports multiple test report formats, including terminal output, JUnit XML, HTML reports and Allure reports. These reports can help you visualize test results."
    }), "\n", createVNode(_components.h4, {
      id: "command-line-options",
      children: createVNode(_components.strong, {
        children: "Command Line Options"
      })
    }), "\n", createVNode(_components.p, {
      children: "Pytest provides a rich set of command line options to customize the behavior of test runs, including filtering, retrying, coverage analysis, and more."
    }), "\n", createVNode(_components.h4, {
      id: "integration",
      children: createVNode(_components.strong, {
        children: "Integration"
      })
    }), "\n", createVNode(_components.p, {
      children: "Pytest can be easily integrated with other testing frameworks and tools (e.g. Selenium, Django, Flask, etc.) as well as continuous integration systems (e.g. Jenkins, Travis CI, etc.)."
    }), "\n", createVNode(_components.h4, {
      id: "active-community",
      children: createVNode(_components.strong, {
        children: "Active Community"
      })
    }), "\n", createVNode(_components.p, {
      children: "Pytest has an active community with extensive documentation and tutorials for learning and reference. You can also get support and solve problems in the community."
    }), "\n", createVNode(_components.p, {
      children: "In short, Pytest is a powerful and flexible testing framework for projects of all sizes and types. Its ease of use, automation capabilities, and rich set of plugins make it one of the go-to tools in Python testing."
    }), "\n", createVNode(_components.p, {
      children: ["Official website: ", createVNode(_components.a, {
        href: "https://docs.pytest.org/en/latest/",
        children: "https://docs.pytest.org/en/latest/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "introduction-to-python-virtual-environments",
      children: "Introduction to python virtual environments"
    }), "\n", createVNode(_components.p, {
      children: "A Python virtual environment is a mechanism for creating and managing multiple isolated development environments within a single Python installation. Virtual environments help resolve dependency conflicts between different projects by ensuring that each project can use its own independent Python packages and libraries without interfering with each other. Here are the steps on how to create and use a Python virtual environment:"
    }), "\n", createVNode(_components.h4, {
      id: "install-the-virtual-environment-tool",
      children: createVNode(_components.strong, {
        children: "Install the Virtual Environment Tool"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Before you begin, make sure you have installed Python’s virtual environment tools. In Python 3.3 and later, the ", createVNode(_components.code, {
        children: "venv"
      }), " module is built-in and can be used to create virtual environments. If you’re using an older version of Python, you can install the ", createVNode(_components.code, {
        children: "virtualenv"
      }), " tool."]
    }), "\n", createVNode(_components.p, {
      children: ["For Python 3.3+, the ", createVNode(_components.code, {
        children: "venv"
      }), " tool is built-in and does not require additional installation."]
    }), "\n", createVNode(_components.p, {
      children: ["For Python 2.x, you can install the ", createVNode(_components.code, {
        children: "virtualenv"
      }), " tool with the following command:"]
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
            children: " virtualenv"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "creating-a-virtual-environment",
      children: createVNode(_components.strong, {
        children: "Creating a virtual environment"
      })
    }), "\n", createVNode(_components.p, {
      children: "Open a terminal, move to the directory where you wish to create the virtual environment, and run the following command to create the virtual environment:"
    }), "\n", createVNode(_components.p, {
      children: ["Use ", createVNode(_components.code, {
        children: "venv"
      }), " (for Python 3.3+):"]
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
            children: " myenv"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Use ", createVNode(_components.code, {
        children: "virtualenv"
      }), " (for Python 2.x):"]
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
            children: "virtualenv"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " myenv"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the above command, ", createVNode(_components.code, {
        children: "myenv"
      }), " is the name of the virtual environment and you can customize the name."]
    }), "\n", createVNode(_components.h4, {
      id: "activate-virtual-environment",
      children: createVNode(_components.strong, {
        children: "Activate virtual environment"
      })
    }), "\n", createVNode(_components.p, {
      children: "To start using the virtual environment, you need to activate it. The activation command is slightly different for different operating systems:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "on macOS and Linux:"
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
              color: "#79B8FF"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " myenv/bin/activate"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "On Windows (using Command Prompt):"
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
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "myenv\\Scripts\\activate"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "On Windows (using PowerShell):"
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
              color: "#79B8FF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\\"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "myenv"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\\"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "Scripts"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\\"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "Activate.ps1"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Once the virtual environment is activated, you will see the name of the virtual environment in front of the terminal prompt, indicating that you are in the virtual environment."
    }), "\n", createVNode(_components.h4, {
      id: "installing-dependencies-in-a-virtual-environment",
      children: createVNode(_components.strong, {
        children: "Installing dependencies in a virtual environment"
      })
    }), "\n", createVNode(_components.p, {
      children: ["In a virtual environment, you can use ", createVNode(_components.code, {
        children: "pip"
      }), " to install any Python packages and libraries required by your project, and these dependencies will be associated with that virtual environment. Example:"]
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
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "using-a-virtual-environment",
      children: createVNode(_components.strong, {
        children: "Using a virtual environment"
      })
    }), "\n", createVNode(_components.p, {
      children: "When working in a virtual environment, you can run Python scripts and use packages installed in the virtual environment. This ensures that your project runs in a separate environment and does not conflict with the global Python installation."
    }), "\n", createVNode(_components.h4, {
      id: "exiting-the-virtual-environment",
      children: createVNode(_components.strong, {
        children: "Exiting the virtual environment"
      })
    }), "\n", createVNode(_components.p, {
      children: "To exit the virtual environment, simply run the following command in a terminal:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "deactivate"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This returns you to the global Python environment."
    }), "\n", createVNode(_components.p, {
      children: "By using a virtual environment, you can maintain clean dependencies between projects and ensure project stability and isolation. This is a good practice in Python development."
    }), "\n", createVNode(_components.h2, {
      id: "project-dependencies",
      children: "Project dependencies"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The following environments need to be installed in advance"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " python, demo version is v3.11.6"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Just install python 3.x or higher."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "project-directory-structure",
      children: "Project directory structure"
    }), "\n", createVNode(_components.p, {
      children: "The following is an example of the directory structure of a Pytest API automation test project:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Subsequent demo projects will introduce allure reports, so there will be an additional allure-report directory."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Pytest-allure-demo/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── tests/                  # test case files"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── test_login.py       # Example test case file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── test_order.py       # Example test case file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   └── ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── data/                   # test data files (e.g. JSON, CSV, etc.)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── dev_test_data.json      #  Test data file for development environment."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── prod_test_data.json      #  Test data file for prod environment."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── config/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── dev_config.json  # Development environment configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── prod_config.json  # Production environment configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── conftest.py             # Pytest's global configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── pytest.ini              # Pytest configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── requirements.txt        # Project dependencies file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    └── allure-report/          # Allure reports"
          })
        })]
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

const url = "src/blog/en/API-Automation-Testing/pytest-tutorial-getting-started-and-own-environment-preparation.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/pytest-tutorial-getting-started-and-own-environment-preparation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/pytest-tutorial-getting-started-and-own-environment-preparation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
