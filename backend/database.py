import sqlite3

conn = sqlite3.connect("campusassist.db", check_same_thread=False)

cursor = conn.cursor()

# Users Table
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    name TEXT NOT NULL,

    email TEXT UNIQUE NOT NULL,

    password TEXT NOT NULL

)
""")

# Chat History Table
cursor.execute("""
CREATE TABLE IF NOT EXISTS chats (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_email TEXT,

    user_message TEXT,

    bot_reply TEXT

)
""")

conn.commit()