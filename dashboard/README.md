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
    App.jsx       — весь UI (два таба: уровни зрелости, конкуренты)
    data.js       — DEALS, OPEN_DEALS, LEVEL_META, COMPETITORS
    index.css     — @tailwind директивы
```

## Где что менять

- **Данные сделок** — `src/data.js`, массив `DEALS`.
- **Цвета уровней зрелости** — `src/data.js`, поле `color` в `LEVEL_META`.
- **Справочник конкурентов** — `src/data.js`, объект `COMPETITORS`.

## Как добавить сделку вручную

Добавьте объект в массив `DEALS` в `src/data.js`:

```js
{
  id: 346987,                       // Deal-ID из Pipedrive
  company: "Название компании",
  industry: "fashion",              // fashion | food | beauty | retail | b2b | education | medical | other
  businessModel: "Онлайн-магазин",  // или null
  emailLevel: "L0",                 // L0 | L1 | L2 | L3 | null (null рендерится как "??")
  emailCompetitor: "Битрикс",       // "Неизвестно", если неизвестно
  loyaltyLevel: "L3",               // L0 | L1 | L2 | L3 | null
  loyaltyCompetitor: "Maxma",       // "Ничего" / "Неизвестно" допустимы
  competitors: ["Maxma"],           // uniq, без "Ничего" и "Неизвестно"
  pipedriveUrl: "https://mindbox.pipedrive.com/deal/346987",
}
```

Уровни сделки берутся из `emailLevel` / `loyaltyLevel`; счётчик «N deals» в шапке
и все графики пересчитываются автоматически.

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
