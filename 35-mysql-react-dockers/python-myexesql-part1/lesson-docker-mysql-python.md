# 📘 מערך שיעור: בניית אפליקציית Python עם MySQL בתוך Docker

## 🎯 מטרות השיעור

- להבין מהו Docker Compose וכיצד הוא עוזר בניהול מספר שירותים
- להכיר איך מקימים שירות MySQL ושירות אפליקציה בפייתון
- ללמוד על תקשורת בין קונטיינרים בעזרת רשתות (networks)
- להבין Dockerfile – איך יוצרים דימוי מותאם אישית

---

## 🔹 שלב 1 – מבוא קצר ל־Docker Compose

**מה זה Docker Compose?**
- Docker Compose מאפשר להגדיר כמה שירותים (services) באפליקציה אחת
- כל שירות רץ בקונטיינר משלו, אבל אפשר לגרום להם לדבר אחד עם השני
- הכל מוגדר בקובץ `docker-compose.yml`

**יתרונות:**
- ניהול קל של מספר קונטיינרים
- הגדרת רשתות ו-volumes אוטומטית
- הרצה והפסקה של כל המערכת בפקודה אחת

---

## 🔹 שלב 2 – הסבר על הקובץ docker-compose.yml

### 1. גרסה
```yaml
version: '3.8'
```
- מגדיר איזו גרסה של compose syntax נשתמש
- גרסה 3.8 מתאימה לרוב השימושים היום

### 2. שירות MySQL
```yaml
mysql:
  image: mysql:8.0
  container_name: mysql_db
  environment:
    MYSQL_ROOT_PASSWORD: 123456
    MYSQL_DATABASE: mydb1
    MYSQL_USER: user
    MYSQL_PASSWORD: 123456
  ports:
    - "3307:3306"
  volumes:
    - mysql_data:/var/lib/mysql
  networks:
    - app_network
```

**🔑 הסבר:**
- `image: mysql:8.0` → נשתמש בגרסה הרשמית של MySQL
- `container_name` → שם קבוע לקונטיינר (נוח לניהול)
- `environment` → משתני סביבה לקביעת שם בסיס נתונים, סיסמאות וכו'
- `ports` → המיפוי 3307 (מחשב מארח) → 3306 (בפנים)
- `volumes` → שימור נתונים גם אם הקונטיינר נמחק
- `networks` → מגדירים רשת פנימית כך שהאפליקציה תוכל לדבר עם MySQL

### 3. שירות Python Application
```yaml
app:
  build: .
  container_name: python_app
  depends_on:
    - mysql
  environment:
    - DB_HOST=mysql
    - DB_DATABASE=mydb1
    - DB_USER=root
    - DB_PASSWORD=123456
  ports:
    - "5000:5000"
  networks:
    - app_network
  volumes:
    - .:/app
  command: python app.py
```

**🔑 הסבר:**
- `build: .` → נבנה דימוי מה־Dockerfile שנמצא באותה תיקייה
- `depends_on` → האפליקציה מחכה שה־MySQL יעלה קודם
- `environment` → משתנים שמוגדרים לאפליקציה (כמו כתובת DB, סיסמאות)
- `ports` → נפתח פורט 5000 למחשב המקומי
- `networks` → מצרפים לרשת משותפת עם MySQL
- `volumes` → עושים mount של הקוד מהמחשב ל־/app בתוך הקונטיינר
- `command` → פקודה שתופעל להרצת האפליקציה

### 4. Volumes & Networks
```yaml
volumes:
  mysql_data:

networks:
  app_network:
    driver: bridge
```

**🔑 הסבר:**
- `volumes` → שומר את הנתונים של MySQL גם אחרי שהקונטיינר נמחק
- `networks` → מגדיר רשת פנימית בשם app_network, כל השירותים "מדברים" דרכה

---

## 🔹 שלב 3 – Dockerfile (האפליקציה בפייתון)

