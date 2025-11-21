'use client';

import { useEffect, useMemo, useState } from 'react';
import { KPI } from '../components/KPI';
import { LineChart } from '../components/LineChart';
import { BarChart } from '../components/BarChart';
import { DataTable } from '../components/DataTable';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/metrics');
        const json = await res.json();
        setData(json);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const kpis = useMemo(() => data?.kpis ?? [], [data]);

  return (
    <div className="space-y-6">
      <div className="grid-auto">
        {kpis.map((k: any) => (
          <KPI key={k.key} title={k.title} value={k.value} delta={k.delta} trend={k.trend} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="card xl:col-span-2">
          <div className="card-inner">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-100">Receita mensal</h2>
            </div>
            <LineChart loading={loading} labels={data?.timeseries?.labels ?? []} series={data?.timeseries?.revenue ?? []} />
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-100">Vendas por categoria</h2>
            </div>
            <BarChart loading={loading} labels={data?.categories?.labels ?? []} series={data?.categories?.sales ?? []} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-100">Pedidos recentes</h2>
          </div>
          <DataTable loading={loading} rows={data?.orders ?? []} />
        </div>
      </div>
    </div>
  );
}
