

. ./commonFunctions.ps1

$ncfxyDownLoadDir = [Environment]::GetEnvironmentVariable('ncfxyDownloadDir', 'User')
$ncfxyInstallDir = [Environment]::GetEnvironmentVariable('ncfxyInstallDir','User')

if (![System.IO.Directory]::Exists($ncfxyDownLoadDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyDownLoadDir)}
if (![System.IO.Directory]::Exists($ncfxyInstallDir)) {[void][System.IO.Directory]::CreateDirectory($ncfxyInstallDir)}

$url = 'https://download.java.net/java/GA/jdk12.0.1/69cfe15208a647278a19ef0990eea691/12/GPL/openjdk-12.0.1_windows-x64_bin.zip'
$downloadFilePath = $ncfxyDownLoadDir + 'openjdk-12.0.1_windows-x64_bin.zip'
downloadFile $url $downloadFilePath
$targetPath = $ncfxyInstallDir + 'jdk/'
$targetArgument = '-o' + $targetPath

$url7za = 'https://chocolatey.org/7za.exe'
$path7za = $ncfxyDownLoadDir + '7za.exe'
downloadFile $url7za $path7za
$process = Start-Process $path7za -ArgumentList 'x',$downloadFilePath,$targetArgument,'-y' -PassThru
$process.WaitForExit()
"Finish installing openjdk-12.0.1_windows-x64" 

"Start config Java Path"
$javaHome = $targetPath + 'jdk-12.0.1'
[Environment]::SetEnvironmentVariable('JAVA_HOME', $javaHome, 'User')
$currentUserPath = [Environment]::GetEnvironmentVariable('PATH','User')
if($currentUserPath.IndexOf('%JAVA_HOME%') -eq -1){
    [Environment]::SetEnvironmentVariable('PATH', $currentUserPath + ';%JAVA_HOME%\bin' , 'User')
}
"Finish config Java Path"