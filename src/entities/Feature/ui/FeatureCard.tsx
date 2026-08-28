import type { Feature } from '../model/types'; import styles from './FeatureCard.module.css';
export default function FeatureCard({ feature }: { feature: Feature }) {
    return <article className={styles.card}>
        <span>{feature.id}</span>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p></article>
}
