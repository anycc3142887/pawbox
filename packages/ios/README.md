# PawBox iOS

<p align="center">
  <strong>PawBox iOS应用</strong><br/>
  为iPhone和iPad打造的优雅AI助手
</p>

## 📱 概述

PawBox iOS应用是基于Swift和SwiftUI构建的原生iOS应用，提供流畅的AI助手体验。利用苹果生态系统的优势，提供深度的系统集成和优秀的用户体验。

## 🏗️ 架构设计

### 技术栈
- **语言**: Swift 5.9+
- **UI框架**: SwiftUI
- **架构**: MVVM + Clean Architecture
- **依赖注入**: Factory
- **网络**: URLSession + Async/Await
- **数据库**: SwiftData
- **状态管理**: Observation Framework

### 项目结构
```
packages/ios/
├── PawBox/              # 主应用目标
│   ├── Resources/       # 资源文件
│   │   ├── Assets.xcassets      # 图片资源
│   │   ├── Localizable.strings  # 本地化
│   │   └── Info.plist           # 应用配置
│   ├── Source/          # 源代码
│   │   ├── App/         # 应用入口
│   │   │   ├── PawBoxApp.swift          # 主应用
│   │   │   ├── AppDependency.swift      # 依赖管理
│   │   │   └── AppEnvironment.swift     # 环境配置
│   │   ├── Core/        # 核心模块
│   │   │   ├── Engine/           # AI引擎桥接
│   │   │   ├── Networking/       # 网络层
│   │   │   ├── Storage/          # 存储层
│   │   │   └── Utilities/        # 工具类
│   │   ├── Features/    # 功能模块
│   │   │   ├── Chat/             # 聊天功能
│   │   │   ├── Models/           # 模型管理
│   │   │   ├── Settings/         # 设置功能
│   │   │   └── Plugins/          # 插件系统
│   │   ├── UI/          # UI组件
│   │   │   ├── Components/       # 可复用组件
│   │   │   ├── Themes/           # 主题系统
│   │   │   ├── Styles/           # 样式定义
│   │   │   └── Extensions/       # SwiftUI扩展
│   │   └── Shared/      # 共享代码
│   │       ├── Models/           # 数据模型
│   │       ├── Services/         # 共享服务
│   │       └── Protocols/        # 协议定义
├── PawBoxCore/          # 核心框架目标
│   ├── EngineBridge/    # 核心引擎桥接
│   ├── PluginSystem/    # 插件系统
│   └── ModelManager/    # 模型管理
├── PawBoxWidgets/       # 小组件目标
│   ├── QuickChatWidget/     # 快捷聊天小组件
│   └── StatsWidget/         # 统计小组件
├── PawBoxTests/         # 单元测试
└── PawBoxUITests/       # UI测试
```

## 🚀 快速开始

### 环境要求
- Xcode 16.0+
- iOS 17.0+
- macOS 14.0+ (开发环境)
- Swift 5.9+

### 项目设置
```bash
# 进入iOS目录
cd packages/ios

# 安装依赖 (如果使用SPM)
xcodebuild -resolvePackageDependencies

# 打开项目
open PawBox.xcodeproj
```

### 构建命令
```bash
# 构建调试版本
xcodebuild build -scheme PawBox -configuration Debug

# 构建发布版本
xcodebuild build -scheme PawBox -configuration Release

# 运行测试
xcodebuild test -scheme PawBox -destination 'platform=iOS Simulator,name=iPhone 15'

# 清理构建
xcodebuild clean
```

### 开发工作流
```bash
# 生成项目文件 (如果使用Tuist)
tuist generate

# 代码格式化
swiftformat .

# 代码检查
swiftlint --fix

# 生成文档
swift-doc generate Source --module-name PawBox --output Documentation
```

## 📱 功能特性

