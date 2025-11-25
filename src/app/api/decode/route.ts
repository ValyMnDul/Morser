import { NextResponse, NextRequest } from "next/server";
import decode from '@/lib/decode.json'

export const POST = async (req:NextRequest) => {

    const decodeLib:Record<string,string> = decode;

    const text:string = (await req.json()).text;
    console.log("\"" + text + "\"");

    const morseChars = text.split('  ');
    console.log(morseChars)

    const outputFromTheServer = morseChars.map((char) => (
        decodeLib[char] !== undefined ? decodeLib[char] : "<Unknown>"
    )).join("");

    return NextResponse.json({outputFromTheServer},{status:200});
}
