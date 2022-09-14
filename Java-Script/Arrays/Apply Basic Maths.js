// Description
// You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.
// Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.

let N = 5;
let A = [14,7,8,2,4];

let minimum=Infinity;
    let index= -1;
    for(i=0; i<N; i++)
    {
        let add=0;
        for(j=0; j<N; j++)
        {
            if(i!=j)
            {
                add+= A[j];
            }
        }
        if(add%7 == 0 && A[i]<minimum)
        {
            minimum = A[i];
            index = i;
        }
    }
    console.log(index);