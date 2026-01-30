import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Awesome QA Prompt: Using AI to Make Testing Work Better",
  "description": "Awesome QA Prompt an AI prompt library for QA work. The idea is to capture expert testing knowledge in prompt templates, so AI can work like a senior test engineer",
  "date": "2026-01-15T00:00:00.000Z",
  "author": "nao.deng",
  "tags": ["Awesome QA Prompt"],
  "categories": ["AI", "QA Prompt"],
  "series": ["AI Testing"],
  "cover": "./Introduction_of_Awesome_qa_prompt-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "project-background",
    "text": "Project Background"
  }, {
    "depth": 3,
    "slug": "testing-pain-points",
    "text": "Testing Pain Points"
  }, {
    "depth": 3,
    "slug": "ai-opportunities",
    "text": "AI Opportunities"
  }, {
    "depth": 2,
    "slug": "solution-awesome-qa-prompt",
    "text": "Solution: Awesome QA Prompt"
  }, {
    "depth": 3,
    "slug": "project-structure",
    "text": "Project Structure"
  }, {
    "depth": 4,
    "slug": "1-testing-type-modules-14-modules",
    "text": "1. Testing Type Modules (14 modules)"
  }, {
    "depth": 4,
    "slug": "2-workflow-modules-3-modules",
    "text": "2. Workflow Modules (3 modules)"
  }, {
    "depth": 4,
    "slug": "3-online-documentation-website",
    "text": "3. Online Documentation Website"
  }, {
    "depth": 3,
    "slug": "technical-features",
    "text": "Technical Features"
  }, {
    "depth": 4,
    "slug": "1-professional-role-design",
    "text": "1. Professional Role Design"
  }, {
    "depth": 4,
    "slug": "2-scientific-methodologies",
    "text": "2. Scientific Methodologies"
  }, {
    "depth": 4,
    "slug": "3-standardized-output-formats",
    "text": "3. Standardized Output Formats"
  }, {
    "depth": 4,
    "slug": "4-quality-assurance-mechanisms",
    "text": "4. Quality Assurance Mechanisms"
  }, {
    "depth": 2,
    "slug": "practical-application-results",
    "text": "Practical Application Results"
  }, {
    "depth": 3,
    "slug": "case-1-requirements-analysis-scenario",
    "text": "Case 1: Requirements Analysis Scenario"
  }, {
    "depth": 3,
    "slug": "case-2-performance-testing-planning",
    "text": "Case 2: Performance Testing Planning"
  }, {
    "depth": 3,
    "slug": "case-3-automation-testing-framework-selection",
    "text": "Case 3: Automation Testing Framework Selection"
  }, {
    "depth": 2,
    "slug": "project-impact-and-value",
    "text": "Project Impact and Value"
  }, {
    "depth": 3,
    "slug": "value-for-individuals",
    "text": "Value for Individuals"
  }, {
    "depth": 3,
    "slug": "value-for-teams",
    "text": "Value for Teams"
  }, {
    "depth": 3,
    "slug": "value-for-the-industry",
    "text": "Value for the Industry"
  }, {
    "depth": 2,
    "slug": "technical-implementation-details",
    "text": "Technical Implementation Details"
  }, {
    "depth": 3,
    "slug": "1-project-architecture",
    "text": "1. Project Architecture"
  }, {
    "depth": 3,
    "slug": "2-documentation-website-tech-stack",
    "text": "2. Documentation Website Tech Stack"
  }, {
    "depth": 3,
    "slug": "3-version-management",
    "text": "3. Version Management"
  }, {
    "depth": 3,
    "slug": "4-quality-control",
    "text": "4. Quality Control"
  }, {
    "depth": 2,
    "slug": "community-building-and-open-source-ecosystem",
    "text": "Community Building and Open Source Ecosystem"
  }, {
    "depth": 3,
    "slug": "open-source-philosophy",
    "text": "Open Source Philosophy"
  }, {
    "depth": 3,
    "slug": "community-participation",
    "text": "Community Participation"
  }, {
    "depth": 3,
    "slug": "contribution-methods",
    "text": "Contribution Methods"
  }, {
    "depth": 2,
    "slug": "some-thoughts",
    "text": "Some Thoughts"
  }, {
    "depth": 3,
    "slug": "ai-wont-replace-test-engineers",
    "text": "AI Won’t Replace Test Engineers"
  }, {
    "depth": 3,
    "slug": "test-engineers-need-to-adapt",
    "text": "Test Engineers Need to Adapt"
  }, {
    "depth": 3,
    "slug": "future-of-testing",
    "text": "Future of Testing"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
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
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "After 10+ years in testing, I’ve noticed a pattern: writing test cases takes forever, and quality varies a lot between different engineers. Sometimes you miss edge cases, sometimes the documentation is all over the place."
    }), "\n", createVNode(_components.p, {
      children: "Then ChatGPT and Claude came along, and I thought: can AI help with testing? Tried it a few times, but directly asking AI didn’t work great — not professional enough, outputs were inconsistent."
    }), "\n", createVNode(_components.p, {
      children: ["So I built ", createVNode(_components.strong, {
        children: "Awesome QA Prompt"
      }), ", an AI prompt library for QA work. The idea is to capture expert testing knowledge in prompt templates, so AI can work like a senior test engineer."]
    }), "\n", createVNode(_components.h2, {
      id: "project-background",
      children: "Project Background"
    }), "\n", createVNode(_components.h3, {
      id: "testing-pain-points",
      children: "Testing Pain Points"
    }), "\n", createVNode(_components.p, {
      children: "In my years of testing, these issues keep coming up:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Low Efficiency"
        }), ": Writing test cases by hand takes too long, lots of repetitive work"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inconsistent Quality"
        }), ": Everyone’s test docs look different"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Knowledge Silos"
        }), ": Hard to pass down testing experience"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Incomplete Coverage"
        }), ": Easy to miss edge cases and exceptions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Documentation Chaos"
        }), ": No unified format or standard"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "ai-opportunities",
      children: "AI Opportunities"
    }), "\n", createVNode(_components.p, {
      children: "ChatGPT and Claude can actually help with this:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rich Knowledge"
        }), ": They know testing theory and practice"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rigorous Logic"
        }), ": Can systematically analyze test scenarios"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Unified Format"
        }), ": Generate docs from templates"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "High Efficiency"
        }), ": Finish in seconds what used to take hours"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But using AI directly has issues:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Not professional enough: General AI doesn’t get testing deeply"
      }), "\n", createVNode(_components.li, {
        children: "Unstable output: Same question, different quality answers"
      }), "\n", createVNode(_components.li, {
        children: "Inconsistent format: Generated docs are all over the place"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "solution-awesome-qa-prompt",
      children: "Solution: Awesome QA Prompt"
    }), "\n", createVNode(_components.p, {
      children: ["So I built ", createVNode(_components.strong, {
        children: "Awesome QA Prompt"
      }), " with this core idea:"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Use carefully designed prompt templates to capture testing expert knowledge, so AI can work like a senior test engineer."
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "project-structure",
      children: "Project Structure"
    }), "\n", createVNode(_components.p, {
      children: "The project has three main parts:"
    }), "\n", createVNode(_components.h4, {
      id: "1-testing-type-modules-14-modules",
      children: "1. Testing Type Modules (14 modules)"
    }), "\n", createVNode(_components.p, {
      children: "Each module covers one testing type:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Full Version Prompts"
        }), ": Detailed roles, tasks, methods, output formats"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Lite Version Prompts"
        }), ": Quick-start simplified versions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bilingual Versions"
        }), ": Chinese or English, whatever works"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Documentation"
        }), ": How to use, best practices"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Specifically includes:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "📝 Requirements Analysis: Design comprehensive test scenarios based on requirements documents"
      }), "\n", createVNode(_components.li, {
        children: "✍️ Test Case Writing: Generate standardized executable test cases"
      }), "\n", createVNode(_components.li, {
        children: "🔍 Functional Testing: Design functional testing strategies and execution plans"
      }), "\n", createVNode(_components.li, {
        children: "⚡ Performance Testing: Develop performance test plans and metric analysis"
      }), "\n", createVNode(_components.li, {
        children: "🤖 Automation Testing: Framework selection and automation solution design"
      }), "\n", createVNode(_components.li, {
        children: "📱 Mobile Testing: iOS/Android platform testing strategies"
      }), "\n", createVNode(_components.li, {
        children: "🐛 Bug Reporting: Standardized defect reports and root cause analysis"
      }), "\n", createVNode(_components.li, {
        children: "📊 Test Reporting: Generate professional test execution reports"
      }), "\n", createVNode(_components.li, {
        children: "🎯 Test Strategy: Develop overall test strategies and plans"
      }), "\n", createVNode(_components.li, {
        children: "🤖 AI-Assisted Testing: Leverage AI technology to improve testing efficiency"
      }), "\n", createVNode(_components.li, {
        children: "📋 Manual Testing: Exploratory testing and user experience evaluation"
      }), "\n", createVNode(_components.li, {
        children: "🔒 Security Testing: Security vulnerability detection and compliance checking"
      }), "\n", createVNode(_components.li, {
        children: "🔌 API Testing: Interface testing and integration testing solutions"
      }), "\n", createVNode(_components.li, {
        children: "♿ Accessibility Testing: WCAG compliance and accessibility testing"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "2-workflow-modules-3-modules",
      children: "2. Workflow Modules (3 modules)"
    }), "\n", createVNode(_components.p, {
      children: "Provide complete testing workflow guidance:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Daily Testing Workflow"
        }), ": Daily work guide for QA engineers"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Sprint Testing Workflow"
        }), ": Testing activities in agile development"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Release Testing Workflow"
        }), ": Comprehensive testing before production release"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "3-online-documentation-website",
      children: "3. Online Documentation Website"
    }), "\n", createVNode(_components.p, {
      children: "Modern documentation website built with VitePress:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Responsive design supporting mobile access"
      }), "\n", createVNode(_components.li, {
        children: "Bilingual Chinese/English switching"
      }), "\n", createVNode(_components.li, {
        children: "Full-text search functionality"
      }), "\n", createVNode(_components.li, {
        children: "Clear navigation structure"
      }), "\n", createVNode(_components.li, {
        children: "Automatic deployment and updates"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "technical-features",
      children: "Technical Features"
    }), "\n", createVNode(_components.h4, {
      id: "1-professional-role-design",
      children: "1. Professional Role Design"
    }), "\n", createVNode(_components.p, {
      children: "Each prompt defines a professional AI role, for example:"
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
            children: "Role: Senior Web Full-Stack Testing Expert (Lead QA Engineer)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Context: You have 10+ years of experience in complex web system testing, proficient in business logic decomposition, test strategy design, and risk identification..."
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "2-scientific-methodologies",
      children: "2. Scientific Methodologies"
    }), "\n", createVNode(_components.p, {
      children: "Incorporates multiple test design methods:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Logic Modeling"
        }), ": Scenario testing, state transition diagrams, decision tables"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Refinement"
        }), ": Equivalence class partitioning, boundary value analysis, orthogonal experimental method"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Experience-Driven"
        }), ": Error guessing, exploratory testing strategies"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "3-standardized-output-formats",
      children: "3. Standardized Output Formats"
    }), "\n", createVNode(_components.p, {
      children: "Each prompt defines strict output formats ensuring generated documents are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Clear structure"
      }), "\n", createVNode(_components.li, {
        children: "Complete content"
      }), "\n", createVNode(_components.li, {
        children: "Unified format"
      }), "\n", createVNode(_components.li, {
        children: "Directly usable"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "4-quality-assurance-mechanisms",
      children: "4. Quality Assurance Mechanisms"
    }), "\n", createVNode(_components.p, {
      children: "Established comprehensive quality requirements:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Completeness Requirements"
        }), ": Ensure comprehensive scenario coverage"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Executability Requirements"
        }), ": Specific and operable step descriptions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Traceability Requirements"
        }), ": Clear association with requirements"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Professionalism Requirements"
        }), ": Avoid vague descriptions"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "practical-application-results",
      children: "Practical Application Results"
    }), "\n", createVNode(_components.h3, {
      id: "case-1-requirements-analysis-scenario",
      children: "Case 1: Requirements Analysis Scenario"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Traditional Method"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Time: 2-3 hours"
      }), "\n", createVNode(_components.li, {
        children: "Quality: Depends on personal experience, easy to miss"
      }), "\n", createVNode(_components.li, {
        children: "Format: Inconsistent"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "After Using AI Assistant"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Time: 10-15 minutes"
      }), "\n", createVNode(_components.li, {
        children: "Quality: Systematic coverage including edge cases"
      }), "\n", createVNode(_components.li, {
        children: "Format: Standardized output"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Specific Comparison"
      }), ":"]
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
            children: "Input: User login functionality requirements"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Traditional Output: 5-8 basic test scenarios"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "AI Assistant Output: 20+ test scenarios including:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Positive paths: Normal login flow"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Negative paths: Wrong password, account lockout, network exceptions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Boundary values: Password length, special characters, concurrent login"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Security testing: SQL injection, brute force, session management"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- UI/UX: Responsive adaptation, error prompts, loading states"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "case-2-performance-testing-planning",
      children: "Case 2: Performance Testing Planning"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Traditional Method"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Need to research extensive materials"
      }), "\n", createVNode(_components.li, {
        children: "Easy to miss key metrics"
      }), "\n", createVNode(_components.li, {
        children: "Incomplete test scenario design"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "After Using AI Assistant"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Automatically generate complete performance test plans"
      }), "\n", createVNode(_components.li, {
        children: "Include load, stress, capacity, stability testing"
      }), "\n", createVNode(_components.li, {
        children: "Provide specific performance metrics and monitoring solutions"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "case-3-automation-testing-framework-selection",
      children: "Case 3: Automation Testing Framework Selection"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Traditional Method"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Need to research multiple frameworks"
      }), "\n", createVNode(_components.li, {
        children: "Time-consuming comparison analysis"
      }), "\n", createVNode(_components.li, {
        children: "Insufficient decision basis"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "After Using AI Assistant"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Recommend suitable frameworks based on project characteristics"
      }), "\n", createVNode(_components.li, {
        children: "Provide detailed comparative analysis"
      }), "\n", createVNode(_components.li, {
        children: "Give implementation suggestions and best practices"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "project-impact-and-value",
      children: "Project Impact and Value"
    }), "\n", createVNode(_components.h3, {
      id: "value-for-individuals",
      children: "Value for Individuals"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Efficiency Improvement"
        }), ": Test documentation writing efficiency improved by 200-300%"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Quality Enhancement"
        }), ": Test coverage improved from 70% to 95%+"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Skill Development"
        }), ": Learn systematic testing methodologies"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Career Growth"
        }), ": Master testing skills for the AI era"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "value-for-teams",
      children: "Value for Teams"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Standardization"
        }), ": Unified test documentation format and quality standards"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Knowledge Transfer"
        }), ": New members can quickly master testing methods"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Collaboration Efficiency"
        }), ": Reduce communication costs, improve collaboration efficiency"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Quality Assurance"
        }), ": Systematic testing methods ensure product quality"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "value-for-the-industry",
      children: "Value for the Industry"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Drive Innovation"
        }), ": Explore AI applications in the testing field"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Knowledge Sharing"
        }), ": Open source projects promote industry knowledge sharing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Standard Establishment"
        }), ": Establish industry standards for AI-assisted testing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Talent Development"
        }), ": Help test engineers adapt to the AI era"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-implementation-details",
      children: "Technical Implementation Details"
    }), "\n", createVNode(_components.h3, {
      id: "1-project-architecture",
      children: "1. Project Architecture"
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
            children: "awesome-qa-prompt/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Testing Type Modules/    # 14 testing types"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Chinese Full Version"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Chinese Lite Version"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── English Full Version"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── English Lite Version"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── README Documentation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Workflow Modules/        # 3 workflows"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Online Documentation/    # VitePress website"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── Project Configuration/"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-documentation-website-tech-stack",
      children: "2. Documentation Website Tech Stack"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Framework"
        }), ": VitePress (based on Vue 3 and Vite)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deployment"
        }), ": GitHub Pages + Cloudflare Pages dual platform"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Features"
        }), ":\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Responsive design"
          }), "\n", createVNode(_components.li, {
            children: "Dark/light themes"
          }), "\n", createVNode(_components.li, {
            children: "Full-text search"
          }), "\n", createVNode(_components.li, {
            children: "Chinese/English switching"
          }), "\n", createVNode(_components.li, {
            children: "SEO optimization"
          }), "\n", createVNode(_components.li, {
            children: "Automatic deployment"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-version-management",
      children: "3. Version Management"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Each prompt file has version records"
      }), "\n", createVNode(_components.li, {
        children: "Uses semantic versioning"
      }), "\n", createVNode(_components.li, {
        children: "Detailed change logs"
      }), "\n", createVNode(_components.li, {
        children: "Backward compatibility guarantee"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4-quality-control",
      children: "4. Quality Control"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Code review process"
      }), "\n", createVNode(_components.li, {
        children: "Automated testing"
      }), "\n", createVNode(_components.li, {
        children: "Documentation format checking"
      }), "\n", createVNode(_components.li, {
        children: "User feedback collection"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "community-building-and-open-source-ecosystem",
      children: "Community Building and Open Source Ecosystem"
    }), "\n", createVNode(_components.h3, {
      id: "open-source-philosophy",
      children: "Open Source Philosophy"
    }), "\n", createVNode(_components.p, {
      children: "I chose open source because I believe:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Knowledge Should Be Shared"
        }), ": Testing experience and methodologies should benefit more people"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Collective Wisdom"
        }), ": Community power can make projects more perfect"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Standard Establishment"
        }), ": Open source projects are more likely to become industry standards"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Sustainable Development"
        }), ": Open source ensures long-term project development"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "community-participation",
      children: "Community Participation"
    }), "\n", createVNode(_components.p, {
      children: "Since the project launch, it has received positive community response:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Continuous growth in GitHub Stars"
      }), "\n", createVNode(_components.li, {
        children: "Multiple contributors submitting PRs"
      }), "\n", createVNode(_components.li, {
        children: "User feedback and suggestions"
      }), "\n", createVNode(_components.li, {
        children: "Shared in multiple technical communities"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "contribution-methods",
      children: "Contribution Methods"
    }), "\n", createVNode(_components.p, {
      children: "Welcome everyone to participate through:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Usage Feedback"
        }), ": Use the project and provide feedback"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Issue Reporting"
        }), ": Report problems promptly when found"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Feature Suggestions"
        }), ": Got ideas? Share them"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Code Contribution"
        }), ": Submit code improvements"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Documentation Enhancement"
        }), ": Improve docs and examples"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Promotion and Sharing"
        }), ": Tell your colleagues and friends"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "some-thoughts",
      children: "Some Thoughts"
    }), "\n", createVNode(_components.h3, {
      id: "ai-wont-replace-test-engineers",
      children: "AI Won’t Replace Test Engineers"
    }), "\n", createVNode(_components.p, {
      children: "A lot of people worry AI will replace test engineers. I don’t think so. AI is more like a tool that can:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Boost efficiency"
      }), "\n", createVNode(_components.li, {
        children: "Cut down repetitive work"
      }), "\n", createVNode(_components.li, {
        children: "Support decision-making"
      }), "\n", createVNode(_components.li, {
        children: "Expand knowledge"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But AI can’t replace human:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Creative thinking"
      }), "\n", createVNode(_components.li, {
        children: "Business understanding"
      }), "\n", createVNode(_components.li, {
        children: "Communication skills"
      }), "\n", createVNode(_components.li, {
        children: "Problem-solving abilities"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "test-engineers-need-to-adapt",
      children: "Test Engineers Need to Adapt"
    }), "\n", createVNode(_components.p, {
      children: "In the AI era, test engineers need to:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Learn AI Tools"
        }), ": Master prompt engineering"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Improve Business Understanding"
        }), ": Get deeper into business logic"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Develop Soft Skills"
        }), ": Communication, coordination, leadership"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Keep Learning"
        }), ": Stay current with tech trends"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "future-of-testing",
      children: "Future of Testing"
    }), "\n", createVNode(_components.p, {
      children: "I think the future testing industry will be:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "More Intelligent"
        }), ": AI assists all testing activities"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "More Professional"
        }), ": Test engineers focus on high-value work"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "More Collaborative"
        }), ": Human-AI collaboration becomes the norm"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "More Standardized"
        }), ": Unified methodologies and standards"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Awesome QA Prompt"
      }), " started with a simple idea: make testing work more efficient, professional, and enjoyable."]
    }), "\n", createVNode(_components.p, {
      children: "This project brings together years of my testing experience and thoughts about AI. I hope it can:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Help Individuals"
        }), ": Let every test engineer boost their efficiency and quality"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Drive the Industry"
        }), ": Push digital transformation in testing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Establish Standards"
        }), ": Build industry standards for AI-assisted testing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cultivate Talent"
        }), ": Help people master testing skills for the AI era"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["We’re in a fast-changing era, and we need to embrace change and learn to work with AI. ", createVNode(_components.strong, {
        children: "Awesome QA Prompt"
      }), " is that bridge, connecting traditional testing methods with AI technology."]
    }), "\n", createVNode(_components.p, {
      children: "I believe with everyone’s efforts, this project will keep getting better and bring more value to the testing industry. Let’s make testing work better with AI!"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Project"
      }), ": ", createVNode(_components.a, {
        href: "https://github.com/naodeng/awesome-qa-prompt",
        children: "https://github.com/naodeng/awesome-qa-prompt"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Docs"
      }), ": ", createVNode(_components.a, {
        href: "https://naodeng.github.io/awesome-qa-prompt/",
        children: "https://naodeng.github.io/awesome-qa-prompt/"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Contact"
      }), ": Feel free to reach out via GitHub Issues or email"]
    }), "\n", createVNode(_components.p, {
      children: "If this project helps you, give it a Star! Your support keeps me going."
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

const url = "src/blog/en/AI-Testing/Introduction_of_Awesome_qa_prompt.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/AI-Testing/Introduction_of_Awesome_qa_prompt.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/AI-Testing/Introduction_of_Awesome_qa_prompt.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
