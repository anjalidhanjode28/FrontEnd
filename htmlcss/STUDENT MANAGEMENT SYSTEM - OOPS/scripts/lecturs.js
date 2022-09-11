lecture_Arr = JSON.parse(localStorage.getItem("lecture_List")) || [];

console.log(lecture_Arr);

function addLecturs(){

    let lectureObj = {
    subject: document.querySelector("#sub").value,
    topic: document.querySelector("#topics").value,
    time: document.querySelector("#time").value,
    };

    lecture_Arr.push(lectureObj);

    localStorage.setItem("lecture_List", JSON.stringify(lecture_Arr));
}