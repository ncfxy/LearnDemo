# Nginx

- <http://nginx.org/>
- <https://www.zhihu.com/question/25056737>

## 推荐书目

- 《HTTP 权威指南》
- 《TCP/IP 详解卷一：协议》
- 《深入理解 Linux 内核》
- 《深入理解 Nginx；模块开发与架构解析》

## 配置实例

### 设置静态文件夹

```
    server {
        listen 8080;
        server_name static_server;
        location / {
            root D:/static_server;
            autoindex on;
        }
    }
```
