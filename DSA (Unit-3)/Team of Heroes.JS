// Description
// India and New Zealand are going to be playing in the final of the World Test Championship, and Virat Kohli, the captain of the Indian Cricket Team, desperately wants to win the game
// Now Virat Kohli is very superstitious. He has a superstitious that if the sum of the jerseys of the captain and the vice - captain of the team is exactly equal toK, the team wins one hundred percent.
// Now, he has N jersey numbers given in the form of an array, and he has to find out if there are two jersey numbers, whose sum is equal toKor not. The jersey numbers have been kept in strictly increasing order. Help him, accomplish this task

// Input
// The first line of the input containsT, the number of test cases.
// The first line of each test case, containsN, the number of Jerseys, andKis the required sum
// The next line containsNspace separated integers, indicating the jersey numbers

let N=5; 
let K=31;
let Arr = [10,11,13,17,21];

function teamOfHeroes(N,K,Arr){
    
    var sum;
    let result= false;
    for(let i=0; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            sum=Arr[i]+Arr[j];
            if(sum===K){
                console.log("Yes");
                result=true;
                return; 
            }
        }
    }
    if(result==false){
        console.log("No");
    }
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var size = x[0];
        var value = x[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        //console.log(tc,size,value,arr);
        teamOfHeroes(size,value,arr);
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
