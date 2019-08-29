

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.1/binaries/apache-maven-3.6.1-bin.zip'
$downloadFilePath = $ncfxyDownLoadDir + 'apache-maven-3.6.1-bin.zip'
downloadFile $url $downloadFilePath
$targetPath = $ncfxyInstallDir + 'maven/'
$targetArgument = '-o' + $targetPath

$url7za = 'https://chocolatey.org/7za.exe'
$path7za = $ncfxyDownLoadDir + '7za.exe'
downloadFile $url7za $path7za
$process = Start-Process $path7za -ArgumentList 'x',$downloadFilePath,$targetArgument,'-y' -PassThru
$process.WaitForExit()
"Finish installing apache-maven-3.6.1" 


