@echo off
setlocal enabledelayedexpansion
title SAT Anti-Burnout Rulebook Launcher

cd /d "%~dp0"

:: Check if port 3000 is already active
netstat -ano | findstr /R ":3000 .*LISTENING" >nul 2>&1
if %errorlevel% neq 0 (
    echo Starting SAT Anti-Burnout Server...
    start /min "SAT-Dev-Server" cmd /c "npm run dev"
    :: Wait up to 15 seconds for server to come up
    for /L %%i in (1,1,15) do (
        timeout /t 1 /nobreak >nul
        netstat -ano | findstr /R ":3000 .*LISTENING" >nul 2>&1
        if !errorlevel! equ 0 goto launched
    )
)

:launched
:: Try opening in Chrome App mode if Chrome is installed
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --app=http://localhost:3000
    exit /b 0
)

if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --app=http://localhost:3000
    exit /b 0
)

:: Fallback to default browser
start http://localhost:3000
exit /b 0
