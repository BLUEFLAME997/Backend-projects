import { initChatModel } from "langchain";

process.env.GOOGLE_API_KEY = "your-api-key";

const model = await initChatModel({
  model:"google-genai:gemini-3.7-flash",
  apiKey:""
});
// ai implementation