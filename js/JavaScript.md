# JavaScript 综述

## 需要学习的Library

| 名字                | 作用                 | 官网                                | 备注 |
|---------------------|----------------------|-------------------------------------|------|
| [React](./React.md) |                      | <https://reactjs.org/>              |      |
| Angular             |                      | <https://angular.io/>               |      |
| Vue                 |                      | <https://vuejs.org/>                |      |
| RxJs                |                      | <https://rxjs-dev.firebaseapp.com/> |      |
| lodash              | JavaScript工具函数库 | <https://lodash.com/>               |      |
| UnderScore          | JavaScript工具函数库 | <https://underscorejs.org>          |      |
| TypeScript          |                      | <https://www.typescriptlang.org/>   |      |
| Axios               | Http Client          | <https://github.com/axios/axios>    |      |
| Yarn                | 依赖管理工具         | <https://yarnpkg.com/zh-Hans/>      |      |
| Yeoman              | 生成WebApp项目框架   | <https://yeoman.io/generators/>     |      |
| popper.js           | 管理页面上弹出tip    | <https://popper.js.org/>            |      |

## 防抖(Debounce)和节流(Throttle)

* 防抖：指定时间内只执行一次，指定时间内再次触发，则时间重新开始计算
* 典型场景：指定时间段内执行一次，触发事件间隔大于等于指定的时间才会执行
  * 防抖：搜索框关键字匹配
  * 接口：滚动事件的处理

* Refs
  * <https://www.cnblogs.com/zhuanzhuanfe/p/10633019.html>
  * underscore debounce & throttle:
    <https://github.com/jashkenas/underscore/blob/master/underscore.js#L887>
    <https://github.com/jashkenas/underscore/blob/master/underscore.js#L842>
  * Loadsh debounce & throtttle:
    <https://github.com/lodash/lodash/blob/master/debounce.js>
    <https://github.com/lodash/lodash/blob/master/throttle.js>

## 浏览器cookie

`Set-Cookie:value [ ;expires=date][ ;domain=domain][ ;path=path][ ;secure]`

```javascript
    // Add cookie
    document.cookie="name=ncfxy;domain=baidu.net;path=/";
    // Read cookie
    console.log(document.cookie);
    // Delete cookie
    function deleteCookie(name){
        var date=new Date();
        date.setTime(date.getTime()-10000);
        document.cookie=name+"=v; expires="+date.toGMTString();
    }
```

* <https://blog.csdn.net/lijing198997/article/details/9378047>
* <https://www.cnblogs.com/xiaochaohuashengmi/archive/2010/06/13/1757658.html>

## 重排和重绘

* <https://www.imooc.com/article/45936>
* <https://juejin.im/entry/582f16fca22b9d006b7afd89>

## DOMContentLoaded vs onload vs document.readyState


## SourceMap

* <https://www.cnblogs.com/tugenhua0707/p/9464984.html>

## Useful Links

JavaScript 练习题:
    * <https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md>
