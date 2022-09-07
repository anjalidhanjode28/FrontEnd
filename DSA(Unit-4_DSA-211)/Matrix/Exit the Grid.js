// Description
// You are playing the famous Maze Runner Arcade Game. The game contains a maze which has values{'L', 'R', 'U', 'D'}, where L -> indicates that you move left, R -> indicates that you move right,
// U -> indicates that you move up, while D -> indicates that you move down. The score is calculates as the number of moves in which you exit the grid. If you cannot exit the grid, that means your
// scoreshould be returned as 0. Given a square matrix, denoting the maze, write a program to calculate the score.
// Note: You will always enter that the maze through the position (0,0).

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N, the size of the maze, given in the form of square matrix.
// Next N lines contain N characters each, denoting in which direction to move.

// 3
// 4 
// RRRR
// LLLL
// UUUU
// DDDD
// 3
// LRL
// UUU
// DLR
// 2
// RL
// DD

function exitTheGrid(n,mat){
    
    let travels=0;
    let i=0;
    let j=0;
    
    while(i>=0 && j>=0 && i<n && j<n){
        
        if(mat[i][j] === "stope"){
            travels=0;
            break;
        }
        else if(mat[i][j] === "L"){
            mat[i][j] = "stope";
            travels++;
            j--;
        }
        else if(mat[i][j] === "R"){
            mat[i][j] = "stope";
            travels++;
            j++;
        }
        else if(mat[i][j] === "U"){
            mat[i][j] = "stope";
            travels++;
            i--;
        }
        else if(mat[i][j] === "D"){
            mat[i][j] = "stope";
            travels++;
            i++;
        }
    }
    console.log(travels);
}

function runProgram(input){
   
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line].trim();
        line++;
        var mat = [];
        
        for(let j=0; j<n; j++){
            var str = input[line].trim().split("");
            mat.push(str);
            line++;
        }
        
        exitTheGrid(n,mat);
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