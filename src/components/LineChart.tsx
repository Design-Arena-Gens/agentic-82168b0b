'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export function LineChart({ labels, series, loading }: { labels: string[]; series: number[]; loading?: boolean }) {
  if (loading) {
    return <div className="h-64 animate-pulse rounded-md bg-slate-800/40" />;
  }
  const data = {
    labels,
    datasets: [
      {
        label: 'Receita',
        data: series,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.15)',
        fill: true,
        tension: 0.35,
        pointRadius: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(148,163,184,0.08)' },
      },
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(148,163,184,0.08)' },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  } as const;

  return <div className="h-64"><Line data={data} options={options} /></div>;
}
