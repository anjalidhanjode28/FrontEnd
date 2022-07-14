// You are given an alphanumeric string A, of length N. print the string that contains all the numbers first, than all the alphabets of that string A, in same order.
//For example:-A = r1h4landN = 5, numbers in it are1,4and alphabets arer,h,lso output will be:-14rhl
//Note: The alphanumeric string, contains numbers from [0,9] and small case characters.

//let A = "r1h4l";
let A="1abc7";
//let A="a123b";
let N=A.length;

let y="0123456789";
let lower="abcdefghijklmnopqrstuvwxyz";
	
let bag1="";
let  bag2="";
	
	for(i=0; i<N; i++)
	{
	    for(j=0; j<y.length; j++)
	    {
	        if(y[j]==A[i])
	        {
	            bag1=bag1+A[i];
	        }
	    }
	}


	for(i=0; i<N; i++)
	{
	    for(j=0; j<lower.length; j++)
	    {
	        if(lower[j]==A[i])
	        {
	            bag2=bag2+A[i];
	        }
	    }
	}

//console.log(bag1);
//console.log(bag2);
console.log(bag1+bag2);