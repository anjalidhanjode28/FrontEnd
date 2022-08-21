// Description
// Given an array A, print starting and ending index of all subarrays in the array which has sum 0. (0-indexing)

let Arr = [6,3,-1,-3,4,-2,2,4,6];

for(let son=father; son<arr.length; son++){
    var array=[];
    for(let me=father; me<=son; me++){
        array.push(arr[me]);
    }
        let result = sum(array);
        if(result==true){
            console.log(father,son);
        }
    
}

function sum(array){
    var sum=0;
    for(let i=0; i<array.length; i++){
       sum=sum+array[i];
    }
    if(sum==0){
       return true;
    }else{
       return false;
    }
}
