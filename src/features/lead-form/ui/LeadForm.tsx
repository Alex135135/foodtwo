'use client';
import { useState, type FormEvent } from 'react';
import { submitLead } from '../api/submitLead';
import Button from '@/shared/ui/Button/Button';
import styles from './LeadForm.module.css';

export default function LeadForm({ onSuccess }:
    { onSuccess: () => void }) {
        const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false); async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault(); setLoading(true); const fd = new FormData(e.currentTarget);
        await submitLead({
            name: String(fd.get('name') || ''), phone: String(fd.get('phone') || ''),
            company: String(fd.get('company') || '')
        }); setLoading(false); setSent(true); setTimeout(onSuccess, 700)
    }
    return sent ? <p>Спасибо! Заявка принята.</p> : <form className={styles.form} onSubmit={onSubmit}>
        <input name="name" required placeholder="Ваше имя" />
        <input name="phone" required type="tel" placeholder="Телефон" />
        <input name="company" placeholder="Название ресторана" />
        <Button full disabled={loading}>{loading ? 'Отправляем...' : 'Отправить заявку'}</Button></form>
}
