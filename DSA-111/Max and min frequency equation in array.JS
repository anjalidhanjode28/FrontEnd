// Description
// You are given an array stored in a variable with the namearr
// The size of the array is stored in a variable with the nameN
// You have to solve the equation -15*x + 2*y, wherexis the smallest frequency of an element in the array, while
// yis the largest frequency of an element in the array
// For example, consider the value stored inN = 7, andarr = [1 2 2 3 3 3 5]
// The frequency of the different elements in the array are

// 1 -> 1
// 2 -> 2
// 3 -> 3
// 5 -> 1

// The smallest frequency in the array is1, with elements1, and 5 with frequency 1, while the largest frequency in the array is 3
// as3 has a frequency 3. So, the value ofx = 1, and the value ofy = 3
// Therefore, the value of the equation becomes -15*[1] + 2*[3] = 21, which is the required output

let N = 7;
let arr = [1,2,2,3,3,3,5];

let obj={};
     
for(let i=0; i<N; i++)
{
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }else{
        obj[arr[i]]=obj[arr[i]]+1;
    }
}


let bag="";
for(let key in obj)
{
    bag=bag+obj[key];
    
    var x = Infinity;
    for(let i=0; i<bag.length; i++)
    {
       if(x>bag[i])
       {
          x=bag[i];
       }
    } 
    
    var y = -Infinity;
    for(let i=0; i<bag.length; i++)
    {
       if(y<bag[i])
       {
          y=bag[i];
       }
    } 
}
 
console.log(15*x + 2*y);