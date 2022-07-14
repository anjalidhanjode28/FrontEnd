let str="aman";
let string="naman";
let bag="";

for(let i=0; i<str.length; i++){
  for(let j=0; j<string.length; j++){
    if(str[i]==string[j]){
      var x=string[j];
      bag=bag+x;
      break;
    }
  }
}
console.log(bag);