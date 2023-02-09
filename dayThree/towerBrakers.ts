function towerBreakers(n: number, m: number): number {
    // Write your code here
    if (m === 1) {
        return 2;
    }
    if (n % 2 === 0) {
        return 2;
    }
    return 1;
    

}