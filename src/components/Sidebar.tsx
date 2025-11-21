import { BarChart3, LayoutDashboard, Settings, ShoppingBag, Users } from 'lucide-react';

export function Sidebar() {
  const items = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { icon: <ShoppingBag size={18} />, label: 'Vendas' },
    { icon: <Users size={18} />, label: 'Clientes' },
    { icon: <BarChart3 size={18} />, label: 'Relat?rios' },
  ];
  return (
    <div className="p-4">
      <div className="px-2 py-3 mb-4 text-slate-200 font-semibold tracking-tight">ACME Analytics</div>
      <nav className="space-y-1">
        {items.map((it) => (
          <a key={it.label} className="flex items-center gap-2 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition" href="#">
            {it.icon}
            <span className="text-sm">{it.label}</span>
          </a>
        ))}
      </nav>
      <div className="mt-6 border-t border-slate-800 pt-4">
        <a className="flex items-center gap-2 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition" href="#">
          <Settings size={18} />
          <span className="text-sm">Configura??es</span>
        </a>
      </div>
    </div>
  );
}
