'use client'
import { useRef } from 'react'

declare global {
    interface Window {
        webkitAudioContext?: typeof AudioContext;
    }
}

export function useMorseSound(){

    const audioContextRef = useRef<AudioContext|null>(null);
    const unitTime = 100;

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

        oscilator.frequency.value = 550;
        oscilator.type = 'sine';

        const now = audioContext.currentTime;
        gainNote.gain.setValueAtTime(0, now);
        gainNote.gain.linearRampToValueAtTime(0.3, now + 0.005);
        gainNote.gain.setValueAtTime(0.3, now + duration / 1000 - 0.005);
        gainNote.gain.linearRampToValueAtTime(0, now + duration / 1000);

        oscilator.start(now);
        oscilator.stop(now + duration / 1000);
    }

    const playDih = () => playBeep(unitTime);
    const playDah = () => playBeep(unitTime * 3);

    const playMorseCode = async (code:string) => {
        for(let i = 0; i < code.length ; i++){
            const char = code[i];

            if(char === '·'){
                playDih();
                await new Promise(resolve => setTimeout(resolve, unitTime));
                await new Promise(resolve => setTimeout(resolve, unitTime));
            }
            else if(char === '−'){
                playDah();
                await new Promise(resolve => setTimeout(resolve, unitTime * 3));
                await new Promise(resolve => setTimeout(resolve, unitTime));
            }
            else if(char === ' '){
                await new Promise(resolve => setTimeout(resolve, unitTime * 3));
            }
            else if(char === '/'){
                await new Promise(resolve => setTimeout(resolve, unitTime * 7));
            }
        }
    };

    return {playDih,playDah,playMorseCode};
}