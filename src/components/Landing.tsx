'use client';

import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeModal, openModal, setFormat, toggleMenu } from '@/features/ui/uiSlice';
import { setLocations, setOrders, toggleApp, toggleLoyalty } from '@/features/calculator/calculatorSlice';


const FORMATS: Record<string, { title: string; items: string[] }> = {
    'Пицца': {
        title: 'Конструктор пиццы и быстрый повтор заказа',
        items: ['Половинки и модификаторы', 'Допы в один клик', 'Повтор любимого заказа']
    },
    'Роллы': {
        title: 'Наборы, комбо и визуальный каталог',
        items: ['Умные наборы', 'Сортировка по составу', 'Акции по времени']
    },
    'Кофейни': {
        title: 'Предзаказ к нужному времени без очереди',
        items: ['Самовывоз по тайм-слотам', 'Подписка на напитки', 'QR-меню']
    },
    'Сети': {
        title: 'Единая система для десятков точек',
        items: ['Геозоны', 'Общий кабинет', 'Локальные акции']
    },
};

const FEATURES = [
    ['01', 'Заказ в два касания', 'Сохранённые адреса, прозрачная корзина и быстрый повтор заказа.'],
    ['02', 'Лояльность без пластика', 'Бонусы, уровни, персональные предложения и электронные карты.'],
    ['03', 'Умные геозоны', 'Разные условия доставки, минимальный заказ и доступность меню.'],
    ['04', 'Аналитика роста', 'Когорты, LTV, частота заказов и эффективность промокодов.'],
    ['05', 'CRM-коммуникации', 'Push, SMS и сценарии возврата гостей.'],
    ['06', 'Интеграции', 'iiko, r_keeper, 1С, платёжные сервисы и телефония.'],
];

const LOGOS = ['ДЕЛИКАТ', 'ГОРОДСКАЯ ЕДА', 'ПЕЧЬ & ТЕСТО', 'СЕВЕР', 'ЧЕСТНЫЙ РОЛЛ'];

const METRICS = [
    { value: '+47%', label: 'рост прямых заказов' },
    { value: '×2,1', label: 'чаще возвращаются гости' },
    { value: '−18%', label: 'расходы на агрегаторы' },
    { value: '21 день', label: 'средний срок запуска' },
];

const FAQ_ITEMS = [
    {
        question: 'Можно оставить текущий сайт?',
        answer: 'Да. Можно запустить только приложение и лояльность или заменить сайт позднее.'
    },
    {
        question: 'Есть интеграция с кассой?',
        answer: 'Подключаем популярные POS-системы через готовые коннекторы и API.'
    },
    {
        question: 'Кому принадлежат данные гостей?',
        answer: 'Все клиентские данные и аналитика принадлежат вашему ресторану.'
    },
    {
        question: 'Можно менять дизайн?',
        answer: 'Да. Цвета, типографика, контент и сценарии адаптируются под бренд.'
    },
];



