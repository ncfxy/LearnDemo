# Windows常用命令

## Windows下常用的应用程序名称

| 名称        | 对应应用程序 | 功能简介                   |
|-------------|------------|----------------------------|
| Perfmon.msc | 性能监视器   | 监视收集系统运行的性能数据 |
| mspaint     | 画图         |                            |
| calc        | 计算器       |                            |

## Windows下我会用到的快捷键

| 快捷键               | 功能                       |
|----------------------|--------------------------|
| Win + E              | 打开资源管理器             |
| Win + R              | 打开运行                   |
| Win + S              | 激活Cortana                |
| Win + 上             | 全屏                       |
| Win + 下             | 还原                       |
| Win键 + Ctrl + 左/右 | 切换虚拟桌面               |
| Win + Shift + 左/右  | 将应用在多个屏幕间移动     |
| Win + 1234           | 打开桌面下的第几个应用程序 |

参考： [Windows 10 快捷键汇总表格](https://blog.csdn.net/lindexi_gd/article/details/75905104)

## Windows常用配置总结

- host文件位置: `C:\Windows\System32\drivers\etc\hosts`
- 最近使用项目文件夹位置: `C:\Users\XXX\AppData\Roaming\Microsoft\Windows\Recent`

## winget软件安装命令

- 测试了一下，慢的有点没法使用
- <https://docs.microsoft.com/zh-cn/windows/package-manager/winget/>
- 清华大学开源软件镜像站: <https://mirrors.tuna.tsinghua.edu.cn/>
- 默认的source
    - msstore https://storeedgefd.dsx.mp.microsoft.com/v9.0
    - winget  https://winget.azureedge.net/cache

```
winget search <appname>
winget install <appname>
```

## ipconfig

- 查看本机的ip: ipconfig
- 更新host配置之后刷新dns: `ipconfig /flushdns`

## 脚本下载地址

<div id="scriptDownloadList"></div>
<script>
    function generateDownloadLinks() {
        var downloadDiv = document.getElementById('scriptDownloadList');
        for(var i = downloadDiv.childNodes.length -1;i >= 0;i--){downloadDiv.removeChild(downloadDiv.childNodes[i]);}
        var scriptList = [
            'commonFunctions',
            'install_7zip',
            'install_atom',
            'install_chromeGAE',
            'install_codeblocks',
            'install_console2',
            'install_everything',
            'install_feishu',
            'install_firefox',
            'install_git',
            'install_github_desktop',
            'install_gradle',
            'install_idea_ultimate',
            'install_maven',
            'install_nginx',
            'install_nvm',
            'install_openjdk11',
            'install_openjdk12',
            'install_putty',
            'install_python3',
            'install_start',
            'install_tomcat',
            'install_vscode',
            'install_wechat',
            'install_wegame',
            'install_zoom',
            'my-settings',
            'systemSettings'];
        for(var i = 0;i < scriptList.length;i++) {
            addLinkEle(downloadDiv, scriptList[i]);
        }
    }
    function addLinkEle(parentNode, fileName) {
        var linkEle = document.createElement('a');
        linkEle.href = 'http://demo.ncfxy.site/tools/systems/windows/' + fileName + '.ps1';
        linkEle.target = '_blank';
        linkEle.download = fileName + '.ps1';
        linkEle.textContent = fileName + '.ps1';
        linkEle.style.display = 'block';
        parentNode.appendChild(linkEle);
    }
    generateDownloadLinks();
</script>
