// Description
// Given the current day, and a number N, find what day will it be after N days.
// Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}

// Input
// The first line of the input contains the name of the current day.
// The second line of the input contains N.


let day = "Wednesday";
let N = 8;

let obj = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
    "Saturday": 5,
    "Sunday": 6
};

let value=0;

for(let key in obj){
    if(key == day){
        value = obj[key];
    }
}

value = value + N;
value = value % 7;

for(let x in obj){
    if(obj[x] == value){
        console.log(x);
    }
}