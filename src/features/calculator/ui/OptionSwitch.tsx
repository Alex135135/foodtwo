import styles from './Calculator.module.css';
export default function OptionSwitch({ active, label, onClick }: {
    active: boolean;
    label: string; onClick: () => void
}) { return <button className={`${styles.switch} ${active ? styles.on : ''}`} onClick={onClick}><i /> {label}</button> }
