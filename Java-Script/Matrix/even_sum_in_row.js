// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM
// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns
// The 2D array is stored in a variable with the namearr
// For all rows, you have to print the sum of even elements present in the row

let N=3;
let M=3;
let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i=0; i<N; i++){
    var sum =0;
    for(let j=0; j<M; j++){
        if(arr[i][j]%2==0){
            sum=sum+arr[i][j];
        }
    }
    console.log(sum);
}