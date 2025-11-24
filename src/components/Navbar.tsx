'use client'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Navbar(){

    const router = useRouter();

    return(
        <nav
        className="w-full h-20 flex justify-evenly items-center"
        >
            <div
            className="text-zinc-100 text-2xl cursor-pointer"
            onClick={()=>{
                router.push('/');
            }}
            >
                <Image
                src='/vercel.svg'
                alt="Logo"
                width={30}
                height={30}
                className="w-8 h-8"
                ></Image>
            </div>

            <div
            className="flex gap-x-5 font-mono"
            >
                <Link
                className="text-2xl text-zinc-100 border-b-2 border-transparent 
                transition-colors hover:border-yellow-200"
                href='/'
                >
                    Decoder|Encoder
                </Link>

                <Link 
                className="text-zinc-100 text-2xl border-b-2 border-transparent 
                transition-colors hover:border-yellow-200"
                href='/codes'
                >
                    Codes
                </Link>

                <Link
                className="text-zinc-100 text-2xl border-b-2 border-transparent 
                transition-colors hover:border-yellow-200"
                href='/about'
                >
                    About
                </Link>

            </div>

        </nav>
    )
}