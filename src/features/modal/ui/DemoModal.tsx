'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeDemo } from '../model/modalSlice';
import LeadForm from '@/features/lead-form/ui/LeadForm'; import Eyebrow from '@/shared/ui/Eyebrow/Eyebrow';
import styles from './DemoModal.module.css';
export default function DemoModal() {
    const dispatch = useAppDispatch();
    const open = useAppSelector(s => s.modal.demoOpen); if (!open) return null;
    return <div className={styles.backdrop} onMouseDown={() => dispatch(closeDemo())}>
        <div className={styles.modal} onMouseDown={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => dispatch(closeDemo())}>×</button>
            <Eyebrow>Бесплатная консультация</Eyebrow><h2>Покажем платформу<br />на вашем сценарии</h2>
            <LeadForm onSuccess={() => dispatch(closeDemo())} /><small>Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</small></div></div>
}
