import Eyebrow from '@/shared/ui/Eyebrow/Eyebrow';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import FormatTabs from '@/features/business-format/ui/FormatTabs';
import FormatContent from '@/features/business-format/ui/FormatContent';
import styles from './BusinessFormats.module.css';
export default function BusinessFormats() {
    return <section className={styles.section}>
        <Eyebrow accent>Для любого формата</Eyebrow>
        <SectionTitle>Интерфейс учитывает<br />логику вашего меню</SectionTitle>
        <FormatTabs /><FormatContent /></section>
}

