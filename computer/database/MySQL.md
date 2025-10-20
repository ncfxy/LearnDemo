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

```sql
SELECT 列名
FROM 表名称
[ WHERE search_condition ] 
[ GROUP BY group_by_expression ] 
[ HAVING search_condition ] 
[ ORDER BY order_expression [ ASC | DESC ] ]
```

### SQL常用转化函数&技巧
```sql
-- 使用CAST把数字转换为字符串，并使用CONCAT拼接
SELECT name, CONCAT(url, ', ', alexa, ', ', CAST(country as varchar)) AS site_info
FROM Websites;
```

### SQL示例
```sql
-- 创建表
CREATE TABLE `test`.`user`
(                                                                                                                      -- 数据库名.表名
    `id`                INT         NOT NULL AUTO_INCREMENT COMMENT '这是一个主键',                                    -- 自增, 主键, 不能为null, 注释
    `name`              VARCHAR(45) NOT NULL DEFAULT '',                                                               -- 长度45, 不能为null, 默认值为空
    `sample_tinyint`    tinyint,                                                                                       -- tinyint类型, 可以为null, -128~127
    `sample_smallint`   smallint unsigned,                                                                             -- smallint类型, 可以为null, 0~65535
    `sample_mediumint`  mediumint,                                                                                     -- mediumint类型, 可以为null, -8388608~8388607
    `sample_int`        int,                                                                                           -- int类型, 可以为null, -2147483648~2147483647
    `sample_bigint`     bigint,                                                                                        -- bigint类型, 可以为null, -9223372036854775808~9223372036854775807
    `sample_float`      float,                                                                                         -- float类型, 可以为null, 1.175494351e-38~3.402823466e+38
    `sample_double`     double,                                                                                        -- double类型, 可以为null, 2.2250738585072014e-308~1.7976931348623157e+308
    `sample_decimal`    decimal(10, 2),                                                                                -- decimal类型, 可以为null, 10位数字, 2位小数
    `sample_date`       date,                                                                                          -- date类型, 可以为null, 日期
    `sample_time`       time,                                                                                          -- time类型, 可以为null, 时间
    `sample_datetime`   datetime,                                                                                      -- datetime类型, 可以为null, 日期时间
    `sample_timestamp`  timestamp,                                                                                     -- timestamp类型, 可以为null, 时间戳
    `sample_tinytext`   tinytext,                                                                                      -- tinytext类型, 可以为null, 长度255
    `sample_text`       text,                                                                                          -- text类型, 可以为null, 长度65535
    `sample_mediumtext` mediumtext,                                                                                    -- mediumtext类型, 可以为null, 长度16777215
    `sample_longtext`   longtext,                                                                                      -- longtext类型, 可以为null, 长度4294967295
    `sample_tinyblob`   tinyblob,                                                                                      -- tinyblob类型, 可以为null, 长度255
    `sample_blob`       blob,                                                                                          -- blob类型, 可以为null, 长度65535
    `sample_mediumblob` mediumblob,                                                                                    -- mediumblob类型, 可以为null, 长度16777215
    `sample_longblob`   longblob,                                                                                      -- longblob类型, 可以为null, 长度4294967295
    `create_time`       timestamp   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',                             -- 创建时间, 不能为null, 默认值为当前时间
    `modify_time`       timestamp   NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间', -- 更新时间, 不能为null, 默认值为当前时间, 更新时自动更新
    PRIMARY KEY (`id`),                                                                                                -- 主键, 正式设置
    UNIQUE KEY `uniq_idx` (`id`, `name`),                                                                              -- 唯一索引, 可以有多个, 但是不能有重复的, 一般用于唯一性校验, 例如手机号, 邮箱等
    KEY `idx_name` (`name`)                                                                                            -- 普通索引, 可以有多个, 但是不能有重复的, 一般用于查询, 例如姓名, 地址等
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci; -- InnoDB存储引擎 默认字符集 utf8mb4, 排序规则utf8mb4_general_ci
```

### 其他高级SQL

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
  - ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';
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

## 使用docker部署mysql

```shell
# 启动MySQL容器
docker run -d \
  --name mysql-server \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=your_strong_password \ # 务必修改密码
  -v /opt/mysql/data:/var/lib/mysql \          # 数据持久化
  -v /opt/mysql/conf:/etc/mysql/conf.d \       # 配置持久化
  mysql:8.0
```