import React, { useMemo, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from 'recharts';
import {
  Layers,
  Swords,
  TrendingDown,
  Search,
  ExternalLink,
  Check,
  X,
  Quote,
} from 'lucide-react';
import { DEALS, LEVEL_META, COMPETITORS } from './data.js';

// ---------------------------------------------------------------------------
// Константы / хелперы
// ---------------------------------------------------------------------------
const LEVEL_ORDER = ['L0', 'L1', 'L2', 'L3'];
const UNKNOWN_KEY = '??';
const UNKNOWN_COLOR = '#cbd5e1';

const REVENUE_BUCKETS = [
  { key: '<30M', label: '< 30M', test: (r) => bucketOf(r) === '<30M' },
  { key: '30-100M', label: '30–100M', test: (r) => bucketOf(r) === '30-100M' },
  { key: '100M+', label: '100M+', test: (r) => bucketOf(r) === '100M+' },
];

// Нормализуем строку выручки в один из трёх бакетов (или null).
function bucketOf(revenue) {
  if (!revenue) return null;
  const r = String(revenue).toLowerCase();
  if (r.includes('100') || r.includes('млрд') || r.includes('b')) {
    // "100-300M", "100M+", "1B" → крупные
    if (r.includes('30-100') || r.includes('30–100')) return '30-100M';
    return '100M+';
  }
  if (r.includes('30')) return '30-100M';
  return '<30M';
}

function formatValue(value) {
  if (value == null) return '—';
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽/мес';
}

function levelColor(segment, level) {
  if (!level || level === UNKNOWN_KEY) return UNKNOWN_COLOR;
  return LEVEL_META[segment]?.[level]?.color ?? UNKNOWN_COLOR;
}

// Цитаты для таба «Ценовой барьер» (обобщённые, не привязаны к конкретным сделкам).
const PRICE_QUOTES = [
  'Нам предложили практически то же самое в 2 раза дешевле.',
  'Бюджет не тянет вашу подписку — у конкурента ценник в 3 раза ниже.',
  'За эти деньги мы получаем мобильное приложение в коробке у другого вендора.',
  'Решили начать с более простого и дешёвого инструмента, к вам вернёмся позже.',
  'Стоимость владения за год получается неподъёмной для нашего оборота.',
  'Выбрали платформу, где программа лояльности уже включена в цену.',
];

// ---------------------------------------------------------------------------
// Мелкие UI-компоненты
// ---------------------------------------------------------------------------
function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function Placeholder({ children }) {
  return (
    <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-slate-400">
      {children}
    </div>
  );
}

function LevelBadge({ segment, level }) {
  const display = level || UNKNOWN_KEY;
  const color = levelColor(segment, display);
  return (
    <span
      className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium text-white"
      style={{ backgroundColor: color }}
    >
      {display}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Таб 1: Уровни зрелости
// ---------------------------------------------------------------------------
function MaturityTab() {
  const [segment, setSegment] = useState('email'); // email | loyalty
  const [activeLevel, setActiveLevel] = useState(null); // фильтр таблицы

  const levelKey = segment === 'email' ? 'emailLevel' : 'loyaltyLevel';
  const competitorKey =
    segment === 'email' ? 'emailCompetitor' : 'loyaltyCompetitor';

  // Подсчёт распределения по уровням.
  const distribution = useMemo(() => {
    const counts = { L0: 0, L1: 0, L2: 0, L3: 0, [UNKNOWN_KEY]: 0 };
    for (const d of DEALS) {
      const lvl = d[levelKey] || UNKNOWN_KEY;
      counts[lvl] = (counts[lvl] || 0) + 1;
    }
    return counts;
  }, [levelKey]);

  const barData = useMemo(
    () =>
      [...LEVEL_ORDER, UNKNOWN_KEY].map((lvl) => ({
        level: lvl,
        count: distribution[lvl] || 0,
        color: levelColor(segment, lvl),
      })),
    [distribution, segment]
  );

  const pieData = useMemo(
    () => barData.filter((d) => d.count > 0),
    [barData]
  );

  const total = DEALS.length;

  const filteredDeals = useMemo(() => {
    if (!activeLevel) return DEALS;
    return DEALS.filter((d) => (d[levelKey] || UNKNOWN_KEY) === activeLevel);
  }, [activeLevel, levelKey]);

  const isEmpty = DEALS.length === 0;

  return (
    <div className="space-y-6">
      {/* Сегментированный переключатель */}
      <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
        {[
          { key: 'email', label: 'Email' },
          { key: 'loyalty', label: 'Loyalty' },
        ].map((s) => (
          <button
            key={s.key}
            onClick={() => {
              setSegment(s.key);
              setActiveLevel(null);
            }}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
              segment === s.key
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {isEmpty ? (
        <Placeholder>Загрузите данные</Placeholder>
      ) : (
        <>
          {/* Графики */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-5">
              <h3 className="mb-4 text-sm font-semibold text-slate-700">
                Распределение по уровням
                {activeLevel && (
                  <button
                    onClick={() => setActiveLevel(null)}
                    className="ml-3 text-xs font-normal text-blue-600 hover:underline"
                  >
                    сбросить фильтр ({activeLevel})
                  </button>
                )}
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="level" tick={{ fontSize: 12 }} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                  <Tooltip
                    cursor={{ fill: '#f8fafc' }}
                    formatter={(v) => [v, 'сделок']}
                  />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]} cursor="pointer">
                    {barData.map((entry) => (
                      <Cell
                        key={entry.level}
                        fill={entry.color}
                        opacity={
                          activeLevel && activeLevel !== entry.level ? 0.35 : 1
                        }
                        onClick={() =>
                          setActiveLevel(
                            activeLevel === entry.level ? null : entry.level
                          )
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-5">
              <h3 className="mb-4 text-sm font-semibold text-slate-700">
                Доли, %
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="count"
                    nameKey="level"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                  >
                    {pieData.map((entry) => (
                      <Cell key={entry.level} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v, n) => [
                      `${v} (${((v / total) * 100).toFixed(0)}%)`,
                      n,
                    ]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Карточки уровней */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEVEL_ORDER.map((lvl) => {
              const meta = LEVEL_META[segment][lvl];
              return (
                <Card key={lvl} className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: meta.color }}
                    />
                    <span className="text-sm font-semibold text-slate-900">
                      {lvl} · {meta.label}
                    </span>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-slate-500">
                    {meta.desc}
                  </p>
                  <div className="text-2xl font-semibold text-slate-900">
                    {distribution[lvl] || 0}
                    <span className="ml-1 text-sm font-normal text-slate-400">
                      сделок
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Таблица сделок */}
          <Card className="overflow-hidden">
            <div className="border-b border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
              Сделки {activeLevel ? `· уровень ${activeLevel}` : ''} (
              {filteredDeals.length})
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                    <th className="px-5 py-2.5 font-medium">ID</th>
                    <th className="px-5 py-2.5 font-medium">Компания</th>
                    <th className="px-5 py-2.5 font-medium">Уровень</th>
                    <th className="px-5 py-2.5 font-medium">Конкурент</th>
                    <th className="px-5 py-2.5 font-medium">Сумма</th>
                    <th className="px-5 py-2.5 font-medium">Pipedrive</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDeals.map((d) => (
                    <tr
                      key={d.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-5 py-2.5 text-slate-400">{d.id}</td>
                      <td className="px-5 py-2.5 font-medium text-slate-900">
                        {d.company}
                      </td>
                      <td className="px-5 py-2.5">
                        <LevelBadge segment={segment} level={d[levelKey]} />
                      </td>
                      <td className="px-5 py-2.5 text-slate-600">
                        {d[competitorKey] || 'Неизвестно'}
                      </td>
                      <td className="px-5 py-2.5 text-slate-600">
                        {formatValue(d.value)}
                      </td>
                      <td className="px-5 py-2.5">
                        <a
                          href={d.pipedriveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                        >
                          открыть
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Таб 2: Конкуренты
// ---------------------------------------------------------------------------
function CompetitorsTab() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(null); // L0 | L1 | L2 | L3

  const entries = useMemo(() => Object.entries(COMPETITORS), []);

  const filtered = useMemo(() => {
    return entries.filter(([name, c]) => {
      const matchesQuery = name
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesCategory =
        !category || (c.category || '').toUpperCase().includes(category);
      return matchesQuery && matchesCategory;
    });
  }, [entries, query, category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Поиск */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по названию…"
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm shadow-sm outline-none focus:border-slate-400"
          />
        </div>

        {/* Фильтр по категории */}
        <div className="flex flex-wrap gap-2">
          {['L0', 'L1', 'L2', 'L3'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(category === cat ? null : cat)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                category === cat
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <Placeholder>Ничего не найдено</Placeholder>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(([name, c]) => (
            <Card key={name} className="flex flex-col p-5">
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900">
                  {name}
                </h3>
                <span className="shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                  {c.category}
                </span>
              </div>

              <div className="mb-3 flex items-center gap-4 text-xs text-slate-500">
                <span>
                  Проиграно:{' '}
                  <span className="font-semibold text-slate-900">
                    {c.dealsLost}
                  </span>
                </span>
              </div>

              {c.industries?.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {c.industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    Сильные стороны
                  </div>
                  <ul className="space-y-1">
                    {c.strengths?.map((s, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-sm text-slate-600"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Слабые стороны
                  </div>
                  <ul className="space-y-1">
                    {c.weaknesses?.map((w, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-sm text-slate-600"
                      >
                        <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-500" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Таб 3: Ценовой барьер
// ---------------------------------------------------------------------------
function PriceTab() {
  const isEmpty = DEALS.length === 0;

  const pricePct = useMemo(() => {
    if (DEALS.length === 0) return 0;
    const n = DEALS.filter((d) => d.priceReason).length;
    return Math.round((n / DEALS.length) * 100);
  }, []);

  const priceCount = useMemo(
    () => DEALS.filter((d) => d.priceReason).length,
    []
  );

  const bucketData = useMemo(() => {
    return REVENUE_BUCKETS.map((b) => {
      const inBucket = DEALS.filter((d) => b.test(d.revenue));
      const withPrice = inBucket.filter((d) => d.priceReason).length;
      const pct =
        inBucket.length > 0
          ? Math.round((withPrice / inBucket.length) * 100)
          : 0;
      return {
        bucket: b.label,
        pct,
        total: inBucket.length,
        withPrice,
      };
    });
  }, []);

  return (
    <div className="space-y-6">
      {isEmpty ? (
        <Placeholder>Загрузите данные</Placeholder>
      ) : (
        <>
          {/* KPI */}
          <Card className="p-8 text-center">
            <div className="text-6xl font-semibold text-slate-900">
              {pricePct}%
            </div>
            <div className="mt-2 text-sm text-slate-500">
              сделок проиграно с упоминанием цены ({priceCount} из{' '}
              {DEALS.length})
            </div>
          </Card>

          {/* Bar chart по revenue-бакетам */}
          <Card className="p-5">
            <h3 className="mb-4 text-sm font-semibold text-slate-700">
              Доля сделок с ценовым барьером по выручке клиента
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={bucketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="bucket" tick={{ fontSize: 12 }} />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                  formatter={(v, _n, p) => [
                    `${v}% (${p.payload.withPrice} из ${p.payload.total})`,
                    'ценовой барьер',
                  ]}
                />
                <Bar
                  dataKey="pct"
                  fill="#f59e0b"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Цитаты */}
          <Card className="p-5">
            <h3 className="mb-4 text-sm font-semibold text-slate-700">
              Что говорят клиенты
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {PRICE_QUOTES.map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4"
                >
                  <Quote className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                  <p className="text-sm italic text-slate-600">{q}</p>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Корневой компонент
// ---------------------------------------------------------------------------
const TABS = [
  { key: 'maturity', label: 'Уровни зрелости', icon: Layers },
  { key: 'competitors', label: 'Конкуренты', icon: Swords },
  { key: 'price', label: 'Ценовой барьер', icon: TrendingDown },
];

export default function App() {
  const [tab, setTab] = useState('maturity');

  return (
    <div className="min-h-full bg-slate-50">
      {/* Шапка */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            Анализ проигранных сделок 2026
          </h1>
          <p className="mt-1 text-sm text-slate-500">{DEALS.length} deals</p>

          {/* Табы */}
          <nav className="mt-5 flex gap-1">
            {TABS.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    tab === t.key
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Контент */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {tab === 'maturity' && <MaturityTab />}
        {tab === 'competitors' && <CompetitorsTab />}
        {tab === 'price' && <PriceTab />}
      </main>
    </div>
  );
}
