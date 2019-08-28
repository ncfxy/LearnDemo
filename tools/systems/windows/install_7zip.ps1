
. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://www.7-zip.org/a/7z1900-x64.exe'
$downloadFilePath = $ncfxyDownLoadDir + '7z1900-x64.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + '7-zip/'
$installArgument = '/D=' + $installDir
"Start installing 7z1900-x64" 
$process = Start-Process $downloadFilePath -ArgumentList '/S',$installArgument -PassThru
$process.WaitForExit()
"Finish installing 7z1900-x64" 