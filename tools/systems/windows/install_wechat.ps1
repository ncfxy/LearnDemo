. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

# $downloader = New-Object System.Net.WebClient
$url = 'https://dldir1.qq.com/weixin/Windows/WeChatSetup.exe'
$downloadFilePath = $ncfxyDownLoadDir + 'WeChatSetup.exe'
# $downloader.DownloadFile($url, $downloadFilePath)
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'wechat'
$installArgument = '/D=' + $installDir
"Start installing wechat" 
Start-Process $downloadFilePath -ArgumentList '/S',$installArgument
"Finish installing wechat" 

# $process = New-Object System.Diagnostics.Process
# $psi = New-Object System.Diagnostics.ProcessStartInfo
# $psi.FileName = 'D:\temp\everything.exe'
# $psi.Arguments = '/S /D=D:\temp\haha'
# $process.StartInfo =  $psi
# $process.Start()
# $process.WaitForExit()
# Write-Output 'end'
# $process.Dispose()