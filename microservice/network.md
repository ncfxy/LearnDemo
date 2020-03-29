# Network

## TCP/IP

### TCP三次握手、四次挥手

- 确认ACK(1): 确认是返回1
- 同步SYN(1): 连接时发送
- 终止FIN(1): 断开时发送
- 序列号seq(4): 发送请求时带
- 确认号ack(4): 返回时携带，期望为seq + 1

<https://blog.csdn.net/qq_38950316/article/details/81087809>

### TCP可靠性的保证

- 校验和: 防止篡改
- 序列号传输+ACK应答
- 超时重传
- 连接管理：三次握手、四次挥手
- 滑动窗口：处理完成才会向前移动
- 流量控制：根据接收端对数据的处理能力，决定发送端的发送速度
- 拥塞控制：1. 慢开始、拥塞控制 2. 快重传、快恢复

## HTTP

<https://www.cnblogs.com/gaozhiqiang/p/11750772.html>
<https://www.cnblogs.com/Java3y/p/8444033.html>

### POST Content-Type理解

<https://www.cnblogs.com/mmzuo-798/p/11634055.html>
<https://www.cnblogs.com/tugenhua0707/p/8975121.html>