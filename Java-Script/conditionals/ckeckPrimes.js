// You are given a number stored in a variable with the namenum
// Check if the number is a prime number or not
// If the value stored innum, is a prime number print Yes, else print No

let factore=0;
let num=13;

for(let i=1; i<=num; i++)
{
    if(num%i==0)
    {
        factore++;
    }
}

if(factore==2)
{
    console.log("Yes");
}
else
{
    console.log("No");
}