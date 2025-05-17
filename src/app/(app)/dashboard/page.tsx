// src/app/(app)/dashboard/page.tsx
import { SummaryCard } from '@/components/dashboard/summary-card';
import { TrendChart } from '@/components/dashboard/trend-chart';
import { AiBudgetOptimizer } from '@/components/dashboard/ai-budget-optimizer';
import type { Category } from '@/lib/types';
import { ShoppingCart, Fuel, Zap, Droplets } from 'lucide-react';

const mockCategories: Category[] = [
  { id: 'grocery', name: 'Groceries', icon: ShoppingCart, limit: 20000, currentSpending: 15500, unit: '₹' },
  { id: 'fuel', name: 'Fuel', icon: Fuel, limit: 8000, currentSpending: 6700, unit: '₹' },
  { id: 'electricity', name: 'Electricity', icon: Zap, limit: 3000, currentSpending: 3250, unit: '₹' },
  { id: 'water', name: 'Water', icon: Droplets, limit: 1000, currentSpending: 850, unit: '₹' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your finances.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {mockCategories.map(category => (
          <SummaryCard key={category.id} category={category} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrendChart />
        </div>
        <div className="lg:col-span-1">
          <AiBudgetOptimizer />
        </div>
      </section>
      
      {/* Placeholder for recent transactions or alerts */}
      <section>
         <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-md">
            <h2 className="text-xl font-semibold mb-3">Recent Activity & Alerts</h2>
            <p className="text-muted-foreground">
                Alerts for exceeding limits and recent transactions will appear here.
                (Feature coming soon)
            </p>
         </div>
      </section>
    </div>
  );
}
