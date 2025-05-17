// src/app/(app)/calculators/grocery/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function GroceryCalculatorPage() {
  return (
    <div className="space-y-6">
      <Button variant="outline" asChild className="mb-4">
        <Link href="/calculators">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Calculators
        </Link>
      </Button>
      <header className="flex items-center space-x-3">
        <ShoppingCart className="h-8 w-8 text-primary" />
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Grocery Calculator</h1>
            <p className="text-muted-foreground">Estimate and track your grocery spending.</p>
        </div>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Grocery Spending Estimator</CardTitle>
          <CardDescription>
            This tool will help you plan your grocery budget. (Full functionality coming soon)
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center">
          <p className="text-muted-foreground">Grocery calculator interface will be here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
