

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-noinstall.zip'
$downloadFilePath = $ncfxyDownLoadDir + 'nvm-noinstall-1.1.7.zip'
downloadFile $url $downloadFilePath
$targetPath = $ncfxyInstallDir + 'nvm-1.1.7'
$targetNodejsPath = $targetPath + '/nodejs'
$settingFile = $targetPath + '/settings.txt'
$targetArgument = '-o' + $targetPath

$url7za = 'https://chocolatey.org/7za.exe'
$path7za = $ncfxyDownLoadDir + '7za.exe'
downloadFile $url7za $path7za
$process = Start-Process $path7za -ArgumentList 'x',$downloadFilePath,$targetArgument,'-y' -PassThru
$process.WaitForExit()
"Finish extract nvm files" 
"Start config nvm"
[Environment]::SetEnvironmentVariable('NVM_HOME', $targetPath, 'User')
[Environment]::SetEnvironmentVariable('NVM_SYMLINK', $targetNodejsPath, 'User')
$currentUserPath = [Environment]::GetEnvironmentVariable('PATH','User')
if($currentUserPath.IndexOf('%NVM_HOME%') -eq -1){
    [Environment]::SetEnvironmentVariable('PATH', $currentUserPath + ';%NVM_HOME%;%NVM_SYMLINK%' , 'User')
}
$settingString = 'root: ' + $targetPath + "`n"
$settingString += 'path: ' + $targetNodejsPath + "`n"
$settingString += 'arch: 64' + "`n"
$settingString += 'proxy: none' + "`n"
$settingString += 'node_mirror: https://npm.taobao.org/mirrors/node/' + "`n"
$settingString += 'npm_mirror: https://npm.taobao.org/mirrors/npm/' + "`n"
$settingString | Set-Content -Path $settingFile
"Finish config nvm"

