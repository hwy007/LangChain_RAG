# 相关性分数问题诊断指南

## 问题描述

召回测试时，三个文档片段的相关性分数都相同，这不符合预期。理论上，不同的文档片段应该有不同的相关性分数。

## 🔍 诊断步骤

### 1. 打开浏览器开发者工具

- **Chrome/Edge**: 按 `F12` 或 `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- **Firefox**: 按 `F12` 或 `Ctrl+Shift+K` (Windows) / `Cmd+Option+K` (Mac)
- 切换到 **Console（控制台）** 标签

### 2. 执行召回测试

在知识库管理区域：
1. 输入测试查询（例如："什么是RAG？"）
2. 点击"召回测试"按钮
3. 观察控制台输出

### 3. 查看调试日志

现在前端会输出详细的调试信息，格式如下：

```javascript
📊 召回测试 - 后端返回的原始数据: {
  results: [
    { content: "...", metadata: {...}, score: 0.123 },
    { content: "...", metadata: {...}, score: 0.456 },
    { content: "...", metadata: {...}, score: 0.789 }
  ]
}

📊 召回测试 - 每个结果的score: [
  { index: 1, score: 0.123, content_preview: "..." },
  { index: 2, score: 0.456, content_preview: "..." },
  { index: 3, score: 0.789, content_preview: "..." }
]

📊 片段 1: score=0.123, relevance=0.8904
📊 片段 2: score=0.456, relevance=0.6849
📊 片段 3: score=0.789, relevance=0.5586

📊 召回测试 - 转换后的fragments: [
  { index: 1, relevance: "0.8904", content_preview: "..." },
  { index: 2, relevance: "0.6849", content_preview: "..." },
  { index: 3, relevance: "0.5586", content_preview: "..." }
]
```

## 📋 问题判断清单

### 情况 A：后端返回的 score 都相同

**示例输出**：
```javascript
📊 召回测试 - 每个结果的score: [
  { index: 1, score: 0.123, content_preview: "..." },
  { index: 2, score: 0.123, content_preview: "..." },  // ❌ 相同
  { index: 3, score: 0.123, content_preview: "..." }   // ❌ 相同
]
```

**结论**: 🔴 **后端问题**

**原因分析**：
1. 后端向量数据库查询有问题
2. 相似度计算逻辑错误
3. 可能所有文档片段真的一模一样（数据问题）
4. Top-K 查询参数未正确传递

**后端需要检查**：
```python
# 检查向量数据库查询
results = vectorstore.similarity_search_with_score(
    query=query,
    k=top_k  # 确保这个参数正确传递
)

# 打印每个结果的分数
for i, (doc, score) in enumerate(results):
    print(f"文档 {i+1}: score={score}, content={doc.page_content[:50]}")
```

### 情况 B：后端返回的 score 不同，但前端显示相同

**示例输出**：
```javascript
📊 召回测试 - 每个结果的score: [
  { index: 1, score: 0.123, content_preview: "..." },  // ✅ 不同
  { index: 2, score: 0.456, content_preview: "..." },  // ✅ 不同
  { index: 3, score: 0.789, content_preview: "..." }   // ✅ 不同
]

📊 片段 1: score=0.123, relevance=0.8904
📊 片段 2: score=0.456, relevance=0.6849
📊 片段 3: score=0.789, relevance=0.5586

