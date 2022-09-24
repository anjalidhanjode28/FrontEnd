// Description
// You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:
// - If two students get same marks they get same rank
// - The student placed next to the same marks students will get the rank skipping the intermediate ranks.
// Refer to the sample test case for better understanding
// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm

// Input Format :
// First line of input contains N
// Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)

// Output
// Output N names with their rank. Follow these rules for generating the list:

// 1. The students having more mark gets better rank
// 2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)
// 3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45

function makeLeaderboard(N,name,marks){
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N-i-1; j++){
            if(name[j] > name[j+1]){
                swap(name,marks,j,j+1);
            }
        }
    }
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N-i-1; j++){
            if(marks[j] < marks[j+1]){
                swap(name,marks,j,j+1);
            }
        }
    }
    
    function swap(name,marks,A,B){
        let temp1 = name[A];
        name[A] = name[B];
        name[B] = temp1;
        
        let temp2 = marks[A];
        marks[A] = marks[B];
        marks[B] = temp2;
    }
    
    // console.log(name);
    // console.log(marks);
    
    let rank = 1;
    let count = 0;
    
    for(let i=0; i<N; i++){
        if(marks[i] == marks[i-1]){
            console.log(rank+" "+name[i]);
        }else{
            rank = count+rank;
            console.log(rank+" "+name[i]);
            count = 0;
        }
        count++;
    }
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    let n = +input[0].trim();
    let line = 1;
    let str = [];
    let num = [];
    
    for(let i=0; i<n; i++){
        var temp = input[line].trim().split(" ");
        str.push(temp[0]);
        num.push(+temp[1]);
        line++;
    }
    
    // console.log(str,num);
    makeLeaderboard(n,str,num);
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
