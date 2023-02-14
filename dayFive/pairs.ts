function pairs(k: number, arr: number[]): number {
    // Write your code here
    let count = 0;
    let set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] + k)) {
            count++;
        }
    }
    return count;
    

}