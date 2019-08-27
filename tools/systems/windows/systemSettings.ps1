
# 修改为我的习惯
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramFilesDir" -Value "D:\ncfxy\software"
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramFilesDir (x86)" -Value "D:\ncfxy\software"
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramW6432Dir" -Value "D:\ncfxy\software"

[Environment]::SetEnvironmentVariable('ncfxyDownloadDir', 'D:\ncfxy\download\', 'User')
[Environment]::SetEnvironmentVariable('ncfxyInstallDir', 'D:\ncfxy\software\', 'User')
[Environment]::SetEnvironmentVariable('ProgramFiles', 'D:\ncfxy\software\', 'User')
[Environment]::SetEnvironmentVariable('ProgramFiles(x86)', 'D:\ncfxy\software\', 'User')

# 还原为默认
# Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramFilesDir" -Value "C:\Program Files"
# Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramFilesDir (x86)" -Value "C:\Program Files (x86)"
# Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramW6432Dir" -Value "C:\Program Files"