// 但在界面上显示的都是 0.89 或其他相同值
```

**结论**: 🟡 **前端显示问题**

**可能原因**：
1. `toFixed(2)` 精度不够，导致相近的值显示相同
2. 界面组件缓存或状态更新问题
3. 数据绑定错误

**前端解决方案**：
- 增加显示精度：`toFixed(4)` 或 `toFixed(6)`
- 检查是否有缓存问题

### 情况 C：后端返回的 score 都是 0 或 undefined

**示例输出**：
```javascript
📊 召回测试 - 每个结果的score: [
  { index: 1, score: 0, content_preview: "..." },      // ❌ 都是 0
  { index: 2, score: 0, content_preview: "..." },
  { index: 3, score: undefined, content_preview: "..." } // ❌ undefined
]
```

**结论**: 🔴 **后端 API 返回格式问题**

**原因**：
1. 后端没有返回 score 字段
2. 后端返回的字段名不匹配（可能是 `distance` 而不是 `score`）
3. 向量数据库查询未包含分数

**后端需要修复**：
```python
# 确保返回格式包含 score
return {
    "results": [
        {
            "content": doc.page_content,
            "metadata": doc.metadata,
            "score": float(score)  # 确保 score 字段存在且为 float
        }
        for doc, score in search_results
    ]
}
```

## 🛠️ 前端转换逻辑说明

### 当前的转换公式

```typescript
relevance = 1 / (1 + score)
```

### 转换示例

| 后端 score (L2距离) | 前端 relevance | 说明 |
|-------------------|---------------|------|
| 0.0               | 1.0000        | 完全相同 |
| 0.1               | 0.9091        | 非常相似 |
| 0.5               | 0.6667        | 比较相似 |
| 1.0               | 0.5000        | 一般相似 |
| 2.0               | 0.3333        | 较不相似 |
| 5.0               | 0.1667        | 很不相似 |
| 10.0              | 0.0909        | 几乎不相似 |

### 为什么需要转换？

1. **L2距离**：越小越相似（0 表示完全相同）
2. **相关性分数**：越大越相似（1 表示完全相同）
3. **用户直觉**：看到 0.95 比看到 0.05 更容易理解为"很相关"

## 🔧 临时解决方案

如果确认是前端显示精度问题，可以尝试：

### 方案 1：增加显示精度

修改 `/components/KnowledgeBaseManager.tsx` 第 135 行：

```typescript
// 从
<span className="...">相关性 {fragment.relevance.toFixed(2)}</span>

// 改为
<span className="...">相关性 {fragment.relevance.toFixed(4)}</span>
```

### 方案 2：显示原始 score

如果想同时显示原始 score 和转换后的 relevance：

```typescript
// 1. 在 DocumentFragment 接口中添加 score 字段
export interface DocumentFragment {
  id: string;
  content: string;
  relevance: number;
  score?: number;  // 添加原始 score
  index: number;
}

// 2. 在转换时保存原始 score
const fragments: DocumentFragment[] = response.results.map((result, index) => ({
  id: `${Date.now()}-${index}`,
  content: result.content,
  relevance: 1 / (1 + result.score),
  score: result.score,  // 保存原始 score
  index: index + 1,
}));

// 3. 在界面上同时显示
<span className="...">
  L2距离: {fragment.score?.toFixed(4)} | 相关性: {fragment.relevance.toFixed(4)}
</span>
```

## 📊 完整的调试流程

### 步骤 1：检查控制台日志

进行一次召回测试，查看控制台输出的：
- ✅ 后端返回的原始 score 值
- ✅ 前端转换后的 relevance 值

### 步骤 2：确定问题源

根据日志判断：
- 如果 **score 都相同** → 后端问题
- 如果 **score 不同，但 relevance 相同** → 前端计算/显示问题
- 如果 **score 是 0 或 undefined** → 后端 API 格式问题

### 步骤 3：对症下药

- **后端问题** → 检查向量数据库查询和分数计算
- **前端问题** → 增加显示精度或修复计算逻辑
- **API 问题** → 修复后端返回格式

## 🎯 预期结果

正常情况下，控制台应该看到类似这样的输出：

```javascript
📊 召回测试 - 每个结果的score: [
  { index: 1, score: 0.234, content_preview: "RAG是一种结合检索和生成的..." },
  { index: 2, score: 0.567, content_preview: "向量数据库用于存储和检索..." },
  { index: 3, score: 0.891, content_preview: "LangGraph是一个用于构建..." }
]

📊 片段 1: score=0.234, relevance=0.8104
📊 片段 2: score=0.567, relevance=0.6383
📊 片段 3: score=0.891, relevance=0.5288
```

**关键点**：
- ✅ 每个 score 都不同
- ✅ relevance 按 score 递减排序
- ✅ score 越小，relevance 越大

## 📝 报告问题时需要提供的信息

如果需要进一步协助，请提供：

1. **控制台完整日志**（包括所有 📊 开头的日志）
2. **后端 API 的实际响应** (可以从 Network 标签查看)
3. **界面上显示的相关性值**（截图更好）
4. **后端使用的向量数据库类型**（FAISS, Chroma, Pinecone 等）
5. **后端相似度计算方式**（L2, cosine, dot product 等）

## 🚀 下一步

1. 执行召回测试
2. 查看控制台日志
3. 根据本指南判断问题源
4. 如果是后端问题，修复后端代码
5. 如果是前端问题，我们再调整前端代码

现在请执行一次召回测试，然后告诉我控制台输出了什么，我们就能准确定位问题了！
