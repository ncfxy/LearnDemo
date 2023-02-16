# Git

## Git 常用命令

    git clone xxxxx
    git branch [branchName]
    git branch -d [branchName]
    git commit -m "message"
    git commit --amend          修改最后一个commit
    git add [filePath/fileName]
    git status
    git stash
    git stash pop
    git pull/fetch [remoteBranchName]
    git rebase [branchName]
    git cherry-pick [commitCode]
    git push origin [sourceBranch]:[targetBranch]
    git checkout [branch-name]
    git chekcout -b [new-branch-name]
    git reset
    git log

## Git 其他好用的命令

- `git grep`

## 设置代理服务器

    git config --global http.proxy http://127.0.0.1:8088
    git config --global https.proxy https://127.0.0.1:8088

## 设置账户和邮箱

```shell
// 全局设置
git config --global user.name "yourname"
git config --global user.email "mygitlab@mali.cn"
// 为单个repository设置
git config user.name "yougithubname"
git config user.email "mygithubemail@mail.com"
```

```
[user]
    name = xxx
    email = xxx
```

## 一些技巧

    type null > .gitkeep     生成.gitkeep文件
    git rebase -i --root     删除第一个commit

## git commit 提交

| 类型     | 作用                                              |
| -------- | ------------------------------------------------- |
| feat     | 新功能（feature）                                 |
| fix      | 修补 bug                                          |
| docs     | 文档（documentation）                             |
| style    | 格式（不影响代码运行的变动）                      |
| refactor | 重构（即不是新增功能，也不是修改 bug 的代码变动） |
| test     | 增加测试                                          |
| chore    | 构建过程或辅助工具的变动                          |

commitizen: <https://github.com/commitizen/cz-cli>
commit message 介绍: <http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html>

## 混迹 Github

| URL                                                            | 用途                                          |
| -------------------------------------------------------------- | --------------------------------------------- |
| <https://github.com/pomber/git-history>                        | 快速浏览文件修改记录(git file history vscode) |
| <https://github.com/30-seconds/30-seconds-of-code>             | 收集大量有用的 javascript 代码片段            |
| <https://github.com/agalwood/Motrix>                           | 全能的下载工具                                |
| <https://github.com/algorithm-visualizer/algorithm-visualizer> | 直观的算法可视化工具                          |
| <https://github.com/naptha/tesseract.js>                       | 识别图片中文本的 js 库                        |
| <https://github.com/zhaoolee/ChromeAppHeroes>                  | Chrome 插件英雄榜，介绍优秀的 Chrome 插件     |
| <https://github.com/chinese-poetry/chinese-poetry>             | 最全中文诗歌数据库                            |
| <https://github.com/PaddlePaddle/PaddleOCR>                    | 轻量级中英文 OCR 识别库                       |
| <https://github.com/unbug/codelf>                              | CODELF(变量命名神器)                          |

### github 徽章添加

- 博客：GitHub 项目徽章的添加和设置：<https://www.eyrefree.org/2017/05/01/GitHub-Badge-Introduction/>
- 官方:<https://shields.io/>
- Sample: <https://img.shields.io/badge/react-v16.8.6-blue.svg>

### github在国内访问慢的解决方案

- 修改 Hosts 解决 Github 访问失败: <https://zhuanlan.zhihu.com/p/107334179>
  - ping检测: <http://ping.chinaz.com/>

```powershell
$str = '<div class="Cont" id="ipliststr"><a href="javascript:">20.205.243.166</a><a href="javascript:">140.82.121.3</a><a href="javascript:">20.27.177.113</a><a href="javascript:">140.82.121.4</a><a href="javascript:">140.82.113.3</a><a href="javascript:">140.82.114.4</a><a href="javascript:">140.82.113.4</a><a href="javascript:">140.82.114.3</a><a href="javascript:">192.30.255.113</a><a href="javascript:">140.82.112.3</a><a href="javascript:">192.30.255.112</a></div>'

# 从string中提取ip地址，去重，ping测试
$ipListMatches =  $str | Select-String -Pattern "(\d{1,3}\.){3}\d{1,3}" -AllMatches
$ipList = $ipListMatches.Matches.Value | Select-Object -Unique

for($i=0; $i -lt $ipList.Length; $i++){
    $ipList[$i]
    ping $ipList[$i]
}
```
```shell
str='<div class="Cont" id="ipliststr"><a href="javascript:">20.205.243.166</a><a href="javascript:">140.82.121.3</a><a href="javascript:">20.27.177.113</a><a href="javascript:">140.82.121.4</a><a href="javascript:">140.82.113.3</a><a href="javascript:">140.82.114.4</a><a href="javascript:">140.82.113.4</a><a href="javascript:">140.82.114.3</a><a href="javascript:">192.30.255.113</a><a href="javascript:">140.82.112.3</a><a href="javascript:">192.30.255.112</a></div>'
ipList=$(echo $str | grep -Eo '([0-9]{1,3}\.){3}[0-9]{1,3}')
echo $ipList | while read line
do
echo "value is $line"
ping $line -c 4
done
```

## git hooks

- pre-commit 中检查 goimports: <https://gist.github.com/TheHippo/4823bba5aea614306803d8e062d8318e>
