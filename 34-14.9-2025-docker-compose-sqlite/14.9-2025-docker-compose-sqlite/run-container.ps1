# PowerShell script להרצת הקונטנר
# הרץ עם: .\run-container.ps1

Write-Host "🐳 בודק אם הקונטנר כבר קיים..." -ForegroundColor Yellow

# בדוק אם הקונטנר כבר קיים
$containerExists = docker ps -a --filter "name=cool-container" --format "{{.Names}}"

if ($containerExists -eq "cool-container") {
    Write-Host "⚠️  הקונטנר כבר קיים. עוצר ומסיר..." -ForegroundColor Red
    docker stop cool-container
    docker rm cool-container
}

Write-Host "🚀 מריץ קונטנר חדש..." -ForegroundColor Green
docker run --name cool-container hello-memo

Write-Host "✅ הקונטנר הסתיים!" -ForegroundColor Green


