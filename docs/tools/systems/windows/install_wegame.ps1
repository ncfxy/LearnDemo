$pattern = [regex]"http://dldir1.qq.com/tgc/wegame/mini/([0-9\.]+)/WeGameMiniLoader.([0-9\.]+).gw.exe"
$downloader = New-Object System.Net.WebClient
$configString = $downloader.DownloadString('https://wegame.gtimg.com/bin_res/ossjson/wegame_home_configs.js')
$result = $pattern.Match($configString)
if(-Not $result.Success) {
    Write-Output 'Not Found Download URL'
    return
}

$latestDownloadLink = $result.Value;

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = $latestDownloadLink
$downloadFilePath = $ncfxyDownLoadDir + 'WeGameMiniLoader.exe'
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'WeGame/'
$installArgument = '/D=' + $installDir
"Start installing WeGame" 
$process = Start-Process $downloadFilePath -ArgumentList '/S' -PassThru
$process.WaitForExit()
"Finish installing WeGame" 

# http://dldir1.qq.com/tgc/wegame/full/WeGameSetup3.25.1.8081_gw_0_0.exe
# http://dldir1.qq.com/tgc/wegame/mini/3.24.6.7252/WeGameMiniLoader.3.24.6.7252.gw.exe