// src/app/(app)/calculators/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, Fuel, Zap, Droplets, CalculatorIcon } from "lucide-react";

const calculatorLinks = [
  { id: "grocery", name: "Grocery Calculator", icon: ShoppingCart, description: "Estimate your grocery expenses." },
  { id: "fuel", name: "Fuel Cost Calculator", icon: Fuel, description: "Calculate fuel consumption and costs." },
  { id: "electricity", name: "Electricity Bill Estimator", icon: Zap, description: "Estimate your upcoming electricity bill." },
  { id: "water", name: "Water Usage Tracker", icon: Droplets, description: "Track and estimate water usage." },
];

export default function CalculatorsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Calculators</h1>
        <p className="text-muted-foreground">Tools to help you estimate and manage your daily expenses.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {calculatorLinks.map(calc => {
          const Icon = calc.icon;
          return (
            <Card key={calc.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{calc.name}</CardTitle>
                </div>
                <CardDescription>{calc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/calculators/${calc.id}`}>Open Calculator</Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  (Individual calculator page coming soon)
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
       <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-md text-center">
            <CalculatorIcon className="h-10 w-10 text-primary mx-auto mb-3"/>
            <h2 className="text-xl font-semibold mb-2">More Calculators Coming Soon!</h2>
            <p className="text-muted-foreground">
                We&apos;re working on adding more useful tools to help you manage your finances effectively.
            </p>
         </div>
    </div>
  );
}
