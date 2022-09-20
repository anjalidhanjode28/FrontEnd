// Description

// A "distinct Element"is an element that occurs only once in an "Array"
// You are given an integernand  an arrayarrcontaining n elements
// You have to find the number of distinct elements in the array.

let n = 8;
let arr = [1,1,5,2,6,6,3,5];

let obj={};
for(let i=0; i<arr.length; i++)
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

let count=0;
for(let key in obj)
{
    if(obj[key]==1)
    {
        count++;
    }
}
console.log(count);