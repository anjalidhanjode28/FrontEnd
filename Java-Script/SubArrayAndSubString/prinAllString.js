//all string will be printed:-

let str = "masai";

for(let i=0; i<str.length; i++){
  for(let j=i; j<str.length; j++){
    let bag = "";
    for(let k=i; k<=j; k++){
      bag = bag + str[k];
    }
    console.log(bag);
  }
}