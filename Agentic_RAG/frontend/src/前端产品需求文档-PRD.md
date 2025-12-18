# RAG本地知识库问答引擎 - 前端产品需求文档 (PRD)

## 📋 文档信息

| 项目名称 | RAG本地知识库问答引擎前端系统 |
| -------- | ----------------------------- |
| 产品版本 | v1.0.0                        |
| 文档版本 | v1.0                          |
| 创建日期 | 2025年                        |
| 文档类型 | 前端产品需求文档              |
| 目标平台 | Web桌面端                     |

---

## 🎯 项目概述

### 产品定位

构建一个现代化的RAG（检索增强生成）系统前端界面，为用户提供智能的本地知识库问答服务，支持文档上传、向量化处理、语义检索和AI对话功能。

### 核心价值

- **智能问答**: 基于上传文档的精准AI问答
- **本地化**: 支持本地向量数据库，保护数据隐私
- **易用性**: 直观的拖拽上传和配置界面
- **专业性**: 面向开发者和企业用户的专业工具

### 目标用户

- AI开发工程师
- 企业知识管理人员
- 技术研究人员
- 《大模型Agent开发实战课》学员

---

## 🏗️ 系统架构需求

### 技术栈要求

#### 核心框架

```json
{
  "framework": "React 18.x",
  "language": "TypeScript 5.x",
  "buildTool": "Vite",
  "styling": "Tailwind CSS v4",
  "componentLibrary": "shadcn/ui + Radix UI"
}
```

#### 必需依赖包

```json
{
  "icons": "lucide-react",
  "stateManagement": "React Hooks (useState, useEffect)",
  "imageHandling": "Figma assets integration",
  "accessibility": "Radix UI primitives"
}
```

### 应用架构

```
App.tsx (根组件)
├── Header.tsx (顶部栏)
├── ChatInterface.tsx (聊天界面 - 2/3宽度)
├── KnowledgeBaseManager.tsx (知识库管理 - 1/3宽度)
└── Modal组件组
    ├── QRCodeModal.tsx
    ├── FileUploadModal.tsx
    └── DocumentFragmentModal.tsx
```

---

## 🎨 设计系统需求

### 视觉风格定位

- **设计语言**: 现代化玻璃拟态科技风格
- **配色方案**: 马卡龙渐变色系
- **情感目标**: 轻盈、通透、治愈、专业
- **避免风格**: 过于娘化的设计

### 核心配色规范

#### 主要渐变色

```css
/* 页面背景 */
background: linear-gradient(135deg,
  #a8c5e6 0%,     /* 浅蓝色 */
  #b8d4f0 25%,    /* 天蓝色 */
  #cdd9ed 50%,    /* 灰蓝色 */
  #e8c4d8 100%    /* 粉紫色 */
);

/* 主要组件背景 */
component-primary: from-[#ccd9ed]/95 to-[#d1d3e6]/90

/* 次要组件背景 */
component-secondary: from-[#ccd9ed]/70 to-[#d1d3e6]/70

/* 按钮渐变 */
button-gradient: from-[#60acc2] via-[#ccd9ed] to-[#fce6f4]

/* 强调色 */
accent-color: #405a03 (深绿色 - 用于标题文字)

/* 边框色 */
border-color: #60acc2/40 (半透明蓝色)
```

### 玻璃拟态效果规范

```css
/* 标准玻璃拟态 */
.glass-morphism {
  backdrop-filter: blur(32px); /* backdrop-blur-2xl */
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(96, 172, 194, 0.4);
  box-shadow: 0 25px 50px -12px rgba(208, 204, 206, 0.3);
  border-radius: 16px; /* rounded-2xl */
}
```

### 字体系统

```css
/* 基础字体大小 */
--font-size: 16px;

/* 字重规范 */
--font-weight-normal: 400;
--font-weight-medium: 500;

/* 行高统一 */
line-height: 1.5;
```

### 布局规范

- **页面边距**: 8px (p-2)
- **组件间距**: 8px (gap-2)
- **内容边距**: 12px (p-3)
- **圆角规范**: 16px (rounded-2xl)
- **响应式**: 桌面端优先设计

---

## 📱 界面布局需求

### 整体布局结构

