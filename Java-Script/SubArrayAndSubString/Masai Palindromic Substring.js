// Description
// You are provided a stringS.
// Write a program that returns length of the longest palindromic substring of that string.

let S = "thisracecarisgood";

function masaiPalSubString(S){
    
    let max=0;
    
    for(let i=0; i<S.length; i++)
    {
        let bag="";
        for(j=i; j<S.length; j++)
        {
            bag+=S[j];
            if(bag.length>max && isPalindrome(bag))
            {
                max=bag.length;
            }
        }
    }
    console.log(max);
}

function isPalindrome(str)
{
    let reverse="";
    for(let i=str.length-1; i>=0; i--)
    {
        reverse+= str[i];
    }
    
    return str==reverse;
}
