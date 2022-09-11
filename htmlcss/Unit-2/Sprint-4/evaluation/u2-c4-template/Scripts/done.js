// Write code related to Done page here

let doneData = JSON.parse(localStorage.getItem("done-list")) || [];

//let progressdArr = JSON.parse(localStorage.getItem("dashBoardarr")) || [];

doneData.forEach(function(elem,index) {
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

    tr.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr);


});

localStorage.setItem("donetask-list",JSON.stringify(doneData));
