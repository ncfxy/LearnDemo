

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://update.code.visualstudio.com/latest/win32-x64-archive/stable'
$downloadFilePath = $ncfxyDownLoadDir + 'vscode_latest.zip'
downloadFile $url $downloadFilePath
$targetPath = $ncfxyInstallDir + 'vscode/'
$targetArgument = '-o' + $targetPath

$url7za = 'https://chocolatey.org/7za.exe'
$path7za = $ncfxyDownLoadDir + '7za.exe'
downloadFile $url7za $path7za
$process = Start-Process $path7za -ArgumentList 'x',$downloadFilePath,$targetArgument,'-y' -PassThru
$process.WaitForExit()
"Finish installing vscode" 

"Config Regedit"
$regeditPath = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\{771FD6B0-FA20-440A-A002-3B3BAC16DC50}_is1'
if(-Not (Test-Path $regeditPath)) {
    New-Item $regeditPath
    Set-ItemProperty -Path $regeditPath -Name "DisplayIcon" -Value ($ncfxyInstallDir+"vscode\Code.exe")
    Set-ItemProperty -Path $regeditPath -Name "DisplayName" -Value "Microsoft Visual Studio Code"
    Set-ItemProperty -Path $regeditPath -Name "InstallLocation" -Value ($ncfxyInstallDir+"vscode")
    Set-ItemProperty -Path $regeditPath -Name "Publisher" -Value "Microsoft Corporation"
}
# HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\{771FD6B0-FA20-440A-A002-3B3BAC16DC50}_is1
"Finish Config Regedit"
