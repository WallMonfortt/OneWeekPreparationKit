function superDigit(n: string, k: number): number {
    // Write your code here
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    sum *= k;
    if (sum < 10) {
        return sum;
    }
    return superDigit(sum.toString(), 1);

}