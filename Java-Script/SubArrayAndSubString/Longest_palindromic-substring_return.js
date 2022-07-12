// You are provided a string S.
// Write a program that returns length of the longest palindromic substring of that string.

let S="thisracecarisgood";

let max_pad = -Infinity;
let max_str = "";
    
for(let father=0; father<S.length; father++)
{
    for(let son=father; son<S.length; son++)
    {
        var bag="";
        for(let me=father; me<=son; me++)
        {
            bag=bag+S[me];
        }
        
        let result = checkPalindrome(bag);
        if(result==true)
        {
            if(max_pad<bag.length)
            {
                max_pad=bag.length;
                max_str=bag;
            }
        }
    }
}
console.log(max_pad);


function checkPalindrome(str)
{
    let reverse="";
    for(let i=str.length-1; i>=0; i--)
    {
        reverse+= str[i];
    }
    if(reverse==str){
        return true;
    }else{
        return false;
    }
}