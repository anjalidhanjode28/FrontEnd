//Write a program to create a object from two arrays.
//**Input :**
//Given two arrays one containing the class names and other containing the values
 
//**Sample Input**
//['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII']
//[1, 2, 3, 4]

//**Expected Output:** 
//{Class-V: 1 , Class-VI: 2 , Class-VII: 3, Class-VIII: 4}



let arr1=['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII'];
let arr2=[1, 2, 3, 4];

let obj={};
let N=arr1.length;
let M=arr2.length;

for(let i=0; i<N; i++)
{
  for(let j=0; j<i+1; j++)
    {
      {
        var char=arr2[j];
      }
    }
  if(obj[arr1[i]]==undefined)
  obj[arr1[i]]=char;
}

console.log(obj);
