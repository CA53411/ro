# Corolas AI 教育平台

edurola.corolas.top | Corolas子项目

## 简介
AI驱动的在线教育平台（主营业务），提供个性化学习路径与智能辅导。Edurola取后两字母ro。

## 技术栈
- Frontend: React 19 + TypeScript + Vite
- Styling: Tailwind CSS + shadcn/ui
- Backend: Supabase (Auth + PostgreSQL + Edge Functions)
- Deploy: Vercel (GitHub Push → Auto Deploy)
- CI/CD: GitHub Actions

## 环境变量
| 变量 | 说明 |
|------|------|
| VITE_SUPABASE_URL | Supabase项目URL |
| VITE_SUPABASE_ANON_KEY | Supabase Anon Key |

## 数据库
Supabase项目: https://supabase.com/dashboard/project/corolas-ro

## 本地开发
```bash
git clone https://github.com/CA53411/ro.git
cd ro
npm install
npm run dev
```

## 部署
Push到main分支自动触发Vercel部署
