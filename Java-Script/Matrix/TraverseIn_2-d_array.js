// You are given a 2D array (matrix), of N rows and M columns.
//You need to print elements of array in as shown in diagram, on a single line.
//output should like:- 9 10 11 12 8 7 6 5 1 2 3 4


let N=4; 
let M=3;
let matrix=[
    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12]
];

let bag="";
for(let i=M-1; i>=0; i--){
    for(let j=0; j<N; j++){
        bag=bag+matrix[j][i]+" ";
    }
}
console.log(bag);