import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Painel moderno com gr?ficos e m?tricas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-background">
        <div className="grid grid-cols-[240px_1fr] min-h-screen">
          <aside className="hidden md:block border-r border-slate-800 bg-panel">
            <Sidebar />
          </aside>
          <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 container-padded py-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
