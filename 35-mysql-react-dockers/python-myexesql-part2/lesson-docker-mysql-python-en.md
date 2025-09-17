# Full Stack Docker Application: React + Python + MySQL

This project demonstrates a complete full-stack application using Docker containers with React frontend, Python backend, and MySQL database.

## 📁 Project Structure

```
python-myexesql-part2/
├── frontend/                   # React Vite Application
│   ├── Dockerfile             # Multi-stage build for React
│   ├── .dockerignore          # Build optimization
│   ├── package.json           # Node.js dependencies
│   ├── vite.config.js         # Vite configuration
│   ├── src/                   # React source code
│   │   ├── App.jsx            # Main React component
│   │   ├── main.jsx           # React entry point
│   │   └── assets/            # Static assets
│   └── public/                # Public files
├── backend/                    # Python Flask/FastAPI Application
│   ├── Dockerfile             # Python Alpine container
│   ├── app.py                 # Main Python application
│   └── requirements.txt       # Python dependencies
├── docker-compose.yml         # Multi-service orchestration
├── env/                       # Python virtual environment (local dev)
└── README files...
```

## 🐳 Docker Configuration

### Frontend Dockerfile (Multi-stage Build)

The frontend uses a **multi-stage Docker build** for optimization:

**Stage 1: Build Stage**
- Uses `node:18-alpine` as base image
- Installs dependencies with `npm ci`
- Builds the React app with `npm run build`

**Stage 2: Production Stage**
- Uses `nginx:alpine` for serving static files
- Copies built files from stage 1
- Exposes port 80
- Lightweight production image

```dockerfile
# Multi-stage build for React Vite app
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Backend Dockerfile (Python)

Simple Python container optimized for Flask/FastAPI:

```dockerfile
FROM python:3.11-alpine3.18
WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app/
CMD ["python", "app.py"]
```

### Docker Compose Configuration

The `docker-compose.yml` orchestrates three services:

```yaml
version: '3.8'

services:
  # MySQL Database
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

  # Python Backend Application
  backend:
    build: ./backend
    container_name: python_backend
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
      - ./backend:/app

  # React Frontend Application
  frontend:
    build: ./frontend
    container_name: react_frontend
    depends_on:
      - backend
    ports:
      - "3000:80"
    networks:
      - app_network
    environment:
      - REACT_APP_API_URL=http://localhost:5000

volumes:
  mysql_data:

networks:
  app_network:
    driver: bridge
```

## 🚀 How to Run

### Prerequisites
- Docker installed
- Docker Compose installed

### Quick Start

1. **Clone/Navigate to project directory:**
   ```bash
   cd python-myexesql-part2
   ```

2. **Build and run all services:**
   ```bash
   docker-compose up --build
   ```

3. **Access the applications:**
   - **Frontend (React)**: http://localhost:3000
   - **Backend (Python API)**: http://localhost:5000
   - **Database (MySQL)**: localhost:3307

### Development Mode

For development, you can run services individually:

**Frontend only:**
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

**Backend only:**
```bash
cd backend
pip install -r requirements.txt
python app.py
# Runs on http://localhost:5000
```

## 🔧 Configuration Details

### Port Mapping
- **Frontend**: Container port 80 → Host port 3000
- **Backend**: Container port 5000 → Host port 5000  
- **MySQL**: Container port 3306 → Host port 3307

### Environment Variables
- **Backend**: Database connection settings
- **Frontend**: API URL for backend communication

### Volumes
- **MySQL Data**: Persistent storage for database
- **Backend Code**: Hot reload for development

### Networks
- **app_network**: Bridge network connecting all services
- Enables service-to-service communication by container name

## 🏗️ Architecture Overview

```
┌─────────────────┐    HTTP     ┌─────────────────┐    SQL      ┌─────────────────┐
│                 │   Requests  │                 │  Queries    │                 │
│   React App     │──────────→  │   Python API    │──────────→  │   MySQL DB      │
│   (Frontend)    │             │   (Backend)     │             │   (Database)    │
│   Port: 3000    │             │   Port: 5000    │             │   Port: 3307    │
└─────────────────┘             └─────────────────┘             └─────────────────┘
```

### Data Flow
1. **User** interacts with React frontend (port 3000)
2. **Frontend** makes API calls to Python backend (port 5000)
3. **Backend** processes requests and queries MySQL database (port 3307)
4. **Database** returns data to backend
5. **Backend** sends response to frontend
6. **Frontend** displays data to user

## 🛠️ Development Tips

### Hot Reload
- **Frontend**: Vite provides hot module replacement
- **Backend**: Volume mapping enables code changes without rebuild

### Database Access
Connect to MySQL using any client:
- **Host**: localhost
- **Port**: 3307
- **Username**: root
- **Password**: 123456
- **Database**: mydb1

### Logs
View logs for debugging:
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs frontend
docker-compose logs backend
docker-compose logs mysql
```

### Stopping Services
```bash
# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

## 🔒 Security Notes

⚠️ **Important**: This configuration is for development only!

For production:
- Change default passwords
- Use environment files for secrets
- Enable SSL/HTTPS
- Implement proper authentication
- Use production-ready database settings

## 📦 Dependencies

### Frontend (React)
- Vite (build tool)
- React 18
- Modern JavaScript/ES6+

### Backend (Python)
- Flask or FastAPI (web framework)
- MySQL connector
- Other dependencies in `requirements.txt`

### Database (MySQL)
- MySQL 8.0
- Persistent volume for data storage

## 🎯 Next Steps

1. **Add API endpoints** in Python backend
2. **Create React components** that consume the API
3. **Set up database schema** and migrations
4. **Implement authentication** and authorization
5. **Add error handling** and logging
6. **Write tests** for both frontend and backend
7. **Set up CI/CD pipeline**

---

This setup provides a solid foundation for full-stack development with modern tools and containerization best practices.
