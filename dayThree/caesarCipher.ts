function caesarCipher(s: string, k: number): string {
    // Write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    const sArray = s.split('');

    const result = sArray.map((letter) => {
        // regex to check if letter is a number
        if (/[0-9]/.test(letter)) { return letter; }
        if (letter === letter.toUpperCase() && letter !== ' ') {
            const index = alphabetArray.indexOf(letter.toLowerCase());
            const newIndex = (index + k) % 26;
            return alphabetArray[newIndex].toUpperCase();
        } else if (letter === letter.toUpperCase() && letter === ' ') {
            return '-';
         
        }else {
            const index = alphabetArray.indexOf(letter);
            const newIndex = (index + k) % 26;
            return alphabetArray[newIndex];
        }
    });
    
    return result.join('');

}