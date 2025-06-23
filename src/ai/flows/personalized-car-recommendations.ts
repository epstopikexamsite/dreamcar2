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
  preferences: z.string().describe('Sở thích của người dùng để gợi ý xe.'),
});
export type PersonalizedCarRecommendationsInput = z.infer<typeof PersonalizedCarRecommendationsInputSchema>;

const PersonalizedCarRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('Các gợi ý xe được cá nhân hóa.'),
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
  prompt: `Bạn là một chuyên gia tư vấn xe hơi.

  Dựa trên sở thích của người dùng, hãy đưa ra những gợi ý xe được cá nhân hóa.

  Sở thích người dùng: {{{preferences}}}
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
