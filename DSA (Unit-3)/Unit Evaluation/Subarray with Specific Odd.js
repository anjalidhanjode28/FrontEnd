// Description
// You are given an array, stored in a variable with the namearr, whose size is stored inN
// You are also given a number stored in a variable with the nameK
// You have to find the count of all subarrays, which have exactlyKodd numbers
// For example, consider the value stored inN = 3,K = 1, andarr = [1 2 3]. Then, all the subarrays of the given array are

let N=3;
let K=1; 
let arr = [1,2,3];

let count=0;
    
    for(let i=0; i<N; i++)
    {
        for(let j=i; j<N; j++)
        {
            let arr1 =[];
            
            for(let k=i; k<=j; k++)
            {
                if(arr[k]%2 !== 0)
                {
                    arr1.push(arr[k]);
                }
            }
            
            if(arr1.length == K){
                count++;
            }
        }
    }
    
    console.log(count);