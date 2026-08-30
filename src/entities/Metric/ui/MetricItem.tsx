import type { Metric } from '../model/types';
import styles from './MetricItem.module.css';
export default function MetricItem({ metric }: { metric: Metric }) {
    return
    <div className={styles.item}>
        <b>{metric.value}</b>
        <span>{metric.label}</span></div>
}
