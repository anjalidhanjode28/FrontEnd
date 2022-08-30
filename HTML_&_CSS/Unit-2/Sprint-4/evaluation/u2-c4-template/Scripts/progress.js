// Write code for the Progress page here 
let progressData = JSON.parse(localStorage.getItem("priority-list")) || [];

let progressdArr = JSON.parse(localStorage.getItem("dashBoardarr")) || [];

progressData.forEach(function(elem,index) {
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


});

function addedFunction(elem,index){
    progressdArr.push(elem);
    localStorage.setItem("done-list",JSON.stringify(progressdArr));
}

function deleteFunction(index){
    progressData.splice(index,1);
   localStorage.setItem("priority-list",JSON.stringify(progressData));
}

