// You are given 2 arrays arr1 and arr2 of N integers.
// Your task is to write a program that finds the one integer which is common in both arrays (arr1 and arr2).

let N = 3;             //arr.length
let arr1 = [4,5,7];
let arr2 = [9,2,5];

let bag="";
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(arr1[i]==arr2[j]){
                bag=bag+arr1[i]+" ";
            }
        }
    }

console.log(bag);