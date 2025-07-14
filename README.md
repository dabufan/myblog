# myblog

本项目为个人博客，基于 Vite + TypeScript 搭建，风格参考 https://cai.im/blog/，适合部署到 Cloudflare。

## 功能特性
- 极简、响应式设计
- 支持中英文
- 文章按年份归档
- 首页展示博客标题、副标题、年份分组的文章列表
- RSS 订阅入口
- 便于内容维护

## 本地开发
```bash
npm install
npm run dev
```

## 构建与部署
```bash
npm run build
# 将 dist/ 目录上传到 Cloudflare Pages 或配置 Workers 静态资源服务
```

---
如需自定义样式或功能，请修改 `src/` 目录下相关文件。
