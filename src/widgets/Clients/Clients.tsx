import { clients } from '@/entities/Client/data/clients';
import styles from './Clients.module.css';
export default function Clients() {
    return <section className={styles.logos}>
        {clients.map(c => <span key={c.id}>{c.name}</span>)}
    </section>
}
