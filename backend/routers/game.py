from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter(prefix="/game", tags=["game"])
connections = []

@router.websocket("/ws/{game_id}")
async def websocket_endpoint(websocket: WebSocket, game_id: str):
    await websocket.accept()
    connections.append(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            for conn in connections:
                if conn != websocket:
                    await conn.send_text(data)
    except WebSocketDisconnect:
        connections.remove(websocket)
