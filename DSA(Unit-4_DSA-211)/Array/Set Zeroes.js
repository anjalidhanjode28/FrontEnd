// Description
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// 1
// 3 3
// 1 1 1
// 1 0 1
// 1 1 1

function SetZeroes(n,m,mat){
    
    let s = [];
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(mat[i][j] === 0){
               s.push([i,j]);
            }
        }
    }
    while(s.length != 0){
        for(let i=0; i<m; i++){
            mat[s[s.length-1][0]][i] = 0;
        }
        for(let i=0; i<n; i++){
            mat[i][s[s.length-1][1]] = 0;
        }
        s.pop();
    }
    
    for(let i=0; i<n; i++){
        let bag="";
        for(let j=0; j<m; j++){
            bag += mat[i][j]+" ";
        }
         console.log(bag);
    }
   
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++)
    {
        var x = input[line].trim().split(" ").map(Number);
        var n = x[0];
        var m= x[1];
        var mat = [];
        line++;
        
        for(let i=0; i<n; i++)
        {
            var temp = input[line].trim().split(" ").map(Number);
            mat.push(temp);
            line++;
        }
        // console.log(n,m,mat);
        SetZeroes(n,m,mat);
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
