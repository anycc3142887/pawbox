# PawBox — Portable AI Assistant

<p align="center">
  <strong>PawBox — 即插即用的便携AI助手</strong><br/>
  一个轻量、跨平台、可离线运行的AI助手解决方案
</p>

## 🚀 简介

PawBox 是一个开源的便携式AI助手项目，旨在为用户提供即插即用的AI体验。无需复杂安装，无需配置环境，下载即用，随时随地为你的工作流注入AI能力。

## 🎯 目标用户

- **开发者**：需要一个随时可用的AI编程助手
- **学生/教育工作者**：希望获得无门槛的AI学习工具
- **创意工作者**：需要AI辅助创作和内容生成
- **普通用户**：想体验AI助手但不想折腾技术细节

## 🏗️ 技术架构

```
pawbox/
├── packages/core/         # 核心引擎 - 提供统一的AI服务接口
├── packages/android/      # Android应用 - Kotlin/Compose
├── packages/ios/          # iOS应用 - SwiftUI
├── packages/desktop/      # 桌面端 - Electron + React
├── scripts/              # 构建和部署脚本
└── docs/                 # 文档和GitHub Pages配置
```

### 核心技术栈
- **核心引擎**: Node.js + TypeScript
- **Android**: Kotlin + Jetpack Compose
- **iOS**: Swift + SwiftUI  
- **桌面端**: Electron + React + TypeScript
- **模型服务**: Ollama兼容API，支持本地和云端模型

## 🚀 快速开始

### 获取最新版本
前往 [Releases](https://github.com/anycc3142887/pawbox/releases) 下载对应平台的安装包。

### 直接运行
下载后直接运行，无需安装：
- Windows: 双击 `PawBox.exe`
- macOS: 打开 `PawBox.app`
- Linux: 运行 `./pawbox`
- Android: 安装APK文件
- iOS: 通过TestFlight安装

### 从源码构建
```bash
# 克隆项目
git clone https://github.com/anycc3142887/pawbox.git
cd pawbox

# 安装依赖
npm install

# 构建所有平台
npm run build:all

# 或单独构建
npm run build:desktop
npm run build:android
npm run build:ios
```

## 📦 功能特性

### ✅ 已实现
- [ ] 跨平台支持（Windows/macOS/Linux/Android/iOS）
- [ ] 离线优先设计
- [ ] 插件化架构
- [ ] 模型热切换
- [ ] 对话历史持久化

### 🔄 进行中
- [ ] 语音交互支持
- [ ] 屏幕截图OCR
- [ ] 工作流自动化
- [ ] 多模型并行推理

### 📋 计划中
- [ ] 云端同步
- [ ] 团队协作
- [ ] 专业版插件
- [ ] API服务部署

## 🔧 开发指南

### 环境要求
- Node.js 18+
- npm 9+ 或 pnpm
- Android Studio (Android开发)
- Xcode (iOS开发, macOS only)

### 项目结构说明
```bash
pawbox/
├── packages/core/         # AI核心服务
│   ├── src/              # 源代码
│   ├── models/           # AI模型管理
│   └── api/              # REST API接口
├── packages/android/     # Android应用
├── packages/ios/         # iOS应用
├── packages/desktop/     # 桌面应用
├── scripts/              # 构建脚本
└── .github/workflows/    # CI/CD配置
```

### 开发命令
```bash
# 安装所有依赖
npm run setup

# 开发桌面端
npm run dev:desktop

# 开发Android
npm run dev:android

# 开发iOS
npm run dev:ios

# 运行测试
npm test

# 构建发布版本
npm run release
```

## 🤝 贡献

我们欢迎各种形式的贡献！无论是代码、文档、设计还是想法：

1. **Fork 仓库**
2. **创建功能分支** (`git checkout -b feature/amazing-feature`)
3. **提交更改** (`git commit -m 'Add some amazing feature'`)
4. **推送到分支** (`git push origin feature/amazing-feature`)
5. **开启一个 Pull Request**

请阅读 [贡献指南](CONTRIBUTING.md) 了解详细流程。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系

- **GitHub Issues**: [问题反馈](https://github.com/anycc3142887/pawbox/issues)
- **讨论区**: [GitHub Discussions](https://github.com/anycc3142887/pawbox/discussions)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！特别感谢：

- [Ollama](https://ollama.ai) 提供本地模型运行环境
- [Electron](https://www.electronjs.org) 跨平台桌面框架
- [Jetpack Compose](https://developer.android.com/jetpack/compose) 现代Android UI框架
- [SwiftUI](https://developer.apple.com/xcode/swiftui/) 声明式iOS UI框架

---

<p align="center">
  让AI触手可及 · Make AI Accessible Everywhere
</p>