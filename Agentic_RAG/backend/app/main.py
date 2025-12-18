from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import router
import uvicorn

app = FastAPI(title="Agentic RAG Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],    # 允许的来源列表
    allow_credentials=True, # 允许携带 Cookie/凭证 
    allow_methods=["*"],    # 允许所有方法 (GET, POST, etc.)
    allow_headers=["*"]     # 允许所有 Header
)

# 注册路由
app.include_router(router, prefix="/api")

@app.get("/health")
def health_check():
    return {"status": "ok", "version": "1.0.0"}

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8002, reload=True)

