// Description
// You are given an array, whose size is stored in a variable with the nameN
// The array is stored in a variable with the namearr
// You have to find the sum of all the elements of the array which are unique.
// For example, consider the value stored inN = 7, and the value stored inarr = [3,5,3,3,8,5,6]. Since there are two numbers that are unique i.e 8 and 6.
// Then the required output will be8+6 = 14, which is the required output

let N = 7;
let arr =[3,5,3,3,8,5,6];

    let obj={};
    for(let i=0; i<N; i++)
    {
        if(obj[arr[i]]==undefined)
        {
            obj[arr[i]]=1;
        }
        else
        {
            obj[arr[i]]=obj[arr[i]]+1;
        }
    }
    
    let sum=0;
    for(let key in obj)
    {
        if(obj[key]==1){   
            sum=sum+Number(key);
        }
    }
    console.log(sum);