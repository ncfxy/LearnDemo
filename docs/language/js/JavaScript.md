# JavaScript 综述

## 需要学习的 Library

| 名字                | 作用                     | 官网                                    | 备注 |
| ------------------- | ------------------------ | --------------------------------------- | ---- |
| [React](./React.md) |                          | <https://reactjs.org/>                  |      |
| Angular             |                          | <https://angular.io/>                   |      |
| Vue                 |                          | <https://vuejs.org/>                    |      |
| RxJs                |                          | <https://rxjs-dev.firebaseapp.com/>     |      |
| lodash              | JavaScript 工具函数库    | <https://lodash.com/>                   |      |
| UnderScore          | JavaScript 工具函数库    | <https://underscorejs.org>              |      |
| TypeScript          |                          | <https://www.typescriptlang.org/>       |      |
| Axios               | Http Client              | <https://github.com/axios/axios>        |      |
| Yarn                | 依赖管理工具             | <https://yarnpkg.com/zh-Hans/>          |      |
| Yeoman              | 生成 WebApp 项目框架     | <https://yeoman.io/generators/>         |      |
| popper.js           | 管理页面上弹出 tip       | <https://popper.js.org/>                |      |
| ts-node             | 直接运行 typescript 文件 | <https://github.com/TypeStrong/ts-node> |      |

## 防抖(Debounce)和节流(Throttle)

- 防抖：指定时间内只执行一次，指定时间内再次触发，则时间重新开始计算
- 典型场景：指定时间段内执行一次，触发事件间隔大于等于指定的时间才会执行

  - 防抖：搜索框关键字匹配
  - 接口：滚动事件的处理

- Refs
  - <https://www.cnblogs.com/zhuanzhuanfe/p/10633019.html>
  - underscore debounce & throttle:
    <https://github.com/jashkenas/underscore/blob/master/underscore.js#L887>
    <https://github.com/jashkenas/underscore/blob/master/underscore.js#L842>
  - Loadsh debounce & throtttle:
    <https://github.com/lodash/lodash/blob/master/debounce.js>
    <https://github.com/lodash/lodash/blob/master/throttle.js>

## 浏览器异步任务运行机制、Tasks, microtasks, queues and schedules

- <https://juejin.im/entry/58d4df3b5c497d0057eb99ff>
- <http://www.ruanyifeng.com/blog/2014/10/event-loop.html>

## var的作用域(Scoping)和变量提升(Hoisting)

- 使用var在函数或全局内任何地方声明变量相当于在其内部最顶上声明它
- 使用var声明，其变量的作用域就相当于整个函数或全局
- <https://www.cnblogs.com/polk6/p/js-var.html>

## JS事件的捕获和冒泡(addEventListener第3个参数控制)

- 先捕获，后冒泡，捕获从上到下，冒泡从下到上
- stopPropagation 停止事件传播
- preventDefault 阻止默认事件的处理
- 事件委托(event delegattion)
  - 一个事件本来是要绑定到某个元素上，然而却绑定到了该元素的父（或祖先）元素上，利用事件冒泡原理，触发执行效果
  - 提高网页性能
  - 通过事件委托添加的事件，对后期生成的元素依然有效

## 浏览器 cookie

`Set-Cookie:value [ ;expires=date][ ;domain=domain][ ;path=path][ ;secure]`

```javascript
// Add cookie
document.cookie = 'name=ncfxy;domain=baidu.net;path=/';
// Read cookie
console.log(document.cookie);
// Delete cookie
function deleteCookie(name) {
  var date = new Date();
  date.setTime(date.getTime() - 10000);
  document.cookie = name + '=v; expires=' + date.toGMTString();
}
```

- <https://blog.csdn.net/lijing198997/article/details/9378047>
- <https://www.cnblogs.com/xiaochaohuashengmi/archive/2010/06/13/1757658.html>

## 重排和重绘

- <https://www.imooc.com/article/45936>
- <https://juejin.im/entry/582f16fca22b9d006b7afd89>

## DOMContentLoaded vs onload vs document.readyState

## SourceMap

- <https://www.cnblogs.com/tugenhua0707/p/9464984.html>

## Useful Links

JavaScript 练习题: \* <https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md>

## 用法记录

### JavaScript getter & setter

```javascript
class Example {
  get name() {
    return '';
  }
  set name(s) {
    console.log(s);
  }
}
```

```javascript
var Example = /** @class */ (function() {
  function Example() {}
  Object.defineProperty(Example.prototype, 'name', {
    get: function() {
      return '';
    },
    set: function(s) {
      console.log(s);
    },
    enumerable: true,
    configurable: true,
  });
  return Example;
})();
```

## 编码、加密

### Base64

- 二进制编码，三字节变四字节
- 不够末尾补=
- URL安全的需要将 '+/' 处理成'-_'并去掉'='
- btoa, atob
