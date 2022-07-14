//You are given a number, stored in a variable with the name num. Find out the average of sum of all prime numbers in the range of [1,num], including the value stored in num.

let num=13;
let sum=0;
let arr=[];
let count=0;


for(i=1; i<=num; i++)
{
  arr.push(test_prime(i));
}


for(i=0; i<arr.length; i++)
{
  if(arr[i]==0){
    count++
  }
  sum=sum+arr[i];
}
let A=num-count;

//console.log(A);
//console.log(sum);
console.log(Math.floor(sum/A));


function test_prime(n)
{
   if (n===1)
   {
     return 0;
   }
   else if(n === 2)
   {
     return 2;
   }
   else
   {
       for(var x = 2; x < n; x++)
       {
         if(n % x === 0)
         {
            return 0;
         }
       }
       return n; 
   }
}
