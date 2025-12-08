# Chrome

## Chrome 常用插件

| 插件名称                            | 作用                               |
| ----------------------------------- | ---------------------------------- |
| ColorZilla                          | 从页面上获取颜色                   |
| AdBlock                             | 广告拦截工具                       |
| ADfree.Player.Online                | 视频广告拦截扩展                   |
| Adobe Acrobat                       | 将当前网页转换为 PDF               |
| appear.in screen sharing            | appear.in 用来共享屏幕             |
| CaptureCast Chrome Screen Recording | 免费的浏览器录屏软件               |
| Evernote Web Clipper                | Evernote 的 chrome 工具            |
| Gitpod Online IDE                   | 用来打开在线 github 项目的网页 IDE |
| Grammarly for Chrome                | Chrome 语法插件                    |
| Octotree                            | 打开 github 页面时获取 code tree   |
| PageSpeed Insights                  | 网页性能分析                       |
| Proxy SwitchyOmega                  | 管理多个代理                       |
| React Developer Tools               | React 插件                         |
| Redux DevTools                      | Redux 插件                         |
| Screencastify                       | 浏览器录屏软件                     |
| Session Buddy & SessionBox          | 管理多个 session                   |
| WhatRuns                            | 识别当前站点使用了哪些技术         |
| 奇妙清单标签页                      | 把浏览器首页变成 todo              |
| 惠惠购物助手                        | 浏览购物网页时识别历史价格         |

## Chrome 技巧

- 开启多线程下载: <chrome://flags/#enable-parallel-downloading>

## 以app形式启动chrome浏览器

```PowerShell
    & "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --app=http://www.baidu.com  
```

## 使用Chrome开发者的开发模式

- 将DevTool打开成独立面板，再用Ctrl+shift+i可以打开Devtool的Devtool
- <https://www.zhihu.com/question/524012130>

- 获取network里所有的url
```javascript
var URLs = UI.panels.network.networkLogView.dataGrid.rootNode().flatNodes.map(function(n){
    return {'url':n.request().url(), 'type': n.displayType()}
})
```