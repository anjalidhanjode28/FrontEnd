// All the Code for All Students Page Goes Here

let allStudents = JSON.parse(localStorage.getItem("admission")) || [];
let acceptedArr = JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejectedArr = JSON.parse(localStorage.getItem("admission-rejected")) || [];

displayTable(allStudents);

    document.querySelector("#filter").addEventListener("change", handleFilter);

    function handleFilter() {
    let selected = document.querySelector("#filter").value;
    console.log(selected);
    
        let filterList = allStudents.filter(function (elem) {
            return elem.course == selected;
        });
        
        displayTable(filterList);
        console.log(filterList);
        }
    

function displayTable(allStudents) {
  document.querySelector("tbody").innerHTML = "";

  allStudents.forEach(function (elem, index) {
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

    let column6 = document.createElement("td");
    column6.innerText = "Accept";
    column6.style.backgroundColor = "green";
    column6.style.color = "white";
    column6.addEventListener("click", function () {
      acceptedFunction(elem, index);
      deleteFunction(index);
    });

    let column7 = document.createElement("td");
    column7.innerText = "Reject";
    column7.style.backgroundColor = "red";
    column7.style.color = "white";
    column7.addEventListener("click", function () {
      rejectedFunction(elem, index);
      deleteFunction(index);
    });

    tableRow.append(
      column1,
      column2,
      column3,
      column4,
      column5,
      column6,
      column7
    );
    document.querySelector("tbody").append(tableRow);
  });

  function acceptedFunction(elem, index) {
    acceptedArr.push(elem);
    localStorage.setItem("admission-accepted", JSON.stringify(acceptedArr));
  }

  function rejectedFunction(elem, index) {
    rejectedArr.push(elem);
    localStorage.setItem("admission-rejected", JSON.stringify(rejectedArr));
  }

  function deleteFunction(index) {
    allStudents.splice(index, 1);
    console.log(allStudents);
    localStorage.setItem("admission", JSON.stringify(allStudents));
  }
}
