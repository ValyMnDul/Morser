export default function About(){

    return (
        <main
        className="w-full min-h-screen px-10 py-16 flex flex-1 flex-col items-center gap-12"
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
                                Dah (dash) - a long signal (3x the length of a dot)
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

                <section
                className="flex flex-col gap-4"
                >
                    <h2
                    className="text-3xl text-yellow-200 font-mono"
                    >
                        About The Site
                    </h2>

                    <div
                    className="bg-zinc-700 rounded-lg p-6 flex flex-col gap-4"
                    >
                        <p
                        className="text-lg leading-relaxed"
                        >
                            This translator was built to help people learn and use 
                            Morse code easily. Whether you&apos;re 
                            a radio enthusiast, a history buff, or just curious about 
                            this fascinating communication method, 
                            this tool makes encoding and decoding simple.
                        </p>

                        <div
                        className="flex flex-col gap-2"
                        >
                            <h3
                            className="text-xl text-yellow-200 font-semibold"
                            >
                                Features:
                            </h3>

                            <ul
                            className="list-none space-y-2 ml-4"
                            >
                                <li
                                className="flex items-start gap-2"
                                >
                                    <span
                                    className="text-yellow-200 mt-1"
                                    >
                                        ▸
                                    </span>

                                    <span>
                                        Instant encoding from text to Morse code
                                    </span>

                                </li>

                                <li
                                className="flex items-start gap-2"
                                >
                                    <span
                                    className="text-yellow-200 mt-1"
                                    >
                                        ▸
                                    </span>

                                    <span>
                                        Real-time decoding from Morse to text
                                    </span>

                                </li>

                                <li
                                className="flex items-start gap-2"
                                >
                                    <span
                                    className="text-yellow-200 mt-1"
                                    >
                                        ▸
                                    </span>

                                    <span>
                                        Complete reference guide with all characters
                                    </span>

                                </li>

                                <li
                                className="flex items-start gap-2"
                                >
                                    <span
                                    className="text-yellow-200 mt-1"
                                    >
                                        ▸
                                    </span>

                                    <span>
                                        Keyboard shortcuts for quick encoding/decoding
                                    </span>

                                </li>

                            </ul>

                        </div>

                    </div>

                </section>

                <section
                className="flex flex-col gap-4"
                >
                    <h2
                    className='text-3xl text-yellow-200 font-mono'
                    >
                        Fun Facts
                    </h2>

                    <div
                    className="grid md:grid-cols-2 gap-4"
                    >
                        <div
                        className='bg-zinc-700 rounded-lg p-5 hover:bg-zinc-600
                        transition-colors'
                        >
                            <h3
                            className="text-xl text-yellow-200 font-semibold mb-2"
                            >
                                Titanic&apos;s Last Words
                            </h3>

                            <p
                            className="text-sm leading-relaxed"
                            >
                                The Titanic sent distress signals in Morse code 
                                before sinking in 1912. The operator 
                                worked until the very end, sending SOS messages.
                            </p>

                        </div>

                        <div
                        className="bg-zinc-700 rounded-lg p-5 hover:bg-zinc-600
                        transition-colors"
                        >
                            <h3
                            className="text-xl text-yellow-200 font-semibold mb-2"
                            >
                                Still Used Today
                            </h3>

                            <p
                            className="text-sm leading-relaxed"
                            >
                                Amateur radio operators worldwide still use Morse code. 
                                It can travel farther than voice 
                                in poor conditions and requires less power.
                            </p>

                        </div>

                        <div
                        className="bg-zinc-700 hover:bg-zinc-600 rounded-lg p-5
                        transition-colors"
                        >
                            <h3
                            className="text-xl text-yellow-200 font-semibold mb-2"
                            >
                                Secret Communication
                            </h3>

                            <p
                            className="text-sm leading-relaxed"
                            >
                                POWs in Vietnam blinked Morse code during filmed propaganda to 
                                send hidden messages. 
                                Jeremiah Denton blinked &quot;T-O-R-T-U-R-E&quot; during a 1966 
                                interview.
                            </p>

                        </div>

                        <div
                        className="bg-zinc-700 rounded-lg p-5 hover:bg-zinc-600
                        transition-colors"
                        >
                            <h3
                            className="text-xl text-yellow-200 font-semibold mb-2"
                            >
                                Lightning Fast
                            </h3>

                            <p
                            className="text-sm leading-relaxed"
                            >
                                Expert operators can transmit 40-50 words per minute 
                                in Morse code, which is faster 
                                than most people can write by hand!
                            </p>

                        </div>

                    </div>

                </section>

                <section
                className="flex flex-col gap-4 items-center text-center"
                >
                    <div
                    className="text-6xl text-yellow-200 font-mono"
                    >
                        · · · − − − · · ·
                    </div>

                    <p
                    className="text-lg text-zinc-400"
                    >
                        Start translating and discover the beauty of Morse code!
                    </p>

                </section>

                <div
                className="h-[50px]"
                ></div>

            </div>

        </main>
    )
}