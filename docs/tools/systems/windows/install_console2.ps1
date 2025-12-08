

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://jaist.dl.sourceforge.net/project/console/console-devel/2.00/Console-2.00b148-Beta_64bit.zip'
$downloadFilePath = $ncfxyDownLoadDir + 'Console-2.00b148-Beta_64bit.zip'
downloadFile $url $downloadFilePath
$targetPath = $ncfxyInstallDir
$targetArgument = '-o' + $targetPath

$url7za = 'https://chocolatey.org/7za.exe'
$path7za = $ncfxyDownLoadDir + '7za.exe'
downloadFile $url7za $path7za
$process = Start-Process $path7za -ArgumentList 'x',$downloadFilePath,$targetArgument,'-y' -PassThru
$process.WaitForExit()
"Finish installing Console2" 

"Start Update Console2 settings"
$xml = [xml](Get-Content ($targetPath+'Console2/console.xml'))
$xml.settings.console.init_dir=$ncfxyInstallDir
$xml.settings.console.shell=$ncfxyInstallDir + 'git/bin/sh.exe'
$xml.save($targetPath+'Console2/console.xml')
"Finish Update Console2 settings"