//In this question, you are given a 2D array stored in a variable with the name arr

//The number of rows in the matrix is stored in the variable with the name N, while the number of columns stored in the matrix is stored in a variable with the name M

//You have to find the sum of matrix and print true or false based on whether that sum is prime or not.

let N=3;
let M=3;
let sum=0;

let arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];


for(i=0; i<N; i++)
{
  for(j=0; j<M; j++)
  {
    sum=sum+arr[i][j];
  }
}
console.log(sum);


let factor=0;
for(i=1; i<=sum; i++)
{
  if(sum%i==0){
    factor++;
  }
}


if(factor==2){
  console.log("true");
}else{
  console.log("false");
}