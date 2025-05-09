# macOS

## macOS常用快捷键

- https://www.zhihu.com/question/20021861

## mac常用工具

- Sequel Pro： Mac上的MySQL管理工具，<https://segmentfault.com/a/1190000006255923>
- Homebrew: Mac下的包管理工具,<https://brew.sh/>
  - 搜索：brew search SoftwareName
  - 更新：brew install SoftwareName
  - 卸载：brew remove SoftwareName
  - 查看已安装软件列表：brew list
  - 启动服务：brew services start SoftwareName
  - 软件安装到/usr/local/Cellar下边，然后链接到/usr/local
  - 升级go版本：`brew update`, `brew upgrade`, `brew upgrade go`
- 活动管理器：查看CPU、内存、磁盘、网络
- iStat：查看温度 `gem install iStats` `istats`
- 屏幕放大缩小: `option & command & +/-`

## Mac常用功能

### Mac聚焦搜索 command + 空格

- <https://support.apple.com/zh-cn/HT204014>
- 查找应用、文稿及其他文件
- 使用浏览器搜索：command + b

### 跟windows不一样的点

- 中英文切换键 = CapsLock键
- 永久切换大小写：长按CapsLock
- 显示隐藏文件夹：Command + Shift + .

### 快捷键记录

- Command + Tab： 在app之间切换
- Command + ~: 在app的多个实例间切换

## 我的常用软件

- 欧陆词典
  - option + 空格： 快速搜素
- 搜狗输入法
  - Shift: 切换小写英文和中文
  - Caps: 切换大写英文和中文
- 网易云音乐
- 飞书
- Seal
- Zoom
- MySQLWorkbench
- idea Toolbox
- Chrome

## MacCli 设置

- MacOS终端CLI添加颜色：<https://zhuanlan.zhihu.com/p/60880207>
- .bash_profile文件、.profile文件，启动bash时执行，详细还是不是很清楚
- 新版本的配置文件: ~/.zshrc
- 在Mac上将zsh用作默认Shell: <https://support.apple.com/zh-cn/HT208050>

## Mac与Windows文件互传
- 使用SMB
- 如何设置Mac与windows共享实现快速传输:<https://www.xiaohongshu.com/discovery/item/613341380000000021035ed8>
- 与 Windows 用户共享 Mac 文件: <https://support.apple.com/zh-cn/guide/mac-help/mchlp1657/10.14/mac/10.14>
- 从Mac连接到Windows: <https://support.apple.com/zh-cn/guide/mac-help/mchlp1660/10.14/mac/10.14>
- 访达: smb://17.212.167.33/


## 常用操作命令

- 打开网页命令: `open -a Safari http://stackoverflow.com`
- 打开网页命令: `open -a "Google Chrome" http://stackoverflow.com`
- 获取时间戳: `date +%s`
- 时间戳转当地时间: `date -r 1624972940`
- 查看端口占用: `lsof -i tcp:8081`

## Mac常用配置总结

- Host文件配置: `/etc/hosts`