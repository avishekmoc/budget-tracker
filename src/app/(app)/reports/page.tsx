// src/app/(app)/reports/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Reports</h1>
        <p className="text-muted-foreground">View your spending history and financial reports.</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="mr-2 h-6 w-6 text-primary" />
            Financial Overview
          </CardTitle>
          <CardDescription>
            Detailed reports and charts of your past usage and expenses will be available here.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-96 flex flex-col items-center justify-center text-center">
          <BarChart3 className="h-16 w-16 text-muted-foreground/50 mb-4" />
          <p className="text-lg font-medium text-muted-foreground">Reporting Feature Coming Soon</p>
          <p className="text-sm text-muted-foreground">
            Gain deeper insights into your spending habits with comprehensive reports.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
