// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM
// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns
// The 2D array is stored in a variable with the namearr
// You have to print the elements of the 2D array, row by row
// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// Sample Input 1   
// 3 2
// 1 2
// 3 4
// 5 6
// Sample Output 1
// 1 2
// 3 4
// 5 6

let N=3;
let M=2;

let arr=[
    [1,2],
    [3,4],
    [5,6]
];


for(i=0; i<=N-1; i++)
{
    var bag="";
    for(j=0; j<=M-1; j++)
    {
        bag=bag+arr[i][j]+" ";
        
    }
    console.log(bag);
}
