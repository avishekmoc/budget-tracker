// src/components/dashboard/ai-budget-optimizer.tsx
"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Bot, Sparkles } from "lucide-react";
import { suggestSubstitutions, type SuggestSubstitutionsInput, type SuggestSubstitutionsOutput } from '@/ai/flows/suggest-substitutions';

const optimizerSchema = z.object({
  item: z.string().min(3, { message: "Item name must be at least 3 characters." }),
  budget: z.coerce.number().positive({ message: "Budget must be a positive number." }),
  currentSpending: z.coerce.number().positive({ message: "Current spending must be a positive number." }),
});

type OptimizerFormValues = z.infer<typeof optimizerSchema>;

export function AiBudgetOptimizer() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestSubstitutionsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<OptimizerFormValues>({
    resolver: zodResolver(optimizerSchema),
    defaultValues: {
      item: "",
      budget: 0,
      currentSpending: 0,
    },
  });

  async function onSubmit(data: OptimizerFormValues) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestSubstitutions(data);
      setSuggestions(result);
      toast({
        title: "Suggestions Generated",
        description: "AI has provided some budget optimization tips.",
      });
    } catch (error) {
      console.error("AI Suggestion Error:", error);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: (error as Error).message || "Could not fetch suggestions at this time.",
      });
    }
    setIsLoading(false);
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="mr-2 h-6 w-6 text-primary" />
          AI Budget Optimizer
        </CardTitle>
        <CardDescription>
          Get smart suggestions to reduce overspending by finding comparable or substitute items.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="item"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overspent Item</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Premium Coffee Beans" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Budget for Item/Category (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentSpending"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Monthly Spending (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 750" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-4">
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              Get AI Suggestions
            </Button>
            
            {suggestions && (
              <div className="w-full p-4 border bg-muted/50 rounded-md space-y-3">
                <div>
                  <h4 className="font-semibold text-primary">Suggested Alternatives:</h4>
                  {suggestions.suggestions.length > 0 ? (
                    <ul className="list-disc list-inside pl-2 space-y-1 text-sm">
                      {suggestions.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">No specific alternatives found, but consider reducing frequency or portion size.</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">AI Reasoning:</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{suggestions.reasoning}</p>
                </div>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
