import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Postman API Automation Testing Tutorial Advance Usage common command line options and file upload",
  "description": "This blog post takes a deep dive into the advanced usage of Postman API automation testing, focusing on common command line options, file upload scenarios, and SSL certificate scenarios. Learn how to use common command line options to optimize the testing process and solve the testing challenges of special scenarios such as file upload and SSL certificate.",
  "date": "2023-11-27T04:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Postman", "API Testing"],
  "categories": ["API Automation Testing", "Postman"],
  "series": ["Postman API Automation Testing Tutorial"],
  "cover": "./postman-tutorial-advance-usage-common-command-line-options-and-file-upload-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "advanced-usage",
    "text": "Advanced Usage"
  }, {
    "depth": 3,
    "slug": "file-upload-scenarios",
    "text": "File Upload Scenarios"
  }, {
    "depth": 3,
    "slug": "common-newman-command-line-options",
    "text": "Common Newman Command-Line Options"
  }, {
    "depth": 4,
    "slug": "basic-commands",
    "text": "Basic Commands"
  }, {
    "depth": 4,
    "slug": "output-and-reporting",
    "text": "Output and Reporting"
  }, {
    "depth": 4,
    "slug": "other-options",
    "text": "Other Options"
  }, {
    "depth": 3,
    "slug": "ssl-certificate-configuration",
    "text": "SSL Certificate Configuration"
  }, {
    "depth": 4,
    "slug": "using-a-single-ssl-client-certificate",
    "text": "Using a Single SSL Client Certificate"
  }, {
    "depth": 4,
    "slug": "using-multiple-ssl-client-certificates",
    "text": "Using Multiple SSL Client Certificates"
  }, {
    "depth": 4,
    "slug": "trusted-ca-certificates",
    "text": "Trusted CA Certificates"
  }, {
    "depth": 2,
    "slug": "reference-documents",
    "text": "Reference Documents"
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
    }), "\n", createVNode(_components.p, {
      children: "This section will introduce some advanced features of Postman and Newman, including common command-line options, file upload scenarios, and SSL certificate configurations."
    }), "\n", createVNode(_components.h3, {
      id: "file-upload-scenarios",
      children: "File Upload Scenarios"
    }), "\n", createVNode(_components.p, {
      children: "When performing interface automation with Postman and Newman, file uploads can be achieved using the form-data method."
    }), "\n", createVNode(_components.p, {
      children: "The file must exist in the current working directory, and the “src” attribute in the request must also include the filename."
    }), "\n", createVNode(_components.p, {
      children: "In this collection, the file “demo.txt” should be present in the current working directory."
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
            children: "    \"info\""
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
            children: "        \"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"file-upload\""
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
            children: "    \"item\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "            \"request\""
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
            children: "                \"url\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://postman-echo.com/post\""
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
            children: "                \"method\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"POST\""
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
            children: "                \"body\""
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
            children: "                    \"mode\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"formdata\""
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
            children: "                    \"formdata\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "                            \"key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"file\""
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
            children: "                            \"type\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"file\""
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
            children: "                            \"enabled\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "                            \"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"demo.txt\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                    ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            }"
          })
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
              color: "#E1E4E8"
            },
            children: "    ]"
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
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Note: Adjust the path for file uploads to ensure that the file exists in the project’s root directory or use an absolute path."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "common-newman-command-line-options",
      children: "Common Newman Command-Line Options"
    }), "\n", createVNode(_components.p, {
      children: "Newman is a command-line tool used to run Postman collections. It provides many options that can be used when running collections."
    }), "\n", createVNode(_components.p, {
      children: "Here are some common Newman command-line options along with examples:"
    }), "\n", createVNode(_components.h4, {
      id: "basic-commands",
      children: "Basic Commands"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "newman run <collection>"
            }), "："]
          }), " Used to run a Postman collection."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-e, --environment <environment>"
            }), "："]
          }), " Specify an environment file."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -e"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " environment.json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-g, --globals <globals>"
            }), "："]
          }), " Specify a global variables file."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -g"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " globals.json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-d, --iteration-data <data>"
            }), "："]
          }), " Specify a data file for data-driven testing."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -d"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " data-file.csv"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "output-and-reporting",
      children: "Output and Reporting"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-r, --reporters <reporters>"
            }), "："]
          }), " Specify reporters to generate multiple reports, such as ", createVNode(_components.code, {
            children: "cli"
          }), ", ", createVNode(_components.code, {
            children: "json"
          }), ", ", createVNode(_components.code, {
            children: "html"
          }), ", etc."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -r"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " cli,json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--reporter-json-export <file>"
            }), "："]
          }), " Export test results as a JSON file."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporters"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporter-json-export"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " output.json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--reporter-html-export <file>"
            }), "："]
          }), " Export test results as an HTML file."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporters"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " html"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporter-html-export"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " output.html"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--reporter-html-template <file>"
            }), "："]
          }), " Use a custom HTML template to generate HTML reports."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporters"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " html"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporter-html-template"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " custom-template.hbs"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "other-options",
      children: "Other Options"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-h, --help"
            }), "："]
          }), " Display help information, listing all command-line options."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --help"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-v, --version"
            }), "："]
          }), " Display Newman version information."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --version"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-x, --suppress-exit-code"
            }), "："]
          }), " Do not return a non-zero exit code on failure."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -x"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--delay-request <ms>"
            }), "："]
          }), " Set a delay between requests to simulate real-world scenarios."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --delay-request"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1000"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--timeout <ms>"
            }), "："]
          }), " Set the timeout for requests."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --timeout"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 5000"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--no-color"
            }), "："]
          }), " Disable colored output in the console."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --no-color"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--bail"
            }), "："]
          }), " Stop running on the first failed test."]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --bail"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["These are just some common Newman command-line options. You can run ", createVNode(_components.code, {
        children: "newman run --help"
      }), " to see all available options and their descriptions. Depending on your testing needs, you may need to adjust and combine these options."]
    }), "\n", createVNode(_components.h3, {
      id: "ssl-certificate-configuration",
      children: "SSL Certificate Configuration"
    }), "\n", createVNode(_components.p, {
      children: "Client certificates are an alternative to traditional authentication mechanisms. They allow users to send authenticated requests to servers using public certificates and optional private keys to verify certificate ownership. In some cases, the private key may also be protected by a secret passphrase, providing an additional layer of authentication security."
    }), "\n", createVNode(_components.p, {
      children: "Newman supports SSL client certificates through the following CLI options:"
    }), "\n", createVNode(_components.h4, {
      id: "using-a-single-ssl-client-certificate",
      children: "Using a Single SSL Client Certificate"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Add the following options directly after the newman command based on your certificate situation."
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "--ssl-client-cert"
          }), "\nFollowed by the path to the public client certificate file."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "--ssl-client-key"
          }), "\nFollowed by the path to the client private key (optional)."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "--ssl-client-passphrase"
          }), "\nFollowed by the secret passphrase used to protect the private client key (optional)."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "using-multiple-ssl-client-certificates",
      children: "Using Multiple SSL Client Certificates"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Applicable when you need to support multiple certificates for each run."
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "--ssl-client-cert-list"
        }), "\nPath to the SSL client certificate list configuration file (in JSON format)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Reference example/ssl-client-cert-list.json."
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
            children: "["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"domain1\""
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
            children: "        \"matches\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://test.domain1.com/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://www.domain1/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"./client.domain1.key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"cert\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"./client.domain1.crt\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"passphrase\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"changeme\""
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
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"domain2\""
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
            children: "        \"matches\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://domain2.com/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"./client.domain2.key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"cert\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"./client.domain2.crt\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"passphrase\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"changeme\""
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
            children: "]"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Additionally, this JSON configuration is suitable for different certificates in different environments based on matches for different URLs and hostnames."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Note: This option allows setting different SSL client certificates based on the URL or hostname. This option takes precedence over —ssl-client-cert, —ssl-client-key, and —ssl-client-passphrase options. If there are no matching URLs in the list, these options will be used as fallback."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "trusted-ca-certificates",
      children: "Trusted CA Certificates"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Applicable when you need to trust custom CA certificates."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If you don’t want to use the —insecure option, you can provide additional trusted CA certificates like this:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "--ssl-extra-ca-certs"
        }), "\nFollowed by a list of file paths to one or more PEM format trusted CA certificates."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "reference-documents",
      children: "Reference Documents"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/getting-started/introduction/",
          children: "Postman Official Documentation https://learning.postman.com/docs/getting-started/introduction/"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options",
          children: "Newman Official Documentation https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options"
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

const url = "src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-common-command-line-options-and-file-upload.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-common-command-line-options-and-file-upload.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/postman-tutorial-advance-usage-common-command-line-options-and-file-upload.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
