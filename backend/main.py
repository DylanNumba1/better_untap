from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import decks, game

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(decks.router)
app.include_router(game.router)
