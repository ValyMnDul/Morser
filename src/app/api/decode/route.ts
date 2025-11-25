import { NextResponse, NextRequest } from "next/server";

export const POST = async (req:NextRequest) => {

    const text:string = (await req.json()).text;
    console.log("\"" + text + "\"");

    const outputFromTheServer =1

    return NextResponse.json({outputFromTheServer},{status:200});
}
