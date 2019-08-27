
. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://nchc.dl.sourceforge.net/project/codeblocks/Binaries/17.12/Windows/codeblocks-17.12mingw-setup.exe'
$downloadFilePath = $ncfxyDownLoadDir + 'codeblocks-17.12mingw-setup.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'codeblocks'
$installArgument = '/D=' + $installDir
"Start installing codeblocks-17.12mingw" 
$process = Start-Process $downloadFilePath -ArgumentList '/S',$installArgument -PassThru
$process.WaitForExit()
"Finish installing codeblocks-17.12mingw" 