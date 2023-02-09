// Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, where k=(n+1)\2 . You need to find the lexicographically smallest zig zag sequence of the given array.


//! This excersice is wrong in hakerrank, it should be solved with a different approach
function processData(nums) {
    console.log(nums);
    nums.sort((a, b) => a - b);
    let n = nums.length;
    console.log(nums);
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    console.log(left, right);
    let result = [];
    let j = right.length - 1;
    for (let i = 0; i < nums.length; i++) {
        console.log(right.length)
        if(left[i] === undefined) {
            result.push(right[j--]);
        }else{
        result.push(left[i])};
        
    }
    console.log(result.join(` `));

}


processData([1,2, 3, 4, 5, 6, 7]);