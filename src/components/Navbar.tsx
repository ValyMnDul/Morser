'use client'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Navbar(){

    const router = useRouter();

    return(
        <nav 
        className="w-full h-20 shrink-0"
        >
            <div 
            className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex flex-1 justify-between 
            items-center">
                 
                <div
                className="flex items-center gap-x-2 sm:gap-x-3 cursor-pointer group"
                onClick={() => router.push('/')}
                >
                    <div 
                    className="relative"
                    >
                        <Image
                        src='/vercel.svg'
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-all 
                        duration-300"
                        /> 

                        <div 
                        className="absolute inset-0 bg-yellow-400/20 blur-xl 
                        group-hover:bg-yellow-400/40 transition-all rounded-full"
                        ></div>

                    </div>

                    <span 
                    className="text-lg sm:text-2xl font-bold bg-linear-to-r from-yellow-200 
                    via-yellow-300 to-yellow-400 bg-clip-text text-transparent"
                    >
                        Decoder|Encoder
                    </span>

                </div>

                <div 
                className="flex gap-x-4 sm:gap-x-8 font-mono"
                >
                    <Link 
                    className="text-base sm:text-xl text-zinc-100 relative group 
                    px-1 sm:px-2 py-1"
                    href='/codes'
                    >
                        Codes

                        <span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r 
                        from-yellow-300 to-yellow-500 group-hover:w-full transition-all 
                        duration-300"
                        ></span>

                        <span 
                        className="absolute inset-0 bg-yellow-400/0
                        group-hover:bg-yellow-400/10 rounded transition-all duration-300"
                        ></span>

                    </Link>

                    <Link
                        className="text-base sm:text-xl text-zinc-100 relative group sm:px-2 
                        py-1 px-1"
                        href='/about'
                    >
                        About

                        <span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r 
                        from-yellow-300 to-yellow-500 group-hover:w-full transition-all 
                        duration-300"
                        ></span>

                        <span 
                        className="absolute inset-0 bg-yellow-400/0 
                        group-hover:bg-yellow-400/10 rounded transition-all 
                        duration-300"
                        ></span>

                    </Link>

                </div>

            </div>
            
        </nav>
    )
}