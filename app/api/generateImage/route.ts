import { NextResponse } from "next/server";
import openai from "@/lib/openai";
import cloudinary from "@/lib/cloudinary";


export const fetchCache = 'no-cache';

export async function POST(request: Request) {
    const body = await request.json();
    const { prompt } = body;
    console.log(prompt);
    try {
        // const response = await openai.createImage({
        //     prompt,
        //     n:1,
        //     size:'512x512',
        // })
        //
        // const image_url = response.data.data[0].url;
        const image_url: string  = 'https://placehold.co/600x400'
        if (!image_url || typeof image_url === 'object'){
            throw new Error("No response text");
        }
        console.log(image_url);
        
        const res = await cloudinary.v2.uploader.upload(image_url, {
            folder: 'simple-image-generator',
            use_filename: true,
            unique_filename: false,
            overwrite: false,
            context: `prompt: ${prompt}`
        });

        console.log(res);
        return NextResponse.json(
            image_url.toString().trim(),
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
