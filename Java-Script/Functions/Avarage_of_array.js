//Write code to calculate the average of an array
//If there are no items in the array it should return 0
//NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function sum_array(){
    let arr = [1 ,2 ,3 ,4 ,5];
    let n=arr.length;
    let sum=0;
      for(i=0;i<=n-1;i++)
      {
        sum=sum+arr[i];
      }
      return sum;
  }
  
  let count=0;
  let sum=sum_array();
  
  for(let i=0; i<5 ; i++){
    count++;
  }
  console.log("Average is", sum/count);
   