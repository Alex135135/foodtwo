'use client';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';
import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'dark'; full?: boolean; children: ReactNode };
export default function Button({
    variant = 'primary',
    full = false,
    className,
    children,
    ...props }: Props) {
    return <button className={cn(
        styles.button,
        styles[variant],
        full && styles.full,
        className)} {...props}>{children}</button>;
}
