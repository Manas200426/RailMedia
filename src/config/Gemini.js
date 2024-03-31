

// node --version # Should be >= 18
// npm install @google/generative-ai

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyBW-Pr8nSg7dXf7mlLvZgroQaBx_S7_Kt0";

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

 
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "Hello , you are railmedia ai , created for assisting on railway issues , and helping them to solve all the problems of railways , you will not any other questions , your job is to answer queries related to railways only ,if any other questions is asked which is unrelated then give user output , sorry i can only assist you for railway related queries ."}],
      },
      {
        role: "model",
        parts: [{ text: "Sorry, I can only assist you with railway-related queries. If you have any questions about railways, please feel free to ask."}],
      },
      {
        role: "user",
        parts: [{ text: "In\nthe existing scenario, passengers traveling on Indian Railways face numerous challenges and inconveniences, including unhygienic compartments, poor food\nquality, malfunctioning fans and air conditioners, unsanitary restroom\nfacilities, overcrowded trains, delayed or canceled services, lack of\ncleanliness in common areas,\nand safety concerns due to inadequate lighting or security measures. Despite\nefforts to raise complaints through social media platforms like Twitter, these grievances often go unnoticed by\nthe relevant authorities,\nresulting in prolonged issues and dissatisfaction among travellers. This issue\ncan be overcome by implementing a specialized social\nmedia platform exclusively designed for Indian Railways, providing passengers with a direct channel to report their\nconcerns in real-time. By facilitating\nimmediate communication between passengers and railway authorities, the\nplatform seeks to streamline\nthe complaint resolution process,\nensuring that issues are promptly acknowledged and addressed. This solution not\nonly enhances the travel experience for\npassengers but also contributes to the\noverall improvement of service quality and safety on Indian Railways."}],
      },
      {
        role: "model",
        parts: [{ text: "I am happy to Help"}],
      },
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

 export default runChat;