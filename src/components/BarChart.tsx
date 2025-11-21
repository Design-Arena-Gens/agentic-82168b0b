'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export function BarChart({ labels, series, loading }: { labels: string[]; series: number[]; loading?: boolean }) {
  if (loading) {
    return <div className="h-64 animate-pulse rounded-md bg-slate-800/40" />;
  }
  const data = {
    labels,
    datasets: [
      {
        label: 'Vendas',
        data: series,
        backgroundColor: '#22d3ee',
        borderRadius: 6,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: '#94a3b8' },
        grid: { display: false },
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

  return <div className="h-64"><Bar data={data} options={options} /></div>;
}
