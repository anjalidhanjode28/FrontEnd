// All the Code for the Rejected page goes here

let rejectedStudents = JSON.parse(localStorage.getItem("admission-rejected")) || [];


rejectedStudents.forEach(function(elem,index){

    let tableRow = document.createElement("tr");

    let column1 = document.createElement("td");
    column1.innerText = elem.name;

    let column2 = document.createElement("td");
    column2.innerText = elem.email;

    let column3 = document.createElement("td");
    column3.innerText = elem.course;

    let column4 = document.createElement("td");
    column4.innerText = elem.gender;

    let column5 = document.createElement("td");
    column5.innerText = elem.phone;


    tableRow.append(column1,column2,column3,column4,column5);
    document.querySelector("tbody").append(tableRow);
});