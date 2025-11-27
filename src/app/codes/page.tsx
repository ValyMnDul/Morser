import encode from '@/lib/encode.json'
export default function Codes(){

    const morseCode:Record<string,string> = encode;

    const letters = Object.entries(morseCode).filter(([key]) => (/[a-z]/.test(key)));
    const numbers = Object.entries(morseCode).filter(([key]) => (/[0-9]/.test(key)));
    const special = Object.entries(morseCode).filter(([key]) => (!/[a-z0-9]/.test(key)));

    return(
        <main
        className='w-full min-h-screen px-10 py-16 flex flex-1 flex-col items-center gap-12'
        >
            <h1
            className='text-5xl text-zinc-100 font-mono'
            >
                Morse Code&nbsp;
                <span
                className='text-yellow-200'
                >
                    Reference
                </span>

            </h1>

            <div
            className='w-full max-w-6xl flex flex-col gap-16'
            >
                <section>

                    <h2
                    className='text-3xl text-yellow-200 font-mono mb-8'
                    >
                        Letters (A-Z)
                    </h2>

                    <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    >
                        {
                            letters.map(([char,code]) => (
                                <div
                                key={char}
                                className='bg-zinc-700 rounded-lg p-4 flex flex-col 
                                items-center justify-center gap-2 hover:bg-zinc-600
                                transition-colors'
                                >
                                    <span
                                    className='text-3xl text-zinc-100 font-bold uppercase'
                                    >
                                        {char}
                                    </span>

                                    <span
                                    className='text-2xl text-yellow-200 font-mono'
                                    >
                                        {code}
                                    </span>

                                </div>
                            ))
                        }
                    </div>

                </section>

                <section>

                    <h2
                    className='text-3xl text-yellow-200 font-mono mb-8'>
                        Numbers (0-9)
                    </h2>

                    <div
                    className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'
                    >
                        {
                            numbers.map(([char,code]) => (
                                <div
                                key={char}
                                className='bg-zinc-700 rounded-lg p-4 flex flex-col 
                                items-center justify-center gap-2 hover:bg-zinc-600 
                                transition-colors'
                                >

                                    <span
                                    className='text-3xl text-zinc-100 font-bold'
                                    >
                                        {char}
                                    </span>

                                    <span
                                    className="text-2xl text-yellow-200 font-mono"
                                    >
                                        {code}
                                    </span>

                                </div>
                            ))
                        }
                    </div>

                </section>

                <section>

                    <h2
                    className='text-3xl text-yellow-200 font-mono mb-8'
                    >
                        Special Characters
                    </h2>

                    <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    >
                        {
                            special.map(([char,code]) => (
                                <div
                                key={char}
                                className="bg-zinc-700 rounded-lg p-4 flex flex-col 
                                items-center justify-center gap-2 hover:bg-zinc-600 
                                transition-colors"
                                >
                                    <span
                                    className='text-3xl text-zinc-100 font-bold'
                                    >
                                        {char === " " ? "SPACE" : char}
                                    </span>

                                    <span
                                    className='text-2xl text-yellow-200 font-mono'
                                    >
                                        {code}
                                    </span>

                                </div>
                            ))
                        }
                    </div>

                    <div 
                    className='h-[50px] '
                    ></div>

                </section>

                <div 
                className="mb-12 pt-8 border-t border-gray-700 text-center"
                >
                    <p 
                    className="text-gray-400 text-sm"
                    >
                        Morse code is a method of transmitting text information as a 
                        series of on-off tones, lights, or clicks that can be directly 
                        understood by a skilled listener or observer without special 
                        equipment.
                    </p>

                </div>

            </div>

        </main>
    )
}