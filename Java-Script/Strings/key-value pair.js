//You are given an string of size N, of characters from 'a' to 'z'.
//You need to print number of times you can make "wish", using characters from string. You can use a character only once from the string.
//[UseKey-Value pair based data structure]


let str="wishwish";

let str1="wish";
let c1=0;
let c2=0;
let c3=0;
let c4=0;

let W="w";
let I="i";
let S="s";
let H="h";

let arr=[];

for(let i=0; i<str.length; i++)
{
    if(str[i]==W){
    c1++;
    }
    if(str[i]==I){
    c2++;
    }
    if(str[i]==S){
    c3++;
    }
    if(str[i]==H){
    c4++;
    }
}

arr.push(c1);
arr.push(c2);
arr.push(c3);
arr.push(c4);

let min=Infinity;
for(let i=0; i<arr.length; i++)
{
  if(min>arr[i])
  {
    min=arr[i];
  }
}
console.log(min);
