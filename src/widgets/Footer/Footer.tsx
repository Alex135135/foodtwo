import Eyebrow from '@/shared/ui/Eyebrow/Eyebrow';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import { features } from '@/entities/Feature/data/features';
import FeatureCard from '@/entities/Feature/ui/FeatureCard';
import styles from './Features.module.css';
export default function Features() {
    return <section className={styles.section} id="features"><div className={styles.head}><div>
        <Eyebrow>Продукт</Eyebrow>
        <SectionTitle>Всё, что нужно<br />для прямых продаж</SectionTitle>
    </div><p>Один личный кабинет управляет сайтом, приложением, акциями, программой лояльности и коммуникациями с гостями.</p></div>
        <div className={styles.grid}>{features.map(f => <FeatureCard key={f.id} feature={f} />)}</div></section>
}
