<div align="center">

<h1 style="margin: 30px 0 30px; font-weight: bold;">SpaceMV-CoAI-Wp-PC-Frontend: 产业星球运营智能体之SpaceMV-CoAI-Wp（企业官网）React前端（PC端）</h1>

<a href="./LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="License"></a> <a href="https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" alt="Maintenance"></a> <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>

</div>

<div align="center">

<a href="./README.md"><strong>简体中文</strong></a> | <a href="./README_EN.md"><strong>English</strong></a>

</div>

&nbsp;&nbsp;

<div align="center">

<img width="800" height="450" alt="SpaceMV-CoAI-Wp-PC-Frontend" src="./public/spacemv_coo.png" />

</div>

[SpaceMV-CoAI-Wp-PC-Frontend](https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend)是由成都天巡微小卫星科技有限责任公司研发的产业星球运营智能体之SpaceMV-CoAI-Wp（企业官网）PC端展示项目，作为SpaceMV-CoAI产业星球运营智能体中SpaceMV-CoAI-Wp（企业官网）模块的前端PC端展示组件，负责将后台管理的官网内容以现代化、响应式的方式呈现给用户，实现官网内容的实时同步展示。

[SpaceMV-CoAI-Wp-PC-Frontend](https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend)作为产业星球运营智能体之SpaceMV-CoAI-Wp（企业官网）PC端前端展示系统，具备响应式布局、内容实时同步展示功能，可将后台管理的SpaceMV-CoAI-Wp（企业官网）内容以现代化、美观的方式呈现给用户，还能通过优化的加载性能，为访问者提供流畅的浏览体验，助力提升品牌形象和用户转化率。

`SpaceMV-CoAI-Wp-PC-Frontend`作为产业星球运营智能体之SpaceMV-CoAI-Wp（企业官网）PC端前端展示系统，承担SpaceMV-CoAI-Wp（企业官网）内容现代化呈现的关键职能。

## **目录**

