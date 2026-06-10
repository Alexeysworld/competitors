// ============================================================================
// LEVEL_META — словарь уровней зрелости (email и loyalty)
// Цвета уровней меняются здесь — они автоматически применяются во всех графиках.
// ============================================================================
export const LEVEL_META = {
  email: {
    L0: {
      label: 'CRM/ERP без маркетинга',
      color: '#94a3b8',
      desc: 'Битрикс, amoCRM, МИС, 1С, in-house CRM',
    },
    L1: {
      label: 'Отраслевое ПО с триггерами',
      color: '#60a5fa',
      desc: 'Remarked, InTickets, Arora, Rightway, outsource.store, BeautyExpert, YClients',
    },
    L2: {
      label: 'Mailer / In-house триггеры',
      color: '#a78bfa',
      desc: 'Unisender, DashaMail, Sendsay, Sendpulse, Mailchimp, Carrot quest + in-house',
    },
    L3: {
      label: 'Полноценный CDP',
      color: '#f59e0b',
      desc: 'Maxma, Премиум бонус, RetailCRM, Enkod, Altcraft, Sailplay, Loymax',
    },
  },
  loyalty: {
    L0: {
      label: 'Массовые акции на 1С / Ничего',
      color: '#94a3b8',
      desc: 'In-house, 1С, Битрикс, Ничего',
    },
    L1: {
      label: 'Спец. ПО для лояльности',
      color: '#60a5fa',
      desc: 'Loya, Тейка, killbill, BeautyExpert, Loymax',
    },
    L2: {
      label: 'Карты на POS / Wallet',
      color: '#a78bfa',
      desc: 'Iiko, Set Retail, R-Keeper, Wallet Kid + in-house',
    },
    L3: {
      label: 'ПЛ на базе CDP',
      color: '#f59e0b',
      desc: 'Maxma, Премиум бонус, Manzana, RetailCRM, Altcraft',
    },
  },
};

// ============================================================================
// DEALS — массив проигранных сделок.
// Заглушка: заполнится после получения таблицы со сделками.
//
// Формат одной записи:
// {
//   id: 346987,
//   company: "название компании",
//   value: 183000,            // ₽/мес
//   revenue: "30-100M",       // выручка клиента, или null
//   industry: "fashion",      // fashion / food / beauty / retail / b2b / education / medical / other
//   emailLevel: "L0",         // L0/L1/L2/L3 или null
//   emailCompetitor: "Битрикс",
//   loyaltyLevel: "L0",
//   loyaltyCompetitor: "Ничего",
//   priceReason: true,        // была ли цена причиной проигрыша
//   competitors: ["Битрикс"], // все упомянутые конкуренты (uniq, без "Ничего" и "Неизвестно")
//   lostReason: "цена",       // основная причина
//   pipedriveUrl: "https://mindbox.pipedrive.com/deal/346987"
// }
// ============================================================================
export const DEALS = []; // заполнится после получения таблицы

// ============================================================================
// OPEN_DEALS — открытые сделки (заглушка, заполнится при необходимости).
// ============================================================================
export const OPEN_DEALS = [];

// ============================================================================
// COMPETITORS — справочник конкурентов.
// Чтобы добавить/изменить конкурента — правьте этот объект.
// ============================================================================
export const COMPETITORS = {
  Maxma: {
    category: 'L3-CDP',
    strengths: [
      'Цена в 2-3.5× ниже Mindbox',
      'Мобильное приложение в коробке (без SDK-интеграции)',
      'Активный customer success',
      'KPI-первая презентация с конкретными цифрами (CRM-доля 5→15%)',
    ],
    weaknesses: [
      'Нет welcome-сценария',
      'Нет автоопределения товара',
      'Слабее в омниканальности',
    ],
    dealsLost: 5,
    industries: ['fashion', 'food', 'beauty'],
  },
  'Премиум бонус': {
    category: 'L3-CDP',
    strengths: [
      'Цена ниже Mindbox, часто идёт в паре с Maxma',
      'Программа лояльности в коробке (карты, баллы, уровни)',
      'Mobile SDK как часть платформы',
      'Vendor lock-in через данные ПЛ',
    ],
    weaknesses: [
      'Меньше гибкости в кастомных триггерах',
      'Слабее в email и персонализации сайта',
      'Менее зрелая аналитика',
    ],
    dealsLost: 4,
    industries: ['food', 'retail'],
  },
  RetailCRM: {
    category: 'L3-CDP',
    strengths: [
      'Гибрид CRM + email + ПЛ + Help Desk в одной системе',
      'Цена ниже Mindbox',
      'Сильная операционная часть (заказы, склад, маркетплейсы)',
      'Готовые интеграции с e-com платформами (Bitrix, InSales, Tilda)',
      'Vendor lock-in через операционку',
    ],
    weaknesses: [
      'Маркетинговая автоматизация слабее, нет visual flow builder',
      'Нет персонализации сайта',
      'Ограниченная сегментация',
      'Слабее аналитика и атрибуция',
    ],
    dealsLost: 2,
    industries: ['e-com SMB'],
  },
  // TODO: добавить остальных — Sailplay, Loymax, Enkod, Altcraft, Sendsay,
  // Unisender, DashaMail, Loya, Iiko, Set Retail, InTickets, Arora, YClients,
  // BeautyExpert, Remarked, Rightway, outsource.store, Битрикс, amoCRM, АйБолит
};
