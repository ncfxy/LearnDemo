# CSS

## Flex布局

| property        | 作用                                   | 位置   |
|-----------------|--------------------------------------|------|
| flex-direction  | 主轴方向                               | 容器上 |
| flex-wrap       | 如何换行                               | 容器上 |
| flex-flow       | flex-direction 和flex-wrap的简写       | 容器上 |
| justify-content | 主轴上的对齐方式                       | 容器上 |
| align-items     | 交叉轴上如何对齐                       | 容器上 |
| align-content   | 多根轴线时对齐使用                     | 容器上 |
| order           | 项目的排列顺序，默认0                   | 项目上 |
| flex-grow       | 放大比例，默认0                         | 项目上 |
| flex-shrink     | 项目缩小比例，默认1                     | 项目上 |
| flex-basis      | 项目占据的主轴空间的大小               | 项目上 |
| flex            | flex-grow,flex-shrink,flex-basis的缩写 | 项目上 |
| align-self      | 覆盖父项目的align-items设置            | 项目上 |

refs: <http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html>

## transform、transition、keyframe和性能优化

- 调试CSS Key frame <https://www.w3ctech.com/topic/1472>
- CSS Animation性能优化 <https://github.com/amfe/article/issues/47>
- 调试frame网站 <https://cubic-bezier.com>