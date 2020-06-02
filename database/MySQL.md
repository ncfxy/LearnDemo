# MySQL

MyIsam(index sequential access mode)
InnoDB

|          | MyISAM 引擎       | InnoDB 引擎        |
| -------- | ----------------- | ------------------ |
| 主外键   | 不支持            | 支持               |
| 事务     | 不支持            | 支持               |
| 行表锁   | 表锁.不适合高并发 | 行锁.适合高并发    |
| 缓存     | 只缓存索引        | 缓存索引和真实数据 |
| 表空间   | 小                | 大                 |
| 关注点   | 性能.偏读         | 事务               |
| 默认安装 | 是                | 是                 |

## SQL

```
SELECT 列名
FROM 表名称
[ WHERE search_condition ] 
[ GROUP BY group_by_expression ] 
[ HAVING search_condition ] 
[ ORDER BY order_expression [ ASC | DESC ] ]
```

## 主从复制

- 两种复制方式：基于binlog和基于GTID（全局事务标示符）
- [深入解析 MySQL binlog](https://zhuanlan.zhihu.com/p/33504555)

## Books

- [高性能MySQL](../readingnotes/高性能MySQL.md)