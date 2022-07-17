//Given amatrixofRrows andCcolumns which contains distinct integers and you are given a integerKand you need to print both the diagonals crossing through the given elementK, you can always assume that the given element always exist in the matrix.

let R=3;
let C= 3;
let K=6;
let matrix=[
            [1,2,3],
            [4,5,6],
            [7,8,9]
           ]

for(let i=0; i<R; i++){
    for(let j=0; j<C; j++){
        if(matrix[i][j]==K){
            var x=i;
            var y=j;
        }
    }
}

let bag1="";
let bag2="";

let diff = x-y;
let sum=x+y;

for(let i=0; i<R; i++){
    for(let j=0; j<C; j++){
        if(i-j == diff){
            bag1=bag1+matrix[i][j]+" ";
        }
        if(i+j == sum){
            bag2=bag2+matrix[i][j]+" ";
        }
    }
}

console.log(bag1);
console.log(bag2);