// Given a matrix wit N rows and M columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.
// Look at the image for better understanding  ex:-5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2

let N = 5; 
let M = 5;

let matrix = [
    [4, 7, 1, 1, 7],
    [8, 9, 9, 6, 1],
    [6, 4, 9, 5, 1],
    [7, 7, 4, 7, 7],
    [8, 6, 2, 5, 5]
];


let bag="";

for(let i=0; i<=N-1; i++)
{
    if(i%2!==0)
    {
        for(j=0; j<=M-1; j++)
        {
            bag=bag+matrix[i][j]+" ";
        }
    }
    else
    {
        for(j=M-1; j>=0; j--)
        {
            bag=bag+matrix[i][j]+" ";
        }
    }
}
console.log(bag);
