

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://central.github.com/deployments/desktop/desktop/latest/win32'
$downloadFilePath = $ncfxyDownLoadDir + 'GitHubDesktopSetup.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'github-desktop/'
$installArgument = '/D=' + $installDir
"Start installing github desktop" 
$process = Start-Process $downloadFilePath -ArgumentList '/S',$installArgument -PassThru
$process.WaitForExit()
"Finish installing github desktop" 