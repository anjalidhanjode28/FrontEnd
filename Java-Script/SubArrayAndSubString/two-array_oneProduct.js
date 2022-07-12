// You are given two arrays of same size stored in variables with the nameAandB
// The size of the arrays is stored in a variable with the nameN
// You have to find the product of all the numbers stored in the two arrays

// For example, consider the value stored inN = 3, andA = [1 2 3]andB = [2 3 1]
// Then, the product of the elements in the two arrays will be1*2*3*2*3*1 = 36, which is the required output

let A=[1, 2, 3];
let B=[2, 3, 1];
let N=3;

let x=1;
let y=1;
  
  for(let i=0; i<N; i++){
      x=x*A[i];
      y=y*B[i];
  }
    console.log(x*y);