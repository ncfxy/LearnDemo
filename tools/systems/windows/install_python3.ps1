
. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://www.python.org/ftp/python/3.7.4/python-3.7.4-amd64.exe'
$downloadFilePath = $ncfxyDownLoadDir + 'python-3.7.4-amd64.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'python3.7.4'
$installArgument = 'TargetDir=' + $installDir
"Start installing python-3.7.4-amd64.exe" 
$process = Start-Process $downloadFilePath -ArgumentList '/S',$installArgument -PassThru
$process.WaitForExit()
"Finish installing python-3.7.4-amd64.exe" 