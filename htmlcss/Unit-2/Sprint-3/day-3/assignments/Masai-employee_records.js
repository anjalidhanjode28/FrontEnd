document.querySelector("form").addEventListener("submit", employeeRecords);

let taskArr = [];

function employeeRecords(event){

    event.preventDefault();
    
    let name = document.querySelector("#name").value;
    let employeeId = document.querySelector("#employeeID").value;
    let specialization = document.querySelector("#department").value;
    let expe = document.querySelector("#exp").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#mbl").value;

    console.log(name, employeeId,specialization, expe, email, mobile);

    let taskObj = {
        name : name,
        employeeId : employeeId,
        specialization : specialization,
        exp: expe,
        email : email,
        mobile : mobile
    };

    taskArr.push(taskObj);
    displayTable(taskArr);
}


function displayTable(taskArr) {

    document.querySelector("tbody").innerHTML = "";
    //console.log(taskArr.length);

    taskArr.forEach(function(elem) {
        let row = document.createElement("tr");

        let col1 = document.createElement("td");
        col1.innerText = elem.name;

        let col2 = document.createElement("td");
        col2.innerText = elem.employeeId;

        let col3 = document.createElement("td");
        col3.innerText = elem.specialization;

        let col4 = document.createElement("td");
        col4.innerText = elem.exp;

        let col5 = document.createElement("td");
        col5.innerText = elem.email;

        let col6 = document.createElement("td");
        col6.innerText = elem.mobile;

        let col7 = document.createElement("td");
        col7.innerText = "Role";
        if(elem.exp > 5){
            col7.innerText = "Senior";
        }
        else if(elem.exp >= 2 && elem.exp <= 5){
            col7.innerText = "Junior";
        }
        else{
            col7.innerText = "Fresher";
        }
        
        let col8 = document.createElement("td");
        col8.innerText = "Delete";
        col8.addEventListener("click", function(event){
            event.target.parentNode.remove();
        });

        col8.style.color = "red";
        row.append(col1, col2, col3, col4, col5, col6, col7, col8);
        document.querySelector("tbody").append(row);
        
    });
}
