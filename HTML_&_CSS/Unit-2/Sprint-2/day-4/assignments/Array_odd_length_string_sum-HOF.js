//Given an array of strings print the sum of lengths if the characters in the string are odd


let input = ["A", "Good", "Problem"];

let lngth = input.map(function(el){
     return el.length;
})

let odd = lngth.filter(function(ele){
    return ele%2 == 1;
})

let sum = odd.reduce(function(acc, el){
    return acc+el;
})

console.log(sum);