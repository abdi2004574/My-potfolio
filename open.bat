@echo off
cd /d "%~dp0out"
echo Opening in browser...
start http://127.0.0.1:3000
echo Starting server on http://127.0.0.1:3000
python -m http.server 3000
pause