export const say = (text:string) => {

    globalThis.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = 'en-US';
    utterance.rate = 0.9;

    globalThis.speechSynthesis.speak(utterance);
}