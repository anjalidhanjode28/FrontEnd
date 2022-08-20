// Description
// Given a square matrix of size N x N. Rotate the matrix by 90 degrees in clockwise direction. Refer the sample I/O for better understanding.

// Input
// The first line of the input contains T, the number of test cases.
// The next line contains N, the size of the square matrix.
// The next line N line contains N space separated integers, denoting the elements of the matrix.

let N=4;
let matrix = [
   [1,2,3,4],
   [5,6,7,8],
   [1,2,3,4],
   [5,6,7,8]
];


for(let i=0; i<N; i++)
    {
        let bag="";
        for(j=N-1; j>=0; j--)
        {
            bag=bag+matrix[j][i]+" ";
        }
        console.log(bag);
    }
