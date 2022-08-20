// Description
// Masai is organizing a sports fest that is going to run for N days, and everyday M people are going to participate in it. Each player is having some power rating P. The person with higher value of P, wins everyday. You are given the powers of all the people participating everyday. You have to find the winner for everyday, and print their power in the form of a list. Refer the sample I/O for better understanding.
// Note: Two people may have the same power.

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains the values of N and M.
// The next lines contain M integers, denoting the powers of all the players participating on a given day.

let R = 3;
let C = 4;

let Arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];


function masaiCompetitions(R,C,Arr){
    
    let bag="";
    
    for(let i=0; i<R; i++)
    {
        let max=-Infinity;
        for(let j=0; j<C; j++)
        {
            if(Arr[i][j]>max)
            {
                max=Arr[i][j];
            }
        }
        //console.log(max);
        bag=bag+max+" ";
    }
    console.log(bag);
}

function runProgram(input){
     //Input Taking Here
     
    input=input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var R = x[0];
        var C = x[1];
        var arr = [];
        line++;
        
        for(let j=0; j<R; j++){
            let temp = input[line].trim().split(" ").map(Number);
            arr.push(temp);
            line++;
        }
        //console.log(tc,R,C,arr);
        masaiCompetitions(R,C,arr);
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
         runProgramm(read);
         process.et(0);
     });
 }
