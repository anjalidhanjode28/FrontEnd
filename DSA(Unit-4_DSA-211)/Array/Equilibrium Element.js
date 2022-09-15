// Description
// Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

let N = 5;
let arr = [3,3,5,5,1];

let flag=false;
    let sum = 0;
    let arrsum =[];
    
    for(let i=0; i<N; i++){
        sum += arr[i];
        arrsum.push(sum);
    }
    
    for(let i=0; i<N; i++){
        leftsum = arrsum[i]-arr[i];
        rightsum = sum - arrsum[i];
        if(leftsum === rightsum){
            console.log(i+1);
            flag=true;
        }
    }
    
    if(flag===false){
        console.log(-1);
    }