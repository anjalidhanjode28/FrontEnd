//Given an array of numbers, return the elements that have even index (starting the count at 0) and are even.
//Use Higher-order functions.

let input = [2, 4, 5, 3, 6, 8];

let output = input.filter(function(ele,i){
    return i%2==0;
})

console.log(output);