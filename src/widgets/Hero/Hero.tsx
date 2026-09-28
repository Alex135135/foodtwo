'use client'; import Eyebrow from '@/shared/ui/Eyebrow/Eyebrow';
import Button from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/store/hooks';
import { openDemo } from '@/features/modal/model/modalSlice';
import HeroVisual from './HeroVisual'; import styles from './Hero.module.css';
export default function Hero() {
    const dispatch = useAppDispatch(); return
    <section className={styles.hero} id="top"><div className={styles.copy}>
        <Eyebrow>Собственный канал продаж для ресторанов</Eyebrow><h1>Больше заказов.<br /><em>Меньше комиссии.</em>
        </h1><p>Сайт, приложение, лояльность и аналитика в одной платформе. Запуск за 21 день без собственной команды разработки.</p>
        <div className={styles.actions}><Button onClick={() => dispatch(openDemo())}>Начать бесплатно</Button><a className={styles.link} href="#features">Смотреть возможности ↓</a>
        </div><div className={styles.trust}><b>4,9</b><span>средняя оценка<br />приложений клиентов</span><b>2 400+</b><span>ресторанов<br />уже с нами</span></div>
    </div><HeroVisual /></section>
}
