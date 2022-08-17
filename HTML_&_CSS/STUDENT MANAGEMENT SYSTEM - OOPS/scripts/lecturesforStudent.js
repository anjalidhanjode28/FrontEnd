let lecture_Data = JSON.parse(localStorage.getItem("lecture_List")) || [];

console.log(lecture_Data);

lecture_Data.forEach(function(elem) {

    let div = document.createElement("div");

    let subject = document.createElement("h3");
    subject.innerText = elem.subject;

    let topic = document.createElement("p");
    topic.innerText = elem.topic;

    let time = document.createElement("p");
    time.innerText = elem.time;

    let mark = document.createElement("button");
    mark.innerText = "New";
    mark.style.color = "red";

    mark.addEventListener("click",function(){
        mark.style.backgroundColor="white";
        mark.style.color="green";
        mark.innerText="Completed";
    });

    div.append(subject,topic,time,mark);
    document.getElementById("lecturforStudent").append(div);
    // window.location.href="lecturesforStudent.html";
});