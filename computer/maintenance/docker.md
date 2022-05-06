# docker

## 常用命令

| 命令                                              | 作用                     |
| ------------------------------------------------- | ------------------------ |
| `docker --help`                                   | 查看帮助                 |
| `docker pull [OPTIONS] NAME[:TAG]`                | 从远程仓库拉取镜像       |
| `docker push [OPTIONS] NAME[:TAG]`                | 将镜像推送到远程仓库     |
| `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`   | 启动一个镜像             |
| `docker images [OPTIONS] [REPOSITORY[:TAG]]`      | 列出当前已下载的镜像     |
| `docker exec -it [containerId] bash`              | 进入到 container 中      |
| `docker container ls`                             | 列出 container           |
| `docker ps`                                       | 列出正在运行的 container |
| `docker stop [OPTIONS] CONTAINER [CONTAINER...]`  | 停止一个 container       |
| `docker start [OPTIONS] CONTAINER [CONTAINER...]` | 启动一个 container       |
| `docker search xxx`                               | 查看可用版本             |
| `docker rm containerID`                           | 删除 container           |
| `docker rmi imageID`                              | 删除 image               |
| `docker build -f [DockerfilePath] -t [NAME] .`    | 构建 docker              |
| `docker volume create xxx`                        | 创建共享的卷             |
| `docker network create xxx`                       | 创建一个共享网络         |

### Examples

- <https://www.runoob.com/docker/docker-container-usage.html>
- `docker run -it centos /bin/bash`: 启动并已命令号默认进入容器

## 常用镜像

### docker/getting-started docker 的介绍项目

- `docker run -d -p 80:80 docker/getting-started`

### 启动 Mysql

```shell
docker run -d \
   --name mysql-test \
   -p 3306:3306 \
   --network todo-app --network-alias mysql \
   -v todo-mysql-data:/var/lib/mysql \
   -e MYSQL_ROOT_PASSWORD=secret \
   -e MYSQL_DATABASE=todos \
   mysql:5.7
```

## 常用参数解释

- 启动参数
  - `-d`: 启动后在后台运行
  - `-p 80:80`: 本地端口映射到 container 的端口
  - `-v [volume名]:[映射过去的文件夹]`: 映射 volume 到 container 中
    - `-v "$(pwd):/etc/todos"`支持使用本地文件夹来映射
  -

## docker 官网

- <https://www.docker.com/>
- <https://hub.docker.com/>

- 设置国内镜像: <https://blog.csdn.net/u012081441/article/details/104553145/>
