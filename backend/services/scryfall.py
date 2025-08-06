import httpx

async def fetch_card_data(card_name: str):
    async with httpx.AsyncClient() as client:
        url = f"https://api.scryfall.com/cards/named?fuzzy={card_name}"
        response = await client.get(url)
        return response.json()
