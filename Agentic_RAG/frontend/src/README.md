# RAG本地知识库问答引擎 - 前端系统

> 🚀 基于React + TypeScript构建的现代化RAG系统前端界面

一个现代化的RAG（检索增强生成）系统前端应用，采用玻璃拟态设计风格和马卡龙渐变配色，为用户提供直观、治愈的AI知识库问答体验。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-blue.svg)

## 📑 目录

- [✨ 特性](#-特性)
- [🏗️ 系统架构](#️-系统架构)
- [🛠️ 技术栈](#️-技术栈)
- [📁 项目结构](#-项目结构)
- [🚀 快速开始](#-快速开始)
- [💡 核心功能](#-核心功能)
- [🎨 设计系统](#-设计系统)
- [🔧 配置说明](#-配置说明)
- [📡 API接口](#-api接口)
- [🚢 部署指南](#-部署指南)
- [🧪 测试](#-测试)
- [🔧 故障排除](#-故障排除)
- [🤝 贡献指南](#-贡献指南)
- [📄 许可证](#-许可证)

## ✨ 特性

### 🌟 核心特性
- **🤖 智能对话系统** - 基于RAG技术的AI问答，支持上下文理解
- **📚 知识库管理** - 支持PDF、Markdown、Text文件上传与管理
- **🔍 智能检索** - 向量化检索与文档片段召回测试
- **💬 实时聊天** - 流畅的对话界面，支持消息历史记录
- **📄 文档预览** - 点击查看完整文档片段内容
- **⚙️ 灵活配置** - 自定义分段长度、重叠度、Top-K等参数

### 🎨 界面特性
- **🌈 玻璃拟态设计** - 现代化毛玻璃效果，营造轻盈通透感
- **🎨 马卡龙配色** - 温馨治愈的渐变色彩，提升用户体验
- **📱 响应式布局** - 适配不同屏幕尺寸，保持最佳显示效果
- **♿ 无障碍支持** - 完整的WCAG可访问性标准支持
- **⚡ 性能优化** - 组件懒加载，内存使用优化

## 🏗️ 系统架构

### 整体架构图
```
┌─────────────────────────────────────────────────────────┐
│                    前端应用层                             │
├─────────────────────────────────────────────────────────┤
│  Header组件     │   ChatInterface   │  KnowledgeBase    │
│  - 品牌展示     │   - 消息列表      │  - 文件上传        │
│  - QR码入口     │   - 输入框        │  - 参数配置        │
│                 │   - 文档片段      │  - 检索测试        │
├─────────────────────────────────────────────────────────┤
│                    状态管理层                             │
│  - 消息状态管理   - 知识库状态管理   - 模态框状态管理      │
├─────────────────────────────────────────────────────────┤
│                    组件服务层                             │
│  - Dialog组件     - UI组件库      - 工具函数            │
├─────────────────────────────────────────────────────────┤
│                    样式系统层                             │
│  - Tailwind CSS v4  - 设计令牌    - 响应式系统          │
└─────────────────────────────────────────────────────────┘
```

### 数据流架构
```
用户输入 → ChatInterface → App状态管理 → 模拟后端API → 状态更新 → UI重渲染
    ↓
文件上传 → FileUploadModal → KnowledgeBaseManager → 向量数据库配置
    ↓
检索测试 → KnowledgeBaseManager → 文档片段检索 → 结果展示
```

## 🛠️ 技术栈

### 前端框架
- **React 18.x** - 现代化React框架，支持并发特性
- **TypeScript 5.x** - 静态类型检查，提升代码质量
- **Vite** - 极速构建工具，热重载开发体验

### 样式系统
- **Tailwind CSS v4** - 实用优先的CSS框架
- **CSS变量系统** - 支持主题切换和设计令牌
- **响应式设计** - 移动端优先的适配策略

### UI组件库
- **shadcn/ui** - 高质量React组件库
- **Radix UI** - 无障碍访问组件基础
- **Lucide React** - 现代化图标库

### 状态管理
- **React Hooks** - 轻量级状态管理
- **useState/useEffect** - 组件级状态控制
- **Props Drilling** - 简化的状态传递

## 📁 项目结构

```
├── 📄 App.tsx                      # 应用入口组件
├── 📄 README.md                    # 项目文档
├── 📄 Attributions.md             # 第三方库声明
├── 📁 components/                  # 业务组件目录
│   ├── 📄 Header.tsx              # 顶部导航栏
│   ├── 📄 ChatInterface.tsx       # 聊天对话界面
│   ├── 📄 KnowledgeBaseManager.tsx # 知识库管理
│   ├── 📄 QRCodeModal.tsx         # 二维码弹窗
│   ├── 📄 FileUploadModal.tsx     # 文件上传弹窗
│   ├── 📄 DocumentFragmentModal.tsx # 文档片段弹窗
│   ├── 📁 figma/                  # Figma集成组件
│   │   └── 📄 ImageWithFallback.tsx # 图片容错组件
│   └── 📁 ui/                     # UI基础组件库
│       ├── 📄 button.tsx          # 按钮组件
│       ├── 📄 dialog.tsx          # 对话框组件
│       ├── 📄 input.tsx           # 输入框组件
│       ├── 📄 scroll-area.tsx     # 滚动区域
│       └── ...                    # 其他UI组件
├── 📁 guidelines/                  # 开发指南
│   └── 📄 Guidelines.md           # 项目开发规范
└── 📁 styles/                     # 样式文件
    └── 📄 globals.css             # 全局样式与设计令牌
```

## 🚀 快速开始

### 环境要求
- **Node.js** >= 16.0.0
- **npm** >= 7.0.0 或 **yarn** >= 1.22.0
- **现代浏览器** (Chrome 88+, Firefox 85+, Safari 14+)

### 安装依赖
```bash
# 克隆项目
git clone <repository-url>
cd rag-frontend

# 安装依赖
npm install
# 或使用yarn
yarn install
```

### 开发环境启动
```bash
# 启动开发服务器
npm run dev
# 或
yarn dev

# 访问应用
open http://localhost:5173
```

### 构建生产版本
```bash
# 构建项目
npm run build
# 或
yarn build

# 预览构建结果
npm run preview
# 或
yarn preview
```

## 💡 核心功能

### 1. 智能对话系统
- **消息管理**: 支持用户消息和AI回复的完整对话流
- **文档引用**: AI回复自动附带相关文档片段
- **历史记录**: 完整的对话历史保存与清除
- **实时交互**: 即时消息发送与响应

### 2. 知识库管理
- **文件上传**: 支持PDF、Markdown、Text等格式
- **参数配置**: 
  - 数据库名称自定义
  - 分段最大长度 (默认2048 tokens)
  - 重叠最大长度 (默认100 tokens)  
  - Top-K检索数量 (默认3)
- **数据库状态**: 实时显示向量数据库创建状态

### 3. 检索测试功能
- **语义搜索**: 基于输入查询检索相关文档片段
- **相关性评分**: 显示每个片段的相关性分数
- **片段预览**: 文档片段前100字符预览
- **完整查看**: 点击查看文档片段完整内容

### 4. 界面交互
- **响应式设计**: 左侧2/3聊天区域，右侧1/3知识库管理
- **模态框系统**: 文件上传、文档查看、二维码展示
- **无障碍支持**: 完整的键盘导航和屏幕阅读器支持

## 🎨 设计系统

### 配色方案
```css
/* 主要渐变色 */
背景渐变: from-[#a8c5e6] via-[#b8d4f0] via-[#ccd9ed] to-[#e8c4d8]
主要组件: from-[#ccd9ed]/95 to-[#d1d3e6]/90
次要组件: from-[#60acc2] via-[#ccd9ed] to-[#fce6f4]
强调色: #405a03 (深绿色文字)
边框色: #60acc2/40 (半透明蓝色)
```

### 设计原则
- **玻璃拟态效果**: `backdrop-blur-2xl` + 半透明背景
- **柔和阴影**: `shadow-2xl shadow-[#d0ccce]/30`
- **圆角设计**: 统一使用 `rounded-2xl` 大圆角
- **渐变过渡**: 所有交互元素支持平滑过渡动画

### 字体系统
- **基础字体**: 16px (--font-size)
- **标题层级**: h1-h4 使用相应的text-*类
- **字重**: 常规400，中等500
- **行高**: 统一1.5倍行高

## 🔧 配置说明

### 向量数据库配置
```typescript
interface VectorDatabase {
  name: string;           // 数据库名称
  maxChunkSize: number;   // 分段最大长度 (tokens)
  maxOverlap: number;     // 重叠最大长度 (tokens)
  topK: number;          // Top-K检索数量
  isCreated: boolean;    // 数据库创建状态
}
```

### 文档片段结构
```typescript
interface DocumentFragment {
  id: string;            // 片段唯一标识
  content: string;       // 片段文本内容
  relevance: number;     // 相关性评分 (0-1)
  index: number;         // 片段索引
}
```

### 消息对象结构
```typescript
interface Message {
  id: string;                          // 消息唯一标识
  content: string;                     // 消息内容
  isUser: boolean;                     // 是否为用户消息
  documentFragments?: DocumentFragment[]; // 关联文档片段
}
```

## 📡 API接口

> 注意: 当前版本使用模拟数据，实际部署时需要连接真实的后端服务

### 预期后端接口
```typescript
// 发送消息
POST /api/chat
{
  "message": "用户输入的问题",
  "database_name": "知识库名称"
}

// 上传文件
POST /api/upload
FormData: {
  files: File[],
  config: VectorDatabase
}

// 检索测试
POST /api/retrieve
{
  "query": "检索查询",
  "database_name": "知识库名称",
  "top_k": 3
}

// 删除数据库
DELETE /api/database/{name}
```

### 响应格式
```typescript
// 聊天响应
{
  "response": "AI生成的回答",
  "document_fragments": DocumentFragment[]
}

// 检索响应
{
  "fragments": DocumentFragment[]
}
```

## 🚢 部署指南

### 静态部署 (推荐)

#### Vercel部署
```bash
# 安装Vercel CLI
npm i -g vercel

# 部署项目
vercel

# 自定义域名
vercel --prod
```

#### Netlify部署
```bash
# 构建项目
npm run build

# 上传dist目录到Netlify
# 或连接Git仓库自动部署
```

#### GitHub Pages部署
```bash
# 安装gh-pages
npm install --save-dev gh-pages

# package.json添加脚本
"scripts": {
  "deploy": "gh-pages -d dist"
}

# 部署
npm run build && npm run deploy
```

### Docker部署

#### Dockerfile
```dockerfile
# 构建阶段
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 生产阶段
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### docker-compose.yml
```yaml
version: '3.8'
services:
  rag-frontend:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### 服务器部署

#### Nginx配置
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/rag-frontend;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://backend:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 环境变量配置
```bash
# .env.production
VITE_API_BASE_URL=https://your-backend-api.com
VITE_APP_TITLE=RAG知识库问答系统
VITE_APP_VERSION=1.0.0
```

## 🧪 测试

### 测试框架
```bash
# 安装测试依赖
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# 运行测试
npm run test

# 测试覆盖率
npm run test:coverage
```

### 测试示例
```typescript
// __tests__/ChatInterface.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ChatInterface } from '../components/ChatInterface';

test('发送消息功能', () => {
  const mockSendMessage = jest.fn();
  render(<ChatInterface messages={[]} onSendMessage={mockSendMessage} />);
  
  const input = screen.getByPlaceholderText('请输入您的问题...');
  const button = screen.getByRole('button');
  
  fireEvent.change(input, { target: { value: '测试消息' } });
  fireEvent.click(button);
  
  expect(mockSendMessage).toHaveBeenCalledWith('测试消息');
});
```

## 🔧 故障排除

### 常见问题

#### 1. 样式不显示
```bash
# 检查Tailwind CSS配置
npm run build:css

# 清除缓存
rm -rf node_modules/.vite
npm run dev
```

#### 2. 组件导入错误
```bash
# 检查组件路径
# 确保使用相对路径导入
import { Button } from "./components/ui/button";
```

#### 3. TypeScript错误
```bash
# 类型检查
npm run type-check

# 重新生成类型文件
npm run build
```

#### 4. 构建失败
```bash
# 清理依赖
rm -rf node_modules package-lock.json
npm install

# 检查Node.js版本
node --version
```

### 性能优化

#### 代码分割
```typescript
// 懒加载组件
const DocumentFragmentModal = lazy(() => import('./components/DocumentFragmentModal'));

// 使用Suspense包装
<Suspense fallback={<div>加载中...</div>}>
  <DocumentFragmentModal />
</Suspense>
```

#### 内存优化
```typescript
// 使用useCallback防止不必要的重渲染
const handleSendMessage = useCallback((content: string) => {
  // 消息发送逻辑
}, []);

// 使用useMemo缓存计算结果
const filteredMessages = useMemo(() => {
  return messages.filter(msg => msg.content.length > 0);
}, [messages]);
```

## 🤝 贡献指南

### 开发流程
1. Fork本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

### 代码规范
- 使用TypeScript严格模式
- 遵循ESLint配置规则
- 组件使用PascalCase命名
- 文件使用kebab-case命名
- 提交信息使用规范格式

### 设计规范
- 保持玻璃拟态设计风格
- 使用统一的颜色系统
- 确保无障碍访问支持
- 移动端优先的响应式设计

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

## 🎯 路线图

### v1.1 计划
- [ ] 添加深色主题支持
- [ ] 实现文件预览功能
- [ ] 增加消息导出功能
- [ ] 支持多语言国际化

### v1.2 计划
- [ ] 集成语音输入
- [ ] 添加消息搜索
- [ ] 实现离线模式
- [ ] 优化移动端体验

### v2.0 计划
- [ ] 插件系统支持
- [ ] 自定义主题编辑器
- [ ] 协作功能
- [ ] 高级分析面板

---

## 👥 团队

- **项目负责人**: 九天Hector
- **UI/UX设计**: 九天Hector
- **前端开发**: 九天Hector

---

## 📞 联系我们

- 📧 邮箱: [your-email@example.com]
- 🌐 官网: [https://your-website.com]
- 💬 微信群: 扫描应用内二维码加入

---

**⭐ 如果这个项目对您有帮助，请给我们一个Star!**