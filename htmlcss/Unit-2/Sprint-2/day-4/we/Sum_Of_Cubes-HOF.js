let input=[2,3,4,5,6];

let res=input.map(function (ele){
    return ele**3;
});


let divisibility = res.filter(function(ele){
    return ele%3==0;
});

let add = divisibility.reduce(function(acc, ele){
    return acc+ele;
})

console.log(add);