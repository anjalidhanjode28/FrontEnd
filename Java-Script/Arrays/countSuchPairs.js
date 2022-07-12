// You are given an arrayAofNintegers along with a target integer K.
// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target value K.

let k= 9;
let A=[3,0,6,2,7];
let N=A.length;

let count=0;

    for(let i=0; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            if(A[i]+A[j]==K){
                count++;
            }
        }
    }
console.log(count);