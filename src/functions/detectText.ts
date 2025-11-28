
export const isMorseText = (text:string) => {
    
    const morsePattern = /^[·\−\s\/]+$/;

    return morsePattern.test(text);

}