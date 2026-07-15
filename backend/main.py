from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()
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

@app.post("/chat")
def chat(data: ChatRequest):

    return {
        "reply": "🤖 Sorry, backend is under development."
    }