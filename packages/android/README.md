# PawBox Android

<p align="center">
  <strong>PawBox Android应用</strong><br/>
  为Android设备打造的便携AI助手
</p>

## 📱 概述

PawBox Android应用是基于Kotlin和Jetpack Compose构建的现代化AI助手应用。它提供了完整的移动端AI体验，支持离线模型运行、实时对话、文件处理等功能。

## 🏗️ 架构设计

### 技术栈
- **语言**: Kotlin
- **UI框架**: Jetpack Compose
- **架构**: MVVM + Clean Architecture
- **依赖注入**: Hilt
- **网络**: Retrofit + OkHttp
- **数据库**: Room
- **异步**: Kotlin Coroutines + Flow

### 项目结构
```
packages/android/
├── app/                   # 应用主模块
│   ├── src/main/
│   │   ├── java/com/pawbox/
│   │   │   ├── MainActivity.kt      # 主Activity
│   │   │   ├── di/                  # 依赖注入
│   │   │   ├── ui/                  # UI组件
│   │   │   │   ├── theme/           # 主题和样式
│   │   │   │   ├── components/      # 可复用组件
│   │   │   │   ├── screens/         # 各功能页面
│   │   │   │   └── navigation/      # 导航
│   │   │   ├── domain/              # 领域层
│   │   │   │   ├── models/          # 数据模型
│   │   │   │   ├── repositories/    # 仓库接口
│   │   │   │   └── usecases/        # 用例
│   │   │   └── data/                # 数据层
│   │   │       ├── local/           # 本地数据源
│   │   │       ├── remote/          # 远程数据源
│   │   │       └── repositories/    # 仓库实现
│   │   └── res/                     # 资源文件
├── core-android/         # Android核心模块
│   ├── engine/           # AI引擎适配层
│   ├── plugins/          # Android专用插件
│   └── utils/            # 工具类
└── build.gradle.kts      # 构建配置
```

## 🚀 快速开始

### 环境要求
- Android Studio Flamingo (2024.3.1) 或更高
- Android SDK 34 (Android 14)
- JDK 17+

### 构建应用
```bash
# 进入Android目录
cd packages/android

# 同步Gradle
./gradlew sync

# 构建调试版本
./gradlew assembleDebug

# 构建发布版本
./gradlew assembleRelease

# 安装到设备
./gradlew installDebug
```

### 开发模式
```bash
# 启动开发服务器
./gradlew runDevServer

# 运行单元测试
./gradlew test

# 运行UI测试
./gradlew connectedAndroidTest

# 代码检查
./gradlew lint

# 格式化代码
./gradlew spotlessApply
```

## 📱 功能特性

### 核心功能
- ✅ **对话界面**: 美观的聊天界面，支持Markdown渲染
- ✅ **模型管理**: 本地和云端模型切换
- ✅ **语音输入**: 语音转文本，支持多语言
- ✅ **文件处理**: 图片、文档、PDF等文件上传
- ✅ **历史记录**: 对话历史保存和搜索
- ✅ **快捷指令**: 自定义快捷命令和模板

### 高级功能
- 🔄 **离线模式**: 完全离线运行，不依赖网络
- 🔄 **后台服务**: 常驻后台，随时唤醒
- 🔄 **通知集成**: AI结果通过通知展示
- 🔄 **小组件**: 桌面小组件快速访问
- 🔄 **主题切换**: 深色/浅色主题，自定义主题

### Android专属功能
- 🔄 **系统集成**: 与Android系统深度集成
- 🔄 **权限管理**: 智能权限请求和管理
- 🔄 **电池优化**: 低功耗设计，电池友好
- 🔄 **多窗口**: 支持分屏和多窗口模式
- 🔄 **Material You**: 动态主题颜色适配

## 🔧 配置指南

### 应用配置
```kotlin
// app/build.gradle.kts
android {
    namespace = "com.pawbox.android"
    compileSdk = 34
    
    defaultConfig {
        applicationId = "com.pawbox.android"
        minSdk = 26  // Android 8.0
        targetSdk = 34
        versionCode = 1
        versionName = "1.0.0"
    }
    
    buildFeatures {
        compose = true
        buildConfig = true
    }
    
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.7"
    }
}
```

