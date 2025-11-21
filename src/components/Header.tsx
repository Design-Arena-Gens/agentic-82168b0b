import { Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-slate-800">
      <div className="container-padded h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden font-semibold">ACME</div>
          <div className="relative hidden md:block">
            <input
              className="bg-panel border border-slate-800 rounded-md pl-8 pr-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Buscar..."
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-md hover:bg-slate-800 text-slate-300">
            <Bell size={18} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
        </div>
      </div>
    </header>
  );
}
