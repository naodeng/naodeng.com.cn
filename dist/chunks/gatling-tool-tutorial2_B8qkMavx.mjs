import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "gatling Performance Testing Tutorial: building your own gatling project from 0 to 1",
  "description": "The article introduces the performance testing tool gatling advanced introduction: from 0 to 1 build your own Gatling project, introduces the basic use of Gatling, and how to build your own Gatling project, write performance test scripts, view the test report and so on.",
  "date": "2023-10-25T03:05:45.000Z",
  "author": "nao.deng",
  "tags": ["Gatling", "Performance Testing"],
  "series": ["Gatling Performance Testing Tutorial"],
  "cover": "./gatling-tool-tutorial2-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "build-your-own-gatling-project-from-0-to-1",
    "text": "Build your own Gatling project from 0 to 1"
  }, {
    "depth": 3,
    "slug": "gradle--scala-versions",
    "text": "Gradle + Scala versions"
  }, {
    "depth": 4,
    "slug": "create-an-empty-gradle-project",
    "text": "Create an empty Gradle project"
  }, {
    "depth": 4,
    "slug": "configure-the-project-buildgradle",
    "text": "Configure the project build.gradle"
  }, {
    "depth": 4,
    "slug": "gradle-build-project-and-initialize",
    "text": "gradle build project and initialize"
  }, {
    "depth": 4,
    "slug": "initialization-directory",
    "text": "Initialization Directory"
  }, {
    "depth": 4,
    "slug": "writing-scripts",
    "text": "Writing Scripts"
  }, {
    "depth": 4,
    "slug": "debugging-scripts",
    "text": "Debugging Scripts"
  }, {
    "depth": 3,
    "slug": "maven--scala-version",
    "text": "Maven + Scala version"
  }, {
    "depth": 4,
    "slug": "create-an-empty-maven-project",
    "text": "Create an empty Maven project"
  }, {
    "depth": 4,
    "slug": "configure-the-project-pomxml",
    "text": "Configure the project pom.xml"
  }, {
    "depth": 4,
    "slug": "initialization-directory-1",
    "text": "Initialization Directory"
  }, {
    "depth": 4,
    "slug": "writing-scripts-1",
    "text": "Writing Scripts"
  }, {
    "depth": 4,
    "slug": "debugging-scripts-1",
    "text": "Debugging Scripts"
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
      id: "build-your-own-gatling-project-from-0-to-1",
      children: "Build your own Gatling project from 0 to 1"
    }), "\n", createVNode(_components.h3, {
      id: "gradle--scala-versions",
      children: "Gradle + Scala versions"
    }), "\n", createVNode(_components.h4, {
      id: "create-an-empty-gradle-project",
      children: "Create an empty Gradle project"
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
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " gatling-gradle-demo"
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
            children: " gatling-gradle-demo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gradle"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " init"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "configure-the-project-buildgradle",
      children: "Configure the project build.gradle"
    }), "\n", createVNode(_components.p, {
      children: "Add the following to the build.gradle file in the project"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can copy the content of the build.gradle file in this project, for more configurations, please refer to the ", createVNode(_components.a, {
          href: "https://gatling.io/docs/gatling/reference/current/extensions/gradle_plugin/",
          children: "official documentation"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "groovy",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Plugin Configuration"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "plugins {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    id "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'scala'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // scala plugin declaration (based on the development tools plugin)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    id "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'io.gatling.gradle'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " version "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'3.9.5.6'"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // declaration of the version of the gradle-based gatling framework plugin"
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Repository source configuration"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "repositories {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Use the maven central repository source"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  mavenCentral()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// gatling configuration"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "gatling {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // logback root level, defaults to the Gatling console log level if logback.xml does not exist in the configuration folder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  logLevel "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'WARN'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Enforce logging of HTTP requests at a level of detail"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // set to 'ALL' for all HTTP traffic in TRACE, 'FAILURES' for failed HTTP traffic in DEBUG"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  logHttp "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'FAILURES'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Simulations filter"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  simulations "
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
              color: "#E1E4E8"
            },
            children: "      include "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"**/simulation/*.scala\""
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Dependencies"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "dependencies {     "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // Charts library for generating report charts"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " gatling "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'io.gatling.highcharts:gatling-charts-highcharts:3.8.3'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "gradle-build-project-and-initialize",
      children: "gradle build project and initialize"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Open the Terminal window of the project with an editor and execute the following command to confirm that the project build was successful"
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
            children: "gradle"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " build"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Initialization complete: After completing the wizard, Gradle will generate a basic Gradle project structure in the project directory"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-project-tree1.png",
        alt: "readme-project-tree1"
      })
    }), "\n", createVNode(_components.h4, {
      id: "initialization-directory",
      children: "Initialization Directory"
    }), "\n", createVNode(_components.p, {
      children: "Create a simulation directory in the src/gatling/scala directory to hold test scripts"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Gatling tests are usually located in the src/gatling directory. You need to manually create the src directory in the project root, and then create the gatling directory under the src directory. In the gatling directory, you can create your test simulation folder simulation, as well as other folders such as data, bodies, resources, and so on."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "writing-scripts",
      children: "Writing Scripts"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Create a demo.scala file in the simulation directory to write your test scripts."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "For reference, the following is a sample script"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The script contains two scenarios, one for get requests and one for post requests.\nThe get API validates that the API returns a status code of 200 and the post API validates that the API returns a status code of 201.\nThe get API uses rampUsers, the post API uses constantConcurrentUsers.\nrampUsers: incrementally increase the number of concurrent users over a specified period of time, constantConcurrentUsers: keep the number of concurrent users constant over a specified period of time.\nThe number of concurrent users is 10 for both APIs, and the duration is 10 seconds for both APIs.\nThe request interval is 2 seconds for both APIs."
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "package"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " simulation"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " scala"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "concurrent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "duration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "_"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " io"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gatling"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "core"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Predef"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "_"
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
              color: "#B392F0"
            },
            children: " io"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gatling"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "http"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Predef"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "_"
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
            children: " demo"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Simulation"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  val"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " httpProtocol"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    .baseUrl("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://jsonplaceholder.typicode.com\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
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
              color: "#F97583"
            },
            children: "  val"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " scn"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " scenario("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"GetSimulation\""
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
            children: "    .exec(http("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"get_demo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts/1\""
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
            children: "      .check(status.is("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    .pause("
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
            children: "  val"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " scn1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " scenario("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"PostSimulation\""
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
            children: "    .exec(http("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"post_demo\""
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
            children: "      .post("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts\""
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
            children: "      .body("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "StringBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"\"\"{\"title\": \"foo\",\"body\": \"bar\",\"userId\": 1}\"\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")).asJson"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .check(status.is("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "201"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    .pause("
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  setUp( "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    scn.inject(rampUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " seconds)),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    scn1.inject(constantConcurrentUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " seconds))"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "debugging-scripts",
      children: "Debugging Scripts"
    }), "\n", createVNode(_components.p, {
      children: "Execute the following command to run the test script and view the report"
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
            children: "gradle"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " gatlingRun"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report3.png",
        alt: "readme-report3"
      })
    }), "\n", createVNode(_components.h3, {
      id: "maven--scala-version",
      children: "Maven + Scala version"
    }), "\n", createVNode(_components.h4, {
      id: "create-an-empty-maven-project",
      children: "Create an empty Maven project"
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
            children: "mvn"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " archetype:generate"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -DgroupId=demo.gatlin.maven"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -DartifactId=gatling-maven-demo"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Initialization complete: After completing the wizard, Maven will create a new project directory and generate a basic Maven project structure in the"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-project-tree2.png",
        alt: "readme-project-tree2"
      })
    }), "\n", createVNode(_components.h4, {
      id: "configure-the-project-pomxml",
      children: "Configure the project pom.xml"
    }), "\n", createVNode(_components.p, {
      children: "Add the following contents to the pom.xml file in the project"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can copy the contents of the pom.xml file in this project, for more configuration, please refer to the ", createVNode(_components.a, {
          href: "https://gatling.io/docs/gatling/reference/current/extensions/maven_plugin/",
          children: "official documentation"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "xml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{/* dependencies Configuration */}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependencies"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">io.gatling.highcharts</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">gatling-charts-highcharts</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">3.9.5</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "scope"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">test</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "scope"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependencies"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{/* Plugin Configuration */}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "build"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "plugins"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">io.gatling</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">gatling-maven-plugin</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">4.6.0</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">net.alchim31.maven</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">scala-maven-plugin</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">4.8.1</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "scalaVersion"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">2.13.12</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "scalaVersion"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "executions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "execution"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "goals"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "goal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">testCompile</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "goal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "goals"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "jvmArgs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "jvmArg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">-Xss100M</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "jvmArg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "jvmArgs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "args"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">-deprecation</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">-feature</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">-unchecked</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">-language:implicitConversions</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">-language:postfixOps</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "args"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "execution"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "executions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "plugins"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "build"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "initialization-directory-1",
      children: "Initialization Directory"
    }), "\n", createVNode(_components.p, {
      children: "Create a simulation directory in the src/test/scala directory to hold the test scripts"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "scala tests are usually located in the src/test directory. You need to create a scala directory under the project test directory. In the scala directory, you can create your test simulation folder simulation, as well as other folders such as data, bodies, resources, and so on."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "writing-scripts-1",
      children: "Writing Scripts"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Create a demo.scala file in the simulation directory to write your test scripts."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "For reference, the following is a sample script"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The script contains two scenarios, one for get requests and one for post requests.\nThe get API validates that the API returns a status code of 200 and the post API validates that the API returns a status code of 201.\nThe get API uses rampUsers, the post API uses constantConcurrentUsers.\nrampUsers: incrementally increase the number of concurrent users over a specified period of time, constantConcurrentUsers: keep the number of concurrent users constant over a specified period of time.\nThe number of concurrent users is 10 for both APIs, and the duration is 10 seconds for both APIs.\nThe request interval is 2 seconds for both APIs."
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "package"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " simulation"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " scala"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "concurrent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "duration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "_"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " io"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gatling"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "core"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Predef"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "_"
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
              color: "#B392F0"
            },
            children: " io"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gatling"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "http"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Predef"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "_"
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
            children: " demo"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Simulation"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  val"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " httpProtocol"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    .baseUrl("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://jsonplaceholder.typicode.com\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
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
              color: "#F97583"
            },
            children: "  val"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " scn"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " scenario("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"GetSimulation\""
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
            children: "    .exec(http("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"get_demo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts/1\""
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
            children: "      .check(status.is("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    .pause("
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
            children: "  val"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " scn1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " scenario("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"PostSimulation\""
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
            children: "    .exec(http("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"post_demo\""
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
            children: "      .post("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts\""
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
            children: "      .body("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "StringBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"\"\"{\"title\": \"foo\",\"body\": \"bar\",\"userId\": 1}\"\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")).asJson"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      .check(status.is("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "201"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    .pause("
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  setUp( "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    scn.inject(rampUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " seconds)),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    scn1.inject(constantConcurrentUsers("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") during("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " seconds))"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "debugging-scripts-1",
      children: "Debugging Scripts"
    }), "\n", createVNode(_components.p, {
      children: "Execute the following command to run the test script and view the report"
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
            children: "mvn"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " gatling:test"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report3.png",
        alt: "readme-report3"
      })
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

const url = "src/blog/en/Performance-Testing/gatling-tool-tutorial2.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/gatling-tool-tutorial2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/gatling-tool-tutorial2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
