# Node

## Node import

```javascript
import defaultExport from 'module-name';
import * as name from 'module-name';
import { export } from 'module-name';
import { export as alias } from 'module-name';
import { export1, export2 } from 'module-name';
import { foo, bar } from 'module-name/path/to/specific/un-exported/file';
import { export1, export2 as alias2, [...] } from 'module-name';
import defaultExport, { export [ , [...]] } from 'module-name';
import defaultExport, * as name from 'module-name';
import 'module-name';
var promise = import(module-name);
```

## Node package.json参数

### dependencies + devDependencies + peerDependencies

- dependencies: 项目中用到的依赖
- devDependencies: 项目开发时使用到的依赖
- peerDependencies: 前置依赖，推荐依赖本项目的项目安装这些依赖
- How npm3 works: <https://npm.github.io/how-npm-works-docs/npm3/how-npm3-works.html>

## 依赖管理工具

### npm

| 命令                                                         | 作用                         |
|--------------------------------------------------------------|----------------------------|
| npm init                                                     | 初始化一个node项目           |
| npm install                                                  | 根据package.json安装依赖     |
| npm install xxx -save --registory=http://registory.npmjs.org | 安装某个依赖到dependencies   |
| npm adduser                                                  | 添加可以登录到当前仓库的用户 |
| npm login                                                    | 登录到当前仓库               |
| npm publish                                                  | 发布项目到仓库               |
| npm config set registry <http://registry.npmjs.org>          | 设置属性(所在文件.npmrc)     |
| npm config get registry                                      | 获取属性                     |

- 发布node包到nexus的私有仓库
  - <https://levelup.gitconnected.com/deploying-private-npm-packages-to-nexus-a16722cc8166>

### 常用npm源

| 名字      | 地址                               |
|-----------|------------------------------------|
| npm       | https://registry.npmjs.org/        |
| yarn      | https://registry.yarnpkg.com/      |
| cnpm      | http://r.cnpmjs.org/               |
| taobao    | https://registry.npm.taobao.org/   |
| nj        | https://registry.nodejitsu.com/    |
| npmMirror | https://skimdb.npmjs.com/registry/ |
| edunpm    | http://registry.enpmjs.org/        |

## babel

### preset和plugin的理解

babel通过plugin来转化代码，presets是一系列plugin的集合

### 常用依赖

| 依赖名            | 作用                  |
|-------------------|---------------------|
| @babel/core       | babel核心API,必须引入 |
| @babel/cli        | babel的命令行工具     |
| @babel/preset-env | 指定babel装换的环境   |
| @babel/ployfill   | 支持更多高级转换      |




## 常用依赖列表

### 开发提高效率工具

| 依赖名             | 功能                          | 链接                                            |
|--------------------|-----------------------------|-------------------------------------------------|
| npm-run-all        | 顺序或者并行的运行多条npm命令 | https://github.com/mysticatea/npm-run-all       |
| webpack-dev-server | webpack的开发server           | https://webpack.js.org/configuration/dev-server |
| cross-env          | 跨系统设置并使用环境变量      | https://github.com/kentcdodds/cross-env         |
| rollup             | Js代码打包器                  | https://rollupjs.org/guide/zh/                  |
| babel              | 代码打包工具                  | https://babeljs.io/                             |
| webpack            | 代码打包工具                  | https://webpack.js.org/                         |
| nrm                | npm的镜像管理工具             | https://github.com/Pana/nrm                     |
| yrm                | yarn对应的镜像管理工具        | https://github.com/i5ting/yrm                   |

## FAQ

### 1. npm 和 yarn 在windows下install非常慢

- 原因： windows的LSASS.EXE进程的Encrypting File System (EFS)功能占用大量CPU。
  - <https://support.microsoft.com/en-ca/help/2550044/how-to-troubleshoot-high-lsass-exe-cpu-utilization-on-an-active-direct>
  - <https://docs.microsoft.com/en-us/windows/win32/fileio/file-encryption>

- 方案： 关闭EFS功能

    <https://thegeekpage.com/enable-disable-windows-encrypting-file-system-efs-feature/>

    ```powershell
        fsutil behavior set disableencryption 1
        fsutil behavior set disableencryption 0
    ```

    更好的方案：关闭对应文件夹上的加密选项
