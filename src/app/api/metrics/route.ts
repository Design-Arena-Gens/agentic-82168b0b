import { NextResponse } from 'next/server';

function rand(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function currencyBRL(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

export async function GET() {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const labels = months.slice(0, 12);
  const base = 200_000;
  const timeseries = labels.map((m, i) => base + i * 12000 + rand(-15000, 15000));

  const kpis = [
    { key: 'revenue', title: 'Receita', value: currencyBRL(timeseries.at(-1) || base), delta: rand(-5, 15), trend: 'up' as const },
    { key: 'orders', title: 'Pedidos', value: (rand(950, 1450)).toLocaleString('pt-BR'), delta: rand(-5, 10), trend: 'up' as const },
    { key: 'users', title: 'Novos clientes', value: (rand(150, 420)).toLocaleString('pt-BR'), delta: rand(-8, 8), trend: 'flat' as const },
    { key: 'conv', title: 'Convers?o', value: `${(Math.random() * 3 + 1).toFixed(2)}%`, delta: rand(-2, 5), trend: 'down' as const },
  ];

  const categories = {
    labels: ['Eletr?nicos', 'Casa', 'Moda', 'Beleza', 'Esportes', 'Outros'],
    sales: Array.from({ length: 6 }, () => rand(200, 900)),
  };

  const orders = Array.from({ length: 8 }).map((_, idx) => ({
    id: 1000 + idx,
    customer: ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gustavo', 'Helena'][idx],
    amount: rand(80, 1800),
    status: ['Pago', 'Enviado', 'Pendente'][rand(0, 2)],
    date: `${rand(10, 28)}/0${rand(6, 9)}/2025`,
  }));

  return NextResponse.json({
    kpis,
    timeseries: { labels, revenue: timeseries },
    categories,
    orders,
  });
}
