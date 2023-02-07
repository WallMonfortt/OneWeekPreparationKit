function miniMaxSum(arr: number[]): void {
    // Write your code here
    let min = arr[0];
    let max = arr[0];
    let sumMax = 0;
    let sumMin = 0;

    arr.forEach((element) => {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    });
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != max) {
            sumMin += arr[i];
        }
        if (arr[i] != min) {
            sumMax += arr[i];
        }

        if (  min === max) {
            sumMin = min * 4;
            sumMax = max * 4;
            break;
        }
    }
    console.log(sumMin, sumMax);

    
}


miniMaxSum([1, 2, 3, 4, 5]);