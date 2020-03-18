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

- `yum install epel-release` : 添加epel源，可以安装更多软件
- `yum install chrony && systemctl enable chronyd.service`: 校准系统时间