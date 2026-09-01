'use client';

import { businessFormats } from '../data/formats';
import { useAppSelector } from '@/store/hooks';
import styles from './FormatContent.module.css';

export default function FormatContent() {
    const active = useAppSelector((state) => state.businessFormat.active);
    const format = businessFormats[active];

    return (
        <div className={styles.card}>
            {/* Левая колонка с информацией */}
            <div>
                <h3>{format.title}</h3>
                {format.items.map((item) => (
                    <p key={item}>↗ {item}</p>
                ))}
            </div>

            {/* Правая колонка с демонстрацией */}
            <div className={styles.demo}>
                <div className={styles.plate}>{format.emoji}</div>

                <div className={styles.mini}>
                    Средний чек <b>1 840 ₽</b>
                </div>

                <div className={`${styles.mini} ${styles.green}`}>
                    Повторные заказы <b>+32%</b>
                </div>
            </div>
        </div>
    );
}