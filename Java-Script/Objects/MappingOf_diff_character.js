//You are given a string, stored in a variable str, and the length of the string is stored in a variable N

//The string contains characters only from the below symbols

//'!','@','#','$','%','^','&','*'
//Now every character is mapped to a certain value, such that the mapping starts from 1 and the difference between the values of two characters, is 1. Therefore, the mapping looks as follows
//'!' - 1,'@' - 2,'#' - 3,'$' - 4,'%' - 5,'^' - 6,'&' - 7,'*' - 8

let a=1;
let symbol="!@#$%^&*";
let obj={};
let str="!@#$";
let N=str.length;

for(let i=0; i<symbol.length; i++)
{
  let char=symbol[i];
  obj[char]=a;
  a++;
}
let sum=0;
for(let i=0; i<N; i++)
{
   let char=str[i];
  sum=sum+obj[char];
}
console.log(sum);