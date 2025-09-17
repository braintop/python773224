import sqlite3

# Create or connect to the database
conn = sqlite3.connect('mydb.db')
cursor = conn.cursor()

# Create cities table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS cities (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        country TEXT NOT NULL,
        population INTEGER
    )
''')

# Insert some sample data
cities_data = [
    ('New York', 'USA', 8336817),
    ('London', 'UK', 8982000),
    ('Paris', 'France', 2161000),
    ('Tokyo', 'Japan', 13960000),
    ('Sydney', 'Australia', 5312000)
]

cursor.execute('DELETE FROM cities')  # Clear existing data
cursor.executemany('INSERT INTO cities (name, country, population) VALUES (?, ?, ?)', cities_data)

# Commit and close
conn.commit()
conn.close()

print("Database setup completed! Created cities table with sample data.")
