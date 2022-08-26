// Given an array A of non-negative integers of size m. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.
// Example:
// A={4,5,3,7,1}
// After sorting the new array becomes A={1,3,4,5,7}.
// The required output should be "4 2 0 1 3"
// NOTE: The indexing of the array starts with 0.


let N = 5;
let arr = [4,5,3,7,1];

let i;
    let j;
    let bag = "";
    let index = [];
    
    for(let k=0; k<N; k++){
        index.push(k);
    }
    
    for (i=0; i<N-1; i++)
    {
        for (j=0; j<N-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                swap(arr,index,j,j+1);
            }
        }
    }

    function swap(arr,index,i,j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
        temp = index[i];
        index[i] = index[j];
        index[j] = temp;
    }

    for(let i=0; i<N; i++){
        bag=bag+index[i]+" ";
    }
    console.log(bag);