### 依赖配置
```kotlin
// 核心依赖
dependencies {
    // Compose
    implementation("androidx.compose.ui:ui:1.6.0")
    implementation("androidx.compose.material3:material3:1.2.0")
    implementation("androidx.compose.runtime:runtime-livedata:1.6.0")
    
    // 架构组件
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.7.0")
    implementation("androidx.lifecycle:lifecycle-runtime-compose:2.7.0")
    
    // 数据库
    implementation("androidx.room:room-runtime:2.6.1")
    implementation("androidx.room:room-ktx:2.6.1")
    
    // 网络
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.okhttp3:logging-interceptor:4.12.0")
    
    // 图像处理
    implementation("io.coil-kt:coil-compose:2.5.0")
    
    // PawBox Core
    implementation(project(":packages:core"))
}
```

### 权限配置
```xml
<!-- AndroidManifest.xml -->
<manifest>
    <!-- 网络权限 -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    
    <!-- 存储权限 -->
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    
    <!-- 语音权限 -->
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    
    <!-- 后台服务 -->
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
    
    <!-- 电池优化豁免 -->
    <uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" />
</manifest>
```

## 📱 UI设计

### 主题系统
```kotlin
// Theme.kt
@Composable
fun PawBoxTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }
        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }
    
    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        shapes = Shapes,
        content = content
    )
}
```

### 导航系统
```kotlin
// 定义导航图
sealed class Screen(val route: String) {
    object Home : Screen("home")
    object Chat : Screen("chat/{conversationId}") {
        fun createRoute(conversationId: String) = "chat/$conversationId"
    }
    object Settings : Screen("settings")
    object ModelManager : Screen("models")
    object PluginStore : Screen("plugins")
}
```

### 组件库
```kotlin
// 自定义组件
@Composable
fun MessageBubble(
    message: Message,
    isUser: Boolean,
    onLongPress: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onLongPress() },
        colors = CardDefaults.cardColors(
            containerColor = if (isUser) 
                MaterialTheme.colorScheme.primaryContainer 
            else 
                MaterialTheme.colorScheme.surfaceVariant
        ),
        shape = if (isUser) 
            RoundedCornerShape(16.dp, 4.dp, 16.dp, 16.dp)
        else 
            RoundedCornerShape(4.dp, 16.dp, 16.dp, 16.dp)
    ) {
        // 消息内容
    }
}
```

## 🔧 集成核心引擎

### 引擎服务
```kotlin
// EngineService.kt
class EngineService : Service() {
    private lateinit var engine: PawBoxEngine
    
    override fun onCreate() {
        super.onCreate()
        engine = PawBoxEngine(
            config = EngineConfig(
                model = "llama3.2:latest",
                provider = "ollama",
                cacheDir = "${filesDir.absolutePath}/models"
            )
        )
        
        engine.start()
    }
    
    fun chat(message: String): Flow<String> {
        return engine.chatStream(ChatOptions(message = message))
            .map { it.content }
            .flowOn(Dispatchers.IO)
    }
}
```

### 状态管理
```kotlin
// ChatViewModel.kt
class ChatViewModel @Inject constructor(
    private val engineService: EngineService
) : ViewModel() {
    
    private val _messages = MutableStateFlow<List<Message>>(emptyList())
    val messages: StateFlow<List<Message>> = _messages.asStateFlow()
    
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()
    
    fun sendMessage(text: String) {
        viewModelScope.launch {
            val userMessage = Message(
                id = UUID.randomUUID().toString(),
                content = text,
                isUser = true,
                timestamp = System.currentTimeMillis()
            )
            
            _messages.update { it + userMessage }
            _isLoading.value = true
            
            try {
                val response = engineService.chat(text)
                response.collect { chunk ->
                    // 处理流式响应
                }
            } catch (e: Exception) {
                // 错误处理
            } finally {
                _isLoading.value = false
            }
        }
    }
}
```

## 📊 性能优化

### 内存优化
```kotlin
// 图片加载优化
@Composable
fun OptimizedImage(
    url: String,
    modifier: Modifier = Modifier
) {
    AsyncImage(
        model = ImageRequest.Builder(LocalContext.current)
            .data(url)
            .crossfade(true)
            .memoryCachePolicy(CachePolicy.ENABLED)
            .diskCachePolicy(CachePolicy.ENABLED)
            .size(Size.ORIGINAL)
            .build(),
        contentDescription = null,
        modifier = modifier
    )
}
```

