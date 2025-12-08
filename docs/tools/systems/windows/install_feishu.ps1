$downloader = New-Object System.Net.WebClient
$data = $downloader.DownloadString('https://www.feishu.cn/api/downloads') | ConvertFrom-Json
$latestDownloadLink = $data.versions.Windows.download_link

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = $latestDownloadLink
$downloadFilePath = $ncfxyDownLoadDir + 'Feishu.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'feishu'
$installArgument = '/D=' + $installDir
"Start installing Feishu" 
$process = Start-Process $downloadFilePath -ArgumentList '/S' -PassThru
$process.WaitForExit()
"Finish installing Feishu" 