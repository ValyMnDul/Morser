export default function About(){
    return (
        <main
        className="w-full min-h-screen px-10 py-16 flex flex-1 flex-col items-center
        gap-12 overflow-y-auto"
        >
            <h1
            className="text-5xl text-zinc-100 font-mono text-center"
            >
                About&nbsp;
                
                <span className="text-yellow-200"
                >
                    Morse Code
                </span>

            </h1>

            <div
            className="w-full max-w-4xl flex flex-col gap-12 text-zinc-100"
            >
                <section
                className="flex flex-col gap-4"
                >
                    <h2
                    className="text-3xl text-yellow-200 font-mono"
                    >
                        · · · − − − · · ·
                    </h2>

                    <p
                    className="text-lg leading-relaxed"
                    >
                        Morse code is a method of transmitting text information as a 
                        series of on-off tones, lights, or clicks. 
                        It was invented by&nbsp;
                        
                        <span 
                        className='text-yellow-200 font-semibold'>
                            Samuel Morse
                        </span> 

                        &nbsp;in the 1830s and became 
                        the standard for long-distance communication for over a century.
                    </p>

                    <p
                    className="text-lg leading-relaxed"
                    >
                        The famous distress signal &nbsp;

                        <span className='text-yellow-200 font-mono text-xl'>
                            SOS (· · · − − − · · ·)
                        </span> 

                        &nbsp;
                        was chosen not because it stands for &quot;Save Our Ship&quot; 
                        or &quot;Save Our Souls&quot;, but simply because it&apos;s 
                        easy to recognize and transmit in Morse code.
                    </p>

                </section>

                <section
                className="flex flex-col gap-4"
                >
                    <h2
                    className="text-3xl text-yellow-200 font-mono"
                    >
                        How It Works
                    </h2>

                    <div
                    className="bg-zinc-700 rounded-lg p-6 flex flex-col gap-3"
                    >
                        <div
                        className="flex items-center gap-3"
                        >
                            <span
                            className="text-4xl text-yellow-200 mx-[5px]"
                            >
                                ·
                            </span>

                            <span
                            className="text-lg"
                            >
                                Dit (dot) - short signal
                            </span>

                        </div>

                        <div
                        className="flex items-center gap-3"
                        >
                            <span
                            className="text-4xl text-yellow-200"
                            >
                                −
                            </span>

                            <span
                            className="text-lg"
                            >
                                Dah (dash) a long signal (3x the length of a dot)
                            </span>

                        </div>

                    </div>

                    <p
                    className="text-lg leading-relaxed"
                    >
                        Letters are separated by short pauses, and words by 
                        longer pauses. The most common letters 
                        in English (E, T) have the shortest codes (· and −), 
                        making transmission more efficient.

                    </p>

                </section>

            </div>

        </main>
    )
}