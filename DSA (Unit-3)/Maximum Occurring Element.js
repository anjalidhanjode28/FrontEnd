// Description
// Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.
// If there are two elements present the maximum number of times, print the one which comes first in the array.

let N=5;
let A= [0,2,0,6,9];

let obj={};
    
    for(let i=0; i<N; i++){
        if(obj[A[i]]===undefined){
            obj[A[i]]=1;
        }else{
            obj[A[i]]=obj[A[i]]+1;
        }
    }
    
    
    let max = -Infinity;
    
    for(let key in obj){
        
        if(max < obj[key]){
            var bag="";
            max=obj[key];
            bag=bag+key;
        }
    }
    console.log(bag);
