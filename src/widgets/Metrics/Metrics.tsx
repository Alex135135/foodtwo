import { metrics } from '@/entities/Metric/data/metrics';
import MetricItem from '@/entities/Metric/ui/MetricItem';
import styles from './Metrics.module.css';
export default function Metrics() {
    return
    <section className={styles.metrics}>{metrics.map(m => <MetricItem key={m.id} metric={m} />)}</section>
}
