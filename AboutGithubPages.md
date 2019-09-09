# About Github pages

## Useful Link

[Github Pages 官网](https://pages.github.com/)

## Github 官方Markdown语法

* [Guide 文档](https://guides.github.com/features/mastering-markdown/)
* [帮助文档](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)

## 测试Github是否支持mermaid作图

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

## Github API

* 官方文档
  * [REST API v3](https://developer.github.com/v3/)
  * [GraphQL API v4](https://developer.github.com/v4/)

* 其他文章
  * [一篇文章搞定Github API 调用 (v3）](https://segmentfault.com/a/1190000015144126)

## Jekyll

<https://jekyllrb.com/>

### 常用命令

```cmd
  gem install jekyll bundler
  jekyll new
  jekyll clean
  jekyll build
  jekyll serve
```

### Liquid Template

```html
  Objects:  {{ page.title }}
  Tags:     {% if page.show_sidebar %}
              <div class="sidebar">sidebar content</div>
            {% endif %}
  Filters:  {{ "hi" | capitalize }}
```

### Front Matter

```markdown
  ---
  my_number: 5
  title: Home
  ---
```

### 常用文件夹及文件

| 文件夹或文件 | 作用                                     |
|--------------|----------------------------------------|
| _layouts     | 存放页面模板                             |
| _includes    | 文件夹中的文件可以在其他地方引用         |
| _data        | 数据可以通过 `site.data.navigation` 引用 |
| assets       | 保存样式文件                             |
| _post        | 启用jekyll 管理blog                      |
| _config.yml  | 保存jekyll项目的配置信息                 |
