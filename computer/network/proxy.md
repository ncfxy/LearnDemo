# 代理

# git设置代理服务器

git config --global http.proxy 'http://192.168.31.101:8787'
git config --global https.proxy 'http://192.168.31.101:8787'

# Linux设置代理服务器

export http_proxy=http://192.168.31.101:8787
export https_proxy=http://192.168.31.101:8787

# 常用代理服务器

- VMess
- ShadowSocks
- Socks5
- dante-server

# webdigi方案

- <https://www.webdigi.co.uk/blog/2015/how-to-setup-your-own-private-secure-free-vpn-on-the-amazon-aws-cloud-in-10-minutes/>
- <https://github.com/webdigi>
- <https://s3.amazonaws.com/webdigi/VPN/Unified-Cloud-Formation.yaml>
- 能连接，但不能上网：<https://blog.csdn.net/iteye_21199/article/details/82409413>

# v2ray方案

- <https://github.com/233boy/v2ray/wiki/V2Ray%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC>
- 一键安装脚本: `bash <(curl -s -L https://git.io/v2ray.sh)`
- <https://github.com/2dust/v2rayN/releases>
- <https://233boy.com/v2ray/v2ray-script/>

# Windows 10 设置系统代理

- 设置 > 网络和Internet > 代理服务器

# macos 设置系统代理

- 系统偏好设置 > 网络 > 高级 > 代理 > HTTP代理 > 勾选自动配置HTTP代理

# Ubuntu server 设置代理

- 临时: `export http_proxy=http://192.168.0.112:10809`
- 临时: `export https_proxy=http://192.168.0.112:10809`
- 临时配置
```shell
export http_proxy=http://192.168.0.112:10809
export https_proxy=http://192.168.0.112:10809
export HTTP_PROXY=http://192.168.0.112:10809
export HTTPS_PROXY=http://192.168.0.112:10809
export NO_PROXY=localhost,127.0.0.1,::1
```

docker run -e HTTP_PROXY=http://192.168.0.112:10809 \
           -e HTTPS_PROXY=http://192.168.0.112:10809 \
           -e NO_PROXY=localhost,127.0.0.1,::1 \
           docker/getting-started