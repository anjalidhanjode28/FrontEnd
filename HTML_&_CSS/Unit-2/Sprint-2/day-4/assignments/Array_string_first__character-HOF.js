//Given an array of string generate an array with their first characters

let input = ["Masai", "School"];

let char = input.map(function(el){
    return el[0];
})

console.log(char);