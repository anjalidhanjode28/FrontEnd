//You are given a string S. Find if the string, can be converted into a palindrome.
//You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.
//Deletion or addition of characters is not allowed.

//let str="aabbcc";
let str="aabccdd";
let count=0;
let count2=0;
let obj={};

for(i=0; i<str.length; i++)
{
  if(obj[str[i]]==undefined)
  {
    obj[str[i]]=1;
  }
  else{
    obj[str[i]]=2;
  }
}


for(let key in obj)
{
  for(let k=0; k<=9; k++)
  {
    if(obj[key]==isOdd(k))
    {
      count++;
    }

    if(obj[key]==isEven(k))
    {
      count2++;
    }
  }
}


 if(count==1 && count2>1)
  {
    console.log(" Possible");
  }
   else if(count2>1)
  {
    console.log(" Possible");
  }
 else{
    console.log("Not Possible");
  }


function isEven(x){
  if(x%2==0){
    let b=x;
    return b;
  }
}

function isOdd(x){
  if(x%2!=0){
    let a=x;
     return a;
  }
}
