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

## 命令<https://redis.io/commands>

| 命令                                          | 作用                           | 返回值                   |
| --------------------------------------------- | ------------------------------ | ------------------------ |
| SET key value                                 | 存储数据                       | OK                       |
| GET key                                       | 获取数据                       | value or nil             |
| EXISTS key                                    | 是否存在某个 key               | 1 or 0                   |
| INCR key                                      | increase one for value         | result                   |
| INCRBY key number                             | increase number for value      | result                   |
| DECR key                                      | decrease one for value         | result                   |
| DECRBY key number                             | decrease number for value      | result                   |
| EXPIRE key time                               | 设置 key 的有效期              | 1 or 0                   |
| TTL key                                       | 当前 key 的剩余有效期          | -2 不存在, -1 永久, 其他 |
| PERSIST key                                   | 移除某个 key 的有效期          | 1 or 0                   |
| rpush, lpush, llen, lrange, lpop, rpop        | list 操作命令                  |                          |
| sadd, srem, sismember, smembers, sunion, spop | set 操作命令                   |                          |
| zadd, zrange                                  | sorted set 操作命令            |                          |
| hset, hgetall, hmset, hget, hdel, hkeys, hlen | hash 操作命令(string-> string) |                          |
| hincr, hincrby, hdecr, hdecrby                | hash 数值操作命令              |                          |

## Redis 与 Java 整合

- <https://blog.csdn.net/Tulipyx/article/details/100045197>

## Redis 与 Memcached 比较

Amazon文档<https://docs.aws.amazon.com/zh_cn/AmazonElastiCache/latest/red-ug/SelectEngine.html>

| 维度     | Redis                              | Memcached                        |
| -------- | ---------------------------------- | -------------------------------- |
| 数据类型 | 支持 String, list, hash, set, zset | string                           |
| 备份     | 支持主从备份                       | 不支持                           |
| 持久化   | 可以将数据保存到磁盘               |                                  |
| 速度     | Redis 更快                         |                                  |
| 线程数   | 单线程的 IO 复用模型               | 多线程，非阻塞 IO 复用的网络模型 |
