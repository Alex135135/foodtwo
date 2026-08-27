import type { FAQItem as FAQItemType } from '../model/types';
import styles from './FAQItem.module.css';

export default function FAQItem({ item }: { item: FAQItemType }) {
    return (
        <details className={styles.item}>
            <summary>
                {item.question}
                <b>+</b>
            </summary>
            <p>{item.answer}</p>
        </details>
    );
}