---
title: "Daily Testing Workflow"
description: "A practical workflow guide for QA engineers to efficiently use the QA Prompt Library in their daily testing activities."
workflowType: "daily"
lang: "en"
order: 1
---

# Daily Testing Workflow

## 📋 Metadata
- **Audience**: QA Engineers, Test Automation Engineers
- **Estimated Time**: Reference guide for daily use
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
A practical workflow guide for QA engineers to efficiently use the QA Prompt Library in their daily testing activities.

---

## 🌅 Morning Routine

### 1. Review Test Plan (5-10 min)
**Prompts to Use**:
- [Requirements Analysis](/en/prompts/requirements-analysis/) - Review sprint goals
- [Test Strategy](/en/prompts/test-strategy/) - Identify high-risk areas

**Actions**:
- Review user stories for the day
- Identify testing priorities
- Check for blockers

### 2. Set Up Test Environment (10-15 min)
**Prompts to Use**:
- [Automation Testing](/en/prompts/automation-testing/) - Check pipeline status
- [Test Strategy](/en/prompts/test-strategy/) - Prepare test data

**Actions**:
- Verify test environments are up
- Prepare necessary test data
- Update local test automation code

---

## 📝 Test Case Creation (30-60 min)

### For New Features
**Workflow**:
1. Use [Test Case Writing](/en/prompts/test-case-writing/)
2. Generate comprehensive test scenarios
3. Add [Requirements Analysis](/en/prompts/requirements-analysis/) edge case tests
4. Review with [Functional Testing](/en/prompts/functional-testing/) checklist

**Example Prompt Flow**:
```text
1. Generate functional tests → Review → Refine
2. Add edge cases → Review → Refine
3. Create test data → Validate
4. Document in test management tool
```markdown

### For Bug Fixes
**Workflow**:
1. Use [Functional Testing](/en/prompts/functional-testing/) regression scenarios
2. Create tests to verify the fix
3. Add tests to prevent regression

---

## 🤖 Test Automation (1-2 hours)

### Writing New Tests
**Choose Your Framework**:
- **Selenium**: Use [Automation Testing](/en/prompts/automation-testing/)
- **Playwright**: Use [Automation Testing](/en/prompts/automation-testing/)
- **API**: Use [API Testing](/en/prompts/api-testing/)

**Workflow**:
1. Open relevant automation testing prompts
2. Generate test code using prompts
3. Review and customize
4. Run locally
5. Commit to repository

### Maintaining Existing Tests
**Prompts to Use**:
- [Automation Testing](/en/prompts/automation-testing/) - Test maintenance strategies
- [AI-Assisted Testing](/en/prompts/ai-assisted-testing/) - Intelligent test maintenance

**Actions**:
- Fix flaky tests
- Update selectors
- Refactor duplicated code

---

## 🔍 Exploratory Testing (30-45 min)

### Session-Based Testing
**Workflow**:
1. Use [Manual Testing](/en/prompts/manual-testing/) exploratory scenarios
2. Create a test charter
3. Time-box session (60-90 min)
4. Document findings
5. Log bugs

**Charter Template**:
```text
Mission: [What to explore]
Duration: [Time limit]
Areas: [Specific features/flows]
Heuristics: [SFDPOT, FEW HICCUPS, etc.]
```

---

## 🐛 Bug Reporting (15-30 min)

### When You Find a Bug
**Workflow**:
1. Use [Bug Reporting](/en/prompts/bug-reporting/) templates
2. Generate detailed bug report
3. Include reproduction steps
4. Add screenshots/videos
5. Log in issue tracker

**Quality Checklist**:
- [ ] Clear title
- [ ] Reproduction steps
- [ ] Expected vs actual behavior
- [ ] Environment details
- [ ] Screenshots/logs

---

## 🎨 Visual Testing (30-45 min)

### For UI Changes
**Workflow**:
1. Use [Accessibility Testing](/en/prompts/accessibility-testing/) visual testing scenarios
2. Set up visual regression tests
3. Capture baseline screenshots
4. Run comparison tests
5. Review differences

**Tools**:
- Percy, Applitools, BackstopJS
- Integrate with CI/CD

---

## 🔄 End-to-End Testing (1-2 hours)

### For Critical User Journeys
**Workflow**:
1. Use [Functional Testing](/en/prompts/functional-testing/) E2E scenarios
2. Map complete user journey
3. Generate E2E test code
4. Validate across all systems
5. Add to regression suite

**Focus Areas**:
- Login → Purchase flow
- User registration → First action
- Critical business processes

---

## 📊 Afternoon Review (30 min)

### 1. Test Execution Review
**Actions**:
- Check CI/CD pipeline results
- Review failed tests
- Update test reports

### 2. Metrics and Reporting
**Prompts to Use**:
- [Test Reporting](/en/prompts/test-reporting/)
- [Test Strategy](/en/prompts/test-strategy/) - Quality assessment

**Generate**:
- Test coverage reports
- Defect metrics
- Quality dashboards

### 3. Team Sync
**Share**:
- Bugs found
- Tests automated
- Blockers identified
- Tomorrow's plan

---

## 🌙 End of Day (15 min)

### Wrap Up
**Actions**:
- [ ] Commit all code changes
- [ ] Update test documentation
- [ ] Log time in test management tool
- [ ] Update task status
- [ ] Plan tomorrow's priorities

### Knowledge Sharing
**Optional**:
- Document learnings
- Update team wiki
- Share useful prompts with team

---

## 🔧 Tools Quick Access

### Most Used Prompts
1. [Test Case Writing](/en/prompts/test-case-writing/)
2. [Automation Testing](/en/prompts/automation-testing/)
3. [API Testing](/en/prompts/api-testing/)
4. [Bug Reporting](/en/prompts/bug-reporting/)
5. [Manual Testing](/en/prompts/manual-testing/)

---

## 💡 Pro Tips

1. **Batch Similar Tasks**: Group test case creation, automation, and exploratory testing
2. **Use Quick References**: Bookmark quick reference guides for fast lookup
3. **Leverage AI Roles**: Keep AI roles open in your IDE
4. **Document as You Go**: Don't wait until end of day
5. **Automate Repetitive Tasks**: Use AI to generate boilerplate code
6. **Time-Box Exploratory**: Stick to session limits
7. **Review Daily**: Check test results every afternoon

---

## 📅 Weekly Activities

### Monday
- Review sprint goals
- Plan testing for the week
- Set up test environments

### Tuesday-Thursday
- Execute daily workflow
- Focus on test automation
- Exploratory testing sessions

### Friday
- Regression testing
- Test report generation
- Knowledge sharing
- Sprint retrospective prep

---

## 🚨 When Things Go Wrong

### Pipeline Failures
1. Check [Automation Testing](/en/prompts/automation-testing/) CI/CD integration
2. Debug failed tests
3. Fix and re-run

### Flaky Tests
1. Use [Automation Testing](/en/prompts/automation-testing/) maintenance strategies
2. Implement proper waits
3. Add retry logic

### Blocked Testing
1. Document blocker
2. Find alternative test areas
3. Use [Test Strategy](/en/prompts/test-strategy/) to reprioritize

---

## 📚 Related Workflows

- [Sprint Testing Workflow](/en/prompts/workflows/sprint/) - Sprint-specific activities
- [Release Testing Workflow](/en/prompts/workflows/release/) - Pre-release checklist

---

**Remember**: This is a flexible guide. Adapt to your team's needs and project requirements!
