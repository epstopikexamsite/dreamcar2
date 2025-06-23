'use server';

import { getPersonalizedCarRecommendations } from '@/ai/flows/personalized-car-recommendations';

export async function getRecommendationsAction(preferences: string) {
  try {
    if (!preferences.trim()) {
      return { success: false, error: 'Sở thích không được để trống.' };
    }
    const result = await getPersonalizedCarRecommendations({ preferences });
    return { success: true, data: result };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'Đã xảy ra lỗi không xác định.';
    return { success: false, error: `Lấy gợi ý thất bại: ${errorMessage}` };
  }
}
