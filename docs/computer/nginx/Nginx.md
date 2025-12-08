# Nginx

- <http://nginx.org/>
- <https://www.zhihu.com/question/25056737>

## 推荐书目

- 《HTTP 权威指南》
- 《TCP/IP 详解卷一：协议》
- 《深入理解 Linux 内核》
- 《深入理解 Nginx；模块开发与架构解析》

## 安装配置

- Ubuntu
```shell
sudo apt install nginx # 安装Nginx
sudo apt systemctl enable nginx # 开机自启动
sudo apt systemctl start nginx # 启动Nginx
sudo apt systemctl stop nginx # 停止Nginx
sudo apt systemctl restart nginx # 重启Nginx
sudo apt systemctl status nginx # 查看Nginx状态
sudo vim /etc/nginx/nginx.conf # 配置文件
sudo nginx -t  # 检查配置语法
```

## 配置实例

### 常见管理命令
```shell
# 创建这样的符号链接（启用站点）
ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# 删除符号链接（禁用站点）
rm /etc/nginx/sites-enabled/default

# 检查链接是否有效
readlink /etc/nginx/sites-enabled/default

# 查看日志
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

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
