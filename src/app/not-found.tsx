import Link from 'next/link';
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <p className={styles.code}>404</p>
                <h1 className={styles.title}>Страница не найдена</h1>
                <p className={styles.description}>
                    Вернитесь на главную FoodFlow.
                </p>
                <Link href="/" className={styles.link}>
                    На главную →
                </Link>
            </div>
        </main>
    );
}
