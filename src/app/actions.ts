'use server';

import { getPersonalizedCarRecommendations } from '@/ai/flows/personalized-car-recommendations';

export async function getRecommendationsAction(preferences: string) {
  try {
    if (!preferences.trim()) {
      return { success: false, error: 'Preferences cannot be empty.' };
    }
    const result = await getPersonalizedCarRecommendations({ preferences });
    return { success: true, data: result };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to get recommendations: ${errorMessage}` };
  }
}
