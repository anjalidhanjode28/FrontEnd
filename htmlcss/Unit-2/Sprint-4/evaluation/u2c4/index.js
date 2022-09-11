// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",studentsPage);

let studentsArr=[];

function studentsPage(event){
    event.preventDefault();

    let studentsObj={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        gender: document.getElementById("gender").value,
        course: document.getElementById("course").value
    };

    studentsArr.push(studentsObj);
    console.log(studentsArr);
    localStorage.setItem("admission",JSON.stringify(studentsArr));

}