import Eyebrow from '@/shared/ui/Eyebrow/Eyebrow';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Calculator from '@/features/calculator/ui/Calculator';
import styles from './PriceCalculator.module.css';
export default function PriceCalculator() {
    return <section className={styles.section} id="price">
        <div><Eyebrow>Калькулятор</Eyebrow>
            <SectionTitle>Рассчитайте<br />стоимость запуска</SectionTitle>
            <p>Финальная цена зависит от интеграций и индивидуальных доработок. Расчёт ниже — ориентир.</p></div><Calculator /></section>
}
