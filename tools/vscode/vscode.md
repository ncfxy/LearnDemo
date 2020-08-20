# VS Code

## VS Code 我常用的插件

| 插件名              | 说明                            | 链接                                                                              |
| ------------------- | ------------------------------- | --------------------------------------------------------------------------------- |
| Atom One Dark Theme | Atom 的代码主题                 | <https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark> |
| C/C++               |                                 |                                                                                   |
| Code Outline        |                                 |                                                                                   |
| Debugger for Chrome |                                 |                                                                                   |
| Document This       |                                 |                                                                                   |
| Less IntelliSense   |                                 |                                                                                   |
| markdownlint        |                                 |                                                                                   |
| REST Client         | 编写 http 请求和发送            | <https://marketplace.visualstudio.com/items?itemName=humao.rest-client>           |
| TSLint              |                                 |                                                                                   |
| View In Browser     | 使用默认浏览器打开 html 文件    |                                                                                   |
| Typescript UML      | 根据 typescript 代码创建 UML 图 |                                                                                   |
| Quokka              | 编写时实时监测变量              | <https://quokkajs.com/>                                                           |
| hexdump for VSCode  | 查看文件的二进制                | <https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-hexdump>    |
| Prettier            | 代码格式化工具                  | <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>      |
| Code Runner         | 直接运行代码段                  | <https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner>   |

## VS Code Online

- <https://github.com/codercom/code-server>
- <https://coder.com> login with github

## VSCode 扩展 API 笔记 <https://code.visualstudio.com/api>

### Overview

|                         |                                                      |
| ----------------------- | ---------------------------------------------------- |
| Get Started             | 如何创建插件                                         |
| Working with Extensions | 如何测试发布插件                                     |
| Extension Capabilities  | 支持常规配置、主题修改、新的语言、界面扩展、调试工具 |
| Extension Guides        | 使用各类 API 的例子                                  |
| Language Extensions     | 语言插件                                             |
| Advanced Topics         | 扩展 Host、远程开发等进阶主题                        |
| References              | 引用                                                 |

### Get Started

```shell
npm install -g yo generator-code
yo code
code ./helloworld
```

|                  |                    |                                            |
| ---------------- | ------------------ | ------------------------------------------ |
| activationEvents | 插件激活使用的命令 | onCommand:extension.helloWorld             |
| contributes      | 相关命令的定义     | contributes.commands: extension.helloWorld |
| VS Code API      | 调用对应的执行逻辑 | vscode.commands.registerCommand            |

### Working with Extensions

- Test

```shell
npm run test
yarn test
```

- Publish

```
npm install -g vsce
cd myExtension
vsce package
vsce login [username]
vsce publish
```
