import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize the Google AI SDK.
// Ensure the GEMINI_API_KEY is set in your .env.local file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const GEMINI_MODEL = 'gemini-2.0-flash';

export async function POST(req: Request) {
    try {
        const { conversation } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            throw new Error('GEMINI_API_KEY is not defined in environment variables.');
        }
        if (!Array.isArray(conversation)) {
            throw new Error('Conversation history must be an array!');
        }

        // Map frontend roles to Gemini roles ('user' and 'model')
        // Filter out initial model message (greeting) - Gemini requires first message to be from user
        const filteredConversation = conversation.filter((msg, index) => {
            if (index === 0 && msg.role === 'model') return false; // Skip initial greeting
            return true;
        });

        const contents = filteredConversation.map(({ role, text }) => ({
            role: role === 'user' ? 'user' : 'model',
            parts: [{ text }]
        }));
        
        // Get the generative model
        const model = genAI.getGenerativeModel({ 
            model: GEMINI_MODEL,
            systemInstruction: 'Anda adalah asisten Property yang membantu menjawab pertanyaan seputar properti, real estate, dan investasi properti. Jawaban yang diberikan harus akurat, informatif, dan relevan dengan topik properti. Jika pertanyaan tidak terkait dengan properti, jawab dengan sopan bahwa Anda hanya dapat membantu dengan pertanyaan seputar properti.'
        });

        // Start chat with history
        const chat = model.startChat({
            history: contents.slice(0, -1), // Pass all messages except the last one
        });
        
        // Send the last message
        const lastMessage = contents[contents.length - 1]?.parts[0]?.text || '';
        const result = await chat.sendMessage(lastMessage);
        const text = result.response.text();

        return NextResponse.json({ result: text });

    } catch (e: any) {
        console.error('Chat API Error:', e); // Log the full error to the server console
        return NextResponse.json({ error: e.message || 'An internal server error occurred.' }, { status: 500 });
    }
}
