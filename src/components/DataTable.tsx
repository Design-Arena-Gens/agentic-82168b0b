export function DataTable({ rows, loading }: { rows: any[]; loading?: boolean }) {
  if (loading) {
    return <div className="h-40 animate-pulse rounded-md bg-slate-800/40" />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-slate-400">
            <th className="py-2 pr-6">Pedido</th>
            <th className="py-2 pr-6">Cliente</th>
            <th className="py-2 pr-6">Valor</th>
            <th className="py-2 pr-6">Status</th>
            <th className="py-2 pr-6">Data</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-slate-800">
              <td className="py-2 pr-6 text-slate-200">#{r.id}</td>
              <td className="py-2 pr-6 text-slate-300">{r.customer}</td>
              <td className="py-2 pr-6 text-slate-200">R$ {r.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
              <td className="py-2 pr-6">
                <span className="px-2 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700">{r.status}</span>
              </td>
              <td className="py-2 pr-6 text-slate-400">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
