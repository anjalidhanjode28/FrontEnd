// Description
// You are given an array A of N integers, and an integer K. Find the maximum value of S, such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.
// Refer the sample test case for better understanding.

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N, the number of elements in the array.
// The next line contains N space separated integers, denoting the values in the array.
// The next line contains the value K.

let N=5;
let arr = [1,2,3,4,5];
let K=7;

let flag = false;
var max= -Infinity;
let left = 0;
let right = N-1;

for(let i=0; i<N-1; i++)
{
    for(let j=i+1; j<N; j++)
    {
        let S = arr[i]+arr[j];
        if(S < K)
        {
            if(max < S)
            {
                max=S;
                flag=true;
            }
        }
    }
}

if(flag === false)
{
    console.log("-1");
}
else
{
    console.log(max);
}
