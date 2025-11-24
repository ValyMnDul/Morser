import { NextResponse, NextRequest } from "next/server";
import encode from '@/lib/encode.json'

export const POST = async (req:NextRequest) => {

    const encodeLib: Record<string,string> = encode;

    const text:string = (await req.json()).text; // text = hello

    const textChars = text.toLowerCase().split(''); // ['h','e','l','l','0']
    
    for(const char of textChars){
        console.log(encodeLib[char])
    }

}
