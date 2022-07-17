// You are given an arrayAofNintegers.
// Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


let N=6;
let A=[1, 2, 3, 5, 7, 12];

let sum=0;
    
for(let i=0; i<N; i++){
    for(let j=i+1; j<N; j++){
        if(isPrime(j-i)){
            sum=sum+Math.abs(A[i]-A[j]);
        }
    }
}
console.log(sum);


function isPrime(num){
    if(num <=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}