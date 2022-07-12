//You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.

let s="abcab";
let count = 0;

for(let i=0; i<s.length; i++)
{
    for(let j=i; j<s.length; j++)
    {
        var bag="";
        for(let k=i; k<=j; k++)
        {
            bag=bag+s[k];
        }

        let last_index = bag.length-1;
        if(bag[0]==bag[last_index]){
            count++;
        }
    }
}
console.log(count);