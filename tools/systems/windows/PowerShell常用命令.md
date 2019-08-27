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
    Start-Process 
```
