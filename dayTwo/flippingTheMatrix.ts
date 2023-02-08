function flippingMatrix(matrix: number[][]): number {
    // Write your code here
    let result = 0;
    for (let i = 0; i < matrix.length / 2; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            result += Math.max(matrix[i][j], matrix[i][matrix.length - 1 - j], matrix[matrix.length - 1 - i][j], matrix[matrix.length - 1 - i][matrix.length - 1 - j]);
        }
    }
    return result;

}