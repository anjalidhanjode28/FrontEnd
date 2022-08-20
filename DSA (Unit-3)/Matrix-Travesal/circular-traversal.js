// Description
// Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.
// Input
// The first line of the input contains T, the number of test cases.
// The next line contains N, the size of the square matrix.
// The next N lines contains N space separated integers each denoting the values of the matrix.


let N = 3;
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let bag="";
    
    let j=0;
    for(let i=N-1; i>=0; i--){
        bag=bag+matrix[i][j]+" ";
    }
    
    
    let i=0;
    for(let j=1; j<N; j++){
        bag=bag+matrix[i][j]+" ";
    }
    
     j=N-1;
    for(let i=1; i<N; i++){
        bag=bag+matrix[i][j]+" ";
    }
    
    i=N-1;
    for(let j=N-2; j>0; j--){
        bag=bag+matrix[i][j]+" ";
    }
    console.log(bag);