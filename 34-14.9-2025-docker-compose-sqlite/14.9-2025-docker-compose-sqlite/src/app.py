import os
import sqlite3
from colorama import Fore
import time
from datetime import datetime

LOG_DIR = "./logs"
LOG_FILE = os.path.join(LOG_DIR, "file.txt")
# Check if running in container or locally
if os.path.exists("/app/mydb.db"):
    DB_FILE = "/app/mydb.db"  # Path in container
else:
    DB_FILE = "./mydb.db"  # Path when running locally

# Ensure the logs directory exists
os.makedirs(LOG_DIR, exist_ok=True)

# Connect to SQLite database and select from cities table
try:
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # Select all records from cities table
    cursor.execute("SELECT * FROM cities")
    cities = cursor.fetchall()
    
    print(f"{Fore.CYAN}=== Cities from Database ==={Fore.RESET}")
    for city in cities:
        print(f"{Fore.YELLOW}City: {city}{Fore.RESET}")
    
    conn.close()
    print(f"{Fore.GREEN}Database query completed successfully!{Fore.RESET}")
    
except sqlite3.Error as e:
    print(f"{Fore.RED}Database error: {e}{Fore.RESET}")
except Exception as e:
    print(f"{Fore.RED}Error: {e}{Fore.RESET}")

# Original functionality
counter = 0
while counter < 2:
    print(f"{Fore.GREEN}Hello World asaf {counter}{Fore.RESET}")
    print("counter:", counter)
    counter += 1
    time.sleep(1)

with open(LOG_FILE, "a") as file:
    now = datetime.now()
    file.write(f"now : {now}\n")

with open(LOG_FILE, "r") as file:
    content = file.read()
    print(f"content : {content}")
