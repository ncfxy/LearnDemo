# Redis (Remote Dictionary Server)

<https://redis.io/>

## Config 文件阅读

- RDB 持久化
- 主从复制设置
- Master 选取优先级
- Sentinel 哨兵
- Redis Cluster
- Slow log
- 数据结构压缩 & hyperloglog

## 支持数据结构

- <https://redis.io/topics/data-types>
- String, List, Hash, Set, SortedSet

## 命令

| 命令              | 作用                      | 返回值 |
| ----------------- | ------------------------- | ------ |
| SET key value     | 存储数据                  | OK     |
| GET key           | 获取数据                  | value  |
| EXISTS key        | 是否存在某个 key          | 1 or 0 |
| INCR key          | increase one for value    |        |
| INCRBY key number | increase number for value |        |
| DECR key          | decrease one for value    |        |
| DECRBY key number | decrease number for value |        |
