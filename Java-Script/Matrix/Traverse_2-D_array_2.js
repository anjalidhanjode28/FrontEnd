// You are given a 2D array(matrix), ofNrows andMcolumns.
// You need to print elements of array as shown in the diagram, on a single line. Sample Output = 4 3 2 1 5 6 7 8 12 11 10 9

let N=4; 
let M=3;

let matrix=[
    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12]
];

let bag="";
    
for(let i=0; i<M; i++){
    for(let j=N-1; j>=0; j--){
        bag=bag+matrix[j][i]+" ";
    }
}
console.log(bag);