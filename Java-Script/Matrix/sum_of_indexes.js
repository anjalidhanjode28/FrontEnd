// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM
// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns
// The 2D array is stored in a variable with the namearr
// You have to print the sum of indexes of the 2D array for all positions in the 2D array
// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

let N=3; 
let M=2;

let arr=[
    [1, 2],
    [3, 4],
    [5, 6]
];

for(let i=0; i<N; i++)
{
    var add="";
        for(var j=0; j<M; j++)
    {
        add+=i+j+" ";
    }
    console.log(add);
}