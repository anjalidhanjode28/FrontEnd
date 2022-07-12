// You are given a string whose size is stored in a variable with the nameN, stored in a variable with the namestr
// You have to print all the characters in the string, which are present at even indexes

let str = "ankush";
let N=str.length;

for(let i=0; i<N; i++)
    {
        if(i%2==0){
            console.log(str[i]);
        }
    }