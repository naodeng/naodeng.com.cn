---
title: "K6 Performance Testing Tutorial - Advanced Usage: HTML Report Output and CI/CD Integration"
description: "This blog post explores advanced K6 performance testing usage, focusing on generating HTML reports and integrating K6 into CI/CD pipelines, particularly with GitHub Actions. Readers will learn how to generate detailed HTML test reports and integrate K6 into CI/CD workflows through GitHub Actions for automated performance testing. These advanced techniques not only provide more intuitive performance test result visualization but also ensure timely execution of performance tests, helping to identify and resolve potential performance issues during development."
testType: performance-testing
framework: k6
language: JavaScript
stage: ci-cd
difficulty: advanced
duration: 55
order: 5
githubDemo: https://github.com/Automation-Test-Starter/K6-Performance-Test-starter
officialDocs: https://k6.io/docs/
date: 2024-01-20T09:10:00.000Z
---

## HTML Report Output

Based on K6's default test reports, K6 itself can only output command-line reports without a graphical interface for test reports.

If we want to generate graphical test reports, we can use the third-party K6 HTML Report Exporter v2 plugin to generate HTML reports.

Here are the steps to use the K6 HTML Report Exporter v2 plugin to generate HTML reports:

- 1. Import the K6 HTML Report Exporter v2 plugin in your test script

```javascript
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
```

- 2. Configure the K6 HTML Report Exporter v2 plugin in your test script

```javascript
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
```

- 3. Complete test script example

```javascript
import { check } from 'k6';
import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  check(res, {
    'HTTP response code is status 200': (r) => r.status === 200,
  });
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
```

- 4. Run the test script with k6 to generate an HTML report named summary.html in the project root directory

- 5. Open the summary.html report to view the HTML report.
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/tty2Zs.png)

For more information about the K6 HTML Report Exporter v2 plugin, please refer to the official documentation https://github.com/benc-uk/k6-reporter[https://github.com/benc-uk/k6-reporter]

## Continuous Integration

### Integrating with GitHub Actions

Using GitHub Actions as an example, other CI tools are similar

- Create .github/workflows directory: In your GitHub repository, create a directory named .github/workflows. This will be where GitHub Actions workflow files are stored.

- Create workflow file: Create a YAML format workflow file in the .github/workflows directory, for example k6.yml.

- Edit k6.yml file: Copy the following content into the file

```yml
name: K6 Performance Test
on: [push]
jobs:
  build:
    name: Run k6 test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Run k6 local test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: demo.js
          flags: --vus 50 --duration 10s
```

- Commit code: Add the k6.yml file to the repository and commit.
- View test report: In GitHub, navigate to your repository. Click the Actions tab at the top, then click the K6 Performance Test workflow on the left. You should see the workflow running, wait for execution to complete, and you can view the results.
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/NlOiHp.png)

- We can also output HTML reports through GitHub Actions, let's adjust the k6.yml file

```yml
name: K6 Performance Test
on: [push]
jobs:
  build:
    name: Run k6 performance test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Run k6 local test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: demo.js
          flags: --vus 50 --duration 10s
      - name: Archive K6 performance test report
        uses: actions/upload-artifact@v3
        with:
          name: K6-performance-test-report
          path: summary.html
      - name: Upload K6 performance test report to GitHub
        uses: actions/upload-artifact@v3
        with:
          name: K6-performance-test-report
          path: summary.html
```

- Commit code: Add the k6.yml file to the repository and commit.
- View test report: In GitHub, navigate to your repository. Click the Actions tab at the top, then click the K6 Performance Test workflow on the left. You should see the workflow running, wait for execution to complete, and you can view the results and test report attachments.
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/sFCarY.png)

## Reference Documentation

- [K6 Documentation:](https://k6.io/docs/)
- [k6 Official Website:](https://k6.io/)
- [K6 Performance Test Quick Start Project:](https://github.com/Automation-Test-Starter/K6-Performance-Test-starter)

---
Follow the WeChat official account "**软件测试同学**" for original QA technical articles.
<div style="text-align: center">
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;" />
</div>
