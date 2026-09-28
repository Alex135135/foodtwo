import styles from './Hero.module.css';
export default function HeroVisual() {
    return <div className={styles.visual}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={styles.desktopUi}><div className={styles.uiTop}><i /><i /><i /></div>
            <div className={styles.uiBanner}>Ваш ужин<br /><b>уже близко</b></div><div className={styles.uiCards}>{['Пицца', 'Боулы', 'Роллы'].map((x, i) =>
                <div key={x}><span>{['🍕', '🥗', '🍣'][i]}</span><b>{x}</b></div>)}</div></div><div className={styles.phone}><div className={styles.notch} />
            <div className={styles.phoneTitle}>FOODFLOW</div><div className={styles.food}>🍜</div><h3>Лапша том-ям</h3><p>Остро, ярко, с кокосовым молоком</p><button>В корзину · 690 ₽</button>
        </div></div>
}
