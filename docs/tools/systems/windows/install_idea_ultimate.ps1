
$downloader = New-Object System.Net.WebClient
$data = $downloader.DownloadString('https://data.services.jetbrains.com/products/releases?code=IIU%2CIIC&latest=true&type=release') | ConvertFrom-Json
$latestDownloadLink = $data.IIU.downloads.windowsZip.link
'Latest download link: ' + $latestDownloadLink


. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = $latestDownloadLink
$downloadFilePath = $ncfxyDownLoadDir + 'ideaIU.win.zip'
downloadFile $url $downloadFilePath
$targetPath = $ncfxyInstallDir + 'ideaIU/'
$targetArgument = '-o' + $targetPath

$url7za = 'https://chocolatey.org/7za.exe'
$path7za = $ncfxyDownLoadDir + '7za.exe'
downloadFile $url7za $path7za
$process = Start-Process $path7za -ArgumentList 'x',$downloadFilePath,$targetArgument,'-y' -PassThru
$process.WaitForExit()
"Finish installing " + $latestDownloadLink