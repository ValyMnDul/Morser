import Link from "next/link"
import Image from "next/image"

export default function Navbar(){

    return(
        <nav
        className="w-full h-20 flex justify-evenly items-center"
        >
            <div
            className="text-zinc-100 text-2xl"
            >
                <Image
                src='vercel.svg'
                alt="Logo"
                width={30}
                height={30}
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