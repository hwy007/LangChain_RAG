import os
from dotenv import load_dotenv
from langchain_deepseek import ChatDeepSeek
from langchain_huggingface import HuggingFaceEmbeddings

load_dotenv(override=True)

# 路径配置
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
UPLOAD_DIR = os.path.join(BASE_DIR, "data", "uploads")
VECTOR_STORE_DIR = os.path.join(BASE_DIR, "data", "vector_stores")

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(VECTOR_STORE_DIR, exist_ok=True)

# 模型初始化
def get_llm():
    return ChatDeepSeek(
        model="deepseek-chat",
        temperature=0.1,
        api_key=os.getenv("DEEPSEEK_API_KEY"),
        base_url=os.getenv("DEEPSEEK_BASE_URL")
    )

def get_embeddings():
    return HuggingFaceEmbeddings(
        model_name=r"E:\users\hwy\LLMs-Technology-Projects\models\Dmeta-embedding-zh",
        model_kwargs={"device": "cpu"}
    )