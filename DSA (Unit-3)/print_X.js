// You are given a 2D array with N rows and M columns, having positive integers. X is defined as the collection of unique positive integers of the left diagonal and right diagonal of the array. Print all the elements of X in ascending order.
// Note -If no such X exists print -1.
// Input
// First line: Single integer denoting the value of T - the number of test cases.
// For each test case:
// First line: Two single space-separated integers denoting the value of N and M.
// N lines follow:
// Each of the lines consists of M single space-separated integers, denoting a row of a matrix.
//Output
// For each test case, print in a new line, all the unique elements of X, each separated by a single space, in ascending order. If no such X exists print -1.

let tc = 2;
let N=2; 
let M=2;
let Arr = [
    [1, 1],
    [3, 4]
];

function  printX(N,M,Arr){
    
    if(N==M){
        
        var bag=[];
        var obj={};
        
        let i=0;
        let j=0;
        
        while(i<N && j<M){
            
            if(obj[Arr[i][j]]===undefined){
                obj[Arr[i][j]]=11;
            }else{
                obj[Arr[i][j]]=obj[Arr[i][j]]+1;
            }
            
            i++;
            j++;
        }
        
         i=0;
         j=M-1;
        
        while(i<N && j>=0){
            
            if(obj[Arr[i][j]]===undefined){
                obj[Arr[i][j]]=1;
            }else{
                obj[Arr[i][j]]=obj[Arr[i][j]]+1;
            }
            
            i++;
            j--;
        }
        
        for(let key in obj){
            bag.push(key);
        }
        
        bag.sort(function(a,b){
            return a-b;
        });
        
        let add="";
        
        for(let i=0; i<bag.length; i++){
            add=add+bag[i]+" ";
        }
        console.log(add);
  
    }
    else{
        console.log(-1);
    }
    
}


function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var row = x[0];
        var col = x[1];
        line++;
        var array=[];
        
        for(let j=0; j<row; j++){
            var temp = input[line].trim().split(" ").map(Number);
            array.push(temp);
            line++;
        }
        
        printX(row,col,array);
    }
    
    
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
