// You are given a string, whose size is stored in a variable with the nameN
// The string is stored in a variable with the namestr
// Print Yes, if the string is a palindrome, else print No
// For example, consider the value stored instr = "naman", if we reverse the string, the reversed string will be the same as the original string, hence the string is considered as palindrome, therefore, the output is Yes

let str = "nrupul";
let N = str.length;

let string = str.join();
  let bag="";
  
    for(i=string.length-1;i>=0;i--)
    {
        bag=bag+string[i];
    }

    
if(string == bag){
    console.log("Yes");
}
else
{
    console.log("No");
}