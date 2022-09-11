let numbers = [0, 1 , 2, 30, 10, 25, 40, 30 ];

//By using compare function

// Increasing order
numbers.sort(function (a, b){
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers);


//Decreasing order:-
numbers.sort(function (a, b){
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

console.log(numbers);