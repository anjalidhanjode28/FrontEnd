// You are given a string stored in a variable with the namestr, whose length is stored in a variable with the nameN
// The string is binary, which means it contains only 1's and 0's
// You have to find the length of the longest substring which contains only 1's

let N=7;
let str = "1000110";

let max=-Infinity;
let flag=false
    
for(let i=0; i<N; i++)
{
    for(let j=i; j<N; j++)
    {
        var bag="";
        for(let k=i; k<=j; k++)
        {
            bag=bag+str[k];
            }
            var result = checkOne(bag);
            if( result == false )
            {
                flag=true;
                if(max<bag.length){
                    max=bag.length;
                }
            }
    }
}
    
    
if(flag==true){
        console.log(max);
}else{
    console.log("0");
}


function checkOne(string)
{
    for(let f=0; f<string.length; f++)
    {
        if(string[f]==0){
            return true;
        }
    }
    return false;
}