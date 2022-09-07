// Description
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


// Input Format
// The input consists of multiple testcases.
// The first line of input contains an integer t - the number of testcases.
// The following 2*t lines contain the description of the t testcases.
// The first line of each testcase contains an integer n - the size of the array.
// The second line of each testcase contains n space-separated integersnums[1],nums[1],...nums[i]..,nums[n]

// 2
// 4
// 1 2 3 4
// 5
// -1 1 0 3 -3

function productOfArrayExceptSelf(n,arr)
{
    let temp="";
    let ans = [];
    let product = 1;
    
    for(let i=0; i<n; i++)
    {
        product *= arr[i];
        ans.push(product);
    }
    product=1;
    
    for(let i=n-1; i>0; i--){
        
        ans[i] = ans[i-1]*product;
        product *= arr[i];
    }
    ans[0]=product;
    
    for(let i=0; i<n; i++)
    {
        if(ans[i] == -ans[i])
        {
            ans[i]= (-1) * ans[i];
        }
        temp += ans[i]+" ";
    }
    console.log(temp);
}

function runProgram(input)
{
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++)
    {
        var n = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        productOfArrayExceptSelf(n,arr);
    }
}
if(process.env.USER==="")
{
    runProgram('');
}
else{
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