export default function Landing() {
    const dispatch = useAppDispatch();
    const ui = useAppSelector((state) => state.ui);
    const calc = useAppSelector((state) => state.calculator);

    const price = useMemo(() => {
        const basePrice = 24900;
        const locationCost = calc.locations * 2900;
        const appCost = calc.app ? 12000 : 0;
        const loyaltyCost = calc.loyalty ? 6900 : 0;
        return basePrice + locationCost + appCost + loyaltyCost;
    }, [calc]);


    const Header = () => (
        <header className="header">
            <a className="logo" href="#top">
                FOOD<span>FLOW</span>
            </a>

            <nav className={ui.menuOpen ? 'nav open' : 'nav'}>
                <a href="#features">Возможности</a>
                <a href="#cases">Кейсы</a>
                <a href="#price">Тариф</a>
                <a href="#faq">FAQ</a>
            </nav>

            <button className="ghost desktop" onClick={() => dispatch(openModal())}>
                Получить демо
            </button>

            <button className="burger" onClick={() => dispatch(toggleMenu())}>
                ☰
            </button>
        </header>
    );

    const Hero = () => (
        <section className="hero" id="top">
            <div className="hero-copy">
                <div className="eyebrow">Собственный канал продаж для ресторанов</div>
                <h1>
                    Больше заказов.<br />
                    <em>Меньше комиссии.</em>
                </h1>
                <p>
                    Сайт, приложение, лояльность и аналитика в одной платформе.
                    Запуск за 21 день без собственной команды разработки.
                </p>

                <div className="actions">
                    <button className="primary" onClick={() => dispatch(openModal())}>
                        Начать бесплатно
                    </button>
                    <a className="link" href="#features">
                        Смотреть возможности ↓
                    </a>
                </div>

                <div className="trust">
                    <b>4,9</b>
                    <span>средняя оценка<br />приложений клиентов</span>
                    <b>2 400+</b>
                    <span>ресторанов<br />уже с нами</span>
                </div>
            </div>

            <div className="hero-visual">
                <div className="orb orb1" />
                <div className="orb orb2" />

                <div className="desktop-ui">
                    <div className="ui-top">
                        <i /><i /><i />
                    </div>
                    <div className="ui-banner">
                        Ваш ужин<br />
                        <b>уже близко</b>
                    </div>
                    <div className="ui-cards">
                        {['Пицца', 'Боулы', 'Роллы'].map((item, index) => (
                            <div key={item}>
                                <span>{['🍕', '🥗', '🍣'][index]}</span>
                                <b>{item}</b>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="phone">
                    <div className="notch" />
                    <div className="phone-title">FOODFLOW</div>
                    <div className="food">🍜</div>
                    <h3>Лапша том-ям</h3>
                    <p>Остро, ярко, с кокосовым молоком</p>
                    <button>В корзину · 690 ₽</button>
                </div>
            </div>
        </section>
    );

    const LogoStrip = () => (
        <section className="logos">
            {LOGOS.map((logo) => (
                <span key={logo}>{logo}</span>
            ))}
        </section>
    );

    const Metrics = () => (
        <section className="metrics">
            {METRICS.map((metric) => (
                <div key={metric.label}>
                    <b>{metric.value}</b>
                    <span>{metric.label}</span>
                </div>
            ))}
        </section>
    );

    const Features = () => (
        <section className="section" id="features">
            <div className="section-head">
                <div>
                    <div className="eyebrow">Продукт</div>
                    <h2>
                        Всё, что нужно<br />
                        для прямых продаж
                    </h2>
                </div>
                <p>
                    Один личный кабинет управляет сайтом, приложением, акциями,
                    программой лояльности и коммуникациями с гостями.
                </p>
            </div>

            <div className="feature-grid">
                {FEATURES.map(([id, title, description]) => (
                    <article key={id}>
                        <span>{id}</span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </article>
                ))}
            </div>
        </section>
    );

    const FormatTabs = () => (
        <section className="section dark">
            <div className="eyebrow lime">Для любого формата</div>
            <h2>
                Интерфейс учитывает<br />
                логику вашего меню
            </h2>

            <div className="tabs">
                {Object.keys(FORMATS).map((format) => (
                    <button
                        key={format}
                        className={ui.activeFormat === format ? 'active' : ''}
                        onClick={() => dispatch(setFormat(format))}
                    >
                        {format}
                    </button>
                ))}
            </div>

            <div className="format-card">
                <div>
                    <h3>{FORMATS[ui.activeFormat].title}</h3>
                    {FORMATS[ui.activeFormat].items.map((item) => (
                        <p key={item}>↗ {item}</p>
                    ))}
                </div>

                <div className="format-demo">
                    <div className="plate">
                        {ui.activeFormat === 'Пицца' && '🍕'}
                        {ui.activeFormat === 'Роллы' && '🍣'}
                        {ui.activeFormat === 'Кофейни' && '☕'}
                        {ui.activeFormat === 'Сети' && '🏪'}
                    </div>
                    <div className="mini-card">
                        Средний чек <b>1 840 ₽</b>
                    </div>
                    <div className="mini-card green">
                        Повторные заказы <b>+32%</b>
                    </div>
                </div>
            </div>
        </section>
    );

    const Cases = () => (
        <section className="section" id="cases">
            <div className="section-head">
                <div>
                    <div className="eyebrow">Результаты</div>
                    <h2>
                        Растём вместе<br />
                        с ресторанами
                    </h2>
                </div>
            </div>

            <div className="cases">
                <article className="case big">
                    <div className="case-tag">Сеть пиццерий · 18 точек</div>
                    <h3>Перевели 38% заказов из агрегаторов в собственный канал</h3>
                    <b>+68 млн ₽</b>
                    <span>дополнительной выручки за год</span>
                </article>

                <article className="case orange">
                    <div className="case-tag">Кофейни · 7 точек</div>
                    <h3>Запустили предзаказ и подписку на кофе</h3>
                    <b>×2,4</b>
                    <span>частота визитов участников программы</span>
                </article>
            </div>
        </section>
    );

    const Calculator = () => (
        <section className="section calculator" id="price">
            <div>
                <div className="eyebrow">Калькулятор</div>
                <h2>
                    Рассчитайте<br />
                    стоимость запуска
                </h2>
                <p>
                    Финальная цена зависит от интеграций и индивидуальных доработок.
                    Расчёт ниже — ориентир.
                </p>
            </div>

            <div className="calc-box">
                <label>
                    Количество точек <b>{calc.locations}</b>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={calc.locations}
                        onChange={(e) => dispatch(setLocations(+e.target.value))}
                    />
                </label>

                <label>
                    Заказов в месяц <b>{calc.orders}</b>
                    <input
                        type="range"
                        min="200"
                        max="10000"
                        step="100"
                        value={calc.orders}
                        onChange={(e) => dispatch(setOrders(+e.target.value))}
                    />
                </label>

                <button
                    className={calc.app ? 'switch on' : 'switch'}
                    onClick={() => dispatch(toggleApp())}
                >
                    <i /> Мобильное приложение
                </button>

                <button
                    className={calc.loyalty ? 'switch on' : 'switch'}
                    onClick={() => dispatch(toggleLoyalty())}
                >
                    <i /> Программа лояльности
                </button>

                <div className="total">
                    <span>от</span>
                    <b>{price.toLocaleString('ru-RU')} ₽/мес</b>
                </div>

                <button className="primary full" onClick={() => dispatch(openModal())}>
                    Получить точный расчёт
                </button>
            </div>
        </section>
    );

    const FAQ = () => (
        <section className="section faq" id="faq">
            <div>
                <div className="eyebrow">FAQ</div>
                <h2>Частые вопросы</h2>
            </div>

            <div>
                {FAQ_ITEMS.map(({ question, answer }) => (
                    <details key={question}>
                        <summary>
                            {question}
                            <b>+</b>
                        </summary>
                        <p>{answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );

    const CTA = () => (
        <section className="cta">
            <div className="eyebrow">Готовы расти?</div>
            <h2>
                Запустите собственный<br />
                канал продаж
            </h2>
            <button className="primary black" onClick={() => dispatch(openModal())}>
                Обсудить проект
            </button>
        </section>
    );

    const Footer = () => (
        <footer>
            <a className="logo">FOOD<span>FLOW</span></a>
            <p>Демо-проект на Next.js, React и Redux Toolkit</p>
            <p>© 2026</p>
        </footer>
    );

    const Modal = () => {
        if (!ui.modalOpen) return null;

        return (
            <div className="modal-backdrop" onMouseDown={() => dispatch(closeModal())}>
                <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
                    <button className="close" onClick={() => dispatch(closeModal())}>
                        ×
                    </button>

                    <div className="eyebrow">Бесплатная консультация</div>
                    <h2>
                        Покажем платформу<br />
                        на вашем сценарии
                    </h2>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert('Демо-форма: заявка принята');
                            dispatch(closeModal());
                        }}
                    >
                        <input required placeholder="Ваше имя" />
                        <input required type="tel" placeholder="Телефон" />
                        <input placeholder="Название ресторана" />
                        <button className="primary full">Отправить заявку</button>
                    </form>

                    <small>
                        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                    </small>
                </div>
            </div>
        );
    };


    return (
        <main>
            <Header />
            <Hero />
            <LogoStrip />
            <Metrics />
            <Features />
            <FormatTabs />
            <Cases />
            <Calculator />
            <FAQ />
            <CTA />
            <Footer />
            <Modal />
        </main>
    );
}
