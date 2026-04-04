@echo off
title Portfolio Server
cd /d "%~dp0"
echo Installing serve...
call npm install -g serve
echo Starting server on http://localhost:3000...
call npx serve out -l 3000
pause