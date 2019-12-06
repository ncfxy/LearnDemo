# React

## React 生命周期

![React生命周期图](React生命周期图.webp)

| 生命周期                  | 参数                               | 调用次数        | 能否使用setState() |
|---------------------------|------------------------------------|-----------------|-------------------|
| getDefaultProps           | null                               | 1(全局调用一次) | 否                 |
| getInitialState           | null                               | 1               | 否                 |
| componentWillMount        | null                               | 1               | 是                 |
| render                    | null                               | >= 1            | 否                 |
| componentDidMount         | null                               | 1               | 是                 |
| componentWillReceiveProps | object nextProps                   | >= 0            | 是                 |
| shouldComponentUpdate     | object nextProps, object nextState | >= 0            | 否                 |
| componentWillUpdate       | object nextProps, object nextState | >= 0            | 否                 |
| componentDidUpdate        | object prevProps, object prevState | >= 0            | 否                 |
| componentWillUnmound      | null                               | 1               | 否                 |

## Useful Links

- React 高频面试题 <https://mp.weixin.qq.com/s/3jmJgZFktP2NMT8XLvdIKQ>

## 常用React工具

| 工具               | 说明                        | 官网                                               |
|--------------------|---------------------------|----------------------------------------------------|
| React Styleguidist | React独立开发及文档生成工具 | https://github.com/styleguidist/react-styleguidist |
| Story Book         | React独立开发及文档生成工具 | https://storybook.js.org/                          |