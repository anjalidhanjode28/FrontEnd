// You are given a 2D array, whose dimensions are stored in two variables with the name N and M
// The value stored inNdenotes the number of rows, and the value in M denotes the number of columns
// The 2D array is stored in a variable with the name arr, and contains lower case English characters
// You have to print Yes, if any particular row of a 2D array contains at least one vowel, at least print No

let N=3; 
let M=2;

let arr=[
    [a, b],
    [c, d],
    [e, f]
];

let str = "aeiou";
let bag;
    
for(i=0; i<N; i++)
{
    var value = false;
    for(j=0; j<M; j++)
    {
        bag=arr[i][j];
        for(k=0; k<str.length; k++)
        {
            if(bag == str[k])
            {
                value = true;
                break;
            }
        }
    }

    if(value == true)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
}
