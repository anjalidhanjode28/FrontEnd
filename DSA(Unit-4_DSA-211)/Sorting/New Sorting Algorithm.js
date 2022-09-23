// Description
// Hassan has discovered his own sorting algorithm. The algorithm has following conditions:
// 1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.
// 2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.
// Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.

// 12%6=0
// 18%6=0
// 17%6=5
// 65%6=5
// 46%6=4

// So, the sorted order is: 12 18 46 17 65
// 12 and 18 have same result on modulo , so, 12 remains first in sorted array as it is first in given array

let n = 5;
let k = 6;
let arr = [12,18,17,65,46];

function newSortingAlgorithm(n,k,arr){
    
    let index = [];
    for(let i=0; i<n; i++){
        let x = arr[i]%k;
        index.push(x);
    }
    
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(index[j] > index[j+1]){
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
        temp2 += arr[i]+" ";
    }
    console.log(temp2);
 }
 
 function runProgram(input){
     //Input Taking Here
     input = input.trim().split("\n");
 
     var x = input[0].trim().split(" ").map(Number);
     var n = x[0];
     var k = x[1];
     var arr = input[1].trim().split(" ").map(Number);
     // console.log(n,arr);
     newSortingAlgorithm(n,k,arr);
     
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