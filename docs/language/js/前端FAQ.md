# 前端FAQ

## 为何使用void 0代替undefined

- 可以节省3个字节
- 防止局部作用域中undefined被重写

## call, apply和bind的实现

bind: 使用apply实现
apply&call: 需要使用eval模拟

- <https://github.com/mqyqingfeng/Blog/issues/11>
- <https://github.com/mqyqingfeng/Blog/issues/12>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply>

## 深入理解原型和原型链

- <https://github.com/mqyqingfeng/Blog/issues/2>
