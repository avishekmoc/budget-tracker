// src/lib/types.ts

import type { LucideIcon } from "lucide-react";

export type CategoryType = "grocery" | "fuel" | "electricity" | "water" | "other";

export interface Category {
  id: CategoryType;
  name: string;
  icon: LucideIcon; // Or string for custom icon paths
  limit: number; // Monthly limit
  currentSpending: number;
  unit?: string; // e.g., "kWh", "Liters", "₹"
}

export interface ExpenseItem {
  id: string;
  name: string;
  amount: number;
  date: string; // ISO date string
  category: CategoryType;
}

export interface TrendDataPoint {
  date: string; // e.g., "Jan", "Feb" or "W1", "W2"
  spent: number;
  limit?: number; // Optional: if limit changes over time or for comparison
  predicted?: number; // Optional: for future predictions
}
