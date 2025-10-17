# Linux

## Linux 常用命令

| 命令    | 作用                                 |
| ------- | ------------------------------------ |
| sed     | 利用脚本来处理文本文件               |
| which   | 定位可执行文件的路径                 |
| whereis | 查找二进制（命令）、源文件、man 文件 |
| ps -aux | 查看进程                             |
| top     | 类似任务管理器                       |
| free    | 内存使用情况查看                     |
| date +%s | 获取当前时间戳                      |


## Linux 常用软件

### Tmux

- 终端复用，用在在用 ssh 登陆远程计算机是保存会话
- <https://www.ruanyifeng.com/blog/2019/10/tmux.html>
- 常用命令
  - 默认新建： `tmux`
  - 列出会话： `tmux ls`
  - 起名新建： `tmux new -s <session-name>`
  - 离开会话： `tmux detach` or `ctrl+b d`
  - 接入会话： `tmux attach -t <session-name>`
  - 杀死会话： `tmux kill-session -t <session-name>`
  - 切换会话： `tmux switch -t <session-name>`
  - 重命名话： `tmux rename-session -t old new`
  - 汇总：`ls new detach attach kill-session switch rename-session`
- 快捷键
  - `ctrl+b d` 离开当前会话
  - `ctrl+b c` 创建新窗口


## Linux & Mac 目录规范

| 目录             | 作用               | Windows 对应          |
| ---------------- | ------------------ | --------------------- |
| `/usr`           | 系统级目录         | `C:/Windows/`         |
| `/usr/lib`       | 系统依赖 library   | `C:/Windows/System32` |
| `/usr/local`     | 用户级程序目录     | `C:/Program Files`    |
| `/usr/local/opt` | 可选软件的安装目录 | `D:/Software`         |
| `/opt`            | 第三方软件存储     | `D:/Software`         |

## 快速输出linux系统的系统信息

```shell
#!/bin/bash

{
  echo "===== 系统信息 ====="
  uname -a
  lsb_release -a 2>/dev/null || cat /etc/*release*
  uptime

  echo -e "\n===== CPU信息 ====="
  lscpu
  # macos 获取cpu信息
  sysctl -a | grep machdep.cpu.brand_string

  echo -e "\n===== 内存信息 ====="
  free -h

  echo -e "\n===== 硬盘信息 ====="
  lsblk
  df -h

  echo -e "\n===== 显卡信息 ====="
  lspci | grep -i vga
  nvidia-smi 2>/dev/null

  echo -e "\n===== 网卡信息 ====="
  ip addr
  hostname -I

  echo -e "\n===== 端口信息 ====="
  lsof -i -P -n

  echo -e "\n===== 环境变量信息 ====="
  echo "PATH=$PATH"

} | tee system_info.txt
```