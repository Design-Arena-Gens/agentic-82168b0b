import clsx from 'clsx';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export function KPI({ title, value, delta, trend }: { title: string; value: string; delta: number; trend: 'up' | 'down' | 'flat' }) {
  const positive = trend === 'up';
  const neutral = trend === 'flat';
  const color = neutral ? 'text-slate-400' : positive ? 'text-emerald-400' : 'text-rose-400';
  const Icon = neutral ? null : positive ? ArrowUpRight : ArrowDownRight;
  return (
    <div className="card">
      <div className="card-inner space-y-3">
        <div className="text-sm text-slate-400">{title}</div>
        <div className="text-2xl font-semibold text-slate-100">{value}</div>
        <div className="text-xs flex items-center gap-1">
          {Icon ? <Icon size={16} className={clsx(color)} /> : <span className={clsx(color)}>?</span>}
          <span className={clsx(color)}>
            {delta > 0 ? '+' : ''}{delta}%
          </span>
          <span className="text-slate-500"> vs m?s anterior</span>
        </div>
      </div>
    </div>
  );
}
