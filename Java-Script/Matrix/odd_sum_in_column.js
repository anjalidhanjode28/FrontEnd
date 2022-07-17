// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM
// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns
// The 2D array is stored in a variable with the namearr
// For all columns, you have to print the sum of odd elements present in the colum

let N=3; 
let M=3;

let arr=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(i=0; i<=M-1; i++)
{
    var sum=0; 
    for(j=0; j<=N-1; j++)
    {
        if(arr[j][i]%2!=0)
        {
            sum=sum+arr[j][i]; 
        }
    }
    console.log(sum);
}
