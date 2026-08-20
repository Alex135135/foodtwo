# FoodFlow — Next.js + Redux Toolkit

Русскоязычный SaaS-лендинг для ресторанной платформы. Проект вдохновлён структурой современных food-tech сайтов, но использует самостоятельный бренд, дизайн и тексты.

## Стек
- Next.js (App Router)
- React
- TypeScript
- Redux Toolkit
- React Redux
- CSS без UI-фреймворков

## Redux используется для
- модального окна заявки;
- мобильного меню;
- отраслевых вкладок;
- калькулятора тарифа.

## Запуск
```bash
npm install
npm run dev
```
Откройте http://localhost:3000

## Сборка
```bash
npm run build
npm start
```

## GitHub
```bash
git init
git add .
git commit -m "Initial FoodFlow landing"
git branch -M main
git remote add origin https://github.com/USERNAME/foodflow-next-redux.git
git push -u origin main
```

## Vercel
1. Загрузите проект на GitHub.
2. В Vercel нажмите **Add New → Project**.
3. Импортируйте репозиторий.
4. Framework Preset определится как Next.js.
5. Нажмите **Deploy**.

Переменные окружения для демо-версии не нужны.
