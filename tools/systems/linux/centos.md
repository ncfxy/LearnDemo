# CentOS

## nmtui 网络配置工具

CentOS 安装后 network 无法工作

## centos 常用管理命令

| 命令     | 作用        |
| -------- | ----------- |
| ifconfig | 查看本机 ip |

## centos 8 常用安装相关命令

| 命令               | 作用                               |
| ------------------ | ---------------------------------- |
| yum list           | 列出可以安装包，可用 grep 进行过滤 |
| yum list installed | 列出已安装的 lib                   |

## 常用软件安装记录

- `yum install epel-release` : 添加 epel 源，可以安装更多软件
- `yum install chrony && systemctl enable chronyd.service`: 校准系统时间
- `yum install -y net-tools`: 安装网络工具ifconfig等

## 防火墙设置 firewalld

- <https://www.cnblogs.com/leoxuan/p/8275343.html>

## mysql 常用命令

- 安装：yum install mysql
- 安装：yum install mysql-server
- 启动：systemctl start mysqld (stop, restart, status)
- 连接：mysql -uroot -p -h127.0.0.1 -P3306
- [常用操作指令](../../../database/MySQL.md#MySql常用操作指令)：

## 网络设置

- 网卡配置目录: `cd /etc/sysconfig/network-scripts/`
- 设置静态ip的三个配置: `BOOTPROTO=static;IPADDR=192.168.1.149;NETMASK=255.255.255.0;GATEWAY=192.168.1.1`

## Linux下使用homebrew

- <https://brew.sh/>
- `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

## 常用端口号

- 22: SSH访问接口
- 3306: mysql数据库
- 9200: elasticsearch的Http访问接口
- 9300: elasticsearch的TCP通信接口

