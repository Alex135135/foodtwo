'use client';

import { businessFormats } from '../data/formats';
import type { BusinessFormat } from '../model/types';
import { setBusinessFormat } from '../model/businessFormatSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import styles from './FormatTabs.module.css';

export default function FormatTabs() {
    const dispatch = useAppDispatch();
    const active = useAppSelector((state) => state.businessFormat.active);

    // Получаем список ключей форматов
    const formatKeys = Object.keys(businessFormats) as BusinessFormat[];

    // Обработчик переключения формата
    const handleFormatChange = (format: BusinessFormat) => {
        dispatch(setBusinessFormat(format));
    };

    return (
        <div className={styles.tabs}>
            {formatKeys.map((formatKey) => {
                const isActive = active === formatKey;
                const buttonClass = isActive ? styles.active : '';

                return (
                    <button
                        key={formatKey}
                        className={buttonClass}
                        onClick={() => handleFormatChange(formatKey)}
                        aria-pressed={isActive} // Для доступности
                    >
                        {businessFormats[formatKey].label}
                    </button>
                );
            })}
        </div>
    );
}