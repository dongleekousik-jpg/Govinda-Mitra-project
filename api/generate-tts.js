import { GoogleGenAI, Modality } from "@google/genai";

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Robust API Key check - checking all common variations
  const apiKey = (
    process.env.API_KEY || 
    process.env.GOOGLE_API_KEY || 
    process.env.GEMINI_API_KEY || 
    process.env.VITE_API_KEY || 
    process.env.NEXT_PUBLIC_API_KEY || 
    ""
  ).trim();

  if (!apiKey) {
    console.error("CRITICAL: API Key missing in Vercel Environment Variables.");
    return res.status(500).json({ 
      error: 'Server Configuration Error', 
      details: 'API_KEY is missing. If you added it recently, you MUST REDEPLOY the project for changes to apply.' 
    });
  }

  // Handle body parsing
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  let { text } = body || {};
  
  if (!text) {
      return res.status(400).json({ error: 'No text provided' });
  }

  // Optimize text length
  if (text.length > 400) {
      const parts = text.split('.');
      let truncated = "";
      for (const part of parts) {
          if ((truncated.length + part.length) < 400) {
              truncated += part + ".";
          } else {
              break;
          }
      }
      text = truncated || text.substring(0, 400); 
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Use Gemini 2.5 Flash TTS model
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
            voiceConfig: {
              // 'Kore' is typically more balanced and realistic for general use
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
        },
        safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
        ],
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
        console.error("Model returned no audio data.");
        throw new Error("No audio data returned from model");
    }

    res.status(200).json({ base64Audio });
  } catch (error) {
    console.error('TTS API Error:', error);
    res.status(500).json({ error: 'Failed to generate speech', details: error.message });
  }
}