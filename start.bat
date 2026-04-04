@echo off
cd /d "%~dp0"
set PATH=C:\Program Files\nodejs;%PATH%
echo Starting server...
npm run dev
pause