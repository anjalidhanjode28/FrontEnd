let assignment_Data = JSON.parse(localStorage.getItem("assignment_List")) || [];

assignment_Data.forEach(function(elem,index){
    
    let div = document.createElement("div");

    let topic = document.createElement("h3");
    topic.innerText = elem.topic;

    let type = document.createElement("p");
    type.innerText = elem.type;

    let duration = document.createElement("p");
    duration.innerText = elem.duration;

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.style.color="red";

    remove.addEventListener("click",function(){
        removeAssignments(elem,index);
        window.location.href="showAssignmentsfor_admin.html";
    });

    div.append(topic,type,duration,remove);
    document.getElementById("assignmentsForAdmin").append(div);
});

function removeAssignments(element,index){
    assignment_Data.splice(index,1);
    console.log(assignment_Data);
    localStorage.setItem("assignment_List",JSON.stringify(assignment_Data));
}