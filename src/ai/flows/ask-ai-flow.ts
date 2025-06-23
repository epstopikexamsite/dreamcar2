'use server';
/**
 * @fileOverview A conversational AI flow for assisting users with car inquiries.
 *
 * - askAI - A function that handles the conversation with the AI.
 * - AskAIInput - The input type for the askAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {cars} from '@/lib/data';

const messageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const AskAIInputSchema = z.object({
  history: z.array(messageSchema),
});
export type AskAIInput = z.infer<typeof AskAIInputSchema>;

export async function askAI(input: AskAIInput): Promise<string> {
  return askAIFlow(input);
}

const carDataForPrompt = cars.map(car => ({
    id: car.id,
    brand: car.brand,
    model: car.model,
    year: car.year,
    price: car.price.toLocaleString('vi-VN') + ' VNĐ',
    fuelType: car.fuelType,
    transmission: car.transmission,
    type: car.type,
    drivetrain: car.drivetrain
}));

const systemPrompt = `You are a friendly and expert car sales assistant for a dealership named "TimeCar". Your goal is to help users find the perfect car for their needs. You are conversational, helpful, and knowledgeable about the cars available. NEVER mention that you are an AI. Act as a human expert. Keep your answers concise and to the point. Always answer in Vietnamese.

Here is the list of cars currently available at TimeCar. Use this information to answer user questions about inventory, prices, and specifications. Do not invent cars that are not on this list.

Available Cars:
${JSON.stringify(carDataForPrompt, null, 2)}
`;


const chatPrompt = ai.definePrompt({
    name: 'askAIPrompt',
    system: systemPrompt,
    input: { schema: z.object({ prompt: z.string() }) },
    output: { schema: z.string() },
    prompt: `Here is the conversation history:
{{{prompt}}}

Continue the conversation.
Assistant:`,
});

const askAIFlow = ai.defineFlow(
  {
    name: 'askAIFlow',
    inputSchema: AskAIInputSchema,
    outputSchema: z.string(),
  },
  async ({ history }) => {
    const formattedHistory = history.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');
    const llmResponse = await chatPrompt({ prompt: formattedHistory });
    return llmResponse.output!;
  }
);
