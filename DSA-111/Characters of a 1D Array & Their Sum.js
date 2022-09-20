// Description
// You are given a string, whose size is stored in a variable with the nameN
// The string is stored in a variable with the namestr
// Each element of the string contains one of these symbols -'*', '-', '/'
// The symbols represent the following values

// * -> 0
// - -> 1
// / -> 2
// You have to find the sum of the string, such that for each symbol add the value of its corresponding values
// For example, consider the value stored inN = 5, and the value stored instr = */-*/
// Therefore, replacing each value with it's corresponding value, we get -02102
// Now, adding all these numbers, we get0 + 2 + 1 + 0 + 2 = 5, which is the required output

let N = 5;
let str = "*/-*/";

let string="*-/";
let obj={};

for(let i=0; i<string.length; i++){
    if(obj[string[i]]==undefined){
        obj[string[i]]=i;
    }
}

let sum=0;
for(let i=0; i<N; i++){
    let char=str[i];
    sum=sum+obj[char];
}
console.log(sum);
	