// src/app/(app)/calculators/fuel/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fuel, ArrowLeft } from "lucide-react";

export default function FuelCalculatorPage() {
  return (
    <div className="space-y-6">
      <Button variant="outline" asChild className="mb-4">
        <Link href="/calculators">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Calculators
        </Link>
      </Button>
      <header className="flex items-center space-x-3">
        <Fuel className="h-8 w-8 text-primary" />
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Fuel Cost Calculator</h1>
            <p className="text-muted-foreground">Calculate your fuel consumption and expenses.</p>
        </div>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Fuel Cost Estimator</CardTitle>
          <CardDescription>
            This tool will help you understand your fuel spending. (Full functionality coming soon)
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center">
          <p className="text-muted-foreground">Fuel calculator interface will be here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