### 网络优化
```kotlin
// 网络配置
val okHttpClient = OkHttpClient.Builder()
    .connectTimeout(30, TimeUnit.SECONDS)
    .readTimeout(60, TimeUnit.SECONDS)
    .writeTimeout(60, TimeUnit.SECONDS)
    .addInterceptor(ChuckerInterceptor(context))
    .cache(Cache(File(context.cacheDir, "http_cache"), 50 * 1024 * 1024))
    .build()
```

### 数据库优化
```kotlin
// Room数据库配置
@Database(
    entities = [Conversation::class, Message::class],
    version = 1,
    exportSchema = false
)
@TypeConverters(Converters::class)
abstract class AppDatabase : RoomDatabase() {
    abstract fun conversationDao(): ConversationDao
    abstract fun messageDao(): MessageDao
    
    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null
        
        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "pawbox_database"
                )
                .addMigrations(MIGRATION_1_2)
                .setQueryCallback({ sqlQuery, bindArgs ->
                    Log.d("RoomSQL", "SQL Query: $sqlQuery")
                }, Dispatchers.IO)
                .build()
                INSTANCE = instance
                instance
            }
        }
    }
}
```

## 🧪 测试

### 单元测试
```kotlin
class ChatViewModelTest {
    
    @get:Rule
    val testDispatcher = TestDispatcherRule()
    
    private lateinit var viewModel: ChatViewModel
    private val mockEngineService = mockk<EngineService>()
    
    @Before
    fun setup() {
        viewModel = ChatViewModel(mockEngineService)
    }
    
    @Test
    fun `sendMessage should add user message to list`() = runTest {
        // Given
        val testMessage = "Hello, AI!"
        
        // When
        viewModel.sendMessage(testMessage)
        
        // Then
        val messages = viewModel.messages.first()
        assertTrue(messages.isNotEmpty())
        assertEquals(testMessage, messages.last().content)
        assertTrue(messages.last().isUser)
    }
}
```

### UI测试
```kotlin
class ChatScreenTest {
    
    @get:Rule
    val composeTestRule = createComposeRule()
    
    @Test
    fun chatScreen_shouldDisplayInputField() {
        composeTestRule.setContent {
            PawBoxTheme {
                ChatScreen()
            }
        }
        
        composeTestRule.onNodeWithTag("message_input").assertIsDisplayed()
        composeTestRule.onNodeWithTag("send_button").assertIsDisplayed()
    }
    
    @Test
    fun whenMessageSent_shouldAppearInList() {
        // UI测试实现
    }
}
```

## 📦 发布流程

### 版本管理
```groovy
// version.gradle
ext {
    versionCode = 100  // 递增整数
    versionName = "1.0.0-alpha01"
    
    // 构建变体
    buildVariants = [
        debug: {
            applicationIdSuffix ".debug"
            versionNameSuffix "-debug"
        },
        release: {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt')
            signingConfig signingConfigs.release
        }
    ]
}
```

### 发布到Play Store
1. **准备发布版本**
   ```bash
   ./gradlew bundleRelease
   ```
   
2. **生成AAB文件**
   ```
   app/build/outputs/bundle/release/app-release.aab
   ```

3. **测试发布**
   ```bash
   ./gradlew assembleRelease
   # 在内部测试轨道上传APK
   ```

4. **生产发布**
   - 创建Play Console发布
   - 填写版本说明
   - 设置发布比例
   - 审核通过后发布

## 🚨 故障排除

### 常见问题
1. **构建失败**
   - 检查Gradle版本兼容性
   - 清理构建缓存：`./gradlew clean`
   - 更新依赖：`./gradlew dependencies`

2. **运行时崩溃**
   - 检查Android版本兼容性
   - 验证权限请求
   - 查看Logcat日志

3. **网络问题**
   - 检查网络权限
   - 验证代理设置
   - 测试API端点可达性

### 调试工具
- **Logcat**: 查看应用日志
- **Android Profiler**: 性能分析
- **Layout Inspector**: UI布局调试
- **Database Inspector**: 数据库查看
- **Network Profiler**: 网络请求分析

## 📄 许可证

MIT License - 详见 [LICENSE](../LICENSE)

## 🤝 贡献

欢迎贡献代码、设计、测试或文档！请阅读[贡献指南](../CONTRIBUTING.md)。

---

<p align="center">
  <em>让AI在你的Android设备上随时待命</em>
</p>