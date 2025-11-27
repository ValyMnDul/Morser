import { useRef } from 'react'

declare global {
    interface Window {
        webkitAudioContext?: typeof AudioContext;
    }
}

export function useMorseSound(){

    const audioContextRef = useRef<AudioContext|null>(null);

    const getAudioContext = () => {
        if (!audioContextRef.current) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                audioContextRef.current = new AudioContextClass();
            }
        }
        return audioContextRef.current;
    };

    const playBeep = (duration:number) => {

        const audioContext = getAudioContext();

        if(!audioContext){
            return;
        }

        const oscilator = audioContext.createOscillator();
        const gainNote = audioContext.createGain();

        oscilator.connect(gainNote);
        gainNote.connect(audioContext.destination);

        oscilator.frequency.value = 600;
        oscilator.type = 'sine';

        gainNote.gain.setValueAtTime(0.3,audioContext.currentTime);
        gainNote.gain.exponentialRampToValueAtTime(0.01,audioContext.currentTime + duration);

        oscilator.start(audioContext.currentTime);
        oscilator.stop(audioContext.currentTime + duration);
    }

    const playDih = () => playBeep(0.1);
    const playDah = () => playBeep(0.3);

    const playMorseCode = async (code:string) => {
        for(let i = 0; i <= code.length ; i++){
            const char = code[i];

            if(char === '·'){
                playDih();
                await new Promise(resolve => setTimeout(resolve,150));
            }
            else if(char === '−'){
                playDah();
                await new Promise(resolve => setTimeout(resolve,350));
            }
            else if(char === ' '){
                await new Promise(resolve => setTimeout(resolve,200));
            }
            else if(char === '/'){
                await new Promise(resolve => setTimeout(resolve,400));
            }
        }
    };

    return {playDih,playDah,playMorseCode};
}