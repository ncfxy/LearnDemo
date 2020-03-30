# Network

## TCP/IP

### TCP 三次握手、四次挥手

- 确认 ACK(1): 确认是返回 1
- 同步 SYN(1): 连接时发送
- 终止 FIN(1): 断开时发送
- 序列号 seq(4): 发送请求时带
- 确认号 ack(4): 返回时携带，期望为 seq + 1

<https://blog.csdn.net/qq_38950316/article/details/81087809>

### TCP 可靠性的保证

- 校验和: 防止篡改
- 序列号传输+ACK 应答
- 超时重传
- 连接管理：三次握手、四次挥手
- 滑动窗口：处理完成才会向前移动
- 流量控制：根据接收端对数据的处理能力，决定发送端的发送速度
- 拥塞控制：1. 慢开始、拥塞控制 2. 快重传、快恢复

## HTTP

<https://www.cnblogs.com/gaozhiqiang/p/11750772.html>
<https://www.cnblogs.com/Java3y/p/8444033.html>

<https://blog.csdn.net/qq_35689573/article/details/82120851>

- HTTP 状态码
  - 200 OK: 正常处理
  - 204 No Content: 正常处理但没有资源
  - 206 Partial Content: 是对资源某一部分的请求
  - 301 Moved Permanently: 永久重定向
  - 302 Found: 临师重定向
  - 304 Not Modified: 文档内容未变化
  - 400 Bad Request：服务器端无法理解客户端发送的请求
  - 401 Unauthorized：该状态码表示发送的请求需要有通过HTTP认证
  - 403 Forbidden：不允许访问那个资源
  - 404 Not Found：服务器上没有请求的资源
  - 500 Internal Server Error：服务器发生错误
  - 502 Bad Gateway： 网关错误
  - 503 Service Unavailable：服务器过载无法处理请求
  - 504 Gateway Timeout：网关超时

| 代码 | 类别                             | 原因                       |
| ---- | -------------------------------- | -------------------------- |
| 1XX  | Informational（信息性状态码）    | 接受的请求正在处理         |
| 2XX  | Success（成功状态码）            | 请求正常处理完毕           |
| 3XX  | Redirection（重定向状态码）      | 需要进行附加操作以完成请求 |
| 4XX  | Client Error（客户端错误状态码） | 服务器无法处理请求         |
| 5XX  | Server Error（服务器错误状态码） | 服务器处理请求出错         |


### POST Content-Type 理解

<https://www.cnblogs.com/mmzuo-798/p/11634055.html>
<https://www.cnblogs.com/tugenhua0707/p/8975121.html>

- Content-Type
  - application/x-www-form-urlencoded: 原生 form 表单
  - multipart/form-data： 表单上传文件
  - application/json：body 中存放序列化的 JSON

### Restful

<http://www.ruanyifeng.com/blog/2011/09/restful.html>

- 每个 URI 代表一种资源
- 客户端通过四个 HTTP 动词，对服务器端资源进行操作，实现"表现层状态转化"
  - Get 获取、Post 新建、Put 更新、Delete 删除
- 客户端与服务端之间的交互在请求之间是无状态的
- 客户端和服务器之间，传递这种资源的某种表现层
