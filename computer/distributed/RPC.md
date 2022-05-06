# RPC

远程过程调用

## Apache Thrift

用于各个服务之间的RPC通信，支持多种语言

- <https://thrift.apache.org/>
- <https://github.com/apache/thrift>
- 使用
  - 安装thrift
  - 使用Thrift IDL语法编写 .thrift文件
  - 生成源码：`thrift --gen <language> <Thrift filename>`
- Thrift的四层网络栈
  - Server: 多线程服务器、事件驱动服务器
  - Processor(输入输出流封装)：编译器生成，用于兼容不同语言
  - Protocol(数据格式的映射)：JSON、XML、plain、compact binary
  - Transport(网络层抽象): TCP连接、HTTP连接
- 开发流程：创建Transport -> 创建protocols -> 创建processor -> 创建server
- 接收到请求交给processor，由创建processor时传入的handler处理
- 速览
  - 
  - base types
  - structs
  - containers
  - services
  - exceptions
- IDL语法
  - Header: include, namespace
  - Definition: const, typedef, enum, struct, union, exception, service
  - Functions: oneway, others
  - Containers: map, set, list
  - BaseType: bool, byte, i16, i32, i64, double, string

