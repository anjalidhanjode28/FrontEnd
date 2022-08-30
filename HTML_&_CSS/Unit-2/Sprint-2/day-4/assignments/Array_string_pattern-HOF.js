//Given an array of string generate an array whose first or last character is a

let input = ["assignment", "problem", "media", "upload"];

let output = input.filter(function(ele){
    return (ele[0]=="a" || ele[ele.length-1]=="a")
})

console.log(output);