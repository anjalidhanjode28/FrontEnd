
assignment_Arr = JSON.parse(localStorage.getItem("assignment_List")) || [];

console.log(assignment_Arr);

function addAssignments(event){

    event.preventDefault();

    let assignmentObj = {
    topic: document.querySelector("#topic").value,
    type: document.querySelector("#type").value,
    duration: document.querySelector("#duration").value,
    };

    assignment_Arr.push(assignmentObj);

    localStorage.setItem("assignment_List", JSON.stringify(assignment_Arr));
}