// src/ai/flows/personalized-car-recommendations.ts
'use server';

/**
 * @fileOverview Provides personalized car recommendations based on user preferences.
 *
 * - getPersonalizedCarRecommendations - A function that returns personalized car recommendations.
 * - PersonalizedCarRecommendationsInput - The input type for the getPersonalizedCarRecommendations function.
 * - PersonalizedCarRecommendationsOutput - The return type for the getPersonalizedCarRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedCarRecommendationsInputSchema = z.object({
  preferences: z.string().describe('The user preferences for car recommendations.'),
});
export type PersonalizedCarRecommendationsInput = z.infer<typeof PersonalizedCarRecommendationsInputSchema>;

const PersonalizedCarRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('The personalized car recommendations.'),
});
export type PersonalizedCarRecommendationsOutput = z.infer<typeof PersonalizedCarRecommendationsOutputSchema>;

export async function getPersonalizedCarRecommendations(
  input: PersonalizedCarRecommendationsInput
): Promise<PersonalizedCarRecommendationsOutput> {
  return personalizedCarRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedCarRecommendationsPrompt',
  input: {schema: PersonalizedCarRecommendationsInputSchema},
  output: {schema: PersonalizedCarRecommendationsOutputSchema},
  prompt: `You are an expert car recommendation agent.

  Based on the user's preferences, provide personalized car recommendations.

  User Preferences: {{{preferences}}}
  `,
});

const personalizedCarRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedCarRecommendationsFlow',
    inputSchema: PersonalizedCarRecommendationsInputSchema,
    outputSchema: PersonalizedCarRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
