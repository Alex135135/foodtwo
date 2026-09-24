'use client'; import Eyebrow from '@/shared/ui/Eyebrow/Eyebrow';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Button from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/store/hooks';
import { openDemo } from '@/features/modal/model/modalSlice';
import styles from './CTA.module.css';
export default function CTA() {
    const dispatch = useAppDispatch();
    return <section className={styles.cta}><Eyebrow>Готовы расти?</Eyebrow>
        <SectionTitle>Запустите собственный<br />канал продаж</SectionTitle>
        <div className={styles.action}><Button variant="dark" onClick={() => dispatch(openDemo())}>Обсудить проект</Button></div>
    </section>
}
