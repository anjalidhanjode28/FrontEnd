// Description
// You are given an integer n. The next line is an array A which contains n*n elements. The spiral traversal of a square matrix of dimension (n x n) results in the given array.
// Calculate the sum of all elements which are on the diagonals of the square matrix.
// The matrix traversal happens in the manner shown in the image below
// spiral-order-traversal-of-a-matrix-.png

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100)
// The second line contains n*n integers (1 ≤ Ai ≤ 1000) - The spiral traversal of a square matrix of dimension n x n.

// Output
// For each test case, print the answer: The sum of elements present in the diagonals of the matrix.

// 3
// 1
// 1
// 2
// 1 2 3 4
// 3
// 1 2 3 4 5 6 7 8 9

function spiralsandDiagonals(n,mat,arr){
   
    let top=0;
    let bottom = n-1;
    let left = 0;
    let right = n-1;
    let sum=0;
    let temp = "";
    let x=0;
    
    while(top < bottom  &&  left < right){
        
        for(i=left; i<=right; i++){
           mat[top][i]=arr[x];
           x++;
        }
        top++;
        
        for(i=top; i<=bottom; i++){
            mat[i][right]=arr[x];
             x++;
        }
        right--;
        
        for(i=right; i>=left; i--){
            mat[bottom][i]=arr[x];
             x++;
        }
        bottom--;
        
        for(i=bottom; i>=top; i--){
            mat[i][left]=arr[x];
             x++;
        }
        left++;
    }
    
    
    if( n%2 !== 0 ){
       mat[Math.floor(n/2)][Math.floor(n/2)] = arr[arr.length-1];
    }
    
    // for odd dimentional matrix we have to use if condition and we have to assign the last value as shown here
    // console.log(mat[Math.floor(n/2)][Math.floor(n/2)]);
    // console.log(arr[arr.length-1]);
    // console.log(mat);
    
    if(n%2 === 0){
        
        let l=0;
        let k=0;
        
        while( l < n && k <n){
            temp=temp+mat[l][k]+" ";
            sum=sum+mat[l][k];
            l++;
            k++;
        }
        
        l=0;
        k=n-1
        
        while(l<n && k>=0){
            temp=temp+mat[l][k]+" ";
            sum=sum+mat[l][k]
            l++;
            k--;
        }
        
        console.log(sum);
        
        
    }else{
        
        let l=0;
        let k=0;
        
        while( l < Math.floor(n/2)  && k < Math.floor(n/2)){
            temp=temp+mat[l][k]+" ";
            sum=sum+mat[l][k];
            l++;
            k++;
        }
        
        l=Math.ceil(n/2);
        k=Math.ceil(n/2);
        
        while(l<n && k<n){
             temp=temp+mat[l][k]+" ";
             sum=sum+mat[l][k];
            l++;
            k++;
        }
        
        l=0;
        k=n-1
        
        while(l<n && k>=0){
            temp=temp+mat[l][k]+" ";
            sum=sum+mat[l][k]
            l++;
            k--;
        }
        
        console.log(sum);
    }
    
}


function runProgram(input){
   
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var size = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        
        let mat = new Array(size);
        
        let k=0;
        for(let j=0; j<mat.length; j++){
            let nums = new Array(size);
            
            for(let f=0; f<size; f++){
                nums[f] = 0;
                k++;
            }
            mat[j]=nums;
        }
        //  console.log(size,mat,arr);
        spiralsandDiagonals(size,mat,arr);
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
