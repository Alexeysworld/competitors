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
// Заглушка: заполнится после получения таблицы со сделками (с названиями компаний).
//
// Формат одной записи:
// {
//   id: 346987,
//   company: "название компании",
//   industry: "fashion",      // fashion / food / beauty / retail / b2b / education / medical / other
//   businessModel: "Онлайн-магазин", // бизнес-модель из таблицы, или null
//   emailLevel: "L0",         // L0/L1/L2/L3 или null (в UI рендерится как "??")
//   emailCompetitor: "Битрикс",
//   loyaltyLevel: "L0",
//   loyaltyCompetitor: "Ничего",
//   competitors: ["Битрикс"], // все упомянутые конкуренты (uniq, без "Ничего" и "Неизвестно")
//   pipedriveUrl: "https://mindbox.pipedrive.com/deal/346987"
// }
//
// Поля value (₽/мес), revenue и priceReason убраны: их нет в исходной таблице.
// ============================================================================
export const DEALS = [
  {
    id: 351965,
    company: "120на80.рф",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Manzana",
    competitors: [
      "Manzana"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/351965"
  },
  {
    id: 354594,
    company: "1ribniy.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/354594"
  },
  {
    id: 352823,
    company: "99ballov.ru Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "Carrot Quest",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Carrot Quest"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/352823"
  },
  {
    id: 346408,
    company: "Сделка 2droida.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Retail CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Retail CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/346408"
  },
  {
    id: 356963,
    company: "Сделка 36best.com",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки через Битрикс",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки через Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/356963"
  },
  {
    id: 360103,
    company: "Сделка Anicura",
    industry: "medical",
    businessModel: "Медицинская клиника",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360103"
  },
  {
    id: 371980,
    company: "Сделка arban.ru",
    industry: "other",
    businessModel: "Застройщик",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Unisender"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/371980"
  },
  {
    id: 361251,
    company: "Сделка around.com.ru",
    industry: "fashion",
    businessModel: "Онлайн-магазин",
    emailLevel: "L2",
    emailCompetitor: "DashaMail",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "Встроенная в 1С лояльность",
    competitors: [
      "DashaMail",
      "Встроенная в 1С лояльность"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361251"
  },
  {
    id: 293762,
    company: "Сделка autotown.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки в CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house базовые рассылки в CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/293762"
  },
  {
    id: 327154,
    company: "Сделка avenumed.ru от айны",
    industry: "medical",
    businessModel: "Медицинская клиника",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки на базе МИС (Реновация)",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки на базе МИС (Реновация)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/327154"
  },
  {
    id: 368722,
    company: "Сделка baby-club.ru",
    industry: "retail",
    businessModel: "Школа, образовательный сервис",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки на базе Альфа CRM",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Inhouse уровневая система",
    competitors: [
      "Базовые рассылки на базе Альфа CRM",
      "Inhouse уровневая система"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/368722"
  },
  {
    id: 360100,
    company: "Сделка batnorton.com",
    industry: "fashion",
    businessModel: "Онлайн-магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки на базе CRM (неизвестной)",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки на базе CRM (неизвестной)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360100"
  },
  {
    id: 360309,
    company: "Сделка best-novostroy.ru",
    industry: "other",
    businessModel: "Агентство, консалтинг",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360309"
  },
  {
    id: 372483,
    company: "Сделка bint.ru",
    industry: "medical",
    businessModel: "Онлайн-магазин",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Unisender"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/372483"
  },
  {
    id: 361422,
    company: "Сделка bolshoe.tv",
    industry: "retail",
    businessModel: "СМИ и Медиа",
    emailLevel: "L0",
    emailCompetitor: "Массовые рассылки на базе Битрикса",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Массовые рассылки на базе Битрикса"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361422"
  },
  {
    id: 370838,
    company: "Сделка bulmer-fashion.com",
    industry: "fashion",
    businessModel: "Онлайн-магазин",
    emailLevel: "L2",
    emailCompetitor: "Carrot Quest",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "Тейка",
    competitors: [
      "Carrot Quest",
      "Тейка"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/370838"
  },
  {
    id: 358586,
    company: "Сделка cafemumu.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум бонус",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/358586"
  },
  {
    id: 342919,
    company: "Сделка carprice.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "Carrot Quest",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Carrot Quest"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/342919"
  },
  {
    id: 355331,
    company: "Сделка chiken-pizza.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "ARORA",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "ARORA"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/355331"
  },
  {
    id: 314948,
    company: "Сделка cinema5.ru",
    industry: "retail",
    businessModel: "Омниканальный магазин",
    emailLevel: "L1",
    emailCompetitor: "Cinema Box",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Cinema Box",
    competitors: [
      "Cinema Box"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/314948"
  },
  {
    id: 357659,
    company: "Сделка clean-clinic.ru",
    industry: "medical",
    businessModel: "Медицинская клиника",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в МИС",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки в МИС"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/357659"
  },
  {
    id: 353309,
    company: "Сделка cloudlessons.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки в CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/353309"
  },
  {
    id: 356068,
    company: "Сделка cuva.ru",
    industry: "other",
    businessModel: "Онлайн-магазин",
    emailLevel: "L3",
    emailCompetitor: "AltCraft",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "AltCraft",
    competitors: [
      "AltCraft"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/356068"
  },
  {
    id: 369754,
    company: "Сделка eatmarket.ru",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в своем inhouse разработанном приложении",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "In-house лояльность встроенная в мобильное приложение",
    competitors: [
      "Базовые рассылки в своем inhouse разработанном приложении",
      "In-house лояльность встроенная в мобильное приложение"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/369754"
  },
  {
    id: 360615,
    company: "Сделка empathycenter.ru",
    industry: "medical",
    businessModel: "Медицинская клиника",
    emailLevel: "L0",
    emailCompetitor: "Рассылки на базе МИС",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Рассылки на базе МИС"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360615"
  },
  {
    id: 360776,
    company: "Сделка etxt.ru",
    industry: "retail",
    businessModel: "Агрегатор, маркетплейс",
    emailLevel: "L2",
    emailCompetitor: "Inhouse триггерные рассылки на базе неизвестно CRM",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house скидки",
    competitors: [
      "Inhouse триггерные рассылки на базе неизвестно CRM",
      "In-house скидки"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360776"
  },
  {
    id: 360608,
    company: "Сделка excimerclinic.ru",
    industry: "medical",
    businessModel: "Медицинская клиника",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в МИС MedWork",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Базовые рассылки в МИС MedWork"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360608"
  },
  {
    id: 367911,
    company: "Сделка factorsmile.ru",
    industry: "medical",
    businessModel: "Медицинская клиника",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки на базе МИС",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Базовые рассылки на базе МИС"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/367911"
  },
  {
    id: 341490,
    company: "Сделка fakelfc.ru",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Manzana",
    competitors: [
      "Manzana"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/341490"
  },
  {
    id: 361913,
    company: "Сделка flawery.ru",
    industry: "retail",
    businessModel: "Доставка цветов",
    emailLevel: "L2",
    emailCompetitor: "Inhouse триггерные рассылки на базе неизвестно CRM",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house скидочная система на базе CRM (неизвестной)",
    competitors: [
      "Inhouse триггерные рассылки на базе неизвестно CRM",
      "In-house скидочная система на базе CRM (неизвестной)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361913"
  },
  {
    id: 353491,
    company: "Сделка footballstore.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Retail Rocket",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "killbill",
    competitors: [
      "Retail Rocket",
      "killbill"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/353491"
  },
  {
    id: 371511,
    company: "Сделка gadget-bar.ru",
    industry: "b2b",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/371511"
  },
  {
    id: 355927,
    company: "Сделка gfc-russia.ru",
    industry: "food",
    businessModel: "Омниканальный магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в 1C Битрикс",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки в 1C Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/355927"
  },
  {
    id: 355796,
    company: "Сделка gliver.ru",
    industry: "retail",
    businessModel: "Производитель с магазином",
    emailLevel: null,
    emailCompetitor: "Нет базы",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Нет базы"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/355796"
  },
  {
    id: 369337,
    company: "Сделка gopractice.ru",
    industry: "retail",
    businessModel: "Школа, образовательный сервис",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/369337"
  },
  {
    id: 353293,
    company: "Сделка granelle.ru",
    industry: "retail",
    businessModel: "Застройщик",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в Microsoft Dynamics",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки в Microsoft Dynamics"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/353293"
  },
  {
    id: 360537,
    company: "Сделка haslestore.com",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки через Битрикс",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house скидки и промокоды на базе 1С Битрикс",
    competitors: [
      "Базовые рассылки через Битрикс",
      "In-house скидки и промокоды на базе 1С Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360537"
  },
  {
    id: 361839,
    company: "Сделка huntflow.ru",
    industry: "retail",
    businessModel: "Школа, образовательный сервис",
    emailLevel: "L2",
    emailCompetitor: "ActiveCampaign",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "ActiveCampaign"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361839"
  },
  {
    id: 357307,
    company: "Сделка indefini.ru",
    industry: "fashion",
    businessModel: "Омниканальный магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в 1C Битрикс",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "Встроенная в 1С лояльность",
    competitors: [
      "Базовые рассылки в 1C Битрикс",
      "Встроенная в 1С лояльность"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/357307"
  },
  {
    id: 360595,
    company: "Сделка industriyakrasoty.ru",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестный конкурент",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360595"
  },
  {
    id: 344043,
    company: "Сделка jetlend.ru",
    industry: "b2b",
    businessModel: "Ломбард, финансовая организация",
    emailLevel: "L2",
    emailCompetitor: "Inhouse триггерные рассылки на базе 1C Битрикс",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Inhouse триггерные рассылки на базе 1C Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/344043"
  },
  {
    id: 366490,
    company: "Сделка jnby.com.ru",
    industry: "fashion",
    businessModel: "Омниканальный магазин",
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/366490"
  },
  {
    id: 344552,
    company: "Сделка kannam.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки в приложении",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house самописное приложение (баллы, реактивация, статистика)",
    competitors: [
      "In-house базовые рассылки в приложении",
      "In-house самописное приложение (баллы, реактивация, статистика)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/344552"
  },
  {
    id: 369667,
    company: "Сделка kronverksar.ru",
    industry: "other",
    businessModel: "Застройщик",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки на базе AmoCRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки на базе AmoCRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/369667"
  },
  {
    id: 320572,
    company: "Сделка lambic.ru",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум бонус",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/320572"
  },
  {
    id: 368716,
    company: "Сделка laserdoctor.ru",
    industry: "medical",
    businessModel: "Медицинская клиника",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/368716"
  },
  {
    id: 364244,
    company: "Сделка lavkabahusa.ru",
    industry: "food",
    businessModel: "Офлайн-магазин",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "Loya (лояльность)",
    competitors: [
      "Loya (лояльность)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/364244"
  },
  {
    id: 346973,
    company: "Сделка legenda-dom.ru",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/346973"
  },
  {
    id: 330592,
    company: "Сделка lucky-group.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "Remarked",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Remarked"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/330592"
  },
  {
    id: 357811,
    company: "Сделка messermeister.ru",
    industry: "retail",
    businessModel: "Онлайн-магазин",
    emailLevel: "L3",
    emailCompetitor: "Retail Rocket",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "Inhouse скидочная система без бонусов на базе 1С Битрикс",
    competitors: [
      "Retail Rocket",
      "Inhouse скидочная система без бонусов на базе 1С Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/357811"
  },
  {
    id: 360093,
    company: "Сделка miracle-jewelry.ru",
    industry: "retail",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки на базе CRM (неизвестной)",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки на базе CRM (неизвестной)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360093"
  },
  {
    id: 342064,
    company: "Сделка mono-stil.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/342064"
  },
  {
    id: 367724,
    company: "Сделка musicmarket.by",
    industry: "retail",
    businessModel: "Онлайн-магазин",
    emailLevel: "L3",
    emailCompetitor: "Retail CRM",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Retail CRM",
    competitors: [
      "Retail CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/367724"
  },
  {
    id: 353315,
    company: "Сделка mygenetics.ru",
    industry: "medical",
    businessModel: "Медицинская клиника",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Unisender"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/353315"
  },
  {
    id: 360587,
    company: "Сделка oldi.ru",
    industry: "retail",
    businessModel: "Онлайн-магазин",
    emailLevel: "L2",
    emailCompetitor: "Инхаус на базе неизвестной CRM",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "Инхаус уровневая программа лояльности",
    competitors: [
      "Инхаус на базе неизвестной CRM",
      "Инхаус уровневая программа лояльности"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360587"
  },
  {
    id: 361423,
    company: "Сделка pankruassan.com",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум бонус",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361423"
  },
  {
    id: 341518,
    company: "Сделка parfum-lider.ru",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "Loymax",
    competitors: [
      "Loymax"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/341518"
  },
  {
    id: 313620,
    company: "Сделка planetavto.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Retail Rocket",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Retail Rocket"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/313620"
  },
  {
    id: 360798,
    company: "Сделка post-post-scriptum.com",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Retail CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Retail CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360798"
  },
  {
    id: 361863,
    company: "Сделка profinansy.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки в CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house базовые рассылки в CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361863"
  },
  {
    id: 356846,
    company: "Сделка pryadki.com",
    industry: "retail",
    businessModel: "Фото, химчистка, салон красоты",
    emailLevel: "L1",
    emailCompetitor: "BeautyExpert",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "BeautyExpert",
    competitors: [
      "BeautyExpert"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/356846"
  },
  {
    id: 293126,
    company: "Сделка seafood-shop.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум бонус",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/293126"
  },
  {
    id: 360566,
    company: "Сделка specialist.ru",
    industry: "retail",
    businessModel: "Школа, образовательный сервис",
    emailLevel: "L2",
    emailCompetitor: "Lotus Notes",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house скидки",
    competitors: [
      "Lotus Notes",
      "In-house скидки"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360566"
  },
  {
    id: 325985,
    company: "Сделка sputnik64.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум бонус",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/325985"
  },
  {
    id: 360604,
    company: "Сделка starikkhinkalich.ru",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: null,
    emailCompetitor: "Нет базы",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Встроенная в iiko лояльность",
    competitors: [
      "Нет базы",
      "Встроенная в iiko лояльность"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360604"
  },
  {
    id: 370657,
    company: "Сделка supermancut.ru",
    industry: "other",
    businessModel: "Фото, химчистка, салон красоты",
    emailLevel: "L2",
    emailCompetitor: "In-house триггерные рассылки на базе самописной CRM",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house бонусная система на базе самописной CRM",
    competitors: [
      "In-house триггерные рассылки на базе самописной CRM",
      "In-house бонусная система на базе самописной CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/370657"
  },
  {
    id: 363292,
    company: "Сделка sushifuji.ru",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L0",
    emailCompetitor: "Inhouse базовые рассылки на базе неизвестной CRM",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house базовый функционал скидок",
    competitors: [
      "Inhouse базовые рассылки на базе неизвестной CRM",
      "In-house базовый функционал скидок"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/363292"
  },
  {
    id: 360619,
    company: "Сделка svoya-kompaniya.ru",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L2",
    emailCompetitor: "Carrot quest",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house уровневая программа лояльности",
    competitors: [
      "Carrot quest",
      "In-house уровневая программа лояльности"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360619"
  },
  {
    id: 358429,
    company: "Сделка urait.ru",
    industry: "education",
    businessModel: "Школа, образовательный сервис",
    emailLevel: "L2",
    emailCompetitor: "Inhouse триггерные рассылки на базе 1С битрикс",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Inhouse триггерные рассылки на базе 1С битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/358429"
  },
  {
    id: 313197,
    company: "Сделка velograd.ru",
    industry: "other",
    businessModel: "Омниканальный магазин",
    emailLevel: "L2",
    emailCompetitor: "SendPulse",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "SendPulse"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/313197"
  },
  {
    id: 354182,
    company: "Сделка vkusilosos.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "In-house триггерные рассылки",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house уровневая программа лояльности",
    competitors: [
      "In-house триггерные рассылки",
      "In-house уровневая программа лояльности"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/354182"
  },
  {
    id: 360795,
    company: "Сделка vsexshop.ru",
    industry: "beauty",
    businessModel: "Онлайн-магазин",
    emailLevel: "L2",
    emailCompetitor: "Инхаус на базе неизвестной CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Инхаус на базе неизвестной CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360795"
  },
  {
    id: 358597,
    company: "Сделка webium.ru",
    industry: "education",
    businessModel: "Школа, образовательный сервис",
    emailLevel: "L2",
    emailCompetitor: "Inhouse триггерные рассылки на базе AmoCRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Inhouse триггерные рассылки на базе AmoCRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/358597"
  },
  {
    id: 359339,
    company: "Сделка zigmund.online",
    industry: "retail",
    businessModel: "Школа, образовательный сервис",
    emailLevel: "L2",
    emailCompetitor: "Inhouse триггерные рассылки на базе CRM (неизвестной)",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Inhouse триггерные рассылки на базе CRM (неизвестной)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/359339"
  },
  {
    id: 370596,
    company: "akademiacoffee.com",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "Встроенная лояльность в Iiko",
    competitors: [
      "Unisender",
      "Встроенная лояльность в Iiko"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/370596"
  },
  {
    id: 338294,
    company: "allopizza.su",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/338294"
  },
  {
    id: 351748,
    company: "arnypraht.com Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/351748"
  },
  {
    id: 362109,
    company: "artzvezdy.ru",
    industry: "other",
    businessModel: "Агентство, консалтинг",
    emailLevel: "L1",
    emailCompetitor: "Intickets",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Intickets"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/362109"
  },
  {
    id: 358938,
    company: "ast.wine",
    industry: "food",
    businessModel: "Омниканальный магазин",
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/358938"
  },
  {
    id: 367306,
    company: "avtovelomoto.by",
    industry: "retail",
    businessModel: "Онлайн-магазин",
    emailLevel: "L2",
    emailCompetitor: "Инхаус триггерные рассылки на базе 1С Битрикс",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Инхаус триггерные рассылки на базе 1С Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/367306"
  },
  {
    id: 340248,
    company: "bestclinic.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "zabota.tech",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "zabota.tech"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/340248"
  },
  {
    id: 374600,
    company: "bigwallsport.ru",
    industry: "other",
    businessModel: "Отель, развлечения, фитнес",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Unisender"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/374600"
  },
  {
    id: 313280,
    company: "british-bakery.ru deal",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки в приложении",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house балльная система и скидки на базе касс iiko",
    competitors: [
      "In-house базовые рассылки в приложении",
      "In-house балльная система и скидки на базе касс iiko"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/313280"
  },
  {
    id: 324247,
    company: "buhanka.ru",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Встроенная в Iiko (iiko card)",
    competitors: [
      "Встроенная в Iiko (iiko card)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/324247"
  },
  {
    id: 330290,
    company: "cantata.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки через Битрикс",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house подарочные сертификаты и акции",
    competitors: [
      "Базовые рассылки через Битрикс",
      "In-house подарочные сертификаты и акции"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/330290"
  },
  {
    id: 351075,
    company: "cerca-trova.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в CRM",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house уровневая программа лояльности с подарочными картами",
    competitors: [
      "Базовые рассылки в CRM",
      "In-house уровневая программа лояльности с подарочными картами"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/351075"
  },
  {
    id: 342641,
    company: "chukchas.com",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/342641"
  },
  {
    id: 323135,
    company: "claustrophobia.com",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестный конкурент",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/323135"
  },
  {
    id: 371045,
    company: "clicktv.uz Назначена встреча",
    industry: "other",
    businessModel: "Онлайн-кинотеатр",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/371045"
  },
  {
    id: 367712,
    company: "collegiummusicum.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "Intickets",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Intickets",
    competitors: [
      "Intickets"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/367712"
  },
  {
    id: 318736,
    company: "darsi.studio deal от айны",
    industry: "fashion",
    businessModel: "Омниканальный магазин",
    emailLevel: "L3",
    emailCompetitor: "Retail CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Retail CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/318736"
  },
  {
    id: 358927,
    company: "de-parfum.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Рассылки в Битриксе",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Рассылки в Битриксе"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/358927"
  },
  {
    id: 342358,
    company: "diamonds-are-forever.ru",
    industry: "retail",
    businessModel: "Омниканальный магазин",
    emailLevel: null,
    emailCompetitor: "Ничего",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "in-house бонусные рубли на базе 1C",
    competitors: [
      "in-house бонусные рубли на базе 1C"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/342358"
  },
  {
    id: 361241,
    company: "dinamarket.kz",
    industry: "food",
    businessModel: "Офлайн-магазин",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Встроенная в SetRetail лояльность (Кристалл)",
    competitors: [
      "Встроенная в SetRetail лояльность (Кристалл)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361241"
  },
  {
    id: 373345,
    company: "domarket.ru +4",
    industry: "retail",
    businessModel: "Омниканальный магазин",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "ЦФТ (Золотая корона)",
    competitors: [
      "ЦФТ (Золотая корона)"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/373345"
  },
  {
    id: 370215,
    company: "dostavkakaifa.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки в CRM",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house базовые скидки",
    competitors: [
      "In-house базовые рассылки в CRM",
      "In-house базовые скидки"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/370215"
  },
  {
    id: 340258,
    company: "dostavkakaifa.ru Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "In-house триггерные рассылки на базе Битрикс",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house триггерные рассылки на базе Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/340258"
  },
  {
    id: 367637,
    company: "e-1.ru",
    industry: "retail",
    businessModel: "Производитель с магазином",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/367637"
  },
  {
    id: 331993,
    company: "farfor.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "In-house триггерные рассылки на базе самописной CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house триггерные рассылки на базе самописной CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/331993"
  },
  {
    id: 343819,
    company: "folkteam.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "Remarked",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Remarked"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/343819"
  },
  {
    id: 356587,
    company: "food-master.ru",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L3",
    emailCompetitor: "Премиум Бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум Бонус",
    competitors: [
      "Премиум Бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/356587"
  },
  {
    id: 317472,
    company: "fsfera.ru deal",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Encod",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Encod"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/317472"
  },
  {
    id: 344944,
    company: "glenfield.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Loymax",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Loymax"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/344944"
  },
  {
    id: 370667,
    company: "gnuvpn.com",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылке в своей CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылке в своей CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/370667"
  },
  {
    id: 328415,
    company: "gooserest.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум бонус",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/328415"
  },
  {
    id: 361795,
    company: "GPTunneL",
    industry: "b2b",
    businessModel: "Программное обеспечение",
    emailLevel: "L2",
    emailCompetitor: "Sendsei",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Sendsei"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361795"
  },
  {
    id: 361431,
    company: "hatimaki.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки в приложении",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house балльная система и скидки на базе касс",
    competitors: [
      "In-house базовые рассылки в приложении",
      "In-house балльная система и скидки на базе касс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/361431"
  },
  {
    id: 346987,
    company: "hublegal.ru Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/346987"
  },
  {
    id: 376610,
    company: "iconskin.ru Назначена встреча",
    industry: "beauty",
    businessModel: "Производитель без своего сбыта",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Unisender"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/376610"
  },
  {
    id: 325285,
    company: "insperia.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "In-house триггерные рассылки на базе самописной CDP",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house триггерные рассылки на базе самописной CDP"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/325285"
  },
  {
    id: 339493,
    company: "kitfort.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки и попапы",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house базовые рассылки и попапы"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/339493"
  },
  {
    id: 345691,
    company: "km20.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Retail CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Retail CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/345691"
  },
  {
    id: 352584,
    company: "kolo-box.ru",
    industry: "food",
    businessModel: "Кухня с доставкой",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/352584"
  },
  {
    id: 323305,
    company: "koza.group",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L1",
    emailCompetitor: "Remarket",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "Встроенная в Iiko лояльность",
    competitors: [
      "Remarket",
      "Встроенная в Iiko лояльность"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/323305"
  },
  {
    id: 369761,
    company: "krepcom.ru",
    industry: "retail",
    businessModel: "Омниканальный магазин",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Rees46",
    competitors: [
      "Rees46"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/369761"
  },
  {
    id: 371762,
    company: "laserlove.ru Назначена встреча",
    industry: "beauty",
    businessModel: "Фото, химчистка, салон красоты",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Встроенная лояльность в Yclients",
    competitors: [
      "Unisender",
      "Встроенная лояльность в Yclients"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/371762"
  },
  {
    id: 318729,
    company: "ledisharm.com deal",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/318729"
  },
  {
    id: 337479,
    company: "loftdesigne.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Encod",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Encod"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/337479"
  },
  {
    id: 369743,
    company: "lpirus.ru",
    industry: "retail",
    businessModel: "Дистрибьютор, дилер, интегратор",
    emailLevel: null,
    emailCompetitor: "Ничего",
    loyaltyLevel: null,
    loyaltyCompetitor: "ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/369743"
  },
  {
    id: 373818,
    company: "maandmi.ru",
    industry: "beauty",
    businessModel: "Фото, химчистка, салон красоты",
    emailLevel: "L1",
    emailCompetitor: "Yclients",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Yclients",
    competitors: [
      "Yclients"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/373818"
  },
  {
    id: 360355,
    company: "maclarin.ru",
    industry: "food",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "Инхаус на базе неизвестной CRM",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "Встроенная в Iiko лояльность",
    competitors: [
      "Инхаус на базе неизвестной CRM",
      "Встроенная в Iiko лояльность"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360355"
  },
  {
    id: 367870,
    company: "malo-mesta.ru",
    industry: "retail",
    businessModel: "Производитель с магазином",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки на базе 1С битрикс",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Базовые рассылки на базе 1С битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/367870"
  },
  {
    id: 348634,
    company: "manders.ru",
    industry: "retail",
    businessModel: "Омниканальный магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в 1C Битрикс",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки в 1C Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/348634"
  },
  {
    id: 362117,
    company: "maroshka.com",
    industry: "beauty",
    businessModel: "Онлайн-магазин",
    emailLevel: null,
    emailCompetitor: "Ничего",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house базовый функционал скидок",
    competitors: [
      "In-house базовый функционал скидок"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/362117"
  },
  {
    id: 368285,
    company: "mgorodok.ru",
    industry: "other",
    businessModel: "Торговый центр",
    emailLevel: null,
    emailCompetitor: "Ничего",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/368285"
  },
  {
    id: 348459,
    company: "moscow-export.com Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестный конкурент",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/348459"
  },
  {
    id: 351518,
    company: "moscow.mba Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Encod",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Encod"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/351518"
  },
  {
    id: 342322,
    company: "mrt.by Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в CRM АйБолит",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки в CRM АйБолит"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/342322"
  },
  {
    id: 346903,
    company: "myblinchik.ru Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/346903"
  },
  {
    id: 368762,
    company: "narod-apteka.ru Назначена встреча",
    industry: "medical",
    businessModel: "Омниканальный магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки на базе 1С битрикс",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house базовые дисконтные карты",
    competitors: [
      "Базовые рассылки на базе 1С битрикс",
      "In-house базовые дисконтные карты"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/368762"
  },
  {
    id: 337316,
    company: "nashaigra.ru",
    industry: "other",
    businessModel: "Онлайн-магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в 1C Битрикс",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house акции на базе 1С Битрикс",
    competitors: [
      "Базовые рассылки в 1C Битрикс",
      "In-house акции на базе 1С Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/337316"
  },
  {
    id: 372139,
    company: "ninjafood.su Назначена встреча",
    industry: "retail",
    businessModel: "Ресторан",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "Встроенная на базе iiko",
    competitors: [
      "Встроенная на базе iiko"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/372139"
  },
  {
    id: 354245,
    company: "nudestory.ru",
    industry: "fashion",
    businessModel: "Онлайн-магазин",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Unisender"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/354245"
  },
  {
    id: 329432,
    company: "olymp.clinic",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки в CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house базовые рассылки в CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/329432"
  },
  {
    id: 331346,
    company: "onepricecoffee.com",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Sailplay",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Sailplay"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/331346"
  },
  {
    id: 356954,
    company: "pafigizm.ru от айны",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Retail CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Retail CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/356954"
  },
  {
    id: 339780,
    company: "parmezan.ru",
    industry: "food",
    businessModel: "Производитель с магазином",
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/339780"
  },
  {
    id: 370213,
    company: "part-kom.ru",
    industry: "other",
    businessModel: "Онлайн-магазин",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/370213"
  },
  {
    id: 327467,
    company: "peplos.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "Rightway",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Rightway"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/327467"
  },
  {
    id: 346188,
    company: "pharmaclick.uz",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки на базе самописной CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house базовые рассылки на базе самописной CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/346188"
  },
  {
    id: 341250,
    company: "pizzahut.ru rosinter.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "SailPlay",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "SailPlay"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/341250"
  },
  {
    id: 366176,
    company: "pizzapirat.ru",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L2",
    emailCompetitor: "Inhouse каскадные рассылки на базе неизвестной CRM",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "Встроенная в iiko лояльность",
    competitors: [
      "Inhouse каскадные рассылки на базе неизвестной CRM",
      "Встроенная в iiko лояльность"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/366176"
  },
  {
    id: 354668,
    company: "polis.online",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "Carrot Quest",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Carrot Quest"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/354668"
  },
  {
    id: 341251,
    company: "pravdacoffee.ru",
    industry: "food",
    businessModel: "Ресторан",
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум бонус",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/341251"
  },
  {
    id: 331402,
    company: "prezi-dent.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "zabota.tech",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "zabota.tech"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/331402"
  },
  {
    id: 352121,
    company: "R7-office.ru Назначена встреча",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "Dasha Mail",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Dasha Mail"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/352121"
  },
  {
    id: 368735,
    company: "revyline.ru Назначена встреча",
    industry: "medical",
    businessModel: "Производитель с магазином",
    emailLevel: "L2",
    emailCompetitor: "MailGunner",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house лояльность встроенная в мобильное приложение",
    competitors: [
      "MailGunner",
      "In-house лояльность встроенная в мобильное приложение"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/368735"
  },
  {
    id: 285913,
    company: "russian-miele-club.ru",
    industry: "retail",
    businessModel: "Производитель с магазином",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в 1C Битрикс",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "In-house трёхуровневая программа лояльности с уникальными нематериальными бенефитами",
    competitors: [
      "Базовые рассылки в 1C Битрикс",
      "In-house трёхуровневая программа лояльности с уникальными нематериальными бенефитами"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/285913"
  },
  {
    id: 373971,
    company: "rxbshoes.com Назначена встреча",
    industry: "fashion",
    businessModel: "Омниканальный магазин",
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house скидки на базе 1С",
    competitors: [
      "In-house скидки на базе 1С"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/373971"
  },
  {
    id: 354021,
    company: "sabooverse.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Sailplay",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Sailplay"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/354021"
  },
  {
    id: 344925,
    company: "sedelice.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "Оutsorce.store",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Оutsorce.store"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/344925"
  },
  {
    id: 356900,
    company: "skladlekarstv.ru",
    industry: "medical",
    businessModel: "Омниканальный магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в 1C Битрикс",
    loyaltyLevel: "L0",
    loyaltyCompetitor: "In-house акции в магазинах",
    competitors: [
      "Базовые рассылки в 1C Битрикс",
      "In-house акции в магазинах"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/356900"
  },
  {
    id: 310524,
    company: "smart-inc.ru deal",
    industry: "other",
    businessModel: null,
    emailLevel: "L2",
    emailCompetitor: "Carrot Quest",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Carrot Quest"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/310524"
  },
  {
    id: 371813,
    company: "sportconcept.ru",
    industry: "other",
    businessModel: null,
    emailLevel: null,
    emailCompetitor: "Неизвестно",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/371813"
  },
  {
    id: 366462,
    company: "strategy.ru Назначена встреча",
    industry: "b2b",
    businessModel: "Агентство, консалтинг",
    emailLevel: "L2",
    emailCompetitor: "Unisender",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Unisender"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/366462"
  },
  {
    id: 364639,
    company: "sushistore.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L1",
    emailCompetitor: "Стартер",
    loyaltyLevel: null,
    loyaltyCompetitor: "Неизвестно",
    competitors: [
      "Стартер"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/364639"
  },
  {
    id: 354215,
    company: "terrapro.uz",
    industry: "fashion",
    businessModel: "Омниканальный магазин",
    emailLevel: "L3",
    emailCompetitor: "Rees46",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Rees46",
    competitors: [
      "Rees46"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/354215"
  },
  {
    id: 367446,
    company: "tetrasis-bt.ru",
    industry: "retail",
    businessModel: "Онлайн-магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в 1C Битрикс",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "In-house персональные цены и скидки на базе 1C",
    competitors: [
      "Базовые рассылки в 1C Битрикс",
      "In-house персональные цены и скидки на базе 1C"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/367446"
  },
  {
    id: 360820,
    company: "tg-alterra.ru +4 часа",
    industry: "retail",
    businessModel: "Омниканальный магазин",
    emailLevel: "L2",
    emailCompetitor: "DashaMail",
    loyaltyLevel: "L2",
    loyaltyCompetitor: "In-house персональные цены и скидки на базе 1C",
    competitors: [
      "DashaMail",
      "In-house персональные цены и скидки на базе 1C"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/360820"
  },
  {
    id: 358589,
    company: "timepad.ru",
    industry: "other",
    businessModel: "Школа, образовательный сервис",
    emailLevel: "L2",
    emailCompetitor: "Инхаус на базе неизвестной CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Инхаус на базе неизвестной CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/358589"
  },
  {
    id: 324101,
    company: "uds18.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки через Битрикс",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки через Битрикс"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/324101"
  },
  {
    id: 355296,
    company: "vlavashe.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Премиум бонус",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Премиум бонус",
    competitors: [
      "Премиум бонус"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/355296"
  },
  {
    id: 358932,
    company: "zeta.kz +2",
    industry: "retail",
    businessModel: "Омниканальный магазин",
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в 1C Битрикс",
    loyaltyLevel: "L1",
    loyaltyCompetitor: "Wallet Kid",
    competitors: [
      "Базовые рассылки в 1C Битрикс",
      "Wallet Kid"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/358932"
  },
  {
    id: 340983,
    company: "zharpizza.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "In-house базовые рассылки в приложении",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "In-house базовые рассылки в приложении"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/340983"
  },
  {
    id: 346980,
    company: "zont-online.ru",
    industry: "other",
    businessModel: null,
    emailLevel: "L0",
    emailCompetitor: "Базовые рассылки в CRM",
    loyaltyLevel: null,
    loyaltyCompetitor: "Ничего",
    competitors: [
      "Базовые рассылки в CRM"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/346980"
  },
  {
    id: 324624,
    company: "Deal 324624",
    industry: "other",
    businessModel: null,
    emailLevel: "L3",
    emailCompetitor: "Maxma",
    loyaltyLevel: "L3",
    loyaltyCompetitor: "Maxma",
    competitors: [
      "Maxma"
    ],
    pipedriveUrl: "https://mindbox.pipedrive.com/deal/324624"
  }
];

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
    dealsLost: 11,
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
    dealsLost: 10,
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
    dealsLost: 6,
    industries: ['e-com SMB'],
  },
  // TODO: добавить остальных — Sailplay, Loymax, Enkod, Altcraft, Sendsay,
  // Unisender, DashaMail, Loya, Iiko, Set Retail, InTickets, Arora, YClients,
  // BeautyExpert, Remarked, Rightway, outsource.store, Битрикс, amoCRM, АйБолит
};
