# PowerShell Deployment Script for Mohammed Baqir Portfolio
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  رفع البورتفوليو إلى مستودع GitHub (mhmd-baqir/portfolio)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[خطأ] برنامج Git غير متوفر." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path ".git")) {
    Write-Host "[1/4] جاري تهيئة مستودع Git..." -ForegroundColor Yellow
    git init
    git branch -M main
    git remote add origin https://github.com/mhmd-baqir/portfolio.git
}

Write-Host "[2/4] إضافة الملفات..." -ForegroundColor Yellow
git add .

Write-Host "[3/4] إنشاء التحديث (Commit)..." -ForegroundColor Yellow
git commit -m "Update Mohammed Baqir Portfolio with PWA & mobile support"

Write-Host "[4/4] جاري الرفع إلى GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "========================================================" -ForegroundColor Green
Write-Host " تم الانتهاء بنجاح!" -ForegroundColor Green
Write-Host " الرابط المباشر لموقعك سيكون:" -ForegroundColor Green
Write-Host " https://mhmd-baqir.github.io/portfolio/" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Green
