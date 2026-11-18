@echo off
chcp 65001 >nul
echo ========================================================
echo   رفع البورتفوليو إلى مستودع GitHub (mhmd-baqir/official-portfolio)
echo ========================================================
echo.

git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [خطأ] برنامج Git غير مثبت أو غير مضاف لمتغيرات البيئة.
    pause
    exit /b 1
)

if not exist .git (
    echo [1/4] جاري تهيئة مستودع Git...
    git init
    git branch -M main
    git remote add origin https://github.com/mhmd-baqir/official-portfolio.git
)

echo [2/4] إضافة الملفات...
git add .

echo [3/4] إنشاء التحديث (Commit)...
git commit -m "Deploy Official Portfolio with PWA & mobile support"

echo [4/4] جاري الرفع إلى GitHub...
git push -u origin main

echo.
echo ========================================================
echo  تم الانتهاء! تأكد من تفعيل GitHub Pages من إعدادات المستودع:
echo  https://github.com/mhmd-baqir/official-portfolio/settings/pages
echo.
echo  الرابط المباشر لموقعك سيكون:
echo  https://mhmd-baqir.github.io/official-portfolio/
echo ========================================================
pause
