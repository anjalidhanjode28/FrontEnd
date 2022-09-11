let input=[1,2,3,4];
let res=input.filter(function(ele){
    return ele%2!=0;
})
let result = res.reduce(function (acc,ele){
    return acc+ele;
},)
console.log(result);