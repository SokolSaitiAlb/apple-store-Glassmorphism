from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# KONFIGURIMI I CORS: 
# Kjo është jetike që browser-i të lejojë script.js të marrë të dhënat nga API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/products")
async def get_products():
    # Për momentin të dhënat janë këtu, në hapin tjetër do t'i marrim nga Postgres
    return [
        {
            "id": 1, 
            "name": "iPhone 17 Pro", 
            "price": 1199, 
            "image": "images/iphone17promax.png"
        },
        {
            "id": 2, 
            "name": "M5 MacBook Pro", 
            "price": 1999, 
            "image": "images/macbookm5.png"
        },
        {
            "id": 3, 
            "name": "Watch Ultra 3", 
            "price": 799, 
            "image": "images/watchultra3.jpg"
        }
    ]

@app.get("/api/health")
def health_check():
    return {"status": "running", "msg": "Pershendetje nga CachyOS!"}
