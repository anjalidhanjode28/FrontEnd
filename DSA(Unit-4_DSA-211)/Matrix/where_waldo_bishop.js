// Description
// Ankush has an 8×8 chessboard whose rows are numbered from 1 to 8 from top to bottom and whose columns are numbered from 1 to 8 from left to right.
// Ankush has placed exactly one bishop on the chessboard.
// The bishop is not placed on the edges of the board. (In other words, the row and column of the bishop are between 2 and 7, inclusive.)
// The bishop attacks in all directions diagonally, and there is no limit to the distance which the bishop can attack.
// Note: that the cell on which the bishop is placed is also considered attacked.
// Ankush has marked all squares the bishop attacks, but forgot where the bishop was!
// Help Ankush find the position of the bishop.

// 2
// .....#..
// #...#...
// .#.#....
// ..#.....
// .#.#....
// #...#...
// .....#..
// ......#.

// #.#.....
// .#......
// #.#.....
// ...#....
// ....#...
// .....#..
// ......#.
// .......#

function whereWaldoBishop(mat){
    
    let n = mat[0].length;
    
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<n; j++)
        {
            let count=0;
           
            if(i<n-1 && j<n-1 && mat[i+1][j+1] === "#"){
                count++;
            }
             if(i>0 && j>0 && mat[i-1][j-1] === '#'){
                count++;
            }
             if(i>0 && j<n-1 && mat[i-1][j+1] === '#'){
                count++;
            }
             if(i<n-1 && j>0 && mat[i+1][j-1] === '#'){
                count++;
            }
        
            if(count === 4){
                 console.log((i+1)+" "+(j+1));
            }
        }
    }
}

function runProgram(input){
   
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var mat = [];
        
        for(let j=0; j<8; j++){
            var arr = input[line].trim().split("");
            mat.push(arr);
            line++;
        }
        whereWaldoBishop(mat);
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