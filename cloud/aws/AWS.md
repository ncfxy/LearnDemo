# AWS 云服务

## Useful URLS

### Documents URLS

[AWS Serverless Application Model](https://docs.aws.amazon.com/zh_cn/serverless-application-model/latest/developerguide/serverless-getting-started.html)

[AWS 文档首页](https://docs.aws.amazon.com/index.html#lang/zh_cn)

[AWS Command Line Interface - CLI](https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/cli-chap-welcome.html)

[文档 kindle 版本](https://www.amazon.com/-/zh/Amazon-Web-Services/e/B007R6MVQ6/ref=ntt_dp_epwbk_0)

### Serverless Framework

- [官网首页](https://serverless.com/)
- [文档](https://serverless.com/framework/docs/)

#### [AWS 常用命令](https://serverless.com/framework/docs/providers/aws/cli-reference/install/)

| 命令               | 作用                      | 使用示例                                                                            |
| ------------------ | ------------------------- | ----------------------------------------------------------------------------------- |
| config credentials | 修改本地配置文件          | `serverless config credentials --provider aws --key 1234 --secret 5678`             |
| create             | 根据模板创建项目结构      | `serverless create --template aws-nodejs --path myService`                          |
| install            | 远程安装一个 URL 到本地   | `serverless install --url https://github.com/pmuens/serverless-crud --name my-crud` |
| package            | 整个结构打包到.serverless | `serverless package --stage production --region ap-southeast-1 --package /path`     |
| deploy             | 通过 cloudFormation 部署  | `serverless deploy --stage production --region eu-central-1`                        |
| invoke             | 调用 Function             | `serverless invoke --function functionName --data "hello world"`                    |
| remove             | 删除 deploy 的 Service    | `serverless remove --stage dev --region us-east-1`                                  |

## 使用到的服务

| 服务          | 简要描述                                                                |
| ------------- | ----------------------------------------------------------------------- |
| lambda        | 通过事件响应的无服务器计算服务                                          |
| dynamodb      | NoSQL 数据库                                                            |
| API Gateway   | 创建、发布、维护、监控和保护任意规模的 REST 和 WebSocket API            |
| CloudFront    | 加快将静态和动态 Web 内容分发到用户的速度，类似 CDN                     |
| IoT           | 通过 MQTT 和 HTTP 在连接 Internet 的设备和 AWS 云之间实现安全的双向通信 |
| Elasticsearch | 托管 Elasticsearch (一种常见的开源搜索和分析引擎)                       |
| SQS & MQ      | SQS 为完全的 Amazon 服务，MQ 为 ActiveMQ 的托管服务                     |

## 文档阅读笔记

### AWS Command Line Interface

#### 配置设置和优先顺序 

<https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/cli-chap-configure.html>

1. `命令行选项`: --region、--output 和 --profile 作为参数。
2. `环境变量`: AWS_ACCESS_KEY_ID、AWS_SECRET_ACCESS_KEY 和 AWS_SESSION_TOKEN
3. `CLI 凭证文件`: `aws configure`命令生成 `~/.aws/credentials`(Linux,macOS)或 `C:\Users\USERNAME\.aws\credentials`(Windows)
4. `CLI 配置文件`: `aws configure`命令生成 `~/.aws/config`(Linux,macOS)或 `C:\Users\USERNAME\.aws\config`(Windows)
5. `容器凭证`: – 可以将 IAM 角色与每个 `Amazon Elastic Container Service (Amazon ECS)` 任务定义相关联。
6. `实例配置文件凭证`: – 可以将 IAM 角色与每个 `Amazon Elastic Compute Cloud (Amazon EC2)` 实例相关联。之后，在该实例上运行的代码就可以使用该角色的临时凭证。

#### 使用

帮助、参数、输出、分页、返回代码、命令格式

```shell
aws <command> <subcommand> [options and parameters]
aws <command> <subcommand> help
--option key1=value1,key2=value2,key3=value3
--option '{"key1":"value1","key2":"value2","key3":"value3"}'
```

### AWS Lambda

管理函数：环境变量、并发、版本、别名、Layers、Network、Database、标签

