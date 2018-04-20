# Vue

## 引用

```
<!-- 开发环境版本，包含了用帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

## 常用标签

- {{data}} 显示数据
- v-bind:title="message" 绑定数据
- v-if="seen" 条件
- v-for="todo in todos" 循环
- v-on:click="reverseMessage" 绑定事件
- v-model="message" 表单双向绑定
