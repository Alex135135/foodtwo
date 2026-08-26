import type { Case } from '../model/types';
import styles from './CaseCard.module.css';

interface CaseCardProps {
    item: Case;
}

export default function CaseCard({ item }: CaseCardProps) {
    const { tag, title, metric, description, theme } = item;

    return (
        <article className={`${styles.card} ${styles[theme]}`}>
            <div className={styles.tag}>{tag}</div>
            <h3>{title}</h3>
            <b>{metric}</b>
            <span>{description}</span>
        </article>
    );
}