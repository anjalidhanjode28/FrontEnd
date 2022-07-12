// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows
// test.png
//  -------------------------------------
//  | unit consumed   |  per unit price |
//  |   0-50          |    3            |
//  |   51-150        |    5            |
//  |   150 and above |    10           |
//  -------------------------------------

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.
// You are given total amount of bill, N , you need to find total unit consumed.
// n=bill amount.

let n = 930;
let N=n-80;
    let uc;
    
    if(N<=150){
        uc=N/3;
    }else if(N<=650){
        uc=50+(N-150)/5;
    }else{
        uc=150+(N-650)/10;
    }
    
    console.log(uc);