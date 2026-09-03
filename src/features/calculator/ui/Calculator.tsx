'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLocations, setOrders, toggleApp, toggleLoyalty } from '../model/calculatorSlice';
import { selectCalculatorPrice } from '../model/selectors'; import { formatCurrency } from '@/shared/lib/formatCurrency';
import { openDemo } from '@/features/modal/model/modalSlice'; import RangeField from './RangeField';
import OptionSwitch from './OptionSwitch'; import Button from '@/shared/ui/Button/Button';
import styles from './Calculator.module.css';
export default function Calculator() {
    const dispatch = useAppDispatch();
    const calc = useAppSelector(s => s.calculator);
    const price = useAppSelector(selectCalculatorPrice);
    return <div className={styles.box}>
        <RangeField label="Количество точек" value={calc.locations} min={1} max={30} onChange={v => dispatch(setLocations(v))} />
        <RangeField label="Заказов в месяц" value={calc.orders} min={200} max={10000} step={100} onChange={v => dispatch(setOrders(v))} />
        <OptionSwitch active={calc.app} label="Мобильное приложение" onClick={() => dispatch(toggleApp())} />
        <OptionSwitch active={calc.loyalty} label="Программа лояльности" onClick={() => dispatch(toggleLoyalty())} />
        <div className={styles.total}><span>от</span><b>{formatCurrency(price)}/мес</b></div>
        <Button full onClick={() => dispatch(openDemo())}>Получить точный расчёт</Button></div>
}
