// Description
// Given a matrix of size n by n. Traverse and print the matrix in spiral form.

// Input
// Input Format
// First-line contains n
// The next n lines contain the matrix

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8

let top=0;
let bottom = N-1;
let left = 0;
let right = N-1;
let bag="";
    
while(top<bottom && left<right)
{
    for(i=left; i<=right; i++)
    {
        bag=bag+matrix[top][i]+" ";
    }
    top++;
    
    for(i=top; i<=bottom; i++)
    {
        bag=bag+matrix[i][right]+" ";
    }
    right--;
    
    for(i=right; i>=left; i--)
    {
        bag=bag+matrix[bottom][i]+" ";
    }
    bottom--;
    
    for(i=bottom; i>=top; i--)
    {
        bag=bag+matrix[i][left]+" ";
    }
    left++;
}
console.log(bag);