```dockerfile
FROM python:3.11-alpine3.18

WORKDIR /app

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 5000

CMD ["python", "app.py"]
```

**🔑 הסבר:**
- `FROM` → מתחילים מתמונה רשמית של Python (גרסה 3.11 עם Alpine – קלילה ומהירה)
- `WORKDIR /app` → כל פקודות ההמשך יתבצעו בתיקייה /app
- `COPY requirements.txt /app/` → קודם נעתיק את רשימת הספריות
- `RUN pip install...` → נתקין את הספריות (שימושי כי Docker יודע לעשות cache לשלב הזה)
- `COPY . /app/` → נעתיק את כל קבצי הפרויקט
- `EXPOSE 5000` → מציין שהאפליקציה משתמשת בפורט 5000
- `CMD` → פקודה שתופעל כשמריצים את הקונטיינר (python app.py)

---

## 🔹 שלב 4 – קובץ requirements.txt

```
mysql-connector-python==9.4.0
```

**למה זה חשוב?**
- מגדיר את כל הספריות שהאפליקציה צריכה
- מבטיח שכל מי שמריץ את הפרויקט יקבל את אותן גרסאות
- Docker יכול לעשות cache לשלב ההתקנה

---

## 🔹 שלב 5 – האפליקציה Python (app.py)

### חיבור למסד נתונים עם Retry Logic
```python
import mysql.connector
import os
import time

def connect_to_db():
    max_retries = 30
    retry_count = 0
    
    while retry_count < max_retries:
        try:
            conn = mysql.connector.connect(
                host=os.getenv('DB_HOST', 'localhost'),
                database=os.getenv('DB_DATABASE', 'mydb1'),
                user=os.getenv('DB_USER', 'root'),
                password=os.getenv('DB_PASSWORD', '123456')
            )
            print("Connected to MySQL successfully!")
            return conn
        except mysql.connector.Error as err:
            print(f"Attempt {retry_count + 1}: Could not connect to MySQL: {err}")
            retry_count += 1
            time.sleep(2)
    
    raise Exception("Could not connect to MySQL after 30 attempts")
```

**למה Retry Logic?**
- MySQL לוקח זמן להתחיל
- האפליקציה מנסה להתחבר לפני שMySQL מוכן
- הפתרון: לנסות שוב כל 2 שניות עד 30 פעמים

### יצירת טבלה ונתונים
```python
# יצירת טבלת users אם לא קיימת
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

# הוספת נתונים לדוגמה
cursor.execute("""
INSERT IGNORE INTO users (name, email) VALUES 
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com'),
('Bob Johnson', 'bob@example.com')
""")

conn.commit()
```

**נקודות חשובות:**
- `CREATE TABLE IF NOT EXISTS` → לא יוצר טבלה אם היא כבר קיימת
- `INSERT IGNORE` → לא מוסיף רשומות כפולות
- `conn.commit()` → שומר את השינויים במסד הנתונים

---

## 🔹 שלב 6 – איך מריצים?

### בניית המערכת:
```bash
docker-compose build
```

### הרצת השירותים:
```bash
# הרצה רגילה (עם לוגים)
docker-compose up

# הרצה ברקע
docker-compose up -d

# הרצה עם בנייה מחדש
docker-compose up --build
```

### בדיקת סטטוס:
```bash
# בדיקת קונטיינרים רצים
docker-compose ps

# צפייה בלוגים
docker-compose logs app
docker-compose logs mysql
```

### עצירת המערכת:
```bash
# עצירה רגילה
docker-compose down

# עצירה עם מחיקת volumes
docker-compose down -v
```

---

## 🔹 שלב 7 – הבנת הרשתות (Networks)

