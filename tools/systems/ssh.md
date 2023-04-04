# SSH

- 服务器之间加密访问与文件传输
- 官方文档: <https://www.ssh.com/ssh/>

## 服务端配置

- `~/.ssh/authorized_keys`


## 客户端配置

- `~/.ssh/id_rsa`: 生成的私钥
- `~/.ssh/id_rsa.pub`: 生成的公钥，用于上传到服务器
- `~/.ssh/config`: 本地配置文件
- `~/.ssh/known_hosts`


## 秘钥管理

- 生成新的秘钥对: `ssh-keygen -t rsa`
- 上传到服务器免登陆: `ssh-copy-id -i ~/.ssh/mykey user@host`

## ssh命令速记

- `ssh root@123.123.123.123`

## `~/.ssh/config`配置示例

```
Host <别名>
  HostName 127.0.0.1
  User root
  StrictHostKeyChecking no
```
