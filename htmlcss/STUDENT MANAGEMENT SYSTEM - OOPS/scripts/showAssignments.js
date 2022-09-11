let assignment_Data = JSON.parse(localStorage.getItem("assignment_List")) || [];
assignment_Data.forEach(function(elem) {

    let div = document.createElement("div");

    let topic = document.createElement("h3");
    topic.innerText = elem.topic;

    let type = document.createElement("p");
    type.innerText = elem.type;

    let duration = document.createElement("p");
    duration.innerText = elem.duration;

    let mark = document.createElement("button");
    mark.innerText = "New";
    mark.style.color = "red";

    mark.addEventListener("click",function(){
        mark.style.backgroundColor="white";
        mark.style.color="green";
        mark.innerText="Completed";
    });

    div.append(topic,type,duration,mark);
    document.getElementById("toShowAssignents").append(div);
});
