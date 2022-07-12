// Nobita is given a number N (length of the string) and a string, the string contain both Lowercase and Uppercase English Alphabet characters , convert all Uppercase characters
// into lowercase then output the entire string.

let str = "abAbC";
let N = str.length;

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     
    for(let i=0; i<N; i++){
        for(let j=0; j<upper.length; j++){
            if(str[i]==upper[j]){
                str[i]=lower[j];
            }
        }
    }

console.log(str.join(""));