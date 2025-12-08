



. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://github.com/git-for-windows/git/releases/download/v2.23.0.windows.1/Git-2.23.0-64-bit.exe'
$downloadFilePath = $ncfxyDownLoadDir + 'Git-2.23.0-64-bit.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'git'
$installArgument = '/Dir=' + $installDir
"Start installing Git-2.23.0-64-bit" 
$process = Start-Process $downloadFilePath -ArgumentList '/SILENT',$installArgument -PassThru
$process.WaitForExit()
"Finish installing Git-2.23.0-64-bit" 