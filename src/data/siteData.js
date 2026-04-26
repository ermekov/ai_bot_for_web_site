import {
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  DatabaseZap,
  GraduationCap,
  Globe2,
  Headphones,
  HeartPulse,
  Home,
  Instagram,
  MessageCircle,
  MessagesSquare,
  Plane,
  PlugZap,
  RefreshCcw,
  Scissors,
  Send,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Table2,
  TimerReset,
  UtensilsCrossed,
  Workflow,
} from 'lucide-react';

export const navLinks = [
  { label: 'О продукте', href: '#product' },
  { label: 'Возможности', href: '#features' },
  { label: 'Как работает', href: '#how-it-works' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
];

export const contactLinks = {
  telegram: 'https://t.me/eeermekov',
  whatsapp: 'https://wa.me/77089898191',
  demo: 'https://t.me/ai_assistant_for_biznes_bot',
};

export const trustPoints = [
  { text: 'Запуск от 3 дней', icon: TimerReset },
  { text: 'Telegram / WhatsApp / Instagram', icon: MessagesSquare },
  { text: 'Заявки в Google Sheets или CRM', icon: Table2 },
];

export const chatMessages = [
  {
    author: 'client',
    text: 'Здравствуйте, хочу AI-бота для бизнеса',
  },
  {
    author: 'bot',
    text: 'Здравствуйте! Я помогу подобрать решение. Для какого бизнеса нужен бот?',
  },
  {
    author: 'client',
    text: 'У меня салон красоты',
  },
  {
    author: 'bot',
    text: 'Отлично. Бот сможет отвечать на вопросы, записывать клиентов, отправлять цены и передавать заявки вам в Telegram или таблицу.',
  },
  {
    author: 'client',
    text: 'Сколько стоит?',
  },
  {
    author: 'bot',
    text: 'Первый бот — 50 000₸. Запуск обычно занимает от 3 дней.',
  },
  {
    author: 'client',
    text: 'Как заказать?',
  },
  {
    author: 'bot',
    text: 'Нажмите кнопку консультации, и мы обсудим ваш бизнес.',
  },
];

export const quickReplies = ['Цены', 'WhatsApp', 'Telegram', 'Заявка'];

export const problems = [
  {
    title: 'Клиенты пишут ночью',
    text: 'Менеджер отвечает утром, а часть горячих заявок уже остыла.',
    icon: Clock3,
  },
  {
    title: 'Заявки теряются',
    text: 'Direct, WhatsApp и мессенджеры растягивают коммуникацию по разным каналам.',
    icon: ClipboardList,
  },
  {
    title: 'Одни и те же вопросы',
    text: 'Команда снова и снова объясняет цены, услуги, график и условия.',
    icon: RefreshCcw,
  },
  {
    title: 'Долгий ответ снижает продажи',
    text: 'Пока менеджер занят, клиент быстро сравнивает предложения конкурентов.',
    icon: TimerReset,
  },
];

export const solutions = [
  {
    title: 'Отвечает мгновенно',
    text: 'AI-ассистент принимает диалог сразу после первого сообщения клиента.',
    icon: Sparkles,
  },
  {
    title: 'Консультирует по услугам',
    text: 'Бот использует вашу базу знаний: цены, график, условия, ответы на частые вопросы.',
    icon: BrainCircuit,
  },
  {
    title: 'Собирает контакты',
    text: 'Запрашивает имя, телефон, услугу и детали запроса без давления на клиента.',
    icon: ClipboardList,
  },
  {
    title: 'Передает заявку',
    text: 'Новые обращения можно отправлять в Google Sheets, CRM или Telegram менеджеру.',
    icon: DatabaseZap,
  },
  {
    title: 'Работает 24/7',
    text: 'Бот доступен в выходные, ночью и в периоды высокой нагрузки.',
    icon: Clock3,
  },
];

export const steps = [
  {
    number: '01',
    title: 'Анализируем ваш бизнес',
    text: 'Разбираем нишу, каналы, частые вопросы и путь клиента до заявки.',
  },
  {
    number: '02',
    title: 'Готовим сценарий и базу знаний',
    text: 'Создаем структуру диалога, ответы, логику сбора контактов и передачи менеджеру.',
  },
  {
    number: '03',
    title: 'Подключаем каналы',
    text: 'Интегрируем Telegram, WhatsApp, Instagram или сайт, а также таблицу, CRM или n8n.',
  },
  {
    number: '04',
    title: 'Бот начинает продавать',
    text: 'Тестируем ответы, запускаем и помогаем корректировать диалоги после первых заявок.',
  },
];

export const features = [
  {
    title: 'Автоответы 24/7',
    text: 'Клиент получает ответ сразу, даже если менеджер занят или не на связи.',
    icon: Clock3,
  },
  {
    title: 'Умный AI-диалог',
    text: 'Бот ведет живую консультацию, уточняет детали и не ограничивается кнопками.',
    icon: Bot,
  },
  {
    title: 'Сбор заявок',
    text: 'Имя, телефон, услуга и комментарий аккуратно собираются в одном сценарии.',
    icon: ClipboardList,
  },
  {
    title: 'Google Sheets',
    text: 'Заявки можно автоматически складывать в таблицу для контроля и аналитики.',
    icon: Table2,
  },
  {
    title: 'Интеграция с CRM',
    text: 'Передаем лиды в вашу CRM, чтобы менеджеры работали в привычной системе.',
    icon: Building2,
  },
  {
    title: 'Передача менеджеру',
    text: 'Сложные обращения бот направляет человеку вместе с контекстом переписки.',
    icon: Headphones,
  },
  {
    title: 'FAQ по услугам',
    text: 'Бот отвечает по вашей базе знаний: цены, сроки, адреса, наличие, правила.',
    icon: CheckCircle2,
  },
  {
    title: 'Аналитика заявок',
    text: 'Видно, какие вопросы задают чаще всего и где клиентам нужна ясность.',
    icon: BarChart3,
  },
];

export const useCases = [
  {
    title: 'Салон красоты',
    text: 'Запись на услуги, ответы по ценам, графику мастеров и подготовке к процедурам.',
    icon: Scissors,
  },
  {
    title: 'Онлайн-магазин',
    text: 'Консультация по товарам, наличие, доставка, оплата и передача заказа менеджеру.',
    icon: ShoppingBag,
  },
  {
    title: 'Образовательные курсы',
    text: 'Подбор программы, ответы по расписанию, стоимости и сбор заявок на пробный урок.',
    icon: GraduationCap,
  },
  {
    title: 'Недвижимость',
    text: 'Квалификация клиента, подбор объектов и передача интереса риелтору.',
    icon: Home,
  },
  {
    title: 'Туризм',
    text: 'Уточнение направления, дат, бюджета и быстрая передача заявки в отдел продаж.',
    icon: Plane,
  },
  {
    title: 'Клиника',
    text: 'Ответы по услугам, врачам, подготовке и запись на первичную консультацию.',
    icon: HeartPulse,
  },
  {
    title: 'Ресторан / доставка',
    text: 'Меню, бронирование, условия доставки и прием первичных обращений.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Сервисный бизнес',
    text: 'Прием заявки, уточнение проблемы, адреса, времени и передача мастеру.',
    icon: ServerCog,
  },
];

export const integrations = [
  { title: 'Telegram', icon: Send, accent: 'cyan' },
  { title: 'WhatsApp', icon: MessageCircle, accent: 'green' },
  { title: 'Instagram Direct', icon: Instagram, accent: 'violet' },
  { title: 'Google Sheets', icon: Table2, accent: 'green' },
  { title: 'CRM', icon: Building2, accent: 'cyan' },
  { title: 'Сайт', icon: Globe2, accent: 'violet' },
  { title: 'API', icon: PlugZap, accent: 'cyan' },
  { title: 'n8n', icon: Workflow, accent: 'green' },
];

export const stats = [
  {
    value: '24/7',
    label: 'работает без выходных',
    text: 'Клиенты могут написать в любое время, а бот примет обращение без ожидания.',
  },
  {
    value: '0 сек',
    label: 'ожидания первого ответа',
    text: 'Автоматический старт диалога помогает удержать внимание клиента.',
  },
  {
    value: 'до 80%',
    label: 'типовых вопросов можно автоматизировать',
    text: 'Оценка зависит от ниши, базы знаний и качества сценария.',
  },
  {
    value: 'от 3 дней',
    label: 'до запуска первого бота',
    text: 'Срок зависит от каналов, интеграций и готовности материалов.',
  },
];

export const pricingPlans = [
  {
    title: 'Первый AI-бот',
    price: '50 000₸',
    subtitle: 'единоразово за запуск первого бота',
    featured: true,
    cta: 'Заказать бота',
    features: [
      'Индивидуальный сценарий',
      'База знаний под ваш бизнес',
      'Telegram / WhatsApp / Instagram',
      'Автоответы 24/7',
      'Сбор заявок',
      'Интеграция с таблицей или CRM',
      'Настройка и тестирование',
    ],
  },
  {
    title: 'Следующий бот',
    price: '35 000₸',
    subtitle: 'за каждого следующего бота',
    featured: false,
    cta: 'Добавить бота',
    features: [
      'Отдельный сценарий',
      'Отдельная база знаний',
      'Для другой ниши или канала',
      'Быстрый запуск',
      'Поддержка после запуска',
      'Скидка для постоянных клиентов',
    ],
  },
];

export const faqItems = [
  {
    question: 'Сколько времени занимает запуск?',
    answer:
      'Обычно первый запуск занимает от 3 дней. Точный срок зависит от количества каналов, объема базы знаний и нужных интеграций.',
  },
  {
    question: 'Можно ли подключить WhatsApp?',
    answer:
      'Да, WhatsApp можно подключить. На консультации подберем подходящий способ интеграции под ваш формат работы и текущие аккаунты.',
  },
  {
    question: 'Можно ли подключить Instagram?',
    answer:
      'Да, AI-ассистента можно подключить к Instagram Direct, чтобы обрабатывать входящие сообщения и собирать заявки.',
  },
  {
    question: 'Куда приходят заявки?',
    answer:
      'Заявки можно передавать в Telegram менеджеру, Google Sheets, CRM или n8n-сценарий. Вы выбираете удобный для команды вариант.',
  },
  {
    question: 'Можно ли изменить ответы бота после запуска?',
    answer:
      'Да. Базу знаний, сценарий, цены, условия и тексты можно обновлять после запуска, когда появляются новые услуги или правила.',
  },
  {
    question: 'Что если бот не знает ответ?',
    answer:
      'Бот может попросить контакты и передать диалог менеджеру. Также такие вопросы удобно добавлять в базу знаний после запуска.',
  },
  {
    question: 'Нужен ли мне сайт?',
    answer:
      'Нет, сайт не обязателен. Бота можно запустить в Telegram, WhatsApp или Instagram. Если сайт есть, можно добавить виджет на страницу.',
  },
  {
    question: 'Есть ли поддержка после запуска?',
    answer:
      'Да, после запуска можно донастроить ответы, проверить первые диалоги и улучшить сценарий на основе реальных обращений.',
  },
];
