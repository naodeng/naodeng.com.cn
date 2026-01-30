import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Postman API Automation Testing Tutorial Advance Usage Integration CI CD and allure test report",
  "description": "This advanced guide focuses on the integration of Postman API automation testing with CI/CD and GitHub Actions, along with the incorporation of Allure test reports. Learn how to seamlessly integrate Postman tests into the CI/CD process, achieving automated testing through GitHub Actions. Additionally, understand how to integrate the Allure test report framework to generate detailed test result reports.",
  "date": "2023-11-22T09:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Postman", "API Testing", "CI/CD", "Allure"],
  "categories": ["API Automation Testing", "Postman"],
  "series": ["Postman API Automation Testing Tutorial"],
  "cover": "./postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "advanced-usage",
    "text": "Advanced Usage"
  }, {
    "depth": 3,
    "slug": "generating-html-test-reports",
    "text": "Generating HTML Test Reports"
  }, {
    "depth": 4,
    "slug": "installing-the-newman-reporter-htmlextra-dependency",
    "text": "Installing the newman-reporter-htmlextra Dependency"
  }, {
    "depth": 4,
    "slug": "adjusting-packagejson",
    "text": "Adjusting package.json"
  }, {
    "depth": 4,
    "slug": "run-test-cases-to-generate-html-report",
    "text": "Run Test Cases to Generate HTML Report"
  }, {
    "depth": 4,
    "slug": "generating-reports-in-multiple-formats",
    "text": "Generating Reports in Multiple Formats"
  }, {
    "depth": 3,
    "slug": "continuous-integration-ci-with-cicd",
    "text": "Continuous Integration (CI) with CI/CD"
  }, {
    "depth": 4,
    "slug": "integrating-with-github-actions",
    "text": "Integrating with GitHub Actions"
  }, {
    "depth": 3,
    "slug": "integrating-allure-test-report",
    "text": "Integrating Allure Test Report"
  }, {
    "depth": 4,
    "slug": "installing-allure-test-report-dependencies",
    "text": "Installing Allure Test Report Dependencies"
  }, {
    "depth": 4,
    "slug": "adjusting-the-script-in-packagejson-for-generating-allure-test-reports",
    "text": "Adjusting the Script in package.json for Generating Allure Test Reports"
  }, {
    "depth": 4,
    "slug": "adjusting-postman-test-cases",
    "text": "Adjusting Postman Test Cases"
  }, {
    "depth": 4,
    "slug": "run-test-cases-to-generate-allure-report",
    "text": "Run Test Cases to Generate Allure Report"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "advanced-usage",
      children: "Advanced Usage"
    }), "\n", createVNode(_components.p, {
      children: "This section will cover some advanced usages of Postman and Newman, including testing data, testing scripts, testing reports, and report integration. It will also explain how to integrate Postman and Newman into the CI/CD process for automated testing."
    }), "\n", createVNode(_components.h3, {
      id: "generating-html-test-reports",
      children: "Generating HTML Test Reports"
    }), "\n", createVNode(_components.p, {
      children: ["Using the ", createVNode(_components.a, {
        href: "https://github.com/DannyDainton/newman-reporter-htmlextra",
        children: "newman-reporter-htmlextra"
      }), " as an example, the demo will illustrate how to generate HTML test reports."]
    }), "\n", createVNode(_components.h4, {
      id: "installing-the-newman-reporter-htmlextra-dependency",
      children: "Installing the newman-reporter-htmlextra Dependency"
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
            children: " newman-reporter-htmlextra"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --save-dev"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Note: Currently, there are compatibility issues with some packages in the latest version (V6) of Newman regarding HTML test reports. Therefore, version 5.1.2 is used here."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "adjusting-packagejson",
      children: "Adjusting package.json"
    }), "\n", createVNode(_components.p, {
      children: "In the package.json file, update the test script to run test cases and generate HTML test reports:"
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"test\": \"newman run Testcase/demo.postman_collection.json -e Env/DemoEnv.postman_environment.json -r htmlextra --reporter-htmlextra-export ./Report/Postman-newman-demo-api-testing-report.html\""
          })
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Specify the path for the HTML test report output as Report/Postman-newman-demo-api-testing-report.html"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "run-test-cases-to-generate-html-report",
      children: "Run Test Cases to Generate HTML Report"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Run the test cases"
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
            children: " npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " test"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Check the Report folder, you will find that a Postman-newman-demo-api-testing-report.html file has been generated."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112211zs7xCl.png",
        alt: "2023112211zs7xCl"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Open the Postman-newman-demo-api-testing-report.html file in a browser to view the HTML test report."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112211IHIUzV.png",
        alt: "2023112211IHIUzV"
      })
    }), "\n", createVNode(_components.h4, {
      id: "generating-reports-in-multiple-formats",
      children: "Generating Reports in Multiple Formats"
    }), "\n", createVNode(_components.p, {
      children: "The previous configuration is for generating HTML-format test reports. If you want to output reports in multiple formats, such as the command line (CLI) report, add the following script to the package.json file:"
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"test\": \"newman run Testcase/demo.postman_collection.json -e Env/DemoEnv.postman_environment.json -r cli,htmlextra --reporter-htmlextra-export ./Report/Postman-newman-demo-api-testing-report.html\""
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Run the test cases again, and you will find both HTML and CLI format test reports in the Report folder."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/202311221109B7Fg.png",
        alt: "202311221109B7Fg"
      })
    }), "\n", createVNode(_components.h3, {
      id: "continuous-integration-ci-with-cicd",
      children: "Continuous Integration (CI) with CI/CD"
    }), "\n", createVNode(_components.p, {
      children: "Integrating API automation test code into the CI/CD process enables automated testing, improving testing efficiency."
    }), "\n", createVNode(_components.h4, {
      id: "integrating-with-github-actions",
      children: "Integrating with GitHub Actions"
    }), "\n", createVNode(_components.p, {
      children: "Taking GitHub Actions as an example, similar steps can be followed for other CI tools."
    }), "\n", createVNode(_components.p, {
      children: ["Refer to the demo: ", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/Postman-Newman-demo",
        children: "Postman-Newman-demo"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Create the .github/workflows directory: In your GitHub repository, create a directory named .github/workflows. This will be the place to store GitHub Actions workflow files."
    }), "\n", createVNode(_components.p, {
      children: "Create the workflow file: In the .github/workflows directory, create a YAML-formatted workflow file, for example, postman.yml."
    }), "\n", createVNode(_components.p, {
      children: "Edit the postman.yml file: Copy and paste the following content into the file:"
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
            children: "name: RUN Postman API Test CI"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "on:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  push:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    branches: [ \"main\" ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pull_request:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    branches: [ \"main\" ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "jobs:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  RUN-Postman-API-Test:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    runs-on: ubuntu-latest"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    strategy:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      matrix:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        node-version: [ 18.x]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    steps:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - uses: actions/checkout@v3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Use Node.js ${{ matrix.node-version }}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        uses: actions/setup-node@v3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        with:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          node-version: ${{ matrix.node-version }}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          cache: 'npm'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Installation of related packages"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        run: npm ci"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: RUN SuperTest API Testing"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        run: npm test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Archive Postman test report"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        uses: actions/upload-artifact@v3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        with:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          name: Postman-test-report"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          path: Report"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Upload Postman report to GitHub"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        uses: actions/upload-artifact@v3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        with:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          name: Postman-test-report"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          path: Report"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Commit your code: Add the postman.yml file to the repository and commit the changes."
      }), "\n", createVNode(_components.li, {
        children: "View the test report: In GitHub, navigate to your repository. Click on the Actions tab at the top and then click on the RUN-Postman-API-Test workflow on the left. You should see the workflow running, and once it completes, you can view the results."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112213AFVWZe.png",
        alt: "2023112213AFVWZe"
      })
    }), "\n", createVNode(_components.h3, {
      id: "integrating-allure-test-report",
      children: "Integrating Allure Test Report"
    }), "\n", createVNode(_components.p, {
      children: "Allure is a lightweight, flexible, and multi-language-supported test reporting tool that can generate various types of test reports, including pie charts, bar charts, line charts, etc., making it easy to visualize test results."
    }), "\n", createVNode(_components.h4, {
      id: "installing-allure-test-report-dependencies",
      children: "Installing Allure Test Report Dependencies"
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
            children: " newman-reporter-allure"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --save-dev"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "adjusting-the-script-in-packagejson-for-generating-allure-test-reports",
      children: "Adjusting the Script in package.json for Generating Allure Test Reports"
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"test\": \"newman run Testcase/demo.postman_collection.json -e Env/DemoEnv.postman_environment.json -r cli,allure --reporter-allure-export ./allure-results\""
          })
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "adjusting-postman-test-cases",
      children: "Adjusting Postman Test Cases"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Modify the Tests script in the “get-demo” request. Add the following script to generate Allure test reports:"
      }), "\n"]
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
            children: "// @allure.label.suite=postman-new-api-testing-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.story=\"Verify-the-get-api-return-correct-data\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.owner=\"naodeng\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.tag=\"GETAPI\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.status should be 200\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.response.to.have.status(200);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.body should be correct\", function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  var data = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.id).to.equal(1);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.title).to.contains('provident');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Adjust the Tests script in the “post-demo” request. Add the following script to generate Allure test reports:"
      }), "\n"]
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
            children: "// @allure.label.suite=postman-new-api-testing-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.story=\"Verify-the-post-api-return-correct-data\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.owner=\"naodeng\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.tag=\"POSTAPI\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.status should be 201\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.response.to.have.status(201);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.body should be correct\", function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  var data = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.id).to.equal(101);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.title).to.equal('foo');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Save the modified Postman test cases, export the test case file again, and replace the original test case file."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "run-test-cases-to-generate-allure-report",
      children: "Run Test Cases to Generate Allure Report"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Run the test cases"
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
            children: " npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " test"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "The allure-results folder will be generated in the project folder, containing the execution results of the test cases."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112213YUMTwz.png",
        alt: "2023112213YUMTwz"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Previewing the Allure Test Report"
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
            children: "allure"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " serve"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112214Aa77VG.png",
        alt: "2023112214Aa77VG"
      })
    }), "\n", createVNode(_components.h2, {
      id: "reference",
      children: "Reference"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/getting-started/introduction/",
          children: "Postman docs"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/",
          children: "newman docs"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/DannyDainton/newman-reporter-htmlextra",
          children: "newman-reporter-htmlextra"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.npmjs.com/package/newman-reporter-allure",
          children: "newman-reporter-allure"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.github.com/cn/actions",
          children: "github action docs"
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

const url = "src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
