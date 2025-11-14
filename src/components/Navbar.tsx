import Link from "next/link"

export default function Navbar(){

    return(
        <nav
        className="w-full h-15"
        >
            <div>

            </div>

            <div>
                <Link
                className="text-zinc-100 text-2xl"
                href='/'
                >
                    Decoder | Encoder
                </Link>
            </div>
        </nav>
    )
}