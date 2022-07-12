// You are given an array stored in a variable with the name arr
// The size of the array is stored in a variable with the name N
// You have to find the value of the equation 5*x + 3*y,
// where x - sum of all elements in the array
// and y - product of all elements in the array

let N=4;
let arr = [1,2,3,4];
let x=0;
let y=1;

for(let i=0; i<N; i++)
{
    x=x+arr[i];
    y=y*arr[i];
}
console.log(5*x + 3*y);