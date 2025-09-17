import mysql.connector
import os
import time
#python -m venv env
#env/scripts/activate/
# py -m pip install mysql-connector-python
#py -m pip freeze > requirements.txt
# חיבור למסד הנתונים עם retry logic
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

conn = connect_to_db()

cursor = conn.cursor()

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

# קריאת כל המשתמשים מטבלת users
cursor.execute("SELECT * FROM users")
users = cursor.fetchall()

# הדפסת התוצאות
for user in users:
    print(user)

# סגירת החיבור
cursor.close()
conn.close()