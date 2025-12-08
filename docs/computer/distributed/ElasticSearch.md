# ElasticSearch

- 官方文档: <https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html>

## ES基本用法

- 元数据：_index, _type, _id

### 基础文档操作

- 取回文档: `get /_index/_type/_id?_source=a,b`
- 查询文档: `get /_index/_type/_search` 
- 创建文档: `put /_index/_type/_id/_create` 或 `put _index/_type/_id?opt_type=create`
- 删除文档: `delete /_index/_type/_id`
- 更新文档: `post /_index/_type/_id/_update`
- 获取mapping: `get /_index/_mapping/_type`
- 更新mapping: `put /_index/_mapping/_type`

### ES查询表达式

- 第一级: `query, highlight, agg, sort, from, size`
- 普通查询: `match_all, match, multi_match, range, term, terms, exists, missing`
- 聚合查询: `must, must_not, should, filter`
- 查询是模糊匹配，过滤是精准匹配

### 其他

- 深翻页最新推荐使用: search_after + PIT 模式


## ElasticSearch 权威指南

### 基础入门

- 基础介绍
  - 用途：全文搜索、 结构化搜索、 数据分析
  - 是什么：分布式文档存储、分布式实时分析搜索引擎、可扩展支持 PB 级别的结构化&非结构化数据
  - 安装运行：<https://www.elastic.co/guide/cn/elasticsearch/guide/current/running-elasticsearch.html>
  - 交互： Java API、 RestfulAPI
    - `curl -X<VERB> '<PROTOCOL>://<HOST>:<PORT>/<PATH>?<QUERY_STRING>' -d '<BODY>'`
    - `curl -XGET 'http://localhost:9200/abc?pretty' -H 'Content-Type: application/json' -d '{"query":{"match_all":{}}}'`
  - ES 是面向文档的，通常使用 JSON 作为文档序列化格式
  - 一对多：集群 > 索引 > 类型 > 文档 > 属性
  - 直接检索、表达式搜索、全文搜索、短语搜索、高亮搜索、聚合分析
- 集群内原理
  - 集群(cluster)、节点(node)、分片(shard)
  - 集群：一个或者多个相同cluster.name配置的节点
  - 集群健康：green(全部正常)、yellow(有副分片故障)、red(有主分片故障)
  - 索引：指向一个或多个物理分片的逻辑命名空间
  - 分片可以存在多个副本
  - 水平扩容来分配负载和应对故障
- 数据输入输出
  - 文档：JSON对象序列化后存储在ES上
  - 文档元数据
    - _index: 文档在哪存放
    - _type: 文档表示的对象类别
    - _id: 文档唯一表示
  - 文档操作：索引(PUT/POST)、取回(GET)、检测是否存在(HEAD)、更新(PUT)、创建(PUT/POST)、删除(DELETE)
  - 处理冲突：乐观并发控制
    - 使用版本号进行控制
  - 文档是不可变的：不能被修改，只能被替换
  - 部分更新、批量操作
- 分布式文档系统
  - 确定存储分片：shard = hash(routing) % number_of_primary_shards
  - 创建索引的时候就确定好主分片的数量 并且永远不会改变这个数量
  - 集群中的任一节点都有能力处理任意请求，都知道集群中任一文档位置
  - 新建、索引、删除文档：先主分片、再复制到副分片
  - 取回：可以从主分片或者从其它任意副本分片检索文档
  - 局部更新：多一步从主分片检索文档，确定没有被其他进程修改
  - mget取回多文档，bulk修改多文档
- 执行分布式检索
  - 查询: 借助(from+size)的优先队列，先分开查询、再汇总
  - 取回：协调节点从分片取回返回给客户端
    - 尽量避免深分页：需要操作number_of_shards * (from + size)
  - 搜索：
  - 游标

* 分片 = Lucene 索引
* ES 索引 = 分片的集合

## 常用Client

- Go语言: <https://olivere.github.io/elastic/>
- 官方Clients: <https://www.elastic.co/guide/en/elasticsearch/client/index.html>

### 其他博客

- 全文搜索引擎 Elasticsearch 入门教程: <http://www.ruanyifeng.com/blog/2017/08/elasticsearch.html>
