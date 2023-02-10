function gridChallenge(grid: string[]): string {
    // Write your code here
    let sortedGrid = grid.map((row) => row.split('').sort().join(''));
    for (let i = 0; i < sortedGrid.length - 1; i++) {
        for (let j = 0; j < sortedGrid[i].length; j++) {
            if (sortedGrid[i][j] > sortedGrid[i + 1][j]) {
                return 'NO';
            }
        }
    }
    return 'YES';

}