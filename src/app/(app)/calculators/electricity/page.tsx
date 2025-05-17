// src/app/(app)/calculators/electricity/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, ArrowLeft } from "lucide-react";

export default function ElectricityCalculatorPage() {
  return (
    <div className="space-y-6">
      <Button variant="outline" asChild className="mb-4">
        <Link href="/calculators">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Calculators
        </Link>
      </Button>
      <header className="flex items-center space-x-3">
        <Zap className="h-8 w-8 text-primary" />
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Electricity Bill Estimator</h1>
            <p className="text-muted-foreground">Estimate your upcoming electricity bill.</p>
        </div>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Electricity Usage Estimator</CardTitle>
          <CardDescription>
            This tool will help you estimate your electricity costs. (Full functionality coming soon)
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center">
          <p className="text-muted-foreground">Electricity calculator interface will be here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
