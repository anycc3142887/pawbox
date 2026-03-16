# PawBox Core Engine

<p align="center">
  <strong>核心AI引擎 - PawBox的心脏</strong><br/>
  统一的AI服务接口，支持多种模型提供商
</p>

## 📦 概述

PawBox Core Engine 是整个PawBox项目的核心组件，提供统一的AI服务接口，支持本地和云端模型，负责AI推理、对话管理、插件扩展等核心功能。

## 🏗️ 架构设计

### 模块结构
```
packages/core/
├── src/
│   ├── core/              # 核心引擎
│   │   ├── Engine.ts      # AI引擎主类
│   │   ├── Context.ts     # 对话上下文管理
│   │   └── Config.ts      # 配置管理
│   ├── models/           # 模型管理
│   │   ├── ModelProvider.ts  # 模型提供商接口
│   │   ├── OllamaProvider.ts # Ollama本地模型
│   │   ├── OpenAIProvider.ts # OpenAI云端模型
│   │   └── ModelRegistry.ts  # 模型注册表
│   ├── plugins/          # 插件系统
│   │   ├── PluginManager.ts  # 插件管理器
│   │   ├── BasePlugin.ts     # 插件基类
│   │   └── builtin/          # 内置插件
│   ├── api/              # REST API
│   │   ├── routes/       # API路由
│   │   ├── middleware/   # 中间件
│   │   └── server.ts     # HTTP服务器
│   └── storage/          # 存储系统
│       ├── Database.ts   # 数据库抽象
│       ├── ConversationStore.ts # 对话存储
│       └── FileStorage.ts      # 文件存储
├── tests/               # 单元测试
└── package.json         # 项目配置
```

### 核心特性
1. **统一接口**: 统一API接口对接不同模型提供商
2. **插件化架构**: 支持热插拔功能扩展
3. **离线优先**: 优先使用本地模型，降级到云端
4. **流式响应**: 支持实时流式输出
5. **多会话管理**: 支持并行对话会话

## 🚀 快速开始

### 安装依赖
```bash
cd packages/core
npm install
```

### 开发模式
```bash
# 启动开发服务器
npm run dev

# 运行测试
npm test

# 构建生产版本
npm run build
```

### 集成使用
```javascript
import { PawBoxEngine } from '@pawbox/core';

// 创建引擎实例
const engine = new PawBoxEngine({
  model: 'llama3.2:latest',
  provider: 'ollama',
  temperature: 0.7,
});

// 启动引擎
await engine.start();

// 发送消息
const response = await engine.chat({
  message: 'Hello, how are you?',
  context: 'general',
});

// 流式响应
const stream = await engine.chatStream({
  message: 'Write a short story',
  onChunk: (chunk) => {
    console.log('Received chunk:', chunk);
  },
});
```

## 🔧 API 参考

### Engine API
```typescript
interface PawBoxEngine {
  // 启动引擎
  start(): Promise<void>;
  
  // 停止引擎
  stop(): Promise<void>;
  
  // 单次对话
  chat(options: ChatOptions): Promise<ChatResponse>;
  
  // 流式对话
  chatStream(options: ChatStreamOptions): Promise<ReadableStream>;
  
  // 切换模型
  switchModel(modelId: string, provider?: string): Promise<void>;
  
  // 获取可用模型
  getAvailableModels(): Promise<ModelInfo[]>;
  
  // 管理插件
  installPlugin(pluginPath: string): Promise<void>;
  uninstallPlugin(pluginId: string): Promise<void>;
}
```

### 配置选项
```typescript
interface EngineConfig {
  // 模型设置
  model: string;
  provider?: 'ollama' | 'openai' | 'anthropic' | 'local';
  
  // 推理参数
  temperature?: number;      // 0.0-2.0
  maxTokens?: number;       // 最大输出tokens
  topP?: number;           // 0.0-1.0
  frequencyPenalty?: number; // -2.0 to 2.0
  presencePenalty?: number;  // -2.0 to 2.0
  
  // 系统设置
  cacheDir?: string;        // 缓存目录
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
  autoStart?: boolean;      // 自动启动
  
  // API设置
  apiPort?: number;         // REST API端口
  apiHost?: string;         // 绑定主机
}
```

## 📦 模型支持

### 本地模型 (Ollama)
```yaml
# 支持的本地模型
- llama3.2:latest
- mistral:latest
- gemma2:latest
- codellama:latest
- phi:latest
```

