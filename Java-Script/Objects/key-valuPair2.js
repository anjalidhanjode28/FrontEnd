//Write a program to combine two objects by adding their values for common keys.

//**Sample Input**
//d1 = {a: 100, b: 200, c:300}
//d2 = {a: 300, b: 200, d:400}

//**Sample Output**
//{a: 400, b: 400, c: 300, d: 400}

//**Explanation**
//d1 = {a: 100, b: 200, c:300}
//d2 = {a: 300, b: 200, d:400}

//In the above given objects, the value for key 'a' is 100 and 300
//thus, we will calculate the sum 100 + 300 = 400 that will be the value for
//key 'a' in final object
//It will go same for other keys also
//{a: 400, b: 400, c: 300, d: 400}

let obj1={
    a: 100,
    b: 200,
    c: 300
  }
  
  let obj2={
    a: 300,
    b: 200,
    d: 400
  }
  
  let N=obj1.length;
  let M=obj2.length;
  
  let obj={};
  
  
  for(let key1 in obj1)
  {
    for(let key2 in obj2)
    {
      if(key1==key2)
      {
        var char=obj1[key1]+obj2[key2];
        if(obj[key1]==undefined)
        {
          obj[key1]=char;
        }
      }
    }
  }
  for(let key1 in obj1)
  {
    if(obj[key1]==undefined)
    {
      obj[key1]=obj1[key1];
    }
  }
  
  for(let key2 in obj2)
  {
    if(obj[key2]==undefined)
    {
      obj[key2]=obj2[key2];
    }
  }
  
  console.log(obj);