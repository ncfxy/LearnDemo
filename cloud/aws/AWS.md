# AWS 云服务

## Useful URLS

### Documents URLS

[AWS Serverless Application Model](https://docs.aws.amazon.com/zh_cn/serverless-application-model/latest/developerguide/serverless-getting-started.html)

[AWS 文档首页](https://docs.aws.amazon.com/index.html#lang/zh_cn)

[AWS Command Line Interface - CLI](https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/cli-chap-welcome.html)

[文档kindle版本](https://www.amazon.com/-/zh/Amazon-Web-Services/e/B007R6MVQ6/ref=ntt_dp_epwbk_0)

### Serverless Framework

* [官网首页](https://serverless.com/)
* [文档](https://serverless.com/framework/docs/)

#### [AWS常用命令](https://serverless.com/framework/docs/providers/aws/cli-reference/install/)

| 命令               | 作用                      | 使用示例                                                                            |
|--------------------|-------------------------|-------------------------------------------------------------------------------------|
| config credentials | 修改本地配置文件          | `serverless config credentials --provider aws --key 1234 --secret 5678`             |
| create             | 根据模板创建项目结构      | `serverless create --template aws-nodejs --path myService`                          |
| install            | 远程安装一个URL到本地     | `serverless install --url https://github.com/pmuens/serverless-crud --name my-crud` |
| package            | 整个结构打包到.serverless | `serverless package --stage production --region ap-southeast-1 --package /path`     |
| deploy             | 通过cloudFormation部署    | `serverless deploy --stage production --region eu-central-1`                        |
| invoke             | 调用Function              | `serverless invoke --function functionName --data "hello world"`                    |
| remove             | 删除deploy的Service       | `serverless remove --stage dev --region us-east-1`                                  |
