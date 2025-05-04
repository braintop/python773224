# REST API עם Flask ו-SQLite3

## תיאור הפרויקט
פרויקט זה מציג יישום REST API בסיסי המשתמש ב-Flask ו-SQLite3. הפרויקט כולל ניהול משתמשים וערים, עם כל פעולות ה-CRUD (יצירה, קריאה, עדכון ומחיקה).

## מבנה הפרויקט
```
.
├── app.py              # קובץ ההפעלה הראשי
├── models/             # תיקיית המודלים
│   ├── city.py         # מודל הערים
│   └── user.py         # מודל המשתמשים
├── controllers/        # תיקיית הבקרים
│   ├── city_controller.py
│   └── user_controller.py
├── routes/            # תיקיית הנתיבים
│   ├── city_routes.py
│   └── user_routes.py
└── mydb.db            # בסיס הנתונים
```

## מה זה Blueprint (user_bp)?

Blueprint ב-Flask הוא דרך לארגן את הקוד שלך למודולים נפרדים. אפשר לחשוב על זה כמו "תת-אפליקציה" בתוך האפליקציה הראשית.

### למה משתמשים ב-Blueprint?
1. **ארגון קוד** - מאפשר לחלק את האפליקציה לחלקים לוגיים
2. **שימוש חוזר** - אפשר להשתמש באותו Blueprint בכמה אפליקציות
3. **קוד נקי** - כל חלק באפליקציה נמצא במקום שלו

### דוגמה לשימוש ב-Blueprint:
```python
# routes/user_routes.py
from flask import Blueprint

# יצירת Blueprint חדש בשם 'users'
# הפרמטר הראשון הוא שם ה-Blueprint
# הפרמטר השני הוא שם המודול (__name__)
user_bp = Blueprint('users', __name__)

# הגדרת נתיבים בתוך ה-Blueprint
@user_bp.route('/users', methods=['GET'])
def get_users():
    return "רשימת משתמשים"
```

### איך מחברים את ה-Blueprint לאפליקציה הראשית?
```python
# app.py
from routes.user_routes import user_bp

app = Flask(__name__)
app.register_blueprint(user_bp)
```

### מה היתרונות של השימוש ב-Blueprint?
1. **מודולריות** - כל חלק באפליקציה (משתמשים, ערים וכו') נמצא בקובץ נפרד
2. **קוד נקי** - קל יותר לתחזק ולשנות את הקוד
3. **עבודה בצוות** - כל מפתח יכול לעבוד על חלק אחר של האפליקציה
4. **הרחבה קלה** - קל להוסיף פונקציונליות חדשה

### דוגמה למבנה URL עם Blueprint:
- `/users` - ניהול משתמשים
- `/cities` - ניהול ערים

כל קבוצת נתיבים נמצאת ב-Blueprint נפרד, מה שמאפשר ארגון טוב יותר של הקוד.

## הסבר על הקוד

### 1. מודל המשתמש (models/user.py)
המודל מגדיר את מבנה טבלת המשתמשים ומכיל את כל הפונקציות הנדרשות לאינטראקציה עם בסיס הנתונים:

```python
class User:
    @staticmethod
    def get_db_connection():
        # יצירת חיבור לבסיס הנתונים
        return sqlite3.connect("mydb.db")

    @staticmethod
    def create_table():
        # יצירת טבלת המשתמשים אם היא לא קיימת
        # כולל הגדרת שדות וקשרי מפתח זר לערים
```

המודל כולל את השדות הבאים:
- `user_id` - מזהה ייחודי (מפתח ראשי)
- `first_name` - שם פרטי
- `last_name` - שם משפחה
- `email` - כתובת אימייל (ייחודית)
- `password` - סיסמה (מוצפנת)
- `city_id` - מזהה העיר (מפתח זר)
- `salary` - משכורת
- `is_admin` - האם מנהל (בוליאני)

### 2. בקר המשתמשים (controllers/user_controller.py)
הבקר מטפל בלוגיקת העסקים ומתקשר עם המודל:

```python
class UserController:
    @staticmethod
    def create_user():
        # יצירת משתמש חדש
        # בדיקת תקינות הנתונים
        # החזרת תשובה מתאימה

    @staticmethod
    def get_all_users():
        # קבלת כל המשתמשים
        # החזרת רשימה בפורמט JSON

    @staticmethod
    def get_user(user_id):
        # קבלת משתמש ספציפי לפי מזהה
        # בדיקה אם המשתמש קיים

    @staticmethod
    def update_user(user_id):
        # עדכון פרטי משתמש
        # בדיקת תקינות הנתונים
        # החזרת תשובה מתאימה

    @staticmethod
    def delete_user(user_id):
        # מחיקת משתמש
        # בדיקה אם המשתמש קיים
```

### 3. נתיבי ה-API (routes/user_routes.py)
הנתיבים מגדירים את נקודות הקצה של ה-API:

```python
@user_bp.route('/users', methods=['POST'])
def create_user():
    # יצירת משתמש חדש

@user_bp.route('/users', methods=['GET'])
def get_all_users():
    # קבלת כל המשתמשים

@user_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    # קבלת משתמש ספציפי

@user_bp.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    # עדכון משתמש

@user_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    # מחיקת משתמש
```

### 4. קובץ ההפעלה הראשי (app.py)
מאתחל את האפליקציה ומגדיר את הטבלאות בבסיס הנתונים:

```python
app = Flask(__name__)

# רישום ה-blueprints
app.register_blueprint(city_bp)
app.register_blueprint(user_bp)

# יצירת הטבלאות
City.create_table()
User.create_table()
```

## שימוש ב-API

### יצירת משתמש חדש
```bash
curl -X POST http://localhost:5000/users \
-H "Content-Type: application/json" \
-d '{
    "first_name": "ישראל",
    "last_name": "ישראלי",
    "email": "israel@example.com",
    "password": "123456",
    "city_id": 1,
    "salary": 10000,
    "is_admin": false
}'
```

### קבלת כל המשתמשים
```bash
curl http://localhost:5000/users
```

### קבלת משתמש ספציפי
```bash
curl http://localhost:5000/users/1
```

### עדכון משתמש
```bash
curl -X PUT http://localhost:5000/users/1 \
-H "Content-Type: application/json" \
-d '{
    "first_name": "דוד",
    "salary": 12000
}'
```

### מחיקת משתמש
```bash
curl -X DELETE http://localhost:5000/users/1
```

## תכונות ביטחון
1. הצפנת סיסמאות באמצעות `werkzeug.security`
2. בדיקת ייחודיות אימייל
3. בדיקת תקינות קלט
4. טיפול בשגיאות

## יתרונות השימוש ב-SQLite3
1. פשטות - אין צורך בשרת נפרד
2. קובץ יחיד - כל הנתונים נשמרים בקובץ אחד
3. התאמה לפרויקטים קטנים ובינוניים
4. תמיכה מלאה ב-SQL

## חסרונות
1. לא מתאים לאפליקציות גדולות עם הרבה משתמשים
2. אין תמיכה במשתמשים מרובים בו זמנית
3. ביצועים מוגבלים בהשוואה לבסיסי נתונים אחרים

## הרחבות אפשריות
1. הוספת אימות משתמשים (Authentication)
2. הוספת הרשאות (Authorization)
3. הוספת חיפוש ומסננים
4. הוספת דפדוף (Pagination)
5. הוספת שכבת שירות (Service Layer)
6. הוספת בדיקות (Tests)
