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
- String, List, Hash, Set, SortedSet, HyperLogLog

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
| keys pattern                                  | 返回符合 pattern 的 key        | key 的 list              |

## HyperLogLog

- 12 KB 内存，计算接近 2^64 个不同元素的基数
- pfadd, pfcount, pfmerge

## 发布订阅

- subscribe, unsubscribe, publish
- 前边加 p 表示根据 pattern 批量操作

## 事务

- Multi 开始， EXEC 执行， Discard 取消
- 非原子性的，不会回滚

## Redis 与 Java 整合

- <https://blog.csdn.net/Tulipyx/article/details/100045197>

## Redis 与 Memcached 比较

Amazon 文档<https://docs.aws.amazon.com/zh_cn/AmazonElastiCache/latest/red-ug/SelectEngine.html>

| 维度     | Redis                              | Memcached                        |
| -------- | ---------------------------------- | -------------------------------- |
| 数据类型 | 支持 String, list, hash, set, zset | string                           |
| 备份     | 支持主从备份                       | 不支持                           |
| 持久化   | 可以将数据保存到磁盘               |                                  |
| 速度     | Redis 更快                         |                                  |
| 线程数   | 单线程的 IO 复用模型               | 多线程，非阻塞 IO 复用的网络模型 |

## Redis 文章阅读笔记

- 单线程，集中操作会卡顿
- keys, list, 发布订阅的使用
- 持久化：RDB 全量持久化，AOF 增量持久化
- RDB 原理：通过创建子进程，执行 copy on write
- Redis 集群
  - Sentinal 着眼于高可用, master 宕机时会自动将 slave 提升为 master
  - Cluster 着眼于扩展性，在单个 redis 内存不足时，使用 Cluster 进行分片存储

### 雪崩，穿透，击穿

|      | 描述                                     | 解决方案                  |
| ---- | ---------------------------------------- | ------------------------- |
| 雪崩 | key 同时大面积失效，导致请求都落到数据库 | 对 key 的失效时间加随机值 |
| 穿透 | 故意用缓存和数据库都拿不到的数据访问     | 对请求的有效性校验        |
| 击穿 | 热点数据突然失效                         | 对热点数据永久缓存        |

- 事前：**Redis** 高可用，主从+哨兵，**Redis cluster**，避免全盘崩溃。
- 事中：本地 **ehcache** 缓存 + **Hystrix** 限流+降级，避免** MySQL** 被打死。

### 集群

- 为什么快
  - 基于内存
  - 数据结构简单
  - 单线程(但可以开多个实例)
  - 多路 I/O 复用模型
- 持久化
  - RDB 冷备，周期性保存
  - AOF 热备，每条都写日志
  - 哨兵： 集群监控、消息通知、故障转移、配置中心
    - 至少3个组成集群
  - 主从复制：读写分离、通过 RDB 第一次复制，随后增量复制
  - 内存淘汰：定期删除、惰性删除

### 双写一致性

- 数据结构应用场景
  - String:
    - 缓存功能
    - 计数器
    - 共享用户 Session
    - 将复杂结构序列化成 String 使用
  - List：消息队列、文章列表、数据分页展示
  - Hash： 特定结构的使用场景
  - Set: 去重、交集、并集、差集
  - ZSet： 排行榜、权重队列
  - HyperLogLog：数量统计又不想保存，IP 访问量、User 访问量
- 通过 Zookeeper 实现分布式锁
- 双写一致性
  - KV、DB 读写模式
    - 读的时候，先读缓存，缓存没有的话，就读数据库，然后取出数据后放入缓存，同时返回响应。
    - 更新的时候，先更新数据库，然后再删除缓存。

### 布隆过滤器

- 判断不在一定不在，判断在不一定在
- 计算hash值之后，或到一个大的bitmap中去

### 秒杀系统设计

- 考虑的点：高并发、超卖、恶意请求、前端链接暴露、数据库（降级限流熔断）
- 服务单一职责：独立一套系统来支持
- 链接动态化：使用加密支付串做URL
- Redis集群、主从复制、读写分离、哨兵、持久化
- 使用nginx做负载均衡
- 恶意请求拦截：在网关层就进行拦截
- 资源静态化：能放CDN的都放在CDN
- 前后端限流：前端按钮，防止过快发送， 后端直接return false
- 限流、降级、熔断、隔离
