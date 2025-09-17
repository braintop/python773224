# הסבר על מבנה ה-REST API

## 1. הגדרת הסביבה

### 1.1 התקנת Python
- **Windows**:
  1. הורידו את Python מ-[python.org](https://www.python.org/downloads/)
  2. בזמן ההתקנה, סמנו את האפשרות "Add Python to PATH"
  3. וודאו שההתקנה הצליחה על ידי הרצת `python --version` בטרמינל

- **Mac**:
  1. התקינו את Homebrew אם עדיין אין לכם:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
  2. התקינו את Python:
     ```bash
     brew install python
     ```

### 1.2 יצירת סביבה וירטואלית
- **Windows**:
  ```bash
  # יצירת סביבה וירטואלית
  python -m venv venv
  
  # הפעלת הסביבה
  .\venv\Scripts\activate
  ```

- **Mac**:
  ```bash
  # יצירת סביבה וירטואלית
  python3 -m venv venv
  
  # הפעלת הסביבה
  source venv/bin/activate
  ```

### 1.3 התקנת החבילות הנדרשות
1. צרו קובץ `requirements.txt`:
   ```txt
   flask==2.0.1
   ```

2. התקינו את החבילות:
   ```bash
   pip install -r requirements.txt
   ```

## 2. מבנה הפרויקט
יצרנו מבנה מודולרי של REST API עם Flask, המחולק ל-3 שכבות עיקריות:
- **Models** - שכבת הנתונים
- **Controllers** - שכבת הלוגיקה העסקית
- **Routes** - שכבת הניתוב

## 3. הסבר על כל קובץ

### 3.1 `models/city.py`
```python
class City:
    @staticmethod
    def get_db_connection():
        return sqlite3.connect("mydb.db")
```
- **תפקיד**: מטפל בכל הפעולות מול בסיס הנתונים
- **מה יש כאן?**:
  - חיבור לבסיס הנתונים
  - יצירת טבלה
  - פעולות CRUD (Create, Read, Update, Delete)
- **יתרונות**: הפרדה בין הלוגיקה העסקית לפעולות בסיס הנתונים

### 3.2 `controllers/city_controller.py`
```python
class CityController:
    @staticmethod
    def create_city():
        data = request.get_json()
        if not data or 'name' not in data:
            return jsonify({'error': 'Name is required'}), 400
```
- **תפקיד**: מטפל בלוגיקה העסקית
- **מה יש כאן?**:
  - וידוא תקינות הנתונים
  - טיפול בשגיאות
  - החזרת תשובות למשתמש
- **יתרונות**: הפרדה בין הלוגיקה העסקית לנתיבי ה-API

### 3.3 `routes/city_routes.py`
```python
city_bp = Blueprint('city', __name__)

@city_bp.route('/cities', methods=['POST'])
def create_city():
    return CityController.create_city()
```
- **תפקיד**: מגדיר את הנתיבים (endpoints) של ה-API
- **מה יש כאן?**:
  - הגדרת נתיבים (routes)
  - קישור בין הנתיבים לקונטרולר
- **יתרונות**: ארגון נקי של הנתיבים

### 3.4 `app.py`
```python
app = Flask(__name__)
app.register_blueprint(city_bp)
```
- **תפקיד**: קובץ ההפעלה הראשי
- **מה יש כאן?**:
  - יצירת אפליקציית Flask
  - רישום ה-blueprint
  - הפעלת השרת

## 4. איך להשתמש ב-API?

### 4.1 GET - קבלת כל הערים
```
GET http://localhost:5000/cities
```
- **תשובה**: רשימת כל הערים בבסיס הנתונים
- **דוגמה לתשובה**:
```json
{
    "cities": [
        {"id": 1, "name": "Tel Aviv"},
        {"id": 2, "name": "Jerusalem"},
        {"id": 3, "name": "Haifa"}
    ]
}
```

### 4.2 POST - הוספת עיר חדשה
```
POST http://localhost:5000/cities
Content-Type: application/json

{
    "name": "Tel Aviv"
}
```
- **תשובה**: פרטי העיר שנוצרה
- **דוגמה לתשובה**:
```json
{
    "id": 1,
    "name": "Tel Aviv"
}
```

### 4.3 DELETE - מחיקת עיר
```
DELETE http://localhost:5000/cities/1
```
- **תשובה**: הודעת אישור
- **דוגמה לתשובה**:
```json
{
    "message": "1 row deleted"
}
```

## 5. יתרונות המבנה
1. **קוד נקי ומאורגן** - כל קובץ אחראי על תפקיד ספציפי
2. **קל לתחזוקה** - קל למצוא ולתקן באגים
3. **קל להרחבה** - קל להוסיף פיצ'רים חדשים
4. **קל לבדיקות** - כל שכבה נבדקת בנפרד

## 6. איך להתחיל?
1. **הגדרת הסביבה**:
   - צרו סביבה וירטואלית (ראה סעיף 1.2)
   - התקינו את החבילות הנדרשות (ראה סעיף 1.3)

2. **הפעלת השרת**:
   ```bash
   python app.py
   ```

3. **בדיקת ה-API**:
   - השתמשו ב-Postman לבדיקת ה-API
   - או השתמשו ב-cURL מהטרמינל:
     ```bash
     # קבלת כל הערים
     curl http://localhost:5000/cities
     
     # הוספת עיר חדשה
     curl -X POST -H "Content-Type: application/json" -d '{"name":"Tel Aviv"}' http://localhost:5000/cities
     
     # מחיקת עיר
     curl -X DELETE http://localhost:5000/cities/1
     ```

## 7. פתרון בעיות נפוצות
1. **שגיאת חיבור לבסיס הנתונים**:
   - וודאו שהקובץ `mydb.db` נוצר
   - בדקו שהתיקייה ניתנת לכתיבה

2. **שגיאות התקנה**:
   - וודאו שהסביבה הווירטואלית מופעלת
   - נסו להתקין את החבילות מחדש: `pip install -r requirements.txt`

3. **שגיאות הרצה**:
   - וודאו שכל הקבצים נמצאים בתיקיות הנכונות
   - בדקו שהפורט 5000 פנוי

## 8. מושגים חשובים
- **MVC** - Model View Controller - תבנית עיצוב נפוצה
- **Blueprint** - כלי ב-Flask לארגון נתיבים
- **REST API** - ארכיטקטורה לבניית שירותי רשת
- **CRUD** - Create, Read, Update, Delete - פעולות בסיסיות על נתונים
