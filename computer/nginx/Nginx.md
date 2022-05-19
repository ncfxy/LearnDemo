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

### root 和 alias的区别
location /img/ {
	alias /var/www/image/;
}
#若按照上述配置的话，则访问/img/目录里面的文件时，ningx会自动去/var/www/image/目录找文件
location /img/ {
	root /var/www/image;
}
#若按照这种配置的话，则访问/img/目录下的文件时，nginx会去/var/www/image/img/目录下找文件
