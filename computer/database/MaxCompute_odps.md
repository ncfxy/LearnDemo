# MaxCompute

## 官方文档

- SQL概述： <https://help.aliyun.com/zh/maxcompute/user-guide/overview-of-maxcompute-sql>

## 常用重点函数

- MAX_PT: 获取表上最大的有效分区
- CONCAT: 拼接字符串
- CONCAT_WS: 拼接字符串，并使用分隔符合并
- COALESCE: 获取第一个不为NULL的值
- GET_JSON_OBJECT: 获取json中的子字段
    - <https://help.aliyun.com/zh/maxcompute/user-guide/string-functions#79351b4a48pm2>

## 常用语句

### 把多个字段拼成Json

```SQL
    CONCAT('{', 
        CONCAT_WS(',', 
            CONCAT('"id": ', COALESCE(CONCAT('"',id,'"'), 'null')),
            CONCAT('"name": ', COALESCE(CONCAT('"',name,'"'), 'null'))
        ), 
    '}') as json_obj,
```

### 获取多级分区的最大有效分区
- MAX_PT只能获取第一分区的最大有效分区，后边的分区需要自己处理。

```SQL
SELECT  dt
        ,hh
FROM    table_name
WHERE   dt = MAX_PT('table_name')
AND     hh = (
                SELECT  MAX(hh)
                FROM    table_name
                WHERE   dt = MAX_PT('table_name')
                LIMIT   1
             ) 
```