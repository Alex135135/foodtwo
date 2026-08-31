import type { BusinessFormat } from '../model/types';
export const businessFormats: Record<BusinessFormat, { label: string; title: string; items: string[]; emoji: string }> = {
    pizza: { label: 'Пицца', title: 'Конструктор пиццы и быстрый повтор заказа', items: ['Половинки и модификаторы', 'Допы в один клик', 'Повтор любимого заказа'], emoji: '🍕' },
    rolls: { label: 'Роллы', title: 'Наборы, комбо и визуальный каталог', items: ['Умные наборы', 'Сортировка по составу', 'Акции по времени'], emoji: '🍣' },
    coffee: { label: 'Кофейни', title: 'Предзаказ к нужному времени без очереди', items: ['Самовывоз по тайм-слотам', 'Подписка на напитки', 'QR-меню'], emoji: '☕' },
    chain: { label: 'Сети', title: 'Единая система для десятков точек', items: ['Геозоны', 'Общий кабинет', 'Локальные акции'], emoji: '🏪' },
};