# Use Alpine Linux 3 with Python
FROM python:3.11-alpine3.18

# Set working directory
WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt /app/

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all application files to /app
COPY . /app/

# Run the application
CMD ["python", "app.py"]
