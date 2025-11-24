'use client'
import { useRef,useEffect } from "react"

export default function MainPage(){

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

        }

        if(action === "decode"){
            console.log("Decoding..." + text );
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
        className="flex gap-5 w-full justify-center items-center flex-wrap"
        >
            <textarea
            id="text"
            ref={textRef}
            autoFocus
            placeholder="Type or paste text here..."
            className="bg-zinc-700 text-zinc-100 w-[40%] h-[300px] resize-none
            outline-none rounded-lg p-2 text-[21px] min-w-[200px]"
            ></textarea>

            <textarea
            id="output"
            className="bg-zinc-700 text-zinc-100 w-[40%] h-[300px] resize-none
            outline-none rounded-lg p-2 text-[21px] min-w-[200px]"
            readOnly
            title="You can&apos;t type here! Just for output."
            ></textarea>
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