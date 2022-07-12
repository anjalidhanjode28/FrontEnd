// You are given a string, whose length is stored in a variable with the name N
// The string is stored in a variable with the name str
// The string only contains small case characters, and each character, is given a category such thata = 1, b = 2, c = 3, d = 4, ......, z = 26
// You have to generate a new string, such that each character, is replaced by the value of its category
// For example, consider the value stored instr = abcd, and N = 4
// Now, replacing each character with it's category, we get 1234, as the new string, which is the required answer

let str = "abcd";
let N= str.length;

let lower = "abcdefghijklmnopqrstuvwxyz";
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    
    for(let i=0; i<lower.length; i++)
    {
        for(let j=0; j<N; j++)
        {
            if(str[j]==lower[i])
            {
                str[j]=num[i];
            }
        }
    }
    
console.log(str.join(""));