## 实现计划

### 1. 依赖安装
- 安装TailwindCSS用于样式设计
- 安装Framer Motion用于动画效果
- 安装react-syntax-highlighter用于代码高亮
- 安装lottie-react用于Lottie动画支持

### 2. 项目结构调整
```
src/
  components/
    Hero/                  # 欢迎Hero区
    SideNavigation/        # 侧边导航栏
    FeatureTabs/           # 产品功能展示区
    CodeDemo/              # 智能标注示例区
    GanttScrollView/       # 功能流程展示区
    ValueHighlights/       # 产品价值亮点区
    TeamMembers/           # 团队成员展示区
    Footer/                # 产品背景与版权说明区
  assets/
    images/                # 图片资源
    videos/                # 视频资源
    lottie/                # Lottie动画资源
  App.jsx                  # 主应用组件
  main.jsx                 # 应用入口
  index.css                # 全局样式
```

### 3. 功能实现

#### 3.1 全局样式设置
- 配置TailwindCSS
- 设置深色古籍+科技双风格融合主视觉
- 定义主题色（金棕、墨黑、霓虹蓝、紫光）

#### 3.2 侧边导航栏
- 实现隐藏/呼出功能
- 支持锚点跳转
- 自动高亮当前区域
- 添加滑入动画

#### 3.3 各区域实现

**3.3.1 欢迎Hero区**
- 实现暗色渐变背景
- 添加3D Blob漂浮效果
- 添加标题和副标题
- 实现CTA按钮

**3.3.2 产品功能展示区**
- 实现浮层卡片效果
- 添加Tab切换功能
- 支持视频/Lottie动画展示
- 添加卡片悬浮效果

**3.3.3 智能标注示例区**
- 实现左右分栏布局
- 添加示例文档和标注结果
- 实现代码高亮展示

**3.3.4 功能流程展示区**
- 实现横向滚动甘特图
- 添加SVG甘特图占位
- 实现淡入动画

**3.3.5 产品价值亮点区**
- 实现三大价值亮点展示
- 添加图标和动画效果

**3.3.6 团队成员展示区**
- 实现圆形头像+名称+职责标签
- 支持响应式布局

**3.3.7 产品背景与版权说明区**
- 添加开发团队信息
- 添加版权声明

### 4. 动画效果
- 所有区域添加Fade、Scale、Translate入场动画
- 实现平滑滚动效果
- 添加按钮hover效果
- 实现Tab切换动画

### 5. 响应式设计
- 确保在不同屏幕尺寸下正常显示
- 调整移动端布局

### 6. 测试与优化
- 测试所有功能和动画
- 优化性能
- 确保代码质量

## 技术栈
- Vite + React
- TailwindCSS
- Framer Motion
- react-syntax-highlighter
- lottie-react

## 素材使用
- 使用公共占位素材（Unsplash图片、Codepen 3D Blob、Lottie动画等）
- 按照设计文档要求的素材占位方案实现