* [核心模块](#核心模块)
* [技术架构](#技术架构)
* [功能特性](#功能特性)
* [快速开始](#快速开始)
* [贡献指南](#贡献指南)
* [许可证](#许可证)
* [联系方式](#联系方式)
* [待办事项](#待办事项)

## 核心模块
~~~
SpaceMV-CoAI-Wp-PC-Frontend/
├── 核心框架层
│   ├── 路由管理        // 负责页面路由配置，使用 React Router
│   ├── 状态管理        // 管理应用全局状态，使用 Redux Toolkit
│   ├── 工具库          // 提供通用工具函数，如路径处理等
│   └── 服务配置        // 配置 axios 请求拦截器和响应处理
├── 业务模块层
│   ├── 首页模块        // 展示公司主页内容，包括轮播图、产品展示等
│   ├── 关于我们模块    // 展示公司介绍、发展历程等信息
│   ├── 产品一模块      // 展示产品一相关内容，包括文章列表和经典案例
│   ├── 新闻中心模块    // 展示公司新闻和行业资讯
│   └── 产品二模块      // 展示产品二相关产品和解决方案
├── 组件层
│   ├── 轮播图组件      // 实现首页轮播图功能
│   ├── 联系我们组件    // 展示联系信息和地图
│   ├── 分页组件        // 实现文章列表分页功能
│   ├── 页脚组件        // 展示网站底部信息
│   ├── 头部组件        // 展示网站导航栏和Logo
│   └── 提示组件        // 实现全局消息提示功能
├── API 接口层
│   ├── 公司接口        // 获取公司相关信息
│   ├── 主页接口        // 获取首页展示内容
│   ├── 产品接口        // 获取产品相关信息
│   └── 顶部按钮接口    // 获取顶部按钮配置
└── 资源层
    ├── 静态资源        // 图片、图标等静态文件
    └── 样式文件        // 全局样式和主题配置
~~~

## 技术架构

### 目录结构

SpaceMV-CoAI-Wp-PC-Frontend/  
├── public/                   \# 公共资源  
│   ├── about/                \# 关于我们页面静态资源  
│   ├── contact-us/           \# 联系我们页面静态资源  
│   ├── header/               \# 头部组件静态资源  
│   ├── news/                 \# 新闻中心页面静态资源   
│   ├── office-nav/           \# 办公导航相关静态资源  
│   ├── favicon.png           \# 网站图标  
│   ├── icon.js               \# 图标脚本  
│   └── icon.png               \# 图标图片  
│  
├── src/                      \# 源代码目录  
│   ├── api/                  \# API 接口  
│   │   ├── company/          \# 公司相关接口  
│   │   ├── mainPage/         \# 主页相关接口  
│   │   ├── product/          \# 产品相关接口  
│   │   └── topButton/        \# 顶部按钮相关接口  
│   │  
│   ├── components/           \# 公共组件  
│   │   ├── carousel/          \# 轮播图组件  
│   │   ├── contact-us/        \# 联系我们组件  
│   │   ├── cus-pagination/    \# 自定义分页组件  
│   │   ├── footer/            \# 页脚组件  
│   │   ├── header/            \# 头部组件  
│   │   ├── iconfont/          \# 图标字体组件  
│   │   └── toast/             \# 提示组件  
│   │  
│   ├── pages/                \# 页面视图  
│   │   ├── about-us/          \# 关于我们页面  
│   │   ├── home/              \# 首页  
│   │   ├── large-model/       \# 产品一页面  
│   │   │   ├── article-list/   \# 文章列表子页面  
│   │   │   └── classic-case/   \# 经典案例子页面  
│   │   ├── news-center/       \# 新闻中心页面  
│   │   └── small-device/      \# 产品二页面  
│   │  
│   ├── router/               \# 路由配置  
│   ├── services/             \# 服务配置  
│   │   └── axiosConfig.ts     \# Axios 配置  
│   │  
│   ├── store/                \# 状态管理  
│   │   ├── modules/           \# 状态管理模块  
│   │   │   ├── companyReducer/  \# 公司信息状态管理  
│   │   │   └── menuReducer/     \# 菜单状态管理  
│   │   └── index.ts           \# 状态管理入口  
│   │  
│   ├── styles/               \# 样式文件  
│   │   └── theme.less         \# 主题样式  
│   │  
│   ├── utils/                \# 工具函数  
│   │   └── pathUtils.ts       \# 路径工具函数  
│   │  
│   ├── App.tsx               \# 根组件  
│   ├── index.less            \# 全局样式  
│   ├── main.tsx              \# 入口文件  
│   └── vite-env.d.ts         \# Vite 环境类型声明  
│  
├── .editorconfig             \# 编辑器配置  
├── .env                      \# 环境配置  
├── .env.development          \# 开发环境配置  
├── .env.production           \# 生产环境配置  
├── .eslintignore             \# ESLint 忽略文件  
├── .eslintrc                 \# ESLint 配置  
├── .gitignore                \# Git 忽略文件  
├── .npmrc                    \# npm 配置  
├── .prettierignore           \# Prettier 忽略文件  
├── .prettierrc.cjs           \# Prettier 配置  
├── .stylelintrc.js           \# Stylelint 配置  
├── README.md                 \# 项目说明  
├── index.html                \# 入口 HTML  
├── package.json              \# 项目依赖  
├── tailwind.config.js        \# Tailwind CSS 配置  
├── tsconfig.app.json         \# TypeScript 应用配置  
├── tsconfig.json             \# TypeScript 配置  
├── tsconfig.node.json        \# TypeScript Node 配置  
└── vite.config.ts            \# Vite 配置

### 技术栈

| 领域 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **前端框架** | **React 19** | 声明式 JavaScript 库 |
| | **TypeScript** | 类型安全的 JavaScript 超集 |
| | **React Router** | 官方路由管理器 |
| | **Redux Toolkit** | 高效的状态管理库 |
| | **Redux Persist** | Redux 持久化存储 |
| | **Ant Design Icons** | 图标库 |
| **样式** | **Less** | CSS 预处理器 |
| | **Tailwind CSS** | 实用优先的 CSS 框架 |
| | **CSS Modules** | 模块化 CSS 解决方案 |
| | **Normalize.css** | CSS 重置样式 |
| **网络请求** | **Axios** | 基于 Promise 的 HTTP 客户端 |
| **构建工具** | **Vite** | 快速的前端构建工具 |
| | **ESLint** | 代码质量检查工具 |
| | **Prettier** | 代码格式化工具 |
| | **Stylelint** | CSS 代码质量检查工具 |
| **工具库** | **classnames** | CSS 类名管理工具 |

### 数据流向

graph TD  
    A\[用户操作\] \-\-\>|触发事件| B\[React 组件\]  
    B \-\-\>|调用 API| C\[API 接口层\]  
    C \-\-\>|发送请求| D\[后端服务\]  
    D \-\-\>|返回数据| C  
    C \-\-\>|响应数据| B  
    B \-\-\>|dispatch 动作| E\[Redux Toolkit 状态管理\]  
    E \-\-\>|状态持久化| F\[Redux Persist\]  
    F \-\-\>|持久化数据| E  
    E \-\-\>|状态变化| B  
    B \-\-\>|渲染页面| G\[用户界面\]

## 功能特性

### 官网展示模块

* **首页展示**: 展示公司概况、核心产品和服务、轮播图等内容。
* **关于我们**: 展示公司简介、发展历程、团队介绍等信息。
* **产品一**: 展示产品一相关内容，包括文章列表和经典案例。
* **新闻中心**: 展示公司新闻和行业资讯，支持文章列表浏览。
* **产品二**: 展示产品二相关产品和解决方案。

## 快速开始

### 前置条件

* **Node.js** (v16.0 或更高版本)  
* **npm** 包管理器  
* **Git** 版本控制工具

### 1. 环境准备
```bash
# 克隆仓库  
git clone https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend.git   
cd SpaceMV-CoAI-Wp-PC-Frontend

# 安装依赖  
npm install
```
### 2. 环境变量配置
```ini
项目已包含以下环境配置文件：

- .env                # 基础环境配置
- .env.development    # 开发环境配置
- .env.production     # 生产环境配置

如需修改配置，编辑对应环境的配置文件即可。
```
### 3. 启动开发服务器
```bash
# 启动开发服务器  
npm run dev
```

开发服务器启动后，可通过浏览器访问 `http://localhost:5173` 查看项目。

### 4. 构建版本

#### 4.1 构建生产版本
```bash
# 构建生产版本  
npm run build
```

构建完成后，生产版本的文件会生成在 `dist` 目录中。如需部署到后端项目，请将构建的dist包放到后端代码工程中ruoyi-ui/dist目录下。

#### 4.2 构建开发版本
```bash
# 构建开发版本  
npm run build:dev
```

### 5. 代码格式化与检查
```bash
# 代码格式化  
npm run format

# 代码质量检查  
npm run lint
```

### 6. 预览构建结果
```bash
# 预览构建结果  
npm run preview
```

## 贡献指南

我们非常欢迎社区开发者参与 SpaceMV-CoAI-Wp-PC-Frontend 项目的建设！如果您有任何改进建议或发现了 Bug，请遵循以下流程：

1. **Fork 本仓库**：点击右上角的 Fork 按钮将项目复制到您的 GitHub 账户。  
2. **创建分支**：从 main 分支切出一个新分支用于开发。  
   git checkout -b feature/AmazingFeature  
3. **提交更改**：确保代码风格统一，并撰写清晰的 Commit Message。  
   git commit -m 'feat: Add some AmazingFeature'  
4. **推送分支**：  
   git push origin feature/AmazingFeature  
5. **提交 Pull Request**：在 GitHub 上发起 PR，并详细描述您的更改内容。

**开发建议**：

* **代码风格**：遵循项目的代码风格规范，确保代码可读性。
* **组件设计**：开发新组件时，确保组件的复用性和可维护性。
* **API 调用**：添加新 API 调用时，遵循现有的模块化组织方式。
* **样式管理**：使用 Less 变量和混合器，结合 Tailwind CSS 工具类，确保样式的一致性和可维护性。
* **测试**：为新功能添加适当的测试用例，确保代码质量。

## 许可证

本项目采用 MIT 许可证。

Copyright (c) 2026 成都天巡微小卫星科技有限责任公司

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## 联系方式

如有任何问题、建议或商务合作需求，请联系项目维护团队。

* **Email**: code@spacemv.com  
* **Issues**: [GitHub Issues](https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend/issues)

更多信息可关注公司微信公众号：
<img width="106" height="106" alt="image" src="https://github.com/user-attachments/assets/69a02ad0-422c-422a-bf5f-9b7890cf31ab" />


## 待办事项

- [ ] **新闻中心升级**: 支持接通开放平台接口数据
- [ ] **官网版面插件化**: 实现官网版面布局的完全可定制化，支持插件导入、页面布局/样式+内容的可编辑可定制
