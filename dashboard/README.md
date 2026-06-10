# Mindbox — Анализ проигранных сделок 2026

Single-page дашборд (Vite + React 18 + Tailwind v3 + Recharts) для визуализации
проигранных сделок Mindbox. Без backend — все данные в `src/data.js`.

## Запуск локально

```bash
cd dashboard
npm install
npm run dev      # http://localhost:5173
```

## Структура

```
dashboard/
  src/
    main.jsx      — точка входа
    App.jsx       — весь UI (три таба)
    data.js       — DEALS, OPEN_DEALS, LEVEL_META, COMPETITORS
    index.css     — @tailwind директивы
```

## Где что менять

- **Данные сделок** — `src/data.js`, массив `DEALS`.
- **Цвета уровней зрелости** — `src/data.js`, поле `color` в `LEVEL_META`.
- **Справочник конкурентов** — `src/data.js`, объект `COMPETITORS`.

## Деплой на Vercel

Через CLI:

```bash
npm i -g vercel
cd dashboard
vercel            # preview
vercel --prod     # production
```

Через GitHub: подключите репозиторий в Vercel, в настройках проекта укажите
**Root Directory = `dashboard`**, framework preset — Vite (build `npm run build`,
output `dist`).
