// src/ai/flows/suggest-substitutions.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting substitute items to reduce overspending.
 *
 * - suggestSubstitutions - A function that takes an item and a budget and returns suggestions for cheaper alternatives.
 * - SuggestSubstitutionsInput - The input type for the suggestSubstitutions function.
 * - SuggestSubstitutionsOutput - The return type for the suggestSubstitutions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSubstitutionsInputSchema = z.object({
  item: z.string().describe('The item the user is currently spending on.'),
  budget: z.number().describe('The budget the user is trying to stay within.'),
  currentSpending: z.number().describe('The current spending on the item.'),
});
export type SuggestSubstitutionsInput = z.infer<typeof SuggestSubstitutionsInputSchema>;

const SuggestSubstitutionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of suggested substitute items.'),
  reasoning: z.string().describe('The AI reasoning behind the suggestions.'),
});
export type SuggestSubstitutionsOutput = z.infer<typeof SuggestSubstitutionsOutputSchema>;

export async function suggestSubstitutions(input: SuggestSubstitutionsInput): Promise<SuggestSubstitutionsOutput> {
  return suggestSubstitutionsFlow(input);
}

const suggestSubstitutionsPrompt = ai.definePrompt({
  name: 'suggestSubstitutionsPrompt',
  input: {schema: SuggestSubstitutionsInputSchema},
  output: {schema: SuggestSubstitutionsOutputSchema},
  prompt: `You are a personal shopping assistant. A user is trying to reduce spending.

You are trying to help the user find cheaper alternatives to items they are currently purchasing.

Suggest alternative items the user can purchase instead of the item, in order to stay within their budget.

Item: {{{item}}}
Budget: {{{budget}}}
Current Spending: {{{currentSpending}}}

Output a list of suggestions, and also explain your reasoning.
`,
});

const suggestSubstitutionsFlow = ai.defineFlow(
  {
    name: 'suggestSubstitutionsFlow',
    inputSchema: SuggestSubstitutionsInputSchema,
    outputSchema: SuggestSubstitutionsOutputSchema,
  },
  async input => {
    const {output} = await suggestSubstitutionsPrompt(input);
    return output!;
  }
);
