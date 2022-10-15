// Description
// Given a matrix A, you have to transform the given matrix such that you have to make A[i][j] = -A[i][j] if its 2 or more adjacent elements are odd.

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9

function OddAdjacentElements(n,m,mat){
    
    for(let i=0; i<n; i++)
    {
        
        let temp = "";
        
        for(let j=0; j<m; j++)
        {
            let count=0;
           
            if( i<n-1 && mat[i+1][j]%2 !== 0){
                count++;
            }
             if(i>0 && mat[i-1][j]%2 !== 0){
                count++;
            }
             if( j<m-1 && mat[i][j+1]%2 !== 0){
                count++;
            }
             if(j>0 && mat[i][j-1]%2 !== 0){
                count++;
            }
        
        
            if(count >= 2){
                mat[i][j] = -mat[i][j];
            }
            
            temp += mat[i][j] + " ";
        }
        
        console.log(temp);
    }
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    // console.log(input);
    var x = input[0].trim().split(" ").map(Number);
    var n = x[0];
    var m = x[1];
    var mat = [];
    var line = 1;
    
    for(let i=0; i<n; i++){
       
        var arr = input[line++].trim().split(" ").map(Number);
        mat.push(arr);
    }
    // console.log(n,m,mat);
    OddAdjacentElements(n,m,mat);
    
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