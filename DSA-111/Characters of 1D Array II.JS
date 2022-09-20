// Description
// You are given a string, whose size is stored in a variable with the nameN
// The string is stored in a variable with the namestr
// Each element of the string contains one of these symbols@,%,&,#,^
// The symbols represent the following values

// '@'-> 0
// '%'-> 1
// '&'-> 2 
// '#'-> 3
// '^'-> 4

// You have to generate a string, such that each symbol is replaced by its corresponding values
// For example, consider the value stored inN = 5, and the value stored instr = @%&#^
// Therefore, replacing each value with its corresponding value, we get -01234, which is the required answer.

let N = 5;
let obj={};
let string="@%&#^";
let k=0;

for(let i=0; i<string.length; i++)
{
   let char=string[i];
   obj[char]=k;
   k=k+1;
}

let bag="";
for(let i=0; i<N; i++)
{
    let char=str[i];
    bag=bag+obj[char];
}
console.log(bag);