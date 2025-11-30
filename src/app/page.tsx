'use client'
import { useRef, useState ,useEffect } from "react"
import { Volume2 } from 'lucide-react';
import { useMorseSound } from "@/hooks/useMorseSound";
import { isMorseText } from "@/functions/detectText";
import { say } from '@/functions/say';

export default function MainPage(){

    const { playMorseCode } = useMorseSound();

    const [output,setOutput] = useState<string>("");

    const textRef = useRef<HTMLTextAreaElement>(null);

    const handler = async (action:string) => {

        const text = textRef.current ? textRef.current.value : "";

        if(action === "encode"){
            console.log("Encoding..." + text );

            const res = await fetch('/api/encode',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({text:text})
            });

            if(res.status === 200){
                const {outputFromServer} = await res.json();
                setOutput(outputFromServer);
            }

        }

        if(action === "decode"){
            console.log("Decoding..." + text );

            const res = await fetch('/api/decode',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({text:text})
            });

            if(res.status === 200){
                const {outputFromTheServer} = await res.json();
                setOutput(outputFromTheServer);
            }
        }
    }

    useEffect(()=>{

        if(textRef.current){
            textRef.current.focus();
        }

        const handleKeyDown = (e:KeyboardEvent) => {

            if(e.ctrlKey && e.shiftKey && e.key === "Enter"){
                return;
            }

            if(e.ctrlKey && e.key === "Enter"){
                e.preventDefault();
                handler("encode");
            }

            if(e.shiftKey && e.key === "Enter"){
                e.preventDefault();
                handler("decode");
            }
        }

        document.addEventListener('keydown',handleKeyDown)

        return () => {
            document.removeEventListener('keydown',handleKeyDown)
        }

    },[]);

    return(
    <main
    className="w-full h-full px-10 flex flex-1 flex-col items-center
    justify-center gap-10"
    >
        <h1
        className="text-5xl text-zinc-100 font-mono"
        >
            Morse Code <span className="text-yellow-200">Translator</span>
        </h1>

        <div
        className="flex gap-5 w-full justify-center"
        >
            <div
            className="flex flex-col w-[37%]"
            >
                <textarea
                id="text"
                ref={textRef}
                autoFocus
                placeholder="Type or paste text here..."
                className="bg-zinc-700 text-zinc-100 w-full h-[300px] resize-none
                outline-none rounded-t-lg py-1 px-3 text-[23px] min-w-[200px]"
                ></textarea>  

                <div
                className="bg-zinc-600 w-full h-10 rounded-b-lg px-4
                flex items-center"
                >
                    <Volume2
                    width={34}
                    height={34}
                    className="cursor-pointer text-zinc-900 hover:bg-zinc-700
                    rounded-lg transition-colors p-1"
                    onClick={() => {
                        if(textRef.current && textRef.current.value){

                            const text = textRef.current.value;

                            if(isMorseText(text)){
                                playMorseCode(text);
                            }
                            else {
                                say(text);
                            }
                        }
                    }}
                    />

                </div>     

            </div>

            <div
            className="flex flex-col w-[37%]"
            >
                <textarea
                id="output"
                value={output}
                className="bg-zinc-700 text-zinc-100 full h-[300px] resize-none
                outline-none rounded-t-lg py-1 px-3 text-[25px] min-w-[200px] cursor-default"
                readOnly
                title="You can&apos;t type here! Just for output."
                ></textarea>

                <div
                className="bg-zinc-600 w-full h-10 rounded-b-lg px-4
                flex items-center"
                >
                    <Volume2
                    width={34}
                    height={34}
                    className="cursor-pointer text-zinc-900 hover:bg-zinc-700
                    rounded-lg transition-colors p-1"
                    onClick={()=>{

                        if(isMorseText(output)){
                            playMorseCode(output);
                        }
                        else {
                            say(output);
                        }
                    }}
                    />
                    
                </div>  

            </div>
            
        </div>

        <p className="text-zinc-400 text-sm">
            Press <kbd>Ctrl+Enter</kbd> to encode or <kbd>Shift+Enter</kbd> to decode
        </p>

        <div 
        className="flex gap-x-3.5 mb-10 -mt-5"
        >
            <button
            className="text-2xl text-zinc-800 bg-yellow-200 px-2.5 py-1.5 rounded-lg
            cursor-pointer"
            onClick={()=>{
                handler("encode");
            }}
            >
                Encode
            </button>

            <button
            className="text-2xl text-zinc-100 border-2 px-2.5 py-1.5 rounded-lg
            cursor-pointer"
            onClick={()=>{
                handler("decode");
            }}
            >
                Decode
            </button>

        </div>

    </main>
    )
}