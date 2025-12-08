
. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'http://www.zoomus.cn/client/latest/ZoomInstaller.exe'
$downloadFilePath = $ncfxyDownLoadDir + 'ZoomInstaller.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'zoom'
$installArgument = '/D=' + $installDir
"Start installing zoom" 
$process = Start-Process $downloadFilePath -PassThru
$process.WaitForExit()
"Finish installing zoom" 
