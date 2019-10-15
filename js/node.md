# Node

## FAQ

### 1. npm 和 yarn 在windows下install非常慢

- 原因： windows的LSASS.EXE进程的Encrypting File System (EFS)功能占用大量CPU。

    <https://support.microsoft.com/en-ca/help/2550044/how-to-troubleshoot-high-lsass-exe-cpu-utilization-on-an-active-direct>

- 方案： 关闭EFS功能

    <https://thegeekpage.com/enable-disable-windows-encrypting-file-system-efs-feature/>

    ```powershell
        fsutil behavior set disableencryption 1
        fsutil behavior set disableencryption 0
    ```
