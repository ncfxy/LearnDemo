
. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://dl.gowall.app/Windows/ChromeGAE/ChromeGAE8.3.9_VIP.exe'
$downloadFilePath = $ncfxyDownLoadDir + 'ChromeGAE8.3.9_VIP.exe'
downloadFile $url $downloadFilePath
"Please install Chrome GAE manuallly."
# $installDir = $ncfxyInstallDir + 'ChromeGAE8.3.9'
# $installArgument = '/D=' + $installDir
# "Start installing ChromeGAE8.3.9" 
# $process = Start-Process $downloadFilePath -ArgumentList '/S',$installArgument -PassThru
# $process.WaitForExit()
# "Finish installing ChromeGAE8.3.9" 
