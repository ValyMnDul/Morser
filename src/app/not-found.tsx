'use client'
import { useRouter } from "next/navigation"

export default function NotFoundPage(){

    const router = useRouter();

    return (
        <main
        className="h-full w-full flex flex-col items-center justify-center text-center
        flex-1"
        >
            <p
            className="text-zinc-100 text-[120px] font-mono"
            >
                Oops
            </p>

            <p
            className="text-zinc-100 text-4xl font-mono mb-4 border-b-2 border-b-yellow-200"
            >
                4<span className="font-sans">0</span>4 - Page Not Found
            </p>

            <p
            className="text-zinc-100 text-xl font-mono mb-10"
            >
                The page you are looking for does not exist.
            </p>

            <button
            className="text-zinc-100 font-mono border-2 border-zinc-100 px-3 py-2
            rounded-xl text-xl cursor-pointer mb-30 hover:bg-zinc-600"
            onClick={()=>{
                router.push('/');
            }}
            >
                Go back
            </button>
            
        </main>
    )
}