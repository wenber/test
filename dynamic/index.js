
// 7      => 30
// 3 8    => 23  21
// 8 1 0   => 20 13 10
// 2 7 4 4 =>  7 12 10 10
// 4 5 2 6 5   


// MaxSum[r][j] =  Max(MaxSum(r+1, j), MaxSum(r+1, j+1)) + D[r][j]

// function main(n) {
//     for (var i = 0; i < n; i++) {
//         MaxSum[i] = [];
//         for(var j = 0; j <= i; j++) {
//             MaxSum[i][j] = a[i][j];
//         }
//     }

//     for (var i = n - 2; i >= 0; i--) {
//         for(var j = 0; j <= i; j++) {
//             MaxSum[i][j] = Math.max( MaxSum[i + 1][j],  MaxSum[i + 1][j + 1]) + a[i][j];
//         }
//     }


//     console.log(MaxSum);
// }
// 

// var a = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
// function main(n) {
//     var MaxSum = a[n - 1];
//     for (var i = n - 2; i >= 0; i--) {
//         for(var j = 0; j <= i; j++) {
//             MaxSum[j] = Math.max( MaxSum[j],  MaxSum[j + 1]) + a[i][j];
//         }
//         // 前一列的尾部
//         MaxSum.pop();
//     }
//     console.log(MaxSum);
// }

// main(5);


MaxLen(i, j) = 

async function test() {
    for await (const obj of promises) {
        console.log(obj);
    }
}

