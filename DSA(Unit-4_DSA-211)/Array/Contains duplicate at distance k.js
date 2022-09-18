// Description
// Given an array of integers and an integer k, you need to find if there exists some ai and aj in array such that ai == aj and abs(j-i) <= k i.e. they are atmost k units apart.

//input:-
// 2
// 3 1
// 1 0 1
// 3 1
// 1 1 0

function containsDuplicateAtAistanceK(n,k,arr){
    
    let flag=false;
    let obj={};
    
    for(let i=0; i<n; i++)
    {
        if(obj[arr[i]] === undefined)
        {
            obj[arr[i]] = i;
        }
        else{
            if( ( i-obj[arr[i]] ) <= k)
            {
                obj[arr[i]] = "k";
                flag=true;
            }
        }
     }
     
     if(flag === true)
     {
        console.log("YES");
     }
     else{
        console.log("NO");
     }
 }
 
 
 function runProgram(input){
     //Input Taking Here
     input = input.trim().split("\n");
     var tc = +input[0].trim();
     var line=1;
     
     for(let i=0; i<tc; i++){
         var x = input[line].trim().split(" ").map(Number);
         var n = x[0];
         var k = x[1];
         line++;
         var temp = input[line].trim().split(" ").map(Number);
         line++;
         
         // console.log(n,k,temp);
         containsDuplicateAtAistanceK(n,k,temp);
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
 