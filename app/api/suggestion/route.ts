import openai from "@/lib/openai";
import 'server-only';
import { NextResponse } from "next/server";
export const fetchCache = 'no-cache';

export async function GET(request: Request){
  try {
    const response = await openai.createCompletion({
      model: "text-curie-001",
      prompt: "Write a random text prompt for DALL·E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white etc.  Do not wrap the answer in quotes.",
      max_tokens: 100,
      temperature: 0.8,
      stop:'the end'
    });
    const responseText = response.data.choices[0].text;
    console.log(responseText);
    if (!responseText || typeof responseText === 'object'){
      throw new Error("No response text");
    }
    return NextResponse.json(
        responseText.toString().trim(),
        {
          status: 200,
        }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(JSON.stringify(error),{
      status: 500,
    });
  }
}
