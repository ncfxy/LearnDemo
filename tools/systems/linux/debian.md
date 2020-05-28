# Debian

## 安装mysql

- 下载Mysql官网提供的APT源： <https://dev.mysql.com/downloads/repo/apt/>
- `sudo dpkg -i ./mysql-apt-config_0.8.15-1_all.deb`
- 更新源： `sudo apt-get update`
- 安装： `sudo apt-get install  mysql-server`
- 运行： `sudo service mysql start|stop|restart`
