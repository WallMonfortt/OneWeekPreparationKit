function findMedian(arr: number[]): number {
    // Write your code here
    let sortedArr = arr.sort((a, b) => a - b);
    let median = 0;
    if (sortedArr.length % 2 === 0) {
        median = (sortedArr[sortedArr.length / 2] + sortedArr[(sortedArr.length / 2) - 1]) / 2;
    }
    else {
        median = sortedArr[Math.floor(sortedArr.length / 2)];
    }
    return median;
}
