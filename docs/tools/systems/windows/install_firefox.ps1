
. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://download-installer.cdn.mozilla.net/pub/firefox/releases/68.0.2/win64/zh-CN/Firefox%20Setup%2068.0.2.exe'
$downloadFilePath = $ncfxyDownLoadDir + 'firefox_setup_68.0.2.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'firefox'
$installArgument = '/D=' + $installDir
"Start installing Firefox 68.0.2" 
$process = Start-Process $downloadFilePath -ArgumentList '/S',$installArgument -PassThru
$process.WaitForExit()
"Finish installing Firefox 68.0.2" 


# URLs:
# https://www.mozilla.org/en-US/firefox/all/#product-desktop-release
# http://www.firefox.com.cn/