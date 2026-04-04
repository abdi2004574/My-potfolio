# Open Portfolio in Browser
$ie = New-Object -ComObject InternetExplorer.Application
$ie.Visible = $true
$ie.Navigate("file://C:\Users\SL\Desktop\My potfolio\out\index.html")