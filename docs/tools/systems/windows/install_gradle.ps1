

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://downloads.gradle-dn.com/distributions/gradle-5.6.1-bin.zip'
$downloadFilePath = $ncfxyDownLoadDir + 'gradle-5.6.1-bin.zip'
downloadFile $url $downloadFilePath
$targetPath = $ncfxyInstallDir + 'gradle/'
$targetArgument = '-o' + $targetPath

$url7za = 'https://chocolatey.org/7za.exe'
$path7za = $ncfxyDownLoadDir + '7za.exe'
downloadFile $url7za $path7za
$process = Start-Process $path7za -ArgumentList 'x',$downloadFilePath,$targetArgument,'-y' -PassThru
$process.WaitForExit()
"Finish installing gradle-5.6.1" 
