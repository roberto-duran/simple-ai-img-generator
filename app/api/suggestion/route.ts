import openai from "@/lib/openai";

export async function GET(request: Request){
  const response = await openai.ChatCompletion.create({
    engine: "davinci",
    prompt: "This is a test",
    maxTokens: 1,
    temperature: 0.9,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
  });
  return new Response("Hello world!");
}