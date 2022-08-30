let employees = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'ana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];


//sort by firstname

//Increasing order

employees.sort(function(a, b){
    if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
    return 0;
});

console.log(employees);

//Decreasing order

employees.sort(function(a, b){
    if (a.firstName > b.firstName) return -1;
    if (a.firstName < b.firstName) return 1;
    return 0;
});

console.log(employees);



//sort by age

// Increasing order
employees.sort(function(a, b){
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
});

console.log(employees);



//Decreasing order:-

employees.sort(function(a, b){
    if (a.age > b.age) return -1;
    if (a.age < b.age) return 1;
    return 0;
});

console.log(employees);