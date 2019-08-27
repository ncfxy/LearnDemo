

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://jaist.dl.sourceforge.net/project/console/console-devel/2.00/Console-2.00b148-Beta_64bit.zip'
$downloadFilePath = $ncfxyDownLoadDir + 'Console-2.00b148-Beta_64bit.zip'
downloadFile $url $downloadFilePath