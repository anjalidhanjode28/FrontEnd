// You are given a 2D array, whose dimensions are stored in two variables with the name N and M
// The value stored in N denotes the number of rows, and the value in M denotes the number of columns
// The 2D array is stored in a variable with the name arr
// You have to print the sum of elements of the first and last column of the 2D array


let arr=[
    [1,2,7],
    [3,4,6],
    [5,6,10]
   ]

let N=3;
let M=3;

let add=0;
let sum =0;
let j=0; 
   
   for(let i=0; i<N; i++){
        if(j<1){
            sum=sum+arr[i][j];
        }
    }
    for(let i=0; i<N; i++){
        if(j=M-1){
            add=add+arr[i][j];
        }
    }
   
 console.log(add+sum);