### 核心功能
- ✅ **原生体验**: 完全原生的SwiftUI界面
- ✅ **实时对话**: 流式响应，即时反馈
- ✅ **模型切换**: 本地/云端模型无缝切换
- ✅ **文件支持**: 图片、文档、PDF等
- ✅ **历史管理**: iCloud同步对话历史
- ✅ **快捷指令**: Siri快捷指令集成

### iOS专属功能
- ✅ **小组件**: 主屏幕和锁屏小组件
- ✅ **灵动岛**: 实时活动显示
- ✅ **快捷操作**: 3D Touch/Haptic Touch
- ✅ **Share Extension**: 系统分享扩展
- ✅ **Today Extension**: 今日视图小组件
- ✅ **键盘扩展**: 自定义AI键盘

### 高级功能
- 🔄 **离线优先**: 优先使用本地模型
- 🔄 **后台处理**: 后台持续运行
- 🔄 **推送通知**: AI结果推送通知
- 🔄 **场景管理**: 多窗口和场景支持
- 🔄 **无障碍**: VoiceOver完整支持
- 🔄 **动态字体**: 系统字体大小适配

## 🔧 配置指南

### Xcode项目配置
```xml
<!-- Info.plist 关键配置 -->
<key>CFBundleDisplayName</key>
<string>PawBox</string>

<key>CFBundleIdentifier</key>
<string>com.pawbox.ios</string>

<key>UIApplicationSceneManifest</key>
<dict>
    <key>UIApplicationSupportsMultipleScenes</key>
    <true/>
    <key>UISceneConfigurations</key>
    <dict>
        <key>UIWindowSceneSessionRoleApplication</key>
        <array>
            <dict>
                <key>UISceneConfigurationName</key>
                <string>Default Configuration</string>
                <key>UISceneDelegateClassName</key>
                <string>PawBox.SceneDelegate</string>
            </dict>
        </array>
    </dict>
</dict>

<!-- 权限声明 -->
<key>NSMicrophoneUsageDescription</key>
<string>用于语音输入功能</string>

<key>NSCameraUsageDescription</key>
<string>用于拍照和图片识别</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>用于选择图片和文件</string>
```

### Swift Package依赖
```swift
// Package.swift
dependencies: [
    .package(url: "https://github.com/apple/swift-algorithms", from: "1.0.0"),
    .package(url: "https://github.com/apple/swift-collections", from: "1.0.0"),
    .package(url: "https://github.com/pointfreeco/swift-composable-architecture", from: "1.0.0"),
    .package(url: "https://github.com/kean/Nuke", from: "12.0.0"),
    .package(url: "https://github.com/SwiftyJSON/SwiftyJSON", from: "5.0.0"),
    .package(path: "../core")  // PawBox Core模块
]
```

### 环境配置
```swift
// AppEnvironment.swift
enum AppEnvironment {
    static let isDebug: Bool = {
        #if DEBUG
        return true
        #else
        return false
        #endif
    }()
    
    static let apiBaseURL: URL = {
        if isDebug {
            return URL(string: "http://localhost:3000")!
        } else {
            return URL(string: "https://api.pawbox.ai")!
        }
    }()
    
    static let modelCacheDirectory: URL = {
        let paths = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask)
        return paths[0].appendingPathComponent("models", isDirectory: true)
    }()
}
```

## 📱 UI设计

### SwiftUI主题系统
```swift
// Theme.swift
struct PawBoxTheme {
    static let colors = ColorPalette()
    static let typography = Typography()
    static let spacing = Spacing()
    static let cornerRadius = CornerRadius()
}

struct ColorPalette {
    let primary = Color("Primary")
    let secondary = Color("Secondary")
    let background = Color("Background")
    let surface = Color("Surface")
    let error = Color("Error")
    let success = Color("Success")
    
    // 动态颜色支持
    @Environment(\.colorScheme) var colorScheme
    
    var adaptiveBackground: Color {
        colorScheme == .dark ? Color.black : Color.white
    }
}

// 主题应用
extension View {
    func pawBoxTheme() -> some View {
        self
            .tint(PawBoxTheme.colors.primary)
            .font(PawBoxTheme.typography.body)
    }
}
```

