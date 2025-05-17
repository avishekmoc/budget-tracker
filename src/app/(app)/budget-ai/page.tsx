// src/app/(app)/budget-ai/page.tsx
import { AiBudgetOptimizer } from '@/components/dashboard/ai-budget-optimizer';
import { Bot } from "lucide-react";

export default function AiBudgetOptimizerPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center space-x-3">
        <Bot className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">AI Budget Optimizer</h1>
          <p className="text-muted-foreground">
            Let our AI help you find smart ways to save money by suggesting alternatives for your spending.
          </p>
        </div>
      </header>
      
      <section>
        <AiBudgetOptimizer />
      </section>

      <section className="p-6 border rounded-lg bg-card text-card-foreground shadow-md">
        <h2 className="text-xl font-semibold mb-3">How it Works</h2>
        <p className="text-muted-foreground mb-2">
          Tell the AI about an item you often buy, your budget for that item or category, and how much you&apos;re currently spending.
          Our AI will then analyze this information and provide:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
          <li>Suggestions for comparable but cheaper substitute items.</li>
          <li>Alternative strategies, like buying in bulk or choosing different brands.</li>
          <li>Reasoning behind its suggestions to help you make informed decisions.</li>
        </ul>
        <p className="text-muted-foreground mt-3">
          The goal is to help you stay within your limits without sacrificing too much!
        </p>
      </section>
    </div>
  );
}
