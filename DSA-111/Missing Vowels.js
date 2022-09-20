// Description
// You are given a string, stored in a variablestr, and the length of the string is stored in the variableN
// You have to find all the vowels that are not present in the string and print them.
// If a string contains all the vowels, in that case, print -1.
// For example, consider the value stored inN = 6, andstr = nature
// out of the 5 vowels(a,e,i,o,u)
// the word "nature" contains a,u,e
// The vowel that are not present in the string are : i,o
// hence the output is io
// Note : The string contains only lower case English Alphabets

let N = 6;
let str = "nature";

let vowels="aeiou";
let arr=[];
let result=false;
  
for(let i=0; i<vowels.length; i++)
{
    arr.push(vowels[i]);
}


for(let i=0; i<N; i++)
{
    for(let j=0; j<vowels.length; j++)
    {
        if(str[i]==vowels[j])
        {
            arr.push(str[i]);
        }
    }
}
  
let obj={};
for(let i=0; i<arr.length; i++)
{
    if(obj[arr[i]]==undefined)
    {
        obj[arr[i]]=1;
    }
    else
    {
        obj[arr[i]]=obj[arr[i]]+1;
    }
}
  
let x="";
for (let key in obj)
{
    if(obj[key]==1)
    {
        result=true;
        x=x+key;
    }
}

if(result==true)
{
    console.log(x);
}
else
{
    console.log("-1");
}
