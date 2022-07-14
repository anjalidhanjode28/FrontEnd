// You are given an array of size N.
// You need to print a total count of subarrays whose sum is odd.
// Note:- A subarray is a contiguous part of array. If array is [1,2,3]. Subarrays are [1],[2],[3],[1,2],[2,3],[1,2,3].

let arr = [1,2,3];
let size = arr.length;
let count=0;
    
for(let father=0; father<size; father++)
{
    var sum = 0;
    for(let son=father; son<size; son++)
    {
        sum=sum+arr[son];
        if(sum%2 != 0)
        {
            count++;
        }
    }
}

console.log(count);