```
┌─────────────────────────────────────────────────────┐
│                   Header (48px高)                   │
├─────────────────────────────────────────────────────┤
│  ChatInterface        │   KnowledgeBaseManager    │
│     (2/3宽度)          │        (1/3宽度)           │
│  ┌─────────────────┐   │   ┌─────────────────────┐  │
│  │  知识库问答      │   │   │    知识库管理        │  │
│  │  [清空按钮]     │   │   │                     │  │
│  ├─────────────────┤   │   ├─────────────────────┤  │
│  │                 │   │   │  [创建数据库按钮]    │  │
│  │   消息列表区域   │   │   │                     │  │
│  │   (滚动区域)     │   │   │  数据库信息显示      │  │
│  │                 │   │   │                     │  │
│  ├─────────────────┤   │   ├─────────────────────┤  │
│  │  [输入框][发送]  │   │   │   检索测试区域       │  │
│  └─────────────────┘   │   │                     │  │
│                        │   │   检索结果显示       │  │
│                        │   └─────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Header组件布局

```
┌──────────────────────────────────────────────────────┐
│ 《大模型Agent开发实战课》体验课 │ RAG本地知识库问答引擎 By九天Hector │ [领取课件] │
│        (左侧品牌区)           │         (居中标题区)        │ (右侧按钮) │
└──────────────────────────────────────────────────────┘
```

---

## 🔧 核心功能需求

### 1. Header组件 (Header.tsx)

#### 功能要求

- **品牌展示**: 左侧显示"《大模型Agent开发实战课》体验课"文字
- **标题展示**: 居中显示"RAG本地知识库问答引擎 By九天Hector"
- **课件入口**: 右侧"领取课件"按钮，点击弹出二维码

#### 样式要求

```typescript
// 组件高度: 48px (h-12)
// 背景: 半透明玻璃拟态效果
// 文字颜色: text-[#405a03] (深绿色)
// 按钮样式: 马卡龙渐变背景
```

#### 交互要求

- 点击"领取课件"按钮 → 打开QRCodeModal

### 2. ChatInterface组件 (ChatInterface.tsx)

#### 功能要求

- **消息展示**: 支持用户消息和AI回复的对话流
- **文档片段**: AI回复包含可点击的参考文档片段
- **消息输入**: 输入框支持Enter发送，Shift+Enter换行
- **聊天清空**: 顶部清空按钮可清空所有对话记录
- **自动滚动**: 新消息自动滚动到底部

#### 消息类型定义

```typescript
interface Message {
  id: string; // 消息唯一标识
  content: string; // 消息文本内容
  isUser: boolean; // true=用户消息, false=AI回复
  documentFragments?: DocumentFragment[]; // AI回复的参考文档片段
}
```

#### 样式要求

- **用户消息**: 右对齐，粉色渐变背景，用户头像
- **AI消息**: 左对齐，蓝色渐变背景，机器人头像
- **文档片段**: 显示前20字符，点击查看完整内容
- **空状态**: 显示欢迎信息和使用提示

### 3. KnowledgeBaseManager组件 (KnowledgeBaseManager.tsx)

#### 功能要求

- **数据库创建**: "创建数据库"按钮打开文件上传界面
- **状态显示**: 显示当前数据库配置信息
- **检索测试**: 输入查询词，测试文档检索功能
- **结果展示**: 显示检索到的文档片段列表
- **数据库管理**: 删除当前数据库的功能

#### 向量数据库配置

```typescript
interface VectorDatabase {
  name: string; // 数据库名称
  maxChunkSize: number; // 分段最大长度 (默认2048 tokens)
  maxOverlap: number; // 重叠最大长度 (默认100 tokens)
  topK: number; // Top-K检索数量 (默认3)
  isCreated: boolean; // 数据库创建状态
}
```

#### 检索结果显示

- 显示文档片段前100字符
- 显示相关性评分 (0-1)
- 支持点击查看完整片段内容

### 4. 模态框组件需求

#### QRCodeModal.tsx

- **触发方式**: Header中的"领取课件"按钮
- **内容结构**:
  ```
  标题: "扫码领取课件"
  二维码图片 (用户提供的真实二维码)
  描述: "扫码免费领取项目完整源码"
  ```
- **样式**: 紧凑布局，玻璃拟态背景

#### FileUploadModal.tsx

- **触发方式**: KnowledgeBaseManager中的"创建数据库"按钮
- **功能要求**:
  - 数据库名称输入 (默认值: "my_knowledge_base")
  - 分段最大长度配置 (默认: 2048)
  - 重叠最大长度配置 (默认: 100)
  - Top-K数量配置 (默认: 3)
  - 文件上传区域 (支持拖拽)
  - 支持格式: PDF, Markdown (.md), Text (.txt)
- **交互**: 配置完成后关闭模态框，更新知识库状态

#### DocumentFragmentModal.tsx

- **触发方式**: 点击任意文档片段
- **内容**: 显示完整的文档片段文本
- **样式**: 可滚动的文本区域

---

## 📊 数据结构定义

### 文档片段结构

```typescript
interface DocumentFragment {
  id: string; // 片段唯一标识
  content: string; // 片段文本内容
  relevance: number; // 相关性评分 (0-1)
  index: number; // 片段在文档中的索引
}
```

### 默认模拟数据

#### 聊天回复的模拟文档片段

```typescript
const mockDocumentFragments: DocumentFragment[] = [
  {
    id: "1",
    content:
      "Gemini Fullstack LangGraph Quickstart（也被称作深度研究增强型对话式 AI 系统）是 Google 在 2025 年6月开源的一个全栈 AI Agent 模板项目，它集成了最新的大语言模型技术，提供了完整的RAG（检索增强生成）解决方案。该项目包含了从数据预处理、向量化存储、语义检索到生成回答的完整流程，支持多种文档格式的处理，并具备高度的可扩展性和自定义能力。",
    relevance: 0.85,
    index: 1,
  },
  {
    id: "2",
    content:
      "LangGraph 是一个基于图结构的AI工作流编排框架，它允许开发者构建复杂的多步骤AI应用。与传统的链式调用不同，LangGraph采用有向无环图（DAG）的方式来组织AI任务，使得整个系统更加灵活和可维护。每个节点可以是一个独立的AI模型或处理函数，节点之间通过边连接，数据在图中流动并最终产生结果。",
    relevance: 0.78,
    index: 2,
  },
  {
    id: "3",
    content:
      "RAG系统的核心优势在于它能够将外部知识库与大语言模型相结合，从而在保持模型生成能力的同时，确保回答的准确性和时效性。通过检索相关文档片段，模型可以基于最新的、特定领域的信息来生成回答，有效避免了大模型可能出现的幻觉问题，并能够提供可追溯的信息来源。",
    relevance: 0.72,
    index: 3,
  },
];
```

#### AI回复模拟内容

```typescript
const mockAIResponse =
  "LangGraph 是一个基于图结构的AI工作流编排框架，它允许开发者构建复杂的多步骤AI应用。与传统的链式调用不同，LangGraph采用有向无环图（DAG）的方式来组织AI任务，使得整个系统更加灵活和可维护。每个节点可以是一个独立的AI模型或处理函数，节点之间通过边连接，数据在图中流动并最终产生结果。";
