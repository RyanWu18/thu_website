# 清华大学热质传递与热系统课题组网站

## 项目概述

本项目为清华大学热质传递与热系统课题组设计的官方网站，采用现代化的React技术栈开发，具备响应式设计和丝滑动画效果。

## 技术特性

- **前端框架**: React 18 + Vite
- **样式框架**: Tailwind CSS
- **动画库**: Framer Motion
- **图标库**: Lucide React
- **路由**: React Router DOM
- **响应式设计**: 支持桌面端和移动端
- **现代化UI**: 清华紫主题色彩，专业的学术风格

## 网站结构

### 主要页面
1. **首页** - 轮播图、课题组简介、最新动态、统计数据
2. **研究团队** - 全职教师、特聘专家、兼职专家、博士后、博/硕士生、组内毕业生
3. **人才培养** - 本科生课程、研究生课程、学生活动
4. **研究内容** - 六大研究方向、研究亮点、实验设施、合作交流
5. **研究成果** - 期刊论文、学术著作、学术影响力
6. **科研项目** - 国家重点研发计划、国家自然科学基金、省部级课题、横向课题
7. **数据下载** - 数据总览、数据集、开源代码、论文资料

### 核心功能
- 轮播图自动播放和手动控制
- 导航栏下拉菜单
- 页面间平滑过渡动画
- 响应式布局适配
- 搜索和筛选功能
- 分类标签导航

## 文件结构

```
tsinghua-thermal-lab-github/
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 图片素材
│   │   ├── carousel/      # 轮播图
│   │   ├── team/          # 团队成员照片
│   │   └── research/      # 研究相关图片
│   ├── components/
│   │   ├── pages/         # 页面组件
│   │   │   ├── Home.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Research.jsx
│   │   │   ├── Publications.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Downloads.jsx
│   │   ├── ui/            # UI组件
│   │   │   └── Carousel.jsx
│   │   ├── Header.jsx     # 导航栏
│   │   └── Footer.jsx     # 页脚
│   ├── App.jsx            # 主应用组件
│   ├── App.css            # 全局样式
│   └── main.jsx           # 入口文件
├── dist/                  # 构建输出目录
├── package.json           # 项目配置
├── vite.config.js         # Vite配置
└── README.md             # 项目说明
```

## 开发指南

### 环境要求
- Node.js 18+
- npm 或 pnpm

### 安装依赖
```bash
cd tsinghua-thermal-lab-github
pnpm install
```

### 开发模式
```bash
pnpm run dev
```
访问 `http://localhost:5173`

### 生产构建
```bash
pnpm run build
```
构建文件输出到 `dist/` 目录

### 预览构建
```bash
pnpm run preview
```

## GitHub Pages 部署说明

1. **创建GitHub仓库**: 在GitHub上创建一个新的公共仓库，例如 `tsinghua-thermal-lab-website`。

2. **配置`package.json`**: 确保 `package.json` 文件中包含 `homepage` 字段，并将其值设置为您的GitHub Pages URL，格式如下：
   ```json
   "homepage": "https://[你的GitHub用户名].github.io/[你的仓库名]/",
   ```
   例如，如果您的GitHub用户名为 `your-username`，仓库名为 `tsinghua-thermal-lab-website`，则应设置为：
   ```json
   "homepage": "https://your-username.github.io/tsinghua-thermal-lab-website/",
   ```

3. **安装`gh-pages`**: 在项目根目录安装 `gh-pages` 包：
   ```bash
   pnpm install gh-pages --save-dev
   ```

4. **修改`package.json`脚本**: 在 `package.json` 的 `scripts` 中添加 `predeploy` 和 `deploy` 脚本：
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build --base=./",
     "lint": "eslint .",
     "preview": "vite preview",
     "predeploy": "pnpm run build",
     "deploy": "gh-pages -d dist"
   },
   ```
   注意：`build` 脚本已修改为 `vite build --base=./`，以确保构建出的静态资源路径正确。

5. **部署到GitHub Pages**: 运行部署命令：
   ```bash
   pnpm run deploy
   ```
   这将会构建您的项目，并将 `dist` 目录的内容推送到GitHub仓库的 `gh-pages` 分支。GitHub Pages会自动从该分支部署您的网站。