### 组件库
```swift
// MessageBubble.swift
struct MessageBubble: View {
    let message: Message
    let isFromUser: Bool
    
    var body: some View {
        HStack {
            if isFromUser {
                Spacer()
            }
            
            VStack(alignment: isFromUser ? .trailing : .leading, spacing: 4) {
                Text(message.content)
                    .padding(.horizontal, 16)
                    .padding(.vertical, 12)
                    .background(
                        isFromUser ? 
                        PawBoxTheme.colors.primary : 
                        PawBoxTheme.colors.surface
                    )
                    .foregroundColor(
                        isFromUser ? 
                        Color.white : 
                        PawBoxTheme.colors.onSurface
                    )
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .stroke(PawBoxTheme.colors.outline, lineWidth: 1)
                    )
                
                if let timestamp = message.timestamp {
                    Text(timestamp, style: .time)
                        .font(.caption2)
                        .foregroundColor(.secondary)
                }
            }
            
            if !isFromUser {
                Spacer()
            }
        }
        .padding(.horizontal)
        .padding(.vertical, 4)
        .transition(.opacity.combined(with: .scale))
        .animation(.spring(response: 0.3), value: message.id)
    }
}
```

### 导航系统
```swift
// AppRouter.swift
@Observable
final class AppRouter {
    enum Route: Hashable {
        case home
        case chat(conversationId: String)
        case settings
        case modelManager
        case pluginStore
    }
    
    var path = NavigationPath()
    
    func navigate(to route: Route) {
        path.append(route)
    }
    
    func pop() {
        if !path.isEmpty {
            path.removeLast()
        }
    }
    
    func popToRoot() {
        path.removeLast(path.count)
    }
}
```

## 🔧 集成核心引擎

### 引擎管理器
```swift
// EngineManager.swift
@Observable
final class EngineManager {
    private var engine: PawBoxEngine?
    private var isRunning = false
    
    var currentModel: String = "llama3.2:latest"
    var availableModels: [ModelInfo] = []
    
    init() {
        setupEngine()
    }
    
    private func setupEngine() {
        let config = EngineConfig(
            model: currentModel,
            provider: "ollama",
            temperature: 0.7,
            maxTokens: 2048,
            cacheDir: AppEnvironment.modelCacheDirectory.path
        )
        
        engine = PawBoxEngine(config: config)
    }
    
    func start() async throws {
        guard let engine = engine else { return }
        
        try await engine.start()
        isRunning = true
        
        // 加载可用模型
        availableModels = try await engine.getAvailableModels()
    }
    
    func stop() async throws {
        guard let engine = engine, isRunning else { return }
        
        try await engine.stop()
        isRunning = false
    }
    
    func chat(_ message: String) async throws -> ChatResponse {
        guard let engine = engine, isRunning else {
            throw EngineError.notRunning
        }
        
        return try await engine.chat(
            ChatOptions(
                message: message,
                temperature: 0.7,
                maxTokens: 1024
            )
        )
    }
    
    func chatStream(_ message: String) -> AsyncThrowingStream<String, Error> {
        AsyncThrowingStream { continuation in
            Task {
                do {
                    guard let engine = engine, isRunning else {
                        throw EngineError.notRunning
                    }
                    
                    let stream = try await engine.chatStream(
                        ChatOptions(message: message)
                    )
                    
                    for try await chunk in stream {
                        continuation.yield(chunk.content)
                    }
                    
                    continuation.finish()
                } catch {
                    continuation.finish(throwing: error)
                }
            }
        }
    }
}
```