```

#### 默认数据库配置

```typescript
const defaultVectorDBConfig: VectorDatabase = {
  name: "my_knowledge_base",
  maxChunkSize: 2048,
  maxOverlap: 100,
  topK: 3,
  isCreated: false,
};
```

---

## 🔌 后端接口规范

### API端点定义

#### 1. 聊天对话接口

```http
POST /api/chat
Content-Type: application/json

Request Body:
{
  "message": "用户输入的问题",
  "database_name": "knowledge_base_name"
}

Response:
{
  "response": "AI生成的回答文本",
  "document_fragments": [
    {
      "id": "fragment_1",
      "content": "相关文档片段内容...",
      "relevance": 0.85,
      "index": 1
    }
  ]
}
```

#### 2. 文件上传接口

```http
POST /api/upload
Content-Type: multipart/form-data

Request Body:
- files: [File, File, ...] (支持PDF, MD, TXT格式)
- config: {
    "name": "数据库名称",
    "maxChunkSize": 2048,
    "maxOverlap": 100,
    "topK": 3
  }

Response:
{
  "success": true,
  "database": {
    "name": "数据库名称",
    "status": "created",
    "document_count": 5,
    "chunk_count": 125
  }
}
```

#### 3. 检索测试接口

```http
POST /api/retrieve
Content-Type: application/json

