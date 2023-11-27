---
author:  "nao.deng"
title:  "Postman 接口自动化测试教程：进阶用法 - 常用命令行选项，文件上传场景和 SSL 证书场景"
date: "2023-11-27T12:37:00+08:00"
summary:  "这篇博文深度挖掘 Postman 接口自动化测试的进阶用法，集中讨论常用命令行选项、文件上传场景和 SSL 证书场景。学会如何运用常用命令行选项优化测试流程，解决文件上传和 SSL 证书等特殊场景的测试挑战"
ZHtags: ["命令行选项", "文件上传", "SSL 证书"]
ZHcategories: ["接口自动化测试", "Postman"]
ZHseries: ["Postman 接口自动化测试教程"]
ShowWordCount: true
---

## 进阶用法

以下会介绍 Postman 和 Newman 的一些进阶用法，包括常用命令行选项、文件上传场景和 SSL 证书场景。

### 文件上传场景

在 postman 和 newman 做接口自动化时，文件上传可以通过 form-data 的方式来实现。

文件必须存在于当前工作目录中。请求的 "src "属性中也必须包含文件名。

在此集合中，当前工作目录中应包含名为 "demo.txt" 的文件。

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

> 注意：调整文件上传的路径，确保文件存在路径在项目根目录下存在或者使用绝对路径

### Newman 常用命令行选项

newman 是一个命令行工具，可以使用它来运行 postman 集合。newman 提供了许多选项，可以在运行集合时使用这些选项。

以下是一些常用的 newman 命令行选项的介绍和示例：

#### 基本命令

- **`newman run <collection>`：** 用于运行 Postman 集合。

  ```bash
  newman run collection.json
  ```

- **`-e, --environment <environment>`：** 指定环境文件。

  ```bash
  newman run collection.json -e environment.json
  ```

- **`-g, --globals <globals>`：** 指定全局变量文件。

  ```bash
  newman run collection.json -g globals.json
  ```

- **`-d, --iteration-data <data>`：** 指定数据文件，用于数据驱动测试。

  ```bash
  newman run collection.json -d data-file.csv
  ```

#### 输出和报告

- **`-r, --reporters <reporters>`：** 指定报告器，可以生成多个报告，如 `cli`、`json`、`html` 等。

  ```bash
  newman run collection.json -r cli,json
  ```

- **`--reporter-json-export <file>`：** 将测试结果导出为 JSON 文件。

  ```bash
  newman run collection.json --reporters json --reporter-json-export output.json
  ```

- **`--reporter-html-export <file>`：** 将测试结果导出为 HTML 文件。

  ```bash
  newman run collection.json --reporters html --reporter-html-export output.html
  ```

- **`--reporter-html-template <file>`：** 使用自定义 HTML 模板生成 HTML 报告。

  ```bash
  newman run collection.json --reporters html --reporter-html-template custom-template.hbs
  ```

#### 其他选项

- **`-h, --help`：** 显示帮助信息，列出所有命令行选项。

  ```bash
  newman run --help
  ```

- **`-v, --version`：** 显示 Newman 版本信息。

  ```bash
  newman --version
  ```

- **`-x, --suppress-exit-code`：** 在运行失败时，不返回非零的退出代码。

  ```bash
  newman run collection.json -x
  ```

- **`--delay-request <ms>`：** 设置请求之间的延迟时间，以模拟实际场景。

  ```bash
  newman run collection.json --delay-request 1000
  ```

- **`--timeout <ms>`：** 设置请求的超时时间。

  ```bash
  newman run collection.json --timeout 5000
  ```

- **`--no-color`：** 禁用控制台输出的颜色。

  ```bash
  newman run collection.json --no-color
  ```

- **`--bail`：** 在第一个失败的测试时停止运行。

  ```bash
  newman run collection.json --bail
  ```

这只是一些常见的 Newman 命令行选项。你可以通过运行 `newman run --help` 查看所有可用选项以及它们的描述。根据你的测试需求，你可能需要调整和组合这些选项。

### SSL 证书配置

客户端证书是传统身份验证机制的替代方案。这些允许用户使用公共证书和验证证书所有权的可选私钥向服务器发出经过身份验证的请求。在某些情况下，私钥也可能受到秘密密码的保护，从而提供额外的身份验证安全层。

Newman 通过以下 CLI 选项支持 SSL 客户端证书：

#### 使用单个 SSL 客户端证书

> 直接在 newman 命令后面根据证书的实际情况添加以下选项即可

- `--ssl-client-cert`
参数后跟着公共客户端证书文件的路径。

- `--ssl-client-key`
参数后跟着客户端私钥的路径（可选）。

- `--ssl-client-passphrase`
参数后跟着用于保护私有客户端密钥的秘密密码（可选）。

#### 使用多个 SSL 客户端证书

> 适用于每次运行需要支持多个证书的情况

- `--ssl-client-cert-list`
SSL 客户端证书列表配置文件（JSON 格式）的路径。

参考示例/ssl-client-cert-list.json。

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

另外这种 json 配置也适用于不同证书不同环境的情况，根据 matches 匹配不同的环境和域名。

> 备注：此选项允许根据 URL 或主机名设置不同的 SSL 客户端证书。此选项优先于 --ssl-client-cert、 --ssl-client-key 和 --ssl-client-passphrase 选项。如果列表中没有匹配的 URL，这些选项将用作后备选项。

#### Trusted CA 证书

> 适用于需要信任自定义 CA 证书的情况

如果不想使用 --insecure 选项，可以像这样提供额外的可信 CA 证书：

- `--ssl-extra-ca-certs`
参数后跟着保存一个或多个 PEM 格式可信 CA 证书的文件路径的列表。

## 参考文档

- Postman 官方文档:<https://learning.postman.com/docs/getting-started/introduction/>
- Newman 官方文档:<https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options>
