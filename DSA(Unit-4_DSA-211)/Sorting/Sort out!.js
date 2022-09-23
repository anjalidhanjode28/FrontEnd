// Description
// Given an array A of non-negative integers of size **m**. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.
// Example:
// A={4,5,3,7,1}
// After sorting the new array becomes A={1,3,4,5,7}.
// The required output should be "4 2 0 1 3"
// NOTE: The indexing of the array starts with 0.
// You can only write your own sorting algorithm must not use builtin functionality of sort()

let n = 5;
let arr = [4,5,3,7,1];

function sortOut(n,arr){
    
    let index = [];
    for(let i=0; i<n; i++){
        index.push(i);
    }
    
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,index,j,j+1);
            }
        }
    }
    
    function swap(arr,index,A,B){
        let temp = arr[A];
        arr[A] = arr[B];
        arr[B] = temp;
        
        let bag = index[A];
        index[A] = index[B];
        index[B] = bag;
    }
    
    let temp2="";
    
    for(let i=0; i<n; i++){
        temp2 += index[i]+" ";
    }
    
    console.log(temp2);
 }
 
 function runProgram(input){
     //Input Taking Here
     input = input.trim().split("\n");
 
     var n = +input[0].trim();
     var arr = input[1].trim().split(" ").map(Number);
     // console.log(n,arr);
     sortOut(n,arr);
     
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
         runProgram(read);
         process.exit(0);
     });
 }