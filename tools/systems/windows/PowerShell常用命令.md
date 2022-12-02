# PowerShell 常用命令

## 判断文件夹是否存在，不存在则创建

```PowerShell
    if (![System.IO.Directory]::Exists($tempDir)) {[void][System.IO.Directory]::CreateDirectory($tempDir)}
```

## 设置环境变量

```PowerShell
    # 列出所有环境变量
    gci env:
    # 进程级别
    [Environment]::SetEnvironmentVariable('name', 'value', 'Process')
    # 用户级别
    # [System.EnvironmentVariableTarget]::User
    [Environment]::SetEnvironmentVariable('name', 'value', 'User')
    # 系统级别
    [Environment]::SetEnvironmentVariable('ncfxy','ncfxy', 'Machine')
    # 删除环境变量
    [Environment]::SetEnvironmentVariable("[variable name]",$null,"User")
    # 读取变量
    [Environment]::GetEnvironmentVariable('ProgramFiles')
```

## 下载文件

```PowerShell
    $downloader = New-Object System.Net.WebClient
    $downloader.DownloadFile($url, $FilePath)
```

## 进程

```PowerShell
    $process = New-Object System.Diagnostics.Process
    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = 'iexplore.exe'
    $process.StartInfo =  $psi
    $process.Start()
    $process.WaitForExit()
    Write-Output 'end'
    $process.Dispose()
```

```PowerShell
    Start-Process $FileName
```

## 注册表

```PowerShell
    # HKEY_LOCAL_MACHINE
    cd HKLM:
    # HKEY_CURRENT_USER
    cd HKCU:
    Get-ItemProperty    #读取键的值
    Set-ItemProperty    #设置键的值
    New-ItemProperty    #给键创建一个新值
    Clear-ItemProperty  #删除键的值内容
    Remove-ItemProperty #删除键的值
    New-Item, md        #创建一个新键
    Remove-Item, Del    #删除一个键
    Test-Path           #验证键是否存在

    Get-ItemProperty -Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion -Name "ProgramFilesDir"
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramFilesDir" -Value "D:\ncfxy\software"
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramFilesDir (x86)" -Value "D:\ncfxy\software"
```

## Hyper-v常用命令

- 官方介绍: <https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/try-hyper-v-powershell>
- 搜索所有hyper-v命令: `Get-Command -Module hyper-v | Out-GridView`
- 返回虚拟机列表: `Get-VM`
- 启动虚拟机: `Start-VM -Name <virtual machine name>`
- 保存虚拟机: `Save-VM -Name <virtual machine name>`
- 获取虚拟机的地址: `$ip = get-vm -name centos-server-1 | get-VMNetworkAdapter | select ipaddresses`
   - `$ip.IPAddresses`


## 常用命令

- 复制文件夹： `Copy-Item -Path 'D:/abc' -Destination 'D:/abc' -Recurse`
- 执行exe文件: 在前边需要添加调用运算符 (&)
- 获取文件内容: `Get-Content <file path>`
- 将结果在新的页面展示: `ls | Out-GridView`

## Tips

| key          | value         |
|--------------|---------------|
| 执行多条命令 | 直接使用;分割 |

## URL

| 名称     | URL                                                                              |
|--------|----------------------------------------------------------------------------------|
| 官方文档 | https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-6 |