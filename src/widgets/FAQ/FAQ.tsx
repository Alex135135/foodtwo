import Eyebrow from '@/shared/ui/Eyebrow/Eyebrow';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import { faq } from '@/entities/FAQ/data/faq';
import FAQItem from '@/entities/FAQ/ui/FAQItem';
import styles from './FAQ.module.css';
export default function FAQ() {
    return
    <section className={styles.section} id="faq"><div><Eyebrow>FAQ</Eyebrow>
        <SectionTitle>Частые вопросы</SectionTitle></div><div>{faq.map(i => <FAQItem key={i.id} item={i} />)}</div></section>
}
