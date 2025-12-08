


. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://atom.io/download/windows_x64'
$downloadFilePath = $ncfxyDownLoadDir + 'AtomSetup-x64.exe'
downloadFile $url $downloadFilePath

"Start installing Atom x64" 
$process = Start-Process $downloadFilePath -ArgumentList '--silent' -PassThru
$process.WaitForExit()
"Finish installing Atom x64" 
