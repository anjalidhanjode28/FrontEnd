// Description
// Consider a maze represented using a grid consisting of n rows and m columns. The cell in the i-th row from the top and the j-th column from the left is defined (i,j).
// Every cell, except (n,m), has a direction assigned to it i.e either right or down (R and D respectively). If the matrix (i,j) is assigned direction R, anyone on that cell moves to the cell (i, j+1) and if it is assigned D, anyone on that cell moves to the cell (i+1, j).
// If at any moment, the moves make the person out of the maze, it is considered to be lost.
// There is an exit at the cell (n,m) from where everyone can exit. The cell (n,m) is assigned E for this reason. The maze is functional if and only if any person reaches the exit regardless of which cell it is placed in initially i.e, eventually end up in the cell (n,m). (Consider they do not go out of the maze in between and are not lost)
// The maze may not be functional initially. Determine the minimum number of changes to make it functional. The answer always exists.
// Check the sample input/output for more clarification.

// 4
// 3 3
// RRD
// DDR
// RRC
// 1 4
// DDDC
// 6 9
// RDDDDDRRR
// RRDDRRDDD
// RRDRDRRDR
// DDDDRDDRR
// DRRDRDDDR
// DDRDRRDDC
// 1 1
// C

function FixingMaze(n,m,maze){
    
    let count = 0;
    
    for(let i=0; i<m; i++){
        if(maze[n-1][i] == "D"){
            count++;
        }
    }
    
    for(let i=0; i<n-1; i++){
        if(maze[i][m-1] == "R"){
            count++;
        }
    }
    
    console.log(count);
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var n = x[0];
        var m = x[1];
        line++;
        var maze = [];
        for(let i=0; i<n; i++){
            var temp = input[line].trim();
            maze.push(temp);
            line++;
        }
        
        // console.log(n,m,maze);
        FixingMaze(n,m,maze);
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
