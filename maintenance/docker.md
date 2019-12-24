# docker

## 常用命令

| 命令                                              | 作用                     |
| ------------------------------------------------- | ------------------------ |
| `docker --help`                                   | 查看帮助                 |
| `docker pull [OPTIONS] NAME[:TAG|@DIGEST]`        | 从远程仓库拉取镜像       |
| `docker push [OPTIONS] NAME[:TAG]`                | 将镜像推送到远程仓库     |
| `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`   | 启动一个镜像             |
| `docker images [OPTIONS] [REPOSITORY[:TAG]]`      | 列出当前已下载的镜像     |
| `docker exec -it [containerId] bash`              | 进入到 container 中      |
| `docker container ls`                             | 列出 container           |
| `docker ps`                                       | 列出正在运行的 container |
| `docker stop [OPTIONS] CONTAINER [CONTAINER...]`  | 停止一个 container       |
| `docker start [OPTIONS] CONTAINER [CONTAINER...]` | 启动一个 container       |

## docker 官网

- <https://www.docker.com/>
- <https://hub.docker.com/>
