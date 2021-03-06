# Database

## 数据库事务的属性 ACID

- Atomicity（原子性）: 要么全部成功，要么全部失败回滚
- Consistency（一致性）: 从一个一致性状态变换到另一个一致性状态
- Isolation（隔离性）: 一个事务不能被其他事务干扰
- Durability（持久性）: 一旦被提交，对数据库中的数据的改变就是永久性的

## 问题

- 脏读: 一个事务处理过程里读取了另一个未提交的事务中的数据
- 不可重复读: 一个事务范围内多次查询却返回了不同的数据值
- 幻读: 数据条数发生变化

## MySQL的四种隔离级别

1. Read uncommitted (读未提交)：脏读。
1. Read committed (读已提交)：不可重复读。
1. Repeatable read (可重复读)：幻读。
1. Serializable (串行化)：可避免脏读、不可重复读、幻读的发生。

## [MySQL](./MySQL.md)

## [Redis](./Redis.md)
