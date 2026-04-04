@echo off
echo ========================================
echo Opening Portfolio at http://127.0.0.1:3000
echo ========================================
echo.
echo 1. This will start the server
echo 2. Then automatically open your browser
echo.
echo If browser doesn't open, manually go to: http://127.0.0.1:3000
echo.
echo Press any key to start server...
pause > nul

set PATH=C:\Program Files\nodejs;%PATH%
cd /d "%~dp0"

start http://127.0.0.1:3000
npm run dev -- -p 3000 --hostname 127.0.0.1

pause