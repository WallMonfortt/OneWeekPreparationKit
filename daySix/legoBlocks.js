/*
 * Complete the 'legoBlocks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

const ML = 1000000007n;
const maxN = 1000;
const maxM = 1000;
const T = [[]];

// T contains all the permutations Row X Column
// ie if there is only one Row and 4 colums, the values of the are
// [1, 2, 4, 8], which corresponds of the number of total permutations
// using legos of width 1, 2, 3, 4
// if there are two rows the second row of T will look like this
// [1, 4, 16, 64], which is the first row power the number of rows
//  1 power 1, 2 power 2, 4 power 2, 8 power 
// if n = 4 and m = 4 we can get the total number of permutations using
// T[n][m] = 4096 or 8 power 4

for (let i = 1; i <= maxN; i++) {
    // R is a single row with the differen permutations
    // based on the number of columns
    const R = [];
    // We use the first 4 row column permutations to init the first row
    if (i === 1) {
        R[1] = 1n;
        R[2] = 2n;
        R[3] = 4n;
        R[4] = 8n;
    }
    for (let j = 1; j <= maxM; j++) {
        if (i === 1 && j > 4) {
            R[j] = R[j - 1] + R[j - 2]+ R[j - 3]+ R[j - 4];
            R[j] %= ML;
        } else if (i >= 2) {
            R[j] = T[i - 1][j] * T[1][j];
            R[j] %= ML;
        }
    }
    T.push(R);
}


function legoBlocks(n, m) {
    // Write your code here
    
    // G contains the total number of permutations for the provided number
    // of rows, ie if n = 4 and m =4
    // G will contain T[4][1], T[4][2], T[4][3] and T[4][4]
    const G = [];
    for (let k = 1; k <= m; k++) {
        G[k] = T[n][k];
    }
    // H will containe the total number of permutations minus the 
    // invalid permutations
    // to calculate H we make this; G[m] - sum(H[k]*G[k]);
    // K will take the values from 1 to the number of coulumns which is m
    const H = [];
    // B will contain the sum that we use to calculate H
    const B = [];
    H[1] = 1n;
    B[1] = 0n;
    for (let l = 2; l<= m; l++) {
        B[l] = 0n;
        for (let o = 1; o < l; o++) {
            B[l] += H[l - o] * G[o];
            B[l] %= ML;
        }
        // We add the modulus here to avoid an overflow
        H[l] = (G[l] + ML - B[l]) % ML;
    }
    return H[m];
}