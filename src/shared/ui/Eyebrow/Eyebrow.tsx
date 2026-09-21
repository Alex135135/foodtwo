import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';
export default function Eyebrow({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
    return <div className={`${styles.eyebrow} 
${accent ? styles.accent : ''}`}>
        {children}</div>
}
