import dotenv from 'dotenv';
dotenv.config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.6-flash",
  apiKey: process.env.GEMINI_API_KEY
});

export async function testAi(){
  model.invoke('what is capital of france').then((res)=>{
    console.log('this is ai testing ')
    console.log(res.text);
  }).catch((err)=>{
    console.log("Error: ",err)
  })
}