### 数据模型
```swift
// SwiftData模型
@Model
final class Conversation {
    @Attribute(.unique) var id: String
    var title: String
    var createdAt: Date
    var updatedAt: Date
    var modelUsed: String
    
    @Relationship(deleteRule: .cascade) var messages: [Message] = []
    
    init(id: String = UUID().uuidString, 
         title: String, 
         modelUsed: String = "llama3.2:latest") {
        self.id = id
        self.title = title
        self.createdAt = Date()
        self.updatedAt = Date()
        self.modelUsed = modelUsed
    }
}

@Model
final class Message {
    @Attribute(.unique) var id: String
    var content: String
    var isFromUser: Bool
    var timestamp: Date
    var tokensUsed: Int?
    
    var conversation: Conversation?
    
    init(id: String = UUID().uuidString,
         content: String,
         isFromUser: Bool,
         tokensUsed: Int? = nil) {
        self.id = id
        self.content = content
        self.isFromUser = isFromUser
        self.timestamp = Date()
        self.tokensUsed = tokensUsed
    }
}
```

## 📊 性能优化

### 内存管理
```swift
// 图片缓存
struct CachedAsyncImage: View {
    let url: URL?
    
    var body: some View {
        AsyncImage(url: url) { phase in
            switch phase {
            case .empty:
                ProgressView()
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
            case .success(let image):
                image
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .transition(.opacity)
            case .failure:
                Image(systemName: "photo")
                    .foregroundColor(.secondary)
            @unknown default:
                EmptyView()
            }
        }
        .background(Color(.systemGray6))
        .clipShape(RoundedRectangle(cornerRadius: 8))
    }
}
```

### 网络优化
```swift
// 网络服务
actor NetworkService {
    private let session: URLSession
    private let decoder: JSONDecoder
    
    init() {
        let configuration = URLSessionConfiguration.default
        configuration.timeoutIntervalForRequest = 30
        configuration.timeoutIntervalForResource = 60
        configuration.httpMaximumConnectionsPerHost = 6
        configuration.requestCachePolicy = .returnCacheDataElseLoad
        
        self.session = URLSession(configuration: configuration)
        self.decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .iso8601
    }
    
    func request<T: Decodable>(_ endpoint: Endpoint) async throws -> T {
        var request = URLRequest(url: endpoint.url)
        request.httpMethod = endpoint.method.rawValue
        request.allHTTPHeaderFields = endpoint.headers
        
        if let body = endpoint.body {
            request.httpBody = try JSONEncoder().encode(body)
        }
        
        let (data, response) = try await session.data(for: request)
        
        guard let httpResponse = response as? HTTPURLResponse,
              (200...299).contains(httpResponse.statusCode) else {
            throw NetworkError.invalidResponse
        }
        
        return try decoder.decode(T.self, from: data)
    }
}
```

### 数据库优化
```swift
// SwiftData配置
struct StorageManager {
    static let shared = StorageManager()
    
    let container: ModelContainer
    
    private init() {
        let schema = Schema([
            Conversation.self,
            Message.self
        ])
        
        let modelConfiguration = ModelConfiguration(
            schema: schema,
            isStoredInMemoryOnly: false,
            allowsSave: true,
            cloudKitDatabase: .private("iCloud.com.pawbox.ios")
        )
        
        container = try! ModelContainer(
            for: schema,
            configurations: [modelConfiguration]
        )
    }
    
    @MainActor
    var context: ModelContext {
        container.mainContext
    }
}
```

## 🧪 测试

### 单元测试
```swift
import Testing
@testable import PawBox

@Test func testEngineManagerInitialization() async throws {
    // Given
    let manager = EngineManager()
    
    // When
    try await manager.start()
    
    // Then
    #expect(manager.isRunning == true)
    #expect(manager.availableModels.isEmpty == false)
}

@Test func testChatFunctionality() async throws {
    // Given
    let manager = EngineManager()
    let testMessage = "Hello, how are you?"
    
    // When
    try await manager.start()
    let response = try await manager.chat(testMessage)
    
    // Then
    #expect(response.content.isEmpty == false)
    #expect(response.tokens > 0)
}

@Test func testStreamingChat() async throws {
    // Given
    let manager = EngineManager()
    let testMessage = "Write a short story"
    var receivedChunks: [String] = []
    
    // When
    try await manager.start()
    let stream = manager.chatStream(testMessage)
    
    for try await chunk in stream {
        receivedChunks.append(chunk)
    }
    
    // Then
    #expect(receivedChunks.isEmpty == false)
}
```

