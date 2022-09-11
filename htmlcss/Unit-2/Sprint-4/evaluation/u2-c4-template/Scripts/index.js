// Write code related to Home page here 

document.querySelector("form").addEventListener("submit", homePage);

let homepageArr = JSON.parse(localStorage.getItem("task-list")) || [];

function homePage(event){
    event.preventDefault();

    let homepageObj={
        name: document.getElementById("name").value,
        desc: document.getElementById("desc").value,
        start: document.getElementById("start").value,
        end: document.getElementById("end").value,
        priority: document.getElementById("priority").value,
    };
    
    homepageArr.push(homepageObj);
    localStorage.setItem("task-list",JSON.stringify(homepageArr));
    
    //console.log(homepageArr);

//     homepageArr.forEach(function(elem) {
//         let tr = document.createElement("tr");
    
//         let td1 = document.createElement("td");
//         td1.innerText=elem.name;
    
//         let td2 = document.createElement("td");
//         td2.innerText=elem.desc;
    
//         let td3 = document.createElement("td");
//         td3.innerText=elem.start;
    
//         let td4 = document.createElement("td");
//         td4.innerText=elem.end;
    
//         let td5 = document.createElement("td");
//         td5.innerText=elem.priority;
    
//         tr.append(td1,td2,td3,td4,td5);
//         //document.querySelector("tbody").append(tr);
        
//    });
   console.log(homepageArr);

}