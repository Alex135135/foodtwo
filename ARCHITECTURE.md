# FoodFlow architecture

## Dependency direction

`app -> widgets -> features/entities -> shared`

## app
Composition and Next.js platform files only. `page.tsx` contains no business logic.

## widgets
Large page sections: Header, Hero, Clients, Metrics, Features, BusinessFormats, Cases, PriceCalculator, FAQ, CTA, Footer.

## features
User actions and stateful behavior: modal, mobile-menu, business-format, calculator, lead-form.

## entities
Reusable business concepts and their data/types/UI: Client, Metric, Feature, Case, FAQ.

## shared
Reusable primitives, config and utilities. Must not import widgets/features/entities.

## Redux
Redux Toolkit stores only global mutable state:
- modal.demoOpen
- mobileMenu.isOpen
- businessFormat.active
- calculator.{locations,orders,app,loyalty}

Static content is kept outside Redux in `entities/*/data` or `features/*/data`.
