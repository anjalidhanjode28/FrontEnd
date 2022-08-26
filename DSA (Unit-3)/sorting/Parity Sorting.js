// Description
// Given an integer array. Sort the array in such a way that all the odd number are in the beginning of the array followed by the even numbers.
// The odd number and even number should follow an ascending order.

// Input
// Input Format
// The first line contains the number of integers N
// The second line contains the elements of the array

let N=5;
let arr = [2,5,1,4,2];

let even = [];
    let odd = [];
    let bag = "";
    
    for(let i=0; i<N; i++)
    {
        if(arr[i]%2===0)
        {
            even.push(arr[i]);
        }
        else
        {
            odd.push(arr[i]);
        }
    }
    
    let x = even.length;
    let y = odd.length;
    let i;
    let j;
    
    for(i=0; i<y-1; i++)
    {
        for(j=0; j<y-i-1; j++)
        {
            if(odd[j] > odd[j+1])
            {
                swap(odd,j,j+1);
            }
        }
    }
    

    for(i=0; i<x-1; i++)
    {
        for(j=0; j<x-i-1; j++)
        {
            if(even[j] > even[j+1])
            {
                swap(even,j,j+1);
            }
        }
    }
    

    function swap(arr,A,B){
        var temp = arr[A];
        arr[A] = arr[B];
        arr[B] = temp;
    }
    

    for(let i=0; i<y; i++){
        bag=bag+odd[i]+" ";
    }
    for(let i=0; i<x; i++){
        bag=bag+even[i]+" ";
    }
   
    console.log(bag);