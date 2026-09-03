export default function RangeField({ label, value, min, max, step = 1, onChange }:
    { label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void }) { return <label>{label}<b>{value}</b><input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(+e.target.value)} /></label> }
