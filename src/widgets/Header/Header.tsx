'use client'; import Logo from '@/shared/ui/Logo/Logo';
import Button from '@/shared/ui/Button/Button';
import { navigation } from '@/shared/config/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openDemo } from '@/features/modal/model/modalSlice';
import { toggleMenu, closeMenu } from '@/features/mobile-menu/model/mobileMenuSlice';
import styles from './Header.module.css';
export default function Header() {
    const dispatch = useAppDispatch();
    const open = useAppSelector(s => s.mobileMenu.isOpen);
    return <header className={styles.header}><Logo />
        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>{navigation.map(i =>
            <a key={i.href} href={i.href} onClick={() => dispatch(closeMenu())}>{i.label}</a>)}</nav>
        <div className={styles.desktop}>
            <Button variant="ghost" onClick={() => dispatch(openDemo())}>Получить демо</Button></div>
        <button className={styles.burger} aria-label="Меню" onClick={() => dispatch(toggleMenu())}>☰</button></header>
}
