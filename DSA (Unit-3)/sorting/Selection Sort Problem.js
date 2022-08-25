// Description
// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.
// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION

// Input
// Input Format:
// First line of input contains N
// Second line of input contains N numbers

let N = 5;
let arr =[3,5,0,9,8];

var i;
var j;

let bag="";

for(i=0; i<N-1; i++)
{
    min_index = i;
    
    for(j=i+1; j<N; j++)
    {
        if(arr[j] < arr[min_index])
        {
            min_index=j;
        }
    }
    swap(arr,min_index,i);
}

function swap(arr,A,B)
{
    var temp = arr[A];
    arr[A] = arr[B];
    arr[B] = temp;
}


for(let i=0; i<N; i++)
{
    bag=bag+arr[i]+" ";
}
console.log(bag);