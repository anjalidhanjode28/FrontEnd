let input=[2,3,4];

let result = input.reduce(function (acc,ele){
    return acc*ele;
},1)
console.log(result);