Request Body:
{
  "query": "检索查询文本",
  "database_name": "knowledge_base_name",
  "top_k": 3
}

Response:
{
  "fragments": [
    {
      "id": "fragment_1",
      "content": "检索到的文档片段内容...",
      "relevance": 0.92,
      "index": 1
    }
  ]
}
```

#### 4. 数据库管理接口

```http
DELETE /api/database/{database_name}

Response:
{
  "success": true,
  "message": "数据库已删除"
}

GET /api/database/{database_name}/status

Response:
{
  "name": "数据库名称",
  "isCreated": true,
  "document_count": 5,
  "chunk_count": 125,
  "created_at": "2024-01-01T00:00:00Z"
}
```

---

## 🎯 交互行为规范

### 页面加载行为

1. **初始状态**:
   - 聊天区域显示欢迎消息
   - 知识库区域显示"创建数据库"按钮
   - 所有模态框关闭状态

### 用户操作流程

#### 标准工作流程

```
1. 用户点击"创建数据库"
   → 打开FileUploadModal
   → 配置参数并上传文件
   → 关闭模态框，显示数据库信息

2. 用户在聊天框输入问题
   → 发送消息到聊天区域
   → 模拟AI回复（包含文档片段）
   → 自动滚动到最新消息

3. 用户点击文档片段
   → 打开DocumentFragmentModal
   → 显示完整片段内容

4. 用户进行检索测试
   → 在知识库区域输入查询
   → 显示检索结果列表
   → 支持点击查看片段详情
```

### 错误处理

- **文件上传失败**: 显示错误提示，不关闭模态框
- **消息发送失败**: 显示重试按钮
- **检索无结果**: 显示"未找到相关内容"提示

### 性能要求

- **消息渲染**: 支持至少100条消息流畅显示
- **滚动性能**: 消息列表滚动无卡顿
- **模态框动画**: 打开/关闭动画流畅 (300ms)

---

## 🌟 特殊功能需求

### 文本截断规则

- **聊天中的文档片段**: 显示前20字符 + "..."
- **检索结果片段**: 显示前100字符 + "..."
- **完整查看**: 点击后在模态框中显示全部内容

### 响应式适配

- **桌面端**: 2/3和1/3的布局比例
- **平板端**: 上下布局，聊天在上，知识库在下
- **移动端**: 单栏布局，通过标签页切换

### 无障碍支持

- **键盘导航**: 支持Tab键在所有交互元素间导航
- **屏幕阅读器**: 所有Dialog必须包含DialogTitle和DialogDescription
- **ARIA标签**: 为所有按钮和输入框添加适当的aria-label
- **颜色对比度**: 确保文字与背景对比度 ≥ 4.5:1

### 状态持久化

- **会话保持**: 页面刷新后保持当前对话
- **配置记忆**: 记住用户的数据库配置偏好
- **本地存储**: 使用localStorage保存用户设置

---

## 🔧 技术实现要求

### 组件设计原则

- **单一职责**: 每个组件只负责一个特定功能
- **可复用性**: UI组件支持不同props配置
- **类型安全**: 所有props和state使用TypeScript接口定义
- **性能优化**: 使用React.memo和useCallback避免不必要渲染

### 状态管理策略

```typescript
// App.tsx中的核心状态
const [messages, setMessages] = useState<Message[]>([]);
const [vectorDatabase, setVectorDatabase] =
  useState<VectorDatabase | null>(null);
const [retrievedFragments, setRetrievedFragments] = useState<
  DocumentFragment[]
>([]);
const [selectedDocument, setSelectedDocument] =
  useState<DocumentFragment | null>(null);
const [showQRModal, setShowQRModal] = useState(false);
const [showUploadModal, setShowUploadModal] = useState(false);
const [showDocumentModal, setShowDocumentModal] =
  useState(false);
