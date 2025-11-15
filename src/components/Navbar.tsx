import Link from "next/link"

export default function Navbar(){

    return(
        <nav
        className="w-full h-18 flex justify-evenly items-center"
        >
            <div
            className="text-zinc-100 text-2xl"
            >
                LOGO
            </div>

            <div
            className="flex gap-x-5 font-mono"
            >
                <Link
                className="text-zinc-100 text-2xl"
                href='/'
                >
                    Decoder | Encoder
                </Link>

                <Link 
                className="text-zinc-100 text-2xl"
                href='/codes'
                >
                    Codes
                </Link>

                <Link
                className="text-zinc-100 text-2xl"
                href='/about'
                >
                    About
                </Link>

            </div>

        </nav>
    )
}