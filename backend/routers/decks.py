from fastapi import APIRouter
from services.scryfall import fetch_card_data

router = APIRouter(prefix="/decks", tags=["decks"])

@router.get("/card/{card_name}")
async def get_card(card_name: str):
    return await fetch_card_data(card_name)
