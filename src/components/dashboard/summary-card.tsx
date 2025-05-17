// src/components/dashboard/summary-card.tsx
import type { Category } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LimitProgress } from "./limit-progress";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface SummaryCardProps {
  category: Category;
}

export function SummaryCard({ category }: SummaryCardProps) {
  const IconComponent = category.icon as LucideIcon;

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-xl">
            <IconComponent className="mr-3 h-6 w-6 text-primary" />
            {category.name}
          </CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/calculators/${category.id}`}>
              Details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <CardDescription>
          Monthly spending and limit for {category.name.toLowerCase()}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LimitProgress current={category.currentSpending} limit={category.limit} unit={category.unit} />
      </CardContent>
    </Card>
  );
}
