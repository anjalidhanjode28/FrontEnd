// You are given a string, stored in a variablestr, and the length of the string is stored in the variableN
// You have to find all the vowels that are not present in the string and print them.
// If a string contains all the vowels, in that case, print -1.
// For example, consider the value stored inN = 6, andstr = nature
// out of the 5 vowels(a,e,i,o,u)
// the word "nature" contains a,u,e
// The vowel that are not present in the string are : i,o
// hence the output is io



let str = "nature";
let N = str.length;

let result=false;
let arr=[];
let vowels="aeiou";
for(let i=0; i<vowels.length; i++){
    arr.push(vowels[i]);
}

  
for(let i=0; i<str.length; i++){
    for(let j=0; j<vowels.length; j++){
        if(str[i]==vowels[j]){
            arr.push(str[i]);
        }
    }
}
  
  
let obj={};
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }else{
        obj[arr[i]]=obj[arr[i]]+1;
    }
}
  

let bag="";
for(let key in obj){
    if(obj[key]==1){
        result=true;
        bag=bag+key; 
    }
}
  

if(result==true){
    console.log(bag);
}else{
    console.log("-1");
}