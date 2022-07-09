//Write code to find the absolute difference of two numbers

//Sample Input-1 12,4
//Sample Output-1 8
//Sample Input-2 4,18
//Sample Output-2 14
//NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value


function absoluteDifference(A,B)
{
  let diff = A-B;
  if(diff<0)
  {
    diff=diff * -1;
  }
  return diff;
}

let num = absoluteDifference(12,4);
console.log(num);