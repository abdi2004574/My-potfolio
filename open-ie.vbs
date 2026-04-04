Dim IE
Set IE = CreateObject("InternetExplorer.Application")
IE.Visible = True
IE.Navigate "C:\Users\SL\Desktop\My potfolio\out\index.html"
Do While IE.Busy
    WScript.Sleep 100
Loop