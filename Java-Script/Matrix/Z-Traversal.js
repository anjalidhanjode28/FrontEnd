// Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure given below for better understanding.

// 1--> 2 --> 3 --> 5--> 7 -->8 --> 9 .

let N=3;
let arr=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
        ];


let bag1="";
let bag2="";
let bag3="";

let father=0;
let son=0;
   
for(let son=0; son<N-1; son++){
    //console.log(arr[father][son]);
    bag1=bag1+arr[father][son]+" ";
}
   
father=0;
son=N-1;

while(father<N && son>=0){
    //console.log(arr[father][son]);
    bag2=bag2+arr[father][son]+" ";
    father++;
    son--;
}

father=N-1;

for(let son=1; son<N; son++){
    //console.log(arr[father][son]);
    bag3=bag3+arr[father][son]+" ";
}

console.log(bag1+bag2+bag3);