### מה קורה ברשת?
```
┌─────────────────────────────────────┐
│           app_network               │
│  ┌─────────────┐  ┌─────────────┐   │
│  │    mysql    │  │ python_app  │   │
│  │ (mysql_db)  │  │             │   │
│  │ 172.18.0.2  │  │ 172.18.0.3  │   │
│  └─────────────┘  └─────────────┘   │
└─────────────────────────────────────┘
```

### איך זה עובד?
1. Docker יוצר רשת פנימית בשם `app_network`
2. כל קונטיינר מקבל IP פנימי
3. שמות הקונטיינרים הופכים לכתובות DNS
4. `mysql` → מתורגם ל-IP של קונטיינר MySQL

### מיפוי פורטים:
```
מחשב מקומי:3307 ← → קונטיינר MySQL:3306
מחשב מקומי:5000 ← → קונטיינר App:5000
```

---

## 🔹 שלב 8 – קובץ .dockerignore

```
# Virtual environment
env/
venv/
.env

# Python cache
__pycache__/
*.pyc
*.pyo
*.pyd

# IDE files
.vscode/
.idea/

# Git
.git/
.gitignore

# Docker
Dockerfile
.dockerignore

# OS files
.DS_Store
Thumbs.db
```

**למה זה חשוב?**
- מונע העתקת קבצים מיותרים לקונטיינר
- מקטין את גודל הדימוי
- מונע בעיות אבטחה

---

## 📝 תרגילים לתלמידים

### תרגיל 1 - בסיסי
**משימה:** שנו את שם בסיס הנתונים מ-`mydb1` ל-`school_db` ובדקו שהאפליקציה עדיין עובדת.

**מה צריך לשנות:**
- בקובץ `docker-compose.yml`
- בקובץ `app.py` (אם יש הגדרה קשיחה)

### תרגיל 2 - מתקדם
**משימה:** הוסיפו שירות חדש `phpmyadmin` כדי לנהל את בסיס הנתונים מהדפדפן.

**רמז:**
```yaml
phpmyadmin:
  image: phpmyadmin
  container_name: phpmyadmin
  environment:
    - PMA_HOST=mysql
  ports:
    - "8080:80"
  networks:
    - app_network
```

### תרגיל 3 - Dockerfile
**משימה:** נסו לשנות את הגרסה של Python ל-3.10 ובדקו אם הכל עובד.

**שאלות למחשבה:**
- מה ההבדלים בין גרסאות Python?
- איך זה משפיע על הביצועים?

### תרגיל 4 - רשתות
**משימה:** צרו רשת שנייה והסבירו מה קורה אם השירותים לא באותה רשת.

**דוגמה:**
```yaml
networks:
  frontend_network:
  backend_network:
```

### תרגיל 5 - אבטחה
**משימה:** החליפו את סיסמת ה-root במשהו חזק יותר והגדירו משתמש רגיל באפליקציה.

**נקודות לחשיבה:**
- איך שומרים סיסמאות בצורה בטוחה?
- מה זה משתני סביבה ולמה הם חשובים?

---

## 🚀 סיכום

בשיעור זה למדנו:

1. **Docker Compose** - כלי לניהול מספר קונטיינרים
2. **Dockerfile** - הגדרת דימוי מותאם אישית
3. **Networks** - תקשורת בין קונטיינרים
4. **Volumes** - שימור נתונים
5. **Environment Variables** - הגדרות גמישות
6. **Retry Logic** - התמודדות עם תלויות בין שירותים

### מושגי מפתח:
- **Service** - שירות בתוך docker-compose
- **Container** - מופע רץ של דימוי
- **Image** - תבנית לבניית קונטיינרים
- **Volume** - אחסון קבוע
- **Network** - רשת וירטואלית לתקשורת

### פקודות חשובות:
```bash
docker-compose up --build    # בנה והרץ
docker-compose down         # עצור והסר
docker-compose ps          # הצג סטטוס
docker-compose logs        # הצג לוגים
```

**המערכת שבנינו מוכנה לפיתוח ולהרחבה! 🎉**
