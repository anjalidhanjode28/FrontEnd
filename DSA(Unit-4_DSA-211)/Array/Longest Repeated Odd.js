// Description
// You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.

// Input
// Input Format
// First line contains N which is the number of element present in the array.
// Second line contains N integers which are the values of array.

let n = 12;
let arr = [1,1,1,1,2,2,2,2,2,1,1,1];

function longestRepeatedOdd(n,arr){
   
    let j=0;
    let count=0;
    let temp = [];
    let flag=false;
    
    for(let i=0; i<n; i++)
    {
        if(arr[i] !== arr[i+1] && arr[i]%2 !== 0 )
        {
            j = count+1;
            temp.push(j)
            count=0;
            flag = true;
        }
        else if(arr[i] == arr[i+1] && arr[i]%2 !== 0 ){
            count++;
        }
    }
    
    
    if(flag==true)
    {
        let max = -Infinity;
        for(let i=0; i<temp.length; i++)
        {
            if(max < temp[i]){
                max = temp[i];
            }
        }
        console.log(max);
    }
    else{
        console.log(0);
    }
       
}

function runProgram(input){
  
  input =input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  
  longestRepeatedOdd(n,arr);
}
if(process.env.USER===""){
  runProgram('');
}else{
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read="";
  process.stdin.on("data",function(input){
      read+=input;
  });
  process.stdin.on("end",function(){
      read=read.replace(/\n$/,"");
      read=read.replace(/\n$/,'');
      runProgram(read);
  });
  process.on('SIGINT',function(){
      read=read.replace(/\n$/,"");
      runProgram(read);
      process.exit(0);
  });
}