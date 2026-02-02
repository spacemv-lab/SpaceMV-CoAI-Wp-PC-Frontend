<div align="center">

<h1 style="margin: 30px 0 30px; font-weight: bold;">SpaceMV-CoAI-Wp-PC-Frontend: Industrial Planet Operations AI Agent - SpaceMV-CoAI-Wp (Enterprise Official Website) React Frontend (PC)</h1>

<a href="./LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="License"></a> <a href="https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" alt="Maintenance"></a> <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>

</div>

<div align="center">

<a href="./README.md"><strong>简体中文</strong></a> | <a href="./README_EN.md"><strong>English</strong></a>

</div>

&nbsp;&nbsp;

<div align="center">

<img width="800" height="450" alt="SpaceMV-CoAI-Wp-PC-Frontend" src="./public/spacemv_coo.png" />

</div>

[SpaceMV-CoAI-Wp-PC-Frontend](https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend) is a PC display project for the Industrial Planet Operations AI Agent - SpaceMV-CoAI-Wp (Enterprise Official Website), developed by Chengdu Tianxun Micro Satellite Technology Co., Ltd. As the frontend PC display component of the SpaceMV-CoAI-Wp (Enterprise Official Website) module within the SpaceMV-CoAI Industrial Planet Operations AI Agent system, it is responsible for presenting the official website content managed in the backend in a modern, responsive manner, achieving real-time synchronous display of official website content.

[SpaceMV-CoAI-Wp-PC-Frontend](https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend) serves as the PC frontend display system for the Industrial Planet Operations AI Agent - SpaceMV-CoAI-Wp (Enterprise Official Website), featuring responsive layout and real-time content synchronization display capabilities. It can present the SpaceMV-CoAI-Wp (Enterprise Official Website) content managed in the backend in a modern, beautiful way, and provide visitors with a smooth browsing experience through optimized loading performance, helping to enhance brand image and user conversion rates.

`SpaceMV-CoAI-Wp-PC-Frontend`, as the PC frontend display system for the Industrial Planet Operations AI Agent - SpaceMV-CoAI-Wp (Enterprise Official Website), assumes the key function of modern presentation of SpaceMV-CoAI-Wp (Enterprise Official Website) content.

## **Table of Contents**

