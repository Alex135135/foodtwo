# FoodFlow — декомпозированный Next.js + Redux Toolkit проект

Полная переработка исходного demo-лендинга с feature-oriented архитектурой.

## Стек
- Next.js 15 App Router
- React 19
- TypeScript
- Redux Toolkit + React Redux
- CSS Modules

## Архитектура

```text
src/
├── app/        # маршрутизация, providers, metadata, sitemap, robots
├── widgets/    # крупные секции страницы
├── features/   # пользовательские действия и глобальное состояние
├── entities/   # бизнес-сущности + data/model/ui
├── shared/     # переиспользуемый UI, config, lib, types
└── store/      # Redux store + typed hooks
```

### Widgets
Header, Hero, Clients, Metrics, Features, BusinessFormats, Cases, PriceCalculator, FAQ, CTA, Footer.

### Features
- modal — управление demo-модалкой
- mobile-menu — мобильная навигация
- business-format — переключение сценария Пицца/Роллы/Кофейни/Сети
- calculator — состояние и расчёт тарифа
- lead-form — форма заявки и API-слой

### Entities
Client, Metric, Feature, Case, FAQ.

### Shared UI
Button, Logo, Eyebrow, SectionTitle.

## Принцип
`app → widgets → features/entities → shared`.
Статические данные не хранятся в Redux. Redux используется только для изменяемого глобального состояния.

## Запуск
```bash
npm install
npm run dev
```

## Production check
```bash
npm run build
```

## Vercel
Импортируйте репозиторий в Vercel. Framework Preset определяется как Next.js автоматически.

## Важно
`features/lead-form/api/submitLead.ts` сейчас содержит демонстрационный adapter. Его можно заменить на реальный `/api/leads`, Telegram, email, amoCRM или Bitrix24 без изменения UI формы.
