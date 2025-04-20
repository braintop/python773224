## 9. אבטחת ה-REST API

### 9.1 אבטחה בסיסית
1. **HTTPS**:
   - השתמשו תמיד ב-HTTPS במקום HTTP
   - זה מונע התקפות MITM (Man-in-the-Middle)
   - מומלץ להשתמש ב-certificate מוצפן

2. **אימות זהות (Authentication)**:
   - השתמשו ב-JWT (JSON Web Tokens) לאימות משתמשים
   - שמרו את ה-tokens בצורה מאובטחת
   - הגדירו זמן פקיעה ל-tokens

3. **הרשאות (Authorization)**:
   - השתמשו ב-RBAC (Role-Based Access Control)
   - הגדירו הרשאות מדויקות לכל משתמש
   - בדקו הרשאות בכל בקשה

### 9.2 הגנה מפני התקפות נפוצות
1. **SQL Injection**:
   - השתמשו ב-prepared statements
   - אל תשתמשו ב-string concatenation לבניית שאילתות
   - השתמשו ב-ORM כמו SQLAlchemy

2. **XSS (Cross-Site Scripting)**:
   - סננו קלט משתמש
   - השתמשו ב-CSP (Content Security Policy)
   - Escape נתונים לפני הצגתם

3. **CSRF (Cross-Site Request Forgery)**:
   - השתמשו ב-CSRF tokens
   - הגדירו את ה-SameSite attribute בעוגיות
   - בדקו את ה-Origin header

### 9.3 אבטחת נתונים
1. **הצפנה**:
   - הצפינו נתונים רגישים
   - השתמשו באלגוריתמים חזקים כמו AES-256
   - שמרו מפתחות הצפנה בצורה מאובטחת

2. **Rate Limiting**:
   - הגבילו מספר הבקשות ליחידת זמן
   - זה מונע התקפות Brute Force
   - השתמשו ב-Redis או כלי דומה

3. **Logging**:
   - רשמו לוגים של פעולות חשובות
   - אל תרשמו נתונים רגישים
   - שמרו לוגים בצורה מאובטחת

### 9.4 בדיקות אבטחה
1. **Security Headers**:
   - הגדירו headers כמו X-Frame-Options
   - השתמשו ב-Strict-Transport-Security
   - הגדירו Content-Security-Policy

2. **Audit**:
   - בצעו בדיקות אבטחה סדירות
   - השתמשו בכלים כמו OWASP ZAP
   - בדקו את הקוד עם SAST tools

3. **Updates**:
   - עדכנו את החבילות באופן קבוע
   - בדקו CVE (Common Vulnerabilities and Exposures)
   - השתמשו ב-Dependabot או כלי דומה

### 9.5 כלים מומלצים
1. **Authentication**:
   - Flask-JWT-Extended
   - Flask-Login
   - OAuthLib

2. **Security**:
   - Flask-Security
   - Flask-CORS
   - Flask-Talisman

3. **Testing**:
   - OWASP ZAP
   - Bandit
   - Safety
