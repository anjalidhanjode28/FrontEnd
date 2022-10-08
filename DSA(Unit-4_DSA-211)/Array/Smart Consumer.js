// Description
// You go to a shop to buy groceries.There are n items you have to buy. You are given an array of size n representing the price of these n items.
// You know that there is a discount coupon available that cost X rupees.
// This coupon gives you upto Y rupees off on all items, i.e. for all items that costs more than Y their price reduces by Y and others you get for 0 rupees.
// Determine whether you should buy the discount coupon or not. You should buy the discount coupon if and only if the total price you pay after buying the discount coupon is strictly less than the price you were paying without buying the discount coupon.

function SmartConsumer(n,coup,dis,price){
    
    let total = 0;
    let dis_price = 0;
    
    for(let i=0; i<n; i++){
        total += price[i];
    }
    
    for(let i=0; i<n; i++){
        let discount = price[i] - dis;
        if(discount <= 0){
            discount = 0;
        }
       
        dis_price += discount;
    }
    
    let new_price = dis_price+coup;
    
    if(new_price < total){
        console.log("YES");
    }else{
        console.log("NO");
    }
}

function runProgram(input){
    // Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    let line = 1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var n = x[0];
        var coup = x[1];
        var dis = x[2];
        line++;
        var price = input[line].trim().split(" ").map(Number);
        line++;
        // console.log(n,coup,dis,price);
        SmartConsumer(n,coup,dis,price);
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
