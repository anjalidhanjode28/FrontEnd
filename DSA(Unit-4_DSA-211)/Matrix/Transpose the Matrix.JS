// Description
// The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column of the matrix by producing another matrix.
// See sample test case for better understanding
// So, given an array of n rows and m columns, generate the transpose of the matrix.

let N = 5;
let M = 4;
let matrix = [
    [0,0,0,0],
    [1,1,1,1],
    [2,2,2,2],
    [3,3,3,3],
    [4,4,4,4]
];

for(let i=0; i<M; i++){
    let bag = "";
    
    for(let j=0; j<N; j++){
        bag += matrix[j][i]+" ";
    }
    console.log(bag);
}