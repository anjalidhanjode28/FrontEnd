

let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

// Increasing order

animals.sort(function(a, b){
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(animals);

//Decreasing order:-

animals.sort(function(a, b){
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

console.log(animals);