### 云端模型
```yaml
# OpenAI
- gpt-4o
- gpt-4-turbo
- gpt-3.5-turbo

# Anthropic
- claude-3-opus
- claude-3-sonnet
- claude-3-haiku

# 其他提供商
- deepseek-coder
- qwen-max
```

## 🔌 插件系统

### 插件开发
```typescript
import { BasePlugin } from '@pawbox/core';

export class MyPlugin extends BasePlugin {
  name = 'my-plugin';
  version = '1.0.0';
  
  async initialize() {
    // 插件初始化
    this.registerCommand('greet', this.greetCommand.bind(this));
  }
  
  async greetCommand(args: string[]) {
    return `Hello, ${args[0] || 'World'}!`;
  }
  
  async cleanup() {
    // 清理资源
  }
}
```

### 内置插件
- **Web Search**: 网页搜索功能
- **File Processor**: 文件处理（txt, pdf, docx）
- **Image Analysis**: 图片分析（OCR, 图像识别）
- **Code Interpreter**: 代码解释和执行
- **Memory Manager**: 长期记忆管理

## 🔧 配置指南

### 环境变量
```bash
# 模型提供商API密钥
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
OLLAMA_HOST=http://localhost:11434

# 引擎配置
PAWBOX_CACHE_DIR=~/.pawbox/cache
PAWBOX_LOG_LEVEL=info
PAWBOX_API_PORT=3000
```

### 配置文件
```yaml
# ~/.pawbox/config.yaml
engine:
  default_model: llama3.2:latest
  default_provider: ollama
  temperature: 0.7
  max_tokens: 2048
  
storage:
  conversations_dir: ~/.pawbox/conversations
  cache_dir: ~/.pawbox/cache
  
plugins:
  enabled:
    - web-search
    - file-processor
    - code-interpreter
```

## 🧪 测试

### 运行测试
```bash
# 所有测试
npm test

# 特定测试文件
npm test -- src/core/Engine.test.ts

# 带覆盖率
npm run test:coverage

# E2E测试
npm run test:e2e
```

### 测试工具
```typescript
// 示例测试
import { PawBoxEngine } from '../src/core/Engine';

describe('PawBoxEngine', () => {
  let engine: PawBoxEngine;
  
  beforeEach(async () => {
    engine = new PawBoxEngine({
      model: 'test-model',
      provider: 'mock',
    });
    await engine.start();
  });
  
  afterEach(async () => {
    await engine.stop();
  });
  
  test('should respond to chat', async () => {
    const response = await engine.chat({
      message: 'Hello',
      context: 'test',
    });
    
    expect(response.content).toBeDefined();
    expect(response.tokens).toBeGreaterThan(0);
  });
});
```

## 📊 性能优化

### 缓存策略
```typescript
// 对话缓存
interface CacheStrategy {
  ttl: number;          // 缓存时间（秒）
  maxSize: number;      // 最大缓存条目
  eviction: 'lru' | 'fifo' | 'random';
}

// 模型缓存
interface ModelCache {
  weights: boolean;     // 缓存模型权重
  embeddings: boolean;  // 缓存嵌入向量
  results: boolean;     // 缓存推理结果
}
```

### 资源管理
```yaml
# 资源限制
memory_limit: 4096      # MB
cpu_limit: 4            # 核心数
gpu_memory: 2048        # GPU显存MB
max_concurrent: 5       # 最大并发请求
```

## 🚨 故障排除

### 常见问题
1. **模型加载失败**
   - 检查Ollama服务是否运行
   - 确认模型已下载：`ollama list`
   - 检查网络连接

2. **内存不足**
   - 减小`maxTokens`参数
   - 使用更小的模型
   - 启用磁盘缓存

3. **API连接问题**
   - 检查API密钥配置
   - 验证网络代理设置
   - 查看防火墙规则

### 调试模式
```bash
# 启用详细日志
PAWBOX_LOG_LEVEL=debug npm run dev

# 检查服务状态
curl http://localhost:3000/health

# 查看模型信息
curl http://localhost:3000/api/v1/models
```

## 📄 许可证

MIT License - 详见 [LICENSE](../LICENSE)

## 🤝 贡献

欢迎贡献代码、文档、测试或想法！请阅读[贡献指南](../CONTRIBUTING.md)。

---

<p align="center">
  <em>为PawBox提供强大的AI核心能力</em>
</p>