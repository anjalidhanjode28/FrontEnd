// Description
// You have given an array of size N and an integer M.
// Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.
// Do not use built-in functions to sort the array use selection sort Algorithm

// Input
// Input Format:
// First line contains an integer T denoting the number of testcases.
// First line of every testcase contains two integer N and M.
// Next line contains N space separated integers denoting the elements of array

let N = 5; 
let K = 1;
let arr = [1,2,3,4,5];


var i;
var j;

for(i=0; i<N-1; i++){
    for(j=0; j<N-i-1; j++){
        if(arr[j] > arr[j+1]){
            swap(arr,j,j+1);
        }
    }
}

function swap(arr,A,B){
    var temp = arr[A];
    arr[A] = arr[B];
    arr[B] = temp;
}

let sum1 = 0;
let sum2 = 0;

for(let i=0; i<K; i++){
    sum1 = sum1+arr[i];
}

for(let i=N-1; i>=N-K; i--){
    sum2 = sum2+arr[i];
}

console.log(sum2-sum1);