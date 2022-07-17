// You are given 2 arraysarr1andarr2ofNintegers.
// Your task is to write a program that finds the one integer which is common in both arrays (arr1andarr2).
// Note: There is always one integer common in both arrays.

let N=3;
let arr1=[4, 5, 7];
let arr2=[9, 2, 5];

let bag="";
    
for(i=0; i<=arr1.length-1; i++)
{
    for(j=0; j<=arr2.length-1; j++)
    {
        if(arr1[i]==arr2[j])
        {
            bag=bag+arr1[i];
        }
    }
}
console.log(bag);