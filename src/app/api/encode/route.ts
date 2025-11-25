import { NextResponse, NextRequest } from "next/server";
import encode from '@/lib/encode.json'

export const POST = async (req:NextRequest) => {

    const encodeLib: Record<string,string> = encode;

    const text:string = (await req.json()).text;
    console.log("\"" + text + "\"")

    const textChars = text.toLowerCase().split('');
    
    const outputFromServer = textChars.map((char) => (
        encodeLib[char] !== undefined ? encodeLib[char] : "<Unknown>"
    )).join("  ");

    return NextResponse.json({outputFromServer},{status:200})
}
