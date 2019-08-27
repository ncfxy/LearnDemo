.\my-settings.ps1
. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

# $downloader = New-Object System.Net.WebClient
$url = 'https://www.voidtools.com/Everything-1.4.1.935.x64-Setup.exe'
$downloadFilePath = $ncfxyDownLoadDir + 'everything.exe'
# $downloader.DownloadFile($url, $downloadFilePath)
downloadFile $url $downloadFilePath
$installDir = $ncfxyInstallDir + 'everything'
$installArgument = '/D=' + $installDir
"Start installing everything 1.4.1.935" 
Start-Process $downloadFilePath -ArgumentList '/S',$installArgument
"Finish installing everything 1.4.1.935" 

# $process = New-Object System.Diagnostics.Process
# $psi = New-Object System.Diagnostics.ProcessStartInfo
# $psi.FileName = 'D:\temp\everything.exe'
# $psi.Arguments = '/S /D=D:\temp\haha'
# $process.StartInfo =  $psi
# $process.Start()
# $process.WaitForExit()
# Write-Output 'end'
# $process.Dispose()