//You are given an array stored in a variable with the namearray, and the size of the array is stored in a variable with the nameN
// Now, the array contains two types of numbers,0and1
// You have to find the sum of indexes of all the elements in the array at which1is present. For this problem, consider that the indexing starts from 1
// For example, consider the value stored inN = 5, andarr = [0 1 1 1 1], then the sum becomes2 + 3 + 4 + 5 = 14, which is the required output


let array=[0, 1, 1, 1, 1];
let N=array.length;

let sum=0;
    
    for(let i=0; i<N; i++){
        if(array[i]==1){
            sum=sum+(i+1);
        }
    }
    console.log(sum);