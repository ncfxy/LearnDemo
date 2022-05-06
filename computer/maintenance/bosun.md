# Bosun

- Bosun规则介绍: <https://bosun.org/expressions>
- 一文搞懂 bosun 查询: <https://cloud.tencent.com/developer/article/1824706>
  - Scalar, NumberSet, SeriesSet, Results

## 常用规则

```php
$a = q("avg:rate:test.abc", "3m", "")
```

## opentsdb查询语句

- Querying or Reading Data: <http://opentsdb.net/docs/build/html/user_guide/query/index.html>
- Query Filters: <http://opentsdb.net/docs/build/html/user_guide/query/filters.html>
  - literal_or(web01|web02|web03) In SQL: WHERE host IN ('web01', 'web02', 'web03')
  - not_literal_or:表示不等于
  - wildcard:模糊匹配
  - regexp: 正则匹配