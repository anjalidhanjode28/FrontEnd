// Description
// Hassan has discovered his own sorting algorithm. The algorithm has following conditions:
// 1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.
// 2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.
// Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.

let N = 5; 
let K = 6;
let arr = [12,18,17,65,46];

let i;
let j;
let bag = "";

for(i=0; i<N; i++){
    for(j=0; j<N-i-1; j++){
        if(arr[j]%K > arr[j+1]%K){
            swap(arr,j,j+1);
        }
    }
}

function swap(arr,A,B){
    var temp = arr[A];
    arr[A] = arr[B];
    arr[B] = temp;
}

for(let i=0; i<N; i++){
    bag=bag+arr[i]+" ";
}
console.log(bag);
