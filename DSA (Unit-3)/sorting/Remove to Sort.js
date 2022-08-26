// Description
// Given an array of integers of length n, the task is to remove elements from the array to make array sorted. That is, remove the elements which do not follow an increasing order.

// Input
// Input Format
// First line Consists of integer n.
// Second line consists of n integers separated by spaces.

let n = 1;0
let arr = [1,2,4,3,5,7,8,6,9,10];

let sortedArr = "";
let previous = -Infinity;
 
for (i=0; i<n; i++)
{
    if (arr[i] < previous)
    {
        continue;
    }
    else
    {
        sortedArr+=arr[i]+" ";
        previous = arr[i];
    }
}

console.log(sortedArr);