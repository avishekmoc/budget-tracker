// src/components/dashboard/trend-chart.tsx
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import type { TrendDataPoint } from "@/lib/types";

const mockTrendData: TrendDataPoint[] = [
  { date: "Jan", spent: 2800, limit: 5000, predicted: 3000 },
  { date: "Feb", spent: 3200, limit: 5000, predicted: 3100 },
  { date: "Mar", spent: 2900, limit: 5000, predicted: 3300 },
  { date: "Apr", spent: 4100, limit: 5000, predicted: 4000 },
  { date: "May", spent: 3500, limit: 5000, predicted: 3800 },
  { date: "Jun", spent: 0, limit: 5000, predicted: 3900 }, // Current month example
];

const chartConfig = {
  spent: {
    label: "Spent",
    color: "hsl(var(--primary))",
  },
  predicted: {
    label: "Predicted",
    color: "hsl(var(--secondary))",
  },
  limit: {
    label: "Limit",
    color: "hsl(var(--destructive))",
  },
} satisfies ChartConfig

export function TrendChart() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Spending Trends</CardTitle>
        <CardDescription>Your spending patterns over the last few months against your budget.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockTrendData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tickMargin={8} 
                tickFormatter={(value) => `₹${value / 1000}k`}
              />
              <Tooltip
                cursor={{ fill: "hsl(var(--muted))" }}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="spent" fill="var(--color-spent)" radius={4} />
              <Bar dataKey="predicted" fill="var(--color-predicted)" radius={4} />
              {/* A line for limit might be better, but BarChart is simpler for now */}
              {/* <Line type="monotone" dataKey="limit" stroke="var(--color-limit)" strokeDasharray="5 5" /> */}
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
