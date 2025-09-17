#intall the linux alpine 3.19
#FROM alpine:3.19

#install the python3 and alpine 3.19
FROM python:alpine3.19


# 📂 הגדרת תיקיית עבודה (Working Directory) בתוך הקונטיינר
# כל הפקודות הבאות (COPY, RUN, CMD וכו') ירוצו מתוך /app
# זה עוזר לנו לסדר את הקבצים במקום קבוע בתוך הקונטיינר.
WORKDIR /app

# 🧪 יוצרים סביבת פייתון מבודדת (virtualenv) בתוך /app בשם env
RUN python -m venv env
# 📄 מעתיקים את קובץ התלויות. שלב נפרד — משפר קאש של Docker
COPY requirements.txt /app
# 📦 מתקינים את כל החבילות אל תוך ה־venv
RUN /app/env/bin/pip install -r requirements.txt
# 📥 מעתיקים את כל הקבצים מהמחשב המקומי (התיקייה הנוכחית עם Dockerfile)
# אל תוך התיקייה /app בתוך הקונטיינר.
# לדוגמה: אם יש לנו app.py במחשב, הוא יעבור ל־/app/app.py בקונטיינר.

COPY . /app 


# 🚀 מריץ את האפליקציה דרך פרשן ה־Python של ה־venv
ENTRYPOINT ["/app/env/bin/python", "src/app.py"]