* [Core Modules](#core-modules)
* [Technical Architecture](#technical-architecture)
* [Features](#features)
* [Quick Start](#quick-start)
* [Contribution Guide](#contribution-guide)
* [Contact Information](#contact-information)
* [Todo List](#todo-list)

## Core Modules
~~~
SpaceMV-CoAI-Wp-PC-Frontend/
├── Core Framework Layer
│   ├── Routing Management        // Responsible for page routing configuration, using React Router
│   ├── State Management          // Manages global application state, using Redux Toolkit
│   ├── Utility Library           // Provides common utility functions, such as path handling
│   └── Service Configuration     // Configures axios request interceptors and response handling
├── Business Module Layer
│   ├── Home Module               // Displays company homepage content, including carousel, product showcase, etc.
│   ├── About Us Module           // Displays company introduction, development history, etc.
│   ├── Product One Module        // Displays Product One related content, including article list and classic cases
│   ├── News Center Module        // Displays company news and industry information
│   └── Product Two Module        // Displays Product Two related products and solutions
├── Component Layer
│   ├── Carousel Component        // Implements homepage carousel functionality
│   ├── Contact Us Component      // Displays contact information and map
│   ├── Pagination Component      // Implements article list pagination functionality
│   ├── Footer Component          // Displays website footer information
│   ├── Header Component          // Displays website navigation bar and Logo
│   └── Toast Component           // Implements global message prompt functionality
├── API Interface Layer
│   ├── Company Interface         // Gets company related information
│   ├── Home Page Interface       // Gets homepage display content
│   ├── Product Interface         // Gets product related information
│   └── Top Button Interface      // Gets top button configuration
└── Resource Layer
    ├── Static Resources          // Static files such as images, icons
    └── Style Files               // Global styles and theme configuration
~~~

## Technical Architecture

### Directory Structure

SpaceMV-CoAI-Wp-PC-Frontend/  
├── public/                   \# Public resources  
│   ├── about/                \# About us page static resources  
│   ├── contact-us/           \# Contact us page static resources  
│   ├── header/               \# Header component static resources  
│   ├── news/                 \# News center page static resources  
│   ├── office-nav/           \# Office navigation related static resources  
│   ├── favicon.png           \# Website icon  
│   ├── icon.js               \# Icon script  
│   └── icon.png               \# Icon image  
│  
├── src/                      \# Source code directory  
│   ├── api/                  \# API interfaces  
│   │   ├── company/          \# Company related interfaces  
│   │   ├── mainPage/         \# Home page related interfaces  
│   │   ├── product/          \# Product related interfaces  
│   │   └── topButton/        \# Top button related interfaces  
│   │  
│   ├── components/           \# Public components  
│   │   ├── carousel/          \# Carousel component  
│   │   ├── contact-us/        \# Contact us component  
│   │   ├── cus-pagination/    \# Custom pagination component  
│   │   ├── footer/            \# Footer component  
│   │   ├── header/            \# Header component  
│   │   ├── iconfont/          \# Icon font component  
│   │   └── toast/             \# Toast component  
│   │  
│   ├── pages/                \# Page views  
│   │   ├── about-us/          \# About us page  
│   │   ├── home/              \# Home page  
│   │   ├── large-model/       \# Product One page  
│   │   │   ├── article-list/   \# Article list subpage  
│   │   │   └── classic-case/   \# Classic case subpage  
│   │   ├── news-center/       \# News center page  
│   │   └── small-device/      \# Product Two page  
│   │  
│   ├── router/               \# Routing configuration  
│   ├── services/             \# Service configuration  
│   │   └── axiosConfig.ts     \# Axios configuration  
│   │  
│   ├── store/                \# State management  
│   │   ├── modules/           \# State management modules  
│   │   │   ├── companyReducer/  \# Company information state management  
│   │   │   └── menuReducer/     \# Menu state management  
│   │   └── index.ts           \# State management entry  
│   │  
│   ├── styles/               \# Style files  
│   │   └── theme.less         \# Theme styles  
│   │  
│   ├── utils/                \# Utility functions  
│   │   └── pathUtils.ts       \# Path utility functions  
│   │  
│   ├── App.tsx               \# Root component  
│   ├── index.less            \# Global styles  
│   ├── main.tsx              \# Entry file  
│   └── vite-env.d.ts         \# Vite environment type declaration  
│  
├── .editorconfig             \# Editor configuration  
├── .env                      \# Environment configuration  
├── .env.development          \# Development environment configuration  
├── .env.production           \# Production environment configuration  
├── .eslintignore             \# ESLint ignore files  
├── .eslintrc                 \# ESLint configuration  
├── .gitignore                \# Git ignore files  
├── .npmrc                    \# npm configuration  
├── .prettierignore           \# Prettier ignore files  
├── .prettierrc.cjs           \# Prettier configuration  
├── .stylelintrc.js           \# Stylelint configuration  
├── README.md                 \# Project description  
├── index.html                \# Entry HTML  
├── package.json              \# Project dependencies  
├── tailwind.config.js        \# Tailwind CSS configuration  
├── tsconfig.app.json         \# TypeScript application configuration  
├── tsconfig.json             \# TypeScript configuration  
├── tsconfig.node.json        \# TypeScript Node configuration  
└── vite.config.ts            \# Vite configuration

### Technology Stack

| Domain | Technology Selection | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 19** | Declarative JavaScript library |
| | **TypeScript** | Type-safe JavaScript superset |
| | **React Router** | Official routing manager |
| | **Redux Toolkit** | Efficient state management library |
| | **Redux Persist** | Redux persistence storage |
| | **Ant Design Icons** | Icon library |
| **Styles** | **Less** | CSS preprocessor |
| | **Tailwind CSS** | Utility-first CSS framework |
| | **CSS Modules** | Modular CSS solution |
| | **Normalize.css** | CSS reset styles |
| **Network Requests** | **Axios** | Promise-based HTTP client |
| **Build Tools** | **Vite** | Fast frontend build tool |
| | **ESLint** | Code quality checking tool |
| | **Prettier** | Code formatting tool |
| | **Stylelint** | CSS code quality checking tool |
| **Utility Library** | **classnames** | CSS class name management tool |

### Data Flow

graph TD  
    A\[User Operation\] \-\-\>|Trigger Event| B\[React Component\]  
    B \-\-\>|Call API| C\[API Interface Layer\]  
    C \-\-\>|Send Request| D\[Backend Service\]  
    D \-\-\>|Return Data| C  
    C \-\-\>|Response Data| B  
    B \-\-\>|Dispatch Action| E\[Redux Toolkit State Management\]  
    E \-\-\>|State Persistence| F\[Redux Persist\]  
    F \-\-\>|Persistence Data| E  
    E \-\-\>|State Change| B  
    B \-\-\>|Render Page| G\[User Interface\]

## Features

### Official Website Display Module

* **Home Page Display**: Displays company overview, core products and services, carousel, etc.
* **About Us**: Displays company introduction, development history, team introduction, etc.
* **Product One**: Displays Product One related content, including article list and classic cases.
* **News Center**: Displays company news and industry information, supports article list browsing.
* **Product Two**: Displays Product Two related products and solutions.

## Quick Start

### Prerequisites

* **Node.js** (v16.0 or higher)  
* **npm** package manager  
* **Git** version control tool

### 1. Environment Preparation
```bash
# Clone the repository  
git clone https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend.git   
cd SpaceMV-CoAI-Wp-PC-Frontend

# Install dependencies  
npm install
```
### 2. Environment Variable Configuration
```ini
The project already includes the following environment configuration files:

- .env                # Basic environment configuration
- .env.development    # Development environment configuration
- .env.production     # Production environment configuration

To modify the configuration, edit the corresponding environment configuration file.
```
### 3. Start Development Server
```bash
# Start development server  
npm run dev
```

After the development server starts, you can access the project through the browser at `http://localhost:5173`.

### 4. Build Versions

#### 4.1 Build Production Version
```bash
# Build production version  
npm run build
```

After the build is completed, the production version files will be generated in the `dist` directory. If you need to deploy to the backend project, please place the built dist package in the ruoyi-ui/dist directory of the backend code project.

#### 4.2 Build Development Version
```bash
# Build development version  
npm run build:dev
```

### 5. Code Formatting and Checking
```bash
# Code formatting  
npm run format

# Code quality checking  
npm run lint
```

### 6. Preview Build Results
```bash
# Preview build results  
npm run preview
```

## Contribution Guide

We warmly welcome community developers to participate in the construction of the SpaceMV-CoAI-Wp-PC-Frontend project! If you have any improvement suggestions or find any bugs, please follow the following process:

1. **Fork this repository**: Click the Fork button in the upper right corner to copy the project to your GitHub account.  
2. **Create a branch**: Create a new branch from the main branch for development.  
   git checkout -b feature/AmazingFeature  
3. **Commit changes**: Ensure code style consistency and write clear Commit Messages.  
   git commit -m 'feat: Add some AmazingFeature'  
4. **Push branch**:  
   git push origin feature/AmazingFeature  
5. **Submit Pull Request**: Initiate a PR on GitHub and detailedly describe your changes.

**Development Suggestions**:

* **Code Style**: Follow the project's code style specifications to ensure code readability.
* **Component Design**: When developing new components, ensure component reusability and maintainability.
* **API Calls**: When adding new API calls, follow the existing modular organization method.
* **Style Management**: Use Less variables and mixins, combined with Tailwind CSS utility classes, to ensure style consistency and maintainability.
* **Testing**: Add appropriate test cases for new features to ensure code quality.

## Contact Information

If you have any questions, suggestions, or business cooperation needs, please contact the project maintenance team.

* **Email**: code@spacemv.com  
* **Issues**: [GitHub Issues](https://github.com/tianxunweixiao/SpaceMV-CoAI-Wp-PC-Frontend/issues)

For more information, please follow our company's WeChat official account:
<img width="106" height="106" alt="image" src="https://github.com/user-attachments/assets/69a02ad0-422c-422a-bf5f-9b7890cf31ab" />

## License

This project is licensed under the MIT License.

Copyright (c) 2026 Chengdu Tianxun Micro Satellite Technology Co., Ltd.

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

## Todo List

- [ ] **News Center Upgrade**: Support connecting to open platform interface data
- [ ] **Official Website Layout Pluginization**: Implement fully customizable official website layout, support plugin import, and editable/customizable page layout/styles + content