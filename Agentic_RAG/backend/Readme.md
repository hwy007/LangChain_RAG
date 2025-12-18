# 后端的启动方式：

```
backend/
├── app/
│   ├── main.py
│   ├── api/
│   │   └── endpoints.py
│   └── __init__.py
```

## 方案一：**从 backend 目录启动**

```powershell
cd backend
python -m app.main
```

✅ `-m` 会告诉 Python：

> “`app` 是一个包，不是普通文件夹”

---

## 方案二：FastAPI / Uvicorn 的标准启动方式

```powershell
cd backend
uvicorn app.main:app --reload
```

或者：

```powershell
python -m uvicorn app.main:app --reload
```

---

## 隐形坑（必须注意！）

### 1️⃣ `app` 目录里必须有 `__init__.py`

```
backend/app/__init__.py
```

哪怕是空文件，也必须有。

---

### 2️⃣ 不要在 `app/` 目录里直接跑 `main.py`

❌ 错误：

```powershell
cd backend/app
python main.py
```
