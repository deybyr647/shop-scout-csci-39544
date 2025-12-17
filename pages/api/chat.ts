import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { messages, product, reviews } = req.body;

        if (!messages || !product) {
            return res.status(400).json({ message: 'Missing messages or product data' });
        }

        // 1. Construct the System Prompt
        // This tells the AI who it is and gives it the context of the CURRENT product.
        const systemPrompt = `
      You are Scout, a helpful and enthusiastic AI shopping assistant for a store called "ShopScout".
      
      You are currently helping a user view a specific product. Here are the details:
      - Name: ${product.name}
      - Price: $${product.price}
      - Seller: ${product.seller}
      - Description/Specs: (Inferred from name: ${product.name})
      
      Here are some recent customer reviews for this product:
      ${reviews.map((r: any) => `- "${r.content}" (${r.rating} stars)`).join('\n')}
      
      Instructions:
      - Answer the user's questions specifically about THIS product.
      - Use the review data to summarize sentiment if asked (e.g., "Most users love the battery life...").
      - If you don't know a specific technical detail (like exact dimensions if not obvious), be honest but helpful.
      - Keep responses concise and friendly (under 3-4 sentences is usually best).
      - Encourage the user to buy the product if it seems like a good fit.
    `;

        // 2. Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // or "gpt-4" if you have access and budget
            messages: [
                { role: "system", content: systemPrompt },
                ...messages // Pass the chat history so it remembers previous turns
            ],
            temperature: 0.7,
            max_tokens: 150,
        });

        // 3. Return the response
        const aiMessage = completion.choices[0].message;
        res.status(200).json({ message: aiMessage });

    } catch (error) {
        console.error('OpenAI Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}