echo 'Start the virtual machine and update the local host setting according to the IP of the virtual machine. Administrator permission is required'
$vmName = 'centos-server-1' 
$domainName = "centos1.com"
# Find the centos-server-1 virtual machine
$vm = Get-VM $vmName  
# Start the virtual machine
Start-VM -VM $vm
# Define timeout, set to 5 minutes here
$timeout = 300 
# Wait for the virtual machine to start and get the IP address
do {
    Start-Sleep 5   # Wait 5 seconds
    $vmip = $vm | Get-VMNetworkAdapter | Select -ExpandProperty IPAddresses
    $timeout--# Timeout countdown
} while(!$vmip -and $timeout -gt 0)
if ($vmip)  {
    # Display IP address
    Write-Host "$vmName's new IP address is: $vmip" 
    # Read the contents of the hosts file
    $hostContent = Get-Content C:\Windows\System32\drivers\etc\hosts 
    # Replace the IP address and domain name
    $pattern = "^[0-9\.]+ $domainName"
    $newConfig = "$vmip $domainName"
    $newHostContent = $hostContent -replace $pattern, $newConfig
    # Display and write to the hosts file
    Write-Host $newHostContent
    $newHostContent | Out-File C:\Windows\System32\drivers\etc\hosts -Force
} else {    # Timeout to get IP
    Write-Warning "$vm.Name startup timed out!"
}
# Old code to get IP address
# $addressObj = get-vm -name $hyperVName | get-VMNetworkAdapter | select ipaddresses 
# $ip = $addressObj.IPAddresses.trim() 