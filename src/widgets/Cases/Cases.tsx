import Eyebrow from '@/shared/ui/Eyebrow/Eyebrow';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import { cases } from '@/entities/Case/data/cases';
import CaseCard from '@/entities/Case/ui/CaseCard';
import styles from './Cases.module.css';
export default function Cases() {
    return <section className={styles.section} id="cases">
        <div className={styles.head}><div><Eyebrow>Результаты</Eyebrow>
            <SectionTitle>Растём вместе<br />с ресторанами</SectionTitle></div></div>
        <div className={styles.cases}>{cases.map(c => <CaseCard key={c.id} item={c} />)}</div></section>
}
