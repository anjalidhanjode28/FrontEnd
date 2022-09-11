let lecture_Data = JSON.parse(localStorage.getItem("lecture_List")) || [];

console.log(lecture_Data);

lecture_Data.forEach(function(elem,index){
    
    let div = document.createElement("div");

    let subject = document.createElement("p");
    subject.innerText = elem.subject;

    let topic = document.createElement("h3");
    topic.innerText = elem.topic;

    let time = document.createElement("p");
    time.innerText = elem.time;

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.style.color="red";

    remove.addEventListener("click",function(){
        removeLecturs(elem,index);
        window.location.href="lectursforAdmin.html";
    });
    
    div.append(subject,topic,time,remove);
    document.getElementById("addLecturesForAdmin").append(div);
});

function removeLecturs(element,index){
    lecture_Data.splice(index,1);
    console.log(lecture_Data);
    localStorage.setItem("lecture_List",JSON.stringify(lecture_Data));
}