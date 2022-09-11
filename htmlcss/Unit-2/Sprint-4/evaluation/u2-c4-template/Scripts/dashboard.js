// Write code related to dashboard page here

let dashboardData = JSON.parse(localStorage.getItem("task-list")) || [];
let dashbordArr =JSON.parse(localStorage.getItem("dashBoardarr")) || [];
displayTable(dashboardData);

document.querySelector("#filter").addEventListener("change",handleFilter);

function handleFilter(){
    let selected = document.querySelector("#filter").value;
    let filteredList = dashboardData.filter(function(elem){
        return elem.priority == selected;
    })
    displayTable(filteredList);
}

function displayTable(dashboardData){

    document.querySelector("tbody").innerHTML="";

    dashboardData.forEach(function(elem,index) {
        let tr = document.createElement("tr");
    
        let td1 = document.createElement("td");
        td1.innerText=elem.name;
    
        let td2 = document.createElement("td");
        td2.innerText=elem.desc;
    
        let td3 = document.createElement("td");
        td3.innerText=elem.start;
    
        let td4 = document.createElement("td");
        td4.innerText=elem.end;
    
        let td5 = document.createElement("td");
        td5.innerText=elem.priority;
    
        let td6 = document.createElement("td");
        td6.innerText="Add";
        td6.addEventListener("click", function(){
            addedFunction(elem,index);
        });
    
        td6.addEventListener("click", function(){
            deleteFunction(index);
        })
    
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    
        console.log(dashboardData,length);
        let total = dashboardData.length;
        document.getElementById("task-count").innerText=total;
    });
    
    function addedFunction(elem,index){
        dashbordArr.push(elem);
       localStorage.setItem("priority-list",JSON.stringify(dashbordArr));
    }
    
    function deleteFunction(index){
        dashboardData.splice(index,1);
       localStorage.setItem("task-list", JSON.stringify(dashboardData));
    }
}

