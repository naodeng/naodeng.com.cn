import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introducing Bruno for Replacement Postman",
  "description": "Article introduces postman replacement tool bruno beginner's introduction, how to migrate postman scripts to bruno",
  "date": "2023-10-17T03:31:43.000Z",
  "author": "nao.deng",
  "tags": ["Bruno", "API Testing"],
  "series": ["Bruno Guide"],
  "cover": "./Introduction_of_bruno-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-bruno",
    "text": "why bruno"
  }, {
    "depth": 2,
    "slug": "install-bruno",
    "text": "Install bruno"
  }, {
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting Started"
  }, {
    "depth": 3,
    "slug": "default-main-api",
    "text": "Default main API"
  }, {
    "depth": 3,
    "slug": "api-collection",
    "text": "API collection"
  }, {
    "depth": 4,
    "slug": "create-api-collection",
    "text": "Create API collection"
  }, {
    "depth": 4,
    "slug": "open-api-collection",
    "text": "Open API collection"
  }, {
    "depth": 4,
    "slug": "import-api-collection",
    "text": "Import API collection"
  }, {
    "depth": 4,
    "slug": "run-api-collection",
    "text": "RUN API collection"
  }, {
    "depth": 4,
    "slug": "export-api-collection",
    "text": "Export API collection"
  }, {
    "depth": 3,
    "slug": "api-request",
    "text": "API request"
  }, {
    "depth": 4,
    "slug": "create-api-request",
    "text": "Create API request"
  }, {
    "depth": 4,
    "slug": "edit-api-request",
    "text": "Edit API request"
  }, {
    "depth": 4,
    "slug": "run-api-request",
    "text": "RUN API request"
  }, {
    "depth": 4,
    "slug": "api-request-generate-code",
    "text": "API request generate code"
  }, {
    "depth": 3,
    "slug": "write-api-request-test-scripts",
    "text": "Write API request test scripts"
  }, {
    "depth": 4,
    "slug": "api-request-assert",
    "text": "API request Assert"
  }, {
    "depth": 5,
    "slug": "introducing-assert",
    "text": "Introducing Assert"
  }, {
    "depth": 5,
    "slug": "assert-demo",
    "text": "Assert demo"
  }, {
    "depth": 6,
    "slug": "assert-status-code-is-200",
    "text": "Assert status code is 200"
  }, {
    "depth": 6,
    "slug": "assert-repsponse-body-as-expected",
    "text": "Assert repsponse body as expected"
  }, {
    "depth": 5,
    "slug": "debug-assert",
    "text": "Debug Assert"
  }, {
    "depth": 4,
    "slug": "api-request-tests",
    "text": "API request Tests"
  }, {
    "depth": 5,
    "slug": "introduction-tests",
    "text": "Introduction Tests"
  }, {
    "depth": 5,
    "slug": "tests-demo",
    "text": "Tests demo"
  }, {
    "depth": 6,
    "slug": "verify-status-code-is-200",
    "text": "Verify status code is 200"
  }, {
    "depth": 6,
    "slug": "verify-repsponse-body-as-expected",
    "text": "Verify repsponse body as expected"
  }, {
    "depth": 5,
    "slug": "debugging-tests",
    "text": "Debugging Tests"
  }, {
    "depth": 4,
    "slug": "environment-variables",
    "text": "environment variables"
  }, {
    "depth": 5,
    "slug": "creating-environment-variables",
    "text": "Creating Environment Variables"
  }, {
    "depth": 5,
    "slug": "environment-variable-demo",
    "text": "environment variable demo"
  }, {
    "depth": 5,
    "slug": "using-environment-variables",
    "text": "Using Environment Variables"
  }, {
    "depth": 3,
    "slug": "test-script-automation",
    "text": "Test script automation"
  }, {
    "depth": 4,
    "slug": "pre-conditions",
    "text": "Pre-conditions"
  }, {
    "depth": 4,
    "slug": "api-automation-project-demo",
    "text": "api automation project demo"
  }, {
    "depth": 3,
    "slug": "getting-into-ci",
    "text": "Getting into CI"
  }, {
    "depth": 4,
    "slug": "getting-into-github-action",
    "text": "Getting into github action"
  }, {
    "depth": 4,
    "slug": "test-report---todo",
    "text": "Test report---TODO"
  }, {
    "depth": 3,
    "slug": "bruno-more-usage---todo",
    "text": "bruno More usage---TODO"
  }, {
    "depth": 3,
    "slug": "postman-script-migration",
    "text": "Postman script migration"
  }, {
    "depth": 4,
    "slug": "api-request-collection-migration",
    "text": "API Request Collection Migration"
  }, {
    "depth": 4,
    "slug": "environment-variable-migration",
    "text": "Environment Variable Migration"
  }, {
    "depth": 4,
    "slug": "test-script-migration-reference",
    "text": "Test Script Migration Reference"
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
    input: "input",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Since Postman announced in May 2023 that it will phase out the Scratch Pad model with offline capabilities, teams that need to isolate API workspace data from third-party servers have been looking for alternatives.\nTeams that need to isolate API workspace data from third-party servers have had to look for alternatives. bruno is one of those alternatives: an open source desktop application designed for API testing, development, and debugging."
    }), "\n", createVNode(_components.p, {
      children: "Bruno is one of those alternatives: an open source desktop application designed for API testing, development, and debugging. Why bruno, how to get started, and how to migrate postman scripts are all covered in this article!"
    }), "\n", createVNode(_components.h2, {
      id: "why-bruno",
      children: "why bruno"
    }), "\n", createVNode(_components.p, {
      children: ["Official description: ", createVNode(_components.a, {
        href: "https://github.com/usebruno/bruno/discussions/269",
        children: "https://github.com/usebruno/bruno/discussions/269"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Comparison with postman: ", createVNode(_components.a, {
        href: "https://www.usebruno.com/compare/bruno-vs-postman",
        children: "https://www.usebruno.com/compare/bruno-vs-postman"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Open source, MIT License"
    }), "\n", createVNode(_components.p, {
      children: "Client platform support (Mac/linux/Windows)"
    }), "\n", createVNode(_components.p, {
      children: "Offline client, no cloud synchronization plan"
    }), "\n", createVNode(_components.p, {
      children: "Supports Postman/insomina script import (only API request scripts can be imported, not test scripts)"
    }), "\n", createVNode(_components.p, {
      children: ["Relatively active community and clear ", createVNode(_components.a, {
        href: "https://github.com/usebruno/bruno/discussions/384",
        children: "product development roadmap"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "install-bruno",
      children: "Install bruno"
    }), "\n", createVNode(_components.p, {
      children: ["Download link: ", createVNode(_components.a, {
        href: "https://www.usebruno.com/downloads",
        children: "https://www.usebruno.com/downloads"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Mac computer recommended brew command download"
    }), "\n", createVNode(_components.p, {
      children: ["​    ", createVNode(_components.code, {
        children: "brew install Bruno"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", createVNode(_components.h3, {
      id: "default-main-api",
      children: "Default main API"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/homepage.png",
        alt: "homepage"
      })
    }), "\n", createVNode(_components.h3, {
      id: "api-collection",
      children: "API collection"
    }), "\n", createVNode(_components.h4, {
      id: "create-api-collection",
      children: "Create API collection"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "On the home page, click on the ‘Create Collection’ link to open the Create API Request Collection pop-up window."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "On the popup window, enter"
        }), "\n", createVNode(_components.p, {
          children: "Name: input the name of the API request collection"
        }), "\n", createVNode(_components.p, {
          children: "Location: input the path of the folder where you want to save the API request collection files (we suggest you choose the path where this project is located)."
        }), "\n", createVNode(_components.p, {
          children: "Folder Name: you can enter the name of the API request set (a folder with the corresponding name will be created under the path you just selected)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click Create button to finish creating the API request set and display it on the API (the list of newly created API request set will be displayed on the left side)."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/create-collection.png",
        alt: "create-collection"
      })
    }), "\n", createVNode(_components.h4, {
      id: "open-api-collection",
      children: "Open API collection"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click on the ‘Open Collection’ link on the home page to open the folder of the selected API request collection in bruno format."
      }), "\n", createVNode(_components.li, {
        children: "Click open to complete the selection and display it in the API (the collection list on the left side will display the selected API request collection information)."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "import-api-collection",
      children: "Import API collection"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the ‘Import Collection’ link on the home page to open the popup window for importing API collections (Bruno/Postman/Insomnia are supported)."
      }), "\n", createVNode(_components.li, {
        children: "On the popup window, select the link of the corresponding format, and then select the path of the existing file of the corresponding format."
      }), "\n", createVNode(_components.li, {
        children: "Click open to complete the selection and display it on the API (the collection list on the left side will display the information of the selected API collection)."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/import-collection.png",
        alt: "import-collection"
      })
    }), "\n", createVNode(_components.h4, {
      id: "run-api-collection",
      children: "RUN API collection"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Select the API request set you want to run from the collection list on the left side of the main API."
      }), "\n", createVNode(_components.li, {
        children: "Select Run on the menu, the Runner tab will be opened on the right side of the API, it will show some information about the requests in the selected API request collection."
      }), "\n", createVNode(_components.li, {
        children: "Click on the Run Collection button to run it locally (you will see the allowed results on the screen after running)."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "export-api-collection",
      children: "Export API collection"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Select the API request set you want to run from the collection list on the left side of the main API, and right-click to open the menu."
      }), "\n", createVNode(_components.li, {
        children: "Select Export on the menu, and then select the path of the file you want to export to complete the export (the exported file is also in json format)."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "api-request",
      children: "API request"
    }), "\n", createVNode(_components.h4, {
      id: "create-api-request",
      children: "Create API request"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Pre-requisite: An API request collection has already been created (see Creating an API Request Collection above)."
      }), "\n", createVNode(_components.li, {
        children: "Select the API request set you want to create a new API request from the collection list on the left side of the main API."
      }), "\n", createVNode(_components.li, {
        children: "Select New Request on the menu, the right API will open the Request tab, it will show some information of requests in the selected API request set."
      }), "\n", createVNode(_components.li, {
        children: "On the new Request window, first select the request type: HTTP/GraphQL."
      }), "\n", createVNode(_components.li, {
        children: "In the new Request window, first select the request type: HTTP/GraphQL.\nName: Enter the name of the API request.\nURL: enter the URL of the API request\nMethod: Select the Method of the API request."
      }), "\n", createVNode(_components.li, {
        children: "Click Create button to finish creating the API request and display it on the API (the left request set list will display the information of the newly created API request)."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "edit-api-request",
      children: "Edit API request"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Pre-requisite: you have already created an API request collection and an API request (refer to Creating an API request collection and New API request above)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Select the API request collection you want to edit in the collection list on the left side of the main API, and then select the API request you want to edit."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Then you can edit different fields of the request according to the type of API request.\nBody: Enter the Body of the API request."
        }), "\n", createVNode(_components.p, {
          children: "Headers: Enter the headers of the API request."
        }), "\n", createVNode(_components.p, {
          children: "Params: Enter the Params of the API request."
        }), "\n", createVNode(_components.p, {
          children: "Auth: enter the Auth of the API request"
        }), "\n", createVNode(_components.p, {
          children: "Vars: enter the Vars of the API request"
        }), "\n", createVNode(_components.p, {
          children: "Script: enter the Script of the API request"
        }), "\n", createVNode(_components.p, {
          children: "Assert: Enter the Assert of the API request."
        }), "\n", createVNode(_components.p, {
          children: "Tests: Enter the Tests of the API request."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click the Save button to finish editing the API request and display it on the API (the list of request sets on the left side will display the information of the edited API request)."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "run-api-request",
      children: "RUN API request"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Pre-requisite: you have already created an API request collection and an API request (refer to Creating an API request collection and New API request above)."
      }), "\n", createVNode(_components.li, {
        children: "In the collection list on the left side of the main API, select the API request set that you want to edit the API request, and then select the API request that you want to edit."
      }), "\n", createVNode(_components.li, {
        children: "Click the right button after the API url edit box to finish running the API request and display it on the API (the Request tab on the right side will display the information of the running API request)."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "api-request-generate-code",
      children: "API request generate code"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Pre-requisite: you have already created an API request collection and an API request (refer to Creating an API request collection and New API request above)."
      }), "\n", createVNode(_components.li, {
        children: "In the collection list on the left side of the main API, select the API request set that you want to edit the API request, and then select the API request that you want to edit."
      }), "\n", createVNode(_components.li, {
        children: "Right click on the menu and select Generate Code, then select the language you want to generate code for."
      }), "\n", createVNode(_components.li, {
        children: "The Generate Code window will show the request code of different languages."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "write-api-request-test-scripts",
      children: "Write API request test scripts"
    }), "\n", createVNode(_components.h4, {
      id: "api-request-assert",
      children: "API request Assert"
    }), "\n", createVNode(_components.h5, {
      id: "introducing-assert",
      children: "Introducing Assert"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Open any API request and switch to the Assert tab."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "The Assert tab displays the Assert information of the API request."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Assert is used to determine whether the result of the API request meets the expectation."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Expr: input the expression of expected result, it can be the value of a field of the API request, two types can be input: Status Code and Response Body.\nStatus Code: determine whether the returned status code of the API request meets the expectation (default is 200).\nResponse Body: determine whether the returned result of the API request meets the expectation (default is true)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Operator: the validation method for inputting the expected result. Supports multiple judgment methods: Equal and Not Equal, etc.\nEqual: determine whether the returned result of the API request is equal to the expected result.\nNot Equal: determine if the returned result of the API request is not equal to the expected result."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Value: input the value of the expected result, supports two ways of inputting the expected result: Static and Dynamic.\nStatic: input the static value of the expected result.\nDynamic: input the dynamic value of the expected result, which can be the value of a field in the return result of the API request."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "assert-demo",
      children: "Assert demo"
    }), "\n", createVNode(_components.h6, {
      id: "assert-status-code-is-200",
      children: "Assert status code is 200"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Taking ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), " as an example (the API request returns ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), ") I want to verify that the API request returns a status is 200."]
      }), "\n", createVNode(_components.li, {
        children: "Open the API request and switch to the Assert tab."
      }), "\n", createVNode(_components.li, {
        children: "Enter the following information\nExpr: res.status\nOperator: Equal\nValue: 200"
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "assert-repsponse-body-as-expected",
      children: "Assert repsponse body as expected"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Using ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), " as an example (the API request returned ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), ") I want to verify that the API request’s repsponse body is as expected"]
      }), "\n", createVNode(_components.li, {
        children: "Open the API request and switch to the Assert tab."
      }), "\n", createVNode(_components.li, {
        children: "Assert1 Enter the following information in order\nExpr: res.body.id\nOperator: Equal\nValue: 1"
      }), "\n", createVNode(_components.li, {
        children: "Assert2 Input the following information in order\nExpr: res.body.title\nOperator: contains\nValue: provider"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "debug-assert",
      children: "Debug Assert"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Pre-requisite: you have already created an API request set and an API request (refer to Creating an API request set and New API request above), and you have also written the corresponding Assert according to the demo."
      }), "\n", createVNode(_components.li, {
        children: "Select the API request set you want to edit in the collection list on the left side of the main API, and then select the API request you want to edit."
      }), "\n", createVNode(_components.li, {
        children: "Click the right button after the API url edit box to finish running the API request and display it on the API (the Request tab on the right side will display the information of the running API request)."
      }), "\n", createVNode(_components.li, {
        children: "Switch to the Tests tab to display the Tests information of the API request, which also includes the Assert information of the request."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/assert-demo.png",
        alt: "assert-demo"
      })
    }), "\n", createVNode(_components.h4, {
      id: "api-request-tests",
      children: "API request Tests"
    }), "\n", createVNode(_components.h5, {
      id: "introduction-tests",
      children: "Introduction Tests"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Open any API request and switch to the Tests tab."
      }), "\n", createVNode(_components.li, {
        children: "Tests tab will show the Tests information of the API request."
      }), "\n", createVNode(_components.li, {
        children: "Tests are used to write test scripts for API requests, currently javascript language is supported."
      }), "\n", createVNode(_components.li, {
        children: "You can write multiple test scripts inside Tests, each test script can be run separately."
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "tests-demo",
      children: "Tests demo"
    }), "\n", createVNode(_components.h6, {
      id: "verify-status-code-is-200",
      children: "Verify status code is 200"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Taking ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), " as an example (the API request returns ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), "), I want to verify that the API request returns a status is 200."]
      }), "\n", createVNode(_components.li, {
        children: "Open the API request and switch to the Tests tab."
      }), "\n", createVNode(_components.li, {
        children: "Enter the following script"
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
            children: "\"res.status should be 200\""
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
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
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()).to."
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
        })]
      })
    }), "\n", createVNode(_components.h6, {
      id: "verify-repsponse-body-as-expected",
      children: "Verify repsponse body as expected"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Taking ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), " as an example (the API request returned ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), ") I want to verify that the repsponse body is as expected"]
      }), "\n", createVNode(_components.li, {
        children: "Open the API request and switch to the Tests tab."
      }), "\n", createVNode(_components.li, {
        children: "Enter the following script"
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
            children: "\"res.body should be correct\""
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
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
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
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
            children: "1"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "contains"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'provident'"
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
      id: "debugging-tests",
      children: "Debugging Tests"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Prerequisites: You have already created an API request set and an API request (refer to Creating an API Request Set and New API Request above), and you have also written the corresponding Tests according to the demo."
      }), "\n", createVNode(_components.li, {
        children: "Select the API request set you want to edit in the collection list on the left side of the main API, and then select the API request you want to edit."
      }), "\n", createVNode(_components.li, {
        children: "Click the right button after the API url edit box to finish running the API request and display it on the API (the Request tab on the right side will display the information of the running API request)."
      }), "\n", createVNode(_components.li, {
        children: "Switch to the Tests tab, it will show the Tests information of the API request, which will also include the requested Tests information."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/tests-demo.png",
        alt: "tests-demo"
      })
    }), "\n", createVNode(_components.h4, {
      id: "environment-variables",
      children: "environment variables"
    }), "\n", createVNode(_components.h5, {
      id: "creating-environment-variables",
      children: "Creating Environment Variables"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Prerequisites: An API request set and an API request have already been created (see Creating an API request set and New API request above)."
      }), "\n", createVNode(_components.li, {
        children: "Select the API request for which you want to create an environment variable"
      }), "\n", createVNode(_components.li, {
        children: "Click the ‘No Environment’ link in the upper right corner of the page (default is No Environment) and select the configure button in the menu to open the environment variable management popup window (supports creating new environment variables and importing existing environment variables)."
      }), "\n", createVNode(_components.li, {
        children: "Click Create Environment button on the popup window, enter the name of the environment variable and click create button to create the environment variable."
      }), "\n", createVNode(_components.li, {
        children: "Then click Add Variable button on the popup window, enter the key and value of the environment variable, and click Save button to add the environment variable."
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "environment-variable-demo",
      children: "environment variable demo"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Requirement: Create a demo environment variable that contains an environment variable with key host and value ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Select the API request for which you want to create the environment variable"
      }), "\n", createVNode(_components.li, {
        children: "Click the ‘No Environment’ link in the upper right corner of the page (default is No Environment), and select the configure button in the menu to open the environment variable management popup."
      }), "\n", createVNode(_components.li, {
        children: "Click the Create Environment button on the popup window, enter the name of the environment variable demo, and click the create button to create the environment variable demo."
      }), "\n", createVNode(_components.li, {
        children: ["Select the demo environment variable, and then click Add Variable button on the page, enter the key of the environment variable as host and the value as ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        }), ", and click Save button to add the environment variable."]
      }), "\n", createVNode(_components.li, {
        children: ["As shown in the following figure\n! ", createVNode(_components.a, {
          href: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/env-intro.png",
          children: "env-intro"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "using-environment-variables",
      children: "Using Environment Variables"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Prerequisites: You have already created an API request set and an API request (see Creating an API request set and creating a new API request above), and you have also created a demo environment variable."
      }), "\n", createVNode(_components.li, {
        children: "Select the API request for which you want to use environment variables"
      }), "\n", createVNode(_components.li, {
        children: "Click the ‘No Environment’ link in the top right corner of the page (default is No Environment), and select the demo button in the menu to use the demo environment variable."
      }), "\n", createVNode(_components.li, {
        children: "Then change the URL of the API request to {{host}}/posts/1 to use the environment variable."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "test-script-automation",
      children: "Test script automation"
    }), "\n", createVNode(_components.h4, {
      id: "pre-conditions",
      children: "Pre-conditions"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " API request set has been created (example named :api-collects)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " API request has been created (example name: api request1)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " an environment variable has been created (example name: demo)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " has also written an assert or tests script for the API request"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "api-automation-project-demo",
      children: "api automation project demo"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Installed node.js"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Install npm"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " create a new project folder (example name: bruno-test)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Execute npm init in the project folder to initialize the project as an npm project"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Install @usebruno/cli dependency (script: npm install @usebruno/cli)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Open the folder directory where the API request sets are stored, and copy all the files in the api-collects directory to the bruno-test project directory"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " The project directory looks like this"]
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
              color: "#E1E4E8"
            },
            children: "bruno"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "test   "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//项目主文件夹"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  api request1.bru "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//api 请求"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  enviroments "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//环境变量"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    demo.bru"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  bruno.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  node_modules "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//node 包依赖"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  package-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "lock.json"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  package.json "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//npm 项目配置文件"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Run the following command in the project directory to run the API request"]
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
              color: "#E1E4E8"
            },
            children: "bruno run "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "--"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "env demo"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The result is as follows"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/cli-demo.png",
        alt: "cli-demo"
      })
    }), "\n", createVNode(_components.h3, {
      id: "getting-into-ci",
      children: "Getting into CI"
    }), "\n", createVNode(_components.h4, {
      id: "getting-into-github-action",
      children: "Getting into github action"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Take github action as an example, other CI tools are similar."
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Prepare: Add the following script to the project package.json file"]
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"test\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bru run --env demo\""
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Create .github/workflows folder in the project root folder"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Create main.yml file under .github/workflows folder"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " The contents of the main.yml file are as follows"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "bruno cli CI"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "  push"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    branches"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": [ "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "main"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "  pull_request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    branches"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": [ "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "main"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "jobs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "  run_bruno_api_test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    runs-on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "ubuntu-latest"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    steps"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "uses"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "actions/checkout@v3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "run"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "npm install"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "run tests"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "      run"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "npm run test"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " submit code to github, will automatically trigger github action"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " View the result of the github action, as shown in the example:"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/cli-demo1.png",
        alt: "cli-demo1"
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["The code for this project can be pulled for reference:", createVNode(_components.a, {
          href: "https://github.com/dengnao-tw/Bruno-API-Test-Starter",
          children: "https://github.com/dengnao-tw/Bruno-API-Test-Starter"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "test-report---todo",
      children: "Test report---TODO"
    }), "\n", createVNode(_components.h3, {
      id: "bruno-more-usage---todo",
      children: "bruno More usage---TODO"
    }), "\n", createVNode(_components.h3, {
      id: "postman-script-migration",
      children: "Postman script migration"
    }), "\n", createVNode(_components.h4, {
      id: "api-request-collection-migration",
      children: "API Request Collection Migration"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click on the ‘Import Collection’ link on the home page to open the Import API collection popup window."
      }), "\n", createVNode(_components.li, {
        children: "Click on the Select Postman Collection link and select the path to an existing Postman request collection file."
      }), "\n", createVNode(_components.li, {
        children: "Then you can import Postman request collection."
      }), "\n", createVNode(_components.li, {
        children: ["However, only API requests can be imported, not test scripts, as shown in the figure (but it doesn’t affect the request invocation).\n", createVNode(_components.img, {
          src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/postman1.png",
          alt: "postman1"
        }), "\n", createVNode(_components.img, {
          src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/bruno1.png",
          alt: "bruno1"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "environment-variable-migration",
      children: "Environment Variable Migration"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Select the Postman request you just imported on the home page."
      }), "\n", createVNode(_components.li, {
        children: "Click the ‘No Environment’ link in the upper right corner of the page (default is No Environment), and select the configure button in the menu to open the environment variable management popup window."
      }), "\n", createVNode(_components.li, {
        children: "Click on the ‘Import Environment’ link to open the Import Environment popup."
      }), "\n", createVNode(_components.li, {
        children: "Click on the ‘Postman Environment’ link to open the Import Environment popup window Click on the ‘Postman Environment’ link and select the path to an existing Postman environment file"
      }), "\n", createVNode(_components.li, {
        children: "You can import Postman environment variables."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/postman2.png",
        alt: "postman2"
      }), "\n", createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures/bruno2.png",
        alt: "bruno2"
      })]
    }), "\n", createVNode(_components.h4, {
      id: "test-script-migration-reference",
      children: "Test Script Migration Reference"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The syntax of the test scripts for the two tools is partially different and needs to be modified manually"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Postman test script syntax reference: ", createVNode(_components.a, {
          href: "https://learning.postman.com/docs/writing-scripts/test-scripts/",
          children: "https://learning.postman.com/docs/writing-scripts/test-scripts/"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Postman test script example"
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
            children: "\"res.status should be 200\""
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
            children: "  pm.response.to.have."
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
            children: "\"res.body should be correct\""
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
              color: "#F97583"
            },
            children: "  var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
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
            children: "1"
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
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "contains"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'provident'"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Bruno test script syntax reference: ", createVNode(_components.a, {
          href: "https://docs.usebruno.com/testing/introduction.html",
          children: "https://docs.usebruno.com/testing/introduction.html"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Bruno test script example"
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
            children: "\"res.status should be 200\""
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
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
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()).to."
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
          class: "line",
          children: [createVNode(_components.span, {
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
            children: "\"res.body should be correct\""
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
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
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
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
            children: "1"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "contains"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'provident'"
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

const url = "src/blog/en/API-Automation-Testing/Introduction_of_bruno.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/Introduction_of_bruno.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/Introduction_of_bruno.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
