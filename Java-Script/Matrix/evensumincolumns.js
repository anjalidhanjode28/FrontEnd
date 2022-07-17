// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM
// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns
// The 2D array is stored in a variable with the namearr
// For all columns, you have to print the sum of even elements present in the column
// For example, consider the value stored in N = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

let  N=3; 
let  M=3;

let arr=[
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
   ];

for(let i=0; i<M; i++){
    var add=0;
    for(let j=0; j<N; j++){
        if(arr[j][i]%2 == 0){
            add=add+arr[j][i];
        }
    }
    console.log(add);
}