```

### 样式组织

- **全局样式**: styles/globals.css (Tailwind v4配置)
- **组件样式**: 使用Tailwind CSS类名，不使用CSS modules
- **设计令牌**: 通过CSS变量统一管理颜色和尺寸
- **响应式**: 使用Tailwind的响应式前缀 (sm:, md:, lg:)

### 构建配置

- **开发服务器**: Vite dev server，支持热重载
- **类型检查**: TypeScript strict mode
- **代码格式化**: Prettier + ESLint
- **打包优化**: Vite build，自动代码分割和压缩

---

## 📋 开发检查清单

### 开发阶段

- [ ] 创建基础项目结构 (React + TypeScript + Vite)
- [ ] 配置Tailwind CSS v4和设计令牌
- [ ] 安装并配置shadcn/ui组件库
- [ ] 实现App.tsx主组件和状态管理
- [ ] 开发Header组件 (品牌+标题+按钮)
- [ ] 开发ChatInterface组件 (消息列表+输入框)
- [ ] 开发KnowledgeBaseManager组件 (配置+检索)
- [ ] 实现QRCodeModal组件
- [ ] 实现FileUploadModal组件
- [ ] 实现DocumentFragmentModal组件
- [ ] 添加所有必需的TypeScript接口定义
- [ ] 实现模拟数据和API调用
- [ ] 测试所有交互功能

### 样式阶段

- [ ] 应用玻璃拟态设计效果
- [ ] 实现马卡龙渐变配色方案
- [ ] 确保响应式布局适配
- [ ] 优化字体和排版系统
- [ ] 添加交互动画和过渡效果
- [ ] 测试不同浏览器兼容性

### 质量保证

- [ ] 完成无障碍性测试 (WCAG 2.1)
- [ ] 进行键盘导航测试
- [ ] 验证屏幕阅读器支持
- [ ] 性能测试 (加载时间、内存使用)
- [ ] 移动端适配测试
- [ ] 跨浏览器兼容性测试

### 部署准备

- [ ] 构建生产版本并测试
- [ ] 配置环境变量
- [ ] 准备部署文档
- [ ] 设置CI/CD流程 (可选)
- [ ] 域名和SSL证书配置

---

## 📈 项目里程碑

### Phase 1: 基础框架 (Week 1)

- 项目搭建和技术栈配置
- 基础组件结构实现
- 设计系统建立

### Phase 2: 核心功能 (Week 2)

- 聊天界面完整实现
- 知识库管理功能
- 模态框组件开发

### Phase 3: 样式优化 (Week 3)

- 玻璃拟态设计实现
- 响应式布局适配
- 交互动画添加

### Phase 4: 测试部署 (Week 4)

- 功能测试和修复
- 性能优化
- 部署上线

---

## 🔍 验收标准

### 功能验收

- ✅ 所有模态框正常打开/关闭
- ✅ 聊天消息正确发送和显示
- ✅ 文档片段点击查看功能
- ✅ 知识库配置和检索测试
- ✅ 响应式布局在不同设备正常显示

### 性能验收

- ✅ 页面首次加载时间 < 3秒
- ✅ 消息发送响应时间 < 500ms
- ✅ 滚动性能流畅，无卡顿
- ✅ 内存使用合理，无内存泄漏

### 兼容性验收

- ✅ Chrome 88+ 完全支持
- ✅ Firefox 85+ 完全支持
- ✅ Safari 14+ 完全支持
- ✅ 移动端Safari和Chrome支持

### 可访问性验收

- ✅ 通过WCAG 2.1 AA级别检测
- ✅ 键盘导航完全可用
- ✅ 屏幕阅读器正确朗读内容
- ✅ 颜色对比度满足要求

---

## 📝 附录

### A. 设计资源

- UI设计稿 (Figma)
- 二维码图片素材
- 图标素材 (Lucide React)
- 品牌配色标准

### B. 参考文档

- React 18 官方文档
- TypeScript 5.x 文档
- Tailwind CSS v4 文档
- shadcn/ui 组件文档
- Radix UI 文档

### C. 开发工具

- VS Code + 相关插件
- React DevTools
- Tailwind CSS IntelliSense
- TypeScript Hero
- Prettier + ESLint

---

**文档结束** - 此PRD包含了从零开发RAG知识库问答引擎前端系统的完整需求规范，包括功能定义、设计要求、技术实现和验收标准。开发团队可以根据此文档进行完整的前端系统开发。