function countingSort(arr: number[]): number[] {
    // Write your code here
    //Given a list of integers, count and return the number of times each value appears as an array of integers.
    //Example: [1, 1, 3, 2, 1] -> [0, 3, 1, 1, 0, 0, 0, 0, 0, 0]

    //Create an array of 100 zeros
    let result = new Array(100).fill(0);
    //Loop through the array
    for (let i = 0; i < arr.length; i++) {
        //Increment the value at the index of the current value by 1
        result[arr[i]]++;
    }
    return result;
    
    

}