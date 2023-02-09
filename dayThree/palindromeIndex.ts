function palindromeIndex(s: string): number {
    // Write your code here
    let i = 0;
    let j = s.length - 1;
    let index = -1;
    while (i < j) {
        if (s[i] !== s[j]) {
            if (s[i + 1] === s[j] && s[i + 2] === s[j - 1]) {
                index = i;
                break;
            } else if (s[i] === s[j - 1] && s[i + 1] === s[j - 2]) {
                index = j;
                break;
            }
        }
        i++;
        j--;
    }
    return index;

}