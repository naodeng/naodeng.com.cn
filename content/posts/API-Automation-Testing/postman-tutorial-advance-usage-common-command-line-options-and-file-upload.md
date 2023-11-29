---
author:  "nao.deng"
title:  "Postman API Automation Testing Tutorial Advance Usage common command line options and file upload"
date: "2023-11-27T12:37:00+08:00"
summary:  "This blog post takes a deep dive into the advanced usage of Postman API automation testing, focusing on common command line options, file upload scenarios, and SSL certificate scenarios. Learn how to use common command line options to optimize the testing process and solve the testing challenges of special scenarios such as file upload and SSL certificate."
tags: ["command line option", "file upload", "SSL certificate"]
categories: ["API Automation Testing", "Postman"]
series: ["Postman API Automation Testing Tutorial"]
ShowWordCount: true
---

## Advanced Usage

This section will introduce some advanced features of Postman and Newman, including common command-line options, file upload scenarios, and SSL certificate configurations.

### File Upload Scenarios

When performing interface automation with Postman and Newman, file uploads can be achieved using the form-data method.

The file must exist in the current working directory, and the "src" attribute in the request must also include the filename.

In this collection, the file "demo.txt" should be present in the current working directory.

```json
{
    "info": {
        "name": "file-upload"
    },
    "item": [
        {
            "request": {
                "url": "https://postman-echo.com/post",
                "method": "POST",
                "body": {
                    "mode": "formdata",
                    "formdata": [
                        {
                            "key": "file",
                            "type": "file",
                            "enabled": true,
                            "src": "demo.txt"
                        }
                    ]
                }
            }
        }
    ]
}
```

> Note: Adjust the path for file uploads to ensure that the file exists in the project's root directory or use an absolute path.

### Common Newman Command-Line Options

Newman is a command-line tool used to run Postman collections. It provides many options that can be used when running collections.

Here are some common Newman command-line options along with examples:

#### Basic Commands

- **`newman run <collection>`：** Used to run a Postman collection.

  ```bash
  newman run collection.json
  ```

- **`-e, --environment <environment>`：** Specify an environment file.

  ```bash
  newman run collection.json -e environment.json
  ```

- **`-g, --globals <globals>`：** Specify a global variables file.

  ```bash
  newman run collection.json -g globals.json
  ```

- **`-d, --iteration-data <data>`：** Specify a data file for data-driven testing.

  ```bash
  newman run collection.json -d data-file.csv
  ```

#### Output and Reporting

- **`-r, --reporters <reporters>`：** Specify reporters to generate multiple reports, such as `cli`, `json`, `html`, etc.

  ```bash
  newman run collection.json -r cli,json
  ```

- **`--reporter-json-export <file>`：** Export test results as a JSON file.

  ```bash
  newman run collection.json --reporters json --reporter-json-export output.json
  ```

- **`--reporter-html-export <file>`：** Export test results as an HTML file.

  ```bash
  newman run collection.json --reporters html --reporter-html-export output.html
  ```

- **`--reporter-html-template <file>`：** Use a custom HTML template to generate HTML reports.

  ```bash
  newman run collection.json --reporters html --reporter-html-template custom-template.hbs
  ```

#### Other Options

- **`-h, --help`：** Display help information, listing all command-line options.

  ```bash
  newman run --help
  ```

- **`-v, --version`：** Display Newman version information.

  ```bash
  newman --version
  ```

- **`-x, --suppress-exit-code`：** Do not return a non-zero exit code on failure.

  ```bash
  newman run collection.json -x
  ```

- **`--delay-request <ms>`：** Set a delay between requests to simulate real-world scenarios.

  ```bash
  newman run collection.json --delay-request 1000
  ```

- **`--timeout <ms>`：** Set the timeout for requests.

  ```bash
  newman run collection.json --timeout 5000
  ```

- **`--no-color`：** Disable colored output in the console.

  ```bash
  newman run collection.json --no-color
  ```

- **`--bail`：** Stop running on the first failed test.

  ```bash
  newman run collection.json --bail
  ```

These are just some common Newman command-line options. You can run `newman run --help` to see all available options and their descriptions. Depending on your testing needs, you may need to adjust and combine these options.

### SSL Certificate Configuration

Client certificates are an alternative to traditional authentication mechanisms. They allow users to send authenticated requests to servers using public certificates and optional private keys to verify certificate ownership. In some cases, the private key may also be protected by a secret passphrase, providing an additional layer of authentication security.

Newman supports SSL client certificates through the following CLI options:

#### Using a Single SSL Client Certificate

> Add the following options directly after the newman command based on your certificate situation.

- `--ssl-client-cert`
  Followed by the path to the public client certificate file.

- `--ssl-client-key`
  Followed by the path to the client private key (optional).

- `--ssl-client-passphrase`
  Followed by the secret passphrase used to protect the private client key (optional).

#### Using Multiple SSL Client Certificates

> Applicable when you need to support multiple certificates for each run.

- `--ssl-client-cert-list`
  Path to the SSL client certificate list configuration file (in JSON format).

Reference example/ssl-client-cert-list.json.

```json
[
    {
        "name": "domain1",
        "matches": ["https://test.domain1.com/*", "https://www.domain1/*"],
        "key": {"src": "./client.domain1.key"},
        "cert": {"src": "./client.domain1.crt"},
        "passphrase": "changeme"
    },
    {
        "name": "domain2",
        "matches": ["https://domain2.com/*"],
        "key": {"src": "./client.domain2.key"},
        "cert": {"src": "./client.domain2.crt"},
        "passphrase": "changeme"
    }
]
```

Additionally, this JSON configuration is suitable for different certificates in different environments based on matches for different URLs and hostnames.

> Note: This option allows setting different SSL client certificates based on the URL or hostname. This option takes precedence over --ssl-client-cert, --ssl-client-key, and --ssl-client-passphrase options. If there are no matching URLs in the list, these options will be used as fallback.

#### Trusted CA Certificates

> Applicable when you need to trust custom CA certificates.

If you don't want to use the --insecure option, you can provide additional trusted CA certificates like this:

- `--ssl-extra-ca-certs`
  Followed by a list of file paths to one or more PEM format trusted CA certificates.

## Reference Documents

- [Postman Official Documentation https://learning.postman.com/docs/getting-started/introduction/](https://learning.postman.com/docs/getting-started/introduction/)
- [Newman Official Documentation https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options](https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options)