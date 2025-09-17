# 📘 Lesson Plan: Building a Python Application with MySQL in Docker

## 🎯 Lesson Objectives

- Understand what Docker Compose is and how it helps manage multiple services
- Learn how to set up MySQL service and Python application service
- Learn about communication between containers using networks
- Understand Dockerfile – how to create custom images

---

## 🔹 Step 1 – Brief Introduction to Docker Compose

**What is Docker Compose?**
- Docker Compose allows you to define multiple services (services) in one application
- Each service runs in its own container, but you can make them communicate with each other
- Everything is defined in a `docker-compose.yml` file

**Advantages:**
- Easy management of multiple containers
- Automatic configuration of networks and volumes
- Start and stop entire system with one command

---

## 🔹 Step 2 – Explanation of docker-compose.yml File

### 1. Version
```yaml
version: '3.8'
```
- Defines which version of compose syntax to use
- Version 3.8 is suitable for most uses today

### 2. MySQL Service
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

**🔑 Explanation:**
- `image: mysql:8.0` → Use the official MySQL version
- `container_name` → Fixed name for container (convenient for management)
- `environment` → Environment variables for setting database name, passwords, etc.
- `ports` → Mapping 3307 (host machine) → 3306 (inside)
- `volumes` → Data persistence even if container is deleted
- `networks` → Define internal network so application can communicate with MySQL

### 3. Python Application Service
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

**🔑 Explanation:**
- `build: .` → Build image from Dockerfile in same directory
- `depends_on` → Application waits for MySQL to start first
- `environment` → Variables defined for application (like DB address, passwords)
- `ports` → Open port 5000 to local machine
- `networks` → Join shared network with MySQL
- `volumes` → Mount code from machine to /app inside container
- `command` → Command to run when starting application

### 4. Volumes & Networks
```yaml
volumes:
  mysql_data:

networks:
  app_network:
    driver: bridge
```

**🔑 Explanation:**
- `volumes` → Saves MySQL data even after container is deleted
- `networks` → Defines internal network named app_network, all services "communicate" through it

---

## 🔹 Step 3 – Dockerfile (Python Application)

```dockerfile
FROM python:3.11-alpine3.18

WORKDIR /app

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 5000

CMD ["python", "app.py"]
```

**🔑 Explanation:**
- `FROM` → Start from official Python image (version 3.11 with Alpine – lightweight and fast)
- `WORKDIR /app` → All subsequent commands will execute in /app directory
- `COPY requirements.txt /app/` → First copy the library list
- `RUN pip install...` → Install libraries (useful because Docker can cache this step)
- `COPY . /app/` → Copy all project files
- `EXPOSE 5000` → Indicates application uses port 5000
- `CMD` → Command to run when starting container (python app.py)

---

## 🔹 Step 4 – requirements.txt File

```
mysql-connector-python==9.4.0
```

**Why is this important?**
- Defines all libraries the application needs
- Ensures everyone running the project gets the same versions
- Docker can cache the installation step

---

## 🔹 Step 5 – Python Application (app.py)

### Database Connection with Retry Logic
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

**Why Retry Logic?**
- MySQL takes time to start
- Application tries to connect before MySQL is ready
- Solution: Try again every 2 seconds up to 30 times

### Creating Table and Data
```python
# Create users table if it doesn't exist
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

# Add sample data
cursor.execute("""
INSERT IGNORE INTO users (name, email) VALUES 
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com'),
('Bob Johnson', 'bob@example.com')
""")

conn.commit()
```

**Important Points:**
- `CREATE TABLE IF NOT EXISTS` → Doesn't create table if it already exists
- `INSERT IGNORE` → Doesn't add duplicate records
- `conn.commit()` → Saves changes to database

---

## 🔹 Step 6 – How to Run?

### Building the System:
```bash
docker-compose build
```

### Running Services:
```bash
# Regular run (with logs)
docker-compose up

# Background run
docker-compose up -d

# Run with rebuild
docker-compose up --build
```

### Checking Status:
```bash
# Check running containers
docker-compose ps

# View logs
docker-compose logs app
docker-compose logs mysql
```

### Stopping System:
```bash
# Regular stop
docker-compose down

# Stop with volume deletion
docker-compose down -v
```

---

## 🔹 Step 7 – Understanding Networks

### What happens in the network?
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

### How does it work?
1. Docker creates internal network named `app_network`
2. Each container gets internal IP
3. Container names become DNS addresses
4. `mysql` → translates to MySQL container IP

### Port Mapping:
```
Local machine:3307 ← → MySQL container:3306
Local machine:5000 ← → App container:5000
```

---

## 🔹 Step 8 – .dockerignore File

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

**Why is this important?**
- Prevents copying unnecessary files to container
- Reduces image size
- Prevents security issues

---

## 📝 Student Exercises

### Exercise 1 - Basic
**Task:** Change database name from `mydb1` to `school_db` and verify application still works.

**What needs to be changed:**
- In `docker-compose.yml` file
- In `app.py` file (if there's hardcoded configuration)

### Exercise 2 - Advanced
**Task:** Add new `phpmyadmin` service to manage database from browser.

**Hint:**
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

### Exercise 3 - Dockerfile
**Task:** Try changing Python version to 3.10 and check if everything works.

**Questions to consider:**
- What are the differences between Python versions?
- How does this affect performance?

### Exercise 4 - Networks
**Task:** Create second network and explain what happens if services are not on same network.

**Example:**
```yaml
networks:
  frontend_network:
  backend_network:
```

### Exercise 5 - Security
**Task:** Replace root password with something stronger and configure regular user in application.

**Points to consider:**
- How to store passwords securely?
- What are environment variables and why are they important?

---

## 🚀 Summary

In this lesson we learned:

1. **Docker Compose** - Tool for managing multiple containers
2. **Dockerfile** - Custom image definition
3. **Networks** - Communication between containers
4. **Volumes** - Data persistence
5. **Environment Variables** - Flexible configuration
6. **Retry Logic** - Handling dependencies between services

### Key Concepts:
- **Service** - Service within docker-compose
- **Container** - Running instance of image
- **Image** - Template for building containers
- **Volume** - Persistent storage
- **Network** - Virtual network for communication

### Important Commands:
```bash
docker-compose up --build    # Build and run
docker-compose down         # Stop and remove
docker-compose ps          # Show status
docker-compose logs        # Show logs
```

**The system we built is ready for development and expansion! 🎉**