### UI测试
```swift
import XCTest

final class PawBoxUITests: XCTestCase {
    var app: XCUIApplication!
    
    override func setUp() {
        super.setUp()
        continueAfterFailure = false
        
        app = XCUIApplication()
        app.launchArguments = ["-ui-testing"]
        app.launch()
    }
    
    func testChatInterface() {
        // 找到输入框
        let messageInput = app.textFields["message_input"]
        XCTAssertTrue(messageInput.exists)
        
        // 输入消息
        messageInput.tap()
        messageInput.typeText("Hello, AI!")
        
        // 点击发送按钮
        let sendButton = app.buttons["send_button"]
        XCTAssertTrue(sendButton.exists)
        sendButton.tap()
        
        // 验证消息显示
        let messageBubble = app.otherElements["message_bubble"].firstMatch
        XCTAssertTrue(messageBubble.waitForExistence(timeout: 5))
    }
    
    func testModelSwitching() {
        // 打开设置
        let settingsButton = app.buttons["settings_button"]
        XCTAssertTrue(settingsButton.exists)
        settingsButton.tap()
        
        // 切换到模型管理
        let modelsTab = app.buttons["models_tab"]
        XCTAssertTrue(modelsTab.exists)
        modelsTab.tap()
        
        // 选择不同模型
        let modelCell = app.cells["model_cell_llama3"].firstMatch
        XCTAssertTrue(modelCell.exists)
        modelCell.tap()
        
        // 返回聊天界面
        app.navigationBars.buttons.firstMatch.tap()
    }
}
```

## 📦 发布流程

### 证书和配置文件
```bash
# 创建App ID
fastlane produce create -a com.pawbox.ios

# 创建开发证书
fastlane match development

# 创建发布证书
fastlane match appstore

# 下载配置文件
fastlane match nuke development
```

### 测试版本发布
```bash
# 构建测试版本
fastlane build_for_testing

# 上传到TestFlight
fastlane pilot upload --skip_submission

# 分发测试
fastlane testflight_beta_groups groups:internal,external
```

### 生产发布
```bash
# 构建发布版本
fastlane gym --scheme PawBox --configuration Release

# 上传到App Store Connect
fastlane deliver --skip_metadata --skip_screenshots

# 提交审核
fastlane pilot submit --skip_waiting_for_build_processing true
```

## 🚨 故障排除

### 常见问题
1. **构建失败**
   - 检查Xcode版本兼容性
   - 清理DerivedData：`rm -rf ~/Library/Developer/Xcode/DerivedData`
   - 重置Package缓存：`xcodebuild -resolvePackageDependencies`

2. **运行时崩溃**
   - 检查iOS版本要求
   - 验证权限配置
   - 查看控制台日志

3. **网络连接问题**
   - 检查ATS配置
   - 验证网络权限
   - 测试API端点

### 调试工具
- **Xcode Debugger**: LLDB调试
- **Instruments**: 性能分析
- **Console.app**: 系统日志查看
- **Network Link Conditioner**: 网络模拟
- **View Debugger**: UI层级调试

## 📄 许可证

MIT License - 详见 [LICENSE](../LICENSE)

## 🤝 贡献

欢迎贡献代码、设计、测试或文档！请阅读[贡献指南](../CONTRIBUTING.md)。

---

<p align="center">
  <em>为iOS设备带来优雅的AI助手体验</em>
</p>