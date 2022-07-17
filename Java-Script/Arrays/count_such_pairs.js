// You are given an arrayAofNintegers along with a target integerK.
// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.
// Input

let N=5; 
let K=9;

let A = [3, 0, 6, 2, 7];

let count=0;
let sum=0;

for(i=0; i<=N; i++){
    for(j=i+1; j<=N; j++){
        sum = A[i]+A[j];
        if(sum==K){
            count++;
        }
    }
}
console.log(count);