function lonelyinteger(a: number[]): number {
    // Write your code here
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result ^= a[i];
    }
    return result;

}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);