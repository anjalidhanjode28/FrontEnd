
let name = localStorage.getItem("personUsername");
let emailAddress = localStorage.getItem("personEmail");

let div = document.createElement("div");
div.append(name,emailAddress);
document.getElementById("box").append(div);