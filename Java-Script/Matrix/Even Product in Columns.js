// Description
// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM
// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns
// The 2D array is stored in a variable with the namearr
// For all columns, you have to print the product of even elements present in the column
// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 4  (Even numbers in the column are, [4]. Therefore, the product becomes 4)
// 16 (Even numbers in the row are, [2,8]. Therefore, the product becomes 16) 
// 6  (Even numbers in the row are, [6]. Therefore, the product becomes 6)

let N = 3;
let M = 3; 
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


for(i=0; i<M; i++)
  {
      var product=1; 
      for(j=0; j<N; j++)
      {
          if(arr[j][i]%2==0)
         product=product*arr[j][i];
      }
      console.log(product);
  }