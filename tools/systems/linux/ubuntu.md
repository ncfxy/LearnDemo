# Ubuntu

## 源配置

```shell
sudo vim /etc/apt/sources.list
sudo apt update
sudo apt upgrade
```

```shell
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
```

## apt 包管理

- `apt = apt-get、apt-cache 和 apt-config` 中最常用命令选项的集合

## Ubuntu snap 包管理

| 命令                              | 作用                            |
|-----------------------------------|-------------------------------|
| `sudo apt-get install snapd`      | 安装snap                        |
| `sudo apt-get install snapcraft`  | 安装snap                        |
| `sudo snap list`                  | 列出已经安装的snap包            |
| `sudo snap find <text to search>` | 搜索要安装的snap包              |
| `sudo snap install <snap name>`   | 安装一个snap包                  |
| `sudo snap refresh <snap name>`   | 更新一个snap包,如果不加更新所有 |
| `sudo snap revert <snap name>`    | 把一个包还原到以前安装的版本    |
| `sudo snap remove <snap name>`    | 删除一个snap包                  |
| `sudo snap info xxxx`             | 查看软件包详细信息              |
