export default function MainPage(){
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
            className="bg-zinc-700 text-zinc-100 w-[40%] h-[300px] resize-none
            outline-none rounded-lg p-1.5 text-2xl min-w-[200px]"
            ></textarea>

            <textarea
            className="bg-zinc-700 text-zinc-100 w-[40%] h-[300px] resize-none
            outline-none rounded-lg p-1.5 text-2xl min-w-[200px]"
            readOnly
            ></textarea>
        </div>

        <div 
        className="flex gap-x-3.5 mb-10"
        >
            <button
            className="text-2xl text-zinc-800 bg-yellow-200 px-2.5 py-1.5 rounded-lg
            cursor-pointer"
            >
                Encode
            </button>

            <button
            className="text-2xl text-zinc-100 border-2 px-2.5 py-1.5 rounded-lg
            cursor-pointer"
            >
                Decode
            </button>

        </div>

    </main>
  )
}