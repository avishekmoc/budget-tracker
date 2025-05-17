// src/components/dashboard/limit-progress.tsx
"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface LimitProgressProps {
  current: number;
  limit: number;
  unit?: string;
}

export function LimitProgress({ current, limit, unit = "₹" }: LimitProgressProps) {
  const percentage = limit > 0 ? Math.min((current / limit) * 100, 100) : 0;
  const isOverLimit = current > limit && limit > 0;

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span className={cn("font-medium", isOverLimit ? "text-destructive" : "text-foreground")}>
          {unit}{current.toLocaleString()}
        </span>
        <span className="text-muted-foreground">
          Limit: {unit}{limit.toLocaleString()}
        </span>
      </div>
      <Progress value={percentage} className={cn("h-2", isOverLimit ? "[&>div]:bg-destructive" : "")} />
      {isOverLimit && (
        <p className="text-xs text-destructive mt-1 text-right">
          You&apos;ve exceeded your limit by {unit}{(current - limit).toLocaleString()}!
        </p>
      )}
    </div>
  );
}
