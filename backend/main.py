from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import os
from dotenv import load_dotenv
from groq import Groq
from database import conn, cursor
import bcrypt

app = FastAPI()

load_dotenv()

print("API KEY:", os.getenv("GROQ_API_KEY"))

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    
    return {
        "message": "Welcome to CampusAssist AI Backend!"
    }
class ChatRequest(BaseModel):
    message: str

class User(BaseModel):
    name: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/chat")
def chat(data: ChatRequest):

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": data.message
                },
            ]
        )
        return {
                    "reply":response.choices[0].message.content
        }
    except Exception as e:
                    print(e)
                    return{
                          "reply": f"Backend Error: {str(e)}"
                    }

@app.post("/signup")
def signup(user: User):

    cursor.execute(
        "SELECT * FROM users WHERE email = ?",
        (user.email,)
    )

    existing_user = cursor.fetchone()

    if existing_user:
        return {
            "message": "Email already exists."
        }

    hashed_password = bcrypt.hashpw(
        user.password.encode("utf-8"),
        bcrypt.gensalt()
    )

    cursor.execute(
        "INSERT INTO users(name, email, password) VALUES (?, ?, ?)",
        (
            user.name,
            user.email,
            hashed_password.decode("utf-8")
        )
    )

@app.post("/login")
def login(user: LoginRequest):

    cursor.execute(
        "SELECT * FROM users WHERE email = ?",
        (user.email,)
    )

    existing_user = cursor.fetchone()

    if not existing_user:
        return {
            "message": "User not found"
        }

    stored_password = existing_user[3]

    if bcrypt.checkpw(
        user.password.encode("utf-8"),
        stored_password.encode("utf-8")
    ):
        return {
            "message": "Login Successful"
        }

    return {
        "message": "Invalid Password"
    }

    conn.commit()

    return {
        "message": "Signup Successful"
    }

@app.post("/login")
def login(user: User):

    cursor.execute(
        "SELECT * FROM users WHERE email = ?",
        (user.email,)
    )

    db_user = cursor.fetchone()

    if not db_user:
        return {
            "message": "User not found."
        }

    stored_password = db_user[3]

    if bcrypt.checkpw(
        user.password.encode("utf-8"),
        stored_password.encode("utf-8")
    ):
        return {
            "message": "Login Successful"
        }

    return {
        "message": "Invalid Password"
    }