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

## 其他高级SQL

- 测试函数的执行时间: `set @input := "hello world"; select benchmark(100000000, MD5(@input));`
- 日志输出: `SELECT 'LOADING departments' as 'INFO';`
- 载入备份文件: `source xxx.dump `
- 创建一个相似的表: `CREATE TABLE new_table LIKE old_table`
- 把Select结果插入另一张表: `insert into new_table (select * from old_table)`

## 配置

- `mysql --help | grep 'my.cnf'` 看mysql会从哪些位置读取my.cnf

```yaml
[mysqld]
# Only allow connections from localhost
#bind-address = 127.0.0.1
bind-address = 0.0.0.0

#log_bin
log-bin = mysql-bin # 开启binlog
binlog-format = ROW # 选择row模式
server_id = 1 # 配置mysql replication需要定义，主从之间的不能相同
```

## 主从复制

- 两种复制方式：基于binlog和基于GTID（全局事务标示符）
- [深入解析 MySQL binlog](https://zhuanlan.zhihu.com/p/33504555)

## Books

- [高性能MySQL](../readingnotes/高性能MySQL.md)

## MySql常用操作指令

- 常用操作指令：
  - show databases;
  - use `databaseName`;
  - create database `databaseName` default character set utf8 collate utf8_general_ci
  - drop database `databaseName`
  - show tables;
  - create table `tableName` (id int primary key not null auto_increment, name varchar(30));
  - desc `tableName`;
  - 删除表中所有数据: truncate table `tableName`
  - drop table `tableName`;
- 用户权限：<https://www.cnblogs.com/shangping/p/10889777.html>
  - flush privileges;
  - create user "用户名"@"IP地址" identified by "密码";
  - drop user "用户名"@"IP地址"
  - set password='new_password';
  - 也可以直接修改mysql.user表
  - grant 权限列表  on 库名.表名 to 用户名@'客户端主机'  [identified by '密码'  with参数];
  - grant ALL ON *.* to 用户名@'%' identified by ‘mima' 
- MySQL设置相关
  - show variables [like %xxx%];
  - show binary logs; # 查看binlog文件列表
  - show master status; # 查看当前日志文件状态
  - reset master; # 清空binlog日志文件
  - show slave status;
  - start slave;  # 启动复制

## Data Source Name

- dsn: `<driver>://<username>:<password>@<host>:<port>/<database>`
- 附加参数: `?charset=utf8mb4&parseTime=true`